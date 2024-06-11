
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{n as e}from"../nprogress@0.2.0/nprogress@0.2.0.8c969ce6.js";import{a as r,i as s}from"../@vueuse_shared@10.1.2_vue@3.2.47/@vueuse_shared@10.1.2_vue@3.2.47.a4edebfd.js";import{k as o}from"../@vue_reactivity@3.2.47/@vue_reactivity@3.2.47.e3514ec5.js";import{l as t,n as u}from"../@vue_runtime-core@3.2.47/@vue_runtime-core@3.2.47.f65ce9b3.js";function a(a=null,n){const v=o(a),i=t({set:r=>r?e.start():e.done(),get:()=>"number"==typeof v.value&&v.value<1});n&&e.configure(n);const l=e.set;return e.set=r=>(v.value=r,l.call(e,r)),u((()=>{"number"==typeof v.value&&s&&l.call(e,v.value)})),r(e.remove),{isLoading:i,progress:v,start:e.start,done:e.done,remove:()=>{v.value=null,e.remove()}}}export{a as u};
