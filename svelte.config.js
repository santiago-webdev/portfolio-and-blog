import adapter from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      layout: './src/lib/components/Template.svelte',
    }),
    preprocess(),
  ],

  kit: {
    adapter: adapter(),
  },
}

export default config
