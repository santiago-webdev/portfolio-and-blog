import {
  S as ee,
  i as te,
  s as K,
  D as ne,
  k as g,
  a as I,
  q as A,
  l as v,
  m as b,
  h as _,
  c as S,
  r as G,
  n as m,
  p as k,
  E as me,
  b as L,
  F as u,
  G as ie,
  C as J,
  H as Se,
  I as Le,
  J as ce,
  e as x,
  K as Ae,
  L as Ge,
  M as Oe,
  u as Te,
  o as ze,
  g as Re,
  t as B,
  d as De,
  f as C,
  N as Ee,
  O as ke,
  P as $e,
  Q as He,
  R as qe,
  x as se,
  y as ae,
  z as re,
  A as oe,
  v as Ne
} from '../../chunks/index-82b2adb0.js';
import { e as N } from '../../chunks/singletons-d69dd340.js';
import { n as Pe, p as Ie } from '../../chunks/stores-f9938e62.js';
import { f as Ve } from '../../chunks/index-554623a6.js';
function be(a, e, s) {
  const o = a.slice();
  return (o[13] = e[s]), o;
}
function Be(a) {
  let e,
    s,
    o = a[13].separator + '',
    l;
  return {
    c() {
      (e = g('li')), (s = new Ae(!1)), (l = I()), this.h();
    },
    l(t) {
      e = v(t, 'LI', { class: !0 });
      var r = b(e);
      (s = Ge(r, !1)), (l = S(r)), r.forEach(_), this.h();
    },
    h() {
      (s.a = l),
        m(e, 'class', 'svelte-1s9r6za'),
        k(e, 'display', a[0] ? 'block' : 'none');
    },
    m(t, r) {
      L(t, e, r), s.m(o, e), u(e, l);
    },
    p(t, r) {
      r & 1 && k(e, 'display', t[0] ? 'block' : 'none');
    },
    d(t) {
      t && _(e);
    }
  };
}
function Ce(a) {
  let e,
    s,
    o = a[13].label + '',
    l,
    t,
    r,
    c,
    d,
    h;
  return {
    c() {
      (e = g('li')),
        (s = g('a')),
        (l = A(o)),
        (r = I()),
        (c = g('hr')),
        this.h();
    },
    l(n) {
      e = v(n, 'LI', { class: !0 });
      var i = b(e);
      s = v(i, 'A', { 'aria-current': !0, href: !0, class: !0 });
      var y = b(s);
      (l = G(y, o)),
        y.forEach(_),
        i.forEach(_),
        (r = S(n)),
        (c = v(n, 'HR', { style: !0 })),
        this.h();
    },
    h() {
      m(
        s,
        'aria-current',
        (t = a[6].url.pathname.startsWith(a[13].href) ? 'page' : void 0)
      ),
        m(s, 'href', a[13].href),
        m(s, 'class', 'svelte-1s9r6za'),
        m(
          e,
          'class',
          Oe(a[13].decoration ? 'attn-border attn' : 'trn-border') +
            ' svelte-1s9r6za'
        ),
        k(e, 'display', a[13].label === 'Home' && a[0] ? 'none' : 'block'),
        k(c, 'width', '80%'),
        k(c, 'display', a[0] ? 'none' : 'block');
    },
    m(n, i) {
      L(n, e, i),
        u(e, s),
        u(s, l),
        L(n, r, i),
        L(n, c, i),
        d || ((h = ie(s, 'click', a[7])), (d = !0));
    },
    p(n, i) {
      i & 64 &&
        t !==
          (t = n[6].url.pathname.startsWith(n[13].href) ? 'page' : void 0) &&
        m(s, 'aria-current', t),
        i & 1 &&
          k(e, 'display', n[13].label === 'Home' && n[0] ? 'none' : 'block'),
        i & 1 && k(c, 'display', n[0] ? 'none' : 'block');
    },
    d(n) {
      n && _(e), n && _(r), n && _(c), (d = !1), h();
    }
  };
}
function we(a) {
  let e;
  function s(t, r) {
    return t[13].href ? Ce : Be;
  }
  let l = s(a)(a);
  return {
    c() {
      l.c(), (e = x());
    },
    l(t) {
      l.l(t), (e = x());
    },
    m(t, r) {
      l.m(t, r), L(t, e, r);
    },
    p(t, r) {
      l.p(t, r);
    },
    d(t) {
      l.d(t), t && _(e);
    }
  };
}
function We(a) {
  let e = !1,
    s = () => {
      e = !1;
    },
    o,
    l,
    t,
    r,
    c,
    d,
    h,
    n,
    i,
    y,
    E,
    $,
    T,
    H;
  ne(a[11]), ne(a[12]);
  let O = a[8],
    z = [];
  for (let f = 0; f < O.length; f += 1) z[f] = we(be(a, O, f));
  return {
    c() {
      (l = g('nav')),
        (t = g('progress')),
        (r = I()),
        (c = g('div')),
        (d = g('div')),
        (h = g('a')),
        (n = A('Santiago Gonzalez')),
        (y = I()),
        (E = g('section')),
        ($ = g('ul'));
      for (let f = 0; f < z.length; f += 1) z[f].c();
      this.h();
    },
    l(f) {
      l = v(f, 'NAV', { class: !0 });
      var w = b(l);
      (t = v(w, 'PROGRESS', { max: !0, class: !0 })),
        b(t).forEach(_),
        (r = S(w)),
        (c = v(w, 'DIV', { class: !0 }));
      var p = b(c);
      d = v(p, 'DIV', { class: !0 });
      var R = b(d);
      h = v(R, 'A', { 'aria-current': !0, href: !0, class: !0 });
      var W = b(h);
      (n = G(W, 'Santiago Gonzalez')),
        W.forEach(_),
        R.forEach(_),
        (y = S(p)),
        (E = v(p, 'SECTION', {}));
      var D = b(E);
      $ = v(D, 'UL', { class: !0 });
      var M = b($);
      for (let P = 0; P < z.length; P += 1) z[P].l(M);
      M.forEach(_), D.forEach(_), p.forEach(_), w.forEach(_), this.h();
    },
    h() {
      m(t, 'max', a[5]),
        (t.value = a[4]),
        m(t, 'class', 'svelte-1s9r6za'),
        m(
          h,
          'aria-current',
          (i = a[6].url.pathname === `/${N}` ? 'page' : void 0)
        ),
        m(h, 'href', N + '/'),
        m(h, 'class', 'svelte-1s9r6za'),
        k(h, 'padding-left', '0'),
        k(h, 'visibility', a[3] ? 'hidden' : 'visible'),
        m(d, 'class', 'main-nav svelte-1s9r6za'),
        m($, 'class', 'svelte-1s9r6za'),
        k($, 'flex-direction', a[0] ? 'row' : 'column'),
        k(E, 'display', a[3] || a[0] ? 'grid' : 'none'),
        m(c, 'class', 'nav-container wider svelte-1s9r6za'),
        k(c, 'flex-direction', a[0] ? 'row' : 'column'),
        m(l, 'class', 'artifact-ui svelte-1s9r6za'),
        me(l, 'headerActive', a[4] > 30 || a[3]);
    },
    m(f, w) {
      L(f, l, w),
        u(l, t),
        u(l, r),
        u(l, c),
        u(c, d),
        u(d, h),
        u(h, n),
        u(c, y),
        u(c, E),
        u(E, $);
      for (let p = 0; p < z.length; p += 1) z[p].m($, null);
      T ||
        ((H = [
          ie(window, 'resize', a[11]),
          ie(window, 'scroll', () => {
            (e = !0), clearTimeout(o), (o = setTimeout(s, 100)), a[12]();
          })
        ]),
        (T = !0));
    },
    p(f, [w]) {
      if (
        (w & 16 &&
          !e &&
          ((e = !0),
          clearTimeout(o),
          scrollTo(window.pageXOffset, f[4]),
          (o = setTimeout(s, 100))),
        w & 32 && m(t, 'max', f[5]),
        w & 16 && (t.value = f[4]),
        w & 64 &&
          i !== (i = f[6].url.pathname === `/${N}` ? 'page' : void 0) &&
          m(h, 'aria-current', i),
        w & 8 && k(h, 'visibility', f[3] ? 'hidden' : 'visible'),
        w & 449)
      ) {
        O = f[8];
        let p;
        for (p = 0; p < O.length; p += 1) {
          const R = be(f, O, p);
          z[p] ? z[p].p(R, w) : ((z[p] = we(R)), z[p].c(), z[p].m($, null));
        }
        for (; p < z.length; p += 1) z[p].d(1);
        z.length = O.length;
      }
      w & 1 && k($, 'flex-direction', f[0] ? 'row' : 'column'),
        w & 9 && k(E, 'display', f[3] || f[0] ? 'grid' : 'none'),
        w & 1 && k(c, 'flex-direction', f[0] ? 'row' : 'column'),
        w & 24 && me(l, 'headerActive', f[4] > 30 || f[3]);
    },
    i: J,
    o: J,
    d(f) {
      f && _(l), Se(z, f), (T = !1), Le(H);
    }
  };
}
function Me(a, e, s) {
  let o, l, t, r;
  ce(a, Pe, H => s(10, (t = H))), ce(a, Ie, H => s(6, (r = H)));
  let c = !1,
    d = !1;
  const h = () => s(3, (c = !c));
  let n = 0,
    i = 0,
    { pageHeight: y = 0 } = e;
  const E = [
    { label: 'Home', href: `${N}/` },
    { label: 'Blog', href: `${N}/blog` },
    { label: 'Projects', href: `${N}/projects` },
    { separator: '|' },
    { label: 'About', href: `${N}/about` },
    { label: 'Contact', href: `${N}/contact`, decoration: 'border' }
  ];
  function $() {
    s(1, (i = window.outerWidth)), s(2, (o = window.innerHeight));
  }
  function T() {
    s(4, (n = window.pageYOffset));
  }
  return (
    (a.$$set = H => {
      'pageHeight' in H && s(9, (y = H.pageHeight));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 2 && (i > 700 ? s(0, (d = !0)) : s(0, (d = !1))),
        a.$$.dirty & 516 && s(5, (l = y - o)),
        a.$$.dirty & 1025 && (t || d) && s(3, (c = !1));
    }),
    s(2, (o = 0)),
    [d, i, o, c, n, l, r, h, E, y, t, $, T]
  );
}
class Fe extends ee {
  constructor(e) {
    super(), te(this, e, Me, We, K, { pageHeight: 9 });
  }
}
function je(a) {
  let e,
    s,
    o,
    l,
    t,
    r,
    c,
    d,
    h,
    n,
    i,
    y,
    E,
    $,
    T,
    H,
    O,
    z,
    f,
    w,
    p,
    R,
    W,
    D,
    M,
    P,
    U,
    F,
    le;
  return {
    c() {
      (e = g('footer')),
        (s = g('section')),
        (o = g('p')),
        (l = A('Designed & Built with <3 by Santiago')),
        (t = I()),
        (r = g('a')),
        (c = A('nth(')),
        (d = A(a[0])),
        (h = A(') on GitHub')),
        (n = I()),
        (i = g('section')),
        (y = g('div')),
        (E = g('p')),
        ($ = A('© GPL-3.0 Santiago Gonzalez')),
        (T = I()),
        (H = g('p')),
        (O = A('2022-2023. All Rights Reserved')),
        (z = I()),
        (f = g('ul')),
        (w = g('li')),
        (p = g('a')),
        (R = A('GitHub @santigo-zero')),
        (W = I()),
        (D = g('li')),
        (M = A('•')),
        (P = I()),
        (U = g('li')),
        (F = g('a')),
        (le = A('LinkedIn')),
        this.h();
    },
    l(V) {
      e = v(V, 'FOOTER', { class: !0 });
      var q = b(e);
      s = v(q, 'SECTION', { class: !0 });
      var Q = b(s);
      o = v(Q, 'P', {});
      var ue = b(o);
      (l = G(ue, 'Designed & Built with <3 by Santiago')),
        ue.forEach(_),
        (t = S(Q)),
        (r = v(Q, 'A', { href: !0 }));
      var X = b(r);
      (c = G(X, 'nth(')),
        (d = G(X, a[0])),
        (h = G(X, ') on GitHub')),
        X.forEach(_),
        Q.forEach(_),
        (n = S(q)),
        (i = v(q, 'SECTION', { class: !0 }));
      var Y = b(i);
      y = v(Y, 'DIV', { class: !0 });
      var Z = b(y);
      E = v(Z, 'P', {});
      var fe = b(E);
      ($ = G(fe, '© GPL-3.0 Santiago Gonzalez')),
        fe.forEach(_),
        (T = S(Z)),
        (H = v(Z, 'P', {}));
      var _e = b(H);
      (O = G(_e, '2022-2023. All Rights Reserved')),
        _e.forEach(_),
        Z.forEach(_),
        (z = S(Y)),
        (f = v(Y, 'UL', { class: !0 }));
      var j = b(f);
      w = v(j, 'LI', {});
      var he = b(w);
      p = v(he, 'A', { href: !0 });
      var de = b(p);
      (R = G(de, 'GitHub @santigo-zero')),
        de.forEach(_),
        he.forEach(_),
        (W = S(j)),
        (D = v(j, 'LI', { class: !0 }));
      var pe = b(D);
      (M = G(pe, '•')), pe.forEach(_), (P = S(j)), (U = v(j, 'LI', {}));
      var ge = b(U);
      F = v(ge, 'A', { href: !0 });
      var ve = b(F);
      (le = G(ve, 'LinkedIn')),
        ve.forEach(_),
        ge.forEach(_),
        j.forEach(_),
        Y.forEach(_),
        q.forEach(_),
        this.h();
    },
    h() {
      m(r, 'href', 'https://github.com/santigo-zero/santigo-zero.github.io'),
        m(s, 'class', 'upper wider svelte-1elv9q5'),
        m(y, 'class', 'copyright svelte-1elv9q5'),
        m(p, 'href', 'https://github.com/santigo-zero/'),
        m(D, 'class', 'separator svelte-1elv9q5'),
        m(
          F,
          'href',
          'https://www.linkedin.com/in/santiago-gonzalez-62557221b/'
        ),
        m(f, 'class', 'svelte-1elv9q5'),
        m(i, 'class', 'bottom wider svelte-1elv9q5'),
        m(e, 'class', 'svelte-1elv9q5');
    },
    m(V, q) {
      L(V, e, q),
        u(e, s),
        u(s, o),
        u(o, l),
        u(s, t),
        u(s, r),
        u(r, c),
        u(r, d),
        u(r, h),
        u(e, n),
        u(e, i),
        u(i, y),
        u(y, E),
        u(E, $),
        u(y, T),
        u(y, H),
        u(H, O),
        u(i, z),
        u(i, f),
        u(f, w),
        u(w, p),
        u(p, R),
        u(f, W),
        u(f, D),
        u(D, M),
        u(f, P),
        u(f, U),
        u(U, F),
        u(F, le);
    },
    p(V, [q]) {
      q & 1 && Te(d, V[0]);
    },
    i: J,
    o: J,
    d(V) {
      V && _(e);
    }
  };
}
function Ue(a, e, s) {
  var o = 0;
  return (
    ze(async () => {
      {
        const t = await (
          await fetch(
            'https://api.github.com/repos/santigo-zero/santigo-zero.github.io'
          )
        ).json();
        s(0, (o = t.stargazers_count));
      }
    }),
    [o]
  );
}
class Je extends ee {
  constructor(e) {
    super(), te(this, e, Ue, je, K, {});
  }
}
function ye(a) {
  let e, s, o;
  const l = a[2].default,
    t = Ee(l, a, a[1], null);
  return {
    c() {
      (e = g('div')), t && t.c();
    },
    l(r) {
      e = v(r, 'DIV', {});
      var c = b(e);
      t && t.l(c), c.forEach(_);
    },
    m(r, c) {
      L(r, e, c), t && t.m(e, null), (o = !0);
    },
    p(r, c) {
      t &&
        t.p &&
        (!o || c & 2) &&
        ke(t, l, r, r[1], o ? He(l, r[1], c, null) : $e(r[1]), null);
    },
    i(r) {
      o ||
        (C(t, r),
        s ||
          ne(() => {
            (s = qe(e, Ve, { y: -60, duration: 250 })), s.start();
          }),
        (o = !0));
    },
    o(r) {
      B(t, r), (o = !1);
    },
    d(r) {
      r && _(e), t && t.d(r);
    }
  };
}
function Ke(a) {
  let e = a[0],
    s,
    o,
    l = ye(a);
  return {
    c() {
      l.c(), (s = x());
    },
    l(t) {
      l.l(t), (s = x());
    },
    m(t, r) {
      l.m(t, r), L(t, s, r), (o = !0);
    },
    p(t, [r]) {
      r & 1 && K(e, (e = t[0]))
        ? (Re(),
          B(l, 1, 1, J),
          De(),
          (l = ye(t)),
          l.c(),
          C(l, 1),
          l.m(s.parentNode, s))
        : l.p(t, r);
    },
    i(t) {
      o || (C(l), (o = !0));
    },
    o(t) {
      B(l), (o = !1);
    },
    d(t) {
      t && _(s), l.d(t);
    }
  };
}
function Qe(a, e, s) {
  let { $$slots: o = {}, $$scope: l } = e,
    { url: t } = e;
  return (
    (a.$$set = r => {
      'url' in r && s(0, (t = r.url)), '$$scope' in r && s(1, (l = r.$$scope));
    }),
    [t, l, o]
  );
}
class Xe extends ee {
  constructor(e) {
    super(), te(this, e, Qe, Ke, K, { url: 0 });
  }
}
function Ye(a) {
  let e;
  const s = a[3].default,
    o = Ee(s, a, a[5], null);
  return {
    c() {
      o && o.c();
    },
    l(l) {
      o && o.l(l);
    },
    m(l, t) {
      o && o.m(l, t), (e = !0);
    },
    p(l, t) {
      o &&
        o.p &&
        (!e || t & 32) &&
        ke(o, s, l, l[5], e ? He(s, l[5], t, null) : $e(l[5]), null);
    },
    i(l) {
      e || (C(o, l), (e = !0));
    },
    o(l) {
      B(o, l), (e = !1);
    },
    d(l) {
      o && o.d(l);
    }
  };
}
function Ze(a) {
  let e, s, o, l, t, r, c, d, h;
  return (
    (s = new Fe({ props: { pageHeight: a[1] } })),
    (l = new Xe({
      props: { url: a[2].url, $$slots: { default: [Ye] }, $$scope: { ctx: a } }
    })),
    (r = new Je({})),
    {
      c() {
        (e = g('div')),
          se(s.$$.fragment),
          (o = I()),
          se(l.$$.fragment),
          (t = I()),
          se(r.$$.fragment),
          (c = I()),
          (d = g('div')),
          this.h();
      },
      l(n) {
        e = v(n, 'DIV', { class: !0 });
        var i = b(e);
        ae(s.$$.fragment, i),
          (o = S(i)),
          ae(l.$$.fragment, i),
          (t = S(i)),
          ae(r.$$.fragment, i),
          i.forEach(_),
          (c = S(n)),
          (d = v(n, 'DIV', { class: !0 })),
          b(d).forEach(_),
          this.h();
      },
      h() {
        m(e, 'class', 'layout svelte-1nwuy2o'),
          m(d, 'class', 'noise svelte-1nwuy2o');
      },
      m(n, i) {
        L(n, e, i),
          re(s, e, null),
          u(e, o),
          re(l, e, null),
          u(e, t),
          re(r, e, null),
          a[4](e),
          L(n, c, i),
          L(n, d, i),
          (h = !0);
      },
      p(n, [i]) {
        const y = {};
        i & 2 && (y.pageHeight = n[1]), s.$set(y);
        const E = {};
        i & 4 && (E.url = n[2].url),
          i & 32 && (E.$$scope = { dirty: i, ctx: n }),
          l.$set(E);
      },
      i(n) {
        h ||
          (C(s.$$.fragment, n),
          C(l.$$.fragment, n),
          C(r.$$.fragment, n),
          (h = !0));
      },
      o(n) {
        B(s.$$.fragment, n), B(l.$$.fragment, n), B(r.$$.fragment, n), (h = !1);
      },
      d(n) {
        n && _(e), oe(s), oe(l), oe(r), a[4](null), n && _(c), n && _(d);
      }
    }
  );
}
function xe(a, e, s) {
  let o, l;
  ce(a, Ie, h => s(2, (l = h)));
  let { $$slots: t = {}, $$scope: r } = e,
    c;
  ze(() => {
    const h = new ResizeObserver(n => {
      const i = n.at(0);
      i !== void 0 && s(1, (o = Math.floor(i.contentBoxSize[0].blockSize)));
    });
    return h.observe(c), () => h.unobserve(c);
  });
  function d(h) {
    Ne[h ? 'unshift' : 'push'](() => {
      (c = h), s(0, c);
    });
  }
  return (
    (a.$$set = h => {
      '$$scope' in h && s(5, (r = h.$$scope));
    }),
    s(1, (o = 0)),
    [c, o, l, t, d, r]
  );
}
class at extends ee {
  constructor(e) {
    super(), te(this, e, xe, Ze, K, {});
  }
}
export { at as default };
