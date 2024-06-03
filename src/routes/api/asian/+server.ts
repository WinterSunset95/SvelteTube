import type { ISearch, IMovieResult } from "@consumet/extensions";
import { dramaCoolSearch } from "$lib/config";
import { MOVIES } from "@consumet/extensions";
const dramacool = new MOVIES.DramaCool();

export async function GET({ fetch, url }) {
	let query = url.searchParams.get('search');
	console.log("query: ", query);

	let data: any;

	try {
		if (query == "") {
			data = await dramacool.search(" ");
		} else {
			data = await dramacool.search(query);
		}
	} catch {
		try {
			if (query == "") {
				const res = await fetch(`${dramaCoolSearch}`);
				const json = await res.json();
				data = json;
			} else {
				const res = await fetch(`${dramaCoolSearch}${query}`);
				const json = await res.json();
				data = json;
			}
		} catch (err) {
			data = {
				results: [],
			};
			console.log(err);
		}
	}

	console.log("Drama: ", data);
	return new Response(JSON.stringify(data));
}
