'use client'

import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'

export default function StarLifecycle() {
  const stages = [
    {
      name: 'Nebula',
      icon: '🌫️',
      description: 'A cloud of gas and dust where stars are born',
      color: '#8b5cf6',
    },
    {
      name: 'Protostar',
      icon: '🔥',
      description: 'Gas and dust collapse under gravity, heating up',
      color: '#f59e0b',
    },
    {
      name: 'Main Sequence',
      icon: '☀️',
      description: 'Stable star burning hydrogen (like our Sun)',
      color: '#fbbf24',
    },
    {
      name: 'Red Giant',
      icon: '🔴',
      description: 'Star expands as it runs out of hydrogen',
      color: '#ef4444',
    },
    {
      name: 'Planetary Nebula',
      icon: '🌈',
      description: 'Outer layers shed, creating colorful clouds',
      color: '#ec4899',
    },
    {
      name: 'White Dwarf',
      icon: '⚪',
      description: 'Small, dense core left behind',
      color: '#f0f8ff',
    },
  ]

  const massiveStarPath = [
    {
      name: 'Supernova',
      icon: '💥',
      description: 'Massive explosion when giant stars die',
      color: '#f97316',
    },
    {
      name: 'Neutron Star / Black Hole',
      icon: '⚫',
      description: 'Ultra-dense remnant or a region of extreme gravity',
      color: '#1f2937',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Regular Star Path */}
      <Card>
        <h3 className="text-xl font-bold mb-6 text-center">
          🌟 Small to Medium Stars (like our Sun)
        </h3>
        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-nebula-purple via-star-blue to-cosmic-pink"></div>
          
          {/* Stages */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2 border-2"
                  style={{ 
                    backgroundColor: `${stage.color}20`, 
                    borderColor: stage.color 
                  }}
                >
                  {stage.icon}
                </div>
                <p className="text-sm font-bold text-center" style={{ color: stage.color }}>
                  {stage.name}
                </p>
                <p className="text-xs text-text-secondary text-center mt-1">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>

      {/* Massive Star Path */}
      <Card>
        <h3 className="text-xl font-bold mb-6 text-center">
          💥 Massive Stars (8+ times the Sun's mass)
        </h3>
        <p className="text-sm text-text-secondary text-center mb-6">
          Massive stars follow the same path until the Red Giant stage, then...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {massiveStarPath.map((stage, index) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center p-6 bg-space-hover rounded-lg"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 border-2"
                style={{ 
                  backgroundColor: `${stage.color}20`, 
                  borderColor: stage.color 
                }}
              >
                {stage.icon}
              </div>
              <p className="text-lg font-bold text-center mb-2" style={{ color: stage.color }}>
                {stage.name}
              </p>
              <p className="text-sm text-text-secondary text-center">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Analogy Card */}
      <Card className="bg-gradient-to-r from-nebula-purple/10 to-star-blue/10">
        <h3 className="text-lg font-bold mb-3 text-center">
          💡 Think of it like this:
        </h3>
        <p className="text-sm text-text-secondary text-center">
          A star's life is like a campfire. It starts with fuel (hydrogen), burns steadily for a long time, 
          then eventually runs out of fuel. Small stars fade away quietly (like embers), while massive stars 
          go out with a bang (supernova)!
        </p>
      </Card>
    </div>
  )
}