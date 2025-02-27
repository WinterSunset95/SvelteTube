import { animeProvider, tmdbProvider } from "@/server/providers.js";
import { Gogo, TMDB, type MediaInfo, type MediaTypes, type MovieSearchResult, type PeekABoo } from "peek-a-boo.ts"

export const load = async ({ params }): Promise<{ peekaboo: PeekABoo<string | MediaInfo>, similar: MovieSearchResult[] }> => {
	const type = params.type as MediaTypes;
	const id = params.id as string;
	console.log(type, id)

	try {
		if (type == "anime") {
			const res = await animeProvider.getAnimeInfo(id)
			return {
				peekaboo: res,
				similar: []
			}
		}
		if (type == "movie") {
			const res = await tmdbProvider.getMovieInfo(id)
			const similar = await tmdbProvider.getSimilarMovies(id)
			return {
				peekaboo: res,
				similar: similar.boo
			}
		}
		if (type == "tv") {
			const res = await tmdbProvider.getTvInfo(id)
			const similar = await tmdbProvider.getSimilarTvShows(id)
			return {
				peekaboo: res,
				similar: similar.boo
			}
		}
		return {
			peekaboo: {
				peek: false,
				boo: "Failed in the try block"
			},
			similar: []
		}
	} catch (e) {
		return {
			peekaboo: {
				peek: false,
				boo: "Failed in the try block"
			},
			similar: []
		}
	}

}
