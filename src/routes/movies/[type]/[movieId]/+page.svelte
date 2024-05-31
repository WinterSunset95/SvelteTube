<script lang="ts">

export let data: { type: string, movieId: string };

import type { IMovieInfo } from "@consumet/extensions";
    import { onMount } from "svelte";

let movie: IMovieInfo;
let epCount = 49;

async function initialLoad() {
	const res = await fetch(`/api/movieinfo?type=${data.type}&id=${data.movieId}`);
	const json: IMovieInfo = await res.json();
	movie = json;
}

onMount(() => {
	initialLoad();
})

</script>

<svelte:head>
	{#if movie}
		<title>{movie.title}</title>
	{:else}
		<title>Fetching Data</title>
	{/if}
</svelte:head>

{#if movie}
<div class="container">
	<div class="thumbnail">
		<img src={movie.cover} alt="">
	</div>
	<div class="details">
		<h1>{movie.title}</h1>
		<ul class="genres">
		{#each movie.genres as genre}
			<li>{genre}</li>
		{/each}
		</ul>
		<div>
			<span>Total episodes: </span> {movie.totalEpisodes}
		</div>
		<div>
			<span>Release date: </span> {movie.releaseDate}
		</div>
		<div>
			<span>Description: </span> {movie.description}
		</div>
		<div>
			<span>Sub or Dub: </span> {movie.subOrDub}
		</div>
		<div>
			<span>Type: </span> {movie.type}
		</div>
		<div>
			<span>Status: </span> {movie.status}
		</div>
		<div>
			<span>Other name(s): </span> {movie.otherName}
		</div>
	</div>
	{#if movie.episodes}
	<div class="episodes">
		<ul>
			{#each movie.episodes.slice(0, epCount) as episode}
				<li>
					<a href={`/movies/${movie.id}/${episode.id}`}>
						Ep {episode.number}
					</a>
				</li>
			{/each}
			{#if epCount < movie.episodes.length}
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
