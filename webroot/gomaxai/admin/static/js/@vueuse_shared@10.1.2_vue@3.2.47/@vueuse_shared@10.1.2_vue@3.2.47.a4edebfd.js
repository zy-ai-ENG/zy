
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{g as t,o as n,k as e,l as u,u as i}from"../@vue_reactivity@3.2.47/@vue_reactivity@3.2.47.e3514ec5.js";function a(e){return!!t()&&(n(e),!0)}function o(t){return"function"==typeof t?t():i(t)}const s="undefined"!=typeof window,l=()=>{};function r(t,n,i={}){const{immediate:l=!0}=i,r=e(!1);let c=null;function f(){c&&(clearTimeout(c),c=null)}function v(){r.value=!1,f()}function m(...e){f(),r.value=!0,c=setTimeout((()=>{r.value=!1,c=null,t(...e)}),o(n))}return l&&(r.value=!0,s&&m()),a(v),{isPending:u(r),start:m,stop:v}}export{a,s as i,l as n,o as t,r as u};
