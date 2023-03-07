<script lang="ts">
  import { onMount } from 'svelte';

  let dialog: HTMLDialogElement;
  let button: HTMLButtonElement;

  const togglePicker = () =>
    dialog.open ? dialog.close() : openDialogRelatively();

  function openDialogRelatively() {
    dialog.show();
    dialog.style.top = button.offsetTop + button.offsetHeight + 'px';
    dialog.style.left =
      button.offsetLeft +
      button.offsetWidth / 2 -
      dialog.offsetWidth / 2 +
      'px';
  }

  let theme = '';
  $: if (typeof document !== 'undefined' && theme) {
    document.documentElement.dataset.theme = theme;
    document.cookie = `theme=${theme};max-age=31536000;path="/"`;
    console.log('theme has been changed');
  }

  onMount(() => {
    // document.documentElement.dataset.theme = theme;
    // theme = document.documentElement.dataset.theme || 'system';
  });

  type ThemeOptions = { label: string; value: string; icon: string };
  const themeColorscheme: ThemeOptions[] = [
    { label: 'System', value: 'system', icon: 'bxs:adjust' },
    { label: 'Light', value: 'light', icon: 'lucide:sun' },
    { label: 'Dark', value: 'dark', icon: 'lucide:moon' }
  ];
</script>

<button bind:this={button} on:click={togglePicker}> Theme in use </button>
<dialog class="shiny" bind:this={dialog}>
  <form>
    <fieldset>
      <legend>Choose a colorscheme</legend>
      {#each themeColorscheme as color}
        <input
          type="radio"
          name="theme"
          id={color.value}
          value={color.value}
          bind:group={theme} />
        <label class="shiny-select" for={color.value}>
          <iconify-icon icon={color.icon} />&nbsp;
          {color.label}
        </label>
      {/each}
    </fieldset>
  </form>
</dialog>

<style>
  button {
    position: relative;
  }

  dialog {
    position: absolute;
    margin: var(--gap) 0;
    padding: var(--gap);
  }

  fieldset {
    display: grid;
    border: 2px solid var(--clr-muted-150);
    border-radius: 0.8rem;
    width: 100%;
    padding: var(--gap);
    gap: calc(var(--gap) / 2);
  }

  legend {
    color: var(--clr-title);
    margin-inline: 1ch;
    padding: 0;
  }

  label {
    display: flex;
    place-items: center;
    width: 100%;
  }

  input {
    display: none;
  }
</style>
