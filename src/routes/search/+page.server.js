
export async function load({ params, url }) {
	let query = await url.searchParams.get('query')

	const invidiousSearch = await fetch(`https://invidious.lunar.icu/api/v1/search?q=${query}`)
	const invidiousSearchJson = await invidiousSearch.json()

	let animepaheSearchJson

	try {
		const animepaheSearch = await fetch(`/api?query=${query}`)
		animepaheSearchJson = await animepaheSearch.json()
	} catch {
		const animepaheSearch = await fetch(`https://animepahe.ru/api?m=search&q=${query}`)
		animepaheSearchJson = await animepaheSearch.json()
	}

	return {
		query,
		youtube: [
			...invidiousSearchJson
		],
		animepahe: animepaheSearchJson
	}
}
