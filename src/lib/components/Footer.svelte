<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { navigationItems } from '$lib/components/navigation/store';
	import config from '$lib/config.json';

	let ghStars = 0;

	const getGithubStars = async () => {
		if (dev) return 0;
		try {
			const response = await fetch('https://api.github.com/repos/santigo-zero/portfolio-and-blog');
			if (!response.ok) {
				throw new Error('Network response was not ok.');
			}
			const data = await response.json();
			return data.stargazers_count;
		} catch (error) {
			console.error(error);
			return 0;
		}
	};

	getGithubStars().then((stars) => (ghStars = stars));

	const donateItems = [
		{
			name: 'Bitcoin(BEP20)',
			logo: 'bitcoin',
			direction: 'todo'
		}
	];
</script>

<footer>
	<header>
		<div class="aboutme">
			<h3 class="font-30">Santiago Gonzalez</h3>
			<p class="font-30">
				Crafting accessible web experiences without leaving the aesthetics aside.
			</p>
		</div>

		<nav aria-label="footer-navigation">
			<h3 class="font-20">Sitemap</h3>
			<ul class="shiny-select">
				{#each $navigationItems as item}
					{#if item.label !== 'Separator'}
						<li>
							<a
								aria-current={item.href === $page.url.pathname ||
								($page.url.pathname.startsWith(item.href || '') && `/` !== item.href)
									? 'page'
									: undefined}
								aria-label="Link to {item.label}"
								href={item.href}>{item.label}</a
							>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>

		<div class="projects">
			<h3 class="font-20">Projects</h3>
			<ul class="shiny-select">
				<li>
					<a target="_blank" href="https://zapzsh.org">Zap website</a>
				</li>
				<li>
					<a target="_blank" href="https://zapzsh.org">Lorem website</a>
				</li>
				<li>
					<a target="_blank" href="https://zapzsh.org">Another website</a>
				</li>
			</ul>
		</div>

		<div class="donate">
			<h3 class="font-20">Donate</h3>
			<ul class="shiny-select">
				{#each donateItems as item}
					<li>
						<address id='todo'>
							<a href="#todo">
								<iconify-icon icon="simple-icons:{item.logo}" />
								{item.name}
							</a>
						</address>
						<!-- <button -->
						<!-- 	aria-label="Copy the direction of the wallet" -->
						<!-- 	title="Copy the direction of the wallet" -->
						<!-- 	on:click={() => -->
						<!-- 		navigator.clipboard -->
						<!-- 			.writeText(item.direction) -->
						<!-- 			.then(() => console.log('Text copied to clipboard')) -->
						<!-- 			.catch((error) => console.error('Could not copy text: ', error))} -->
						<!-- 	><iconify-icon height="22" weight="22" icon="lucide:clipboard-copy" /></button -->
						<!-- > -->
					</li>
				{/each}
			</ul>
		</div>

		<div class="contact">
			<h3 class="font-20">Contact</h3>
			<address class="shiny-select">
				<a target="_blank" href="mailto:santiagogonzalezbogado@gmail.com">
					<iconify-icon icon="lucide:mail" />
					Email me</a
				>
			</address>
			<address class="shiny-select">
				<a target="_blank" href="https://github.com/santigo-zero/">
					<iconify-icon icon="simple-icons:github" />
					GitHub</a
				>
			</address>
			<address class="shiny-select">
				<a target="_blank" href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/">
					<iconify-icon icon="simple-icons:linkedin" />
					LinkedIn
				</a>
			</address>
		</div>
	</header>
	<section>
		<div class="font-20 container-bottom">
			<a
				target="_blank"
				href="https://github.com/santigo-zero"
				aria-label="Link to my GitHub profile"
				title="Link to my GitHub profile"
			>
				<small>
					Designed & Built with <iconify-icon icon="lucide:heart" />
					by
				</small>
				<address>Santiago</address>
			</a>

			<a
				target="_blank"
				href={config.landingpage.repo}
				aria-label="Link to git repository for this site at Github"
				title="Link to git repository for this site at Github"
			>
				Repository
				<iconify-icon width="24" height="24" icon="mdi:github" />
				<div aria-orientation="vertical" role="separator">-</div>
				<iconify-icon icon="lucide:star" />
				<var
					style="margin-top: 1px"
					aria-label="Amount of stars in the GitHub repository"
					title="Amount of stars in the GitHub repository"
				>
					{ghStars}
				</var>
			</a>

			<small class="copyright">
				All rights reserved <iconify-icon icon="lucide:copyright" />
				{new Date().getFullYear()}
				<div aria-orientation="vertical" role="separator">&mdash;</div>
				GPL-3.0
			</small>
		</div>
	</section>
</footer>

<style>
	footer {
		display: flex;
		place-content: center;
		flex-direction: column;
		background-color: var(--clr-25);
		margin-top: 1rem;
		border-top-right-radius: 1.6rem;
		border-top-left-radius: 1.6rem;
	}

	footer :is(a, small) {
		color: var(--clr-200);
		display: flex;
		gap: 0.4ch;
		place-items: center;
	}

	header {
		display: grid;
		flex-flow: row wrap;
		justify-content: space-between;
		padding: clamp(1rem, 3vw, 2rem) 0;
		gap: 2rem 1rem;
		width: min(92%, var(--md));
		margin-inline: auto;
		font-family: var(--ff-text);
	}

	header > * {
		display: flex;
		flex-direction: column;
	}

	header h3:not(.aboutme h3) {
		font-weight: 500;
		margin: 0 0.6rem 0.4rem;
	}

	.aboutme {
		display: flex;
		position: relative;
		place-content: center;
		flex-flow: column wrap;
		flex: 1 23rem;
		min-height: 15rem;
		gap: 1rem;
		padding: 2rem;
		border-radius: 1.2rem;

		--background: var(--clr-30);
		--border: var(--clr-35);
		background-color: var(--background);
		border: 1px solid var(--background);
		border-top-color: var(--border);
		border-left-color: var(--border);
		box-shadow: 0 8px 16px 0 rgba(0 0 0 / 0.15);
	}

	.aboutme p {
		color: var(--clr-100);
	}

	.aboutme:after {
		content: '';
		pointer-events: none;

		position: absolute;
		inset: 0;
		margin: auto;

		background-position: center;
		background-size: 100% 123%;
	}

	:global([data-theme='dark'] .aboutme:after),
	:global([data-theme='system'] .aboutme:after) {
		opacity: 0.03;
		background-image: url('/logo.svg');
	}

	:global([data-theme='light'] .aboutme:after),
	:global([data-theme='system-light'] .aboutme:after) {
		opacity: 0.1;
		background-image: url('/logo-light.svg');
	}

	header {
		grid-template-columns: repeat(8, 1fr);
	}

	.aboutme {
		grid-column: span 8;
	}

	nav,
	.projects,
	.donate,
	.contact {
		grid-column: span 4;
	}

	nav {
		grid-row: span 3;
	}

	@media screen and (min-width: 768px) {
		nav {
			grid-row: auto;
		}
	}

	@media screen and (min-width: 1024px) {
		.donate,
		.projects,
		nav {
			order: 2;
		}

		.contact {
			order: 1;
		}

		.aboutme {
			order: 0;
		}

		header {
			grid-template-columns: repeat(12, 1fr);
		}
	}

	@media screen and (min-width: 1200px) {
		header {
			grid-template-columns: repeat(24, 1fr);
		}
	}

	section {
		display: flex;
		place-content: center;
		background-color: var(--clr-40);
	}

	h3 {
		color: var(--clr-250);
	}

	section :is(small, a) {
		color: var(--clr-300);
		font-variation-settings: 'wght' 530;
		font-family: var(--ff-dflt);
		font-size: inherit;
	}

	@media (hover: hover) {
		.container-bottom a:hover,
		.container-bottom a:hover > * {
			color: var(--clr-red-40);
		}
	}

	.container-bottom {
		display: flex;
		flex-direction: column;
		place-items: center;
		gap: 1.2rem;
		padding: 2rem 0;
		width: min(92%, var(--md));
		margin-inline: auto;
	}

	.copyright {
		display: flex;
		flex-wrap: wrap;
		place-content: center;
	}

	@media screen and (min-width: 1200px) {
		.container-bottom {
			flex-flow: row wrap;
			justify-content: space-between;
			padding: 0.6rem 0;
		}
	}
</style>
