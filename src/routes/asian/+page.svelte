<script lang="ts">

import type { IMovieResult, IMovieInfo, ISearch } from "@consumet/extensions";
import { onMount } from "svelte";

let movies: ISearch<IMovieResult>;

async function initialLoad() {
	const res = await fetch("/api/asian?search=");
	const data: ISearch<IMovieResult> = await res.json();
	movies = data;
	console.log(data);
}

onMount(() => 
	initialLoad()
);

</script>

<h1>Provider is not working at this moment</h1>
<h1>Apologies for the inconvenience</h1>

<style>
h1 {
	text-align: center;
	padding: 1rem;
}
</style>
