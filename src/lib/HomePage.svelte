<script lang="ts">
	import type { AnimeData } from "$lib/types"

	import { onMount } from "svelte";
	import AnimeList from "$lib/AnimeList.svelte";

	let animeList: AnimeData;

	async function loadMore() {
		if (animeList.hasNextPage) {
			animeList.currentPage++;
			const res = await fetch(`/api/animesearch?page=${animeList.currentPage}`);
			const data: AnimeData = await res.json();
			animeList.hasNextPage = data.hasNextPage;
			animeList.currentPage = data.currentPage;
			animeList.results.push(...data.results);
		}
	}

	async function initialLoad() {
		const res = await fetch("/api/animesearch");
		animeList = await res.json();
	}

	onMount(async () => {
		await initialLoad();
	});
</script>

<h1>Start watching</h1>
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
