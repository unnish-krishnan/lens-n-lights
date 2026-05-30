'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Maximize2 } from 'lucide-react'
import type { PhotoItem } from '@/lib/photos'

interface PhotoCardProps {
  photo: PhotoItem
  onClick: (id: string) => void
}

const PhotoCard = forwardRef<HTMLDivElement, PhotoCardProps>(function PhotoCard({ photo, onClick }, _ref) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="masonry-item"
    >
      <div
        className="relative overflow-hidden rounded-xl cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-300 bg-light-gray group"
        onClick={() => onClick(photo.id)}
        role="button"
        tabIndex={0}
        aria-label={`View ${photo.title}`}
        onKeyDown={(e) => e.key === 'Enter' && onClick(photo.id)}
      >
        {/* Image */}
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-brand-green/60 flex flex-col items-start justify-end p-4 gap-2"
        >
          <span className="inline-block text-xs font-body font-medium tracking-widest uppercase bg-accent-green text-white px-2.5 py-1 rounded-full">
            {photo.category}
          </span>
          <div className="flex items-center justify-between w-full">
            <span className="font-display text-lg font-semibold text-white leading-tight">
              {photo.title}
            </span>
            <Maximize2 size={18} className="text-white/80 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
})

export default PhotoCard
