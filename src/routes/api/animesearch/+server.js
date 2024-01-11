export async function GET({ url }) {
	const query = url.searchParams.get('query');

	const animepaheSearch = await fetch(`https://animepahe.ru/api?m=search&q=${query}`)
	const animepaheSearchJson = await animepaheSearch.json()

	return animepaheSearchJson
}
