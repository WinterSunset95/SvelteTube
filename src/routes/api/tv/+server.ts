import type { ISearch, IMovieResult } from "@consumet/extensions";
import type { TMDBresult, TmdbTv } from "$lib/types";
import { tvTrending, tvPopular, tvSearch, tmdbTvToConsumet } from "$lib/config";

export async function GET({ fetch, url }) {
  let query = url.searchParams.get("search");

  if (!query) {
    let trending: ISearch<IMovieResult>;
    let popular: ISearch<IMovieResult>;

    let trendingRes = await fetch(tvTrending);
    let trendingRawData = await trendingRes.json();

    let trendingContents: TMDBresult<TmdbTv> = JSON.parse(
      trendingRawData.contents,
    );
    trending = tmdbTvToConsumet(trendingContents);

    let popularRes = await fetch(tvPopular);
    let popularRawData = await popularRes.json();

    let popularContents: TMDBresult<TmdbTv> = JSON.parse(
      popularRawData.contents,
    );
    popular = tmdbTvToConsumet(popularContents);

    let data: {
      popular: ISearch<IMovieResult>;
      trending: ISearch<IMovieResult>;
    } = {
      popular: popular,
      trending: trending,
    };

    return new Response(JSON.stringify(data));
  } else {
    let res = await fetch(`${tvSearch}${query}`);
    let search = await res.json();
    let data: ISearch<IMovieResult>;

    try {
      let parsedSearch: TMDBresult<TmdbTv> = JSON.parse(search);
      data = tmdbTvToConsumet(parsedSearch);
    } catch {
      data = tmdbTvToConsumet(search);
    }

    return new Response(JSON.stringify(data));
  }
}
