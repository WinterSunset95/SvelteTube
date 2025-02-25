<script lang="ts">
import type { MovieSearchResult } from "peek-a-boo.ts"
import * as Card from "$lib/components/ui/card"

let { mediaList }: { 
	mediaList: MovieSearchResult[],
} = $props();

</script>

<div class="list">
{#if mediaList.length > 0}
	{#each mediaList as video}
		<a class="video" href="{video.Type}/{video.Id}">
			<div class="thumbnail">
				<img src={video.Poster} />
			</div>
			<div class="details">
				<div class="padding">
					<h4>{video.Title}</h4>
				</div>
			</div>
		</a>
	{/each}
{:else}
	<p>An error occured</p>
{/if}
</div>

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
