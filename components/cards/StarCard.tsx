'use client'

import Card from '@/components/ui/Card'
import { StarType } from '@/lib/constants'
import { motion } from 'framer-motion'

interface StarCardProps {
  star: StarType
}

export default function StarCard({ star }: StarCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <Card hover className="h-full">
        {/* Star Icon */}
        <div 
          className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl"
          style={{ 
            backgroundColor: `${star.color}20`, 
            border: `2px solid ${star.color}`,
            boxShadow: `0 0 20px ${star.color}40`
          }}
        >
          ⭐
        </div>

        {/* Star Name */}
        <h3 className="text-xl font-bold text-center mb-3" style={{ color: star.color }}>
          {star.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-4">
          {star.description}
        </p>

        {/* Stats */}
        <div className="space-y-2 text-sm mb-4">
          <div>
            <span className="text-text-secondary">🌡️ Temperature: </span>
            <span className="font-medium">{star.temperature}</span>
          </div>
          <div>
            <span className="text-text-secondary">📏 Size: </span>
            <span className="font-medium">{star.size}</span>
          </div>
        </div>

        {/* Examples */}
        <div className="border-t border-space-hover pt-3">
          <p className="text-xs font-bold text-cosmic-pink mb-2">Examples:</p>
          <div className="flex flex-wrap gap-2">
            {star.examples.map((example) => (
              <span 
                key={example}
                className="text-xs px-2 py-1 bg-space-hover rounded"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}