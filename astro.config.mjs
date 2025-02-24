import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelly.github.io",
  output: "server",
  adapter: netlify()
});
