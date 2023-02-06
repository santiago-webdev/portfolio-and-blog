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
		input.focus();
	});
</script>

<div class="wrapper">
	<div class="container">
		<h1>Blog</h1>
		<form on:submit|preventDefault={handleSubmit} autocomplete="off">
			<label for="search">Search for a blog post</label>
			<div class="search-bar">
				<input
					{placeholder}
					bind:this={input}
					bind:value
					type="search"
					id="search"
					list="search-terms"
				/>
				<button aria-label="Navigate to selected blog article" type="submit" > {@html search_icon} </button>
			</div>
		</form>
	</div>
	<datalist id="search-terms">
		{#each filteredPosts as post}
			<option value={post.title} />
		{/each}
	</datalist>
	<br />
</div>
<br />
<ListCardPost {filteredPosts} />

<style>
	h1 {
		font-weight: bold;
	}

	.wrapper {
		width: 100%;
		background-color: var(--clr-background-alt);
		padding: 2rem 0;
	}

	.container {
		width: min(100%, var(--wide));
		margin-inline: auto;
		display: grid;
		gap: 3rem;
		/* place-items: left; */
		text-align: center;
	}

	form {
		text-align: left;
		display: grid;
		border: 0.12rem solid var(--clr-border-background);
		background-color: #191a21;
		padding: 1rem;
		gap: 1rem;
		border-radius: 0.6rem;
		/* width: min(100%, var(--wide) / 1.6); */
		width: 100%;
		margin-inline: auto;
		color: var(--clr-subtitle);
	}

	label {
		text-indent: 0.8rem;
	}

	.search-bar {
		background-color: red;
	}

	input {
		border: none;
		border-radius: 0.4rem;
		padding: 0.3rem;
		text-indent: 0.3rem;
		width: 100%;
	}

	input:focus::placeholder {
		color: transparent;
	}

	/* input:focus, */
	/* button { */
	/* 	outline: 0.13rem solid blue; */
	/* } */

	.search-bar {
		display: flex;
		flex-direction: row;
		gap: 0.6rem;
	}

	button {
		display: grid;
		place-items: center;
		border-radius: 0.4rem;
		padding-inline: 1.5rem;
	}

	label,
	input,
	button {
		font-size: clamp(1rem, 8vw, 1.6rem);
	}
</style>
