import PageLayout from '@/components/layout/PageLayout'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Galaxies | Cosmic Explorer',
  description: 'Explore galaxies including the Milky Way, Andromeda, and learn about different galaxy types.',
}

const galaxyTypes = [
  {
    id: 'spiral',
    name: 'Spiral Galaxies',
    emoji: '🌀',
    description: 'Beautiful pinwheel-shaped galaxies with swirling arms of stars, gas, and dust.',
    characteristics: 'Active star formation, rotating disk, central bulge',
    examples: ['Milky Way', 'Andromeda (M31)', 'Whirlpool (M51)'],
    color: '#8b5cf6',
  },
  {
    id: 'elliptical',
    name: 'Elliptical Galaxies',
    emoji: '🥚',
    description: 'Smooth, featureless galaxies shaped like footballs or spheres.',
    characteristics: 'Older stars, little gas/dust, minimal star formation',
    examples: ['M87', 'M49', 'NGC 4472'],
    color: '#f59e0b',
  },
  {
    id: 'irregular',
    name: 'Irregular Galaxies',
    emoji: '🧩',
    description: 'Chaotic galaxies with no defined shape, often distorted by collisions.',
    characteristics: 'Active star formation, rich in gas, unusual shapes',
    examples: ['Large Magellanic Cloud', 'Small Magellanic Cloud', 'NGC 1427A'],
    color: '#ec4899',
  },
]

const famousGalaxies = [
  {
    name: 'Andromeda Galaxy',
    designation: 'M31',
    description: 'Our closest major galactic neighbor. In 4 billion years, it will collide with the Milky Way!',
    distance: '2.5 million light-years',
    size: '220,000 light-years across',
    funFact: 'You can see it with your naked eye on a dark night!',
    emoji: '🌌',
  },
  {
    name: 'Whirlpool Galaxy',
    designation: 'M51',
    description: 'A stunning face-on spiral galaxy interacting with a smaller companion galaxy.',
    distance: '23 million light-years',
    size: '76,000 light-years across',
    funFact: 'First galaxy to have its spiral structure identified!',
    emoji: '🌀',
  },
  {
    name: 'Sombrero Galaxy',
    designation: 'M104',
    description: 'Named for its resemblance to a Mexican hat, with a bright core and dark dust lane.',
    distance: '29 million light-years',
    size: '50,000 light-years across',
    funFact: 'Has a supermassive black hole 1 billion times the Sun\'s mass!',
    emoji: '🎪',
  },
]

