
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,g as t,y as a,B as n,r,x as o,F as i,C as s,h as c,o as u,c as l,a as p,b as d,G as f,e as m,f as h,J as v,I as b,S as E,U as y,ae as g,_ as x,l as w,t as T,n as C}from"../main-01383ffb.js";import{T as A}from"../index/index.3c28d88b.js";import"../index/index.35a7e2ce.js";function R(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var n=e[a];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:a,value:e[a++]});else{var r=1,o="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--r){s++;break}}else if("("===e[s]&&(r++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));o+=e[s++]}else o+=e[s++]+e[s++];if(r)throw new TypeError("Unbalanced pattern at ".concat(a));if(!o)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:o}),a=s}else{for(var i="",s=a+1;s<e.length;){var c=e.charCodeAt(s);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;i+=e[s++]}if(!i)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:i}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),n=t.prefixes,r=void 0===n?"./":n,o="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),i=[],s=0,c=0,u="",l=function(e){if(c<a.length&&a[c].type===e)return a[c++].value},p=function(e){var t=l(e);if(void 0!==t)return t;var n=a[c],r=n.type,o=n.index;throw new TypeError("Unexpected ".concat(r," at ").concat(o,", expected ").concat(e))},d=function(){for(var e,t="";e=l("CHAR")||l("ESCAPED_CHAR");)t+=e;return t};c<a.length;){var f=l("CHAR"),m=l("NAME"),h=l("PATTERN");if(m||h){var v=f||"";-1===r.indexOf(v)&&(u+=v,v=""),u&&(i.push(u),u=""),i.push({name:m||s++,prefix:v,suffix:"",pattern:h||o,modifier:l("MODIFIER")||""})}else{var b=f||l("ESCAPED_CHAR");if(b)u+=b;else if(u&&(i.push(u),u=""),l("OPEN")){v=d();var E=l("NAME")||"",y=l("PATTERN")||"",g=d();p("CLOSE"),i.push({name:E||(y?s++:""),pattern:E&&!y?o:y,prefix:v,suffix:g,modifier:l("MODIFIER")||""})}else p("END")}}return i}function N(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,r=void 0===n?function(e){return e}:n,o=t.validate,i=void 0===o||o,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",n=0;n<e.length;n++){var o=e[n];if("string"!=typeof o){var c=t?t[o.name]:void 0,u="?"===o.modifier||"*"===o.modifier,l="*"===o.modifier||"+"===o.modifier;if(Array.isArray(c)){if(!l)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(0===c.length){if(u)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var p=0;p<c.length;p++){var d=r(c[p],o);if(i&&!s[n].test(d))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(d,'"'));a+=o.prefix+d+o.suffix}}else if("string"!=typeof c&&"number"!=typeof c){if(!u){var f=l?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(f))}}else{d=r(String(c),o);if(i&&!s[n].test(d))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(d,'"'));a+=o.prefix+d+o.suffix}}else a+=o}return a}}(R(e,t),t)}const M={class:"left-box"},I=e({name:"Topbar"}),P=C(e({...I,setup(e){const C=t(),R=a(),I=n((()=>"mobile"===R.mode||["side","head","single"].includes(R.settings.menu.menuMode)&&R.settings.menu.enableSubMenuCollapseButton)),P=n((()=>{const e=[];return R.settings.home.enable&&e.push({path:"/",title:R.settings.home.title}),C.meta.breadcrumbNeste&&e.push(...C.meta.breadcrumbNeste.filter((e=>!1===e.hide))),e})),S=r(0),_=r(!1);function O(){S.value=(document.documentElement||document.body).scrollTop}return o((()=>{window.addEventListener("scroll",O)})),i((()=>{window.removeEventListener("scroll",O)})),s(S,((e,t)=>{const a=parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-topbar-height"));_.value="sticky"===R.settings.topbar.mode&&e>t&&e>a})),(e,t)=>{const a=x,n=c("el-icon"),r=c("el-breadcrumb-item"),o=c("el-breadcrumb");return u(),l("div",{class:f(["topbar-container",{[`topbar-${d(R).settings.topbar.mode}`]:!0,shadow:d(S),hide:d(_)}]),"data-fixed-calc-width":""},[p("div",M,[d(I)?(u(),l("div",{key:0,class:f(["sidebar-collapse",{"is-collapse":d(R).settings.menu.subMenuCollapse}]),onClick:t[0]||(t[0]=e=>d(R).toggleSidebarCollapse())},[m(n,null,{default:h((()=>[m(a,{name:"toolbar-collapse"})])),_:1})],2)):v("",!0),d(R).settings.breadcrumb.enable&&"pc"===d(R).mode&&"filesystem"!==d(R).settings.app.routeBaseOn?(u(),b(o,{key:1},{default:h((()=>[m(g,{name:"breadcrumb"},{default:h((()=>[(u(!0),l(E,null,y(d(P),((e,t)=>{return u(),b(r,{key:e.path,to:t<d(P).length-1?(a=e.path,N(a)(C.params)):""},{default:h((()=>[w(T(e.title??"[ 无标题 ]"),1)])),_:2},1032,["to"]);var a})),128))])),_:1})])),_:1})):v("",!0)]),m(A)],2)}}}),[["__scopeId","data-v-ebe52c5a"]]);export{P as default};
