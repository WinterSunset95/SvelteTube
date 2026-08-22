<script lang="ts">
</script>

<svelte:head>
	<title>About SvelteTube</title>
	<meta name="description" content="Welcome to SvelteTube">
</svelte:head>

<div class="w-full h-full overflow-scroll">
  <div class="flex flex-col gap-4 mb-20 p-4">
    <h1>SvelteTube</h1>
    <hr>
    <h2>What it is</h2>
    <p>
      SvelteTube is a passion project that serves as a frontend to Movie, Anime and TV providers from <a target="_blank" href="https://github.com/consumet">The Consumet API</a>
      and <a target="_blank" href="https://themoviedb.org">The Movie DB</a>.
      It aims to provide easy and uninterrupted access to your entertainment needs.
    </p>
    <h2>What it is not</h2>
    <ul>
      <li>SvelteTube is not a company, nor is it backed by one. It is an opensource project which - hopefully - will have many contributors</li>
      <li>It is not an official source of Movies or Anime</li>
      <li>It is not a NSFW site</li>
      <li>It was not built for profit. Just a "hey lets do something interesting" kind of project</li>
    </ul>
    <h2>Goals</h2>
    <ul>
      <li>✅ Search and Stream Movies</li>
      <li>✅ Search and Stream TV Shows</li>
      <li>❌ Search and Stream Anime</li>
      <li>❌ Watchrooms for streaming and chatting with friends in realtime</li>
    </ul>
    <h2>Will not do -</h2>
    <ul>
      <!-- <li>Ads. To hell with ads. Enjoy your movies in peace. If you find ads, it means the original creator is not in charge anymore.</li> -->
      <li>NSFW content. Don't ask.</li>
      <li>Cross site trackers or collecting information of any sort. But this also means there will be no personalised content, no "recently watched", "continue watching" or anything that requires you to sign up with an account.</li>
    </ul>
    <h2>Disclaimer</h2>
    I do not own streaming rights for any of the movies or shows you find here. This is nothing more than a search platform for media. The actual streaming links are embedded from
    third party websites: Vidsrc, Streamsb and 2embed.
  </div>
</div>

<style>

a {
	text-decoration: underline;
}

a:hover {
	color: var(--highlight);
}

.container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
}
ul {
	list-style-type: disc;
	padding-left: 1rem;
	margin-left: 1rem;
}

li {
	list-style: disc;
	line-height: 1.5rem;
}
</style>
