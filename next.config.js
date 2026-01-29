/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['images.unsplash.com'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig