<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { getCookie } from '$lib/utils/utils';
  import { onMount } from 'svelte';

  let dialog: HTMLDialogElement;
  let button: HTMLButtonElement;
  let scrollY = 0;

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

  type ThemeOptions = { label: string; value: string; icon: string };
  const themeColorscheme: ThemeOptions[] = [
    { label: 'OS Default', value: 'system', icon: 'bxs:adjust' },
    { label: 'Light', value: 'light', icon: 'lucide:sun' },
    { label: 'Dark', value: 'dark', icon: 'lucide:moon' }
  ];

  $: theme = 'initial';
  const writeThemeCookie = () =>
    (document.cookie = `theme=${theme};max-age=31536000;path="/"`);

  function setTheme() {
    if (theme === 'light' || theme === 'dark')
      document.documentElement.dataset.theme = theme;

    if (theme === 'system') setSystemByUserPrefs();

    writeThemeCookie();
  }

  const setSystemByUserPrefs = () => {
    document.documentElement.dataset.theme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
      ? 'dark'
      : 'light';
  };

  onMount(() => (theme = getCookie('theme')));
  $: if (theme !== 'initial') setTheme();
  afterNavigate(() => dialog.close());
</script>

<button class="shiny hover" bind:this={button} on:click={togglePicker}
  >Theme
  <iconify-icon icon="lucide:chevron-down" />
</button>
<dialog on:mouseleave={() => dialog.close()} class="shiny" bind:this={dialog}>
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
    display: flex;
    place-items: center;
    padding: 0.2rem 0.8rem;
  }

  dialog {
    position: absolute;
    margin: var(--gap) 0 0 0;
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
