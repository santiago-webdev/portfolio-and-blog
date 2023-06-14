<script lang="ts">
	import { onMount } from 'svelte';

	let tablist: HTMLUListElement;
	let tabbed: HTMLElement;

	onMount(() => {
		const tabs = Array.from(tablist?.querySelectorAll('a') || []) as HTMLElement[];
		const panels = Array.from(tabbed.querySelectorAll('[id^="section"]')) as HTMLElement[];

		// The tab switching function
		const switchTab = (oldTab: HTMLElement, newTab: HTMLElement) => {
			if (!oldTab || !newTab) return;

			newTab.focus();
			newTab.removeAttribute('tabindex'); // Make the active tab focusable by the user (Tab key)
			newTab.setAttribute('aria-selected', 'true'); // Set the selected state
			oldTab.removeAttribute('aria-selected');
			oldTab.setAttribute('tabindex', '-1');
			let index = tabs.indexOf(newTab); // Get the indices of the new and old tabs to find the correct tab panels to show and hide
			let oldIndex = tabs.indexOf(oldTab);
			panels[oldIndex].hidden = true;
			panels[index].hidden = false;
		};

		// Add semantics and remove user focusability for each tab
		tabs.forEach((tab, i) => {
			tab.setAttribute('id', 'tab' + (i + 1));
			tab.setAttribute('tabindex', '-1');

			tab.addEventListener('click', (e: MouseEvent) => {
				e.preventDefault();
				let currentTab = tablist.querySelector('[aria-selected]') as HTMLElement;
				if (e.currentTarget !== currentTab) {
					switchTab(currentTab, e.currentTarget as HTMLElement);
				}
			});

			tab.addEventListener('keydown', (e: KeyboardEvent) => {
				// Get the index of the current tab in the tabs array
				let index = tabs.indexOf(e.currentTarget as HTMLElement);
				// Work out which key the user is pressing and
				// Calculate the new tab's index where appropriate
				let dir =
					e.key === 'ArrowUp'
						? index - 1
						: e.key === 'ArrowDown'
						? index + 1
						: e.key === 'ArrowRight'
						? 'right'
						: null;

				if (dir === null) return;

				e.preventDefault();
				// If the right key is pressed, move focus to the open panel,
				// otherwise switch to the adjacent tab
				dir === 'right'
					? panels[i].focus()
					: typeof dir === 'number' && dir >= 0 && dir < tabs.length
					? switchTab(e.currentTarget as HTMLElement, tabs[dir])
					: void 0;
			});
		});

		// Add tab panel semantics and hide them all
		panels.forEach((panel, i) => {
			panel.setAttribute('tabindex', '-1');
			panel.setAttribute('aria-labelledby', tabs[i].id);
			panel.hidden = true;
		});

		// Initially activate the second tab and reveal the corresponding tab panel
		if (tabs.length > 1) {
			tabs[1].removeAttribute('tabindex');
			panels[1].hidden = false;
		}
	});
</script>

<div class="wrapper-experience tpl">
	<h2 class="font-60">What I'm up to today</h2>
	<div bind:this={tabbed} class="tabbed">
		<ol class="pick" bind:this={tablist} role="tablist">
			<li><a role="tab" href="#section1">Add job <span>+</span></a></li>
			<li><a aria-selected="true" role="tab" href="#section2">Unemployed</a></li>
		</ol>
		<div class="wrapper-content">
			<section role="tabpanel" id="section1">
				<h3>New job</h3>
				<p>You can add a new job by contacting me!</p>
			</section>
			<section role="tabpanel" id="section2">
				<div style="display: flex; gap: 0.5ch" class="position">
					<h3>And still learning</h3>
				</div>
				<div style="display: flex; gap: 0.5ch" class="timeframe font-50">
					<time datetime="2022">2022 &mdash; present</time>
				</div>
				<p>
					Since 2022 I've been learning on my own. I'm currently doing web development, testing new
					technologies.
				</p>
			</section>
		</div>
	</div>
</div>

<style>
	.wrapper-experience {
		--bg: var(--clr-20);
		--brd: var(--clr-25);

		width: min(96%, var(--base));
		margin-inline: auto;
		padding: 1.6rem;
		display: grid;
		gap: 2rem;
	}

	.tabbed {
		display: flex;
		gap: 2rem;
	}

	ol {
		flex: 2;
		display: grid;
		align-content: start;
		gap: 0.4rem;
	}

	li,
	a {
		display: block;
	}

	a {
		display: flex;
		padding: 0.6rem 1.8rem;
		justify-content: space-between;
	}

	.wrapper-content {
		flex: 6;
	}

	section {
		max-width: var(--base);
	}

	section > * + * {
		margin-block-start: 0.6em;
	}

	@media (max-width: 64rem) {
		.tabbed {
			flex-direction: column;
		}

		li,
		a {
			display: block;
		}
	}
</style>
