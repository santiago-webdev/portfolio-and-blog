import { c as create_ssr_component, b as subscribe, e as escape, d as null_to_empty, v as validate_component, f as add_attribute, g as add_styles, h as each } from "../../chunks/index2.js";
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
const WidgetModal_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "button.svelte-rid665.svelte-rid665{display:flex;place-items:center;padding:0.2rem 0.8rem;gap:0.6rem;border-radius:1rem}span.svelte-rid665.svelte-rid665{text-decoration:underline solid var(--accent-orange) 0.15em;text-underline-offset:0em}kbd.svelte-rid665.svelte-rid665{pointer-events:none;border-top:1px solid var(--clr-text-muted);border-left:1px solid var(--clr-text-muted);border-right:3px solid var(--clr-text-muted);border-bottom:3px solid var(--clr-text-muted);border-radius:0.4rem;padding-inline:0.3rem}.svelte-rid665.svelte-rid665:modal{padding:0;margin:0;margin-inline:auto;top:5vh}.svelte-rid665.svelte-rid665:modal::backdrop{background-color:rgba(31 31 37 / 0.8);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 8px 32px 0 rgba(0, 0, 0, 0.2);cursor:pointer}.svelte-rid665:modal>.svelte-rid665{padding:1rem}.svelte-rid665:modal button.svelte-rid665{padding-left:0}form.svelte-rid665.svelte-rid665{display:flex;flex-direction:column;gap:1rem}.searchbar.svelte-rid665.svelte-rid665{display:flex}input.svelte-rid665.svelte-rid665:-moz-placeholder,input.svelte-rid665.svelte-rid665::-moz-placeholder{opacity:1}input[type='search'].svelte-rid665.svelte-rid665::-ms-clear{display:none}input[type='search'].svelte-rid665.svelte-rid665::-webkit-search-cancel-button{display:none}input.svelte-rid665.svelte-rid665{border:none;outline:none;width:100%}ul.svelte-rid665.svelte-rid665:empty{padding:0}li.svelte-rid665.svelte-rid665{padding:0.8rem;padding-left:0}",
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

<button class="${escape(null_to_empty(complex ? "shiny hover" : ""), true) + " svelte-rid665"}" aria-keyshortcuts="${"Control+K"}" aria-label="${"Click to open the modal box to search for blogs"}">${validate_component(IconSearch, "IconSearch").$$render($$result, {}, {}, {})}
  ${complex ? `<span class="${"svelte-rid665"}">    </span>
    <kbd class="${"svelte-rid665"}">Ctrl K</kbd>` : ``}</button>
<dialog class="${"wide shiny blur svelte-rid665"}"${add_attribute("this", modal, 0)}><form class="${"svelte-rid665"}"><label for="${"modal-search"}" class="${"svelte-rid665"}">Search for a blog post:</label>
    <div class="${"searchbar svelte-rid665"}"><button aria-label="${"Go to selected blog"}" type="${"submit"}" class="${"svelte-rid665"}">${validate_component(IconSearch, "IconSearch").$$render($$result, {}, {}, {})}</button>
      <input placeholder="${"Search for a blog post"}" type="${"search"}" id="${"modal-search"}" autocomplete="${"off"}" class="${"svelte-rid665"}"${add_attribute("value", value, 0)}${add_attribute("this", input, 0)}></div></form>
  <ul class="${"svelte-rid665"}"${add_styles({
    "display": value.length ? "grid" : "none"
  })}>${each($FilteredPosts.slice(0, 4), (post) => {
    return `<hr aria-orientation="${"horizontal"}" class="${"svelte-rid665"}">
      <li class="${"svelte-rid665"}"><a href="${escape(base, true) + "/blog" + escape(post.href, true)}" class="${"svelte-rid665"}"><article class="${"svelte-rid665"}"><h3 class="${"svelte-rid665"}">${validate_component(IconSearch, "IconSearch").$$render($$result, {}, {}, {})}
              ${escape(post.title)}</h3>
            ${post.description ? `<p class="${"svelte-rid665"}">${escape(post.description)}</p>` : `<p class="${"svelte-rid665"}">No description was given.</p>`}
            ${post.date ? `<small class="${"svelte-rid665"}">Published: ${escape(readableDate(post.date))}
                <time${add_attribute("datetime", post.date, 0)} class="${"svelte-rid665"}"><iconify-icon icon="${"lucide:calendar"}" class="${"svelte-rid665"}"></iconify-icon>: ${escape(readableDate(post.date))}</time>
              </small>` : ``}
          </article></a>
      </li>`;
  })}</ul>
</dialog>`;
});
const WidgetTheme_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-hb5cgv{position:relative}dialog.svelte-hb5cgv{position:absolute;margin:var(--gap) 0;padding:var(--gap)}fieldset.svelte-hb5cgv{display:grid;border:2px solid var(--clr-muted-150);border-radius:0.8rem;width:100%;padding:var(--gap);gap:calc(var(--gap) / 2)}legend.svelte-hb5cgv{color:var(--clr-title);margin-inline:1ch;padding:0}label.svelte-hb5cgv{display:flex;place-items:center;width:100%}input.svelte-hb5cgv{display:none}",
  map: null
};
const WidgetTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dialog;
  let button;
  $$result.css.add(css$4);
  return `<button class="${"svelte-hb5cgv"}"${add_attribute("this", button, 0)}>Theme in use </button>
