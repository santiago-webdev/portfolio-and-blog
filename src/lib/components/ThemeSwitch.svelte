<script lang="ts">
  function click() {
    const doc = document.documentElement.dataset
    if (doc.theme === 'dark') {
      doc.theme = 'light'
    } else {
      doc.theme = 'dark'
    }
  }
</script>

<button class="shiny" on:click={click}>
  <div class="theme-wrapper">
    <iconify-icon width="24" id="sun" icon="lucide:sun" />
    <iconify-icon width="24" id="moon" icon="lucide:moon" />
  </div>
  Theme
</button>

<style>
  button {
    /* cursor: pointer; */
    border-radius: 0.8rem;
    overflow: hidden;
    /* height: 2.4rem; */
    /* width: 2.4rem; */
    display: flex;
    flex-flow: row;
    padding: 0.4rem 0.8rem;
    gap: 0.4rem;
  }

  .theme-wrapper {
    /* height: 100%; */
    /* width: 100%; */
    /* margin-inline: auto; */
    position: relative;

    display: flex;

    place-content: center;
    place-items: center;
  }

  iconify-icon:first-child {
    position: absolute;
  }

  iconify-icon {
    pointer-events: none;
    /* margin-inline: auto; */
    display: flex;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  #sun {
    color: orangered;
    transform: rotate(90deg);
    transform-origin: 50% 100px 0px;
  }

  :global([data-theme='light'] #sun) {
    transform: rotate(0deg);
  }

  #moon {
    color: orange;
    transform: rotate(-90deg);
    transform-origin: -50% -100px 0px;
  }

  :global([data-theme='dark'] #moon) {
    transform: rotate(0deg);
  }
</style>
