---
title: How this blog was built
datetime: 2023-01-27 20:59
description: Build your own blog with SvelteKit.
tags: ['SvelteKit', 'TypeScript', 'CSS']
summary: "
  We'll be using sveltekit to manage the frontend and mdsvex (or not) to write the blogs in markdown (plain text).
  "
---

<script>
  import { base } from '$app/paths';
  import config from '$lib/config';
</script>

# Let's get started

As a disclaimer, this is one of the first pages I jumped on creating from
scratch **however** this article will only focus on making you understand basic
concepts of the mdsvex markdown preprocessor and sveltekit routing, so that
you can focus on everything else.

## Small overview of the project

Here's the documention for [sveltekit](https://kit.svelte.dev/) and for
[mdsvex](https://mdsvex.pngwn.io/) to consult if you run into any issues.

{summary} Mdsvex is able to convert your markdown files to plain html, and
sveltekit is a frontend metaframework.

Anyhow, to get the project started use your preferred package manager, I've
tried multiple package managers like `npm` or `yarn` but I prefer `pnpm`.

```bash
pnpm create svelte your_app_name
cd your_app_name
pnpm install
pnpm build
pnpm dev --host --open
```

## How is the blog going to work

Before explaining I have to make some clarifications.

I've considered the idea of writing in `.svelte` files or using
[Astro](https://astro.build/) (I even considered [MDX](https://mdxjs.com/)) for the great markdown support
which goes well with my workflow since I've been keeping my Zettelkasten in
pure markdown with the occasional code component or repo to go alongside it.

For this case we'll go with SvelteKit + MDsveX but there'll be mentions of
the key differences for people that prefer not to use MDsveX, but just in
general terms since most of the things are well documented and easier to find,
I would recommend reading the entire things since there's a lot of similarities
when working with MDsveX or plain svelte files.

### Why not _this other alternative_?

The reason why I went with SvelteKit is because it _feels more natural_ to
develop and I think that MDsveX is a nice abstraction for the blog
section of my personal site.

If you are not going to use MDsveX you can skip the installation and
configuration and jump to [Routing](#routing).

### Install MDsveX

If I convinced you with past paragraph, the dependency can be installed like so:

```bash
npm install --save-dev mdsvex
yarn add --dev mdsvex
pnpm add --save-dev mdsvex
```

### Configure MDsveX

You need to define in your root `svelte.config.js`

1. The extensions you'll be supporting, `.md` only for MDsveX, and `.svelte` and
   `.md` globally
2. The plugins you'll use, rehype-slug as an example
3. The layout, it's just a `.svelte` file that will work as a template for your
   blog posts

[Here you can find my current config]({config.landingpage.repo}/blob/main/svelte.config.js)
or see the example below:

```javascript
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      layout: './src/lib/components/Template.svelte',
      extensions: ['.md'],
      rehypePlugins: [rehypeSlug]
    }),
    vitePreprocess()
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;
```

## Routing

Coming soon...
