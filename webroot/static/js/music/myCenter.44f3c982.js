import{n as e,a as l,_ as t,b as a,d as i,e as s,h as o,f as n,g as c}from"./music.5560b724.js";import{_ as r,a as d,b as u,c as p,d as g}from"../unthumbs1/unthumbs1.60163221.js";import{S as m}from"../index/index.148d492c.js";import{d as v,u as f,v as h,g as x,y,i as k,l as b,j as C,n as I,h as A,k as E,F as w,r as F,$ as _,m as B,o as O,az as U,_ as j,C as L,D as N,aD as T,E as R}from"../main-444444e7.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const D=e=>(L("data-v-f42a95b0"),e=e(),N(),e),P={class:"bg-[#f4f4f4] dark:bg-[#020104] musicBody"},z={key:1,class:"videoBox"},M={style:{width:"504px",height:"756px","border-radius":"8px",position:"relative"},class:"bg-[#E5EDFE] dark:bg-[#0A182F]"},S=["src"],V={class:"control"},G={class:"myCreate bg-[#fff] dark:bg-[#15171A]"},H={class:"myCreateTop"},$=D((()=>C("div",{style:{"margin-left":"4px"}},"我的创作",-1))),q=D((()=>C("div",{style:{width:"100%",height:"2px"},class:"bg-[#fff] dark:bg-[#010102]"},null,-1))),J={class:"myCreateMain"},K={class:"mainLeft"},Q=["onClick","src"],W={key:1,style:{width:"108px",height:"108px","border-radius":"8px"},src:g,alt:""},X={class:"itemInfo"},Y={class:"info"},Z=D((()=>C("div",{style:{width:"30px",height:"18px","border-radius":"16px","text-align":"center",color:"#34C759"},class:"bg-[#EBF9EE] dark:bg-[#175A28]"},"V3",-1))),ee={style:{margin:"6px 0"}},le={class:"operation"},te=["onClick"],ae=["onClick"],ie=["onClick"],se=["onClick"],oe={class:"iconBox",style:{position:"relative"}},ne={key:0,class:"operationBox bg-[#fff] dark:bg-[#15171A]"},ce=["onClick"],re=D((()=>C("div",null,"下载视频",-1))),de=["onClick"],ue=D((()=>C("div",null,"下载音频",-1))),pe=["onClick"],ge=D((()=>C("div",null,"删除",-1))),me={class:"end text-[#A3A5A6] dark:text-[#76777A]"},ve=["href"],fe=["href"],he=R(v({__name:"myCenter",setup(g){let v=null;const L=f();h();const{isMobile:N}=x(),R=y();e({page:1,size:999}).then((e=>{const{records:l}=e.data;let t=l.filter((e=>e.text));console.log(1,t);let a=t.filter((e=>-1!=e.text.indexOf("http")&&-1!=e.text.indexOf("Chorus")||-1!=e.text.indexOf("生成中")));console.log(a);for(let i=0;i<a.length;i++)if(-1!=a[i].text.indexOf("http")&&-1!=a[i].text.indexOf("Chorus")){let e=a[i].text.split("🎵")[1].split("\n")[0],l=a[i].text.split("🎵")[1].split("[Chorus]")[1].split("[")[0];-1!=l.indexOf("mv")&&(l=l.split("mv")[0]);let t=a[i].text.split("🎵").pop().split("!")[1];a[i].image=t.split("](")[1].split(")")[0],a[i].mp3=t.split("](")[2].split(")")[0],a[i].mp4=t.split("](")[3].split(")")[0],a[i].title=e,a[i].intro=l,a[i].operation=!1}else a[i].image=null,a[i].mp3=null,a[i].mp4=null;R.value=a,console.log(R.value)}));const D=y(""),he=y(""),xe=y(""),ye=y(""),ke=y("");l({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]}).then((e=>{D.value=e.data.copyrightTitle,he.value=e.data.icpNumber,xe.value=e.data.policeFilingNumber,ye.value=e.data.icpUrl,ke.value=e.data.policeFilingUrl}));const be=y(1);function Ce(e,l){if(0==l){let l={chatLogId:e.chatId,action:"agree",type:"music"};if(0==be.value)return;be.value=0,o(l).then((l=>{"agree"==e.agree?R.value.forEach((l=>{l.chatId==e.chatId&&(l.agree=null,l.agreeNum--)})):(null==e.agree||"disAgree"==e.agree)&&R.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="agree",l.agreeNum++)})),be.value=1}))}else if(1==l){let l={chatLogId:e.chatId,action:"disAgree",type:"music"};if(0==be.value)return;be.value=0,o(l).then((l=>{console.log(R.value),"agree"==e.agree?R.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="disAgree",l.agreeNum--)})):null==e.agree?R.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="disAgree")})):"disAgree"==e.agree&&R.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="null")})),be.value=1}))}}const Ie=y(!1);function Ae(){v&&(v.destroy(),v=null)}function Ee(e,l){let t={}.VITE_APP_API_BASE_URL;if(v||(v=L.loading("下载中，请稍等",{duration:0})),"mp4"==l){let l=e.mp4.split("/").pop();Oe(),T.get(t+"/proxy/down",{responseType:"blob",params:{url:e.mp4}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",l),a.click(),Ae(),L.success("下载成功")}))}else if("mp3"==l){let l=e.mp3.split("/").pop();Oe(),T.get(t+"/proxy/down",{responseType:"blob",params:{url:e.mp3}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",l),a.click(),Ae(),L.success("下载成功")}))}}const we=y(""),Fe=y(!0);function _e(){const e=document.getElementById("video");Fe.value?(Fe.value=!1,e.pause()):(Fe.value=!0,e.play())}function Be(e){let l=[];R.value.filter((e=>null!=e.mp4)).forEach((e=>{l=[...l,e.mp4]}));let t=l.indexOf(we.value);if(0==e){if(0==t)return;t--,we.value=l[t]}else if(1==e){if(t==l.length-1)return;t++,we.value=l[t]}console.log(t)}function Oe(){Ie.value=!1,R.value.forEach((e=>{e.operation=!1}))}return(e,l)=>(O(),k("div",P,[Ie.value?(O(),k("div",{key:0,class:"mask",onClick:Oe})):b("",!0),we.value?(O(),k("div",z,[C("div",M,[I(U)]),C("video",{class:"video",autoplay:"",id:"video",loop:"",src:we.value},null,8,S),I(A(j),{icon:"icon-park-solid:close-one",class:"text-xl text-[#fff] text-center icon",onClick:l[0]||(l[0]=e=>we.value="")}),C("div",V,[C("img",{class:"controlItem",style:{cursor:"pointer"},src:t,alt:"",onClick:l[1]||(l[1]=e=>Be(0))}),Fe.value?(O(),k("img",{key:0,class:"controlItem",src:a,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:_e})):b("",!0),Fe.value?b("",!0):(O(),k("img",{key:1,class:"controlItem",src:i,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:_e})),C("img",{class:"controlItem",style:{cursor:"pointer"},src:s,alt:"",onClick:l[2]||(l[2]=e=>Be(1))})])])):b("",!0),A(N)?b("",!0):(O(),E(m,{key:2,sideType:1})),C("div",G,[C("div",H,[I(A(j),{icon:"icomoon-free:file-music",class:"text-xl text-center"}),$]),q,C("div",J,[C("div",K,[(O(!0),k(w,null,F(R.value,((e,l)=>(O(),k("div",{class:"mainItem dark:bg-[#0A182F] bg-[#F5F8FE]",key:l},[e.image?(O(),k("img",{key:0,style:{width:"108px",height:"108px","border-radius":"8px"},onClick:l=>function(e){we.value=e.mp4;let l={recoredId:e.chatId};e.playNum++,n(l).then((e=>{console.log(e)}))}(e),src:e.image,alt:""},null,8,Q)):b("",!0),e.image?b("",!0):(O(),k("img",W)),C("div",X,[C("div",Y,[Z,C("div",ee,B(e.title?e.title:"匿名"),1),C("div",null,B(e.intro),1)]),C("div",le,["agree"!=e.agree?(O(),k("img",{key:0,class:"icon",onClick:l=>Ce(e,0),src:r,alt:""},null,8,te)):b("",!0),"agree"==e.agree?(O(),k("img",{key:1,class:"icon",onClick:l=>Ce(e,0),src:d,alt:""},null,8,ae)):b("",!0),"disAgree"!=e.agree?(O(),k("img",{key:2,class:"icon",onClick:l=>Ce(e,1),src:u,alt:""},null,8,ie)):b("",!0),"disAgree"==e.agree?(O(),k("img",{key:3,class:"icon",onClick:l=>Ce(e,1),src:p,alt:""},null,8,se)):b("",!0),C("div",oe,[I(A(j),{icon:"ri:more-line",class:"text-xl text-center icon",onClick:l=>function(e){e.operation=!0,Ie.value=!0}(e)},null,8,["onClick"]),e.operation?(O(),k("div",ne,[C("div",{class:"operationItem",style:{display:"flex"},onClick:l=>Ee(e,"mp4")},[I(A(j),{icon:"gravity-ui:video",style:{"margin-right":"5px"},class:"text-xl text-center"}),re],8,ce),C("div",{class:"operationItem",style:{display:"flex"},onClick:l=>Ee(e,"mp3")},[I(A(j),{icon:"fluent:headphones-sound-wave-24-filled",style:{"margin-right":"5px"},class:"text-xl text-center"}),ue],8,de),C("div",{class:"operationItem",style:{display:"flex",color:"#FF5E55"},onClick:l=>function(e){let l={id:e.chatId};Oe(),c(l).then((l=>{L.success("删除成功"),R.value=R.value.filter((l=>l.chatId!=e.chatId))}))}(e)},[I(A(j),{icon:"mi:delete",style:{"margin-right":"5px"},class:"text-xl text-center"}),ge],8,pe)])):b("",!0)])])])])))),128))])]),C("div",me,[_("版权所有 © "+B(D.value)+" ",1),C("a",{href:ye.value||"#"},[C("a",{href:ke.value||"#"},B(xe.value),9,fe),_(B(he.value),1)],8,ve)])])]))}}),[["__scopeId","data-v-f42a95b0"]]);export{he as default};
