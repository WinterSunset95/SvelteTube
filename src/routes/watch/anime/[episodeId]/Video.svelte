<script>
export let data
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import { onMount } from 'svelte';
import { afterNavigate } from '$app/navigation'

let player;
let watchSeconds = 0
let url = data.sources[0].url
$:  url = data.sources[0].url

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

afterNavigate(() => {
	setupVideoJs()
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
		<li>
			<a target="_blank" href={data.download}>download</a>
		</li>
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
	gap: 0.5rem;
}

ul > li {
	display: flex;
}

ul > li > button, ul > li > a {
	margin: 0;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	background-color: var(--secondary);
	color: var(--text);
	border: none;
	cursor: pointer;
}
</style>
