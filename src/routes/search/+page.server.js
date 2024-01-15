export const prerender = false
export async function load({ fetch, url }) {
	let query = await url.searchParams.get('query')

	return {
		query
	}
}
