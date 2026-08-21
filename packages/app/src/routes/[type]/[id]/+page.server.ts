import { animeProvider, tmdbProvider } from "@/server/providers.js";
import type {
  MediaInfo,
  MediaTypes,
  MovieSearchResult,
  PeekABoo,
  TmdbBackdrop,
  TmdbBackdrops,
} from "peek-a-boo.ts";

export const load = async ({
  params,
}): Promise<{
  peekaboo: PeekABoo<string | MediaInfo>;
  similar: MovieSearchResult[];
  backdrops: TmdbBackdrop[];
}> => {
  const type = params.type as MediaTypes;
  const id = params.id as string;

  try {
    if (type == "anime") {
      const res = await animeProvider.getAnimeInfo(id);
      return {
        peekaboo: res,
        similar: [],
        backdrops: [],
      };
    }
    if (type == "movie") {
      const res = await tmdbProvider.getMovieInfo(id);
      const similar = await tmdbProvider.getSimilarMovies(id);
      const backdropsRes = await tmdbProvider.getBackdrops("movie", id);
      let backdrops: TmdbBackdrop[] = [];
      if (typeof(backdropsRes) == "object") {
        const backdrop = (backdropsRes.boo as TmdbBackdrops);
        backdrops = backdrop.backdrops;
      }
      return {
        peekaboo: res,
        similar: similar.boo,
        backdrops: backdrops,
      };
    }
    if (type == "tv") {
      const res = await tmdbProvider.getTvInfo(id);
      const similar = await tmdbProvider.getSimilarTvShows(id);
      const backdropsRes = await tmdbProvider.getBackdrops("tv", id);
      let backdrops: TmdbBackdrop[] = [];
      if (typeof(backdropsRes) == "object") {
        const backdrop = (backdropsRes.boo as TmdbBackdrops);
        backdrops = backdrop.backdrops;
      }
      return {
        peekaboo: res,
        similar: similar.boo,
        backdrops: backdrops
      };
    }
    return {
      peekaboo: {
        peek: false,
        boo: "Failed in the try block",
      },
      similar: [],
      backdrops: []
    };
  } catch (e) {
    return {
      peekaboo: {
        peek: false,
        boo: "Failed in the try block",
      },
      similar: [],
      backdrops: []
    };
  }
};
