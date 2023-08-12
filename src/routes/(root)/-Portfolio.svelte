<script>
import { base } from '$app/paths';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
import { FilteredProjects } from '$lib/components/projects/store';
</script>

<div class="wrapper-portfolio">
  <div id="portfolio">
    <div class="header-projects">
      <h2 class="font-fluid-2">Projects</h2>
      <p class="font-h3">
        I've contributed to FOSS as well as created some projects of my own. You can find all of my
        projects <ShapeAnchor href="{base}/portfolio">tracked here</ShapeAnchor>.
      </p>
    </div>
    <ol>
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
    </ol>
  </div>
</div>

<style>
.wrapper-portfolio {
  background: var(--100);
}

#portfolio {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  place-items: center;
  gap: 3rem;
  padding: 6rem 0;
  margin-inline: auto;
  width: min(100% - 2rem, var(--md));
  min-height: 100vh;
}

@media screen and (min-width: 48rem) {
  #portfolio {
    flex-direction: row;
  }
}

@media screen and (min-width: 80rem) {
  #portfolio {
    min-height: 0;
  }
}

.header-projects {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: min(100% - 2rem);
  padding: 1rem;
}

.header-projects p {
  margin-top: 1rem;
  color: var(--text-3);
}

ol {
  display: grid;
  flex: 1;
  gap: 1rem;
}

li {
  background: var(--srf-3);
  border: 0px var(--srf-3-brd) solid;
  border-radius: 0.5rem;
  min-width: 20ch;
}

p {
  margin-top: 0.5rem;
}

a {
  display: grid;
  padding: clamp(1rem, 8vw + 1rem, 1.5rem);
}

h3 {
  display: flex;
  place-items: center;
  gap: 0.5rem;
}
</style>
