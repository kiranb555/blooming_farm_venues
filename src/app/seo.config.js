const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloomingfarmsvenue.com/';

const defaultSEO = {
  title: 'Blooming Farm Venues - Beautiful Event Spaces',
  titleTemplate: '%s | Blooming Farm Venues',
  description: 'Discover beautiful farm venues for your next event. Perfect for weddings, corporate events, and special occasions in a serene farm setting.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    site_name: 'Blooming Farm Venues',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Blooming Farm Venues',
      },
    ],
  },
  twitter: {
    handle: '@bloomingfarms',
    site: '@bloomingfarms',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
    {
      name: 'keywords',
      content: 'farm venues, event spaces, wedding venues, corporate events, outdoor events, farm weddings, rustic venues, charlotte farm, charlotte wedding venues, charlotte wedding venue, charlotte wedding venue, charlotte wedding venue, charlotte wedding venue, charlotte farm stay',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export default defaultSEO;
