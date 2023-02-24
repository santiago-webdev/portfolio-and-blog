var ln=Object.defineProperty;var an=(e,t,n)=>t in e?ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var be=(e,t,n)=>(an(e,typeof t!="symbol"?t+"":t,n),n);import{S as W,i as K,s as H,D as ce,k as I,l as S,m as C,h as g,n as m,b as R,E as Ie,C as B,F as zt,o as Lt,e as Se,f as $,g as Ue,t as T,d as Ye,G as Je,a as P,c as x,H as We,I as Ke,J as Xe,q as M,r as F,K as dt,L as p,M as un,N as ye,x as ee,y as te,O as ht,z as ne,u as Mt,A as re,P as Ne,Q as fn}from"../../chunks/index-4cd0fb9b.js";import{b as D}from"../../chunks/paths-24bb4e9c.js";import{n as dn,p as Ft}from"../../chunks/stores-02663c19.js";import{i as hn}from"../../chunks/utils-362cc7de.js";import{w as pn}from"../../chunks/singletons-0b12ad6b.js";import{f as gn}from"../../chunks/index-ba63fb95.js";function mn(e){let t=!1,n=()=>{t=!1},o,r,s,i,l;return ce(e[3]),ce(e[4]),{c(){r=I("progress"),this.h()},l(c){r=S(c,"PROGRESS",{max:!0,class:!0}),C(r).forEach(g),this.h()},h(){m(r,"max",s=e[1]-e[2]),r.value=e[0],m(r,"class","svelte-1g5avrv")},m(c,a){R(c,r,a),i||(l=[Ie(window,"resize",e[3]),Ie(window,"scroll",()=>{t=!0,clearTimeout(o),o=setTimeout(n,100),e[4]()})],i=!0)},p(c,[a]){a&1&&!t&&(t=!0,clearTimeout(o),scrollTo(window.pageXOffset,c[0]),o=setTimeout(n,100)),a&6&&s!==(s=c[1]-c[2])&&m(r,"max",s),a&1&&(r.value=c[0])},i:B,o:B,d(c){c&&g(r),i=!1,zt(l)}}}function bn(e,t,n){let o,r,s=0;Lt(()=>{const c=document.querySelector("body"),a=new ResizeObserver(u=>{const d=u.at(0);d!==void 0&&n(1,r=Math.floor(d.contentBoxSize[0].blockSize))});return c&&a.observe(c),()=>c&&a.unobserve(c)});function i(){n(2,o=window.innerHeight)}function l(){n(0,s=window.pageYOffset)}return n(2,o=0),n(1,r=0),[s,r,o,i,l]}class _n extends W{constructor(t){super(),K(this,t,bn,mn,H,{})}}const yn=pn([{label:"Blog",href:`${D}/blog`},{label:"Resume",href:`${D}/about`},{label:"Projects",href:`${D}/projects`},{separator:!0,label:"About",href:`${D}/about`},{label:"Contact",href:`${D}/contact`,decoration:"border"}]);function pt(e){let t,n,o;const r=e[3].default,s=Je(r,e,e[2],null);return{c(){t=I("div"),n=P(),s&&s.c(),this.h()},l(i){t=S(i,"DIV",{"aria-orientation":!0,role:!0,class:!0}),C(t).forEach(g),n=x(i),s&&s.l(i),this.h()},h(){m(t,"aria-orientation",e[1]),m(t,"role","separator"),m(t,"class","ui-divider")},m(i,l){R(i,t,l),R(i,n,l),s&&s.m(i,l),o=!0},p(i,l){(!o||l&2)&&m(t,"aria-orientation",i[1]),s&&s.p&&(!o||l&4)&&We(s,r,i,i[2],o?Xe(r,i[2],l,null):Ke(i[2]),null)},i(i){o||($(s,i),o=!0)},o(i){T(s,i),o=!1},d(i){i&&g(t),i&&g(n),s&&s.d(i)}}}function vn(e){let t,n,o=e[0]&&pt(e);return{c(){o&&o.c(),t=Se()},l(r){o&&o.l(r),t=Se()},m(r,s){o&&o.m(r,s),R(r,t,s),n=!0},p(r,[s]){r[0]?o?(o.p(r,s),s&1&&$(o,1)):(o=pt(r),o.c(),$(o,1),o.m(t.parentNode,t)):o&&(Ue(),T(o,1,1,()=>{o=null}),Ye())},i(r){n||($(o),n=!0)},o(r){T(o),n=!1},d(r){o&&o.d(r),r&&g(t)}}}function wn(e,t,n){let{$$slots:o={},$$scope:r}=t,{render:s=!1}=t,{orientation:i}=t;return e.$$set=l=>{"render"in l&&n(0,s=l.render),"orientation"in l&&n(1,i=l.orientation),"$$scope"in l&&n(2,r=l.$$scope)},[s,i,r,o]}class In extends W{constructor(t){super(),K(this,t,wn,vn,H,{render:0,orientation:1})}}function gt(e,t,n){const o=e.slice();return o[10]=t[n],o}function mt(e){let t,n,o,r=e[10].label+"",s,i,l,c,a;return t=new In({props:{render:e[10].separator,orientation:"vertical"}}),{c(){ee(t.$$.fragment),n=P(),o=I("a"),s=M(r),this.h()},l(u){te(t.$$.fragment,u),n=x(u),o=S(u,"A",{"aria-current":!0,class:!0,href:!0});var d=C(o);s=F(d,r),d.forEach(g),this.h()},h(){m(o,"aria-current",i=e[3].url.pathname.startsWith(e[10].href?e[10].href:"")?"page":void 0),m(o,"class",l=ht(e[10].decoration?"attn-border attn":"trn-border")+" svelte-qsl8wz"),m(o,"href",c=e[10].href)},m(u,d){ne(t,u,d),R(u,n,d),R(u,o,d),p(o,s),a=!0},p(u,d){const f={};d&16&&(f.render=u[10].separator),t.$set(f),(!a||d&16)&&r!==(r=u[10].label+"")&&Mt(s,r),(!a||d&24&&i!==(i=u[3].url.pathname.startsWith(u[10].href?u[10].href:"")?"page":void 0))&&m(o,"aria-current",i),(!a||d&16&&l!==(l=ht(u[10].decoration?"attn-border attn":"trn-border")+" svelte-qsl8wz"))&&m(o,"class",l),(!a||d&16&&c!==(c=u[10].href))&&m(o,"href",c)},i(u){a||($(t.$$.fragment,u),a=!0)},o(u){T(t.$$.fragment,u),a=!1},d(u){re(t,u),u&&g(n),u&&g(o)}}}function Sn(e){let t=!1,n=()=>{t=!1},o,r,s,i,l,c,a,u,d,f,b,k;ce(e[7]),ce(e[8]);let E=e[4],v=[];for(let h=0;h<E.length;h+=1)v[h]=mt(gt(e,E,h));const O=h=>T(v[h],1,1,()=>{v[h]=null});return{c(){r=I("nav"),s=I("div"),i=I("section"),l=I("a"),c=M("Santiago Gonzalez"),u=P(),d=I("section");for(let h=0;h<v.length;h+=1)v[h].c();this.h()},l(h){r=S(h,"NAV",{"aria-labelledby":!0,class:!0});var _=C(r);s=S(_,"DIV",{id:!0,class:!0});var w=C(s);i=S(w,"SECTION",{class:!0});var N=C(i);l=S(N,"A",{"aria-current":!0,href:!0,class:!0});var y=C(l);c=F(y,"Santiago Gonzalez"),y.forEach(g),N.forEach(g),u=x(w),d=S(w,"SECTION",{class:!0});var A=C(d);for(let z=0;z<v.length;z+=1)v[z].l(A);A.forEach(g),w.forEach(g),_.forEach(g),this.h()},h(){m(l,"aria-current",a=e[3].url.pathname===`/${D}`?"page":void 0),m(l,"href",D+"/"),m(l,"class","svelte-qsl8wz"),m(i,"class","left svelte-qsl8wz"),m(d,"class","right svelte-qsl8wz"),m(s,"id","main-navigation"),m(s,"class","wider svelte-qsl8wz"),m(r,"aria-labelledby","main-navigation"),m(r,"class","artifact-ui svelte-qsl8wz"),dt(r,"scrollY",e[1])},m(h,_){R(h,r,_),p(r,s),p(s,i),p(i,l),p(l,c),p(s,u),p(s,d);for(let w=0;w<v.length;w+=1)v[w].m(d,null);f=!0,b||(k=[Ie(window,"resize",e[7]),Ie(window,"scroll",()=>{t=!0,clearTimeout(o),o=setTimeout(n,100),e[8]()})],b=!0)},p(h,[_]){if(_&2&&!t&&(t=!0,clearTimeout(o),scrollTo(window.pageXOffset,h[1]),o=setTimeout(n,100)),(!f||_&8&&a!==(a=h[3].url.pathname===`/${D}`?"page":void 0))&&m(l,"aria-current",a),_&24){E=h[4];let w;for(w=0;w<E.length;w+=1){const N=gt(h,E,w);v[w]?(v[w].p(N,_),$(v[w],1)):(v[w]=mt(N),v[w].c(),$(v[w],1),v[w].m(d,null))}for(Ue(),w=E.length;w<v.length;w+=1)O(w);Ye()}(!f||_&2)&&dt(r,"scrollY",h[1])},i(h){if(!f){for(let _=0;_<E.length;_+=1)$(v[_]);f=!0}},o(h){v=v.filter(Boolean);for(let _=0;_<v.length;_+=1)T(v[_]);f=!1},d(h){h&&g(r),un(v,h),b=!1,zt(k)}}}function Cn(e,t,n){let o,r,s,i;ye(e,dn,f=>n(6,r=f)),ye(e,Ft,f=>n(3,s=f)),ye(e,yn,f=>n(4,i=f));let l=!0,c=0,a=0;function u(){n(0,a=window.outerWidth),n(2,o=window.innerHeight)}function d(){n(1,c=window.pageYOffset)}return e.$$.update=()=>{e.$$.dirty&1&&n(5,l=a>hn("48rem")),e.$$.dirty&96},n(2,o=0),[a,c,o,s,i,l,r,u,d]}class kn extends W{constructor(t){super(),K(this,t,Cn,Sn,H,{})}}function En(e){let t,n,o,r,s,i,l,c,a,u,d,f,b,k,E,v,O,h,_,w,N,y,A,z,j,L,Q,Oe,je,X,Te,Pe,oe,G,xe;return{c(){t=I("footer"),n=I("section"),o=I("small"),r=M("Designed & Built with "),s=I("iconify-icon"),i=M(" by Santiago"),l=P(),c=I("a"),a=M("Repository at"),u=I("iconify-icon"),d=M(`-
      `),f=I("iconify-icon"),b=P(),k=I("span"),E=M(e[0]),v=P(),O=I("section"),h=I("div"),_=I("small"),w=M("© GPL-3.0 Santiago Gonzalez"),N=P(),y=I("small"),A=M("2023. All Rights Reserved"),z=P(),j=I("ul"),L=I("li"),Q=I("a"),Oe=M("GitHub @santigo-zero"),je=P(),X=I("li"),Te=M("•"),Pe=P(),oe=I("li"),G=I("a"),xe=M("LinkedIn"),this.h()},l(U){t=S(U,"FOOTER",{class:!0});var q=C(t);n=S(q,"SECTION",{class:!0});var he=C(n);o=S(he,"SMALL",{class:!0});var pe=C(o);r=F(pe,"Designed & Built with "),s=S(pe,"ICONIFY-ICON",{icon:!0}),C(s).forEach(g),i=F(pe," by Santiago"),pe.forEach(g),l=x(he),c=S(he,"A",{href:!0,class:!0});var Y=C(c);a=F(Y,"Repository at"),u=S(Y,"ICONIFY-ICON",{icon:!0}),C(u).forEach(g),d=F(Y,`-
      `),f=S(Y,"ICONIFY-ICON",{icon:!0}),C(f).forEach(g),b=x(Y),k=S(Y,"SPAN",{class:!0});var ot=C(k);E=F(ot,e[0]),ot.forEach(g),Y.forEach(g),he.forEach(g),v=x(q),O=S(q,"SECTION",{class:!0});var ge=C(O);h=S(ge,"DIV",{class:!0});var me=C(h);_=S(me,"SMALL",{class:!0});var st=C(_);w=F(st,"© GPL-3.0 Santiago Gonzalez"),st.forEach(g),N=x(me),y=S(me,"SMALL",{class:!0});var it=C(y);A=F(it,"2023. All Rights Reserved"),it.forEach(g),me.forEach(g),z=x(ge),j=S(ge,"UL",{class:!0});var Z=C(j);L=S(Z,"LI",{});var ct=C(L);Q=S(ct,"A",{href:!0,class:!0});var lt=C(Q);Oe=F(lt,"GitHub @santigo-zero"),lt.forEach(g),ct.forEach(g),je=x(Z),X=S(Z,"LI",{class:!0});var at=C(X);Te=F(at,"•"),at.forEach(g),Pe=x(Z),oe=S(Z,"LI",{});var ut=C(oe);G=S(ut,"A",{href:!0,class:!0});var ft=C(G);xe=F(ft,"LinkedIn"),ft.forEach(g),ut.forEach(g),Z.forEach(g),ge.forEach(g),q.forEach(g),this.h()},h(){Ne(s,"icon","lucide:heart"),m(o,"class","svelte-1qtjbcb"),Ne(u,"icon","lucide:github"),Ne(f,"icon","lucide:star"),m(k,"class","svelte-1qtjbcb"),m(c,"href","https://github.com/santigo-zero/santigo-zero.github.io"),m(c,"class","svelte-1qtjbcb"),m(n,"class","upper wider svelte-1qtjbcb"),m(_,"class","svelte-1qtjbcb"),m(y,"class","svelte-1qtjbcb"),m(h,"class","copyright svelte-1qtjbcb"),m(Q,"href","https://github.com/santigo-zero/"),m(Q,"class","svelte-1qtjbcb"),m(X,"class","separator svelte-1qtjbcb"),m(G,"href","https://www.linkedin.com/in/santiago-gonzalez-62557221b/"),m(G,"class","svelte-1qtjbcb"),m(j,"class","svelte-1qtjbcb"),m(O,"class","bottom wider svelte-1qtjbcb"),m(t,"class","banner-reverse artifact-ui")},m(U,q){R(U,t,q),p(t,n),p(n,o),p(o,r),p(o,s),p(o,i),p(n,l),p(n,c),p(c,a),p(c,u),p(c,d),p(c,f),p(c,b),p(c,k),p(k,E),p(t,v),p(t,O),p(O,h),p(h,_),p(_,w),p(h,N),p(h,y),p(y,A),p(O,z),p(O,j),p(j,L),p(L,Q),p(Q,Oe),p(j,je),p(j,X),p(X,Te),p(j,Pe),p(j,oe),p(oe,G),p(G,xe)},p(U,[q]){q&1&&Mt(E,U[0])},i:B,o:B,d(U){U&&g(t)}}}function An(e,t,n){var o=0;return Lt(async()=>{{const s=await(await fetch("https://api.github.com/repos/santigo-zero/santigo-zero.github.io")).json();n(0,o=s.stargazers_count)}}),[o]}class $n extends W{constructor(t){super(),K(this,t,An,En,H,{})}}function bt(e){let t,n,o;const r=e[2].default,s=Je(r,e,e[1],null);return{c(){t=I("div"),s&&s.c()},l(i){t=S(i,"DIV",{});var l=C(t);s&&s.l(l),l.forEach(g)},m(i,l){R(i,t,l),s&&s.m(t,null),o=!0},p(i,l){s&&s.p&&(!o||l&2)&&We(s,r,i,i[1],o?Xe(r,i[1],l,null):Ke(i[1]),null)},i(i){o||($(s,i),n||ce(()=>{n=fn(t,gn,{y:-60,duration:250}),n.start()}),o=!0)},o(i){T(s,i),o=!1},d(i){i&&g(t),s&&s.d(i)}}}function On(e){let t=e[0],n,o,r=bt(e);return{c(){r.c(),n=Se()},l(s){r.l(s),n=Se()},m(s,i){r.m(s,i),R(s,n,i),o=!0},p(s,[i]){i&1&&H(t,t=s[0])?(Ue(),T(r,1,1,B),Ye(),r=bt(s),r.c(),$(r,1),r.m(n.parentNode,n)):r.p(s,i)},i(s){o||($(r),o=!0)},o(s){T(r),o=!1},d(s){s&&g(n),r.d(s)}}}function jn(e,t,n){let{$$slots:o={},$$scope:r}=t,{url:s}=t;return e.$$set=i=>{"url"in i&&n(0,s=i.url),"$$scope"in i&&n(1,r=i.$$scope)},[s,r,o]}class Tn extends W{constructor(t){super(),K(this,t,jn,On,H,{url:0})}}function Pn(e){let t;return{c(){t=I("div"),this.h()},l(n){t=S(n,"DIV",{class:!0}),C(t).forEach(g),this.h()},h(){m(t,"class","noise svelte-1mgsza0")},m(n,o){R(n,t,o)},p:B,i:B,o:B,d(n){n&&g(t)}}}class xn extends W{constructor(t){super(),K(this,t,null,Pn,H,{})}}/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.7
