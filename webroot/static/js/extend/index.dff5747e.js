import{d as a,v as e,f as t,y as s,c as n,e as l,U as d,z as o,aF as i,i as r,K as c,j as u,l as m,cK as p,o as v,b3 as f}from"../main-f1d8f62a.js";const g={class:"w-full h-full relative"},h={class:"loading"},w=[f('<span class="loading-text-words">内</span><span class="loading-text-words">容</span><span class="loading-text-words">正</span><span class="loading-text-words">在</span><span class="loading-text-words">加</span><span class="loading-text-words">载</span><span class="loading-text-words">中</span>',7)],x=["src"],y=a({__name:"index",setup(a){const f=e(),y=t(),b=s(!1),E=n((()=>y.iframeUrl)),k=l(),L=n((()=>"dark"===k.theme));const I=n((()=>k.theme));function B(a){const{type:e,data:t}=a.data;"theme"===e&&k.setTheme("dark"===t?"dark":"light")}function U(a){document.getElementById("iframe").contentWindow.postMessage(a,"*")}function j(){U({type:"theme",data:I.value});const a=p();a&&U({type:"token",data:a}),b.value=!1}return d(I,(a=>{U({type:"theme",data:a})})),o((()=>{if(!E.value)return f.push("/");b.value=!0,function(){const a=document.getElementById("iframe");(null==a?void 0:a.addEventListener)||null==a||a.attachEvent("onload",j),null==a||a.addEventListener("load",j,!0)}(),window.addEventListener("message",B)})),i((()=>{y.updateIframeUrl("");const a=document.getElementById("iframe");null==a||a.removeEventListener("load",j),window.removeEventListener("message",B)})),(a,e)=>(v(),r("div",g,[b.value?(v(),r("div",{key:0,class:c(["main-container absolute left-0 right-0 bottom-0 top-0 backdrop-blur",[L.value?"dark:bg-black/20":"bg-white/80"]])},[u("div",h,[u("div",{class:c(["loading-text ",L.value?"text-[#fff]":"text-[#000]"]),id:"loading-text"},w,2)])],2)):m("",!0),u("iframe",{id:"iframe",src:E.value,style:{width:"100%",height:"100%",border:"none"}},null,8,x)]))}});export{y as default};
