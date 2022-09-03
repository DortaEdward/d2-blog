/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'localhost:5058'],
  },
}

module.exports = nextConfig


// images.unsplash.com