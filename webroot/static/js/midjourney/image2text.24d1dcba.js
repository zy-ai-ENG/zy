import{_ as a,d as e,a as t,b as s,p as l,U as i,c as o,N as r,e as d,f as n}from"../userDetails/userDetails.bbd1f534.js";import{d as u,aI as v,y as c,b as p,g as f,c as m,u as g,aG as x,G as b,aF as k,an as y,a5 as w,i as C,l as L,h,n as I,k as j,j as A,F,r as D,m as E,M as T,aJ as J,aK as S,o as N,aB as B,aL as M,C as _,D as z,ag as O,E as P}from"../main-647e77a2.js";import{S as R}from"../index/index.cc9c2ab1.js";import"../index/index.a4f65e28.js";import"../draw-fail/draw-fail.50b43169.js";import"../index/index.32184df5.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const V=a=>(_("data-v-ef1ace2b"),a=a(),z(),a),G={key:1},q={key:2},H={key:3,class:"text-image-container flex flex-row",style:{width:"100%"}},K={style:{width:"100%"}},U={class:"h-full flex justify-start items-between",style:{height:"100vh",width:"100%"}},W={class:"contentBox dark:bg-[#272740] bg-[#F4F4F5]"},Q={style:{"overflow-y":"auto","padding-bottom":"70px"}},X=J('<div class="MJBox dark:bg-[#1A1A2F] bg-[#E8E8E8]" data-v-ef1ace2b><img class="logoImg" src="'+d+'" alt="" data-v-ef1ace2b><div class="titleBox" data-v-ef1ace2b><p class="title1 dark:text-[#CAC5C5] text-[#808080]" data-v-ef1ace2b>Mid Journey</p><p class="title2" data-v-ef1ace2b>AI</p></div><div class="intro dark:text-[#CAC5C5] text-[#808080]" data-v-ef1ace2b> 一款强大的人工智能绘画工具，为用户提供了各种创意的绘画功能，一次性生成4张高质量的艺术创作。 </div></div>',1),Y={class:"modeBox"},Z=V((()=>A("div",{class:"modeTitle"},[A("p",{class:"title text-[#808080] dark:text-[#fff]"},"模型广场")],-1))),$={class:"modeContent"},aa=["onClick"],ea=V((()=>A("p",{style:{"font-size":"19px"}},"#",-1))),ta={class:"contentNmae"},sa={class:"contentIntro"},la={class:"userInfo dark:bg-[#1A1A2F] bg-[#E8E8E8]"},ia={key:0},oa=["src"],ra={class:"userName"},da={class:"name text-[#808080] dark:text-[#fff]"},na={key:0,class:"isVip dark:text-[#CCCCCC] text-[#A0A0A0]"},ua={key:1,class:"isVip dark:text-[#CCCCCC] text-[#A0A0A0]"},va={class:"contentCenter"},ca=V((()=>A("div",{class:"contentCenterTop dark:bg-[#1F1F38] border-b-[2px] bg-[#fff] dark:border-[#2C2C4F] border-[#D1D1D1]"},[A("span",null,"#  创作中心"),A("span",{style:{color:"#EDB830"}},"    请遵守中华人民共和国网络安全法，严禁生成涉及政治人物、色情、恐怖等不良内容，如有违规封号处理")],-1))),pa={key:0,class:"w-full",style:{padding:"0 40px"}},fa={style:{"margin-top":"10px"}},ma={style:{position:"relative",padding:"0 40px"},class:"bg-[#fff] dark:bg-[#1F1F38]"},ga={style:{position:"relative"}},xa=V((()=>A("div",{class:"upLoadTop dark:bg-[#32324D] bg-[#fff] border-b-[2px] border-[#E8E8E8] dark:border-[transparent]"},[A("img",{class:"topImg",src:n,alt:""}),A("p",{class:"topText1"},"请添加图片"),A("p",{class:"topText2"},"[严禁上传涉及党政主题，证件照，黄图等不良内容，违者100%封号]")],-1))),ba={class:"upLoadContent dark:bg-[#1A1A2F] bg-[#fff]"},ka={class:""},ya=P(u({__name:"image2text",setup(d){const n=v(),u=c(0);setTimeout((()=>{u.value=1}),0),p();const J=p(),{isMobile:_}=f(),z=p();m((()=>z.isLogin));const P=m((()=>z.userInfo.avatar)),V=m((()=>z.userInfo.username)),ya=m((()=>z.userBalance)),wa=m((()=>z.mjDrawForm)),Ca=g(),La=c(),ha=c([]),Ia=c();x({page:1,size:20}).then((a=>{localStorage.setItem("drawLogList",JSON.stringify(a.data.rows))})),localStorage.getItem("drawLogList")?ha.value=JSON.parse(localStorage.getItem("drawLogList")):x({page:1,size:20}).then((a=>{ha.value=a.data.rows,localStorage.setItem("drawLogList",JSON.stringify(a.data.rows))}));const ja=b({files:[],previewImages:[]}),Aa=["jpg","jpeg","png"],Fa=a=>{"pending"===a.file.status&&ja.files.push(a.file.file),"removed"===a.file.status&&(ja.files=ja.files.filter((e=>e!==a.file.file))),y.emit("imageForm",ja)},Da=a=>{const e=a.file.type.split("/")[1];return a.fileList.length>=1?(Ca.warning("最多只能上传1张图片"),!1):Aa.includes(e)&&a.fileList.length<=1},Ea=a=>{const e=a.file.name;wa.value.extendParam=wa.value.extendParam.filter((a=>!a.filename.includes(e))),Ta()},Ta=async()=>{z.updateMjDrawForm(wa.value)},Ja=a=>{Ia.value=a},Sa=async a=>{a&&(Oa.value=await O({jobId:a}).then((a=>a.data)),Pa.value&&Oa.value.status>=4&&clearTimeout(Pa.value))},Na=c(null),Ba=()=>{Na.value.scrollTo({top:0,behavior:"smooth"})},Ma=c(),_a=a=>{Ma.value=a,Ba(),Sa(a),Ra()},za=a=>{La.value=a,Ba(),Sa(a),Ra()},Oa=c({status:0}),Pa=c(),Ra=()=>{Pa.value&&clearTimeout(Pa.value),Pa.value=setTimeout((()=>{var a;if((null==(a=Oa.value)?void 0:a.status)>=S.DRAWED)return Pa.value&&clearTimeout(Pa.value),Ia.value=0,ha.value.unshift(Oa.value),y.emit("status",Ia.value),y.emit("newDrawLogList",ha.value),Ma.value="",La.value="",void x({page:1,size:20}).then((a=>{localStorage.setItem("drawLogList",JSON.stringify(a.data.rows))}));La.value?(Ra(),Sa(La.value)):Ma.value&&(Ra(),Sa(Ma.value))}),3e3)};k((()=>{Pa.value&&clearTimeout(Pa.value),Pa.value=null,J.updateDrawId({id:""})}));const Va=[{name:"MJ6.0（最新）",intro:"全新6.0 ALPHA真实风格图像",id:0,value:"--v 6.0"},{name:"MJ5.2（真实细节）",intro:"增加真实风格图像细节",id:1,value:"--v 5.2"},{name:"MJ5.1（艺术）",intro:"专注真实艺术风格图像",id:2,value:"--v 5.1"},{name:"NJ5.0（动漫增强）",intro:"官方最新动漫模型同步",id:5,value:"--niji 5"},{name:"NJ4.0（动漫）",intro:"官方最新动漫模型同步",id:6,value:"--niji 4"}],Ga=c(0);y.on("upLoadIsShow",(a=>{u.value=a})),y.on("upLoadShow",(a=>{u.value=a}));const qa=c(!1);y.on("error",(a=>{qa.value=a}));const Ha=()=>{qa.value=!1},Ka=()=>{qa.value=!1,z.checkAuth()&&n.updateVipDialog(!0)},Ua=c(!1);return y.emit("drawRoute",w.options.history.location),(d,n)=>{var v,c;return N(),C(F,null,[Ua.value?(N(),C("div",{key:0,class:"mask",onClick:n[0]||(n[0]=a=>Ua.value=!1)})):L("",!0),h(_)?(N(),C("div",G,[I(s)])):L("",!0),qa.value?(N(),C("div",q,[I(l,{onClosePop:Ha,onBuyVip:Ka})])):L("",!0),h(_)?L("",!0):(N(),C("div",H,[h(_)?L("",!0):(N(),j(R,{key:0})),A("div",K,[A("div",U,[A("div",W,[A("div",Q,[X,A("div",Y,[Z,A("div",$,[(N(),C(F,null,D(Va,((a,e)=>A("div",{class:T(e==Ga.value?"active text-[#fff] dark:text-[#fff]":"contentItem  text-[#808080] dark:text-[#fff]"),key:a.id,onClick:t=>{return s={item:a,index:e},Ga.value=s.index,void y.emit("--v",s.item.value);var s}},[ea,A("div",null,[A("p",ta,E(a.name),1),A("p",sa,E(a.intro),1)])],10,aa))),64))])])]),A("div",la,[Ua.value?(N(),C("div",ia,[I(i)])):L("",!0),A("img",{class:"avatar",src:P.value?P.value:"./img/avatar.png",alt:"",onClick:n[1]||(n[1]=a=>Ua.value=!0)},null,8,oa),A("div",ra,[A("p",da,E(V.value),1),(null==(v=ya.value)?void 0:v.expirationTime)?(N(),C("p",na," 到期时间："+E(h(B)(null==(c=ya.value)?void 0:c.expirationTime)),1)):(N(),C("p",ua,"未开通，点击了解特权"))])])]),A("div",va,[ca,0==ha.value.length?(N(),C("div",pa,[I(o)])):(N(),C("div",{key:1,class:"drawList",ref_key:"toTop",ref:Na},[La.value?(N(),j(a,{key:0,task:Oa.value,onRefresh:za},null,8,["task"])):L("",!0),Ma.value?(N(),j(e,{key:1,task:Oa.value,onNewJob:_a},null,8,["task"])):L("",!0),A("div",fa,[I(t,{drawLogList:ha.value,onNewJobId:_a},null,8,["drawLogList"])])],512)),A("div",ma,[A("div",ga,[A("div",{class:T(1==u.value?"upLoadImg border-[1px] border-[#E8E8E8] dark:border-[transparent]":"upLoadImg1 shadow-md")},[xa,A("div",ba,[A("div",ka,[I(h(M),{accept:".jpg,.jpeg,.png",action:"","default-file-list":ja.files,"default-upload":!1,"on-change":Fa,"on-before-upload":Da,"on-remove":Ea,"list-type":"image-card","directory-dnd":""},null,8,["default-file-list"])])])],2),I(r,{onGetjobId:za,onResquestStatus:Ja})])])])])])]))],64)}}}),[["__scopeId","data-v-ef1ace2b"]]);export{ya as default};
