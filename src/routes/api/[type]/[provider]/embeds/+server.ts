import { animeProvider, tmdbProvider } from "@/server/providers";
import { json, type RequestHandler } from "@sveltejs/kit";
import type { MediaTypes, PeekABoo } from "peek-a-boo.ts";

export const GET: RequestHandler = async (request) => {
	const type = request.params.type as MediaTypes
	const provider = request.params.provider
	const id = request.url.searchParams.get("id")
	const season = request.url.searchParams.get("season")
	const episode = request.url.searchParams.get("episode")
	console.log(type, id, season, episode)

	if (!id) {
		return json({
			peek: false,
			boo: []
		})
	}

	if (type == "anime") {
		const res = await animeProvider.getEpisodeServers(id)
		return json(res)
	} else if (type == "movie") {
		const res = tmdbProvider.getMovieEmbeds(id)
		return json(res)
	} else {
		if (!season || !episode) return json({peek:false, boo:[]})
		const res = tmdbProvider.getTvEmbeds(id, parseInt(season), parseInt(episode))
		return json(res)
	}
}
