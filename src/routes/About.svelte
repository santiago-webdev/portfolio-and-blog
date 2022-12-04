<div id="about" class="wrapper-about">
	<header>
		<aside>
			<h2>About Me</h2>
			<p>
				I'm Santiago Gonzalez, a web developer and Linux enthusiast, I like
				creating minimal and clean interfaces but I also like brutalism and
				experimenting with web technologies, here's a few of the technologies
				that I have used:
			</p>
		</aside>
		<section>
			<span class="know"> Docker/Podman </span>
			<span class="know"> SQL | MySQL SQLite MariaDB </span>
			<span class="know"> Python </span>
			<span class="know"> Lua </span>
			<span class="know"> Java </span>
			<span class="know"> HTML </span>
			<span class="know"> HTML </span>
			<span class="know"> CSS </span>
			<span class="know"> GNU Linux </span>
			<span class="know"> JS/TS | Svelte </span>
		</section>
	</header>
</div>

<style>
	.wrapper-about {
		display: grid;
		place-items: center;
		background-color: var(--cc2-bg);

		min-height: 100vh;
	}

	header {
		margin-inline: auto;
		width: min(100% - var(--padding), var(--max-content-width));
		display: grid;
		grid-template-columns: fit-content(33ch) minmax(min(50vw, 30ch), 1fr);

		padding: 6rem 0; /* Put a little bit of blank-space between Nav and Projects */
	}

	section {
		display: grid;
		/*   flex-wrap: wrap; */
		/* place-contents: center; */
		/* grid-template-columns: repeat(9, 1fr); */
		gap: 1rem;
		padding: 0;
		margin: 0;
	}

	h2 {
		font-size: clamp(1rem, 10vw, 2.3rem);
		font-weight: 300;
	}

	p {
		font-size: 1.2rem;
		font-weight: 400;
	}
</style>
