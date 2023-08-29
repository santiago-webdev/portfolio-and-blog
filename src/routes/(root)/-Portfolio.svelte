<script>
import {
  FilteredProjects,
  currentGroupOfProjects,
  getCategoryInfo
} from '$lib/components/projects/store';

import SmallShapeButton from '$lib/components/navigation/SmallShapeButton.svelte';
import { base } from '$app/paths';
</script>

<div class="wrapper-portfolio">
  <div id="portfolio">
    <ol>
      <li id="presentation">
        <header>
          <h2 class="font-fluid-1">
            {getCategoryInfo($currentGroupOfProjects).label} Projects
          </h2>
          <p>
            {getCategoryInfo($currentGroupOfProjects).description}.
          </p>
        </header>

        <p>
          Most of my project contributions are <abbr
            title="Free and Open Source
              Software">FOSS</abbr
          >.
        </p>
      </li>
      <li id="first-project">
        <a href={$FilteredProjects[0].link.toString()} target="_blank" rel="external">
          <h3>{$FilteredProjects[0].name}</h3>
          <p>{$FilteredProjects[0].short_description}</p>
        </a>
      </li>
      <li id="second-project">
        <a href={$FilteredProjects[1].link.toString()} target="_blank" rel="external">
          <h3>{$FilteredProjects[1].name}</h3>
          <p>{$FilteredProjects[1].short_description}</p>
        </a>
      </li>
      <li id="third-project">
        <a href="{base}/#portfolio">
          <h3>More projects coming soon</h3>
          <p>I just need time :P</p>
        </a>
      </li>
      <li id="completelist">
        <div>
          <h3>And there's more</h3>
          <p>Most of them will have a case study, live preview and code available</p>
        </div>
        <div>
          <SmallShapeButton href="{base}/portfolio" class="default">Complete list</SmallShapeButton>
        </div>
      </li>
    </ol>
  </div>
</div>

<style>
.wrapper-portfolio {
  /* background: orange; */
  padding: 6rem 0;
}

ol {
  display: grid;
  margin-inline: auto;
  gap: 1rem;
  width: min(100% - 2rem, var(--base));
  grid-auto-rows: 1fr;
  grid-template-areas:
    'presentation'
    'first'
    'second'
    'third'
    'completelist';
}

li {
  display: grid;
  place-items: start;
}

li a {
  padding: 1.5rem;
  width: 100%;
  height: 100%;
}

li#presentation {
  grid-area: presentation;
  padding: 1.5rem;
  display: grid;
}

li#first-project,
li#second-project,
li#third-project,
li#completelist {
  background: var(--srf-3);
  border: thin var(--srf-3) solid;
  border-top-color: var(--srf-3-brd);
  border-left-color: var(--srf-3-brd);
  border-radius: 14px;
}

li#first-project {
  grid-area: first;
}

li#second-project {
  grid-area: second;
}

li#third-project {
  grid-area: third;
}

li#completelist {
  grid-area: completelist;
  padding: 1.5rem;
}

li#completelist > * + * {
  margin-top: 1.5rem;
  display: grid;
  place-items: start;
  gap: 0.25rem;
}

@media screen and (min-width: 64rem) {
  ol {
    grid-template-areas:
      'presentation presentation first'
      'third second first'
      'third second completelist';
  }
}
</style>
