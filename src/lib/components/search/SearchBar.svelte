<script lang="ts">
	import { FilteredPosts, FilterValue } from './store';
	import { searchHandler } from './utils';
	import { base } from '$app/paths';
	import { goto, preloadData } from '$app/navigation';

	$: if ($FilteredPosts.length === 1) preloadData(`${base}/blog${$FilteredPosts[0].href}`);

	const placeholderDefault = 'Search';
	const placeholderNoInput = "You haven't searched for any post yet";

	export let placeholder = placeholderDefault;
	let value = '';

	async function handleSubmit() {
		if (value.length === 0) {
			placeholder = placeholderNoInput;

			setTimeout(() => {
				placeholder = placeholderDefault;
			}, 1000);
			return;
		}

		await goto(`${base}/blog${$FilteredPosts[0].href}`);
	}

	FilterValue.subscribe(() => {
		value = $FilterValue;
	});
</script>

<form class="font-30" on:submit|preventDefault={handleSubmit}>
	<button aria-label="Go to selected blog" type="submit">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<g
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			>
				<circle cx="11" cy="11" r="8" />
				<path d="m21 21l-4.35-4.35" />
			</g>
		</svg>
	</button>

	<input
		{placeholder}
		aria-keyshortcuts="Control+K"
		bind:value
		on:input={() => FilterValue.set(searchHandler(value))}
		on:focus|once={() => (placeholder = placeholderDefault)}
		type="search"
		id="search"
		list="search-terms"
		autocomplete="off"
	/>
	<kbd>Ctrl K</kbd>
</form>

<style>
	form {
		display: flex;
		place-items: center;
		overflow: hidden;
		margin-inline: auto;
		position: relative;
		width: min(100% - 1rem, var(--sm));

		background-color: var(--clr-40);
		border: 1px solid var(--clr-40);
		border-top-color: var(--clr-45);
		border-left-color: var(--clr-45);
		box-shadow: 0 4px 16px 0 rgba(0 0 0 / 0.1);

		transition: background-color 50ms, border 80ms, box-shadow 300ms;

		padding: 0.4rem 0.8rem;
		gap: 0.2rem;
		border-radius: 1rem;
	}

	form > *:not(kbd) {
		font-size: inherit;
		line-height: inherit;
	}

	input:-moz-placeholder,
	input::-moz-placeholder {
		opacity: 1;
	}

	input[type='search']::-ms-clear {
		display: none;
	}

	input[type='search']::-webkit-search-cancel-button {
		display: none;
	}

	input,
	input::placeholder,
	button {
		background-color: inherit;
	}

	input {
		border: none;
		outline: none;
		width: 100%;
		padding: 0.2rem 0;
	}

	input::placeholder,
	form button {
		color: var(--clr-85);
	}

	input:focus::placeholder {
		color: transparent;
	}

	form:focus-within button {
		color: inherit;
		background-color: inherit;
	}

	button {
		display: grid;
		place-items: center;
		padding-inline: 0.8rem;
	}

	kbd {
		position: absolute;
		right: 1.3rem;
		font-size: 60%;
	}
</style>
