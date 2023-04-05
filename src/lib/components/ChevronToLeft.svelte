<div class="wrapper-arrow">
  <svg
    id="arrow-tail"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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
    width="20"
    height="20"
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

<style>
  * {
    transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .wrapper-arrow {
    display: flex;
    place-items: center;
    position: relative;
    left: 0.1rem;
    top: 1px;
  }

  svg:first-child {
    position: absolute;
  }

  #arrow-head {
    transform: translateX(-3px);
    margin-right: 0.4rem;
  }

  #arrow-tail {
    opacity: 0;
    transition-delay: -50ms;
  }

  @media (hover: hover) {
    :global(a:hover .wrapper-arrow) {
      transform: translateX(0.3ch);
      transition-delay: 400ms;
    }

    :global(a:hover #arrow-head) {
      transform: translateX(3px);
    }

    :global(a:hover #arrow-tail) {
      opacity: 1;
      transition-delay: 50ms;
    }
  }
</style>
