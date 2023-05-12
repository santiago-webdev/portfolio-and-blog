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
								><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<g
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
									>
										<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
										<path
											d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M16 4h2a2 2 0 0 1 2 2v4m1 4H11"
										/>
										<path d="m15 10l-4 4l4 4" />
									</g>
								</svg></button
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
					Designed & Built with <svg
						xmlns="http://www.w3.org/2000/svg"
						width="21"
						height="21"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
						/>
					</svg>
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
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
					/>
				</svg>
				<div aria-orientation="vertical" role="separator">-</div>
				<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z"
					/>
				</svg>
				<var
					style="margin-top: 1px"
					aria-label="Amount of stars in the GitHub repository"
					title="Amount of stars in the GitHub repository"
				>
					{ghStars}
				</var>
			</a>

			<small class="copyright">
				<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
					<g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					>
						<circle cx="12" cy="12" r="10" />
						<path d="M15 9.354a4 4 0 1 0 0 5.292" />
					</g>
				</svg>
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
