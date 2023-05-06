<script lang="ts">
  import { Posts } from '$lib/components/search/store'
</script>

<div class="wrapper-blog-header">
  <h1>Blog</h1>
  <p>
    In this {$Posts.length} blog posts you are going to find articles related to
    <strong>Linux</strong>, <strong>web technologies</strong> and
    <strong>front end development</strong>.
  </p>
</div>

<style>
  h1,
  p {
    text-align: center;
  }

  p {
    width: min(33ch, 100%);
    margin-inline: auto;
    text-align: center;
  }

  .wrapper-blog-header {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
</style>
