<script lang="ts">
  import { ArrowLeft, PlayIcon } from "@lucide/svelte";
	import { type ConsumetAnimeInfo, type MediaInfo, type PeekABoo, type TmdbTvInfo, type TmdbMovieInfo, type MovieSearchResult, type TvSeason, type IEpisodeServer, type IAnimeEpisode, type TmdbEpisode, type TmdbSeasonDetails } from "peek-a-boo.ts";
  import type { PageData } from "./$types";
  import EpisodeNavigation from "@/EpisodeNavigation.svelte";
  import SourceSelector from "@/SourceSelector.svelte";
  import Button from "@/components/ui/button/button.svelte";

	let { data }: { data: PageData } = $props();

	let tmdbTvInfo = $state<TmdbTvInfo | undefined>( typeof data.peekaboo.boo != "string" ? data.peekaboo.boo.TmdbTvInfo : undefined )
	let tmdbMovieInfo = $state<TmdbMovieInfo | undefined>( typeof data.peekaboo.boo != "string" ? data.peekaboo.boo.TmdbMovieInfo : undefined )

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

<div class="grid grid-cols-12 grid-rows-12 w-full h-full">
  <div class="col-start-1 col-span-12 row-start-1 row-span-12 z-0">
    <img class="w-full h-full object-cover" src={
      data.peekaboo.boo.TmdbMovieInfo ?
        `https://image.tmdb.org/t/p/w500${data.peekaboo.boo.TmdbMovieInfo.backdrop_path}` :
        `https://image.tmdb.org/t/p/w500${data.peekaboo.boo.TmdbTvInfo.backdrop_path}`} 
      alt="Backdrop"
    />
  </div>

  <div class="col-start-1 col-span-12 row-start-1 row-span-12 z-10 backdrop-blur-xs">
  </div>

  <div class="col-start-1 col-span-12 row-start-1 row-span-1 z-20 flex items-center p-4 pb-0">
    <Button onclick={() => history.back()}>
      <ArrowLeft />
      Back
    </Button>
  </div>

  <div class="col-start-1 col-span-12 lg:col-start-1 lg:col-span-6 row-start-2 row-span-6 lg:row-start-2 lg:row-span-11 z-20 overflow-hidden">
    <div class="w-full h-full flex flex-col lg:flex-row overflow-auto">
      {#if selectedEmbed}
        <div class="h-full w-full p-4">
          <div class="aspect-video w-full h-full bg-accent overflow-hidden rounded-lg">
            <iframe src={selectedEmbed.url} frameborder="0" title="{selectedEmbed.name}" class="w-full h-full" allowfullscreen></iframe>
          </div>
        </div>
      {:else}
        <section class="flex flex-col items-center gap-2 z-10 w-full p-4 pt-0">
          <div class="w-full flex items-center justify-center lg:justify-start">
            <h1 class="text-5xl font-bold">{data.peekaboo.boo.Title}</h1>
          </div>
          <div class="flex flex-row items-center justify-between w-full mt-6 lg:gap-10 lg:justify-start">
            <span class="font-bold text-lg">{data.peekaboo.boo.Duration}</span>
            <span class="font-bold text-lg">{data.peekaboo.boo.Year}</span>
            <span class="font-bold text-lg">{data.peekaboo.boo.Type}</span>
          </div>
          <h1 class="font-bold text-lg text-gray-400 w-full mt-4">Genres</h1>
          <div class="w-full flex flex-row gap-4 items-center">
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
    </div>
  </div>

  <div class="col-start-1 col-span-12 lg:col-start-7 lg:col-span-6 row-start-8 row-span-5 lg:row-start-2 lg:row-span-11 z-20 overflow-hidden">
    <div class="w-full h-full p-4">
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

{/if}
