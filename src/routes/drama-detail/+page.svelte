<script lang="ts">

import type { IMovieResult, IMovieInfo, ISearch } from "@consumet/extensions";
import { onMount } from "svelte";
import AnimeList from "$lib/AnimeList.svelte";

let drama: ISearch<IMovieResult>;

async function initialLoad() {
	const res = await fetch("/api/asian?search=");
	const data: ISearch<IMovieResult> = await res.json();
	drama = data;
	console.log(data);
}

onMount(() => 
	initialLoad()
);

</script>

<h1>Trending</h1>
{#if drama}
	{#key drama.results}
		<AnimeList drama={drama}/>
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<style>
h1 {
	text-align: center;
	padding: 1rem;
}
</style>
