/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.eclairciepaysages.fr/",
  generateRobotsTxt: true,
  sitemapSize: 5000, // Assurez-vous que la taille est suffisante pour inclure toutes les URLs
  generateIndexSitemap: false, // Désactive la génération d'un index de sous-sitemaps
  exclude: ["/404"],
  additionalPaths: async () => [
    {
      loc: "/logo.webp", // Inclure le logo
      changefreq: "yearly",
      priority: 1.0,
    },
  ],
};
