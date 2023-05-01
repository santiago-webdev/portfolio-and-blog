<script lang="ts">
  export let href = '/'
  export let defaults = false
</script>

<a class:defaults {href} {...$$restProps}>
  <slot />
  <iconify-icon icon="lucide:external-link" />
</a>

<style>
  a {
    color: inherit;
    display: inline-flex;
    place-items: center;
    gap: 0.4ch;
    color: var(--clr-150);
    max-width: max-content;

    background-image: linear-gradient(
      90deg,
      var(--clr-purple-20),
      var(--clr-purple-20)
    );
    background-size: 0% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 150ms ease-in-out;
  }

  a:hover,
  a:focus {
    top: 10px;
    background-size: 100% 3px;
  }

  .defaults {
    font-size: inherit;
    line-height: inherit;
  }
</style>
