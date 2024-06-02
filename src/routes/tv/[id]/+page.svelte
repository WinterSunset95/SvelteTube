<script lang="ts">
export let data: { id: string };

import type { TmdbTvInfo } from '$lib/types.js';

import { onMount } from 'svelte';

let tv: TmdbTvInfo;
let season: number;
let listOfSeasons: any[];
let currentSeason: any;
let thumbnail: string;
let episodes: string[] = [];
let episode: string;
let server: string;

async function initialLoad() {
	const res = await fetch(`/api/tvinfo?movieId=${data.id}`);
	let json = await res.json();
	tv = json;
	listOfSeasons = tv.seasons
	thumbnail = `https://image.tmdb.org/t/p/w500${tv.poster_path}`
	console.log(tv);
}

$: if (season) {
	currentSeason = listOfSeasons[season]
	thumbnail = `https://image.tmdb.org/t/p/w500${currentSeason.poster_path}`
	episodes = [];
	for (let i = 0; i < currentSeason.episode_count; i++) {
		let epNo = i + 1;
		episodes.push(epNo.toString())
	}
}

$: console.log(episode)

onMount(initialLoad);

</script>
<svelte:head>
	{#if tv}
		<title>{tv.name}</title>
	{:else}
		<title>Fetching Data</title>
	{/if}
</svelte:head>

{#if tv}
<div class="container">
	<div class="thumbnail">
		{#key thumbnail}
			<img src={thumbnail} alt="" />
		{/key}
	</div>
	<div class="details">
		<h1>{tv.name}</h1>
		<ul class="genres">
		{#each tv.genres as genre}
			<li>{genre.name}</li>
		{/each}
		</ul>
		<div>
			<span>Total episodes: </span> {tv.number_of_episodes}
		</div>
		<div>
			<span>Release date: </span> {tv.first_air_date}
		</div>
		<div>
			<span>Description: </span> {tv.overview}
		</div>
		<div>
			<span>Type: </span> TV
		</div>
		<div>
			<span>Status: </span> {tv.status}
		</div>
		<div>
			<span>Other name(s): </span> {tv.original_name}
		</div>
	</div>
	<div class="seasons">
		<h1>Select season, episode and server</h1>
		<div class="selector">
			<select bind:value={season} name="" id="">
				{#each tv.seasons as s}
					<option value={s.season_number}>{s.name}</option>
				{/each}
			</select>
			<select bind:value={episode} name="" id="">
				{#each episodes as ep}
					<option value={ep}>{ep}</option>
				{/each}
			</select>
			<select bind:value={server} name="" id="">
				<option value="vidsrc">VidSrc</option>
				<option value="vidsrcvip">VidSrc VIP</option>
				<option value="vidsrcpro">VidPro</option>
				<option value="vidsrcin">VidSrc In</option>
				<option value="superembed">SuperEmbed</option>
			</select>
		</div>
		{#if currentSeason}
		<div class="seasonDesc">
			{currentSeason.overview}
		</div>
		{/if}
		
	</div>
	<div class="watch">
	{#if server && episode && season}
	{#key server && episode && season}
		{#if server == "vidsrc"}
			<iframe
				title="Watch"
				src={`https://vidsrc.icu/embed/tv/${tv.id}/${season}/${episode}`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{:else if server == "vidsrcvip"}
			<iframe
				title="Watch"
				src={`https://vidsrc.vip/embed/tv/${tv.id}/${season}/${episode}`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{:else if server == "vidsrcpro"}
			<iframe
				title="Watch"
				src={`https://vidsrc.pro/embed/tv/${tv.id}/${season}/${episode}`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{:else if server == "vidsrcin"}
			<iframe
				title="Watch"
				src={`https://vidsrc.in/embed/tv/${tv.id}/${season}/${episode}`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{:else if server == "superembed"}
			<iframe
				title="Watch"
				src={`https://multiembed.mov/?video_id=${tv.id}&tmdb=1&s=${season}&e=${episode}`}
				referrerpolicy="origin"
				allowfullscreen
				width="1000"
				height="450"
				scrolling="no"
			></iframe>
		{/if}
	{/key}
	{:else}
		<iframe
			title="Watch"
			src={`https://vidsrc.icu/embed/tv/${tv.id}`}
			referrerpolicy="origin"
			allowfullscreen
			width="1000"
			height="450"
			scrolling="no"
		>
		</iframe>
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

	.seasons {
		grid-column: span 12;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 1rem;
	}

	.selector {
		width: 100%;
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	select {
		padding: 0.5rem;
		background-color: var(--secondary);
		border-radius: 0.5rem;
		border: none;
		color: var(--text);
	}

	.watch {
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
