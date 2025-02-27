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
	let tvSeason = $state<TvSeason | undefined>(undefined)
	let tvSeasons = $state<TvSeason[]>([]);
	let tvEpisode = $state<number | string>("Episode");
	let tvEpisodes = $derived.by<number[]>(() => {
		if (!tvSeason) return [];
		return Array.from({ length: tvSeason.EpisodeCount }, (_, i) => i+1)
	})

	// Shared by Movie, Anime and TV type
	let server = $state<IEpisodeServer | string>("Server");
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
		const url = `/api/${media.Type}/${media.Type == "anime" ? "gogo" : "tmdb"}/embeds?id=${media.Id}&season=${tvSeason?.SeasonNumber}&episode=${tvEpisode}`
		console.log(url)
		const res = await fetch(url)
		const data = await res.json() as PeekABoo<IEpisodeServer[]>;
		servers = data.boo;
	}

	$effect(() => {
		console.log(tvSeason, tvEpisode)
		if (!tvSeason || typeof tvEpisode == "string") return
		getEmbedLinks()
	})

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
	<section class="flex flex-col lg:flex-row justify-center items-center gap-2">
		<div class="w-full relative flex flex-col items-center justify-center">
			<div class="aspect-video overflow-hidden rounded-lg w-full">
				{#if typeof server != "string"}
					<iframe src={server.url} frameborder="0" title="{server.name}" class="w-full h-full"></iframe>
				{:else}
					<img class="object-cover w-full" src={media.Poster} alt="">
				{/if}
			</div>
			{#if servers.length == 0}
				<button class="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 p-2 bg-background text-foreground" onclick={playMode}>Play</button>
			{/if}
			<div class="flex gap-2">
				{#if tmdbTvInfo && tvSeasons.length > 0}
					<select
						name="Server"
						id=""
						bind:value={server}
						placeholder="Server"
						class="bg-secondary text-secondary-foreground p-2 text-lg rounded-lg"
					>
						{#each servers as server}
							<option value={server}>{server.name}</option>
						{/each}
					</select>
					<select
						class="bg-secondary text-secondary-foreground p-2 text-lg rounded-lg"
						name="Season"
						id=""
						bind:value={tvSeason} disabled={tvSeasons.length > 0 ? false : true}
						placeholder="Season"
					>
						{#each tvSeasons as season}
							<option value={season}>{season.Name ?? season.SeasonNumber}</option>
						{/each}
					</select>
					<select
						name="Episode"
						id=""
						bind:value={tvEpisode}
						placeholder="Episode"
						class="bg-secondary text-secondary-foreground p-2 text-lg rounded-lg"
					>
						{#each tvEpisodes as episode}
							<option value={episode}>{episode}</option>
						{/each}
					</select>
				{:else if tmdbMovieInfo && servers.length > 0}
					<select
						name="Server"
						id=""
						bind:value={server}
						placeholder="Server"
						class="bg-secondary text-secondary-foreground p-2 text-lg rounded-lg"
					>
						{#each servers as server}
							<option value={server}>{server.name}</option>
						{/each}
					</select>
				{/if}
			</div>
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
