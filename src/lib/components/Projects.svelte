<script lang="ts">
	const title: string = "Projects";
	const subtitle: string = "This are some of my best frontend projects";
</script>

<div id="projects" class="wrapper-projects">
	<main>
		<div style="text-align: center">
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</div>

		<section>
			<article>
				<h4>Title of the Card</h4>
			</article>
			<article>
				<h4>Title of the Card</h4>
			</article>
			<article>
				<h4>Title of the Card</h4>
			</article>
		</section>
	</main>
</div>

<style>
	.wrapper-projects {
		display: grid;
		place-items: center;

		min-height: min(100vh, 60rem);
		padding: 6rem 0;
	}

	/* This is the most important part of my portfolio, it's where I showcase my
   * projects. */
	main {
		/* border: 2px solid blue; */
		width: min(100% - calc(var(--padding) * 2), var(--max-content-width));
	}

	h1 {
		font-size: clamp(1rem, 14vw, 3.3rem);
		line-height: clamp(3rem, 18vw, 4.5rem);
		font-weight: 600;

		padding-bottom: 1.3rem;
	}

	h2 {
		color: var(--cc-pale-blue);
		font-size: clamp(1rem, 10vw, 1.5rem);
		font-family: "Inter", sans-serif;
		font-weight: 400;
	}

	section {
		display: flex;
		flex-wrap: nowrap;
		/* overflow-x: auto; */
		/* overflow-y: auto; */
		/* overflow: hidden; */
		gap: var(--padding);

		height: 468px;
		/* border: 2px solid red; */
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		overflow-y: hidden;
	}

	article {
		display: inline-block;
		flex: 0 0 auto;
		scroll-snap-align: start;
		background-image: linear-gradient(
			180deg,
			rgba(35, 37, 49, 0.5),
			transparent
		);
		border-radius: 1rem;
		border: 0.15rem solid var(--cc2-bg-status);
		width: 100%;
	}

	/* If the width of the viewport is ^bigger^ than this. */
	@media only screen and (min-width: 43.75rem) {
		.wrapper-projects {
			/* For debugging purposes :B */
			background-color: red;
		}
	}
</style>
