<script lang="ts">

import type { PeekABoo, TvSeason, TmdbSeasonDetails, TmdbEpisode, TmdbMovieInfo, IEpisodeServer } from "peek-a-boo.ts";
import Button from "$lib/components/ui/button/button.svelte";
import * as Select from "$lib/components/ui/select/index";
import * as Card from "$lib/components/ui/card";
    import { ArrowLeft, ExternalLink, Link, Play } from "@lucide/svelte";

let {
  selectedEmbed,
  tvId,
  season,
  episode,
  movie,
  selectEpisode,
  selectEmbed,
}: {
  selectedEmbed: IEpisodeServer | undefined,
  tvId?: string,
  season: TvSeason | undefined,
  episode: TmdbEpisode | undefined,
  movie: TmdbMovieInfo | undefined,
  selectEpisode: (episode: TmdbEpisode) => void,
  selectEmbed: (embed: IEpisodeServer) => void,
} = $props();

let embeds = $derived.by(async () => {
  if (!episode && !movie) {
    alert("Both movie and episode are undefined");
    return
  };
  const url = `/api/${episode ? "tv" : "movie"}/tmdb/embeds?id=${episode ? tvId : movie.id}&season=${season?.SeasonNumber}&episode=${episode?.episode_number}`
  const res = await fetch(url)
  const mediaData = await res.json() as PeekABoo<IEpisodeServer[]>;
  return mediaData.boo;
})

</script>

<div class="w-full h-full flex flex-col justify-center items-center p-2 backdrop-blur-xl bg-accent/50 rounded-lg">
  {#if episode}
    <div class="w-full p-2 flex fles-row items-center justify-between">
      <Button onclick={() => selectEpisode(undefined)}>
        <ArrowLeft /> {episode.name}
      </Button>
    </div>
  {/if}
  <div class="flex flex-col p-2 gap-2 h-full w-full overflow-auto">
    {#await embeds}
      <p>Loading !!!!</p>
    {:then data} 
      {#each data as server}
        <div class="w-full h-full">
          <Card.Root class={`${selectedEmbed?.url == server.url ? "bg-accent-foreground text-accent" : ""}`}>
            <Card.Header>{server.name} ({server.url})</Card.Header>
            <Card.Content>
              <Button onclick={() => selectEmbed(server)}>Play Here <Play /> </Button>
              <Button target="_blank" href={server.url}>Play in External player <ExternalLink /> </Button>
            </Card.Content>
          </Card.Root>
        </div>
      {/each}
    {/await}
  </div>
</div>
