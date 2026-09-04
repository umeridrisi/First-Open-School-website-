import { ALPHABET_DATA, DIGIT_DATA } from '../data/curriculumData';
import { ENCYCLOPEDIA_ENTRIES, ENCYCLOPEDIA_CATEGORIES } from '../data/encyclopediaData';

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

/**
 * Generates all site URLs for the sitemap
 */
export function getSiteUrls(baseUrl: string = 'https://firstopenschool.com'): SitemapEntry[] {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0];

  const urls: SitemapEntry[] = [
    // Core Root Hub
    { loc: `${cleanBase}/`, lastmod: today, changefreq: 'daily', priority: 1.0 },

    // Primary Curriculum Hubs
    { loc: `${cleanBase}/alphabets`, lastmod: today, changefreq: 'weekly', priority: 0.95 },
    { loc: `${cleanBase}/digits`, lastmod: today, changefreq: 'weekly', priority: 0.95 },
    { loc: `${cleanBase}/encyclopedia`, lastmod: today, changefreq: 'daily', priority: 0.95 },
    { loc: `${cleanBase}/tracing`, lastmod: today, changefreq: 'weekly', priority: 0.85 },
    
    // Interactive Games & Modules
    { loc: `${cleanBase}/bubble-pop`, lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { loc: `${cleanBase}/counting-feast`, lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { loc: `${cleanBase}/card-match`, lastmod: today, changefreq: 'monthly', priority: 0.8 },
    { loc: `${cleanBase}/phonics-stories`, lastmod: today, changefreq: 'weekly', priority: 0.85 },
    { loc: `${cleanBase}/assessment`, lastmod: today, changefreq: 'weekly', priority: 0.8 },
    { loc: `${cleanBase}/parental-dashboard`, lastmod: today, changefreq: 'monthly', priority: 0.75 },

    // Trust, Safety, Editorial & About Pages
    { loc: `${cleanBase}/privacy`, lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { loc: `${cleanBase}/terms`, lastmod: today, changefreq: 'monthly', priority: 0.7 },
    { loc: `${cleanBase}/data-safety`, lastmod: today, changefreq: 'monthly', priority: 0.75 },
    { loc: `${cleanBase}/editorial-policy`, lastmod: today, changefreq: 'monthly', priority: 0.75 },
    { loc: `${cleanBase}/about`, lastmod: today, changefreq: 'monthly', priority: 0.8 }
  ];

  // All 26 Alphabets Deep Permalinks
  ALPHABET_DATA.forEach(letter => {
    urls.push({
      loc: `${cleanBase}/alphabets/${letter.char.toLowerCase()}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.85
    });
  });

  // All 21 Digits (0 to 20) Deep Permalinks
  DIGIT_DATA.forEach(digit => {
    urls.push({
      loc: `${cleanBase}/digits/${digit.value}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.85
    });
  });

  // Encyclopedia Category Hubs
  ENCYCLOPEDIA_CATEGORIES.forEach(cat => {
    urls.push({
      loc: `${cleanBase}/encyclopedia/category/${cat.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.85
    });
  });

  // All 48 Kids Encyclopedia In-Depth Articles
  ENCYCLOPEDIA_ENTRIES.forEach(entry => {
    urls.push({
      loc: `${cleanBase}/encyclopedia/${entry.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.9
    });
  });

  return urls;
}

/**
 * Builds standard XML sitemap
 */
export function generateSitemapXml(baseUrl: string = 'https://firstopenschool.com'): string {
  const entries = getSiteUrls(baseUrl);

  const xmlItems = entries.map(e => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(2)}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlItems}
</urlset>`;
}
