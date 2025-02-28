<script lang="ts">
export let data: { query: string };

import { onMount } from 'svelte';
import Loading from '$lib/Loading.svelte';
import type { MovieSearchResult, PeekABoo } from 'peek-a-boo.ts';
import List from '@/List.svelte';

let animeList: MovieSearchResult[];
let movieList: MovieSearchResult[];
let tvList: MovieSearchResult[];;

async function animeLoad() {
	const resData = await fetch(`/api/anime/gogo/search?query=${data.query}`);
	const json = await resData.json() as PeekABoo<MovieSearchResult[]>;
	animeList = json.boo;
}

async function movieLoad() {
	const resData = await fetch(`/api/movie/tmdb/search?query=${data.query}`);
	const json = await resData.json() as PeekABoo<MovieSearchResult[]>;
	movieList = json.boo;
}

async function tvLoad() {
	const resData = await fetch(`/api/tv/tmdb/search?query=${data.query}`);
	const json = await resData.json() as PeekABoo<MovieSearchResult[]>;
	tvList = json.boo
}

onMount(() => {
	animeLoad();
	movieLoad();
	tvLoad();
});

</script>

<svelte:head>
	<title>{data.query}</title>
	<meta name="description" content="Query: {data.query}">
</svelte:head>

<h1>Movie results for "{data.query}"</h1>
{#if movieList}
	<List mediaList={movieList} />
{:else}
	<Loading />
{/if}

<h1>TV results for "{data.query}"</h1>
{#if tvList}
	<List mediaList={tvList} />
{:else}
	<Loading />
{/if}

<h1>Anime results for "{data.query}"</h1>
{#if animeList}
	<List mediaList={animeList} />
{:else}
	<Loading />
{/if}


<style>
h1 {
	padding: 0.5rem;
}
</style>
