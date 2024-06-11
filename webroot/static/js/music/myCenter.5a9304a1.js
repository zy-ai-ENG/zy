import{_ as e,a as l,b as t,c as a}from"../end/end.08128031.js";import{_ as i,a as s,b as o,c as n,d as c}from"../unthumbs1/unthumbs1.60163221.js";import{S as r}from"../index/index.7fbd374b.js";import{d as u,u as d,v as p,g,y as m,i as v,l as f,j as h,n as x,h as y,k,F as b,r as C,$ as I,m as E,o as A,az as w,_ as F,C as j,D as O,aD as B,E as N}from"../main-848db7b0.js";import{i as U,a as _,d as L,b as T,j as D}from"./music.6c9b03af.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const R=e=>(j("data-v-4e682c69"),e=e(),O(),e),H={class:"bg-[#f4f4f4] dark:bg-[#020104] musicBody"},z={key:1,class:"videoBox"},M={style:{width:"504px",height:"756px","border-radius":"8px",position:"relative"},class:"bg-[#E5EDFE] dark:bg-[#0A182F]"},S=["src"],J={class:"control"},V={class:"myCreate bg-[#fff] dark:bg-[#15171A]"},$={class:"myCreateTop"},q=R((()=>h("div",{style:{"margin-left":"4px"}},"我的创作",-1))),G=R((()=>h("div",{style:{width:"100%",height:"2px"},class:"bg-[#fff] dark:bg-[#010102]"},null,-1))),K={class:"mainLeft"},P=["onClick","src"],Q={key:1,style:{width:"108px",height:"108px","border-radius":"8px"},src:c,alt:""},W={class:"itemInfo"},X={class:"info"},Y=R((()=>h("div",{style:{width:"30px",height:"18px","border-radius":"16px","text-align":"center",color:"#34C759"},class:"bg-[#EBF9EE] dark:bg-[#175A28]"},"V3",-1))),Z={style:{margin:"6px 0"}},ee={class:"operation"},le=["onClick"],te=["onClick"],ae=["onClick"],ie=["onClick"],se={class:"iconBox",style:{position:"relative"}},oe={key:0,class:"operationBox bg-[#fff] dark:bg-[#15171A]"},ne=["onClick"],ce=R((()=>h("div",null,"下载视频",-1))),re=["onClick"],ue=R((()=>h("div",null,"下载音频",-1))),de=["onClick"],pe=R((()=>h("div",null,"删除",-1))),ge={class:"end text-[#A3A5A6] dark:text-[#76777A]"},me=["href"],ve=["href"],fe=N(u({__name:"myCenter",setup(c){let u=null;const j=d();p();const{isMobile:O}=g(),N=m([]),R=m(1),fe=m();function he(){u||(u=j.loading("数据加载中",{duration:0})),U({page:R.value,size:40}).then((e=>{we(),fe.value=e.data.count;const{records:l}=e.data;let t=l.filter((e=>e.text));console.log(1,t);let a=t.filter((e=>-1!=e.text.indexOf("http")&&-1!=e.text.indexOf("Chorus")||-1!=e.text.indexOf("生成中")));console.log(a);for(let i=0;i<a.length;i++)if(-1!=a[i].text.indexOf("http")&&-1!=a[i].text.indexOf("Chorus")){let e=a[i].text.split("🎵")[1].split("\n")[0],l=a[i].text.split("🎵")[1].split("[Chorus]")[1].split("[")[0];-1!=l.indexOf("mv")&&(l=l.split("mv")[0]);let t=a[i].text.split("🎵").pop().split("!")[1];a[i].image=t.split("](")[1].split(")")[0],a[i].mp3=t.split("](")[2].split(")")[0],a[i].mp4=t.split("](")[3].split(")")[0],a[i].title=e,a[i].intro=l,a[i].operation=!1}else a[i].image=null,a[i].mp3=null,a[i].mp4=null;N.value=[...N.value,...a],console.log(N.value)}))}he();const xe=m(""),ye=m(""),ke=m(""),be=m(""),Ce=m("");_({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]}).then((e=>{xe.value=e.data.copyrightTitle,ye.value=e.data.icpNumber,ke.value=e.data.policeFilingNumber,be.value=e.data.icpUrl,Ce.value=e.data.policeFilingUrl}));const Ie=m(1);function Ee(e,l){if(0==l){let l={chatLogId:e.chatId,action:"agree",type:"music"};if(0==Ie.value)return;Ie.value=0,L(l).then((l=>{"agree"==e.agree?N.value.forEach((l=>{l.chatId==e.chatId&&(l.agree=null,l.agreeNum--)})):(null==e.agree||"disAgree"==e.agree)&&N.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="agree",l.agreeNum++)})),Ie.value=1}))}else if(1==l){let l={chatLogId:e.chatId,action:"disAgree",type:"music"};if(0==Ie.value)return;Ie.value=0,L(l).then((l=>{console.log(N.value),"agree"==e.agree?N.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="disAgree",l.agreeNum--)})):null==e.agree?N.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="disAgree")})):"disAgree"==e.agree&&N.value.forEach((l=>{l.chatId==e.chatId&&(l.agree="null")})),Ie.value=1}))}}const Ae=m(!1);function we(){u&&(u.destroy(),u=null)}function Fe(e,l){let t="/api";if(u||(u=j.loading("下载中，请稍等",{duration:0})),"mp4"==l){let l=e.mp4.split("/").pop();Ue(),B.get(t+"/proxy/down",{responseType:"blob",params:{url:e.mp4}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",l),a.click(),we(),j.success("下载成功")}))}else if("mp3"==l){let l=e.mp3.split("/").pop();Ue(),B.get(t+"/proxy/down",{responseType:"blob",params:{url:e.mp3}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",l),a.click(),we(),j.success("下载成功")}))}}const je=m(""),Oe=m(!0);function Be(){const e=document.getElementById("video");Oe.value?(Oe.value=!1,e.pause()):(Oe.value=!0,e.play())}function Ne(e){let l=[];N.value.filter((e=>null!=e.mp4)).forEach((e=>{l=[...l,e.mp4]}));let t=l.indexOf(je.value);if(0==e){if(0==t)return;t--,je.value=l[t]}else if(1==e){if(t==l.length-1)return;t++,je.value=l[t]}console.log(t)}function Ue(){Ae.value=!1,N.value.forEach((e=>{e.operation=!1}))}const _e=m(null);function Le(){const e=_e.value;if(e.scrollTop+e.clientHeight>=e.scrollHeight){if(20*R.value>=fe.value)return void j.error("没有更多数据了");R.value++,he()}}return(c,u)=>(A(),v("div",H,[Ae.value?(A(),v("div",{key:0,class:"mask",onClick:Ue})):f("",!0),je.value?(A(),v("div",z,[h("div",M,[x(w)]),h("video",{class:"video",autoplay:"",id:"video",loop:"",src:je.value},null,8,S),x(y(F),{icon:"icon-park-solid:close-one",class:"text-xl text-[#fff] text-center icon",onClick:u[0]||(u[0]=e=>je.value="")}),h("div",J,[h("img",{class:"controlItem",style:{cursor:"pointer"},src:e,alt:"",onClick:u[1]||(u[1]=e=>Ne(0))}),Oe.value?(A(),v("img",{key:0,class:"controlItem",src:l,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:Be})):f("",!0),Oe.value?f("",!0):(A(),v("img",{key:1,class:"controlItem",src:t,style:{margin:"0 50px",cursor:"pointer"},alt:"",onClick:Be})),h("img",{class:"controlItem",style:{cursor:"pointer"},src:a,alt:"",onClick:u[2]||(u[2]=e=>Ne(1))})])])):f("",!0),y(O)?f("",!0):(A(),k(r,{key:2,sideType:1})),h("div",V,[h("div",$,[x(y(F),{icon:"icomoon-free:file-music",class:"text-xl text-center"}),q]),G,h("div",{class:"myCreateMain",ref_key:"container",ref:_e,onScroll:Le},[h("div",K,[(A(!0),v(b,null,C(N.value,((e,l)=>(A(),v("div",{class:"mainItem dark:bg-[#0A182F] bg-[#F5F8FE]",key:l},[e.image?(A(),v("img",{key:0,style:{width:"108px",height:"108px","border-radius":"8px"},onClick:l=>function(e){je.value=e.mp4;let l={recoredId:e.chatId};e.playNum++,T(l).then((e=>{console.log(e)}))}(e),src:e.image,alt:""},null,8,P)):f("",!0),e.image?f("",!0):(A(),v("img",Q)),h("div",W,[h("div",X,[Y,h("div",Z,E(e.title?e.title:"匿名"),1),h("div",null,E(e.intro),1)]),h("div",ee,["agree"!=e.agree?(A(),v("img",{key:0,class:"icon",onClick:l=>Ee(e,0),src:i,alt:""},null,8,le)):f("",!0),"agree"==e.agree?(A(),v("img",{key:1,class:"icon",onClick:l=>Ee(e,0),src:s,alt:""},null,8,te)):f("",!0),"disAgree"!=e.agree?(A(),v("img",{key:2,class:"icon",onClick:l=>Ee(e,1),src:o,alt:""},null,8,ae)):f("",!0),"disAgree"==e.agree?(A(),v("img",{key:3,class:"icon",onClick:l=>Ee(e,1),src:n,alt:""},null,8,ie)):f("",!0),h("div",se,[x(y(F),{icon:"ri:more-line",class:"text-xl text-center icon",onClick:l=>function(e){e.operation=!0,Ae.value=!0}(e)},null,8,["onClick"]),e.operation?(A(),v("div",oe,[h("div",{class:"operationItem",style:{display:"flex"},onClick:l=>Fe(e,"mp4")},[x(y(F),{icon:"gravity-ui:video",style:{"margin-right":"5px"},class:"text-xl text-center"}),ce],8,ne),h("div",{class:"operationItem",style:{display:"flex"},onClick:l=>Fe(e,"mp3")},[x(y(F),{icon:"fluent:headphones-sound-wave-24-filled",style:{"margin-right":"5px"},class:"text-xl text-center"}),ue],8,re),h("div",{class:"operationItem",style:{display:"flex",color:"#FF5E55"},onClick:l=>function(e){let l={id:e.chatId};Ue(),D(l).then((l=>{j.success("删除成功"),N.value=N.value.filter((l=>l.chatId!=e.chatId))}))}(e)},[x(y(F),{icon:"mi:delete",style:{"margin-right":"5px"},class:"text-xl text-center"}),pe],8,de)])):f("",!0)])])])])))),128))])],544),h("div",ge,[I("版权所有 © "+E(xe.value)+" ",1),h("a",{href:be.value||"#"},[h("a",{href:Ce.value||"#"},E(ke.value),9,ve),I(E(ye.value),1)],8,me)])])]))}}),[["__scopeId","data-v-4e682c69"]]);export{fe as default};
