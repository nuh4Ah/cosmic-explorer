import PageLayout from '@/components/layout/PageLayout'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'About | Cosmic Explorer',
  description: 'Learn about Cosmic Explorer\'s mission to make space education accessible and engaging for everyone.',
}

export default function AboutPage() {
  return (
    <PageLayout className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <div className="text-6xl mb-6">🌌</div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          About{' '}
          <span className="text-gradient">Cosmic Explorer</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Making space education accessible, engaging, and fun for everyone.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="mb-16 bg-gradient-to-r from-nebula-purple/10 to-star-blue/10 rounded-xl p-8 border border-nebula-purple/30">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
          The universe is vast, mysterious, and absolutely fascinating. But too often, 
          space education feels complicated and inaccessible. We believe everyone should 
          have the chance to understand and appreciate the cosmos — from curious kids to 
          lifelong learners. That's why we created Cosmic Explorer: to break down complex 
          astronomical concepts into simple, engaging explanations that spark wonder and curiosity.
        </p>
      </div>

      {/* What We Offer */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover>
            <div className="text-center space-y-4">
              <div className="text-5xl">📚</div>
              <h3 className="text-xl font-bold">Simple Explanations</h3>
              <p className="text-sm text-text-secondary">
                Complex astronomy concepts explained at an 8th-grade reading level. 
                No PhD required!
              </p>
            </div>
          </Card>

          <Card hover>
            <div className="text-center space-y-4">
              <div className="text-5xl">🎆</div>
              <h3 className="text-xl font-bold">Beautiful Design</h3>
              <p className="text-sm text-text-secondary">
                Stunning visuals and smooth animations that make learning about space 
                a delightful experience.
              </p>
            </div>
          </Card>

          <Card hover>
            <div className="text-center space-y-4">
              <div className="text-5xl">♿</div>
              <h3 className="text-xl font-bold">Accessible to All</h3>
              <p className="text-sm text-text-secondary">
                WCAG 2.1 AA compliant, mobile-friendly, and designed for everyone 
                to explore.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Who This Is For */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Who This Site Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🧒</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-nebula-purple">Curious Kids</h3>
                <p className="text-sm text-text-secondary">
                  Young minds eager to learn about planets, stars, and space mysteries 
                  in a fun, easy-to-understand way.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="text-3xl">👨‍🏫</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-star-blue">Educators</h3>
                <p className="text-sm text-text-secondary">
                  Teachers looking for engaging astronomy resources to inspire 
                  students and make lessons memorable.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="text-3xl">👩‍🔬</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-cosmic-pink">Lifelong Learners</h3>
                <p className="text-sm text-text-secondary">
                  Adults who've always been fascinated by space but never had the 
                  time or resources to explore it deeply.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🔭</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-nebula-purple">Aspiring Astronomers</h3>
                <p className="text-sm text-text-secondary">
                  Anyone dreaming of a career in space science or just wanting to 
                  understand the universe better.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* How to Navigate */}
      <div className="mb-16 bg-space-card backdrop-blur-sm rounded-xl p-8 border border-space-hover">
        <h2 className="text-3xl font-bold mb-6 text-center">How to Navigate This Site</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🪐</span>
            <div>
              <h3 className="font-bold mb-1">Planets</h3>
              <p className="text-sm text-text-secondary">
                Start here to explore our solar system's eight worlds, from Mercury to Neptune.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <h3 className="font-bold mb-1">Stars</h3>
              <p className="text-sm text-text-secondary">
                Learn about stellar lifecycles, star types, and famous stars you can see.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🌌</span>
            <div>
              <h3 className="font-bold mb-1">Galaxies</h3>
              <p className="text-sm text-text-secondary">
                Journey through galaxy types, the Milky Way, and famous galactic neighbors.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">✨</span>
            <div>
              <h3 className="font-bold mb-1">Phenomena</h3>
              <p className="text-sm text-text-secondary">
                Discover cosmic mysteries like black holes, supernovas, and dark matter.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">📚</span>
            <div>
              <h3 className="font-bold mb-1">Learn More</h3>
              <p className="text-sm text-text-secondary">
                Find resources, glossary terms, stargazing tips, and FAQs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Built With Modern Technology</h2>
        <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
          Cosmic Explorer is built with Next.js 14, TypeScript, and Tailwind CSS, 
          ensuring fast performance, beautiful design, and accessibility for all users.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-space-card rounded-full text-sm border border-space-hover">Next.js 14</span>
          <span className="px-4 py-2 bg-space-card rounded-full text-sm border border-space-hover">TypeScript</span>
          <span className="px-4 py-2 bg-space-card rounded-full text-sm border border-space-hover">Tailwind CSS</span>
          <span className="px-4 py-2 bg-space-card rounded-full text-sm border border-space-hover">Framer Motion</span>
          <span className="px-4 py-2 bg-space-card rounded-full text-sm border border-space-hover">Vercel</span>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Card className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-text-secondary mb-6">
            The universe is waiting. Start your journey through the cosmos today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/planets">
                Explore Planets 🪐
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/learn">
                Learning Resources 📚
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </PageLayout>
  )
}