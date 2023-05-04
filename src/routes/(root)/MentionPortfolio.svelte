<script lang="ts">
  // <script context="module" lang="ts">
</script>

<div id="portfolio" class="mention-portfolio">
  <div class="describe-featured">
    <h2>Featured Project</h2>
    <p>
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
      sint consectetur cupidatat.
    </p>
  </div>
  <div class="img-wrapper">
    <img src="/portfolio/zap-website.webp" alt="" />
  </div>
</div>

<style>
  .mention-portfolio {
    display: flex;
    place-items: center;
    flex-flow: row wrap;
    min-height: 100vh;
    width: min(92%, var(--md));
    margin-inline: auto;
    gap: 3rem;
  }

  .describe-featured {
    flex: 3;
    display: grid;
    gap: 1rem;
  }

  .img-wrapper {
    flex: 2;
    max-height: 40rem;
    overflow: hidden;
    padding: 2rem;
    border-radius: 2rem;
    border: 2px solid var(--clr-30);

    background-size: 100% 100%;
    background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
    background-image: radial-gradient(
        49% 81% at 45% 47%,
        #ffe20345 0%,
        #073aff00 100%
      ),
      radial-gradient(113% 91% at 17% -2%, #e85376 17%, #ffc965 94%),
      radial-gradient(142% 91% at 83% 7%, #ffdb00ff 1%, #ff000000 99%),
      radial-gradient(142% 91% at -6% 74%, #ff0049ff 1%, #ff000000 99%),
      radial-gradient(142% 91% at 111% 84%, #ff7000ff 0%, #ff0000ff 100%);
  }

  img {
    max-inline-size: 100%;
    border-radius: 2rem;
    overflow: hidden;
  }

  @media screen and (min-height: 80rem) {
    .mention-portfolio {
      min-height: 0;
    }
  }
</style>
