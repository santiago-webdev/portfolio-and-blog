<script>
	import Nav from "$lib/Nav.svelte";

	import Home from "$lib/components/Home.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import About from "$lib/components/About.svelte";
	import Contact from "$lib/components/Contact.svelte";
</script>

<Nav />

<Home />
<Projects />
<About />
<Contact />

<svelte:head>
	<title>Santiago Gonzalez - Portfolio</title>
</svelte:head>
