import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'
import StarCard from '@/components/cards/StarCard'
import StarLifecycle from '@/components/interactive/StarLifecycle'
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
          {/* Hero Section */}
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
            <h2 className="text-3xl font-bold mb-6 text-center">
              What is a Star? ⭐
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-text-secondary mb-4">
                A star is a giant ball of hot, glowing gas held together by its own gravity. Stars produce 
                light and heat through nuclear fusion — a process where hydrogen atoms combine to form helium, 
                releasing enormous amounts of energy.
              </p>
              <p className="text-text-secondary mb-4">
                Our Sun is a star! It's just much closer to us than other stars, which is why it looks so big and bright.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-space-hover rounded-lg">
                  <p className="text-3xl font-bold text-nebula-purple mb-2">5,778K</p>
                  <p className="text-sm text-text-secondary">Sun's surface temperature</p>
                </div>
                <div className="text-center p-4 bg-space-hover rounded-lg">
                  <p className="text-3xl font-bold text-star-blue mb-2">4.6B</p>
                  <p className="text-sm text-text-secondary">Years old (our Sun)</p>
                </div>
                <div className="text-center p-4 bg-space-hover rounded-lg">
                  <p className="text-3xl font-bold text-cosmic-pink mb-2">400B+</p>
                  <p className="text-sm text-text-secondary">Stars in Milky Way</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Star Lifecycle */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              The Life of a Star 🔄
            </h2>
            <StarLifecycle />
          </div>

          {/* Star Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Types of Stars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {starTypes.map((star) => (
                <StarCard key={star.id} star={star} />
              ))}
            </div>
          </div>

          {/* Famous Stars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Famous Stars in Our Sky 🌟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {famousStars.map((star) => (
                <Card key={star.name} hover>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{star.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{star.name}</h3>
                      <p className="text-sm text-text-secondary mb-2">{star.description}</p>
                      <div className="space-y-1 text-xs">
                        <p><span className="text-nebula-purple">Distance:</span> {star.distance}</p>
                        <p><span className="text-star-blue">Type:</span> {star.type}</p>
                        <p><span className="text-cosmic-pink">Constellation:</span> {star.constellation}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <Card>
            <h2 className="text-2xl font-bold mb-6 text-center">
              💡 Stellar Fun Facts
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="p-4 bg-space-hover rounded-lg">
                <p className="text-text-secondary">
                  <strong className="text-nebula-purple">Starlight travelers:</strong> The light from some stars 
                  takes thousands of years to reach Earth. When you look at them, you're seeing them as they were 
                  in the past!
                </p>
              </div>
              <div className="p-4 bg-space-hover rounded-lg">
                <p className="text-text-secondary">
                  <strong className="text-star-blue">Stellar factories:</strong> All the elements in your body 
                  (except hydrogen) were created inside stars. We're literally made of stardust!
                </p>
              </div>
              <div className="p-4 bg-space-hover rounded-lg">
                <p className="text-text-secondary">
                  <strong className="text-cosmic-pink">Neutron star density:</strong> A teaspoon of neutron star 
                  material would weigh about 6 billion tons on Earth. That's heavier than Mount Everest!
                </p>
              </div>
            </div>
          </Card>
        </section>
      </PageLayout>
    </>
  )
}