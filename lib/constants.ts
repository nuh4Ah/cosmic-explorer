export interface Planet {
  id: string
  name: string
  nickname: string
  distance: string
  size: string
  temperature: string
  funFact: string
  image: string
  color: string
}

export const planets: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    nickname: 'The Swift Planet',
    distance: '77 million km from Earth',
    size: '38% of Earth\'s diameter',
    temperature: '167°C average',
    funFact: 'Mercury orbits the Sun in just 88 days, but one day on Mercury lasts 59 Earth days!',
    image: '/images/planets/mercury.webp',
    color: '#8c7853',
  },
  {
    id: 'venus',
    name: 'Venus',
    nickname: 'Earth\'s Twin',
    distance: '41 million km from Earth',
    size: '95% of Earth\'s diameter',
    temperature: '464°C average',
    funFact: 'Venus is the hottest planet in our solar system, even hotter than Mercury!',
    image: '/images/planets/venus.webp',
    color: '#e8cda2',
  },
  {
    id: 'earth',
    name: 'Earth',
    nickname: 'The Blue Planet',
    distance: '0 km (we\'re here!)',
    size: '12,742 km diameter',
    temperature: '15°C average',
    funFact: 'Earth is the only planet we know of that has life. About 71% is covered by water!',
    image: '/images/planets/earth.webp',
    color: '#4a90e2',
  },
  {
    id: 'mars',
    name: 'Mars',
    nickname: 'The Red Planet',
    distance: '225 million km from Earth',
    size: 'Half of Earth\'s diameter',
    temperature: '-60°C average',
    funFact: 'Mars has the tallest volcano in our solar system — Olympus Mons is 3x taller than Mt. Everest!',
    image: '/images/planets/mars.webp',
    color: '#cd5c5c',
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    nickname: 'The Gas Giant',
    distance: '778 million km from Earth',
    size: '11x Earth\'s diameter',
    temperature: '-145°C average',
    funFact: 'Jupiter\'s Great Red Spot is a storm that\'s been raging for over 300 years!',
    image: '/images/planets/jupiter.webp',
    color: '#d4a373',
  },
  {
    id: 'saturn',
    name: 'Saturn',
    nickname: 'The Ringed Planet',
    distance: '1.4 billion km from Earth',
    size: '9x Earth\'s diameter',
    temperature: '-178°C average',
    funFact: 'Saturn has 82 known moons, and its rings are made of billions of ice chunks!',
    image: '/images/planets/saturn.webp',
    color: '#fad5a5',
  },
  {
    id: 'uranus',
    name: 'Uranus',
    nickname: 'The Tilted Planet',
    distance: '2.9 billion km from Earth',
    size: '4x Earth\'s diameter',
    temperature: '-224°C average',
    funFact: 'Uranus spins on its side, making it the only planet that rotates sideways!',
    image: '/images/planets/uranus.webp',
    color: '#7fd1e8',
  },
  {
    id: 'neptune',
    name: 'Neptune',
    nickname: 'The Windy Planet',
    distance: '4.5 billion km from Earth',
    size: '4x Earth\'s diameter',
    temperature: '-214°C average',
    funFact: 'Neptune has the fastest winds in our solar system, reaching speeds of 2,100 km/h!',
    image: '/images/planets/neptune.webp',
    color: '#4b70dd',
  },
]

export interface Topic {
  id: string
  title: string
  description: string
  icon: string
  href: string
  color: string
}

export const topics: Topic[] = [
  {
    id: 'planets',
    title: 'Planets',
    description: 'Explore the worlds in our solar system',
    icon: '🪐',
    href: '/planets',
    color: 'from-nebula-purple to-star-blue',
  },
  {
    id: 'stars',
    title: 'Stars',
    description: 'Discover how stars are born and die',
    icon: '⭐',
    href: '/stars',
    color: 'from-star-blue to-cosmic-pink',
  },
  {
    id: 'galaxies',
    title: 'Galaxies',
    description: 'Journey through the Milky Way and beyond',
    icon: '🌌',
    href: '/galaxies',
    color: 'from-cosmic-pink to-nebula-purple',
  },
  {
    id: 'phenomena',
    title: 'Phenomena',
    description: 'Uncover the mysteries of black holes and more',
    icon: '✨',
    href: '/phenomena',
    color: 'from-nebula-purple to-cosmic-pink',
  },
]

export interface StarType {
  id: string
  name: string
  description: string
  temperature: string
  size: string
  examples: string[]
  color: string
}

