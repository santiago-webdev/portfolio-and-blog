import {
  S as te,
  i as le,
  s as Q,
  D as ue,
  k as p,
  a as I,
  q as R,
  l as g,
  m as v,
  h as u,
  c as A,
  r as B,
  n as m,
  p as $,
  E as be,
  b as S,
  F as f,
  G as ee,
  C as F,
  H as Ae,
  I as Te,
  J as fe,
  e as N,
  K as se,
  L as oe,
  u as Ge,
  o as Le,
  g as Oe,
  t as W,
  d as Re,
  f as P,
  M as je,
  N as $e,
  O as He,
  P as Se,
  Q as Be,
  x as re,
  y as ne,
  z as ie,
  A as ce,
  v as Me
} from '../../chunks/index-6fd41c6b.js';
import { e as D } from '../../chunks/singletons-1f164dd2.js';
import { n as Ce, p as Ie } from '../../chunks/stores-3489ebfb.js';
import { f as De } from '../../chunks/index-53cd51db.js';
function ke(r, e, t) {
  const a = r.slice();
  return (a[13] = e[t]), a;
}
function ye(r) {
  let e, t, a;
  function s(n, d) {
    return n[3] ? Ne : Ve;
  }
  let l = s(r),
    o = l(r);
  return {
    c() {
      (e = p('button')), o.c(), this.h();
    },
    l(n) {
      e = g(n, 'BUTTON', { class: !0 });
      var d = v(e);
      o.l(d), d.forEach(u), this.h();
    },
    h() {
      m(e, 'class', 'svelte-oacjwz');
    },
    m(n, d) {
      S(n, e, d), o.m(e, null), t || ((a = ee(e, 'click', r[7])), (t = !0));
    },
    p(n, d) {
      l === (l = s(n)) && o
        ? o.p(n, d)
        : (o.d(1), (o = l(n)), o && (o.c(), o.m(e, null)));
    },
    d(n) {
      n && u(e), o.d(), (t = !1), a();
    }
  };
}
function Ne(r) {
  let e, t;
  return {
    c() {
      (e = new se(!1)), (t = N()), this.h();
    },
    l(a) {
      (e = oe(a, !1)), (t = N()), this.h();
    },
    h() {
      e.a = t;
    },
    m(a, s) {
      e.m(qe, a, s), S(a, t, s);
    },
    p: F,
    d(a) {
      a && u(t), a && e.d();
    }
  };
}
function Ve(r) {
  let e, t;
  return {
    c() {
      (e = new se(!1)), (t = N()), this.h();
    },
    l(a) {
      (e = oe(a, !1)), (t = N()), this.h();
    },
    h() {
      e.a = t;
    },
    m(a, s) {
      e.m(Ue, a, s), S(a, t, s);
    },
    p: F,
    d(a) {
      a && u(t), a && e.d();
    }
  };
}
function We(r) {
  let e,
    t,
    a = r[13].separator + '',
    s;
  return {
    c() {
      (e = p('li')), (t = new se(!1)), (s = I()), this.h();
    },
    l(l) {
      e = g(l, 'LI', {});
      var o = v(e);
      (t = oe(o, !1)), (s = A(o)), o.forEach(u), this.h();
    },
    h() {
      (t.a = s), $(e, 'display', r[0] ? 'block' : 'none');
    },
    m(l, o) {
      S(l, e, o), t.m(a, e), f(e, s);
    },
    p(l, o) {
      o & 1 && $(e, 'display', l[0] ? 'block' : 'none');
    },
    d(l) {
      l && u(e);
    }
  };
}
function Pe(r) {
  let e,
    t,
    a = r[13].label + '',
    s,
    l,
    o,
    n,
    d,
    _;
  return {
    c() {
      (e = p('li')),
        (t = p('a')),
        (s = R(a)),
        (o = I()),
        (n = p('hr')),
        this.h();
    },
    l(i) {
      e = g(i, 'LI', { class: !0 });
      var c = v(e);
      t = g(c, 'A', { 'aria-current': !0, href: !0, class: !0 });
      var k = v(t);
      (s = B(k, a)),
        k.forEach(u),
        c.forEach(u),
        (o = A(i)),
        (n = g(i, 'HR', { style: !0 })),
        this.h();
    },
    h() {
      m(
        t,
        'aria-current',
        (l = r[6].url.pathname.startsWith(r[13].href) ? 'page' : void 0)
      ),
        m(t, 'href', r[13].href),
        m(t, 'class', 'svelte-oacjwz'),
        m(e, 'class', r[13].decoration ? 'attn-border attn' : 'trn-border'),
        $(e, 'display', r[13].label === 'Home' && r[0] ? 'none' : 'block'),
        $(n, 'width', '80%'),
        $(n, 'display', r[0] ? 'none' : 'block');
    },
    m(i, c) {
      S(i, e, c),
        f(e, t),
        f(t, s),
        S(i, o, c),
        S(i, n, c),
        d || ((_ = ee(t, 'click', r[7])), (d = !0));
    },
    p(i, c) {
      c & 64 &&
        l !==
          (l = i[6].url.pathname.startsWith(i[13].href) ? 'page' : void 0) &&
        m(t, 'aria-current', l),
        c & 1 &&
          $(e, 'display', i[13].label === 'Home' && i[0] ? 'none' : 'block'),
        c & 1 && $(n, 'display', i[0] ? 'none' : 'block');
    },
    d(i) {
      i && u(e), i && u(o), i && u(n), (d = !1), _();
    }
  };
}
function Ee(r) {
  let e;
  function t(l, o) {
    return l[13].href ? Pe : We;
  }
  let s = t(r)(r);
  return {
    c() {
      s.c(), (e = N());
    },
    l(l) {
      s.l(l), (e = N());
    },
    m(l, o) {
      s.m(l, o), S(l, e, o);
    },
    p(l, o) {
      s.p(l, o);
    },
    d(l) {
      s.d(l), l && u(e);
    }
  };
}
function Fe(r) {
  let e = !1,
    t = () => {
      e = !1;
    },
    a,
    s,
    l,
    o,
    n,
    d,
    _,
    i,
    c,
    k,
    L,
    T,
    H,
    j,
    U;
  ue(r[11]), ue(r[12]);
  let E = !r[0] && ye(r),
    z = r[8],
    y = [];
  for (let h = 0; h < z.length; h += 1) y[h] = Ee(ke(r, z, h));
  return {
    c() {
      (s = p('nav')),
        (l = p('progress')),
        (o = I()),
        (n = p('div')),
        (d = p('div')),
        (_ = p('a')),
        (i = R('Santiago Gonzalez')),
        (k = I()),
        E && E.c(),
        (L = I()),
        (T = p('section')),
        (H = p('ul'));
      for (let h = 0; h < y.length; h += 1) y[h].c();
      this.h();
    },
    l(h) {
      s = g(h, 'NAV', { class: !0 });
      var b = v(s);
      (l = g(b, 'PROGRESS', { max: !0, class: !0 })),
        v(l).forEach(u),
        (o = A(b)),
        (n = g(b, 'DIV', { class: !0 }));
      var w = v(n);
      d = g(w, 'DIV', { class: !0 });
      var G = v(d);
      _ = g(G, 'A', { 'aria-current': !0, href: !0, class: !0 });
      var q = v(_);
      (i = B(q, 'Santiago Gonzalez')),
        q.forEach(u),
        G.forEach(u),
        (k = A(w)),
        E && E.l(w),
        (L = A(w)),
        (T = g(w, 'SECTION', {}));
      var J = v(T);
      H = g(J, 'UL', { class: !0 });
      var M = v(H);
      for (let O = 0; O < y.length; O += 1) y[O].l(M);
      M.forEach(u), J.forEach(u), w.forEach(u), b.forEach(u), this.h();
    },
    h() {
      m(l, 'max', r[5]),
        (l.value = r[4]),
        m(l, 'class', 'svelte-oacjwz'),
        m(
          _,
          'aria-current',
          (c = r[6].url.pathname === `/${D}` ? 'page' : void 0)
        ),
        m(_, 'href', D + '/'),
        m(_, 'class', 'svelte-oacjwz'),
        $(_, 'padding-left', '0'),
        $(_, 'visibility', r[3] ? 'hidden' : 'visible'),
        m(d, 'class', 'main-nav svelte-oacjwz'),
        m(H, 'class', 'svelte-oacjwz'),
        $(H, 'flex-direction', r[0] ? 'row' : 'column'),
        $(T, 'display', r[3] || r[0] ? 'grid' : 'none'),
        m(n, 'class', 'nav-container wider svelte-oacjwz'),
        $(n, 'flex-direction', r[0] ? 'row' : 'column'),
        m(s, 'class', 'artifact-ui svelte-oacjwz'),
        be(s, 'headerActive', r[4] > 30 || r[3]);
    },
    m(h, b) {
      S(h, s, b),
        f(s, l),
        f(s, o),
        f(s, n),
        f(n, d),
        f(d, _),
        f(_, i),
        f(n, k),
        E && E.m(n, null),
        f(n, L),
        f(n, T),
        f(T, H);
      for (let w = 0; w < y.length; w += 1) y[w].m(H, null);
      j ||
        ((U = [
          ee(window, 'resize', r[11]),
          ee(window, 'scroll', () => {
            (e = !0), clearTimeout(a), (a = setTimeout(t, 100)), r[12]();
          })
        ]),
        (j = !0));
    },
    p(h, [b]) {
      if (
        (b & 16 &&
          !e &&
          ((e = !0),
          clearTimeout(a),
          scrollTo(window.pageXOffset, h[4]),
          (a = setTimeout(t, 100))),
        b & 32 && m(l, 'max', h[5]),
        b & 16 && (l.value = h[4]),
        b & 64 &&
          c !== (c = h[6].url.pathname === `/${D}` ? 'page' : void 0) &&
          m(_, 'aria-current', c),
        b & 8 && $(_, 'visibility', h[3] ? 'hidden' : 'visible'),
        h[0]
          ? E && (E.d(1), (E = null))
          : E
          ? E.p(h, b)
          : ((E = ye(h)), E.c(), E.m(n, L)),
        b & 449)
      ) {
        z = h[8];
        let w;
        for (w = 0; w < z.length; w += 1) {
          const G = ke(h, z, w);
          y[w] ? y[w].p(G, b) : ((y[w] = Ee(G)), y[w].c(), y[w].m(H, null));
        }
        for (; w < y.length; w += 1) y[w].d(1);
        y.length = z.length;
      }
      b & 1 && $(H, 'flex-direction', h[0] ? 'row' : 'column'),
        b & 9 && $(T, 'display', h[3] || h[0] ? 'grid' : 'none'),
        b & 1 && $(n, 'flex-direction', h[0] ? 'row' : 'column'),
        b & 24 && be(s, 'headerActive', h[4] > 30 || h[3]);
    },
    i: F,
    o: F,
    d(h) {
      h && u(s), E && E.d(), Ae(y, h), (j = !1), Te(U);
    }
  };
}
let Ue =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>',
  qe =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"/></svg>';
