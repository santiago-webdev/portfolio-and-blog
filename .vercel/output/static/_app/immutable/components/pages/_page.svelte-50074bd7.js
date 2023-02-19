import {
  S as ot,
  i as lt,
  s as it,
  v as Y,
  T as vt,
  k as l,
  q as L,
  a as H,
  K as _t,
  x as X,
  l as i,
  m as q,
  r as P,
  h as s,
  c as z,
  L as gt,
  y as tt,
  n as e,
  b as O,
  F as t,
  z as et,
  U as bt,
  f as nt,
  t as rt,
  A as st,
  D as wt,
  G as Q,
  C as at,
  H as Et,
  I as yt,
  o as Tt,
  V as qt
} from '../../chunks/index-82b2adb0.js';
import { e as ft } from '../../chunks/singletons-d69dd340.js';
import { S as $t } from '../../chunks/SearchBar-622e0734.js';
import { T as U, D as K, U as It } from '../../chunks/store-697f4c32.js';
function At(h) {
  let n,
    a,
    o,
    _,
    c,
    y,
    g,
    T,
    m,
    b,
    f,
    B,
    M,
    w,
    u,
    $,
    C,
    A,
    I,
    k,
    v,
    r,
    p,
    d,
    E,
    S,
    R,
    N;
  function Z(D) {
    h[1](D);
  }
  let G = { placeholder: 'You can read my blog' };
  return (
    h[0] !== void 0 && (G.input = h[0]),
    (S = new $t({ props: G })),
    Y.push(() => vt(S, 'input', Z)),
    {
      c() {
        (n = l('section')),
          (a = l('div')),
          (o = l('h1')),
          (_ = L('Building websites ')),
          (c = l('span')),
          (y = L('&&')),
          (g = L(' clean interfaces')),
          (T = H()),
          (m = l('br')),
          (b = H()),
          (f = l('p')),
          (B =
            L(`Here we'll discuss about web technologies and show you my projects while
      at it.`)),
          (M = H()),
          (w = l('div')),
          (u = l('h2')),
          ($ = L('If anything of this sounds interesting to you')),
          (C = H()),
          (A = l('div')),
          (I = l('a')),
          (k = L('Projects ')),
          (v = new _t(!1)),
          (r = H()),
          (p = l('a')),
          (d = L('Contact')),
          (E = H()),
          X(S.$$.fragment),
          this.h();
      },
      l(D) {
        n = i(D, 'SECTION', { class: !0 });
        var j = q(n);
        a = i(j, 'DIV', { class: !0 });
        var x = q(a);
        o = i(x, 'H1', { class: !0 });
        var W = q(o);
        (_ = P(W, 'Building websites ')), (c = i(W, 'SPAN', {}));
        var ct = q(c);
        (y = P(ct, '&&')),
          ct.forEach(s),
          (g = P(W, ' clean interfaces')),
          W.forEach(s),
          (T = z(x)),
          (m = i(x, 'BR', {})),
          (b = z(x)),
          (f = i(x, 'P', {}));
        var ut = q(f);
        (B = P(
          ut,
          `Here we'll discuss about web technologies and show you my projects while
      at it.`
        )),
          ut.forEach(s),
          x.forEach(s),
          (M = z(j)),
          (w = i(j, 'DIV', { class: !0 }));
        var V = q(w);
        u = i(V, 'H2', {});
        var dt = q(u);
        ($ = P(dt, 'If anything of this sounds interesting to you')),
          dt.forEach(s),
          (C = z(V)),
          (A = i(V, 'DIV', { class: !0 }));
        var F = q(A);
        I = i(F, 'A', {
          'data-sveltekit-reload': !0,
          'data-sveltekit-noscroll': !0,
          href: !0,
          class: !0
        });
        var J = q(I);
        (k = P(J, 'Projects ')),
          (v = gt(J, !1)),
          J.forEach(s),
          (r = z(F)),
          (p = i(F, 'A', {
            'data-sveltekit-reload': !0,
            'data-sveltekit-noscroll': !0,
            href: !0,
            class: !0
          }));
        var ht = q(p);
        (d = P(ht, 'Contact')),
          ht.forEach(s),
          F.forEach(s),
          (E = z(V)),
          tt(S.$$.fragment, V),
          V.forEach(s),
          j.forEach(s),
          this.h();
      },
      h() {
        e(o, 'class', 'svelte-rbgres'),
          e(a, 'class', 'hero svelte-rbgres'),
          (v.a = null),
          e(I, 'data-sveltekit-reload', ''),
          e(I, 'data-sveltekit-noscroll', ''),
          e(I, 'href', ft + '/#projects'),
          e(I, 'class', 'attn attnactive svelte-rbgres'),
          e(p, 'data-sveltekit-reload', ''),
          e(p, 'data-sveltekit-noscroll', ''),
          e(p, 'href', '/'),
          e(p, 'class', 'attn-border attn svelte-rbgres'),
          e(A, 'class', 'content-navigation svelte-rbgres'),
          e(w, 'class', 'content svelte-rbgres'),
          e(n, 'class', 'wider svelte-rbgres');
      },
      m(D, j) {
        O(D, n, j),
          t(n, a),
          t(a, o),
          t(o, _),
          t(o, c),
          t(c, y),
          t(o, g),
          t(a, T),
          t(a, m),
          t(a, b),
          t(a, f),
          t(f, B),
          t(n, M),
          t(n, w),
          t(w, u),
          t(u, $),
          t(w, C),
          t(w, A),
          t(A, I),
          t(I, k),
          v.m(Mt, I),
          t(A, r),
          t(A, p),
          t(p, d),
          t(w, E),
          et(S, w, null),
          (N = !0);
      },
      p(D, [j]) {
        const x = {};
        !R && j & 1 && ((R = !0), (x.input = D[0]), bt(() => (R = !1))),
          S.$set(x);
      },
      i(D) {
        N || (nt(S.$$.fragment, D), (N = !0));
      },
      o(D) {
        rt(S.$$.fragment, D), (N = !1);
      },
      d(D) {
        D && s(n), st(S);
      }
    }
  );
}
let Mt =
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 2.4 24 24"><path fill="currentColor" d="M8.7 19.7q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z"/></svg>';
function kt(h, n, a) {
  let o;
  function _(c) {
    (o = c), a(0, o);
  }
  return [o, _];
}
class Bt extends ot {
  constructor(n) {
    super(), lt(this, n, kt, At, it, {});
  }
}
function pt(h, n, a) {
  const o = h.slice();
  return (o[3] = n[a]), (o[13] = a), o;
}
function mt(h) {
  let n,
    a = h[3].title + '',
    o,
    _,
    c = h[3].description + '',
    y,
    g,
    T,
    m;
  return {
    c() {
      (n = l('article')),
        (o = L(a)),
        (_ = H()),
        (y = L(c)),
        (g = L(`
          index `)),
        (T = L(h[13])),
        (m = H()),
        this.h();
    },
    l(b) {
      n = i(b, 'ARTICLE', { class: !0 });
      var f = q(n);
      (o = P(f, a)),
        (_ = z(f)),
        (y = P(f, c)),
        (g = P(
          f,
          `
          index `
        )),
        (T = P(f, h[13])),
        (m = z(f)),
        f.forEach(s),
        this.h();
    },
    h() {
      e(n, 'class', 'blog-selection svelte-1d69n5z');
    },
    m(b, f) {
      O(b, n, f), t(n, o), t(n, _), t(n, y), t(n, g), t(n, T), t(n, m);
    },
    p: at,
    d(b) {
      b && s(n);
    }
  };
}
function Ct(h) {
  let n, a, o, _, c, y, g, T, m, b, f, B, M, w, u, $, C, A, I;
  wt(h[6]);
  let k = h[4],
    v = [];
  for (let r = 0; r < k.length; r += 1) v[r] = mt(pt(h, k, r));
  return {
    c() {
      (n = l('section')),
        (a = l('div')),
        (o = l('button')),
        (_ = H()),
        (c = l('div'));
      for (let r = 0; r < v.length; r += 1) v[r].c();
      (y = H()),
        (g = l('button')),
        (T = H()),
        (m = l('div')),
        (b = l('h2')),
        (f = L('Read my blog')),
        (B = H()),
        (M = l('p')),
        (w = L("I don't just focus in one topic, so here's a some articles")),
        (u = H()),
        ($ = l('a')),
        (C = L('Go read the blog')),
        this.h();
    },
    l(r) {
      n = i(r, 'SECTION', { class: !0 });
      var p = q(n);
      a = i(p, 'DIV', { class: !0 });
      var d = q(a);
      o = i(d, 'BUTTON', { 'aria-label': !0, class: !0 });
      var E = q(o);
      E.forEach(s), (_ = z(d)), (c = i(d, 'DIV', { class: !0 }));
      var S = q(c);
      for (let j = 0; j < v.length; j += 1) v[j].l(S);
      S.forEach(s),
        (y = z(d)),
        (g = i(d, 'BUTTON', { 'aria-label': !0, class: !0 }));
      var R = q(g);
      R.forEach(s), d.forEach(s), (T = z(p)), (m = i(p, 'DIV', { class: !0 }));
      var N = q(m);
      b = i(N, 'H2', {});
      var Z = q(b);
      (f = P(Z, 'Read my blog')), Z.forEach(s), (B = z(N)), (M = i(N, 'P', {}));
      var G = q(M);
      (w = P(G, "I don't just focus in one topic, so here's a some articles")),
        G.forEach(s),
        (u = z(N)),
        ($ = i(N, 'A', { href: !0 }));
      var D = q($);
      (C = P(D, 'Go read the blog')),
        D.forEach(s),
        N.forEach(s),
        p.forEach(s),
        this.h();
    },
    h() {
      e(o, 'aria-label', 'Go to previous card in carousel'),
        e(o, 'class', 'left_button svelte-1d69n5z'),
        e(c, 'class', 'wrapper-cards svelte-1d69n5z'),
        e(g, 'aria-label', 'Go to next card in carousel'),
        e(g, 'class', 'right_button svelte-1d69n5z'),
        e(a, 'class', 'container svelte-1d69n5z'),
        e($, 'href', ft + '/blog'),
        e(m, 'class', 'wrapper svelte-1d69n5z'),
        e(n, 'class', 'focus wider svelte-1d69n5z');
    },
    m(r, p) {
      O(r, n, p), t(n, a), t(a, o), (o.innerHTML = Dt), t(a, _), t(a, c);
      for (let d = 0; d < v.length; d += 1) v[d].m(c, null);
      h[8](c),
        t(a, y),
        t(a, g),
        (g.innerHTML = Ht),
        t(n, T),
        t(n, m),
        t(m, b),
        t(b, f),
        t(m, B),
        t(m, M),
        t(M, w),
        t(m, u),
        t(m, $),
        t($, C),
        h[10]($),
        h[11](m),
        A ||
          ((I = [
            Q(window, 'resize', h[6]),
            Q(o, 'click', h[7]),
            Q(g, 'click', h[9])
          ]),
          (A = !0));
    },
    p(r, [p]) {
      if (p & 16) {
        k = r[4];
        let d;
        for (d = 0; d < k.length; d += 1) {
          const E = pt(r, k, d);
          v[d] ? v[d].p(E, p) : ((v[d] = mt(E)), v[d].c(), v[d].m(c, null));
        }
        for (; d < v.length; d += 1) v[d].d(1);
        v.length = k.length;
      }
    },
    i: at,
    o: at,
    d(r) {
      r && s(n),
        Et(v, r),
        h[8](null),
        h[10](null),
        h[11](null),
        (A = !1),
        yt(I);
    }
  };
}
let Dt =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"/></svg>',
  Ht =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.15 21.1q-.375-.375-.375-.888q0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375q.512 0 .887.375l8.4 8.425q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35q-.513 0-.888-.375Z"/></svg>';
