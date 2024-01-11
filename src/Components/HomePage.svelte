<script>
	import { onMount } from "svelte";

	import PopularCarousel from "./PopularCarousel.svelte";
	import TrendingVideos from "./TrendingVideos.svelte";
	const invidiousLink = "https://invidious.lunar.icu"

	let popularVideos = []
	let trendingVideos = []

	onMount(() => {
			fetch(`${invidiousLink}/api/v1/popular`)
			.then(res => res.json())
			.then(data => {
					popularVideos = data.splice(0, 6)
					})
			.catch(err => console.log(err))

			fetch(`${invidiousLink}/api/v1/trending`)
			.then(res => res.json())
			.then(data => {
					trendingVideos = data.splice(0, 8)
					})
			.catch(err => console.log(err))
	})
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
