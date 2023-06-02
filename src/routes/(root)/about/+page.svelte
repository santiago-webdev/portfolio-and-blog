<script lang="ts">
	import { retrieve_icon } from '$lib/utils/utils';

	import { base } from '$app/paths';

	export let greeting = 'Hello, my name is Santiago.';

	const databases = ['MySQL', 'MariaDB', 'SQLite', 'PostgreSQL'];

	const frameworks = ['React', 'NextJS', 'Svelte', 'SvelteKit', 'Astro'];

	const tools = [
		'HTML5',
		'CSS3',
		'JavaScript',
		'TypeScript',
		'CSS Modules',
		'Git',
		'Figma',
		'Podman',
		'Docker',
		'Java',
		'Python'
	];
</script>

<main>
	<header>
		<hgroup>
			<h1>Get to know me</h1>
			<p style="font-weight: 500">{greeting}</p>
			<p>
				I enjoy crafting simple interfaces, focusing in <em>maintainability</em>,
				<em>accessibility</em> and <em>progressive enhancement</em>. My set of skills is mostly
				dedicated to the web, but I'm also interested in Linux and CS in general.
			</p>
			<p>
				You can follow my journey from <a class="link" href="{base}/blog">the blog</a>, where I'm
				trying to compile all of my knowledge to become an all-rounder web developer.
			</p>
		</hgroup>
		<div class="img-wrapper">
			<img src="/alleged-photo-of-myself.webp" alt="" />
		</div>
	</header>
</main>
<div id="technologies">
	<h2 class="font-50">Technology I use &mdash;</h2>
	<p>These are some of the tools I had used in the past (but am not limited to):</p>
	<div class="wrapper-frameworks">
		<h3 class="font-30">Frameworks and metaframeworks:</h3>
		<ul class="inline-items">
			{#each frameworks as framework}
				<li class="font-20">
					<iconify-icon width="26" height="26" icon={retrieve_icon(framework)} />{framework}
				</li>
			{/each}
		</ul>
	</div>

	<div class="wrapper-databases">
		<h3 class="font-30">Databases:</h3>
		<ul class="inline-items">
			{#each databases as database}
				<li class="font-20">
					<iconify-icon width="26" height="26" icon={retrieve_icon(database)} />{database}
				</li>
			{/each}
		</ul>
	</div>

	<div class="wrapper-others">
		<h3 class="font-30">Other tools:</h3>
		<ul class="inline-items">
			{#each tools as tool}
				<li class="font-20">
					<iconify-icon width="26" height="26" icon={retrieve_icon(tool)} />{tool}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	main {
		background-color: var(--clr-25);
	}

	header {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
		gap: 2rem 0;
		margin-bottom: 2rem;

		width: min(92%, var(--md));
		margin-inline: auto;
		padding: 3rem 0;
	}

	hgroup {
		display: grid;
		/* gap: 1rem; */
		grid-column: span 4;
	}

	hgroup > * + * {
		margin-block-start: 1em;
	}

	.img-wrapper {
		grid-column: span 2;
		display: grid;
		place-items: center;
	}

	img {
		border: 8px solid var(--clr-45);
		object-fit: cover;
		max-width: 20rem;
		max-height: 20rem;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	#technologies {
		width: min(92%, var(--base));
		margin-inline: auto;
	}

	#technologies p {
		color: var(--clr-200);
	}

	#technologies > * + * {
		margin-block-start: 1.2em;
	}

	ul {
		margin-block-start: 0.4em;
	}

	li {
		--background: var(--clr-20);
		--border: var(--clr-25);
		background-color: var(--background);
		border: 1px solid var(--background);
		border-top-color: var(--border);
		border-left-color: var(--border);
		box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.15);
		color: var(--clr-200);

		display: flex;
		gap: 0.6ch;
		border-radius: 1.2rem;
		padding: 0.7rem 1.2rem;
		place-content: center;
		place-items: center;
		bottom: 2px;
	}
</style>
