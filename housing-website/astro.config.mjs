// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://grandsamudraresidence.co.id",
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    svelte(),
    sitemap({
      i18n: {
        defaultLocale: "id",
        locales: {
          id: "id-ID",
          en: "en-US",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@assets": "/src/assets",
      },
    },
  },
});
