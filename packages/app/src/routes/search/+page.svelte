<script lang="ts">

import Loading from '$lib/Loading.svelte';
import List from '@/List.svelte';
import type { PageData } from './$types';
import { Input } from '@/components/ui/input';
import Navigation from '@/Navigation.svelte';
import { SearchIcon } from '@lucide/svelte';
    import Button from '@/components/ui/button/button.svelte';

let { data }: { data: PageData } = $props();

</script>

<svelte:head>
	<title>Searching: {data.query}</title>
	<meta name="description" content="Query: {data.query}">
</svelte:head>

<div class="w-full h-full p-4 pb-8 overflow-auto">

<form action="/search" method="GET" class="w-full flex flex-row items-center justify-center p-4 gap-2">
  <Input
    name="query"
    value={data.query ?? ""}
    type="text"
    class="w-full h-full"
    placeholder="Search"
  />
  <Button type="submit">
    <SearchIcon />
  </Button>
</form>

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

</div>

<style>
h1 {
	padding: 0.5rem;
}
</style>
