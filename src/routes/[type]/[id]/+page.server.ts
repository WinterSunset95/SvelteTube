import { PROXY, TMDB_API_KEY } from "$env/static/private";
import { Gogo, TMDB, type MediaInfo, type MediaTypes, type PeekABoo } from "peek-a-boo.ts"

const anime = new Gogo();
const movieAndTv = new TMDB(TMDB_API_KEY, PROXY)

export const load = async ({ params }): Promise<PeekABoo<string | MediaInfo>> => {
	const type = params.type as MediaTypes;
	const id = params.id as string;
	console.log(type, id)

	try {
		if (type == "anime") {
			const res = await anime.getAnimeInfo(id)
			return res
		}
		if (type == "movie") {
			const res = await movieAndTv.getMovieInfo(id)
			return res
		}
		if (type == "tv") {
			const res = await movieAndTv.getTvInfo(id)
			return res
		}
		return {
			peek: false,
			boo: "Failed in the try block"
		}
	} catch (e) {
		return {
			peek: false,
			boo: "Failed in the catch block with: " + e as string
		}
	}

}
