<script lang="ts">

import Loading from '$lib/Loading.svelte';
import List from '@/List.svelte';
import type { PageData } from './$types';
import Navigation from '@/Navigation.svelte';

let { data }: { data: PageData } = $props();

</script>

<svelte:head>
	<title>Searching: {data.query}</title>
	<meta name="description" content="Query: {data.query}">
</svelte:head>

<Navigation />
<h1>Movie results for "{data.query}"</h1>
{#if data.movieList}
	<List mediaList={data.movieList} />
{:else}
	<Loading />
{/if}

<h1>TV results for "{data.query}"</h1>
{#if data.tvList}
	<List mediaList={data.tvList} />
{:else}
	<Loading />
{/if}

<style>
h1 {
	padding: 0.5rem;
}
</style>
