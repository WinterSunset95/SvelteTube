<script lang="ts">
	import List from "@/List.svelte";
	import { type IEpisodeServer, type IAnimeEpisode } from "@consumet/extensions"
	import { type ConsumetAnimeInfo, type MediaInfo, type PeekABoo, type TmdbTvInfo, type TmdbMovieInfo, type MovieSearchResult, type TvSeason } from "peek-a-boo.ts";
	let { data }: { data: {
		peekaboo: PeekABoo<string | MediaInfo>,
		similar: MovieSearchResult[],
	} } = $props();
	const media = data.peekaboo.boo
	const similar = data.similar

	let tmdbTvInfo: TmdbTvInfo | undefined
	let tmdbMovieInfo: TmdbMovieInfo | undefined
	let animeInfo: ConsumetAnimeInfo | undefined

	// Exclusive to anime type
	let animeEpisode = $state<IAnimeEpisode | undefined>(undefined);
	let animeEpisodes = $state<IAnimeEpisode[]>([]);

	// Exclusive to tv type
	let season = $state<number | undefined>(undefined);
	let episode = $state<number | undefined>(undefined);
	let tvSeasons = $state<TvSeason[]>([]);
	let tvEpisode = $state<number | undefined>(undefined);

	// Shared by Movie, Anime and TV type
	let server = $state<IEpisodeServer | undefined>(undefined);
	let servers = $state<IEpisodeServer[]>([]);

	if (typeof media != "string") {
		tmdbTvInfo = media.TmdbTvInfo
		animeInfo = media.ConsumetAnimeInfo
		tmdbMovieInfo = media.TmdbMovieInfo
	}

	const playMode = () => {
		if (typeof media == "string") return;
		if (animeInfo && media.AnimeEpisodes) {
			animeEpisodes = media.AnimeEpisodes
		}
		if (tmdbMovieInfo) {
			getEmbedLinks()
		}
		if (tmdbTvInfo && media.TvShowSeason) {
			tvSeasons = media.TvShowSeason
		}
	}

	const getEmbedLinks = async () => {
		if (typeof media == "string") return
		const url = `/api/${media.Type}/${media.Type == "anime" ? "gogo" : "tmdb"}/embeds?id=${media.Id}&season=${season}&episode=${episode}`
		console.log(url)
		const res = await fetch(url)
		const data = await res.json() as PeekABoo<IEpisodeServer[]>;
		servers = data.boo;
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
	<h1>Failed to get data: {data.peekaboo.peek}</h1>
{:else}

<div class="flex flex-col gap-2 p-2">
	<section class="flex flex-col lg:flex-row gap-2 justify-center items-center">
		<div class="w-full relative">
			<div class="aspect-video overflow-hidden rounded-lg w-full">
				{#if server}
					<iframe src="{server.url}" frameborder="0" title="{server.name}" class="w-full h-full"></iframe>
				{:else}
					<img class="object-cover w-full" src={media.Poster} alt="">
				{/if}
			</div>
			{#if servers.length > 0}
				<select name="Server" id="">
					{#each servers as server}
						<option value="{server}">{server.name}</option>
					{/each}
				</select>
				{#if tmdbTvInfo}
				<select name="Season" id="">
				</select>
				{/if}
			{:else}
				<button class="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 p-2 bg-background text-foreground" on:click={playMode}>Play</button>
			{/if}
		</div>
		<div class="w-full lg:w-1/2 flex flex-col gap-2 p-2">
			<h1 class="text-4xl font-bold">{media.Title}</h1>
			<div class="flex gap-2">

				{#if animeInfo && animeInfo.genres}
					{#each animeInfo.genres as genre }
						<span class="p-2 bg-secondary text-secondary-foreground rounded-lg">{genre}</span>
					{/each}
				{/if}

				{#if tmdbTvInfo}
					{#each tmdbTvInfo.genres as genre}
						<span class="p-2 bg-secondary text-secondary-foreground rounded-lg">{genre.name}</span>
					{/each}
				{/if}

				{#if tmdbMovieInfo}
					{#each tmdbMovieInfo.genres as genre}
						<span class="p-2 bg-secondary text-secondary-foreground rounded-lg">{genre.name}</span>
					{/each}
				{/if}

			</div>
			<p class="text-2xl">{media.Overview}</p>
		</div>
	</section>
	<section class="flex flex-col gap-2 p-2">
		<h1 class="text-2xl font-bold">You might also like</h1>
		<List mediaList={similar}/>
	</section>
</div>

{/if}
