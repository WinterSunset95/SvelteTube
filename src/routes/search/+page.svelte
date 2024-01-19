<script lang="ts">
export let data: { query: string };

import type { AnimeData } from '$lib/types.js';
import { onMount } from 'svelte';
import AnimeList from '$lib/AnimeList.svelte';

let animeList: AnimeData;

async function loadMore() {
	if (animeList.hasNextPage) {
		animeList.currentPage++;
		const res = await fetch(`/api/animesearch?query=${data.query}&page=${animeList.currentPage}`);
		const resData: AnimeData = await res.json();
		animeList.hasNextPage = resData.hasNextPage;
		animeList.currentPage = resData.currentPage;
		animeList.results.push(...resData.results);
	}
}

async function initialLoad() {
	const res = await fetch(`/api/animesearch?query=${data.query}`);
	animeList = await res.json();
}

$: data.query && initialLoad();

onMount(() => {
	initialLoad();
});

</script>

<svelte:head>
	<title>{data.query}</title>
	<meta name="description" content="Query: {data.query}">
</svelte:head>

<h1>Search results for "{data.query}"</h1>
{#if animeList}
	{#key animeList.results}
		<AnimeList data={animeList} loadMoreFunction={loadMore}/>
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<style>
h1 {
	padding: 0.5rem;
}
</style>
