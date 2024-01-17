export async function GET({ fetch, url }) {
	let query = url.searchParams.get('query') || "%20";
	let page = url.searchParams.get('page') || 1;

	let res = await fetch(`https://consumet-api-six-ochre.vercel.app/anime/gogoanime/${query}?page=${page}`);
	let data = await res.json();

	return new Response(JSON.stringify(data))
}
