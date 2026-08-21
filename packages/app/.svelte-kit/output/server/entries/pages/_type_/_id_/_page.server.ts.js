import { a as animeProvider, t as tmdbProvider } from "../../../../chunks/providers.js";
import "../../../../chunks/socket.js";
const load = async ({
  params
}) => {
  const type = params.type;
  const id = params.id;
  try {
    if (type == "anime") {
      const res = await animeProvider.getAnimeInfo(id);
      return {
        peekaboo: res,
        similar: []
      };
    }
    if (type == "movie") {
      const res = await tmdbProvider.getMovieInfo(id);
      const similar = await tmdbProvider.getSimilarMovies(id);
      return {
        peekaboo: res,
        similar: similar.boo
      };
    }
    if (type == "tv") {
      const res = await tmdbProvider.getTvInfo(id);
      const similar = await tmdbProvider.getSimilarTvShows(id);
      return {
        peekaboo: res,
        similar: similar.boo
      };
    }
    return {
      peekaboo: {
        peek: false,
        boo: "Failed in the try block"
      },
      similar: []
    };
  } catch (e) {
    return {
      peekaboo: {
        peek: false,
        boo: "Failed in the try block"
      },
      similar: []
    };
  }
};
export {
  load
};
