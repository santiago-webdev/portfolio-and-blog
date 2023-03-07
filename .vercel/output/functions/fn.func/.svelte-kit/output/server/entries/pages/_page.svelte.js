import { c as create_ssr_component, e as escape, f as add_attribute, h as each, v as validate_component } from "../../chunks/index2.js";
import { b as base } from "../../chunks/paths.js";
import { D as DESCRIPTION, b as TITLE, U as URL } from "../../chunks/config.js";
const Hero_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "section.svelte-6wsma4{display:grid;gap:2rem;margin-inline:auto}.content-navigation.svelte-6wsma4{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(20rem, 100%), 1fr));gap:1rem 2rem}p.svelte-6wsma4{max-width:40ch;margin-inline:auto}a.svelte-6wsma4{display:flex;place-items:center;place-content:center;padding:0.8rem;font-size:clamp(0.8rem, 8vw, 1.42rem)}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="${"wide svelte-6wsma4"}"><h1>Build<wbr>ing web<wbr>sites <span>&amp;&amp;</span> clean inter<wbr>faces
  </h1>
  <p class="${"svelte-6wsma4"}">I&#39;m a web developer and here we&#39;ll discuss about <strong>web de­vel­op­ment
    </strong> and show you my projects while at it.
  </p>
  <div class="${"content-navigation svelte-6wsma4"}"><a href="${escape(base, true) + "/projects"}" aria-label="${"Link to my projects page"}" style="${"color: var(--clr-text)"}" class="${"shiny hover svelte-6wsma4"}">Projects <iconify-icon icon="${"lucide:chevron-right"}"></iconify-icon></a>
    <a href="${"/"}" aria-label="${"Link to contact me"}" class="${"block hover svelte-6wsma4"}">Contact</a></div>
</section>`;
});
const PresentationBlog_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-tr6fj3{display:flex;overflow-x:auto;white-space:nowrap}button.svelte-tr6fj3{display:grid;place-items:center;background-color:var(--clr-background-alt);color:var(--accent-orange);border-radius:999px;border:0.3rem solid var(--clr-background);aspect-ratio:1;margin:auto;text-align:center}button.svelte-tr6fj3:hover{border-color:var(--accent-orange)}.left_button.svelte-tr6fj3{position:relative;left:1.3rem}.right_button.svelte-tr6fj3{position:relative;right:1.3rem}section.svelte-tr6fj3{min-height:min(100vh, 80rem);min-height:min(100dvh, 80rem);display:grid;place-content:center;padding:6rem 0;text-align:center;grid-template-columns:minmax(min(30rem, 100%), 1fr) fit-content(100%);grid-auto-flow:row dense}@media only screen and (max-width: 48rem){section.svelte-tr6fj3{grid-template-columns:1fr}}.blog-selection.svelte-tr6fj3{background-color:var(--clr-background-alt);text-align:center;width:100%;aspect-ratio:1.618;display:inline-grid;scroll-snap-align:center;scroll-snap-type:x mandatory}.wrapper-cards.svelte-tr6fj3{width:100%;overflow-x:scroll;white-space:nowrap;scroll-snap-type:x mandatory;border-radius:0.8rem;color:var(--clr-title)}.wrapper-cards.svelte-tr6fj3::-webkit-scrollbar{display:none}.wrapper-cards.svelte-tr6fj3{-ms-overflow-style:none;scrollbar-width:none}.wrapper.svelte-tr6fj3{padding:3rem 0;display:grid;place-content:start center}",
  map: null
};
let leftButton = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"/></svg>';
let rightButton = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.15 21.1q-.375-.375-.375-.888q0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375q.512 0 .887.375l8.4 8.425q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35q-.513 0-.888-.375Z"/></svg>';
const PresentationBlog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const blogCards = [
    {
      title: "Title 1",
      description: "Description 1"
    },
    {
      title: "Title 2",
      description: "Description 2"
    },
    {
      title: "Title 3",
      description: "Description 3"
    },
    {
      title: "Title 4",
      description: "Description 4"
    },
    {
      title: "Title 5",
      description: "Description 5"
    },
    {
      title: "Title 6",
      description: "Description 6"
    }
  ];
  let blog;
  let blogButton;
  let wrapperCards;
  $$result.css.add(css$2);
  return `

