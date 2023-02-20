import {
  S as et,
  i as nt,
  s as at,
  v as Z,
  R as it,
  k as l,
  q as S,
  a as H,
  K as ct,
  x as F,
  l as s,
  m as M,
  r as j,
  h as o,
  c as L,
  L as ut,
  y as K,
  n,
  b as O,
  F as e,
  z as Y,
  T as dt,
  f as J,
  t as Q,
  A as X,
  D as ht,
  G as W,
  C as tt,
  H as mt,
  I as pt,
  o as ft,
  U as _t
} from '../../chunks/index-6fd41c6b.js';
import { e as st } from '../../chunks/singletons-1f164dd2.js';
import { S as gt } from '../../chunks/SearchBar-754645cd.js';
import { T as U, D as V, U as vt } from '../../chunks/store-6e42ba8f.js';
function bt(d) {
  let t, r, c, m, u, T, _, y, p, g, v, B, w, E, h, $, I, A, P, k, i, a, b;
  function f(C) {
    d[1](C);
  }
  let q = { placeholder: 'You can also read my blog' };
  return (
    d[0] !== void 0 && (q.input = d[0]),
    (i = new gt({ props: q })),
    Z.push(() => it(i, 'input', f)),
    {
      c() {
        (t = l('section')),
          (r = l('h1')),
          (c = S('Building websites ')),
          (m = l('span')),
          (u = S('&&')),
          (T = S(' clean interfaces')),
          (_ = H()),
          (y = l('br')),
          (p = H()),
          (g = l('p')),
          (v =
            S(`Here we'll discuss about web technologies and show you my projects while at
    it.`)),
          (B = H()),
          (w = l('div')),
          (E = l('a')),
          (h = S('Projects ')),
          ($ = new ct(!1)),
          (I = H()),
          (A = l('a')),
          (P = S('Contact')),
          (k = H()),
          F(i.$$.fragment),
          this.h();
      },
      l(C) {
        t = s(C, 'SECTION', { class: !0 });
        var z = M(t);
        r = s(z, 'H1', {});
        var D = M(r);
        (c = j(D, 'Building websites ')), (m = s(D, 'SPAN', {}));
        var R = M(m);
        (u = j(R, '&&')),
          R.forEach(o),
          (T = j(D, ' clean interfaces')),
          D.forEach(o),
          (_ = L(z)),
          (y = s(z, 'BR', {})),
          (p = L(z)),
          (g = s(z, 'P', {}));
        var G = M(g);
        (v = j(
          G,
          `Here we'll discuss about web technologies and show you my projects while at
    it.`
        )),
          G.forEach(o),
          (B = L(z)),
          (w = s(z, 'DIV', { class: !0 }));
        var N = M(w);
        E = s(N, 'A', {
          'data-sveltekit-reload': !0,
          'data-sveltekit-noscroll': !0,
          href: !0,
          class: !0
        });
        var x = M(E);
        (h = j(x, 'Projects ')),
          ($ = ut(x, !1)),
          x.forEach(o),
          (I = L(N)),
          (A = s(N, 'A', {
            'data-sveltekit-reload': !0,
            'data-sveltekit-noscroll': !0,
            href: !0,
            class: !0
          }));
        var ot = M(A);
        (P = j(ot, 'Contact')),
          ot.forEach(o),
          N.forEach(o),
          (k = L(z)),
          K(i.$$.fragment, z),
          z.forEach(o),
          this.h();
      },
      h() {
        ($.a = null),
          n(E, 'data-sveltekit-reload', ''),
          n(E, 'data-sveltekit-noscroll', ''),
          n(E, 'href', st + '/#projects'),
          n(E, 'class', 'act svelte-5gmdzg'),
          n(A, 'data-sveltekit-reload', ''),
          n(A, 'data-sveltekit-noscroll', ''),
          n(A, 'href', '/'),
          n(A, 'class', 'attn-border attn svelte-5gmdzg'),
          n(w, 'class', 'content-navigation svelte-5gmdzg'),
          n(t, 'class', 'wide svelte-5gmdzg');
      },
      m(C, z) {
        O(C, t, z),
          e(t, r),
          e(r, c),
          e(r, m),
          e(m, u),
          e(r, T),
          e(t, _),
          e(t, y),
          e(t, p),
          e(t, g),
          e(g, v),
          e(t, B),
          e(t, w),
          e(w, E),
          e(E, h),
          $.m(wt, E),
          e(w, I),
          e(w, A),
          e(A, P),
          e(t, k),
          Y(i, t, null),
          (b = !0);
      },
      p(C, [z]) {
        const D = {};
        !a && z & 1 && ((a = !0), (D.input = C[0]), dt(() => (a = !1))),
          i.$set(D);
      },
      i(C) {
        b || (J(i.$$.fragment, C), (b = !0));
      },
      o(C) {
        Q(i.$$.fragment, C), (b = !1);
      },
      d(C) {
        C && o(t), X(i);
      }
    }
  );
}
let wt =
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 2.4 24 24"><path fill="currentColor" d="M8.7 19.7q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z"/></svg>';
function Et(d, t, r) {
  let c;
  function m(u) {
    (c = u), r(0, c);
  }
  return [c, m];
}
class Tt extends et {
  constructor(t) {
    super(), nt(this, t, Et, bt, at, {});
  }
}
function rt(d, t, r) {
  const c = d.slice();
  return (c[3] = t[r]), (c[13] = r), c;
}
function lt(d) {
  let t,
    r = d[3].title + '',
    c,
    m,
    u = d[3].description + '',
    T,
    _,
    y,
    p;
  return {
    c() {
      (t = l('article')),
        (c = S(r)),
        (m = H()),
        (T = S(u)),
        (_ = S(`
          index `)),
        (y = S(d[13])),
        (p = H()),
        this.h();
    },
    l(g) {
      t = s(g, 'ARTICLE', { class: !0 });
      var v = M(t);
      (c = j(v, r)),
        (m = L(v)),
        (T = j(v, u)),
        (_ = j(
          v,
          `
          index `
        )),
        (y = j(v, d[13])),
        (p = L(v)),
        v.forEach(o),
        this.h();
    },
    h() {
      n(t, 'class', 'blog-selection svelte-1d69n5z');
    },
    m(g, v) {
      O(g, t, v), e(t, c), e(t, m), e(t, T), e(t, _), e(t, y), e(t, p);
    },
    p: tt,
    d(g) {
      g && o(t);
    }
  };
}
function yt(d) {
  let t, r, c, m, u, T, _, y, p, g, v, B, w, E, h, $, I, A, P;
  ht(d[6]);
  let k = d[4],
    i = [];
  for (let a = 0; a < k.length; a += 1) i[a] = lt(rt(d, k, a));
  return {
    c() {
      (t = l('section')),
        (r = l('div')),
        (c = l('button')),
        (m = H()),
        (u = l('div'));
      for (let a = 0; a < i.length; a += 1) i[a].c();
      (T = H()),
        (_ = l('button')),
        (y = H()),
        (p = l('div')),
        (g = l('h2')),
        (v = S('Read my blog')),
        (B = H()),
        (w = l('p')),
        (E = S("I don't just focus in one topic, so here's a some articles")),
        (h = H()),
        ($ = l('a')),
        (I = S('Go read the blog')),
        this.h();
    },
    l(a) {
      t = s(a, 'SECTION', { class: !0 });
      var b = M(t);
      r = s(b, 'DIV', { class: !0 });
      var f = M(r);
      c = s(f, 'BUTTON', { 'aria-label': !0, class: !0 });
      var q = M(c);
      q.forEach(o), (m = L(f)), (u = s(f, 'DIV', { class: !0 }));
      var C = M(u);
      for (let x = 0; x < i.length; x += 1) i[x].l(C);
      C.forEach(o),
        (T = L(f)),
        (_ = s(f, 'BUTTON', { 'aria-label': !0, class: !0 }));
      var z = M(_);
      z.forEach(o), f.forEach(o), (y = L(b)), (p = s(b, 'DIV', { class: !0 }));
      var D = M(p);
      g = s(D, 'H2', {});
      var R = M(g);
      (v = j(R, 'Read my blog')), R.forEach(o), (B = L(D)), (w = s(D, 'P', {}));
      var G = M(w);
      (E = j(G, "I don't just focus in one topic, so here's a some articles")),
        G.forEach(o),
        (h = L(D)),
        ($ = s(D, 'A', { href: !0 }));
      var N = M($);
      (I = j(N, 'Go read the blog')),
        N.forEach(o),
        D.forEach(o),
        b.forEach(o),
        this.h();
    },
    h() {
      n(c, 'aria-label', 'Go to previous card in carousel'),
        n(c, 'class', 'left_button svelte-1d69n5z'),
        n(u, 'class', 'wrapper-cards svelte-1d69n5z'),
        n(_, 'aria-label', 'Go to next card in carousel'),
        n(_, 'class', 'right_button svelte-1d69n5z'),
        n(r, 'class', 'container svelte-1d69n5z'),
        n($, 'href', st + '/blog'),
        n(p, 'class', 'wrapper svelte-1d69n5z'),
        n(t, 'class', 'focus wider svelte-1d69n5z');
    },
    m(a, b) {
      O(a, t, b), e(t, r), e(r, c), (c.innerHTML = qt), e(r, m), e(r, u);
      for (let f = 0; f < i.length; f += 1) i[f].m(u, null);
      d[8](u),
        e(r, T),
        e(r, _),
        (_.innerHTML = $t),
        e(t, y),
        e(t, p),
        e(p, g),
        e(g, v),
        e(p, B),
        e(p, w),
        e(w, E),
        e(p, h),
        e(p, $),
        e($, I),
        d[10]($),
        d[11](p),
        A ||
          ((P = [
            W(window, 'resize', d[6]),
            W(c, 'click', d[7]),
            W(_, 'click', d[9])
          ]),
          (A = !0));
    },
    p(a, [b]) {
      if (b & 16) {
        k = a[4];
        let f;
        for (f = 0; f < k.length; f += 1) {
          const q = rt(a, k, f);
          i[f] ? i[f].p(q, b) : ((i[f] = lt(q)), i[f].c(), i[f].m(u, null));
        }
        for (; f < i.length; f += 1) i[f].d(1);
        i.length = k.length;
      }
    },
    i: tt,
    o: tt,
    d(a) {
      a && o(t),
        mt(i, a),
        d[8](null),
        d[10](null),
        d[11](null),
        (A = !1),
        pt(P);
    }
  };
}
let qt =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"/></svg>',
  $t =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.15 21.1q-.375-.375-.375-.888q0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375q.512 0 .887.375l8.4 8.425q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35q-.513 0-.888-.375Z"/></svg>';
