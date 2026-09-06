// Build-time prerendering.
// After the normal Vite client build, this renders every route with
// react-helmet-async on the server and writes a static HTML file per route
// (dist/tours/polar-bear-photography-tour/index.html, etc.) whose <head>
// already contains that page's title, description, OG/Twitter tags,
// canonical URL and JSON-LD. The <body> stays the normal SPA shell, so
// runtime behaviour, design and animations are completely unchanged.

import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, ".ssr-build");

// 1. Build the server bundle for the prerenderer.
await build({
  root,
  logLevel: "warn",
  build: {
    ssr: path.join(root, "src/entry-server.tsx"),
    outDir: ssrDir,
    emptyOutDir: true,
    ssrEmitAssets: false,
  },
});

const { getRoutes, renderHead } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

// 2. Read the built SPA shell.
const template = readFileSync(path.join(distDir, "index.html"), "utf-8");

// Tags the per-route head replaces, so we don't ship duplicates.
const MANAGED = /\s*<(title>[\s\S]*?<\/title|meta\s+(?:name="(?:description|twitter:title|twitter:description|twitter:image)"|property="og:[^"]*")[^>]*\/?|link\s+rel="canonical"[^>]*\/?)>/g;

let count = 0;
for (const route of getRoutes()) {
  const head = renderHead(route);
  if (!head) continue;

  const html = template
    .replace(MANAGED, "")
    .replace("</head>", `    ${head}\n  </head>`);

  const outPath =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.replace(/^\//, ""), "index.html");

  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  count++;
}

rmSync(ssrDir, { recursive: true, force: true });

console.log(`prerendered ${count} routes with unique <head> metadata.`);
