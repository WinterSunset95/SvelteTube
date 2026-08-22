<script lang="ts">
  import { AlignJustify, CompassIcon, HomeIcon, House, List, MoonIcon, PersonStanding, SearchIcon, SunIcon } from "@lucide/svelte";
  import Logo from "./Logo.svelte";
  import { Button, Root } from "$lib/components/ui/button";
	import { afterNavigate, beforeNavigate } from "$app/navigation";
	import { navigating } from "$app/state";
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { page } from "$app/stores";
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

  const navItems = [
    { name: 'Home', href: '/home', icon: House },
    { name: 'Search', href: '/search', icon: SearchIcon },
    { name: 'Discover', href: '/discover', icon: CompassIcon, disabled: true },
    { name: 'About', href: '/about', icon: PersonStanding },
  ];


</script>

<nav class={`flex lg:flex-row flex-col backdrop-blur-3xl transition-all w-full h-full z-50 bg-sidebar-accent`}>
  <progress value={progress.current} max="10" class="{navigating.to ? "h-0.5" : "h-0"} transition-all w-full lg:hidden"></progress>
  <div class="w-full h-full flex flex-row lg:flex-col items-center justify-center gap-4">
    {#each navItems as item}
      {@const Icon = item.icon }
      <a href={item.href} class="{ $page.url.pathname === item.href ? 'underline text-sidebar-primary' : ''} w-full h-full flex items-center justify-center flex-col" aria-disabled={item.disabled}>
        <Icon size=30/>
        <span class="text-xs">{item.name}</span>
      </a>
    {/each}
  </div>
</nav>

