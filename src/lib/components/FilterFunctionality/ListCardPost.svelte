<script lang="ts">
	import type { Post } from '$lib/utils/utils';
	import CardPost from './CardPost.svelte';

	export let filteredPosts: Array<Post>;
</script>

<section role="complementary">
	<ul class="wide">
		{#each filteredPosts as post}
			<li>
				<CardPost {post} />
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
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

	li:first-child,
	li:first-child:hover,
	ul:hover li:first-child:hover {
		outline: 0.2rem solid brown;
	}

	li:hover {
		/* box-shadow: 0 12px 12px rgb(0 0 0 / 0.1); */
		outline: 0.2rem solid brown;
	}

	@supports (grid-template-rows: masonry) {
		ul {
			grid-template-rows: masonry;
		}
	}
</style>
