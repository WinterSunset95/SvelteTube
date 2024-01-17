export async function GET({ fetch, url }) {
	let query = url.searchParams.get('query');

	const res = await fetch(`https://consumet-api-six-ochre.vercel.app/anime/gogoanime/info/${query}`);
	const data = await res.json();

	return new Response(JSON.stringify(data))

}
