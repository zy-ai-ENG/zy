import{q as e,c as t,a as l,m as a,_ as i,b as s,d as o,e as n,f as c,g as r,h as d}from"./music.5560b724.js";import{S as u}from"../index/index.148d492c.js";import{d as p,u as m,v,e as x,c as g,g as f,y,i as k,h,k as b,l as C,j as I,n as B,F as N,r as F,$ as E,m as w,o as A,az as T,_ as U,M as j,C as D,D as L,aD as O,E as _}from"../main-444444e7.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const S=e=>(D("data-v-79aba749"),e=e(),L(),e),R={class:"bg-[#f4f4f4] dark:bg-[#020104] musicBody"},q={class:"mainBox"},z={key:0,class:"videoBox"},G={style:{width:"504px",height:"756px","border-radius":"8px",position:"relative"},class:"bg-[#E5EDFE] dark:bg-[#0A182F]"},M=["src"],$={class:"control"},H={class:"musicSquareTitle bg-[#fff] dark:bg-[#15171A] border-[1px] border-b dark:border-[#020104] border-[transparent]"},J=S((()=>I("div",{style:{"margin-left":"4px"}},"音乐广场",-1))),K={class:"contentBox bg-[#fff] dark:bg-[#15171A]"},P={class:"tabBox"},Q=["onClick"],V={class:"content"},W={class:"itemTop bg-[#fff] dark:bg-[#0A182F]"},X=["src"],Y={class:"topTitle"},Z={class:"title"},ee={class:"intro"},te={key:0,class:"itemBottomDark"},le={class:"iconBox"},ae={style:{"margin-left":"4px"}},ie={class:"iconBox"},se={style:{"margin-left":"4px"}},oe={class:"iconBox",style:{position:"relative"}},ne={key:0,class:"operationBox bg-[#fff] dark:bg-[#15171A]"},ce=["onClick"],re=S((()=>I("div",null,"下载视频",-1))),de=["onClick"],ue=S((()=>I("div",null,"下载音频",-1))),pe=["onClick"],me=S((()=>I("div",null,"删除",-1))),ve={key:1,class:"itemBottomLight"},xe={class:"iconBox"},ge={style:{"margin-left":"4px"}},fe={class:"iconBox"},ye={style:{"margin-left":"4px"}},ke={class:"iconBox",style:{position:"relative"}},he={key:0,class:"operationBox bg-[#fff] dark:bg-[#15171A]"},be={class:"operationItem",style:{display:"flex"}},Ce=S((()=>I("div",null,"下载视频",-1))),Ie={class:"operationItem",style:{display:"flex"}},Be=S((()=>I("div",null,"下载音频",-1))),Ne=["onClick"],Fe=S((()=>I("div",null,"删除",-1))),Ee={class:"end text-[#A3A5A6] dark:text-[#76777A]"},we=["href"],Ae=["href"],Te=_(p({__name:"musicSquare",setup(p){const D=m();let L=null;v();const _=x(),S=g((()=>"dark"===_.theme)),{isMobile:Te}=f(),Ue=y([{name:"最新歌曲",key:0},{name:"流行趋势",key:1}]),je=y(0),De=y([]);qe(),e({modelType:"music"}).then((e=>{0!=e.data.length?localStorage.setItem("musicGroupId",e.data[0].id):0==e.data.length&&t({modelType:"music"}).then((e=>{localStorage.setItem("musicGroupId",e.data.id)}))}));const Le=y(""),Oe=y(""),_e=y(""),Se=y(""),Re=y("");function qe(e){let t={};t=e?{size:999,page:1,order:e}:{size:999,page:1},a(t).then((e=>{const{records:t}=e.data;let l=t.filter((e=>e.text)).filter((e=>-1!=e.text.indexOf("http")&&-1!=e.text.indexOf("Chorus")));console.log(l);for(let a=0;a<l.length;a++){let e=l[a].text.split("🎵")[1].split("\n")[0],t=l[a].text.split("🎵")[1].split("[Chorus]")[1].split("[")[0];-1!=t.indexOf("mv")&&(t=t.split("mv")[0]);let i=l[a].text.split("🎵").pop().split("!")[1];l[a].image=i.split("](")[1].split(")")[0],l[a].mp3=i.split("](")[2].split(")")[0],l[a].mp4=i.split("](")[3].split(")")[0],l[a].title=e,l[a].intro=t,l[a].operation=!1}De.value=l,console.log(De.value)}))}l({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]}).then((e=>{Le.value=e.data.copyrightTitle,Oe.value=e.data.icpNumber,_e.value=e.data.policeFilingNumber,Se.value=e.data.icpUrl,Re.value=e.data.policeFilingUrl}));const ze=y(1);function Ge(e){let t={chatLogId:e.chatId,action:"agree",type:"music"};0!=ze.value&&(ze.value=0,d(t).then((t=>{e.agree?De.value.forEach((t=>{t.chatId==e.chatId&&(t.agree=null,t.agreeNum--)})):De.value.forEach((t=>{t.chatId==e.chatId&&(t.agree="agree",t.agreeNum++)})),ze.value=1})))}const Me=y(""),$e=y(!0);function He(){const e=document.getElementById("video");$e.value?($e.value=!1,e.pause()):($e.value=!0,e.play())}function Je(e){Me.value=e.mp4;let t={recoredId:e.chatId};e.playNum++,c(t).then((e=>{console.log(e)}))}function Ke(e){let t=[];De.value.forEach((e=>{t=[...t,e.mp4]}));let l=t.indexOf(Me.value);if(0==e){if(0==l)return;l--,Me.value=t[l]}else if(1==e){if(l==t.length-1)return;l++,Me.value=t[l]}console.log(l)}const Pe=y(!1);function Qe(e){e.operation=!0,Pe.value=!0}function Ve(){L&&(L.destroy(),L=null)}function We(e,t){let l="/api";if(L||(L=D.loading("下载中，请稍等",{duration:0})),"mp4"==t){Xe();let t=e.mp4.split("/").pop();O.get(l+"/proxy/down",{responseType:"blob",params:{url:e.mp4}}).then((e=>{const l=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=l,a.setAttribute("download",t),a.click(),Ve(),D.success("下载成功")}))}else if("mp3"==t){Xe();let t=e.mp3.split("/").pop();O.get(l+"/proxy/down",{responseType:"blob",params:{url:e.mp3}}).then((e=>{const l=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=l,a.setAttribute("download",t),a.click(),Ve(),D.success("下载成功")}))}}function Xe(){Pe.value=!1,De.value.forEach((e=>{e.operation=!1}))}function Ye(e){let t={id:e.chatId};Xe(),r(t).then((t=>{D.success("删除成功"),De.value=De.value.filter((t=>t.chatId!=e.chatId))}))}return(e,t)=>(A(),k("div",R,[h(Te)?C("",!0):(A(),b(u,{key:0,sideType:1})),Pe.value?(A(),k("div",{key:1,class:"mask",onClick:Xe})):C("",!0),I("div",q,[Me.value?(A(),k("div",z,[I("div",G,[B(T)]),I("video",{class:"video",autoplay:"",id:"video",loop:"",src:Me.value},null,8,M),B(h(U),{icon:"icon-park-solid:close-one",class:"text-xl text-[#fff] text-center icon",onClick:t[0]||(t[0]=e=>Me.value="")}),I("div",$,[I("img",{class:"controlItem",style:{cursor:"pointer"},src:i,alt:"",onClick:t[1]||(t[1]=e=>Ke(0))}),$e.value?(A(),k("img",{key:0,class:"controlItem",src:s,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:He})):C("",!0),$e.value?C("",!0):(A(),k("img",{key:1,class:"controlItem",src:o,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:He})),I("img",{class:"controlItem",style:{cursor:"pointer"},src:n,alt:"",onClick:t[2]||(t[2]=e=>Ke(1))})])])):C("",!0),I("div",H,[B(h(U),{icon:"akar-icons:music-album",class:"text-xl text-center"}),J]),I("div",K,[I("div",P,[(A(!0),k(N,null,F(Ue.value,((e,t)=>(A(),k("div",{class:j([je.value==t?"bg-[#3378ED] text-[#fff]":"bg-[#F4F4F4] dark:bg-[#010102]","tabItem"]),onClick:e=>{return l=t,je.value=l,void(0==l?qe():1==l&&qe("agreeNum"));var l},key:e.key},w(e.name),11,Q)))),128))]),I("div",V,[(A(!0),k(N,null,F(De.value,(e=>(A(),k("div",{class:"contentItem",key:e.chatId},[I("div",W,[I("img",{class:"topImg",src:e.image,alt:""},null,8,X),I("div",Y,[I("div",Z,w(""==e.title?"匿名":e.title),1),I("div",ee,w(e.intro),1)])]),S.value?(A(),k("div",te,[I("div",le,[B(h(U),{icon:"gridicons:play",class:"text-xl text-center icon",onClick:t=>Je(e)},null,8,["onClick"]),I("div",ae,w(e.playNum?e.playNum:0),1)]),I("div",ie,["agree"==e.agree?(A(),b(h(U),{key:0,icon:"iconamoon:like-fill",class:"text-xl text-center icon",onClick:t=>Ge(e)},null,8,["onClick"])):(A(),b(h(U),{key:1,icon:"iconamoon:like-light",class:"text-xl text-center icon",onClick:t=>Ge(e)},null,8,["onClick"])),I("div",se,w(e.agreeNum?e.agreeNum:0),1)]),I("div",oe,[B(h(U),{icon:"ri:more-line",class:"text-xl text-center icon",onClick:t=>Qe(e)},null,8,["onClick"]),e.operation?(A(),k("div",ne,[I("div",{class:"operationItem",style:{display:"flex"},onClick:t=>We(e,"mp4")},[B(h(U),{icon:"gravity-ui:video",style:{"margin-right":"5px"},class:"text-xl text-center"}),re],8,ce),I("div",{class:"operationItem",style:{display:"flex"},onClick:t=>We(e,"mp3")},[B(h(U),{icon:"fluent:headphones-sound-wave-24-filled",style:{"margin-right":"5px"},class:"text-xl text-center"}),ue],8,de),I("div",{class:"operationItem",style:{display:"flex",color:"#FF5E55"},onClick:t=>Ye(e)},[B(h(U),{icon:"mi:delete",style:{"margin-right":"5px"},class:"text-xl text-center"}),me],8,pe)])):C("",!0)])])):(A(),k("div",ve,[I("div",xe,[B(h(U),{icon:"gridicons:play",class:"text-xl text-center icon",onClick:t=>Je(e)},null,8,["onClick"]),I("div",ge,w(e.playNum?e.playNum:0),1)]),I("div",fe,[e.agree?(A(),b(h(U),{key:0,icon:"iconamoon:like-fill",class:"text-xl text-center icon",onClick:t=>Ge(e)},null,8,["onClick"])):(A(),b(h(U),{key:1,icon:"iconamoon:like-light",class:"text-xl text-center icon",onClick:t=>Ge(e)},null,8,["onClick"])),I("div",ye,w(e.agreeNum?e.agreeNum:0),1)]),I("div",ke,[B(h(U),{icon:"ri:more-line",class:"text-xl text-center icon",onClick:t=>Qe(e)},null,8,["onClick"]),e.operation?(A(),k("div",he,[I("div",be,[B(h(U),{icon:"gravity-ui:video",style:{"margin-right":"5px"},class:"text-xl text-center"}),Ce]),I("div",Ie,[B(h(U),{icon:"fluent:headphones-sound-wave-24-filled",style:{"margin-right":"5px"},class:"text-xl text-center"}),Be]),I("div",{class:"operationItem",style:{display:"flex",color:"#FF5E55"},onClick:t=>Ye(e)},[B(h(U),{icon:"mi:delete",style:{"margin-right":"5px"},class:"text-xl text-center"}),Fe],8,Ne)])):C("",!0)])]))])))),128))]),I("div",Ee,[E("版权所有 © "+w(Le.value)+" ",1),I("a",{href:Se.value||"#"},[I("a",{href:Re.value||"#"},w(_e.value),9,Ae),E(w(Oe.value),1)],8,we)])])])]))}}),[["__scopeId","data-v-79aba749"]]);export{Te as default};
