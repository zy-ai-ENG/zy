import{d as a,y as e,e as t,f as s,c as l,g as n,cP as o,z as c,k as i,w as d,K as u,h as y,bY as p,o as r,n as v,i as x,aF as f,m as k,a0 as m,bw as w,aG as b,E as h}from"../main-4e4d4648.js";const g={key:0,class:"px-[20px]"},_={key:1,class:"text-xl"},T={key:0,class:"px-[20px]"},C=["innerHTML"],j=h(a({__name:"policy",setup(a){const h=e({policyContent:"",policyTitle:""}),j=t();s();const H=e(!0),L=l((()=>"dark"===j.theme));n();const M=l((()=>j.theme)),z=l((()=>h.value.policyContent?o(h.value.policyContent):""));return c((()=>{!async function(){const a=await p({keys:["policyTitle","policyContent"]}),{success:e,data:t}=a;console.log(a),H.value=!1,e&&(h.value=t)}()})),(a,e)=>(r(),i(y(b),{vertical:"",class:u("max-w-screen-2xl m-auto")},{default:d((()=>[v(y(w),{"header-style":{"text-align":"center"},"content-style":{"text-align":"justify"}},{header:d((()=>[H.value?(r(),x("div",g,[v(y(f),{text:"",width:"30%"})])):(r(),x("span",_,k(h.value.policyTitle),1))])),default:d((()=>[H.value?(r(),x("div",T,[v(y(f),{text:"",repeat:10})])):(r(),x("div",{key:1,class:u([[L.value?"text-[#fff]":"text-[#000]","pb-5"],"p-[20px] markdown-body markdown-body-generate overflow-y-auto overflow-x-hidden"]),style:m({background:"dark"===M.value?"#2c2c32":"#fff"}),innerHTML:z.value},null,14,C))])),_:1})])),_:1}))}}),[["__scopeId","data-v-b60b864f"]]);export{j as default};