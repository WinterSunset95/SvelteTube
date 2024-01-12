export async function GET({ url }) {
	const page = url.searchParams.get('page') || 1
	const res = await fetch(`https://consumet-api-six-ochre.vercel.app/anime/gogoanime/recent-episodes?page=${page}`)
	const data = await res.json()

	const toReturn = {
		endpoint: "latestvideos",
		...data
	}

	return new Response(JSON.stringify(toReturn))
}
