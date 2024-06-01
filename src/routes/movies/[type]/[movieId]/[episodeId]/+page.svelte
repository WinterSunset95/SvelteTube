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

<h1>The movies provider is not working</h1>
<h1>Apologies for the inconvenience</h1>

<style>
h1 {
	text-align: center;
	padding: 1rem;
}
</style>
