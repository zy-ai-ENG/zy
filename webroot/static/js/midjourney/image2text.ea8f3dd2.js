import{_ as e}from"../Line 1/Line 1.30390b32.js";import{_ as a}from"../draw-fail/draw-fail.8f549170.js";import{_ as t,a as l}from"../police/police.b4a86fcd.js";import{d as s,_ as i,a as o,b as r,p as u,N as n,c as d}from"../popup/popup.e768df71.js";import{a as p}from"../music/music.dcd30c2f.js";import{d as v,e as c,aJ as g,y as m,b as f,g as y,c as x,u as h,aF as b,G as k,aE as w,a6 as F,a3 as L,i as I,l as _,h as j,n as D,k as T,j as C,F as A,r as B,K as S,Y as E,m as N,aK as J,o as z,aL as P,aM as M,C as R,D as H,af as O,E as U}from"../main-c568908e.js";import{S as G}from"../index/index.cf96d6c5.js";import"../index/index.22c4b11b.js";import"../createInspiration.vue_vue_type_script_setup_true_lang/createInspiration.vue_vue_type_script_setup_true_lang.0dbe65f9.js";const K=e=>(R("data-v-c6e4e05a"),e=e(),H(),e),V={key:1},q={key:2},W={key:3,class:"text-image-container flex flex-row dark:bg-[#010102] bg-[#F4F4F4]",style:{width:"100%"}},Y={style:{width:"100%"}},Q={class:"h-full flex justify-start items-between",style:{height:"100vh",width:"100%"}},X={class:"contentBox dark:bg-[#15171A] bg-[#FFFFFF]"},Z={style:{position:"absolute","z-index":"99",width:"278px","padding-bottom":"10px",top:"0"},class:"bg-[#fff] dark:bg-[#15171A]"},$={style:{display:"flex","margin-top":"12px"}},ee=["onClick"],ae=K((()=>C("div",{class:"MJBox dark:bg-[#202B3A] bg-[#fff]"},[C("div",{class:"intro dark:text-[#CAC5C5] text-[#808080]"}," 一款强大的人工智能绘画工具，为用户提供了各种创意的绘画功能，一次性生成4张高质量的艺术创作。 ")],-1))),te={class:"padMapBox"},le=K((()=>C("div",{style:{display:"flex","justify-content":"space-between"}},[C("div",{style:{display:"flex"}},[C("div",{style:{"font-size":"15px","font-weight":"500"}},"上传图片")])],-1))),se={class:"modePutExpand"},ie={class:"upLoadContent"},oe=K((()=>C("div",{class:"promptBox dark:bg-[#202B3A] bg-[#F5F8FE] text-[#3378ED] dark:text-[#2960BE]"}," 温馨提示：同官方的/blend命令图混图，最多可以上传5张图片进行混图，图片越靠前，权重越高。 ",-1))),re={class:"radioBox dark:bg-[#15171A] bg-[#FFFFFF]"},ue={style:{display:"flex"}},ne=[K((()=>C("img",{src:e,alt:""},null,-1)))],de=K((()=>C("p",{style:{"margin-left":"4px","font-size":"10px"}},"快图模式",-1))),pe=[K((()=>C("img",{src:e,alt:""},null,-1)))],ve=K((()=>C("p",{style:{"margin-left":"4px","font-size":"10px"}},"常规模式",-1))),ce=[K((()=>C("img",{style:{width:"12px",height:"12px","margin-right":"4px"},src:a,alt:""},null,-1))),K((()=>C("p",{style:{"font-size":"10px"},class:"text-[#A3A5A6] dark:text-[#76777A]"},"免责声明",-1)))],ge={class:"contentCenter bg-[#fff] dark:bg-[#15171A]"},me=K((()=>C("div",{class:"contentCenterTop border-b-[2px] bg-[#fff] dark:bg-[#15171A] border-b-[2px] dark:border-[#000000] border-[#D1D1D1]"},[C("span",null,"#  创作中心"),C("span",{style:{color:"#EDB830"}},"    请遵守中华人民共和国网络安全法，严禁生成涉及政治人物、色情、恐怖等不良内容，如有违规封号处理")],-1))),fe={key:0,class:"w-full",style:{padding:"0 40px","margin-top":"10px"}},ye={style:{"margin-top":"10px"}},xe={style:{color:"#eeeeee"},class:"end"},he={style:{display:"flex"}},be={key:0,style:{display:"flex"}},ke=K((()=>C("img",{style:{"margin-right":"5px",width:"16px",height:"16px"},src:t,alt:""},null,-1))),we=["href"],Fe={key:1,style:{display:"flex"}},Le=K((()=>C("img",{style:{"margin-right":"5px",width:"16px",height:"16px"},src:l,alt:""},null,-1))),Ie=["href"],_e=U(v({__name:"image2text",setup(e){c();const a=g(),t=m(0);setTimeout((()=>{t.value=1}),0),f();const l=f(),{isMobile:v}=y(),R=f(),H=x((()=>R.isLogin));x((()=>R.userInfo.avatar)),x((()=>R.userInfo.username)),x((()=>R.userBalance));const U=x((()=>R.mjDrawForm)),K=h(),_e=m(),je=m([]),De=m();b({page:1,size:20}).then((e=>{localStorage.setItem("drawLogList",JSON.stringify(e.data.rows))})),localStorage.getItem("drawLogList")?(je.value=JSON.parse(localStorage.getItem("drawLogList")),setTimeout((()=>{Me()}),10)):b({page:1,size:20}).then((e=>{je.value=e.data.rows,localStorage.setItem("drawLogList",JSON.stringify(e.data.rows)),setTimeout((()=>{Me()}),10)}));const Te=k({files:[],previewImages:[]}),Ce=["jpg","jpeg","png"],Ae=e=>{"pending"===e.file.status&&Te.files.push(e.file.file),"removed"===e.file.status&&(Te.files=Te.files.filter((a=>a!==e.file.file))),F.emit("imageForm",Te)},Be=e=>{const a=e.file.type.split("/")[1];return e.fileList.length>=1?(K.warning("最多只能上传1张图片"),!1):Ce.includes(a)&&e.fileList.length<=1},Se=e=>{const a=e.file.name;U.value.extendParam=U.value.extendParam.filter((e=>!e.filename.includes(a))),Ee()},Ee=async()=>{R.updateMjDrawForm(U.value)},Ne=e=>{De.value=e},Je=async e=>{e&&(Ue.value=await O({jobId:e}).then((e=>e.data)),Ge.value&&Ue.value.status>=4&&clearTimeout(Ge.value))},ze=m(null),Pe=()=>{let e=ze.value;e.scrollTo({top:e.scrollHeight+e.clientHeight,behavior:"smooth"})},Me=()=>{let e=ze.value;e.scrollTop=e.scrollHeight},Re=m(),He=e=>{Re.value=e,setTimeout((()=>Pe()),10),Je(e),Ke()},Oe=e=>{_e.value=e,setTimeout((()=>Pe()),10),Je(e),Ke()},Ue=m({status:0}),Ge=m(),Ke=()=>{Ge.value&&clearTimeout(Ge.value),Ge.value=setTimeout((()=>{var e;if((null==(e=Ue.value)?void 0:e.status)>=J.DRAWED){Ge.value&&clearTimeout(Ge.value),De.value=0,je.value.push(Ue.value),F.emit("status",De.value);return 0==je.value.filter((e=>e.id==Ue.value.id)).length?je.value.push(Ue.value):console.log("重复了"),F.emit("newDrawLogList",je.value),Re.value="",_e.value="",void b({page:1,size:20}).then((e=>{let a=e.data.rows;je.value=a.reverse(),localStorage.setItem("drawLogList",JSON.stringify(e.data.rows)),setTimeout((()=>Pe()),10)}))}_e.value?(Ke(),Je(_e.value)):Re.value&&(Ke(),Je(Re.value))}),3e3)};w((()=>{Ge.value&&clearTimeout(Ge.value),Ge.value=null,l.updateDrawId({id:""})})),m(0),F.on("upLoadIsShow",(e=>{t.value=e})),F.on("upLoadShow",(e=>{t.value=e}));const Ve=m(!1);F.on("error",(e=>{Ve.value=e}));const qe=()=>{Ve.value=!1},We=()=>{Ve.value=!1,R.checkAuth()&&a.updateVipDialog(!0)},Ye=m(!1);F.emit("drawRoute",L.options.history.location);const Qe=m("");Qe.value=L.currentRoute.value.fullPath;const Xe=m(""),Ze=m(""),$e=m(""),ea=m(""),aa=m("");p({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]}).then((e=>{Xe.value=e.data.copyrightTitle,Ze.value=e.data.icpNumber,$e.value=e.data.policeFilingNumber,ea.value=e.data.icpUrl,aa.value=e.data.policeFilingUrl})),m(!1),m(!1);const ta=m(0),la=m(1);function sa(e){ta.value=e,0==e?la.value=1:1==e&&(la.value=2),F.emit("imgToTextMode",la.value)}function ia(){L.push("/serviceAgreement")}return(e,a)=>(z(),I(A,null,[Ye.value?(z(),I("div",{key:0,class:"mask",onClick:a[0]||(a[0]=e=>Ye.value=!1)})):_("",!0),j(v)?(z(),I("div",V,[D(r)])):_("",!0),Ve.value?(z(),I("div",q,[D(u,{onClosePop:qe,onBuyVip:We})])):_("",!0),j(v)?_("",!0):(z(),I("div",W,[j(v)?_("",!0):(z(),T(G,{key:0})),C("div",Y,[C("div",Q,[C("div",X,[C("div",Z,[C("div",$,[(z(!0),I(A,null,B(j(P),(e=>(z(),I("div",{class:S(Qe.value==e.menuPath?"activeSelectItem text-[#fff]":"selectItem text-[#808080] bg-[#F4F4F4;] dark:bg-[#010102] dark:text-[#fff]"),key:e.key,onClick:a=>function(e){L.replace({path:e.menuPath}),("图生图"==e.menuName||"图生文"==e.menuName)&&F.emit("upLoadShow",1)}(e)},N(e.menuName),11,ee)))),128))]),ae]),C("div",te,[le,C("div",se,[C("div",ie,[C("div",null,[D(j(M),{accept:".jpg,.jpeg,.png",action:"","default-upload":!1,"on-change":Ae,"on-before-upload":Be,"on-remove":Se,"list-type":"image-card","directory-dnd":""})])])])]),oe,C("div",re,[C("div",ue,[C("div",{class:"radioItem",onClick:a[1]||(a[1]=e=>sa(0))},[C("div",{class:S(["radioItemImgBox",0==ta.value?"dark:bg-[#2960BE] bg-[#3378ED]":"dark:bg-[#484A4D] bg-[#CECFD0]"])},ne,2),de]),C("div",{class:"radioItem",style:{"margin-left":"12px"},onClick:a[2]||(a[2]=e=>sa(1))},[C("div",{class:S(["radioItemImgBox",1==ta.value?"dark:bg-[#2960BE] bg-[#3378ED]":"dark:bg-[#484A4D] bg-[#CECFD0]"])},pe,2),ve])]),C("div",{style:{display:"flex","align-items":"center",cursor:"pointer"},onClick:ia},ce)]),D(n,{sendType:1,onGetjobId:Oe,onResquestStatus:Ne})]),C("div",ge,[me,0!=je.value.length&&H.value?(z(),I("div",{key:1,class:"drawList",ref_key:"toTop",ref:ze},[C("div",ye,[D(s,{drawLogList:je.value,onNewJobId:He},null,8,["drawLogList"])]),_e.value?(z(),T(i,{key:0,task:Ue.value,onRefresh:Oe},null,8,["task"])):_("",!0),Re.value?(z(),T(o,{key:1,task:Ue.value,onNewJob:He},null,8,["task"])):_("",!0)],512)):(z(),I("div",fe,[D(d)])),C("div",xe,[C("div",he,[E("版权所有 © "+N(Xe.value)+" ",1),Ze.value?(z(),I("div",be,[ke,C("a",{href:ea.value||"#"},N(Ze.value),9,we)])):_("",!0),$e.value?(z(),I("div",Fe,[Le,C("a",{href:aa.value||"#"},N($e.value),9,Ie)])):_("",!0)])])])])])]))],64))}}),[["__scopeId","data-v-c6e4e05a"]]);export{_e as default};
