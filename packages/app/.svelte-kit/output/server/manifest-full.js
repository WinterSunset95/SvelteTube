export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Excalifont-Regular.woff2","docs/.nojekyll","docs/assets/hierarchy.js","docs/assets/highlight.css","docs/assets/icons.js","docs/assets/icons.svg","docs/assets/main.js","docs/assets/navigation.js","docs/assets/search.js","docs/assets/style.css","docs/index.html","docs/modules.html","favicon.ico","favicon.png","manifest.json","svelte-tube-bak.svg","svelte-tube.png","service-worker.js"]),
	mimeTypes: {".woff2":"font/woff2",".js":"text/javascript",".css":"text/css",".svg":"image/svg+xml",".html":"text/html",".png":"image/png",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.U5w1eiG4.js",app:"_app/immutable/entry/app.u28clqOE.js",imports:["_app/immutable/entry/start.U5w1eiG4.js","_app/immutable/chunks/DZ9u2lHs.js","_app/immutable/chunks/B4iVqIzM.js","_app/immutable/chunks/4gSVB85y.js","_app/immutable/chunks/oHAZkc1H.js","_app/immutable/entry/app.u28clqOE.js","_app/immutable/chunks/4gSVB85y.js","_app/immutable/chunks/B4iVqIzM.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BDFfJYl9.js","_app/immutable/chunks/D6fY3jvx.js","_app/immutable/chunks/CdPzTzg7.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/movie/tmdb/embeds",
				pattern: /^\/api\/movie\/tmdb\/embeds\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/movie/tmdb/embeds/_server.ts.js'))
			},
			{
				id: "/api/tv/tmdb/embeds",
				pattern: /^\/api\/tv\/tmdb\/embeds\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/tv/tmdb/embeds/_server.ts.js'))
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/rooms",
				pattern: /^\/rooms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[type]/[id]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"type","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
