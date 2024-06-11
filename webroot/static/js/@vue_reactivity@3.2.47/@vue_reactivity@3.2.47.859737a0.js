import{i as t,a as e,d as s,h as n,t as i,b as r,c,N as o,e as a,f as u,g as h,m as l,j as f}from"../@vue_shared@3.2.47/@vue_shared@3.2.47.9d8e617e.js";let _;class d{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_,!t&&_&&(this.index=(_.scopes||(_.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=_;try{return _=this,t()}finally{_=e}}}on(){_=this}off(){_=this.parent}stop(t){if(this._active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function p(t){return new d(t)}function v(){return _}function g(t){_&&_.cleanups.push(t)}const w=t=>{const e=new Set(t);return e.w=0,e.n=0,e},y=t=>(t.w&k)>0,R=t=>(t.n&k)>0,b=new WeakMap;let m=0,k=1;const S=30;let x;const E=Symbol(""),j=Symbol("");class O{constructor(t,e=null,s){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,function(t,e=_){e&&e.active&&e.effects.push(t)}(this,s)}run(){if(!this.active)return this.fn();let t=x,e=M;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=x,x=this,M=!0,k=1<<++m,m<=S?(({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=k})(this):P(this),this.fn()}finally{m<=S&&(t=>{const{deps:e}=t;if(e.length){let s=0;for(let n=0;n<e.length;n++){const i=e[n];y(i)&&!R(i)?i.delete(t):e[s++]=i,i.w&=~k,i.n&=~k}e.length=s}})(this),k=1<<--m,x=this.parent,M=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){x===this?this.deferStop=!0:this.active&&(P(this),this.onStop&&this.onStop(),this.active=!1)}}function P(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}let M=!0;const W=[];function z(){W.push(M),M=!1}function V(){const t=W.pop();M=void 0===t||t}function N(t,e,s){if(M&&x){let e=b.get(t);e||b.set(t,e=new Map);let n=e.get(s);n||e.set(s,n=w()),A(n)}}function A(t,e){let s=!1;m<=S?R(t)||(t.n|=k,s=!y(t)):s=!t.has(x),s&&(t.add(x),x.deps.push(t))}function K(t,e,s,n,i,c){const o=b.get(t);if(!o)return;let a=[];if("clear"===e)a=[...o.values()];else if("length"===s&&r(t)){const t=Number(n);o.forEach(((e,s)=>{("length"===s||s>=t)&&a.push(e)}))}else switch(void 0!==s&&a.push(o.get(s)),e){case"add":r(t)?u(s)&&a.push(o.get("length")):(a.push(o.get(E)),h(t)&&a.push(o.get(j)));break;case"delete":r(t)||(a.push(o.get(E)),h(t)&&a.push(o.get(j)));break;case"set":h(t)&&a.push(o.get(E))}if(1===a.length)a[0]&&q(a[0]);else{const t=[];for(const e of a)e&&t.push(...e);q(w(t))}}function q(t,e){const s=r(t)?t:[...t];for(const n of s)n.computed&&I(n);for(const n of s)n.computed||I(n)}function I(t,e){(t!==x||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const B=l("__proto__,__v_isRef,__isVue"),C=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(t)),D=Q(),F=Q(!1,!0),G=Q(!0),H=J();function J(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const s=Wt(this);for(let e=0,i=this.length;e<i;e++)N(s,0,e+"");const n=s[e](...t);return-1===n||!1===n?s[e](...t.map(Wt)):n}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){z();const s=Wt(this)[e].apply(this,t);return V(),s}})),t}function L(t){const e=Wt(this);return N(e,0,t),e.hasOwnProperty(t)}function Q(s=!1,n=!1){return function(i,c,o){if("__v_isReactive"===c)return!s;if("__v_isReadonly"===c)return s;if("__v_isShallow"===c)return n;if("__v_raw"===c&&o===(s?n?mt:bt:n?Rt:yt).get(i))return i;const h=r(i);if(!s){if(h&&a(H,c))return Reflect.get(H,c,o);if("hasOwnProperty"===c)return L}const l=Reflect.get(i,c,o);return(t(c)?C.has(c):B(c))?l:(s||N(i,0,c),n?l:qt(l)?h&&u(c)?l:l.value:e(l)?s?xt(l):kt(l):l)}}function T(t=!1){return function(e,s,i,c){let o=e[s];if(Ot(o)&&qt(o)&&!qt(i))return!1;if(!t&&(Pt(i)||Ot(i)||(o=Wt(o),i=Wt(i)),!r(e)&&qt(o)&&!qt(i)))return o.value=i,!0;const h=r(e)&&u(s)?Number(s)<e.length:a(e,s),l=Reflect.set(e,s,i,c);return e===Wt(c)&&(h?n(i,o)&&K(e,"set",s,i):K(e,"add",s,i)),l}}const U={get:D,set:T(),deleteProperty:function(t,e){const s=a(t,e);t[e];const n=Reflect.deleteProperty(t,e);return n&&s&&K(t,"delete",e,void 0),n},has:function(e,s){const n=Reflect.has(e,s);return t(s)&&C.has(s)||N(e,0,s),n},ownKeys:function(t){return N(t,0,r(t)?"length":E),Reflect.ownKeys(t)}},X={get:G,set:(t,e)=>!0,deleteProperty:(t,e)=>!0},Y=f({},U,{get:F,set:T(!0)}),Z=t=>t,$=t=>Reflect.getPrototypeOf(t);function tt(t,e,s=!1,n=!1){const i=Wt(t=t.__v_raw),r=Wt(e);s||(e!==r&&N(i,0,e),N(i,0,r));const{has:c}=$(i),o=n?Z:s?Nt:Vt;return c.call(i,e)?o(t.get(e)):c.call(i,r)?o(t.get(r)):void(t!==i&&t.get(e))}function et(t,e=!1){const s=this.__v_raw,n=Wt(s),i=Wt(t);return e||(t!==i&&N(n,0,t),N(n,0,i)),t===i?s.has(t):s.has(t)||s.has(i)}function st(t,e=!1){return t=t.__v_raw,!e&&N(Wt(t),0,E),Reflect.get(t,"size",t)}function nt(t){t=Wt(t);const e=Wt(this);return $(e).has.call(e,t)||(e.add(t),K(e,"add",t,t)),this}function it(t,e){e=Wt(e);const s=Wt(this),{has:i,get:r}=$(s);let c=i.call(s,t);c||(t=Wt(t),c=i.call(s,t));const o=r.call(s,t);return s.set(t,e),c?n(e,o)&&K(s,"set",t,e):K(s,"add",t,e),this}function rt(t){const e=Wt(this),{has:s,get:n}=$(e);let i=s.call(e,t);i||(t=Wt(t),i=s.call(e,t)),n&&n.call(e,t);const r=e.delete(t);return i&&K(e,"delete",t,void 0),r}function ct(){const t=Wt(this),e=0!==t.size,s=t.clear();return e&&K(t,"clear",void 0,void 0),s}function ot(t,e){return function(s,n){const i=this,r=i.__v_raw,c=Wt(r),o=e?Z:t?Nt:Vt;return!t&&N(c,0,E),r.forEach(((t,e)=>s.call(n,o(t),o(e),i)))}}function at(t,e,s){return function(...n){const i=this.__v_raw,r=Wt(i),c=h(r),o="entries"===t||t===Symbol.iterator&&c,a="keys"===t&&c,u=i[t](...n),l=s?Z:e?Nt:Vt;return!e&&N(r,0,a?j:E),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:o?[l(t[0]),l(t[1])]:l(t),done:e}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return"delete"!==t&&this}}function ht(){const t={get(t){return tt(this,t)},get size(){return st(this)},has:et,add:nt,set:it,delete:rt,clear:ct,forEach:ot(!1,!1)},e={get(t){return tt(this,t,!1,!0)},get size(){return st(this)},has:et,add:nt,set:it,delete:rt,clear:ct,forEach:ot(!1,!0)},s={get(t){return tt(this,t,!0)},get size(){return st(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ot(!0,!1)},n={get(t){return tt(this,t,!0,!0)},get size(){return st(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ot(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{t[i]=at(i,!1,!1),s[i]=at(i,!0,!1),e[i]=at(i,!1,!0),n[i]=at(i,!0,!0)})),[t,s,e,n]}const[lt,ft,_t,dt]=ht();function pt(t,e){const s=e?t?dt:_t:t?ft:lt;return(e,n,i)=>"__v_isReactive"===n?!t:"__v_isReadonly"===n?t:"__v_raw"===n?e:Reflect.get(a(s,n)&&n in e?s:e,n,i)}const vt={get:pt(!1,!1)},gt={get:pt(!1,!0)},wt={get:pt(!0,!1)},yt=new WeakMap,Rt=new WeakMap,bt=new WeakMap,mt=new WeakMap;function kt(t){return Ot(t)?t:Et(t,!1,U,vt,yt)}function St(t){return Et(t,!1,Y,gt,Rt)}function xt(t){return Et(t,!0,X,wt,bt)}function Et(t,s,n,r,c){if(!e(t))return t;if(t.__v_raw&&(!s||!t.__v_isReactive))return t;const o=c.get(t);if(o)return o;const a=(u=t).__v_skip||!Object.isExtensible(u)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(i(u));var u;if(0===a)return t;const h=new Proxy(t,2===a?r:n);return c.set(t,h),h}function jt(t){return Ot(t)?jt(t.__v_raw):!(!t||!t.__v_isReactive)}function Ot(t){return!(!t||!t.__v_isReadonly)}function Pt(t){return!(!t||!t.__v_isShallow)}function Mt(t){return jt(t)||Ot(t)}function Wt(t){const e=t&&t.__v_raw;return e?Wt(e):t}function zt(t){return s(t,"__v_skip",!0),t}const Vt=t=>e(t)?kt(t):t,Nt=t=>e(t)?xt(t):t;function At(t){M&&x&&A((t=Wt(t)).dep||(t.dep=w()))}function Kt(t,e){const s=(t=Wt(t)).dep;s&&q(s)}function qt(t){return!(!t||!0!==t.__v_isRef)}function It(t){return Ct(t,!1)}function Bt(t){return Ct(t,!0)}function Ct(t,e){return qt(t)?t:new Dt(t,e)}class Dt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Wt(t),this._value=e?t:Vt(t)}get value(){return At(this),this._value}set value(t){const e=this.__v_isShallow||Pt(t)||Ot(t);t=e?t:Wt(t),n(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Vt(t),Kt(this))}}function Ft(t){return qt(t)?t.value:t}const Gt={get:(t,e,s)=>Ft(Reflect.get(t,e,s)),set:(t,e,s,n)=>{const i=t[e];return qt(i)&&!qt(s)?(i.value=s,!0):Reflect.set(t,e,s,n)}};function Ht(t){return jt(t)?t:new Proxy(t,Gt)}class Jt{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:e,set:s}=t((()=>At(this)),(()=>Kt(this)));this._get=e,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Lt(t){return new Jt(t)}function Qt(t){const e=r(t)?new Array(t.length):{};for(const s in t)e[s]=Ut(t,s);return e}class Tt{constructor(t,e,s){this._object=t,this._key=e,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return t=Wt(this._object),e=this._key,null===(s=b.get(t))||void 0===s?void 0:s.get(e);var t,e,s}}function Ut(t,e,s){const n=t[e];return qt(n)?n:new Tt(t,e,s)}var Xt;class Yt{constructor(t,e,s,n){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Xt]=!1,this._dirty=!0,this.effect=new O(t,(()=>{this._dirty||(this._dirty=!0,Kt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const t=Wt(this);return At(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Zt(t,e,s=!1){let n,i;const r=c(t);r?(n=t,i=o):(n=t.get,i=t.set);return new Yt(n,i,r||!i,s)}Xt="__v_isReadonly";export{d as E,O as R,Pt as a,jt as b,Mt as c,Zt as d,V as e,Ht as f,v as g,N as h,qt as i,kt as j,K as k,Ut as l,zt as m,xt as n,Lt as o,z as p,g as q,It as r,St as s,Wt as t,p as u,Qt as v,Bt as w,Ft as x};
