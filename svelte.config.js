import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: './src/lib/components/Template.svelte',
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $ui: path.resolve('./src/lib/components'),
    },
  },

  vitePlugin: {
    experimental: {
      inspector: true,
    },
  },
}

export default config
