import { planets, starTypes, famousStars, galaxies, phenomena } from './constants'

export interface SearchResult {
  id: string
  title: string
  type: 'planet' | 'star' | 'galaxy' | 'phenomenon'
  description: string
  url: string
  matchedText?: string
}

export function searchContent(query: string): SearchResult[] {
  if (!query || query.length < 2) return []

  const lowerQuery = query.toLowerCase()
  const results: SearchResult[] = []

  // Search planets
  planets.forEach(planet => {
    if (
      planet.name.toLowerCase().includes(lowerQuery) ||
      planet.nickname.toLowerCase().includes(lowerQuery) ||
      planet.funFact.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        id: planet.id,
        title: planet.name,
        type: 'planet',
        description: `${planet.nickname} - ${planet.distance}`,
        url: '/planets',
        matchedText: planet.funFact
      })
    }
  })

  // Search star types
  starTypes.forEach(star => {
    if (
      star.name.toLowerCase().includes(lowerQuery) ||
      star.description.toLowerCase().includes(lowerQuery) ||
      star.examples.some(ex => ex.toLowerCase().includes(lowerQuery))
    ) {
      results.push({
        id: star.id,
        title: star.name,
        type: 'star',
        description: star.description.substring(0, 100) + '...',
        url: '/stars',
        matchedText: star.examples.join(', ')
      })
    }
  })

  // Search famous stars
  famousStars.forEach(star => {
    if (
      star.name.toLowerCase().includes(lowerQuery) ||
      star.constellation.toLowerCase().includes(lowerQuery) ||
      star.description.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        id: star.name.toLowerCase().replace(/\s+/g, '-'),
        title: star.name,
        type: 'star',
        description: `${star.constellation} - ${star.type}`,
        url: '/stars',
        matchedText: star.description
      })
    }
  })

  // Search galaxies
  galaxies.forEach(galaxy => {
    if (
      galaxy.name.toLowerCase().includes(lowerQuery) ||
      galaxy.type.toLowerCase().includes(lowerQuery) ||
      galaxy.description.toLowerCase().includes(lowerQuery) ||
      galaxy.funFact.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        id: galaxy.id,
        title: galaxy.name,
        type: 'galaxy',
        description: `${galaxy.type} - ${galaxy.distance}`,
        url: '/galaxies',
        matchedText: galaxy.funFact
      })
    }
  })

  // Search phenomena
  phenomena.forEach(phenomenon => {
    if (
      phenomenon.name.toLowerCase().includes(lowerQuery) ||
      phenomenon.description.toLowerCase().includes(lowerQuery) ||
      phenomenon.analogy.toLowerCase().includes(lowerQuery) ||
      phenomenon.facts.some(fact => fact.toLowerCase().includes(lowerQuery))
    ) {
      results.push({
        id: phenomenon.id,
        title: phenomenon.name,
        type: 'phenomenon',
        description: phenomenon.description.substring(0, 100) + '...',
        url: '/phenomena',
        matchedText: phenomenon.analogy
      })
    }
  })

  return results
}

export function formatSearchQuery(query: string): string {
  return query.trim().toLowerCase()
}

export function highlightMatch(text: string, query: string): string {
  if (!query) return text
  
  const regex = new RegExp(`(${query})`, 'gi')
  return text.replace(regex, '<mark class="bg-nebula-purple/30 text-text-primary">$1</mark>')
}