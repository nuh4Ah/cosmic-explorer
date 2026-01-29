import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'
import { phenomena } from '@/lib/constants'

export const metadata = {
  title: 'Space Phenomena | Cosmic Explorer',
  description: 'Uncover the mysteries of black holes, supernovas, and other fascinating cosmic phenomena.',
}

export default function PhenomenaPage() {
  return (
    <>
      <StarfieldBg />
      <PageLayout>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Space <span className="text-gradient">Phenomena</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Dive into the universe's most incredible events and mysterious objects.
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">✨ The Universe's Greatest Mysteries</h2>
            <p className="text-text-secondary text-lg">
              Space is full of incredible phenomena that challenge our understanding of physics. 
              From objects so dense that nothing can escape them, to invisible forces that shape 
              the entire universe — these cosmic wonders continue to fascinate scientists and stargazers alike.
            </p>
          </Card>

          {/* Phenomena Cards */}
          <div className="space-y-12 mb-16">
            {phenomena.map((phenomenon) => (
              <Card key={phenomenon.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Icon & Title */}
                  <div className="lg:col-span-1 flex flex-col items-center justify-center text-center">
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center text-6xl mb-4"
                      style={{ 
                        backgroundColor: `${phenomenon.color}20`, 
                        border: `3px solid ${phenomenon.color}`,
                        boxShadow: `0 0 30px ${phenomenon.color}40`
                      }}
                    >
                      {phenomenon.id === 'black-hole' && '⚫'}
                      {phenomenon.id === 'supernova' && '💥'}
                      {phenomenon.id === 'nebula' && '☁️'}
                      {phenomenon.id === 'dark-matter' && '🕵️'}
                      {phenomenon.id === 'dark-energy' && '✨'}
                    </div>
                    <h3 className="text-3xl font-bold" style={{ color: phenomenon.color }}>
                      {phenomenon.name}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2">
                    {/* Description */}
                    <p className="text-text-secondary text-lg mb-4">
                      {phenomenon.description}
                    </p>

                    {/* Analogy */}
                    <div className="bg-space-hover rounded-lg p-4 mb-4">
                      <p className="text-sm font-bold text-cosmic-pink mb-2">💡 Simple Analogy:</p>
                      <p className="text-sm text-text-secondary italic">
                        {phenomenon.analogy}
                      </p>
                    </div>

                    {/* Facts */}
                    <div>
                      <p className="text-sm font-bold mb-3">Key Facts:</p>
                      <ul className="space-y-2">
                        {phenomenon.facts.map((fact, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                            <span className="text-nebula-purple mt-1">•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Cosmic Radiation Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Cosmic Radiation</h2>
            <Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-nebula-purple">What Is It?</h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Cosmic rays are high-energy particles (mostly protons) that travel through space 
                    at nearly the speed of light. They come from supernovas, active galaxies, and other 
                    extreme cosmic events.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-star-blue">Why It Matters</h3>
                  <p className="text-text-secondary text-sm">
                    Earth's atmosphere and magnetic field protect us from most cosmic radiation. 
                    However, astronauts in space and future Mars colonists will need special shielding 
                    to stay safe from these energetic particles.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Fun Facts */}
          <Card>
            <h2 className="text-2xl font-bold mb-6 text-center">Mind-Blowing Facts 🤯</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-space-hover rounded-lg">
                <p className="text-sm font-bold text-cosmic-pink mb-2">⚫ Black Holes</p>
                <p className="text-sm text-text-secondary">
                  If you fell into a black hole, time would appear to freeze for outside observers!
                </p>
              </div>
              <div className="p-4 bg-space-hover rounded-lg">
                <p className="text-sm font-bold text-cosmic-pink mb-2">💥 Supernovas</p>
                <p className="text-sm text-text-secondary">
                  One supernova can release as much energy as the Sun will produce in its entire 10-billion-year lifetime!
                </p>
              </div>
              <div className="p-4 bg-space-hover rounded-lg">
                <p className="text-sm font-bold text-cosmic-pink mb-2">☁️ Nebulas</p>
                <p className="text-sm text-text-secondary">
                  The Pillars of Creation nebula is so large that it would take light 4 years to travel from one end to the other!
                </p>
              </div>
              <div className="p-4 bg-space-hover rounded-lg">
                <p className="text-sm font-bold text-cosmic-pink mb-2">🕵️ Dark Matter</p>
                <p className="text-sm text-text-secondary">
                  We've never directly detected dark matter, but we know it exists because galaxies would fly apart without it!
                </p>
              </div>
            </div>
          </Card>
        </section>
      </PageLayout>
    </>
  )
}