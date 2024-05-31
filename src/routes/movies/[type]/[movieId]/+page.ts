export function load({ params }) {
	let { type, movieId } = params;
	return {
		type,
		movieId
	};
}
