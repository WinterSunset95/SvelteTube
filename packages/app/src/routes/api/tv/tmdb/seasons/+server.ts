import { tmdbProvider } from "@/server/providers";
import { json, type RequestHandler } from "@sveltejs/kit";
import type { PeekABoo } from "peek-a-boo.ts";
import type { TmdbSeasonDetails } from "../../../../../../../peek-a-boo.ts/dist/types";

export const GET: RequestHandler = async ({ url }) => {
  const seasonId = url.searchParams.get("season") // Season Number
  const id = url.searchParams.get("id") // Series ID
  
  if (!id) {
    return json({
      peek: false,
      boo: "id parameter required"
    })
  }

  if (!seasonId) {
    return json({
      peek: false,
      boo: "seasonId parameter required"
    })
  }

  const details = await tmdbProvider.getSeasonDetails(id, seasonId);
  if (typeof(details.boo) == "string") {
    return json({
      peek: false,
      boo: details.boo,
    })
  }

  const res: PeekABoo<TmdbSeasonDetails> = {
    peek: true,
    boo: details.boo,
  }
  return json(res);
}
