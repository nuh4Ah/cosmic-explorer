'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchBar from '@/components/ui/SearchBar'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/planets', label: 'Planets' },
  { href: '/stars', label: 'Stars' },
  { href: '/galaxies', label: 'Galaxies' },
  { href: '/phenomena', label: 'Phenomena' },
  { href: '/learn', label: 'Learn' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 bg-space-black/90 backdrop-blur-md border-b border-space-hover">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            <span className="text-2xl">🌌</span>
            <span className="text-xl font-bold text-gradient hidden sm:inline">
              Cosmic Explorer
            </span>
            <span className="text-xl font-bold text-gradient sm:hidden">
              Cosmic
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 xl:space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-nebula-purple whitespace-nowrap ${
                  pathname === link.href
                    ? 'text-nebula-purple'
                    : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-space-hover transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Search Bar - Mobile (below header when menu open) */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-space-hover">
            <SearchBar />
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-space-hover" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-base font-medium transition-colors hover:text-nebula-purple ${
                  pathname === link.href
                    ? 'text-nebula-purple'
                    : 'text-text-secondary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}