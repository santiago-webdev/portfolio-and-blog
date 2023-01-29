<script lang="ts">
	import { page } from '$app/stores';

	export let navItems = [{ label: '', href: `` }];

	function matchBaseRoute(navItemLink: string, currentLink: string) {
		if (navItemLink === '/') {
			if (navItemLink === currentLink) {
				return true;
			} else {
				return false;
			}
		}

		return currentLink.match(navItemLink) !== null;
	}
</script>

<ul>
	{#each navItems as item}
		<li>
			<a
				href={item.href}
				class:activeRoute={matchBaseRoute(
					item.href,
					$page.url.pathname.toString()
				)}>{item.label}</a
			>
		</li>
	{/each}
</ul>

<style>
	ul {
		gap: 1rem;
		display: flex;
		flex-direction: row;
		place-items: center;
	}

	.activeRoute {
		text-decoration: underline;
		text-decoration-thickness: 0.2ch;
		text-decoration-color: rgb(157, 161, 180);
	}

	/* ul { */
	/* 	place-content: center; */
	/* 	place-items: center; */
	/* 	flex-direction: column; */
	/* } */
</style>
