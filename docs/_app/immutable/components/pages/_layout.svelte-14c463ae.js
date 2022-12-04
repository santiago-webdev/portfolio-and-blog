import {
	S as fe,
	i as ue,
	s as he,
	C as ye,
	k as h,
	q as S,
	a as y,
	l as v,
	m as _,
	r as A,
	h as r,
	c as z,
	n,
	D as q,
	b as N,
	E as l,
	F as ne,
	B as K,
	G as ze,
	H as Le,
	o as Ie,
	I as Se,
	u as Ae,
	J as De,
	w as me,
	x as ge,
	y as ke,
	K as Ge,
	L as Me,
	M as Te,
	f as oe,
	t as ie,
	z as Ee
} from "../../chunks/index-5a5c71c7.js";
const { window: ce } = Se;
function $e(f, e, s) {
	const a = f.slice();
	return (a[9] = e[s]), a;
}
function we(f) {
	let e,
		s,
		a = f[9].label + "",
		o,
		i,
		b,
		k;
	return {
		c() {
			(e = h("li")), (s = h("a")), (o = S(a)), (i = y()), this.h();
		},
		l(d) {
			e = v(d, "LI", {});
			var t = _(e);
			s = v(t, "A", { href: !0, class: !0 });
			var u = _(s);
			(o = A(u, a)), u.forEach(r), (i = z(t)), t.forEach(r), this.h();
		},
		h() {
			n(s, "href", f[9].href), n(s, "class", "svelte-1avhwbp");
		},
		m(d, t) {
			N(d, e, t),
				l(e, s),
				l(s, o),
				l(e, i),
				b || ((k = ne(s, "click", f[4])), (b = !0));
		},
		p: K,
		d(d) {
			d && r(e), (b = !1), k();
		}
	};
}
function He(f) {
	let e;
	return {
		c() {
			(e = h("i")), this.h();
		},
		l(s) {
			(e = v(s, "I", { class: !0 })), _(e).forEach(r), this.h();
		},
		h() {
			n(e, "class", "fa-solid fa-bars");
		},
		m(s, a) {
			N(s, e, a);
		},
		d(s) {
			s && r(e);
		}
	};
}
function Ce(f) {
	let e;
	return {
		c() {
			(e = h("i")), this.h();
		},
		l(s) {
			(e = v(s, "I", { class: !0 })), _(e).forEach(r), this.h();
		},
		h() {
			n(e, "class", "fa-solid fa-xmark");
		},
		m(s, a) {
			N(s, e, a);
		},
		d(s) {
			s && r(e);
		}
	};
}
function Ne(f) {
	let e = !1,
		s = () => {
			e = !1;
		},
		a,
		o,
		i,
		b,
		k,
		d,
		t,
		u,
		D,
		g,
		V,
		R;
	ye(f[6]);
	let w = f[2],
		m = [];
	for (let c = 0; c < w.length; c += 1) m[c] = we($e(f, w, c));
	function G(c, E) {
		return c[1] ? Ce : He;
	}
	let T = G(f),
		I = T(f);
	return {
		c() {
			(o = h("div")),
				(i = h("nav")),
				(b = h("h3")),
				(k = h("a")),
				(d = S("SZ")),
				(t = y()),
				(u = h("ul"));
			for (let c = 0; c < m.length; c += 1) m[c].c();
			(D = y()), (g = h("button")), I.c(), this.h();
		},
		l(c) {
			o = v(c, "DIV", { class: !0 });
			var E = _(o);
			i = v(E, "NAV", { class: !0 });
			var p = _(i);
			b = v(p, "H3", { class: !0 });
			var $ = _(b);
			k = v($, "A", { href: !0, class: !0 });
			var M = _(k);
			(d = A(M, "SZ")),
				M.forEach(r),
				$.forEach(r),
				(t = z(p)),
				(u = v(p, "UL", { class: !0 }));
			var L = _(u);
			for (let O = 0; O < m.length; O += 1) m[O].l(L);
			L.forEach(r),
				(D = z(p)),
				(g = v(p, "BUTTON", { "aria-hidden": !0, class: !0 }));
			var H = _(g);
			I.l(H), H.forEach(r), p.forEach(r), E.forEach(r), this.h();
		},
		h() {
			n(k, "href", "/"),
				n(k, "class", "svelte-1avhwbp"),
				n(b, "class", "svelte-1avhwbp"),
				n(u, "class", "svelte-1avhwbp"),
				q(u, "ulMobile", f[1]),
				n(g, "aria-hidden", "true"),
				n(g, "class", "svelte-1avhwbp"),
				n(i, "class", "svelte-1avhwbp"),
				n(o, "class", "wrapper-nav svelte-1avhwbp"),
				q(o, "scrolled", f[0] > 0),
				q(o, "hidden", f[3](f[0]));
		},
		m(c, E) {
			N(c, o, E), l(o, i), l(i, b), l(b, k), l(k, d), l(i, t), l(i, u);
			for (let p = 0; p < m.length; p += 1) m[p].m(u, null);
			l(i, D),
				l(i, g),
				I.m(g, null),
				V ||
					((R = [
						ne(ce, "scroll", () => {
							(e = !0), clearTimeout(a), (a = setTimeout(s, 100)), f[6]();
						}),
						ne(g, "click", f[5])
					]),
					(V = !0));
		},
		p(c, [E]) {
			if (
				(E & 1 &&
					!e &&
					((e = !0),
					clearTimeout(a),
					scrollTo(ce.pageXOffset, c[0]),
					(a = setTimeout(s, 100))),
				E & 20)
			) {
				w = c[2];
				let p;
				for (p = 0; p < w.length; p += 1) {
					const $ = $e(c, w, p);
					m[p] ? m[p].p($, E) : ((m[p] = we($)), m[p].c(), m[p].m(u, null));
				}
				for (; p < m.length; p += 1) m[p].d(1);
				m.length = w.length;
			}
			E & 2 && q(u, "ulMobile", c[1]),
				T !== (T = G(c)) && (I.d(1), (I = T(c)), I && (I.c(), I.m(g, null))),
				E & 1 && q(o, "scrolled", c[0] > 0),
				E & 9 && q(o, "hidden", c[3](c[0]));
		},
		i: K,
		o: K,
		d(c) {
			c && r(o), ze(m, c), I.d(), (V = !1), Le(R);
		}
	};
}
function Ve(f, e, s) {
	var a, o, i;
	const b = [
		{ label: "Home", href: "/" },
		{ label: "Projects", href: "#projects" },
		{ label: "About", href: "#about" },
		{ label: "Resume", href: "#" },
		{ label: "Contact", href: "#" }
	];
	function k() {
		s(1, (i = !1));
	}
	function d(g) {
		return k(), g > 0 && g >= o ? ((o = g), !0) : ((o = g), !1);
	}
	const t = (g) => {
			g.matches || k();
		},
		u = () => s(1, (i = !i));
	Ie(() => {
		window.matchMedia("(max-width: 767px)").addListener(t);
	});
	function D() {
		s(0, (a = ce.pageYOffset));
	}
	return [a, i, b, d, t, u, D];
}
class Oe extends fe {
	constructor(e) {
		super(), ue(this, e, Ve, Ne, he, {});
	}
}
function Pe(f) {
	let e,
		s,
		a,
		o,
		i,
		b,
		k,
		d,
		t,
		u,
		D,
		g,
		V,
		R,
		w,
		m,
		G,
		T,
		I,
		c,
		E,
		p,
		$,
		M,
		L,
		H,
		O,
		ee,
		B,
		te,
		se,
		j,
		C,
		Z,
		le;
	return {
		c() {
			(e = h("div")),
				(s = h("div")),
				(a = h("section")),
				(o = h("p")),
				(i = S("Designed & Built with ")),
				(b = h("i")),
				(k = S(" by Santiago")),
				(d = y()),
				(t = h("a")),
				(u = h("i")),
				(D = y()),
				(g = S(f[0])),
				(V = S(" on GitHub")),
				(R = y()),
				(w = h("section")),
				(m = h("div")),
				(G = h("p")),
				(T = S("\xA9 GPL-3.0 Santiago Gonzalez")),
				(I = y()),
				(c = h("p")),
				(E = S("2022-2023. All Rights Reserved")),
				(p = y()),
				($ = h("ul")),
				(M = h("li")),
				(L = h("a")),
				(H = h("i")),
				(O = S(`
						GitHub @santigo-zero`)),
				(ee = y()),
				(B = h("li")),
				(te = S("\u2022")),
				(se = y()),
				(j = h("li")),
				(C = h("a")),
				(Z = h("i")),
				(le = S(" LinkedIn")),
				this.h();
		},
		l(P) {
			e = v(P, "DIV", { id: !0, class: !0 });
			var F = _(e);
			s = v(F, "DIV", { class: !0 });
			var X = _(s);
			a = v(X, "SECTION", { class: !0 });
			var Y = _(a);
			o = v(Y, "P", { class: !0 });
			var Q = _(o);
			(i = A(Q, "Designed & Built with ")),
				(b = v(Q, "I", { class: !0 })),
				_(b).forEach(r),
				(k = A(Q, " by Santiago")),
				Q.forEach(r),
				(d = z(Y)),
				(t = v(Y, "A", { href: !0, class: !0 }));
			var J = _(t);
			(u = v(J, "I", { class: !0 })),
				_(u).forEach(r),
				(D = z(J)),
				(g = A(J, f[0])),
				(V = A(J, " on GitHub")),
				J.forEach(r),
				Y.forEach(r),
				(R = z(X)),
				(w = v(X, "SECTION", { class: !0 }));
			var W = _(w);
			m = v(W, "DIV", { class: !0 });
			var x = _(m);
			G = v(x, "P", { class: !0 });
			var ve = _(G);
			(T = A(ve, "\xA9 GPL-3.0 Santiago Gonzalez")),
				ve.forEach(r),
				(I = z(x)),
				(c = v(x, "P", { class: !0 }));
			var _e = _(c);
			(E = A(_e, "2022-2023. All Rights Reserved")),
				_e.forEach(r),
				x.forEach(r),
				(p = z(W)),
				($ = v(W, "UL", { class: !0 }));
			var U = _($);
			M = v(U, "LI", { class: !0 });
			var de = _(M);
			L = v(de, "A", { href: !0, class: !0 });
			var ae = _(L);
			(H = v(ae, "I", { class: !0 })),
				_(H).forEach(r),
				(O = A(
					ae,
					`
						GitHub @santigo-zero`
				)),
				ae.forEach(r),
				de.forEach(r),
				(ee = z(U)),
				(B = v(U, "LI", { class: !0 }));
			var pe = _(B);
			(te = A(pe, "\u2022")),
				pe.forEach(r),
				(se = z(U)),
				(j = v(U, "LI", { class: !0 }));
			var be = _(j);
			C = v(be, "A", { href: !0, class: !0 });
			var re = _(C);
			(Z = v(re, "I", { class: !0 })),
				_(Z).forEach(r),
				(le = A(re, " LinkedIn")),
				re.forEach(r),
				be.forEach(r),
				U.forEach(r),
				W.forEach(r),
				X.forEach(r),
				F.forEach(r),
				this.h();
		},
		h() {
			n(b, "class", "fa-regular fa-heart svelte-bkie8v"),
				n(o, "class", "svelte-bkie8v"),
				n(u, "class", "fa-regular fa-star svelte-bkie8v"),
				n(t, "href", "https://github.com/santigo-zero/santigo-zero.github.io"),
				n(t, "class", "svelte-bkie8v"),
				n(a, "class", "this svelte-bkie8v"),
				n(G, "class", "svelte-bkie8v"),
				n(c, "class", "svelte-bkie8v"),
				n(m, "class", "copyright"),
				n(H, "class", "fa-brands fa-github"),
				n(L, "href", "https://github.com/santigo-zero/"),
				n(L, "class", "svelte-bkie8v"),
				n(M, "class", "svelte-bkie8v"),
				n(B, "class", "separator svelte-bkie8v"),
				n(Z, "class", "fa-brands fa-linkedin"),
				n(
					C,
					"href",
					"https://www.linkedin.com/in/santiago-gonzalez-62557221b/"
				),
				n(C, "class", "svelte-bkie8v"),
				n(j, "class", "svelte-bkie8v"),
				n($, "class", "svelte-bkie8v"),
				n(w, "class", "that svelte-bkie8v"),
				n(s, "class", "container svelte-bkie8v"),
				n(e, "id", "footer"),
				n(e, "class", "wrapper-footer svelte-bkie8v");
		},
		m(P, F) {
			N(P, e, F),
				l(e, s),
				l(s, a),
				l(a, o),
				l(o, i),
				l(o, b),
				l(o, k),
				l(a, d),
				l(a, t),
				l(t, u),
				l(t, D),
				l(t, g),
				l(t, V),
				l(s, R),
				l(s, w),
				l(w, m),
				l(m, G),
				l(G, T),
				l(m, I),
				l(m, c),
				l(c, E),
				l(w, p),
				l(w, $),
				l($, M),
				l(M, L),
				l(L, H),
				l(L, O),
				l($, ee),
				l($, B),
				l(B, te),
				l($, se),
				l($, j),
				l(j, C),
				l(C, Z),
				l(C, le);
		},
		p(P, [F]) {
			F & 1 && Ae(g, P[0]);
		},
		i: K,
		o: K,
		d(P) {
			P && r(e);
		}
	};
}
function Re(f, e, s) {
	let a = 0;
	return (
		Ie(async () => {
			const i = await (
				await fetch(
					"https://api.github.com/repos/santigo-zero/santigo-zero.github.io"
				)
			).json();
			s(0, (a = i.stargazers_count));
		}),
		[a]
	);
}
class Be extends fe {
	constructor(e) {
		super(), ue(this, e, Re, Pe, he, {});
	}
}
function je(f) {
	let e, s, a, o, i, b;
	e = new Oe({});
	const k = f[1].default,
		d = De(k, f, f[0], null);
	return (
		(i = new Be({})),
		{
			c() {
				me(e.$$.fragment),
					(s = y()),
					(a = h("div")),
					d && d.c(),
					(o = y()),
					me(i.$$.fragment),
					this.h();
			},
			l(t) {
				ge(e.$$.fragment, t), (s = z(t)), (a = v(t, "DIV", { class: !0 }));
				var u = _(a);
				d && d.l(u), u.forEach(r), (o = z(t)), ge(i.$$.fragment, t), this.h();
			},
			h() {
				n(a, "class", "wrapper");
			},
			m(t, u) {
				ke(e, t, u),
					N(t, s, u),
					N(t, a, u),
					d && d.m(a, null),
					N(t, o, u),
					ke(i, t, u),
					(b = !0);
			},
			p(t, [u]) {
				d &&
					d.p &&
					(!b || u & 1) &&
					Ge(d, k, t, t[0], b ? Te(k, t[0], u, null) : Me(t[0]), null);
			},
			i(t) {
				b || (oe(e.$$.fragment, t), oe(d, t), oe(i.$$.fragment, t), (b = !0));
			},
			o(t) {
				ie(e.$$.fragment, t), ie(d, t), ie(i.$$.fragment, t), (b = !1);
			},
			d(t) {
				Ee(e, t), t && r(s), t && r(a), d && d.d(t), t && r(o), Ee(i, t);
			}
		}
	);
}
function Fe(f, e, s) {
	let { $$slots: a = {}, $$scope: o } = e;
	return (
		(f.$$set = (i) => {
			"$$scope" in i && s(0, (o = i.$$scope));
		}),
		[o, a]
	);
}
class qe extends fe {
	constructor(e) {
		super(), ue(this, e, Fe, je, he, {});
	}
}
export { qe as default };
