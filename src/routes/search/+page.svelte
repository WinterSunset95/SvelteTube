<script lang="ts">
export let data: { query: string };

import type { AnimeData } from '$lib/types.js';
import type { IAnimeResult, ISearch } from '@consumet/extensions';
import { onMount } from 'svelte';
import AnimeList from '$lib/AnimeList.svelte';
import { ANIME } from '@consumet/extensions';

const gogoanime = new ANIME.Gogoanime();
let animeList: ISearch<IAnimeResult>;

async function loadMore() {
	if (animeList.hasNextPage) {
		const resData = await gogoanime.search(data.query, animeList.currentPage! + 1);
		animeList.results.push(...resData.results);
	}
}

async function initialLoad() {
	const res = await gogoanime.search(data.query);
	animeList = res;
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
