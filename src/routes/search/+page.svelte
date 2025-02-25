<script lang="ts">
export let data: { query: string };

import type { AnimeData } from '$lib/types.js';
import type { IAnimeResult, ISearch, IMovieResult } from '@consumet/extensions';
import { onMount } from 'svelte';
import AnimeList from '$lib/AnimeList.svelte';
import Loading from '$lib/Loading.svelte';

let animeList: ISearch<IAnimeResult>;
let movieList: ISearch<IMovieResult>;
let tvList: ISearch<IMovieResult>;
let dramaList: ISearch<IMovieResult>;

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

async function dramaLoad() {
	const resData = await fetch(`/api/asian?search=${data.query}`);
	const json: ISearch<IMovieResult> = await resData.json();
	dramaList = json;
}

//$: data.query && animeLoad();
//$: data.query && movieLoad();
//$: data.query && tvLoad();
//$: data.query && dramaLoad();

onMount(() => {
	animeLoad();
	movieLoad();
	tvLoad();
	dramaLoad();
});

</script>

<svelte:head>
	<title>{data.query}</title>
	<meta name="description" content="Query: {data.query}">
</svelte:head>

<h1>Anime results for "{data.query}"</h1>
{#if animeList}
	{#key animeList.results}
		<AnimeList animes={animeList} movies={undefined} tv={undefined} drama={undefined} loadMoreFunction={loadMore}/>
	{/key}
{:else}
	<Loading />
{/if}

<h1>Movie results for "{data.query}"</h1>
{#if movieList}
	{#key movieList.results}
		<AnimeList animes={undefined} movies={movieList} tv={undefined} drama={undefined} loadMoreFunction={async () => {}}/>
	{/key}
{:else}
	<Loading />
{/if}

<h1>TV results for "{data.query}"</h1>
{#if tvList}
	{#key tvList.results}
		<AnimeList animes={undefined} movies={undefined} tv={tvList} drama={undefined} loadMoreFunction={async () => {}}/>
	{/key}
{:else}
	<Loading />
{/if}

<h1>Drama results for "{data.query}"</h1>
{#if dramaList}
	{#key dramaList.results}
		<AnimeList animes={undefined} movies={undefined} tv={tvList} drama={dramaList} loadMoreFunction={async () => {}}/>
	{/key}
{:else}
	<Loading />
{/if}

<style>
h1 {
	padding: 0.5rem;
}
</style>
