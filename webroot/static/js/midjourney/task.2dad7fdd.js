import{d as e,g as t,c as a,k as l,w as s,h as i,aw as n,o as r,i as o,r as c,ap as d,ax as u,F as p,aq as g,b,S as x,u as k,ay as m,y,j as f,m as v,n as h,_ as w,Z as E,l as j,K as T,az as _,Y as D,N as Z,al as L,aA as C,a1 as U,aB as V,aC as F,aD as O,C as A,D as S,ad as I,an as R,ae as B,E as z,R as M,G as N,U as P,z as G,V as X,aE as q,a3 as Y,a6 as H,aF as W,aG as K,aH as Q,aI as J}from"../main-c568908e.js";import{d as $,_ as ee}from"../draw-fail/draw-fail.8f549170.js";import{c as te}from"../index/index.a4f65e28.js";import{u as ae}from"../index/index.22c4b11b.js";import{S as le}from"../index/index.cf96d6c5.js";const se=e({__name:"taskTab",props:{active:{type:Number,required:!0,default:0}},emits:["change"],setup(e,{emit:b}){const{isMobile:x}=t(),k=e,m=a((()=>k.active)),y=b,f=e=>{y("change",n[e])},v=a((()=>x?"width: auto; text-align: center;":"min-width: 90px; text-align: center;"));return(e,t)=>(r(),l(i(g),{size:i(x)?"small":"large",modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=e=>m.value=e),type:"card",animated:"",trigger:"click","tab-style":v.value,"onUpdate:value":f},{default:s((()=>[(r(!0),o(p,null,c(i(u),(e=>(r(),l(i(d),{key:e.label,name:e.label},null,8,["name"])))),128))])),_:1},8,["size","modelValue","tab-style"]))}}),ie=e=>(A("data-v-c6726639"),e=e(),S(),e),ne={class:"border box-border border-[#eaeaef] dark:border-[#444456] rounded-xl min-h-fit flex-1"},re={class:"pt-2 px-1 pb-1"},oe={class:"flex justify-between items-center"},ce={class:"border pt-0.5 px-1 text-[12px] scale-95 rounded dark:text-[#00FFC0] dark:border-[#00FFC0] text-[#001EEF] border-[#001EEF]"},de={class:"flex justify-between"},ue=ie((()=>f("div",null," 发布到广场 ",-1))),pe=ie((()=>f("div",null," 复制最终执行提示词 ",-1))),ge=ie((()=>f("div",null," 下载图片 ",-1))),be=ie((()=>f("div",null," 删除任务 ",-1))),xe=ie((()=>f("div",null," 收藏此任务 ",-1))),ke={class:"my-2"},me={key:0,class:"whitespace-nowrap overflow-hidden text-ellipsis"},ye={key:1,class:"",style:{height:"23px"}},fe={key:0,class:"bg-[#FFFFFF] dark:bg-[#15171A] h-full w-full flex flex-col justify-center items-center"},ve=["src"],he={key:1,class:"bg-[#FFFFFF] dark:bg-[#15171A] h-full w-full flex flex-col justify-center items-center"},we=["src"],Ee={key:2,class:"bg-[#FFFFFF] dark:bg-[#15171A] h-full w-full flex flex-col justify-center items-center"},je=["src"],Te={key:3,style:{"padding-top":"30%"}},_e=[ie((()=>f("div",{class:"loader"},null,-1)))],De={key:4,class:"flex items-center justify-center flex-col"},Ze={class:"px-2 py-2 rounded-br-xl rounded-bl-xl h-[130px]"},Le={key:0,class:"flex justify-center h-[80px]"},Ce={key:0,class:"progress"},Ue=ie((()=>f("span",null,"：",-1))),Ve={style:{color:"red"}},Fe={key:1,class:"flex items-center justify-center h-[80px]"},Oe={class:"text-center flex items-center"},Ae={style:{display:"flex"}},Se={key:0,class:"h-[80px]",style:{"padding-left":"0"}},Ie={key:0,class:"flex justify-start btnBox"},Re={style:{display:"flex","align-items":"center"}},Be=ie((()=>f("p",{style:{"margin-top":"4px","margin-right":"4px"}},"调整: ",-1))),ze=ie((()=>f("img",{style:{width:"14px",height:"14px","margin-top":"4px","margin-right":"4px"},src:ee,alt:""},null,-1))),Me=ie((()=>f("div",{style:{width:"280px"}},"参数释义：Vary 以当前图片为基础调整图片",-1))),Ne={key:0},Pe=["onClick"],Ge={key:1},Xe={key:0,style:{width:"60px"}},qe={key:0,class:"buttonText dark:bg-[#484A4D] bg-[#D1D2D3]"},Ye={key:1,class:"buttonText bg-[#3378ED]"},He={class:"buttonText"},We={key:1,class:"flex justify-start btnBox"},Ke={style:{"margin-top":"4px",display:"flex","align-items":"center"}},Qe=ie((()=>f("p",{style:{"margin-right":"4px"}},"扩图:",-1))),Je=ie((()=>f("img",{style:{width:"14px",height:"14px","margin-right":"4px"},src:ee,alt:""},null,-1))),$e=ie((()=>f("div",{style:{width:"280px"}},"参数释义：ZoomOut ，对当前图片按照倍数进行扩大，周围自动AI填充，可无限重复无限扩大",-1))),et={key:0},tt=["onClick"],at={key:1},lt={key:0,style:{width:"60px"}},st={key:0,class:"buttonText dark:bg-[#484A4D] bg-[#D1D2D3]"},it={key:1,class:"buttonText bg-[#3378ED]"},nt={class:"buttonText"},rt={key:2,class:"flex justify-start btnBox"},ot={style:{display:"flex","align-items":"center"}},ct=ie((()=>f("p",{style:{"margin-right":"4px"}},"拉伸:",-1))),dt=ie((()=>f("img",{style:{width:"14px",height:"14px","margin-right":"4px"},src:ee,alt:""},null,-1))),ut=ie((()=>f("div",{style:{width:"280px"}},"参数释义：对当前图片进行各个方向的拓展",-1))),pt={key:0},gt=["onClick"],bt={key:1},xt={key:0,style:{width:"60px"}},kt={class:"buttonText dark:bg-[#484A4D] bg-[#D1D2D3]"},mt={key:1,class:"buttonText1 bg-[#3378ED]"},yt={class:"buttonText"},ft={key:3,class:"flex justify-start btnBox"},vt={style:{display:"flex","align-items":"center"}},ht=ie((()=>f("p",{style:{"margin-top":"4px","margin-right":"10px"}},"编辑: ",-1))),wt=ie((()=>f("img",{style:{width:"14px",height:"14px","margin-top":"4px","margin-right":"10px"},src:ee,alt:""},null,-1))),Et=ie((()=>f("div",{style:{width:"280px"}},"参数释义：选中并放大某张图片，放大后可进行下一步的绘画操作，局部重绘、平移、扩图等。",-1))),jt={key:0},Tt=["onClick"],_t={key:1},Dt={key:0,class:"buttonText dark:bg-[#484A4D] bg-[#D1D2D3]"},Zt={key:1,class:"buttonText bg-[#3378ED]"},Lt={class:"buttonText"},Ct={key:4,class:"flex justify-start btnBox"},Ut={style:{display:"flex"}},Vt=ie((()=>f("p",{style:{"margin-top":"4px","margin-right":"10px"}},"变化: ",-1))),Ft=ie((()=>f("img",{style:{width:"14px",height:"14px","margin-top":"4px","margin-right":"10px"},src:ee,alt:""},null,-1))),Ot=ie((()=>f("div",{style:{width:"280px"}},"参数释义：以某张图片为基准重新生成 如 V1 则变换第一张图片，以此类推",-1))),At={key:0},St=["onClick"],It={key:1},Rt={key:0,class:"buttonText dark:bg-[#484A4D] bg-[#D1D2D3]"},Bt={key:1,class:"buttonText bg-[#3378ED]"},zt={class:"buttonText"},Mt={key:5,class:"flex justify-start btnBox"},Nt=ie((()=>f("div",{style:{"margin-top":"4px",display:"flex","align-items":"center"}},[f("p",null,"描述：")],-1))),Pt={key:0},Gt=["onClick"],Xt={key:1},qt={key:0,class:"buttonText dark:bg-[#484A4D] bg-[#D1D2D3]"},Yt={key:1,class:"buttonText1 bg-[#3378ED]"},Ht={class:"buttonText"},Wt={class:"flex justify-between text-[12px] mt-4 select-none"},Kt={class:"text-[#3144F1] dark:text-[#fff]",style:{color:"#3144F1"}},Qt=z(e({__name:"taskItem1",props:{task:{type:Object,default:()=>({prompt:"",image:"",time:"",updatedAt:""})},chat:{type:String,default:"task"}},emits:["fresh"],setup(e,{emit:t}){const{updateSendSquire:n,updateDrawId:d,updatePreview:u}=b(),g=x(),A=k(),S=ae(),z=b(),M=e,N=t,P=a((()=>e=>{const{progress:t,status:a}=e;return 1===a?"正在排队中...":3===a?"成功":2===a&&100!==t?"正在绘制中...":2===a&&100===t?"正在存储图片中...":4===a?"绘图失败":5===a?"绘图取消":6===a?"窗口等待":"绘图失败"})),G=a((()=>e=>1===e?"排队中":2===e?"绘制中":3===e?"成功":4===e?"失败":5===e?"超时":"-"));a((()=>e=>{if(!e)return"";return parseInt(e/60+"")+"分"+parseInt(String(e%60))+"秒"}));const X=a((()=>e=>m[e]));a((()=>{var e;const t=(null==(e=M.task)?void 0:e.buttons)||[],a=[],l=[],s=[],i=[],n=[];return t.forEach((e=>{["U1","U2","U3","U4"].includes(e.label)?a.push(e):["V1","V2","V3","V4"].includes(e.label)?l.push(e):e.label.startsWith("Upscale")||e.label.startsWith("Vary")?s.push(e):e.label?i.push(e):n.push(e)})),[a,l,s,i,n].filter((e=>e.length))}));const q=async(e,t)=>{if(!z.isLogin)return A.warning("请先登录"),void z.setLoginDialog(!0);const a=(e=>{if(["U1","U2","U3","U4"].includes(e.label))return B.U_SCALE;if(["V1","V2","V3","V4"].includes(e.label))return B.V_EXPAND;if(!e.label&&e.emoji){if("🔄"===e.emoji)return B.REGENERATE;if(["⬅️","➡️","⬆️","⬇️"].includes(e.emoji))return B.STRETCH;if(["1️⃣","2️⃣","3️⃣","4️⃣"].includes(e.emoji))return B.IMAGE_TO_TEXT_ACTION}return e.label.includes("Upscale (4x)")?B.UPSCALE_4X:e.label.includes("Upscale (2x)")?B.UPSCALE_2X:e.label.includes("Vary (Subtle)")?B.VARY_SUBTLE:e.label.includes("Vary (Strong)")?B.VARY_STRONG:e.label.includes("Vary (Region)")?B.VARY_REGION:e.label.includes("Make Square")?B.SQUARE:e.label.includes("Zoom Out 2x")?B.ZOOM2X:e.label.includes("Zoom Out 1.5x")?B.ZOOM1_5X:e.label.includes("Custom Zoom")?B.ZOOM_CUSTOM:e.label.includes("Redo Upscale (Subtle)")?B.REDO_UPSCALE_SUBTLE:e.label.includes("Redo Upscale (Creative)")?B.REDO_UPSCALE_CREATIVE:B.NONE})(t);await async function(e){const t=await I({type:R.IMAGE_ACTION,params:e}).then((e=>e.data));d({id:t}),t&&A.success("提交任务成功！")}({action:a,taskId:e.id,customId:t.customId,messageFlags:e.messageFlags||0}),N("fresh")};const Y=y(["V1","V2","V3","V4"]);return(t,a)=>(r(),o("div",ne,[f("div",re,[f("div",oe,[f("p",ce,v(X.value(e.task.action))+" - "+v(G.value(e.task.status)),1),f("div",de,[3===e.task.status?(r(),l(i(E),{key:0,placement:"top-start",trigger:"hover"},{trigger:s((()=>[h(i(w),{icon:"material-symbols:published-with-changes-rounded",onClick:a[0]||(a[0]=t=>(async e=>{n(!0,e.id)})(e.task)),class:"text-[14px] cursor-pointer",style:{margin:"0 5px"}})])),default:s((()=>[ue])),_:1})):j("",!0),h(i(E),{placement:"top-start",trigger:"hover"},{trigger:s((()=>[h(i(w),{icon:"uil:file-copy-alt",onClick:a[1]||(a[1]=t=>(e=>{const{fullPrompt:t}=e;te({text:t}),A.success("复制prompt完成！")})(e.task)),class:"text-[14px] cursor-pointer",style:{margin:"0 5px"}})])),default:s((()=>[pe])),_:1}),3===e.task.status?(r(),l(i(E),{key:1,placement:"top-start",trigger:"hover"},{trigger:s((()=>[h(i(w),{icon:"basil:download-outline",onClick:a[2]||(a[2]=t=>async function({imageUrl:e}){e?g.info({title:"下载图片",content:"是否确认下载当前图片",positiveText:"下载",negativeText:"取消",onPositiveClick:async()=>{const t=e.split("/"),a=await F.post("/api/midjourney/download",{url:e},{responseType:"blob"}),l=new Blob([a.data],{type:a.headers["content-type"]}),s=window.URL.createObjectURL(l),i=document.createElement("a");i.href=s,i.download=t[t.length-1],i.click()}}):A.warning("图片未生成完成暂不能下载")}(e.task)),class:"text-[15px] cursor-pointer",style:{margin:"0 5px"}})])),default:s((()=>[ge])),_:1})):j("",!0),h(i(E),{placement:"top-start",trigger:"hover"},{trigger:s((()=>[h(i(w),{onClick:a[3]||(a[3]=t=>(e=>{const{favorite:t}=e;g.create({type:"info",title:"确认删除",content:(1===t?"当前任务已被收藏，删除绘画任务会导致收藏失效且不可找回，确定删除":"删除绘画任务不可找回，确定删除")+"？",positiveText:"确定",negativeText:"取消",maskClosable:!1,onPositiveClick:async()=>{await O({id:e.id}).then((e=>e.data))&&A.success("删除成功"),N("fresh")},onNegativeClick:()=>{}})})(e.task)),icon:"material-symbols:delete-outline",class:"text-[15px] cursor-pointer",style:{margin:"0 5px"}})])),default:s((()=>[be])),_:1}),h(i(E),{placement:"top-start",trigger:"hover"},{trigger:s((()=>[h(i(w),{onClick:a[4]||(a[4]=t=>(async e=>{const{id:t,favorite:a}=e;await V({id:t,favorite:1===a?0:1}).then((e=>e.data))&&A.success((0===a?"收藏":"取消收藏")+" 成功"),N("fresh")})(e.task)),icon:0===e.task.favorite?"icon-park-outline:collection-files":"icon-park-solid:collection-files",class:"text-[13px] cursor-pointer",style:{margin:"2px 5px 0 5px"}},null,8,["icon"])])),default:s((()=>[xe])),_:1})])]),f("div",ke,[h(i(E),{placement:"top",trigger:"hover",width:320},{trigger:s((()=>[e.task.prompt?(r(),o("h3",me,v(e.task.prompt),1)):(r(),o("div",ye))])),default:s((()=>[f("div",null,v(e.task.prompt),1)])),_:1})]),f("div",{class:T(["relative z-0 w-auto flex align-center min-h-[260px] overflow-hidden contain",["chat-history"===e.chat?"h-[320px]":"h-[260px] "]]),style:{"justify-content":"center"}},[4===e.task.status?(r(),o("div",fe,[f("img",{class:"w-auto object-contain px-24",src:i($),alt:""},null,8,ve)])):5===e.task.status?(r(),o("div",he,[f("img",{class:"w-auto object-contain px-24",src:i($),alt:""},null,8,we)])):6===e.task.status?(r(),o("div",Ee,[f("img",{class:"w-auto object-contain px-24",src:i($),alt:""},null,8,je)])):e.task.imageUrl||e.task.progress?(r(),o("div",De,[h(i(_),{class:"w-full cursor-pointer bg-[#f9f9f9] dark:bg-[transparent] h-full flex justify-center","preview-src":e.task.imageUrl,"object-fit":"contain",src:e.task.imageUrl||""},null,8,["preview-src","src"])])):(r(),o("div",Te,_e))],2)]),f("div",Ze,[e.task.imageUrl||null!==e.task.progress?j("",!0):(r(),o("div",Le,[P.value(e.task)?(r(),o("div",Ce,[f("span",null,v(P.value(e.task)),1),4===e.task.status?(r(),o(p,{key:0},[Ue,f("span",Ve,v(e.task.failReason),1)],64)):j("",!0),6===e.task.status?(r(),l(i(Z),{key:1,type:"primary",style:{"margin-left":"12px"},onClick:a[5]||(a[5]=t=>{var a;9===(a=e.task).action?S.openRegionModal(!0,{customId:a.customId,taskId:a.id,mode:a.mode}):z.updateRemixModal(!0,{prompt:"",taskId:a.id,customId:a.customId})})},{default:s((()=>[D(" 补充描述词 ")])),_:1})):j("",!0)])):j("",!0)])),null!==e.task.progress&&e.task.progress>=0&&e.task.progress<100?(r(),o("div",Fe,[f("p",Oe,[h(i(w),{icon:"eos-icons:bubble-loading",class:"mr-1"}),D(" 进度："+v(e.task.progress+"%"),1)])])):j("",!0),f("div",Ae,[100===e.task.progress?(r(),o("div",Se,[4==e.task.action?(r(),o("div",Ie,[f("div",Re,[Be,h(i(E),{trigger:"hover",placement:"top"},{trigger:s((()=>[ze])),default:s((()=>[Me])),_:1})]),(r(!0),o(p,null,c(e.task.buttons,(t=>(r(),o(p,null,[-1!=t.label.indexOf("Vary")?(r(),o("div",Ne,[h(i(E),{trigger:"hover"},{trigger:s((()=>[f("button",{class:"buttonBox",style:{margin:"4px 4px 0 4px"},onClick:a=>q(e.task,t)},[t.isSuccse?(r(),l(i(L),{key:0,size:8,class:"buttonText",stroke:"#7E7E8D"})):(r(),o("div",Ge,[t.label?(r(),o("div",Xe,[t.label?(r(),o("p",qe,v(t.emoji)+" "+v(t.ZnLabel),1)):j("",!0)])):(r(),o("p",Ye,v(t.emoji),1))]))],8,Pe)])),default:s((()=>[f("p",He,v(t.ZnLabel||t.emoji),1)])),_:2},1024)])):j("",!0)],64)))),256))])):j("",!0),4==e.task.action&&3==e.task.status?(r(),o("div",We,[f("div",Ke,[Qe,h(i(E),{trigger:"hover",placement:"top"},{trigger:s((()=>[Je])),default:s((()=>[$e])),_:1})]),(r(!0),o(p,null,c(e.task.buttons,(t=>(r(),o(p,null,[-1!=t.label.indexOf("Z")?(r(),o("div",et,[h(i(E),{trigger:"hover"},{trigger:s((()=>[f("button",{class:"buttonBox",style:{margin:"4px 4px 0 4px"},onClick:a=>q(e.task,t)},[t.isSuccse?(r(),l(i(L),{key:0,size:8,class:"buttonText",stroke:"#7E7E8D"})):(r(),o("div",at,[t.label?(r(),o("div",lt,[t.label?(r(),o("p",st,v(t.emoji)+" "+v(t.ZnLabel),1)):j("",!0)])):(r(),o("p",it,v(t.emoji),1))]))],8,tt)])),default:s((()=>[f("p",nt,v(t.ZnLabel||t.emoji),1)])),_:2},1024)])):j("",!0)],64)))),256))])):j("",!0),4==e.task.action&&3==e.task.status?(r(),o("div",rt,[f("div",ot,[ct,h(i(E),{trigger:"hover",placement:"top"},{trigger:s((()=>[dt])),default:s((()=>[ut])),_:1})]),(r(!0),o(p,null,c(e.task.buttons,(t=>(r(),o(p,null,[t.label?j("",!0):(r(),o("div",pt,[h(i(E),{trigger:"hover"},{trigger:s((()=>[f("button",{class:"buttonBox",style:{margin:"4px 4px 0 4px"},onClick:a=>q(e.task,t)},[t.isSuccse?(r(),l(i(L),{key:0,size:8,class:"buttonText",stroke:"#7E7E8D"})):(r(),o("div",bt,[t.label?(r(),o("div",xt,[f("p",kt,v(t.label),1)])):(r(),o("p",mt,v(t.emoji),1))]))],8,gt)])),default:s((()=>[f("p",yt,v(t.label||t.emoji),1)])),_:2},1024)]))],64)))),256))])):j("",!0),1==e.task.action&&3==e.task.status?(r(),o("div",ft,[f("div",vt,[ht,h(i(E),{trigger:"hover",placement:"top"},{trigger:s((()=>[wt])),default:s((()=>[Et])),_:1})]),(r(!0),o(p,null,c(e.task.buttons,(t=>(r(),o(p,null,[-1==Y.value.indexOf(t.label)?(r(),o("div",jt,[h(i(E),{trigger:"hover"},{trigger:s((()=>[f("button",{class:"buttonBox",style:{margin:"4px 4px 0 4px"},onClick:a=>q(e.task,t)},[t.isSuccse?(r(),l(i(L),{key:0,size:8,class:"buttonText",stroke:"#7E7E8D"})):(r(),o("div",_t,[t.label?(r(),o("p",Dt,v(t.ZnLabel),1)):(r(),o("p",Zt,v(t.emoji),1))]))],8,Tt)])),default:s((()=>[f("p",Lt,v(t.ZnLabel||t.emoji),1)])),_:2},1024)])):j("",!0)],64)))),256))])):j("",!0),1==e.task.action&&3==e.task.status?(r(),o("div",Ct,[f("div",Ut,[Vt,h(i(E),{trigger:"hover",placement:"top"},{trigger:s((()=>[Ft])),default:s((()=>[Ot])),_:1})]),(r(!0),o(p,null,c(e.task.buttons,(t=>(r(),o(p,null,[-1!=Y.value.indexOf(t.label)?(r(),o("div",At,[h(i(E),{trigger:"hover"},{trigger:s((()=>[f("button",{class:"buttonBox",style:{margin:"4px 4px 0 4px"},onClick:a=>q(e.task,t)},[t.isSuccse?(r(),l(i(L),{key:0,size:8,class:"buttonText",stroke:"#7E7E8D"})):(r(),o("div",It,[t.label?(r(),o("p",Rt,v(t.ZnLabel),1)):(r(),o("p",Bt,v(t.emoji),1))]))],8,St)])),default:s((()=>[f("p",zt,v(t.ZnLabel||t.emoji),1)])),_:2},1024)])):j("",!0)],64)))),256))])):j("",!0),2==e.task.action&&3==e.task.status?(r(),o("div",Mt,[Nt,(r(!0),o(p,null,c(e.task.buttons,(t=>(r(),o(p,null,[t.label?j("",!0):(r(),o("div",Pt,[h(i(E),{trigger:"hover"},{trigger:s((()=>[f("button",{class:"buttonBox",style:{margin:"4px 4px 0 4px"},onClick:a=>q(e.task,t)},[t.isSuccse?(r(),l(i(L),{key:0,size:8,class:"buttonText",stroke:"#7E7E8D"})):(r(),o("div",Xt,[t.label?(r(),o("p",qt,v(t.label),1)):(r(),o("p",Yt,v(t.emoji),1))]))],8,Gt)])),default:s((()=>[f("p",Ht,v(t.label||t.emoji),1)])),_:2},1024)]))],64)))),256))])):j("",!0)])):j("",!0)]),f("div",Wt,[f("div",null,[f("p",Kt,"时间："+v(i(C)(e.task.createdAt)),1)]),f("div",null,[f("p",{style:U({color:1===e.task.mode?"#F1A231":2===e.task.mode?"#fff":3===e.task.mode?"#23DCB5":"red"})},v(1===e.task.mode?"快速模式":2===e.task.mode?"慢速模式":3===e.task.mode?"Turbo模式":"模式错误"),5)])])])]))}}),[["__scopeId","data-v-c6726639"]]),Jt={style:{position:"absolute"}},$t={class:"bg-[#fff] dark:bg-[#15171A] mainBox"},ea={class:"h-full overflow-y-auto",style:{height:"82vh"}},ta={key:0,class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"},aa={class:"mb-4 border border-gray-200 dark:border-gray-600 p-2 rounded-xl"},la={class:"flex justify-between"},sa={class:"flex justify-between"},ia={key:1},na={class:"",style:{display:"flex","flex-wrap":"wrap"}},ra={class:"itemBox"},oa={key:2},ca={class:"flex justify-center items-center"},da={id:"footer",ref:"containerRef"},ua=z(e({__name:"task",setup(e){const n=M(),d=y(0),u=y(0),g=y(!1),x=ae(),k=a((()=>x.openRegionDialog)),{isMobile:m}=t(),v=a((()=>u.value>D.size)),w=b(),E=e=>{d.value=e,6!==e?(D.status=e,D.favorite=0):(D.status=0,D.favorite=1),O()},_=y([]),D=N({page:1,size:20,status:0,favorite:0});P((()=>k.value),(e=>{e?(g.value=!1,Z.value&&clearTimeout(Z.value)):O()}));const Z=y(),L=y([{ZnLabel:"选中1",id:0,label:"U1"},{ZnLabel:"选中2",id:1,label:"U2"},{ZnLabel:"选中3",id:2,label:"U3"},{ZnLabel:"选中4",id:3,label:"U4"}]),C=y([{ZnLabel:"变换1",id:0,label:"V1"},{ZnLabel:"变换2",id:1,label:"V2"},{ZnLabel:"变换3",id:2,label:"V3"},{ZnLabel:"变换4",id:3,label:"V4"}]),U=y([{ZnLabel:"微调（弱）",id:0,label:"Vary (Subtle)"},{ZnLabel:"微调（强）",id:1,label:"Vary (Strong)"},{ZnLabel:"微调（局部重绘）",id:2,label:"Vary (Region)"}]),V=y([{ZnLabel:"扩2倍",id:0,label:"Zoom Out 2x"},{ZnLabel:"扩1.5倍",id:1,label:"Zoom Out 1.5x"}]),F=y([{ZnLabel:"放大（弱）",id:0,label:"Upscale (Subtle)"},{ZnLabel:"放大（强）",id:1,label:"Upscale (Creative)"}]),O=async()=>{const{rows:e,count:t}=await W(D).then((e=>e.data));_.value=e,_.value.forEach(((e,t)=>{let{buttons:a}=e,l=a.filter((e=>-1!=e.label.indexOf("U"))),s=a.filter((e=>-1!=e.label.indexOf("V"))),i=a.filter((e=>-1!=e.label.indexOf("Vary"))),n=a.filter((e=>-1!=e.label.indexOf("Zoom"))),r=a.filter((e=>-1!=e.label.indexOf("Upscale")));4==l.length&&l.forEach(((e,t)=>{e.ZnLabel=L.value[t].ZnLabel})),4==s.length&&s.forEach(((e,t)=>{e.ZnLabel=C.value[t].ZnLabel})),0!=i.length&&i.forEach(((e,t)=>{e.ZnLabel=U.value[t].ZnLabel})),0!=n.length&&n.forEach(((e,t)=>{e.ZnLabel=V.value[t].ZnLabel})),0!=r.length&&r.forEach(((e,t)=>{e.ZnLabel=F.value[t].ZnLabel}))})),u.value=t,Z.value&&clearTimeout(Z.value),!k.value&&n.fullPath.includes("/midjourney/paint-task")&&(Z.value=setTimeout((async()=>{await O()}),6e3))};G((()=>{O();const e=document.getElementById("footer");new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&v.value&&(D.size=D.size+10,O())}))})).observe(e)})),X((()=>{Z.value&&clearTimeout(Z.value)})),q((()=>{w.updateDrawId({id:""})}));const A=y(Y.options.history.location);return H.emit("drawRoute",Y.options.history.location),(e,t)=>(r(),o(p,null,[f("div",Jt,[i(m)?j("",!0):(r(),l(le,{key:0,toTask:A.value},null,8,["toTask"]))]),f("div",$t,[f("div",{class:T(i(m)?"h-full p-2":"")},[h(se,{onChange:E,active:d.value},null,8,["active"]),f("div",ea,[f("div",null,[g.value&&0===_.value.length?(r(),o("div",ta,[(r(),o(p,null,c(10,(e=>f("div",aa,[h(i(Q),{vertical:""},{default:s((()=>[f("div",la,[h(i(K),{height:"20px",width:"48%",class:"mt-1",sharp:!1}),h(i(K),{height:"20px",width:"48%",class:"mt-1",sharp:!1})]),h(i(K),{height:"20px",width:"100%",class:"mt-1",sharp:!1}),h(i(K),{height:"180px",width:"100%",class:"mt-1",sharp:!1}),h(i(K),{height:"20px",width:"60%",class:"mt-1",sharp:!1}),h(i(K),{height:"20px",width:"40%",class:"mt-1",sharp:!1}),h(i(K),{height:"20px",width:"20%",class:"mt-1",sharp:!1}),f("div",sa,[h(i(K),{height:"20px",width:"48%",class:"mt-1",sharp:!1}),h(i(K),{height:"20px",width:"48%",class:"mt-1",sharp:!1})])])),_:1})]))),64))])):_.value.length>0?(r(),o("div",ia,[f("div",na,[(r(!0),o(p,null,c(_.value,(e=>(r(),o("div",ra,[h(Qt,{task:e,class:"mb-4",onFresh:O},null,8,["task"])])))),256))])])):(r(),o("div",oa,[f("div",ca,[h(i(J),{description:"未查询到任务"})])])),f("div",da,null,512)])])],2)])],64))}}),[["__scopeId","data-v-9ca43a1f"]]);export{ua as default};
