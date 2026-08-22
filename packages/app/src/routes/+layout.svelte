<script lang="ts">
	import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import "../global.css";
	// import "$lib/global.css"
  import { ModeWatcher, toggleMode } from "mode-watcher";
    import Navigation from "@/Navigation.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import { MoonIcon, SunIcon } from "@lucide/svelte";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ModeWatcher />
<main class="w-dvw h-dvh grid grid-cols-12 grid-rows-12 relative">
  <div class="lg:col-start-2 lg:col-span-11 lg:row-start-1 lg:row-span-12 col-start-1 col-span-12 row-start-1 row-span-11">
    {@render children?.()}
  </div>
  <div class="lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-12 col-start-1 col-span-12 row-start-12 row-span-1 overflow-hidden">
    <Navigation />
  </div>

  <Button onclick={toggleMode} class="fixed bottom-24 right-8 w-16 h-16 z-50">
    <SunIcon
      class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
    />
    <MoonIcon
      class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</main>
