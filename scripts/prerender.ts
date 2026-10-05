import fs from 'fs';
import path from 'path';
import { getSiteUrls, generateSitemapXml } from '../src/utils/sitemapGenerator';
import { parsePath } from '../src/utils/router';
import { injectSeoIntoHtml, CANONICAL_DOMAIN } from '../src/utils/seo';

async function prerender() {
  console.log('🚀 Starting First Open School Static Site Generation (SSG)...');
  const distDir = path.resolve(process.cwd(), 'dist');

  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ directory not found! Run "vite build" first.');
    process.exit(1);
  }

  const baseHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error('❌ dist/index.html not found!');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(baseHtmlPath, 'utf-8');
  const urls = getSiteUrls(CANONICAL_DOMAIN);
  console.log(`📄 Found ${urls.length} site URLs to prerender...`);

  let count = 0;

  for (const entry of urls) {
    const urlObj = new URL(entry.loc);
    const pathname = urlObj.pathname;
    const cleanPath = pathname.replace(/^\/+|\/+$/g, '');

    const route = parsePath(pathname);
    const renderedHtml = injectSeoIntoHtml(baseTemplate, route, true);

    if (!cleanPath) {
      // Root index.html
      fs.writeFileSync(path.join(distDir, 'index.html'), renderedHtml, 'utf-8');
    } else {
      // Subpage directory e.g. dist/encyclopedia/index.html
      const pageDir = path.join(distDir, cleanPath);
      fs.mkdirSync(pageDir, { recursive: true });
      fs.writeFileSync(path.join(pageDir, 'index.html'), renderedHtml, 'utf-8');

      // Also create cleanUrl HTML e.g. dist/encyclopedia.html
      const cleanHtmlPath = path.join(distDir, `${cleanPath}.html`);
      fs.writeFileSync(cleanHtmlPath, renderedHtml, 'utf-8');
    }

    count++;
  }

  // 1. Generate updated canonical XML Sitemap
  const sitemapXml = generateSitemapXml(CANONICAL_DOMAIN);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'sitemap.xml'), sitemapXml, 'utf-8');

  // 2. Ensure robots.txt is present
  const robotsSrc = path.resolve(process.cwd(), 'public', 'robots.txt');
  if (fs.existsSync(robotsSrc)) {
    fs.copyFileSync(robotsSrc, path.join(distDir, 'robots.txt'));
  }

  // 3. Ensure llms.txt & llms-full.txt are present
  const llmsSrc = path.resolve(process.cwd(), 'public', 'llms.txt');
  if (fs.existsSync(llmsSrc)) {
    fs.copyFileSync(llmsSrc, path.join(distDir, 'llms.txt'));
  }
  const llmsFullSrc = path.resolve(process.cwd(), 'public', 'llms-full.txt');
  if (fs.existsSync(llmsFullSrc)) {
    fs.copyFileSync(llmsFullSrc, path.join(distDir, 'llms-full.txt'));
  }

  // 4. Generate Cloudflare Pages & Netlify _headers with X-Robots-Tag
  const headersContent = `/*
  X-Robots-Tag: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
  Access-Control-Allow-Origin: *
`;
  fs.writeFileSync(path.join(distDir, '_headers'), headersContent, 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'public', '_headers'), headersContent, 'utf-8');

  // 5. Generate vercel.json with X-Robots-Tag
  const vercelConfig = {
    headers: [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          }
        ]
      }
    ]
  };
  fs.writeFileSync(path.join(distDir, 'vercel.json'), JSON.stringify(vercelConfig, null, 2), 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'vercel.json'), JSON.stringify(vercelConfig, null, 2), 'utf-8');

  // 6. Generate Apache .htaccess with X-Robots-Tag
  const htaccessContent = `<IfModule mod_headers.c>
  Header set X-Robots-Tag "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
</IfModule>
`;
  fs.writeFileSync(path.join(distDir, '.htaccess'), htaccessContent, 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'public', '.htaccess'), htaccessContent, 'utf-8');

  console.log(`✅ Successfully prerendered ${count} static pages with Self-Canonical URLs, full metadata, and X-Robots-Tag!`);
}

prerender().catch(err => {
  console.error('❌ Prerendering failed:', err);
  process.exit(1);
});
