<script lang="ts">

import type { IMovieResult, ISearch } from "@consumet/extensions";
import { MOVIES } from "@consumet/extensions";
import AnimeList from "$lib/AnimeList.svelte";
import { onMount } from "svelte";

const flixhq = new MOVIES.FlixHQ();
let movies: {
	popular: ISearch<IMovieResult>,
	trending: ISearch<IMovieResult>
};

async function getMovies() {
	const res = await fetch(`/api/movies`);
	const data = await res.json();
	movies = data;
}

onMount(() => {
	getMovies();
});

</script>

<h1>Trending</h1>
{#if movies}
	{#key movies.trending.results}
		<AnimeList animes={undefined} movies={movies.trending} loadMoreFunction={undefined}/>
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<h1>Popular</h1>
{#if movies}
	{#key movies.popular.results}
		<AnimeList animes={undefined} movies={movies.popular} loadMoreFunction={undefined}/>
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<style>
h1 {
	padding: 1rem;
}
</style>

