import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: './src/lib/components/Template.svelte'
		})
	],

	kit: {
		adapter: adapter()
	},

  vitePlugin: {
    experimental: {
      inspector: true
    }
  }
};

export default config;
