import {
  TMDB,
  type MovieSearchResult,
  type PeekABoo,
} from "peek-a-boo.ts";
import { TMDB_API_KEY, PROXY } from "$env/static/private";

const movie = new TMDB(TMDB_API_KEY, PROXY);

export const load = async ({ params }) => {
  let movieList: PeekABoo<MovieSearchResult[]>, tvList: PeekABoo<MovieSearchResult[]>;
  try {
    movieList = await movie.getTrendingMovies();
  } catch (e) {
    console.log("Failed to get trending movies");
    console.log(e);
    movieList = { peek: false, boo: [] };
  }
  try {
    tvList = await movie.getTrendingTv();
    console.log(tvList)
  } catch (e) {
    console.log("Failed to get trending TV");
    console.log(e);
    tvList = { peek: false, boo: [] };
  }

  return {
    movies: movieList,
    tv: tvList,
  };
};
