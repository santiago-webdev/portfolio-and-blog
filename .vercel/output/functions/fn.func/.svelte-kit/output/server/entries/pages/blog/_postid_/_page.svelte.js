import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let component;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  component = data.content;
  return `${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
