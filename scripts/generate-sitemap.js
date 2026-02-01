const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Define all your routes with their priority and change frequency
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
  { url: '/about', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/contact', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
  { url: '/gallery', changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() },
  { url: '/events', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/pricing', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() },
  { url: '/testimonials', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
  { url: '/faq', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
  { url: '/blog', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() },
  { url: '/terms-of-service', changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() }
];

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({
      hostname: 'https://www.bloomingfarmsvenue.com/',
      lastmodDateOnly: false,
    });

    // Create a write stream to the public directory
    const writeStream = fs.createWriteStream(
      path.join(process.cwd(), 'public', 'sitemap.xml')
    );

    // Pipe the sitemap to the write stream
    sitemap.pipe(writeStream);

    // Add each route to the sitemap
    routes.forEach((route) => {
      sitemap.write(route);
    });

    // End the stream
    sitemap.end();

    // Wait for the sitemap to be written
    await streamToPromise(sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
