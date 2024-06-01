export function load({ params }) {
	let { type, movieId, episodeId } = params;

	return {
		type,
		movieId,
		episodeId
	};
}
