import{_ as e,a as l,b as t,c as a}from"../end/end.08128031.js";import{S as i}from"../index/index.7fbd374b.js";import{d as o,u as s,v as n,e as c,c as r,g as u,y as d,i as p,h as v,k as m,l as x,j as g,n as f,F as y,r as k,$ as h,m as b,o as C,az as I,_ as B,M as N,C as F,D as w,aD as E,E as A}from"../main-848db7b0.js";import{q as T,c as j,a as U,m as _,b as D,d as L}from"./music.6c9b03af.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const O=e=>(F("data-v-ea9cd969"),e=e(),w(),e),S={class:"bg-[#f4f4f4] dark:bg-[#020104] musicBody"},R={class:"mainBox"},q={key:0,class:"videoBox"},z={style:{width:"504px",height:"756px","border-radius":"8px",position:"relative"},class:"bg-[#E5EDFE] dark:bg-[#0A182F]"},H=["src"],G={class:"control"},M={class:"musicSquareTitle bg-[#fff] dark:bg-[#15171A] border-[1px] border-b dark:border-[#020104] border-[transparent]"},$=O((()=>g("div",{style:{"margin-left":"4px"}},"音乐广场",-1))),J={class:"contentBox bg-[#fff] dark:bg-[#15171A]"},K={class:"tabBox"},P=["onClick"],Q={class:"itemTop bg-[#F5F8FE] dark:bg-[#0A182F]"},V=["src"],W={class:"topTitle"},X={class:"title"},Y={class:"intro"},Z={key:0,class:"itemBottomDark"},ee={class:"iconBox"},le={style:{"margin-left":"4px"}},te={class:"iconBox"},ae={style:{"margin-left":"4px"}},ie={class:"iconBox",style:{position:"relative"}},oe={key:0,class:"operationBox bg-[#fff] dark:bg-[#15171A]"},se=["onClick"],ne=O((()=>g("div",null,"下载视频",-1))),ce=["onClick"],re=O((()=>g("div",null,"下载音频",-1))),ue={key:1,class:"itemBottomLight"},de={class:"iconBox"},pe={style:{"margin-left":"4px"}},ve={class:"iconBox"},me={style:{"margin-left":"4px"}},xe={class:"iconBox",style:{position:"relative"}},ge={key:0,class:"operationBox bg-[#fff] dark:bg-[#15171A]"},fe={class:"operationItem",style:{display:"flex"}},ye=O((()=>g("div",null,"下载视频",-1))),ke={class:"operationItem",style:{display:"flex"}},he=O((()=>g("div",null,"下载音频",-1))),be={class:"end text-[#A3A5A6] dark:text-[#76777A]"},Ce=["href"],Ie=["href"],Be=A(o({__name:"musicSquare",setup(o){const F=s();let w=null;n();const A=c(),O=r((()=>"dark"===A.theme)),{isMobile:Be}=u(),Ne=d([{name:"最新歌曲",key:0},{name:"流行趋势",key:1}]),Fe=d(0),we=d(1),Ee=d(),Ae=d(""),Te=d([]);Oe(),T({modelType:"music"}).then((e=>{0!=e.data.length?localStorage.setItem("musicGroupId",e.data[0].id):0==e.data.length&&j({modelType:"music"}).then((e=>{localStorage.setItem("musicGroupId",e.data.id)}))}));const je=d(""),Ue=d(""),_e=d(""),De=d(""),Le=d("");function Oe(e){w||(w=F.loading("数据加载中",{duration:0}));let l={};l=e?{size:30,page:we.value,order:e}:{size:30,page:we.value},console.log(l),_(l).then((e=>{Ee.value=e.data.count;const{records:l}=e.data;let t=l.filter((e=>e.text)).filter((e=>-1!=e.text.indexOf("http")&&-1!=e.text.indexOf("Chorus")));for(let a=0;a<t.length;a++){let e=t[a].text.split("🎵")[1].split("\n")[0],l=t[a].text.split("🎵")[1].split("[Chorus]")[1].split("[")[0];-1!=l.indexOf("mv")&&(l=l.split("mv")[0]);let i=t[a].text.split("🎵").pop().split("!")[1];t[a].image=i.split("](")[1].split(")")[0],t[a].mp3=i.split("](")[2].split(")")[0],t[a].mp4=i.split("](")[3].split(")")[0],t[a].title=e,t[a].intro=l,t[a].operation=!1}Te.value=[...Te.value,...t],Ke(),console.log(Te.value)}))}U({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]}).then((e=>{je.value=e.data.copyrightTitle,Ue.value=e.data.icpNumber,_e.value=e.data.policeFilingNumber,De.value=e.data.icpUrl,Le.value=e.data.policeFilingUrl}));const Se=d(1);function Re(e){let l={chatLogId:e.chatId,action:"agree",type:"music"};0!=Se.value&&(Se.value=0,L(l).then((l=>{e.agree?Te.value.forEach((l=>{l.chatId==e.chatId&&(l.agree=null,l.agreeNum--)})):Te.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="agree",l.agreeNum++)})),Se.value=1})))}const qe=d(""),ze=d(!0);function He(){const e=document.getElementById("video");ze.value?(ze.value=!1,e.pause()):(ze.value=!0,e.play())}function Ge(e){qe.value=e.mp4;let l={recoredId:e.chatId};e.playNum++,D(l).then((e=>{console.log(e)}))}function Me(e){let l=[];Te.value.forEach((e=>{l=[...l,e.mp4]}));let t=l.indexOf(qe.value);if(0==e){if(0==t)return;t--,qe.value=l[t]}else if(1==e){if(t==l.length-1)return;t++,qe.value=l[t]}console.log(t)}const $e=d(!1);function Je(e){e.operation=!0,$e.value=!0}function Ke(){w&&(w.destroy(),w=null)}function Pe(e,l){let t="/api";if(w||(w=F.loading("下载中，请稍等",{duration:0})),"mp4"==l){Qe();let l=e.mp4.split("/").pop();E.get(t+"/proxy/down",{responseType:"blob",params:{url:e.mp4}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",l),a.click(),Ke(),F.success("下载成功")}))}else if("mp3"==l){Qe();let l=e.mp3.split("/").pop();E.get(t+"/proxy/down",{responseType:"blob",params:{url:e.mp3}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",l),a.click(),Ke(),F.success("下载成功")}))}}function Qe(){$e.value=!1,Te.value.forEach((e=>{e.operation=!1}))}const Ve=d(null);function We(){const e=Ve.value;if(e.scrollTop+e.clientHeight>=e.scrollHeight){if(30*we.value>=Ee.value)return void F.error("没有更多数据了");we.value++,Ae.value?Oe(Ae.value):Oe()}}return(o,s)=>(C(),p("div",S,[v(Be)?x("",!0):(C(),m(i,{key:0,sideType:1})),$e.value?(C(),p("div",{key:1,class:"mask",onClick:Qe})):x("",!0),g("div",R,[qe.value?(C(),p("div",q,[g("div",z,[f(I)]),g("video",{class:"video",autoplay:"",id:"video",loop:"",src:qe.value},null,8,H),f(v(B),{icon:"icon-park-solid:close-one",class:"text-xl text-[#fff] text-center icon",onClick:s[0]||(s[0]=e=>qe.value="")}),g("div",G,[g("img",{class:"controlItem",style:{cursor:"pointer"},src:e,alt:"",onClick:s[1]||(s[1]=e=>Me(0))}),ze.value?(C(),p("img",{key:0,class:"controlItem",src:l,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:He})):x("",!0),ze.value?x("",!0):(C(),p("img",{key:1,class:"controlItem",src:t,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:He})),g("img",{class:"controlItem",style:{cursor:"pointer"},src:a,alt:"",onClick:s[2]||(s[2]=e=>Me(1))})])])):x("",!0),g("div",M,[f(v(B),{icon:"akar-icons:music-album",class:"text-xl text-center"}),$]),g("div",J,[g("div",K,[(C(!0),p(y,null,k(Ne.value,((e,l)=>(C(),p("div",{class:N([Fe.value==l?"bg-[#3378ED] text-[#fff]":"bg-[#F4F4F4] dark:bg-[#010102]","tabItem"]),onClick:e=>{return t=l,Fe.value=t,we.value=1,0==t?Ae.value="":1==t&&(Ae.value="agreeNum"),void Oe(Ae.value);var t},key:e.key},b(e.name),11,P)))),128))]),g("div",{class:"content",ref_key:"container",ref:Ve,onScroll:We},[(C(!0),p(y,null,k(Te.value,(e=>(C(),p("div",{class:"contentItem",key:e.chatId},[g("div",Q,[g("img",{class:"topImg",src:e.image,alt:""},null,8,V),g("div",W,[g("div",X,b(""==e.title?"匿名":e.title),1),g("div",Y,b(e.intro),1)])]),O.value?(C(),p("div",Z,[g("div",ee,[f(v(B),{icon:"gridicons:play",class:"text-xl text-center icon",onClick:l=>Ge(e)},null,8,["onClick"]),g("div",le,b(e.playNum?e.playNum:0),1)]),g("div",te,["agree"==e.agree?(C(),m(v(B),{key:0,icon:"iconamoon:like-fill",class:"text-xl text-center icon",onClick:l=>Re(e)},null,8,["onClick"])):(C(),m(v(B),{key:1,icon:"iconamoon:like-light",class:"text-xl text-center icon",onClick:l=>Re(e)},null,8,["onClick"])),g("div",ae,b(e.agreeNum?e.agreeNum:0),1)]),g("div",ie,[f(v(B),{icon:"ri:more-line",class:"text-xl text-center icon",onClick:l=>Je(e)},null,8,["onClick"]),e.operation?(C(),p("div",oe,[g("div",{class:"operationItem",style:{display:"flex"},onClick:l=>Pe(e,"mp4")},[f(v(B),{icon:"gravity-ui:video",style:{"margin-right":"5px"},class:"text-xl text-center"}),ne],8,se),g("div",{class:"operationItem",style:{display:"flex"},onClick:l=>Pe(e,"mp3")},[f(v(B),{icon:"fluent:headphones-sound-wave-24-filled",style:{"margin-right":"5px"},class:"text-xl text-center"}),re],8,ce)])):x("",!0)])])):(C(),p("div",ue,[g("div",de,[f(v(B),{icon:"gridicons:play",class:"text-xl text-center icon",onClick:l=>Ge(e)},null,8,["onClick"]),g("div",pe,b(e.playNum?e.playNum:0),1)]),g("div",ve,[e.agree?(C(),m(v(B),{key:0,icon:"iconamoon:like-fill",class:"text-xl text-center icon",onClick:l=>Re(e)},null,8,["onClick"])):(C(),m(v(B),{key:1,icon:"iconamoon:like-light",class:"text-xl text-center icon",onClick:l=>Re(e)},null,8,["onClick"])),g("div",me,b(e.agreeNum?e.agreeNum:0),1)]),g("div",xe,[f(v(B),{icon:"ri:more-line",class:"text-xl text-center icon",onClick:l=>Je(e)},null,8,["onClick"]),e.operation?(C(),p("div",ge,[g("div",fe,[f(v(B),{icon:"gravity-ui:video",style:{"margin-right":"5px"},class:"text-xl text-center"}),ye]),g("div",ke,[f(v(B),{icon:"fluent:headphones-sound-wave-24-filled",style:{"margin-right":"5px"},class:"text-xl text-center"}),he])])):x("",!0)])]))])))),128))],544)]),g("div",be,[h("版权所有 © "+b(je.value)+" ",1),g("a",{href:De.value||"#"},[g("a",{href:Le.value||"#"},b(_e.value),9,Ie),h(b(Ue.value),1)],8,Ce)])])]))}}),[["__scopeId","data-v-ea9cd969"]]);export{Be as default};