function zt(h, n, a) {
  const o = [
    { title: 'Title 1', description: 'Description 1' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 3', description: 'Description 3' },
    { title: 'Title 4', description: 'Description 4' },
    { title: 'Title 5', description: 'Description 5' },
    { title: 'Title 6', description: 'Description 6' }
  ];
  let _, c, y, g;
  function T(u) {
    u === 'next'
      ? y.scrollBy({ top: 0, left: g / 2.3, behavior: 'smooth' })
      : u === 'previous' &&
        y.scrollBy({ top: 0, left: (g / 2.3) * -1, behavior: 'smooth' });
  }
  Tt(async () => {
    let u = new IntersectionObserver($ => {
      $.some(C => {
        C.isIntersecting && (c.focus(), u.disconnect());
      });
    });
    u.observe(_);
  });
  function m() {
    a(2, (g = window.outerWidth));
  }
  const b = () => T('previous');
  function f(u) {
    Y[u ? 'unshift' : 'push'](() => {
      (y = u), a(1, y);
    });
  }
  const B = () => T('next');
  function M(u) {
    Y[u ? 'unshift' : 'push'](() => {
      (c = u), a(0, c);
    });
  }
  function w(u) {
    Y[u ? 'unshift' : 'push'](() => {
      (_ = u), a(3, _);
    });
  }
  return [c, y, g, _, o, T, m, b, f, B, M, w];
}
class Lt extends ot {
  constructor(n) {
    super(), lt(this, n, zt, Ct, it, {});
  }
}
function Pt(h) {
  let n, a, o, _, c, y, g, T, m, b, f, B, M, w, u, $, C, A, I, k, v;
  return (
    (a = new Bt({})),
    (c = new Lt({})),
    (document.title = g = U),
    {
      c() {
        (n = l('main')),
          X(a.$$.fragment),
          (o = H()),
          (_ = l('section')),
          X(c.$$.fragment),
          (y = H()),
          (T = l('meta')),
          (m = l('meta')),
          (b = l('meta')),
          (f = l('meta')),
          (B = l('meta')),
          (M = l('meta')),
          (w = l('meta')),
          (u = l('meta')),
          ($ = l('meta')),
          (C = l('meta')),
          (A = l('meta')),
          (I = l('meta')),
          (k = l('meta')),
          this.h();
      },
      l(r) {
        n = i(r, 'MAIN', { class: !0 });
        var p = q(n);
        tt(a.$$.fragment, p),
          p.forEach(s),
          (o = z(r)),
          (_ = i(r, 'SECTION', { id: !0 }));
        var d = q(_);
        tt(c.$$.fragment, d), d.forEach(s), (y = z(r));
        const E = qt('svelte-2i912y', document.head);
        (T = i(E, 'META', { name: !0, content: !0 })),
          (m = i(E, 'META', { itemprop: !0, content: !0 })),
          (b = i(E, 'META', { itemprop: !0, content: !0 })),
          (f = i(E, 'META', { itemprop: !0, content: !0 })),
          (B = i(E, 'META', { property: !0, content: !0 })),
          (M = i(E, 'META', { property: !0, content: !0 })),
          (w = i(E, 'META', { property: !0, content: !0 })),
          (u = i(E, 'META', { property: !0, content: !0 })),
          ($ = i(E, 'META', { property: !0, content: !0 })),
          (C = i(E, 'META', { name: !0, content: !0 })),
          (A = i(E, 'META', { name: !0, content: !0 })),
          (I = i(E, 'META', { name: !0, content: !0 })),
          (k = i(E, 'META', { name: !0, content: !0 })),
          E.forEach(s),
          this.h();
      },
      h() {
        e(n, 'class', 'banner svelte-13fqhxm'),
          e(_, 'id', 'projects'),
          e(T, 'name', 'description'),
          e(T, 'content', K),
          e(m, 'itemprop', 'name'),
          e(m, 'content', U),
          e(b, 'itemprop', 'description'),
          e(b, 'content', K),
          e(f, 'itemprop', 'image'),
          e(f, 'content', ''),
          e(B, 'property', 'og:url'),
          e(B, 'content', It),
          e(M, 'property', 'og:type'),
          e(M, 'content', 'website'),
          e(w, 'property', 'og:title'),
          e(w, 'content', U),
          e(u, 'property', 'og:description'),
          e(u, 'content', K),
          e($, 'property', 'og:image'),
          e($, 'content', ''),
          e(C, 'name', 'twitter:card'),
          e(C, 'content', 'summary_large_image'),
          e(A, 'name', 'twitter:title'),
          e(A, 'content', U),
          e(I, 'name', 'twitter:description'),
          e(I, 'content', K),
          e(k, 'name', 'twitter:image'),
          e(k, 'content', '');
      },
      m(r, p) {
        O(r, n, p),
          et(a, n, null),
          O(r, o, p),
          O(r, _, p),
          et(c, _, null),
          O(r, y, p),
          t(document.head, T),
          t(document.head, m),
          t(document.head, b),
          t(document.head, f),
          t(document.head, B),
          t(document.head, M),
          t(document.head, w),
          t(document.head, u),
          t(document.head, $),
          t(document.head, C),
          t(document.head, A),
          t(document.head, I),
          t(document.head, k),
          (v = !0);
      },
      p(r, [p]) {
        (!v || p & 0) && g !== (g = U) && (document.title = g);
      },
      i(r) {
        v || (nt(a.$$.fragment, r), nt(c.$$.fragment, r), (v = !0));
      },
      o(r) {
        rt(a.$$.fragment, r), rt(c.$$.fragment, r), (v = !1);
      },
      d(r) {
        r && s(n),
          st(a),
          r && s(o),
          r && s(_),
          st(c),
          r && s(y),
          s(T),
          s(m),
          s(b),
          s(f),
          s(B),
          s(M),
          s(w),
          s(u),
          s($),
          s(C),
          s(A),
          s(I),
          s(k);
      }
    }
  );
}
class Ot extends ot {
  constructor(n) {
    super(), lt(this, n, null, Pt, it, {});
  }
}
export { Ot as default };
