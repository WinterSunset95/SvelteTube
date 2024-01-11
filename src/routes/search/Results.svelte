<script>
export let data

console.log(data)
</script>

<div class="list">
	{#each data as video}
		<a class="video" href="#">
			<img src="{video.poster}" alt="">
			<div class="details">
				<h3 class="title">{video.title}</h3>
				<p class="mini_details">
					{video.type} • {video.year} • {video.score}
				</p>
				<p class="status">
					{video.status}
				</p>
			</div>
		</a>
	{/each}
</div>

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
