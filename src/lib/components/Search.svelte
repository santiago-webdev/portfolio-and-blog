<script lang="ts">
	import { base } from '$app/paths';
	import { goto, preloadData } from '$app/navigation';
	import Card from '$lib/components/Card.svelte';
	import { Posts } from '$lib/stores/search';

	$: filteredPosts = $Posts.filter(post => {
		let searchTerms = `${post.description} ${post.title}`.toLowerCase();
		return searchTerms.toLowerCase().includes(lc_value);
	});

	$: if (filteredPosts.length === 1) {
		preloadData(`${base}/blog${filteredPosts[0].href}`);
	}

	const placeholderDefault = 'Search';
	const placeholderNoInput = "You haven't searched for any post yet";
	let placeholder = placeholderDefault;

	let value = '';
	$: lc_value = value.toLowerCase();

	function handleSubmit() {
		if (value.length === 0) {
			placeholder = placeholderNoInput;

			setTimeout(() => {
				placeholder = placeholderDefault;
			}, 3000);

			return;
		}

		goto(`${base}/blog${filteredPosts[0].href}`);
	}
</script>

<!-- <section role="complementary" style:display={value.length === 0 ? "none" : ""}> -->
<section role="complementary">
	<form on:submit|preventDefault={handleSubmit} autocomplete="off">
		<label for="search">TODO, filter</label>
		<div class="search-bar">
			<input
				{placeholder}
				bind:value
				type="search"
				id="search"
				list="search-terms"
			/>
			<button type="submit">Read</button>
			<datalist id="search-terms">
				{#each filteredPosts as post}
					<option value={post.title} />
				{/each}
			</datalist>
		</div>
	</form>
	<br />
	<ul>
		{#each filteredPosts as post}
			<li>
				<Card {post} />
			</li>
		{/each}
	</ul>
</section>

<style>
	section[role='complementary'] {
		display: grid;
		place-content: center;

		width: calc(100% - 1rem);
		margin-inline: auto;
	}

	form {
		display: grid;
		border: 0.12rem solid var(--cc-bg3);
		background-color: var(--cc-bg2);
		padding: 1rem;
		gap: 1rem;
		border-radius: 0.6rem;

		width: min(50rem, 100%);
		margin-inline: auto;
	}

	label {
		text-indent: 0.8rem;
	}

	input {
		/* background-color: var(--cc-bg); */
		background-color: white;
		border: none;
		border-radius: 0.4rem;
		padding: 0.3rem;
		text-indent: 0.3rem;
		font-family: var(--font-family--condensed);
		width: 100%;
	}

	input:focus::placeholder {
		color: transparent;
	}

	input:focus,
	button {
		outline: 0.13rem solid var(--cc-bg3);
	}

	.search-bar {
		display: flex;
		flex-direction: row;
		gap: 0.6rem;
	}

	button {
		border-radius: 0.4rem;
		background-color: var(--cc-bg3);
		padding-inline: 1.5rem;
	}

	label,
	input,
	button {
		font-size: clamp(1rem, 8vw, 1.6rem);
		font-family: var(--font-family--condensed);
	}

	label {
		font-weight: bold;
	}

	ul {
		gap: 0.8rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
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
		outline: 0.2rem solid var(--cc-bg3);
	}

	li:hover {
		/* box-shadow: 0 12px 12px rgb(0 0 0 / 0.1); */
		outline: 0.2rem solid var(--cc-bg3);
	}

	@supports (grid-template-rows: masonry) {
		ul {
			grid-template-rows: masonry;
		}
	}
</style>
