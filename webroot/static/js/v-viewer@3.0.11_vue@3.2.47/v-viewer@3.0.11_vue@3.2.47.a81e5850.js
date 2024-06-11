import{V as e}from"../viewerjs@1.11.3/viewerjs@1.11.3.a76d4126.js";import{r as t}from"../@vue_runtime-dom@3.2.47/@vue_runtime-dom@3.2.47.298398d5.js";import{d as r,m as n,p as o,J as i,h as u,q as c,o as a,a as f,K as s}from"../@vue_runtime-core@3.2.47/@vue_runtime-core@3.2.47.e62b9a68.js";import{r as l}from"../@vue_reactivity@3.2.47/@vue_reactivity@3.2.47.859737a0.js";
/*!
 * v-viewer v3.0.11
 * https://github.com/mirari/v-viewer#readme
 *
 * Copyright 2022 mirari
 * Released under the MIT license
 *
 * Date: 2022-10-25T08:49:33.301Z
 */var v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var p=function(e){return e};var d=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},b=Math.max;var y=function(e,t,r){return t=b(void 0===t?e.length-1:t,0),function(){for(var n=arguments,o=-1,i=b(n.length-t,0),u=Array(i);++o<i;)u[o]=n[t+o];o=-1;for(var c=Array(t+1);++o<t;)c[o]=n[o];return c[t]=r(u),d(e,this,c)}};var w=function(e){return function(){return e}},g="object"==typeof v&&v&&v.Object===Object&&v,m=g,j="object"==typeof self&&self&&self.Object===Object&&self,h=m||j||Function("return this")(),O=h.Symbol,_=O,$=Object.prototype,A=$.hasOwnProperty,x=$.toString,T=_?_.toStringTag:void 0;var E=function(e){var t=A.call(e,T),r=e[T];try{e[T]=void 0;var n=!0}catch(i){}var o=x.call(e);return n&&(t?e[T]=r:delete e[T]),o},I=Object.prototype.toString;var S=E,M=function(e){return I.call(e)},P=O?O.toStringTag:void 0;var V=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":P&&P in Object(e)?S(e):M(e)};var D=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},F=V,U=D;var C,W=function(e){if(!U(e))return!1;var t=F(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},N=h["__core-js_shared__"],k=(C=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"";var B=function(e){return!!k&&k in e},R=Function.prototype.toString;var L=W,q=B,K=D,z=function(e){if(null!=e){try{return R.call(e)}catch(t){}try{return e+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,H=Function.prototype,J=Object.prototype,Q=H.toString,X=J.hasOwnProperty,Y=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Z=function(e){return!(!K(e)||q(e))&&(L(e)?Y:G).test(z(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var r=ee(e,t);return Z(r)?r:void 0},re=function(){try{var e=te(Object,"defineProperty");return e({},"",{}),e}catch(t){}}(),ne=w,oe=re,ie=oe?function(e,t){return oe(e,"toString",{configurable:!0,enumerable:!1,value:ne(t),writable:!0})}:p,ue=Date.now;var ce=function(e){var t=0,r=0;return function(){var n=ue(),o=16-(n-r);if(r=n,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(ie),ae=p,fe=y,se=ce;var le=function(e,t){return se(fe(e,t,ae),e+"")};var ve=function(e,t){return e===t||e!=e&&t!=t};var pe=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},de=W,be=pe;var ye=function(e){return null!=e&&be(e.length)&&!de(e)},we=/^(?:0|[1-9]\d*)$/;var ge=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&we.test(e))&&e>-1&&e%1==0&&e<t},me=ve,je=ye,he=ge,Oe=D;var _e=function(e,t,r){if(!Oe(r))return!1;var n=typeof t;return!!("number"==n?je(r)&&he(t,r.length):"string"==n&&t in r)&&me(r[t],e)};var $e=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var Ae=function(e){return null!=e&&"object"==typeof e},xe=V,Te=Ae;var Ee,Ie,Se,Me,Pe,Ve,De,Fe,Ue=function(e){return Te(e)&&"[object Arguments]"==xe(e)},Ce=Ae,We=Object.prototype,Ne=We.hasOwnProperty,ke=We.propertyIsEnumerable,Be=Ue(function(){return arguments}())?Ue:function(e){return Ce(e)&&Ne.call(e,"callee")&&!ke.call(e,"callee")},Re=Array.isArray,Le={exports:{}};Ee=Le,Se=h,Me=function(){return!1},Pe=(Ie=Le.exports)&&!Ie.nodeType&&Ie,Ve=Pe&&Ee&&!Ee.nodeType&&Ee,De=Ve&&Ve.exports===Pe?Se.Buffer:void 0,Fe=(De?De.isBuffer:void 0)||Me,Ee.exports=Fe;var qe=V,Ke=pe,ze=Ae,Ge={};Ge["[object Float32Array]"]=Ge["[object Float64Array]"]=Ge["[object Int8Array]"]=Ge["[object Int16Array]"]=Ge["[object Int32Array]"]=Ge["[object Uint8Array]"]=Ge["[object Uint8ClampedArray]"]=Ge["[object Uint16Array]"]=Ge["[object Uint32Array]"]=!0,Ge["[object Arguments]"]=Ge["[object Array]"]=Ge["[object ArrayBuffer]"]=Ge["[object Boolean]"]=Ge["[object DataView]"]=Ge["[object Date]"]=Ge["[object Error]"]=Ge["[object Function]"]=Ge["[object Map]"]=Ge["[object Number]"]=Ge["[object Object]"]=Ge["[object RegExp]"]=Ge["[object Set]"]=Ge["[object String]"]=Ge["[object WeakMap]"]=!1;var He=function(e){return ze(e)&&Ke(e.length)&&!!Ge[qe(e)]};var Je=function(e){return function(t){return e(t)}},Qe={exports:{}};!function(e,t){var r=g,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,u=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(t){}}();e.exports=u}(Qe,Qe.exports);var Xe=He,Ye=Je,Ze=Qe.exports,et=Ze&&Ze.isTypedArray,tt=et?Ye(et):Xe,rt=$e,nt=Be,ot=Re,it=Le.exports,ut=ge,ct=tt,at=Object.prototype.hasOwnProperty;var ft=function(e,t){var r=ot(e),n=!r&&nt(e),o=!r&&!n&&it(e),i=!r&&!n&&!o&&ct(e),u=r||n||o||i,c=u?rt(e.length,String):[],a=c.length;for(var f in e)!t&&!at.call(e,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||ut(f,a))||c.push(f);return c},st=Object.prototype;var lt=D,vt=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||st)},pt=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t},dt=Object.prototype.hasOwnProperty;var bt=ft,yt=function(e){if(!lt(e))return pt(e);var t=vt(e),r=[];for(var n in e)("constructor"!=n||!t&&dt.call(e,n))&&r.push(n);return r},wt=ye;var gt=le,mt=ve,jt=_e,ht=function(e){return wt(e)?bt(e,!0):yt(e)},Ot=Object.prototype,_t=Ot.hasOwnProperty,$t=gt((function(e,t){e=Object(e);var r=-1,n=t.length,o=n>2?t[2]:void 0;for(o&&jt(t[0],t[1],o)&&(n=1);++r<n;)for(var i=t[r],u=ht(i),c=-1,a=u.length;++c<a;){var f=u[c],s=e[f];(void 0===s||mt(s,Ot[f])&&!_t.call(e,f))&&(e[f]=i[f])}return e}));const At="undefined"!=typeof window&&null!==window;!function(){if(At&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)return"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0}();const xt=Object.prototype.propertyIsEnumerable,Tt=Object.getOwnPropertySymbols;function Et(e){return"function"==typeof e||"[object Object]"===toString.call(e)}function It(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e}function St(e,...t){if(!Et(e))throw new TypeError("expected the first argument to be an object");if(0===t.length||"function"!=typeof Symbol||"function"!=typeof Tt)return e;for(const r of t){const t=Tt(r);for(const n of t)xt.call(r,n)&&(e[n]=r[n])}return e}function Mt(e,...t){let r=0;var n;for(("object"==typeof(n=e)?null===n:"function"!=typeof n)&&(e=t[r++]),e||(e={});r<t.length;r++)if(Et(t[r])){for(const n of Object.keys(t[r]))It(n)&&(Et(e[n])&&Et(t[r][n])?Mt(e[n],t[r][n]):e[n]=t[r][n]);St(e,t[r])}return e}const Pt=({images:r=[],options:n})=>{n=Mt(n,{inline:!1});const o=document.createElement("div"),i=u("div",{style:{display:"none"},class:["__viewer-token"]},r.map((e=>u("img","string"==typeof e?{src:e}:e))));t(i,o);const c=o.firstElementChild;document.body.appendChild(c);const a=new e(c,n),f=a.destroy.bind(a);return a.destroy=function(){return f(),t(null,o),a},a.show(),c.addEventListener("hidden",(function(){this.viewer===a&&a.destroy()})),a};var Vt=h,Dt=/\s/;var Ft=function(e){for(var t=e.length;t--&&Dt.test(e.charAt(t)););return t},Ut=/^\s+/;var Ct=V,Wt=Ae;var Nt=function(e){return e?e.slice(0,Ft(e)+1).replace(Ut,""):e},kt=D,Bt=function(e){return"symbol"==typeof e||Wt(e)&&"[object Symbol]"==Ct(e)},Rt=/^[-+]0x[0-9a-f]+$/i,Lt=/^0b[01]+$/i,qt=/^0o[0-7]+$/i,Kt=parseInt;var zt=D,Gt=function(){return Vt.Date.now()},Ht=function(e){if("number"==typeof e)return e;if(Bt(e))return NaN;if(kt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=kt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Nt(e);var r=Lt.test(e);return r||qt.test(e)?Kt(e.slice(2),r?2:8):Rt.test(e)?NaN:+e},Jt=Math.max,Qt=Math.min;var Xt=function(e,t,r){var n,o,i,u,c,a,f=0,s=!1,l=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,i=o;return n=o=void 0,f=t,u=e.apply(i,r)}function d(e){var r=e-a;return void 0===a||r>=t||r<0||l&&e-f>=i}function b(){var e=Gt();if(d(e))return y(e);c=setTimeout(b,function(e){var r=t-(e-a);return l?Qt(r,i-(e-f)):r}(e))}function y(e){return c=void 0,v&&n?p(e):(n=o=void 0,u)}function w(){var e=Gt(),r=d(e);if(n=arguments,o=this,a=e,r){if(void 0===c)return function(e){return f=e,c=setTimeout(b,t),s?p(e):u}(a);if(l)return clearTimeout(c),c=setTimeout(b,t),p(a)}return void 0===c&&(c=setTimeout(b,t)),u}return t=Ht(t)||0,zt(r)&&(s=!!r.leading,i=(l="maxWait"in r)?Jt(Ht(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,n=a=o=c=void 0},w.flush=function(){return void 0===c?u:y(Gt())},w};const Yt=({name:t="viewer",debug:r=!1}={})=>{async function o(r,n,o=!1,u=!1){await c(),u&&!function(e){const t=e.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g),r=t?t.join(""):void 0;return e.__viewerImageDiffCache===r?(a("Element change detected, but image(s) has not changed"),!1):(a("Image change detected"),e.__viewerImageDiffCache=r,!0)}(r)||(o||!r[`$${t}`]?(i(r),r[`$${t}`]=new e(r,n),a("Viewer created")):(r[`$${t}`].update(),a("Viewer updated")))}function i(e){e[`$${t}`]&&(e[`$${t}`].destroy(),delete e[`$${t}`],a("Viewer destroyed"))}function u(e){e.__viewerMutationObserver&&(e.__viewerMutationObserver.disconnect(),delete e.__viewerMutationObserver,a("observer destroyed"))}function a(...e){r&&console.log(...e)}return{mounted(e,t,r){a("Viewer bind");const i=Xt(o,50);i(e,t.value),function(e,t,r,o){e.__viewerUnwatch=n((()=>t.value),((r,n)=>{a("Change detected by watcher: ",t.value),o(e,r,!0,!1)}),{deep:!0}),a("Watcher created, expression: ",t.value)}(e,t,0,i),t.modifiers.static||function(e,t,r,n){u(e);const o=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(!o)return void a("Observer not supported");const i=new o((o=>{o.forEach((o=>{a(`Viewer mutation:${o.type}`),r(e,t,n,!0)}))}));i.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__viewerMutationObserver=i,a("Observer created")}(e,t.value,i,t.modifiers.rebuild)},unmounted(e){a("Viewer unbind"),u(e),function(e){e.__viewerUnwatch&&(e.__viewerUnwatch(),delete e.__viewerUnwatch,a("Watcher destroyed"))}(e),i(e)}}};var Zt=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r};const er=r({name:"Viewer",props:{images:{type:Array,default:()=>[]},rebuild:{type:Boolean,default:!1},trigger:{type:Object,default:null},options:{type:Object,default:()=>null}},emits:["inited"],setup(t,{emit:r}){let u;const a=l();function f(){u=new e(a.value,t.options),r("inited",u)}function s(){u&&u.destroy()}function v(){s(),f()}function p(){u?(u.update(),r("inited",u)):f()}function d(){t.rebuild?v():p()}const b={deep:!0};return n((()=>t.images),(()=>c((()=>d()))),b),n((()=>t.trigger),(()=>c((()=>d()))),b),n((()=>t.options),(()=>c((()=>v()))),b),o((()=>f())),i((()=>s())),{root:a,createViewer:f,rebuildViewer:v,updateViewer:p,destroyViewer:s}}}),tr={ref:"root"};var rr=Zt(er,[["render",function(e,t,r,n,o,i){return a(),f("div",tr,[s(e.$slots,"default",{images:e.images,options:e.options})],512)}]]),nr={install(t,{name:r="viewer",debug:n=!1,defaultOptions:o}={}){o&&e.setDefaults(o),t.config.globalProperties[`$${r}Api`]=Pt,t.component(r,$t(rr,{name:r})),t.directive(r,Yt({name:r,debug:n}))},setDefaults(t){e.setDefaults(t)}};export{nr as i};
