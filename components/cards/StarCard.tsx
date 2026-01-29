'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import { StarType } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'

interface StarCardProps {
  star: StarType
}

export default function StarCard({ star }: StarCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        hover 
        className="h-full cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Star Icon */}
        <div 
          className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl"
          style={{ backgroundColor: `${star.color}30`, border: `2px solid ${star.color}` }}
        >
          ⭐
        </div>

        {/* Star Name */}
        <h3 className="text-2xl font-bold text-center mb-4" style={{ color: star.color }}>
          {star.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-4 text-center">
          {star.description}
        </p>

        {/* Quick Stats */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">🌡️ Temperature:</span>
            <span className="font-medium">{star.temperature}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">📏 Size:</span>
            <span className="font-medium">{star.size}</span>
          </div>
        </div>

        {/* Expandable Examples */}
        <AnimatePresence>
          {isExpanded && star.examples && star.examples.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-space-hover">
                <p className="text-xs font-bold text-cosmic-pink mb-2">🌟 Examples:</p>
                <p className="text-sm text-text-secondary">{star.examples.join(', ')}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click Hint */}
        <p className="text-xs text-center text-text-secondary mt-4 opacity-60">
          {isExpanded ? 'Click to collapse' : 'Click for examples'}
        </p>
      </Card>
    </motion.div>
  )
}