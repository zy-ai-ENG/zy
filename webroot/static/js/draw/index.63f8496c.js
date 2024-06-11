import{d as e,o as a,i as t,b2 as s,c as l,b as r,g as n,e as i,y as o,u,v as d,S as p,V as c,z as m,G as v,an as f,j as x,h as g,k,l as h,n as y,M as _,w as b,F as w,r as I,bb as j,bc as C,a0 as E,a1 as M,b5 as F,aH as T,Q as A,Z as L,N as z,m as G,bd as O,ap as B,az as D,aI as N,aq as H,C as R,D as S,be as U,H as V}from"../main-83ca6c6a.js";import{_ as X,a as $,b as P}from"../createInspiration.vue_vue_type_script_setup_true_lang/createInspiration.vue_vue_type_script_setup_true_lang.23ef6a10.js";import{_ as q}from"../titleBar.vue_vue_type_script_setup_true_lang/titleBar.vue_vue_type_script_setup_true_lang.71b02efa.js";import{S as K}from"../index/index.003f58b7.js";import{N as Q}from"../InputGroup/InputGroup.3bb6fea0.js";const Z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},J=[s('<path d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><rect x="96" y="128" width="400" height="336" rx="45.99" ry="45.99" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></ellipse><path d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',5)],W=e({name:"ImagesOutline",render:function(e,s){return a(),t("svg",Z,J)}}),Y=e=>(R("data-v-59970fb7"),e=e(),S(),e),ee={style:{position:"absolute"}},ae={class:"main bg-center dark:bg-[#010102]"},te={class:"bg-[#FFFFFF] dark:bg-[#15171A] mainBox"},se={class:"bg-[#f4f4f4] dark:bg-[#010102]",style:{height:"100px",display:"flex","margin-top":"10px","border-radius":"4px"}},le={style:{flex:"1",display:"flex","flex-direction":"column","justify-content":"space-between"}},re={style:{display:"flex","margin-left":"10px","padding-bottom":"10px"}},ne={class:"otherItem"},ie=Y((()=>x("p",{class:"otherText text-[#808080] dark:text-[#fff]",style:{"margin-top":"3px"}},"自动翻译",-1))),oe=[Y((()=>x("p",{class:"otherText text-[#808080] dark:text-[#fff]",style:{"margin-top":"3px"}},"联想",-1))),Y((()=>x("img",{class:"setImg",src:P,alt:""},null,-1)))],ue=[Y((()=>x("p",{class:"otherText text-[#808080] dark:text-[#fff]",style:{"margin-top":"3px"}},"提示词生成器",-1)))],de={style:{display:"flex","align-items":"flex-end","padding-bottom":"10px","margin-right":"10px"}},pe={class:"mt-5 p-4 bg-[#f4f4f4] dark:bg-[#010102] rounded-lg"},ce=Y((()=>x("div",{class:"flex mt-5"},[x("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 修饰词参考 "),x("p",{class:"text-[#707384]"}," 您可参考或选用下列各类修饰词丰富您的输入文本，尝试生成更加多样的图像，更多修饰词可参考 Prompt指南 或 自由输入 探索大模型作画更多未知能力 ")],-1))),me={class:"flex mt-5"},ve=Y((()=>x("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 图像类型 ",-1))),fe=["onClick"],xe={key:0,class:"mt-8 pb-10"},ge=Y((()=>x("div",{class:"flex justify-center"}," ----------- 正在生成中、图片越大数量越多所需时间越多、预计15S ----------- ",-1))),ke={class:"flex flex-wrap mt-8"},he={key:0,class:"flex flex-wrap mt-8"},ye=V(e({__name:"index",setup(e){const s=l((()=>P.theme)),R=r(),S=l((()=>"dark"===s.value?"#fff":"#000")),{isMobile:V}=n(),P=i(),Z=l((()=>R.isLogin));o(0);const J=o(!1),Y=u(),ye=o([]),_e=o([]),be=d(),we=p();l((()=>"dark"===P.theme)),c(Z,(async(e,a)=>{e&&!a&&Ce()}));const Ie=["古风","二次元","写实照片","油画","水彩画","油墨画","黑白雕版画","雕塑","3D模型","手绘草图","炭笔画","极简线条画","电影质感","机械感"],je=o({prompt:"",n:1,size:"1024x1024"});async function Ce(){const e=await U({model:"DALL-E2"});e.success&&(ye.value=e.data)}async function Ee(){const e=await j({size:999,rec:1,model:"DALL-E3"});if(!e.success)return Y.error(e.message);_e.value=e.data.rows}async function Me(){if(!je.value.prompt)return Y.error("请输入您想要生成的图片描述信息！");try{J.value=!0,await C(je.value),Y.success("生成图片成完成、前往我的生成查看图片！"),await Ce(),J.value=!1}catch(e){Y.error("生成图片失败、请重试！"),J.value=!1}}function Fe(e){"mine"===e&&Ce(),"all"===e&&Ee()}m((()=>{Ee()})),v.emit("drawRoute",be.options.history.location);const Te=o(!1),Ae=o(0);function Le(){Te.value?Ae.value=1:Ae.value=0}const ze=l((()=>we.path)),Ge=l((()=>ze.value.includes("text-to-image")?f.TEXT_TO_IMAGE:ze.value.includes("image-to-text")?f.IMAGE_TO_TEXT:ze.value.includes("image-mix-image")?f.IMAGE_MIX_IMAGE:f.NONE)),Oe=o(),Be=o(),De=()=>{Oe.value.open()},Ne=()=>{Be.value.open()};return v.on("selectIncantation",(e=>{je.value.prompt=e})),v.on("think",(e=>{je.value.prompt=e})),(e,s)=>(a(),t(w,null,[x("div",ee,[g(V)?h("",!0):(a(),k(K,{key:0}))]),y(X,{ref_key:"thinkRef",ref:Oe},null,512),y($,{ref_key:"inspirationRef",ref:Be},null,512),x("div",ae,[x("div",te,[y(g(q),{title:"AI绘画基础版",des:"基础版绘图速度较快、根据关键词生成~大约需要10-30s左右时间、合理使用！",padding:g(V)?2:20},null,8,["padding"]),x("div",{class:_(g(V)?["px-2"]:["px-20"])},[x("div",se,[x("div",le,[y(g(Q),null,{default:b((()=>[E(x("input",{style:{width:"100%",height:"50px","background-color":"transparent","padding-left":"10px"},type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>je.value.prompt=e),placeholder:"请输入您想要生成的图片描述信息、可以参考上面的示例文字、我们将会对其转为英文绘画、请知悉！"},null,512),[[M,je.value.prompt]])])),_:1}),x("div",re,[x("div",ne,[ie,y(g(T),null,{default:b((()=>[y(g(F),{value:Te.value,"onUpdate:value":[s[1]||(s[1]=e=>Te.value=e),Le],size:"small",disabled:2==Ge.value||3==Ge.value},null,8,["value","disabled"])])),_:1})]),x("div",{class:"otherItem",onClick:De},oe),x("div",{class:"otherItem",onClick:Ne},ue)])]),x("div",de,[y(g(z),{loading:J.value,disabled:J.value,onClick:Me,style:{"background-color":"#408EFC","border-radius":"8px"}},{icon:b((()=>[y(g(A),null,{default:b((()=>[y(g(W))])),_:1})])),default:b((()=>[L(" 生成图片 ")])),_:1},8,["loading","disabled"])])]),x("div",pe,[ce,x("div",me,[ve,x("div",null,[(a(),t(w,null,I(Ie,((e,a)=>x("span",{key:e,class:"cursor-pointer hover:text-primary",onClick:a=>je.value.prompt+=je.value.prompt?`，${e}`:e},G(`${e} ${a+1===Ie.length?"":"、"}`),9,fe))),64))])])]),J.value?(a(),t("div",xe,[ge,x("div",ke,[(a(!0),t(w,null,I(je.value.n,(e=>(a(),t("div",{class:"w-44 h-44 border rounded-md relative ml-4 mt-4",key:e},[y(O,{"text-color":S.value,words:["图","片","绘","制","中"]},null,8,["text-color"])])))),128))])])):h("",!0),y(g(H),{type:"line",animated:"",class:"mt-5","onUpdate:value":Fe},{default:b((()=>[y(g(B),{name:"mine",tab:"我的生成"},{default:b((()=>[ye.value.length?(a(),t("div",he,[(a(!0),t(w,null,I(ye.value,((e,t)=>(a(),k(g(D),{key:e.answer,lazy:"","object-fit":"contain",class:_(["flex justify-center",[g(V)?"w-6/12 ml-0 mb-4":"w-40 ml-4 mb-4",t%2==0?"pr-1":"pl-1"]]),src:e.thumbImg,"preview-src":e.answer},null,8,["class","src","preview-src"])))),128))])):(a(),k(g(N),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))])),_:1})])),_:1})],2)])])],64))}}),[["__scopeId","data-v-59970fb7"]]);export{ye as default};
