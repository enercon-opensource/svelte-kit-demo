import adapterNode from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		format: 'esm',
		hydratable: true,
	},
	extensions: ['.svelte'],
	kit: {
		adapter: adapterNode({
			precompress: true,
		}),
		target: '#schedule',
		hydrate: true,
		router: true,
		vite: {
			plugins: [{
				name: 'configure-server',
				configureServer: (server = null) => {
					server.middlewares.use((_req, res, next) => {
						res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
						res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
						next();
					});
				},
			}, ],
			build: {
				assetsInlineLimit: 0,
			},
		},
	},
};

export default config;
