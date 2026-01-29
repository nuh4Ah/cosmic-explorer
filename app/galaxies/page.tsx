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
      name: 'Spiral Galaxies',
      icon: '🌀',
      description: 'Flat disks with spiral arms rotating around a central bulge. Like cosmic pinwheels!',
      examples: 'Milky Way, Andromeda, Whirlpool',
      color: '#8b5cf6',
    },
    {
      name: 'Elliptical Galaxies',
      description: 'Smooth, oval-shaped galaxies with older stars. They look like cosmic footballs!',
      icon: '🏈',
      examples: 'M87, M49, NGC 4472',
      color: '#3b82f6',
    },
    {
      name: 'Irregular Galaxies',
      icon: '🧩',
      description: 'No clear shape or structure. Often formed from galaxy collisions!',
      examples: 'Large Magellanic Cloud, Small Magellanic Cloud',
      color: '#ec4899',
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
              The <span className="text-gradient">Galaxies</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Explore the vast collections of stars, gas, and dust that make up our cosmic neighborhoods.
            </p>
          </div>

          {/* What is a Galaxy */}
          <Card className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              What is a Galaxy? 🌌
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-text-secondary mb-4">
                A galaxy is a huge collection of gas, dust, and billions of stars held together by gravity. 
                Think of it as a cosmic city where stars are the buildings!
              </p>
              <p className="text-text-secondary mb-4">
                Our galaxy, the Milky Way, contains about 200-400 billion stars, including our Sun. 
                And there are over 2 trillion galaxies in the observable universe!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-space-hover rounded-lg">
                  <p className="text-3xl font-bold text-nebula-purple mb-2">2T+</p>
                  <p className="text-sm text-text-secondary">Galaxies in the universe</p>
                </div>
                <div className="text-center p-4 bg-space-hover rounded-lg">
                  <p className="text-3xl font-bold text-star-blue mb-2">100K</p>
                  <p className="text-sm text-text-secondary">Light-years across (Milky Way)</p>
                </div>
                <div className="text-center p-4 bg-space-hover rounded-lg">
                  <p className="text-3xl font-bold text-cosmic-pink mb-2">400B</p>
                  <p className="text-sm text-text-secondary">Stars in Milky Way</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Galaxy Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Types of Galaxies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galaxyTypes.map((type) => (
                <Card key={type.name} hover>
                  <div className="text-center">
                    <div className="text-5xl mb-4">{type.icon}</div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: type.color }}>
                      {type.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      {type.description}
                    </p>
                    <div className="pt-3 border-t border-space-hover">
                      <p className="text-xs text-text-secondary">
                        <strong>Examples:</strong> {type.examples}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Milky Way Deep Dive */}
          <Card className="mb-16 bg-gradient-to-r from-nebula-purple/10 to-star-blue/10">
            <h2 className="text-3xl font-bold mb-6 text-center">
              🌌 The Milky Way: Our Home Galaxy
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-text-secondary">
                The Milky Way is a barred spiral galaxy — it has a bar-shaped core with spiral arms 
                swirling out from it. Our solar system sits in one of these spiral arms, called the Orion Arm.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-nebula-purple mb-2">📍 Where are we?</h4>
                  <p className="text-sm text-text-secondary">
                    We're about 27,000 light-years from the galaxy's center, in the Orion Arm — 
                    a pretty safe and calm neighborhood!
                  </p>
                </div>
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-star-blue mb-2">🔄 How fast?</h4>
                  <p className="text-sm text-text-secondary">
                    Our solar system orbits the galactic center at about 828,000 km/h! 
                    One complete orbit takes 225-250 million years.
                  </p>
                </div>
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-cosmic-pink mb-2">⚫ Center Mystery</h4>
                  <p className="text-sm text-text-secondary">
                    There's a supermassive black hole at our galaxy's center called Sagittarius A*. 
                    It's 4 million times the mass of our Sun!
                  </p>
                </div>
                <div className="p-4 bg-space-hover rounded-lg">
                  <h4 className="font-bold text-nebula-purple mb-2">🌌 Visible Band</h4>
                  <p className="text-sm text-text-secondary">
                    On a dark night, you can see a milky band across the sky — that's our view 
                    of the Milky Way from inside it!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Famous Galaxies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Famous Galaxies to Know
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galaxies.map((galaxy) => (
                <Card key={galaxy.id} hover>
                  <div className="text-center">
                    <div className="text-5xl mb-4">{galaxy.icon}</div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: galaxy.color }}>
                      {galaxy.name}
                    </h3>
                    <p className="text-sm text-nebula-purple mb-3">{galaxy.type} Galaxy</p>
                    <p className="text-sm text-text-secondary mb-4">
                      {galaxy.description}
                    </p>
                    <div className="space-y-2 text-xs">
                      <p>
                        <span className="text-star-blue">📍 Distance:</span> {galaxy.distance}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-space-hover">
                      <p className="text-xs font-bold text-cosmic-pink mb-1">💡 Fun Fact:</p>
                      <p className="text-xs text-text-secondary">{galaxy.funFact}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Galaxy Collisions */}
          <Card>
            <h2 className="text-2xl font-bold mb-6 text-center">
              💥 Galaxy Collisions
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-text-secondary mb-4">
                Galaxies don't stay put — they move through space and sometimes crash into each other! 
                But don't worry, stars are so far apart that they rarely actually hit each other during a collision.
              </p>
              <div className="p-4 bg-space-hover rounded-lg">
                <h4 className="font-bold text-cosmic-pink mb-2">🔜 Coming Soon: Milkomeda!</h4>
                <p className="text-sm text-text-secondary">
                  In about 4.5 billion years, the Milky Way and Andromeda galaxies will collide and merge 
                  into one giant galaxy. Scientists have nicknamed it "Milkomeda"! But don't cancel your plans — 
                  this cosmic dance will take hundreds of millions of years to complete.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </PageLayout>
    </>
  )
}