import{d as e,g as t,c as s,k as a,w as l,h as i,aw as r,o,i as n,r as c,ap as d,ax as u,F as p,aq as f,b as m,S as g,u as v,ay as x,j as h,m as k,n as y,_ as b,Z as w,l as j,K as _,az as F,Y as E,N as U,aA as C,a1 as A,aB as I,aC as T,aD as R,C as S,D as V,ad as O,an as D,ae as L,E as M,R as N,y as P,G as z,U as G,z as B,V as Z,aE as X,a3 as q,a6 as Y,aF as H,aG as W,aH as K,aI as Q}from"../main-37444514.js";import{c as J}from"../index/index.a4f65e28.js";import{d as $}from"../draw-fail/draw-fail.50b43169.js";import{u as ee}from"../index/index.08e73c85.js";import{S as te}from"../index/index.1b204117.js";const se=e({__name:"taskTab",props:{active:{type:Number,required:!0,default:0}},emits:["change"],setup(e,{emit:m}){const{isMobile:g}=t(),v=e,x=s((()=>v.active)),h=m,k=e=>{h("change",r[e])},y=s((()=>g?"width: auto; text-align: center;":"min-width: 90px; text-align: center;"));return(e,t)=>(o(),a(i(f),{size:i(g)?"small":"large",modelValue:x.value,"onUpdate:modelValue":t[0]||(t[0]=e=>x.value=e),type:"card",animated:"",trigger:"click","tab-style":y.value,"onUpdate:value":k},{default:l((()=>[(o(!0),n(p,null,c(i(u),(e=>(o(),a(i(d),{key:e.label,name:e.label},null,8,["name"])))),128))])),_:1},8,["size","modelValue","tab-style"]))}}),ae=e=>(S("data-v-b14dce06"),e=e(),V(),e),le={class:"border box-border border-[#eaeaef] dark:border-[#444456] rounded-xl min-h-fit flex-1"},ie={class:"pt-2 px-1 pb-1"},re={class:"flex justify-between items-center"},oe={class:"border pt-0.5 px-1 text-[12px] scale-95 rounded dark:text-[#00FFC0] dark:border-[#00FFC0] text-[#001EEF] border-[#001EEF]"},ne={class:"flex justify-between"},ce=ae((()=>h("div",null," 发布到广场 ",-1))),de=ae((()=>h("div",null," 复制最终执行提示词 ",-1))),ue=ae((()=>h("div",null," 下载图片 ",-1))),pe=ae((()=>h("div",null," 删除任务 ",-1))),fe=ae((()=>h("div",null," 收藏此任务 ",-1))),me={class:"my-2"},ge={key:0,class:"whitespace-nowrap overflow-hidden text-ellipsis"},ve={key:1,class:"",style:{height:"23px"}},xe={key:0,class:"bg-[#FFFFFF] dark:bg-[#15171A] h-full w-full flex flex-col justify-center items-center"},he=["src"],ke={key:1,class:"bg-[#FFFFFF] dark:bg-[#15171A] h-full w-full flex flex-col justify-center items-center"},ye=["src"],be={key:2,class:"bg-[#FFFFFF] dark:bg-[#15171A] h-full w-full flex flex-col justify-center items-center"},we=["src"],je={key:3,style:{"padding-top":"30%"}},_e=[ae((()=>h("div",{class:"loader"},null,-1)))],Fe={key:4,class:"flex items-center justify-center flex-col"},Ee={class:"px-2 py-2 rounded-br-xl rounded-bl-xl h-[130px]"},Ue={key:0,class:"flex justify-center h-[80px]"},Ce={key:0,class:"progress"},Ae=ae((()=>h("span",null,"：",-1))),Ie={style:{color:"red"}},Te={key:1,class:"flex items-center justify-center h-[80px]"},Re={class:"text-center flex items-center"},Se={style:{display:"flex","justify-content":"center"}},Ve={key:0,class:"h-[80px]",style:{"padding-left":"0"}},Oe={class:"flex justify-start items-center py-0.5 mb-1"},De={class:"flex justify-start"},Le=["disabled","onClick"],Me={key:0,class:"text-[12px] pt-[2px] line-clamp-1 text-left"},Ne={key:1},Pe={class:"flex justify-between text-[12px] mt-4 select-none"},ze={class:"text-[#3144F1] dark:text-[#fff]",style:{color:"#3144F1"}},Ge=M(e({__name:"taskItem1",props:{task:{type:Object,default:()=>({prompt:"",image:"",time:"",updatedAt:""})},chat:{type:String,default:"task"}},emits:["fresh"],setup(e,{emit:t}){const{updateSendSquire:r,updateDrawId:d,updatePreview:u}=m(),f=g(),S=v(),V=ee(),M=m(),N=e,P=t,z=s((()=>e=>{const{progress:t,status:s}=e;return 1===s?"正在排队中...":3===s?"成功":2===s&&100!==t?"正在绘制中...":2===s&&100===t?"正在存储图片中...":4===s?"绘图失败":5===s?"绘图取消":6===s?"窗口等待":"绘图失败"})),G=s((()=>e=>1===e?"排队中":2===e?"绘制中":3===e?"成功":4===e?"失败":5===e?"超时":"-"));s((()=>e=>{if(!e)return"";return parseInt(e/60+"")+"分"+parseInt(String(e%60))+"秒"}));const B=s((()=>e=>x[e])),Z=s((()=>{var e;const t=(null==(e=N.task)?void 0:e.buttons)||[],s=[],a=[],l=[],i=[],r=[];return t.forEach((e=>{["U1","U2","U3","U4"].includes(e.label)?s.push(e):["V1","V2","V3","V4"].includes(e.label)?a.push(e):e.label.startsWith("Upscale")||e.label.startsWith("Vary")?l.push(e):e.label?i.push(e):r.push(e)})),[s,a,l,i,r].filter((e=>e.length))}));const X=async(e,t)=>{if(!M.isLogin)return S.warning("请先登录"),void M.setLoginDialog(!0);const s=(e=>{if(["U1","U2","U3","U4"].includes(e.label))return L.U_SCALE;if(["V1","V2","V3","V4"].includes(e.label))return L.V_EXPAND;if(!e.label&&e.emoji){if("🔄"===e.emoji)return L.REGENERATE;if(["⬅️","➡️","⬆️","⬇️"].includes(e.emoji))return L.STRETCH;if(["1️⃣","2️⃣","3️⃣","4️⃣"].includes(e.emoji))return L.IMAGE_TO_TEXT_ACTION}return e.label.includes("Upscale (4x)")?L.UPSCALE_4X:e.label.includes("Upscale (2x)")?L.UPSCALE_2X:e.label.includes("Vary (Subtle)")?L.VARY_SUBTLE:e.label.includes("Vary (Strong)")?L.VARY_STRONG:e.label.includes("Vary (Region)")?L.VARY_REGION:e.label.includes("Make Square")?L.SQUARE:e.label.includes("Zoom Out 2x")?L.ZOOM2X:e.label.includes("Zoom Out 1.5x")?L.ZOOM1_5X:e.label.includes("Custom Zoom")?L.ZOOM_CUSTOM:e.label.includes("Redo Upscale (Subtle)")?L.REDO_UPSCALE_SUBTLE:e.label.includes("Redo Upscale (Creative)")?L.REDO_UPSCALE_CREATIVE:L.NONE})(t);await async function(e){const t=await O({type:D.IMAGE_ACTION,params:e}).then((e=>e.data));d({id:t}),t&&S.success("提交任务成功！")}({action:s,taskId:e.id,customId:t.customId,messageFlags:e.messageFlags||0}),P("fresh")};return(t,s)=>(o(),n("div",le,[h("div",ie,[h("div",re,[h("p",oe,k(B.value(e.task.action))+" - "+k(G.value(e.task.status)),1),h("div",ne,[3===e.task.status?(o(),a(i(w),{key:0,placement:"top-start",trigger:"hover"},{trigger:l((()=>[y(i(b),{icon:"bi:send",onClick:s[0]||(s[0]=t=>(async e=>{r(!0,e.id)})(e.task)),class:"text-[14px] mx-1 cursor-pointer"})])),default:l((()=>[ce])),_:1})):j("",!0),y(i(w),{placement:"top-start",trigger:"hover"},{trigger:l((()=>[y(i(b),{icon:"ph:copy-light",onClick:s[1]||(s[1]=t=>(e=>{const{fullPrompt:t}=e;J({text:t}),S.success("复制prompt完成！")})(e.task)),class:"text-[14px] mx-1 cursor-pointer"})])),default:l((()=>[de])),_:1}),3===e.task.status?(o(),a(i(w),{key:1,placement:"top-start",trigger:"hover"},{trigger:l((()=>[y(i(b),{icon:"icons8:down-round",onClick:s[2]||(s[2]=t=>async function({imageUrl:e}){e?f.info({title:"下载图片",content:"是否确认下载当前图片",positiveText:"下载",negativeText:"取消",onPositiveClick:async()=>{const t=e.split("/"),s=await T.post("/api/midjourney/download",{url:e},{responseType:"blob"}),a=new Blob([s.data],{type:s.headers["content-type"]}),l=window.URL.createObjectURL(a),i=document.createElement("a");i.href=l,i.download=t[t.length-1],i.click()}}):S.warning("图片未生成完成暂不能下载")}(e.task)),class:"text-[14px] mx-1 cursor-pointer"})])),default:l((()=>[ue])),_:1})):j("",!0),y(i(w),{placement:"top-start",trigger:"hover"},{trigger:l((()=>[y(i(b),{onClick:s[3]||(s[3]=t=>(e=>{const{favorite:t}=e;f.create({type:"info",title:"确认删除",content:(1===t?"当前任务已被收藏，删除绘画任务会导致收藏失效且不可找回，确定删除":"删除绘画任务不可找回，确定删除")+"？",positiveText:"确定",negativeText:"取消",maskClosable:!1,onPositiveClick:async()=>{await R({id:e.id}).then((e=>e.data))&&S.success("删除成功"),P("fresh")},onNegativeClick:()=>{}})})(e.task)),icon:"ep:delete",class:"text-[14px] mx-1 cursor-pointer"})])),default:l((()=>[pe])),_:1}),y(i(w),{placement:"top-start",trigger:"hover"},{trigger:l((()=>[y(i(b),{onClick:s[4]||(s[4]=t=>(async e=>{const{id:t,favorite:s}=e;await I({id:t,favorite:1===s?0:1}).then((e=>e.data))&&S.success((0===s?"收藏":"取消收藏")+" 成功"),P("fresh")})(e.task)),icon:0===e.task.favorite?"uit:favorite":"uis:favorite",class:"text-[14px] mx-1 cursor-pointer"},null,8,["icon"])])),default:l((()=>[fe])),_:1})])]),h("div",me,[y(i(w),{placement:"top",trigger:"hover",width:320},{trigger:l((()=>[e.task.prompt?(o(),n("h3",ge,k(e.task.prompt),1)):(o(),n("div",ve))])),default:l((()=>[h("div",null,k(e.task.prompt),1)])),_:1})]),h("div",{class:_(["relative z-0 w-auto flex align-center min-h-[260px] overflow-hidden contain",["chat-history"===e.chat?"h-[320px]":"h-[260px] "]]),style:{"justify-content":"center"}},[4===e.task.status?(o(),n("div",xe,[h("img",{class:"w-auto object-contain px-24",src:i($),alt:""},null,8,he)])):5===e.task.status?(o(),n("div",ke,[h("img",{class:"w-auto object-contain px-24",src:i($),alt:""},null,8,ye)])):6===e.task.status?(o(),n("div",be,[h("img",{class:"w-auto object-contain px-24",src:i($),alt:""},null,8,we)])):e.task.imageUrl||e.task.progress?(o(),n("div",Fe,[y(i(F),{class:"w-full cursor-pointer bg-[#f9f9f9] dark:bg-[transparent] h-full flex justify-center","preview-src":e.task.imageUrl,"object-fit":"contain",src:e.task.imageUrl||""},null,8,["preview-src","src"])])):(o(),n("div",je,_e))],2)]),h("div",Ee,[e.task.imageUrl||null!==e.task.progress?j("",!0):(o(),n("div",Ue,[z.value(e.task)?(o(),n("div",Ce,[h("span",null,k(z.value(e.task)),1),4===e.task.status?(o(),n(p,{key:0},[Ae,h("span",Ie,k(e.task.failReason),1)],64)):j("",!0),6===e.task.status?(o(),a(i(U),{key:1,type:"primary",style:{"margin-left":"12px"},onClick:s[5]||(s[5]=t=>{var s;9===(s=e.task).action?V.openRegionModal(!0,{customId:s.customId,taskId:s.id,mode:s.mode}):M.updateRemixModal(!0,{prompt:"",taskId:s.id,customId:s.customId})})},{default:l((()=>[E(" 补充描述词 ")])),_:1})):j("",!0)])):j("",!0)])),null!==e.task.progress&&e.task.progress>=0&&e.task.progress<100?(o(),n("div",Te,[h("p",Re,[y(i(b),{icon:"eos-icons:bubble-loading",class:"mr-1"}),E(" 进度："+k(e.task.progress+"%"),1)])])):j("",!0),h("div",Se,[100===e.task.progress?(o(),n("div",Ve,[(o(!0),n(p,null,c(Z.value,(t=>(o(),n("div",Oe,[h("div",De,[(o(!0),n(p,null,c(t,(t=>(o(),a(i(w),{trigger:"hover"},{trigger:l((()=>[h("button",{disabled:3!==e.task.status,class:_([[3!==e.task.status?"cursor-not-allowed":""],"text-[14px] border border-gray-300 dark:border-gray-600 hover:text-white hover:bg-gradient-to-l from-[#2F73EC] to-[#5AA8F7] px-1 flex items-center justify-center rounded"]),style:{margin:"0 4px"},onClick:s=>X(e.task,t)},[t.label?(o(),n("p",Me,k(t.label),1)):(o(),n("p",Ne,k(t.emoji),1))],10,Le)])),default:l((()=>[h("p",null,k(t.label||t.emoji),1)])),_:2},1024)))),256))])])))),256))])):j("",!0)]),h("div",Pe,[h("div",null,[h("p",ze,"时间："+k(i(C)(e.task.createdAt)),1)]),h("div",null,[h("p",{style:A({color:1===e.task.mode?"#F1A231":2===e.task.mode?"#fff":3===e.task.mode?"#23DCB5":"red"})},k(1===e.task.mode?"快速模式":2===e.task.mode?"慢速模式":3===e.task.mode?"Turbo模式":"模式错误"),5)])])])]))}}),[["__scopeId","data-v-b14dce06"]]),Be={style:{position:"absolute"}},Ze={class:"bg-[#fff] dark:bg-[#15171A] mainBox"},Xe={class:"h-full overflow-y-auto",style:{height:"82vh"}},qe={key:0,class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"},Ye={class:"mb-4 border border-gray-200 dark:border-gray-600 p-2 rounded-xl"},He={class:"flex justify-between"},We={class:"flex justify-between"},Ke={key:1},Qe={class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"},Je={class:""},$e={key:2},et={class:"flex justify-center items-center"},tt={id:"footer",ref:"containerRef"},st=M(e({__name:"task",setup(e){const r=N(),d=P(0),u=P(0),f=P(!1),g=ee(),v=s((()=>g.openRegionDialog)),{isMobile:x}=t(),k=s((()=>u.value>E.size)),b=m(),w=e=>{d.value=e,6!==e?(E.status=e,E.favorite=0):(E.status=0,E.favorite=1),C()},F=P([]),E=z({page:1,size:20,status:0,favorite:0});G((()=>v.value),(e=>{e?(f.value=!1,U.value&&clearTimeout(U.value)):C()}));const U=P(),C=async()=>{const{rows:e,count:t}=await H(E).then((e=>e.data));F.value=e,u.value=t,U.value&&clearTimeout(U.value),!v.value&&r.fullPath.includes("/midjourney/paint-task")&&(U.value=setTimeout((async()=>{await C()}),6e3))};B((()=>{C();const e=document.getElementById("footer");new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&k.value&&(E.size=E.size+10,C())}))})).observe(e)})),Z((()=>{U.value&&clearTimeout(U.value)})),X((()=>{b.updateDrawId({id:""})}));const A=P(q.options.history.location);return Y.emit("drawRoute",q.options.history.location),(e,t)=>(o(),n(p,null,[h("div",Be,[i(x)?j("",!0):(o(),a(te,{key:0,toTask:A.value},null,8,["toTask"]))]),h("div",Ze,[h("div",{class:_(i(x)?"h-full p-2":"")},[y(se,{onChange:w,active:d.value},null,8,["active"]),h("div",Xe,[h("div",null,[f.value&&0===F.value.length?(o(),n("div",qe,[(o(),n(p,null,c(10,(e=>h("div",Ye,[y(i(K),{vertical:""},{default:l((()=>[h("div",He,[y(i(W),{height:"20px",width:"48%",class:"mt-1",sharp:!1}),y(i(W),{height:"20px",width:"48%",class:"mt-1",sharp:!1})]),y(i(W),{height:"20px",width:"100%",class:"mt-1",sharp:!1}),y(i(W),{height:"180px",width:"100%",class:"mt-1",sharp:!1}),y(i(W),{height:"20px",width:"60%",class:"mt-1",sharp:!1}),y(i(W),{height:"20px",width:"40%",class:"mt-1",sharp:!1}),y(i(W),{height:"20px",width:"20%",class:"mt-1",sharp:!1}),h("div",We,[y(i(W),{height:"20px",width:"48%",class:"mt-1",sharp:!1}),y(i(W),{height:"20px",width:"48%",class:"mt-1",sharp:!1})])])),_:1})]))),64))])):F.value.length>0?(o(),n("div",Ke,[h("div",Qe,[(o(!0),n(p,null,c(F.value,(e=>(o(),n("div",Je,[y(Ge,{task:e,class:"mb-4",onFresh:C},null,8,["task"])])))),256))])])):(o(),n("div",$e,[h("div",et,[y(i(Q),{description:"未查询到任务"})])])),h("div",tt,null,512)])])],2)])],64))}}),[["__scopeId","data-v-eda50dc2"]]);export{st as default};