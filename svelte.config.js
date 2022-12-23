import adapter from "@sveltejs/adapter-static";
// import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	// preprocess: vitePreprocess(),
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: null
		})
	},

	// https://joyofcode.xyz/svelte-inspector
	vitePlugin: {
		experimental: {
			inspector: {
				// Change shortcut.
				// toggleKeyCombo: "meta-shift",
				toggleKeyCombo: "control-alt-s",
				// Hold and release key to toggle inspector mode.
				holdMode: true,
				// Show or hide the inspector option.
				// showToggleButton: "always",
				// Inspector position.
				toggleButtonPos: "bottom-right"
			}
		}
	}
};

export default config;
