<script>
export let data

import { onMount } from 'svelte';

import Video from './Video.svelte';

let episodeData = {}
let count = 49

async function loadSources(serverName) {
	const res = await fetch(`/api/anistream?episodeId=${data.episodeId}&serverName=${serverName}`)
	const json = await res.json()
	episodeData = json
}

onMount(() => {
	loadSources('')
})

console.table(data.anime)

</script>

<svelte:head>
	<title>Watching: {data.anime.title}</title>
</svelte:head>

<div class="container">
	<div class="video">
		{#if episodeData.sources}
			<Video data={episodeData} />
		{:else}
			<p>Loading video please wait</p>
		{/if}
	</div>
	<div class="details">
		<h3 class="title">{data.anime.title}</h3>
		<ul>
			{#each data.anime.genres as genre}
				<li>{genre}</li>
			{/each}
		</ul>
		<p><span>Total episodes: </span> {data.anime.totalEpisodes}</p>
		<p><span>Release: </span> {data.anime.releaseDate}</p>
		<p><span>Summary: </span> {data.anime.description}</p>
		<p><span>Sub or Dub: </span> {data.anime.subOrDub}</p>
		<p><span>Type: </span> {data.anime.type}</p>
		<p><span>Status: </span> {data.anime.status}</p>
		<p><span>Other name(s): </span> {data.anime.otherName}</p>
	</div>
	{#if data.anime.episodes.length > 1}
		<div class="episodes">
			<h3>Episodes</h3>
			<ul>
				{#each data.anime.episodes.slice(0, count) as episode}
					<li>
						<a href="/watch/anime/{episode.id}?animeId={data.anime.id}">
							<h4>EP {episode.number}</h4>
						</a>
					</li>
				{/each}
				{#if count < data.anime.episodes.length}
					<button class="showMore" on:click={() => count += 50}>Show more</button>
				{/if}
			</ul>
		</div>
	{:else}
		<h3>No other episodes</h3>
	{/if}
</div>

<style>
.container {
	display: grid;
	padding: 1rem;
	gap: 1rem;
	grid-template-columns: repeat(12, 1fr);
}

.video {
	background-color: black;
	grid-column: span 12;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 20rem;
}

.details {
	grid-column: span 12;
}
.details > ul {
	display: flex;
	flex-wrap: wrap;
}

.details > ul > li {
	margin: 0.25rem;
	padding: 0.25rem;
	background-color: var(--secondary);
	border-radius: 0.5rem;
}

.details span {
	font-weight: bold;
	color: var(--highlight);
}

.episodes {
	grid-column: span 12;
}

.episodes > ul {
	margin: 0.5rem;
	height: min-content;
	display: flex;
	flex-wrap: wrap;
	overflow-y: scroll;
	border-radius: 0.5rem;
	border: 1px solid var(--text);
}

.episodes > ul > li {
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
}

.episodes > ul > li > a, .showMore {
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	border-radius: 0.5rem;
	min-width: 5rem;
	max-width: 20rem;
	padding: 0.5rem;
	margin: 0.5rem;
	background-color: var(--secondary);
	cursor: pointer;
	transition: all 0.2s ease-in-out;
}

.showMore {
	color: var(--text);
	border: none;
}

.episodes > ul > li > a:hover, .showMore:hover {
	background-color: var(--highlight);
	color: var(--secondary);
	transform: scale(1.1);
}

@media (min-width: 768px) {
	.video {
		grid-column: span 6;
	}
	.details {
		grid-column: span 6;
	}
	.episodes {
		grid-column: span 12;
	}
}
</style>
