<script lang="ts">
    import type { ConsumetAnimeInfo, MediaInfo, PeekABoo, TvSeason, TmdbTvInfo } from "peek-a-boo.ts";

let { data }: { data: PeekABoo<string | MediaInfo> } = $props();
const media = data.boo

let tmdbTvInfo: TmdbTvInfo | undefined
let animeInfo: ConsumetAnimeInfo | undefined

if (typeof media != "string") {
	tmdbTvInfo = media.TmdbTvInfo
}

</script>

<svelte:head>
	{#if typeof media == "string"}
		<title>Failed to get</title>
	{:else}
		<title>Watch: {media.Title}</title>
	{/if}
</svelte:head>

{#if typeof media == "string"}
	<h1>Failed to get data: {data.boo}</h1>
{:else}
	<h1>{media.Title}</h1>
{/if}
