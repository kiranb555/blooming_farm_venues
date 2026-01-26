import { NextSeo } from 'next-seo';
import defaultSEO from '@/app/seo.config';

export const PageSeo = ({ title, description, path, image, noIndex = false }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloomingfarmsvenue.com/';
  const seo = {
    ...defaultSEO,
    title: title ? `${title} | ${defaultSEO.title.split('|')[0]}` : defaultSEO.title,
    description: description || defaultSEO.description,
    openGraph: {
      ...defaultSEO.openGraph,
      url: `${siteUrl}${path || ''}`,
      ...(image && {
        images: [
          {
            url: image.url || `${siteUrl}${image}`,
            width: image.width || 1200,
            height: image.height || 630,
            alt: image.alt || title || defaultSEO.title,
          },
        ],
      }),
    },
    noindex: noIndex,
    nofollow: noIndex,
  };

  return <NextSeo {...seo} />;
};

export const BlogPostSeo = ({ title, description, publishedAt, updatedAt, url, images = [] }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloomingfarmsvenue.com/';
  const date = new Date(publishedAt).toISOString();
  const modifiedDate = updatedAt || publishedAt;
  const featuredImages = images.length
    ? images.map((img) => ({
        url: img.url.startsWith('http') ? img.url : `${siteUrl}${img.url}`,
        width: img.width || 1200,
        height: img.height || 630,
        alt: img.alt || title,
      }))
    : defaultSEO.openGraph.images;

  return (
    <NextSeo
      title={`${title} | ${defaultSEO.title.split('|')[0]}`}
      description={description}
      canonical={url}
      openGraph={{
        type: 'article',
        article: {
          publishedTime: date,
          modifiedTime: new Date(modifiedDate).toISOString(),
          authors: [siteUrl],
        },
        url,
        title,
        description,
        images: featuredImages,
      }}
      twitter={{
        ...defaultSEO.twitter,
        cardType: 'summary_large_image',
      }}
    />
  );
};
