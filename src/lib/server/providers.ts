import { PROXY, TMDB_API_KEY } from "$env/static/private";
import { Gogo, TMDB } from "peek-a-boo.ts";

export const animeProvider = new Gogo();
export const tmdbProvider = new TMDB(TMDB_API_KEY, PROXY)
