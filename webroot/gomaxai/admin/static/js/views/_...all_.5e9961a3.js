
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e,a as r,b as o}from"../main-f6406e21.js";import{o as s,u as t}from"../vue-router@4.1.6_vue@3.2.47/vue-router@4.1.6_vue@3.2.47.0dcda182.js";import{d as i,m as a,o as m,c as u,j as _,a as n,H as p,U as l,_ as v,$ as c,L as d}from"../@vue_runtime-core@3.2.47/@vue_runtime-core@3.2.47.f65ce9b3.js";import{k as j,u as y}from"../@vue_reactivity@3.2.47/@vue_reactivity@3.2.47.e3514ec5.js";import{M as h}from"../@vue_shared@3.2.47/@vue_shared@3.2.47.0f451126.js";import"../@element-plus_icons-vue@2.1.0_vue@3.2.47/@element-plus_icons-vue@2.1.0_vue@3.2.47.ac084a9d.js";import"../mitt@3.0.0/mitt@3.0.0.f0e54764.js";import"../@iconify_vue@4.1.1_vue@3.2.47/@iconify_vue@4.1.1_vue@3.2.47.f5d0ccbf.js";import"../eruda@3.0.0/eruda@3.0.0.b4351698.js";import"../copy-to-clipboard@3.3.3/copy-to-clipboard@3.3.3.e0d05bd3.js";import"../toggle-selection@1.0.6/toggle-selection@1.0.6.c563a038.js";import"../vconsole@3.15.0/vconsole@3.15.0.c5df0a73.js";import"../element-plus@2.3.4_vue@3.2.47/element-plus@2.3.4_vue@3.2.47.34526108.js";import"../lodash-es@4.17.21/lodash-es@4.17.21.4b0f838c.js";import"../@vueuse_core@9.13.0_vue@3.2.47/@vueuse_core@9.13.0_vue@3.2.47.c260552e.js";import"../@vueuse_shared@9.13.0_vue@3.2.47/@vueuse_shared@9.13.0_vue@3.2.47.5682e459.js";import"../@vue_runtime-dom@3.2.47/@vue_runtime-dom@3.2.47.439158bd.js";import"../@sxzz_popperjs-es@2.11.7/@sxzz_popperjs-es@2.11.7.b78c3215.js";import"../@ctrl_tinycolor@3.6.0/@ctrl_tinycolor@3.6.0.91de2ec7.js";import"../dayjs@1.11.7/dayjs@1.11.7.d5551305.js";import"../@vue_reactivity@3.3.0-beta.3/@vue_reactivity@3.3.0-beta.3.d2bad40d.js";import"../@vue_shared@3.3.0-beta.3/@vue_shared@3.3.0-beta.3.6870dbff.js";import"../async-validator@4.2.5/async-validator@4.2.5.cf877c1f.js";import"../memoize-one@6.0.0/memoize-one@6.0.0.63ab667a.js";import"../escape-html@1.0.3/escape-html@1.0.3.0dbb34ec.js";import"../normalize-wheel-es@1.2.0/normalize-wheel-es@1.2.0.3222b0a2.js";import"../@floating-ui_dom@1.2.7/@floating-ui_dom@1.2.7.88b7d3a9.js";import"../@floating-ui_core@1.2.6/@floating-ui_core@1.2.6.88778327.js";import"../hotkeys-js@3.10.2/hotkeys-js@3.10.2.e364e5e1.js";import"../pinia@2.0.35_typescript@5.0.4_vue@3.2.47/pinia@2.0.35_typescript@5.0.4_vue@3.2.47.2808d9ca.js";import"../vue-demi@0.14.7_vue@3.2.47/vue-demi@0.14.7_vue@3.2.47.71ba0ef2.js";import"../@codemirror_language-data@6.3.1_@codemirror_state@6.2.0_@codemirror_view@6.10.1_@lezer_common@1.0.2/@codemirror_language-data@6.3.1_@codemirror_state@6.2.0_@codemirror_view@6.10.1_@lezer_common@1.0.2.c8753240.js";import"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";import"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";import"../w3c-keyname@2.2.6/w3c-keyname@2.2.6.89c2fad7.js";import"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import"../path-browserify@1.0.1/path-browserify@1.0.1.2c28aad1.js";import"../echarts@5.4.2/echarts@5.4.2.80043e35.js";import"../tslib@2.3.0/tslib@2.3.0.a4e99503.js";import"../zrender@5.4.3/zrender@5.4.3.e2452002.js";import"../resize-observer-polyfill@1.5.1/resize-observer-polyfill@1.5.1.ad543aa3.js";import"../axios@1.4.0/axios@1.4.0.a8ee11a1.js";import"../@vueuse_integrations@10.1.2_axios@1.4.0_nprogress@0.2.0_vue@3.2.47/@vueuse_integrations@10.1.2_axios@1.4.0_nprogress@0.2.0_vue@3.2.47.f14b7780.js";import"../nprogress@0.2.0/nprogress@0.2.0.8c969ce6.js";import"../@vueuse_shared@10.1.2_vue@3.2.47/@vueuse_shared@10.1.2_vue@3.2.47.a4edebfd.js";const g=e=>(v("data-v-599b59df"),e=e(),c(),e),f={class:"notfound"},z={class:"content"},b=g((()=>n("h1",null,"404",-1))),w=g((()=>n("div",{class:"desc"}," 抱歉，你访问的页面不存在 ",-1))),x=i({__name:"[...all]",setup(r){const o=t(),i=j({inter:NaN,countdown:5});function v(){o.push("/")}return s((()=>{i.value.inter&&clearInterval(i.value.inter)})),a((()=>{i.value.inter=setInterval((()=>{i.value.countdown--,0===i.value.countdown&&(i.value.inter&&clearInterval(i.value.inter),v())}),1e3)})),(r,o)=>{const s=e,t=l("el-button");return m(),u("div",f,[_(s,{name:"404",class:"icon"}),n("div",z,[b,w,_(t,{type:"primary",onClick:v},{default:p((()=>[d(h(y(i).countdown)+" 秒后，返回首页 ",1)])),_:1})])])}}});"function"==typeof o&&o(x);const k=r(x,[["__scopeId","data-v-599b59df"]]);export{k as default};
