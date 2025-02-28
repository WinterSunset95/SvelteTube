import type {
  ISearch,
  IAnimeInfo,
  IAnimeEpisode,
  IAnimeResult,
  ISource,
} from "@consumet/extensions";
import { ANIME } from "@consumet/extensions";
const gogo = new ANIME.Gogoanime();

export async function GET({ url }) {
  let episodeId = url.searchParams.get("episodeId");

  let res: ISource;

  try {
    res = await gogo.fetchEpisodeSources(episodeId);
  } catch (e) {
    return new Response(JSON.stringify(e));
  }

  return new Response(JSON.stringify(res), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
