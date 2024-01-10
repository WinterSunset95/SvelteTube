<script>
	import PopularCarousel from "./PopularCarousel.svelte";
	const invidiousLink = "https://invidious.lunar.icu"

	let popularVideos = []

	fetch(`${invidiousLink}/api/v1/popular`)
		.then(res => res.json())
		.then(data => {
			popularVideos = data.splice(0, 5)
		})
		.catch(err => console.log(err))

	$: console.log(popularVideos)
	$: console.table(popularVideos)
</script>

{#if popularVideos.length > 0}
	<PopularCarousel popularVideos={popularVideos}/>
{:else}
	<p>Loading...</p>
{/if}
