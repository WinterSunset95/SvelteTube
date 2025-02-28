import { ANIME } from "@consumet/extensions";
const gogoanime = new ANIME.Gogoanime();

export async function GET({ fetch, url }) {
  let query = url.searchParams.get("id");

  console.log(query);
  let data = await gogoanime.fetchEpisodeSources(query);

  return new Response(JSON.stringify(data));
}
