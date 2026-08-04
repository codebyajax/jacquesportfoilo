import { MetadataRoute } from 'next';

const SITE_URL = 'https://komiazianou.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        allow: '/',
        disallow: [
          '/api/',     
          '/.next/',   
          '/private/',       
          '/*.json$',        
          '/*?*',      
        ],
        crawlDelay: 1,      
        userAgent: '*',
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}