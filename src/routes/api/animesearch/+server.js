export async function GET({ url }) {
	const query = url.searchParams.get('query') || ''
	const page = url.searchParams.get('page') || 1

	const res = await fetch(`https://consumet-api-six-ochre.vercel.app/anime/gogoanime/${query}?page=${page}`)
	const data = await res.json()

	const toReturn = {
		endpoint: "animesearch",
		...data
	}

	return new Response(JSON.stringify(toReturn))
}
