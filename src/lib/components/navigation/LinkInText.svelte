<script lang="ts">
  export let href = '/'
</script>

<a {href}>
  <slot />
  <iconify-icon icon="lucide:external-link" />
</a>

<style>
  a {
    font-size: inherit;
    color: inherit;
    display: inline-flex;
    place-items: center;
    gap: 0.4ch;
    color: hsl(229 63% 76%);

    background-image: linear-gradient(90deg, var(--clr-50), var(--clr-60));
    background-size: 0% 6px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 150ms ease-in-out;
  }

  a:hover,
  a:focus {
    top: 10px;
    background-size: 100% 6px;
  }
</style>
