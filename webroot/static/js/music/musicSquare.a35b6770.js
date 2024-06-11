import{_ as e,a as l,b as t,c as a}from"../end/end.08128031.js";import{S as i}from"../index/index.e0251ed2.js";import{d as o,u as s,b as n,c,v as r,e as u,g as d,y as p,i as v,h as m,k as g,l as x,j as f,n as k,F as y,r as h,Y as b,m as C,o as I,ba as B,_ as N,K as F,C as w,D as A,aC as E,E as T}from"../main-25b3f899.js";import{q as L,c as U,a as j,m as _,b as D,d as O}from"./music.cb7d8321.js";const S=e=>(w("data-v-9758764a"),e=e(),A(),e),R={class:"bg-[#f4f4f4] dark:bg-[#020104] musicBody"},q={class:"mainBox"},z={key:0,class:"videoBox"},G={style:{width:"504px",height:"756px","border-radius":"8px",position:"relative"},class:"bg-[#E5EDFE] dark:bg-[#0A182F]"},H=["src"],M={class:"control"},J={class:"musicSquareTitle bg-[#fff] dark:bg-[#15171A] border-[1px] border-b dark:border-[#020104] border-[transparent]"},K=S((()=>f("div",{style:{"margin-left":"4px"}},"音乐广场",-1))),Y={style:{height:"87vh","border-radius":"0 0 12px 12px"},class:"bg-[#fff] dark:bg-[#15171A]"},P={class:"contentBox bg-[#fff] dark:bg-[#15171A]"},Q={class:"tabBox"},V=["onClick"],W={class:"itemTop bg-[#F5F8FE] dark:bg-[#0A182F]"},X=["src"],Z={class:"topTitle"},$={class:"title"},ee={class:"intro"},le={key:0,class:"itemBottomDark"},te={class:"iconBox"},ae={style:{"margin-left":"4px"}},ie={class:"iconBox"},oe={style:{"margin-left":"4px"}},se={class:"iconBox",style:{position:"relative"}},ne={key:0,class:"operationBox bg-[#fff] dark:bg-[#15171A]"},ce=["onClick"],re=S((()=>f("div",null,"下载视频",-1))),ue=["onClick"],de=S((()=>f("div",null,"下载音频",-1))),pe={key:1,class:"itemBottomLight"},ve={class:"iconBox"},me={style:{"margin-left":"4px"}},ge={class:"iconBox"},xe={style:{"margin-left":"4px"}},fe={class:"iconBox",style:{position:"relative"}},ke={key:0,class:"operationBox bg-[#fff] dark:bg-[#15171A]"},ye={class:"operationItem",style:{display:"flex"}},he=S((()=>f("div",null,"下载视频",-1))),be={class:"operationItem",style:{display:"flex"}},Ce=S((()=>f("div",null,"下载音频",-1))),Ie={class:"end text-[#A3A5A6] dark:text-[#76777A]"},Be=["href"],Ne=["href"],Fe=T(o({__name:"musicSquare",setup(o){const w=s(),A=n(),T=c((()=>A.isLogin));let S=null;r();const Fe=u(),we=c((()=>"dark"===Fe.theme)),{isMobile:Ae}=d(),Ee=p([{name:"最新歌曲",key:0},{name:"流行趋势",key:1}]),Te=p(0),Le=p(1),Ue=p(),je=p(""),_e=p([]);ze(),L({modelType:"music"}).then((e=>{0!=e.data.length?localStorage.setItem("musicGroupId",e.data[0].id):0==e.data.length&&U({modelType:"music"}).then((e=>{localStorage.setItem("musicGroupId",e.data.id)}))}));const De=p(""),Oe=p(""),Se=p(""),Re=p(""),qe=p("");function ze(e){S||(S=w.loading("数据加载中",{duration:0}));let l={};l=e?{size:30,page:Le.value,order:e}:{size:30,page:Le.value},console.log(l),_(l).then((e=>{Ue.value=e.data.count;const{records:l}=e.data;let t=l.filter((e=>e.text)).filter((e=>-1!=e.text.indexOf("http")&&-1!=e.text.indexOf("Chorus")));for(let a=0;a<t.length;a++){let e=t[a].text.split("🎵")[1].split("\n")[0],l=t[a].text.split("🎵")[1].split("[Chorus]")[1].split("[")[0];-1!=l.indexOf("mv")&&(l=l.split("mv")[0]);let i=t[a].text.split("🎵").pop().split("!")[1];t[a].image=i.split("](")[1].split(")")[0],t[a].mp3=i.split("](")[2].split(")")[0],t[a].mp4=i.split("](")[3].split(")")[0],t[a].title=e,t[a].intro=l,t[a].operation=!1}_e.value=[..._e.value,...t],We(),console.log(_e.value)}))}j({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]}).then((e=>{De.value=e.data.copyrightTitle,Oe.value=e.data.icpNumber,Se.value=e.data.policeFilingNumber,Re.value=e.data.icpUrl,qe.value=e.data.policeFilingUrl}));const Ge=p(1);function He(e){let l={chatLogId:e.chatId,action:"agree",type:"music"};0!=Ge.value&&(Ge.value=0,O(l).then((l=>{e.agree?_e.value.forEach((l=>{l.chatId==e.chatId&&(l.agree=null,l.agreeNum--)})):_e.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="agree",l.agreeNum++)})),Ge.value=1})))}const Me=p(""),Je=p(!0);function Ke(){const e=document.getElementById("video");Je.value?(Je.value=!1,e.pause()):(Je.value=!0,e.play())}function Ye(e){if(!T.value)return void A.setLoginDialog(!0);Me.value=e.mp4;let l={recoredId:e.chatId};e.playNum++,D(l).then((e=>{console.log(e)}))}function Pe(e){let l=[];_e.value.forEach((e=>{l=[...l,e.mp4]}));let t=l.indexOf(Me.value);if(0==e){if(0==t)return;t--,Me.value=l[t]}else if(1==e){if(t==l.length-1)return;t++,Me.value=l[t]}console.log(t)}const Qe=p(!1);function Ve(e){e.operation=!0,Qe.value=!0}function We(){S&&(S.destroy(),S=null)}function Xe(e,l){if(!T.value)return void A.setLoginDialog(!0);let t="/api";if(S||(S=w.loading("下载中，请稍等",{duration:0})),"mp4"==l){Ze();let l=e.mp4.split("/").pop();E.get(t+"/proxy/down",{responseType:"blob",params:{url:e.mp4}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",l),a.click(),We(),w.success("下载成功")}))}else if("mp3"==l){Ze();let l=e.mp3.split("/").pop();E.get(t+"/proxy/down",{responseType:"blob",params:{url:e.mp3}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",l),a.click(),We(),w.success("下载成功")}))}}function Ze(){Qe.value=!1,_e.value.forEach((e=>{e.operation=!1}))}const $e=p(null);function el(){const e=$e.value;if(e.scrollTop+e.clientHeight+1>=e.scrollHeight){if(30*Le.value>=Ue.value)return void w.error("没有更多数据了");Le.value++,je.value?ze(je.value):ze()}}return(o,s)=>(I(),v("div",R,[m(Ae)?x("",!0):(I(),g(i,{key:0,sideType:1})),Qe.value?(I(),v("div",{key:1,class:"mask",onClick:Ze})):x("",!0),f("div",q,[Me.value?(I(),v("div",z,[f("div",G,[k(B)]),f("video",{class:"video",autoplay:"",id:"video",loop:"",src:Me.value},null,8,H),k(m(N),{icon:"icon-park-solid:close-one",class:"text-xl text-[#fff] text-center icon",onClick:s[0]||(s[0]=e=>Me.value="")}),f("div",M,[f("img",{class:"controlItem",style:{cursor:"pointer"},src:e,alt:"",onClick:s[1]||(s[1]=e=>Pe(0))}),Je.value?(I(),v("img",{key:0,class:"controlItem",src:l,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:Ke})):x("",!0),Je.value?x("",!0):(I(),v("img",{key:1,class:"controlItem",src:t,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:Ke})),f("img",{class:"controlItem",style:{cursor:"pointer"},src:a,alt:"",onClick:s[2]||(s[2]=e=>Pe(1))})])])):x("",!0),f("div",J,[k(m(N),{icon:"akar-icons:music-album",class:"text-xl text-center"}),K]),f("div",Y,[f("div",P,[f("div",Q,[(I(!0),v(y,null,h(Ee.value,((e,l)=>(I(),v("div",{class:F([Te.value==l?"bg-[#3378ED] text-[#fff]":"bg-[#F4F4F4] dark:bg-[#010102]","tabItem"]),onClick:e=>{return t=l,Te.value=t,Le.value=1,0==t?je.value="":1==t&&(je.value="agreeNum"),void ze(je.value);var t},key:e.key},C(e.name),11,V)))),128))]),f("div",{class:"content",ref_key:"container",ref:$e,onScroll:el},[(I(!0),v(y,null,h(_e.value,(e=>(I(),v("div",{class:"contentItem",key:e.chatId},[f("div",W,[f("img",{class:"topImg",src:e.image,alt:""},null,8,X),f("div",Z,[f("div",$,C(""==e.title?"匿名":e.title),1),f("div",ee,C(e.intro),1)])]),we.value?(I(),v("div",le,[f("div",te,[k(m(N),{icon:"gridicons:play",class:"text-xl text-center icon",onClick:l=>Ye(e)},null,8,["onClick"]),f("div",ae,C(e.playNum?e.playNum:0),1)]),f("div",ie,["agree"==e.agree?(I(),g(m(N),{key:0,icon:"iconamoon:like-fill",class:"text-xl text-center icon",onClick:l=>He(e)},null,8,["onClick"])):(I(),g(m(N),{key:1,icon:"iconamoon:like-light",class:"text-xl text-center icon",onClick:l=>He(e)},null,8,["onClick"])),f("div",oe,C(e.agreeNum?e.agreeNum:0),1)]),f("div",se,[k(m(N),{icon:"ri:more-line",class:"text-xl text-center icon",onClick:l=>Ve(e)},null,8,["onClick"]),e.operation?(I(),v("div",ne,[f("div",{class:"operationItem",style:{display:"flex"},onClick:l=>Xe(e,"mp4")},[k(m(N),{icon:"gravity-ui:video",style:{"margin-right":"5px"},class:"text-xl text-center"}),re],8,ce),f("div",{class:"operationItem",style:{display:"flex"},onClick:l=>Xe(e,"mp3")},[k(m(N),{icon:"fluent:headphones-sound-wave-24-filled",style:{"margin-right":"5px"},class:"text-xl text-center"}),de],8,ue)])):x("",!0)])])):(I(),v("div",pe,[f("div",ve,[k(m(N),{icon:"gridicons:play",class:"text-xl text-center icon",onClick:l=>Ye(e)},null,8,["onClick"]),f("div",me,C(e.playNum?e.playNum:0),1)]),f("div",ge,[e.agree?(I(),g(m(N),{key:0,icon:"iconamoon:like-fill",class:"text-xl text-center icon",onClick:l=>He(e)},null,8,["onClick"])):(I(),g(m(N),{key:1,icon:"iconamoon:like-light",class:"text-xl text-center icon",onClick:l=>He(e)},null,8,["onClick"])),f("div",xe,C(e.agreeNum?e.agreeNum:0),1)]),f("div",fe,[k(m(N),{icon:"ri:more-line",class:"text-xl text-center icon",onClick:l=>Ve(e)},null,8,["onClick"]),e.operation?(I(),v("div",ke,[f("div",ye,[k(m(N),{icon:"gravity-ui:video",style:{"margin-right":"5px"},class:"text-xl text-center"}),he]),f("div",be,[k(m(N),{icon:"fluent:headphones-sound-wave-24-filled",style:{"margin-right":"5px"},class:"text-xl text-center"}),Ce])])):x("",!0)])]))])))),128))],544)]),f("div",Ie,[b("版权所有 © "+C(De.value)+" ",1),f("a",{href:Re.value||"#"},[f("a",{href:qe.value||"#"},C(Se.value),9,Ne),b(C(Oe.value),1)],8,Be)])])])]))}}),[["__scopeId","data-v-9758764a"]]);export{Fe as default};
