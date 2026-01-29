import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'About | Cosmic Explorer',
  description: 'Learn about Cosmic Explorer\'s mission to make space education accessible to everyone.',
}

export default function AboutPage() {
  return (
    <>
      <StarfieldBg />
      <PageLayout>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">About Cosmic Explorer</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Making space education accessible and engaging for everyone.
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">🎯 Our Mission</h2>
            <p className="text-text-secondary mb-4">
              Cosmic Explorer was created to make astronomy and space science accessible to learners of all ages. 
              We believe that everyone should have the opportunity to explore the wonders of the universe, 
              regardless of their background or prior knowledge.
            </p>
            <p className="text-text-secondary">
              Through clear explanations, stunning visuals, and interactive experiences, we aim to inspire 
              curiosity and foster a deeper understanding of our place in the cosmos.
            </p>
          </Card>

          {/* Who This Is For */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">👥 Who This Site Is For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-bold mb-2">Students</h3>
                <p className="text-text-secondary text-sm">
                  Perfect for homework help and learning about our solar system.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">👨‍🏫</div>
                <h3 className="font-bold mb-2">Educators</h3>
                <p className="text-text-secondary text-sm">
                  Great supplementary material for astronomy and science classes.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🔭</div>
                <h3 className="font-bold mb-2">Curious Minds</h3>
                <p className="text-text-secondary text-sm">
                  Anyone fascinated by space and eager to learn more.
                </p>
              </div>
            </div>
          </Card>

          {/* How to Navigate */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">🧭 How to Navigate</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🪐</span>
                <div>
                  <h3 className="font-bold">Planets</h3>
                  <p className="text-text-secondary text-sm">
                    Explore our solar system's eight planets with interactive visualizations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="font-bold">Stars</h3>
                  <p className="text-text-secondary text-sm">
                    Learn about stellar lifecycles and different types of stars.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌌</span>
                <div>
                  <h3 className="font-bold">Galaxies</h3>
                  <p className="text-text-secondary text-sm">
                    Journey through the Milky Way and beyond.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-bold">Phenomena</h3>
                  <p className="text-text-secondary text-sm">
                    Discover black holes, supernovas, and cosmic mysteries.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Tech Stack */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">🛠️ Built With</h2>
            <p className="text-text-secondary mb-4">
              Cosmic Explorer is built with modern web technologies to ensure a fast, accessible, 
              and delightful experience:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-space-hover rounded-lg text-sm">Next.js 14</span>
              <span className="px-4 py-2 bg-space-hover rounded-lg text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-space-hover rounded-lg text-sm">Tailwind CSS</span>
              <span className="px-4 py-2 bg-space-hover rounded-lg text-sm">Framer Motion</span>
              <span className="px-4 py-2 bg-space-hover rounded-lg text-sm">Vercel</span>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Start Exploring?
            </h2>
            <p className="text-text-secondary mb-6">
              The universe is vast and full of wonders. Let's discover them together!
            </p>
            <Button size="lg" asChild>
              <Link href="/planets">
                Begin Your Journey 🚀
              </Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    </>
  )
}