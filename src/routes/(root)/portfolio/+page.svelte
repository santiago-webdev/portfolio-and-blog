<script lang="ts">
import ProjectsSelector from './-ProjectsSelector.svelte';
import FilteredProjects from './-FilteredProjects.svelte';
</script>

<main>
  <ProjectsSelector />
  <FilteredProjects />
</main>

<style>
main {
  margin-bottom: 3rem;
}
</style>
