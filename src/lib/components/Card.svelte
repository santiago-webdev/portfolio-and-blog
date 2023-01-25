<script lang="ts">
	import { base } from '$app/paths';
	import type { Post } from '$lib/utils/utils';

	export let post: Post;
</script>

<a href="{base}/blog{post.href}">
	<article>
		<h3>{post.title}</h3>
		<i>{post.date}</i>
		<p>{post.description}</p>
	</article>
</a>

<style>
	article {
		background-color: var(--cc-bg2);
		padding: 1rem;
		border-radius: 0.6rem;
		height: 100%;
	}

	a:focus article {
		background-color: var(--cc-bg3);
	}
</style>
