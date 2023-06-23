---
title: How this blog was built with SvelteKit
datetime: 2023-06-18 14:20
description: Learn the basis of dynamic routing in SvelteKit and MDsveX.
tags: ['SvelteKit', 'TypeScript', 'CSS']
summary:
  We'll be using sveltekit to manage the frontend and mdsvex (or not) to write
  the blogs in markdown (plain text), we'll learn how to make use of dynamic
  routes, and other small extra things.
finished: true
---

<script>
  import { base } from '$app/paths';
  import config from '$lib/config';
</script>

# Let's get started

As a disclaimer, this is one of the first websites I jumped on creating from
scratch, **however** this article will only focus on making you understand
basic concepts of the mdsvex markdown preprocessor and sveltekit routing, so
that you can focus on everything else.

## Small overview of the project

Here's the documention for [SvelteKit](https://kit.svelte.dev/) and for
[MDsveX](https://mdsvex.pngwn.io/) to consult if you run into any issues.

{summary} MDsveX is able to convert your markdown files to plain html, and
sveltekit is a frontend metaframework.

Anyhow, to get the project started use your preferred package manager, I've
tried multiple package managers like `npm` or `yarn` but I prefer `pnpm`.

```bash
pnpm create svelte your_app_name
cd your_app_name
pnpm install
pnpm build # Or npm run build
pnpm dev --host --open
```

## How the blog is going to work

Before explaining I have to make some clarifications.

I've considered the idea of writing in `.svelte` files or using
[Astro](https://astro.build/) (I even considered [MDX](https://mdxjs.com/)) for the great markdown support
which goes well with my workflow since I've been keeping my Zettelkasten in
pure markdown with the occasional code component or repo to go alongside it.

For this case we'll go with SvelteKit + MDsveX and make use of dynamic routing,
but there'll be mentions of the key differences if you prefer not to
use MDsveX, but just in general terms since most of the things are well
documented and easy to find, I recommend reading the entire post specially if
you are new to sveltekit like me, there's a lot of similarities when working
with MDsveX or plain svelte files.

I should also mention that I created a [minimal repo](https://github.com/santigo-zero/sveltekit-and-mdsvex-blog-example)
which I'm sure will make you understand everything, from how MDsveX makes use
of a template and to how the dynamic routing works.

### Why not _this other alternative_?

The reason why I went with SvelteKit is because it _feels more natural_ to
develop and I think that MDsveX is a nice abstraction for the blog
section of my personal site.

If you are not going to use MDsveX you can skip the installation and
configuration and jump to [Routing](#routing).

### Install MDsveX

If I convinced you with past paragraph, the dependency can be installed like so:

```bash
npm install --save-dev mdsvex rehype-slug
yarn add --dev mdsvex rehype-slug
pnpm add --save-dev mdsvex rehype-slug
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
import adapter from '@sveltejs/adapter-auto';
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

  kit: { adapter: adapter() }
};

export default config;
```

The template could be as simple [as
this](https://github.com/santigo-zero/sveltekit-and-mdsvex-blog-example/blob/main/src/lib/components/Template.svelte).

## Routing

There's two ways to go about it, you either use conventional routing or dynamic
routing, let me give you examples of what I mean
with <i>conventional</i> or <i>dynamic</i> before you make up your mind.

### Conventional routing

This is the way you start doing routes, for each blog post you'd have a
directory with the name you want to be the url and a `+page.svelte` or
`+page.md` inside of it. As an example this is how your routes end up looking
`./src/routes/blog/how-to-blog/+page.svelte` and it will match to
`http://localhost:5173/blog/how-to-blog`.

It's still a valid way of creating the blog posts, with time it
would become really messy to work with, but it might be convenient if you are
thinking on having a lot of pictures per post and you want to keep them
organized in only one place.

### Dynamic routing

If you were to implement a blog using dynamic routing, all of your `.md` or
`.svelte` blog posts files will/could live in the same folder, and then in the
route of your selection, e.g. `./src/routes/blog/[postname]/+page.svelte` you make use of
some logic, generally in the load() function for `[postname]` to match the blog
post file name.

Let me give you a small example, if I were to navigate to
`http://localhost:5173/blog/how-to-blog` I would be getting
some arguments in my `load()` function located at
`./src/routes/blog/[postname]/+layout.ts` that will help me match the filename
of my blog post.

## What I went with

Dynamic routing makes the most sense to me, keeping all of my posts in
one directory `./src/lib/posts/` and keep the very few images I'll be
using inside the static folder with the following pattern
`./static/images/name_of_post/`. So then I just reference them like so:

```markdown
![alt text](/images/name_of_post/screenshot.jpeg)
```

### Making the dynamic links work

As you might've read the in [dynamic routing](#dynamic-routing) `[postname]`
with brackets in `./src/routes/blog/[postname]/` is basically a route with a
_parameter_, `postname`, as mentioned [in the docs](https://kit.svelte.dev/docs/routing).

Now we need to create the files in `./src/routes/blog/[postname]/`, I'll be
using `+layout.ts` but you can use `+page.ts`.

As you can see in the import statements we have to go back since the path is
relative because it's a [vite import](https://vitejs.dev/guide/features.html#dynamic-import)
and not your average SvelteKit import where you can use $lib syntax, so make
sure to get it right, you might thing there's something wring with the load()
function but it's just that you are pointing it to the wrong directory.

```typescript
// +layout.ts
import type { LayoutLoad } from './$types'; // Remove this if not using TS
// import type { PageLoad } from './$types'; // In case of +page.ts

export const load = (async ({ params }) => {
  // This relative path is going to be different for everyone since the
  // structure is going to be different depending on your choice for the blog
  // post directory and route to display the posts.
  const module = await import(`../../../../lib/posts/${params.postid}.md`);

  const content = module.default;
  const title = module.metadata.title;
  const description = module.metadata.description;

  return {
    content,
    title,
    description
  };
}) satisfies LayoutLoad; // And this if not using TS
// }) satisfies PageLoad;
```

If you are not going to use MDsveX you'll have to make every `.svelte` file
export the details of your blog post in some way or another, MDsveX by default
exports a metadata object as you can see in the example above with whatever it
is that you want to put inside it generally at the top of the markdown file
like so.

```markdown
---
title: How this blog was built with SvelteKit
description: Build your own blog with SvelteKit and MDsveX.
---
```

Which you then use/interpret/manipulate from your defined template, but since
you are not going to be using MDsveX you'll have to include this snippet in
every blog post file.

```svelte
<script context="module">
export let title = '';
export let description = '';
</script>
```
