import{d as e,o as l,i as a,j as t,b as s,at as n,u as i,y as o,c as u,W as r,z as c,X as v,n as d,h as p,w as f,a3 as h,F as m,r as x,au as w,aO as g,R as y,ad as b,av as k,m as j,$ as E,B as $,_ as C,l as L}from"../main-34899ef4.js";import{t as I}from"../throttle/throttle.33f09de3.js";import{c as _}from"../index/index.a4f65e28.js";const z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},M=[t("path",{d:"M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)],F=e({name:"FlashOutline",render:function(e,t){return l(),a("svg",z,M)}}),A={class:"bg-[#E7ECF6] h-[100vh] overflow-hidden h-full p-4 pr-0 dark:bg-[#18181c] flex flex-col"},O={class:"p-4 flex pr-6 justify-between items-center"},U=t("div",{class:"font-bold text-xl"},"AI绘画广场",-1),B={class:"w-[200px] sm:w-[300px] flex justify-between"},P=t("span",{class:"hidden sm:block"},"尺寸调整",-1),R={class:"flex-1 ml-5"},T={class:"px-4 mb-6 pr-5"},W={class:"market overflow-y-scroll flex-1 min-h-screen bg-[#E7ECF6] p-4 dark:bg-[#18181c] relative"},D=["id"],H=["id","src","onLoad","onError","onClick"],N={class:"menu p-2 text-[#cbd5e1]"},X={class:"prompt"},q={class:"flex justify-between items-end"},G=["onClick"],J={class:"text-sm dark:text-slate-400"},K=e({__name:"index",setup(e){var z;const M=s(),K=null==(z=n())?void 0:z.appContext.config.globalProperties.$viewerApi,Q=i(),S=o([]),V=o({}),Y=o(0),Z=o(160),ee=o(0),le=o(10),ae=o(10),te=o([]),se=o(null),ne=o(0),ie=u((()=>M.isLogin)),oe=o(30),ue=o(""),re=u((()=>oe.value+le.value+150));function ce(){!function(){const{showName:e=0,showOther:l=0}={};Y.value=15*[e,l].filter((e=>e)).length}(),function(){if(!se.value)return;const e=se.value.clientWidth;ee.value=Math.floor(e/re.value);const l=e-ee.value*re.value,a=(ee.value-1)*le.value;l-a<0&&(ee.value-=1);Z.value=Math.floor((e-a)/ee.value)}();const e=ee.value,l=Z.value,a=[];ve.value.forEach(((t,s)=>{const{width:n,height:i}=t.fileInfo,o=i*(l/n)+ae.value+Y.value,u=V.value[t.id];if(a.length<e)u.style.top="0px",u.style.left=(l+le.value)*s+"px",a.push(o);else{const e=Math.min.apply(null,a),l=a.findIndex((l=>l===e));u.style.top=`${e+0}px`,u.style.left=l*(Z.value+le.value)+"px",a[l]+=o}})),ne.value=Math.max(...a)+130}const ve=u((()=>ue.value?S.value.filter((e=>{const{prompt:l}=e;return l.includes(ue.value)})):S.value));r(oe,(()=>{ce()}));let de=null;r(ve,(()=>{ve.value.length&&(clearTimeout(de),de=setTimeout((()=>{ce()}),300))}));const pe=u((()=>e=>{const{fileInfo:l}=e,{width:a,height:t}=l;return t/(a/Z.value)})),fe=I((function(){ce()}),200);return c((async()=>{await async function(){const e=await w({size:999,rec:1});S.value=e.data.rows}(),ce(),window.addEventListener("resize",fe)})),v((()=>{window.removeEventListener("resize",fe)})),(e,s)=>(l(),a("div",A,[t("div",O,[U,t("div",B,[P,t("div",R,[d(p(g),{value:oe.value,"onUpdate:value":s[0]||(s[0]=e=>oe.value=e),step:10},null,8,["value"])])])]),t("div",T,[d(p(b),{value:ue.value,"onUpdate:value":s[1]||(s[1]=e=>ue.value=e),placeholder:"prompt关键词搜索"},{prefix:f((()=>[d(p(y),{component:p(F)},null,8,["component"])])),_:1},8,["value"])]),t("div",W,[t("div",{id:"wapper",ref_key:"wapperRef",ref:se,class:"wapper",style:h({height:`${ne.value}px`})},[(l(!0),a(m,null,x(ve.value,((e,s)=>(l(),a("div",{id:e.id,key:s,ref_for:!0,ref:l=>function(e,l){e&&l&&(V.value[l.id]=e)}(l,e),class:"wapper-item",style:h({width:`${Z.value}px`})},[d(k,{name:"img",css:!0},{default:f((()=>[t("img",{id:e.id,class:"item-file rounded-sm",style:h({width:`${Z.value}px`,height:`${pe.value(e)}px`}),src:e.fileInfo.thumbImg,loading:"lazy",onLoad:l=>function(e,l){te.value.push(l.id)}(0,e),onError:l=>function(e,l){te.value.push(l.id)}(0,e),onClick:l=>function(e){const{fileInfo:l}=e,{cosUrl:a}=l;K({options:{},images:[a]})}(e)},null,44,H)])),_:2},1024),t("div",N,[t("div",X,j(e.fullPrompt),1),t("div",q,[E(j(e.createdAt)+" ",1),t("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:$((l=>function(e){if(!ie.value)return M.setLoginDialog(!0);const{prompt:l}=e;_({text:l}),Q.success("复制prompt成功")}(e)),["stop"])},[t("span",J,[d(p(C),{icon:"tabler:copy",class:"text-sm"})])],8,G)])]),te.value.includes(e.id)?L("",!0):(l(),a("div",{key:0,class:"item-loading",style:h({width:`${Z.value}px`,height:`${pe.value(e)}px`})},null,4))],12,D)))),128))],4)])]))}});export{K as default};
