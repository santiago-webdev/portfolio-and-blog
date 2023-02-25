<script lang="ts">
  export let render = false;
  export let orientation: Orientation;

  type Orientation = 'horizontal' | 'vertical' | null | undefined;
</script>

{#if render}
  <!-- TODO(santigo-zero): Use an icon based on the orientation -->
  <div aria-orientation={orientation} role="separator" class="ui-divider" />
  <slot />
{/if}

<style>
  .ui-divider {
    border-left: 0.13rem solid var(--clr-ui-muted);
    height: calc(var(--bttn-szh-100) * 1.5);
    background-color: white;
  }
</style>
