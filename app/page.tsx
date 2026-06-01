'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import Hero from '@/components/Hero'
import CategoryTabs from '@/components/CategoryTabs'
import PhotoGrid from '@/components/PhotoGrid'
import Lightbox from '@/components/Lightbox'
import UploadModal from '@/components/UploadModal'
import UploadFAB from '@/components/UploadFAB'
import ToastNotification from '@/components/ToastNotification'
import { SAMPLE_PHOTOS, type PhotoItem } from '@/lib/photos'

// ─── Secret admin unlock ─────────────────────────────────────────────────────
// Press Shift+U three times within 2 seconds to reveal the upload button.
// Stored in sessionStorage — resets automatically when the tab is closed.
const ADMIN_KEY = 'U'
const ADMIN_PRESSES_NEEDED = 3
const ADMIN_WINDOW_MS = 2000
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [photos, setPhotos] = useState<PhotoItem[]>(SAMPLE_PHOTOS)
  const [lightboxId, setLightboxId] = useState<string | null>(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const pressTimestamps = useRef<number[]>([])

  // Load uploaded photos from localStorage on mount + restore admin session
  useEffect(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem('portfolioPhotos') ?? '[]'
      ) as PhotoItem[]
      if (stored.length > 0) {
        setPhotos((prev) => {
          const existingIds = new Set(prev.map((p) => p.id))
          const newOnes = stored.filter((p) => !existingIds.has(p.id))
          return [...prev, ...newOnes]
        })
      }
    } catch {
      // localStorage unavailable
    }

    // Restore admin state for the current tab session (survives refresh, not tab close)
    if (sessionStorage.getItem('lnl_admin') === '1') setIsAdmin(true)
  }, [])

  // Sync across tabs
  useEffect(() => {
    const handler = () => {
      try {
        const stored = JSON.parse(
          localStorage.getItem('portfolioPhotos') ?? '[]'
        ) as PhotoItem[]
        setPhotos(() => {
          const uploadedIds = new Set(stored.map((p) => p.id))
          const base = SAMPLE_PHOTOS.filter((p) => !uploadedIds.has(p.id))
          return [...base, ...stored]
        })
      } catch { /* empty */ }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  // Secret keypress listener — Shift+U × 3 within 2 seconds unlocks the FAB
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toUpperCase() === ADMIN_KEY) {
        const now = Date.now()
        pressTimestamps.current.push(now)
        // Discard presses older than the time window
        pressTimestamps.current = pressTimestamps.current.filter(
          (t) => now - t < ADMIN_WINDOW_MS
        )
        if (pressTimestamps.current.length >= ADMIN_PRESSES_NEEDED) {
          pressTimestamps.current = []
          setIsAdmin(true)
          sessionStorage.setItem('lnl_admin', '1')
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const filteredPhotos = useMemo(
    () =>
      activeCategory === 'All'
        ? photos
        : photos.filter((p) => p.category === activeCategory),
    [photos, activeCategory]
  )

  const handlePhotoAdded = (photo: PhotoItem) => {
    setPhotos((prev) => [...prev, photo])
    setShowToast(true)
  }

  return (
    <>
      <Hero />

      <section id="gallery" className="min-h-screen">
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <PhotoGrid
            photos={filteredPhotos}
            onPhotoClick={(id) => setLightboxId(id)}
          />
        </div>
      </section>

      {/* About section */}
      <section
        id="about"
        className="bg-white border-t border-light-gray py-24 px-6"
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <span className="inline-block font-body text-xs font-medium tracking-[0.25em] uppercase text-accent-green">
            About
          </span>
          <h2 className="font-display text-display-lg font-semibold text-dark-text">
            Chasing Light
          </h2>
          <p className="font-body text-base text-muted-gray leading-relaxed">
            Every photograph is an act of attention — a moment of stillness
            carved from the relentless flow of time. I wander forest floors,
            riverbanks, and high ridgelines with one purpose: to find the
            light that makes the ordinary luminous.
          </p>
          <p className="font-body text-base text-muted-gray leading-relaxed">
            This portfolio is a living archive of those encounters. Each image
            is a conversation between light, time, and place — captured as
            faithfully as the moment allowed.
          </p>
        </div>
      </section>

      <Lightbox
        photos={filteredPhotos}
        activeId={lightboxId}
        onClose={() => setLightboxId(null)}
        onNavigate={(id) => setLightboxId(id)}
      />

      {/* Upload FAB — hidden from public. Unlock: Shift+U × 3 within 2 seconds */}
      {isAdmin && <UploadFAB onClick={() => setShowUploadModal(true)} />}

      <UploadModal
        open={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onPhotoAdded={handlePhotoAdded}
      />

      <ToastNotification
        show={showToast}
        onDismiss={() => setShowToast(false)}
      />
    </>
  )
}
