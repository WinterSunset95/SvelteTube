<script>
export let data
export let query

let animeArray = data.results
let animePage = data.currentPage
let hasNextPage = data.hasNextPage

let count = 4

function loadMore() {
	count += 4
	if (count > animeArray.length) {
		getNextPage()
	}
}
async function getNextPage() {
	if (hasNextPage) {
		animePage++
		const res = await fetch(`/api/animesearch?query=${query}&page=${animePage}`)
		const data = await res.json()
		animeArray = [...animeArray, ...data.results]
		hasNextPage = data.hasNextPage
		console.log(data)
	}
}

</script>

<div class="list">
	{#each animeArray.slice(0, count) as video}
		<a class="video" href="/anime/{video.id}">
			<img src="{video.image}" alt="">
			<div class="details">
				<h3 class="title">{video.title}</h3>
				{#if video.releaseDate}
					<p class="mini_details">
						{video.releaseDate} • {video.subOrDub}
					</p>
				{:else if video.genres}
					<ul class="genre">
						{#each video.genres as genre}
							<li>{genre}</li>
						{/each}
					</ul>
				{:else}
					<p class="mini_details">
						{video.subOrDub}
					</p>
				{/if}
			</div>
		</a>
	{/each}
</div>
{#if count < animeArray.length}
	<button on:click={loadMore}>Load more</button>
{/if}

<style>
	.details {
		height: 100%;
	}
	.genre {
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.genre > li {
		background-color: var(--buttons);
		color: var(--text);
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
	}

	.list {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
		padding: 0.5rem;
	}

	.video {
		grid-column: span 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.video img {
		width: 100%;
		border-radius: 0.5rem;
	}

	button {
		margin: 1rem;
		padding: 0.5rem;
		background-color: var(--secondary);
		color: var(--text);
		border-radius: 0.5rem;
		border: none;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.list {
			grid-template-columns: repeat(4, 1fr);
			padding: 1rem;
		}
	}
</style>
