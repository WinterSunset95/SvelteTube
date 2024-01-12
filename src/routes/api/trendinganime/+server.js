export async function GET({ url }) {
	const res = await fetch("https://consumet-api-six-ochre.vercel.app/anime/gogoanime/top-airing")
	const data = await res.json()

	return new Response(JSON.stringify(data))
}
