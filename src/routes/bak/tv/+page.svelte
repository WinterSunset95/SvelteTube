<script lang="ts">

import type { IMovieResult, ISearch } from "@consumet/extensions";
import AnimeList from "$lib/AnimeList.svelte";
import { onMount } from "svelte";

let tv: {
	popular: ISearch<IMovieResult>,
	trending: ISearch<IMovieResult>
};

async function getMovies() {
	const res = await fetch(`/api/tv`);
	const data = await res.json();
	tv = data;
}

onMount(() => {
	getMovies();
});

</script>

<h1>Trending</h1>
{#if tv}
	{#key tv.trending.results}
		<AnimeList tv={tv.trending} />
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<h1>Popular</h1>
{#if tv}
	{#key tv.popular.results}
		<AnimeList tv={tv.popular} />
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<style>
h1 {
	padding: 1rem;
}
</style>

