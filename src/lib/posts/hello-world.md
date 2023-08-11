---
title: Hello, World!
description: Small case study about me and this website
tags: [Publish, Case Study, Project]
datetime: 2023-01-14 06:02
---

This is my personal website, I host both my portfolio and blog, I wanted to put myself on the internet to share my knowledge and get employed. This is also the first page I've dedicated so much time to it.

## Project Overview

The design system could be improved a lot, but everything was chosen by me, from the UI, font pair, layout, and the [color-palette], which was also been done by me.

## Project statement

If I want this page to have a positive effect I will have to change the focus I give between routes, for recruiters to hire me, and writing blog articles to reach the casual programmer.

In the case of recruiters, design managers or non-technical:

- The `/`, `/#contact`, `/about` routes have to be intuitive and evident.
- For `/blog/hello-world`, `/blog/case-study-**` writing case studies explaining my thought process and considerations.

In the case of programmers:

- Performance, keep it minimal.
- Concise blog content.
- Powerful search functionality.

### Stack

Since this is my first "serious" page I decided to try a framework and use server side rendering instead of doing everything with vanilla JavaScript, which makes the workflow for blogging much nicer, [explained here](./how-to-build-a-blog-in-sveltekit).

- SvelteKit
- TypeScript
- CSS
- Markdown

I'm deploying this application to Vercel, and I have the repo under the GPL-3.0 in [GitHub](https://github.com/santigo-zero/portfolio-and-blog).

## Design choices

I first tried to create some designs based on Brutalism while keeping it minimal or app-like but I thought that would deviate from the more professional and unique look I was looking for, so after a lot of trial and error I think I found a balance between design and readability.

### Visual weight

#### Shape

I implemented fully rounded buttons and almost rounded UI for search bars, tags and everything else to look more friendly.

#### Implementation of the dark theme

For the dark theme, since I'm using [color-scheme JetJBP](https://github.com/santigo-zero/jetjbp) the easiest way to create contrast was to use red and purple colors, to create a nice pair of complementary colors

In most components you find two buttons, to give them hierarchy I implemented a basic slightly brighter color to still be registered as a button and gave the most important button/link of the two the same color as for the text.

### Font pairs

To get a more <em>Big Typography</em> look I went for a variable font for titles and UI, [Manrope](https://www.gent.media/manrope) which facilitates fluid typography since it's variable, and for the text I rely on [Basier Circle](https://www.atipofoundry.com/fonts/basier), both share certain similarities in style.

### Design trends

This <em>Big Typography</em> is effective for the desktop version but for mobile I adapted the design to be more Neomorphic or app-like, and I think it's effective without making big changes to the code.

[color-palette]: https://github.com/santigo-zero/JetJBP "Santiago's color-palette"
