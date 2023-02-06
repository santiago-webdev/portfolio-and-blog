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
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1200 1200"><path fill="currentColor" d="M672.633 0C389.326 0 159.634 229.652 159.634 512.958c0 100.662 28.986 194.563 79.083 273.79c-.368.16-.729.305-1.098.471l-223.21 223.172L204.019 1200l231.249-231.288c-.069-.326-.162-.651-.234-.979c71.035 37.19 151.865 58.224 237.6 58.224c283.309 0 512.959-229.69 512.959-512.997C1185.59 229.652 955.939 0 672.633 0zm0 227.877c157.441 0 285.041 127.639 285.041 285.081s-127.6 285.081-285.041 285.081c-157.442 0-285.082-127.639-285.082-285.081S515.19 227.877 672.633 227.877z"/></svg>';
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
					bind:this={input}
					bind:value
					type="search"
					id="search"
					list="search-terms"
				/>
				<button aria-label="Navigate to selected blog article" type="submit"
					>Read</button
				>
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
		font-family: var(--ff-circle);
		font-weight: bold;
		color: var(--clr-pale-50)
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
		background-color: #191A21;
		padding: 1rem;
		gap: 1rem;
		border-radius: 0.6rem;
		/* width: min(100%, var(--wide) / 1.6); */
		width: 100%;
		margin-inline: auto;
		color: var(--clr-text);
		/* outline: 3px red solid; */
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
