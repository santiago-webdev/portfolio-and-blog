import { c as create_ssr_component, b as subscribe, e as escape, d as null_to_empty, v as validate_component, f as add_attribute, h as each } from "../../../chunks/index2.js";
import { a as FilterValue, F as FilteredPosts, r as readableDate } from "../../../chunks/store.js";
import { b as base } from "../../../chunks/paths.js";
import { I as IconSearch } from "../../../chunks/IconSearch.js";
import { D as DESCRIPTION, c as TITLE_BLOG, d as URL_BLOG } from "../../../chunks/config.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const preloadData = guard("preloadData");
const SearchBar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "form.svelte-6324aw{display:grid;grid-template-columns:auto 1fr;overflow:hidden;margin-inline:auto;position:relative}.form-modal.svelte-6324aw{box-shadow:none;border:none}input.svelte-6324aw:-moz-placeholder,input.svelte-6324aw::-moz-placeholder{opacity:1}input[type='search'].svelte-6324aw::-ms-clear{display:none}input[type='search'].svelte-6324aw::-webkit-search-cancel-button{display:none}input.svelte-6324aw,input.svelte-6324aw::placeholder,button.svelte-6324aw{color:inherit;background-color:inherit}input.svelte-6324aw{border:none;outline:none;width:100%;padding:0.6rem 1.3rem 0.6rem 0}input.svelte-6324aw:focus::placeholder{color:transparent}button.svelte-6324aw{display:grid;place-items:center;padding-inline:1.3rem 0.8rem}kbd.svelte-6324aw{position:absolute;right:1.3rem;height:100%;display:grid;place-items:center;color:var(--clr-text-muted);pointer-events:none}",
  map: null
};
const placeholderDefault = "Search";
const SearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $FilterValue, $$unsubscribe_FilterValue;
  let $FilteredPosts, $$unsubscribe_FilteredPosts;
  $$unsubscribe_FilterValue = subscribe(FilterValue, (value2) => $FilterValue = value2);
  $$unsubscribe_FilteredPosts = subscribe(FilteredPosts, (value2) => $FilteredPosts = value2);
  let { input } = $$props;
  let { modal = false } = $$props;
  let { placeholder = placeholderDefault } = $$props;
  let value = "";
  FilterValue.subscribe(() => {
    value = $FilterValue;
  });
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.modal === void 0 && $$bindings.modal && modal !== void 0)
    $$bindings.modal(modal);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  $$result.css.add(css$2);
  {
    if ($FilteredPosts.length === 1)
      preloadData(`${base}/blog${$FilteredPosts[0].href}`);
  }
  $$unsubscribe_FilterValue();
  $$unsubscribe_FilteredPosts();
  return `<form class="${[
    escape(
      null_to_empty($FilterValue.trim().length !== 0 ? "wide attn attn-focus" : "wide attn attn-gradient-border"),
      true
    ) + " svelte-6324aw",
    modal ? "form-modal" : ""
  ].join(" ").trim()}"><button aria-label="${"Go to selected blog"}" type="${"submit"}" class="${"svelte-6324aw"}">${validate_component(IconSearch, "IconSearch").$$render($$result, {}, {}, {})}</button>

  <input${add_attribute("placeholder", placeholder, 0)} aria-keyshortcuts="${"Control+K"}" type="${"search"}" id="${"search"}" list="${"search-terms"}" autocomplete="${"off"}" class="${"svelte-6324aw"}"${add_attribute("value", value, 0)}${add_attribute("this", input, 0)}>
  ${!modal ? `<kbd class="${"svelte-6324aw"}">Ctrl K</kbd>` : ``}
</form>`;
});
const BlogHeader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper-header.svelte-1uqgpty{display:grid;place-items:center;gap:1rem;overflow:hidden;transition:height 100ms ease-in-out 0s;padding-bottom:1rem}p.svelte-1uqgpty{width:min(33ch, 100%);margin-inline:auto}",
  map: null
};
const BlogHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"wrapper-header svelte-1uqgpty"}"><h1>Blog</h1>
  <p class="${"svelte-1uqgpty"}">In this blog you are going to find articles about <strong>Linux</strong>,
    <strong>web technologies</strong>
    and
    <strong>frontend development</strong>.
  </p>
