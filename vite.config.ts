// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import path from "path";
import fs from "fs";

// Serves production-built assets (/assets/*) in dev mode so that netlify dev
// can proxy those requests to the Vite server and get the correct CSS/JS files.
const serveBuiltAssets = {
  name: "serve-built-assets",
  apply: "serve" as const,
  configureServer(server: any) {
    server.middlewares.use(
      "/assets",
      (req: any, res: any, next: () => void) => {
        const assetPath = path.join(
          process.cwd(),
          "dist/client/assets",
          decodeURIComponent(req.url || ""),
        );
        if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
          const ext = path.extname(assetPath).slice(1).toLowerCase();
          const contentTypes: Record<string, string> = {
            css: "text/css; charset=utf-8",
            js: "application/javascript; charset=utf-8",
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            png: "image/png",
            svg: "image/svg+xml",
            gif: "image/gif",
            webp: "image/webp",
            woff: "font/woff",
            woff2: "font/woff2",
          };
          res.setHeader(
            "Content-Type",
            contentTypes[ext] || "application/octet-stream",
          );
          res.setHeader("Cache-Control", "no-cache");
          res.end(fs.readFileSync(assetPath));
        } else {
          next();
        }
      },
    );
  },
};

export default defineConfig({
  cloudflare: false,
  plugins: [serveBuiltAssets],
});
