import PageLayout from '@/components/layout/PageLayout'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Space Phenomena | Cosmic Explorer',
  description: 'Explore cosmic mysteries including black holes, supernovas, dark matter, and other space phenomena.',
}

const phenomena = [
  {
    id: 'black-holes',
    name: 'Black Holes',
    emoji: '⚫',
    tagline: 'Where gravity goes extreme',
    description: 'Regions where gravity is so strong that nothing can escape — not even light!',
    analogy: 'Imagine a drain so powerful it sucks in everything nearby, even the water itself.',
    facts: [
      'Time slows down near a black hole due to extreme gravity',
      'The closest black hole to Earth is about 1,000 light-years away',
      'Supermassive black holes exist at the center of most galaxies',
      'Nothing can escape once it crosses the "event horizon"',
    ],
    color: '#1a1a2e',
  },
  {
    id: 'supernovas',
    name: 'Supernovas',
    emoji: '💥',
    tagline: 'Stellar explosions',
    description: 'The spectacular death of massive stars, exploding with the energy of billions of suns.',
    analogy: 'Like a firework, but billions of times more powerful and creating new elements!',
    facts: [
      'Can briefly outshine an entire galaxy',
      'Create heavy elements like gold, silver, and uranium',
      'The shockwave can trigger the birth of new stars',
      'Visible from billions of light-years away',
    ],
    color: '#ff6b6b',
  },
  {
    id: 'nebulas',
    name: 'Nebulas',
    emoji: '☁️',
    tagline: 'Stellar nurseries',
    description: 'Giant clouds of gas and dust where stars are born — or sometimes the remains of dead stars.',
    analogy: 'Think of them as cosmic cocoons where baby stars are forming.',
    facts: [
      'The Orion Nebula is visible to the naked eye',
      'Some nebulas are hundreds of light-years across',
      'They glow from the light of nearby stars',
      'Both birthplace and graveyard of stars',
    ],
    color: '#8b5cf6',
  },
  {
    id: 'dark-matter',
    name: 'Dark Matter',
    emoji: '🕳️',
    tagline: 'The invisible universe',
    description: 'Mysterious invisible matter that makes up about 85% of all matter in the universe.',
    analogy: 'Like an invisible scaffolding holding galaxies together that we can\'t see or touch.',
    facts: [
      'We can only detect it through its gravitational effects',
      'Doesn\'t emit, absorb, or reflect light',
      'Acts as the "glue" holding galaxies together',
      'Still one of science\'s greatest mysteries',
    ],
    color: '#4c4c6d',
  },
  {
    id: 'dark-energy',
    name: 'Dark Energy',
    emoji: '⚡',
    tagline: 'The cosmic accelerator',
    description: 'A mysterious force causing the universe to expand faster and faster.',
    analogy: 'Like an invisible force pushing everything in the universe apart, faster over time.',
    facts: [
      'Makes up about 68% of the total universe',
      'Discovered in 1998, surprising astronomers',
      'May determine the ultimate fate of the universe',
      'We don\'t know what it is yet!',
    ],
    color: '#3b82f6',
  },
  {
    id: 'cosmic-radiation',
    name: 'Cosmic Radiation',
    emoji: '☢️',
    tagline: 'High-energy particles',
    description: 'Extremely energetic particles flying through space at nearly the speed of light.',
    analogy: 'Like tiny bullets traveling at incredible speeds from distant cosmic explosions.',
    facts: [
      'Some particles have more energy than a fastball',
      'Can come from supernovas, black holes, or the Sun',
      'Earth\'s atmosphere protects us from most of it',
      'Astronauts experience higher radiation in space',
    ],
    color: '#ec4899',
  },
]

export default function PhenomenaPage() {
  return (
    <PageLayout className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Cosmic{' '}
          <span className="text-gradient">Phenomena</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          The universe is filled with strange, powerful, and beautiful phenomena. 
          From black holes to dark energy, explore the mysteries that make space so fascinating!
        </p>
      </div>

      {/* Phenomena Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {phenomena.map((item) => (
          <Card key={item.id} hover>
            <div className="space-y-4">
              {/* Header */}
              <div className="text-center">
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                <p className="text-sm italic" style={{ color: item.color }}>
                  {item.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm">{item.description}</p>

              {/* Analogy */}
              <div className="bg-space-hover rounded-lg p-3">
                <p className="text-xs font-bold text-nebula-purple mb-1">💡 Simple Analogy:</p>
                <p className="text-xs text-text-secondary italic">{item.analogy}</p>
              </div>

              {/* Facts */}
              <div className="pt-3 border-t border-space-hover">
                <p className="text-xs font-bold mb-2">Key Facts:</p>
                <ul className="space-y-1.5">
                  {item.facts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-cosmic-pink mt-0.5">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Cosmic Mysteries Section */}
      <div className="mb-16 bg-gradient-to-r from-nebula-purple/10 to-cosmic-pink/10 rounded-xl p-8 border border-nebula-purple/30">
        <h2 className="text-3xl font-bold mb-6 text-center">The Biggest Cosmic Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-nebula-purple">🤔 What is the universe made of?</h3>
            <p className="text-text-secondary">
              Only 5% of the universe is normal matter (atoms). The rest is dark matter (27%) 
              and dark energy (68%) — and we don't really understand either one!
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-star-blue">🌌 Are we alone?</h3>
            <p className="text-text-secondary">
              With billions of galaxies and trillions of planets, many scientists think life 
              probably exists elsewhere. But we haven't found it yet!
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-cosmic-pink">⏳ Will the universe end?</h3>
            <p className="text-text-secondary">
              Maybe! If dark energy keeps accelerating expansion, the universe could end in a 
              "Big Freeze" — everything spreading apart until it's cold and dark.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-nebula-purple">🕳️ What happened before the Big Bang?</h3>
            <p className="text-text-secondary">
              We don't know! Time itself may have started with the Big Bang, making "before" 
              a meaningless question. Mind-bending, right?
            </p>
          </div>
        </div>
      </div>

      {/* Fun Space Facts */}
      <div className="bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover">
        <h2 className="text-2xl font-bold mb-6 text-center">Mind-Blowing Space Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center space-y-2">
            <div className="text-3xl">🕒</div>
            <h3 className="font-bold text-nebula-purple">1 Day on Venus</h3>
            <p className="text-sm text-text-secondary">= 243 Earth days (longer than its year!)</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-3xl">🌡️</div>
            <h3 className="font-bold text-star-blue">Space Temperature</h3>
            <p className="text-sm text-text-secondary">-270°C in the shade, +120°C in sunlight</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-3xl">🔇</div>
            <h3 className="font-bold text-cosmic-pink">Sound in Space</h3>
            <p className="text-sm text-text-secondary">There is none! Sound needs air to travel</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-3xl">⏱️</div>
            <h3 className="font-bold text-nebula-purple">Light Speed</h3>
            <p className="text-sm text-text-secondary">Takes 8 minutes for sunlight to reach Earth</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-3xl">👄</div>
            <h3 className="font-bold text-star-blue">Taste in Space</h3>
            <p className="text-sm text-text-secondary">Food tastes bland — fluids shift affects taste buds</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-3xl">💪</div>
            <h3 className="font-bold text-cosmic-pink">Growing Taller</h3>
            <p className="text-sm text-text-secondary">Astronauts grow 2 inches in zero gravity!</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}