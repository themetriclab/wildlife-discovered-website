/**
 * Build-time entry point used by scripts/prerender.mjs.
 * It renders each route on the server purely to collect the <head> tags that
 * Seo.tsx / react-helmet-async produce, so every route can ship a static HTML
 * file with its own title, description, Open Graph tags, canonical and JSON-LD.
 *
 * The browser app (src/main.tsx) is untouched — runtime behaviour is identical.
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppRoutes } from "./App";
import { tours } from "./data/tours";
import { blogPosts } from "./data/blog";

export function getRoutes(): string[] {
  return [
    "/",
    "/tours",
    "/contact",
    "/about",
    "/privacy-policy",
    "/blog",
    ...tours.map((t) => `/tours/${t.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
  ];
}

export function renderHead(url: string): string {
  const helmetContext: { helmet?: HelmetServerState } = {};
  renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  if (!helmet) return "";
  return [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");
}
