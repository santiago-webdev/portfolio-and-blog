import { P as Posts } from "../../../../chunks/store.js";
import { j as get_store_value } from "../../../../chunks/index2.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  const [localPost] = get_store_value(Posts).filter((obj) => {
    if (obj.href.replace("/", "") === params.postid) {
      return obj;
    }
  });
  const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/posts/1.svelte": () => import("../../../../chunks/store.js").then((n) => n._), "../../../lib/posts/2.svelte": () => import("../../../../chunks/store.js").then((n) => n.b), "../../../lib/posts/3.svelte": () => import("../../../../chunks/store.js").then((n) => n.c), "../../../lib/posts/4.md": () => import("../../../../chunks/store.js").then((n) => n.d), "../../../lib/posts/hello-world.svelte": () => import("../../../../chunks/store.js").then((n) => n.e), "../../../lib/posts/how-to-build-a-blog-in-sveltekit.md": () => import("../../../../chunks/store.js").then((n) => n.f), "../../../lib/posts/new_test.md": () => import("../../../../chunks/store.js").then((n) => n.g), "../../../lib/posts/test-test.md": () => import("../../../../chunks/store.js").then((n) => n.h) }), `../../../lib/posts/${params.postid}.${localPost.extension}`);
  const content = module.default;
  return {
    content
  };
};
export {
  load
};
