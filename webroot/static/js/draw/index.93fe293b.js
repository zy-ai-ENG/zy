import{_ as e,a,b as s}from"../createInspiration.vue_vue_type_script_setup_true_lang/createInspiration.vue_vue_type_script_setup_true_lang.b4714644.js";import{d as l,o as t,i as r,b3 as n,c as i,b as o,g as u,e as c,y as d,u as p,v,R as m,U as f,z as x,a6 as k,an as h,j as y,h as _,k as g,l as w,n as b,K as I,w as j,F as z,r as C,bc as E,bd as A,ac as M,b6 as T,aI as L,P as F,Y as G,N,m as O,az as B,ap as D,aA as R,aJ as U,aq as X,C as $,D as J,be as P,E as S}from"../main-4cae9f5a.js";import{_ as q}from"../titleBar.vue_vue_type_script_setup_true_lang/titleBar.vue_vue_type_script_setup_true_lang.e49fbe6c.js";import{S as H}from"../index/index.47aafc2b.js";import{N as K}from"../InputGroup/InputGroup.f96dfbf3.js";const V={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Y=[n('<path d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><rect x="96" y="128" width="400" height="336" rx="45.99" ry="45.99" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></ellipse><path d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',5)],Q=l({name:"ImagesOutline",render:function(e,a){return t(),r("svg",V,Y)}}),W=e=>($("data-v-f798f413"),e=e(),J(),e),Z={style:{position:"absolute"}},ee={class:"main bg-center dark:bg-[#010102]"},ae={class:"bg-[#FFFFFF] dark:bg-[#15171A] mainBox"},se={class:"bg-[#f4f4f4] dark:bg-[#010102]",style:{height:"100px",display:"flex"}},le={style:{flex:"1",display:"flex","flex-direction":"column","justify-content":"space-between"}},te={style:{display:"flex"}},re={class:"otherItem"},ne=W((()=>y("p",{class:"otherText text-[#808080] dark:text-[#fff]"},"自动翻译",-1))),ie=[W((()=>y("p",{class:"otherText text-[#808080] dark:text-[#fff]"},"联想",-1))),W((()=>y("img",{class:"setImg",src:s,alt:""},null,-1)))],oe=[W((()=>y("p",{class:"otherText text-[#808080] dark:text-[#fff]"},"提示词生成器",-1)))],ue={style:{display:"flex","align-items":"center"}},ce={class:"mt-5 p-4 bg-[#f4f4f4] dark:bg-[#010102] rounded-lg"},de=W((()=>y("div",{class:"flex mt-5"},[y("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 修饰词参考 "),y("p",{class:"text-[#707384]"}," 您可参考或选用下列各类修饰词丰富您的输入文本，尝试生成更加多样的图像，更多修饰词可参考 Prompt指南 或 自由输入 探索大模型作画更多未知能力 ")],-1))),pe={class:"flex mt-5"},ve=W((()=>y("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 图像类型 ",-1))),me=["onClick"],fe={key:0,class:"mt-8 pb-10"},xe=W((()=>y("div",{class:"flex justify-center"}," ----------- 正在生成中、图片越大数量越多所需时间越多、预计15S ----------- ",-1))),ke={class:"flex flex-wrap mt-8"},he={key:0,class:"flex flex-wrap mt-8"},ye={key:0,class:"flex flex-wrap mt-8"},_e=S(l({__name:"index",setup(s){const l=i((()=>S.theme)),n=o(),$=i((()=>"dark"===l.value?"#fff":"#000")),{isMobile:J}=u(),S=c(),V=i((()=>n.isLogin));d(0);const Y=d(!1),W=p(),_e=d([]),ge=d([]),we=v(),be=m();i((()=>"dark"===S.theme)),f(V,(async(e,a)=>{e&&!a&&ze()}));const Ie=["古风","二次元","写实照片","油画","水彩画","油墨画","黑白雕版画","雕塑","3D模型","手绘草图","炭笔画","极简线条画","电影质感","机械感"],je=d({prompt:"",n:1,size:"1024x1024"});async function ze(){const e=await P({model:"DALL-E2"});e.success&&(_e.value=e.data)}async function Ce(){const e=await E({size:999,rec:1,model:"DALL-E3"});if(!e.success)return W.error(e.message);ge.value=e.data.rows}async function Ee(){if(!je.value.prompt)return W.error("请输入您想要生成的图片描述信息！");try{Y.value=!0,await A(je.value),W.success("生成图片成完成、前往我的生成查看图片！"),await ze(),Y.value=!1}catch(e){W.error("生成图片失败、请重试！"),Y.value=!1}}function Ae(e){"mine"===e&&ze(),"all"===e&&Ce()}x((()=>{Ce()})),k.emit("drawRoute",we.options.history.location);const Me=d(!1),Te=d(0);function Le(){Me.value?Te.value=1:Te.value=0}const Fe=i((()=>be.path)),Ge=i((()=>Fe.value.includes("text-to-image")?h.TEXT_TO_IMAGE:Fe.value.includes("image-to-text")?h.IMAGE_TO_TEXT:Fe.value.includes("image-mix-image")?h.IMAGE_MIX_IMAGE:h.NONE)),Ne=d(),Oe=d(),Be=()=>{Ne.value.open()},De=()=>{Oe.value.open()};return k.on("selectIncantation",(e=>{je.value.prompt=e})),k.on("think",(e=>{je.value.prompt=e})),(s,l)=>(t(),r(z,null,[y("div",Z,[_(J)?w("",!0):(t(),g(H,{key:0}))]),b(e,{ref_key:"thinkRef",ref:Ne},null,512),b(a,{ref_key:"inspirationRef",ref:Oe},null,512),y("div",ee,[y("div",ae,[b(_(q),{title:"AI绘画基础版",des:"基础版绘图速度较快、根据关键词生成~大约需要10-30s左右时间、合理使用！",padding:_(J)?2:20},null,8,["padding"]),y("div",{class:I(_(J)?["px-2"]:["px-20"])},[y("div",se,[y("div",le,[b(_(K),null,{default:j((()=>[b(_(M),{value:je.value.prompt,"onUpdate:value":l[0]||(l[0]=e=>je.value.prompt=e),style:{background:"transparent"},size:"large",disabled:Y.value,clearable:"",placeholder:"请输入您想要生成的图片描述信息、可以参考上面的示例文字、我们将会对其转为英文绘画、请知悉！"},null,8,["value","disabled"])])),_:1}),y("div",te,[y("div",re,[ne,b(_(L),null,{default:j((()=>[b(_(T),{value:Me.value,"onUpdate:value":[l[1]||(l[1]=e=>Me.value=e),Le],size:"small",disabled:2==Ge.value||3==Ge.value},null,8,["value","disabled"])])),_:1})]),y("div",{class:"otherItem",onClick:Be},ie),y("div",{class:"otherItem",onClick:De},oe)])]),y("div",ue,[b(_(N),{type:"success",size:"large",loading:Y.value,disabled:Y.value,onClick:Ee},{icon:j((()=>[b(_(F),null,{default:j((()=>[b(_(Q))])),_:1})])),default:j((()=>[G(" 生成图片 ")])),_:1},8,["loading","disabled"])])]),y("div",ce,[de,y("div",pe,[ve,y("div",null,[(t(),r(z,null,C(Ie,((e,a)=>y("span",{key:e,class:"cursor-pointer hover:text-primary",onClick:a=>je.value.prompt+=je.value.prompt?`，${e}`:e},O(`${e} ${a+1===Ie.length?"":"、"}`),9,me))),64))])])]),Y.value?(t(),r("div",fe,[xe,y("div",ke,[(t(!0),r(z,null,C(je.value.n,(e=>(t(),r("div",{class:"w-44 h-44 border rounded-md relative ml-4 mt-4",key:e},[b(B,{"text-color":$.value,words:["图","片","绘","制","中"]},null,8,["text-color"])])))),128))])])):w("",!0),b(_(X),{type:"line",animated:"",class:"mt-5","onUpdate:value":Ae},{default:j((()=>[b(_(D),{name:"all",tab:"公共生成"},{default:j((()=>[ge.value.length?(t(),r("div",he,[(t(!0),r(z,null,C(ge.value,(e=>(t(),g(_(R),{key:e.answer,lazy:"",class:"w-40 ml-4 mb-4",src:e.thumbImg,"preview-src":e.answer},null,8,["src","preview-src"])))),128))])):(t(),g(_(U),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))])),_:1}),b(_(D),{name:"mine",tab:"我的生成"},{default:j((()=>[_e.value.length?(t(),r("div",ye,[(t(!0),r(z,null,C(_e.value,((e,a)=>(t(),g(_(R),{key:e.answer,lazy:"","object-fit":"contain",class:I(["flex justify-center",[_(J)?"w-6/12 ml-0 mb-4":"w-40 ml-4 mb-4",a%2==0?"pr-1":"pl-1"]]),src:e.thumbImg,"preview-src":e.answer},null,8,["class","src","preview-src"])))),128))])):(t(),g(_(U),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))])),_:1})])),_:1})],2)])])],64))}}),[["__scopeId","data-v-f798f413"]]);export{_e as default};
