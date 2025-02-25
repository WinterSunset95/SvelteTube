<script lang="ts">
	import type { IAnimeResult, ISearch } from "@consumet/extensions";

	import { onMount } from "svelte";
	import AnimeList from "$lib/AnimeList.svelte";
	import { ANIME } from "@consumet/extensions";

	let animeList: ISearch<IAnimeResult>;
	const gogoanime = new ANIME.Gogoanime();
	const zoroanime = new ANIME.Zoro();
	const anify = new ANIME.Anify();
	const animepahe = new ANIME.AnimePahe();
	const arrayOfProviders = [gogoanime, zoroanime, anify, animepahe];

	async function loadMore() {
		if (animeList.hasNextPage) {
			const res = await gogoanime.search(" ", animeList.currentPage! + 1);
			// Add the new results to the existing list
			animeList = {
				...res,
				results: [...animeList.results, ...res.results],
			};
		}
	}

	async function initialLoad() {
		arrayOfProviders.map(async (provider) => {
			//const res = await provider.search(" ");
			//console.log("Provider: ", res);
		})
		const res = await gogoanime.search(" ");
		console.log(res);
		animeList = res;
	}

	onMount(async () => {
		await initialLoad();
	});
</script>

<h1>Start watching</h1>
{#if animeList}
	{#key animeList.results}
		<AnimeList animes={animeList} drama={undefined} tv={undefined} movies={undefined} loadMoreFunction={loadMore}/>
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<style>
h1 {
	padding: 0.5rem;
}
</style>
