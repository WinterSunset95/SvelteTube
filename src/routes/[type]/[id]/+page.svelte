<script lang="ts">
	import * as Select from "$lib/components/ui/select"
	import List from "@/List.svelte";
	import { type IEpisodeServer, type IAnimeEpisode } from "@consumet/extensions"
	import { type ConsumetAnimeInfo, type MediaInfo, type PeekABoo, type TmdbTvInfo, type TmdbMovieInfo, type MovieSearchResult, type TvSeason } from "peek-a-boo.ts";
	let { data }: { data: {
		peekaboo: PeekABoo<string | MediaInfo>,
		similar: MovieSearchResult[],
	} } = $props();
	const media = data.peekaboo.boo
	const similar = data.similar

	let tmdbTvInfo = $state<TmdbTvInfo | undefined>()
	let tmdbMovieInfo = $state<TmdbMovieInfo | undefined>()
	let animeInfo = $state<ConsumetAnimeInfo | undefined>()

	// Exclusive to anime type
	let animeEpisode = $state<IAnimeEpisode | undefined>(undefined);
	let animeEpisodes = $state<IAnimeEpisode[]>([]);

	// Exclusive to tv type
	let tvSeasons = $state<TvSeason[]>([]);
	let tvSeason = $state<TvSeason | undefined>()
	let tvEpisode = $state<number | undefined>();
	let tvEpisodes = $derived.by<number[]>(() => {
		if (!tvSeason) return [];
		return Array.from({ length: tvSeason.EpisodeCount }, (_, i) => i+1)
	})

	// Shared by Movie, Anime and TV type
	let server = $state<IEpisodeServer | undefined>();
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
		if (!tvSeason || !tvEpisode) return
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
		<div class="w-full relative flex flex-col items-center justify-center gap-2">
			<div class="aspect-video overflow-hidden rounded-lg w-full">
				{#if server}
					<iframe src={server.url} frameborder="0" title="{server.name}" class="w-full h-full"></iframe>
				{:else}
					<img class="object-cover w-full" src={media.Poster} alt="">
				{/if}
			</div>
			{#if servers.length == 0 && tvSeasons.length == 0}
				<button
					class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-2 bg-background text-foreground rounded-2xl w-28 h-28 hover:scale-110 transition-all"
					onclick={playMode}
					aria-label="play"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M18.54 9L8.88 3.46a3.42 3.42 0 0 0-5.13 3v11.12A3.42 3.42 0 0 0 7.17 21a3.43 3.43 0 0 0 1.71-.46L18.54 15a3.42 3.42 0 0 0 0-5.92Zm-1 4.19l-9.66 5.62a1.44 1.44 0 0 1-1.42 0a1.42 1.42 0 0 1-.71-1.23V6.42a1.42 1.42 0 0 1 .71-1.23A1.51 1.51 0 0 1 7.17 5a1.54 1.54 0 0 1 .71.19l9.66 5.58a1.42 1.42 0 0 1 0 2.46Z"/></svg>
				</button>
			{/if}
			<div class="flex gap-2 w-full">
				{#if tmdbTvInfo && tvSeasons.length > 0}
					<Select.Root type="single" disabled={servers.length > 0 ? false : true}>
						<Select.Trigger>
							{server ? server.name : "Select Server"}
						</Select.Trigger>
						<Select.Content>
							{#each servers as sv}
								<Select.Item value={sv.name} onclick={() => server = sv}>{sv.name}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
					<Select.Root type="single">
						<Select.Trigger>
							{!tvSeason ? "Select Season" : tvSeason.Name}
						</Select.Trigger>
						<Select.Content>
							{#each tvSeasons as season}
								<Select.Item value={season.SeasonNumber} onclick={() => tvSeason = season}>{season.Name}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
					<Select.Root type="single" disabled={tvEpisodes.length > 0 ? false : true}>
						<Select.Trigger>
							{tvEpisode ? `Episode ${tvEpisode}` : "Select Episode"}
						</Select.Trigger>
						<Select.Content>
							{#each tvEpisodes as episode}
								<Select.Item value={episode.toString()} onclick={() => tvEpisode = episode}>Episode {episode}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				{:else if tmdbMovieInfo && servers.length > 0}
					<Select.Root type="single" disabled={servers.length > 0 ? false : true}>
						<Select.Trigger>
							{server ? server.name : "Select Server"}
						</Select.Trigger>
						<Select.Content>
							{#each servers as sv}
								<Select.Item value={sv.name} onclick={() => server = sv}>{sv.name}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
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
