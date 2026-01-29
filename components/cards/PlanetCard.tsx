'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import { Planet } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'

interface PlanetCardProps {
  planet: Planet
}

export default function PlanetCard({ planet }: PlanetCardProps) {
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
        {/* Planet Icon */}
        <div 
          className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-5xl"
          style={{ backgroundColor: `${planet.color}20`, border: `2px solid ${planet.color}` }}
        >
          🪐
        </div>

        {/* Planet Name */}
        <h3 className="text-2xl font-bold text-center mb-1" style={{ color: planet.color }}>
          {planet.name}
        </h3>
        <p className="text-sm text-text-secondary text-center mb-4 italic">
          {planet.nickname}
        </p>

        {/* Quick Stats */}
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-text-secondary">📍</span>
            <span className="text-text-secondary">{planet.distance}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-text-secondary">📏</span>
            <span className="text-text-secondary">{planet.size}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-text-secondary">🌡️</span>
            <span className="text-text-secondary">{planet.temperature}</span>
          </div>
        </div>

        {/* Expandable Fun Fact */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-space-hover">
                <p className="text-xs font-bold text-cosmic-pink mb-2">💡 Did You Know?</p>
                <p className="text-sm text-text-secondary">{planet.funFact}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click Hint */}
        <p className="text-xs text-center text-text-secondary mt-4 opacity-60">
          {isExpanded ? 'Click to collapse' : 'Click for fun fact'}
        </p>
      </Card>
    </motion.div>
  )
}