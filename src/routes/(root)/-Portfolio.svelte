<div class="wrapper-portfolio">
	<div id="portfolio" class="portfolio">
		<section>
			<span class="font-10"> Featured Project &mdash; </span>
			<h2>Featured Project</h2>
			<p>
				Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
				cupidatat.
			</p>
		</section>
		<div class="img-wrapper">
			<img loading="lazy" src="/portfolio/zap-website.webp" alt="" />
		</div>
	</div>
</div>

<style>
	.wrapper-portfolio {
		background-color: var(--clr-05);
		color: var(--clr-200);
	}

	.portfolio {
		display: flex;
		width: min(92%, var(--md));
		min-height: 100vh;
		margin-inline: auto;
		padding: 3rem 0;
		gap: 3rem;
		place-items: center;
	}

	span {
		display: flex;
		gap: 0.4rem;
		color: var(--clr-95);
		font-variation-settings: 'wght' 800;
	}

	.img-wrapper {
		flex: 1;
		max-height: 40rem;
		overflow: hidden;
		border-radius: 1rem;
		border: 1px solid var(--clr-25);
	}

	img {
		max-inline-size: 100%;
		overflow: hidden;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin: 2rem;
	}

	p {
		color: var(--clr-80);
		max-width: 38ch;
	}

	@media screen and (min-height: 80rem) {
		.portfolio {
			min-height: 0;
		}
	}
</style>
