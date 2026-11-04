/// <reference types="node" />
import path from "path";
import { fileURLToPath } from "url";
import adapter from "@sveltejs/adapter-auto";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      preprocess: vitePreprocess(),
      adapter: adapter(),
    }),
  ],
  server: {
    fs: {
      allow: [path.resolve(__dirname, "..")],
    },
  },
  ssr: {
    noExternal: ["geist-svelte"],
  },
  optimizeDeps: {
    include: ["geist-svelte"],
  },
});
