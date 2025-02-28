<script lang="ts">
    import { AlignJustify, SearchIcon } from "lucide-svelte";
    import Logo from "./Logo.svelte";
    import { Button } from "./components/ui/button";

let theme = 'light';

let query: String;
let menu = false;

function toggleTheme() {
	theme = theme === 'light' ? 'dark' : 'light';
	document.body.classList.toggle("light");
	document.body.classList.toggle("dark");
}

</script>

<nav class={`flex items-center justify-between p-2 px-6 ${menu ? "gap-2" : ""} lg:gap-2 bg-secondary flex-wrap transition-all`}>
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
		class={`flex gap-2 bg-background rounded-lg w-full lg:w-auto overflow-hidden ${menu ? "p-2 h-auto" : "p-0 h-0"} lg:h-auto lg:p-2 transition-all`}
	>
		<input class="bg-transparent w-full" bind:value={query} type="text" name="query" placeholder="Search" />
		<SearchIcon />
	</form>
</nav>
