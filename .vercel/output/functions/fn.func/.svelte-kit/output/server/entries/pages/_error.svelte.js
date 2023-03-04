import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index2.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                                                 */const css$1 = {
  code: "span.svelte-c0e202{-webkit-text-stroke:0.1rem var(--color);color:transparent}",
  map: null
};
const Hollow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$1);
  return `<span style="${"--color: " + escape(color, true)}" class="${"svelte-c0e202"}">${slots.default ? slots.default({}) : ``}
</span>`;
});
const Error_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-17cdesx,.goback.svelte-17cdesx{display:grid;place-items:center;place-content:center;gap:2rem;margin-inline:auto;text-align:center;padding:auto 6rem}.goback.svelte-17cdesx{padding:3rem 0}a.svelte-17cdesx{display:flex;place-items:center;place-content:center;padding:1rem min(100%, 6rem);font-size:clamp(0.8rem, 8vw, 1.42rem);color:var(--clr-text)}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"wide banner svelte-17cdesx"}"><h1>${validate_component(Hollow, "Hollow").$$render($$result, { color: "var(--clr-title)" }, {}, {
    default: () => {
      return `404`;
    }
  })}: This page doesn&#39;t exists
  </h1></section>
<div class="${"wide goback svelte-17cdesx"}">
  <p>You can either use the search bar located in the navbar or:</p>
  <a href="${escape(base, true) + "/"}" aria-label="${"Link to go back to home"}" class="${"attn attnactive svelte-17cdesx"}">Go back Home</a>
</div>`;
});
const Error_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Error, "Error").$$render($$result, {}, {}, {})}`;
});
export {
  Error_1 as default
};
