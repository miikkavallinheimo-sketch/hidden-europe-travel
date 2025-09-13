import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hiddeneurope.travel',
  integrations: [
    sitemap()
  ],
  build: {
    inlineStylesheets: 'auto'
  }
});