<script lang="ts">
	import type { Post } from '$lib/utils/utils';
	import { base } from '$app/paths';

	export let filteredPosts: Array<Post>;
</script>

<section role="complementary">
	<ul class="wider">
		{#each filteredPosts as post}
			<li>
				<a href="{base}/blog{post.href}">
					<article>
						<h3>{post.title}</h3>
						<i>{post.date}</i>
						<p>{post.description}</p>
					</article>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		padding: 2rem 0;
		display: grid;
		gap: var(--gap);
		grid-template-columns: repeat(auto-fill, minmax(min(23rem, 100%), 1fr));
		margin-inline: auto;
	}

	li {
		border-radius: 0.6rem;
	}

	ul:hover li:first-child {
		outline: none;
	}

	/* li:first-child, */
	/* li:first-child:hover, */
	/* ul:hover li:first-child:hover { */
	/* 	outline: 0.2rem solid var(--accent-orange); */
	/* } */

	/* li:hover { */
	/* 	outline: 0.2rem solid var(--accent-orange); */
	/* } */

	@supports (grid-template-rows: masonry) {
		ul {
			grid-template-rows: masonry;
		}
	}

	article {
		background-color: var(--clr-background-alt);
		padding: 1rem;
		border-radius: 0.6rem;
		height: 100%;
		color: var(--clr-text);
	}

	a,
	p {
		color: inherit;
	}

	a:focus article {
		color: var(--clr-background-alt);
		background-color: var(--accent-orange);
	}
</style>
