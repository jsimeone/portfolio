import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information projects adapters.
		adapter: adapter(),
		paths: {
			// base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
		}
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md']
		}),
		vitePreprocess()
	]
};

export default config;
