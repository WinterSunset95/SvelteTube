<script lang="ts">
import type { ISource } from "@consumet/extensions";
import type { AnimeEpisode } from "$lib/types";
import type Player from "video.js/dist/types/player";

import { onMount } from "svelte";
import Watch from "../../../anime/[animeId]/[episodeId]/Watch.svelte";

export let data: { epId: string, name: string };
let source: ISource;

async function initialLoad() {
	const res = await fetch(`/api/dramaepisode?mediaId=${data.name}&episodeId=${data.epId}`);
	const json: ISource = await res.json();
	source = json;
	console.log(source)
}

onMount(() => {
	initialLoad();
});

</script>

{#if source}
	<Watch dramaDetails={source} />
{/if}
