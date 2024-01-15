<script>
import { onMount } from 'svelte';
import VideoList from '$lib/VideoList.svelte'

let popularMovies = []

onMount(() => {
	fetch(`/api/movies`)
	.then(res => res.json())
	.then(data => {
			popularMovies = data
			console.log(popularMovies)
			})
	.catch(err => console.log(err))
})
</script>

<svelte:head>
	<title>Popular movies</title>
</svelte:head>

<h1>Welcome to the movies page</h1>
<hr>
{#if popularMovies.results}
	<VideoList data={popularMovies} />
{:else}
	<h1>Loading popular movies</h1>
{/if}
