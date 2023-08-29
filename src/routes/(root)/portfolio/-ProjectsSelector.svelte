<script lang="ts">
import {
  currentGroupOfProjects,
  jobSelector,
  getCategoryInfo
} from '$lib/components/projects/store';
</script>

<div class="wrapper-header">
  <header>
    <section>
      <small>PORTFOLIO SHOWCASE &mdash;</small>
      <h1 class="font-fluid-1">
        {getCategoryInfo($currentGroupOfProjects).label} Projects
      </h1>
      <p class="font-h3">
        {getCategoryInfo($currentGroupOfProjects).description}
      </p>
    </section>
    <form class="font-h3">
      <label for="projects" class="font-p">
        Filter by type of project
        <noscript>
          <small>Sorry Folks! This requires JavaScript to work!</small>
        </noscript>
      </label>
      <div class="around-select">
        <select bind:value={$currentGroupOfProjects} name="projects" id="projects">
          {#each Object.entries(jobSelector) as [value, [label]]}
            <option {value} {label} />
          {/each}
        </select>
      </div>
    </form>
  </header>
</div>

<style>
.wrapper-header {
  display: grid;
  place-items: center;
  place-content: center;
  background: var(--srf-3);
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  padding: clamp(1rem, 2vw + 1rem, 6rem) 0;
  margin-bottom: clamp(1rem, 2vw + 1rem, 3rem);
}

header {
  width: min(100% - 2rem, var(--md));
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  gap: 3rem;
}

header p {
  max-width: 50ch;
}

section p {
  margin-top: 0.5rem;
}

form {
  flex: 3;
  display: flex;
  flex-flow: column wrap;
  gap: 0.25rem;
}

label {
  display: flex;
  flex-wrap: wrap;
}

.around-select {
  background: var(--srf-4);
  border: thin var(--srf-4) solid;
  border-top-color: var(--srf-4-brd);
  border-left-color: var(--srf-4-brd);
  border-radius: 1rem;
  box-shadow: 4px 8px 8px 0 rgb(0 0 0 / 0.06);
  overflow: hidden;
}

@media (hover: hover) {
  .around-select:hover {
    background: var(--srf-5);
    border-color: var(--srf-5-brd);
  }
}

select {
  width: 100%;
  border: 0;
  padding: 0.5rem 1.5rem;
  background: inherit;
  color: var(--text-2);
}
</style>
