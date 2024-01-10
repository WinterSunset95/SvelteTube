<script>
	import Navigation from "../Components/Navigation.svelte";
	import HomePage from "../Components/HomePage.svelte";
</script>

<svelte:head>
	<title>SvelteTube - Stream and enjoy</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Welcome to SvelteTube - a YouTube inspired streaming platform where you can watch videos and movies with friends in realtime.">
</svelte:head>

<HomePage />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	:global(*) {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
	}

	:global(.light) {
		--primary: #E1EFF4;
		--secondary: #3C91E6;
		--text: #342E37;
		--highlight: #A2D729;
		--buttons: #FA824C;
	}

	:global(.dark) {
		--primary: #071013;
		--secondary: #5448C8;
		--text: #FFFECB;
		--highlight: #FEA82F;
		--buttons: #FF2E00;
	}

	:global(body) {
		background-color: var(--primary);
		color: var(--text);
	}

	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	:global(li) {
		list-style: none;
	}

	:global(.icon) {
		width: 1.5rem;
		height: 1.5rem;
		background: transparent;
		border: none;
	}

	:global(.icon path) {
		fill: var(--text);
	}

	:global(.note) {
		padding: 1rem;
		background-color: var(--secondary);
		color: var(--text);
		border-radius: 0.5rem;
	}

</style>
