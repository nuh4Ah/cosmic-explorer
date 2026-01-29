import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'

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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Space <span className="text-gradient">Phenomena</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Dive into the universe's most incredible events and mysterious objects.
            </p>
          </div>

          <Card className="text-center">
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-text-secondary">
              Black holes, supernovas, and cosmic wonders await. We're building something amazing!
            </p>
          </Card>
        </section>
      </PageLayout>
    </>
  )
}