export default async function sitemap() {
  const baseUrl = "https://marahel.com.sa";
  const locales = ["ar", "en"];

  const pages = ["", "morshed", "/morshed/contact_us"];

  const now = new Date().toISOString();

  const sitemapEntries = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified: now,
    }))
  );

  return sitemapEntries;
}
