<script>
	// List of navigation items
	const navItems = [
		{ label: 'Home', href: '#' },
    { label: 'Projects', href: '#' },
		{ label: 'About', href: '#' },
		{ label: 'Resume', href: '#' },
		{ label: 'Contact', href: '#' },
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
	}

  nav {
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    max-width: var(--max-width);
    /* padding: var(--padding); */
    padding-inline: var(--padding-inline);
  }

  li {
    display: inline-grid; /* inline doesn't let them */
  }

  a {
    text-decoration: none;
    color: var(--cc-fg);

    /* FIXME: Padding and Margin. We manage the height of the Nav with this but it messes
* up the blank spaces to the sides of the page*/
    padding: var(--padding);
  }

  h3 a {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
  }
</style>
