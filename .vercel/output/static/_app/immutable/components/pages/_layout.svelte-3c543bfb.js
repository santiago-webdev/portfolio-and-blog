import {
  S as ee,
  i as te,
  s as K,
  D as ne,
  k as v,
  a as I,
  q as L,
  l as g,
  m as b,
  h as _,
  c as q,
  r as A,
  n as m,
  p as z,
  E as me,
  b as S,
  F as u,
  G as ie,
  C as J,
  H as qe,
  I as Se,
  J as ce,
  e as x,
  K as Le,
  L as Ae,
  M as Ge,
  u as Oe,
  o as Ee,
  g as Te,
  t as B,
  d as Re,
  f as C,
  N as ke,
  O as ze,
  P as $e,
  Q as He,
  R as De,
  x as se,
  y as ae,
  z as oe,
  A as re,
  v as Ne
} from '../../chunks/index-82b2adb0.js';
import { e as N } from '../../chunks/singletons-d69dd340.js';
import { n as Pe, p as Ie } from '../../chunks/stores-f9938e62.js';
import { f as Ve } from '../../chunks/index-554623a6.js';
function be(a, e, s) {
  const r = a.slice();
  return (r[13] = e[s]), r;
}
function Be(a) {
  let e,
    s,
    r = a[13].separator + '',
    l;
  return {
    c() {
      (e = v('li')), (s = new Le(!1)), (l = I()), this.h();
    },
    l(t) {
      e = g(t, 'LI', { class: !0 });
      var o = b(e);
      (s = Ae(o, !1)), (l = q(o)), o.forEach(_), this.h();
    },
    h() {
      (s.a = l),
        m(e, 'class', 'svelte-1dqotvi'),
        z(e, 'display', a[0] ? 'block' : 'none');
    },
    m(t, o) {
      S(t, e, o), s.m(r, e), u(e, l);
    },
    p(t, o) {
      o & 1 && z(e, 'display', t[0] ? 'block' : 'none');
    },
    d(t) {
      t && _(e);
    }
  };
}
function Ce(a) {
  let e,
    s,
    r = a[13].label + '',
    l,
    t,
    o,
    c,
    d,
    h;
  return {
    c() {
      (e = v('li')),
        (s = v('a')),
        (l = L(r)),
        (o = I()),
        (c = v('hr')),
        this.h();
    },
    l(n) {
      e = g(n, 'LI', { class: !0 });
      var i = b(e);
      s = g(i, 'A', { 'aria-current': !0, href: !0, class: !0 });
      var y = b(s);
      (l = A(y, r)),
        y.forEach(_),
        i.forEach(_),
        (o = q(n)),
        (c = g(n, 'HR', { style: !0 })),
        this.h();
    },
    h() {
      m(
        s,
        'aria-current',
        (t = a[6].url.pathname.startsWith(a[13].href) ? 'page' : void 0)
      ),
        m(s, 'href', a[13].href),
        m(s, 'class', 'svelte-1dqotvi'),
        m(
          e,
          'class',
          Ge(a[13].decoration ? 'attn-border attn' : 'trn-border') +
            ' svelte-1dqotvi'
        ),
        z(e, 'display', a[13].label === 'Home' && a[0] ? 'none' : 'block'),
        z(c, 'width', '80%'),
        z(c, 'display', a[0] ? 'none' : 'block');
    },
    m(n, i) {
      S(n, e, i),
        u(e, s),
        u(s, l),
        S(n, o, i),
        S(n, c, i),
        d || ((h = ie(s, 'click', a[7])), (d = !0));
    },
    p(n, i) {
      i & 64 &&
        t !==
          (t = n[6].url.pathname.startsWith(n[13].href) ? 'page' : void 0) &&
        m(s, 'aria-current', t),
        i & 1 &&
          z(e, 'display', n[13].label === 'Home' && n[0] ? 'none' : 'block'),
        i & 1 && z(c, 'display', n[0] ? 'none' : 'block');
    },
    d(n) {
      n && _(e), n && _(o), n && _(c), (d = !1), h();
    }
  };
}
function we(a) {
  let e;
  function s(t, o) {
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
    m(t, o) {
      l.m(t, o), S(t, e, o);
    },
    p(t, o) {
      l.p(t, o);
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
    r,
    l,
    t,
    o,
    c,
    d,
    h,
    n,
    i,
    y,
    k,
    $,
    O,
    H;
  ne(a[11]), ne(a[12]);
  let G = a[8],
    E = [];
  for (let f = 0; f < G.length; f += 1) E[f] = we(be(a, G, f));
  return {
    c() {
      (l = v('nav')),
        (t = v('progress')),
        (o = I()),
        (c = v('div')),
        (d = v('div')),
        (h = v('a')),
        (n = L('Santiago Gonzalez')),
        (y = I()),
        (k = v('section')),
        ($ = v('ul'));
      for (let f = 0; f < E.length; f += 1) E[f].c();
      this.h();
    },
    l(f) {
      l = g(f, 'NAV', { class: !0 });
      var w = b(l);
      (t = g(w, 'PROGRESS', { max: !0, class: !0 })),
        b(t).forEach(_),
        (o = q(w)),
        (c = g(w, 'DIV', { class: !0 }));
      var p = b(c);
      d = g(p, 'DIV', { class: !0 });
      var T = b(d);
      h = g(T, 'A', { 'aria-current': !0, href: !0, class: !0 });
      var W = b(h);
      (n = A(W, 'Santiago Gonzalez')),
        W.forEach(_),
        T.forEach(_),
        (y = q(p)),
        (k = g(p, 'SECTION', {}));
      var R = b(k);
      $ = g(R, 'UL', { class: !0 });
      var M = b($);
      for (let P = 0; P < E.length; P += 1) E[P].l(M);
      M.forEach(_), R.forEach(_), p.forEach(_), w.forEach(_), this.h();
    },
    h() {
      m(t, 'max', a[5]),
        (t.value = a[4]),
        m(t, 'class', 'svelte-1dqotvi'),
        m(
          h,
          'aria-current',
          (i = a[6].url.pathname === `/${N}` ? 'page' : void 0)
        ),
        m(h, 'href', N + '/'),
        m(h, 'class', 'svelte-1dqotvi'),
        z(h, 'padding-left', '0'),
        z(h, 'visibility', a[3] ? 'hidden' : 'visible'),
        m(d, 'class', 'main-nav svelte-1dqotvi'),
        m($, 'class', 'svelte-1dqotvi'),
        z($, 'flex-direction', a[0] ? 'row' : 'column'),
        z(k, 'display', a[3] || a[0] ? 'grid' : 'none'),
        m(c, 'class', 'nav-container wider svelte-1dqotvi'),
        z(c, 'flex-direction', a[0] ? 'row' : 'column'),
        m(l, 'class', 'svelte-1dqotvi'),
        me(l, 'headerActive', a[4] > 30 || a[3]);
    },
    m(f, w) {
      S(f, l, w),
        u(l, t),
        u(l, o),
        u(l, c),
        u(c, d),
        u(d, h),
        u(h, n),
        u(c, y),
        u(c, k),
        u(k, $);
      for (let p = 0; p < E.length; p += 1) E[p].m($, null);
      O ||
        ((H = [
          ie(window, 'resize', a[11]),
          ie(window, 'scroll', () => {
            (e = !0), clearTimeout(r), (r = setTimeout(s, 100)), a[12]();
          })
        ]),
        (O = !0));
    },
    p(f, [w]) {
      if (
        (w & 16 &&
          !e &&
          ((e = !0),
          clearTimeout(r),
          scrollTo(window.pageXOffset, f[4]),
          (r = setTimeout(s, 100))),
        w & 32 && m(t, 'max', f[5]),
        w & 16 && (t.value = f[4]),
        w & 64 &&
          i !== (i = f[6].url.pathname === `/${N}` ? 'page' : void 0) &&
          m(h, 'aria-current', i),
        w & 8 && z(h, 'visibility', f[3] ? 'hidden' : 'visible'),
        w & 449)
      ) {
        G = f[8];
        let p;
        for (p = 0; p < G.length; p += 1) {
          const T = be(f, G, p);
          E[p] ? E[p].p(T, w) : ((E[p] = we(T)), E[p].c(), E[p].m($, null));
        }
        for (; p < E.length; p += 1) E[p].d(1);
        E.length = G.length;
      }
      w & 1 && z($, 'flex-direction', f[0] ? 'row' : 'column'),
        w & 9 && z(k, 'display', f[3] || f[0] ? 'grid' : 'none'),
        w & 1 && z(c, 'flex-direction', f[0] ? 'row' : 'column'),
        w & 24 && me(l, 'headerActive', f[4] > 30 || f[3]);
    },
    i: J,
    o: J,
    d(f) {
      f && _(l), qe(E, f), (O = !1), Se(H);
    }
  };
}
function Me(a, e, s) {
  let r, l, t, o;
  ce(a, Pe, H => s(10, (t = H))), ce(a, Ie, H => s(6, (o = H)));
  let c = !1,
    d = !1;
  const h = () => s(3, (c = !c));
  let n = 0,
    i = 0,
    { pageHeight: y = 0 } = e;
  const k = [
    { label: 'Home', href: `${N}/` },
    { label: 'Blog', href: `${N}/blog` },
    { label: 'Projects', href: `${N}/projects` },
    { separator: '|' },
    { label: 'About', href: `${N}/about` },
    { label: 'Contact', href: `${N}/contact`, decoration: 'border' }
  ];
  function $() {
    s(1, (i = window.outerWidth)), s(2, (r = window.innerHeight));
  }
  function O() {
    s(4, (n = window.pageYOffset));
  }
  return (
    (a.$$set = H => {
      'pageHeight' in H && s(9, (y = H.pageHeight));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 2 && (i > 700 ? s(0, (d = !0)) : s(0, (d = !1))),
        a.$$.dirty & 516 && s(5, (l = y - r)),
        a.$$.dirty & 1025 && (t || d) && s(3, (c = !1));
    }),
    s(2, (r = 0)),
    [d, i, r, c, n, l, o, h, k, y, t, $, O]
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
    r,
    l,
    t,
    o,
    c,
    d,
    h,
    n,
    i,
    y,
    k,
    $,
    O,
    H,
    G,
    E,
    f,
    w,
    p,
    T,
    W,
    R,
    M,
    P,
    U,
    F,
    le;
  return {
    c() {
      (e = v('footer')),
        (s = v('section')),
        (r = v('p')),
        (l = L('Designed & Built with <3 by Santiago')),
        (t = I()),
        (o = v('a')),
        (c = L('nth(')),
        (d = L(a[0])),
        (h = L(') on GitHub')),
        (n = I()),
        (i = v('section')),
        (y = v('div')),
        (k = v('p')),
        ($ = L('© GPL-3.0 Santiago Gonzalez')),
        (O = I()),
        (H = v('p')),
        (G = L('2022-2023. All Rights Reserved')),
        (E = I()),
        (f = v('ul')),
        (w = v('li')),
        (p = v('a')),
        (T = L('GitHub @santigo-zero')),
        (W = I()),
        (R = v('li')),
        (M = L('•')),
        (P = I()),
        (U = v('li')),
        (F = v('a')),
        (le = L('LinkedIn')),
        this.h();
    },
    l(V) {
      e = g(V, 'FOOTER', { class: !0 });
      var D = b(e);
      s = g(D, 'SECTION', { class: !0 });
      var Q = b(s);
      r = g(Q, 'P', {});
      var ue = b(r);
      (l = A(ue, 'Designed & Built with <3 by Santiago')),
        ue.forEach(_),
        (t = q(Q)),
        (o = g(Q, 'A', { href: !0 }));
      var X = b(o);
      (c = A(X, 'nth(')),
        (d = A(X, a[0])),
        (h = A(X, ') on GitHub')),
        X.forEach(_),
        Q.forEach(_),
        (n = q(D)),
        (i = g(D, 'SECTION', { class: !0 }));
      var Y = b(i);
      y = g(Y, 'DIV', { class: !0 });
      var Z = b(y);
      k = g(Z, 'P', {});
      var fe = b(k);
      ($ = A(fe, '© GPL-3.0 Santiago Gonzalez')),
        fe.forEach(_),
        (O = q(Z)),
        (H = g(Z, 'P', {}));
      var _e = b(H);
      (G = A(_e, '2022-2023. All Rights Reserved')),
        _e.forEach(_),
        Z.forEach(_),
        (E = q(Y)),
        (f = g(Y, 'UL', { class: !0 }));
      var j = b(f);
      w = g(j, 'LI', {});
      var he = b(w);
      p = g(he, 'A', { href: !0 });
      var de = b(p);
      (T = A(de, 'GitHub @santigo-zero')),
        de.forEach(_),
        he.forEach(_),
        (W = q(j)),
        (R = g(j, 'LI', { class: !0 }));
      var pe = b(R);
      (M = A(pe, '•')), pe.forEach(_), (P = q(j)), (U = g(j, 'LI', {}));
      var ve = b(U);
      F = g(ve, 'A', { href: !0 });
      var ge = b(F);
      (le = A(ge, 'LinkedIn')),
        ge.forEach(_),
        ve.forEach(_),
        j.forEach(_),
        Y.forEach(_),
        D.forEach(_),
        this.h();
    },
    h() {
      m(o, 'href', 'https://github.com/santigo-zero/santigo-zero.github.io'),
        m(s, 'class', 'upper wider svelte-1elv9q5'),
        m(y, 'class', 'copyright svelte-1elv9q5'),
        m(p, 'href', 'https://github.com/santigo-zero/'),
        m(R, 'class', 'separator svelte-1elv9q5'),
        m(
          F,
          'href',
          'https://www.linkedin.com/in/santiago-gonzalez-62557221b/'
        ),
        m(f, 'class', 'svelte-1elv9q5'),
        m(i, 'class', 'bottom wider svelte-1elv9q5'),
        m(e, 'class', 'svelte-1elv9q5');
    },
    m(V, D) {
      S(V, e, D),
        u(e, s),
        u(s, r),
        u(r, l),
        u(s, t),
        u(s, o),
        u(o, c),
        u(o, d),
        u(o, h),
        u(e, n),
        u(e, i),
        u(i, y),
        u(y, k),
        u(k, $),
        u(y, O),
        u(y, H),
        u(H, G),
        u(i, E),
        u(i, f),
        u(f, w),
        u(w, p),
        u(p, T),
        u(f, W),
        u(f, R),
        u(R, M),
        u(f, P),
        u(f, U),
        u(U, F),
        u(F, le);
    },
    p(V, [D]) {
      D & 1 && Oe(d, V[0]);
    },
    i: J,
    o: J,
    d(V) {
      V && _(e);
    }
  };
}
function Ue(a, e, s) {
  var r = 0;
  return (
    Ee(async () => {
      {
        const t = await (
          await fetch(
            'https://api.github.com/repos/santigo-zero/santigo-zero.github.io'
          )
        ).json();
        s(0, (r = t.stargazers_count));
      }
    }),
    [r]
  );
}
class Je extends ee {
  constructor(e) {
    super(), te(this, e, Ue, je, K, {});
  }
}
function ye(a) {
  let e, s, r;
  const l = a[2].default,
    t = ke(l, a, a[1], null);
  return {
    c() {
      (e = v('div')), t && t.c();
    },
    l(o) {
      e = g(o, 'DIV', {});
      var c = b(e);
      t && t.l(c), c.forEach(_);
    },
    m(o, c) {
      S(o, e, c), t && t.m(e, null), (r = !0);
    },
    p(o, c) {
      t &&
        t.p &&
        (!r || c & 2) &&
        ze(t, l, o, o[1], r ? He(l, o[1], c, null) : $e(o[1]), null);
    },
    i(o) {
      r ||
        (C(t, o),
        s ||
          ne(() => {
            (s = De(e, Ve, { y: -60, duration: 250 })), s.start();
          }),
        (r = !0));
    },
    o(o) {
      B(t, o), (r = !1);
    },
    d(o) {
      o && _(e), t && t.d(o);
    }
  };
}
function Ke(a) {
  let e = a[0],
    s,
    r,
    l = ye(a);
  return {
    c() {
      l.c(), (s = x());
    },
    l(t) {
      l.l(t), (s = x());
    },
    m(t, o) {
      l.m(t, o), S(t, s, o), (r = !0);
    },
    p(t, [o]) {
      o & 1 && K(e, (e = t[0]))
        ? (Te(),
          B(l, 1, 1, J),
          Re(),
          (l = ye(t)),
          l.c(),
          C(l, 1),
          l.m(s.parentNode, s))
        : l.p(t, o);
    },
    i(t) {
      r || (C(l), (r = !0));
    },
    o(t) {
      B(l), (r = !1);
    },
    d(t) {
      t && _(s), l.d(t);
    }
  };
}
function Qe(a, e, s) {
  let { $$slots: r = {}, $$scope: l } = e,
    { url: t } = e;
  return (
    (a.$$set = o => {
      'url' in o && s(0, (t = o.url)), '$$scope' in o && s(1, (l = o.$$scope));
    }),
    [t, l, r]
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
    r = ke(s, a, a[5], null);
  return {
    c() {
      r && r.c();
    },
    l(l) {
      r && r.l(l);
    },
    m(l, t) {
      r && r.m(l, t), (e = !0);
    },
    p(l, t) {
      r &&
        r.p &&
        (!e || t & 32) &&
        ze(r, s, l, l[5], e ? He(s, l[5], t, null) : $e(l[5]), null);
    },
    i(l) {
      e || (C(r, l), (e = !0));
    },
    o(l) {
      B(r, l), (e = !1);
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Ze(a) {
  let e, s, r, l, t, o, c, d, h;
  return (
    (s = new Fe({ props: { pageHeight: a[1] } })),
    (l = new Xe({
      props: { url: a[2].url, $$slots: { default: [Ye] }, $$scope: { ctx: a } }
    })),
    (o = new Je({})),
    {
      c() {
        (e = v('div')),
          se(s.$$.fragment),
          (r = I()),
          se(l.$$.fragment),
          (t = I()),
          se(o.$$.fragment),
          (c = I()),
          (d = v('div')),
          this.h();
      },
      l(n) {
        e = g(n, 'DIV', { class: !0 });
        var i = b(e);
        ae(s.$$.fragment, i),
          (r = q(i)),
          ae(l.$$.fragment, i),
          (t = q(i)),
          ae(o.$$.fragment, i),
          i.forEach(_),
          (c = q(n)),
          (d = g(n, 'DIV', { class: !0 })),
          b(d).forEach(_),
          this.h();
      },
      h() {
        m(e, 'class', 'layout svelte-1nwuy2o'),
          m(d, 'class', 'noise svelte-1nwuy2o');
      },
      m(n, i) {
        S(n, e, i),
          oe(s, e, null),
          u(e, r),
          oe(l, e, null),
          u(e, t),
          oe(o, e, null),
          a[4](e),
          S(n, c, i),
          S(n, d, i),
          (h = !0);
      },
      p(n, [i]) {
        const y = {};
        i & 2 && (y.pageHeight = n[1]), s.$set(y);
        const k = {};
        i & 4 && (k.url = n[2].url),
          i & 32 && (k.$$scope = { dirty: i, ctx: n }),
          l.$set(k);
      },
      i(n) {
        h ||
          (C(s.$$.fragment, n),
          C(l.$$.fragment, n),
          C(o.$$.fragment, n),
          (h = !0));
      },
      o(n) {
        B(s.$$.fragment, n), B(l.$$.fragment, n), B(o.$$.fragment, n), (h = !1);
      },
      d(n) {
        n && _(e), re(s), re(l), re(o), a[4](null), n && _(c), n && _(d);
      }
    }
  );
}
function xe(a, e, s) {
  let r, l;
  ce(a, Ie, h => s(2, (l = h)));
  let { $$slots: t = {}, $$scope: o } = e,
    c;
  Ee(() => {
    const h = new ResizeObserver(n => {
      const i = n.at(0);
      i !== void 0 && s(1, (r = Math.floor(i.contentBoxSize[0].blockSize)));
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
      '$$scope' in h && s(5, (o = h.$$scope));
    }),
    s(1, (r = 0)),
    [c, r, l, t, d, o]
  );
}
class at extends ee {
  constructor(e) {
    super(), te(this, e, xe, Ze, K, {});
  }
}
export { at as default };
