import{d as e,o as l,i as a,aJ as s,c as t,b as r,g as n,e as i,y as o,u,v as c,T as d,W as p,z as v,an as m,j as b,h as f,k as x,l as k,n as h,M as w,w as y,m as g,F as _,r as j,b6 as C,b7 as z,ad as L,N as I,R as A,$ as B,az as M,ap as D,aA as F,aH as $,aq as E,b8 as G,b9 as H}from"../main-647e77a2.js";import{_ as J}from"../titleBar.vue_vue_type_script_setup_true_lang/titleBar.vue_vue_type_script_setup_true_lang.767c2be9.js";import{S as N}from"../index/index.cc9c2ab1.js";import{N as P}from"../InputGroup/InputGroup.f8ad14ae.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const R={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},S=[s('<path d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><rect x="96" y="128" width="400" height="336" rx="45.99" ry="45.99" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></ellipse><path d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',5)],U=e({name:"ImagesOutline",render:function(e,s){return l(),a("svg",R,S)}}),q={style:{position:"absolute"}},O=b("span",{class:"text-[#67c23a]"},"每生成一张图片需要扣除您的两个基础模型余额、我们将默认将您的输入转为英文！",-1),T={class:"flex my-5"},V=b("p",{class:"mx-2 text-[#707384] select-none flex-shrink-0"}," Prompt示例： ",-1),W={class:"text-[#707384]"},K={class:"mt-5 p-4 bg-[#e7eaf380] dark:bg-[#1A1A2F] rounded-lg"},Q=b("h4",{class:"text-base mb-2"}," 参数设置 ",-1),X={class:"flex mt-5"},Y=b("span",{class:"mr-2 inline-block w-16 flex-shrink-0"},"图片尺寸:",-1),Z=["onClick"],ee={class:"flex mt-6 pb-8 border-b border-[#000c3f1a]"},le=b("span",{class:"mr-2 w-16 flex-shrink-0"},"图片张数:",-1),ae=["onClick"],se=b("div",{class:"flex mt-5"},[b("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 修饰词参考 "),b("p",{class:"text-[#707384]"}," 您可参考或选用下列各类修饰词丰富您的输入文本，尝试生成更加多样的图像，更多修饰词可参考 Prompt指南 或 自由输入 探索大模型作画更多未知能力 ")],-1),te={class:"flex mt-5"},re=b("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 图像类型 ",-1),ne=["onClick"],ie={key:0,class:"mt-8 pb-10"},oe=b("div",{class:"flex justify-center"}," ----------- 正在生成中、图片越大数量越多所需时间越多、预计15S ----------- ",-1),ue={class:"flex flex-wrap mt-8"},ce={key:0,class:"flex flex-wrap mt-8"},de={key:0,class:"flex flex-wrap mt-8"},pe=e({__name:"index",setup(e){const s=t((()=>ve.theme)),R=r(),S=t((()=>"dark"===s.value?"#fff":"#000")),{isMobile:pe}=n(),ve=i(),me=t((()=>R.isLogin)),be=o(0),fe=o(!1),xe=u(),ke=o([]),he=o([]),we=c();d();const ye=t((()=>"dark"===ve.theme));p(me,(async(e,l)=>{e&&!l&&Ie()}));const ge=["超级逼真的未来世界，真实照片，虚幻引擎","帅哥，二次元，赛博朋克风格，精致脸庞","兔子，可爱，高质量，高品质"],_e=[{label:"1024x1024",value:"1024x1024"}],je=[{label:"1张",value:1},{label:"2张",value:2},{label:"3张",value:3},{label:"4张",value:4},{label:"5张",value:5},{label:"6张",value:6},{label:"7张",value:7},{label:"8张",value:8},{label:"9张",value:9}],Ce=["古风","二次元","写实照片","油画","水彩画","油墨画","黑白雕版画","雕塑","3D模型","手绘草图","炭笔画","极简线条画","电影质感","机械感"],ze=o({prompt:"",n:1,size:"1024x1024"});function Le(){be.value=be.value+1>=ge.length?0:be.value+1}async function Ie(){const e=await G({model:"DALL-E2"});e.success&&(ke.value=e.data)}async function Ae(){const e=await C({size:999,rec:1,model:"DALL-E3"});if(!e.success)return xe.error(e.message);he.value=e.data.rows}async function Be(){if(!ze.value.prompt)return xe.error("请输入您想要生成的图片描述信息！");try{fe.value=!0,await H(ze.value),xe.success("生成图片成完成、前往我的生成查看图片！"),await Ie(),fe.value=!1}catch(e){xe.error("生成图片失败、请重试！"),fe.value=!1}}function Me(e){"mine"===e&&Ie(),"all"===e&&Ae()}return v((()=>{Ae()})),m.emit("drawRoute",we.options.history.location),(e,s)=>(l(),a(_,null,[b("div",q,[f(pe)?k("",!0):(l(),x(N,{key:0}))]),b("div",{class:w(["main min-h-screen bg-center dark:bg-[#1F1F38]",[ye.value?"darkBg":"lightBg",f(pe)?"px-3":"px-10"]])},[h(f(J),{title:"AI绘画基础版",des:"基础版绘图速度较快、根据关键词生成~大约需要10-30s左右时间、合理使用！",padding:f(pe)?2:20},null,8,["padding"]),b("div",{class:w(f(pe)?["px-2"]:["px-20"])},[h(f(z),{"show-icon":!1,type:"success",class:"mt-5"},{default:y((()=>[O])),_:1}),b("div",T,[b("b",{class:"text-primary cursor-pointer select-none flex-shrink-0",onClick:Le},"换示例"),V,b("p",W,g(ge[be.value]),1)]),h(f(P),null,{default:y((()=>[h(f(L),{value:ze.value.prompt,"onUpdate:value":s[0]||(s[0]=e=>ze.value.prompt=e),size:"large",disabled:fe.value,clearable:"",placeholder:"请输入您想要生成的图片描述信息、可以参考上面的示例文字、我们将会对其转为英文绘画、请知悉！"},null,8,["value","disabled"]),h(f(I),{type:"success",size:"large",loading:fe.value,disabled:fe.value,onClick:Be},{icon:y((()=>[h(f(A),null,{default:y((()=>[h(f(U))])),_:1})])),default:y((()=>[B(" 生成图片 ")])),_:1},8,["loading","disabled"])])),_:1}),b("div",K,[Q,b("div",X,[Y,b("div",null,[(l(),a(_,null,j(_e,(e=>b("span",{key:e.value,class:w(["py-2 px-5 rounded ml-2 select-none cursor-pointer inline-block mb-2",e.value===ze.value.size?["text-primary","bg-[#0d6efd1c]"]:["bg-[#bfc4d033]"]]),onClick:l=>ze.value.size=e.value},g(e.label),11,Z))),64))])]),b("div",ee,[le,b("div",null,[(l(),a(_,null,j(je,(e=>b("span",{key:e.value,class:w(["py-2 px-5 rounded ml-2 select-none cursor-pointer mb-2 inline-block",e.value===ze.value.n?["text-primary","bg-[#0d6efd1c]"]:["bg-[#bfc4d033]"]]),onClick:l=>ze.value.n=e.value},g(e.label),11,ae))),64))])]),se,b("div",te,[re,b("div",null,[(l(),a(_,null,j(Ce,((e,l)=>b("span",{key:e,class:"cursor-pointer hover:text-primary",onClick:l=>ze.value.prompt+=ze.value.prompt?`，${e}`:e},g(`${e} ${l+1===Ce.length?"":"、"}`),9,ne))),64))])])]),fe.value?(l(),a("div",ie,[oe,b("div",ue,[(l(!0),a(_,null,j(ze.value.n,(e=>(l(),a("div",{class:"w-44 h-44 border rounded-md relative ml-4 mt-4",key:e},[h(M,{"text-color":S.value,words:["图","片","绘","制","中"]},null,8,["text-color"])])))),128))])])):k("",!0),h(f(E),{type:"line",animated:"",class:"mt-5","onUpdate:value":Me},{default:y((()=>[h(f(D),{name:"all",tab:"公共生成"},{default:y((()=>[he.value.length?(l(),a("div",ce,[(l(!0),a(_,null,j(he.value,(e=>(l(),x(f(F),{key:e.answer,lazy:"",class:"w-40 ml-4 mb-4",src:e.thumbImg,"preview-src":e.answer},null,8,["src","preview-src"])))),128))])):(l(),x(f($),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))])),_:1}),h(f(D),{name:"mine",tab:"我的生成"},{default:y((()=>[ke.value.length?(l(),a("div",de,[(l(!0),a(_,null,j(ke.value,((e,a)=>(l(),x(f(F),{key:e.answer,lazy:"","object-fit":"contain",class:w(["flex justify-center",[f(pe)?"w-6/12 ml-0 mb-4":"w-40 ml-4 mb-4",a%2==0?"pr-1":"pl-1"]]),src:e.thumbImg,"preview-src":e.answer},null,8,["class","src","preview-src"])))),128))])):(l(),x(f($),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))])),_:1})])),_:1})],2)],2)],64))}});export{pe as default};
