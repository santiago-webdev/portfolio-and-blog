<script lang="ts">
	import { base } from '$app/paths';
	import { goto, preloadData } from '$app/navigation';
	import ListCardPost from './ListCardPost.svelte';
	import { Posts } from './store';
	import { onMount } from 'svelte';

	$: filteredPosts = $Posts.filter(post => {
		let searchTerms = `${post.description} ${post.title}`.toLowerCase();
		return searchTerms.toLowerCase().includes(lc_value);
	});

	$: if (filteredPosts.length === 1) {
		preloadData(`${base}/blog${filteredPosts[0].href}`);
	}

	const search_icon =
		'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"></path></svg>';
	const placeholderDefault = 'Search';
	const placeholderNoInput = "You haven't searched for any post yet";
	let placeholder = placeholderDefault;

	let value = '';
	let input: HTMLElement;
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

	onMount(() => {
		// TODO(santigo-zero): Add timeout before focusing
		// TODO(santigo-zero): Add hidden label for screen readers for this input
		input.focus();
	});
</script>

<div class="container">
	<h1>Blog</h1>
	<form on:submit|preventDefault={handleSubmit} autocomplete="off">
		<button aria-label="Go to selected blog" type="submit"
			>{@html search_icon}</button
		>
		<input
			{placeholder}
			bind:this={input}
			bind:value
			type="search"
			id="search"
			list="search-terms"
		/>
		<datalist id="search-terms">
			{#each filteredPosts as post}
				<option value={post.title} />
			{/each}
		</datalist>
	</form>
</div>
<br />
<ListCardPost {filteredPosts} />

<style>
	.container {
		width: 100%;
		background-color: var(--clr-background-alt);
		padding: 2rem 0;
		margin-inline: auto;
		display: grid;
		gap: 3rem;
		text-align: center;
	}

	form {
		display: grid;
		grid-template-columns: auto 1fr;
		overflow: hidden;
		background-color: transparent;
		border: var(--border-highlight-secondary);
		color: var(--clr-text-muted);
		border-radius: 1.1rem;
		width: min(100% - 1rem, var(--wide));
		margin-inline: auto;
	}

	form:focus-within {
		border-color: transparent;
		filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
			drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
		background-color: var(--clr-background-highlight-secondary);
		color: var(--clr-text);
	}

	input:-moz-placeholder,
	input::-moz-placeholder {
		opacity: 1;
	}

	input,
	button {
		font-size: clamp(1rem, 8vw, 1.9rem);
		color: inherit;
		background-color: inherit;
	}

	input {
		border: none;
		outline: none;
		padding: 0.6rem 1.3rem 0.6rem 0;
		/* padding-top: 0.6rem; */
		/* padding-bottom: 0.6rem; */
	}

	input:focus::placeholder {
		color: transparent;
	}

	button {
		display: grid;
		place-items: center;
		padding-inline: 1.3rem 0.8rem;
	}
</style>
