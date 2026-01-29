# 🌌 Cosmic Explorer

A beautiful, performant space education website built with Next.js 14, TypeScript, and Tailwind CSS.

![Cosmic Explorer](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Phase](https://img.shields.io/badge/Phase-3%20Complete-success?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm (recommended) or npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nuh4Ah/cosmic-explorer.git
   cd cosmic-explorer
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## 🎨 Design System

### Color Palette
- **Deep Space Black:** `#0a0e27` - Background
- **Nebula Purple:** `#8b5cf6` - Primary accent
- **Star Blue:** `#3b82f6` - Links and CTAs
- **Cosmic Pink:** `#ec4899` - Highlights

### Typography
- **Headings:** Inter (Bold)
- **Body:** Inter (Regular)
- **Accent:** Space Mono (Monospace)

## 📂 Project Structure

```
cosmic-explorer/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── planets/           # Planets page (FULL CONTENT)
│   ├── stars/             # Stars page (FULL CONTENT)
│   ├── galaxies/          # Galaxies page (FULL CONTENT)
│   ├── phenomena/         # Phenomena page (FULL CONTENT)
│   ├── learn/             # Learning resources
│   └── about/             # About page
├── components/
│   ├── layout/            # Header, Footer, PageLayout
│   ├── cards/             # PlanetCard, StarCard
│   ├── interactive/       # StarfieldBg, SolarSystem
│   └── ui/                # Reusable UI components
├── lib/                   # Constants and utilities
├── styles/                # Global CSS
└── public/                # Static assets
```

## 🛠️ Development

### Build for Production
```bash
pnpm build
pnpm start
```

### Run Linter
```bash
pnpm lint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nuh4Ah/cosmic-explorer)

## ✅ Development Progress

### Phase 1 ✅ Complete
- ✅ Sticky navigation with mobile menu
- ✅ Responsive design system
- ✅ Hero section with gradient text
- ✅ Topic cards grid
- ✅ Footer with links
- ✅ Accessibility features (skip links, focus indicators)
- ✅ Performance optimizations

### Phase 2 ✅ Complete
- ✅ Animated starfield background
- ✅ Interactive planets page with full solar system
- ✅ Clickable planet cards with expandable details
- ✅ Interactive SVG solar system visualization
- ✅ Learn More page with resources and tips
- ✅ About page with mission and navigation guide

### Phase 3 ✅ Complete
- ✅ **Stars page** with complete lifecycle and star types
- ✅ **Galaxies page** with types and famous galaxies
- ✅ **Phenomena page** with black holes, supernovas, dark matter
- ✅ StarCard component with hover effects
- ✅ Comprehensive data for all celestial objects
- ✅ All 7 pages fully functional with rich content

### Phase 4 🔜 Future Enhancements
- 🔜 Search functionality across all content
- 🔜 Planet comparison tool (side-by-side)
- 🔜 Dark/light mode toggle
- 🔜 Favorites/bookmarks with localStorage
- 🔜 NASA API integration for real images
- 🔜 Interactive quizzes

## 🎯 Features

- 🌌 **7 Complete Pages** - Homepage, Planets, Stars, Galaxies, Phenomena, Learn, About
- ⭐ **Interactive Learning** - Clickable visualizations and expandable cards
- 🌟 **Animated Starfield** - Beautiful twinkling background on all pages
- 🪐 **Solar System Map** - Interactive SVG diagram with planet selection
- 🔭 **Stellar Lifecycle** - 8-stage star evolution visualization
- 🌌 **Galaxy Types** - Spiral, Elliptical, Irregular with examples
- ✨ **Cosmic Phenomena** - Black holes, supernovas, dark matter explained
- 📱 **Mobile-First Design** - Perfect experience on all devices
- ♿ **Accessible** - WCAG 2.1 AA compliant
- ⚡ **Fast Performance** - Optimized for speed
- 🎨 **Beautiful UI** - Dark space theme with smooth animations

## 📸 Pages Overview

### 🏠 Home
Welcome page with animated hero, topic cards, and starfield background.

### 🪐 Planets (FULL CONTENT)
- Interactive SVG solar system diagram
- 8 planet cards with expandable fun facts
- Quick stats: distance, size, temperature
- Fun facts section with solar system statistics

### ⭐ Stars (FULL CONTENT)
- Complete stellar lifecycle (8 stages)
- 6 types of stars with detailed descriptions
- Famous stars: Polaris, Sirius, Betelgeuse, Rigel
- Temperature, size, and examples for each type

### 🌌 Galaxies (FULL CONTENT)
- 3 galaxy types: Spiral, Elliptical, Irregular
- 5 famous galaxies with details and fun facts
- Milky Way deep dive section
- Galaxy collision explanation

### ✨ Phenomena (FULL CONTENT)
- Black holes with simple analogies
- Supernovas and their cosmic impact
- Nebulas as stellar nurseries
- Dark matter and dark energy explained
- Cosmic radiation basics

### 📚 Learn More
- 4 recommended astronomy resources
- Stargazing tips for beginners (4 tips)
- FAQ section with common questions

### ℹ️ About
- Mission statement
- Target audience breakdown
- Navigation guide
- Tech stack showcase

## 💡 Educational Content

### Content Statistics
- **200+ astronomical facts**
- **8 planets** with detailed information
- **6 star types** explained
- **5 famous galaxies** featured
- **5 cosmic phenomena** demystified
- **4 famous stars** highlighted
- **All content** written at 8th-grade reading level

## 📄 License

MIT License - feel free to use this project for learning and inspiration!

## 👋 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Built with curiosity and code 🚀✨

**Repository:** [github.com/nuh4Ah/cosmic-explorer](https://github.com/nuh4Ah/cosmic-explorer)

**Status:** Production Ready | All 7 pages complete with rich educational content