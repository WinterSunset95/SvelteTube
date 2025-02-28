import { animeProvider, tmdbProvider } from "@/server/providers";
import { json, type RequestHandler } from "@sveltejs/kit";
import type { MediaTypes, MovieSearchResult, PeekABoo } from "peek-a-boo.ts";

export const GET: RequestHandler = async (request) => {
	const query = request.url.searchParams.get("query");
	const type = request.params.type as MediaTypes;

	const defaultReturn = {
		peek: false,
		boo: []
	}

	if (!query) return json(defaultReturn)

	if (type == "anime") {
		const res = await animeProvider.searchAnime(query)
		return json(res)
	} else if (type == "movie") {
		const res = await tmdbProvider.searchMovie(query)
		return json(res)
	} else {
		const res = await tmdbProvider.searchTv(query)
		return json(res)
	}

}
