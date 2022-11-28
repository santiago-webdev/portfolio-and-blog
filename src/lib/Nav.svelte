<div class="nav_container">
	<header>
		<h3><a href="/">SG</a></h3>

		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Projects</a></li>
				<li><a href="#">Resume</a></li>
			</ul>
		</nav>

		<a href="#" class="cta"><button>Contact</button></a>
	</header>
</div>

<style>
	.nav_container {
		/* Make it stick to the top of the page on scroll */
		top: 0;
		/* position: sticky; */
		position: fixed;
		width: 100%;

		/* Use this color as default value */
		background-color: var(--cc2-header);

		/* Makes it blurry and transparent */
		background-color: rgba(27, 26, 39, 0.9);
		-webkit-backdrop-filter: blur(3px);
		backdrop-filter: blur(3px);

		/* border-color: blue; */
		/* border-style: solid; */
		/* border-width: 2px; */

		font-size: 20px;

		overflow: hidden; /* FIXME: This is here just because it was bothering me in mobile */
	}

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
	}

	/* TODO(santigo-zero): Change this colors */
	/* Color used when mouse is hovering the link */
	a:hover {
		text-decoration: none;
		color: var(--cc-vanilla);
		transition: all 0.3s ease 0s;
	}

	/* Color used when mouse is clicking the element */
	a:active {
		text-decoration: none;
		color: var(--cc-vanilla-red);
		transition: none;
	}

	/* This is the normal color */
	a {
		text-decoration: none;
		color: var(--cc-fg);
		padding: 2rem 1.3rem;

		/* border-color: orange; */
		/* border-style: solid; */
		/* border-width: 1px; */

		transition: all 0.3s ease 0s;
	}

	header {
		display: flex;
		place-items: center;
		justify-content: space-between;

		/* border-color: red; */
		/* border-style: solid; */
		/* border-width: 2px; */

		margin: 0 auto;
		max-width: 50rem;
		/* padding: 1rem 0; */
	}

	h3 a {
		font-family: 'Inter', sans-serif;
		font-weight: 900;
	}

	ul {
		display: flex;
		place-items: center;

		/* Reset the list */
		/* margin: 0; */
		/* padding: 0; */

		/* border-color: white; */
		/* border-style: solid; */
		/* border-width: 1px; */

		color: var(--cc-fg);
		list-style-type: none;
	}
</style>
