<script lang="ts">
	import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import "../global.css";
	import "$lib/global.css"
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
