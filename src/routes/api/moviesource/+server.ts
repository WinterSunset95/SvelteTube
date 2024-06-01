import { MOVIES } from "@consumet/extensions";
const flixhq = new MOVIES.MovieHdWatch();

export async function GET({ fetch, url }) {
	let type = url.searchParams.get("type");
	let movieId = url.searchParams.get("movieId");
	let episodeId = url.searchParams.get("episodeId")
	let mediaId = `${type}/${movieId}`

	console.log("mediaId", mediaId)
	let data = await flixhq.fetchEpisodeSources('16076', 'movie/watch-the-batman-online-16076')
	console.log("data", data)

	return new Response(JSON.stringify(data));
}
