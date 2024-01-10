<script>
	import PopularCarousel from "./PopularCarousel.svelte";
	import TrendingVideos from "./TrendingVideos.svelte";
	const invidiousLink = "https://invidious.lunar.icu"

	let popularVideos = []

	fetch(`${invidiousLink}/api/v1/popular`)
		.then(res => res.json())
		.then(data => {
			popularVideos = data.splice(0, 10)
		})
		.catch(err => console.log(err))

	let trendingVideos = []
	fetch(`${invidiousLink}/api/v1/trending`)
		.then(res => res.json())
		.then(data => {
			trendingVideos = data.splice(0, 20)
		})
		.catch(err => console.log(err))
</script>

{#if popularVideos.length > 0}
	<PopularCarousel popularVideos={popularVideos}/>
{:else}
	<p>Loading...</p>
{/if}

<h1 style="padding: 1rem;">Recommendations</h1>
{#if trendingVideos.length > 0}
	<TrendingVideos trendingVideos={trendingVideos}/>
{:else}
	<p>Loading...</p>
{/if}
