import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono'
})

export const metadata: Metadata = {
  title: 'Cosmic Explorer | Learn About Space',
  description: 'Discover the wonders of the universe through simple explanations about planets, stars, galaxies, and space phenomena.',
  keywords: ['space', 'astronomy', 'planets', 'stars', 'galaxies', 'education'],
  openGraph: {
    title: 'Cosmic Explorer | Learn About Space',
    description: 'Explore the universe with easy-to-understand guides',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmic Explorer',
    description: 'Learn about space in a simple, fun way',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-space-black text-text-primary font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}