function Je(r, e, t) {
  let a, s, l, o;
  fe(r, Ce, j => t(10, (l = j))), fe(r, Ie, j => t(6, (o = j)));
  let n = !1,
    d = !1;
  const _ = () => t(3, (n = !n));
  let i = 0,
    c = 0,
    { pageHeight: k = 0 } = e;
  const L = [
    { label: 'Home', href: `${D}/` },
    { label: 'Blog', href: `${D}/blog` },
    { label: 'Projects', href: `${D}/projects` },
    { separator: '|' },
    { label: 'About', href: `${D}/about` },
    { label: 'Contact', href: `${D}/contact`, decoration: 'border' }
  ];
  function T() {
    t(1, (c = window.outerWidth)), t(2, (a = window.innerHeight));
  }
  function H() {
    t(4, (i = window.pageYOffset));
  }
  return (
    (r.$$set = j => {
      'pageHeight' in j && t(9, (k = j.pageHeight));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 2 && (c > 700 ? t(0, (d = !0)) : t(0, (d = !1))),
        r.$$.dirty & 516 && t(5, (s = k - a)),
        r.$$.dirty & 1025 && (l || d) && t(3, (n = !1));
    }),
    t(2, (a = 0)),
    [d, c, a, n, i, s, o, _, L, k, l, T, H]
  );
}
class Ke extends te {
  constructor(e) {
    super(), le(this, e, Je, Fe, Q, { pageHeight: 9 });
  }
}
function Qe(r) {
  let e,
    t,
    a,
    s,
    l,
    o,
    n,
    d,
    _,
    i,
    c,
    k,
    L,
    T,
    H,
    j,
    U,
    E,
    z,
    y,
    h,
    b,
    w,
    G,
    q,
    J,
    M,
    O,
    ae;
  return {
    c() {
      (e = p('footer')),
        (t = p('section')),
        (a = p('small')),
        (s = R('Designed & Built with <3 by Santiago')),
        (l = I()),
        (o = p('a')),
        (n = R('GitHub Repo ')),
        (d = new se(!1)),
        (_ = R(r[0])),
        (i = I()),
        (c = p('section')),
        (k = p('div')),
        (L = p('small')),
        (T = R('© GPL-3.0 Santiago Gonzalez')),
        (H = I()),
        (j = p('small')),
        (U = R('2022-2023. All Rights Reserved')),
        (E = I()),
        (z = p('ul')),
        (y = p('li')),
        (h = p('a')),
        (b = R('GitHub @santigo-zero')),
        (w = I()),
        (G = p('li')),
        (q = R('•')),
        (J = I()),
        (M = p('li')),
        (O = p('a')),
        (ae = R('LinkedIn')),
        this.h();
    },
    l(V) {
      e = g(V, 'FOOTER', { class: !0 });
      var C = v(e);
      t = g(C, 'SECTION', { class: !0 });
      var X = v(t);
      a = g(X, 'SMALL', {});
      var he = v(a);
      (s = B(he, 'Designed & Built with <3 by Santiago')),
        he.forEach(u),
        (l = A(X)),
        (o = g(X, 'A', { href: !0, class: !0 }));
      var Y = v(o);
      (n = B(Y, 'GitHub Repo ')),
        (d = oe(Y, !1)),
        (_ = B(Y, r[0])),
        Y.forEach(u),
        X.forEach(u),
        (i = A(C)),
        (c = g(C, 'SECTION', { class: !0 }));
      var Z = v(c);
      k = g(Z, 'DIV', { class: !0 });
      var x = v(k);
      L = g(x, 'SMALL', {});
      var _e = v(L);
      (T = B(_e, '© GPL-3.0 Santiago Gonzalez')),
        _e.forEach(u),
        (H = A(x)),
        (j = g(x, 'SMALL', {}));
      var de = v(j);
      (U = B(de, '2022-2023. All Rights Reserved')),
        de.forEach(u),
        x.forEach(u),
        (E = A(Z)),
        (z = g(Z, 'UL', { class: !0 }));
      var K = v(z);
      y = g(K, 'LI', {});
      var me = v(y);
      h = g(me, 'A', { href: !0, class: !0 });
      var pe = v(h);
      (b = B(pe, 'GitHub @santigo-zero')),
        pe.forEach(u),
        me.forEach(u),
        (w = A(K)),
        (G = g(K, 'LI', { class: !0 }));
      var ge = v(G);
      (q = B(ge, '•')), ge.forEach(u), (J = A(K)), (M = g(K, 'LI', {}));
      var ve = v(M);
      O = g(ve, 'A', { href: !0, class: !0 });
      var we = v(O);
      (ae = B(we, 'LinkedIn')),
        we.forEach(u),
        ve.forEach(u),
        K.forEach(u),
        Z.forEach(u),
        C.forEach(u),
        this.h();
    },
    h() {
      (d.a = _),
        m(o, 'href', 'https://github.com/santigo-zero/santigo-zero.github.io'),
        m(o, 'class', 'svelte-16uolwj'),
        m(t, 'class', 'upper wider svelte-16uolwj'),
        m(k, 'class', 'copyright svelte-16uolwj'),
        m(h, 'href', 'https://github.com/santigo-zero/'),
        m(h, 'class', 'svelte-16uolwj'),
        m(G, 'class', 'separator svelte-16uolwj'),
        m(
          O,
          'href',
          'https://www.linkedin.com/in/santiago-gonzalez-62557221b/'
        ),
        m(O, 'class', 'svelte-16uolwj'),
        m(z, 'class', 'svelte-16uolwj'),
        m(c, 'class', 'bottom wider svelte-16uolwj'),
        m(e, 'class', 'artifact-ui svelte-16uolwj');
    },
    m(V, C) {
      S(V, e, C),
        f(e, t),
        f(t, a),
        f(a, s),
        f(t, l),
        f(t, o),
        f(o, n),
        d.m(Xe, o),
        f(o, _),
        f(e, i),
        f(e, c),
        f(c, k),
        f(k, L),
        f(L, T),
        f(k, H),
        f(k, j),
        f(j, U),
        f(c, E),
        f(c, z),
        f(z, y),
        f(y, h),
        f(h, b),
        f(z, w),
        f(z, G),
        f(G, q),
        f(z, J),
        f(z, M),
        f(M, O),
        f(O, ae);
    },
    p(V, [C]) {
      C & 1 && Ge(_, V[0]);
    },
    i: F,
    o: F,
    d(V) {
      V && u(e);
    }
  };
}
let Xe =
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27Z"/></svg>';
function Ye(r, e, t) {
  var a = 0;
  return (
    Le(async () => {
      {
        const l = await (
          await fetch(
            'https://api.github.com/repos/santigo-zero/santigo-zero.github.io'
          )
        ).json();
        t(0, (a = l.stargazers_count));
      }
    }),
    [a]
  );
}
class Ze extends te {
  constructor(e) {
    super(), le(this, e, Ye, Qe, Q, {});
  }
}
function ze(r) {
  let e, t, a;
  const s = r[2].default,
    l = je(s, r, r[1], null);
  return {
    c() {
      (e = p('div')), l && l.c();
    },
    l(o) {
      e = g(o, 'DIV', {});
      var n = v(e);
      l && l.l(n), n.forEach(u);
    },
    m(o, n) {
      S(o, e, n), l && l.m(e, null), (a = !0);
    },
    p(o, n) {
      l &&
        l.p &&
        (!a || n & 2) &&
        $e(l, s, o, o[1], a ? Se(s, o[1], n, null) : He(o[1]), null);
    },
    i(o) {
      a ||
        (P(l, o),
        t ||
          ue(() => {
            (t = Be(e, De, { y: -60, duration: 250 })), t.start();
          }),
        (a = !0));
    },
    o(o) {
      W(l, o), (a = !1);
    },
    d(o) {
      o && u(e), l && l.d(o);
    }
  };
}
function xe(r) {
  let e = r[0],
    t,
    a,
    s = ze(r);
  return {
    c() {
      s.c(), (t = N());
    },
    l(l) {
      s.l(l), (t = N());
    },
    m(l, o) {
      s.m(l, o), S(l, t, o), (a = !0);
    },
    p(l, [o]) {
      o & 1 && Q(e, (e = l[0]))
        ? (Oe(),
          W(s, 1, 1, F),
          Re(),
          (s = ze(l)),
          s.c(),
          P(s, 1),
          s.m(t.parentNode, t))
        : s.p(l, o);
    },
    i(l) {
      a || (P(s), (a = !0));
    },
    o(l) {
      W(s), (a = !1);
    },
    d(l) {
      l && u(t), s.d(l);
    }
  };
}
function et(r, e, t) {
  let { $$slots: a = {}, $$scope: s } = e,
    { url: l } = e;
  return (
    (r.$$set = o => {
      'url' in o && t(0, (l = o.url)), '$$scope' in o && t(1, (s = o.$$scope));
    }),
    [l, s, a]
  );
}
class tt extends te {
  constructor(e) {
    super(), le(this, e, et, xe, Q, { url: 0 });
  }
}
function lt(r) {
  let e;
  const t = r[3].default,
    a = je(t, r, r[5], null);
  return {
    c() {
      a && a.c();
    },
    l(s) {
      a && a.l(s);
    },
    m(s, l) {
      a && a.m(s, l), (e = !0);
    },
    p(s, l) {
      a &&
        a.p &&
        (!e || l & 32) &&
        $e(a, t, s, s[5], e ? Se(t, s[5], l, null) : He(s[5]), null);
    },
    i(s) {
      e || (P(a, s), (e = !0));
    },
    o(s) {
      W(a, s), (e = !1);
    },
    d(s) {
      a && a.d(s);
    }
  };
}
function st(r) {
  let e, t, a, s, l, o, n, d, _;
  return (
    (t = new Ke({ props: { pageHeight: r[1] } })),
    (s = new tt({
      props: { url: r[2].url, $$slots: { default: [lt] }, $$scope: { ctx: r } }
    })),
    (o = new Ze({})),
    {
      c() {
        (e = p('div')),
          re(t.$$.fragment),
          (a = I()),
          re(s.$$.fragment),
          (l = I()),
          re(o.$$.fragment),
          (n = I()),
          (d = p('div')),
          this.h();
      },
      l(i) {
        e = g(i, 'DIV', { class: !0 });
        var c = v(e);
        ne(t.$$.fragment, c),
          (a = A(c)),
          ne(s.$$.fragment, c),
          (l = A(c)),
          ne(o.$$.fragment, c),
          c.forEach(u),
          (n = A(i)),
          (d = g(i, 'DIV', { class: !0 })),
          v(d).forEach(u),
          this.h();
      },
      h() {
        m(e, 'class', 'layout svelte-wbwcti'),
          m(d, 'class', 'noise svelte-wbwcti');
      },
      m(i, c) {
        S(i, e, c),
          ie(t, e, null),
          f(e, a),
          ie(s, e, null),
          f(e, l),
          ie(o, e, null),
          r[4](e),
          S(i, n, c),
          S(i, d, c),
          (_ = !0);
      },
      p(i, [c]) {
        const k = {};
        c & 2 && (k.pageHeight = i[1]), t.$set(k);
        const L = {};
        c & 4 && (L.url = i[2].url),
          c & 32 && (L.$$scope = { dirty: c, ctx: i }),
          s.$set(L);
      },
      i(i) {
        _ ||
          (P(t.$$.fragment, i),
          P(s.$$.fragment, i),
          P(o.$$.fragment, i),
          (_ = !0));
      },
      o(i) {
        W(t.$$.fragment, i), W(s.$$.fragment, i), W(o.$$.fragment, i), (_ = !1);
      },
      d(i) {
        i && u(e), ce(t), ce(s), ce(o), r[4](null), i && u(n), i && u(d);
      }
    }
  );
}
function ot(r, e, t) {
  let a, s;
  fe(r, Ie, _ => t(2, (s = _)));
  let { $$slots: l = {}, $$scope: o } = e,
    n;
  Le(() => {
    const _ = new ResizeObserver(i => {
      const c = i.at(0);
      c !== void 0 && t(1, (a = Math.floor(c.contentBoxSize[0].blockSize)));
    });
    return _.observe(n), () => _.unobserve(n);
  });
  function d(_) {
    Me[_ ? 'unshift' : 'push'](() => {
      (n = _), t(0, n);
    });
  }
  return (
    (r.$$set = _ => {
      '$$scope' in _ && t(5, (o = _.$$scope));
    }),
    t(1, (a = 0)),
    [n, a, s, l, d, o]
  );
}
class ct extends te {
  constructor(e) {
    super(), le(this, e, ot, st, Q, {});
  }
}
export { ct as default };
