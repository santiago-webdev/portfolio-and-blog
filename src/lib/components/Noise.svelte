<div class="noise" />

<style>
  .noise {
    position: fixed;
    z-index: 9999;
    top: -300%;
    left: -150%;
    height: 600%;
    width: 600%;

    -webkit-animation: grain 7s steps(10) infinite;
    animation: grain 7s steps(10) infinite;
    opacity: 0.2;
    mix-blend-mode: color-dodge;

    background-image: url(/noise.png);
    background-size: 100px;
    background-repeat: repeat;

    pointer-events: none;
  }

  @keyframes grain {
    0% {
      transform: translate(0, 0);
    }

    10% {
      transform: translate(-5%, -10%);
    }

    20% {
      transform: translate(-15%, 5%);
    }

    30% {
      transform: translate(7%, -25%);
    }

    40% {
      transform: translate(-5%, 25%);
    }

    50% {
      transform: translate(-15%, 10%);
    }

    60% {
      transform: translate(15%, 0%);
    }

    70% {
      transform: translate(0%, 15%);
    }

    80% {
      transform: translate(3%, 35%);
    }

    90% {
      transform: translate(-10%, 10%);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .noise {
      all: unset;
    }
  }
</style>