</div>`;
});
const FilteredPostsCards_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-30mala.svelte-30mala{padding:2rem 0;display:grid;gap:var(--gap);grid-template-columns:repeat(auto-fill, minmax(min(23rem, 100%), 1fr));margin-inline:auto}li.svelte-30mala.svelte-30mala{transition:opacity 0.3s}ul.svelte-30mala:hover>li.svelte-30mala{opacity:0.8}ul.svelte-30mala:hover>li.svelte-30mala:hover{opacity:1}@supports (grid-template-rows: masonry){ul.svelte-30mala.svelte-30mala{grid-template-rows:masonry}}article.svelte-30mala.svelte-30mala{display:grid;gap:0.5rem;grid-template-rows:auto 1fr auto;padding:1rem;border-radius:1.1rem;height:100%;transition:transform 100ms, color 100ms, background-color 500ms,\n      border 100ms;color:var(--clr-muted-600)}article.svelte-30mala.svelte-30mala:hover{transform:scale(1.02)}@media(prefers-reduced-motion: reduce){article.svelte-30mala.svelte-30mala:hover{transform:scale(1)}}h2.svelte-30mala.svelte-30mala{font-weight:700;font-size:clamp(1rem, 8vw, 1.6rem);color:var(--clr-title);line-height:calc(1.5 * clamp(1rem, 8vw, 1.8rem))}",
  map: null
};
const FilteredPostsCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $FilteredPosts, $$unsubscribe_FilteredPosts;
  $$unsubscribe_FilteredPosts = subscribe(FilteredPosts, (value) => $FilteredPosts = value);
  let postList;
  $$result.css.add(css);
  $$unsubscribe_FilteredPosts();
  return `<section role="${"complementary"}"><ul class="${"wider svelte-30mala"}"${add_attribute("this", postList, 0)}>${each($FilteredPosts, (post) => {
    return `<li class="${"svelte-30mala"}"><a href="${escape(base, true) + "/blog" + escape(post.href, true)}"><article class="${"base attn svelte-30mala"}"><h2 class="${"svelte-30mala"}">${escape(post.title)}</h2>
            ${post.description ? `<p>${escape(post.description)}</p>` : `<p>No description was given.</p>`}
            ${post.date ? `<small>Published: ${escape(readableDate(post.date))}</small>` : ``}
          </article></a>
      </li>`;
  })}</ul>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let input;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main role="${"banner"}" class="${"banner wide"}">${validate_component(BlogHeader, "BlogHeader").$$render($$result, {}, {}, {})}
  ${validate_component(SearchBar, "SearchBar").$$render(
      $$result,
      { input },
      {
        input: ($$value) => {
          input = $$value;
          $$settled = false;
        }
      },
      {}
    )}</main>
${validate_component(FilteredPostsCards, "FilteredPostsCards").$$render($$result, {}, {}, {})}

${$$result.head += `<!-- HEAD_svelte-jqchef_START -->${$$result.title = `<title>${escape(TITLE_BLOG)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", DESCRIPTION, 0)}><meta itemprop="${"name"}"${add_attribute("content", TITLE_BLOG, 0)}><meta itemprop="${"description"}"${add_attribute("content", DESCRIPTION, 0)}><meta itemprop="${"image"}" content="${""}"><meta property="${"og:url"}"${add_attribute("content", URL_BLOG, 0)}><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:title"}"${add_attribute("content", TITLE_BLOG, 0)}><meta property="${"og:description"}"${add_attribute("content", DESCRIPTION, 0)}><meta property="${"og:image"}" content="${""}"><meta name="${"twitter:card"}" content="${"summary_large_image"}"><meta name="${"twitter:title"}"${add_attribute("content", TITLE_BLOG, 0)}><meta name="${"twitter:description"}"${add_attribute("content", DESCRIPTION, 0)}><meta name="${"twitter:image"}" content="${""}"><!-- HEAD_svelte-jqchef_END -->`, ""}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
