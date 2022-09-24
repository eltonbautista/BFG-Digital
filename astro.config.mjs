import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bfginteractive.ca/",
  experimental: {
    integrations: true,
  },
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
});
