<div class="wrapper-arrow" aria-hidden="true" {...$$restProps}>
  <svg class="tail" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 12h14"
    />
  </svg>
  <svg class="chevron-back" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m15 18l-6-6l6-6"
    />
  </svg>
</div>

<style>
* {
  transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1), opacity 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.wrapper-arrow {
  display: flex;
  place-items: center;

  position: relative;
  inset: auto auto auto 0.2ch;
}

.tail {
  position: absolute;
  opacity: 1;
  transition-delay: 50ms;
}

.chevron-back {
  transform: translateX(-4px);
}

@media (hover: hover) {
  .chevron-back {
    transform: translateX(3px);
  }

  .tail {
    opacity: 0;
    transition-delay: -50ms;
  }

  :global(a:hover .chevron-back),
  :global(a:focus .chevron-back) {
    transform: translateX(-4px);
  }

  :global(a:hover .tail),
  :global(a:focus .tail) {
    opacity: 1;
    transition-delay: 50ms;
  }
}
</style>
