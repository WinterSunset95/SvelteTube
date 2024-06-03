<script lang="ts">
export let data: { query: string };

import type { AnimeData } from '$lib/types.js';
import type { IAnimeResult, ISearch, IMovieResult } from '@consumet/extensions';
import { onMount } from 'svelte';
import AnimeList from '$lib/AnimeList.svelte';

let animeList: ISearch<IAnimeResult>;
let movieList: ISearch<IMovieResult>;
let tvList: ISearch<IMovieResult>;

async function loadMore() {
	if (animeList.hasNextPage) {
		const resData = await fetch(`/api/gogosearch?search=${data.query}&page=${animeList.currentPage! + 1}`);
		const json: ISearch<IAnimeResult> = await resData.json();
	}
	if (movieList.hasNextPage) {
		const resData2 = await fetch(`/api/movies?search=${data.query}&page=${movieList.currentPage! + 1}`);
		const json2: ISearch<IMovieResult> = await resData2.json();
	}
}

async function animeLoad() {
	const resData = await fetch(`/api/gogosearch?search=${data.query}`);
	const json: ISearch<IAnimeResult> = await resData.json();
	animeList = json;
}

async function movieLoad() {
	const resData = await fetch(`/api/movies?search=${data.query}`);
	const json: ISearch<IMovieResult> = await resData.json();
	movieList = json;
}

async function tvLoad() {
	const resData = await fetch(`/api/tv?search=${data.query}`);
	const json: ISearch<IMovieResult> = await resData.json();
	tvList = json;
}

$: data.query && animeLoad();
$: data.query && movieLoad();
$: data.query && tvLoad();

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

<h1>Anime results for "{data.query}"</h1>
{#if animeList}
	{#key animeList.results}
		<AnimeList animes={animeList} movies={undefined} loadMoreFunction={loadMore}/>
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<h1>Movie results for "{data.query}"</h1>
{#if movieList}
	{#key movieList.results}
		<AnimeList movies={movieList}/>
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<h1>TV results for "{data.query}"</h1>
{#if tvList}
	{#key tvList.results}
		<AnimeList tv={tvList}/>
	{/key}
{:else}
	<p>Loading...</p>
{/if}

<style>
h1 {
	padding: 0.5rem;
}
</style>
