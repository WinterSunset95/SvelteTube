import { MOVIES } from "@consumet/extensions"
const flixhq = new MOVIES.FlixHQ()

export async function GET({ fetch, url }) {
	let query = url.searchParams.get("search")
	let page = url.searchParams.get("page")

	let data;

	if (query == "") {
		data = await flixhq.search(" ")
	} else {
		data = await flixhq.search(query, page)
	}

	return new Response(JSON.stringify(data));
}
