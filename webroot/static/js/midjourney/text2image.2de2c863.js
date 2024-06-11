import{d as e,e as a,c as t,o as l,i as s,j as i,F as n,r as o,a3 as d,m as r,E as u,aI as c,b as v,g as p,y as m,u as g,aG as x,aF as f,an as y,a5 as k,l as b,h,n as w,k as F,M as B,a1 as C,a2 as j,w as A,aJ as I,aK as D,aM as L,_ as T,aL as V,aN as S,L as E,aO as _,C as z,D as M,ag as N}from"../main-e1cb34e4.js";import{_ as P,d as R,a as J,b as U,p as q,N as O,e as G,g as H,c as K}from"../popup/popup.37ac3f7f.js";import{S as W}from"../index/index.e39b3da2.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";import"../index/index.a4f65e28.js";import"../draw-fail/draw-fail.50b43169.js";import"../index/index.603ff8c1.js";const X={class:"loading-text"},$=u(e({__name:"Loading1",props:{gap:{default:10},progress:{default:0},tips:{default:""},bgColor:{},words:{default:["L","O","A","D","I","N","G"]}},setup(e){const u=e,c=a(),v=t((()=>c.theme)),p=t((()=>"dark"===v.value?"#fff":"#000"));return(e,a)=>(l(),s("div",{class:"loading",style:d({background:u.bgColor})},[i("div",X,[(l(!0),s(n,null,o(u.words,(e=>(l(),s("span",{key:e,style:d({margin:`0 ${u.gap}px`,color:p.value}),class:"loading-text-words"},r(e),5)))),128))])],4))}}),[["__scopeId","data-v-e7603c8e"]]),Q=e=>(z("data-v-54aaf505"),e=e(),M(),e),Y={key:1},Z={key:2},ee={key:3,class:"text-image-container flex flex-row dark:bg-[#010102] bg-[#F4F4F4]",style:{width:"100%"}},ae={style:{width:"100%"}},te={class:"h-full flex justify-start items-between",style:{height:"100vh",width:"100%",overflow:"hidden"}},le={class:"contentBox dark:bg-[#15171A] bg-[#FFFFFF]"},se={style:{display:"flex","margin-top":"12px"}},ie=["onClick"],ne=I('<div class="MJBox dark:bg-[#202B3A] bg-[#fff]" data-v-54aaf505><img class="logoImg" src="'+G+'" alt="" data-v-54aaf505><div class="titleBox" data-v-54aaf505><p class="title1 dark:text-[#CAC5C5] text-[#808080]" data-v-54aaf505>Mid Journey</p><p class="title2" data-v-54aaf505>AI</p></div><div class="intro dark:text-[#CAC5C5] text-[#808080]" data-v-54aaf505> 一款强大的人工智能绘画工具，为用户提供了各种创意的绘画功能，一次性生成4张高质量的艺术创作。 </div></div>',1),oe={class:"modeBox"},de={class:"modeTitle"},re=Q((()=>i("div",{style:{"font-size":"15px","font-weight":"500"}},"模型选择",-1))),ue={class:"modeImg"},ce=[Q((()=>i("div",{class:"imgText"},[i("p",null,"Midjourney"),i("p",null,"真实感强")],-1))),Q((()=>i("img",{src:"/static/png/image 6-ee2e06ca.png",alt:""},null,-1)))],ve=[Q((()=>i("div",{class:"imgText"},[i("p",null,"Niji"),i("p",null,"卡通动漫")],-1))),Q((()=>i("img",{src:"/static/png/image 6 (1)-dee0c9b5.png",alt:""},null,-1)))],pe={class:"modeSelect"},me=Q((()=>i("p",null,"版本",-1))),ge=["onClick"],xe={class:"styleMain"},fe={style:{display:"flex"}},ye=Q((()=>i("div",{style:{"font-size":"15px","font-weight":"500"}},"风格选择",-1))),ke=["onClick"],be={class:"styleImgBox"},he={class:"styleImgItem"},we=[Q((()=>i("div",{class:"styleImgText"},"国风盲盒",-1))),Q((()=>i("img",{src:"/static/png/Rectangle 7-645bc86c.png",alt:""},null,-1)))],Fe=Q((()=>i("div",{class:"expand dark:bg-[#010102] bg-[#F4F4F4]"},[i("img",{src:"/static/svg/Union-fd7f7f95.svg",alt:""})],-1))),Be={class:"padMapBox"},Ce={style:{display:"flex","justify-content":"space-between"}},je={style:{display:"flex"}},Ae=Q((()=>i("div",{style:{"font-size":"15px","font-weight":"500"}},"垫图图片（0-3张）",-1))),Ie=Q((()=>i("div",{class:"uploadBtn"},"上传网络图片",-1))),De=Q((()=>i("div",null,[i("p",{class:"padMapText text-[#A3A5A6] dark:text-[#76777A]",style:{"margin-top":"16px"}}," 如需垫图请至少上传一张图片，图片总大小上限20M"),i("p",{class:"padMapText text-[#FF3B30] dark:text-[#FF5E55]",style:{"margin-top":"6px"}}," 严禁上传违规图(政治人物、色情、暴恐等)违者100%封号")],-1))),Le={class:"upLoadContent"},Te={class:"contentCenter"},Ve=Q((()=>i("div",{class:"contentCenterTop dark:bg-[#1F1F38] border-b-[2px] bg-[#fff] dark:border-[#2C2C4F] border-[#D1D1D1]"},[i("span",{class:"text-[#808080] dark:text-[#fff]"},"#  创作中心"),i("span",{style:{color:"#EDB830"}},"    请遵守中华人民共和国网络安全法，严禁生成涉及政治人物、色情、恐怖等不良内容，如有违规封号处理")],-1))),Se={key:0,class:"w-full",style:{padding:"0 40px",position:"relative"}},Ee={key:1,class:"drawList"},_e={style:{"margin-top":"10px"}},ze={class:"bg-[#fff] dark:bg-[#1F1F38]",style:{padding:"0 40px","margin-top":"0px",position:"absolute",bottom:"0",width:"80%","z-index":"9999"}},Me={style:{position:"relative",margin:"0 40px"}},Ne=Q((()=>i("div",{class:"settingTitle dark:bg-[#272740] bg-[#E8E8E8]"},[i("img",{class:"settingImg",src:H,alt:""}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"高级选项")],-1))),Pe={class:"sttingContent"},Re={class:"contentBox1"},Je={class:"upLoadContent bg-[#fff] dark:bg-[#1A1A2F]"},Ue={class:""},qe=Q((()=>i("div",{class:"content1"},[i("div",{style:{width:"6px",height:"25px","background-color":"#4BA3FF","border-radius":"3px","margin-right":"10px"}}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"不想出现的词")],-1))),Oe={style:{position:"relative",width:"826px"}},Ge={class:"contentBox2"},He=Q((()=>i("div",{class:"content2"},[i("div",{style:{width:"6px",height:"25px","background-color":"#4BA3FF","border-radius":"3px","margin-right":"10px"}}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"生成尺寸 --ar"),i("span",{style:{color:"#BBBBC1","font-size":"16px","margin-left":"20px"}},"选择生成图像的宽度X高度比例")],-1))),Ke={class:"sizeBox"},We=["onClick"],Xe={style:{height:"54px",display:"flex","justify-content":"center","align-items":"center","padding-top":"9px"}},$e=["src"],Qe={style:{"margin-top":"5px"}},Ye={class:"contentBox3"},Ze=Q((()=>i("div",{class:"content3"},[i("div",{style:{width:"6px",height:"25px","background-color":"#4BA3FF","border-radius":"3px","margin-right":"10px"}}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"高级参数")],-1))),ea={class:"sliderBox"},aa={style:{width:"207px"}},ta={class:"sliderButton dark:bg-[#272740] bg-[#E8E8E8;]"},la=["onClick"],sa=["onClick"],ia={class:"contentBox4"},na=Q((()=>i("div",{class:"content4"},[i("div",{style:{width:"6px",height:"25px","background-color":"#4BA3FF","border-radius":"3px","margin-right":"10px"}}),i("p",{class:"settingText text-[#808080] dark:text-[#fff]"},"公开作品")],-1))),oa={class:"Show"},da=Q((()=>i("p",{class:"showText"},"开启后您的绘画生成结果将会在公共画廊中展示",-1))),ra=u(e({__name:"text2image",setup(e){const a=c(),d=v(),{isMobile:u}=p(),I=m(),z=v(),M=t((()=>z.isLogin));t((()=>z.userInfo.avatar)),t((()=>z.userInfo.username)),t((()=>z.userBalance));const G=t((()=>z.mjDrawForm)),H=m(),X=g(),Q=m([]),ra=m(0);x({page:1,size:20}).then((e=>{Q.value=e.data.rows,ra.value=1,localStorage.setItem("drawLogList",JSON.stringify(e.data.rows))}));const ua=m({status:0}),ca=e=>{e&&(N({jobId:e}).then((e=>{ua.value=e.data})),fa.value&&ua.value.status>=4&&clearTimeout(fa.value),ua.value.status>=4&&(I.value=0,y.emit("status",I.value)))},va=m(),pa=m(null),ma=()=>{pa.value.scrollTo({top:0,behavior:"smooth"})},ga=e=>{va.value=e,ma(),ca(e),ya()},xa=e=>{H.value=e,ma(),ca(e),ya()},fa=m(),ya=()=>{fa.value&&clearTimeout(fa.value),fa.value=setTimeout((()=>{var e;if((null==(e=ua.value)?void 0:e.status)>=D.DRAWED)return fa.value&&clearTimeout(fa.value),I.value=0,y.emit("status",I.value),Q.value.unshift(ua.value),y.emit("newDrawLogList",Q.value),va.value="",H.value="",void x({page:1,size:20}).then((e=>{localStorage.setItem("drawLogList",JSON.stringify(e.data.rows))}));ya(),H.value?ca(H.value):va.value&&ca(va.value)}),3e3)};f((()=>{fa.value&&clearTimeout(fa.value),fa.value=null,d.updateDrawId({id:""})}));const ka=[{name:"V 6.0",intro:"全新6.0 ALPHA真实风格图像",id:0,value:"--v 6.0"},{name:"V 5.2",intro:"增加真实风格图像细节",id:1,value:"--v 5.2"},{name:"V 5.1",intro:"专注真实艺术风格图像",id:2,value:"--v 5.1"},{name:"V 5.0",intro:"增加真实风格图像细节",id:3,value:"--v 5"}],ba=m(0);const ha=m(!1);function wa(e){ha.value=e,e||(Fa.value="")}const Fa=m(""),Ba=[{name:"头像框",src:"/src/views/midjourney/img/1.png",id:0,value:" 1:1"},{name:"手机壁纸",src:"/src/views/midjourney/img/2.png",id:1,value:" 1:2"},{name:"电脑壁纸",src:"/src/views/midjourney/img/3.png",id:2,value:" 16:9"},{name:"宣传海报",src:"/src/views/midjourney/img/4.png",id:3,value:" 9:16"},{name:"文章配图",src:"/src/views/midjourney/img/5.png",id:4,value:" 4:3"},{name:"媒体配图",src:"/src/views/midjourney/img/6.png",id:5,value:" 3:4"},{name:"横版名片",src:"/src/views/midjourney/img/7.png",id:6,value:" 3:2"},{name:"小红书图",src:"/src/views/midjourney/img/8.png",id:7,value:" 2:3"}],Ca=m(0);const ja=m([{name:"--q 质量化",sliderValue:0,id:0,max:100,type:"--q"},{name:"--s 风格化",sliderValue:0,id:1,max:1e3,type:"--s"},{name:"--c 多样化",sliderValue:0,id:2,max:100,type:"--c"}]);const Aa=m(!1),Ia=m(0);function Da(){Aa.value?Ia.value=1:Ia.value=0,console.log(Ia.value)}function La(){y.emit("--no",Fa.value)}const Ta=e=>{I.value=e},Va=m([]),Sa=["jpg","jpeg","png"],Ea=e=>{var a;"pending"===e.file.status&&(a=e.file.file,new Promise(((e,t)=>{const l=new FileReader;l.readAsDataURL(a),l.onload=function(){const a=l.result.split(",")[1];e(a)},l.onerror=function(){t(new Error("Failed to load file"))}}))).then((e=>{let a="data:image/png;base64,"+e;Va.value.push(a)})),"removed"===e.file.status&&(Va.value=[]),y.emit("base64Array",Va.value)},_a=e=>{const a=e.file.type.split("/")[1];return e.fileList.length>=3?(X.warning("最多只能上传3张图片"),!1):Sa.includes(a)&&e.fileList.length<=3},za=e=>{const a=e.file.name;G.value.extendParam=G.value.extendParam.filter((e=>!e.filename.includes(a))),Ma()},Ma=async()=>{z.updateMjDrawForm(G.value)};const Na=m(!1);y.on("error",(e=>{Na.value=e}));const Pa=()=>{Na.value=!1},Ra=()=>{Na.value=!1,z.checkAuth()&&a.updateVipDialog(!0)},Ja=m(!1);y.emit("drawRoute",k.options.history.location);const Ua=m("/midjourney/text-to-image");Ua.value=k.currentRoute.value.fullPath;const qa=m(0);function Oa(e){qa.value=e}const Ga=m([{name:"推荐",id:0},{name:"龙年限定",id:1},{name:"人物",id:2},{name:"风景",id:3},{name:"商业",id:4},{name:"设计",id:5},{name:"测试1",id:6},{name:"测试2",id:7}]),Ha=m(0),Ka=m(null);return(e,a)=>(l(),s(n,null,[Ja.value?(l(),s("div",{key:0,class:"mask",onClick:a[0]||(a[0]=e=>Ja.value=!1)})):b("",!0),h(u)?(l(),s("div",Y,[w(U)])):b("",!0),Na.value?(l(),s("div",Z,[w(q,{onClosePop:Pa,onBuyVip:Ra})])):b("",!0),h(u)?b("",!0):(l(),s("div",ee,[h(u)?b("",!0):(l(),F(W,{key:0})),i("div",ae,[i("div",te,[i("div",le,[i("div",se,[(l(!0),s(n,null,o(h(L),(e=>(l(),s("div",{class:B(Ua.value==e.menuPath?"activeSelectItem text-[#fff]":"selectItem text-[#808080] bg-[#F4F4F4;] dark:bg-[#010102] dark:text-[#fff]"),key:e.key,onClick:a=>function(e){k.replace({path:e.menuPath}),("图生图"==e.menuName||"图生文"==e.menuName)&&y.emit("upLoadShow",1)}(e)},r(e.menuName),11,ie)))),128))]),ne,i("div",oe,[i("div",de,[w(h(T),{icon:"material-symbols-light:expand-more-rounded",class:"text-2xl"}),re]),i("div",ue,[i("div",{style:{"margin-right":"8px"},onClick:a[1]||(a[1]=e=>Oa(0)),class:B(0==qa.value?"select":"unSelect")},ce,2),i("div",{onClick:a[2]||(a[2]=e=>Oa(1)),class:B(1==qa.value?"select":"unSelect")},ve,2)]),i("div",pe,[me,(l(),s(n,null,o(ka,((e,a)=>i("div",{class:B(ba.value==a?"modeItemSelect":"modeItem"),key:e.id,onClick:t=>{return l={item:e,index:a},ba.value=l.index,void y.emit("--v",l.item.value);var l}},r(e.name),11,ge))),64))])]),i("div",xe,[i("div",fe,[w(h(T),{icon:"material-symbols-light:expand-more-rounded",class:"text-2xl"}),ye]),i("div",{class:"styleBox",ref_key:"container",ref:Ka},[(l(!0),s(n,null,o(Ga.value,((e,a)=>(l(),s("div",{class:B(Ha.value==a?"styleItemSelect":"styleItem"),onClick:e=>function(e){Ha.value=e;let a=Ka.value;(30*e>=120||30*e<=150)&&a.scrollTo({left:20*e,behavior:"smooth"})}(a),key:e.id},r(e.name),11,ke)))),128))],512),i("div",be,[(l(),s(n,null,o(9,(e=>i("div",he,we))),64))]),Fe]),i("div",Be,[i("div",Ce,[i("div",je,[w(h(T),{icon:"material-symbols-light:expand-more-rounded",class:"text-2xl"}),Ae]),Ie]),De,i("div",Le,[i("div",null,[w(h(V),{accept:".jpg,.jpeg,.png",action:"","default-upload":!1,"on-change":Ea,"on-before-upload":_a,"on-remove":za,"list-type":"image-card","directory-dnd":""})])])])]),i("div",Te,[Ve,i("div",{style:{padding:"0 0 300px 0","overflow-y":"auto"},ref_key:"toTop",ref:pa},[0!=Q.value.length||H.value?b("",!0):(l(),s("div",Se,[0==ra.value||M.value?(l(),F($,{key:0})):b("",!0),0==ra.value&&M.value?b("",!0):(l(),F(K,{key:1}))])),0!==Q.value.length?(l(),s("div",Ee,[H.value?(l(),F(P,{key:0,task:ua.value,onRefresh:xa},null,8,["task"])):b("",!0),va.value?(l(),F(R,{key:1,task:ua.value,onNewJob:ga},null,8,["task"])):b("",!0),i("div",_e,[w(J,{drawLogList:Q.value,onNewJobId:ga},null,8,["drawLogList"])])])):b("",!0)],512),i("div",ze,[w(O,{onIsSettingShow:wa,onGetjobId:xa,onResquestStatus:Ta})]),i("div",Me,[i("div",{class:B(ha.value?"setting dark:bg-[#1A1A2F] bg-[#fff] shadow-md border-[1px] border-[#D7D7DA] dark:border-[transparent]":"none dark:bg-[#1A1A2F] bg-[#fff] shadow-md border-[1px] border-[#D7D7DA] dark:border-[transparent]")},[Ne,i("div",Pe,[i("div",Re,[i("div",Je,[i("div",Ue,[w(h(V),{accept:".jpg,.jpeg,.png",action:"","default-upload":!1,"on-change":Ea,"on-before-upload":_a,"on-remove":za,"list-type":"image-card","directory-dnd":""})])]),qe,i("div",Oe,[C(i("textarea",{onInput:La,class:"textBox bg-[#E8E8E8] dark:bg-[#1A1A2F] border-[1px] border-[#D1D1D1] dark:border-[#5B5B7A]","onUpdate:modelValue":a[3]||(a[3]=e=>Fa.value=e),name:"",id:"",cols:"30",rows:"10",placeholder:"输入不想出现的描述词，如美女，帅哥 以逗号隔开"},null,544),[[j,Fa.value]]),i("p",{style:{color:"#BBBBC1","font-size":"16px",position:"absolute",bottom:"16px",right:"21px",cursor:"pointer"},onClick:a[4]||(a[4]=e=>Fa.value="")},"清空内容")])]),i("div",Ge,[He,i("div",Ke,[(l(),s(n,null,o(Ba,((e,a)=>i("div",{class:B(Ca.value==a?"sizeSelect":"sizeItem"),key:e.id,onClick:e=>function(e){Ca.value=e,y.emit("sizeValue","--ar"+Ba[e].value)}(a)},[i("div",Xe,[i("img",{src:e.src,alt:""},null,8,$e)]),i("p",Qe,r(e.value),1),i("p",null,r(e.name),1)],10,We))),64))])]),i("div",Ye,[Ze,i("div",ea,[(l(!0),s(n,null,o(ja.value,((e,a)=>(l(),s("div",{class:"sliderItem",key:e.id},[i("p",null,r(e.name),1),i("div",aa,[w(h(E),{vertical:""},{default:A((()=>[w(h(S),{value:e.sliderValue,"onUpdate:value":a=>e.sliderValue=a,step:1,max:e.max,onDragend:e=>function(e){let{sliderValue:a,type:t}=ja.value[e];0==e?y.emit("--q",{sliderValue:a,type:t}):1==e?y.emit("--s",{sliderValue:a,type:t}):2==e&&y.emit("--c",{sliderValue:a,type:t})}(a)},null,8,["value","onUpdate:value","max","onDragend"])])),_:2},1024)]),i("div",ta,[i("p",{style:{cursor:"pointer"},onClick:e=>function(e){ja.value[e].sliderValue--}(a)},"-",8,la),i("p",null,r(e.sliderValue),1),i("p",{style:{cursor:"pointer"},onClick:e=>function(e){ja.value[e].sliderValue++}(a)},"+",8,sa)])])))),128))])]),i("div",ia,[na,i("div",oa,[da,w(h(E),null,{default:A((()=>[w(h(_),{value:Aa.value,"onUpdate:value":[a[5]||(a[5]=e=>Aa.value=e),Da],size:"small"},null,8,["value"])])),_:1})])])])],2)])])])])]))],64))}}),[["__scopeId","data-v-54aaf505"]]);export{ra as default};
