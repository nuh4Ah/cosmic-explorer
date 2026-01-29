import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'

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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="text-gradient">Stars</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Discover the life cycles of stars, from their birth in stellar nurseries to their spectacular deaths.
            </p>
          </div>

          <Card className="text-center">
            <div className="text-6xl mb-4">⭐</div>
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-text-secondary">
              We're preparing an amazing journey through the stellar lifecycle. Check back soon!
            </p>
          </Card>
        </section>
      </PageLayout>
    </>
  )
}