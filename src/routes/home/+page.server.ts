import {
  Gogo,
  TMDB,
  type MovieSearchResult,
  type PeekABoo,
} from "peek-a-boo.ts";
import { TMDB_API_KEY, PROXY } from "$env/static/private";

const anime = new Gogo();
const movie = new TMDB(TMDB_API_KEY, PROXY);

export const load = async ({ params }) => {
  let animeList: PeekABoo<MovieSearchResult[]>,
    movieList: PeekABoo<MovieSearchResult[]>,
    tvList: PeekABoo<MovieSearchResult[]>;
  console.log(`Environment variables: ${TMDB_API_KEY}, ${PROXY}`);
  try {
    animeList = await anime.getTrending();
	if (animeList.peek == false) {
		animeList = {
			peek: false,
			boo: []
		}
	}
  } catch (e) {
    console.log("Failed to get trending anime");
    console.log(e);
    animeList = { peek: false, boo: [] };
  }
  try {
    movieList = await movie.getTrendingMovies();
  } catch (e) {
    console.log("Failed to get trending movies");
    console.log(e);
    movieList = { peek: false, boo: [] };
  }
  try {
    tvList = await movie.getTrendingTv();
  } catch (e) {
    console.log("Failed to get trending TV");
    console.log(e);
    tvList = { peek: false, boo: [] };
  }

  console.log({animeList, movieList, tvList})
  return {
    anime: animeList,
    movies: movieList,
    tv: tvList,
  };
};
