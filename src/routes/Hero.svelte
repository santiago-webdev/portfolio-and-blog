<script lang="ts">
  import { base } from '$app/paths'
</script>

<div class="top-layer">
  <main class="wide">
    <h1>
      Build<wbr />ing web<wbr />sites <span>&&</span> clean inter<wbr />faces
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
        class="shiny hover"
        >Projects <iconify-icon icon="lucide:chevron-right" /></a>

      <a href="/" aria-label="Link to contact me" class="block hover"
        >Contact
        <div class="wrapper-arrow">
          <svg
            id="arrow-tail"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14" />
          </svg>

          <svg
            id="arrow-head"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 18l6-6l-6-6" />
          </svg>
        </div>
      </a>
    </section>
  </main>
</div>

<style>
  main {
    display: grid;
    gap: 2rem;
    text-align: left;
    place-content: center;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
    gap: 1rem 2rem;
  }

  p {
    max-width: 40ch;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    /* position: relative; */
    padding: 0.8rem;
    font-size: 140%;
    gap: 0.2rem;
  }

  .wrapper-arrow {
    display: flex;
    place-items: center;
    position: relative;
    top: 1px;
  }

  svg {
    position: absolute;
    transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  #arrow-head {
    transform: translateX(-3px);
  }

  #arrow-tail {
    opacity: 0;
    transition-delay: -50ms;
  }

  @media (hover: hover) {
    a:hover #arrow-head {
      transform: translateX(6px);
    }

    a:hover #arrow-tail {
      opacity: 1;
      transition-delay: 50ms;
    }
  }

  @media screen and (min-width: 68rem) {
    main {
      min-height: min(50vh, 80rem);
      text-align: center;
    }

    p {
      margin-inline: auto;
    }
  }
</style>
