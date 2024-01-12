<script>
export let data

let count = 50

</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="container">
	<div class="thumbnail">
		<img src={data.image} alt="">
	</div>
	<div class="anime_details">
		<h3 class="title">{data.title}</h3>
		<ul>
			{#each data.genres as genre}
				<li>{genre}</li>
			{/each}
		</ul>
		<p><span>Total episodes: </span> {data.totalEpisodes}</p>
		<p><span>Release: </span> {data.releaseDate}</p>
		<p><span>Summary: </span> {data.description}</p>
		<p><span>Sub or Dub: </span> {data.subOrDub}</p>
		<p><span>Type: </span> {data.type}</p>
		<p><span>Status: </span> {data.status}</p>
		<p><span>Other name(s): </span> {data.otherName}</p>
	</div>
	<div class="episodes_container">
		<h3>Start Watching</h3>
		<ul class="episodes">
			{#each data.episodes.slice(0, count) as episode}
				<li>
					<a href="/watch/anime/{episode.id}?animeId={data.id}">
						<h4>EP {episode.number}</h4>
					</a>
				</li>
			{/each}
			{#if count < data.episodes.length}
				<button on:click={() => count += 50}>Show more</button>
			{/if}
		</ul>
	</div>
</div>

<style>
	.container {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
		padding: 0.5rem;
	}

	.thumbnail {
		grid-column: span 2;
		display: flex;
		justify-content: center;
	}

	img {
		border-radius: 0.5rem;
	}

	.anime_details {
		grid-column: span 2;
	}

	.anime_details > ul {
		display: flex;
		flex-wrap: wrap;
	}

	.anime_details > ul > li {
		margin: 0.25rem;
		padding: 0.25rem;
		background-color: var(--secondary);
		border-radius: 0.5rem;
	}

	.anime_details span {
		font-weight: bold;
		color: var(--highlight);
	}

	.episodes_container {
		grid-column: span 2;
	}

	h3 {
		margin: 0.5rem;
	}
	.episodes {
		margin: 0.5rem;
		height: min-content;
		display: flex;
		flex-wrap: wrap;
		overflow-y: scroll;
		border-radius: 0.5rem;
		border: 1px solid var(--text);
	}

	.episodes > li {
		display: flex;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
	}

	.episodes > li > a, button {
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

	.episodes > li > a:hover, button:hover {
		background-color: var(--highlight);
		color: var(--text);
		transform: scale(1.1);
	}

	button {
		border: none;
		color: var(--highlight);
	}

	@media (min-width: 768px) {
		.thumbnail {
			grid-column: span 1;
		}
		.anime_details {
			grid-column: span 1;
		}
	}

</style>
