<script lang="ts">
import type { IMovieInfo } from "@consumet/extensions";
import { onMount } from "svelte";

export let data: { name: string };
let id = `drama-detail/${data.name}`
let drama: IMovieInfo;
let epCount = 50;

async function initialLoad() {
	const res = await fetch(`/api/dramadetail?id=${id}`);
	const data: IMovieInfo = await res.json();
	drama = data;
	console.log(data);
}

onMount(() => {
	initialLoad();
});

</script>

<svelte:head>
	{#if drama}
		<title>{drama.title}</title>
	{:else}
		<title>Fetching Data</title>
	{/if}
</svelte:head>

{#if drama}
<div class="container">
	<div class="thumbnail">
		<img src={drama.image} alt="">
	</div>
	<div class="details">
		<h1>{drama.title}</h1>
		<ul class="genres">
		{#if drama.genres}
			{#each drama.genres as genre}
				<li>{genre}</li>
			{/each}
		{/if}
		</ul>
		<div>
			<span>Total episodes: </span> {drama.episodes?.length}
		</div>
		<div>
			<span>Release date: </span> {drama.releaseDate}
		</div>
		<div>
			<span>Description: </span> {drama.description}
		</div>
		<div>
			<span>Type: </span> Asian
		</div>
		<div>
			<span>Status: </span> {drama.status}
		</div>
	</div>
	{#if drama.episodes}
		<div class="episodes">
			<ul>
				{#each drama.episodes.slice(0, epCount) as episode}
					<li>
						<a href={`/${drama.id}/${episode.id}`}>
							{episode.title}
						</a>
					</li>
				{/each}
				{#if epCount < drama.episodes.length}
					<button on:click={() => epCount += 50}>More . . . </button>
				{/if}
			</ul>
		</div>
	{/if}
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
