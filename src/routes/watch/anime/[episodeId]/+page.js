export async function load({ fetch, params, url }) {
	const { episodeId } = params
	let animeId = url.searchParams.get('animeId')

	const res = await fetch(`/api/animeinfo?id=${animeId}`)
	const anime = await res.json()

	const episode = anime.episodes.find(episode => episode.id === episodeId)

	return {
		episodeId,
		episode,
		animeId,
		anime
	}

}
