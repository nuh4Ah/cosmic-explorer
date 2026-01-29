import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'
import StarCard from '@/components/cards/StarCard'
import { starTypes, famousStars } from '@/lib/constants'

export const metadata = {
  title: 'Stars | Cosmic Explorer',
  description: 'Learn about stars, their lifecycles, and the different types that light up our universe.',
}

export default function StarsPage() {
  return (
    <>
      <StarfieldBg />
      <PageLayout>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="text-gradient">Stars</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Discover the life cycles of stars, from their birth in stellar nurseries to their spectacular deaths.
            </p>
          </div>

          {/* What is a Star? */}
          <Card className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">⭐ What Is a Star?</h2>
            <p className="text-text-secondary text-lg mb-4">
              A star is a massive ball of hot gas that produces light and heat through nuclear fusion. 
              In the star's core, hydrogen atoms combine to form helium, releasing enormous amounts of energy.
            </p>
            <p className="text-text-secondary text-lg">
              Our Sun is a star — a medium-sized yellow dwarf that's been shining for about 4.6 billion years 
              and will continue for another 5 billion years!
            </p>
          </Card>

          {/* Stellar Lifecycle */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">The Life Cycle of a Star</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <div className="text-4xl mb-3">☁️</div>
                <h3 className="text-xl font-bold mb-2 text-nebula-purple">1. Nebula</h3>
                <p className="text-text-secondary text-sm">
                  A star begins as a cloud of gas and dust. Gravity pulls the material together, 
                  forming a dense core.
                </p>
              </Card>
              
              <Card>
                <div className="text-4xl mb-3">🔆</div>
                <h3 className="text-xl font-bold mb-2 text-star-blue">2. Protostar</h3>
                <p className="text-text-secondary text-sm">
                  As the core heats up, it becomes a protostar. When the temperature reaches 
                  10 million°C, nuclear fusion begins!
                </p>
              </Card>
              
              <Card>
                <div className="text-4xl mb-3">☀️</div>
                <h3 className="text-xl font-bold mb-2 text-cosmic-pink">3. Main Sequence</h3>
                <p className="text-text-secondary text-sm">
                  The star spends most of its life here, steadily fusing hydrogen into helium. 
                  Our Sun is currently in this stage.
                </p>
              </Card>
              
              <Card>
                <div className="text-4xl mb-3">🔴</div>
                <h3 className="text-xl font-bold mb-2 text-nebula-purple">4. Red Giant</h3>
                <p className="text-text-secondary text-sm">
                  When hydrogen runs out, the star expands into a red giant, becoming hundreds of 
                  times larger than before.
                </p>
              </Card>
              
              <Card>
                <div className="text-4xl mb-3">💥</div>
                <h3 className="text-xl font-bold mb-2 text-star-blue">5. Supernova</h3>
                <p className="text-text-secondary text-sm">
                  Massive stars explode in a spectacular supernova, briefly outshining entire galaxies. 
                  This creates heavy elements!
                </p>
              </Card>
              
              <Card>
                <div className="text-4xl mb-3">⚪</div>
                <h3 className="text-xl font-bold mb-2 text-cosmic-pink">6. White Dwarf</h3>
                <p className="text-text-secondary text-sm">
                  Smaller stars collapse into white dwarfs — incredibly dense objects about 
                  the size of Earth.
                </p>
              </Card>
              
              <Card>
                <div className="text-4xl mb-3">🕵️</div>
                <h3 className="text-xl font-bold mb-2 text-nebula-purple">7. Neutron Star</h3>
                <p className="text-text-secondary text-sm">
                  Some massive stars become neutron stars — so dense that a teaspoon would 
                  weigh billions of tons!
                </p>
              </Card>
              
              <Card>
                <div className="text-4xl mb-3">⚫</div>
                <h3 className="text-xl font-bold mb-2 text-star-blue">8. Black Hole</h3>
                <p className="text-text-secondary text-sm">
                  The most massive stars collapse into black holes — regions where gravity is 
                  so strong that not even light can escape.
                </p>
              </Card>
            </div>
          </div>

          {/* Types of Stars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Types of Stars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {starTypes.map((star) => (
                <StarCard key={star.id} star={star} />
              ))}
            </div>
          </div>

          {/* Famous Stars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Famous Stars in Our Sky</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {famousStars.map((star) => (
                <Card key={star.name} hover>
                  <div className="flex items-start gap-4">
                    <div 
                      className="text-4xl w-16 h-16 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: `${star.color}40`, border: `2px solid ${star.color}` }}
                    >
                      ⭐
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1" style={{ color: star.color }}>
                        {star.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-2">{star.type}</p>
                      <p className="text-sm text-text-secondary mb-3">{star.description}</p>
                      <div className="space-y-1 text-xs">
                        <p><span className="text-text-secondary">📍 Distance:</span> {star.distance}</p>
                        <p><span className="text-text-secondary">🌟 Brightness:</span> {star.brightness}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <Card>
            <h2 className="text-2xl font-bold mb-6 text-center">Did You Know? ✨</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-nebula-purple mb-2">200B+</p>
                <p className="text-text-secondary text-sm">Stars in the Milky Way</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-star-blue mb-2">15M°C</p>
                <p className="text-text-secondary text-sm">Temperature of Sun's core</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-cosmic-pink mb-2">8 min</p>
                <p className="text-text-secondary text-sm">Light travel time from Sun to Earth</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-nebula-purple mb-2">99.8%</p>
                <p className="text-text-secondary text-sm">Of solar system mass is the Sun</p>
              </div>
            </div>
          </Card>
        </section>
      </PageLayout>
    </>
  )
}