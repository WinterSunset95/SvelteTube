<script>
import Footer from "$lib/Footer.svelte"
import Navigation from "$lib/Navigation.svelte"
import "$lib/global.css"
import { page } from "$app/stores";
console.log($page.url.pathname)
</script>

{#if $page.url.pathname == "/globalchat" || $page.url.pathname == "/firechat"}
	<slot />
{:else}
	<Navigation />
	<slot />
	<Footer />
{/if}
