<script lang="ts">
	import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
	import {
		currentGroupOfProjects,
		jobSelector,
		getCategoryInfo,
		FilteredProjects
	} from '$lib/components/projects/store';
	import site from '$lib/site.json';

	function retrieve_icon(symbol: string): string | undefined {
		switch (symbol.toLowerCase()) {
			case 'javascript':
				return 'devicon-plain:javascript';
			case 'typescript':
				return 'devicon-plain:typescript';
			case 'sveltekit':
			case 'svelte':
				return 'devicon-plain:svelte';
			case 'html':
				return 'devicon-plain:html5';
			case 'css':
				return 'devicon-plain:css3';
			case 'github rest api':
				return 'mdi:github';
			default:
				return '';
		}
	}
</script>

<main>
	<div class="container-projects">
		<div class="projects-presentation">
			<h1 class="font-50">
				Projects Showcase - {getCategoryInfo($currentGroupOfProjects).label}
			</h1>
			<p class="font-50">
				{getCategoryInfo($currentGroupOfProjects).description}
			</p>
		</div>
		<form class="font-30">
			<label style="display: flex; flex-wrap: wrap" for="projects">
				Filter by type of project
				<noscript>
					<small>Sorry Folks! This requires JavaScript to work!</small>
				</noscript>
			</label>
			<select bind:value={$currentGroupOfProjects} name="projects" id="projects">
				{#each Object.entries(jobSelector) as [value, [label]]}
					<option {value} {label} />
				{/each}
			</select>
		</form>
	</div>
</main>
<section>
	{#each $FilteredProjects as { name, description, category, stack, img, repo, link, accent }}
		<article>
			<div class="img-wrapper">
				<img loading="lazy" src={img} alt="Screenshot of {name}" title="Screenshot of {name}" />
			</div>
			<div id="describe-{name}">
				<div class="describe-project-banner">
					<a
						href={link.toString()}
						target="_blank"
						style="display: flex; place-items: center; gap: 0.5ch"
						class="font-40"
					>
						<span
							style:font-variation-settings="'wght' 500"
							style:color="var({accent ? accent : '--clr-200'})"
							>{link.hostname.replace(/^www\./i, '')}</span
						>
					</a>
					<div style:gap="2ch" class="inline-items">
						<h2 class="font-30">{name}</h2>
						<ul class="inline-items">
							{#each category as tags}
								<li class="shiny font-20">{getCategoryInfo(tags).label}</li>
							{/each}
						</ul>
					</div>
				</div>
				<p class="font-20">{description}</p>

				<h3
					class="font-10"
					style="margin-top: 0.8rem; color: var(--clr-150); font-variation-settings: 'wght' 700;"
				>
					Tech Stack:
				</h3>
				<div class="list-project-frontend inline-items">
					{#if stack.frontend}
						<h4 class="font-10">Frontend:</h4>
						<ul class="inline-items font-10">
							{#each stack.frontend as tags}
								<li class="shiny">
									<iconify-icon width="22" icon={retrieve_icon(tags)} />
									{tags}
								</li>
							{/each}
						</ul>
					{/if}
				</div>

				<div class="list-project-api inline-items">
					{#if stack.api}
						<h4 class="font-10">API:</h4>
						<ul class="inline-items font-10">
							{#each stack.api as tags}
								<li class="shiny">
									<iconify-icon width="22" icon={retrieve_icon(tags)} />
									{tags}
								</li>
							{/each}
						</ul>
					{/if}
				</div>

				<div class="list-project-backend inline-items">
					{#if stack.backend}
						<h4 class="font-10">Backend:</h4>
						<ul class="inline-items font-10">
							{#each stack.backend as tags}
								<li class="shiny">
									<iconify-icon width="22" icon={retrieve_icon(tags)} />
									{tags}
								</li>
							{/each}
						</ul>
					{/if}
				</div>

				<div class="container-project-links">
					<ShapeButton
						class="bttn-big-round shiny hover"
						target="_blank"
						custom_symbol="mdi:github"
						href={repo.toString()}
					>
						Source Code
					</ShapeButton>
					<ShapeButton class="bttn-big-round reverse hover" href={link.toString()}>
						Case Study</ShapeButton
					>
				</div>
			</div>
		</article>
	{/each}
	<article id="portfolio-new">
		<button>
			<iconify-icon width="30" height="30" icon="lucide:plus" />
		</button>
		<div id="describe-new">
			<div>newdomain.com</div>
			<h2>New Project</h2>
			<p>
				Take Away Interview? Try Me! As a junior developer with a passion for turning ideas into
				reality, I'm excited to work with you on your new project.
			</p>
			<ul>
				<li class="shiny">New</li>
			</ul>
		</div>
	</article>
</section>

<svelte:head>
	<title>{site.portfolio.title}</title>

	<!-- TODO(santigo-zero): meta tags for dynamic routing -->
	<!-- HTML Meta Tags -->
	<meta name="description" content={site.portfolio.description} />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={site.portfolio.title} />
	<meta itemprop="description" content={site.portfolio.description} />
	<meta itemprop="image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={site.portfolio.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.portfolio.title} />
	<meta property="og:description" content={site.portfolio.description} />
	<meta property="og:image" content="" />
	<!-- TODO(santigo-zero): Add image -->

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.portfolio.title} />
	<meta name="twitter:description" content={site.portfolio.description} />
	<meta name="twitter:image" content="" />
	<!-- TODO(santigo-zero): Add image -->
</svelte:head>

<style>
	main {
		background-color: var(--clr-25);
		border-bottom-right-radius: 1.6rem;
		border-bottom-left-radius: 1.6rem;
		padding-bottom: 1rem;
		display: grid;
		place-items: center;
	}

	.container-projects {
		display: flex;
		flex-flow: row wrap;

		width: min(92%, var(--base));
		margin-inline: auto;
		padding: 3rem 0;
		place-content: center;
		gap: 1.6rem;
	}

	.projects-presentation {
		flex: 3;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.projects-presentation p {
		color: var(--clr-90);
	}

	form {
		flex: 2;
		display: flex;
		flex-flow: column wrap;
		place-content: center;
		gap: 1rem;
		min-width: var(--xs);
	}

	label {
		margin-inline: 1.6rem;
	}

	select {
		width: 100%;
		padding: 0.7rem 1.6rem;
		border-radius: 1rem;
		color: var(--clr-150);

		background-color: var(--clr-40);
		border: 1px solid var(--clr-40);
		border-top-color: var(--clr-45);
		border-left-color: var(--clr-45);
		box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);

		transition: background-color 50ms, border 80ms, box-shadow 300ms;
	}

	section {
		padding-top: 3rem;
		margin-inline: auto;
		width: min(92%, var(--lg));
		display: grid;
		gap: 1.6rem;
	}

	article {
		background-color: var(--clr-25);
		border-radius: 1.2rem;
		display: flex;
		flex-flow: row wrap;
		gap: 2rem;
		padding: 1.6rem;
	}

	[id^='describe-'] {
		flex: 6;
		gap: 1rem;
		display: flex;
		flex-direction: column;
	}

	.describe-project-banner {
		display: flex;
		flex-direction: column;
		gap: 1ch;
	}

	h4 {
		color: var(--clr-90);
		font-variation-settings: 'wght' 700;
		min-width: 8ch;
	}

	.container-project-links {
		margin-top: 1.6rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	li {
		border-radius: 0.6rem;
		padding: 0.3rem 0.9rem;
		display: flex;
		gap: 1ch;
	}

	.img-wrapper {
		min-width: min(100%, var(--xs));
		aspect-ratio: 16/10;
		flex: 3;
		height: auto;
		overflow-y: scroll;
		border: 3px solid var(--clr-50);
		border-radius: 0.8rem;
	}

	img {
		max-inline-size: 100%;
		block-size: auto;
	}

	button {
		min-width: min(100%, var(--xs));
		height: auto;
		cursor: pointer;
		flex: 3;
		aspect-ratio: 16/10;
		border: 3px dashed var(--clr-50);
		display: flex;
		place-items: center;
		place-content: center;
	}

	button:hover {
		border: 3px dashed var(--clr-55);
		background-color: var(--clr-30);
	}

	[icon='lucide:plus'] {
		color: var(--clr-95);
	}

	button:hover [icon='lucide:plus'] {
		color: var(--clr-200);
	}
</style>
