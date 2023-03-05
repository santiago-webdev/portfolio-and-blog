import { c as create_ssr_component, b as add_attribute, d as subscribe, e as escape, f as null_to_empty, v as validate_component, g as add_styles, h as each } from "../../chunks/index2.js";
import { b as base } from "../../chunks/paths.js";
import { F as FilteredPosts, i as inPixels, r as readableDate, n as navigating, p as page } from "../../chunks/store.js";
import { w as writable } from "../../chunks/index.js";
import { I as IconSearch } from "../../chunks/IconSearch.js";
import { A as AUTHOR, a as AUTHOR_NAME } from "../../chunks/config.js";
import "iconify-icon";
const navItems = writable([
  { separator: true, label: "Home", href: `${base}/` },
  { label: "Blog", href: `${base}/blog` },
  { label: "Resume", href: `${base}/about` },
  { label: "Projects", href: `${base}/projects` },
  { separator: true, label: "About", href: `${base}/about` },
  { label: "Contact", href: `${base}/contact`, decoration: "border" }
]);
const Separator_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "hr.svelte-yl5m4k{width:100%;height:1px;background-color:blue;border:0}.ui-divider.svelte-yl5m4k{height:1.6em;border-left:1px solid var(--clr-muted-300)}",
  map: null
};
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { render = false } = $$props;
  let { orientation } = $$props;
  if ($$props.render === void 0 && $$bindings.render && render !== void 0)
    $$bindings.render(render);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  $$result.css.add(css$6);
  return `${render ? `${orientation === "horizontal" ? `<hr class="${"svelte-yl5m4k"}">` : `${orientation === "vertical" ? `<div${add_attribute("aria-orientation", orientation, 0)} role="${"separator"}" class="${"ui-divider svelte-yl5m4k"}"></div>` : ``}`}` : ``}`;
});
const WidgetModal_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "button.svelte-kpv43e.svelte-kpv43e{display:flex;place-items:center;padding:0.2rem 0.8rem;gap:0.6rem;border-radius:1rem}span.svelte-kpv43e.svelte-kpv43e{text-decoration:underline solid var(--accent-orange) 0.15em;text-underline-offset:0em}kbd.svelte-kpv43e.svelte-kpv43e{pointer-events:none;border-top:1px solid var(--clr-text-muted);border-left:1px solid var(--clr-text-muted);border-right:3px solid var(--clr-text-muted);border-bottom:3px solid var(--clr-text-muted);border-radius:0.4rem;padding-inline:0.3rem}.svelte-kpv43e.svelte-kpv43e:modal{padding:0;margin:0;margin-inline:auto;top:5vh}.svelte-kpv43e.svelte-kpv43e:modal::backdrop{background-color:rgba(31 31 37 / 0.8);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 8px 32px 0 rgba(0, 0, 0, 0.2);cursor:pointer}.svelte-kpv43e:modal>.svelte-kpv43e{padding:1rem}.svelte-kpv43e:modal button.svelte-kpv43e{padding-left:0}form.svelte-kpv43e.svelte-kpv43e{display:flex;flex-direction:column;gap:1rem}.searchbar.svelte-kpv43e.svelte-kpv43e{display:flex}input.svelte-kpv43e.svelte-kpv43e:-moz-placeholder,input.svelte-kpv43e.svelte-kpv43e::-moz-placeholder{opacity:1}input[type='search'].svelte-kpv43e.svelte-kpv43e::-ms-clear{display:none}input[type='search'].svelte-kpv43e.svelte-kpv43e::-webkit-search-cancel-button{display:none}input.svelte-kpv43e.svelte-kpv43e{border:none;outline:none;width:100%}ul.svelte-kpv43e.svelte-kpv43e{width:100%}",
  map: null
};
const WidgetModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $FilteredPosts, $$unsubscribe_FilteredPosts;
  $$unsubscribe_FilteredPosts = subscribe(FilteredPosts, (value2) => $FilteredPosts = value2);
  var modal, input, value = "", onDesktop = true, outerWidth = 0, complex = true, touchSupport = false;
  $$result.css.add(css$5);
  onDesktop = outerWidth > inPixels("48rem") ? true : false;
  complex = onDesktop || !touchSupport;
  $$unsubscribe_FilteredPosts();
  return `

<button class="${escape(null_to_empty(complex ? "shiny hover" : ""), true) + " svelte-kpv43e"}" aria-keyshortcuts="${"Control+K"}" aria-label="${"Click to open the modal box to search for blogs"}">${validate_component(IconSearch, "IconSearch").$$render($$result, {}, {}, {})}
  ${complex ? `<span class="${"svelte-kpv43e"}">    </span>
    <kbd class="${"svelte-kpv43e"}">Ctrl K</kbd>` : ``}</button>
<dialog class="${"wide shiny blur svelte-kpv43e"}"${add_attribute("this", modal, 0)}><form class="${"svelte-kpv43e"}"><label for="${"modal-search"}" class="${"svelte-kpv43e"}">Search for a blog post:</label>
    <div class="${"searchbar svelte-kpv43e"}"><button aria-label="${"Go to selected blog"}" type="${"submit"}" class="${"svelte-kpv43e"}">${validate_component(IconSearch, "IconSearch").$$render($$result, {}, {}, {})}</button>
      <input placeholder="${"Search for a blog post"}" type="${"search"}" id="${"modal-search"}" autocomplete="${"off"}" class="${"svelte-kpv43e"}"${add_attribute("value", value, 0)}${add_attribute("this", input, 0)}></div></form>
  <ul class="${"svelte-kpv43e"}"${add_styles({
    "display": value.length ? "grid" : "none"
  })}>${each($FilteredPosts.slice(0, 4), (post) => {
    return `${validate_component(Separator, "Separator").$$render($$result, { render: true, orientation: "horizontal" }, {}, {})}
      <li class="${"svelte-kpv43e"}"><a href="${escape(base, true) + "/blog" + escape(post.href, true)}" class="${"svelte-kpv43e"}"><article class="${"svelte-kpv43e"}"><h3 class="${"svelte-kpv43e"}">${validate_component(IconSearch, "IconSearch").$$render($$result, {}, {}, {})}
              ${escape(post.title)}</h3>
            ${post.description ? `<p class="${"svelte-kpv43e"}">${escape(post.description)}</p>` : `<p class="${"svelte-kpv43e"}">No description was given.</p>`}
            ${post.date ? `<small class="${"svelte-kpv43e"}">Published: ${escape(readableDate(post.date))}</small>` : ``}
          </article></a>
      </li>`;
  })}</ul>
</dialog>`;
});
const WidgetTheme_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-1ptr8c4{position:relative}dialog.svelte-1ptr8c4{position:absolute;margin:0;border:transparent;margin-top:var(--gap)}fieldset.svelte-1ptr8c4{display:grid;border:2px solid var(--clr-muted-300);border-radius:0.8rem}legend.svelte-1ptr8c4{padding-inline:0.5ch;color:var(--clr-title);margin-inline:auto;font-weight:bold;font-size:110%}input.svelte-1ptr8c4:checked{background-color:red;outline:3px hotpink solid}",
  map: null
};
const WidgetTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dialog;
  let button;
  $$result.css.add(css$4);
  return `<button class="${"svelte-1ptr8c4"}"${add_attribute("this", button, 0)}>Theme in use </button>
<dialog class="${"attn attnactive trn-border svelte-1ptr8c4"}"${add_attribute("this", dialog, 0)}><form><fieldset class="${"svelte-1ptr8c4"}"><legend class="${"svelte-1ptr8c4"}">Choose a colorscheme</legend>

      <section><label for="${"theme"}">Light Lorem, ipsum dolor. </label>
        <input type="${"radio"}" name="${"theme"}" id="${"light"}" class="${"svelte-1ptr8c4"}"></section>

      <section><label for="${"theme"}">Dark</label>
        <input type="${"radio"}" name="${"theme"}" id="${"dark"}" class="${"svelte-1ptr8c4"}"></section>

      <section><label for="${"theme"}">System</label>
        <input type="${"radio"}" name="${"theme"}" id="${"system"}" checked class="${"svelte-1ptr8c4"}"></section></fieldset></form>
</dialog>`;
});
const NavBar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-gobibg.svelte-gobibg{inset:3px 0 auto 0;position:sticky;background-color:var(--clr-bg-400);padding:0.4rem 0;transition:all 0.3s;z-index:999;transform:translateY(-200%)}.scrollY.svelte-gobibg.svelte-gobibg{box-shadow:6px 6px 6px 0px rgba(0, 0, 0, 0.1);-webkit-box-shadow:6px 6px 6px 0px rgba(0, 0, 0, 0.1);-moz-box-shadow:6px 6px 6px 0px rgba(0, 0, 0, 0.1);background:var(--clr-bg-400-t);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}@media(prefers-reduced-motion: reduce){nav.svelte-gobibg.svelte-gobibg{transition:none}}a.svelte-gobibg.svelte-gobibg{padding:0.4em 0.8em;display:flex;place-items:center}a.svelte-gobibg.svelte-gobibg:first-child{padding-left:0}a.svelte-gobibg.svelte-gobibg:hover{color:var(--clr-txt-hover)}@media(hover: none){a.svelte-gobibg.svelte-gobibg:hover{color:inherit}}a.svelte-gobibg.svelte-gobibg:focus{color:var(--clr-txt-clicked)}#main-navigation.svelte-gobibg.svelte-gobibg{display:grid;place-items:center;margin-inline:auto;justify-content:space-between;grid-template-columns:1fr auto}button.svelte-gobibg.svelte-gobibg{display:flex;place-items:center}.navItems.svelte-gobibg.svelte-gobibg{padding-left:1rem;width:100%;display:flex;justify-self:center;place-items:center}.wrapper-left.svelte-gobibg.svelte-gobibg{display:flex;justify-content:space-between;width:100%}.widget.svelte-gobibg.svelte-gobibg{display:flex;flex-wrap:wrap;gap:1rem}@media screen and (max-width: 48rem){.navItems.svelte-gobibg.svelte-gobibg{flex-direction:column;padding:1rem;grid-column:1 / span 2}.wrapper-left.svelte-gobibg a.svelte-gobibg{padding-top:0;padding-bottom:0}}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $navItems, $$unsubscribe_navItems;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_navItems = subscribe(navItems, (value) => $navItems = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  var expMenu = false, onDesktop = true, scrollY = 0, outerWidth = 0;
  $$result.css.add(css$3);
  onDesktop = outerWidth > inPixels("48rem") ? true : false;
  expMenu = $navigating || onDesktop ? true : false;
  $$unsubscribe_navigating();
  $$unsubscribe_navItems();
  $$unsubscribe_page();
  return `

<nav aria-labelledby="${"main-navigation"}" class="${[
    "artifact-ui svelte-gobibg",
    " " + (!onDesktop && expMenu && scrollY > 30 ? "banner" : "")
  ].join(" ").trim()}"><div id="${"main-navigation"}" class="${"wider svelte-gobibg"}"><div class="${"wrapper-left svelte-gobibg"}"><a href="${escape(base, true) + "/"}" aria-label="${"Logo of this site and link to Home"}" class="${"svelte-gobibg"}">${escape(onDesktop && AUTHOR || "SG")}</a>
      <div class="${"widget svelte-gobibg"}">${validate_component(WidgetModal, "WidgetModal").$$render($$result, {}, {}, {})}
        ${validate_component(WidgetTheme, "WidgetTheme").$$render($$result, {}, {}, {})}</div></div>
    <button aria-label="${"Toggle navigation list"}"${add_attribute("aria-expanded", expMenu, 0)} class="${"svelte-gobibg"}"${add_styles({ "display": onDesktop ? "none" : "" })}>
      ${expMenu ? `<iconify-icon icon="${"lucide:x"}" width="${"26"}" height="${"26"}"></iconify-icon>` : `<iconify-icon icon="${"lucide:grip"}" width="${"26"}" height="${"26"}"></iconify-icon>`}</button>
    ${expMenu || onDesktop ? `<div class="${"navItems svelte-gobibg"}">${each($navItems, (item) => {
    return `${item.separator ? `<div style="${"border-left: 1px solid var(--clr-muted-100); height: 2rem"}" aria-orientation="${"vertical"}" role="${"separator"}"></div>` : ``}
          <a${add_attribute(
      "aria-current",
      item.href === $page.url.pathname || $page.url.pathname.startsWith(item.href) && `/` !== item.href ? "page" : void 0,
      0
    )} aria-label="${"Link to " + escape(item.label, true)}" class="${escape(null_to_empty(item.decoration ? "block hover" : ""), true) + " svelte-gobibg"}"${add_attribute("href", item.href, 0)}>${escape(item.label)}</a>`;
  })}</div>` : ``}</div>
</nav>`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-87qrtx.svelte-87qrtx{min-height:min(50vh, calc(var(--wide) / (16 / 9)));padding-bottom:0}#main-footer.svelte-87qrtx.svelte-87qrtx{display:grid;grid-template-rows:1fr auto}h3.svelte-87qrtx.svelte-87qrtx:last-child{font-weight:lighter;color:var(--clr-text-muted)}a.svelte-87qrtx.svelte-87qrtx{display:flex;place-items:center}section.svelte-87qrtx.svelte-87qrtx{display:flex;justify-content:space-between;align-items:center;min-height:60px;margin-inline:auto}ul.svelte-87qrtx.svelte-87qrtx{display:flex;place-items:center;flex-direction:column;align-items:flex-start;padding:inherit;gap:1.5rem}.wrapper-bottom.svelte-87qrtx.svelte-87qrtx{width:100%;background-color:var(--clr-bg-600)}.bottom.svelte-87qrtx.svelte-87qrtx{display:flex;flex-wrap:wrap;gap:1.5rem;padding:1.5rem 0}.bottom.svelte-87qrtx a.svelte-87qrtx{display:flex;place-items:center;justify-content:center;flex-wrap:wrap}.upper.svelte-87qrtx.svelte-87qrtx{display:grid;gap:3rem;grid-template-columns:repeat(auto-fill, minmax(min(30ch, 100%), 1fr));padding:1rem}.copyright.svelte-87qrtx.svelte-87qrtx{display:flex;flex-direction:column;gap:0.6rem}small.svelte-87qrtx.svelte-87qrtx,a.svelte-87qrtx.svelte-87qrtx{display:flex;place-items:center;justify-content:center;flex-wrap:wrap;gap:0.5ch}@media screen and (max-width: 48rem){.bottom.svelte-87qrtx.svelte-87qrtx{justify-content:space-around}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = new Date().getFullYear();
  const getGithubStars = async () => {
    try {
      const response = await fetch("https://api.github.com/repos/santigo-zero/santigo-zero.github.io");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      return data.stargazers_count;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };
  let ghStars = 0;
  getGithubStars().then((stars) => ghStars = stars);
  $$result.css.add(css$2);
  return `<footer aria-labelledby="${"main-footer"}" class="${"banner-reverse artifact-ui svelte-87qrtx"}"><div id="${"main-footer"}" class="${"svelte-87qrtx"}"><section class="${"upper wider svelte-87qrtx"}"><div class="${"services"}">My services
        <ol><li>Web Design</li></ol></div>
      <ul class="${"svelte-87qrtx"}">
        <li><a href="${"https://github.com/santigo-zero/"}" aria-label="${"Link to my GitHub profile"}" class="${"svelte-87qrtx"}">GitHub</a></li>
        <li><a href="${"https://github.com/santigo-zero/"}" aria-label="${"Link to my GitHub profile"}" class="${"svelte-87qrtx"}">GitHub</a></li>
        <li><a href="${"https://github.com/santigo-zero/"}" aria-label="${"Link to my GitHub profile"}" class="${"svelte-87qrtx"}">GitHub</a></li>
        <li><a href="${"https://github.com/santigo-zero/"}" aria-label="${"Link to my GitHub profile"}" class="${"svelte-87qrtx"}">GitHub</a></li>
        <li><a href="${"https://www.linkedin.com/in/santiago-gonzalez-62557221b/"}" aria-label="${"Link to my LinkedIn profile"}" class="${"svelte-87qrtx"}">LinkedIn</a></li></ul>
      <div class="${"aboutme"}"><h3 class="${"svelte-87qrtx"}">${escape(AUTHOR)}</h3>
        <h3 class="${"svelte-87qrtx"}">I&#39;m a web developer with a purpose, bring accessibility to the web.
        </h3></div></section>
    <div class="${"wrapper-bottom svelte-87qrtx"}"><section class="${"bottom wider svelte-87qrtx"}"><div class="${"copyright svelte-87qrtx"}"><small class="${"svelte-87qrtx"}">(c) ${escape(year)}
            <div aria-orientation="${"vertical"}" role="${"separator"}">•</div>
            All Rights Reserved
            <div aria-orientation="${"vertical"}" role="${"separator"}">•</div>
            GPL-3.0
          </small></div>

        <a href="${"https://github.com/santigo-zero/santigo-zero.github.io"}" aria-label="${"Link to git repository for this site at Github"}" class="${"svelte-87qrtx"}">Repository <iconify-icon aria-label="${"GitHub icon"}" role="${"img"}" icon="${"simple-icons:github"}"></iconify-icon>
          <div aria-orientation="${"vertical"}" role="${"separator"}">-</div>
          <iconify-icon icon="${"lucide:star"}"></iconify-icon>
          <var aria-label="${"Amount of stars in the GitHub repository"}">${escape(ghStars)}</var></a>

        <a href="${"https://github.com/santigo-zero/santigo-zero.github.io"}" aria-label="${"Link to git repository for this site at Github"}" class="${"svelte-87qrtx"}"><small class="${"svelte-87qrtx"}">Designed &amp; Built with <iconify-icon icon="${"lucide:heart"}"></iconify-icon> by
            <address>${escape(AUTHOR_NAME)}</address></small></a>
        
        </section></div></div>
</footer>`;
});
const ScrollProgressTracker_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "progress.svelte-uzpiq3{width:100%;height:3px;top:0;border:0;position:fixed;z-index:9999}progress.svelte-uzpiq3::-webkit-progress-bar,progress.svelte-uzpiq3{background-color:var(--clr-bg-400)}progress.svelte-uzpiq3::-moz-progress-bar{background:var(--accent-peachy)}progress.svelte-uzpiq3::-webkit-progress-value{background:var(--accent-peachy)}",
  map: null
};
const ScrollProgressTracker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerHeight;
  let pageHeight;
  let scrollY = 0;
  $$result.css.add(css$1);
  innerHeight = 0;
  pageHeight = 0;
  return `

<progress${add_attribute("max", pageHeight - innerHeight, 0)}${add_attribute("value", scrollY, 0)} class="${"svelte-uzpiq3"}"></progress>`;
});
const global = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-afzn99{min-height:100vh;min-height:100dvh;display:grid;grid-template-rows:1fr auto;background-color:var(--clr-bg-200)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"layout svelte-afzn99"}">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}
  ${validate_component(Transition, "Transition").$$render($$result, { url: $page.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
  ${validate_component(ScrollProgressTracker, "ScrollProgressTracker").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
