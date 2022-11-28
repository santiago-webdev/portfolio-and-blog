<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<script>
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';

	import Home from './Home.svelte';
</script>

<Nav />
<Home />
<Footer />
<!-- <h1>Welcome to SvelteKit</h1> -->

<svelte:head>
	<title>Santiago Gonzalez - Portfolio</title>
	<!-- Fonts -->
	<style>
		@import url('https://fonts.cdnfonts.com/css/basier');
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');
	</style>
	<!-- EOL Fonts -->
</svelte:head>
