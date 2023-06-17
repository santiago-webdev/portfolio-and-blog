<script lang="ts">
	import { Posts } from '$lib/components/blog/store';
</script>

<main>
	<header>
		<hgroup>
			<h1 class="font-90">Index</h1>
			<p>This is the full list of all the blog posts I've written.</p>
		</hgroup>
	</header>
	<ul>
		{#each $Posts as post}
			<li class="generic-li font-20">
				<a class="internal-link" href={post.href}>{post.title}</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	header {
		border-bottom-right-radius: 1.6rem;
		border-bottom-left-radius: 1.6rem;
		padding-bottom: 1.4rem;
		margin-bottom: 1.4rem;
		background: var(--clr-25);
	}

	hgroup {
		width: min(100% - 2.2rem, var(--base));
		text-align: center;
		margin-inline: auto;
	}

	hgroup > * + * {
		margin-block-start: 1em;
	}

	ul {
		width: min(100% - 2.2rem, var(--base));
		margin-inline: auto;
		background-color: var(--clr-35);
		border: 1px var(--clr-65) solid;
		border-radius: 12px;
		padding: 1rem;
	}
</style>
