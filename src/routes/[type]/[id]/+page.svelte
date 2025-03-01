<script lang="ts">
	import * as Select from "$lib/components/ui/select"
    import Footer from "@/Footer.svelte";
	import List from "@/List.svelte";
    import Navigation from "@/Navigation.svelte";
	import { type IEpisodeServer, type IAnimeEpisode } from "@consumet/extensions"
    import { PlayIcon } from "lucide-svelte";
	import { type ConsumetAnimeInfo, type MediaInfo, type PeekABoo, type TmdbTvInfo, type TmdbMovieInfo, type MovieSearchResult, type TvSeason } from "peek-a-boo.ts";

	let { data }: { data: {
		peekaboo: PeekABoo<string | MediaInfo>,
		similar: MovieSearchResult[],
	} } = $props();


	$effect(() => {
		console.log("Data updated")
		console.log(data);
	})

	let tmdbTvInfo = $state<TmdbTvInfo | undefined>( typeof data.peekaboo.boo != "string" ? data.peekaboo.boo.TmdbTvInfo : undefined )
	let tmdbMovieInfo = $state<TmdbMovieInfo | undefined>( typeof data.peekaboo.boo != "string" ? data.peekaboo.boo.TmdbMovieInfo : undefined )
	let animeInfo = $state<ConsumetAnimeInfo | undefined>( typeof data.peekaboo.boo != "string" ? data.peekaboo.boo.ConsumetAnimeInfo : undefined )

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

	const playMode = () => {
		if (typeof data.peekaboo.boo == "string") return;
		if (animeInfo && data.peekaboo.boo.AnimeEpisodes) {
			animeEpisodes = data.peekaboo.boo.AnimeEpisodes
		}
		if (tmdbMovieInfo) {
			getEmbedLinks()
		}
		if (tmdbTvInfo && data.peekaboo.boo.TvShowSeason) {
			tvSeasons = data.peekaboo.boo.TvShowSeason
		}
	}

	const getEmbedLinks = async () => {
		if (typeof data.peekaboo.boo == "string") return
		const url = `/api/${data.peekaboo.boo.Type}/${data.peekaboo.boo.Type == "anime" ? "gogo" : "tmdb"}/embeds?id=${data.peekaboo.boo.Id}&season=${tvSeason?.SeasonNumber}&episode=${tvEpisode}`
		console.log(url)
		const res = await fetch(url)
		const mediaData = await res.json() as PeekABoo<IEpisodeServer[]>;
		servers = mediaData.boo;
	}

	$effect(() => {
		console.log(tvSeason, tvEpisode)
		if (!tvSeason || !tvEpisode) return
		getEmbedLinks()
	})

</script>

<svelte:head>
	{#if typeof data.peekaboo.boo == "string"}
		<title>Failed to get</title>
	{:else}
		<title>Watch: {data.peekaboo.boo.Title}</title>
	{/if}
</svelte:head>

{#if typeof data.peekaboo.boo == "string"}
	<h1>Failed to get data: {data.peekaboo.boo}</h1>
{:else}

<Navigation />
<div class="flex flex-col gap-2 p-2 md:p-4 h-dvh">
	<section class="flex flex-col lg:flex-row justify-center items-center gap-2">
		<div class="w-full relative flex flex-col items-center justify-center gap-2">
			<div class="aspect-video overflow-hidden rounded-lg w-full">
				{#if server}
					<iframe src={server.url} frameborder="0" title="{server.name}" class="w-full h-full"></iframe>
				{:else}
					<img class="object-cover w-full" src={data.peekaboo.boo.Poster} alt="">
				{/if}
			</div>
			{#if servers.length == 0 && tvSeasons.length == 0}
				<button
					class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-2 bg-background text-foreground rounded-2xl w-28 h-28 hover:scale-110 transition-all"
					onclick={playMode}
					aria-label="play"
				>
					<PlayIcon class="w-full h-full" />
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
			<div>
				<h1 class="text-2xl md:text-4xl font-bold inline">{data.peekaboo.boo.Title}</h1> <span>({data.peekaboo.boo.Type})</span>
			</div>
			<div>
				<span class="">{data.peekaboo.boo.TmdbTvInfo?.status}{data.peekaboo.boo.ConsumetAnimeInfo?.status}{data.peekaboo.boo.TmdbMovieInfo?.status}</span> | 
				<span class="">{data.peekaboo.boo.Duration}</span> | 
				<span class="">{data.peekaboo.boo.TmdbTvInfo?.original_language}{data.peekaboo.boo.ConsumetAnimeInfo?.subOrDub}{data.peekaboo.boo.TmdbMovieInfo?.original_language}</span>
			</div>
			<div>
				
			</div>
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
			<p class="text-xl md:text-2xl">{data.peekaboo.boo.Overview}</p>
		</div>
	</section>
	<section class="flex flex-col gap-2 p-2">
		<h1 class="text-2xl font-bold">You might also like</h1>
		<List mediaList={data.similar}/>
	</section>
</div>
<Footer />

{/if}