export default function GalaxiesPage() {
  return (
    <PageLayout className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Galaxies: Islands of{' '}
          <span className="text-gradient">Stars</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Massive collections of billions or trillions of stars, held together by gravity. 
          Our home galaxy, the Milky Way, is just one among hundreds of billions!
        </p>
      </div>

      {/* What is a Galaxy */}
      <div className="mb-16 bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover">
        <h2 className="text-2xl font-bold mb-4 text-center">What Is a Galaxy?</h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-6">
          A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems, 
          all held together by gravity. The smallest galaxies have just a few million stars, 
          while the largest contain trillions!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="text-3xl">🌟</div>
            <h3 className="font-bold text-nebula-purple">200+ Billion</h3>
            <p className="text-sm text-text-secondary">Galaxies in the observable universe</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">⭐</div>
            <h3 className="font-bold text-star-blue">100-400 Billion</h3>
            <p className="text-sm text-text-secondary">Stars in the Milky Way</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🔭</div>
            <h3 className="font-bold text-cosmic-pink">100,000 Light-Years</h3>
            <p className="text-sm text-text-secondary">Diameter of our galaxy</p>
          </div>
        </div>
      </div>

      {/* Galaxy Types */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Types of Galaxies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galaxyTypes.map((type) => (
            <Card key={type.id} hover>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-5xl mb-3">{type.emoji}</div>
                  <h3 className="text-xl font-bold" style={{ color: type.color }}>
                    {type.name}
                  </h3>
                </div>
                
                <p className="text-text-secondary text-sm">{type.description}</p>
                
                <div className="pt-3 border-t border-space-hover space-y-2">
                  <div>
                    <p className="text-xs font-bold text-nebula-purple mb-1">Characteristics:</p>
                    <p className="text-xs text-text-secondary">{type.characteristics}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-bold text-star-blue mb-1">Examples:</p>
                    <div className="flex flex-wrap gap-1">
                      {type.examples.map((example) => (
                        <span 
                          key={example}
                          className="text-xs px-2 py-1 bg-space-hover rounded-full text-text-secondary"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Milky Way */}
      <div className="mb-16 bg-gradient-to-r from-nebula-purple/10 to-star-blue/10 rounded-xl p-8 border border-nebula-purple/30">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Home: The Milky Way</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-text-secondary">
              The Milky Way is a barred spiral galaxy — our cosmic home. It contains our Solar System, 
              along with billions of other stars, planets, and mysteries yet to be discovered.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌌</span>
                <div>
                  <h4 className="font-bold text-nebula-purple">Shape & Structure</h4>
                  <p className="text-sm text-text-secondary">
                    Barred spiral with 4 major arms spiraling out from a central bar-shaped core
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-bold text-star-blue">Our Location</h4>
                  <p className="text-sm text-text-secondary">
                    We're about 26,000 light-years from the center, on the Orion Arm
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚫</span>
                <div>
                  <h4 className="font-bold text-cosmic-pink">Central Black Hole</h4>
                  <p className="text-sm text-text-secondary">
                    Sagittarius A* — a supermassive black hole 4 million times the Sun's mass!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-space-card backdrop-blur-sm rounded-lg p-6 border border-space-hover">
            <h4 className="font-bold mb-4 text-center">Milky Way Facts</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-nebula-purple">✓</span>
                <span>Takes 225-250 million years to complete one rotation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-star-blue">✓</span>
                <span>Contains 100-400 billion stars (exact number unknown!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cosmic-pink">✓</span>
                <span>Our galaxy is moving through space at 2.1 million km/h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nebula-purple">✓</span>
                <span>The name comes from its milky appearance in the night sky</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Famous Galaxies */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Famous Galaxies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {famousGalaxies.map((galaxy) => (
            <Card key={galaxy.name} hover>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-4xl mb-2">{galaxy.emoji}</div>
                  <h3 className="text-xl font-bold">{galaxy.name}</h3>
                  <p className="text-sm text-text-secondary italic">{galaxy.designation}</p>
                </div>
                
                <p className="text-sm text-text-secondary">{galaxy.description}</p>
                
                <div className="pt-3 border-t border-space-hover space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Distance:</span>
                    <span className="font-mono text-nebula-purple">{galaxy.distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Size:</span>
                    <span className="font-mono text-star-blue">{galaxy.size}</span>
                  </div>
                  
                  <div className="pt-2 mt-2 border-t border-space-hover">
                    <p className="text-cosmic-pink font-bold">💡 {galaxy.funFact}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Galaxy Facts */}
      <div className="bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover">
        <h2 className="text-2xl font-bold mb-6 text-center">Galactic Mysteries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-nebula-purple">🤝 Galaxy Collisions</h3>
            <p className="text-text-secondary text-sm">
              Galaxies crash into each other all the time! When they do, stars rarely collide — 
              there's so much space between them. Instead, they merge into bigger galaxies.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-star-blue">🕳️ Dark Matter</h3>
            <p className="text-text-secondary text-sm">
              About 90% of a galaxy's mass is invisible dark matter! We can't see it, 
              but we know it's there because of its gravitational effects on visible matter.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-cosmic-pink">🎆 The Local Group</h3>
            <p className="text-text-secondary text-sm">
              The Milky Way is part of a cluster of about 50 galaxies called the Local Group. 
              Andromeda is the largest member!
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-nebula-purple">🔭 First Light</h3>
            <p className="text-text-secondary text-sm">
              The first galaxies formed just a few hundred million years after the Big Bang, 
              when the universe was still young and chaotic.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}