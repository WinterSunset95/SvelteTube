
export async function load({ fetch, params }) {
	const { animeId } = params

	const res = await fetch(`/api/anime?id=${animeId}`)
	const anime = await res.json()

	return anime
}