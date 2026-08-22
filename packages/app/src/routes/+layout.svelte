<script lang="ts">
	import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import "../global.css";
	// import "$lib/global.css"
  import { ModeWatcher } from "mode-watcher";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ModeWatcher />
<main class="w-dvw h-dvh grid grid-cols-12 grid-rows-12 relative">
  {@render children?.()}
</main>
