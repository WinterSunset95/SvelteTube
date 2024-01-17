import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { wserver } from './server/socket'

export default defineConfig({
	plugins: [
		sveltekit(),
		wserver
	]
});
