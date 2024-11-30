/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.eclairciepaysages.fr/", // Remplacez par votre URL
  generateRobotsTxt: true, // Génère automatiquement un fichier robots.txt
  sitemapSize: 5000, // Nombre maximum d'URL dans chaque fichier sitemap
  changefreq: "weekly", // Fréquence de mise à jour suggérée pour les pages
  priority: 0.7, // Priorité par défaut pour les pages
  exclude: ["/404"],
  generateIndexSitemap: true,
};
