<script>
let theme = 'light';

function toggleTheme() {
	theme = theme === 'light' ? 'dark' : 'light';
	document.body.classList.toggle("light");
	document.body.classList.toggle("dark");
}
</script>

<nav>
	<h1>
		<a href="/">SvelteTube</a>
	</h1>
	<ul>
		<li>
			<a href="/movies">Movies</a>
		</li>
		<li>
			<a href="/series">Series</a>
		</li>
		<li>
			<a href="/anime">Anime</a>
		</li>
		<li>
			<button class="icon" on:click={toggleTheme}>
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
	<div class="search">
		<div class="icon">
			<svg width="100%" height="100%" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
			<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34M208 336c-70.7 0-128-57.2-128-128c0-70.7 57.2-128 128-128c70.7 0 128 57.2 128 128c0 70.7-57.2 128-128 128"/>
			</svg>
		</div>
		<input type="text" placeholder="Search" />
	</div>
</nav>

<style>
nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	background-color: var(--secondary);
	flex-wrap: wrap;
}

nav > h1 {
	flex-grow: 1;
}

ul {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
}

li {
	padding: 1rem;
}

.search {
	display: flex;
	align-items: center;
	background-color: var(--primary);
	border-radius: 0.5rem;
	padding: 0.5rem;
	flex-grow: 1;
}

.search > input {
	background-color: transparent;
	border: none;
	color: var(--text);
	margin-left: 0.5rem;
	flex-grow: 1;
}

.search > input:focus {
	outline: none;
}

</style>
