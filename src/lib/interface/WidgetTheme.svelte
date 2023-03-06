<script lang="ts">
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
</script>

<button bind:this={button} on:click={togglePicker}> Theme in use </button>
<dialog class="shiny" bind:this={dialog}>
  <form>
    <fieldset>
      <legend>Choose a colorscheme</legend>

      <input type="radio" name="theme" id="system" checked />
      <label class="shiny-select" for="system"
        ><iconify-icon icon="bxs:adjust" />&nbsp;System</label>

      <input type="radio" name="theme" id="light" />
      <label class="shiny-select" for="light"
        ><iconify-icon icon="lucide:sun" />&nbsp;Light</label>

      <input type="radio" name="theme" id="dark" />
      <label class="shiny-select" for="dark"
        ><iconify-icon icon="lucide:moon" />&nbsp;Dark</label>
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
