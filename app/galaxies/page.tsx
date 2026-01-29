import PageLayout from '@/components/layout/PageLayout'
import StarfieldBg from '@/components/interactive/StarfieldBg'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Galaxies | Cosmic Explorer',
  description: 'Journey through the Milky Way and explore the different types of galaxies in our universe.',
}

export default function GalaxiesPage() {
  return (
    <>
      <StarfieldBg />
      <PageLayout>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="text-gradient">Galaxies</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Explore the vast collections of stars, gas, and dust that make up our cosmic neighborhoods.
            </p>
          </div>

          <Card className="text-center">
            <div className="text-6xl mb-4">🌌</div>
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-text-secondary">
              We're mapping out the different types of galaxies and their mysteries. Stay tuned!
            </p>
          </Card>
        </section>
      </PageLayout>
    </>
  )
}