function At(d, t, r) {
  const c = [
    { title: 'Title 1', description: 'Description 1' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 3', description: 'Description 3' },
    { title: 'Title 4', description: 'Description 4' },
    { title: 'Title 5', description: 'Description 5' },
    { title: 'Title 6', description: 'Description 6' }
  ];
  let m, u, T, _;
  function y(h) {
    h === 'next'
      ? T.scrollBy({ top: 0, left: _ / 2.3, behavior: 'smooth' })
      : h === 'previous' &&
        T.scrollBy({ top: 0, left: (_ / 2.3) * -1, behavior: 'smooth' });
  }
  ft(async () => {
    let h = new IntersectionObserver($ => {
      $.some(I => {
        I.isIntersecting && (u.focus(), h.disconnect());
      });
    });
    h.observe(m);
  });
  function p() {
    r(2, (_ = window.outerWidth));
  }
  const g = () => y('previous');
  function v(h) {
    Z[h ? 'unshift' : 'push'](() => {
      (T = h), r(1, T);
    });
  }
  const B = () => y('next');
  function w(h) {
    Z[h ? 'unshift' : 'push'](() => {
      (u = h), r(0, u);
    });
  }
  function E(h) {
    Z[h ? 'unshift' : 'push'](() => {
      (m = h), r(3, m);
    });
  }
  return [u, T, _, m, c, y, p, g, v, B, w, E];
}
class Mt extends et {
  constructor(t) {
    super(), nt(this, t, At, yt, at, {});
  }
}
function kt(d) {
  let t, r, c, m, u, T, _, y, p, g, v, B, w, E, h, $, I, A, P, k, i;
  return (
    (r = new Tt({})),
    (u = new Mt({})),
    (document.title = _ = U),
    {
      c() {
        (t = l('main')),
          F(r.$$.fragment),
          (c = H()),
          (m = l('section')),
          F(u.$$.fragment),
          (T = H()),
          (y = l('meta')),
          (p = l('meta')),
          (g = l('meta')),
          (v = l('meta')),
          (B = l('meta')),
          (w = l('meta')),
          (E = l('meta')),
          (h = l('meta')),
          ($ = l('meta')),
          (I = l('meta')),
          (A = l('meta')),
          (P = l('meta')),
          (k = l('meta')),
          this.h();
      },
      l(a) {
        t = s(a, 'MAIN', { class: !0 });
        var b = M(t);
        K(r.$$.fragment, b),
          b.forEach(o),
          (c = L(a)),
          (m = s(a, 'SECTION', { id: !0 }));
        var f = M(m);
        K(u.$$.fragment, f), f.forEach(o), (T = L(a));
        const q = _t('svelte-2i912y', document.head);
        (y = s(q, 'META', { name: !0, content: !0 })),
          (p = s(q, 'META', { itemprop: !0, content: !0 })),
          (g = s(q, 'META', { itemprop: !0, content: !0 })),
          (v = s(q, 'META', { itemprop: !0, content: !0 })),
          (B = s(q, 'META', { property: !0, content: !0 })),
          (w = s(q, 'META', { property: !0, content: !0 })),
          (E = s(q, 'META', { property: !0, content: !0 })),
          (h = s(q, 'META', { property: !0, content: !0 })),
          ($ = s(q, 'META', { property: !0, content: !0 })),
          (I = s(q, 'META', { name: !0, content: !0 })),
          (A = s(q, 'META', { name: !0, content: !0 })),
          (P = s(q, 'META', { name: !0, content: !0 })),
          (k = s(q, 'META', { name: !0, content: !0 })),
          q.forEach(o),
          this.h();
      },
      h() {
        n(t, 'class', 'banner svelte-13fqhxm'),
          n(m, 'id', 'projects'),
          n(y, 'name', 'description'),
          n(y, 'content', V),
          n(p, 'itemprop', 'name'),
          n(p, 'content', U),
          n(g, 'itemprop', 'description'),
          n(g, 'content', V),
          n(v, 'itemprop', 'image'),
          n(v, 'content', ''),
          n(B, 'property', 'og:url'),
          n(B, 'content', vt),
          n(w, 'property', 'og:type'),
          n(w, 'content', 'website'),
          n(E, 'property', 'og:title'),
          n(E, 'content', U),
          n(h, 'property', 'og:description'),
          n(h, 'content', V),
          n($, 'property', 'og:image'),
          n($, 'content', ''),
          n(I, 'name', 'twitter:card'),
          n(I, 'content', 'summary_large_image'),
          n(A, 'name', 'twitter:title'),
          n(A, 'content', U),
          n(P, 'name', 'twitter:description'),
          n(P, 'content', V),
          n(k, 'name', 'twitter:image'),
          n(k, 'content', '');
      },
      m(a, b) {
        O(a, t, b),
          Y(r, t, null),
          O(a, c, b),
          O(a, m, b),
          Y(u, m, null),
          O(a, T, b),
          e(document.head, y),
          e(document.head, p),
          e(document.head, g),
          e(document.head, v),
          e(document.head, B),
          e(document.head, w),
          e(document.head, E),
          e(document.head, h),
          e(document.head, $),
          e(document.head, I),
          e(document.head, A),
          e(document.head, P),
          e(document.head, k),
          (i = !0);
      },
      p(a, [b]) {
        (!i || b & 0) && _ !== (_ = U) && (document.title = _);
      },
      i(a) {
        i || (J(r.$$.fragment, a), J(u.$$.fragment, a), (i = !0));
      },
      o(a) {
        Q(r.$$.fragment, a), Q(u.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && o(t),
          X(r),
          a && o(c),
          a && o(m),
          X(u),
          a && o(T),
          o(y),
          o(p),
          o(g),
          o(v),
          o(B),
          o(w),
          o(E),
          o(h),
          o($),
          o(I),
          o(A),
          o(P),
          o(k);
      }
    }
  );
}
class Dt extends et {
  constructor(t) {
    super(), nt(this, t, null, kt, at, {});
  }
}
export { Dt as default };
