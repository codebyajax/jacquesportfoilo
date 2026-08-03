/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://komiazianou.vercel.app",

  generateRobotsTxt: true,

  generateIndexSitemap: false,

  changefreq: "weekly",

  priority: 1,

  sitemapSize: 7000,

  exclude: ["/api/*", "/404", "/500"],

  robotsTxtOptions: {
    additionalSitemaps: ["https://komiazianou.vercel.app/sitemap.xml"],
  },
};
