import{d as e,y as a,e as t,f as s,c as l,g as n,cR as c,z as o,k as r,w as m,K as d,h as i,b_ as u,o as y,n as p,i as v,aH as x,m as f,a1 as k,bx as b,aI as g,E as w}from"../main-ef5ef38b.js";const h={key:0,class:"px-[20px]"},_={key:1,class:"text-xl"},A={key:0,class:"px-[20px]"},C=w(e({__name:"member",setup(e){const w=a({policyContent:"",policyTitle:""}),C=t();s();const T=a(!0);l((()=>"dark"===C.theme)),n();const j=l((()=>C.theme));return l((()=>w.value.policyContent?c(w.value.policyContent):"")),o((()=>{!async function(){const e=await u({keys:["memberAgreementTitle","memberAgreement"]}),{success:a,data:t}=e;T.value=!1,a&&(w.value=t)}()})),(e,a)=>(y(),r(i(g),{vertical:"",class:d("max-w-screen-2xl m-auto")},{default:m((()=>[p(i(b),{"header-style":{"text-align":"center"},"content-style":{"text-align":"justify"}},{header:m((()=>[T.value?(y(),v("div",h,[p(i(x),{text:"",width:"30%"})])):(y(),v("span",_,f(w.value.memberAgreementTitle),1))])),default:m((()=>[T.value?(y(),v("div",A,[p(i(x),{text:"",repeat:10})])):(y(),v("div",{key:1,style:k({background:"dark"===j.value?"#2c2c32":"#fff"}),class:"p-[20px] markdown-body markdown-body-generate overflow-y-auto overflow-x-hidden"},f(w.value.memberAgreement),5))])),_:1})])),_:1}))}}),[["__scopeId","data-v-61ac66ac"]]);export{C as default};
