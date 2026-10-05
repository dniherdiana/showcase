// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport', // atau 'hover' kalau mau lebih hemat bandwidth
  },
  build: {
    inlineStylesheets: "always"
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
