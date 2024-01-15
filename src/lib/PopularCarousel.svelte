<script>
export let popularVideos = []
let shownVideo = 1
$: prevVideoIndex = shownVideo == 1 ? popularVideos.length : shownVideo - 1
$: nextVideoIndex = shownVideo == popularVideos.length ? 1 : shownVideo + 1
$: prevVideo = popularVideos[prevVideoIndex-1]
$: nextVideo = popularVideos[nextVideoIndex-1]

function increment() {
	shownVideo++
	if (shownVideo > popularVideos.length) {
		shownVideo = 1
	}
}

function decrement() {
	shownVideo--
	if (shownVideo < 1) {
		shownVideo = popularVideos.length
	}
}
</script>

<div class="header">
	<div class="carousel_container">
		<div class="controls">
			<div class="button_container">
				<button class="icon" on:click={decrement}>
					<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"/>
					</svg>
				</button>
			</div>
			<div class="button_container">
				<button class="icon" on:click={increment}>
					<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"/>
					</svg>
				</button>
			</div>
		</div>
		{#each popularVideos as video, index}
			<a href="/watch/youtube/{video.videoId}" class="item {index+1 == shownVideo ? '' : 'hidden'}" >
				<img src={video.videoThumbnails[4].url} alt={video.title}>
				<div class="details">
					<div class="padding">
						<h2>
							{video.title}
						</h2>
						<span>
							{video.author} • {video.viewCount} views • {video.publishedText}
						</span>
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="carousel_side">
		<a href="/watch/youtube/{prevVideo.videoId}" class="carousel_prev">
			<div>
				<img src={prevVideo.videoThumbnails[4].url} alt={prevVideo.title}>
			</div>
			<h3>{prevVideo.title}</h3>
		</a>

		<a href="/watch/youtube/{nextVideo.videoId}" class="carousel_next">
			<div>
				<img src={nextVideo.videoThumbnails[4].url} alt={nextVideo.title}>
			</div>
			<h3>{nextVideo.title}</h3>
		</a>
	</div>

</div>

<style>
	.carousel_container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		width: 100%;

		grid-column: span 12;
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.controls {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		z-index: 2;
	}

	.controls > .button_container {
		background-color: var(--primary);
		border: none;
		padding: 0.5rem;
	}

	.controls > .button_container:hover {
		background-color: var(--highlight);
	}

	.item {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		width: 100%;
		transition: opacity 0.5s ease-in-out;

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	.item > img {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.details {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		z-index: 1;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.details > .padding {
		display: flex;
		flex-direction: column;
		padding: 1rem;

		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		position: relative;
	}

	.hidden {
		opacity: 0;
	}

	.header {
		display: grid;
		padding: 1rem;
		gap: 1rem;
		grid-template-columns: repeat(12, 1fr);
	}

	.carousel_side {
		grid-column: span 12;

		display: flex;
		flex-direction: row;
	}

	.carousel_prev, .carousel_next {
		display: grid;
		place-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		overflow: hidden;
		flex: 1;

		border-radius: 0.5rem;
	}

	.carousel_prev {
		margin-right: 1rem;
	}

	.carousel_prev > div, .carousel_next > div {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.carousel_prev img, .carousel_next img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.carousel_prev h3, .carousel_next h3 {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		width: 100%;
		height: 100%;
		z-index: 1;
		color: white;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 768px) {
		.carousel_container {
			grid-column: span 8;
		}

		.carousel_side {
			grid-column: span 4;
			flex-direction: column;
		}

		.carousel_prev {
			margin-right: 0;
			margin-bottom: 1rem;
		}

	}

</style>
