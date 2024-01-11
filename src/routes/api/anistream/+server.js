
export async function GET({ url }) {
	const episodeId = url.searchParams.get('episodeId')
	const serverName = url.searchParams.get('serverName')

	const res = await fetch(`https://consumet-api-six-ochre.vercel.app/anime/gogoanime/watch/${episodeId}?server=${serverName}`)
	const data = await res.json()

	return new Response(JSON.stringify(data))
}
