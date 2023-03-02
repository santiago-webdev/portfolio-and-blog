<script lang="ts">
  export let render = false;
  export let orientation: Orientation;

  type Orientation = 'horizontal' | 'vertical' | null | undefined;
</script>

{#if render}
  {#if orientation === 'horizontal'}
    <hr />
  {:else if orientation === 'vertical'}
    <div aria-orientation={orientation} role="separator" class="ui-divider" />
  {/if}
{/if}

<style>
  hr {
    width: 100%;
    height: 1px;
    background-color: var(--clr-ui-muted);
    border: 0;
  }

  .ui-divider {
    height: 1.6em;
    border-left: 1px solid var(--clr-ui-muted);
    background-color: white;
  }
</style>
