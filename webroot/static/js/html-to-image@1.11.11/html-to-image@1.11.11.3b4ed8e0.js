const t=(()=>{let t=0;return()=>(t+=1,`u${`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4)}${t}`)})();function e(t){const e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function n(t,e){const n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function r(t,e={}){return{width:e.width||function(t){const e=n(t,"border-left-width"),r=n(t,"border-right-width");return t.clientWidth+e+r}(t),height:e.height||function(t){const e=n(t,"border-top-width"),r=n(t,"border-bottom-width");return t.clientHeight+e+r}(t)}}const o=16384;function i(t){return new Promise(((e,n)=>{const r=new Image;r.decode=()=>e(r),r.onload=()=>e(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}async function c(t,e,n){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${e}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${e} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(t),async function(t){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(t))).then(encodeURIComponent).then((t=>`data:image/svg+xml;charset=utf-8,${t}`))}(o)}const s=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||s(n,e))};function a(t,n,r){const o=`.${t}:${n}`,i=r.cssText?function(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}(r):function(t){return e(t).map((e=>`${e}: ${t.getPropertyValue(e)}${t.getPropertyPriority(e)?" !important":""};`)).join(" ")}(r);return document.createTextNode(`${o}{${i}}`)}function l(e,n,r){const o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""===i||"none"===i)return;const c=t();try{n.className=`${n.className} ${c}`}catch(l){return}const s=document.createElement("style");s.appendChild(a(c,r,o)),n.appendChild(s)}const u="application/font-woff",h="image/jpeg",d={woff:u,woff2:u,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:h,jpeg:h,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function f(t){const e=function(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return d[e]||""}function g(t){return-1!==t.search(/^(data:)/)}function m(t,e){return`data:${e};base64,${t}`}async function p(t,e,n){const r=await fetch(t,e);if(404===r.status)throw new Error(`Resource "${r.url}" not found`);const o=await r.blob();return new Promise(((t,e)=>{const i=new FileReader;i.onerror=e,i.onloadend=()=>{try{t(n({res:r,result:i.result}))}catch(o){e(o)}},i.readAsDataURL(o)}))}const w={};async function y(t,e,n){const r=function(t,e,n){let r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}(t,e,n.includeQueryParams);if(null!=w[r])return w[r];let o;n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());try{const r=await p(t,n.fetchRequestInit,(({res:t,result:n})=>(e||(e=t.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n))));o=m(r,e)}catch(i){o=n.imagePlaceholder||"";let e=`Failed to fetch resource: ${t}`;i&&(e="string"==typeof i?i:i.message),e&&console.warn(e)}return w[r]=o,o}async function b(t,e){return s(t,HTMLCanvasElement)?async function(t){const e=t.toDataURL();return"data:,"===e?t.cloneNode(!1):i(e)}(t):s(t,HTMLVideoElement)?async function(t,e){if(t.currentSrc){const e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t.clientWidth,e.height=t.clientHeight,null==n||n.drawImage(t,0,0,e.width,e.height),i(e.toDataURL())}const n=t.poster,r=f(n);return i(await y(n,r,e))}(t,e):s(t,HTMLIFrameElement)?async function(t){var e;try{if(null===(e=null==t?void 0:t.contentDocument)||void 0===e?void 0:e.body)return await x(t.contentDocument.body,{},!0)}catch(n){}return t.cloneNode(!1)}(t):t.cloneNode(!1)}const S=t=>null!=t.tagName&&"SLOT"===t.tagName.toUpperCase();function E(t,n){return s(n,Element)&&(function(t,n){const r=n.style;if(!r)return;const o=window.getComputedStyle(t);o.cssText?(r.cssText=o.cssText,r.transformOrigin=o.transformOrigin):e(o).forEach((e=>{let i=o.getPropertyValue(e);if("font-size"===e&&i.endsWith("px")){const t=Math.floor(parseFloat(i.substring(0,i.length-2)))-.1;i=`${t}px`}s(t,HTMLIFrameElement)&&"display"===e&&"inline"===i&&(i="block"),"d"===e&&n.getAttribute("d")&&(i=`path(${n.getAttribute("d")})`),r.setProperty(e,i,o.getPropertyPriority(e))}))}(t,n),function(t,e){l(t,e,":before"),l(t,e,":after")}(t,n),function(t,e){s(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),s(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,n),function(t,e){if(s(t,HTMLSelectElement)){const n=e,r=Array.from(n.children).find((e=>t.value===e.getAttribute("value")));r&&r.setAttribute("selected","")}}(t,n)),n}async function x(t,n,r){return r||!n.filter||n.filter(t)?Promise.resolve(t).then((t=>b(t,n))).then((r=>async function(t,n,r){var o,i;let c=[];return c=S(t)&&t.assignedNodes?e(t.assignedNodes()):s(t,HTMLIFrameElement)&&(null===(o=t.contentDocument)||void 0===o?void 0:o.body)?e(t.contentDocument.body.childNodes):e((null!==(i=t.shadowRoot)&&void 0!==i?i:t).childNodes),0===c.length||s(t,HTMLVideoElement)||await c.reduce(((t,e)=>t.then((()=>x(e,r))).then((t=>{t&&n.appendChild(t)}))),Promise.resolve()),n}(t,r,n))).then((e=>E(t,e))).then((t=>async function(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(0===n.length)return t;const r={};for(let i=0;i<n.length;i++){const o=n[i].getAttribute("xlink:href");if(o){const n=t.querySelector(o),i=document.querySelector(o);n||!i||r[o]||(r[o]=await x(i,e,!0))}}const o=Object.values(r);if(o.length){const e="http://www.w3.org/1999/xhtml",n=document.createElementNS(e,"svg");n.setAttribute("xmlns",e),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";const r=document.createElementNS(e,"defs");n.appendChild(r);for(let t=0;t<o.length;t++)r.appendChild(o[t]);t.appendChild(n)}return t}(t,n))):null}const $=/url\((['"]?)([^'"]+?)\1\)/g,v=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,C=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;async function P(t,e,n,r,o){try{const i=n?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),e&&(r.href=e),o.href=t,o.href}(e,n):e,c=f(e);let s;if(o){s=m(await o(i),c)}else s=await y(i,c,r);return t.replace(function(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}(e),`$1${s}$3`)}catch(i){}return t}function R(t){return-1!==t.search($)}async function T(t,e,n){if(!R(t))return t;const r=function(t,{preferredFontFormat:e}){return e?t.replace(C,(t=>{for(;;){const[n,,r]=v.exec(t)||[];if(!r)return"";if(r===e)return`src: ${n};`}})):t}(t,n),o=function(t){const e=[];return t.replace($,((t,n,r)=>(e.push(r),t))),e.filter((t=>!g(t)))}(r);return o.reduce(((t,r)=>t.then((t=>P(t,r,e,n)))),Promise.resolve(r))}async function A(t,e,n){var r;const o=null===(r=e.style)||void 0===r?void 0:r.getPropertyValue(t);if(o){const r=await T(o,null,n);return e.style.setProperty(t,r,e.style.getPropertyPriority(t)),!0}return!1}async function L(t,n){s(t,Element)&&(await async function(t,e){await A("background",t,e)||await A("background-image",t,e),await A("mask",t,e)||await A("mask-image",t,e)}(t,n),await async function(t,e){const n=s(t,HTMLImageElement);if((!n||g(t.src))&&(!s(t,SVGImageElement)||g(t.href.baseVal)))return;const r=n?t.src:t.href.baseVal,o=await y(r,f(r),e);await new Promise(((e,r)=>{t.onload=e,t.onerror=r;const i=t;i.decode&&(i.decode=e),"lazy"===i.loading&&(i.loading="eager"),n?(t.srcset="",t.src=o):t.href.baseVal=o}))}(t,n),await async function(t,n){const r=e(t.childNodes).map((t=>L(t,n)));await Promise.all(r).then((()=>t))}(t,n))}const N={};async function I(t){let e=N[t];if(null!=e)return e;const n=await fetch(t);return e={url:t,cssText:await n.text()},N[t]=e,e}async function k(t,e){let n=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((async o=>{let i=o.replace(r,"$1");return i.startsWith("https://")||(i=new URL(i,t.url).href),p(i,e.fetchRequestInit,(({result:t})=>(n=n.replace(o,`url(${t})`),[o,t])))}));return Promise.all(o).then((()=>n))}function M(t){if(null==t)return[];const e=[];let n=t.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const t=r.exec(n);if(null===t)break;e.push(t[0])}n=n.replace(r,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let t=o.exec(n);if(null===t){if(t=i.exec(n),null===t)break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;e.push(t[0])}return e}async function H(t,n){if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");const r=e(t.ownerDocument.styleSheets),o=await async function(t,n){const r=[],o=[];return t.forEach((r=>{if("cssRules"in r)try{e(r.cssRules||[]).forEach(((t,e)=>{if(t.type===CSSRule.IMPORT_RULE){let i=e+1;const c=I(t.href).then((t=>k(t,n))).then((t=>M(t).forEach((t=>{try{r.insertRule(t,t.startsWith("@import")?i+=1:r.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}})))).catch((t=>{console.error("Error loading remote css",t.toString())}));o.push(c)}}))}catch(i){const e=t.find((t=>null==t.href))||document.styleSheets[0];null!=r.href&&o.push(I(r.href).then((t=>k(t,n))).then((t=>M(t).forEach((t=>{e.insertRule(t,r.cssRules.length)})))).catch((t=>{console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",i)}})),Promise.all(o).then((()=>(t.forEach((t=>{if("cssRules"in t)try{e(t.cssRules||[]).forEach((t=>{r.push(t)}))}catch(n){console.error(`Error while reading CSS rules from ${t.href}`,n)}})),r)))}(r,n);return function(t){return t.filter((t=>t.type===CSSRule.FONT_FACE_RULE)).filter((t=>R(t.style.getPropertyValue("src"))))}(o)}async function D(t,e){const n=null!=e.fontEmbedCSS?e.fontEmbedCSS:e.skipFonts?null:await async function(t,e){const n=await H(t,e);return(await Promise.all(n.map((t=>{const n=t.parentStyleSheet?t.parentStyleSheet.href:null;return T(t.cssText,n,e)})))).join("\n")}(t,e);if(n){const e=document.createElement("style"),r=document.createTextNode(n);e.appendChild(r),t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)}}async function V(t,e={}){const{width:n,height:o}=r(t,e),i=await x(t,e,!0);await D(i,e),await L(i,e),function(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const r=e.style;null!=r&&Object.keys(r).forEach((t=>{n[t]=r[t]}))}(i,e);return await c(i,n,o)}async function F(t,e={}){const{width:n,height:c}=r(t,e),s=await V(t,e),a=await i(s),l=document.createElement("canvas"),u=l.getContext("2d"),h=e.pixelRatio||function(){let t,e;try{e=process}catch(r){}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=e.canvasWidth||n,f=e.canvasHeight||c;return l.width=d*h,l.height=f*h,e.skipAutoScale||function(t){(t.width>o||t.height>o)&&(t.width>o&&t.height>o?t.width>t.height?(t.height*=o/t.width,t.width=o):(t.width*=o/t.height,t.height=o):t.width>o?(t.height*=o/t.width,t.width=o):(t.width*=o/t.height,t.height=o))}(l),l.style.width=`${d}`,l.style.height=`${f}`,e.backgroundColor&&(u.fillStyle=e.backgroundColor,u.fillRect(0,0,l.width,l.height)),u.drawImage(a,0,0,l.width,l.height),l}async function O(t,e={}){return(await F(t,e)).toDataURL()}export{O as t};
