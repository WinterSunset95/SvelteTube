<script lang="ts">
export let data: { animeId: string };

import type { AnimeDetails } from '$lib/types';
import { onMount } from 'svelte';

let anime: AnimeDetails;

async function initialLoad() {
	const res = await fetch(`/api/anime?query=${data.animeId}`);
	anime = await res.json();
}

onMount(initialLoad);

</script>

{#if anime}
	<h1>{anime.title}</h1>
{:else}
	<h1>Loading...</h1>
{/if}

