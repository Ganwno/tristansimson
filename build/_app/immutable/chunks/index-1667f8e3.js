function g(){}const K=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function x(t){t.forEach(Q)}function k(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Ot(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Rt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function qt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function zt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)c[u]=e.dirty[u]|r[u];return c}return e.dirty|r}return e.dirty}function Bt(t,e,n,i,r,c){if(r){const s=U(e,n,i,c);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Lt(t){return t&&k(t.destroy)?t.destroy:g}const V=typeof window<"u";let X=V?()=>window.performance.now():()=>Date.now(),L=V?t=>requestAnimationFrame(t):g;const $=new Set;function Y(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&L(Y)}function Z(t){let e;return $.size===0&&L(Y),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let O=!1;function ht(){O=!0}function mt(){O=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:pt(1,r,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const c=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);c.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<c.length&&s[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(s[o],f)}}function gt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=nt("style");return xt(tt(t),e),e.sheet}function xt(t,e){return gt(t.head||t,e),e.sheet}function bt(t,e){if(O){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){O&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Gt(){return F(" ")}function It(){return F("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,r=!1){vt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Et(t,e,n,i){return it(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Qt(t,e,n){return Et(t,e,n,nt)}function Nt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Ut(t){return Nt(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Yt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Zt(t,e){return new t(e)}const j=new Map;let M=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:$t(e),rules:{}};return j.set(t,n),n}function st(t,e,n,i,r,c,s,u=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const A=e+(n-e)*c(m);l+=m*100+`%{${s(A,1-A)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(f)}_${u}`,_=tt(t),{stylesheet:d,rules:h}=j.get(_)||At(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Ct())}function Ct(){L(()=>{M||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&et(e)}),j.clear())})}let E;function v(t){E=t}function R(){if(!E)throw new Error("Function called outside component initialization");return E}function te(t){R().$$.on_mount.push(t)}function ee(t){R().$$.after_update.push(t)}function ne(t){R().$$.on_destroy.push(t)}function ie(){const t=R();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=rt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}const w=[],I=[],D=[],J=[],ot=Promise.resolve();let H=!1;function ct(){H||(H=!0,ot.then(lt))}function re(){return ct(),ot}function N(t){D.push(t)}const z=new Set;let S=0;function lt(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),St(e.$$)}for(v(null),w.length=0,S=0;I.length;)I.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];z.has(n)||(z.add(n),n())}D.length=0}while(w.length);for(;J.length;)J.pop()();H=!1,z.clear(),v(t)}function St(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let b;function ut(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function P(t,e,n){t.dispatchEvent(rt(`${e?"intro":"outro"}${n}`))}const T=new Set;let y;function se(){y={r:0,c:[],p:y}}function oe(){y.r||x(y.c),y=y.p}function Dt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function ce(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),y.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function le(t,e,n){let i=e(t,n),r=!1,c,s,u=0;function o(){c&&B(t,c)}function l(){const{delay:a=0,duration:_=300,easing:d=K,tick:h=g,css:p}=i||at;p&&(c=st(t,0,1,_,a,d,p,u++)),h(0,1);const m=X()+a,A=m+_;s&&s.abort(),r=!0,N(()=>P(t,!0,"start")),s=Z(q=>{if(r){if(q>=A)return h(1,0),P(t,!0,"end"),o(),r=!1;if(q>=m){const W=d((q-m)/_);h(W,1-W)}}return r})}let f=!1;return{start(){f||(f=!0,B(t),k(i)?(i=i(),ut().then(l)):l())},invalidate(){f=!1},end(){r&&(o(),r=!1)}}}function ue(t,e,n){let i=e(t,n),r=!0,c;const s=y;s.r+=1;function u(){const{delay:o=0,duration:l=300,easing:f=K,tick:a=g,css:_}=i||at;_&&(c=st(t,1,0,l,o,f,_));const d=X()+o,h=d+l;N(()=>P(t,!1,"start")),Z(p=>{if(r){if(p>=h)return a(0,1),P(t,!1,"end"),--s.r||x(s.c),!1;if(p>=d){const m=f((p-d)/l);a(1-m,m)}}return r})}return k(i)?ut().then(()=>{i=i(),u()}):u(),{end(o){o&&i.tick&&i.tick(1,0),r&&(c&&B(t,c),r=!1)}}}const ae=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||N(()=>{const s=t.$$.on_mount.map(Q).filter(k);t.$$.on_destroy?t.$$.on_destroy.push(...s):x(s),t.$$.on_mount=[]}),c.forEach(N)}function jt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,r,c,s,u=[-1]){const o=E;v(t);const l=t.$$={fragment:null,ctx:[],props:c,update:g,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Mt(t,a)),_}):[],l.update(),f=!0,x(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){ht();const a=wt(e.target);l.fragment&&l.fragment.l(a),a.forEach(et)}else l.fragment&&l.fragment.c();e.intro&&Dt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),mt(),lt()}v(o)}class he{$destroy(){jt(this,1),this.$destroy=g}$on(e,n){if(!k(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{re as A,g as B,qt as C,Bt as D,Ht as E,zt as F,bt as G,Rt as H,Jt as I,N as J,le as K,ue as L,Lt as M,Wt as N,x as O,Ot as P,lt as Q,ie as R,he as S,I as T,K as U,Yt as V,ne as W,ae as X,k as Y,Gt as a,Ft as b,Ut as c,oe as d,It as e,Dt as f,se as g,et as h,de as i,ee as j,nt as k,Qt as l,wt as m,Kt as n,te as o,Xt as p,F as q,Nt as r,Pt as s,ce as t,Vt as u,Zt as v,fe as w,_e as x,Tt as y,jt as z};
