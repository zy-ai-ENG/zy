import{d as e,e as a,c as t,o as s,i as l,j as i,F as n,r as o,a3 as r,m as d,E as u,aI as v,b as c,g as p,y as g,u as m,aG as x,aF as f,an as y,a5 as k,l as b,h as w,n as h,k as C,M as A,a1 as B,a2 as F,w as j,aJ as D,aK as I,aB as L,aL as E,aM as T,L as V,aN as J,C as _,D as z,ag as N}from"../main-647e77a2.js";import{_ as S,d as M,a as R,b as U,p as P,U as q,N as G,e as O,g as H,c as K}from"../userDetails/userDetails.bbd1f534.js";import{S as W}from"../index/index.cc9c2ab1.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";import"../index/index.a4f65e28.js";import"../draw-fail/draw-fail.50b43169.js";import"../index/index.32184df5.js";const X={class:"loading-text"},$=u(e({__name:"Loading1",props:{gap:{default:10},progress:{default:0},tips:{default:""},bgColor:{},words:{default:["L","O","A","D","I","N","G"]}},setup(e){const u=e,v=a(),c=t((()=>v.theme)),p=t((()=>"dark"===c.value?"#fff":"#000"));return(e,a)=>(s(),l("div",{class:"loading",style:r({background:u.bgColor})},[i("div",X,[(s(!0),l(n,null,o(u.words,(e=>(s(),l("span",{key:e,style:r({margin:`0 ${u.gap}px`,color:p.value}),class:"loading-text-words"},d(e),5)))),128))])],4))}}),[["__scopeId","data-v-e7603c8e"]]),Q=e=>(_("data-v-d456eb3a"),e=e(),z(),e),Y={key:1},Z={key:2},ee={key:3,class:"text-image-container flex flex-row",style:{width:"100%"}},ae={style:{width:"100%"}},te={class:"h-full flex justify-start items-between",style:{height:"100vh",width:"100%",overflow:"hidden"}},se={class:"contentBox dark:bg-[#272740] bg-[#F4F4F5]"},le={style:{"overflow-y":"auto","padding-bottom":"70px"}},ie=D('<div class="MJBox dark:bg-[#1A1A2F] bg-[#E8E8E8]" data-v-d456eb3a><img class="logoImg" src="'+O+'" alt="" data-v-d456eb3a><div class="titleBox" data-v-d456eb3a><p class="title1 dark:text-[#CAC5C5] text-[#808080]" data-v-d456eb3a>Mid Journey</p><p class="title2" data-v-d456eb3a>AI</p></div><div class="intro dark:text-[#CAC5C5] text-[#808080]" data-v-d456eb3a> 一款强大的人工智能绘画工具，为用户提供了各种创意的绘画功能，一次性生成4张高质量的艺术创作。 </div></div>',1),ne={class:"modeBox"},oe=Q((()=>i("div",{class:"modeTitle"},[i("p",{class:"title text-[#808080] dark:text-[#fff]"},"模型广场")],-1))),re={class:"modeContent"},de=["onClick"],ue=Q((()=>i("p",{style:{"font-size":"19px"}},"#",-1))),ve={class:"contentNmae"},ce={class:"contentIntro"},pe={class:"userInfo dark:bg-[#1A1A2F] bg-[#E8E8E8]"},ge={key:0},me=["src"],xe={class:"userName"},fe={class:"name text-[#808080] dark:text-[#fff]"},ye={key:0,class:"isVip dark:text-[#CCCCCC] text-[#A0A0A0]"},ke={key:1,class:"isVip dark:text-[#CCCCCC] text-[#A0A0A0]"},be={class:"contentCenter"},we=Q((()=>i("div",{class:"contentCenterTop dark:bg-[#1F1F38] border-b-[2px] bg-[#fff] dark:border-[#2C2C4F] border-[#D1D1D1]"},[i("span",{class:"text-[#808080] dark:text-[#fff]"},"#  创作中心"),i("span",{style:{color:"#EDB830"}},"    请遵守中华人民共和国网络安全法，严禁生成涉及政治人物、色情、恐怖等不良内容，如有违规封号处理")],-1))),he={key:0,class:"w-full",style:{padding:"0 40px",position:"relative"}},Ce={key:1,class:"drawList"},Ae={style:{"margin-top":"10px"}},Be={class:"bg-[#fff] dark:bg-[#1F1F38]",style:{padding:"0 40px","margin-top":"0px",position:"absolute",bottom:"0",width:"80%","z-index":"9999"}},Fe={style:{position:"relative",margin:"0 40px"}},je=Q((()=>i("div",{class:"settingTitle dark:bg-[#272740] bg-[#E8E8E8]"},[i("img",{class:"settingImg",src:H,alt:""}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"高级选项")],-1))),De={class:"sttingContent"},Ie={class:"contentBox1"},Le={class:"upLoadContent bg-[#fff] dark:bg-[#1A1A2F]"},Ee={class:""},Te=Q((()=>i("div",{class:"content1"},[i("div",{style:{width:"6px",height:"25px","background-color":"#4BA3FF","border-radius":"3px","margin-right":"10px"}}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"不想出现的词")],-1))),Ve={style:{position:"relative",width:"826px"}},Je={class:"contentBox2"},_e=Q((()=>i("div",{class:"content2"},[i("div",{style:{width:"6px",height:"25px","background-color":"#4BA3FF","border-radius":"3px","margin-right":"10px"}}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"生成尺寸 --ar"),i("span",{style:{color:"#BBBBC1","font-size":"16px","margin-left":"20px"}},"选择生成图像的宽度X高度比例")],-1))),ze={class:"sizeBox"},Ne=["onClick"],Se={style:{height:"54px",display:"flex","justify-content":"center","align-items":"center","padding-top":"9px"}},Me=["src"],Re={style:{"margin-top":"5px"}},Ue={class:"contentBox3"},Pe=Q((()=>i("div",{class:"content3"},[i("div",{style:{width:"6px",height:"25px","background-color":"#4BA3FF","border-radius":"3px","margin-right":"10px"}}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"高级参数")],-1))),qe={class:"sliderBox"},Ge={style:{width:"207px"}},Oe={class:"sliderButton dark:bg-[#272740] bg-[#E8E8E8;]"},He=["onClick"],Ke=["onClick"],We={class:"contentBox4"},Xe=Q((()=>i("div",{class:"content4"},[i("div",{style:{width:"6px",height:"25px","background-color":"#4BA3FF","border-radius":"3px","margin-right":"10px"}}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"公开作品")],-1))),$e={class:"Show"},Qe=Q((()=>i("p",{class:"showText"},"开启后您的绘画生成结果将会在公共画廊中展示",-1))),Ye=u(e({__name:"text2image",setup(e){const a=v(),r=c(),{isMobile:u}=p(),D=g(),_=c();t((()=>_.isLogin));const z=t((()=>_.userInfo.avatar)),O=t((()=>_.userInfo.username)),H=t((()=>_.userBalance)),X=t((()=>_.mjDrawForm)),Q=g(),Ye=m(),Ze=g([]),ea=g(0);x({page:1,size:20}).then((e=>{Ze.value=e.data.rows,ea.value=1,localStorage.setItem("drawLogList",JSON.stringify(e.data.rows))}));const aa=g({status:0}),ta=e=>{e&&(N({jobId:e}).then((e=>{aa.value=e.data})),ra.value&&aa.value.status>=4&&clearTimeout(ra.value),aa.value.status>=4&&(D.value=0,y.emit("status",D.value)))},sa=g(),la=g(null),ia=()=>{la.value.scrollTo({top:0,behavior:"smooth"})},na=e=>{sa.value=e,ia(),ta(e),da()},oa=e=>{Q.value=e,ia(),ta(e),da()},ra=g(),da=()=>{ra.value&&clearTimeout(ra.value),ra.value=setTimeout((()=>{var e;if((null==(e=aa.value)?void 0:e.status)>=I.DRAWED)return ra.value&&clearTimeout(ra.value),D.value=0,y.emit("status",D.value),Ze.value.unshift(aa.value),y.emit("newDrawLogList",Ze.value),sa.value="",Q.value="",void x({page:1,size:20}).then((e=>{localStorage.setItem("drawLogList",JSON.stringify(e.data.rows))}));da(),Q.value?ta(Q.value):sa.value&&ta(sa.value)}),3e3)};f((()=>{ra.value&&clearTimeout(ra.value),ra.value=null,r.updateDrawId({id:""})}));const ua=[{name:"MJ6.0（最新）",intro:"全新6.0 ALPHA真实风格图像",id:0,value:"--v 6.0"},{name:"MJ5.2（真实细节）",intro:"增加真实风格图像细节",id:1,value:"--v 5.2"},{name:"MJ5.1（艺术）",intro:"专注真实艺术风格图像",id:2,value:"--v 5.1"},{name:"NJ5.0（动漫增强）",intro:"官方最新动漫模型同步",id:5,value:"--niji 5"},{name:"NJ4.0（动漫）",intro:"官方最新动漫模型同步",id:6,value:"--niji 4"}],va=g(0);const ca=g(!1);function pa(e){ca.value=e,e||(ga.value="")}const ga=g(""),ma=[{name:"头像框",src:"/src/views/midjourney/img/1.png",id:0,value:" 1:1"},{name:"手机壁纸",src:"/src/views/midjourney/img/2.png",id:1,value:" 1:2"},{name:"电脑壁纸",src:"/src/views/midjourney/img/3.png",id:2,value:" 16:9"},{name:"宣传海报",src:"/src/views/midjourney/img/4.png",id:3,value:" 9:16"},{name:"文章配图",src:"/src/views/midjourney/img/5.png",id:4,value:" 4:3"},{name:"媒体配图",src:"/src/views/midjourney/img/6.png",id:5,value:" 3:4"},{name:"横版名片",src:"/src/views/midjourney/img/7.png",id:6,value:" 3:2"},{name:"小红书图",src:"/src/views/midjourney/img/8.png",id:7,value:" 2:3"}],xa=g(0);const fa=g([{name:"--q 质量化",sliderValue:0,id:0,max:100,type:"--q"},{name:"--s 风格化",sliderValue:0,id:1,max:1e3,type:"--s"},{name:"--c 多样化",sliderValue:0,id:2,max:100,type:"--c"}]);const ya=g(!1),ka=g(0);function ba(){ya.value?ka.value=1:ka.value=0,console.log(ka.value)}function wa(){y.emit("--no",ga.value)}const ha=e=>{D.value=e},Ca=g([]),Aa=["jpg","jpeg","png"],Ba=e=>{var a;"pending"===e.file.status&&(a=e.file.file,new Promise(((e,t)=>{const s=new FileReader;s.readAsDataURL(a),s.onload=function(){const a=s.result.split(",")[1];e(a)},s.onerror=function(){t(new Error("Failed to load file"))}}))).then((e=>{let a="data:image/png;base64,"+e;Ca.value.push(a)})),"removed"===e.file.status&&(Ca.value=[]),y.emit("base64Array",Ca.value)},Fa=e=>{const a=e.file.type.split("/")[1];return e.fileList.length>=1?(Ye.warning("最多只能上传1张图片"),!1):Aa.includes(a)&&e.fileList.length<=1},ja=e=>{const a=e.file.name;X.value.extendParam=X.value.extendParam.filter((e=>!e.filename.includes(a))),Da()},Da=async()=>{_.updateMjDrawForm(X.value)};const Ia=g(!1);y.on("error",(e=>{Ia.value=e}));const La=()=>{Ia.value=!1},Ea=()=>{Ia.value=!1,_.checkAuth()&&a.updateVipDialog(!0)},Ta=g(!1);return y.emit("drawRoute",k.options.history.location),(e,a)=>{var t,r;return s(),l(n,null,[Ta.value?(s(),l("div",{key:0,class:"mask",onClick:a[0]||(a[0]=e=>Ta.value=!1)})):b("",!0),w(u)?(s(),l("div",Y,[h(U)])):b("",!0),Ia.value?(s(),l("div",Z,[h(P,{onClosePop:La,onBuyVip:Ea})])):b("",!0),w(u)?b("",!0):(s(),l("div",ee,[w(u)?b("",!0):(s(),C(W,{key:0})),i("div",ae,[i("div",te,[i("div",se,[i("div",le,[ie,i("div",ne,[oe,i("div",re,[(s(),l(n,null,o(ua,((e,a)=>i("div",{class:A(a==va.value?"active text-[#fff] dark:text-[#fff]":"contentItem  text-[#808080] dark:text-[#fff]"),key:e.id,onClick:t=>{return s={item:e,index:a},va.value=s.index,void y.emit("--v",s.item.value);var s}},[ue,i("div",null,[i("p",ve,d(e.name),1),i("p",ce,d(e.intro),1)])],10,de))),64))])])]),i("div",pe,[Ta.value?(s(),l("div",ge,[h(q)])):b("",!0),i("img",{class:"avatar",src:z.value?z.value:"./img/avatar.png",alt:"",onClick:a[1]||(a[1]=e=>Ta.value=!0)},null,8,me),i("div",xe,[i("p",fe,d(O.value),1),(null==(t=H.value)?void 0:t.expirationTime)?(s(),l("p",ye," 到期时间："+d(w(L)(null==(r=H.value)?void 0:r.expirationTime)),1)):(s(),l("p",ke,"未开通，点击了解特权"))])])]),i("div",be,[we,i("div",{style:{padding:"0 0 300px 0","overflow-y":"auto"},ref_key:"toTop",ref:la},[0!=Ze.value.length||Q.value?b("",!0):(s(),l("div",he,[0==ea.value?(s(),C($,{key:0})):b("",!0),1==ea.value?(s(),C(K,{key:1})):b("",!0)])),0!==Ze.value.length?(s(),l("div",Ce,[Q.value?(s(),C(S,{key:0,task:aa.value,onRefresh:oa},null,8,["task"])):b("",!0),sa.value?(s(),C(M,{key:1,task:aa.value,onNewJob:na},null,8,["task"])):b("",!0),i("div",Ae,[h(R,{drawLogList:Ze.value,onNewJobId:na},null,8,["drawLogList"])])])):b("",!0)],512),i("div",Be,[h(G,{onIsSettingShow:pa,onGetjobId:oa,onResquestStatus:ha})]),i("div",Fe,[i("div",{class:A(ca.value?"setting dark:bg-[#1A1A2F] bg-[#fff] shadow-md border-[1px] border-[#D7D7DA] dark:border-[transparent]":"none dark:bg-[#1A1A2F] bg-[#fff] shadow-md border-[1px] border-[#D7D7DA] dark:border-[transparent]")},[je,i("div",De,[i("div",Ie,[i("div",Le,[i("div",Ee,[h(w(E),{accept:".jpg,.jpeg,.png",action:"","default-upload":!1,"on-change":Ba,"on-before-upload":Fa,"on-remove":ja,"list-type":"image-card","directory-dnd":""})])]),Te,i("div",Ve,[B(i("textarea",{onInput:wa,class:"textBox bg-[#E8E8E8] dark:bg-[#1A1A2F] border-[1px] border-[#D1D1D1] dark:border-[#5B5B7A]","onUpdate:modelValue":a[2]||(a[2]=e=>ga.value=e),name:"",id:"",cols:"30",rows:"10",placeholder:"输入不想出现的描述词，如美女，帅哥 以逗号隔开"},null,544),[[F,ga.value]]),i("p",{style:{color:"#BBBBC1","font-size":"16px",position:"absolute",bottom:"16px",right:"21px",cursor:"pointer"},onClick:a[3]||(a[3]=e=>ga.value="")},"清空内容")])]),i("div",Je,[_e,i("div",ze,[(s(),l(n,null,o(ma,((e,a)=>i("div",{class:A(xa.value==a?"sizeSelect":"sizeItem"),key:e.id,onClick:e=>function(e){xa.value=e,y.emit("sizeValue","--ar"+ma[e].value)}(a)},[i("div",Se,[i("img",{src:e.src,alt:""},null,8,Me)]),i("p",Re,d(e.value),1),i("p",null,d(e.name),1)],10,Ne))),64))])]),i("div",Ue,[Pe,i("div",qe,[(s(!0),l(n,null,o(fa.value,((e,a)=>(s(),l("div",{class:"sliderItem",key:e.id},[i("p",null,d(e.name),1),i("div",Ge,[h(w(V),{vertical:""},{default:j((()=>[h(w(T),{value:e.sliderValue,"onUpdate:value":a=>e.sliderValue=a,step:1,max:e.max,onDragend:e=>function(e){let{sliderValue:a,type:t}=fa.value[e];0==e?y.emit("--q",{sliderValue:a,type:t}):1==e?y.emit("--s",{sliderValue:a,type:t}):2==e&&y.emit("--c",{sliderValue:a,type:t})}(a)},null,8,["value","onUpdate:value","max","onDragend"])])),_:2},1024)]),i("div",Oe,[i("p",{style:{cursor:"pointer"},onClick:e=>function(e){fa.value[e].sliderValue--}(a)},"-",8,He),i("p",null,d(e.sliderValue),1),i("p",{style:{cursor:"pointer"},onClick:e=>function(e){fa.value[e].sliderValue++}(a)},"+",8,Ke)])])))),128))])]),i("div",We,[Xe,i("div",$e,[Qe,h(w(V),null,{default:j((()=>[h(w(J),{value:ya.value,"onUpdate:value":[a[4]||(a[4]=e=>ya.value=e),ba],size:"small"},null,8,["value"])])),_:1})])])])],2)])])])])]))],64)}}}),[["__scopeId","data-v-d456eb3a"]]);export{Ye as default};
