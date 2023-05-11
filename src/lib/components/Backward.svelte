<div class="wrapper-arrow" aria-hidden="true" {...$$restProps}>
  <svg
    class="arrow-tail"
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="M5 12h14" />
  </svg>
  <svg
    class="arrow-head-backward"
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="m15 18l-6-6l6-6" />
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
    inset: auto auto auto 0.2ch;
  }

  svg:first-child {
    position: absolute;
  }

  .arrow-head-backward {
    transform: translateX(-4px);
  }

  .arrow-tail {
    opacity: 1;
    transition-delay: 50ms;
  }

  @media (hover: hover) {
    .arrow-head-backward {
      transform: translateX(3px);
    }

    .arrow-tail {
      opacity: 0;
      transition-delay: -50ms;
    }

    :global(a:hover .arrow-head-backward),
    :global(a:focus .arrow-head-backward) {
      transform: translateX(-4px);
    }

    :global(a:hover .arrow-tail),
    :global(a:focus .arrow-tail) {
      opacity: 1;
      transition-delay: 50ms;
    }
  }
</style>
