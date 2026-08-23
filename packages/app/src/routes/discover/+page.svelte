<script lang="ts">

import type { PageData } from "./$types";
import * as Select from "$lib/components/ui/select/index";
import Card from "@/Card.svelte";
    import { goto } from "$app/navigation";

let { data }: { data: PageData } = $props();

</script>

<div class="w-full h-full flex flex-col p-4 overflow-hidden gap-4">
  <div class="flex items-center justify-start gap-4">
    <Select.Root type="single" onValueChange={(value) => goto(`/discover?type=${value}&mode=${data.mode}`)}>
      <Select.Trigger class="w-1/3 md:w-1/4 lg:w-1/5">{data.type.toUpperCase()}</Select.Trigger>
      <Select.Content>
        <Select.Item value="movie">Movie</Select.Item>
        <Select.Item value="tv">Tv</Select.Item>
      </Select.Content>
    </Select.Root>
    <Select.Root type="single" onValueChange={(value) => goto(`/discover?type=${data.type}&mode=${value}`)}>
      <Select.Trigger class="w-1/3 md:w-1/4 lg:w-1/5">{data.mode.toUpperCase()}</Select.Trigger>
      <Select.Content>
        <Select.Item value="popular">Popular</Select.Item>
        <Select.Item value="new">New</Select.Item>
        <Select.Item value="trending">Trending</Select.Item>
      </Select.Content>
    </Select.Root>
    <Select.Root type="single" onValueChange={(value) => console.log(value)} disabled>
      <Select.Trigger class="w-1/3 md:w-1/4 lg:w-1/5">N/A</Select.Trigger>
      <Select.Content>
        <Select.Item value="movie">Movie</Select.Item>
        <Select.Item value="tv">Tv</Select.Item>
      </Select.Content>
    </Select.Root>
  </div>

  <div class="w-full h-full overflow-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
    {#each data.list as item}
      <Card media={item}/>
    {/each}
  </div>
</div>
