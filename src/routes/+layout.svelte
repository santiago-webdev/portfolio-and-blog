<!-- <script lang="ts"> -->
<!-- 	import Footer from "$lib/Footer.svelte"; -->
<!-- </script> -->

<!-- <div class="wrapper"> -->
<slot />
<!-- </div> -->
<!-- <Footer /> -->

<svelte:head>
	<link href="./reset.css" rel="stylesheet" type="text/css" />
	<link href="./global.css" rel="stylesheet" type="text/css" />
	<link href="./typography.css" rel="stylesheet" type="text/css" />

	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<script
		defer
		src="https://kit.fontawesome.com/0f56b4de7c.js"
		crossorigin="anonymous"
	></script>
</svelte:head>

<style global>
	/* .wrapper { */
	/* 	flex: 1; */
	/* } */
</style>
