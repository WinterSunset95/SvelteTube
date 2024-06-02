<script lang="ts">
export let data: { id: string };

import type { IMovieInfo } from '@consumet/extensions';

import { onMount } from 'svelte';

let movie: IMovieInfo;
let tab: string;

async function initialLoad() {
	let res: any = await fetch(`/api/movieinfo?movieId=${data.id}`)
	let json: IMovieInfo = await res.json()
	movie = json
}

onMount(initialLoad);

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
		<img src={movie.image} alt="">
	</div>
	<div class="details">
		<h1>{movie.title}</h1>
		<ul class="genres">
		{#each movie.genres as genre}
			<li>{genre}</li>
		{/each}
		</ul>
		<div>
			<span>Runtime: </span> {movie.duration}
		</div>
		<div>
			<span>Release date: </span> {movie.releaseDate}
		</div>
		<div>
			<span>Description: </span> {movie.description}
		</div>
		<div>
			<span>Rating: </span> {movie.rating}
		</div>
		<div>
			<span>Type: </span> {movie.type}
		</div>
		<div>
			<span>Status: </span> {movie.status}
		</div>
		<div>
			<span>Production: </span> {movie.production}
		</div>
	</div>
	<div class="sources">
		<select bind:value={tab} name="" id="">
			<option value="vidsrc">VidSrc</option>
			<option value="vidsrcvip">VidSrc VIP</option>
			<option value="vidsrcpro">VidPro</option>
			<option value="vidsrcin">VidSrc In</option>
			<option value="superembed">SuperEmbed</option>
		</select>
		{#if tab == "vidsrc"}
			<iframe
				title="Watch"
				src={`https://vidsrc.icu/embed/movie/${movie.id}`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{:else if tab == "vidsrcvip"}
			<iframe
				title="Watch"
				src={`https://vidsrc.vip/embed/movie/${movie.id}`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{:else if tab == "vidsrcpro"}
			<iframe
				title="Watch"
				src={`https://vidsrc.pro/embed/movie/${movie.id}`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{:else if tab == "vidsrcin"}
			<iframe
				title="Watch"
				src={`https://vidsrc.in/embed/movie/${movie.id}`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{:else if tab == "superembed"}
			<iframe
				title="Watch"
				src={`https://multiembed.mov/?video_id=${movie.id}&tmdb=1`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{/if}
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

	select {
		padding: 1rem;
		background-color: var(--secondary);
		border: none;
		border-radius: 0.5rem;
		width: 100%;
		max-width: 100rem;
		color: var(--text);
	}

	.sources {
		grid-column: span 12;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}

	iframe {
		flex: 1;
		width: 100%;
		max-width: 100rem;
		height: 100%;
		aspect-ratio: 16/9;
		border: none;
		border-radius: 0.5rem;
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
