export function load({ params }) {
	let { animeId, episodeId } = params;

	return {
		animeId,
		episodeId,
	}
}