<section class="${"focus wider svelte-tr6fj3"}"><div class="${"container svelte-tr6fj3"}"><button aria-label="${"Go to previous card in carousel"}" class="${"left_button svelte-tr6fj3"}"><!-- HTML_TAG_START -->${leftButton}<!-- HTML_TAG_END --></button>
    <div class="${"wrapper-cards svelte-tr6fj3"}"${add_attribute("this", wrapperCards, 0)}>${each(blogCards, (blog2, i) => {
    return `<article class="${"blog-selection svelte-tr6fj3"}">${escape(blog2.title)}
          ${escape(blog2.description)}
          index ${escape(i)}
        </article>`;
  })}</div>
    <button aria-label="${"Go to next card in carousel"}" class="${"right_button svelte-tr6fj3"}"><!-- HTML_TAG_START -->${rightButton}<!-- HTML_TAG_END --></button></div>
  <div class="${"wrapper svelte-tr6fj3"}"${add_attribute("this", blog, 0)}><h2>Read my blog</h2>
    <p>I don&#39;t just focus in one topic, so here&#39;s a some articles</p>
    <a href="${escape(base, true) + "/blog"}"${add_attribute("this", blogButton, 0)}>Go read the blog</a></div>
</section>`;
});
const BlogShowcase_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#blog.svelte-v6puhe{display:flex;flex-direction:column;gap:2rem;text-align:center;padding:3rem 0}p.svelte-v6puhe{max-width:40ch;margin-inline:auto}section.svelte-v6puhe{display:grid;place-items:center;justify-content:center;grid-template-columns:repeat(auto-fill, minmax(min(22rem, 100%), 1fr));width:100%;gap:1rem}article.svelte-v6puhe{background-color:var(--clr-background-alt);width:100%;height:100%}",
  map: null
};
const BlogShowcase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"focus wider svelte-v6puhe"}" id="${"blog"}"><a href="${"#blog"}">test</a>
  <h2>Check out my blog</h2>
  <p class="${"svelte-v6puhe"}">I don&#39;t focus on just one subject, so here&#39;s a recommendation of a few of my
    posts
  </p>
  <section class="${"svelte-v6puhe"}"><article class="${"base attn svelte-v6puhe"}"><h3>Title</h3>
      <p class="${"svelte-v6puhe"}">Description</p></article>

    <article class="${"base attn svelte-v6puhe"}"><h3>Title</h3>
      <p class="${"svelte-v6puhe"}">Description</p></article>

    <article class="${"base attn svelte-v6puhe"}"><h3>Title</h3>
      <p class="${"svelte-v6puhe"}">Description</p></article></section>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-fwmzht{display:grid;place-content:center}@media screen and (min-width: 48rem){main.svelte-fwmzht{min-height:min(100vh, 80rem)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main role="${"banner"}" class="${"banner svelte-fwmzht"}">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}</main>
${validate_component(BlogShowcase, "BlogShowcase").$$render($$result, {}, {}, {})}
<section id="${"projects"}">${validate_component(PresentationBlog, "PresentationBlog").$$render($$result, {}, {}, {})}</section>

${$$result.head += `<!-- HEAD_svelte-2i912y_START -->${$$result.title = `<title>${escape(TITLE)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", DESCRIPTION, 0)}><meta itemprop="${"name"}"${add_attribute("content", TITLE, 0)}><meta itemprop="${"description"}"${add_attribute("content", DESCRIPTION, 0)}><meta itemprop="${"image"}" content="${""}"><meta property="${"og:url"}"${add_attribute("content", URL, 0)}><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:title"}"${add_attribute("content", TITLE, 0)}><meta property="${"og:description"}"${add_attribute("content", DESCRIPTION, 0)}><meta property="${"og:image"}" content="${""}"><meta name="${"twitter:card"}" content="${"summary_large_image"}"><meta name="${"twitter:title"}"${add_attribute("content", TITLE, 0)}><meta name="${"twitter:description"}"${add_attribute("content", DESCRIPTION, 0)}><meta name="${"twitter:image"}" content="${""}"><!-- HEAD_svelte-2i912y_END -->`, ""}`;
});
export {
  Page as default
};
