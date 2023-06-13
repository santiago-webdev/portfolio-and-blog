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

		// Initially activate the first tab and reveal the first tab panel
		if (tabs.length > 0) {
			tabs[0].removeAttribute('tabindex');
			panels[0].hidden = false;
		}
	});
</script>

<div class="wrapper-experience tpl">
	<h2 class="font-50">Experience</h2>
	<div bind:this={tabbed} class="tabbed">
		<ol class="pick" bind:this={tablist} role="tablist">
			<li><a aria-selected="true" role="tab" href="#section1">Job 1</a></li>
			<li><a role="tab" href="#section2">Job 2</a></li>
			<li><a role="tab" href="#section3">Job 3</a></li>
			<li><a role="tab" href="#section4">Job 4</a></li>
		</ol>
		<div class="wrapper-content">
			<section role="tabpanel" id="section1">
				<h3>Latest job</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra
					ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. Nam luctus, enim in
					interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus.
					Praesent non odio bibendum magna bibendum accumsan.
				</p>
			</section>
			<section role="tabpanel" id="section2">
				<h2>Section 2</h2>
				<p>
					Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna
					non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi
					tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id,
					condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet
					ut rhoncus at, sodales consequat tellus.
				</p>
			</section>
			<section role="tabpanel" id="section3">
				<h2>Section 3</h2>
				<p>
					Phasellus ac tristique orci. Nulla maximus justo nec dignissim consequat. Sed vehicula
					diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem
					turpis, accumsan consequat consectetur gravida, pellentesque ac ante. Aliquam in commodo
					ligula, sit amet mollis neque. Vestibulum at facilisis massa.
				</p>
			</section>
			<section role="tabpanel" id="section4">
				<h2>Section 4</h2>
				<p>
					Nam luctus, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit
					amet lectus. Praesent non odio bibendum magna bibendum accumsan. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat
					imperdiet velit, nec laoreet enim lacus a velit.
				</p>
			</section>
		</div>
	</div>
</div>

<style>
	.wrapper-experience {
		--bg: var(--clr-20);
		--brd: var(--clr-25);

		width: min(92%, var(--base));
		margin-inline: auto;
		padding: 2rem;
		display: grid;
		gap: 2rem;
	}

	.tabbed {
		display: flex;
		gap: 1rem;
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

	ol a {
		padding: 1rem;
	}

	.wrapper-content {
		flex: 6;
	}

	section {
		max-width: var(--base);
		margin-block-start: 1em;
		margin-inline: auto;
		padding: 1rem;
	}

	section > * + * {
		margin-block-start: 1em;
	}

	@media (max-width: 64rem) {
		li,
		a {
			display: block;
		}

		ol [aria-selected]::after {
			content: '\0020⬅';
		}
	}
</style>
