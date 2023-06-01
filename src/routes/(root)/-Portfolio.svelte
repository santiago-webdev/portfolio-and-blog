<script>
	import LinkUI from '$lib/components/navigation/LinkUI.svelte';
	import { base } from '$app/paths';
</script>

<div class="wrapper-portfolio">
	<div id="portfolio" class="portfolio">
		<ol>
			<li>
				<a href="/">
					<h3 class="font-40">
						Project
						<iconify-icon icon="lucide:external-link" />
					</h3>
					<p class="font-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</a>
			</li>
			<li>
				<a href="/">
					<h3 class="font-40">
						Project
						<iconify-icon icon="lucide:external-link" />
					</h3>
					<p class="font-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</a>
			</li>
			<li>
				<a href="/">
					<h3 class="font-40">
						Project
						<iconify-icon icon="lucide:external-link" />
					</h3>
					<p class="font-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</a>
			</li>
		</ol>
		<section>
			<h2>Latest projects</h2>
			<p>I've contributed to FOSS as well as created some projects of my own</p>
			<p>
				More projects with details can be tracked <LinkUI
					style="display: inline-flex; font-size: inherit; line-height: inherit;"
					href="{base}/portfolio">in the dedicated page</LinkUI
				>
			</p>
		</section>
	</div>
</div>

<style>
	.wrapper-portfolio {
		background-color: var(--clr-05);
	}

	.portfolio {
		display: flex;
		flex-wrap: wrap-reverse;
		width: min(92%, var(--md));
		min-height: 100vh;
		min-height: 100svh;
		margin-inline: auto;
		padding: 3rem 0;
		gap: 3rem;
		place-items: center;
		place-content: center;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		flex: 1;
	}

	section > * + * {
		margin-block-start: 0.8em;
	}

	section p {
		color: var(--clr-80);
		max-width: 38ch;
	}

	ol {
		flex: 1;
		display: grid;
		gap: 1rem;
		font-family: var(--ff-dflt);
	}

	li {
		min-width: var(--xs);
		border-radius: 0.6rem;
	}

	li a {
		display: grid;
		gap: 0.4rem;
		padding: 0.8rem;
	}

	h3 {
		display: flex;
		place-items: center;
		gap: 1ch;
		/* font-weight: 500; */
		font-variation-settings: 'wght' 700;
	}

	@media screen and (min-height: 80rem) {
		.portfolio {
			min-height: 0;
		}
	}

	@media screen and (min-width: 1024px) {
		li a {
			gap: 0.8rem;
			padding: 1.6rem;
		}
	}

	/* Gradient styles for each list items. */
	li:first-child {
		background-color: var(--clr-35);
	}

	li:first-child h3 {
		color: var(--clr-300);
	}

	li:first-child p {
		color: var(--clr-200);
	}

	li:nth-child(2) {
		background-color: var(--clr-25);
	}

	li:nth-child(2) h3 {
		color: var(--clr-250);
	}

	li:nth-child(2) p {
		color: var(--clr-200);
	}

	li:last-child {
		background-color: var(--clr-15);
	}

	li:last-child h3 {
		color: var(--clr-250);
	}

	li:last-child p {
		color: var(--clr-150);
	}
</style>
