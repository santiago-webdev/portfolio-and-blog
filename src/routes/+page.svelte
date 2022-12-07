<script>
	import Nav from "$lib/Nav.svelte";

	import Home from "./Home.svelte";
	import Projects from "./Projects.svelte";
	import About from "./About.svelte";
	import Contact from "./Contact.svelte";
</script>

<Nav />
<Home />
<Projects />
<About />
<Contact />

<svelte:head>
	<title>Santiago Gonzalez - Portfolio</title>

	<link href="./reset.css" rel="stylesheet" type="text/css" />
	<link href="./global.css" rel="stylesheet" type="text/css" />
	<link href="./typography.css" rel="stylesheet" type="text/css" />

	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
