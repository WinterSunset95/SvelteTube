import { t as tmdbProvider } from "../../../chunks/providers.js";
async function load({ url }) {
  const query = url.searchParams.get("query");
  const [movieRes, tvRes] = await Promise.all([
    tmdbProvider.searchMovie(query),
    tmdbProvider.searchTv(query)
  ]);
  return {
    query,
    movieList: movieRes.peek ? movieRes.boo : [],
    tvList: tvRes.peek ? tvRes.boo : []
  };
}
export {
  load
};
