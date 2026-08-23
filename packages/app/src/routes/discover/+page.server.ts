import { tmdbProvider } from "@/server/providers";

export async function load({ url }) {
  const type = url.searchParams.get("type") || "movie"; // movie, tv
  const mode = url.searchParams.get("mode") || "popular"; // popular, new, trending
  const genre = url.searchParams.get("genre"); // No idea what to put here lol

  const result = () => {
    if (mode == "new") {
      return type == "tv" ? tmdbProvider.getNewTv() : tmdbProvider.getNewMovies();
    } else if (mode == "popular") {
      return type == "tv" ? tmdbProvider.getPopularTv() : tmdbProvider.getPopularMovies();
    } else {
      return type == "tv" ? tmdbProvider.getTrendingTv() : tmdbProvider.getTrendingMovies()
    }
  }

  const data = await result();

  return {
    type: type,
    mode: mode,
    genre: genre,
    list: data.boo,
  }

}
