import { MOVIES, type IMovieInfo } from "@consumet/extensions";
import { dramaCoolInfo } from "$lib/config";
const dramacool = new MOVIES.DramaCool();

export async function GET({ fetch, url }) {
	let id = url.searchParams.get('id');
	
	let data: IMovieInfo

	try	{
		data = await dramacool.fetchMediaInfo(id);
	} catch (err) {
		try {
			const res = await fetch(`${dramaCoolInfo}${id}`);
			const json = await res.json();
			data = json;
		} catch {
			data = {
				title: "Error",
				id: "",
				image: "",
				description: "Something went wrong. Please try again later.",
				episodes: []
			};
			console.log(err);
		}
	}

	return new Response(JSON.stringify(data));
}
