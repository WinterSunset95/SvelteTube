<script>
export let url
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import { onMount } from 'svelte';

let player;

onMount(() => {
	player = videojs('video-js', {
		controls: true,
		autoplay: true,
		preload: 'auto',
		fluid: true,
	})
})
</script>

<video id="video-js" class="video-js vjs-default-skin" width="50%" controls >
	<source type="application/x-mpegURL" src={url}>
	<track kind="captions">
</video>
