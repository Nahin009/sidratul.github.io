// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nahin009.github.io",
  base: "/sidratul.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});