<dialog class="${"shiny svelte-hb5cgv"}"${add_attribute("this", dialog, 0)}><form><fieldset class="${"svelte-hb5cgv"}"><legend class="${"svelte-hb5cgv"}">Choose a colorscheme</legend>

      <input type="${"radio"}" name="${"theme"}" id="${"system"}" checked class="${"svelte-hb5cgv"}">
      <label class="${"shiny-select svelte-hb5cgv"}" for="${"system"}"><iconify-icon icon="${"bxs:adjust"}"></iconify-icon> System</label>

      <input type="${"radio"}" name="${"theme"}" id="${"light"}" class="${"svelte-hb5cgv"}">
      <label class="${"shiny-select svelte-hb5cgv"}" for="${"light"}"><iconify-icon icon="${"lucide:sun"}"></iconify-icon> Light</label>

      <input type="${"radio"}" name="${"theme"}" id="${"dark"}" class="${"svelte-hb5cgv"}">
      <label class="${"shiny-select svelte-hb5cgv"}" for="${"dark"}"><iconify-icon icon="${"lucide:moon"}"></iconify-icon> Dark</label></fieldset></form>
</dialog>`;
});
const NavBar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-1bcri2b.svelte-1bcri2b{inset:3px 0 auto 0;position:sticky;background-color:var(--clr-bg-400);padding:0.4rem 0;transition:all 0.3s;z-index:999}.scrollY.svelte-1bcri2b.svelte-1bcri2b{box-shadow:6px 6px 6px 0px rgba(0, 0, 0, 0.1);background-color:var(--clr-bg-400-t);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--clr-muted-300)}@media(prefers-reduced-motion: reduce){nav.svelte-1bcri2b.svelte-1bcri2b{transition:none}}a.svelte-1bcri2b.svelte-1bcri2b{padding:0.4em 0.8em;display:flex;place-items:center;border-radius:1rem}a.svelte-1bcri2b.svelte-1bcri2b:first-child{padding-left:0}a.svelte-1bcri2b.svelte-1bcri2b:hover{color:var(--clr-txt-hover)}@media(hover: none){a.svelte-1bcri2b.svelte-1bcri2b:hover{color:inherit}}a.svelte-1bcri2b.svelte-1bcri2b:focus{color:var(--clr-txt-clicked)}#main-navigation.svelte-1bcri2b.svelte-1bcri2b{display:grid;place-items:center;margin-inline:auto;justify-content:space-between;grid-template-columns:1fr auto}button.svelte-1bcri2b.svelte-1bcri2b{display:flex;place-items:center}.navItems.svelte-1bcri2b.svelte-1bcri2b{padding-left:1rem;width:100%;display:flex;justify-self:center;place-items:center}.wrapper-left.svelte-1bcri2b.svelte-1bcri2b{display:flex;justify-content:space-between;width:100%}.widget.svelte-1bcri2b.svelte-1bcri2b{display:flex;flex-wrap:wrap;gap:1rem}@media screen and (max-width: 48rem){.navItems.svelte-1bcri2b.svelte-1bcri2b{flex-direction:column;padding:1rem;grid-column:1 / span 2}.wrapper-left.svelte-1bcri2b a.svelte-1bcri2b{padding-top:0;padding-bottom:0}}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $navItems, $$unsubscribe_navItems;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_navItems = subscribe(navItems, (value) => $navItems = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  var expMenu = false, onDesktop = true, outerWidth = 0;
  $$result.css.add(css$3);
  onDesktop = outerWidth > inPixels("48rem") ? true : false;
  expMenu = $navigating || onDesktop ? true : false;
  $$unsubscribe_navigating();
  $$unsubscribe_navItems();
  $$unsubscribe_page();
  return `

<nav aria-labelledby="${"main-navigation"}" class="${["artifact-ui svelte-1bcri2b", ""].join(" ").trim()}"><div id="${"main-navigation"}" class="${"wider svelte-1bcri2b"}"><div class="${"wrapper-left svelte-1bcri2b"}"><a href="${escape(base, true) + "/"}" aria-label="${"Logo of this site and link to Home"}" class="${"svelte-1bcri2b"}">${escape(onDesktop && AUTHOR || "SG")}</a>
      <div class="${"widget svelte-1bcri2b"}">${validate_component(WidgetModal, "WidgetModal").$$render($$result, {}, {}, {})}
        ${validate_component(WidgetTheme, "WidgetTheme").$$render($$result, {}, {}, {})}</div></div>
    <button aria-label="${"Toggle navigation list"}"${add_attribute("aria-expanded", expMenu, 0)} class="${"svelte-1bcri2b"}"${add_styles({ "display": onDesktop ? "none" : "" })}>
      ${expMenu ? `<iconify-icon icon="${"lucide:x"}" width="${"26"}" height="${"26"}"></iconify-icon>` : `<iconify-icon icon="${"lucide:grip"}" width="${"26"}" height="${"26"}"></iconify-icon>`}</button>
    ${expMenu || onDesktop ? `<div class="${"navItems svelte-1bcri2b"}">${each($navItems, (item) => {
    return `${item.separator ? `<div aria-orientation="${"vertical"}" role="${"separator"}"></div>` : ``}
          <a${add_attribute(
      "aria-current",
      item.href === $page.url.pathname || $page.url.pathname.startsWith(item.href) && `/` !== item.href ? "page" : void 0,
      0
    )} aria-label="${"Link to " + escape(item.label, true)}" class="${escape(null_to_empty(item.decoration ? "block hover" : ""), true) + " svelte-1bcri2b"}"${add_attribute("href", item.href, 0)}>${escape(item.label)}</a>`;
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
    <div class="${"wrapper-bottom svelte-87qrtx"}"><section class="${"bottom wider svelte-87qrtx"}"><div class="${"copyright svelte-87qrtx"}"><small class="${"svelte-87qrtx"}">(c) ${escape(new Date().getFullYear())}
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
