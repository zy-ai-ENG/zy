import{d as e,y as a,e as t,f as s,c as l,g as o,cK as n,z as c,k as i,w as d,M as p,h as u,bS as y,o as r,n as v,i as x,K as f,m,a3 as k,br as b,L as w,E as h}from"../main-e1cb34e4.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const g={key:0,class:"px-[20px]"},_={key:1,class:"text-xl"},T={key:0,class:"px-[20px]"},C=["innerHTML"],j=h(e({__name:"policy",setup(e){const h=a({policyContent:"",policyTitle:""}),j=t();s();const L=a(!0),M=l((()=>"dark"===j.theme));o();const H=l((()=>j.theme)),K=l((()=>h.value.policyContent?n(h.value.policyContent):""));return c((()=>{!async function(){const e=await y({keys:["policyTitle","policyContent"]}),{success:a,data:t}=e;console.log(e),L.value=!1,a&&(h.value=t)}()})),(e,a)=>(r(),i(u(w),{vertical:"",class:p("max-w-screen-2xl m-auto")},{default:d((()=>[v(u(b),{"header-style":{"text-align":"center"},"content-style":{"text-align":"justify"}},{header:d((()=>[L.value?(r(),x("div",g,[v(u(f),{text:"",width:"30%"})])):(r(),x("span",_,m(h.value.policyTitle),1))])),default:d((()=>[L.value?(r(),x("div",T,[v(u(f),{text:"",repeat:10})])):(r(),x("div",{key:1,class:p([[M.value?"text-[#fff]":"text-[#000]","pb-5"],"p-[20px] markdown-body markdown-body-generate overflow-y-auto overflow-x-hidden"]),style:k({background:"dark"===H.value?"#2c2c32":"#fff"}),innerHTML:K.value},null,14,C))])),_:1})])),_:1}))}}),[["__scopeId","data-v-b60b864f"]]);export{j as default};
