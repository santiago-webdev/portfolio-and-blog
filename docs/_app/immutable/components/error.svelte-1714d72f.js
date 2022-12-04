import {
	S as B,
	i as C,
	s as H,
	k as v,
	q as k,
	a as h,
	e as j,
	l as E,
	m as g,
	r as $,
	h as p,
	c as N,
	b as u,
	E as P,
	u as S,
	B as q,
	N as O
} from "../chunks/index-5a5c71c7.js";
import { s as z } from "../chunks/singletons-bd46150e.js";
const A = () => {
		const t = z,
			s = {
				page: { subscribe: t.page.subscribe },
				navigating: { subscribe: t.navigating.subscribe },
				updated: t.updated
			};
		return (
			Object.defineProperties(s, {
				preloading: {
					get() {
						return (
							console.error(
								"stores.preloading is deprecated; use stores.navigating instead"
							),
							{ subscribe: t.navigating.subscribe }
						);
					},
					enumerable: !1
				},
				session: {
					get() {
						return F(), {};
					},
					enumerable: !1
				}
			}),
			s
		);
	},
	D = {
		subscribe(t) {
			return A().page.subscribe(t);
		}
	};
function F() {
	throw new Error(
		"stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
	);
}
function w(t) {
	let s,
		i = t[0].error.frame + "",
		o;
	return {
		c() {
			(s = v("pre")), (o = k(i));
		},
		l(r) {
			s = E(r, "PRE", {});
			var a = g(s);
			(o = $(a, i)), a.forEach(p);
		},
		m(r, a) {
			u(r, s, a), P(s, o);
		},
		p(r, a) {
			a & 1 && i !== (i = r[0].error.frame + "") && S(o, i);
		},
		d(r) {
			r && p(s);
		}
	};
}
function y(t) {
	let s,
		i = t[0].error.stack + "",
		o;
	return {
		c() {
			(s = v("pre")), (o = k(i));
		},
		l(r) {
			s = E(r, "PRE", {});
			var a = g(s);
			(o = $(a, i)), a.forEach(p);
		},
		m(r, a) {
			u(r, s, a), P(s, o);
		},
		p(r, a) {
			a & 1 && i !== (i = r[0].error.stack + "") && S(o, i);
		},
		d(r) {
			r && p(s);
		}
	};
}
function G(t) {
	let s,
		i = t[0].status + "",
		o,
		r,
		a,
		b = t[0].error.message + "",
		_,
		d,
		c,
		m,
		l = t[0].error.frame && w(t),
		n = t[0].error.stack && y(t);
	return {
		c() {
			(s = v("h1")),
				(o = k(i)),
				(r = h()),
				(a = v("pre")),
				(_ = k(b)),
				(d = h()),
				l && l.c(),
				(c = h()),
				n && n.c(),
				(m = j());
		},
		l(e) {
			s = E(e, "H1", {});
			var f = g(s);
			(o = $(f, i)), f.forEach(p), (r = N(e)), (a = E(e, "PRE", {}));
			var R = g(a);
			(_ = $(R, b)),
				R.forEach(p),
				(d = N(e)),
				l && l.l(e),
				(c = N(e)),
				n && n.l(e),
				(m = j());
		},
		m(e, f) {
			u(e, s, f),
				P(s, o),
				u(e, r, f),
				u(e, a, f),
				P(a, _),
				u(e, d, f),
				l && l.m(e, f),
				u(e, c, f),
				n && n.m(e, f),
				u(e, m, f);
		},
		p(e, [f]) {
			f & 1 && i !== (i = e[0].status + "") && S(o, i),
				f & 1 && b !== (b = e[0].error.message + "") && S(_, b),
				e[0].error.frame
					? l
						? l.p(e, f)
						: ((l = w(e)), l.c(), l.m(c.parentNode, c))
					: l && (l.d(1), (l = null)),
				e[0].error.stack
					? n
						? n.p(e, f)
						: ((n = y(e)), n.c(), n.m(m.parentNode, m))
					: n && (n.d(1), (n = null));
		},
		i: q,
		o: q,
		d(e) {
			e && p(s),
				e && p(r),
				e && p(a),
				e && p(d),
				l && l.d(e),
				e && p(c),
				n && n.d(e),
				e && p(m);
		}
	};
}
function I(t, s, i) {
	let o;
	return O(t, D, (r) => i(0, (o = r))), [o];
}
class L extends B {
	constructor(s) {
		super(), C(this, s, I, G, H, {});
	}
}
export { L as default };
