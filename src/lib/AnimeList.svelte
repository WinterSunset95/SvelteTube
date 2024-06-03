<script lang="ts">
import type { IAnimeResult, IMovieResult, ISearch } from "@consumet/extensions";

export let animes: ISearch<IAnimeResult> | undefined;
export let movies: ISearch<IMovieResult> | undefined;
export let tv: ISearch<IMovieResult> | undefined;
export let drama: ISearch<IMovieResult> | undefined;

export let loadMoreFunction: () => Promise<void> | undefined;

let data: ISearch<IAnimeResult> | ISearch<IMovieResult>;
let route: string;

if (animes) {
	data = animes;
	route = "/anime/";
} else if (movies) {
	data = movies;
	route = "/movies/";
} else if (tv) {
	data = tv;
	route = "/tv/";
} else if (drama) {
	data = drama;
	route = "";
}

</script>

<div class="list">
{#if data.results}
	{#each data.results as video}
		<a class="video" href="{route}{video.id}">
			<div class="thumbnail">
				<img src={video.image} />
			</div>
			<div class="details">
				<div class="padding">
					<h4>{video.title}</h4>
					{#if !drama}
						<p>{video.releaseDate} | {video.subOrDub ? video.subOrDub : video.type}</p>
					{/if}
				</div>
			</div>
		</a>
	{/each}
{:else}
	<p>An error occured</p>
{/if}
</div>
{#if data.hasNextPage && loadMoreFunction}
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
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
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
	aspect-ratio: 9 / 16;
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

@media only screen and (min-width: 768px) {
	.list {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
}
</style>
