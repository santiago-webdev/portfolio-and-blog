<script>
import { base } from '$app/paths';
import ShapeAnchor from '$lib/components/navigation/ShapeAnchor.svelte';
import { FilteredProjects } from '$lib/components/projects/store';
</script>

<div class="wrapper-portfolio">
  <div id="portfolio" class="portfolio">
    <section>
      <h2 class="font-fluid-2">My work</h2>
      <p class="font-h3">
        I've contributed to FOSS as well as created some projects of my own. You
        can find all of my projects
        <ShapeAnchor href="{base}/portfolio">tracked here</ShapeAnchor>.
      </p>
    </section>
    <ol>
      <li class="tpl">
        <a
          href={$FilteredProjects[0].link.toString()}
          target="_blank"
          rel="external"
        >
          <h3>
            {$FilteredProjects[0].name}
            <iconify-icon icon="lucide:external-link" />
          </h3>
          <p>
            {$FilteredProjects[0].short_description}
          </p>
        </a>
      </li>
      <li class="tpl">
        <a
          href={$FilteredProjects[1].link.toString()}
          target="_blank"
          rel="external"
        >
          <h3>
            {$FilteredProjects[1].name}
            <iconify-icon icon="lucide:external-link" />
          </h3>
          <p>
            {$FilteredProjects[1].short_description}
          </p>
        </a>
      </li>
      <li class="tpl">
        <a href="/" target="_blank" rel="external">
          <h3>
            Project
            <iconify-icon icon="lucide:external-link" />
          </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </a>
      </li>
    </ol>
  </div>
</div>

<style>
.wrapper-portfolio {
  background: var(--clr-100);
}

.portfolio {
  display: flex;
  flex-wrap: wrap;
  width: min(100% - 2.2rem, var(--md));
  min-height: 100vh;
  min-height: 100svh;
  margin-inline: auto;
  padding: 3rem 0;
  gap: 3rem;
  place-items: center;
  place-content: center;
}

section {
  max-width: min(100% - 2rem);
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: var(--xs);
}

section > * + * {
  margin-block-start: 0.6em;
}

section p {
  color: var(--clr-inv-500);
  max-width: 38ch;
}

ol {
  flex: 1;
  display: grid;
  gap: 1rem;
}

li {
  min-width: var(--xs);
  border-radius: 0.6rem;
}

li a {
  display: grid;
  padding: 1rem;
}

li a > * + * {
  margin-block-start: 0.4em;
}

h3 {
  display: flex;
  place-items: center;
  gap: 1ch;
}

@media screen and (min-height: 80rem) {
  .portfolio {
    min-height: 0;
  }
}

@media screen and (min-width: 1024px) {
  li a {
    padding: 1.6rem;
  }
}

li:first-child {
  --bg: var(--clr-700);
  --brd: var(--bg);
}

li:first-child h3 {
  color: white;
}

li:first-child p {
  color: var(--clr-inv-800);
}

li:nth-child(2) {
  --bg: var(--clr-500);
  --brd: var(--bg);
}

li:nth-child(2) h3 {
  color: var(--clr-inv-900);
}

li:nth-child(2) p {
  color: var(--clr-inv-700);
}

li:last-child {
  --bg: var(--clr-300);
  --brd: var(--bg);
}

li:last-child h3 {
  color: var(--clr-inv-800);
}

li:last-child p {
  color: var(--clr-inv-600);
}

@media (hover: hover) {
  li:first-child:hover {
    --bg: var(--clr-700);
    --brd: var(--bg);
  }

  li:nth-child(2):hover {
    --bg: var(--clr-600);
    --brd: var(--bg);
  }

  li:last-child:hover {
    --bg: var(--clr-500);
    --brd: var(--bg);
  }
}
</style>
