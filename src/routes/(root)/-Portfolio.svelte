<script>
	import { base } from '$app/paths';
	import { FilteredProjects } from '$lib/components/projects/store';
</script>

<div class="wrapper-portfolio">
	<div id="portfolio" class="portfolio">
		<section>
			<h2 class="font-50">My work</h2>
			<p>
				I've contributed to FOSS as well as created some projects of my own. You can find all of my
				projects
				<a class="internal-link" href="{base}/portfolio">tracked here</a>.
			</p>
		</section>
		<ol>
			<li class="tpl">
				<a href={$FilteredProjects[0].link.toString()} target="_blank" rel="external">
					<h3 class="font-30">
						{$FilteredProjects[0].name}
						<iconify-icon icon="lucide:external-link" />
					</h3>
					<p class="font-20">{$FilteredProjects[0].short_description}</p>
				</a>
			</li>
			<li class="tpl">
				<a href={$FilteredProjects[1].link.toString()} target="_blank" rel="external">
					<h3 class="font-30">
						{$FilteredProjects[1].name}
						<iconify-icon icon="lucide:external-link" />
					</h3>
					<p class="font-20">{$FilteredProjects[1].short_description}</p>
				</a>
			</li>
			<li class="tpl">
				<a href="/" target="_blank" rel="external">
					<h3 class="font-30">
						Project
						<iconify-icon icon="lucide:external-link" />
					</h3>
					<p class="font-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</a>
			</li>
		</ol>
	</div>
</div>

<style>
	.wrapper-portfolio {
		background-color: var(--clr-05);
	}

	.portfolio {
		display: flex;
		flex-wrap: wrap;
		width: min(100% - 2.2rem, var(--md));
		min-height: 100vh;
		min-height: 100svh;
		margin-inline: auto;
		padding: 3rem 0;
		gap: 3rem;
		place-items: center;
		place-content: center;
	}

	section {
		max-width: min(100% - 2rem);
		display: flex;
		flex-direction: column;
		flex: 1;
		min-width: var(--xs);
	}

	section > * + * {
		margin-block-start: 0.6em;
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
		padding: 1rem;
	}

	li a > * + * {
		margin-block-start: 0.4em;
	}

	h3 {
		display: flex;
		place-items: center;
		gap: 1ch;
	}

	@media screen and (min-height: 80rem) {
		.portfolio {
			min-height: 0;
		}
	}

	@media screen and (min-width: 1024px) {
		li a {
			padding: 1.6rem;
		}
	}

	li:first-child {
		--bg: var(--clr-25);
		--brd: var(--clr-30);
	}

	li:first-child h3 {
		color: var(--clr-300);
	}

	li:first-child p {
		color: var(--clr-200);
	}

	li:nth-child(2) {
		--bg: var(--clr-20);
		--brd: var(--clr-25);
	}

	li:nth-child(2) h3 {
		color: var(--clr-250);
	}

	li:nth-child(2) p {
		color: var(--clr-200);
	}

	li:last-child {
		--bg: var(--clr-15);
		--brd: var(--clr-20);
	}

	li:last-child h3 {
		color: var(--clr-250);
	}

	li:last-child p {
		color: var(--clr-150);
	}

	@media (hover: hover) {
		li:first-child:hover {
			--bg: var(--clr-35);
			--brd: var(--clr-40);
		}

		li:nth-child(2):hover {
			--bg: var(--clr-30);
			--brd: var(--clr-35);
		}

		li:last-child:hover {
			--bg: var(--clr-25);
			--brd: var(--clr-30);
		}
	}
</style>
