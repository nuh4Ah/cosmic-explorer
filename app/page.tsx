import PageLayout from '@/components/layout/PageLayout'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import { topics } from '@/lib/constants'

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Explore the{' '}
            <span className="text-gradient">Cosmos</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary mb-8 animate-slide-up">
            Discover the wonders of space through simple explanations, stunning visuals, and interactive experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" asChild>
              <Link href="/planets">
                Start Exploring →
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          What Would You Like to Explore?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <Link key={topic.id} href={topic.href}>
              <Card hover className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-text-secondary text-sm">{topic.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Journey Through Space?
          </h2>
          <p className="text-text-secondary mb-6">
            From tiny Mercury to giant Neptune, from newborn stars to ancient galaxies — the universe is waiting for you.
          </p>
          <Button size="lg" asChild>
            <Link href="/planets">
              Begin Your Adventure 🚀
            </Link>
          </Button>
        </Card>
      </section>
    </PageLayout>
  )
}