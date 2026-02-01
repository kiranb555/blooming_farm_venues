import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from './seo.config';
import Script from 'next/script';
import { venueStructuredData } from './structured-data';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Improve font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Improve font loading
});

// SEO Metadata
export const metadata = {
  title: {
    default: SEO.title,
    template: `%s | ${SEO.title.split('|')[0].trim()}`,
  },
  description: SEO.description,
  keywords: 'wedding venue, farm wedding, event space, rustic wedding, barn wedding, charlotte wedding venue, outdoor wedding, reception venue',
  authors: [{ name: 'Blooming Farm Venues' }],
  creator: 'Blooming Farm Venues',
  publisher: 'Blooming Farm Venues',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    ...SEO.openGraph,
    siteName: 'Blooming Farm Venues',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloomingfarmsvenue.com'}/og_img.png`,
        width: 1200,
        height: 630,
        alt: 'Blooming Farm Venues - Premier Wedding & Event Venue',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    ...SEO.twitter,
    card: 'summary_large_image',
    site: '@bloomingfarms',
    creator: '@bloomingfarms',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloomingfarmsvenue.com'}/og_img.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.bloomingfarmsvenue.com',
  },
};

// Generate JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Blooming Farm Venues',
  url: 'https://www.bloomingfarmsvenue.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.bloomingfarmsvenue.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.bloomingfarmsvenue.com" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(venueStructuredData) }}
        />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
        itemScope
        itemType="https://schema.org/EventVenue"
      >
        <Header />
        <main itemScope itemType="https://schema.org/WebPageElement">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        
        {/* Performance monitoring (uncomment and add your analytics code) */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR-GA-ID');
          `}
        </Script> */}
      </body>
    </html>
  );
}
