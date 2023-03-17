<script lang="ts">
  import { base } from '$app/paths'
  import ChevronToArrow from '$compose/ChevronToArrow.svelte'
</script>

<div class="top-layer">
  <main>
    <div class="left">
      <h1>
        Build<wbr />ing web<wbr />sites <span>&&</span> clean interfaces
      </h1>
      <p>
        I'm a web developer and here we'll discuss about <strong>
          web deve&shylopment
        </strong> and show you my projects while at it.
      </p>
      <section>
        <a
          href="{base}/projects"
          aria-label="Link to my projects page"
          class="shiny hover ff-sz-400"
          >Projects
          <ChevronToArrow />
        </a>

        <a
          aria-label="Link to contact me"
          class="block hover ff-sz-400"
          href="{base}/contact"
          >Contact
        </a>
      </section>
    </div>
    <div class="right">
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
      labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
      Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
      Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
      occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
      officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in
      Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non
      excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco
      ut ea consectetur et est culpa et culpa duis.
    </div>
  </main>
</div>

<style>
  main {
    display: grid;
    place-items: center;
    /* outline: 2px solid paleturquoise; */
    width: min(100% - var(--gap), var(--base));
    grid-template-columns: 1fr;
    margin-inline: auto;
    text-align: left;
    gap: var(--gap);
  }

  .left {
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);
  }

  p {
    max-width: 80%;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    /* position: relative; */
    /* padding: 0.8rem; */
    /* font-size: 140%; */
    padding: 0.4rem 0.8rem;
    gap: 0.2rem;
    /* text-transform: uppercase; */
    border-radius: 0.8rem;
  }

  @media screen and (min-width: 68rem) {
    main {
      flex-flow: column wrap;
      min-height: min(75vh, 80rem);
      margin-inline: auto;
      padding: var(--gap) 0;
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
