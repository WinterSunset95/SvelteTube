<script>
export let data

import { onMount } from 'svelte';

import Video from './Video.svelte';

let sources = []
let downloadLink = ''

async function loadSources(serverName) {
	const res = await fetch(`/api/anistream?episodeId=${data.episodeId}&serverName=${serverName}`)
	const json = await res.json()
	sources = json.sources
	downloadLink = json.download
}

onMount(() => {
	loadSources('')
})

</script>

<svelte:head>
	<title>Watching: {data.episodeId}</title>
</svelte:head>

{#if sources.length > 0}
	<Video url={sources[1].url} />
{:else}
	<p>Loading</p>
{/if}
