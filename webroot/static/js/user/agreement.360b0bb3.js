import{d as e,y as a,e as t,f as s,c as n,g as l,cR as r,z as c,k as o,w as d,K as u,h as i,b_ as m,o as x,n as v,i as f,aG as y,m as g,a1 as p,bx as k,aH as w,E as h}from"../main-14a658dc.js";const _={key:0,class:"px-[20px]"},b={key:1,class:"text-xl"},T={key:0,class:"px-[20px]"},H=["innerHTML"],j=h(e({__name:"agreement",setup(e){const h=a({agreement:"",agreementTitle:""}),j=t();s();const L=a(!0),M=n((()=>"dark"===j.theme));l();const z=n((()=>j.theme)),E=n((()=>h.value.agreement?r(h.value.agreement):""));return c((()=>{!async function(){const e=await m({keys:["agreement","agreementTitle"]}),{success:a,data:t}=e;L.value=!1,a&&(h.value=t)}()})),(e,a)=>(x(),o(i(w),{vertical:"",class:u("max-w-screen-2xl m-auto")},{default:d((()=>[v(i(k),{"header-style":{"text-align":"center"},"content-style":{"text-align":"justify"}},{header:d((()=>[L.value?(x(),f("div",_,[v(i(y),{text:"",width:"30%"})])):(x(),f("span",b,g(h.value.agreementTitle),1))])),default:d((()=>[L.value?(x(),f("div",T,[v(i(y),{text:"",repeat:10})])):(x(),f("div",{key:1,class:u([[M.value?"text-[#fff]":"text-[#000]","pb-5"],"p-[20px] markdown-body markdown-body-generate overflow-y-auto overflow-x-hidden"]),style:p({background:"dark"===z.value?"#2c2c32":"#fff"}),innerHTML:E.value},null,14,H))])),_:1})])),_:1}))}}),[["__scopeId","data-v-f1ac3992"]]);export{j as default};