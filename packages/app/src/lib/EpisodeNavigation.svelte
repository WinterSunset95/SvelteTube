<script lang="ts">
import type { PeekABoo, TvSeason, TmdbSeasonDetails, TmdbEpisode } from "peek-a-boo.ts";
import Button from "$lib/components/ui/button/button.svelte";
import * as Select from "$lib/components/ui/select/index";
import * as Card from "$lib/components/ui/card";

let { 
  selectedSeason,
  seasons,
  id,
  selectEpisode,
  selectSeason,
}: {
  selectedSeason: TvSeason | undefined,
  seasons: TvSeason[],
  id: string,
  selectEpisode: (episode: TmdbEpisode) => void,
  selectSeason: (episode: TvSeason) => void,
} = $props();

let episodes = $derived.by(async () => {
  const seasonDetails = await fetch(`/api/tv/tmdb/seasons?id=${id}&season=${selectedSeason.SeasonNumber}`)
  const data = await seasonDetails.json() as PeekABoo<TmdbSeasonDetails>
  if (!data.peek) {
    return null
  }
  return data.boo
})

$effect(() => {
  selectSeason(seasons[0])
})

</script>

<div class="w-full flex flex-col justify-center items-center p-2 backdrop-blur-xl bg-accent rounded-2xl h-[90dvh]">
  <div class="w-full p-2 flex fles-row items-center justify-between">
    <Button>Prev</Button>
    <Select.Root type="single" name="seasonSelector">
      <Select.Trigger>
        {selectedSeason ? selectedSeason.Name : "Select A Season"}
      </Select.Trigger>
      <Select.Content>
        {#each seasons as season}
          {#if season.EpisodeCount > 0 && season.AirDate != null}
            <Select.Item value={season.Name} onclick={() => selectSeason(season)}>{season.Name}</Select.Item>
          {/if}
        {/each}
      </Select.Content>
    </Select.Root>
    <Button>Next</Button>
  </div>
  <div class="flex flex-col p-2 gap-2 h-full overflow-scroll">
    {#await episodes}
      <p>Loading !!!!</p>
    {:then data} 
      {#each data.episodes as episode}
        <div class="w-full h-full">
          <Card.Root onclick={() => selectEpisode(episode)}>
            <Card.Header>{episode.episode_number}. {episode.name}</Card.Header>
            <Card.Content>{episode.overview}</Card.Content>
          </Card.Root>
        </div>
      {/each}
    {/await}
  </div>
</div>
