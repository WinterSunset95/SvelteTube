<script lang="ts">
    import { AlignJustify, SearchIcon } from "lucide-svelte";
    import Logo from "./Logo.svelte";
    import { Button } from "./components/ui/button";
	import { afterNavigate, beforeNavigate } from "$app/navigation";
	import { navigating } from "$app/state";
    import { Tween } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { onMount } from "svelte";

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

	let theme = $state('light');

	let query = $state<string | undefined>();
	let menu = $state(false);

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		document.body.classList.toggle("light");
		document.body.classList.toggle("dark");
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

<nav class={`${stickyNav ? "sticky" : ""} top-0 w-full z-10 flex flex-col ${stickyNav ? "backdrop-blur-3xl" : "bg-secondary"} transition-all`}>
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
				<button class="icon" onclick={toggleTheme}>
					{#if theme === 'light'}
						<svg viewBox="0 0 1472 1536" xmlns="http://www.w3.org/2000/svg">
						<path fill="#000000" d="M1464 1090q-94 203-283 323.5T768 1536q-157-1-299-62t-244.5-163.5T61 1066T0 768q0-205 97.5-378t267-276.5T738 2q43-2 62 38q17 42-16 72q-176 164-176 400q0 111 43 211.5t115 173t172.5 116T1151 1056q119 0 228-51q41-18 72 13t13 72"/>
						</svg>
					{:else}
						<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
						<path fill="#FFAC33" d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2z"/>
						<circle cx="18" cy="18" r="10" fill="#FFAC33"/>
						</svg>
					{/if}
				</button>
			</li>
		</ul>
		<form
			action="/search"
			class={`flex gap-2 bg-background rounded-lg w-full lg:w-auto overflow-hidden ${menu ? "p-2 h-auto" : "p-0 h-0"} lg:h-auto lg:p-2 transition-all border ${stickyNav ? "border-primary" : ""}`}
		>
			<input class="bg-transparent w-full" bind:value={query} type="text" name="query" placeholder="Search" />
			<SearchIcon />
		</form>
	</div>
	<progress value={progress.current} max="10" class={`${navigating.to ? "h-0.5" : "h-0"} transition-all w-full`}></progress>
</nav>
