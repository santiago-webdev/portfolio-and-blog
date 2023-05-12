import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import toc from '@jsdevtools/rehype-toc'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      layout: './src/lib/components/Template.svelte',
      rehypePlugins: [rehypeSlug, [toc, { position: 'beforeend' }]],
    }),
    vitePreprocess(),
  ],

  kit: {
    adapter: adapter(),
  },
}

export default config
