import{_ as e}from"../Line 1/Line 1.30390b32.js";import{_ as a}from"../draw-fail/draw-fail.8f549170.js";import{_ as t,a as l}from"../police/police.b4a86fcd.js";import{d as s,_ as i,a as o,b as r,p as n,N as u,c as d}from"../popup/popup.f840313f.js";import{a as v}from"../music/music.cb7d8321.js";import{d as c,e as p,aJ as g,y as m,b as f,g as x,c as h,u as y,aF as k,G as b,aE as F,a6 as w,a3 as L,i as A,l as I,h as C,n as j,k as _,j as D,F as B,r as T,K as E,Y as N,m as S,aK as P,o as J,aL as M,aM as R,C as z,D as U,af as H,E as G}from"../main-25b3f899.js";import{S as K}from"../index/index.e0251ed2.js";import"../index/index.05499eb4.js";import"../createInspiration.vue_vue_type_script_setup_true_lang/createInspiration.vue_vue_type_script_setup_true_lang.193c1258.js";const O=e=>(z("data-v-629e6413"),e=e(),U(),e),V={key:1},q={key:2},W={key:3,class:"text-image-container flex flex-row dark:bg-[#010102] bg-[#F4F4F4]",style:{width:"100%"}},Y={style:{width:"100%"}},Q={class:"h-full flex justify-start items-between",style:{height:"100vh",width:"100%"}},X={class:"contentBox dark:bg-[#15171A] bg-[#FFFFFF]"},Z={style:{position:"absolute","z-index":"99",width:"278px","padding-bottom":"10px",top:"0"},class:"bg-[#fff] dark:bg-[#15171A]"},$={style:{display:"flex","margin-top":"12px"}},ee=["onClick"],ae=O((()=>D("div",{class:"MJBox dark:bg-[#202B3A] bg-[#fff]"},[D("div",{class:"intro dark:text-[#CAC5C5] text-[#808080]"}," 一款强大的人工智能绘画工具，为用户提供了各种创意的绘画功能，一次性生成4张高质量的艺术创作。 ")],-1))),te=O((()=>D("div",{class:"first"},"第一步，上传人脸模板图片",-1))),le={class:"padMapBox"},se=O((()=>D("div",{class:"intro text-[#FF837E] dark:text-[#FF6C60]"},"严禁上传违规图(政治人物、色情、暴恐等)违者100%封号",-1))),ie={class:"modePutExpand"},oe={class:"upLoadContent"},re=O((()=>D("div",{class:"intro text-[#A3A5A6] dark:text-[#76777A]"},"注意素材质量，保证脸部足够清晰，为了更好的效果，最好正脸。",-1))),ne=O((()=>D("div",{class:"second"},"第二步，上传需要替换人脸的目标图",-1))),ue={class:"padMapBox"},de=O((()=>D("div",{class:"intro text-[#FF837E] dark:text-[#FF6C60]"},"严禁上传违规图(政治人物、色情、暴恐等)违者100%封号",-1))),ve={class:"modePutExpand"},ce={class:"upLoadContent"},pe=O((()=>D("div",{class:"intro text-[#A3A5A6] dark:text-[#76777A]"},"最大2048x2048像素，不超过5MB，建议：五官无遮挡，角度小于20%",-1))),ge=O((()=>D("div",{class:"intro text-[#FF837E] dark:text-[#FF6C60]",style:{"margin-top":"4px"}},"换脸操作只能在写实版人物上进行，漫回类因面部五官比例不统一，是无法完成换脸操作%",-1))),me=O((()=>D("div",{class:"third"},"第三步，提交任务",-1))),fe=O((()=>D("div",{class:"thirdIntro dark:text-[#F4F4F4] text-[#03060C]"},"免责声明： 本功能效果太逼真！请遵守相关法律法规，反对非法用途，包括但不限于侵犯他人隐私、散布虚假信息，进行诈骗等行为！",-1))),xe={class:"radioBox dark:bg-[#15171A] bg-[#FFFFFF]"},he={style:{display:"flex"}},ye=[O((()=>D("img",{src:e,alt:""},null,-1)))],ke=O((()=>D("p",{style:{"margin-left":"4px","font-size":"10px"}},"快图模式",-1))),be=[O((()=>D("img",{src:e,alt:""},null,-1)))],Fe=O((()=>D("p",{style:{"margin-left":"4px","font-size":"10px"}},"常规模式",-1))),we=[O((()=>D("img",{style:{width:"12px",height:"12px","margin-right":"4px"},src:a,alt:""},null,-1))),O((()=>D("p",{style:{"font-size":"10px"},class:"text-[#A3A5A6] dark:text-[#76777A]"},"免责声明",-1)))],Le={class:"contentCenter bg-[#fff] dark:bg-[#15171A]"},Ae=O((()=>D("div",{class:"contentCenterTop border-b-[2px] bg-[#fff] dark:bg-[#15171A] border-b-[2px] dark:border-[#000000] border-[#D1D1D1]"},[D("span",null,"#  创作中心"),D("span",{style:{color:"#EDB830"}},"    请遵守中华人民共和国网络安全法，严禁生成涉及政治人物、色情、恐怖等不良内容，如有违规封号处理")],-1))),Ie={key:0,class:"w-full",style:{padding:"0 40px","margin-top":"10px"}},Ce={style:{"margin-top":"10px"}},je={style:{color:"#eeeeee"},class:"end"},_e={style:{display:"flex"}},De={key:0,style:{display:"flex"}},Be=O((()=>D("img",{style:{"margin-right":"5px",width:"16px",height:"16px"},src:t,alt:""},null,-1))),Te=["href"],Ee={key:1,style:{display:"flex"}},Ne=O((()=>D("img",{style:{"margin-right":"5px",width:"16px",height:"16px"},src:l,alt:""},null,-1))),Se=["href"],Pe=G(c({__name:"AIChangeFace",setup(e){p();const a=g(),t=m(0);setTimeout((()=>{t.value=1}),0),f();const l=f(),{isMobile:c}=x(),z=f(),U=h((()=>z.isLogin));h((()=>z.userInfo.avatar)),h((()=>z.userInfo.username)),h((()=>z.userBalance));const G=h((()=>z.mjDrawForm)),O=y(),Pe=m(),Je=m([]),Me=m();localStorage.getItem("drawLogList")?(Je.value=JSON.parse(localStorage.getItem("drawLogList")),setTimeout((()=>{$e()}),10)):k({page:1,size:20}).then((e=>{Je.value=e.data.rows,localStorage.setItem("drawLogList",JSON.stringify(e.data.rows)),setTimeout((()=>{$e()}),10)})),b({files:[],previewImages:[]});const Re=m(""),ze=["jpg","jpeg","png"],Ue=e=>{"pending"===e.file.status&&We(e.file.file).then((e=>{let a="data:image/png;base64,"+e;Re.value=a,w.emit("sourceBase64",Re.value)})),"removed"===e.file.status&&We(e.file.file).then((e=>{Re.value="",w.emit("sourceBase64",Re.value)}))},He=e=>{const a=e.file.type.split("/")[1];return e.fileList.length>=1?(O.warning("最多只能上传1张图片"),!1):ze.includes(a)&&e.fileList.length<=1},Ge=e=>{const a=e.file.name;G.value.extendParam=G.value.extendParam.filter((e=>!e.filename.includes(a))),Ke()},Ke=async()=>{z.updateMjDrawForm(G.value)},Oe=e=>{"pending"===e.file.status&&We(e.file.file).then((e=>{let a="data:image/png;base64,"+e;Re.value=a,w.emit("targetBase64",Re.value)})),"removed"===e.file.status&&We(e.file.file).then((e=>{Re.value="",w.emit("sourceBase64",Re.value)}))},Ve=e=>{const a=e.file.type.split("/")[1];return e.fileList.length>=1?(O.warning("最多只能上传1张图片"),!1):ze.includes(a)&&e.fileList.length<=1},qe=e=>{const a=e.file.name;G.value.extendParam=G.value.extendParam.filter((e=>!e.filename.includes(a))),Ke()};function We(e){return new Promise(((a,t)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=function(){const e=l.result.split(",")[1];a(e)},l.onerror=function(){t(new Error("Failed to load file"))}}))}const Ye=e=>{Me.value=e},Qe=async e=>{e&&(la.value=await H({jobId:e}).then((e=>e.data)),sa.value&&la.value.status>=4&&clearTimeout(sa.value))},Xe=m(null),Ze=()=>{let e=Xe.value;e.scrollTo({top:e.scrollHeight+e.clientHeight,behavior:"smooth"})},$e=()=>{let e=Xe.value;e.scrollTop=e.scrollHeight},ea=m(),aa=e=>{ea.value=e,setTimeout((()=>Ze()),10),Qe(e),ia()},ta=e=>{Pe.value=e,setTimeout((()=>Ze()),10),Qe(e),ia()},la=m({status:0}),sa=m(),ia=()=>{sa.value&&clearTimeout(sa.value),sa.value=setTimeout((()=>{var e;if((null==(e=la.value)?void 0:e.status)>=P.DRAWED){sa.value&&clearTimeout(sa.value),Me.value=0,Je.value.push(la.value),w.emit("status",Me.value);return 0==Je.value.filter((e=>e.id==la.value.id)).length?Je.value.push(la.value):console.log("重复了"),w.emit("newDrawLogList",Je.value),ea.value="",Pe.value="",void k({page:1,size:20}).then((e=>{let a=e.data.rows;Je.value=a.reverse(),localStorage.setItem("drawLogList",JSON.stringify(e.data.rows)),setTimeout((()=>Ze()),10)}))}Pe.value?(ia(),Qe(Pe.value)):ea.value&&(ia(),Qe(ea.value))}),3e3)};F((()=>{sa.value&&clearTimeout(sa.value),sa.value=null,l.updateDrawId({id:""})})),m(0),w.on("upLoadIsShow",(e=>{t.value=e})),w.on("upLoadShow",(e=>{t.value=e}));const oa=m(!1);w.on("error",(e=>{oa.value=e}));const ra=()=>{oa.value=!1},na=()=>{oa.value=!1,z.checkAuth()&&a.updateVipDialog(!0)},ua=m(!1);w.emit("drawRoute",L.options.history.location);const da=m("");da.value=L.currentRoute.value.fullPath;const va=m(""),ca=m(""),pa=m(""),ga=m(""),ma=m("");v({keys:["copyrightTitle","icpNumber","policeFilingNumber","icpUrl","policeFilingUrl"]}).then((e=>{va.value=e.data.copyrightTitle,ca.value=e.data.icpNumber,pa.value=e.data.policeFilingNumber,ga.value=e.data.icpUrl,ma.value=e.data.policeFilingUrl})),m(!1),m(!1);const fa=m(0),xa=m(1);function ha(e){fa.value=e,0==e?xa.value=1:1==e&&(xa.value=2),w.emit("AiFaceMode",xa.value)}function ya(){L.push("/serviceAgreement")}return(e,a)=>(J(),A(B,null,[ua.value?(J(),A("div",{key:0,class:"mask",onClick:a[0]||(a[0]=e=>ua.value=!1)})):I("",!0),C(c)?(J(),A("div",V,[j(r)])):I("",!0),oa.value?(J(),A("div",q,[j(n,{onClosePop:ra,onBuyVip:na})])):I("",!0),C(c)?I("",!0):(J(),A("div",W,[C(c)?I("",!0):(J(),_(K,{key:0})),D("div",Y,[D("div",Q,[D("div",X,[D("div",Z,[D("div",$,[(J(!0),A(B,null,T(C(M),(e=>(J(),A("div",{class:E(da.value==e.menuPath?"activeSelectItem text-[#fff]":"selectItem text-[#808080] bg-[#F4F4F4;] dark:bg-[#010102] dark:text-[#fff]"),key:e.key,onClick:a=>function(e){L.replace({path:e.menuPath}),("图生图"==e.menuName||"图生文"==e.menuName)&&w.emit("upLoadShow",1)}(e)},S(e.menuName),11,ee)))),128))]),ae]),te,D("div",le,[se,D("div",ie,[D("div",oe,[D("div",null,[j(C(R),{accept:".jpg,.jpeg,.png",action:"","default-upload":!1,"on-change":Ue,"on-before-upload":Ve,"on-remove":qe,"list-type":"image-card","directory-dnd":""})])])]),re]),ne,D("div",ue,[de,D("div",ve,[D("div",ce,[D("div",null,[j(C(R),{accept:".jpg,.jpeg,.png",action:"","default-upload":!1,"on-change":Oe,"on-before-upload":He,"on-remove":Ge,"list-type":"image-card","directory-dnd":""})])])]),pe,ge]),me,fe,D("div",xe,[D("div",he,[D("div",{class:"radioItem",onClick:a[1]||(a[1]=e=>ha(0))},[D("div",{class:E(["radioItemImgBox",0==fa.value?"dark:bg-[#2960BE] bg-[#3378ED]":"dark:bg-[#484A4D] bg-[#CECFD0]"])},ye,2),ke]),D("div",{class:"radioItem",style:{"margin-left":"12px"},onClick:a[2]||(a[2]=e=>ha(1))},[D("div",{class:E(["radioItemImgBox",1==fa.value?"dark:bg-[#2960BE] bg-[#3378ED]":"dark:bg-[#484A4D] bg-[#CECFD0]"])},be,2),Fe])]),D("div",{style:{display:"flex","align-items":"center",cursor:"pointer"},onClick:ya},we)]),j(u,{sendType:1,onGetjobId:ta,onResquestStatus:Ye})]),D("div",Le,[Ae,0!=Je.value.length&&U.value?(J(),A("div",{key:1,class:"drawList",ref_key:"toTop",ref:Xe},[D("div",Ce,[j(s,{drawLogList:Je.value,onNewJobId:aa},null,8,["drawLogList"])]),Pe.value?(J(),_(i,{key:0,task:la.value,onRefresh:ta},null,8,["task"])):I("",!0),ea.value?(J(),_(o,{key:1,task:la.value,onNewJob:aa},null,8,["task"])):I("",!0)],512)):(J(),A("div",Ie,[j(d)])),D("div",je,[D("div",_e,[N("版权所有 © "+S(va.value)+" ",1),ca.value?(J(),A("div",De,[Be,D("a",{href:ga.value||"#"},S(ca.value),9,Te)])):I("",!0),pa.value?(J(),A("div",Ee,[Ne,D("a",{href:ma.value||"#"},S(pa.value),9,Se)])):I("",!0)])])])])])]))],64))}}),[["__scopeId","data-v-629e6413"]]);export{Pe as default};
