import { MOVIES } from "@consumet/extensions";
const flixhq = new MOVIES.MovieHdWatch();

export async function GET({ fetch, url }) {
	let type = url.searchParams.get("type");
	let movieId = url.searchParams.get("id");

	let data = await flixhq.fetchMediaInfo(`${type}/${movieId}`);

	return new Response(JSON.stringify(data));
}
