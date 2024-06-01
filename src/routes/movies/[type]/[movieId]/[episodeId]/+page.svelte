<script lang="ts">

import type { ISource } from "@consumet/extensions";
import { onMount } from "svelte";

export let data: {type: string, movieId: string, episodeId: string};
console.log(data);

async function initialLoad() {
	const res = await fetch(`/api/moviesource?type=${data.type}&movieId=${data.movieId}&episodeId=${data.episodeId}`);
	const json: ISource = await res.json();
	console.log(json);
}

onMount(() => {
	initialLoad();
})

</script>
