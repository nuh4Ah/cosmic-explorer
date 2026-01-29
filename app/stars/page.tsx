import PageLayout from '@/components/layout/PageLayout'
import Card from '@/components/ui/Card'
import { starTypes, famousStars } from '@/lib/constants'

export const metadata = {
  title: 'Stars | Cosmic Explorer',
  description: 'Learn about stars, their lifecycle, and the different types of stars in our universe.',
}

export default function StarsPage() {
  return (
    <PageLayout className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Stars: The Universe's{' '}
          <span className="text-gradient">Powerhouses</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Giant balls of burning gas that light up the cosmos. Every atom in your body was once 
          inside a star!
        </p>
      </div>

      {/* Star Lifecycle */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The Life of a Star</h2>
        <div className="bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="font-bold mb-2 text-nebula-purple">Nebula</h3>
              <p className="text-sm text-text-secondary">A cloud of gas and dust collapses under gravity</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-bold mb-2 text-star-blue">Main Sequence</h3>
              <p className="text-sm text-text-secondary">The star burns hydrogen for billions of years</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🔴</div>
              <h3 className="font-bold mb-2 text-cosmic-pink">Red Giant</h3>
              <p className="text-sm text-text-secondary">The star expands as it runs out of fuel</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">💥</div>
              <h3 className="font-bold mb-2 text-nebula-purple">Supernova</h3>
              <p className="text-sm text-text-secondary">Massive stars explode in a brilliant blast</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">⚫</div>
              <h3 className="font-bold mb-2 text-text-primary">Remnant</h3>
              <p className="text-sm text-text-secondary">White dwarf, neutron star, or black hole</p>
            </div>
          </div>
          
          <p className="text-center text-text-secondary mt-8 italic">
            💡 Our Sun is currently in the Main Sequence phase and will stay there for another 5 billion years!
          </p>
        </div>
      </div>

      {/* Star Types */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Types of Stars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {starTypes.map((type) => (
            <Card key={type.id} hover>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full shadow-lg"
                    style={{ 
                      backgroundColor: type.color,
                      boxShadow: `0 0 20px ${type.color}80`
                    }}
                  />
                  <h3 className="text-xl font-bold">{type.name}</h3>
                </div>
                
                <p className="text-text-secondary">{type.description}</p>
                
                <div className="space-y-2 text-sm pt-2 border-t border-space-hover">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Temperature:</span>
                    <span className="font-mono text-cosmic-pink">{type.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Size:</span>
                    <span className="font-mono text-star-blue">{type.size}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-text-secondary text-xs">Examples:</span>
                    {type.examples.map((example) => (
                      <span 
                        key={example} 
                        className="text-xs px-2 py-1 bg-space-hover rounded-full text-nebula-purple"
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

      {/* Famous Stars */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Famous Stars You Can See</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {famousStars.map((star) => (
            <Card key={star.name} hover>
              <div className="text-center space-y-3">
                <div className="text-4xl">{star.emoji}</div>
                <h3 className="text-xl font-bold">{star.name}</h3>
                <p className="text-sm text-text-secondary italic">{star.constellation}</p>
                <p className="text-sm text-text-secondary">{star.description}</p>
                <p className="text-xs text-nebula-purple font-mono pt-2 border-t border-space-hover">
                  {star.distance}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Star Facts */}
      <div className="bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover">
        <h2 className="text-2xl font-bold mb-6 text-center">Mind-Blowing Star Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-nebula-purple">✨ We Are Stardust</h3>
            <p className="text-text-secondary">
              Every element heavier than hydrogen was created inside stars. The calcium in your bones, 
              the iron in your blood — all forged in stellar furnaces!
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-star-blue">🔥 Hottest Stars</h3>
            <p className="text-text-secondary">
              Blue stars burn at over 30,000°C! That's 5 times hotter than our yellow Sun. 
              The hotter the star, the shorter it lives.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-cosmic-pink">💪 Neutron Stars</h3>
            <p className="text-text-secondary">
              A teaspoon of neutron star material would weigh about 6 billion tons on Earth. 
              They spin hundreds of times per second!
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-nebula-purple">🌌 Countless Stars</h3>
            <p className="text-text-secondary">
              There are more stars in the universe than grains of sand on all of Earth's beaches. 
              Around 200 billion trillion!
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}