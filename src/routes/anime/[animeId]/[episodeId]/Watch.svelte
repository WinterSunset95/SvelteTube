<script lang="ts">
import type { AnimeDetails, AnimeEpisode, AnimeEpisodev2, RoomData } from "$lib/types";
import type { IAnimeInfo, ISource } from "@consumet/extensions";
import type Player from "video.js/dist/types/player";


export let animeDetails: IAnimeInfo | undefined;
export let dramaDetails: ISource;
export let animeEpisode: ISource;

let data: ISource | AnimeEpisode | AnimeEpisodev2;

if (dramaDetails) {
	data = dramaDetails
} else if (animeEpisode) {
	data = animeEpisode
} else {
	data = animeEpisode
}

console.log(data);

import videojs from "video.js";
import "video.js/dist/video-js.css";
import { onMount } from "svelte";

let sourceNumber = 0;
let secondsCount = 0;
let serverUrl = "default";
let player: Player;

let rooms: RoomData[];
let roomData: RoomData;

function deletePlayer() {
	if (player) {
		player.dispose();
		player: undefined;
	}
}

$: player ? console.log(player.src) : console.log('Play Uninitialised')

function setupPlayer() {
	player = videojs("video-js", {
		controls: true,
		autoplay: false,
		preload: "auto",
	});
	player.src({
		src: data.sources[sourceNumber].url,
	});
}

function changeSource() {
	serverUrl = "default"
	if (player) {
		player.src({
			src: data.sources[sourceNumber].url,
		});
		player.currentTime(secondsCount);
		player.play();
	} else {
		setupPlayer();
	}
}

$: sourceNumber && changeSource();
$: if(serverUrl != "default") {
	deletePlayer();
}

onMount(() => {
	setupPlayer();
});

</script>

<div class="video">
	{#if serverUrl == "default"}
		<video class="video-js" id="video-js" bind:currentTime={secondsCount}>
			<track kind="captions">
		</video>
	{:else}
		<iframe src={serverUrl} title={serverUrl} frameborder="0"></iframe>
	{/if}
</div>
<div class="links">
	<select bind:value={sourceNumber} name="quality" id="quality">
		{#if data.sources}
		{#each data.sources as source, i}
			<option value={i}>{source?.quality}</option>
		{/each}
		{/if}
	</select>
	<a target="_blank" class="link" href={data?.download}>Download</a>
	<select name="server" id="server">
		{#if data.length > 0}
		{#each data as item, i}
			<option value={i}>{data[i].name}</option>
		{/each}
		{/if}
	</select>
</div>

<style>
	.video {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		flex-grow: 1;
	}
	video {
		flex-grow: 1;
		width: 100%;
		height: 100%;
	}
	.links {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0.5rem;
		gap: 0.5rem;
	}
	select, .link {
		padding: 0.5rem;
		border-radius: 0.5rem;
		background: var(--secondary);
		border: none;
		color: var(--text);
	}
	option {
		background: var(--secondary);
		color: var(--text);
		cursor: pointer;
	}
</style>
