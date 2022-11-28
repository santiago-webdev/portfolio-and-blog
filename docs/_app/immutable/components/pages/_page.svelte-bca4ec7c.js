import {
	S as z,
	i as K,
	s as W,
	k as p,
	q as _,
	a as b,
	l as d,
	m as u,
	r as x,
	h as s,
	c as H,
	n as I,
	b as $,
	G as a,
	B as g,
	w as B,
	x as C,
	I as D,
	y as G,
	f as L,
	t as M,
	z as N
} from '../../chunks/index-3bb8a9b9.js';
function T(A) {
	let t, l, r, y, v, o, w, i, h, E;
	return {
		c() {
			(t = p('div')),
				(l = p('main')),
				(r = p('p')),
				(y = _('Hello!')),
				(v = b()),
				(o = p('h1')),
				(w = _("I'm Santiago, a web developer")),
				(i = b()),
				(h = p('h2')),
				(E = _('And I create clean interfaces for the web.')),
				this.h();
		},
		l(m) {
			t = d(m, 'DIV', { class: !0 });
			var c = u(t);
			l = d(c, 'MAIN', { class: !0 });
			var f = u(l);
			r = d(f, 'P', { class: !0 });
			var k = u(r);
			(y = x(k, 'Hello!')), k.forEach(s), (v = H(f)), (o = d(f, 'H1', { class: !0 }));
			var e = u(o);
			(w = x(e, "I'm Santiago, a web developer")),
				e.forEach(s),
				(i = H(f)),
				(h = d(f, 'H2', { class: !0 }));
			var n = u(h);
			(E = x(n, 'And I create clean interfaces for the web.')),
				n.forEach(s),
				f.forEach(s),
				c.forEach(s),
				this.h();
		},
		h() {
			I(r, 'class', 'svelte-1hsl2kx'),
				I(o, 'class', 'svelte-1hsl2kx'),
				I(h, 'class', 'svelte-1hsl2kx'),
				I(l, 'class', 'svelte-1hsl2kx'),
				I(t, 'class', 'wrapper-home svelte-1hsl2kx');
		},
		m(m, c) {
			$(m, t, c), a(t, l), a(l, r), a(r, y), a(l, v), a(l, o), a(o, w), a(l, i), a(l, h), a(h, E);
		},
		p: g,
		i: g,
		o: g,
		d(m) {
			m && s(t);
		}
	};
}
class Y extends z {
	constructor(t) {
		super(), K(this, t, null, T, W, {});
	}
}
function j(A) {
	let t, l, r, y, v, o, w, i, h, E, m, c, f, k;
	return (
		(t = new Y({})),
		{
			c() {
				B(t.$$.fragment),
					(l = b()),
					(r = p('h1')),
					(y = _('Welcome to SvelteKit')),
					(v = b()),
					(o = p('p')),
					(w = _('Visit ')),
					(i = p('a')),
					(h = _('kit.svelte.dev')),
					(E = _(' to read the documentation')),
					(m = b()),
					(c = p('style')),
					(f = _(`@import url('https://fonts.cdnfonts.com/css/basier');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');`)),
					this.h();
			},
			l(e) {
				C(t.$$.fragment, e), (l = H(e)), (r = d(e, 'H1', {}));
				var n = u(r);
				(y = x(n, 'Welcome to SvelteKit')), n.forEach(s), (v = H(e)), (o = d(e, 'P', {}));
				var S = u(o);
				(w = x(S, 'Visit ')), (i = d(S, 'A', { href: !0 }));
				var P = u(i);
				(h = x(P, 'kit.svelte.dev')),
					P.forEach(s),
					(E = x(S, ' to read the documentation')),
					S.forEach(s),
					(m = H(e));
				const V = D('svelte-9azeep', document.head);
				c = d(V, 'STYLE', {});
				var q = u(c);
				(f = x(
					q,
					`@import url('https://fonts.cdnfonts.com/css/basier');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');`
				)),
					q.forEach(s),
					V.forEach(s),
					this.h();
			},
			h() {
				I(i, 'href', 'https://kit.svelte.dev');
			},
			m(e, n) {
				G(t, e, n),
					$(e, l, n),
					$(e, r, n),
					a(r, y),
					$(e, v, n),
					$(e, o, n),
					a(o, w),
					a(o, i),
					a(i, h),
					a(o, E),
					$(e, m, n),
					a(document.head, c),
					a(c, f),
					(k = !0);
			},
			p: g,
			i(e) {
				k || (L(t.$$.fragment, e), (k = !0));
			},
			o(e) {
				M(t.$$.fragment, e), (k = !1);
			},
			d(e) {
				N(t, e), e && s(l), e && s(r), e && s(v), e && s(o), e && s(m), s(c);
			}
		}
	);
}
class J extends z {
	constructor(t) {
		super(), K(this, t, null, j, W, {});
	}
}
export { J as default };
