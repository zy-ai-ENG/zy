import{d as e,y as a,e as t,f as s,c as n,g as l,cN as o,z as c,k as r,w as m,M as d,h as i,bW as u,o as y,n as p,i as v,K as x,m as f,a3 as k,bt as b,L as g,E as w}from"../main-848db7b0.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const h={key:0,class:"px-[20px]"},_={key:1,class:"text-xl"},A={key:0,class:"px-[20px]"},j=w(e({__name:"member",setup(e){const w=a({policyContent:"",policyTitle:""}),j=t();s();const C=a(!0);n((()=>"dark"===j.theme)),l();const T=n((()=>j.theme));return n((()=>w.value.policyContent?o(w.value.policyContent):"")),c((()=>{!async function(){const e=await u({keys:["memberAgreementTitle","memberAgreement"]}),{success:a,data:t}=e;C.value=!1,a&&(w.value=t)}()})),(e,a)=>(y(),r(i(g),{vertical:"",class:d("max-w-screen-2xl m-auto")},{default:m((()=>[p(i(b),{"header-style":{"text-align":"center"},"content-style":{"text-align":"justify"}},{header:m((()=>[C.value?(y(),v("div",h,[p(i(x),{text:"",width:"30%"})])):(y(),v("span",_,f(w.value.memberAgreementTitle),1))])),default:m((()=>[C.value?(y(),v("div",A,[p(i(x),{text:"",repeat:10})])):(y(),v("div",{key:1,style:k({background:"dark"===T.value?"#2c2c32":"#fff"}),class:"p-[20px] markdown-body markdown-body-generate overflow-y-auto overflow-x-hidden"},f(w.value.memberAgreement),5))])),_:1})])),_:1}))}}),[["__scopeId","data-v-61ac66ac"]]);export{j as default};
