import{d as a,v as e,f as t,y as s,c as n,e as l,V as d,z as o,aE as i,i as r,M as c,j as u,l as m,cJ as p,o as v,b2 as f}from"../main-83ca6c6a.js";const g={class:"w-full h-full relative"},h={class:"loading"},w=[f('<span class="loading-text-words">内</span><span class="loading-text-words">容</span><span class="loading-text-words">正</span><span class="loading-text-words">在</span><span class="loading-text-words">加</span><span class="loading-text-words">载</span><span class="loading-text-words">中</span>',7)],x=["src"],y=a({__name:"index",setup(a){const f=e(),y=t(),E=s(!1),b=n((()=>y.iframeUrl)),k=l(),L=n((()=>"dark"===k.theme));const I=n((()=>k.theme));function B(a){const{type:e,data:t}=a.data;"theme"===e&&k.setTheme("dark"===t?"dark":"light")}function j(a){document.getElementById("iframe").contentWindow.postMessage(a,"*")}function M(){j({type:"theme",data:I.value});const a=p();a&&j({type:"token",data:a}),E.value=!1}return d(I,(a=>{j({type:"theme",data:a})})),o((()=>{if(!b.value)return f.push("/");E.value=!0,function(){const a=document.getElementById("iframe");(null==a?void 0:a.addEventListener)||null==a||a.attachEvent("onload",M),null==a||a.addEventListener("load",M,!0)}(),window.addEventListener("message",B)})),i((()=>{y.updateIframeUrl("");const a=document.getElementById("iframe");null==a||a.removeEventListener("load",M),window.removeEventListener("message",B)})),(a,e)=>(v(),r("div",g,[E.value?(v(),r("div",{key:0,class:c(["main-container absolute left-0 right-0 bottom-0 top-0 backdrop-blur",[L.value?"dark:bg-black/20":"bg-white/80"]])},[u("div",h,[u("div",{class:c(["loading-text ",L.value?"text-[#fff]":"text-[#000]"]),id:"loading-text"},w,2)])],2)):m("",!0),u("iframe",{id:"iframe",src:b.value,style:{width:"100%",height:"100%",border:"none"}},null,8,x)]))}});export{y as default};
