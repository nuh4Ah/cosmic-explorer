import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Space Phenomena | Cosmic Explorer',
  description: 'Uncover the mysteries of black holes, supernovas, and other fascinating cosmic phenomena.',
}

export default function PhenomenaPage() {
  const phenomena = [
    {
      id: 'black-holes',
      name: 'Black Holes',
      icon: '⚫',
      shortDesc: 'Regions where gravity is so strong, nothing can escape',
      color: '#1a1a2e',
    },
    {
      id: 'supernovas',
      name: 'Supernovas',
      icon: '💥',
      shortDesc: 'Massive stellar explosions that outshine entire galaxies',
      color: '#f97316',
    },
    {
      id: 'nebulas',
      name: 'Nebulas',
      icon: '🌫️',
      shortDesc: 'Cosmic clouds where stars are born and die',
      color: '#8b5cf6',
    },
    {
      id: 'dark-matter',
      name: 'Dark Matter',
      icon: '🕸️',
      shortDesc: 'Mysterious invisible matter that makes up 85% of the universe',
      color: '#6b7280',
    },
  ]

  return (
    <>
      <StarfieldBg />
      <PageLayout>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Space <span className="text-gradient">Phenomena</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Dive into the universe's most incredible events and mysterious objects.
            </p>
          </div>

          {/* Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {phenomena.map((item) => (
              <Card key={item.id} hover>
                <div className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: item.color }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.shortDesc}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Black Holes */}
          <Card className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">⚫</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Black Holes</h2>
                <p className="text-sm text-text-secondary">The universe's ultimate mystery</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-text-secondary">
                Imagine squeezing the entire Earth down to the size of a marble. That's the kind of extreme 
                density we're talking about with black holes! They're regions of space where gravity is so 
                intense that nothing — not even light — can escape once it crosses the "event horizon" 
                (the point of no return).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-nebula-purple mb-2">🎭 Simple Analogy</h4>
                  <p className="text-sm text-text-secondary">
                    Think of a black hole like a cosmic drain. Anything that gets too close gets sucked in 
                    and can never come back out!
                  </p>
                </div>
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-star-blue mb-2">📏 How Big?</h4>
                  <p className="text-sm text-text-secondary">
                    Black holes range from tiny (3x Sun's mass) to supermassive (billions of times the Sun's mass). 
                    Most galaxies have a supermassive black hole at their center!
                  </p>
                </div>
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-cosmic-pink mb-2">⏱️ Time Stops?</h4>
                  <p className="text-sm text-text-secondary">
                    Near a black hole, time slows down compared to farther away. If you could watch someone 
                    fall in, they'd appear to freeze at the event horizon!
                  </p>
                </div>
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-nebula-purple mb-2">💡 Fun Fact</h4>
                  <p className="text-sm text-text-secondary">
                    We can't see black holes directly, but we can detect them by watching how they affect 
                    nearby stars and gas. In 2019, scientists captured the first-ever image of a black hole!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Supernovas */}
          <Card className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">💥</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Supernovas</h2>
                <p className="text-sm text-text-secondary">The universe's most spectacular explosions</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-text-secondary">
                When massive stars die, they don't go quietly. They explode in a supernova — one of the 
                most energetic events in the universe! For a few weeks, a single supernova can outshine an 
                entire galaxy of billions of stars.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-space-hover rounded-lg">
                  <p className="text-3xl font-bold text-nebula-purple mb-2">100M°</p>
                  <p className="text-sm text-text-secondary">Degrees Celsius (core temperature)</p>
                </div>
                <div className="text-center p-4 bg-space-hover rounded-lg">
                  <p className="text-3xl font-bold text-star-blue mb-2">2-3</p>
                  <p className="text-sm text-text-secondary">Supernovas per century (in our galaxy)</p>
                </div>
                <div className="text-center p-4 bg-space-hover rounded-lg">
                  <p className="text-3xl font-bold text-cosmic-pink mb-2">100B</p>
                  <p className="text-sm text-text-secondary">Times brighter than our Sun</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-nebula-purple/10 to-star-blue/10 rounded-lg">
                <h4 className="font-bold text-cosmic-pink mb-2">🌟 We're Made of Supernova Dust!</h4>
                <p className="text-sm text-text-secondary">
                  Heavy elements like iron, gold, and silver aren't made in regular stars — they're created 
                  during supernovas. Every atom of iron in your blood came from a supernova explosion billions 
                  of years ago. You're literally made of stardust!
                </p>
              </div>
            </div>
          </Card>

          {/* Nebulas */}
          <Card className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">🌫️</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Nebulas</h2>
                <p className="text-sm text-text-secondary">Cosmic clouds of gas and dust</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-text-secondary">
                Nebulas are giant clouds of dust and gas in space. They're like cosmic nurseries where new 
                stars are born, and cosmic graveyards where dying stars create beautiful colored clouds.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-nebula-purple mb-2">👶 Stellar Nurseries</h4>
                  <p className="text-sm text-text-secondary">
                    Some nebulas are birthplaces of stars. Gravity pulls gas and dust together until new stars ignite. 
                    The Orion Nebula is the closest star-forming region to Earth!
                  </p>
                </div>
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-star-blue mb-2">🌈 Planetary Nebulas</h4>
                  <p className="text-sm text-text-secondary">
                    When stars like our Sun die, they shed their outer layers, creating colorful clouds. 
                    Despite the name, they have nothing to do with planets!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Dark Matter & Dark Energy */}
          <Card>
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">🕸️</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Dark Matter & Dark Energy</h2>
                <p className="text-sm text-text-secondary">The universe's greatest mysteries</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-text-secondary">
                Here's a mind-blowing fact: everything we can see — stars, planets, galaxies — makes up 
                only 5% of the universe. The other 95% is made of mysterious dark matter (27%) and 
                dark energy (68%) that we can't directly observe!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-nebula-purple mb-2">⚫ Dark Matter</h4>
                  <p className="text-sm text-text-secondary">
                    Dark matter doesn't emit light, but we know it exists because of its gravitational effects. 
                    It's like an invisible scaffolding that holds galaxies together!
                  </p>
                </div>
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-star-blue mb-2">⚡ Dark Energy</h4>
                  <p className="text-sm text-text-secondary">
                    Dark energy is even more mysterious. It's the force causing the universe to expand faster 
                    and faster. Scientists discovered it in 1998 and still don't fully understand it!
                  </p>
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-nebula-purple/10 to-star-blue/10 rounded-lg">
                <h4 className="font-bold text-cosmic-pink mb-3">🎓 The Big Question</h4>
                <p className="text-sm text-text-secondary">
                  Understanding dark matter and dark energy is one of the biggest challenges in modern science. 
                  Solving these mysteries could revolutionize our understanding of physics and the universe itself!
                </p>
              </div>
            </div>
          </Card>
        </section>
      </PageLayout>
    </>
  )
}