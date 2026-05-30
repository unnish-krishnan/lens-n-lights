'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ImagePlus } from 'lucide-react'
import { CATEGORIES } from '@/lib/categories'
import type { PhotoItem } from '@/lib/photos'

interface UploadModalProps {
  open: boolean
  onClose: () => void
  onPhotoAdded: (photo: PhotoItem) => void
}

export default function UploadModal({ open, onClose, onPhotoAdded }: UploadModalProps) {
  const [dragging, setDragging] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Nature')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    setDragging(false)
    setPreview(null)
    setFile(null)
    setTitle('')
    setCategory('Nature')
    setDescription('')
    setLoading(false)
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  const loadFile = (f: File) => {
    if (!f.type.startsWith('image/')) return
    setFile(f)
    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target?.result as string)
    reader.readAsDataURL(f)
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files[0]
    if (f) loadFile(f)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !title.trim()) return
    setLoading(true)

    const reader = new FileReader()
    reader.onload = () => {
      const base64 = reader.result as string
      const newPhoto: PhotoItem = {
        id: `upload_${Date.now()}`,
        title: title.trim(),
        category,
        imageUrl: base64,
        description: description.trim(),
        isUploaded: true,
      }

      const stored: PhotoItem[] = JSON.parse(
        localStorage.getItem('portfolioPhotos') ?? '[]'
      )
      localStorage.setItem('portfolioPhotos', JSON.stringify([...stored, newPhoto]))

      onPhotoAdded(newPhoto)
      reset()
      onClose()
    }
    reader.readAsDataURL(file)
  }

  const categoryOptions = CATEGORIES.filter((c) => c !== 'All')

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-modal overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-light-gray">
              <h2 className="font-display text-2xl font-semibold text-dark-text">
                Add to Gallery
              </h2>
              <button
                onClick={handleClose}
                className="p-1.5 text-muted-gray hover:text-dark-text transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4">
              {/* Drop zone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-xl cursor-pointer transition-colors duration-200 flex items-center justify-center overflow-hidden ${
                  dragging
                    ? 'border-accent-green bg-light-green/40'
                    : 'border-light-gray hover:border-accent-green bg-off-white'
                }`}
                style={{ minHeight: '160px' }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && loadFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
                {preview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover max-h-48"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 py-8 text-muted-gray">
                    <ImagePlus size={32} className="text-accent-green" />
                    <p className="font-body text-sm text-center">
                      <span className="font-medium text-dark-text">Click to upload</span>
                      {' '}or drag and drop
                    </p>
                    <p className="font-body text-xs">PNG, JPG, WEBP up to 10MB</p>
                  </div>
                )}
              </div>

              {/* Title */}
              <div>
                <label className="block font-body text-xs font-medium text-dark-text mb-1.5 tracking-wide uppercase">
                  Photo Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a title…"
                  required
                  className="w-full font-body text-sm border border-light-gray rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-green/40 focus:border-accent-green transition-colors"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block font-body text-xs font-medium text-dark-text mb-1.5 tracking-wide uppercase">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full font-body text-sm border border-light-gray rounded-lg px-3.5 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-accent-green/40 focus:border-accent-green transition-colors appearance-none cursor-pointer"
                >
                  {categoryOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block font-body text-xs font-medium text-dark-text mb-1.5 tracking-wide uppercase">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="A brief note about this photo…"
                  rows={3}
                  className="w-full font-body text-sm border border-light-gray rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-green/40 focus:border-accent-green transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!file || !title.trim() || loading}
                className="w-full bg-brand-green text-white font-body text-sm font-medium py-3 rounded-lg transition-all duration-200 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
              >
                {loading ? 'Adding…' : 'Add to Gallery'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
