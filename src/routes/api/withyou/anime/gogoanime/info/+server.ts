import type {
  ISearch,
  IAnimeInfo,
  IAnimeEpisode,
  IAnimeResult,
} from "@consumet/extensions";
import { ANIME } from "@consumet/extensions";
const gogo = new ANIME.Gogoanime();

export async function GET({ url }) {
  let animeId = url.searchParams.get("animeId");

  let res: IAnimeInfo;

  try {
    res = await gogo.fetchAnimeInfo(animeId);
  } catch (e) {
    return new Response(JSON.stringify(e));
  }

  return new Response(JSON.stringify(res), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
