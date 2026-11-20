import { defineConfig } from 'astro/config';

// A static site: plain pages, no server. Vercel serves the dist folder.
export default defineConfig({
  output: 'static',
  build: { format: 'file' },
});
