<script lang="ts">
import Footer from '@/Footer.svelte';

import List from '@/List.svelte';
import Navigation from '@/Navigation.svelte';

import type { MovieSearchResult, PeekABoo } from "peek-a-boo.ts"
let { data }: { data: {
	movies: PeekABoo<MovieSearchResult[]>,
	tv: PeekABoo<MovieSearchResult[]>
} } = $props();

</script>

<svelte:head>
	<title>SvelteTube, stream and download</title>
	<meta name="description" content="Download anime, stream and chat live as you watch">
</svelte:head>

<div class="w-full h-full overflow-auto">
  <main class="p-4 flex flex-col gap-2 mt-20">
    <h1 class="text-lg md:text-xl">Trending Shows</h1>
    <List mediaList={data.tv.boo} />
    <h1 class="text-lg md:text-xl">Trending Movies</h1>
    <List mediaList={data.movies.boo} />
  </main>
</div>
