<script>
import { onMount } from 'svelte';
import VideoList from '$lib/VideoList.svelte'

let popularVideos = []
let latestVideos = []

onMount(() => {
	fetch(`/api/trendinganime`)
	.then(res => res.json())
	.then(data => {
			popularVideos = data
			console.log(popularVideos)
			})
	.catch(err => console.log(err))

	fetch(`/api/latestvideos`)
	.then(res => res.json())
	.then(data => {
			latestVideos = data
			console.log(latestVideos)
			})
	.catch(err => console.log(err))
})
</script>

<svelte:head>
	<title>Browse popular anime</title>
</svelte:head>

<h1>
	Welcome to the anime page
</h1>

<h3>Popular anime</h3>
<hr>
{#if popularVideos.results}
	<VideoList data={popularVideos} />
{:else}
	<h1>Loading popular anime</h1>
{/if}

<h3>Latest episode releases</h3>
<hr>
{#if latestVideos.results}
	<VideoList data={latestVideos} />
{:else}
	<h1>Loading latest videos</h1>
{/if}

<style>
	h1, h2, h3, h4, h5, h6 {
		margin: 1rem;
	}
</style>
