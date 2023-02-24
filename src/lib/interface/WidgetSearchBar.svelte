<button aria-label="Open modal box to search for blogs" class="attn-focus attn">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21l-4.35-4.35"/></g></svg>
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
