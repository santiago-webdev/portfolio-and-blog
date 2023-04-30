<div class="wrapper-arrow" {...$$restProps}>
  <iconify-icon class="arrow-tail" icon="lucide:minus" />
  <iconify-icon class="arrow-head-backward" icon="lucide:chevron-left" />
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

  iconify-icon:first-child {
    position: absolute;
  }

  .arrow-head-backward {
    transform: translateX(3px);
  }

  .arrow-tail {
    opacity: 0;
    transition-delay: -50ms;
  }

  @media (hover: hover) {
    :global(a:hover .arrow-head-backward) {
      transform: translateX(-4px);
    }

    :global(a:hover .arrow-tail) {
      opacity: 1;
      transition-delay: 50ms;
    }
  }
</style>
