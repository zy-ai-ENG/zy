
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as t,O as a,r as e,h as s,o,c as l,N as i,S as n,l as d,t as p,J as r,b as c,e as g,f as m,G as u,H as f,_ as y,n as h}from"../main-0579ff80.js";const v={key:0,class:"title-container"},b=t({name:"PageMain"}),k=h(t({...b,props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""},bottomPadding:{type:String,default:"0px"},bottomMargin:{type:String,default:"20px"}},setup(t){const h=t,b=!!a().title,k=e(h.collaspe);function S(){k.value=!1}return(a,e)=>{const h=y,_=s("el-icon");return o(),l("div",{class:u(["page-main",{"is-collaspe":c(k)}]),style:f({height:c(k)?t.height:"",paddingBottom:t.bottomPadding||"",marginBottom:t.bottomMargin||""})},[b||t.title?(o(),l("div",v,[b?i(a.$slots,"title",{key:0},void 0,!0):(o(),l(n,{key:1},[d(p(t.title),1)],64))])):r("",!0),i(a.$slots,"default",{},void 0,!0),c(k)?(o(),l("div",{key:1,class:"collaspe",title:"展开",onClick:S},[g(_,null,{default:m((()=>[g(h,{name:"ep:arrow-down"})])),_:1})])):r("",!0)],6)}}}),[["__scopeId","data-v-52fe3b17"]]);export{k as _};
