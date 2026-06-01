import { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
    const domain = 'http://localhost:3000/'; 

  return {
    rules: {
      userAgent: '*',
      allow: '/', 
      disallow: ['/admin/', '/private/'], 
    }, 
    sitemap: `${domain}/sitemap.xml`,
  };
}
