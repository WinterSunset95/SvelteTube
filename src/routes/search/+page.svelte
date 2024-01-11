<script>
import { page } from '$app/stores';

const query = $page.url.searchParams.get('query')

export let data

import TrendingVideos from '../../Components/TrendingVideos.svelte';
import Anime from './Anime.svelte';

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
<Anime data={data} query={query}/>

