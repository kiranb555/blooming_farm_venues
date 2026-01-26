/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'blooming_farm_venues';

const nextConfig = {
  // GitHub Pages configuration
  basePath: isProd && process.env.DEPLOY_ENV !== 'AMPLIFY' ? `/${repoName}` : '',
  assetPrefix: isProd && process.env.DEPLOY_ENV !== 'AMPLIFY' ? `/${repoName}/` : '',
  // Add custom headers for optimized caching
  async headers() {
    return [
      // Cache static assets for 1 year (they get hashed in production)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images and fonts for 1 month
      {
        source: '/(.*).(jpg|jpeg|png|webp|svg|gif|ico|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, must-revalidate',
          },
        ],
      },
      // Cache CSS and JS for 1 week
      {
        source: '/(.*).(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, must-revalidate',
          },
        ],
      },
      // Default cache for HTML pages (no cache)
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
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