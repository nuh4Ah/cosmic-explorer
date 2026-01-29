import PageLayout from '@/components/layout/PageLayout'
import PlanetCard from '@/components/cards/PlanetCard'
import { planets } from '@/lib/constants'

export const metadata = {
  title: 'Planets | Cosmic Explorer',
  description: 'Explore the planets in our solar system from Mercury to Neptune.',
}

export default function PlanetsPage() {
  return (
    <PageLayout className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          The Planets of Our{' '}
          <span className="text-gradient">Solar System</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Eight incredible worlds orbiting our Sun. From scorching Mercury to icy Neptune, 
          each planet has its own unique story to tell.
        </p>
      </div>

      {/* Solar System Overview */}
      <div className="mb-16 bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Cosmic Neighborhood</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 py-8">
          {planets.map((planet, index) => (
            <div key={planet.id} className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full shadow-lg transition-transform hover:scale-125"
                style={{ 
                  backgroundColor: planet.color,
                  boxShadow: `0 0 20px ${planet.color}80`,
                  width: planet.id === 'jupiter' ? '48px' : planet.id === 'saturn' ? '40px' : '32px',
                  height: planet.id === 'jupiter' ? '48px' : planet.id === 'saturn' ? '40px' : '32px'
                }}
                title={planet.name}
              />
              {index < planets.length - 1 && (
                <div className="w-4 h-0.5 bg-gradient-to-r from-space-hover to-transparent" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-text-secondary text-sm mt-4">
          ☀️ The Sun is at the center, with all planets orbiting in the same direction
        </p>
      </div>

      {/* Planet Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {planets.map((planet) => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>

      {/* Fun Facts Section */}
      <div className="bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover">
        <h2 className="text-2xl font-bold mb-6 text-center">Amazing Planet Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-nebula-purple">🎯 Closest to the Sun</h3>
            <p className="text-text-secondary">Mercury orbits just 58 million km from the Sun — that's closer than any other planet!</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-star-blue">🌍 Most Earth-like</h3>
            <p className="text-text-secondary">Mars is our best bet for finding past or present life. NASA rovers are exploring it right now!</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-cosmic-pink">🐍 Largest Planet</h3>
            <p className="text-text-secondary">Jupiter is so big that all the other planets could fit inside it with room to spare!</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-nebula-purple">💍 Most Beautiful Rings</h3>
            <p className="text-text-secondary">Saturn's rings are made of billions of ice particles, some as small as dust, others as big as mountains!</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}