import { ANIME } from "@consumet/extensions";
const animepahe = new ANIME.AnimePahe();

export async function GET({ fetch, url }) {
  let query = url.searchParams.get("search");
  let page = url.searchParams.get("page");

  let data;

  if (query == "") {
    data = await animepahe.search(" ");
  } else {
    data = await animepahe.search(query, page);
  }

  return new Response(JSON.stringify(data));
}
