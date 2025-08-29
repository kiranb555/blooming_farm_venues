/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/blooming_farm_fe', // Replace with your repository name
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig