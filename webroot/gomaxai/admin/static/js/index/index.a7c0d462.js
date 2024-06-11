
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as e}from"../config/config.f8de71c3.js";import{d as i,r as a,G as l,y as t,o as r,c as s,b as n,f as c,g as o,e as p,K as g,h as m,t as y,j as u,q as f}from"../main-646ffc07.js";const b={class:"copy-container"},d={class:"agreement"},h={key:0,style:{margin:"0 4px"}},N={style:{color:"#9FA3B8"}},T={key:0},k=["href"],_={key:1},F=["href"],U=i({name:"Copyright"}),j=f(i({...U,setup(i){a({copyrightTitle:"GoMaxAiAdmin",copyrightUrl:"/"});const f=l({agreementTitle:"",policyTitle:"",filingNumber:"",companyName:""});return t((()=>{!async function(){const i=await e.copyright({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]});i.success&&Object.assign(f,i.data)}()})),(e,i)=>{const a=u("router-link");return r(),s("div",b,[n("div",null,[n("p",d,[c(a,{to:"/agreement",target:"_blank"},{default:o((()=>[n("span",null,y(p(f).agreementTitle||""),1)])),_:1}),p(f).policyTitle?(r(),s("span",h,"|")):g("",!0),c(a,{to:"/policy",target:"_blank"},{default:o((()=>[n("span",null,y(p(f).policyTitle),1)])),_:1})])]),n("div",N,[n("p",null,[m("版权所有 © "+y(p(f).copyrightTitle)+" ",1),p(f).icpNumber?(r(),s("span",T,[n("a",{href:p(f).icpUrl||"#"},y(p(f).icpNumber),9,k)])):g("",!0),p(f).policeFilingNumber?(r(),s("span",_,[n("a",{href:p(f).policeFilingUrl||"#"},y(p(f).policeFilingNumber),9,F)])):g("",!0)])])])}}}),[["__scopeId","data-v-d8419f38"]]);export{j as _};
