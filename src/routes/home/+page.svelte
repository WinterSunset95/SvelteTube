<script lang="ts">
    import Footer from '@/Footer.svelte';


import List from '@/List.svelte';
    import Navigation from '@/Navigation.svelte';

import type { MovieSearchResult, PeekABoo } from "peek-a-boo.ts"
let { data }: { data: {
	anime: PeekABoo<MovieSearchResult[]>,
	movies: PeekABoo<MovieSearchResult[]>,
	tv: PeekABoo<MovieSearchResult[]>
} } = $props();
console.log(data)

</script>

<svelte:head>
	<title>SvelteTube, stream and download</title>
	<meta name="description" content="Download anime, stream and chat live as you watch">
</svelte:head>

<Navigation />
<main class="p-4 flex flex-col gap-2 h-dvh">
	<h1 class="text-lg md:text-xl">Trending Shows</h1>
	<List mediaList={data.tv.boo} />
	<h1 class="text-lg md:text-xl">Trending Movies</h1>
	<List mediaList={data.movies.boo} />
	<h1 class="text-lg md:text-xl">Trending Anime</h1>
	<List mediaList={data.anime.boo} />
</main>
<Footer />

