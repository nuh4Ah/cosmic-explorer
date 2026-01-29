import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import PlanetCard from '@/components/cards/PlanetCard'
import SolarSystem from '@/components/interactive/SolarSystem'
import { planets } from '@/lib/constants'

export const metadata = {
  title: 'Planets | Cosmic Explorer',
  description: 'Explore the planets of our solar system from Mercury to Neptune. Learn fascinating facts about each world.',
}

export default function PlanetsPage() {
  return (
    <>
      <StarfieldBg />
      <PageLayout>
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="text-gradient">Planets</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Journey through our solar system and discover eight incredible worlds, each with its own unique story.
            </p>
          </div>

          {/* Solar System Visualization */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Our Solar System
            </h2>
            <SolarSystem />
          </div>

          {/* Planet Cards Grid */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Explore Each Planet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {planets.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} />
              ))}
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Did You Know? 🌟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-nebula-purple mb-2">4.6B</p>
                <p className="text-text-secondary">Years old (our solar system)</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-star-blue mb-2">8</p>
                <p className="text-text-secondary">Planets orbiting the Sun</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-cosmic-pink mb-2">200+</p>
                <p className="text-text-secondary">Known moons in our solar system</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-nebula-purple mb-2">1.4M km</p>
                <p className="text-text-secondary">Diameter of the Sun</p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}