<script lang="ts">
import type { MovieSearchResult } from "peek-a-boo.ts"
import * as Carousel from "./components/ui/carousel";
    import Card from "./Card.svelte";

let { mediaList }: { 
	mediaList: MovieSearchResult[],
} = $props();

</script>

<Carousel.Root
	opts={{
		align: "center"
	}}
	class="w-full"
>
	<Carousel.Content
	>
		{#each mediaList as media}
			<Carousel.Item class="md:basis-1/4 lg:basis-1/6">
				<Card media={media} />
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>


