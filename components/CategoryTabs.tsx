'use client'

import { motion } from 'framer-motion'
import { CATEGORIES } from '@/lib/categories'

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <ul
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1"
          role="tablist"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <li key={cat} role="none">
                <button
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onCategoryChange(cat)}
                  className={`relative px-4 py-3 text-sm font-body whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-green font-semibold'
                      : 'text-muted-gray hover:text-dark-text'
                  }`}
                >
                  {cat}
                  {isActive && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
