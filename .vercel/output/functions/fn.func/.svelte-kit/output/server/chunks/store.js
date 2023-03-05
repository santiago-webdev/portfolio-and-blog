import { i as getContext, c as create_ssr_component, e as escape, b as subscribe, f as add_attribute, v as validate_component, j as get_store_value } from "./index2.js";
import { T as TITLE_BLOG_COMPOSE } from "./config.js";
/* empty css                                      */import { r as readable, w as writable } from "./index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const navigating = {
  subscribe(fn) {
    const store = getStores().navigating;
    return store.subscribe(fn);
  }
};
class Post {
  title;
  description;
  date;
  href;
  extension;
  metadata;
  constructor(href, title2, description2, date2, extension, metadata2) {
    this.href = href;
    this.title = title2;
    this.description = description2;
    this.date = date2;
    this.extension = extension;
    this.metadata = metadata2;
  }
}
const relativeTime = (now, postDate) => {
  const difference = now.getTime() - postDate.getTime();
  const formatter = new Intl.RelativeTimeFormat("en", { style: "long" });
  let value;
  let unit;
  if (difference < 1e3) {
    return "just now";
  } else if (difference < 6e4) {
    value = Math.floor(difference / 1e3);
    unit = "second";
  } else if (difference < 36e5) {
    value = Math.floor(difference / 6e4);
    unit = "minute";
  } else if (difference < 864e5) {
    value = Math.floor(difference / 36e5);
    unit = "hour";
  } else {
    value = Math.floor(difference / 864e5);
    unit = "day";
  }
  return formatter.format(-value, unit);
};
const readableDate = (dateString) => {
  const date2 = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return formatter.format(date2);
};
let baseFontSize = 0;
function getBaseFontSize() {
  if (baseFontSize || typeof document === "undefined" || !document.documentElement)
    return baseFontSize;
  const root = document.documentElement;
  baseFontSize = parseFloat(getComputedStyle(root).fontSize);
  return baseFontSize;
}
function inPixels(nmb) {
  const numericString = nmb.replace(/[^0-9]/g, "");
  const numericValue = parseInt(numericString, 10);
  return parseInt(`${numericValue * getBaseFontSize()}`);
}
let title$3 = "This is a 1 post";
let description$3 = "This is description 1";
const _1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Test number 1</h1>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _1,
  description: description$3,
  title: title$3
}, Symbol.toStringTag, { value: "Module" }));
let title$2 = "This is a 2 post";
let description$2 = "This is description 2";
const _2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Test number 2</h1>`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _2,
  description: description$2,
  title: title$2
}, Symbol.toStringTag, { value: "Module" }));
let title$1 = "This is a 3 post";
let description$1 = "This is the description number 3 three(3) antoehun toehuntaoeuhan toehuntaoeuhan toehuntaoeuhan antoehun antoehun toehuntaoeuhan oehtuoheuna htoeutheo";
let date$1 = "2023-01-21 19:23";
const _3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>${escape(title$1)}</h1>
  <p>333333333333333</p></article>`;
});
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  date: date$1,
  default: _3,
  description: description$1,
  title: title$1
}, Symbol.toStringTag, { value: "Module" }));
const Template_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-4xdosg.svelte-4xdosg{display:grid;margin-inline:auto}.wrapper-header.svelte-4xdosg.svelte-4xdosg{display:grid;gap:1rem}.wrapper-header.svelte-4xdosg p.svelte-4xdosg{color:var(--clr-subtitle);max-width:44ch;margin-inline:auto}small.svelte-4xdosg.svelte-4xdosg{margin-inline:auto;color:var(--clr-muted-600)}.wip.svelte-4xdosg.svelte-4xdosg{display:grid;place-items:center}time.svelte-4xdosg.svelte-4xdosg{display:flex;place-items:center}",
  map: null
};
const Template = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title: title2 = "" } = $$props;
  let { date: date2 = "" } = $$props;
  let { description: description2 = "" } = $$props;
  let { finished = false } = $$props;
  const dateRelative = relativeTime(new Date(), new Date(date2));
  const dateReadable = readableDate(date2);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.date === void 0 && $$bindings.date && date2 !== void 0)
    $$bindings.date(date2);
  if ($$props.description === void 0 && $$bindings.description && description2 !== void 0)
    $$bindings.description(description2);
  if ($$props.finished === void 0 && $$bindings.finished && finished !== void 0)
    $$bindings.finished(finished);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main><header id="${"page-header-info"}" class="${"banner"}"><div aria-labelledby="${"page-header-info"}" class="${"wrapper-header wide svelte-4xdosg"}">${`<h1>${escape(title2)}</h1>`}
      <p class="${"svelte-4xdosg"}">${escape(description2)}</p>
      ${!finished ? `<div class="${"wip svelte-4xdosg"}"><small class="${"svelte-4xdosg"}">🏗 Construction site, keep out 🏗️ </small>
          <small class="${"svelte-4xdosg"}">🚧 Authorized personnel only 🚧 </small></div>` : ``}
      <small class="${"svelte-4xdosg"}"><time${add_attribute("datetime", date2, 0)} class="${"svelte-4xdosg"}"><iconify-icon icon="${"lucide:calendar"}"></iconify-icon>: ${escape(dateRelative)}
          <div aria-orientation="${"vertical"}" role="${"separator"}">•</div>
          ${escape(dateReadable)}</time></small></div></header>
  <article class="${"wide svelte-4xdosg"}">${slots.default ? slots.default({}) : ``}</article></main>

