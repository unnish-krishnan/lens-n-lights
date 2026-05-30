'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { PhotoItem } from '@/lib/photos'

interface LightboxProps {
  photos: PhotoItem[]
  activeId: string | null
  onClose: () => void
  onNavigate: (id: string) => void
}

export default function Lightbox({ photos, activeId, onClose, onNavigate }: LightboxProps) {
  const photo = photos.find((p) => p.id === activeId) ?? null
  const currentIndex = photos.findIndex((p) => p.id === activeId)

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(photos[currentIndex - 1].id)
  }, [currentIndex, onNavigate, photos])

  const goNext = useCallback(() => {
    if (currentIndex < photos.length - 1) onNavigate(photos[currentIndex + 1].id)
  }, [currentIndex, onNavigate, photos])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, goPrev, goNext])

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-10 p-2 text-white/70 hover:text-white transition-colors"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X size={26} />
          </button>

          {/* Prev */}
          {currentIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Next */}
          {currentIndex < photos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
              onClick={(e) => { e.stopPropagation(); goNext() }}
              aria-label="Next photo"
            >
              <ChevronRight size={26} />
            </button>
          )}

          {/* Image container */}
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl mx-auto px-16 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Photo */}
            <div className="relative w-full" style={{ maxHeight: '75vh' }}>
              <Image
                src={photo.imageUrl}
                alt={photo.title}
                width={1200}
                height={900}
                className="object-contain w-full max-h-[75vh] rounded-lg"
                priority
              />
            </div>

            {/* Caption bar */}
            <div className="flex items-center gap-4 pb-2">
              <span className="inline-block text-xs font-body font-medium tracking-widest uppercase bg-accent-green text-white px-2.5 py-1 rounded-full">
                {photo.category}
              </span>
              <span className="font-display text-xl font-semibold text-white">
                {photo.title}
              </span>
              {photo.description && (
                <span className="font-body text-sm text-white/50 hidden sm:inline">
                  — {photo.description}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
