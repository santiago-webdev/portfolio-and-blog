<script>
import { base } from '$app/paths';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
import { FilteredProjects } from '$lib/components/projects/store';
</script>

<div class="wrapper-portfolio">
  <div id="portfolio">
    <ol>
      <li>
        <header>
          <h2 class="font-fluid-2">Projects</h2>
          <p class="font-h3">
            I've contributed to FOSS as well as created some projects of my own. You can find all of
            my projects <ShapeAnchor href="{base}/portfolio">tracked here</ShapeAnchor>.
          </p>
        </header>
      </li>
      <li>
        <a href={$FilteredProjects[0].link.toString()} target="_blank" rel="external">
          <h3>{$FilteredProjects[0].name}<iconify-icon icon="lucide:external-link" /></h3>
          <p>{$FilteredProjects[0].short_description}</p>
        </a>
      </li>
      <li>
        <a href={$FilteredProjects[1].link.toString()} target="_blank" rel="external">
          <h3>{$FilteredProjects[1].name}<iconify-icon icon="lucide:external-link" /></h3>
          <p>{$FilteredProjects[1].short_description}</p>
        </a>
      </li>
      <li>
        <a href="/" target="_blank" rel="external">
          <h3>Project<iconify-icon icon="lucide:external-link" /></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </a>
      </li>
      <li>
        <a href="/" target="_blank" rel="external">
          <h3>Project<iconify-icon icon="lucide:external-link" /></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </a>
      </li>
    </ol>
  </div>
</div>

<style>
a {
  overflow: hidden;
  min-width: 20ch;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: clamp(1rem, 8vw + 1rem, 1.5rem);
}

p {
  margin-top: 0.5rem;
}

h3 {
  display: flex;
  place-items: center;
  gap: 0.5rem;
}

ol {
  display: grid;
  padding: 2rem 0;
  margin-inline: auto;
  width: min(100% - 2rem, var(--lg));
  gap: 1.5rem;
  grid-auto-columns: 1fr;
  grid-template-areas:
    'one'
    'two'
    'three'
    'four'
    'five';
}

li:first-child {
  grid-area: one;
  padding: clamp(1rem, 8vw + 1rem, 1.5rem);
}

li:nth-child(2) {
  grid-area: two;
  background: var(--srf-4);
  border: 0px var(--srf-4-brd) solid;
}

li:nth-child(3) {
  grid-area: three;
  background: var(--srf-3);
  border: 0px var(--srf-3-brd) solid;
}

li:nth-child(4) {
  grid-area: four;
  background: var(--srf-2);
  border: 0px var(--srf-2-brd) solid;
}

li:last-child {
  grid-area: five;
  background: var(--srf-3);
  border: 0px var(--srf-3-brd) solid;
}

li:nth-child(2),
li:nth-child(3),
li:nth-child(4),
li:last-child {
  border-radius: 1rem;
  border-width: 1px 0 0 1px;
  transition: scale 100ms ease-in-out, border-color 200ms ease-in-out;
}

@media (hover: hover) {
  li:nth-child(2):hover,
  li:nth-child(3):hover,
  li:nth-child(4):hover,
  li:last-child:hover {
    scale: 1.016;
    border-color: none;
    outline: 2px var(--clr-purple-mauve) solid;
  }
}

@media screen and (min-width: 64rem) {
  ol {
    grid-template-areas:
      'one two three'
      'one two three'
      'five four three';
  }

  .wrapper-portfolio {
    display: flex;
    place-items: center;
    min-height: 75vh;
  }
}
</style>
