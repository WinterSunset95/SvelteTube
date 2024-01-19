<script lang="ts">
export let data: { animeId: string, episodeId: string };

import type { AnimeDetails, AnimeEpisode } from "$lib/types";
import { onMount } from "svelte";
import Watch from "./Watch.svelte";

let animeDetails: AnimeDetails;
let animeEpisode: AnimeEpisode;
let epCount = 9;

function nextPage() {
	if (epCount < animeDetails.episodes.length) {
		epCount += 9;
	}
}

function prevPage() {
	if (epCount > 0) {
		epCount -= 9;
	}
}

async function loaAnimeDetails() {
	const res = await fetch(`/api/anime?query=${data.animeId}`);
	animeDetails = await res.json();
}

async function loadAnimeEpisode() {
	const res = await fetch(`/api/anistream?query=${data.episodeId}`);
	animeEpisode = await res.json();
	console.table(animeEpisode);
}

onMount(() => {
	loaAnimeDetails();
	loadAnimeEpisode();
});
</script>

<svelte:head>
	{#if animeDetails && data}
		<title>{animeDetails.title} Ep - {data.episodeId.slice(-1)}</title>
	{:else}
		<title>Fetching Data</title>
	{/if}
</svelte:head>

<div class="container">

	<div class="video">
		{#if animeEpisode}
			<Watch {animeEpisode} {animeDetails} />
		{:else}
			Loading...
		{/if}
	</div>

	<div class="episodes">
		<ul>
			{#if animeDetails}
				<li>
					<a href={`/anime/${animeDetails.id}`}>
						Back
					</a>
				</li>
				{#each animeDetails.episodes.slice(epCount-9, epCount) as episode}
					<li>
						<a class={episode.number == parseInt(data.episodeId.slice(-1)) ? "currentEp" : ""} href={`/anime/${animeDetails.id}/${episode.id}`}>
							Ep {episode.number}
						</a>
					</li>
				{/each}
			{/if}
		</ul>
		<div class="next_prev">
			<button on:click={() => epCount > 99 ? epCount -= 99 : null}> &lt;&lt; </button>
			<button on:click={() => epCount > 9 ? epCount -= 9 : null}> &lt; </button>
			<button on:click={() => epCount < animeDetails.episodes.length ? epCount += 9 : null}> &gt; </button>
			<button on:click={() => animeDetails.episodes.length-epCount > 99 ? epCount += 99 : null}> &gt;&gt; </button>
		</div>
	</div>

	{#if animeDetails}
	<div class="details">
		<h2>{animeDetails.title}</h2>
		<div>
			<span>Episode: </span> {data.episodeId.slice(-1)}
		</div>
	</div>
	{/if}
	
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 1rem;
		padding: 0.5rem;
	}
	.video {
		grid-column: span 12;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: black;
	}

	.episodes {
		grid-column: span 12;
	}

	.episodes > ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
		width: 100%;
	}

	.episodes > ul > li {
		grid-column: span 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.episodes > ul > li > a {
		flex-grow: 1;
		padding: 0.5rem;
		background: var(--secondary);
		border-radius: 0.5rem;
	}

	.next_prev {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		gap: 1rem;
	}

	.next_prev > button {
		flex-grow: 1;
		padding: 0.5rem;
		background: var(--secondary);
		color: var(--text);
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
	}

	.details {
		grid-column: span 12;
		grid-row: 2 / span 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
	}

	.details span {
		font-weight: bold;
		color: var(--highlight);
	}

	.currentEp {
		background: var(--highlight) !important;
		color: var(--text) !important;
	}

	@media (min-width: 768px) {
		.video {
			grid-column: span 8;
		}
		.episodes {
			grid-column: span 4;
		}
		.episodes > ul > li {
			grid-column: span 2;
		}
	}
</style>
