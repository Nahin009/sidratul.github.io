// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nahin009.github.io/sidratul.github.io/",
  vite: {
    plugins: [tailwindcss()],
  },
});