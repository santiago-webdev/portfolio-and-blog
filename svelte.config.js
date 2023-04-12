import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      layout: './src/lib/components/Template.svelte',
    }),
    vitePreprocess(),
  ],

  kit: {
    adapter: adapter(),
  },
}

export default config
