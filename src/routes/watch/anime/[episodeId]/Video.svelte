<script>
export let data
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import { onMount } from 'svelte';

let player;
let watchSeconds = 0

const setupVideoJs = () => {
	if (player) {
		player.dispose()
	} else {
		player = videojs('video-js', {
			controls: true,
			autoplay: true,
			preload: 'auto',
			fluid: true,
		})
		console.log(player)
	}
}

function sourceChange(i) {
	console.log(i)
	if (player) {
		player.pause()
		player.src(data.sources[i].url)
		player.currentTime(watchSeconds)
		player.play()
	} else {
		console.log('player not ready')
	}
}

onMount(() => {
	if (player) {
		console.log('player already ready')
	} else {
		setupVideoJs()
	}
})

</script>

<div class="container">
	<video bind:currentTime={watchSeconds} id="video-js" class="video-js vjs-default-skin" width="50%" controls >
		<source type="application/x-mpegURL" src={data.sources[0].url}>
		<track kind="captions">
	</video>
</div>
<ul>
	{#each data.sources as source, i}
		<li>
			<button on:click={() => sourceChange(i)}>{source.quality}</button>
		</li>
	{/each}
</ul>

<style>
.container {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

video {
	width: 100%;
}

ul {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

ul > li > button {
	margin: 0.5rem;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	background-color: var(--secondary);
	color: var(--text);
	border: none;
	cursor: pointer;
}
</style>
