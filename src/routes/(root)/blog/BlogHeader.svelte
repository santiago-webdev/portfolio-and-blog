<script lang="ts">
	import { Posts } from '$lib/components/search/store';
</script>

<div class="wrapper-blog-header">
	<h1>Blog</h1>
	<p>
		{$Posts.length} articles about <strong>Linux</strong>,
		<strong>web technologies</strong>, and <strong>development</strong>. Follow my journey to become
		a front-end developer.
	</p>
</div>

<style>
	h1,
	p {
		text-align: center;
	}

	p {
		width: min(33ch, 100%);
		margin-inline: auto;
		text-align: center;
	}

	.wrapper-blog-header {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		width: min(92%, var(--base));
		margin-inline: auto;
	}
</style>
