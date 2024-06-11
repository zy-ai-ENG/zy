import{_ as e}from"../Line 1/Line 1.30390b32.js";import{_ as a}from"../draw-fail/draw-fail.8f549170.js";import{_ as t,a as l}from"../police/police.b4a86fcd.js";import{d as s,_ as i,a as o,b as r,p as u,N as n,c as d}from"../popup/popup.52dded23.js";import{a as v}from"../music/music.9b5bb027.js";import{d as p,e as c,aJ as g,y as m,b as f,g as y,c as x,u as h,aF as b,G as k,aE as w,a6 as F,a3 as L,i as I,l as _,h as j,n as D,k as T,j as C,F as A,r as B,K as E,Y as N,m as S,aK as J,o as z,aL as P,aM as M,C as R,D as H,af as U,E as G}from"../main-14a658dc.js";import{S as K}from"../index/index.eb85f426.js";import"../index/index.109f508b.js";import"../createInspiration.vue_vue_type_script_setup_true_lang/createInspiration.vue_vue_type_script_setup_true_lang.e5c15718.js";const O=e=>(R("data-v-73afbc17"),e=e(),H(),e),V={key:1},q={key:2},W={key:3,class:"text-image-container flex flex-row dark:bg-[#010102] bg-[#F4F4F4]",style:{width:"100%"}},Y={style:{width:"100%"}},Q={class:"h-full flex justify-start items-between",style:{height:"100vh",width:"100%"}},X={class:"contentBox dark:bg-[#15171A] bg-[#FFFFFF]"},Z={style:{position:"absolute","z-index":"99",width:"278px","padding-bottom":"10px",top:"0"},class:"bg-[#fff] dark:bg-[#15171A]"},$={style:{display:"flex","margin-top":"12px"}},ee=["onClick"],ae=O((()=>C("div",{class:"MJBox dark:bg-[#202B3A] bg-[#fff]"},[C("div",{class:"intro dark:text-[#CAC5C5] text-[#808080]"}," 一款强大的人工智能绘画工具，为用户提供了各种创意的绘画功能，一次性生成4张高质量的艺术创作。 ")],-1))),te={class:"padMapBox"},le=O((()=>C("div",{style:{display:"flex","justify-content":"space-between"}},[C("div",{style:{display:"flex"}},[C("div",{style:{"font-size":"15px","font-weight":"500"}},"上传图片")])],-1))),se={class:"modePutExpand"},ie={class:"upLoadContent"},oe=O((()=>C("div",{class:"promptBox dark:bg-[#202B3A] bg-[#F5F8FE] text-[#3378ED] dark:text-[#2960BE]"}," 温馨提示：同官方的/blend命令图混图，最多可以上传5张图片进行混图，图片越靠前，权重越高。 ",-1))),re={class:"radioBox dark:bg-[#15171A] bg-[#FFFFFF]"},ue={style:{display:"flex"}},ne=[O((()=>C("img",{src:e,alt:""},null,-1)))],de=O((()=>C("p",{style:{"margin-left":"4px","font-size":"10px"}},"快图模式",-1))),ve=[O((()=>C("img",{src:e,alt:""},null,-1)))],pe=O((()=>C("p",{style:{"margin-left":"4px","font-size":"10px"}},"常规模式",-1))),ce=[O((()=>C("img",{style:{width:"12px",height:"12px","margin-right":"4px"},src:a,alt:""},null,-1))),O((()=>C("p",{style:{"font-size":"10px"},class:"text-[#A3A5A6] dark:text-[#76777A]"},"免责声明",-1)))],ge={class:"contentCenter bg-[#fff] dark:bg-[#15171A]"},me=O((()=>C("div",{class:"contentCenterTop border-b-[2px] bg-[#fff] dark:bg-[#15171A] border-b-[2px] dark:border-[#000000] border-[#D1D1D1]"},[C("span",null,"#  创作中心"),C("span",{style:{color:"#EDB830"}},"    请遵守中华人民共和国网络安全法，严禁生成涉及政治人物、色情、恐怖等不良内容，如有违规封号处理")],-1))),fe={key:0,class:"w-full",style:{padding:"0 40px","margin-top":"10px"}},ye={style:{"margin-top":"10px"}},xe={style:{color:"#eeeeee"},class:"end"},he={style:{display:"flex"}},be={key:0,style:{display:"flex"}},ke=O((()=>C("img",{style:{"margin-right":"5px",width:"16px",height:"16px"},src:t,alt:""},null,-1))),we=["href"],Fe={key:1,style:{display:"flex"}},Le=O((()=>C("img",{style:{"margin-right":"5px",width:"16px",height:"16px"},src:l,alt:""},null,-1))),Ie=["href"],_e=G(p({__name:"image2text",setup(e){c();const a=g(),t=m(0);setTimeout((()=>{t.value=1}),0),f();const l=f(),{isMobile:p}=y(),R=f(),H=x((()=>R.isLogin));x((()=>R.userInfo.avatar)),x((()=>R.userInfo.username)),x((()=>R.userBalance));const G=x((()=>R.mjDrawForm)),O=h(),_e=m(),je=m([]),De=m();localStorage.getItem("drawLogList")?(je.value=JSON.parse(localStorage.getItem("drawLogList")),setTimeout((()=>{Me()}),10)):b({page:1,size:20}).then((e=>{je.value=e.data.rows,localStorage.setItem("drawLogList",JSON.stringify(e.data.rows)),setTimeout((()=>{Me()}),10)}));const Te=k({files:[],previewImages:[]}),Ce=["jpg","jpeg","png"],Ae=e=>{"pending"===e.file.status&&Te.files.push(e.file.file),"removed"===e.file.status&&(Te.files=Te.files.filter((a=>a!==e.file.file))),F.emit("imageForm",Te)},Be=e=>{const a=e.file.type.split("/")[1];return e.fileList.length>=1?(O.warning("最多只能上传1张图片"),!1):Ce.includes(a)&&e.fileList.length<=1},Ee=e=>{const a=e.file.name;G.value.extendParam=G.value.extendParam.filter((e=>!e.filename.includes(a))),Ne()},Ne=async()=>{R.updateMjDrawForm(G.value)},Se=e=>{De.value=e},Je=async e=>{e&&(Ge.value=await U({jobId:e}).then((e=>e.data)),Ke.value&&Ge.value.status>=4&&clearTimeout(Ke.value))},ze=m(null),Pe=()=>{let e=ze.value;e.scrollTo({top:e.scrollHeight+e.clientHeight,behavior:"smooth"})},Me=()=>{let e=ze.value;e.scrollTop=e.scrollHeight},Re=m(),He=e=>{Re.value=e,setTimeout((()=>Pe()),10),Je(e),Oe()},Ue=e=>{_e.value=e,setTimeout((()=>Pe()),10),Je(e),Oe()},Ge=m({status:0}),Ke=m(),Oe=()=>{Ke.value&&clearTimeout(Ke.value),Ke.value=setTimeout((()=>{var e;if((null==(e=Ge.value)?void 0:e.status)>=J.DRAWED){Ke.value&&clearTimeout(Ke.value),De.value=0,je.value.push(Ge.value),F.emit("status",De.value);return 0==je.value.filter((e=>e.id==Ge.value.id)).length?je.value.push(Ge.value):console.log("重复了"),F.emit("newDrawLogList",je.value),Re.value="",_e.value="",void b({page:1,size:20}).then((e=>{let a=e.data.rows;je.value=a.reverse(),localStorage.setItem("drawLogList",JSON.stringify(e.data.rows)),setTimeout((()=>Pe()),10)}))}_e.value?(Oe(),Je(_e.value)):Re.value&&(Oe(),Je(Re.value))}),3e3)};w((()=>{Ke.value&&clearTimeout(Ke.value),Ke.value=null,l.updateDrawId({id:""})})),m(0),F.on("upLoadIsShow",(e=>{t.value=e})),F.on("upLoadShow",(e=>{t.value=e}));const Ve=m(!1);F.on("error",(e=>{Ve.value=e}));const qe=()=>{Ve.value=!1},We=()=>{Ve.value=!1,R.checkAuth()&&a.updateVipDialog(!0)},Ye=m(!1);F.emit("drawRoute",L.options.history.location);const Qe=m("");Qe.value=L.currentRoute.value.fullPath;const Xe=m(""),Ze=m(""),$e=m(""),ea=m(""),aa=m("");v({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]}).then((e=>{Xe.value=e.data.copyrightTitle,Ze.value=e.data.icpNumber,$e.value=e.data.policeFilingNumber,ea.value=e.data.icpUrl,aa.value=e.data.policeFilingUrl})),m(!1),m(!1);const ta=m(0),la=m(1);function sa(e){ta.value=e,0==e?la.value=1:1==e&&(la.value=2),F.emit("imgToTextMode",la.value)}function ia(){L.push("/serviceAgreement")}return(e,a)=>(z(),I(A,null,[Ye.value?(z(),I("div",{key:0,class:"mask",onClick:a[0]||(a[0]=e=>Ye.value=!1)})):_("",!0),j(p)?(z(),I("div",V,[D(r)])):_("",!0),Ve.value?(z(),I("div",q,[D(u,{onClosePop:qe,onBuyVip:We})])):_("",!0),j(p)?_("",!0):(z(),I("div",W,[j(p)?_("",!0):(z(),T(K,{key:0})),C("div",Y,[C("div",Q,[C("div",X,[C("div",Z,[C("div",$,[(z(!0),I(A,null,B(j(P),(e=>(z(),I("div",{class:E(Qe.value==e.menuPath?"activeSelectItem text-[#fff]":"selectItem text-[#808080] bg-[#F4F4F4;] dark:bg-[#010102] dark:text-[#fff]"),key:e.key,onClick:a=>function(e){L.replace({path:e.menuPath}),("图生图"==e.menuName||"图生文"==e.menuName)&&F.emit("upLoadShow",1)}(e)},S(e.menuName),11,ee)))),128))]),ae]),C("div",te,[le,C("div",se,[C("div",ie,[C("div",null,[D(j(M),{accept:".jpg,.jpeg,.png",action:"","default-upload":!1,"on-change":Ae,"on-before-upload":Be,"on-remove":Ee,"list-type":"image-card","directory-dnd":""})])])])]),oe,C("div",re,[C("div",ue,[C("div",{class:"radioItem",onClick:a[1]||(a[1]=e=>sa(0))},[C("div",{class:E(["radioItemImgBox",0==ta.value?"dark:bg-[#2960BE] bg-[#3378ED]":"dark:bg-[#484A4D] bg-[#CECFD0]"])},ne,2),de]),C("div",{class:"radioItem",style:{"margin-left":"12px"},onClick:a[2]||(a[2]=e=>sa(1))},[C("div",{class:E(["radioItemImgBox",1==ta.value?"dark:bg-[#2960BE] bg-[#3378ED]":"dark:bg-[#484A4D] bg-[#CECFD0]"])},ve,2),pe])]),C("div",{style:{display:"flex","align-items":"center",cursor:"pointer"},onClick:ia},ce)]),D(n,{sendType:1,onGetjobId:Ue,onResquestStatus:Se})]),C("div",ge,[me,0!=je.value.length&&H.value?(z(),I("div",{key:1,class:"drawList",ref_key:"toTop",ref:ze},[C("div",ye,[D(s,{drawLogList:je.value,onNewJobId:He},null,8,["drawLogList"])]),_e.value?(z(),T(i,{key:0,task:Ge.value,onRefresh:Ue},null,8,["task"])):_("",!0),Re.value?(z(),T(o,{key:1,task:Ge.value,onNewJob:He},null,8,["task"])):_("",!0)],512)):(z(),I("div",fe,[D(d)])),C("div",xe,[C("div",he,[N("版权所有 © "+S(Xe.value)+" ",1),Ze.value?(z(),I("div",be,[ke,C("a",{href:ea.value||"#"},S(Ze.value),9,we)])):_("",!0),$e.value?(z(),I("div",Fe,[Le,C("a",{href:aa.value||"#"},S($e.value),9,Ie)])):_("",!0)])])])])])]))],64))}}),[["__scopeId","data-v-73afbc17"]]);export{_e as default};
