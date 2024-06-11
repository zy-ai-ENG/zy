import{i as t}from"../vue-demi@0.14.7_vue@3.2.47/vue-demi@0.14.7_vue@3.2.47.71ba0ef2.js";import{u as e,r as n,m as s,j as o,i as c,b as a,t as r,g as i,q as u,v as f}from"../@vue_reactivity@3.2.47/@vue_reactivity@3.2.47.859737a0.js";import{g as p,i as l,m as h,q as v,n as d}from"../@vue_runtime-core@3.2.47/@vue_runtime-core@3.2.47.e62b9a68.js";
/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let y;const _=t=>y=t,m=Symbol();function b(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var j,g;function O(){const o=e(!0),c=o.run((()=>n({})));let a=[],r=[];const i=s({install(t){_(i),i._a=t,t.provide(m,i),t.config.globalProperties.$pinia=i,r.forEach((t=>a.push(t))),r=[]},use(e){return this._a||t?a.push(e):r.push(e),this},_p:a,_a:null,_e:o,_s:new Map,state:c});return i}(g=j||(j={})).direct="direct",g.patchObject="patch object",g.patchFunction="patch function";const $=()=>{};function P(t,e,n,s=$){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&i()&&u(o),o}function S(t,...e){t.slice().forEach((t=>{t(...e)}))}function E(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];b(o)&&b(s)&&t.hasOwnProperty(n)&&!c(s)&&!a(s)?t[n]=E(o,s):t[n]=s}return t}const w=Symbol();const{assign:I}=Object;function M(t,i,u={},f,p,l){let d;const y=I({actions:{}},u),m={deep:!0};let g,O,M,q=s([]),x=s([]);const A=f.state.value[t];let F;function k(e){let n;g=O=!1,"function"==typeof e?(e(f.state.value[t]),n={type:j.patchFunction,storeId:t,events:M}):(E(f.state.value[t],e),n={type:j.patchObject,payload:e,storeId:t,events:M});const s=F=Symbol();v().then((()=>{F===s&&(g=!0)})),O=!0,S(q,n,f.state.value[t])}l||A||(f.state.value[t]={}),n({});const J=l?function(){const{state:t}=u,e=t?t():{};this.$patch((t=>{I(t,e)}))}:$;function N(e,n){return function(){_(f);const s=Array.from(arguments),o=[],c=[];let a;S(x,{args:s,name:e,store:B,after:function(t){o.push(t)},onError:function(t){c.push(t)}});try{a=n.apply(this&&this.$id===t?this:B,s)}catch(r){throw S(c,r),r}return a instanceof Promise?a.then((t=>(S(o,t),t))).catch((t=>(S(c,t),Promise.reject(t)))):(S(o,a),a)}}const z={_p:f,$id:t,$onAction:P.bind(null,x),$patch:k,$reset:J,$subscribe(e,n={}){const s=P(q,e,n.detached,(()=>o())),o=d.run((()=>h((()=>f.state.value[t]),(s=>{("sync"===n.flush?O:g)&&e({storeId:t,type:j.direct,events:M},s)}),I({},m,n))));return s},$dispose:function(){d.stop(),q=[],x=[],f._s.delete(t)}},B=o(z);f._s.set(t,B);const C=f._e.run((()=>(d=e(),d.run((()=>i())))));for(const e in C){const n=C[e];if(c(n)&&(!c(G=n)||!G.effect)||a(n))l||(!A||b(D=n)&&D.hasOwnProperty(w)||(c(n)?n.value=A[e]:E(n,A[e])),f.state.value[t][e]=n);else if("function"==typeof n){const t=N(e,n);C[e]=t,y.actions[e]=n}}var D,G;return I(B,C),I(r(B),C),Object.defineProperty(B,"$state",{get:()=>f.state.value[t],set:t=>{k((e=>{I(e,t)}))}}),f._p.forEach((t=>{I(B,d.run((()=>t({store:B,app:f._a,pinia:f,options:y}))))})),A&&l&&u.hydrate&&u.hydrate(B.$state,A),g=!0,O=!0,B}function q(t,e,n){let o,c;const a="function"==typeof e;function r(t,n){const r=p();(t=t||r&&l(m,null))&&_(t),(t=y)._s.has(o)||(a?M(o,e,c,t):function(t,e,n,o){const{state:c,actions:a,getters:r}=e,i=n.state.value[t];let u;u=M(t,(function(){i||(n.state.value[t]=c?c():{});const e=f(n.state.value[t]);return I(e,a,Object.keys(r||{}).reduce(((e,o)=>(e[o]=s(d((()=>{_(n);const e=n._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,n,0,!0)}(o,c,t));return t._s.get(o)}return"string"==typeof t?(o=t,c=a?n:e):(c=t,o=t.id),r.$id=o,r}export{O as c,q as d};