${$$result.head += `<!-- HEAD_svelte-1nv67zy_START -->${$$result.title = `<title>${escape(title2)}${escape(TITLE_BLOG_COMPOSE)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description2, 0)}><meta itemprop="${"name"}"${add_attribute("content", title2, 0)}><meta itemprop="${"description"}"${add_attribute("content", description2, 0)}><meta itemprop="${"image"}" content="${""}"><meta property="${"og:url"}"${add_attribute("content", $page.url.toString(), 0)}><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:title"}"${add_attribute("content", title2, 0)}><meta property="${"og:description"}"${add_attribute("content", description2, 0)}><meta property="${"og:image"}" content="${""}"><meta name="${"twitter:card"}" content="${"summary_large_image"}"><meta name="${"twitter:title"}"${add_attribute("content", title2, 0)}><meta name="${"twitter:description"}"${add_attribute("content", description2, 0)}><meta name="${"twitter:image"}" content="${""}"><!-- HEAD_svelte-1nv67zy_END -->`, ""}`;
});
const metadata$3 = {
  "title": "This is a 4 post",
  "description": "This is the description number 4 four(4) antoehun toehuntaoeuhan toehuntaoeuhan toehuntaoeuhan antoehun antoehun toehuntaoeuhan oehtuoheuna htoeutheo",
  "date": "2023-01-23"
};
const _4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Template, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata$3), {}, {
    default: () => {
      return `<h1>TEST TEST H1</h1>
<p>4444444 paragraph
Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>`;
    }
  })}`;
});
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _4,
  metadata: metadata$3
}, Symbol.toStringTag, { value: "Module" }));
let title = "This is a hello world post";
let description = "This is the description hello world";
let date = "2023-01-14";
const Hello_world = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1>${escape(title)}</h1>
  <p>This should be the start, explaining how I built this site</p></article>`;
});
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  date,
  default: Hello_world,
  description,
  title
}, Symbol.toStringTag, { value: "Module" }));
const metadata$2 = {
  "title": "How this blog was built",
  "date": "2023-01-27 20:59",
  "description": "How to build your own static blog written in sveltekit and deploy it to GitHub Pages.",
  "finished": false
};
const How_to_build_a_blog_in_sveltekit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Template, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata$2), {}, {
    default: () => {
      return `<h1>Let’s get started</h1>
<h2>Here I’ll explain how I built this blog using Sveltekit</h2>
<h3>Test</h3>
<p>Let’s get started</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">yarn</span> create svelte <span class="token builtin class-name">.</span></code>`}<!-- HTML_TAG_END --></pre>
<h3>More tests</h3>
<pre class="${"language-typescript"}"><!-- HTML_TAG_START -->${`<code class="language-typescript"><span class="token keyword">let</span> hello<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'world'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">printHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-svelte"}"><!-- HTML_TAG_START -->${`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> IconSearch <span class="token keyword">from</span> <span class="token string">'$lib/Icons/IconSearch.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> FilteredPosts <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$lib/components/Search/store'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> base <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> goto <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/navigation'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> inPixels<span class="token punctuation">,</span> readableDate <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$lib/utils/utils'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> searchHandler <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$lib/components/Search/utils'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Separator <span class="token keyword">from</span> <span class="token string">'./Separator.svelte'</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> <span class="token literal-property property">modal</span><span class="token operator">:</span> HTMLDialogElement<span class="token punctuation">,</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> HTMLInputElement<span class="token punctuation">,</span>
    value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">,</span>
    onDesktop <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    outerWidth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    complex <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    touchSupport <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">toggleModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    modal<span class="token punctuation">.</span>open
      <span class="token operator">?</span> <span class="token punctuation">(</span>modal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token punctuation">(</span>modal<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">onCtrlK</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> KeyboardEvent</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> <span class="token punctuation">&#123;</span> key<span class="token punctuation">,</span> ctrlKey<span class="token punctuation">,</span> repeat <span class="token punctuation">&#125;</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>repeat<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">case</span> <span class="token string">'k'</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ctrlKey<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">toggleModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">toggleModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">goto</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>base<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/blog</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>$FilteredPosts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>href<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>touchSupport <span class="token operator">=</span> <span class="token string">'ontouchstart'</span> <span class="token keyword">in</span> window <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    modal<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token operator">===</span> modal<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        modal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> onDesktop <span class="token operator">=</span> outerWidth <span class="token operator">></span> <span class="token function">inPixels</span><span class="token punctuation">(</span><span class="token string">'48rem'</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> complex <span class="token operator">=</span> onDesktop <span class="token operator">||</span> <span class="token operator">!</span>touchSupport<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })}`;
});
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: How_to_build_a_blog_in_sveltekit,
  metadata: metadata$2
}, Symbol.toStringTag, { value: "Module" }));
const metadata$1 = {
  "date": "2023-02-11 18:34",
  "title": "New Test title"
};
const New_test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Template, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata$1), {}, {
    default: () => {
      return `<h2>title</h2>`;
    }
  })}`;
});
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: New_test,
  metadata: metadata$1
}, Symbol.toStringTag, { value: "Module" }));
const metadata = {
  "date": "2023-02-11 18:34",
  "title": "Test test title",
  "description": "testaoenuhoenuht aontehuotaheunoheu aonetuhonatehuteouh"
};
const Test_test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Template, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h2>Test test title</h2>
<p>notehuntehu</p>`;
    }
  })}`;
});
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Test_test,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
const getPosts = () => {
  const tmpPost = [];
  const modules = /* @__PURE__ */ Object.assign({
    "../../posts/1.svelte": __vite_glob_0_0,
    "../../posts/2.svelte": __vite_glob_0_1,
    "../../posts/3.svelte": __vite_glob_0_2,
    "../../posts/4.md": __vite_glob_0_3,
    "../../posts/hello-world.svelte": __vite_glob_0_4,
    "../../posts/how-to-build-a-blog-in-sveltekit.md": __vite_glob_0_5,
    "../../posts/new_test.md": __vite_glob_0_6,
    "../../posts/test-test.md": __vite_glob_0_7
  });
  function isMarkdown(path) {
    const regex = "^.*.md$";
    const newStr = path;
    const replaced = newStr.search(regex) >= 0;
    return replaced && "md" || "svelte";
  }
  for (const path in modules) {
    const postData = modules[path];
    const extension = isMarkdown(path);
    const href = path.replace("../../posts", "").replace(".svelte", "").replace(".md", "");
    if (postData.metadata === void 0) {
      tmpPost.unshift(
        new Post(
          href,
          postData.title,
          postData.description,
          postData.date,
          extension
        )
      );
    } else {
      const postMD = postData.metadata;
      tmpPost.unshift(
        new Post(href, postMD.title, postMD.description, postMD.date, extension)
      );
    }
  }
  return tmpPost;
};
const Posts = readable(getPosts());
const FilteredPosts = writable(get_store_value(Posts));
const FilterValue = writable("");
export {
  FilteredPosts as F,
  Posts as P,
  __vite_glob_0_0 as _,
  FilterValue as a,
  __vite_glob_0_1 as b,
  __vite_glob_0_2 as c,
  __vite_glob_0_3 as d,
  __vite_glob_0_4 as e,
  __vite_glob_0_5 as f,
  __vite_glob_0_6 as g,
  __vite_glob_0_7 as h,
  inPixels as i,
  navigating as n,
  page as p,
  readableDate as r
};
