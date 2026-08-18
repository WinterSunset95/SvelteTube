import { PROXY, TMDB_API_KEY } from "$env/static/private";
import { AnimePahe, TMDB } from "peek-a-boo.ts";

export const animeProvider = new AnimePahe();
export const tmdbProvider = new TMDB(TMDB_API_KEY, PROXY);
