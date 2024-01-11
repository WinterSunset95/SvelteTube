<script>
export let data
export let query

let animeArray = data.anime.results
let animePage = data.anime.currentPage
let hasNextPage = data.anime.hasNextPage

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
	{#each animeArray as video}
		<a class="video" href="/anime/{video.id}">
			<img src="{video.image}" alt="">
			<div class="details">
				<h3 class="title">{video.title}</h3>
				<p class="mini_details">
					{video.releaseDate} • {video.subOrDub}
				</p>
			</div>
		</a>
	{/each}
</div>
{#if hasNextPage}
	<button on:click={getNextPage}>Load more</button>
{/if}

<style>
	.list {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr;
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

	@media (min-width: 768px) {
		.list {
			grid-template-columns: repeat(4, 1fr);
			padding: 1rem;
		}
	}
</style>
