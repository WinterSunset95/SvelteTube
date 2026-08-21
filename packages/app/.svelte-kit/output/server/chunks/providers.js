import { T as TMDB, a as TMDB_API_KEY, P as PROXY, A as AnimePahe } from "./socket.js";
const animeProvider = new AnimePahe();
const tmdbProvider = new TMDB(TMDB_API_KEY, PROXY);
export {
  animeProvider as a,
  tmdbProvider as t
};
