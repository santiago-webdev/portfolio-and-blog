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
