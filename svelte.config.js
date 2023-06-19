import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      layout: './src/lib/components/Template.svelte',
      extensions: ['.md'],
      rehypePlugins: [rehypeSlug]
    }),
    vitePreprocess()
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;
