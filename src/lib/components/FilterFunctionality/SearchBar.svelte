<script lang="ts">
	import { base } from '$app/paths';
	import { goto, preloadData } from '$app/navigation';
	import ListCardPost from './ListCardPost.svelte';
	import { Posts } from './store';

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
<ListCardPost {filteredPosts} />

<style>
	form {
		display: grid;
		border: 0.12rem solid var(--cc-bg3);
		padding: 1rem;
		gap: 1rem;
		border-radius: 0.6rem;
		background-color: limegreen;
		width: min(100%, var(--wide) / 2);
		margin-inline: auto;
	}

	label {
		font-weight: bold;
		text-indent: 0.8rem;
	}

	input {
		border: none;
		border-radius: 0.4rem;
		padding: 0.3rem;
		text-indent: 0.3rem;
		font-family: var(--ff--cnds);
		background-color: crimson;
		width: 100%;
	}

	input:focus::placeholder {
		color: transparent;
	}

	input:focus,
	button {
		outline: 0.13rem solid blue;
	}

	.search-bar {
		display: flex;
		flex-direction: row;
		gap: 0.6rem;
	}

	button {
		background-color: lightgray;
		border-radius: 0.4rem;
		padding-inline: 1.5rem;
	}

	label,
	input,
	button {
		font-size: clamp(1rem, 8vw, 1.6rem);
		font-family: var(--ff--cnds);
	}
</style>
