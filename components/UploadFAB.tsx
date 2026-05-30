'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload } from 'lucide-react'

interface UploadFABProps {
  onClick: () => void
}

export default function UploadFAB({ onClick }: UploadFABProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <motion.span
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
        transition={{ duration: 0.2 }}
        className="font-body text-xs font-medium bg-dark-text text-white px-3 py-1.5 rounded-lg pointer-events-none"
      >
        Upload Photo
      </motion.span>

      {/* Button */}
      <div className="relative">
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full bg-accent-green animate-ping opacity-30" />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Upload photo"
          className="relative w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <Upload size={20} />
        </motion.button>
      </div>
    </div>
  )
}
