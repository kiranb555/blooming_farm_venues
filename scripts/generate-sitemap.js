const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Add all your routes here
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more routes as needed
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
