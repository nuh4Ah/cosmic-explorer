'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { searchContent, SearchResult } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchContent(query)
      setResults(searchResults)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getTypeEmoji = (type: string) => {
    switch (type) {
      case 'planet': return '🪐'
      case 'star': return '⭐'
      case 'galaxy': return '🌌'
      case 'phenomenon': return '✨'
      default: return '🔍'
    }
  }

  const handleResultClick = (result: SearchResult) => {
    router.push(result.url)
    setQuery('')
    setIsOpen(false)
    setIsFocused(false)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search planets, stars, galaxies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className={
            `w-full px-4 py-2 pl-10 bg-space-card border rounded-lg text-sm
            focus:outline-none focus:ring-2 transition-all
            ${isFocused 
              ? 'border-nebula-purple ring-nebula-purple/50' 
              : 'border-space-hover'
            }`
          }
          aria-label="Search cosmic content"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-space-card border border-space-hover rounded-lg shadow-lg max-h-96 overflow-y-auto"
          >
            <div className="p-2">
              <p className="text-xs text-text-secondary px-3 py-2">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
              {results.slice(0, 8).map((result) => (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left px-3 py-3 rounded-lg hover:bg-space-hover transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{getTypeEmoji(result.type)}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-sm group-hover:text-nebula-purple transition-colors">
                          {result.title}
                        </h4>
                        <span className="text-xs px-2 py-0.5 bg-space-hover rounded capitalize">
                          {result.type}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
              {results.length > 8 && (
                <p className="text-xs text-text-secondary text-center py-2">
                  +{results.length - 8} more results
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      <AnimatePresence>
        {isOpen && query.length >= 2 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-space-card border border-space-hover rounded-lg shadow-lg p-4"
          >
            <p className="text-sm text-text-secondary text-center">
              No results found for "{query}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}