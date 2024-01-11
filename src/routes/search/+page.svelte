<script>
import { page } from '$app/stores';

export let data

import TrendingVideos from '../../Components/TrendingVideos.svelte';
import Results from './Results.svelte';

const animeArray = data.animepahe.data

$: console.log(animeArray)

</script>

<svelte:head>
	<title>Search: {data.query}</title>
</svelte:head>

<h2>Query: {data.query}</h2>

<h3>YouTube results</h3>
{#if data.youtube.length > 0}
	<TrendingVideos trendingVideos={data.youtube} />
{:else}
	<p>Loading</p>
{/if}

<h3>Anime</h3>
<Results data={animeArray} />

