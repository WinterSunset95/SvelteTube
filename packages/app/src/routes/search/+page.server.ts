import { tmdbProvider } from '@/server/providers';

export async function load({ url }) {
	const query = url.searchParams.get("query");

	// Fetch both in parallel for maximum speed
	const [movieRes, tvRes] = await Promise.all([
		query != null ? tmdbProvider.searchMovie(query) : tmdbProvider.getTrendingMovies(),
		query != null ? tmdbProvider.searchTv(query) : tmdbProvider.getTrendingTv()
	]);

	return {
		query,
		movieList: movieRes.peek ? movieRes.boo : [],
		tvList: tvRes.peek ? tvRes.boo : []
	};
}
