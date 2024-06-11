import{_ as e,d as a,a as t,b as l,p as s,c as i,e as o}from"../popup/popup.d1ab5c8b.js";import{d,aI as n,b as u,g as r,u as v,c as p,y as c,a5 as m,aG as g,aF as f,an as y,i as x,l as h,h as w,n as b,k,j as L,F,r as j,M as A,$ as I,m as C,aJ as S,ag as D,aK as N,o as P,aM as T,_ as B,aL as E,C as J,D as M,E as z}from"../main-848db7b0.js";import{S as _}from"../index/index.7fbd374b.js";import{a as R}from"../music/music.6c9b03af.js";import"../draw-fail/draw-fail.50b43169.js";import"../index/index.82a95a88.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const U=e=>(J("data-v-6aed4704"),e=e(),M(),e),V={key:1},O={key:2},q={key:3,class:"text-image-container flex flex-row dark:bg-[#010102] bg-[#F4F4F4]",style:{width:"100%"}},G={style:{width:"100%"}},H={class:"h-full flex justify-start items-between",style:{height:"100vh",width:"100%"}},K={class:"contentBox dark:bg-[#15171A] bg-[#FFFFFF]"},W={style:{position:"absolute","z-index":"99",width:"278px","padding-bottom":"10px",top:"0"},class:"bg-[#fff] dark:bg-[#15171A]"},$={style:{display:"flex","margin-top":"12px"}},Q=["onClick"],X=S('<div class="MJBox dark:bg-[#202B3A] bg-[#fff]" data-v-6aed4704><img class="logoImg" src="'+o+'" alt="" data-v-6aed4704><div class="titleBox" data-v-6aed4704><p class="title1 dark:text-[#CAC5C5] text-[#808080]" data-v-6aed4704>Mid Journey</p><p class="title2" data-v-6aed4704>AI</p></div><div class="intro dark:text-[#CAC5C5] text-[#808080]" data-v-6aed4704> 一款强大的人工智能绘画工具，为用户提供了各种创意的绘画功能，一次性生成4张高质量的艺术创作。 </div></div>',1),Y={class:"padMapBox"},Z={style:{display:"flex","justify-content":"space-between"}},ee={style:{display:"flex"}},ae=U((()=>L("div",{style:{"font-size":"15px","font-weight":"500"}},"上传图片（2-5张）",-1))),te={class:"upLoadContent"},le={class:"ImgSize"},se={style:{display:"flex","justify-content":"space-between"}},ie={style:{display:"flex"}},oe=U((()=>L("div",{style:{"font-size":"15px","font-weight":"500"}},"图片尺寸",-1))),de={class:"upLoadContent"},ne={class:"contentCenter bg-[#fff] dark:bg-[#15171A]"},ue=U((()=>L("div",{class:"contentCenterTop border-b-[2px] dark:border-[#000000] border-[#D1D1D1]"},[L("span",null,"#  创作中心"),L("span",{style:{color:"#EDB830"}},"    请遵守中华人民共和国网络安全法，严禁生成涉及政治人物、色情、恐怖等不良内容，如有违规封号处理")],-1))),re={key:0,class:"w-full",style:{padding:"0 40px"}},ve={style:{"margin-top":"10px"}},pe=U((()=>L("div",{style:{position:"relative",padding:"0 40px","margin-right":"12px"},class:"bg-[#fff] dark:bg-[#1F1F38]"},[L("div",{style:{position:"relative"}})],-1))),ce={class:"end text-[#A3A5A6] dark:text-[#76777A]"},me=["href"],ge=["href"],fe=z(d({__name:"imageMiximage",setup(o){const d=n(),S=u(),{isMobile:J}=r(),M=v(),z=u(),U=p((()=>z.isLogin));p((()=>z.userInfo.avatar)),p((()=>z.userInfo.username)),p((()=>z.userBalance));const fe=p((()=>z.mjDrawForm)),ye=c(),xe=c([]),he=c("");he.value=m.currentRoute.value.fullPath;const we=c();g({page:1,size:20}).then((e=>{localStorage.setItem("drawLogList",JSON.stringify(e.data.rows))})),localStorage.getItem("drawLogList")?xe.value=JSON.parse(localStorage.getItem("drawLogList")):g({page:1,size:20}).then((e=>{xe.value=e.data.rows,localStorage.setItem("drawLogList",JSON.stringify(e.data.rows))}));const be=c(null),ke=()=>{be.value.scrollTo({top:0,behavior:"smooth"})},Le=c(),Fe=e=>{Le.value=e,ke(),je(e),Se()},je=async e=>{e&&(Ie.value=await D({jobId:e}).then((e=>e.data)),Ce.value&&Ie.value.status>=4&&clearTimeout(Ce.value))},Ae=e=>{we.value=e,ke(),je(e),Se()},Ie=c({status:0}),Ce=c(),Se=()=>{Ce.value&&clearTimeout(Ce.value),Ce.value=setTimeout((()=>{var e;if((null==(e=Ie.value)?void 0:e.status)>=N.DRAWED)return Ce.value&&clearTimeout(Ce.value),ye.value=0,xe.value.unshift(Ie.value),y.emit("status",ye.value),y.emit("newDrawLogList",xe.value),Le.value="",we.value="",void g({page:1,size:20}).then((e=>{localStorage.setItem("drawLogList",JSON.stringify(e.data.rows))}));Se(),je(we.value)}),3e3)};f((()=>{Ce.value&&clearTimeout(Ce.value),Ce.value=null,S.updateDrawId({id:""})})),c(0),c(!1),c(""),c(0),c([{name:"--q 质量化",sliderValue:0,id:0,max:100,type:"--q"},{name:"--s 风格化",sliderValue:0,id:1,max:1e3,type:"--s"},{name:"--c 多样化",sliderValue:0,id:2,max:100,type:"--c"}]),c(!1),c(0);const De=c(0);setTimeout((()=>{De.value=1}),0);const Ne=c([]),Pe=["jpg","jpeg","png"],Te=e=>{"pending"===e.file.status&&Me(e.file.file).then((e=>{let a="data:image/png;base64,"+e;Ne.value.push(a)})),"removed"===e.file.status&&Me(e.file.file).then((e=>{let a="data:image/png;base64,"+e;Ne.value=Ne.value.filter((e=>e!==a))})),y.emit("base64Array",Ne.value)},Be=e=>{const a=e.file.type.split("/")[1];return e.fileList.length>=5?(M.warning("最多只能上传5张图片"),!1):Pe.includes(a)&&e.fileList.length<=5},Ee=e=>{const a=e.file.name;fe.value.extendParam=fe.value.extendParam.filter((e=>!e.filename.includes(a))),Je()},Je=async()=>{z.updateMjDrawForm(fe.value)};function Me(e){return new Promise(((a,t)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=function(){const e=l.result.split(",")[1];a(e)},l.onerror=function(){t(new Error("Failed to load file"))}}))}y.on("upLoadIsShow",(e=>{De.value=e})),y.on("upLoadShow",(e=>{De.value=e}));const ze=c(!1);y.on("error",(e=>{ze.value=e}));const _e=()=>{ze.value=!1},Re=()=>{ze.value=!1,z.checkAuth()&&d.updateVipDialog(!0)},Ue=c(!1);y.emit("drawRoute",m.options.history.location);const Ve=c(""),Oe=c(""),qe=c(""),Ge=c(""),He=c("");R({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]}).then((e=>{Ve.value=e.data.copyrightTitle,Oe.value=e.data.icpNumber,qe.value=e.data.policeFilingNumber,Ge.value=e.data.icpUrl,He.value=e.data.policeFilingUrl}));const Ke=c(!1);function We(){Ke.value=!Ke.value}return(o,d)=>(P(),x(F,null,[Ue.value?(P(),x("div",{key:0,class:"mask",onClick:d[0]||(d[0]=e=>Ue.value=!1)})):h("",!0),w(J)?(P(),x("div",V,[b(l)])):h("",!0),ze.value?(P(),x("div",O,[b(s,{onClosePop:_e,onBuyVip:Re})])):h("",!0),w(J)?h("",!0):(P(),x("div",q,[w(J)?h("",!0):(P(),k(_,{key:0})),L("div",G,[L("div",H,[L("div",K,[L("div",W,[L("div",$,[(P(!0),x(F,null,j(w(T),(e=>(P(),x("div",{class:A(he.value==e.menuPath?"activeSelectItem text-[#fff]":"selectItem text-[#808080] bg-[#F4F4F4;] dark:bg-[#010102] dark:text-[#fff]"),key:e.key,onClick:a=>function(e){m.replace({path:e.menuPath}),("图生图"==e.menuName||"图生文"==e.menuName)&&y.emit("upLoadShow",1)}(e)},C(e.menuName),11,Q)))),128))]),X]),L("div",Y,[L("div",Z,[L("div",ee,[L("div",{class:A(Ke.value?"putExpand":"putAway")},[b(w(B),{onClick:We,icon:"material-symbols-light:expand-more-rounded",class:"text-2xl"})],2),ae])]),L("div",{class:A(Ke.value?"modePutExpand":"modePutAway")},[L("div",te,[L("div",null,[b(w(E),{accept:".jpg,.jpeg,.png",action:"","default-upload":!1,"on-change":Te,"on-before-upload":Be,"on-remove":Ee,"list-type":"image-card","directory-dnd":""})])])],2)]),L("div",le,[L("div",se,[L("div",ie,[L("div",{class:A(Ke.value?"putExpand":"putAway")},[b(w(B),{onClick:We,icon:"material-symbols-light:expand-more-rounded",class:"text-2xl"})],2),oe])]),L("div",{class:A(Ke.value?"modePutExpand":"modePutAway")},[L("div",de,[L("div",null,[b(w(E),{accept:".jpg,.jpeg,.png",action:"","default-upload":!1,"on-change":Te,"on-before-upload":Be,"on-remove":Ee,"list-type":"image-card","directory-dnd":""})])])],2)])]),L("div",ne,[ue,0!=xe.value.length&&U.value?(P(),x("div",{key:1,class:"drawList",ref_key:"toTop",ref:be},[we.value?(P(),k(e,{key:0,task:Ie.value,onRefresh:Ae},null,8,["task"])):h("",!0),Le.value?(P(),k(a,{key:1,task:Ie.value,onNewJob:Fe},null,8,["task"])):h("",!0),L("div",ve,[b(t,{drawLogList:xe.value,onNewJobId:Fe},null,8,["drawLogList"])])],512)):(P(),x("div",re,[b(i)])),pe,L("div",ce,[I("版权所有 © "+C(Ve.value)+" ",1),L("a",{href:Ge.value||"#"},[L("a",{href:He.value||"#"},C(qe.value),9,ge),I(C(Oe.value),1)],8,me)])])])])]))],64))}}),[["__scopeId","data-v-6aed4704"]]);export{fe as default};