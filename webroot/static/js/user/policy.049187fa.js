import{d as a,y as e,e as t,f as s,c as l,g as n,cR as o,z as c,k as i,w as d,K as u,h as y,b_ as p,o as r,n as x,i as v,aH as f,m as k,a1 as m,bx as b,aI as w,E as h}from"../main-ca72bb48.js";const _={key:0,class:"px-[20px]"},g={key:1,class:"text-xl"},T={key:0,class:"px-[20px]"},C=["innerHTML"],H=h(a({__name:"policy",setup(a){const h=e({policyContent:"",policyTitle:""}),H=t();s();const j=e(!0),I=l((()=>"dark"===H.theme));n();const L=l((()=>H.theme)),M=l((()=>h.value.policyContent?o(h.value.policyContent):""));return c((()=>{!async function(){const a=await p({keys:["policyTitle","policyContent"]}),{success:e,data:t}=a;console.log(a),j.value=!1,e&&(h.value=t)}()})),(a,e)=>(r(),i(y(w),{vertical:"",class:u("max-w-screen-2xl m-auto")},{default:d((()=>[x(y(b),{"header-style":{"text-align":"center"},"content-style":{"text-align":"justify"}},{header:d((()=>[j.value?(r(),v("div",_,[x(y(f),{text:"",width:"30%"})])):(r(),v("span",g,k(h.value.policyTitle),1))])),default:d((()=>[j.value?(r(),v("div",T,[x(y(f),{text:"",repeat:10})])):(r(),v("div",{key:1,class:u([[I.value?"text-[#fff]":"text-[#000]","pb-5"],"p-[20px] markdown-body markdown-body-generate overflow-y-auto overflow-x-hidden"]),style:m({background:"dark"===L.value?"#2c2c32":"#fff"}),innerHTML:M.value},null,14,C))])),_:1})])),_:1}))}}),[["__scopeId","data-v-b60b864f"]]);export{H as default};
