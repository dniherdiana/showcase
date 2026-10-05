// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://studiokalem.com",
  build: {
    inlineStylesheets: "always",
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
  },
});
