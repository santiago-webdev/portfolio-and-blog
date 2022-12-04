function $() {}
function z(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function D(t) {
	return t();
}
function j() {
	return Object.create(null);
}
function p(t) {
	t.forEach(D);
}
function L(t) {
	return typeof t == "function";
}
function ct(t, n) {
	return t != t
		? n == n
		: t !== n || (t && typeof t == "object") || typeof t == "function";
}
function F(t) {
	return Object.keys(t).length === 0;
}
function G(t, ...n) {
	if (t == null) return $;
	const e = t.subscribe(...n);
	return e.unsubscribe ? () => e.unsubscribe() : e;
}
function lt(t, n, e) {
	t.$$.on_destroy.push(G(n, e));
}
function st(t, n, e, i) {
	if (t) {
		const r = k(t, n, e, i);
		return t[0](r);
	}
}
function k(t, n, e, i) {
	return t[1] && i ? z(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function ot(t, n, e, i) {
	if (t[2] && i) {
		const r = t[2](i(e));
		if (n.dirty === void 0) return r;
		if (typeof r == "object") {
			const u = [],
				c = Math.max(n.dirty.length, r.length);
			for (let o = 0; o < c; o += 1) u[o] = n.dirty[o] | r[o];
			return u;
		}
		return n.dirty | r;
	}
	return n.dirty;
}
function ut(t, n, e, i, r, u) {
	if (r) {
		const c = k(n, e, i, u);
		t.p(c, r);
	}
}
function ft(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let i = 0; i < e; i++) n[i] = -1;
		return n;
	}
	return -1;
}
let w = !1;
function I() {
	w = !0;
}
function J() {
	w = !1;
}
function K(t, n, e, i) {
	for (; t < n; ) {
		const r = t + ((n - t) >> 1);
		e(r) <= i ? (t = r + 1) : (n = r);
	}
	return t;
}
function R(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === "HEAD") {
		const l = [];
		for (let s = 0; s < n.length; s++) {
			const a = n[s];
			a.claim_order !== void 0 && l.push(a);
		}
		n = l;
	}
	const e = new Int32Array(n.length + 1),
		i = new Int32Array(n.length);
	e[0] = -1;
	let r = 0;
	for (let l = 0; l < n.length; l++) {
		const s = n[l].claim_order,
			a =
				(r > 0 && n[e[r]].claim_order <= s
					? r + 1
					: K(1, r, (y) => n[e[y]].claim_order, s)) - 1;
		i[l] = e[a] + 1;
		const f = a + 1;
		(e[f] = l), (r = Math.max(f, r));
	}
	const u = [],
		c = [];
	let o = n.length - 1;
	for (let l = e[r] + 1; l != 0; l = i[l - 1]) {
		for (u.push(n[l - 1]); o >= l; o--) c.push(n[o]);
		o--;
	}
	for (; o >= 0; o--) c.push(n[o]);
	u.reverse(), c.sort((l, s) => l.claim_order - s.claim_order);
	for (let l = 0, s = 0; l < c.length; l++) {
		for (; s < u.length && c[l].claim_order >= u[s].claim_order; ) s++;
		const a = s < u.length ? u[s] : null;
		t.insertBefore(c[l], a);
	}
}
function W(t, n) {
	if (w) {
		for (
			R(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null &&
						t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) &&
			  t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function at(t, n, e) {
	w && !e
		? W(t, n)
		: (n.parentNode !== t || n.nextSibling != e) &&
		  t.insertBefore(n, e || null);
}
function Q(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function dt(t, n) {
	for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function U(t) {
	return document.createElement(t);
}
function A(t) {
	return document.createTextNode(t);
}
function _t() {
	return A(" ");
}
function ht() {
	return A("");
}
function mt(t, n, e, i) {
	return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function pt(t, n, e) {
	e == null
		? t.removeAttribute(n)
		: t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function V(t) {
	return Array.from(t.childNodes);
}
function X(t) {
	t.claim_info === void 0 &&
		(t.claim_info = { last_index: 0, total_claimed: 0 });
}
function B(t, n, e, i, r = !1) {
	X(t);
	const u = (() => {
		for (let c = t.claim_info.last_index; c < t.length; c++) {
			const o = t[c];
			if (n(o)) {
				const l = e(o);
				return (
					l === void 0 ? t.splice(c, 1) : (t[c] = l),
					r || (t.claim_info.last_index = c),
					o
				);
			}
		}
		for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
			const o = t[c];
			if (n(o)) {
				const l = e(o);
				return (
					l === void 0 ? t.splice(c, 1) : (t[c] = l),
					r
						? l === void 0 && t.claim_info.last_index--
						: (t.claim_info.last_index = c),
					o
				);
			}
		}
		return i();
	})();
	return (
		(u.claim_order = t.claim_info.total_claimed),
		(t.claim_info.total_claimed += 1),
		u
	);
}
function Y(t, n, e, i) {
	return B(
		t,
		(r) => r.nodeName === n,
		(r) => {
			const u = [];
			for (let c = 0; c < r.attributes.length; c++) {
				const o = r.attributes[c];
				e[o.name] || u.push(o.name);
			}
			u.forEach((c) => r.removeAttribute(c));
		},
		() => i(n)
	);
}
function yt(t, n, e) {
	return Y(t, n, e, U);
}
function Z(t, n) {
	return B(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const i = "" + n;
			if (e.data.startsWith(i)) {
				if (e.data.length !== i.length) return e.splitText(i.length);
			} else e.data = i;
		},
		() => A(n),
		!0
	);
}
function gt(t) {
	return Z(t, " ");
}
function xt(t, n) {
	(n = "" + n), t.wholeText !== n && (t.data = n);
}
function bt(t, n, e, i) {
	e === null
		? t.style.removeProperty(n)
		: t.style.setProperty(n, e, i ? "important" : "");
}
function $t(t, n, e) {
	t.classList[e ? "add" : "remove"](n);
}
function wt(t, n) {
	const e = [];
	let i = 0;
	for (const r of n.childNodes)
		if (r.nodeType === 8) {
			const u = r.textContent.trim();
			u === `HEAD_${t}_END`
				? ((i -= 1), e.push(r))
				: u === `HEAD_${t}_START` && ((i += 1), e.push(r));
		} else i > 0 && e.push(r);
	return e;
}
function Et(t, n) {
	return new t(n);
}
let m;
function h(t) {
	m = t;
}
function H() {
	if (!m) throw new Error("Function called outside component initialization");
	return m;
}
function vt(t) {
	H().$$.on_mount.push(t);
}
function Nt(t) {
	H().$$.after_update.push(t);
}
const _ = [],
	C = [],
	x = [],
	M = [],
	O = Promise.resolve();
let v = !1;
function P() {
	v || ((v = !0), O.then(q));
}
function At() {
	return P(), O;
}
function N(t) {
	x.push(t);
}
const E = new Set();
let g = 0;
function q() {
	const t = m;
	do {
		for (; g < _.length; ) {
			const n = _[g];
			g++, h(n), tt(n.$$);
		}
		for (h(null), _.length = 0, g = 0; C.length; ) C.pop()();
		for (let n = 0; n < x.length; n += 1) {
			const e = x[n];
			E.has(e) || (E.add(e), e());
		}
		x.length = 0;
	} while (_.length);
	for (; M.length; ) M.pop()();
	(v = !1), E.clear(), h(t);
}
function tt(t) {
	if (t.fragment !== null) {
		t.update(), p(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]),
			t.fragment && t.fragment.p(t.ctx, n),
			t.after_update.forEach(N);
	}
}
const b = new Set();
let d;
function St() {
	d = { r: 0, c: [], p: d };
}
function Tt() {
	d.r || p(d.c), (d = d.p);
}
function nt(t, n) {
	t && t.i && (b.delete(t), t.i(n));
}
function jt(t, n, e, i) {
	if (t && t.o) {
		if (b.has(t)) return;
		b.add(t),
			d.c.push(() => {
				b.delete(t), i && (e && t.d(1), i());
			}),
			t.o(n);
	} else i && i();
}
const Ct =
	typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Mt(t) {
	t && t.c();
}
function Dt(t, n) {
	t && t.l(n);
}
function et(t, n, e, i) {
	const { fragment: r, after_update: u } = t.$$;
	r && r.m(n, e),
		i ||
			N(() => {
				const c = t.$$.on_mount.map(D).filter(L);
				t.$$.on_destroy ? t.$$.on_destroy.push(...c) : p(c),
					(t.$$.on_mount = []);
			}),
		u.forEach(N);
}
function it(t, n) {
	const e = t.$$;
	e.fragment !== null &&
		(p(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function rt(t, n) {
	t.$$.dirty[0] === -1 && (_.push(t), P(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Lt(t, n, e, i, r, u, c, o = [-1]) {
	const l = m;
	h(t);
	const s = (t.$$ = {
		fragment: null,
		ctx: [],
		props: u,
		update: $,
		not_equal: r,
		bound: j(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(n.context || (l ? l.$$.context : [])),
		callbacks: j(),
		dirty: o,
		skip_bound: !1,
		root: n.target || l.$$.root
	});
	c && c(s.root);
	let a = !1;
	if (
		((s.ctx = e
			? e(t, n.props || {}, (f, y, ...S) => {
					const T = S.length ? S[0] : y;
					return (
						s.ctx &&
							r(s.ctx[f], (s.ctx[f] = T)) &&
							(!s.skip_bound && s.bound[f] && s.bound[f](T), a && rt(t, f)),
						y
					);
			  })
			: []),
		s.update(),
		(a = !0),
		p(s.before_update),
		(s.fragment = i ? i(s.ctx) : !1),
		n.target)
	) {
		if (n.hydrate) {
			I();
			const f = V(n.target);
			s.fragment && s.fragment.l(f), f.forEach(Q);
		} else s.fragment && s.fragment.c();
		n.intro && nt(t.$$.fragment),
			et(t, n.target, n.anchor, n.customElement),
			J(),
			q();
	}
	h(l);
}
class kt {
	$destroy() {
		it(this, 1), (this.$destroy = $);
	}
	$on(n, e) {
		if (!L(e)) return $;
		const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
		return (
			i.push(e),
			() => {
				const r = i.indexOf(e);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(n) {
		this.$$set &&
			!F(n) &&
			((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
	}
}
export {
	At as A,
	$ as B,
	N as C,
	$t as D,
	W as E,
	mt as F,
	dt as G,
	p as H,
	Ct as I,
	st as J,
	ut as K,
	ft as L,
	ot as M,
	lt as N,
	wt as O,
	kt as S,
	_t as a,
	at as b,
	gt as c,
	Tt as d,
	ht as e,
	nt as f,
	St as g,
	Q as h,
	Lt as i,
	Nt as j,
	U as k,
	yt as l,
	V as m,
	pt as n,
	vt as o,
	bt as p,
	A as q,
	Z as r,
	ct as s,
	jt as t,
	xt as u,
	Et as v,
	Mt as w,
	Dt as x,
	et as y,
	it as z
};
