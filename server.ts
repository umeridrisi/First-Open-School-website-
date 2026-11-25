import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { generateSitemapXml } from "./src/utils/sitemapGenerator";
import { parsePath } from "./src/utils/router";
import { injectSeoIntoHtml, CANONICAL_DOMAIN } from "./src/utils/seo";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

// Enforce search engine indexing directives & preview headers on all responses
app.use((_req, res, next) => {
  res.setHeader("X-Robots-Tag", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  next();
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "First Open School", execution: "client-side" });
});

// ==========================================
// SEO & AI CRAWLER ENDPOINTS
// ==========================================
app.get("/robots.txt", (_req, res) => {
  const baseUrl = CANONICAL_DOMAIN;

  const robotsTxt = `# ==============================================================================
# First Open School - Robots.txt
# Early Literacy, Phonics, Numeracy & Kids Science Encyclopedia
# Standard: RFC 9309 (Robots Exclusion Protocol)
# Policy: Search = Allow | AI Model Training = Disallow | Live Reference = Allow
# ==============================================================================

# ------------------------------------------------------------------------------
# Search Engines (search=yes)
# ------------------------------------------------------------------------------
User-agent: Googlebot
Allow: /
Disallow: /api/

User-agent: Googlebot-Image
Allow: /
Disallow: /api/

User-agent: Bingbot
Allow: /
Disallow: /api/

User-agent: DuckDuckBot
Allow: /
Disallow: /api/

User-agent: Applebot
Allow: /
Disallow: /api/

# ------------------------------------------------------------------------------
# Live AI Reference & Citation Crawlers (use=reference)
# ------------------------------------------------------------------------------
User-agent: OAI-SearchBot
Allow: /
Disallow: /api/

User-agent: ChatGPT-User
Allow: /
Disallow: /api/

User-agent: PerplexityBot
Allow: /
Disallow: /api/

User-agent: Perplexity-User
Allow: /
Disallow: /api/

User-agent: Claude-SearchBot
Allow: /
Disallow: /api/

User-agent: Claude-User
Allow: /
Disallow: /api/

# ------------------------------------------------------------------------------
# AI Model Training Crawlers (ai-train=no)
# Official RFC 9309 directives respected by Google & AI vendors
# ------------------------------------------------------------------------------
User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: Cohere-ai
Disallow: /

# ------------------------------------------------------------------------------
# Default Crawlers
# ------------------------------------------------------------------------------
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*preview=*
Disallow: /*?*debug=*

# Canonical XML Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# LLM Documentation Standards
# Discoverable structured curriculum content for LLMs and AI Agents:
# ${baseUrl}/llms.txt
# ${baseUrl}/llms-full.txt
`;
  res.type("text/plain; charset=utf-8").send(robotsTxt);
});

app.get("/sitemap.xml", (_req, res) => {
  const xml = generateSitemapXml(CANONICAL_DOMAIN);
  res.type("application/xml; charset=utf-8").send(xml);
});

app.get("/llms.txt", (_req, res) => {
  const filePath = path.join(process.cwd(), "public", "llms.txt");
  if (fs.existsSync(filePath)) {
    res.type("text/plain; charset=utf-8").sendFile(filePath);
  } else {
    res.status(404).send("llms.txt not found");
  }
});

app.get("/llms-full.txt", (_req, res) => {
  const filePath = path.join(process.cwd(), "public", "llms-full.txt");
  if (fs.existsSync(filePath)) {
    res.type("text/plain; charset=utf-8").sendFile(filePath);
  } else {
    res.status(404).send("llms-full.txt not found");
  }
});

app.get("/favicon.svg", (_req, res) => {
  const filePath = path.join(process.cwd(), "public", "favicon.svg");
  if (fs.existsSync(filePath)) {
    res.type("image/svg+xml").sendFile(filePath);
  } else {
    res.status(404).send("favicon.svg not found");
  }
});

app.get("/favicon.ico", (_req, res) => {
  const filePath = path.join(process.cwd(), "public", "favicon.svg");
  if (fs.existsSync(filePath)) {
    res.type("image/svg+xml").sendFile(filePath);
  } else {
    res.status(404).send("favicon not found");
  }
});

app.get("/site.webmanifest", (_req, res) => {
  const filePath = path.join(process.cwd(), "public", "site.webmanifest");
  if (fs.existsSync(filePath)) {
    res.type("application/manifest+json").sendFile(filePath);
  } else {
    res.status(404).send("site.webmanifest not found");
  }
});

// Vite middleware & Server-Side HTML Canonical/SEO Injector
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);

    // Dynamic Self-Canonical & Metadata Injection for Development
    app.get("*", async (req, res, next) => {
      const url = req.originalUrl;
      if (url.startsWith("/api") || (path.extname(url) && !url.endsWith(".html"))) {
        return next();
      }
      try {
        const indexHtmlPath = path.resolve(process.cwd(), "index.html");
        let template = fs.readFileSync(indexHtmlPath, "utf-8");
        template = await vite.transformIndexHtml(url, template);
        const route = parsePath(req.path);
        const html = injectSeoIntoHtml(template, route, true);
        res.status(200).set({ 
          "Content-Type": "text/html; charset=utf-8",
          "X-Robots-Tag": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }).send(html);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { index: false }));

    // Static & Dynamic Self-Canonical Serving for Production
    app.get("*", (req, res, next) => {
      const url = req.originalUrl;
      if (url.startsWith("/api") || (path.extname(url) && !url.endsWith(".html"))) {
        return next();
      }
      try {
        const cleanPath = req.path.replace(/^\/+|\/+$/g, "");
        const subIndexHtmlPath = cleanPath ? path.join(distPath, cleanPath, "index.html") : path.join(distPath, "index.html");
        const cleanHtmlPath = cleanPath ? path.join(distPath, `${cleanPath}.html`) : "";

        // 1. Check if dedicated SSG prerendered file exists
        if (fs.existsSync(subIndexHtmlPath)) {
          const html = fs.readFileSync(subIndexHtmlPath, "utf-8");
          return res.status(200).set({ 
            "Content-Type": "text/html; charset=utf-8",
            "X-Robots-Tag": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          }).send(html);
        }
        if (cleanHtmlPath && fs.existsSync(cleanHtmlPath)) {
          const html = fs.readFileSync(cleanHtmlPath, "utf-8");
          return res.status(200).set({ 
            "Content-Type": "text/html; charset=utf-8",
            "X-Robots-Tag": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          }).send(html);
        }

        // 2. Dynamic fallback
        const indexHtmlPath = path.join(distPath, "index.html");
        if (!fs.existsSync(indexHtmlPath)) {
          return next();
        }
        const template = fs.readFileSync(indexHtmlPath, "utf-8");
        const route = parsePath(req.path);
        const html = injectSeoIntoHtml(template, route, true);
        res.status(200).set({ 
          "Content-Type": "text/html; charset=utf-8",
          "X-Robots-Tag": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }).send(html);
      } catch (err) {
        next(err);
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`First Open School server running on http://localhost:${PORT}`);
  });
}

startServer();
