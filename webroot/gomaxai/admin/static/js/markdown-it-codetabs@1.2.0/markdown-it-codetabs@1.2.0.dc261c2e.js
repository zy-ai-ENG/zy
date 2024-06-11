
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{g as n}from"../copy-to-clipboard@3.3.3/copy-to-clipboard@3.3.3.e0d05bd3.js";const e=n((function(n,e){var r=n.renderer.rules.fence,i=n.utils.unescapeAll,l=/\[(\w*)(?::([\w ]*))?\]/;function o(n){return n.info?i(n.info).trim():""}function t(n){var e=o(n),[r=null,i=""]=(l.exec(e)||[]).slice(1);return[r,i]}function u(n){var e=o(n);return e?e.split(/(\s+)/g)[0]:""}n.renderer.rules.fence=function(n,e,i,o,c){if(n[e].hidden)return"";const[a,p]=t(n[e]);if(null===a)return r(n,e,i,o,c);var s,f,d,b,$="",g="";for(let v=e;v<n.length&&(s=n[v],[f,d]=t(s),f===a);v++)s.info=s.info.replace(l,""),s.hidden=!0,$+=`<li><input type="radio" name="label-group-${e}"${b=v-e>0?"":" checked"}><label for="group-${e}-tab-${v-e}" onclick="this.previousElementSibling.click()">${d||u(s)}</label></li>\n`,g+=`<input type="radio" id="group-${e}-tab-${v-e}" name="group-${e}"${b}>\n`+r(n,v,i,o,c);return'<div class="code-tabs">\n<ul>\n'+$+"</ul>\n"+g+"</div>"}}));export{e as q};
