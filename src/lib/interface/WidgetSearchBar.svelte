<script>
  import IconSearch from '$lib/Icons/IconSearch.svelte';
</script>

<button aria-label="Open modal box to search for blogs" class="attn-focus attn">
  <IconSearch />
  <div aria-label="Search for a blog" id="searchModal">_</div>
  <kbd>Ctrl K</kbd>
</button>

<style>
  button {
    /* width: 100%; */
    padding: var(--bttn-szb-100) var(--bttn-szh-100);
    gap: 0.4rem;
  }

  kbd {
    outline: 1px solid var(--clr-text-muted);
    border-radius: 0.5rem;
    pointer-events: none;

    /* margin-right: 1rem; */
    padding-inline: 0.3rem;
  }

  #searchModal {
    /* font-weight: 900; */
    text-decoration: underline solid var(--clr-title) 3px;
    color: transparent;
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
