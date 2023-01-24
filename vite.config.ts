import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  server: {
    fs: {
      allow: [".."] // Allow serving files from one level up to the project root
    }
  }
})
