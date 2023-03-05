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
<dialog class="attn attnactive trn-border" bind:this={dialog}>
  <form>
    <fieldset>
      <legend>Choose a colorscheme</legend>

      <section>
        <label for="theme">Light Lorem, ipsum dolor. </label>
        <input type="radio" name="theme" id="light" />
      </section>

      <section>
        <label for="theme">Dark</label>
        <input type="radio" name="theme" id="dark" />
      </section>

      <section>
        <label for="theme">System</label>
        <input type="radio" name="theme" id="system" checked />
      </section>
    </fieldset>
  </form>
</dialog>

<style>
  button {
    position: relative;
  }

  dialog {
    position: absolute;
    margin: 0;
    border: transparent;
    margin-top: var(--gap);
  }

  fieldset {
    /* padding: 0; */
    /* margin: 0; */
    display: grid;
    /* width: 100%; */
    border: 2px solid var(--clr-muted-300);
    border-radius: 0.8rem;
  }

  legend {
    padding-inline: 0.5ch;
    color: var(--clr-title);
    margin-inline: auto;
    font-weight: bold;
    font-size: 110%;
  }
</style>
