import type { ISearch, IMovieResult } from "@consumet/extensions"
import type { TMDBitem, TMDBresult } from "$lib/types";
import { movieTrending, moviePopular, movieSearch, tmdbToConsumet } from "$lib/config";

export async function GET({ fetch, url }) {
	let query = url.searchParams.get("search");

	if (!query) {
		let trending: ISearch<IMovieResult>;
		let trendingRes = await fetch(movieTrending);
		let trendingRawData = await trendingRes.json();
		let trendingContents: TMDBresult<TMDBitem> = JSON.parse(trendingRawData.contents);
		trending = tmdbToConsumet(trendingContents); 

		let popular: ISearch<IMovieResult>;
		let popularRes = await fetch(moviePopular);
		let popularRawData = await popularRes.json();
		let popularContents: TMDBresult<TMDBitem> = JSON.parse(popularRawData.contents);
		popular = tmdbToConsumet(popularContents);

		let data: {
			popular: ISearch<IMovieResult>,
			trending: ISearch<IMovieResult>
		} = {
			popular: popular,
			trending: trending
		}

		return new Response(JSON.stringify(data));
	} else {
		let res = await fetch(`${movieSearch}${query}`)
		let search = await res.json();
		console.log("Search result: " + search)
		let data: ISearch<IMovieResult>;

		try {
			let parsedSearch: TMDBresult<TMDBitem> = JSON.parse(search)
			data = tmdbToConsumet(parsedSearch);
		} catch {
			data = tmdbToConsumet(search);
		}

		return new Response(JSON.stringify(data));
	}
}
