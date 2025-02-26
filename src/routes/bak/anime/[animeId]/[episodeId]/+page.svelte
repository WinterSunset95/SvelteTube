<script lang="ts">
export let data: { animeId: string, episodeId: string };

import type { IAnimeInfo, IEpisodeServer, ISource } from "@consumet/extensions";
import type { AnimeEpisode } from "$lib/types";
import { onMount } from "svelte";
import { ANIME, StreamingServers } from "@consumet/extensions";
import Watch from "./Watch.svelte";

const gogoanime = new ANIME.Gogoanime();
let animeDetails: IAnimeInfo;
let animeEpisode: ISource;
let sources: IEpisodeServer[] = [];
let epCount = 9;

function nextPage() {
	if (epCount < animeDetails.totalEpisodes!) {
		epCount += 9;
	}
}

function prevPage() {
	if (epCount > 0) {
		epCount -= 9;
	}
}

async function loadAnimeDetails() {
	const res = await gogoanime.fetchAnimeInfo(data.animeId);
	animeDetails = res;
}

async function loadAnimeEpisode() {
	const res = await fetch(`/api/gogoepisode?id=${data.episodeId}`);
	console.log(res)
	const myjson = await res.json() as ISource;
	animeEpisode = myjson;
	console.log(animeEpisode);

	const servers = await gogoanime.fetchEpisodeServers(data.episodeId);
	sources = servers;
	console.log(sources);
}

onMount(() => {
	loadAnimeDetails();
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

{#key data.episodeId}

<div class="container">

	<div class="video">
		{#if animeEpisode}
			{#key data.episodeId}
				<Watch {animeEpisode} {animeDetails} />
			{/key}
		{:else}
			Loading...
		{/if}
	</div>

	<!--
	<div class="episodes">
		<ul>
			{#if animeDetails && animeDetails.episodes}
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
	-->

	{#if animeDetails}
	<div class="details">
		<h2>{animeDetails.title}</h2>
		<div>
			<span>Episode: </span> {data.episodeId.split("-")[data.episodeId.split("-").length-1]}
		</div>
	</div>
	{/if}
	
</div>

{/key}

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
		justify-content: center;
		align-items: center;
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
			grid-column: span 12;
		}
		.episodes {
			grid-column: span 4;
		}
		.episodes > ul > li {
			grid-column: span 2;
		}
	}
</style>
