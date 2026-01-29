import PageLayout from '@/components/layout/PageLayout'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Learn More | Cosmic Explorer',
  description: 'Space glossary, learning resources, stargazing tips, and frequently asked questions about astronomy.',
}

const glossary = [
  { term: 'Asteroid', definition: 'Rocky objects orbiting the Sun, mostly found between Mars and Jupiter.' },
  { term: 'Comet', definition: 'Icy bodies that develop tails when approaching the Sun.' },
  { term: 'Constellation', definition: 'A group of stars forming a recognizable pattern in the night sky.' },
  { term: 'Eclipse', definition: 'When one celestial body passes into the shadow of another.' },
  { term: 'Exoplanet', definition: 'A planet that orbits a star outside our solar system.' },
  { term: 'Galaxy', definition: 'A massive system of stars, gas, and dust held together by gravity.' },
  { term: 'Light-Year', definition: 'The distance light travels in one year (about 9.5 trillion km).' },
  { term: 'Meteor', definition: 'A space rock burning up in Earth\'s atmosphere (shooting star).' },
  { term: 'Nebula', definition: 'A giant cloud of gas and dust in space where stars form.' },
  { term: 'Orbit', definition: 'The path one object takes around another due to gravity.' },
  { term: 'Quasar', definition: 'An extremely bright and distant active galactic nucleus.' },
  { term: 'Supernova', definition: 'The explosive death of a massive star.' },
]

const resources = [
  {
    category: 'Official Space Agencies',
    items: [
      { name: 'NASA', url: 'https://nasa.gov', description: 'US space agency with missions, images, and news' },
      { name: 'ESA', url: 'https://esa.int', description: 'European Space Agency missions and discoveries' },
      { name: 'SpaceX', url: 'https://spacex.com', description: 'Private space exploration company' },
    ],
  },
  {
    category: 'Learning Platforms',
    items: [
      { name: 'NASA Kids Club', url: 'https://nasa.gov/kidsclub', description: 'Games and activities for young explorers' },
      { name: 'Khan Academy Astronomy', url: 'https://khanacademy.org', description: 'Free astronomy courses' },
      { name: 'Crash Course Astronomy', url: 'https://youtube.com', description: 'Educational video series' },
    ],
  },
  {
    category: 'Sky Watching Apps',
    items: [
      { name: 'Stellarium', url: 'https://stellarium.org', description: 'Free planetarium software' },
      { name: 'SkySafari', url: 'https://skysafariastronomy.com', description: 'Mobile astronomy app' },
      { name: 'Star Walk 2', url: 'https://starwalk.space', description: 'Interactive star map' },
    ],
  },
]

const stargazingTips = [
  {
    icon: '🌙',
    title: 'Find Dark Skies',
    tip: 'Get away from city lights. The darker the sky, the more stars you\'ll see!',
  },
  {
    icon: '🔦',
    title: 'Use Red Light',
    tip: 'Red flashlights preserve your night vision better than white light.',
  },
  {
    icon: '⏰',
    title: 'Give Your Eyes Time',
    tip: 'It takes 20-30 minutes for your eyes to fully adjust to darkness.',
  },
  {
    icon: '🌑',
    title: 'Check the Moon Phase',
    tip: 'New moon nights are best for stargazing — no moonlight to wash out stars.',
  },
  {
    icon: '🧥',
    title: 'Dress Warmly',
    tip: 'Even summer nights get cold when you\'re sitting still for hours!',
  },
  {
    icon: '🗺️',
    title: 'Use a Star Chart',
    tip: 'Apps or printed charts help you identify constellations and planets.',
  },
]

const faqs = [
  {
    question: 'How far away are the stars?',
    answer: 'The closest star (after the Sun) is Proxima Centauri, about 4.2 light-years away. That\'s roughly 40 trillion kilometers!',
  },
  {
    question: 'Why do stars twinkle?',
    answer: 'Stars twinkle because their light passes through Earth\'s moving atmosphere, which bends and distorts it slightly.',
  },
  {
    question: 'Can I see other galaxies?',
    answer: 'Yes! The Andromeda Galaxy is visible to the naked eye on dark nights. It\'s 2.5 million light-years away.',
  },
  {
    question: 'What\'s the difference between a meteor and a meteorite?',
    answer: 'A meteor burns up in the atmosphere (shooting star). If pieces reach the ground, they\'re called meteorites.',
  },
  {
    question: 'How many stars can I see without a telescope?',
    answer: 'From a dark location, you can see about 2,000-3,000 stars with your naked eye at any given time.',
  },
  {
    question: 'When is the best time to stargaze?',
    answer: 'The hours after sunset and before sunrise are best. Avoid nights with a full moon for optimal viewing.',
  },
]

export default function LearnPage() {
  return (
    <PageLayout className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Keep{' '}
          <span className="text-gradient">Exploring</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Your journey through the cosmos doesn't end here. Explore our glossary, 
          resources, and stargazing tips to deepen your understanding of the universe.
        </p>
      </div>

      {/* Glossary */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Space Glossary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {glossary.map((item) => (
            <Card key={item.term}>
              <h3 className="font-bold text-lg text-nebula-purple mb-2">{item.term}</h3>
              <p className="text-sm text-text-secondary">{item.definition}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Recommended Resources</h2>
        <div className="space-y-8">
          {resources.map((section) => (
            <div key={section.category}>
              <h3 className="text-xl font-bold mb-4 text-star-blue">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.items.map((resource) => (
                  <Card key={resource.name} hover>
                    <h4 className="font-bold mb-2">{resource.name}</h4>
                    <p className="text-sm text-text-secondary mb-3">{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-nebula-purple hover:text-star-blue transition-colors"
                    >
                      Visit Site →
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stargazing Tips */}
      <div className="mb-16 bg-gradient-to-r from-nebula-purple/10 to-star-blue/10 rounded-xl p-8 border border-nebula-purple/30">
        <h2 className="text-3xl font-bold mb-8 text-center">Stargazing Tips for Beginners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stargazingTips.map((tip) => (
            <div key={tip.title} className="text-center space-y-2">
              <div className="text-4xl mb-2">{tip.icon}</div>
              <h3 className="font-bold text-nebula-purple">{tip.title}</h3>
              <p className="text-sm text-text-secondary">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <h3 className="font-bold text-lg mb-2 text-star-blue">{faq.question}</h3>
              <p className="text-text-secondary">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}