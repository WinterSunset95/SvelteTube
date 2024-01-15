<script>
import { onMount } from 'svelte';
import { afterNavigate, beforeNavigate } from '$app/navigation'
export let data

import VideoList from '$lib/VideoList.svelte'

let invidiousSearchJson = []
let animeSearchJson = []

async function startSearching() {
	const invidiousSearch = await fetch(`/api/ytsearch?query=${data.query}`)
	invidiousSearchJson = await invidiousSearch.json()

	const animeSearch = await fetch(`/api/animesearch?query=${data.query}&page=1`)
	animeSearchJson = await animeSearch.json()
}

onMount(() => {
	startSearching()
})

afterNavigate(() => {
	startSearching()
})

</script>

<svelte:head>
	<title>Search: {data.query}</title>
</svelte:head>

<h2>Query: {data.query}</h2>

<h3>YouTube results</h3>
{#if invidiousSearchJson.results}
	{#key invidiousSearchJson.results}
		<VideoList data={invidiousSearchJson} query={data.query}/>
	{/key}
{:else}
	<p>Loading</p>
{/if}

<h3>Anime</h3>
{#if data.query}
	{#key animeSearchJson.results}
		<VideoList data={animeSearchJson} query={data.query}/>
	{/key}
{:else}
	<p>Loading</p>
{/if}

<style>
	h1, h2, h3, h4, h5, h6 {
		margin: 1rem;
	}
	p {
		margin: 1rem;
	}
</style>
