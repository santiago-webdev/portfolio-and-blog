<div class="wrapper-arrow">
  <iconify-icon id="arrow-tail" icon="lucide:minus" />
  <iconify-icon id="arrow-head" icon="lucide:chevron-right" />
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
  }

  iconify-icon:first-child {
    position: absolute;
  }

  #arrow-head {
    transform: translateX(-3px);
  }

  #arrow-tail {
    opacity: 0;
    transition-delay: -50ms;
  }

  @media (hover: hover) {
    :global(a:hover #arrow-head) {
      transform: translateX(4px);
    }

    :global(a:hover #arrow-tail) {
      opacity: 1;
      transition-delay: 50ms;
    }
  }
</style>
