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
  <main class="p-4 flex flex-col gap-2">
    <h1 class="flex w-full h-full justify-between items-center">
      <span class="text-lg md:text-xl mb-4 font-black">
        Trending Shows
      </span>
      <a href="/discover?type=tv&mode=trending">See More ></a>
    </h1>
    <List mediaList={data.tv.boo} />
    <h1 class="flex w-full h-full justify-between items-center mt-12">
      <span class="text-lg md:text-xl mb-4 font-black">
        Trending Movies
      </span>
      <a href="/discover?type=movie&mode=trending">See More ></a>
    </h1>
    <List mediaList={data.movies.boo} />
  </main>
</div>
