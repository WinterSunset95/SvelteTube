import { T as TMDB, a as TMDB_API_KEY, P as PROXY } from "../../../chunks/socket.js";
const movie = new TMDB(TMDB_API_KEY, PROXY);
const load = async ({ params }) => {
  let movieList, tvList;
  try {
    movieList = await movie.getTrendingMovies();
  } catch (e) {
    console.log("Failed to get trending movies");
    console.log(e);
    movieList = { peek: false, boo: [] };
  }
  try {
    tvList = await movie.getTrendingTv();
    console.log(tvList);
  } catch (e) {
    console.log("Failed to get trending TV");
    console.log(e);
    tvList = { peek: false, boo: [] };
  }
  return {
    movies: movieList,
    tv: tvList
  };
};
export {
  load
};
