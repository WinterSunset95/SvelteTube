<script>
export let data
export let query

// Clean youtube data to match anime data

let videoArray = []
let resultsPage = 1
let hasNextPage = false
let endpoint = ""

if (data.endpoint) {
	videoArray = data.results
	resultsPage = data.currentPage
	hasNextPage = data.hasNextPage
	endpoint = data.endpoint
} else {
	console.table(data)
	data.map(video => {
		videoArray.push({
			id: video.videoId,
			title: video.title,
			image: video.videoThumbnails[5].url,
			releaseDate: video.publishedText,
			type: video.type,
			views: video.viewCountText,
			length: `${video.lengthSeconds % 60}mins ${Math.floor(video.lengthSeconds / 60)}secs`,
			channel: {
				name: video.author,
				id: video.authorId,
				url: video.authorUrl,
				verified: video.authorVerified
			}
		})
	})
	endpoint = "invidious"
}

let count = 4

function loadMore() {
	count += 4
	if (count > videoArray.length) {
		getNextPage()
	}
}

async function getNextPage() {
	if (hasNextPage) {
		resultsPage++
		if (endpoint == "animesearch") {
			const res = await fetch(`/api/animesearch?query=${query}&page=${resultsPage}`)
			const data = await res.json()
			videoArray = [...videoArray, ...data.results]
			hasNextPage = data.hasNextPage
			console.log(data)
		} else if (endpoint == "trendinganime") {
			const res = await fetch(`/api/trendinganime?page=${resultsPage}`)
			const data = await res.json()
			videoArray = [...videoArray, ...data.results]
			hasNextPage = data.hasNextPage
			console.log(data)
		} else if (endpoint == "latestvideos") {
			const res = await fetch(`/api/latestvideos?page=${resultsPage}`)
			const data = await res.json()
			videoArray = [...videoArray, ...data.results]
			hasNextPage = data.hasNextPage
			console.log(data)
		} else if (endpoint == "movies") {
			const res = await fetch(`/api/movies?page=${resultsPage}`)
			const data = await res.json()
			videoArray = [...videoArray, ...data.results]
			hasNextPage = data.hasNextPage
			console.log(data)
		} else {
			const res = await fetch(`/api/anime?page=${resultsPage}`)
			const data = await res.json()
			videoArray = [...videoArray, ...data.results]
			hasNextPage = data.hasNextPage
			console.log(data)
		}
	}
}

</script>

<div class={endpoint == "invidious" ? "list_invidious" : "list"}>
	{#each videoArray.slice(0, count) as video}
		<a class="video" href={endpoint == "search" ? `/anime/${video.id}?animeId=${query.animeId}` : endpoint == "trendinganime" ? `/anime/${video.id}` : endpoint == "latestvideos" ? `/watch/anime/${video.id}` : endpoint == "movies" ? `/${video.id}` : endpoint == "invidious" ? `/watch/youtube/${video.id}` : `/anime/${video.id}` } >
			<img src={video.image} alt="">
			<div class="details">
				<div class="padding">
					<h3 class="title">{video.title.slice(0, 40)} {video.title.length > 40 ? " . . . " : ""}</h3>
					{#if endpoint == "animesearch"}
						<p class="mini_details">
							{video.releaseDate} • {video.subOrDub ? video.subOrDub : video.type}
						</p>
					{:else if endpoint == "trendinganime"}
						<ul class="genre">
							{#each video.genres as genre}
								<li>{genre}</li>
							{/each}
						</ul>
					{:else if endpoint == "latestvideos"}
						<p class="ep_no">
							Eps: {video.episodeNumber}
						</p>
					{:else if endpoint == "movies"} 
						<p>
							{video.type}
						</p>
					{:else if endpoint == "invidious"}
						<p class="mini_details">
							{video.channel.name} • {video.views} • {video.length}
						</p>
					{/if}
				</div>
			</div>
		</a>
	{/each}
</div>
{#if hasNextPage || count < videoArray.length}
	<button on:click={loadMore}>Load more</button>
{/if}

<style>
	.mini_details {
		font-size: 0.75rem;
		color: var(--text);
	}
	.genre {
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.genre > li, .ep_no {
		background-color: var(--buttons);
		color: var(--text);
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.75rem;
	}

	.list {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
		padding: 0.5rem;
	}

	.list_invidious {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(1, 1fr);
		padding: 0.5rem;
	}

	.video {
		grid-column: span 1;
		display: grid;
		grid-template-columns: 1fr;
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.video img {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	.details {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.padding {
		padding: 0.5rem;
		background-color: rgba(var(--primary-rgb), 0.5);
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

	@media (min-width: 640px) {
		.list_invidious {
			grid-template-columns: repeat(2, 1fr);
			padding: 1rem;
		}
	}

	@media (min-width: 768px) {
		.list {
			grid-template-columns: repeat(4, 1fr);
			padding: 1rem;
		}
	}

	@media (min-width: 1024px) {
		.list_invidious {
			grid-template-columns: repeat(4, 1fr);
			padding: 1rem;
		}
	}
</style>
