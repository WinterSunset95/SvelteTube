<script lang="ts">
export let data: { animeId: string };

import type { IAnimeInfo } from '@consumet/extensions';

import { onMount } from 'svelte';
import { ANIME } from '@consumet/extensions';

const gogoanime = new ANIME.Gogoanime();
let anime: IAnimeInfo;
let epCount = 49;

async function initialLoad() {
	const res = await gogoanime.fetchAnimeInfo(data.animeId);
	console.log(res)
	anime = res;
	console.log(data);
	// For some reason, anime.id is always 'category'
	anime.id = data.animeId;
	console.log(anime)
}

onMount(initialLoad);

</script>

<svelte:head>
	{#if anime}
		<title>{anime.title}</title>
	{:else}
		<title>Fetching Data</title>
	{/if}
</svelte:head>

{#if anime}
<div class="container">
	<div class="thumbnail">
		<img src={anime.image} alt="">
	</div>
	<div class="details">
		<h1>{anime.title}</h1>
		<ul class="genres">
		{#each anime.genres as genre}
			<li>{genre}</li>
		{/each}
		</ul>
		<div>
			<span>Total episodes: </span> {anime.totalEpisodes}
		</div>
		<div>
			<span>Release date: </span> {anime.releaseDate}
		</div>
		<div>
			<span>Description: </span> {anime.description}
		</div>
		<div>
			<span>Sub or Dub: </span> {anime.subOrDub}
		</div>
		<div>
			<span>Type: </span> {anime.type}
		</div>
		<div>
			<span>Status: </span> {anime.status}
		</div>
		<div>
			<span>Other name(s): </span> {anime.otherName}
		</div>
	</div>
	<div class="episodes">
		<ul>
			{#each anime.episodes.slice(0, epCount) as episode}
				<li>
					<a href={`/anime/${anime.id}/${episode.id}`}>
						Ep {episode.number}
					</a>
				</li>
			{/each}
			{#if epCount < anime.episodes.length}
				<button on:click={() => epCount += 50}>More . . . </button>
			{/if}
		</ul>
	</div>
</div>
{:else}
	<h1>Loading...</h1>
{/if}

<style>

	.container {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(12, 1fr);
		padding: 0.5rem;
	}

	.thumbnail {
		grid-column: span 12;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
	}

	.thumbnail > img {
		max-width: 100%;
		object-fit: contain;
		border-radius: 0.5rem;
	}

	.details {
		grid-column: span 12;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.details span {
		font-weight: bold;
		color: var(--highlight);
	}

	.genres {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.genres > li {
		padding: 0.5rem;
		background-color: var(--secondary);
		border-radius: 0.5rem;
	}

	.episodes {
		grid-column: span 12;
		padding: 0.5rem;
	}

	.episodes > ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.episodes > ul > li {
		flex-grow: 1;
		min-width: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.episodes > ul > li > a {
		width: 100%;
		padding: 0.5rem;
		background-color: var(--secondary);
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 768px) {
		.thumbnail {
			grid-column: span 4;
		}
		.details {
			grid-column: span 8;
		}
	}

</style>
