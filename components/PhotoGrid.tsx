'use client'

import { AnimatePresence } from 'framer-motion'
import PhotoCard from './PhotoCard'
import type { PhotoItem } from '@/lib/photos'

interface PhotoGridProps {
  photos: PhotoItem[]
  onPhotoClick: (id: string) => void
}

export default function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <span className="text-5xl mb-4">🌿</span>
        <p className="font-display text-2xl text-muted-gray">No photos in this category yet.</p>
        <p className="font-body text-sm text-muted-gray mt-2">Upload your first photo to get started.</p>
      </div>
    )
  }

  return (
    <div className="masonry-grid">
      <AnimatePresence mode="popLayout">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onClick={onPhotoClick}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
