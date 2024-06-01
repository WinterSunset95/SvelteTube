import type { ISearch, IMovieResult } from "@consumet/extensions";
import { MOVIES } from "@consumet/extensions";
const viewasian = new MOVIES.ViewAsian();

export async function GET({ fetch, url }) {
	let query = url.searchParams.get('search');
	console.log("query: ", query);

	let data: any;

	if (query == "") {
		data = await viewasian.search("Vincenzo");
	} else {
		data = await viewasian.search(query);
	}

	console.log(data);
	return new Response(JSON.stringify(data));

}
