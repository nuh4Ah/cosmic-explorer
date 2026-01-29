'use client'

import { useState } from 'react'
import { planets } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)

  // Planet positions (simplified orbital distances)
  const planetPositions = [
    { id: 'mercury', cx: 120, cy: 200, r: 8 },
    { id: 'venus', cx: 160, cy: 200, r: 12 },
    { id: 'earth', cx: 210, cy: 200, r: 12 },
    { id: 'mars', cx: 260, cy: 200, r: 10 },
    { id: 'jupiter', cx: 340, cy: 200, r: 28 },
    { id: 'saturn', cx: 420, cy: 200, r: 24 },
    { id: 'uranus', cx: 490, cy: 200, r: 18 },
    { id: 'neptune', cx: 550, cy: 200, r: 18 },
  ]

  const getPlanetData = (id: string) => planets.find(p => p.id === id)

  return (
    <div className="relative w-full bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover overflow-x-auto">
      <svg
        viewBox="0 0 650 400"
        className="w-full h-auto"
        role="img"
        aria-label="Interactive solar system diagram"
      >
        {/* Sun */}
        <motion.circle
          cx="50"
          cy="200"
          r="40"
          fill="#FDB813"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <text x="50" y="265" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">
          Sun
        </text>

        {/* Orbital paths */}
        {planetPositions.map((pos) => (
          <ellipse
            key={`orbit-${pos.id}`}
            cx="50"
            cy="200"
            rx={pos.cx - 50}
            ry="80"
            fill="none"
            stroke="rgba(148, 163, 184, 0.2)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        ))}

        {/* Planets */}
        {planetPositions.map((pos) => {
          const planetData = getPlanetData(pos.id)
          if (!planetData) return null

          const isSelected = selectedPlanet === pos.id

          return (
            <g key={pos.id}>
              <motion.circle
                cx={pos.cx}
                cy={pos.cy}
                r={pos.r}
                fill={planetData.color}
                stroke={isSelected ? '#fff' : 'transparent'}
                strokeWidth={isSelected ? 3 : 0}
                className="cursor-pointer"
                onClick={() => setSelectedPlanet(pos.id)}
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: planetPositions.indexOf(pos) * 0.1 }}
              />
              <text
                x={pos.cx}
                y={pos.cy + pos.r + 20}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="12"
                className="pointer-events-none"
              >
                {planetData.name}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Planet Info Panel */}
      {selectedPlanet && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-space-hover rounded-lg border border-nebula-purple"
        >
          {(() => {
            const planet = getPlanetData(selectedPlanet)
            if (!planet) return null

            return (
              <>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold" style={{ color: planet.color }}>
                    {planet.name} - {planet.nickname}
                  </h3>
                  <button
                    onClick={() => setSelectedPlanet(null)}
                    className="text-text-secondary hover:text-text-primary"
                    aria-label="Close planet info"
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-text-secondary">📍 Distance:</p>
                    <p className="font-medium">{planet.distance}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary">📏 Size:</p>
                    <p className="font-medium">{planet.size}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary">🌡️ Temperature:</p>
                    <p className="font-medium">{planet.temperature}</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-space-card rounded">
                  <p className="text-xs font-bold text-cosmic-pink mb-1">💡 Fun Fact:</p>
                  <p className="text-sm text-text-secondary">{planet.funFact}</p>
                </div>
              </>
            )
          })()}
        </motion.div>
      )}

      <p className="text-xs text-center text-text-secondary mt-4">
        Click on any planet to learn more about it
      </p>
    </div>
  )
}