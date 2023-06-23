<script lang="ts">
import { debounce } from '$lib/utils/utils';
import { onMount } from 'svelte';

let scrollY = 0,
  innerHeight = 0,
  visibility = 'hidden';

const toggleComponent = () =>
  (visibility = window.scrollY > window.innerHeight ? 'visible' : 'hidden');
onMount(() =>
  window.addEventListener('scroll', debounce(toggleComponent, 30), {
    passive: true,
    capture: true
  })
);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section>
  <a
    on:click|preventDefault={() =>
      window.scrollTo({ top: 0, behavior: 'smooth' })}
    style:visibility
    aria-label="Go to the top of the page"
    class="tpl reverse"
    href="#body"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 19V5m-7 7l7-7l7 7"
      />
    </svg>
  </a>
</section>

<style>
section {
  position: sticky;
  bottom: 1rem;
  margin-top: 1rem;
  width: min(92%, var(--xl));
  justify-content: flex-end;
  display: flex;
}

a {
  border-radius: 999rem;
  padding: 1rem;
  border-width: 1px;
}
</style>