*/const Rt=Object.freeze({left:0,top:0,width:16,height:16}),Ce=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),fe=Object.freeze({...Rt,...Ce}),Re=Object.freeze({...fe,body:"",hidden:!1}),Nn=Object.freeze({width:null,height:null}),qt=Object.freeze({...Nn,...Ce});function zn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(e);return isNaN(r)?0:o(r)}else if(n!==e){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?o(s):0)}}return t}const Ln=/[\s,]+/;function Mn(e,t){t.split(Ln).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const Dt={...qt,preserveAspectRatio:""};function _t(e){const t={...Dt},n=(o,r)=>e.getAttribute(o)||r;return t.width=n("width",null),t.height=n("height",null),t.rotate=zn(n("rotate","")),Mn(t,n("flip","")),t.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),t}function Fn(e,t){for(const n in Dt)if(e[n]!==t[n])return!0;return!1}const ie=/^[a-z0-9]+(-[a-z0-9]+)*$/,de=(e,t,n,o="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const l=r.pop(),c=r.pop(),a={provider:r.length>0?r[0]:o,prefix:c,name:l};return t&&!ve(a)?null:a}const s=r[0],i=s.split("-");if(i.length>1){const l={provider:o,prefix:i.shift(),name:i.join("-")};return t&&!ve(l)?null:l}if(n&&o===""){const l={provider:o,prefix:"",name:s};return t&&!ve(l,n)?null:l}return null},ve=(e,t)=>e?!!((e.provider===""||e.provider.match(ie))&&(t&&e.prefix===""||e.prefix.match(ie))&&e.name.match(ie)):!1;function Rn(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}function yt(e,t){const n=Rn(e,t);for(const o in Re)o in Ce?o in e&&!(o in n)&&(n[o]=Ce[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function qn(e,t){const n=e.icons,o=e.aliases||Object.create(null),r=Object.create(null);function s(i){if(n[i])return r[i]=[];if(!(i in r)){r[i]=null;const l=o[i]&&o[i].parent,c=l&&s(l);c&&(r[i]=[l].concat(c))}return r[i]}return(t||Object.keys(n).concat(Object.keys(o))).forEach(s),r}function Dn(e,t,n){const o=e.icons,r=e.aliases||Object.create(null);let s={};function i(l){s=yt(o[l]||r[l],s)}return i(t),n.forEach(i),yt(e,s)}function Bt(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),n.push(r)});const o=qn(e);for(const r in o){const s=o[r];s&&(t(r,Dn(e,r,s)),n.push(r))}return n}const Bn={provider:"",aliases:{},not_found:{},...Rt};function ze(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Vt(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!ze(e,Bn))return null;const n=t.icons;for(const r in n){const s=n[r];if(!r.match(ie)||typeof s.body!="string"||!ze(s,Re))return null}const o=t.aliases||Object.create(null);for(const r in o){const s=o[r],i=s.parent;if(!r.match(ie)||typeof i!="string"||!n[i]&&!o[i]||!ze(s,Re))return null}return t}const ke=Object.create(null);function Vn(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function V(e,t){const n=ke[e]||(ke[e]=Object.create(null));return n[t]||(n[t]=Vn(e,t))}function Ze(e,t){return Vt(t)?Bt(t,(n,o)=>{o?e.icons[n]=o:e.missing.add(n)}):[]}function Hn(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}function Qn(e,t){let n=[];return(typeof e=="string"?[e]:Object.keys(ke)).forEach(r=>{(typeof r=="string"&&typeof t=="string"?[t]:Object.keys(ke[r]||{})).forEach(i=>{const l=V(r,i);n=n.concat(Object.keys(l.icons).map(c=>(r!==""?"@"+r+":":"")+i+":"+c))})}),n}let le=!1;function Ht(e){return typeof e=="boolean"&&(le=e),le}function ae(e){const t=typeof e=="string"?de(e,!0,le):e;if(t){const n=V(t.provider,t.prefix),o=t.name;return n.icons[o]||(n.missing.has(o)?null:void 0)}}function Qt(e,t){const n=de(e,!0,le);if(!n)return!1;const o=V(n.provider,n.prefix);return Hn(o,n.name,t)}function vt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),le&&!t&&!e.prefix){let r=!1;return Vt(e)&&(e.prefix="",Bt(e,(s,i)=>{i&&Qt(s,i)&&(r=!0)})),r}const n=e.prefix;if(!ve({provider:t,prefix:n,name:"a"}))return!1;const o=V(t,n);return!!Ze(o,e)}function Gn(e){return!!ae(e)}function Un(e){const t=ae(e);return t?{...fe,...t}:null}function Yn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let o={provider:"",prefix:"",name:""};return e.forEach(r=>{if(o.name===r.name&&o.prefix===r.prefix&&o.provider===r.provider)return;o=r;const s=r.provider,i=r.prefix,l=r.name,c=n[s]||(n[s]=Object.create(null)),a=c[i]||(c[i]=V(s,i));let u;l in a.icons?u=t.loaded:i===""||a.missing.has(l)?u=t.missing:u=t.pending;const d={provider:s,prefix:i,name:l};u.push(d)}),t}function Gt(e,t){e.forEach(n=>{const o=n.loaderCallbacks;o&&(n.loaderCallbacks=o.filter(r=>r.id!==t))})}function Jn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach(s=>{const i=s.icons,l=i.pending.length;i.pending=i.pending.filter(c=>{if(c.prefix!==r)return!0;const a=c.name;if(e.icons[a])i.loaded.push({provider:o,prefix:r,name:a});else if(e.missing.has(a))i.missing.push({provider:o,prefix:r,name:a});else return n=!0,!0;return!1}),i.pending.length!==l&&(n||Gt([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Wn=0;function Kn(e,t,n){const o=Wn++,r=Gt.bind(null,n,o);if(!t.pending.length)return r;const s={id:o,icons:t,callback:e,abort:r};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),r}const qe=Object.create(null);function wt(e,t){qe[e]=t}function De(e){return qe[e]||qe[""]}function Xn(e,t=!0,n=!1){const o=[];return e.forEach(r=>{const s=typeof r=="string"?de(r,t,n):r;s&&o.push(s)}),o}var Zn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function er(e,t,n,o){const r=e.resources.length,s=e.random?Math.floor(Math.random()*r):e.index;let i;if(e.random){let y=e.resources.slice(0);for(i=[];y.length>1;){const A=Math.floor(Math.random()*y.length);i.push(y[A]),y=y.slice(0,A).concat(y.slice(A+1))}i=i.concat(y)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const l=Date.now();let c="pending",a=0,u,d=null,f=[],b=[];typeof o=="function"&&b.push(o);function k(){d&&(clearTimeout(d),d=null)}function E(){c==="pending"&&(c="aborted"),k(),f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function v(y,A){A&&(b=[]),typeof y=="function"&&b.push(y)}function O(){return{startTime:l,payload:t,status:c,queriesSent:a,queriesPending:f.length,subscribe:v,abort:E}}function h(){c="failed",b.forEach(y=>{y(void 0,u)})}function _(){f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function w(y,A,z){const j=A!=="success";switch(f=f.filter(L=>L!==y),c){case"pending":break;case"failed":if(j||!e.dataAfterTimeout)return;break;default:return}if(A==="abort"){u=z,h();return}if(j){u=z,f.length||(i.length?N():h());return}if(k(),_(),!e.random){const L=e.resources.indexOf(y.resource);L!==-1&&L!==e.index&&(e.index=L)}c="completed",b.forEach(L=>{L(z)})}function N(){if(c!=="pending")return;k();const y=i.shift();if(y===void 0){if(f.length){d=setTimeout(()=>{k(),c==="pending"&&(_(),h())},e.timeout);return}h();return}const A={status:"pending",resource:y,callback:(z,j)=>{w(A,z,j)}};f.push(A),a++,d=setTimeout(N,e.rotate),n(y,t,A.callback)}return setTimeout(N),O}function Ut(e){const t={...Zn,...e};let n=[];function o(){n=n.filter(l=>l().status==="pending")}function r(l,c,a){const u=er(t,l,c,(d,f)=>{o(),a&&a(d,f)});return n.push(u),u}function s(l){return n.find(c=>l(c))||null}return{query:r,find:s,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:o}}function et(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Ae=Object.create(null),se=["https://api.simplesvg.com","https://api.unisvg.com"],we=[];for(;se.length>0;)se.length===1||Math.random()>.5?we.push(se.shift()):we.push(se.pop());Ae[""]=et({resources:["https://api.iconify.design"].concat(we)});function It(e,t){const n=et(t);return n===null?!1:(Ae[e]=n,!0)}function $e(e){return Ae[e]}function tr(){return Object.keys(Ae)}function St(){}const Le=Object.create(null);function nr(e){if(!Le[e]){const t=$e(e);if(!t)return;const n=Ut(t),o={config:t,redundancy:n};Le[e]=o}return Le[e]}function Yt(e,t,n){let o,r;if(typeof e=="string"){const s=De(e);if(!s)return n(void 0,424),St;r=s.send;const i=nr(e);i&&(o=i.redundancy)}else{const s=et(e);if(s){o=Ut(s);const i=e.resources?e.resources[0]:"",l=De(i);l&&(r=l.send)}}return!o||!r?(n(void 0,424),St):o.query(t,r,n)().abort}const Ct="iconify2",ue="iconify",Jt=ue+"-count",kt=ue+"-version",Wt=36e5,rr=168;function Be(e,t){try{return e.getItem(t)}catch{}}function tt(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Et(e,t){try{e.removeItem(t)}catch{}}function Ve(e,t){return tt(e,Jt,t.toString())}function He(e){return parseInt(Be(e,Jt))||0}const J={local:!0,session:!0},Kt={local:new Set,session:new Set};let nt=!1;function or(e){nt=e}let _e=typeof window>"u"?{}:window;function Xt(e){const t=e+"Storage";try{if(_e&&_e[t]&&typeof _e[t].length=="number")return _e[t]}catch{}J[e]=!1}function Zt(e,t){const n=Xt(e);if(!n)return;const o=Be(n,kt);if(o!==Ct){if(o){const l=He(n);for(let c=0;c<l;c++)Et(n,ue+c.toString())}tt(n,kt,Ct),Ve(n,0);return}const r=Math.floor(Date.now()/Wt)-rr,s=l=>{const c=ue+l.toString(),a=Be(n,c);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,l))return!0}catch{}Et(n,c)}};let i=He(n);for(let l=i-1;l>=0;l--)s(l)||(l===i-1?(i--,Ve(n,i)):Kt[e].add(l))}function en(){if(!nt){or(!0);for(const e in J)Zt(e,t=>{const n=t.data,o=t.provider,r=n.prefix,s=V(o,r);if(!Ze(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function sr(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const o in J)Zt(o,r=>{const s=r.data;return r.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function ir(e,t){nt||en();function n(o){let r;if(!J[o]||!(r=Xt(o)))return;const s=Kt[o];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=He(r),!Ve(r,i+1))return;const l={cached:Math.floor(Date.now()/Wt),provider:e.provider,data:t};return tt(r,ue+i.toString(),JSON.stringify(l))}t.lastModified&&!sr(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function At(){}function cr(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Jn(e)}))}function lr(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:o}=e,r=e.iconsToLoad;delete e.iconsToLoad;let s;if(!r||!(s=De(n)))return;s.prepare(n,o,r).forEach(l=>{Yt(n,l,c=>{if(typeof c!="object")l.icons.forEach(a=>{e.missing.add(a)});else try{const a=Ze(e,c);if(!a.length)return;const u=e.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),ir(e,c)}catch(a){console.error(a)}cr(e)})})}))}const rt=(e,t)=>{const n=Xn(e,!0,Ht()),o=Yn(n);if(!o.pending.length){let c=!0;return t&&setTimeout(()=>{c&&t(o.loaded,o.missing,o.pending,At)}),()=>{c=!1}}const r=Object.create(null),s=[];let i,l;return o.pending.forEach(c=>{const{provider:a,prefix:u}=c;if(u===l&&a===i)return;i=a,l=u,s.push(V(a,u));const d=r[a]||(r[a]=Object.create(null));d[u]||(d[u]=[])}),o.pending.forEach(c=>{const{provider:a,prefix:u,name:d}=c,f=V(a,u),b=f.pendingIcons||(f.pendingIcons=new Set);b.has(d)||(b.add(d),r[a][u].push(d))}),s.forEach(c=>{const{provider:a,prefix:u}=c;r[a][u].length&&lr(c,r[a][u])}),t?Kn(t,o,s):At},ar=e=>new Promise((t,n)=>{const o=typeof e=="string"?de(e,!0):e;if(!o){n(e);return}rt([o||e],r=>{if(r.length&&o){const s=ae(o);if(s){t({...fe,...s});return}}n(e)})});function ur(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function fr(e,t){const n=typeof e=="string"?de(e,!0,!0):null;if(!n){const s=ur(e);return{value:e,data:s}}const o=ae(n);if(o!==void 0||!n.prefix)return{value:e,name:n,data:o};const r=rt([n],()=>t(e,n,ae(n)));return{value:e,name:n,loading:r}}function Me(e){return e.hasAttribute("inline")}let tn=!1;try{tn=navigator.vendor.indexOf("Apple")===0}catch{}function dr(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(tn||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const hr=/(-?[0-9.]*[0-9]+[0-9.]*)/g,pr=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Qe(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const o=e.split(hr);if(o===null||!o.length)return e;const r=[];let s=o.shift(),i=pr.test(s);for(;;){if(i){const l=parseFloat(s);isNaN(l)?r.push(s):r.push(Math.ceil(l*t*n)/n)}else r.push(s);if(s=o.shift(),s===void 0)return r.join("");i=!i}}const gr=e=>e==="unset"||e==="undefined"||e==="none";function nn(e,t){const n={...fe,...e},o={...qt,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,o].forEach(k=>{const E=[],v=k.hFlip,O=k.vFlip;let h=k.rotate;v?O?h+=2:(E.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),E.push("scale(-1 1)"),r.top=r.left=0):O&&(E.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),E.push("scale(1 -1)"),r.top=r.left=0);let _;switch(h<0&&(h-=Math.floor(h/4)*4),h=h%4,h){case 1:_=r.height/2+r.top,E.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:E.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:_=r.width/2+r.left,E.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}h%2===1&&(r.left!==r.top&&(_=r.left,r.left=r.top,r.top=_),r.width!==r.height&&(_=r.width,r.width=r.height,r.height=_)),E.length&&(s='<g transform="'+E.join(" ")+'">'+s+"</g>")});const i=o.width,l=o.height,c=r.width,a=r.height;let u,d;i===null?(d=l===null?"1em":l==="auto"?a:l,u=Qe(d,c/a)):(u=i==="auto"?c:i,d=l===null?Qe(u,a/c):l==="auto"?a:l);const f={},b=(k,E)=>{gr(E)||(f[k]=E.toString())};return b("width",u),b("height",d),f.viewBox=r.left.toString()+" "+r.top.toString()+" "+c.toString()+" "+a.toString(),{attributes:f,body:s}}const mr=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ee=mr();function br(e){Ee=e}function _r(){return Ee}function yr(e,t){const n=$e(e);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let r=0;n.resources.forEach(i=>{r=Math.max(r,i.length)});const s=t+".json?icons=";o=n.maxURL-r-n.path.length-s.length}return o}function vr(e){return e===404}const wr=(e,t,n)=>{const o=[],r=yr(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},l=0;return n.forEach((c,a)=>{l+=c.length+1,l>=r&&a>0&&(o.push(i),i={type:s,provider:e,prefix:t,icons:[]},l=c.length),i.icons.push(c)}),o.push(i),o};function Ir(e){if(typeof e=="string"){const t=$e(e);if(t)return t.path}return"/"}const Sr=(e,t,n)=>{if(!Ee){n("abort",424);return}let o=Ir(t.provider);switch(t.type){case"icons":{const s=t.prefix,l=t.icons.join(","),c=new URLSearchParams({icons:l});o+=s+".json?"+c.toString();break}case"custom":{const s=t.uri;o+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;Ee(e+o).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(vr(i)?"abort":"next",i)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},Cr={prepare:wr,send:Sr};function $t(e,t){switch(e){case"local":case"session":J[e]=t;break;case"all":for(const n in J)J[n]=t;break}}const Fe="data-style";let rn="";function kr(e){rn=e}function Ot(e,t){let n=Array.from(e.childNodes).find(o=>o.hasAttribute&&o.hasAttribute(Fe));n||(n=document.createElement("style"),n.setAttribute(Fe,Fe),e.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+rn}function on(){wt("",Cr),Ht(!0);let e;try{e=window}catch{}if(e){if(en(),e.IconifyPreload!==void 0){const n=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!vt(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(const o in n){const r="IconifyProviders["+o+"] is invalid.";try{const s=n[o];if(typeof s!="object"||!s||s.resources===void 0)continue;It(o,s)||console.error(r)}catch{console.error(r)}}}}return{enableCache:n=>$t(n,!0),disableCache:n=>$t(n,!1),iconExists:Gn,getIcon:Un,listIcons:Qn,addIcon:Qt,addCollection:vt,calculateSize:Qe,buildIcon:nn,loadIcons:rt,loadIcon:ar,addAPIProvider:It,appendCustomStyle:kr,_api:{getAPIConfig:$e,setAPIModule:wt,sendAPIQuery:Yt,setFetch:br,getFetch:_r,listAPIProviders:tr}}}function sn(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)n+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Er(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ar(e){return'url("data:image/svg+xml,'+Er(e)+'")'}const Ge={"background-color":"currentColor"},cn={"background-color":"transparent"},jt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Tt={"-webkit-mask":Ge,mask:Ge,background:cn};for(const e in Tt){const t=Tt[e];for(const n in jt)t[e+"-"+n]=jt[n]}function Pt(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function $r(e,t,n){const o=document.createElement("span");let r=e.body;r.indexOf("<a")!==-1&&(r+="<!-- "+Date.now()+" -->");const s=e.attributes,i=sn(r,{...s,width:t.width+"",height:t.height+""}),l=Ar(i),c=o.style,a={"--svg":l,width:Pt(s.width),height:Pt(s.height),...n?Ge:cn};for(const u in a)c.setProperty(u,a[u]);return o}function Or(e){const t=document.createElement("span"),n=e.attributes;let o="";return n.width||(o="width: inherit;"),n.height||(o+="height: inherit;"),o&&(n.style=o),t.innerHTML=sn(e.body,n),t.firstChild}function xt(e,t){const n=t.icon.data,o=t.customisations,r=nn(n,o);o.preserveAspectRatio&&(r.attributes.preserveAspectRatio=o.preserveAspectRatio);const s=t.renderedMode;let i;switch(s){case"svg":i=Or(r);break;default:i=$r(r,{...fe,...n},s==="mask")}const l=Array.from(e.childNodes).find(c=>{const a=c.tagName&&c.tagName.toUpperCase();return a==="SPAN"||a==="SVG"});l?i.tagName==="SPAN"&&l.tagName===i.tagName?l.setAttribute("style",i.getAttribute("style")):e.replaceChild(i,l):e.appendChild(i)}function Nt(e,t,n){const o=n&&(n.rendered?n:n.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:o}}function jr(e="iconify-icon"){let t,n;try{t=window.customElements,n=window.HTMLElement}catch{return}if(!t||!n)return;const o=t.get(e);if(o)return o;const r=["icon","mode","inline","width","height","rotate","flip"],s=class extends n{constructor(){super();be(this,"_shadowRoot");be(this,"_state");be(this,"_checkQueued",!1);const c=this._shadowRoot=this.attachShadow({mode:"open"}),a=Me(this);Ot(c,a),this._state=Nt({value:""},a),this._queueCheck()}static get observedAttributes(){return r.slice(0)}attributeChangedCallback(c){if(c==="inline"){const a=Me(this),u=this._state;a!==u.inline&&(u.inline=a,Ot(this._shadowRoot,a))}else this._queueCheck()}get icon(){const c=this.getAttribute("icon");if(c&&c.slice(0,1)==="{")try{return JSON.parse(c)}catch{}return c}set icon(c){typeof c=="object"&&(c=JSON.stringify(c)),this.setAttribute("icon",c)}get inline(){return Me(this)}set inline(c){c?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){const c=this._state;if(c.rendered){const a=this._shadowRoot;if(c.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}xt(a,c)}}get status(){const c=this._state;return c.rendered?"rendered":c.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const c=this._state,a=this.getAttribute("icon");if(a!==c.icon.value){this._iconChanged(a);return}if(!c.rendered)return;const u=this.getAttribute("mode"),d=_t(this);(c.attrMode!==u||Fn(c.customisations,d))&&this._renderIcon(c.icon,d,u)}_iconChanged(c){const a=fr(c,(u,d,f)=>{const b=this._state;if(b.rendered||this.getAttribute("icon")!==u)return;const k={value:u,name:d,data:f};k.data?this._gotIconData(k):b.icon=k});a.data?this._gotIconData(a):this._state=Nt(a,this._state.inline,this._state)}_gotIconData(c){this._checkQueued=!1,this._renderIcon(c,_t(this),this.getAttribute("mode"))}_renderIcon(c,a,u){const d=dr(c.data.body,u),f=this._state.inline;xt(this._shadowRoot,this._state={rendered:!0,icon:c,inline:f,customisations:a,attrMode:u,renderedMode:d})}};r.forEach(l=>{l in s.prototype||Object.defineProperty(s.prototype,l,{get:function(){return this.getAttribute(l)},set:function(c){c!==null?this.setAttribute(l,c):this.removeAttribute(l)}})});const i=on();for(const l in i)s[l]=s.prototype[l]=i[l];return t.define(e,s),s}jr()||on();function Tr(e){let t;const n=e[1].default,o=Je(n,e,e[2],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,s){o&&o.m(r,s),t=!0},p(r,s){o&&o.p&&(!t||s&4)&&We(o,n,r,r[2],t?Xe(n,r[2],s,null):Ke(r[2]),null)},i(r){t||($(o,r),t=!0)},o(r){T(o,r),t=!1},d(r){o&&o.d(r)}}}function Pr(e){let t,n,o,r,s,i,l,c,a,u,d;return n=new _n({}),r=new kn({}),i=new Tn({props:{url:e[0].url,$$slots:{default:[Tr]},$$scope:{ctx:e}}}),c=new $n({}),u=new xn({}),{c(){t=I("div"),ee(n.$$.fragment),o=P(),ee(r.$$.fragment),s=P(),ee(i.$$.fragment),l=P(),ee(c.$$.fragment),a=P(),ee(u.$$.fragment),this.h()},l(f){t=S(f,"DIV",{class:!0});var b=C(t);te(n.$$.fragment,b),o=x(b),te(r.$$.fragment,b),s=x(b),te(i.$$.fragment,b),l=x(b),te(c.$$.fragment,b),a=x(b),te(u.$$.fragment,b),b.forEach(g),this.h()},h(){m(t,"class","layout svelte-melhvm")},m(f,b){R(f,t,b),ne(n,t,null),p(t,o),ne(r,t,null),p(t,s),ne(i,t,null),p(t,l),ne(c,t,null),p(t,a),ne(u,t,null),d=!0},p(f,[b]){const k={};b&1&&(k.url=f[0].url),b&4&&(k.$$scope={dirty:b,ctx:f}),i.$set(k)},i(f){d||($(n.$$.fragment,f),$(r.$$.fragment,f),$(i.$$.fragment,f),$(c.$$.fragment,f),$(u.$$.fragment,f),d=!0)},o(f){T(n.$$.fragment,f),T(r.$$.fragment,f),T(i.$$.fragment,f),T(c.$$.fragment,f),T(u.$$.fragment,f),d=!1},d(f){f&&g(t),re(n),re(r),re(i),re(c),re(u)}}}function xr(e,t,n){let o;ye(e,Ft,i=>n(0,o=i));let{$$slots:r={},$$scope:s}=t;return e.$$set=i=>{"$$scope"in i&&n(2,s=i.$$scope)},[o,r,s]}class Dr extends W{constructor(t){super(),K(this,t,xr,Pr,H,{})}}export{Dr as default};