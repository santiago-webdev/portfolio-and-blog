import {
  Z as I,
  S as K,
  i as M,
  s as N,
  k as b,
  a as T,
  q as Z,
  l as g,
  m as w,
  h as v,
  c as j,
  r as q,
  n,
  _ as k,
  b as G,
  F as _,
  $ as B,
  G as y,
  a0 as H,
  C as L,
  I as O,
  J as P,
  v as U
} from './index-6fd41c6b.js';
import { P as V, F as E, a as C } from './store-6e42ba8f.js';
import { l as h, e as D } from './singletons-1f164dd2.js';
const x = s => {
  const a = I(V).filter(e =>
    `${e.description} ${e.title}`
      .toLowerCase()
      .toLowerCase()
      .includes(s.toLowerCase())
  );
  return E.set(a), s;
};
h.disable_scroll_handling;
const A = h.goto;
h.invalidate;
h.invalidateAll;
const J = h.preload_data;
h.preload_code;
h.before_navigate;
h.after_navigate;
function R(s) {
  let a, e, u, t, d, o, c, p, f, m;
  return {
    c() {
      (a = b('form')),
        (e = b('button')),
        (u = T()),
        (t = b('input')),
        (d = T()),
        (o = b('kbd')),
        (c = Z('Ctrl K')),
        this.h();
    },
    l(i) {
      a = g(i, 'FORM', { class: !0 });
      var l = w(a);
      e = g(l, 'BUTTON', { 'aria-label': !0, type: !0, class: !0 });
      var r = w(e);
      r.forEach(v),
        (u = j(l)),
        (t = g(l, 'INPUT', {
          placeholder: !0,
          type: !0,
          id: !0,
          list: !0,
          autocomplete: !0,
          class: !0
        })),
        (d = j(l)),
        (o = g(l, 'KBD', { class: !0 }));
      var S = w(o);
      (c = q(S, 'Ctrl K')), S.forEach(v), l.forEach(v), this.h();
    },
    h() {
      n(e, 'aria-label', 'Go to selected blog'),
        n(e, 'type', 'submit'),
        n(e, 'class', 'svelte-1y2xljc'),
        n(t, 'placeholder', s[1]),
        n(t, 'type', 'search'),
        n(t, 'id', 'search'),
        n(t, 'list', 'search-terms'),
        n(t, 'autocomplete', 'off'),
        n(t, 'class', 'svelte-1y2xljc'),
        n(o, 'class', 'svelte-1y2xljc'),
        n(
          a,
          'class',
          (p =
            k(
              s[3].trim().length !== 0
                ? 'wide attn attn-focus'
                : 'wide attn attn-gradient-border'
            ) + ' svelte-1y2xljc')
        );
    },
    m(i, l) {
      G(i, a, l),
        _(a, e),
        (e.innerHTML = Y),
        _(a, u),
        _(a, t),
        B(t, s[2]),
        s[7](t),
        _(a, d),
        _(a, o),
        _(o, c),
        f ||
          ((m = [
            y(t, 'input', s[6]),
            y(t, 'input', s[8]),
            y(t, 'focus', s[9], { once: !0 }),
            y(a, 'submit', H(s[4]))
          ]),
          (f = !0));
    },
    p(i, [l]) {
      l & 2 && n(t, 'placeholder', i[1]),
        l & 4 && B(t, i[2]),
        l & 8 &&
          p !==
            (p =
              k(
                i[3].trim().length !== 0
                  ? 'wide attn attn-focus'
                  : 'wide attn attn-gradient-border'
              ) + ' svelte-1y2xljc') &&
          n(a, 'class', p);
    },
    i: L,
    o: L,
    d(i) {
      i && v(a), s[7](null), (f = !1), O(m);
    }
  };
}
const Y =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016Z" clip-rule="evenodd"/></svg>',
  F = 'Search',
  z = "You haven't searched for any post yet";
function Q(s, a, e) {
  let u, t;
  P(s, C, r => e(3, (u = r))), P(s, E, r => e(5, (t = r)));
  let { input: d } = a,
    { placeholder: o = F } = a,
    c = '';
  async function p() {
    if (c.length === 0) {
      e(1, (o = z)),
        setTimeout(() => {
          e(1, (o = F));
        }, 1e3);
      return;
    }
    await A(`${D}/blog${t[0].href}`);
  }
  C.subscribe(() => {
    e(2, (c = u));
  });
  function f() {
    (c = this.value), e(2, c);
  }
  function m(r) {
    U[r ? 'unshift' : 'push'](() => {
      (d = r), e(0, d);
    });
  }
  const i = () => C.set(x(c)),
    l = () => e(1, (o = F));
  return (
    (s.$$set = r => {
      'input' in r && e(0, (d = r.input)),
        'placeholder' in r && e(1, (o = r.placeholder));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 32 && t.length === 1 && J(`${D}/blog${t[0].href}`);
    }),
    [d, o, c, u, p, t, f, m, i, l]
  );
}
class ee extends K {
  constructor(a) {
    super(), M(this, a, Q, R, N, { input: 0, placeholder: 1 });
  }
}
export { ee as S };