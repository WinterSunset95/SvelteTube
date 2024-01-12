export async function load({ fetch, params, url }) {
	const { episodeId } = params
	let animeId = url.searchParams.get('animeId')

	const res = await fetch(`/api/anime?id=${animeId}`)
	const anime = await res.json()

	return {
		episodeId,
		animeId,
		anime
	}

}
