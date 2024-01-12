export async function GET({ url }) {
	const id = url.searchParams.get('id');

	const res = await fetch(`https://consumet-api-six-ochre.vercel.app/anime/gogoanime/info/${id}`);
	const data = await res.json();

	const toReturn = {
		endpoint: "animeinfo",
		...data
	}

	return new Response(JSON.stringify(toReturn))
}
