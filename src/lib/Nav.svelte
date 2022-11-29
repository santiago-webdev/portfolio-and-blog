<script>
	// List of navigation items
	const navItems = [
		{ label: 'Home', href: '#' },
		{ label: 'Projects', href: '#' },
		{ label: 'About', href: '#' },
		{ label: 'Resume', href: '#' },
		{ label: 'Contact', href: '#' }
	];
</script>

<div class="wrapper-nav">
	<nav>
		<h3><a href="/">SG</a></h3>
		<ol>
			{#each navItems as item}
				<li>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ol>
	</nav>
</div>

<style>
	.wrapper-nav {
		position: fixed;
		width: 100%;

		/* Makes it blurry and transparent */
		background-color: rgba(27, 26, 39, 0.9);
		-webkit-backdrop-filter: blur(3px);
		backdrop-filter: blur(3px);

		font-size: 20px;
		font-family: 'Basier Square', sans-serif;
	}

	nav {
		display: flex;
		margin: 0 auto;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		max-width: var(--content-width);
		/* padding: var(--padding); */
		padding-inline: var(--padding-inline);
		height: 100px;

		/* border-color: blue; */
		/* border-style: solid; */
	}

	ol {
		gap: 2rem;
		display: flex;
		list-style: none;
		padding: 1rem 0 1rem 1rem;
	}

	a {
		text-decoration: none;
		color: var(--cc-fg);

		/* padding: 0 var(--padding); */
	}

	a:hover {
		color: var(--cc4-fg);
	}

	h3 a {
		font-family: 'Inter', sans-serif;
		font-weight: 800;
	}
</style>
