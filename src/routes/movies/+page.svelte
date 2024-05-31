<script lang="ts">

import type { IMovieResult, ISearch } from "@consumet/extensions";
import { MOVIES } from "@consumet/extensions";
import AnimeList from "$lib/AnimeList.svelte";
import { onMount } from "svelte";

const flixhq = new MOVIES.FlixHQ();
let movies: ISearch<IMovieResult>;

async function getMovies() {
	const res = await fetch(`/api/movies?search= `);
	const data = await res.json();
	movies = data;
}

onMount(() => {
	getMovies();
});

</script>

<h1>Start Watching</h1>
{#if movies}
	{#key movies.results}
		<AnimeList animes={undefined} movies={movies} loadMoreFunction={getMovies}/>
	{/key}
{:else}
	<p>Loading...</p>
{/if}


