import Card from '@/components/ui/Card'
import { Planet } from '@/lib/constants'

interface PlanetCardProps {
  planet: Planet
}

export default function PlanetCard({ planet }: PlanetCardProps) {
  return (
    <Card hover className="h-full">
      <div className="space-y-4">
        {/* Planet Icon/Color */}
        <div 
          className="w-16 h-16 rounded-full mx-auto shadow-lg"
          style={{ 
            backgroundColor: planet.color,
            boxShadow: `0 0 30px ${planet.color}50`
          }}
        />

        {/* Planet Name */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-1">{planet.name}</h3>
          <p className="text-text-secondary text-sm italic">{planet.nickname}</p>
        </div>

        {/* Quick Facts */}
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-nebula-purple">📍</span>
            <div>
              <span className="text-text-secondary">Distance: </span>
              <span className="font-mono">{planet.distance}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <span className="text-star-blue">📏</span>
            <div>
              <span className="text-text-secondary">Size: </span>
              <span className="font-mono">{planet.size}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <span className="text-cosmic-pink">🌡️</span>
            <div>
              <span className="text-text-secondary">Temp: </span>
              <span className="font-mono">{planet.temperature}</span>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="pt-4 border-t border-space-hover">
          <p className="text-xs font-bold text-nebula-purple mb-2">💡 Did You Know?</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            {planet.funFact}
          </p>
        </div>
      </div>
    </Card>
  )
}