export const starTypes: StarType[] = [
  {
    id: 'red-giant',
    name: 'Red Giant',
    description: 'Massive, cool stars in the late stages of stellar evolution. They glow red because of their lower surface temperature.',
    temperature: '3,000-4,000K',
    size: '100-1000x Sun\'s radius',
    examples: ['Betelgeuse', 'Aldebaran', 'Arcturus'],
    color: '#ff6347',
  },
  {
    id: 'white-dwarf',
    name: 'White Dwarf',
    description: 'Small, dense remnants of dead stars. They\'re about the size of Earth but incredibly hot and heavy.',
    temperature: '8,000-40,000K',
    size: 'About Earth-sized',
    examples: ['Sirius B', 'Procyon B', '40 Eridani B'],
    color: '#f0f8ff',
  },
  {
    id: 'neutron-star',
    name: 'Neutron Star',
    description: 'Incredibly dense collapsed cores of massive stars. A sugar-cube sized piece would weigh billions of tons!',
    temperature: '600,000K',
    size: '20 km diameter',
    examples: ['Pulsar PSR B1919+21', 'Crab Pulsar'],
    color: '#9370db',
  },
  {
    id: 'black-hole',
    name: 'Black Hole',
    description: 'Regions of spacetime where gravity is so strong that nothing, not even light, can escape from it.',
    temperature: 'Near absolute zero',
    size: 'Varies (event horizon)',
    examples: ['Cygnus X-1', 'Sagittarius A*'],
    color: '#1a1a2e',
  },
  {
    id: 'blue-giant',
    name: 'Blue Giant',
    description: 'Extremely hot and massive stars that burn bright and fast. They live fast and die young!',
    temperature: '10,000-50,000K',
    size: '10-100x Sun\'s radius',
    examples: ['Rigel', 'Spica', 'Bellatrix'],
    color: '#4169e1',
  },
  {
    id: 'yellow-dwarf',
    name: 'Yellow Dwarf',
    description: 'Medium-sized stars like our Sun. They\'re the perfect temperature for life-supporting planets!',
    temperature: '5,000-6,000K',
    size: 'About 1x Sun\'s radius',
    examples: ['The Sun', 'Alpha Centauri A'],
    color: '#ffd700',
  },
]

export interface FamousStar {
  name: string
  constellation: string
  description: string
  distance: string
  type: string
  icon: string
}

export const famousStars: FamousStar[] = [
  {
    name: 'Polaris',
    constellation: 'Ursa Minor',
    description: 'The North Star has guided travelers for centuries. It stays fixed in the northern sky.',
    distance: '433 light-years',
    type: 'Yellow Supergiant',
    icon: '🧭',
  },
  {
    name: 'Sirius',
    constellation: 'Canis Major',
    description: 'The brightest star in our night sky. Ancient Egyptians based their calendar on it!',
    distance: '8.6 light-years',
    type: 'Blue-white Main Sequence',
    icon: '🔆',
  },
  {
    name: 'Betelgeuse',
    constellation: 'Orion',
    description: 'A red supergiant that could explode as a supernova any day now (in cosmic terms)!',
    distance: '640 light-years',
    type: 'Red Supergiant',
    icon: '🔴',
  },
  {
    name: 'Rigel',
    constellation: 'Orion',
    description: 'A brilliant blue supergiant and one of the brightest stars visible from Earth.',
    distance: '860 light-years',
    type: 'Blue Supergiant',
    icon: '🔵',
  },
]

// Galaxy data
export interface Galaxy {
  id: string
  name: string
  type: string
  description: string
  distance: string
  funFact: string
  icon: string
  color: string
}

export const galaxies: Galaxy[] = [
  {
    id: 'milky-way',
    name: 'Milky Way',
    type: 'Barred Spiral',
    description: 'Our home galaxy! It contains our solar system and billions of other stars.',
    distance: 'We\'re inside it!',
    funFact: 'It takes 225-250 million years for our Sun to orbit the center of the Milky Way once!',
    icon: '🌌',
    color: '#8b5cf6',
  },
  {
    id: 'andromeda',
    name: 'Andromeda',
    type: 'Spiral',
    description: 'The nearest major galaxy to the Milky Way. It\'s on a collision course with us!',
    distance: '2.5 million light-years',
    funFact: 'In about 4.5 billion years, Andromeda and the Milky Way will merge into one giant galaxy!',
    icon: '🌀',
    color: '#3b82f6',
  },
  {
    id: 'triangulum',
    name: 'Triangulum',
    type: 'Spiral',
    description: 'The third-largest galaxy in our Local Group, after Andromeda and the Milky Way.',
    distance: '3 million light-years',
    funFact: 'It\'s one of the most distant objects visible to the naked eye under perfect conditions!',
    icon: '△️',
    color: '#ec4899',
  },
]