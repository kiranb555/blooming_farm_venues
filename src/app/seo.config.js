const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloomingfarmsvenue.com/';

const defaultSEO = {
  title: 'Blooming Farm Venues | Premier Wedding & Event Venue',
  titleTemplate: '%s | Blooming Farm Venues',
  description: 'Stunning farm wedding venue and event center in a picturesque setting. Perfect for weddings, receptions, corporate events, and special celebrations. Experience the perfect blend of rustic charm and modern amenities.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    site_name: 'Blooming Farm Venues',
    title: 'Blooming Farm Venues | Premier Wedding & Event Venue',
    description: 'Stunning farm wedding venue and event center in a picturesque setting. Perfect for weddings, receptions, and special celebrations.',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        secureUrl: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Blooming Farm Venues - Premier Wedding & Event Venue',
        type: 'image/jpeg',
      },
    ],
    site_name: 'Blooming Farm Venues',
    locale: 'en_US',
    type: 'website',
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
      content: 'wedding venue, venue, farm wedding, farm event, event center, function, rustic wedding, barn wedding, outdoor wedding, reception venue, party venue, event space, wedding location, farm stay, countryside venue, rustic venue, event planning, wedding planning, charlotte wedding venues, rustic barn venue, outdoor event space, wedding reception, ceremony venue, special events, corporate events, social gatherings, celebration venue, unique wedding venues, elegant farm venue',
    },
    {
      name: 'description',
      content: 'Premier farm wedding venue and event center offering a picturesque setting for weddings, receptions, and special functions. Experience the perfect blend of rustic charm and modern amenities at our beautiful farm venue.',
    },
    {
      property: 'og:description',
      content: 'Discover our stunning farm venue, perfect for weddings, corporate events, and special celebrations. A beautiful blend of rustic charm and modern facilities in a serene setting.',
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
