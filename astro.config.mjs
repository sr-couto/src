import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./lib/remark-reading-time.mjs";

export default defineConfig({
  site: "https://srcouto.netlify.app",
  integrations: [
    mdx({
      remarkPlugins: [remarkReadingTime],
      // Astro defaults applied
    }),
    sitemap(),
    tailwind(),
    vue(),
    react(),
  ],
});
