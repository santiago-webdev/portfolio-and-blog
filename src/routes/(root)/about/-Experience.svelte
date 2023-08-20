<script lang="ts">
import ShapeButton from '$lib/components/navigation/ShapeButton.svelte';
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
    panels[oldIndex].hidden = false;
    panels[index].hidden = true;
  };

  tabs.forEach((tab, i) => {
    tab.setAttribute('id', 'tab' + (i + 1)); // Add semantics
    tab.setAttribute('tabindex', '-1'); // Remove focus

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

<div id="experience">
  <div class="wrapper-experience">
    <h2 class="font-fluid-1">Experience</h2>
    <div bind:this={tabbed} class="tabbed">
      <ol bind:this={tablist} role="tablist">
        <li>
          <a aria-selected="true" role="tab" href="#section1">Currently unemployed</a>
        </li>
        <li>
          <a role="tab" href="#section2">Add job <span>+</span></a>
        </li>
      </ol>
      <div class="wrapper-content">
        <section role="tabpanel" id="section1">
          <h3>New job</h3>
          <p>You can add a new job by contacting me!</p>
        </section>
        <section role="tabpanel" id="section2">
          <h3>And still learning</h3>
          <time datetime="2022">2022 &mdash; present</time>
          <p>
            Since September 2022 I've been learning on my own. I'm currently doing web development,
            testing new technologies, and frameworks.
            <br />
            You can check my progress here:
          </p>

          <ShapeButton
            style="margin-top: 2rem"
            class="default"
            href="https://github.com/santigo-zero/"
            icon="github"
            title="Link to my GitHub profile">GitHub</ShapeButton
          >
        </section>
      </div>
    </div>
  </div>
</div>

<style>
.wrapper-experience {
  flex: 1;
  margin-inline: auto;
  gap: 1.5rem;
  display: grid;
  width: min(100% - 2rem, var(--sm));
}

.tabbed {
  display: flex;
  gap: 2rem;
}

ol {
  display: grid;
  align-content: start;
  gap: 0.4rem;
}

li a {
  border: thin var(--srf-5) solid;
  border-radius: 1rem;
  touch-action: manipulation;
}

li [aria-selected='true'] {
  background: var(--srf-5);
  border: thin var(--srf-5) solid;
  border-top-color: var(--srf-5-brd);
  border-left-color: var(--srf-5-brd);
}

li a:focus-visible {
  outline: medium var(--srf-5) solid;
}

li a:active {
  border-color: var(--text-3);
}

li,
a {
  display: block;
}

a {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
}

.wrapper-content {
  flex: 6;
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
