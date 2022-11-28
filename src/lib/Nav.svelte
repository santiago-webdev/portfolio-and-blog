<script>
 // List of navigation items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Resume", href: "#" },
  ];
</script>

<div class="nav_container">
	<header>
		<h3><a href="/">SG</a></h3>

		<nav>
			<ul>
        {#each navItems as item}
          <li>
            <a href={item.href}>{item.label}</a>
          </li>
        {/each}
			</ul>
		</nav>

		<a href="#" class="cta"><button>Contact</button></a>
	</header>
</div>

<style>
	.nav_container {
		position: fixed;
		width: 100%;

		/* Makes it blurry and transparent */
		background-color: rgba(27, 26, 39, 0.9);
		-webkit-backdrop-filter: blur(3px);
		backdrop-filter: blur(3px);

		/* border-color: blue; */
		/* border-style: solid; */
		/* border-width: 2px; */

		font-size: 20px;
	}

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
	}

	a:hover {
		text-decoration: none;
		color: var(--cc-vanilla);
	}

	a:active {
		color: var(--cc-vanilla-red);
		transition: none;
	}

	/* This is the normal color */
	a {
		text-decoration: none;
		color: var(--cc-fg);
		padding: 2rem 1.3rem;
    /* padding: var(--padding); */

		transition: all 0.3s ease 0s;
	}

	header {
		display: flex;
		place-items: center;
		justify-content: space-between;

		margin: 0 auto;
		max-width: var(--max-width);
	}

	h3 a {
		font-family: 'Inter', sans-serif;
		font-weight: 900;
	}

	ul {
		display: flex;
		place-items: center;

		color: var(--cc-fg);
		list-style-type: none;
	}
</style>
