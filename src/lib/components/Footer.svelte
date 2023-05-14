<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { navigationItems } from '$lib/components/navigation/store';
	import site from '$lib/site.json';
	import ButtonToTheTop from '$lib/components/ButtonToTheTop.svelte';

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
			direction: '0x3f8347d947c5bbdd166013e01ec4b645883e0fbb'
		}
	];
</script>

<ButtonToTheTop />
<footer>
	<div class="font-20 footer-start">
		<section>
			<div class="aboutme">
				<h3 class="font-30">Santiago Gonzalez</h3>
				<p class="font-20">
					I'm a web developer that can help you craft accessible website experiences without leaving
					the aesthetics aside.
				</p>
			</div>

			<nav aria-label="footer-navigation">
				<h3 class="font-20">Sitemap</h3>
				{#each $navigationItems as item}
					{#if item.label !== 'Separator'}
						<a
							class="shiny-select"
							aria-current={item.href === $page.url.pathname ||
							($page.url.pathname.startsWith(item.href || '') && `/` !== item.href)
								? 'page'
								: undefined}
							aria-label="Link to {item.label}"
							href={item.href}>{item.label}</a
						>
					{/if}
				{/each}
			</nav>

			<div class="relevant-projects">
				<h3 class="font-20">Projects</h3>
				<ul>
					<li>
						<a class="shiny-select" target="_blank" href="https://zapzsh.org">Zap website</a>
					</li>
				</ul>
			</div>

			<div class="donate">
				<h3 class="font-20">Donate</h3>
				<ul>
					{#each donateItems as item}
						<li>
							<a class="shiny-select" href="bitcoin:{item.direction}">
								<address>
									<iconify-icon icon="simple-icons:{item.logo}" />
									{item.name}
								</address>
							</a>
							<button
								class="shiny-select"
								aria-label="Copy the direction of the wallet"
								title="Copy the direction of the wallet"
								on:click={() =>
									navigator.clipboard
										.writeText(item.direction)
										.then(() => console.log('Text copied to clipboard'))
										.catch((error) => console.error('Could not copy text: ', error))}
								><iconify-icon height="22" weight="22" icon="lucide:clipboard-copy" /></button
							>
						</li>
					{/each}
				</ul>
			</div>

			<div class="contact">
				<h3 class="font-20">Contact</h3>
				<address>
					<a target="_blank" class="shiny-select" href="mailto:santiagogonzalezbogado@gmail.com">
						<iconify-icon icon="lucide:mail" />
						Email me</a
					>
				</address>
				<address>
					<a target="_blank" class="shiny-select" href="https://github.com/santigo-zero/">
						<iconify-icon aria-label="GitHub icon" role="img" icon="simple-icons:github" />
						GitHub profile</a
					>
				</address>
				<address>
					<a
						target="_blank"
						class="shiny-select"
						href="https://www.linkedin.com/in/santiago-gonzalez-62557221b/"
					>
						<iconify-icon icon="simple-icons:linkedin" />LinkedIn profile
					</a>
				</address>
			</div>
		</section>
	</div>
	<div class="footer-end font-20">
		<section>
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
				href={site.site.repo}
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
				<iconify-icon icon="lucide:copyright" />
				2023 - present
				<div aria-orientation="vertical" role="separator">•</div>
				All rights reserved
				<div aria-orientation="vertical" role="separator">•</div>
				GPL-3.0
			</small>
		</section>
	</div>
</footer>

<style>
	footer {
		border-top-right-radius: 1.6rem;
		border-top-left-radius: 1.6rem;
		background-color: var(--clr-25);
		margin-top: 1rem;
		font-family: var(--ff-text);
	}

	small,
	button,
	li,
	p,
	h3,
	a {
		display: flex;
		place-items: center;
		gap: 0.5ch;
		color: inherit;
		font-weight: 400;
	}

	section {
		display: flex;
		margin-inline: auto;
		width: min(100% - clamp(1rem, 2vw + 1.5rem, 3rem), var(--md));
	}

	.footer-start * {
		gap: 0.1rem;
	}

	.footer-start section {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		padding: clamp(1rem, 3vw, 2rem) 0;
		gap: 1.6rem;
	}

	h3 {
		font-weight: 500;
	}

	h3:not(.aboutme h3) {
		text-decoration: underline solid var(--clr-65) 2px;
		text-underline-offset: 3px;
		margin: 0 0.6rem 0.4rem;
	}

	.footer-start p {
		color: var(--clr-95);
	}

	.aboutme {
		display: flex;
		position: relative;
		place-content: center;
		flex-flow: column wrap;
		flex: 1 23rem;
		gap: 1rem;
		padding: 2rem;
		border-radius: 1rem;

		--background: var(--clr-30);
		--border: var(--clr-35);
		background-color: var(--background);
		border: 1px solid var(--background);
		border-top-color: var(--border);
		border-left-color: var(--border);
		box-shadow: 0 8px 16px 0 rgba(0 0 0 / 0.15);
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
		opacity: 0.06;
		background-image: url('/logo.svg');
	}

	:global([data-theme='light'] .aboutme:after),
	:global([data-theme='system-light'] .aboutme:after) {
		opacity: 0.15;
		background-image: url('/logo-light.svg');
	}

	.footer-start section > * {
		display: flex;
		flex-direction: column;
		min-width: calc(var(--xs) / 2);
	}

	li a {
		width: 100%;
	}

	.donate address {
		display: flex;
		place-items: center;
		gap: 0.5ch;
		padding: 0;
		border-radius: 0;
	}

	.footer-end {
		display: flex;
		place-content: center;
		background-color: var(--clr-35);
	}

	.footer-end a:hover {
		color: var(--clr-85);
	}

	.footer-end section {
		display: flex;
		flex-direction: column;
		place-items: center;
		gap: 2rem;
		padding: 3rem 0;
	}

	.copyright {
		display: flex;
		flex-wrap: wrap;
		place-content: center;
	}

	@media screen and (min-width: 1280px) {
		.footer-end section {
			flex-flow: row wrap;
			justify-content: space-between;
			padding: 0.6rem 0;
		}
	}

	address,
	a,
	small,
	button {
		font-size: inherit;
		font-family: inherit;
	}
</style>
