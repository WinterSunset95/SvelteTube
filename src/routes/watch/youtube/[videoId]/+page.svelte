<script>
export let data

import Comment from './Comment.svelte';

let descriptionToggle = false
function toggleDescription() {
	descriptionToggle = !descriptionToggle
}

let recommendedVideos = data.recommendedVideos.splice(0, 10) || []

function reloadPage() {
	location.reload()
}

function loadMore() {
	recommendedVideos = data.recommendedVideos
}

function parseTime(time) {
	let minutes = Math.floor(time / 60)
	let seconds = time - minutes * 60
	return `${minutes} mins ${seconds} secs`
}

let loadCount = 10
let comments = data.comments.splice(0, loadCount)

</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="container">
	<div class="video">
		<video controls="true" src="https://invidious.lunar.icu/latest_version?id={data.videoId}">
			<track kind="captions" src={data.captions ? data.captions[0] : ""} />
		</video>
		<div class="video_details">
			<h3 class="title">{data.title}</h3>
			<div class="video_details__meta">
				<div class="author">
					<img src={data.authorThumbnails[0].url} alt={data.author} />
					<div class="author_meta">
						<span class="author_name">{data.author}</span>
						<span>{data.subCountText} subscribers</span>
					</div>
				</div>
				<div class="video_stats">
					<div>
						<span>{data.viewCount} views</span> •
						<span>{data.likeCount} likes</span> •
						<span>{data.publishedText}</span>
					</div>
					<div class="buttons">
						<button>
							<div class="icon">
								<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M19 8.5L12 3v11zM12 7v3h-1c-4 0-7 2-7 6v1H1v-1c0-6 5-9 10-9z"/>
								</svg>
							</div>
							Share
						</button>
						<button>
							<div class="icon">
								<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
								<path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24m296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24m-124 88c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20m64 0c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20"/>
								</svg>
							</div>
							Save
						</button>
					</div>
				</div>
			</div>
			{#if descriptionToggle}
				<div class="description">{@html data.descriptionHtml}... <span class="pointer" on:click={toggleDescription}>Read less ...</span></div>
			{:else}
				<div class="description">{@html data.descriptionHtml.slice(0, 200)}... <span class="pointer" on:click={toggleDescription}>Read more</span></div>
			{/if}
		</div>
	</div>

	<div class="recommended">
		{#if recommendedVideos.length > 0}
			{#each recommendedVideos as video, index}
				<a href="/watch/youtube/{video.videoId}" class="rcVideo">
					<img src={video.videoThumbnails[5].url} alt={video.title}>
					<div class="rcDetails">
						<div class="padding">
							<p>{video.title.length > 50 ? video.title.slice(0, 50) + "... " : video.title}</p>
							<div class="rcMeta">
								{video.author} • {video.viewCount} views • {parseTime(video.lengthSeconds)}
							</div>
						</div>
					</div>
				</a>
			{/each}
		{:else}
			<h1>No recommended videos</h1>
			<button on:click={reloadPage}>
				Click to reload
			</button>
		{/if}
		{#if recommendedVideos.length > 0 && recommendedVideos.length < data.recommendedVideos.length}
			<div class="loadMore">
				<button on:click={loadMore}>
					Load more
				</button>
			</div>
		{/if}
	</div>

	<div class="comments">
		<hr>
		{#if comments.length > 0}
			<h3>
				{data.commentCount} Comments
			</h3>
			{#each comments as comment}
				<Comment comment={comment} videoId={data.videoId}/>
			{/each}
		{:else if data.commentCount > 0}
			<button on:click={() => window.reload()}>
				Reload Comments
			</button>
		{:else}
			<h3>
				No comments
			</h3>
		{/if}
	</div>
</div>

<style>
	.pointer {
		cursor: pointer;
		color: var(--highlight);
	}

	.container {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-flow: row dense;
		padding: 0.5rem;
	}

	.video {
		grid-column: span 12;
	}

	video {
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.video_details__meta {
		font-size: 0.8rem;
		display: flex;
		justify-content: space-between;
	}

	.author {
		display: flex;
		align-items: center;
	}

	.author > img {
		width: 2rem;
		height: 2rem;
		border-radius: 10rem;
	}

	.author_meta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 1rem;
	}

	.author_meta > span {
		white-space: nowrap;
		overflow: hidden;
	}

	.description {
		padding: 0.5rem;
		background-color: var(--secondary);
		border-radius: 0.5rem;
	}

	.buttons {
		display: flex;
	}

	button {
		background-color: var(--secondary);
		color: var(--text);
		border: none;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		margin: 0.5rem;
		display: flex;
		align-items: center;
	}

	button > .icon {
		margin-right: 0.5rem;
	}

	.recommended {
		grid-column: span 12;
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
	}

	.rcVideo {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		color: white;
		margin-bottom: 0.5rem;
		border-radius: 0.5rem;
	}

	.rcVideo > img {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		width: 100%;
		border-radius: 0.5rem;
	}

	.rcDetails {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.padding {
		padding: 0.5rem;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.padding > p {
		font-size: 1.2rem;
		font-weight: 500;
	}

	.comments {
		grid-column: span 12;
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
	}

	.comments > h3 {
		margin: 1rem 0;
	}

	video {
		width: 100%;
		height: auto;
	}

	@media (min-width: 768px) {
		.video {
			grid-column: span 6;
		}

		.recommended {
			grid-column: span 6;
		}

		.comments {
			grid-column: span 6;
		}
	}
</style>
