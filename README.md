This is a [Next.js](https://nextjs.org) project for Blooming Farm Venues, a website showcasing farm venue services for events like weddings, birthdays, and corporate gatherings.

## Features

- **Static Site Generation**: Built with Next.js for optimal performance
- **Responsive Design**: Tailwind CSS for modern, mobile-first UI
- **Interactive Components**: Framer Motion animations and Swiper sliders
- **Contact Integration**: Email and SMS consent handling
- **SEO Optimized**: Next SEO and structured data
- **Map Integration**: Leaflet and Mapbox for location features

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build and Deployment

Build the application:

```bash
npm run build
```

Generate sitemap:

```bash
npm run sitemap
```

Export for static hosting:

```bash
npm run export
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Environment Variables

Create a `.env.local` file with:

```
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_app_password
ADMIN_EMAIL=admin@example.com
```

## Project Structure

- `src/app/`: Next.js App Router pages
- `src/components/`: Reusable UI components
- `src/data/`: Static data files
- `public/`: Static assets

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
