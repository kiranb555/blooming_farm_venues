// Import constants
import { 
  FORMATED_PHONE, 
  PHONE, 
  ADDRESS as ADDRESS_STRING, 
  SOCIAL_MEDIA,
  LATTITUDE,
  LONGITUDE
} from '@/components/utils/constants';

// Base URL for all links
const SITE_URL = 'https://www.bloomingfarmsvenue.com';

// Business Information
const BUSINESS = {
  name: 'Blooming Farm Venues',
  description: 'Stunning farm wedding venue and event center in a picturesque setting. Perfect for weddings, receptions, and special celebrations.',
  url: SITE_URL,
  phone: `+1-${FORMATED_PHONE.replace(/-/g, '')}`, // Converts 800-400-8667 to +18004008667
  priceRange: '$$',
  image: `${SITE_URL}/og_img.png`, // Using the OG image from public directory
};

// Parse the address string into components
const parseAddress = (addressString) => {
  const [street, cityStateZip] = addressString.split(',').map(s => s.trim());
  const [city, stateZip] = cityStateZip.split(/(?<=[A-Z]{2})\s+(?=\d{5})/);
  const [state, zip] = stateZip ? stateZip.split(' ') : ['', ''];
  
  return {
    street,
    city,
    state,
    zip,
    country: 'US',
    latitude: LATTITUDE,
    longitude: LONGITUDE,
  };
};

// Business Address
const ADDRESS = parseAddress(ADDRESS_STRING);

// Business Hours
const HOURS = {
  days: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  opens: '09:00',
  closes: '21:00',
};

// Social Media Profiles from constants
const SOCIAL_PROFILES = [
  SOCIAL_MEDIA.FACEBOOK,
  SOCIAL_MEDIA.INSTAGRAM,
  SOCIAL_MEDIA.YOUTUBE,
  SOCIAL_MEDIA.TWITTER,
  SOCIAL_MEDIA.LINKEDIN,
  SOCIAL_MEDIA.WHATSAPP,
].filter(Boolean); // Remove any undefined values

// Main Schema Definition
export const venueStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: BUSINESS.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.zip,
    addressCountry: ADDRESS.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: ADDRESS.latitude,
    longitude: ADDRESS.longitude,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: HOURS.days,
    opens: HOURS.opens,
    closes: HOURS.closes,
  },
  priceRange: BUSINESS.priceRange,
  image: BUSINESS.image,
  telephone: BUSINESS.phone,
  sameAs: SOCIAL_PROFILES,
  // Additional fields for better local SEO
  '@id': `${SITE_URL}/#venue`,
  logo: `${SITE_URL}/images/logo.png`,
  hasMap: `https://www.google.com/maps?q=${ADDRESS.latitude},${ADDRESS.longitude}`,
  // Add more specific types if needed (e.g., for wedding venues)
  '@type': ['EventVenue', 'Place', 'LocalBusiness'],
  // For wedding venues specifically
  event: {
    '@type': 'Event',
    name: 'Wedding Venue Rental',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: BUSINESS.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.state,
        postalCode: ADDRESS.zip,
        addressCountry: ADDRESS.country,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  },
};
