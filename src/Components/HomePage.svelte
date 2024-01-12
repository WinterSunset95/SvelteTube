<script>
	import { onMount } from "svelte";

	import PopularCarousel from "./PopularCarousel.svelte";
	import TrendingVideos from "./TrendingVideos.svelte";
	import Anime from "../routes/search/Anime.svelte";
	const invidiousLink = "https://invidious.lunar.icu"

	let popularVideos = []
	let trendingVideos = []
	let animeList = []

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

			fetch(`/api/trendinganime`)
			.then(res => res.json())
			.then(data => {
					animeList = data
					console.log(animeList)
					})
			.catch(err => console.log(err))
	})
</script>

{#if popularVideos.length > 0}
	<PopularCarousel popularVideos={popularVideos}/>
{:else}
	<h1>Loading Carousel</h1>
{/if}

{#if animeList.results}
	<h1 style="padding: 1rem;">Trending Anime</h1>
	<Anime data={animeList}/>
{:else}
	<h1>Loading Trending anime</h1>
{/if}

{#if trendingVideos.length > 0}
	<h1 style="padding: 1rem;">Recommendations</h1>
	<TrendingVideos trendingVideos={trendingVideos}/>
{:else}
	<h1>Loading trending youtube videos</h1>
{/if}
