function x() {}
const U = t => t;
function ht(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function V(t) {
  return t();
}
function I() {
  return Object.create(null);
}
function v(t) {
  t.forEach(V);
}
function M(t) {
  return typeof t == 'function';
}
function zt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
function mt(t) {
  return Object.keys(t).length === 0;
}
function X(t, ...e) {
  if (t == null) return x;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function qt(t) {
  let e;
  return X(t, n => (e = n))(), e;
}
function Ft(t, e, n) {
  t.$$.on_destroy.push(X(e, n));
}
function Gt(t, e, n, i) {
  if (t) {
    const s = Y(t, e, n, i);
    return t[0](s);
  }
}
function Y(t, e, n, i) {
  return t[1] && i ? ht(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Wt(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0) return s;
    if (typeof s == 'object') {
      const o = [],
        r = Math.max(e.dirty.length, s.length);
      for (let l = 0; l < r; l += 1) o[l] = e.dirty[l] | s[l];
      return o;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function It(t, e, n, i, s, o) {
  if (s) {
    const r = Y(e, n, i, o);
    t.p(r, s);
  }
}
function Jt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function Kt(t) {
  const e = {};
  for (const n in t) n[0] !== '$' && (e[n] = t[n]);
  return e;
}
function Qt(t) {
  return t ?? '';
}
const Z = typeof window < 'u';
let tt = Z ? () => window.performance.now() : () => Date.now(),
  q = Z ? t => requestAnimationFrame(t) : x;
const w = new Set();
function et(t) {
  w.forEach(e => {
    e.c(t) || (w.delete(e), e.f());
  }),
    w.size !== 0 && q(et);
}
function nt(t) {
  let e;
  return (
    w.size === 0 && q(et),
    {
      promise: new Promise(n => {
        w.add((e = { c: t, f: n }));
      }),
      abort() {
        w.delete(e);
      }
    }
  );
}
let L = !1;
function pt() {
  L = !0;
}
function yt() {
  L = !1;
}
function gt(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function xt(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === 'HEAD') {
    const c = [];
    for (let u = 0; u < e.length; u++) {
      const a = e[u];
      a.claim_order !== void 0 && c.push(a);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let c = 0; c < e.length; c++) {
    const u = e[c].claim_order,
      a =
        (s > 0 && e[n[s]].claim_order <= u
          ? s + 1
          : gt(1, s, _ => e[n[_]].claim_order, u)) - 1;
    i[c] = n[a] + 1;
    const f = a + 1;
    (n[f] = c), (s = Math.max(f, s));
  }
  const o = [],
    r = [];
  let l = e.length - 1;
  for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
    for (o.push(e[c - 1]); l >= c; l--) r.push(e[l]);
    l--;
  }
  for (; l >= 0; l--) r.push(e[l]);
  o.reverse(), r.sort((c, u) => c.claim_order - u.claim_order);
  for (let c = 0, u = 0; c < r.length; c++) {
    for (; u < o.length && r[c].claim_order >= o[u].claim_order; ) u++;
    const a = u < o.length ? o[u] : null;
    t.insertBefore(r[c], a);
  }
}
function $t(t, e) {
  t.appendChild(e);
}
function it(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function bt(t) {
  const e = F('style');
  return wt(it(t), e), e.sheet;
}
function wt(t, e) {
  return $t(t.head || t, e), e.sheet;
}
function vt(t, e) {
  if (L) {
    for (
      xt(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Et(t, e, n) {
  t.insertBefore(e, n || null);
}
function Nt(t, e, n) {
  L && !n
    ? vt(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function A(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ut(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function F(t) {
  return document.createElement(t);
}
function At(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function G(t) {
  return document.createTextNode(t);
}
function Vt() {
  return G(' ');
}
function Xt() {
  return G('');
}
function Yt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Zt(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function te(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Tt(t) {
  return Array.from(t.childNodes);
}
function st(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function rt(t, e, n, i, s = !1) {
  st(t);
  const o = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const l = t[r];
      if (e(l)) {
        const c = n(l);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s || (t.claim_info.last_index = r),
          l
        );
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const l = t[r];
      if (e(l)) {
        const c = n(l);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = r),
          l
        );
      }
    }
    return i();
  })();
  return (
    (o.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    o
  );
}
function kt(t, e, n, i) {
  return rt(
    t,
    s => s.nodeName === e,
    s => {
      const o = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const l = s.attributes[r];
        n[l.name] || o.push(l.name);
      }
      o.forEach(r => s.removeAttribute(r));
    },
    () => i(e)
  );
}
function ee(t, e, n) {
  return kt(t, e, n, F);
}
function St(t, e) {
  return rt(
    t,
    n => n.nodeType === 3,
    n => {
      const i = '' + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => G(e),
    !0
  );
}
function ne(t) {
  return St(t, ' ');
}
function J(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const s = t[i];
    if (s.nodeType === 8 && s.textContent.trim() === e) return i;
  }
  return t.length;
}
function ie(t, e) {
  const n = J(t, 'HTML_TAG_START', 0),
    i = J(t, 'HTML_TAG_END', n);
  if (n === i) return new K(void 0, e);
  st(t);
  const s = t.splice(n, i - n + 1);
  A(s[0]), A(s[s.length - 1]);
  const o = s.slice(1, s.length - 1);
  for (const r of o)
    (r.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new K(o, e);
}
function se(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
function re(t, e) {
  t.value = e ?? '';
}
function oe(t, e, n, i) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? 'important' : '');
}
function ce(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e);
}
function Ct(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const s = document.createEvent('CustomEvent');
  return s.initCustomEvent(t, n, i, e), s;
}
function le(t, e) {
  const n = [];
  let i = 0;
  for (const s of e.childNodes)
    if (s.nodeType === 8) {
      const o = s.textContent.trim();
      o === `HEAD_${t}_END`
        ? ((i -= 1), n.push(s))
        : o === `HEAD_${t}_START` && ((i += 1), n.push(s));
    } else i > 0 && n.push(s);
  return n;
}
class jt {
  constructor(e = !1) {
    (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg ? (this.e = At(n.nodeName)) : (this.e = F(n.nodeName)),
      (this.t = n),
      this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) Et(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(A);
  }
}
class K extends jt {
  constructor(e, n = !1) {
    super(n), (this.e = this.n = null), (this.l = e);
  }
  c(e) {
    this.l ? (this.n = this.l) : super.c(e);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) Nt(this.t, this.n[n], e);
  }
}
function ue(t, e) {
  return new t(e);
}
const j = new Map();
let D = 0;
function Dt(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function Ht(t, e) {
  const n = { stylesheet: bt(e), rules: {} };
  return j.set(t, n), n;
}
function ot(t, e, n, i, s, o, r, l = 0) {
  const c = 16.666 / i;
  let u = `{
`;
  for (let m = 0; m <= 1; m += c) {
    const p = e + (n - e) * o(m);
    u +=
      m * 100 +
      `%{${r(p, 1 - p)}}
`;
  }
  const a =
      u +
      `100% {${r(n, 1 - n)}}
}`,
    f = `__svelte_${Dt(a)}_${l}`,
    _ = it(t),
    { stylesheet: d, rules: h } = j.get(_) || Ht(_, t);
  h[f] ||
    ((h[f] = !0), d.insertRule(`@keyframes ${f} ${a}`, d.cssRules.length));
  const y = t.style.animation || '';
  return (
    (t.style.animation = `${
      y ? `${y}, ` : ''
    }${f} ${i}ms linear ${s}ms 1 both`),
    (D += 1),
    f
  );
}
function P(t, e) {
  const n = (t.style.animation || '').split(', '),
    i = n.filter(e ? o => o.indexOf(e) < 0 : o => o.indexOf('__svelte') === -1),
    s = n.length - i.length;
  s && ((t.style.animation = i.join(', ')), (D -= s), D || Mt());
}
function Mt() {
  q(() => {
    D ||
      (j.forEach(t => {
        const { ownerNode: e } = t.stylesheet;
        e && A(e);
      }),
      j.clear());
  });
}
let T;
function N(t) {
  T = t;
}
function ct() {
  if (!T) throw new Error('Function called outside component initialization');
  return T;
}
function fe(t) {
  ct().$$.on_mount.push(t);
}
function ae(t) {
  ct().$$.after_update.push(t);
}
const b = [],
  Q = [],
  S = [],
  B = [],
  lt = Promise.resolve();
let z = !1;
function ut() {
  z || ((z = !0), lt.then(ft));
}
function _e() {
  return ut(), lt;
}
function k(t) {
  S.push(t);
}
function de(t) {
  B.push(t);
}
const O = new Set();
let $ = 0;
function ft() {
  if ($ !== 0) return;
  const t = T;
  do {
    try {
      for (; $ < b.length; ) {
        const e = b[$];
        $++, N(e), Lt(e.$$);
      }
    } catch (e) {
      throw ((b.length = 0), ($ = 0), e);
    }
    for (N(null), b.length = 0, $ = 0; Q.length; ) Q.pop()();
    for (let e = 0; e < S.length; e += 1) {
      const n = S[e];
      O.has(n) || (O.add(n), n());
    }
    S.length = 0;
  } while (b.length);
  for (; B.length; ) B.pop()();
  (z = !1), O.clear(), N(t);
}
function Lt(t) {
  if (t.fragment !== null) {
    t.update(), v(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(k);
  }
}
let E;
function at() {
  return (
    E ||
      ((E = Promise.resolve()),
      E.then(() => {
        E = null;
      })),
    E
  );
}
function H(t, e, n) {
  t.dispatchEvent(Ct(`${e ? 'intro' : 'outro'}${n}`));
}
const C = new Set();
let g;
function he() {
  g = { r: 0, c: [], p: g };
}
function me() {
  g.r || v(g.c), (g = g.p);
}
function Rt(t, e) {
  t && t.i && (C.delete(t), t.i(e));
}
function pe(t, e, n, i) {
  if (t && t.o) {
    if (C.has(t)) return;
    C.add(t),
      g.c.push(() => {
        C.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
const _t = { duration: 0 };
function ye(t, e, n) {
  const i = { direction: 'in' };
  let s = e(t, n, i),
    o = !1,
    r,
    l,
    c = 0;
  function u() {
    r && P(t, r);
  }
  function a() {
    const {
      delay: _ = 0,
      duration: d = 300,
      easing: h = U,
      tick: y = x,
      css: m
    } = s || _t;
    m && (r = ot(t, 0, 1, d, _, h, m, c++)), y(0, 1);
    const p = tt() + _,
      dt = p + d;
    l && l.abort(),
      (o = !0),
      k(() => H(t, !0, 'start')),
      (l = nt(R => {
        if (o) {
          if (R >= dt) return y(1, 0), H(t, !0, 'end'), u(), (o = !1);
          if (R >= p) {
            const W = h((R - p) / d);
            y(W, 1 - W);
          }
        }
        return o;
      }));
  }
  let f = !1;
  return {
    start() {
      f || ((f = !0), P(t), M(s) ? ((s = s(i)), at().then(a)) : a());
    },
    invalidate() {
      f = !1;
    },
    end() {
      o && (u(), (o = !1));
    }
  };
}
function ge(t, e, n) {
  const i = { direction: 'out' };
  let s = e(t, n, i),
    o = !0,
    r;
  const l = g;
  l.r += 1;
  function c() {
    const {
      delay: u = 0,
      duration: a = 300,
      easing: f = U,
      tick: _ = x,
      css: d
    } = s || _t;
    d && (r = ot(t, 1, 0, a, u, f, d));
    const h = tt() + u,
      y = h + a;
    k(() => H(t, !1, 'start')),
      nt(m => {
        if (o) {
          if (m >= y) return _(0, 1), H(t, !1, 'end'), --l.r || v(l.c), !1;
          if (m >= h) {
            const p = f((m - h) / a);
            _(1 - p, p);
          }
        }
        return o;
      });
  }
  return (
    M(s)
      ? at().then(() => {
          (s = s(i)), c();
        })
      : c(),
    {
      end(u) {
        u && s.tick && s.tick(1, 0), o && (r && P(t, r), (o = !1));
      }
    }
  );
}
function xe(t, e) {
  const n = {},
    i = {},
    s = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const r = t[o],
      l = e[o];
    if (l) {
      for (const c in r) c in l || (i[c] = 1);
      for (const c in l) s[c] || ((n[c] = l[c]), (s[c] = 1));
      t[o] = l;
    } else for (const c in r) s[c] = 1;
  }
  for (const r in i) r in n || (n[r] = void 0);
  return n;
}
function $e(t) {
  return typeof t == 'object' && t !== null ? t : {};
}
function be(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function we(t) {
  t && t.c();
}
function ve(t, e) {
  t && t.l(e);
}
function Ot(t, e, n, i) {
  const { fragment: s, after_update: o } = t.$$;
  s && s.m(e, n),
    i ||
      k(() => {
        const r = t.$$.on_mount.map(V).filter(M);
        t.$$.on_destroy ? t.$$.on_destroy.push(...r) : v(r),
          (t.$$.on_mount = []);
      }),
    o.forEach(k);
}
function Pt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (v(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Bt(t, e) {
  t.$$.dirty[0] === -1 && (b.push(t), ut(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Ee(t, e, n, i, s, o, r, l = [-1]) {
  const c = T;
  N(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: x,
    not_equal: s,
    bound: I(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: I(),
    dirty: l,
    skip_bound: !1,
    root: e.target || c.$$.root
  });
  r && r(u.root);
  let a = !1;
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (f, _, ...d) => {
          const h = d.length ? d[0] : _;
          return (
            u.ctx &&
              s(u.ctx[f], (u.ctx[f] = h)) &&
              (!u.skip_bound && u.bound[f] && u.bound[f](h), a && Bt(t, f)),
            _
          );
        })
      : []),
    u.update(),
    (a = !0),
    v(u.before_update),
    (u.fragment = i ? i(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      pt();
      const f = Tt(e.target);
      u.fragment && u.fragment.l(f), f.forEach(A);
    } else u.fragment && u.fragment.c();
    e.intro && Rt(t.$$.fragment),
      Ot(t, e.target, e.anchor, e.customElement),
      yt(),
      ft();
  }
  N(c);
}
class Ne {
  $destroy() {
    Pt(this, 1), (this.$destroy = x);
  }
  $on(e, n) {
    if (!M(n)) return x;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const s = i.indexOf(n);
        s !== -1 && i.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !mt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  re as $,
  Pt as A,
  _e as B,
  x as C,
  k as D,
  ce as E,
  vt as F,
  Yt as G,
  Ut as H,
  v as I,
  Ft as J,
  K,
  ie as L,
  Qt as M,
  Gt as N,
  It as O,
  Jt as P,
  Wt as Q,
  ye as R,
  Ne as S,
  be as T,
  de as U,
  le as V,
  ht as W,
  xe as X,
  $e as Y,
  Kt as Z,
  qt as _,
  Vt as a,
  Zt as a0,
  ge as a1,
  Nt as b,
  ne as c,
  me as d,
  Xt as e,
  Rt as f,
  he as g,
  A as h,
  Ee as i,
  ae as j,
  F as k,
  ee as l,
  Tt as m,
  te as n,
  fe as o,
  oe as p,
  G as q,
  St as r,
  zt as s,
  pe as t,
  se as u,
  Q as v,
  ue as w,
  we as x,
  ve as y,
  Ot as z
};
