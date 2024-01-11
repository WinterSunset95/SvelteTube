<script>
export let data

let count = 50

</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="container">
	<div class="anime_info">
		<img src={data.image} alt="">
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
	</div>
	<ul class="episodes">
		{#each data.episodes.slice(0, count) as episode}
			<li>
				<a href="/watch/anime/{episode.id}">
					<h4>EP {episode.number}</h4>
				</a>
			</li>
		{/each}
		{#if count < data.episodes.length}
			<button on:click={() => count += 50}>Show more</button>
		{/if}
	</ul>
</div>

<style>
	.anime_info {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: center;
	}

	.anime_info > img {
		border-radius: 0.5rem;
	}

	.anime_info > * {
		flex-grow: 1;
		margin: 0.5rem;
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

	.episodes {
		height: min-content;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		overflow-y: scroll;
	}

	.episodes > li {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.5rem;
		width: 5rem;
		padding: 0.5rem;
		margin: 0.5rem;
		background-color: var(--secondary);
	}

	button {
		padding: 0.5rem;
		border-radius: 0.5rem;
		background-color: var(--secondary);
		color: var(--highlight);
		border: none;
	}

	@media (min-width: 768px) {
		.anime_info {
			flex-wrap: nowrap;
		}
	}

</style>
