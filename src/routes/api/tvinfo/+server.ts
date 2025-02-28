import type { IMovieInfo } from "@consumet/extensions";
import type { TmdbTvInfo } from "$lib/types";
import { tvInfo, infoTmdbTvToConsumet } from "$lib/config";

export async function GET({ fetch, url }) {
  let movieId = url.searchParams.get("movieId");

  let res = await fetch(tvInfo(movieId));
  let json = await res.json();
  let contents: TmdbTvInfo = JSON.parse(json.contents);

  return new Response(JSON.stringify(contents));
}
