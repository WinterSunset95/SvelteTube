import type { IMovieInfo } from "@consumet/extensions";
import type { TMDBMovieInfo } from "$lib/types";
import { movieInfo, infoTmdbToConsumet } from "$lib/config";

export async function GET({ fetch, url }) {

	let movieId = url.searchParams.get("movieId");

	let data: IMovieInfo;
	let res = await fetch(movieInfo(movieId))
	let json = await res.json();
	let contents: TMDBMovieInfo = JSON.parse(json.contents);
	console.log(contents)
	data = infoTmdbToConsumet(contents);
	console.log(data)

	return new Response(JSON.stringify(data));
}
