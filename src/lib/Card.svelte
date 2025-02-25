<script lang="ts">
    import type { MovieSearchResult } from "peek-a-boo.ts";
    import * as Card from "./components/ui/card";

let { media }: { media: MovieSearchResult } = $props();
</script>

<a href="/{media.Type}/{media.Id}">
	<Card.Root class="border-0">
		<Card.Content class="aspect-[3/4] ">
			<div class="rounded-lg overflow-hidden flex justify-center items-center">
				<img src={media.Poster} class="object-cover w-full" alt="">
			</div>
		</Card.Content>
		<Card.Footer>
			<Card.Title>{media.Title}</Card.Title>
		</Card.Footer>
	</Card.Root>
</a>
