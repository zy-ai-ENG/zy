import{d as e,y as a,e as s,f as t,c as n,g as c,cQ as l,z as o,k as r,w as i,M as d,h as u,bZ as v,o as y,n as p,i as x,aG as m,m as f,a2 as k,bx as g,aH as w,H as h}from"../main-1e3344b4.js";const _={key:0,class:"px-[20px]"},b={key:1,class:"text-xl"},A={key:0,class:"px-[20px]"},C=h(e({__name:"serviceAgreement",setup(e){const h=a({policyContent:"",policyTitle:""}),C=s();t();const j=a(!0);n((()=>"dark"===C.theme)),c();const H=n((()=>C.theme));return n((()=>h.value.policyContent?l(h.value.policyContent):"")),o((()=>{!async function(){const e=await v({keys:["serviceAgreement"]}),{success:a,data:s}=e;j.value=!1,a&&(h.value=s)}()})),(e,a)=>(y(),r(u(w),{vertical:"",class:d("max-w-screen-2xl m-auto")},{default:i((()=>[p(u(g),{"header-style":{"text-align":"center"},"content-style":{"text-align":"justify"}},{header:i((()=>[j.value?(y(),x("div",_,[p(u(m),{text:"",width:"30%"})])):(y(),x("span",b,f(h.value.serviceAgreement),1))])),default:i((()=>[j.value?(y(),x("div",A,[p(u(m),{text:"",repeat:10})])):(y(),x("div",{key:1,style:k({background:"dark"===H.value?"#2c2c32":"#fff"}),class:"p-[20px] markdown-body markdown-body-generate overflow-y-auto overflow-x-hidden"},f(h.value.serviceAgreement),5))])),_:1})])),_:1}))}}),[["__scopeId","data-v-6995271c"]]);export{C as default};