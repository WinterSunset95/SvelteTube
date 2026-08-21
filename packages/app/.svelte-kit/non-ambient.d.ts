
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/api" | "/api/movie" | "/api/movie/tmdb" | "/api/movie/tmdb/embeds" | "/api/tv" | "/api/tv/tmdb" | "/api/tv/tmdb/embeds" | "/home" | "/rooms" | "/search" | "/[type]" | "/[type]/[id]";
		RouteParams(): {
			"/[type]": { type: string };
			"/[type]/[id]": { type: string; id: string }
		};
		LayoutParams(): {
			"/": { type?: string | undefined; id?: string | undefined };
			"/about": Record<string, never>;
			"/api": Record<string, never>;
			"/api/movie": Record<string, never>;
			"/api/movie/tmdb": Record<string, never>;
			"/api/movie/tmdb/embeds": Record<string, never>;
			"/api/tv": Record<string, never>;
			"/api/tv/tmdb": Record<string, never>;
			"/api/tv/tmdb/embeds": Record<string, never>;
			"/home": Record<string, never>;
			"/rooms": Record<string, never>;
			"/search": Record<string, never>;
			"/[type]": { type: string; id?: string | undefined };
			"/[type]/[id]": { type: string; id: string }
		};
		Pathname(): "/" | "/about" | "/api/movie/tmdb/embeds" | "/api/tv/tmdb/embeds" | "/home" | "/rooms" | "/search" | `/${string}/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/Excalifont-Regular.woff2" | "/docs/.nojekyll" | "/docs/assets/hierarchy.js" | "/docs/assets/highlight.css" | "/docs/assets/icons.js" | "/docs/assets/icons.svg" | "/docs/assets/main.js" | "/docs/assets/navigation.js" | "/docs/assets/search.js" | "/docs/assets/style.css" | "/docs/index.html" | "/docs/modules.html" | "/favicon.ico" | "/favicon.png" | "/manifest.json" | "/svelte-tube-bak.svg" | "/svelte-tube.png" | string & {};
	}
}