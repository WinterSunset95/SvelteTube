import { ANIME } from "@consumet/extensions"
const gogoanime = new ANIME.Gogoanime()

export async function GET({ fetch, url }) {
	let query = url.searchParams.get("search")
	let page = url.searchParams.get("page")

	let data;

	if (query == "") {
		data = await gogoanime.search(" ")
	} else {
		data = await gogoanime.search(query, page)
	}

	return new Response(JSON.stringify(data));
}
