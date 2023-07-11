<script lang="ts">
export let href = '/';
const isInternal = () =>
  href.startsWith('/') || href.startsWith('#') || href.startsWith('./');
</script>

<a
  {href}
  rel={isInternal() ? '' : 'external'}
  target={isInternal() ? '' : '_blank'}
  {...$$restProps}
>
  <slot />
  {#if !isInternal()}
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
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
      />
    </svg>
  {/if}
</a>

<style>
a {
  display: inline-flex;
  place-items: center;

  font-size: inherit;
  line-height: inherit;

  color: var(--clr-blue-40);
  text-decoration: underline var(--clr-45) 2px;
  text-underline-offset: 3px;

  gap: 0.2ch;
}

@media (hover: hover) {
  a:hover {
    text-decoration-color: var(--clr-blue-40);
  }
}
</style>
