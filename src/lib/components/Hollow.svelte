<script lang="ts">
  export let color: string
</script>

<span style="--color: {color}">
  <slot />
</span>

<style>
  span {
    -webkit-text-stroke: 0.1rem var(--color);
    color: transparent;
  }
</style>
