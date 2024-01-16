export async function GET({ url }) {
	let query = url.searchParams.get('query');

	let episode = await fetch(`https://consumet-api-six-ochre.vercel.app/anime/gogoanime/watch/${query}`);
	let episodeData = await episode.json();

	let servers = await fetch(`https://consumet-api-six-ochre.vercel.app/anime/gogoanime/servers/${query}`)
	let serversData = await servers.json();

	const toReturn = {
		episode: episodeData,
		servers: serversData
	}

	return new Response(JSON.stringify(toReturn))
}
