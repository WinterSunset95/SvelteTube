import { tmdbProvider } from '@/server/providers';

export async function load({ url }) {
	const query = url.searchParams.get("query");

	// Fetch both in parallel for maximum speed
	const [movieRes, tvRes] = await Promise.all([
		tmdbProvider.searchMovie(query),
		tmdbProvider.searchTv(query)
	]);

	return {
		query,
		movieList: movieRes.peek ? movieRes.boo : [],
		tvList: tvRes.peek ? tvRes.boo : []
	};
}
