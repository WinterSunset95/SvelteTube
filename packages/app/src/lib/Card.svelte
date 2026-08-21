<script lang="ts">
    import type { MovieSearchResult } from "peek-a-boo.ts";
    import * as Card from "./components/ui/card";

let { media }: { media: MovieSearchResult } = $props();
</script>

<a href="/{media.Type}/{media.Id}">
	<Card.Root class="border-0 relative aspect-[3/4] overflow-hidden rounded-lg group">
		<Card.Content class="p-0 absolute top-0 left-0 w-full h-full">
			<div class="flex justify-center items-center w-full h-full">
				<img src={media.Poster} class="object-cover w-full" alt="">
			</div>
		</Card.Content>
		<Card.Footer class="p-2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-[rgba(0,0,0,0)] h-2/3 flex flex-col justify-end items-start transition-all group-hover:h-full group-hover:justify-center group-hover:items-center">
			<Card.Title class="text-lg md:text-xl p-0">{media.Title.length > 40 ? media.Title.slice(0, 40) + "...": media.Title}</Card.Title>
		</Card.Footer>
	</Card.Root>
</a>
