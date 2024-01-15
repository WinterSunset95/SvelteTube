export async function GET({ fetch, url }) {
	let query = url.searchParams.get('query');

	let res = await fetch(`https://invidious.lunar.icu/api/v1/search?q=${query}`)
	let data = await res.json()

	const toReturn = {
		"endpoint": "invidious",
		"results": data
	}
	return new Response(JSON.stringify(toReturn))
}
