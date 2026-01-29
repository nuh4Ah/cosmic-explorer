# 🌌 Cosmic Explorer

A beautiful, performant space education website built with Next.js 14, TypeScript, and Tailwind CSS.

![Cosmic Explorer](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Phase](https://img.shields.io/badge/Phase-2%20Complete-success?style=for-the-badge)

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
│   ├── planets/           # Planets page
│   ├── stars/             # Stars page
│   ├── galaxies/          # Galaxies page
│   ├── phenomena/         # Phenomena page
│   ├── learn/             # Learning resources
│   └── about/             # About page
├── components/
│   ├── layout/            # Header, Footer, PageLayout
│   ├── cards/             # PlanetCard, etc.
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
- ✅ Placeholder pages (Stars, Galaxies, Phenomena)

### Phase 3 🚧 Planned
- 🔜 Stars page with lifecycle visualization
- 🔜 Galaxies page with types and examples
- 🔜 Phenomena page (black holes, supernovas)
- 🔜 Search functionality
- 🔜 Planet comparison tool
- 🔜 Dark/light mode toggle

## 🎯 Features

- 🌌 **Interactive Learning** - Explore planets with clickable visualizations
- 🌟 **Animated Starfield** - Beautiful background with twinkling stars
- 🪐 **Solar System Map** - Interactive SVG diagram of our planetary system
- 📱 **Mobile-First Design** - Perfect experience on all devices
- ♿ **Accessible** - WCAG 2.1 AA compliant
- ⚡ **Fast Performance** - Optimized for speed
- 🎨 **Beautiful UI** - Dark space theme with smooth animations

## 📸 Pages Overview

### 🏠 Home
Welcome page with hero section, topic cards, and call-to-action.

### 🪐 Planets
Complete solar system exploration with:
- Interactive SVG solar system diagram
- 8 planet cards with expandable fun facts
- Quick stats and comparisons

### ⭐ Stars, 🌌 Galaxies, ✨ Phenomena
Placeholder pages with "Coming Soon" messages (ready for Phase 3 content).

### 📚 Learn More
- Recommended astronomy resources
- Stargazing tips for beginners
- FAQ section

### ℹ️ About
- Mission statement
- Who this site is for
- Navigation guide
- Tech stack details

## 📄 License

MIT License - feel free to use this project for learning and inspiration!

## 👋 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Built with curiosity and code 🚀✨

**Repository:** [github.com/nuh4Ah/cosmic-explorer](https://github.com/nuh4Ah/cosmic-explorer)