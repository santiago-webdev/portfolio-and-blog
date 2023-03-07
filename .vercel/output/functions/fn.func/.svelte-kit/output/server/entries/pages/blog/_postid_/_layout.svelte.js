import { c as create_ssr_component } from "../../../../chunks/index2.js";
const index = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}

${$$result.head += `<!-- HEAD_svelte-zlwswt_START --><link rel="${"stylesheet"}" href="${"/syntax-highlighting.css"}" type="${"text/css"}"><!-- HEAD_svelte-zlwswt_END -->`, ""}`;
});
export {
  Layout as default
};
