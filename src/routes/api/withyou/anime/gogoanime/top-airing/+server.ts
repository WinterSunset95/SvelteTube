import type {
  ISearch,
  IAnimeInfo,
  IAnimeEpisode,
  IAnimeResult,
} from "@consumet/extensions";
import { ANIME } from "@consumet/extensions";
const gogo = new ANIME.Gogoanime();

export async function GET({ url }) {
  let res: ISearch<IAnimeResult>;

  try {
    res = await gogo.fetchTopAiring();
  } catch (e) {
    return new Response(JSON.stringify(e));
  }

  return new Response(JSON.stringify(res), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
