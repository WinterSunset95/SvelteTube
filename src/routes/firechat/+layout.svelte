<script>
import Navigation from "$lib/Navigation.svelte";
</script>

<div class="container">
	<div class="nav">
		<Navigation />
	</div>
	<div class="messages">
		<slot></slot>
	</div>
</div>

<style>
.container {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, 1fr);
	width: 100dvw;
	height: 100dvh;
}

.nav {
	grid-column: 1 / 13;
	grid-row: 1 / 2;
}

.messages {
	grid-column: 1 / 13;
	grid-row: 2 / 13;
}
</style>

