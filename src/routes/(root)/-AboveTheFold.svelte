<script lang="ts">
	import { base } from '$app/paths';
	import LinkArrow from '$lib/components/navigation/LinkArrow.svelte';
	import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
	import site from '$lib/site.json';
</script>

<div class="wrapper">
	<main>
		<div class="introduction">
			<h1 class="font-80">
				Building the web<br /> with clean interfaces
			</h1>
			<p>
				I'm a frontend developer and here we'll discuss about
				<strong>web deve&shylopment</strong>
				and show you my projects while at it.
			</p>
			<section>
				<ShapeButton href="{base}/projects" class="bttn-big-round reverse hover">
					What I've built</ShapeButton
				>
				<div class="container">
					<ShapeButton
						href={site.resume.url}
						target="_blank"
						rel="external"
						class="bttn-big-round shiny hover"
					>
						Resume</ShapeButton
					>
					<small>Hit Ctrl+P to print</small>
				</div>
			</section>
		</div>
		<div class="call-to-scroll">
			<LinkArrow href="#portfolio">Learn more</LinkArrow>
		</div>
	</main>
</div>

<style>
	.wrapper {
		background-color: var(--clr-25);
		padding: 2rem 0;
	}

	main {
		display: flex;
		gap: 1.6rem;
		place-items: center;
		flex-direction: column;
		width: min(92%, var(--md));
		margin-inline: auto;
		position: relative;
	}

	.introduction {
		display: flex;
		flex-flow: column wrap;
		gap: 0.8rem;
	}

	small {
		display: none;
	}

	h1 {
		max-width: 15ch;
	}

	p {
		max-width: 38ch;
		color: var(--clr-200);
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 1.2rem;
	}

	.call-to-scroll {
		place-self: start;
	}

	@media screen and (min-width: 768px) {
		section {
			flex-direction: row;
			place-items: self-start;
			gap: 1.2rem;
		}

		small {
			padding-inline: 1.8rem;
			display: block;
			margin-top: 1ch;
		}
	}

	@media screen and (min-height: 1280px) {
		main {
			padding: 3rem 0;
		}
	}

	@media screen and (min-width: 1280px) {
		main {
			flex-flow: row;
			padding: 6rem 0;
			text-align: left;
			min-height: 80vh;
			min-height: 80dvh;
		}

		.call-to-scroll {
			position: absolute;
			inset: 70% 0 auto auto;
			transform: rotate(90deg);
		}
	}
</style>
