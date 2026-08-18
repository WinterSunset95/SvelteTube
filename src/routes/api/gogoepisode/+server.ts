import { ANIME } from "@consumet/extensions";
const animepahe = new ANIME.AnimePahe();

export async function GET({ fetch, url }) {
  let query = url.searchParams.get("id");

  console.log(query);
  let data = await animepahe.fetchEpisodeSources(query);

  return new Response(JSON.stringify(data));
}
