import { MOVIES, type ISource } from "@consumet/extensions";
import { dramaCoolEpInfo } from "$lib/config";
const dramacool = new MOVIES.DramaCool();

export async function GET({ fetch, url }) {
  let mediaId = url.searchParams.get("mediaId");
  let episodeId = url.searchParams.get("episodeId");

  let data: ISource;

  try {
    data = await dramacool.fetchEpisodeSources(episodeId);
  } catch (err) {
    try {
      const link = dramaCoolEpInfo(mediaId, episodeId);
      const res = await fetch(link);
      const json = await res.json();
      data = json;
    } catch {
      data = {
        sources: [],
      };
      console.log(err);
    }
  }

  return new Response(JSON.stringify(data));
}
