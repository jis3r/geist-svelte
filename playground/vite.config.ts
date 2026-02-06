import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
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
