import{m as n}from"../@emotion_hash@0.8.0/@emotion_hash@0.8.0.b17c1a96.js";const e=/\s*,(?![^(]*\))\s*/g,t=/\s+/g;function r(n){let r=[""];return n.forEach((n=>{(n=n&&n.trim())&&(r=n.includes("&")?function(n,t){const r=[];return t.split(e).forEach((e=>{let t=function(n){let e=0;for(let t=0;t<n.length;++t)"&"===n[t]&&++e;return e}(e);if(!t)return void n.forEach((n=>{r.push((n&&n+" ")+e)}));if(1===t)return void n.forEach((n=>{r.push(e.replace("&",n))}));let o=[e];for(;t--;){const e=[];o.forEach((t=>{n.forEach((n=>{e.push(t.replace("&",n))}))})),o=e}o.forEach((n=>r.push(n)))})),r}(r,n):function(n,t){const r=[];return t.split(e).forEach((e=>{n.forEach((n=>{r.push((n&&n+" ")+e)}))})),r}(r,n))})),r.join(", ").replace(t," ")}function o(n){if(!n)return;const e=n.parentElement;e&&e.removeChild(n)}function s(n){return document.querySelector(`style[cssr-id="${n}"]`)}function i(n){return!!n&&/^\s*@(s|m)/.test(n)}const c=/[A-Z]/g;function u(n){return n.replace(c,(n=>"-"+n.toLowerCase()))}function f(n,e,t,r){if(!e)return"";const o=function(n,e,t){return"function"==typeof n?n({context:e.context,props:t}):n}(e,t,r);if(!o)return"";if("string"==typeof o)return`${n} {\n${o}\n}`;const s=Object.keys(o);if(0===s.length)return t.config.keepEmptyBlock?n+" {\n}":"";const i=n?[n+" {"]:[];return s.forEach((n=>{const e=o[n];"raw"!==n?(n=u(n),null!=e&&i.push(`  ${n}${function(n,e="  "){return"object"==typeof n&&null!==n?" {\n"+Object.entries(n).map((n=>e+`  ${u(n[0])}: ${n[1]};`)).join("\n")+"\n"+e+"}":`: ${n};`}(e)}`)):i.push("\n"+e+"\n")})),n&&i.push("}"),i.join("\n")}function l(n,e,t){n&&n.forEach((n=>{if(Array.isArray(n))l(n,e,t);else if("function"==typeof n){const r=n(e);Array.isArray(r)?l(r,e,t):r&&t(r)}else n&&t(n)}))}function a(n,e,t,o,s,c){const u=n.$;let h="";if(u&&"string"!=typeof u)if("function"==typeof u){const n=u({context:o.context,props:s});i(n)?h=n:e.push(n)}else if(u.before&&u.before(o.context),u.$&&"string"!=typeof u.$){if(u.$){const n=u.$({context:o.context,props:s});i(n)?h=n:e.push(n)}}else i(u.$)?h=u.$:e.push(u.$);else i(u)?h=u:e.push(u);const d=r(e),p=f(d,n.props,o,s);h?(t.push(`${h} {`),c&&p&&c.insertRule(`${h} {\n${p}\n}\n`)):(c&&p&&c.insertRule(p),!c&&p.length&&t.push(p)),n.children&&l(n.children,{context:o.context,props:s},(n=>{if("string"==typeof n){const e=f(d,{raw:n},o,s);c?c.insertRule(e):t.push(e)}else a(n,e,t,o,s,c)})),e.pop(),h&&t.push("}"),u&&u.after&&u.after(o.context)}function h(n,e,t,r=!1){const o=[];return a(n,[],o,e,t,r?n.instance.__styleSheet:void 0),r?"":o.join("\n\n")}function d(n,e){n.push(e)}function p(e,t,r,o,i,c,u,f,l){if(c&&!l){if(void 0===r)return void console.error("[css-render/mount]: `id` is required in `silent` mode.");const n=window.__cssrContext;return void(n[r]||(n[r]=!0,h(t,e,o,c)))}let a;if(void 0===r&&(a=t.render(o),r=n(a)),l)return void l.adapter(r,null!=a?a:t.render(o));const p=s(r);if(null!==p&&!u)return p;const y=null!=p?p:function(n){const e=document.createElement("style");return e.setAttribute("cssr-id",n),e}(r);if(void 0===a&&(a=t.render(o)),y.textContent=a,null!==p)return p;if(f){const n=document.head.querySelector(`meta[name="${f}"]`);if(n)return document.head.insertBefore(y,n),d(t.els,y),y}return i?document.head.insertBefore(y,document.head.querySelector("style, link")):document.head.appendChild(y),d(t.els,y),y}function y(n){return h(this,this.instance,n)}function m(n={}){const{id:e,ssr:t,props:r,head:o=!1,silent:s=!1,force:i=!1,anchorMetaName:c}=n;return p(this.instance,this,e,r,o,s,i,c,t)}function $(n={}){const{id:e}=n;!function(n,e,t){const{els:r}=e;if(void 0===t)r.forEach(o),e.els=[];else{const n=s(t);n&&r.includes(n)&&(o(n),e.els=r.filter((e=>e!==n)))}}(this.instance,this,e)}"undefined"!=typeof window&&(window.__cssrContext={});const x=function(n,e,t,r){return{instance:n,$:e,props:t,children:r,els:[],render:y,mount:m,unmount:$}};function E(n={}){let e=null;const t={c:(...n)=>function(n,e,t,r){return Array.isArray(e)?x(n,{$:null},null,e):Array.isArray(t)?x(n,e,null,t):Array.isArray(r)?x(n,e,t,r):x(n,e,t,null)}(t,...n),use:(n,...e)=>n.install(t,...e),find:s,context:{},config:n,get __styleSheet(){if(!e){const n=document.createElement("style");return document.head.appendChild(n),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return t}function g(n,e){if(void 0===n)return!1;if(e){const{context:{ids:t}}=e;return t.has(n)}return null!==s(n)}export{E as C,g as e};