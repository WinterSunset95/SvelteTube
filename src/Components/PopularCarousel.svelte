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
			<a href="#" class="item {index+1 == shownVideo ? '' : 'hidden'}" >
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

	<div class="carousel_prev">
		<img src={prevVideo.videoThumbnails[4].url} alt={prevVideo.title}>
		<h3>{prevVideo.title}</h3>
	</div>

	<div class="carousel_next">
		<img src={nextVideo.videoThumbnails[4].url} alt={nextVideo.title}>
		<h3>{nextVideo.title}</h3>
	</div>

</div>

<style>
.carousel_container {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	width: 100%;
	aspect-ratio: 16 / 9;

	grid-column: span 12;
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

	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	position: relative;
	width: 100%;
}

.hidden {
	opacity: 0;
}

.header {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
}

.carousel_prev, .carousel_next {
	display: grid;
	place-items: center;
	grid-template-columns: 1fr;

	grid-column: span 6;
}

.carousel_prev img, .carousel_next img {
	width: 100%;
	height: 100%;
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	object-fit: cover;
}

.carousel_prev h3, .carousel_next h3 {
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	z-index: 1;
	color: white;
}

@media (min-width: 768px) {
	.carousel_container {
		grid-column: 1 / 8;
		grid-row: 1 / 3;
	}

	.carousel_prev, .carousel_next {
		grid-column: 8 / 13;
	}

	.carousel_prev {
		grid-row: 1 / 2;
	}

	.carousel_next {
		grid-row: 2 / 3;
	}
}

</style>
