'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      {/* Content */}
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <motion.span
          {...fadeUp(0)}
          className="inline-block font-body text-xs font-medium tracking-[0.25em] uppercase text-accent-green bg-light-green px-4 py-1.5 rounded-full"
        >
          Photography Portfolio
        </motion.span>

        <motion.h1
          {...fadeUp(0.15)}
          className="font-display font-semibold text-display-xl text-dark-text leading-none"
        >
          Moments.{' '}
          <span className="italic text-brand-green">Framed.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="font-body text-base md:text-lg text-muted-gray max-w-xl leading-relaxed"
        >
          A curated collection of nature, wildlife, and landscape photography —
          each frame a quiet conversation between light, time, and place.
        </motion.p>

        <motion.div {...fadeUp(0.45)}>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-brand-green text-white font-body text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95 shadow-md"
          >
            Explore Gallery
          </a>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow"
      >
        <a href="#gallery" aria-label="Scroll down">
          <ChevronDown size={28} className="text-muted-gray" />
        </a>
      </motion.div>
    </section>
  )
}
