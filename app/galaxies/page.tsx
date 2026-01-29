import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'
import { galaxies } from '@/lib/constants'

export const metadata = {
  title: 'Galaxies | Cosmic Explorer',
  description: 'Journey through the Milky Way and explore the different types of galaxies in our universe.',
}

export default function GalaxiesPage() {
  const galaxyTypes = [
    {
      type: 'Spiral',
      icon: '🌀',
      description: 'Flat, rotating disks with spiral arms extending from a central bulge. Like cosmic pinwheels!',
      examples: ['Milky Way', 'Andromeda', 'Whirlpool'],
      color: '#8b5cf6',
    },
    {
      type: 'Elliptical',
      icon: '🥚',
      description: 'Smooth, featureless galaxies ranging from nearly spherical to football-shaped.',
      examples: ['M87', 'M49', 'NGC 4472'],
      color: '#3b82f6',
    },
    {
      type: 'Irregular',
      icon: '✨',
      description: 'Galaxies with no regular shape, often distorted by gravitational interactions.',
      examples: ['Large Magellanic Cloud', 'Small Magellanic Cloud'],
      color: '#ec4899',
    },
  ]

  return (
    <>
      <StarfieldBg />
      <PageLayout>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="text-gradient">Galaxies</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Explore the vast collections of stars, gas, and dust that make up our cosmic neighborhoods.
            </p>
          </div>

          {/* What is a Galaxy? */}
          <Card className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">🌌 What Is a Galaxy?</h2>
            <p className="text-text-secondary text-lg mb-4">
              A galaxy is a massive system of stars, gas, dust, and dark matter all held together by gravity. 
              Galaxies come in many shapes and sizes, from small dwarf galaxies with just a few million stars 
              to giants containing trillions of stars.
            </p>
            <p className="text-text-secondary text-lg">
              The universe contains at least <span className="font-bold text-nebula-purple">2 trillion galaxies</span>, 
              each with its own unique story!
            </p>
          </Card>

          {/* Galaxy Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Types of Galaxies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galaxyTypes.map((galaxy) => (
                <Card key={galaxy.type} hover className="h-full">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{galaxy.icon}</div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: galaxy.color }}>
                      {galaxy.type}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {galaxy.description}
                    </p>
                    <div className="border-t border-space-hover pt-3">
                      <p className="text-xs font-bold text-cosmic-pink mb-2">Examples:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {galaxy.examples.map((example) => (
                          <span 
                            key={example}
                            className="text-xs px-2 py-1 bg-space-hover rounded"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Famous Galaxies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Famous Galaxies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galaxies.map((galaxy) => (
                <Card key={galaxy.id} hover className="h-full">
                  <div 
                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl"
                    style={{ 
                      backgroundColor: `${galaxy.color}20`, 
                      border: `2px solid ${galaxy.color}`,
                      boxShadow: `0 0 20px ${galaxy.color}40`
                    }}
                  >
                    🌌
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-2" style={{ color: galaxy.color }}>
                    {galaxy.name}
                  </h3>
                  
                  <p className="text-sm text-center text-text-secondary italic mb-3">
                    {galaxy.type}
                  </p>
                  
                  <p className="text-sm text-text-secondary mb-4">
                    {galaxy.description}
                  </p>
                  
                  <div className="space-y-2 text-sm mb-3">
                    <div>
                      <span className="text-text-secondary">📍 Distance: </span>
                      <span className="font-medium">{galaxy.distance}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-space-hover pt-3">
                    <p className="text-xs font-bold text-cosmic-pink mb-1">💡 Fun Fact:</p>
                    <p className="text-xs text-text-secondary">{galaxy.funFact}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Milky Way Deep Dive */}
          <Card className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Home: The Milky Way</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-nebula-purple">Structure</h3>
                <p className="text-text-secondary text-sm mb-4">
                  The Milky Way is a barred spiral galaxy with a diameter of about 100,000 light-years. 
                  It has a central bar-shaped structure surrounded by spiral arms where new stars are born.
                </p>
                <h3 className="text-xl font-bold mb-3 text-star-blue">Our Location</h3>
                <p className="text-text-secondary text-sm">
                  We're located in the Orion Arm, about 26,000 light-years from the galactic center. 
                  It takes our Sun about 225-250 million years to complete one orbit around the center!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-cosmic-pink">Population</h3>
                <p className="text-text-secondary text-sm mb-4">
                  The Milky Way contains 200-400 billion stars, billions of planets, and a supermassive 
                  black hole at its center called Sagittarius A*.
                </p>
                <h3 className="text-xl font-bold mb-3 text-nebula-purple">The Future</h3>
                <p className="text-text-secondary text-sm">
                  In about 4.5 billion years, the Milky Way will collide and merge with the Andromeda 
                  Galaxy, forming a new elliptical galaxy sometimes called "Milkomeda"!
                </p>
              </div>
            </div>
          </Card>

          {/* Fun Facts */}
          <Card>
            <h2 className="text-2xl font-bold mb-6 text-center">Did You Know? ✨</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-nebula-purple mb-2">2T+</p>
                <p className="text-text-secondary text-sm">Galaxies in the observable universe</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-star-blue mb-2">100B+</p>
                <p className="text-text-secondary text-sm">Stars in an average galaxy</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-cosmic-pink mb-2">100,000</p>
                <p className="text-text-secondary text-sm">Light-years across (Milky Way)</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-nebula-purple mb-2">2.5M</p>
                <p className="text-text-secondary text-sm">Light-years to Andromeda</p>
              </div>
            </div>
          </Card>
        </section>
      </PageLayout>
    </>
  )
}