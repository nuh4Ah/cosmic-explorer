import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Learn More | Cosmic Explorer',
  description: 'Resources, glossary, and tips to help you continue your space exploration journey.',
}

export default function LearnPage() {
  const resources = [
    {
      title: 'NASA Official Website',
      description: 'The latest space news, images, and mission updates',
      url: 'https://nasa.gov',
      icon: '🚀',
    },
    {
      title: 'European Space Agency',
      description: 'ESA missions, discoveries, and educational content',
      url: 'https://esa.int',
      icon: '🌌',
    },
    {
      title: 'Space.com',
      description: 'Breaking space news and astronomy articles',
      url: 'https://space.com',
      icon: '📰',
    },
    {
      title: 'The Planetary Society',
      description: 'Space exploration advocacy and education',
      url: 'https://planetary.org',
      icon: '🪐',
    },
  ]

  return (
    <>
      <StarfieldBg />
      <PageLayout>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Learn More</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Continue your space exploration journey with these trusted resources and tools.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Recommended Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card hover className="h-full">
                    <div className="text-4xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-text-secondary text-sm">{resource.description}</p>
                    <p className="text-star-blue text-sm mt-4">
                      Visit site →
                    </p>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Stargazing Tips */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Stargazing Tips for Beginners</h2>
            <Card>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-nebula-purple mb-2">🌙 1. Find Dark Skies</h3>
                  <p className="text-text-secondary text-sm">
                    Get away from city lights. Rural areas offer the best views of stars and planets.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-star-blue mb-2">⏰  2. Check the Weather</h3>
                  <p className="text-text-secondary text-sm">
                    Clear, cloudless nights are best. Check weather forecasts before planning your observation.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-cosmic-pink mb-2">🔦 3. Let Your Eyes Adjust</h3>
                  <p className="text-text-secondary text-sm">
                    It takes 20-30 minutes for your eyes to fully adapt to darkness. Avoid bright lights!
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-nebula-purple mb-2">📱 4. Use Stargazing Apps</h3>
                  <p className="text-text-secondary text-sm">
                    Apps like SkyView or Star Walk can help you identify constellations and planets.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <h3 className="font-bold mb-2">How many stars can I see with the naked eye?</h3>
                <p className="text-text-secondary text-sm">
                  On a clear, dark night, you can see about 2,000-3,000 stars from any given location on Earth.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2">What's the best time to stargaze?</h3>
                <p className="text-text-secondary text-sm">
                  The best time is during a new moon phase, away from city lights, typically between 10 PM and 2 AM.
                </p>
              </Card>
              <Card>
                <h3 className="font-bold mb-2">Do I need a telescope to explore space?</h3>
                <p className="text-text-secondary text-sm">
                  Not at all! Many celestial objects are visible with just your eyes. Binoculars are a great next step before investing in a telescope.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}