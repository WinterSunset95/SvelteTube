export async function GET({ url }) {
	const page = url.searchParams.get('page') || 1
	const res = await fetch(`https://consumet-api-six-ochre.vercel.app/movies/flixhq/%20?page=${page}`)
	const data = await res.json()

	const toReturn = {
		endpoint: "movies",
		...data
	}

	return new Response(JSON.stringify(toReturn))
}
