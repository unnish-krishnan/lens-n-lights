'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface ToastNotificationProps {
  show: boolean
  message?: string
  onDismiss: () => void
}

export default function ToastNotification({
  show,
  message = 'Photo added to your gallery!',
  onDismiss,
}: ToastNotificationProps) {
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(onDismiss, 3000)
    return () => clearTimeout(timer)
  }, [show, onDismiss])

  return (
    <div className="fixed bottom-8 left-8 z-[200] pointer-events-none">
      <AnimatePresence>
        {show && (
          <motion.div
            key="toast"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 bg-brand-green text-white px-5 py-3.5 rounded-xl shadow-modal pointer-events-auto"
          >
            <CheckCircle size={18} className="flex-shrink-0" />
            <span className="font-body text-sm font-medium">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
