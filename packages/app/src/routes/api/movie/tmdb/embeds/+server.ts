import { tmdbProvider } from "@/server/providers";
import { error, json } from "@sveltejs/kit";

import type { RequestHandler } from "@sveltejs/kit";
import type { PeekABoo } from "peek-a-boo.ts";

export const GET: RequestHandler = ({ url }) => {
  const id = url.searchParams.get("id");
  if (id == '' || !id) {
    console.error("id is undefined")
    const error: PeekABoo<string> = {
      peek: false,
      boo: "id is undefined"
    }
    return json(error)
  }
  const season = Number(url.searchParams.get("season"));
  const episode = Number(url.searchParams.get("episode"));

  if (season && episode) {
    const data = tmdbProvider.getTvEmbeds(id, season, episode);
    return json(data)
  }

  return json(tmdbProvider.getMovieEmbeds(id))
}
