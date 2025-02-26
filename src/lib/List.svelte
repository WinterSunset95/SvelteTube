<script lang="ts">
import type { MovieSearchResult } from "peek-a-boo.ts"
import * as Carousel from "./components/ui/carousel";
import Card from "./Card.svelte";
import Autoplay from "embla-carousel-autoplay"

let { mediaList }: { 
	mediaList: MovieSearchResult[],
} = $props();

</script>

<Carousel.Root
	opts={{
		align: "center",
		loop: true
	}}
	plugins={[
		Autoplay({
			delay: 2000,
			stopOnInteraction: false,
			stopOnMouseEnter: true
		})
	]}
>
	<Carousel.Content
	>
		{#each mediaList as media}
			<Carousel.Item class="basis-1/2 md:basis-1/6">
				<Card media={media} />
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>


