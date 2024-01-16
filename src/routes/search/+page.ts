export function load({ url }) {
	let query = url.searchParams.get('query')

	return {
		query,
	}
}
