<script lang="ts">
	import '../reset.css';
</script>

<div class="wrapper">
	<slot />
</div>

<style global>
	:root {
		--cc-fg: #e8e8e8;
		--cc-bg: #16171d;
		--cc-vanilla: #f3e5ab;
		--cc-vanilla-red: #f38fa9;

		--cc2-bg: #1b1a27;
		--cc2-bg2: #232132;
		--cc2-fg: #f9f8ff;

		--cc2-header: #2b293c;

		--cc2-bg-status: #363448;
		--cc2-fg-status: #7c7b8b;

		--cc3-fg: #c3c3c8;
		--cc4-fg: #9da1b4;

		--max-width: 60rem;
    --padding: 1.3rem;
    --padding-inline: 0.6rem;
	}

	.wrapper {
		background-color: var(--cc-bg);
		color: var(--cc-fg);
	}

	h1 {
		font-family: 'Basier Circle', sans-serif;
	}

	::selection {
		color: #8ff3d9;
		background-color: var(--cc-vanilla-red);
	}

	html {
		font-family: 'Basier Circle', sans-serif;
	}
</style>
