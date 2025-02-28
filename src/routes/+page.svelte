<script>
    import { Button } from "@/components/ui/button";
	import { AlertCircle, CheckSquare, CircleArrowRight, CircleCheckIcon, Contact, DotSquareIcon, Github, GithubIcon, InstagramIcon, KeyboardIcon, MailIcon, Repeat1, Repeat2, SearchIcon, SquareXIcon } from "lucide-svelte";

    import Logo from "@/Logo.svelte";
	let query;

</script>

<svelte:head>
	<title>SvelteTube, stream and download</title>
	<meta name="description" content="Download anime, stream and chat live as you watch">
</svelte:head>

<main class="flex flex-col justify-center items-center w-full p-6 pt-40 md:p-10 gap-4">
	<a href="/home">
		<div class="w-24">
			<Logo />
		</div>
	</a>

	<form
		action="/search"
		class={`flex gap-2 bg-secondary rounded-lg w-full max-w-[60rem] overflow-hidden p-2 lg:h-auto lg:p-2 transition-all`}
	>
		<input class="bg-transparent w-full" bind:value={query} type="text" name="query" placeholder="Start searching . . ." />
		<SearchIcon />
	</form>

	<Button href="/home" class="flex justify-center items-center" >
		<span>
			View Full Site
		</span>
		<CircleArrowRight />
	</Button>

	<div class="pt-40"></div>

	<h2>📩 Contact and Support</h2>
	<p>
	Since SvelteTube is a free and open-source project, direct support is limited. <br>
	However you can contact me on one of the following platforms:
	</p>
	<ul class="flex gap-1">
		<li>
			<Button href="https://github.com/WinterSunset95" target="_blank">
				<GithubIcon />
				<span class="hidden md:flex">WinterSunset95</span>
			</Button>
		</li>
		<li>
			<Button href="https://instagram.com/wallace.thiago">
				<InstagramIcon />
				<span class="hidden md:flex">@wallace.thiago</span>
			</Button>
		</li>
		<li>
			<Button href="https://wa.me/+916009341754">
				<Contact />
				<span class="hidden md:flex">WhatsApp</span>
			</Button>
		</li>
		<li>
			<Button href="mailto:wintersunset95@gmail.com">
				<MailIcon />
				<span class="hidden md:flex">wintersunset95@gmail.com</span>
			</Button>
		</li>
	</ul>

	<hr>
	<h2>📢 Disclaimer!! Use an Adblocker for a Better Experience!!</h2>
	<p>
	SvelteTube serves as a video aggregation platform by embedding video players from multiple third-party sources. These sources may contain advertisements that are beyond our control. We strongly recommend using an ad blocker while browsing to ensure a smoother, uninterrupted viewing experience.
	</p>

	<hr>
	<h2>🌟 What is SvelteTube?</h2>
	<p>
	SvelteTube is a free, open-source streaming platform designed for seamless access to Movies, TV Shows, Anime, and Dramas. Launched in 2024, SvelteTube provides high-quality content without requiring any registration or subscription fees. With an easy-to-navigate interface, multiple streaming servers, and a robust search feature, SvelteTube offers an unparalleled entertainment experience.
	</p>
	<h3>Key features:</h3>
	<ul>
		<li>
			<CircleCheckIcon class="inline-block mx-2" />Completely Free - No hidden fees, no paywalls.
		</li>
		<li>
			<CircleCheckIcon class="inline-block mx-2" />No Ads on Our End - We'll never serve ads directly.
		</li>
		<li>
			<CircleCheckIcon class="inline-block mx-2" />Multiple Streaming Servers - Choose from 10+ servers for the best performance.
		</li>
		<li>
			<CircleCheckIcon class="inline-block mx-2" />HD Quality Streaming - Enjoy high-definition content for free.
		</li>
		<li>
			<CircleCheckIcon class="inline-block mx-2" />Fast and Lightweight - Powered by Svelte, ensuring a smooth experience.
		</li>
	</ul>

	<hr>
	<h2>🛠 How Does SvelteTube Work?</h2>
	<p>
	SvelteTube functions as a frontend for various media providers, sourcing content through open APIs from platforms like:
	</p>
	<ul>
		<li>
			<a href="https://github.com/WinterSunset95/peek-a-boo.ts" target="_blank">peek-a-boo.ts</a> - A powerful aggregation tool for collecting media data.
		</li>
		<li>
			<a href="https://github.com/consumet/consumet.ts" target="_blank">consumet.ts</a> - A backend library for retrieving media data.
		</li>
		<li>
			<a href="https://themoviedb.org" target="_blank">The Movie Database (TMDB)</a> - For movie metadata, posters, and more.
		</li>
	</ul>

	<hr>
	<h2>🚫 What SvelteTube is NOT</h2>
	<p>
	While SvelteTube aims to provide an open and accessible entertainment hub, it is important to clarify what it does not represent:
	</p>
	<ul>
		<li>
			<b><SquareXIcon class="inline-block mx-2" />Not a company</b> - SvelteTube is an independent, community-driven project with no corporate backing.
		</li>
		<li>
			<b><SquareXIcon class="inline-block mx-2" />Not an official source</b> - It does not host, store, or distribute any movies, TV shows, or anime. It simply provides a convenient way to access publicly available media from third-party providers.
		</li>
		<li>
			<b><SquareXIcon class="inline-block mx-2" />Not a NSFW platform</b> - No adult content is supported, and it never will be.
		</li>
		<li>
			<b><SquareXIcon class="inline-block mx-2" />Not created for profit</b> - This is a passion project, not a business venture.
		</li>
	</ul>

	<hr>
	<h2>🎯 Goals and Roadmap</h2>
	<p>
	We are committed to improving SvelteTube with exciting new features. Here's what we have planned:
	</p>
	<h3>✅ Already implemented</h3>
	<ul>
		<li>
			<CheckSquare class="inline-block mx-2" /> <span>Search and stream Anime</span>
		</li>
		<li>
			<CheckSquare class="inline-block mx-2" /> <span>Search and stream Movies</span>
		</li>
		<li>
			<CheckSquare class="inline-block mx-2" /> <span>Search and stream TV Shows</span>
		</li>
	</ul>
	<h3>🚧 In Progress</h3>
	<ul>
		<li>
			<Repeat2 class="inline-block mx-1" /> <span>Download Anime</span>
		</li>
		<li>
			<Repeat2 class="inline-block mx-1" /> <span>Download Movies</span>
		</li>
		<li>
			<Repeat2 class="inline-block mx-1" /> <span>Download TV Shows</span>
		</li>
		<li>
			<Repeat2 class="inline-block mx-1" /> <span>"Rooms" for realtime streaming and chat with friends</span>
		</li>
	</ul>
	<p>
	Our roadmap is continuously evolving, and community contributions are always welcome!
	</p>

	<hr>
	<h2>❌ What SvelteTube will NEVER do!</h2>
	<p>
	Certain things go against our principles. Here’s what you’ll never find on SvelteTube:
	</p>
	<ul>
		<li>
			<b><AlertCircle class="inline-block mx-1" />Advertisements</b> - We hate ads as much as you do. SvelteTube will remain ad-free on our end. <strong>ANY AD YOU FIND IS FROM THE EMBED SERVER!!</strong>
		</li>
		<li>
			<b><AlertCircle class="inline-block mx-1" />NSFW Content</b> - We strictly prohibit adult content of any kind.
		</li>
		<li>
			<b><AlertCircle class="inline-block mx-1" />Tracking & Data Collection</b> - We value your privacy. No tracking, no accounts, no personalized recommendations. This means:
			<ul>
				<li><DotSquareIcon class="inline-block mx-1 ml-8" /> No "Continue Watching"</li>
				<li><DotSquareIcon class="inline-block mx-1 ml-8" /> No "Recently Watched"</li>
				<li><DotSquareIcon class="inline-block mx-1 ml-8" /> No Data collection of any sort</li>
			</ul>
		</li>
	</ul>

	<hr>
	<h2>🤝 Contribute to SvelteTube</h2>
	<p>
	SvelteTube is a community-driven, open-source project, and we welcome contributions!
	</p>
	<h3>Ways to contribute:</h3>
	<ul>
		<li>
			<b><KeyboardIcon class="inline-block mx-1" />Developers</b> - Help us improve the codebase on <a href="https://github.com/WinterSunset95/SvelteTube">GitHub</a>.
		</li>
		<li>
			<b><KeyboardIcon class="inline-block mx-1" />Bug reports & Feature Requests </b> - Report issues or suggest features to make SvelteTube better.
		</li>
		<li>
			<b><KeyboardIcon class="inline-block mx-1" />Spread the word</b> - Share SvelteTube with your friends and help build a strong user community!
		</li>
	</ul>

</main>

<style>
h2, h3, p, hr {
	width: 100%;
	padding: 0;
	margin: 0;
}

ul {
	width: 100%;
	margin-left: 0.5rem;
}

h2 {
	font-size: 1.2rem;
	font-weight: bold;
}

h3 {
	font-size: 1rem;
	font-weight: bold;
}

</style>
