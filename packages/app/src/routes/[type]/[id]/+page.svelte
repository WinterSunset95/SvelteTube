<script lang="ts">
	import * as Select from "$lib/components/ui/select"
  import Footer from "@/Footer.svelte";
	import List from "@/List.svelte";
  import Navigation from "@/Navigation.svelte";
  import { PlayIcon } from "@lucide/svelte";
	import { type ConsumetAnimeInfo, type MediaInfo, type PeekABoo, type TmdbTvInfo, type TmdbMovieInfo, type MovieSearchResult, type TvSeason, type IEpisodeServer, type IAnimeEpisode, type TmdbEpisode, type TmdbSeasonDetails } from "peek-a-boo.ts";
  import type { PageData } from "./$types";
  import EpisodeNavigation from "@/EpisodeNavigation.svelte";
  import SourceSelector from "@/SourceSelector.svelte";

	let { data }: { data: PageData } = $props();


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

  let selectedSeason = $state<TvSeason | undefined>(undefined);
  let selectedEpisode = $state<TmdbEpisode | undefined>(undefined);
  let selectedEmbed = $state<IEpisodeServer | undefined>(undefined);

  const seasonSelectionHandler = (season: TvSeason) => {
    selectedSeason = season
  }

  const episodeSelectionHandler = (episode: TmdbEpisode) => {
    selectedEpisode = episode
  }

  const embedSelectionHandler = (embed: IEpisodeServer) => {
    selectedEmbed = embed
  }

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
<main class="relative w-dvw h-dvh">

  <div class="absolute top-0 left-0 w-full h-full">
    <img class="w-full h-full object-cover" src={
      data.peekaboo.boo.TmdbMovieInfo ?
        `https://image.tmdb.org/t/p/w500${data.peekaboo.boo.TmdbMovieInfo.backdrop_path}` :
        `https://image.tmdb.org/t/p/w500${data.peekaboo.boo.TmdbTvInfo.backdrop_path}`} 
      alt="Backdrop"
    />
  </div>

  <div class="flex flex-col gap-2 p-2 md:p-4 w-full h-full backdrop-blur-xs overflow-scroll">

    <div class="w-full h-full flex flex-col lg:flex-row">
      {#if selectedEmbed}
        <div class="h-full w-full">
          <div class="aspect-video overflow-hidden rounded-lg w-full h-full">
            <iframe src={selectedEmbed.url} frameborder="0" title="{selectedEmbed.name}" class="w-full h-full" allowfullscreen></iframe>
          </div>
        </div>
      {:else}
        <section class="flex flex-col items-center gap-2 z-10 w-full h-full p-4">
          <div class="mt-6 w-full flex items-center justify-center lg:justify-start">
            <h1 class="text-9xl font-bold">{data.peekaboo.boo.Title}</h1>
          </div>
          <div class="flex flex-row items-center justify-between w-full mt-6 lg:gap-10 lg:justify-start">
            <span class="font-bold text-lg">{data.peekaboo.boo.Duration}</span>
            <span class="font-bold text-lg">{data.peekaboo.boo.Year}</span>
            <span class="font-bold text-lg">{data.peekaboo.boo.Type}</span>
          </div>
          <h1 class="font-bold text-lg text-gray-400 w-full mt-4">Genres</h1>
          <div class="w-full flex flex-row gap-4 items-center">
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
          <h1 class="font-bold text-lg text-gray-400 w-full mt-4">Overview</h1>
          <p class="text-xl md:text-2xl">{data.peekaboo.boo.Overview}</p>
        </section>
      {/if}

      <div class="w-full h-full lg:w-[45%]">
        {#if selectedEpisode || tmdbMovieInfo}
          <SourceSelector 
            selectedEmbed={selectedEmbed}
            tvId={data.peekaboo.boo.Id}
            season={selectedSeason}
            movie={tmdbMovieInfo}
            episode={selectedEpisode}
            selectEpisode={episodeSelectionHandler}
            selectEmbed={embedSelectionHandler}
          />
        {:else}
          <EpisodeNavigation
            selectedSeason={selectedSeason}
            selectSeason={seasonSelectionHandler}
            seasons={data.peekaboo.boo.TvShowSeason}
            id={data.peekaboo.boo.Id}
            selectEpisode={episodeSelectionHandler}
          />
        {/if}
      </div>
    </div>

  </div>

</main>

{/if}
