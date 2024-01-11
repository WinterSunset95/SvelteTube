

export async function load({ params }) {
	const { videoId } = params

	const commentsUrl = `https://invidious.lunar.icu/api/v1/comments/${videoId}`
	const commentsResponse = await fetch(commentsUrl)
	const commentsData = await commentsResponse.json()

	const apiUrl = `https://invidious.lunar.icu/api/v1/videos/${videoId}`
	const response = await fetch(apiUrl)
	const data = await response.json()

	return {
		...data,
		...commentsData
	}
}
