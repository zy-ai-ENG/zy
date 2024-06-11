
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as t,a as e}from"../main-f6406e21.js";import{d as a,E as s,o,c as i,A as l,F as n,L as r,K as d,j as p,H as u,U as m}from"../@vue_runtime-core@3.2.47/@vue_runtime-core@3.2.47.f65ce9b3.js";import{k as c,u as g}from"../@vue_reactivity@3.2.47/@vue_reactivity@3.2.47.e3514ec5.js";import{M as v,n as f,l as y}from"../@vue_shared@3.2.47/@vue_shared@3.2.47.0f451126.js";const _={key:0,class:"title-container"},h=a({name:"PageMain"}),k=e(a({...h,props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""},bottomPadding:{type:String,default:"0px"},bottomMargin:{type:String,default:"20px"}},setup(e){const a=e,h=!!s().title,k=c(a.collaspe);function b(){k.value=!1}return(a,s)=>{const c=t,j=m("el-icon");return o(),i("div",{class:f(["page-main",{"is-collaspe":g(k)}]),style:y({height:g(k)?e.height:"",paddingBottom:e.bottomPadding||"",marginBottom:e.bottomMargin||""})},[h||e.title?(o(),i("div",_,[h?l(a.$slots,"title",{key:0},void 0,!0):(o(),i(n,{key:1},[r(v(e.title),1)],64))])):d("",!0),l(a.$slots,"default",{},void 0,!0),g(k)?(o(),i("div",{key:1,class:"collaspe",title:"展开",onClick:b},[p(j,null,{default:u((()=>[p(c,{name:"ep:arrow-down"})])),_:1})])):d("",!0)],6)}}}),[["__scopeId","data-v-52fe3b17"]]);export{k as _};
