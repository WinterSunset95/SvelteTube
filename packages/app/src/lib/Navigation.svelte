<script lang="ts">
  import { AlignJustify, List, MoonIcon, SearchIcon, SunIcon } from "@lucide/svelte";
  import Logo from "./Logo.svelte";
  import { Button, Root } from "$lib/components/ui/button";
	import { afterNavigate, beforeNavigate } from "$app/navigation";
	import { navigating } from "$app/state";
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import { toggleMode } from "mode-watcher";

	let progress = new Tween(1, {
		delay: 1000,
		duration(from, to) {
			return 2000
		},
		easing: cubicOut,
	});

	beforeNavigate((nav) => {
		progress.target = 9;
	})

	afterNavigate((nav) => {
		progress.target = 1;
	})


	let query = $state<string | undefined>();
	let menu = $state(false);

	function toggleTheme() {
    toggleMode()
	}

	let stickyNav = $state(false);

	$effect(() => {
		window.addEventListener('scroll', (e) => {
			const bodyY = document.body.getBoundingClientRect().y
			console.log(bodyY)
			if (bodyY != 0) {
				stickyNav = true
				return
			} else {
				stickyNav = false
				return
			}
		})
	})

	onMount(() => {
		if (document.body.getBoundingClientRect().y != 0) {
			stickyNav = true
		}
	})

</script>

<nav class={`${stickyNav ? "sticky" : ""} top-0 z-10 flex flex-col ${stickyNav ? "backdrop-blur-3xl" : "bg-secondary"} transition-all`}>
	<div class={`flex items-center justify-between p-2 md:p-4 ${stickyNav ? "px-2 md:px-4" : "px-6 md:px-10"} ${menu ? "gap-2" : ""} lg:gap-2 flex-wrap transition-all`}>
		<div class="w-full lg:w-auto flex items-center justify-between">
			<a href="/" class="flex items-center gap-2">
				<div class="w-12">
					<Logo />
				</div>
				<h1 class="text-xl font-bold">SvelteTube</h1>
			</a>
			<Button class="lg:hidden" onclick={() => menu = !menu} aria-label="menu">
				<AlignJustify />
				<span>Menu</span>
			</Button>
		</div>
		<ul class={`flex justify-between w-full text-sm md:text-lg lg:w-auto items-center gap-2 lg:gap-6 overflow-hidden ${menu ? "h-auto" : "h-0"} lg:h-auto transition-all`}>
			<li>
				<a href="/home">Home</a>
			</li>
			<li>
				<a href="/" aria-disabled="true">Movies</a>
			</li>
			<li>
				<a href="/" aria-disabled="true">TV Shows</a>
			</li>
			<li>
				<a href="/" aria-disabled="true">Anime</a>
			</li>
			<li>
				<a href="/" aria-disabled="true">Rooms</a>
			</li>
			<li>
				<Button onclick={toggleMode} variant="outline" size="icon" class={`${menu ? "" : ""} relative`}>
          <SunIcon
            class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
          />
          <MoonIcon
            class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
			</li>
		</ul>
		<form
			action="/search"
			class={`flex gap-2 bg-background border-0 rounded-lg w-full lg:w-auto overflow-hidden ${menu ? "p-2 h-auto" : "p-0 h-0"} lg:h-auto lg:p-2 transition-all border ${stickyNav ? "border-primary" : ""}`}
		>
			<input class="bg-transparent w-full" bind:value={query} type="text" name="query" placeholder="Search" />
			<button type="submit">
				<SearchIcon />
			</button>
		</form>
	</div>
	<progress value={progress.current} max="10" class={`${navigating.to ? "h-0.5" : "h-0"} transition-all w-full`}></progress>
</nav>
