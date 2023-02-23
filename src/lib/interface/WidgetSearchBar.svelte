<button aria-label="Open modal box to search for blogs" class="attn-focus attn">
  <iconify-icon icon="lucide:search" />
  <div id="search">&nbsp _ &nbsp</div>
  <kbd>Ctrl K</kbd>
</button>

<style>
  /* form { */
  /*   display: grid; */
  /*   grid-template-columns: auto auto; */
  /*   align-items: center; */
  /*   overflow: hidden; */
  /*   margin-inline: auto; */
  /*   width: min(100%, var(--wide)); */
  /* } */

  button {
    width: 100%;
    padding: var(--bttn-szb-100) var(--bttn-szh-100);
  }

  kbd {
    border-left: 1px solid var(--clr-ui-muted);
    border-top: 1px solid var(--clr-ui-muted);
    border-right: 3px solid var(--clr-ui-muted);
    border-bottom: 3px solid var(--clr-ui-muted);
    border-radius: 0.4rem;
    pointer-events: none;

    /* margin-right: 1rem; */
    padding-inline: 0.3rem;
  }

  #search {
    font-weight: 800;
    color: var(--clr-title);
  }

  button,
  kbd {
    display: flex;
    place-items: center;
    /* color: inherit; */
    /* background-color: inherit; */
    /* font-size: inherit; */
  }
</style>
