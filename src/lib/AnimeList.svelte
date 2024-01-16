<script lang="ts">
import type { AnimeData } from "$lib/types";

export let data: AnimeData;
export let loadMoreFunction: () => Promise<void>;

</script>

<div class="list">
{#each data.results as video}
	<a class="video" href="/anime/{video.id}">
		<div class="thumbnail">
			<img src={video.image} alt={video.title} />
		</div>
		<div class="details">
			<div class="padding">
				<h4>{video.title}</h4>
				<p>{video.releaseDate} | {video.subOrDub}</p>
			</div>
		</div>
	</a>
{/each}
</div>
{#if data.hasNextPage}
	<button on:click={loadMoreFunction}>Load More</button>
{/if}

<style>

.video, button {
	transition: all 0.2s ease-in-out;
	cursor: pointer;
}

.video:hover, button:hover {
	transform: scale(1.05);
}

.list {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	padding: 0.5rem;
}
.video {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	border-radius: 0.5rem;
	overflow: hidden;
}
.thumbnail{
	grid-column: 1 / 2;
	grid-row: 1 / 2;
}
.details {
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	display: flex;
	align-items: flex-end;
}
.padding {
	flex-grow: 1;
	color: var(--text);
	background-color: rgba(var(--primary-rgb), 0.5);
	padding: 0.5rem;
}
.thumbnail > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
button {
	margin: 1rem;
	padding: 1rem;
	background-color: var(--secondary);
	border: none;
	border-radius: 0.5rem;
	color: var(--text);
}
</style>
