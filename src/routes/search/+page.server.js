
export async function load({ fetch, url }) {
	let query = await url.searchParams.get('query')

	let invidiousSearchJson = []
	try {
		const invidiousSearch = await fetch(`https://invidious.lunar.icu/api/v1/search?q=${query}`)
		invidiousSearchJson = await invidiousSearch.json()
	} catch {
		invidiousSearchJson = []
	}

	let animeSearchJson = []
	try {
		const animeSearch = await fetch(`/api/animesearch?query=${query}&page=1`)
		animeSearchJson = await animeSearch.json()
	} catch {
		animeSearchJson = []
	}

	return {
		query,
		youtube: [
			...invidiousSearchJson
		],
		anime: animeSearchJson
	}
}
