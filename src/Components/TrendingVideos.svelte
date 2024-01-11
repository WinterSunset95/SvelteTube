<script>
export let trendingVideos = []
</script>

<div class="container">
	{#each trendingVideos as video, index}
		<a href="/watch/youtube/{video.videoId}" class="item">
			<img src={video.videoThumbnails[6].url} alt={video.title}>
			<div class="details">
				<p class="title">{video.title}</p>
				<p class="mini_details">
					{video.author} • {video.viewCount} views • {video.publishedText}
				</p>
			</div>
		</a>
	{/each}
</div>

<style>
	.container {
		display: grid;
		padding: 1rem;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
	}

	.item {
		grid-column: span 1;
		width: 100%;

		display: flex;
		flex-direction: column;
		border-radius: 0.5rem;
		overflow: hidden;
	}


	img {
		width: 100%;
		aspect-ratio: 16/9;
	}

	.details {
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		padding: 0.5rem;

		flex-grow: 1;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.title {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-height: 1rem;        /* fallback */
		max-height: 2rem;       /* fallback */
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.mini_details {
		font-size: 0.8rem;
	}

	@media (min-width: 768px) {
		.container {
			grid-template-columns: repeat(4, 1fr);
		}
	}

</style>
