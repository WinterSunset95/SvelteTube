<script>
import { onMount } from 'svelte';
export let data

import VideoList from '../../Components/VideoList.svelte';

let invidiousSearchJson = []
let animeSearchJson = []

async function startSearching() {
	try {
		const invidiousSearch = await fetch(`https://invidious.lunar.icu/api/v1/search?q=${data.query}`)
		invidiousSearchJson = await invidiousSearch.json()
	} catch {
		invidiousSearchJson = []
	}

	try {
		const animeSearch = await fetch(`/api/animesearch?query=${data.query}&page=1`)
		animeSearchJson = await animeSearch.json()
	} catch {
		animeSearchJson = []
	}
}

onMount(() => {
	startSearching()
})

</script>

<svelte:head>
	<title>Search: {data.query}</title>
</svelte:head>

<h2>Query: {data.query}</h2>

<h3>YouTube results</h3>
{#if invidiousSearchJson.length > 0}
	<VideoList data={invidiousSearchJson} query={data.query}/>
{:else}
	<p>Loading</p>
{/if}

<h3>Anime</h3>
{#if animeSearchJson.results}
	<VideoList data={animeSearchJson} query={data.query}/>
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
