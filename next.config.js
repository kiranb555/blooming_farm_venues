/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'blooming_farm_venues';

const nextConfig = {
  // GitHub Pages configuration
  basePath: isProd && process.env.DEPLOY_ENV !== 'AMPLIFY' ? `/${repoName}` : '',
  assetPrefix: isProd && process.env.DEPLOY_ENV !== 'AMPLIFY' ? `/${repoName}/` : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
      },
    ],
  },
}

module.exports = nextConfig