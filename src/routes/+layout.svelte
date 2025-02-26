<script>
	import "../global.css";
	import Footer from "$lib/Footer.svelte"
	import Navigation from "$lib/Navigation.svelte"
	import "$lib/global.css"
	import { page } from "$app/stores";
	console.log($page.url.pathname)
</script>

{#if $page.url.pathname == "/globalchat" || $page.url.pathname == "/firechat"}
	<slot />
{:else}
	<div class="p-0 m-0">
		<div class="nav">
			<Navigation />
		</div>
		<div class="main">
			<slot />
		</div>
		<div class="footer">
			<Footer />
		</div>
	</div>
{/if}

<style>
.main {
	min-height: 100dvh;
}
</style>
