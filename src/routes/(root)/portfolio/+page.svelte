<script lang="ts">
	import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
	import {
		currentGroupOfProjects,
		jobSelector,
		getCategoryInfo,
		FilteredProjects
	} from '$lib/components/projects/store';
	import site from '$lib/site.json';
	import { retrieve_icon } from '$lib/utils/utils';
</script>

<main>
	<div class="wrapper-header">
		<header>
			<hgroup>
				<span class="font-10">Portfolio Showcase &mdash;</span>
				<h1 class="font-60">{getCategoryInfo($currentGroupOfProjects).label} Projects</h1>
				<p>
					{getCategoryInfo($currentGroupOfProjects).description}
				</p>
			</hgroup>
			<form class="font-30">
				<label for="projects">
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
		</header>
	</div>
	<section>
		{#each $FilteredProjects as { name, description, category, stack, img, repo, link, accent }}
			<article>
				<div class="img-wrapper">
					<img loading="lazy" src={img} alt="Screenshot of {name}" title="Screenshot of {name}" />
				</div>
				<div id="describe-{name}">
					<header>
						<div style:gap="2ch" class="inline-items">
							<a href={link.toString()} target="_blank" class="font-40">
								<span style:color="var({accent ? accent : '--clr-200'})"
									>{link.hostname.replace(/^www\./i, '')}</span
								>
							</a>
							<ul class="inline-items">
								{#each category as tags}
									<li class="shiny font-20">{getCategoryInfo(tags).label}</li>
								{/each}
							</ul>
						</div>
					</header>
					<p class="font-20">{description}</p>

					<h3 class="font-10">Tech Stack:</h3>
					{#if stack.frontend}
						<div class="list-project-frontend">
							<h4 class="font-10">Frontend:</h4>
							<ul class="inline-items font-10">
								{#each stack.frontend as tags}
									<li class="shiny">
										<iconify-icon width="22" icon={retrieve_icon(tags)} />
										{tags}
									</li>
								{/each}
							</ul>
						</div>
					{/if}
					{#if stack.api}
						<div class="list-project-api">
							<h4 class="font-10">API:</h4>
							<ul class="inline-items font-10">
								{#each stack.api as tags}
									<li class="shiny">
										<iconify-icon width="22" icon={retrieve_icon(tags)} />
										{tags}
									</li>
								{/each}
							</ul>
						</div>
					{/if}
					{#if stack.backend}
						<div class="list-project-backend">
							<h4 class="font-10">Backend:</h4>
							<ul class="inline-items font-10">
								{#each stack.backend as tags}
									<li class="shiny">
										<iconify-icon width="22" icon={retrieve_icon(tags)} />
										{tags}
									</li>
								{/each}
							</ul>
						</div>
					{/if}

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
		<article>
			<button>
				<iconify-icon width="30" height="30" icon="lucide:plus" />
			</button>
			<div id="describe-new-project">
				<header>
					<a href="#todo" target="_blank" class="font-40">
						<span style:color="var(--clr-200)">newdomain.com</span>
					</a>
					<h2 class="font-30">Takeaway Interview?</h2>
					<p>
						Try Me! As a junior developer with a passion for turning ideas into reality, I'm excited
						to work with you on your new project.
					</p>
					<ul>
						<li class="shiny">New</li>
					</ul>
				</header>
			</div>
		</article>
	</section>
</main>

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
	.wrapper-header {
		border-bottom-right-radius: 1.6rem;
		border-bottom-left-radius: 1.6rem;
		padding-bottom: 1.4rem;
		padding-top: 1.8rem;
		background-color: var(--clr-25);
		display: flex;
		place-items: center;
	}

	.wrapper-header header {
		display: flex;
		flex-direction: column;
		width: min(92%, var(--base));
		margin-inline: auto;
		place-content: center;
		gap: 2.6rem;
	}

	hgroup {
		flex: 6;
		display: grid;
		gap: 1rem;
	}

	hgroup h1 {
		color: var(--clr-300);
	}

	hgroup span {
		font-weight: 800;
		font-variation-settings: 'wght' 800;
		color: var(--clr-150);
	}

	hgroup p {
		color: var(--clr-200);
	}

	form {
		flex: 4;
		display: flex;
		flex-flow: column wrap;
		place-content: center;
		gap: 1rem;
	}

	label {
		margin-inline: 1.6rem;
		display: flex;
		flex-wrap: wrap;
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
		padding-top: 2.8rem;
		margin-inline: auto;
		width: min(96%, var(--lg));
		display: grid;
		gap: 1.6rem;
	}

	article {
		background-color: var(--clr-25);
		border-radius: 1.2rem;
		display: flex;
		flex-flow: column wrap;
		gap: 2rem;
		padding: 1.6rem;
	}

	a {
		max-width: max-content;
	}

	[id^='describe-'] {
		flex: 6;
		gap: 1rem;
		display: flex;
		flex-direction: column;
	}

	h3 {
		margin-top: 0.8rem;
		color: var(--clr-150);
		font-variation-settings: 'wght' 700;
	}

	article header {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	[class^='list-project'] {
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
		flex-flow: column nowrap;
		gap: 1rem;
	}

	@media screen and (min-width: 896px) {
		.wrapper-header header {
			flex-direction: row;
			padding: 6rem 0;
		}

		article {
			flex-direction: row;
		}
	}

	@media screen and (min-width: 1200px) {
		.container-project-links {
			flex-flow: row wrap;
		}

		[class^='list-project'] {
			flex-direction: row;
			place-items: center;
		}
	}

	li {
		border-radius: 0.6rem;
		padding: 0.3rem 0.9rem;
		display: flex;
		gap: 1ch;
	}

	.img-wrapper {
		height: auto;
		aspect-ratio: 16/10;
		flex: 5;
		overflow-y: scroll;
		border: 3px solid var(--clr-50);
		border-radius: 0.8rem;
	}

	img {
		max-inline-size: 100%;
		block-size: auto;
	}

	span {
		font-variation-settings: 'wght' 500;
	}

	button {
		min-width: min(100%, var(--xs));
		height: auto;
		cursor: pointer;
		flex: 5;
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
