
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.91049707.js";import{A as a}from"../mj/mj.17b1a9c2.js";import{R as r}from"../@element-plus_icons-vue@2.1.0_vue@3.2.47/@element-plus_icons-vue@2.1.0_vue@3.2.47.ac084a9d.js";import{useUploader as t}from"../use/useUploader.c410303c.js";import{h as l,a as s,b as o}from"../main-f6406e21.js";import{E as i}from"../element-plus@2.3.4_vue@3.2.47/element-plus@2.3.4_vue@3.2.47.34526108.js";import{d as u,l as m,m as p,o as d,c,j as n,H as _,L as v,I as g,G as f,a as y,F as h,R as j,p as b,U as w,Y as U,_ as V,$ as z}from"../@vue_runtime-core@3.2.47/@vue_runtime-core@3.2.47.f65ce9b3.js";import{k as x,h as C,u as k,a as P}from"../@vue_reactivity@3.2.47/@vue_reactivity@3.2.47.e3514ec5.js";import{M as q}from"../@vue_shared@3.2.47/@vue_shared@3.2.47.0f451126.js";import"../mitt@3.0.0/mitt@3.0.0.f0e54764.js";import"../@iconify_vue@4.1.1_vue@3.2.47/@iconify_vue@4.1.1_vue@3.2.47.f5d0ccbf.js";import"../vue-router@4.1.6_vue@3.2.47/vue-router@4.1.6_vue@3.2.47.0dcda182.js";import"../eruda@3.0.0/eruda@3.0.0.b4351698.js";import"../copy-to-clipboard@3.3.3/copy-to-clipboard@3.3.3.e0d05bd3.js";import"../toggle-selection@1.0.6/toggle-selection@1.0.6.c563a038.js";import"../vconsole@3.15.0/vconsole@3.15.0.c5df0a73.js";import"../hotkeys-js@3.10.2/hotkeys-js@3.10.2.e364e5e1.js";import"../pinia@2.0.35_typescript@5.0.4_vue@3.2.47/pinia@2.0.35_typescript@5.0.4_vue@3.2.47.2808d9ca.js";import"../vue-demi@0.14.7_vue@3.2.47/vue-demi@0.14.7_vue@3.2.47.71ba0ef2.js";import"../lodash-es@4.17.21/lodash-es@4.17.21.4b0f838c.js";import"../@codemirror_language-data@6.3.1_@codemirror_state@6.2.0_@codemirror_view@6.10.1_@lezer_common@1.0.2/@codemirror_language-data@6.3.1_@codemirror_state@6.2.0_@codemirror_view@6.10.1_@lezer_common@1.0.2.c8753240.js";import"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";import"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";import"../w3c-keyname@2.2.6/w3c-keyname@2.2.6.89c2fad7.js";import"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import"../path-browserify@1.0.1/path-browserify@1.0.1.2c28aad1.js";import"../echarts@5.4.2/echarts@5.4.2.80043e35.js";import"../tslib@2.3.0/tslib@2.3.0.a4e99503.js";import"../zrender@5.4.3/zrender@5.4.3.e2452002.js";import"../resize-observer-polyfill@1.5.1/resize-observer-polyfill@1.5.1.ad543aa3.js";import"../axios@1.4.0/axios@1.4.0.a8ee11a1.js";import"../@vueuse_integrations@10.1.2_axios@1.4.0_nprogress@0.2.0_vue@3.2.47/@vueuse_integrations@10.1.2_axios@1.4.0_nprogress@0.2.0_vue@3.2.47.f14b7780.js";import"../nprogress@0.2.0/nprogress@0.2.0.8c969ce6.js";import"../@vueuse_shared@10.1.2_vue@3.2.47/@vueuse_shared@10.1.2_vue@3.2.47.a4edebfd.js";import"../@vue_runtime-dom@3.2.47/@vue_runtime-dom@3.2.47.439158bd.js";import"../@vueuse_core@9.13.0_vue@3.2.47/@vueuse_core@9.13.0_vue@3.2.47.c260552e.js";import"../@vueuse_shared@9.13.0_vue@3.2.47/@vueuse_shared@9.13.0_vue@3.2.47.5682e459.js";import"../@sxzz_popperjs-es@2.11.7/@sxzz_popperjs-es@2.11.7.b78c3215.js";import"../@ctrl_tinycolor@3.6.0/@ctrl_tinycolor@3.6.0.91de2ec7.js";import"../dayjs@1.11.7/dayjs@1.11.7.d5551305.js";import"../@vue_reactivity@3.3.0-beta.3/@vue_reactivity@3.3.0-beta.3.d2bad40d.js";import"../@vue_shared@3.3.0-beta.3/@vue_shared@3.3.0-beta.3.6870dbff.js";import"../async-validator@4.2.5/async-validator@4.2.5.cf877c1f.js";import"../memoize-one@6.0.0/memoize-one@6.0.0.63ab667a.js";import"../escape-html@1.0.3/escape-html@1.0.3.0dbb34ec.js";import"../normalize-wheel-es@1.2.0/normalize-wheel-es@1.2.0.3222b0a2.js";import"../@floating-ui_dom@1.2.7/@floating-ui_dom@1.2.7.88b7d3a9.js";import"../@floating-ui_core@1.2.6/@floating-ui_core@1.2.6.88778327.js";const R=e=>(V("data-v-679db4e8"),e=e(),z(),e),F={class:"overflow-y-scroll w-full whitespace-nowrap"},L=R((()=>y("div",{style:{width:"250px"}}," 关闭当前提示词、用户端将不再展示！ ",-1))),A=R((()=>y("div",{style:{width:"250px"}}," 携带左侧参数将会对提示词的参数复写、不携带则以自定义提示词中的指令参数为准！ ",-1))),I={class:"flex justify-end mr-5"},M=u({__name:"prompts",setup(s){x(),x(0);const o=x(!1),u=x(!1),V=x(),z=x(0),R=C({isCarryParams:!0,status:!0,title:"",order:100,prompt:"",imageUrl:"",aspect:"16:9"}),M=x([{aspect:"1:1"},{aspect:"4:3"},{aspect:"3:4"},{aspect:"16:9"},{aspect:"9:16"}]),O=C({isCarryParams:[{required:!0,message:"请选择你是否需要携带参数",trigger:"change"}],status:[{required:!0,message:"请选择提示词开启状态",trigger:"change"}],title:[{required:!0,message:"请填写您的提示词信息",trigger:"blur"}],order:[{required:!0,message:"请填写您的排序id 越大越靠前",trigger:"blur"}],prompt:[{required:!0,message:"请填写提示词详细内容",trigger:"change"}],imageUrl:[{required:!0,message:"请输入图片URL或上传文件",trigger:"change"}],aspect:[{required:!0,message:"请选择图片比例",trigger:"change"}]});const D=x(!1),S=m((()=>z.value?"更新提示词":"新增提示词")),Y=m((()=>z.value?"确认更新":"确认新增")),$=x([]);async function B(){try{o.value=!0;const e=await a.queryPrompts();o.value=!1,$.value=e.data}catch(e){o.value=!1}}const{selectFile:E,upload:G}=t(),H=async()=>{const e=await E(),a=await G({file:e}).then((e=>e.data));R.imageUrl=a,i({type:"success",message:"上传图片成功！"})};return p((()=>{B()})),(t,s)=>{const m=w("el-alert"),p=w("Plus"),x=w("el-icon"),C=w("el-button"),E=e,G=w("el-table-column"),J=w("el-image"),K=w("el-tag"),N=w("el-popconfirm"),Q=w("el-table"),T=w("el-switch"),X=w("QuestionFilled"),Z=w("el-tooltip"),W=w("el-form-item"),ee=w("el-input"),ae=w("el-option"),re=w("el-select"),te=w("el-form"),le=w("el-dialog"),se=U("loading");return d(),c("div",null,[n(E,{class:"header",bottomPadding:"20px"},{default:_((()=>[n(m,{"show-icon":"",title:"Ai智能封面说明",closable:!1,description:"此处的封面图将会在用户端的展示出来、用户点击你给与的预设可以一键绘制！",type:"success"}),n(C,{type:"success",class:"ml-3",size:"large",onClick:s[0]||(s[0]=e=>D.value=!0)},{default:_((()=>[v(" 添加预设 "),n(x,{class:"ml-3"},{default:_((()=>[n(p)])),_:1})])),_:1})])),_:1}),n(E,{bottomPadding:"20px",bottomMargin:"0px"},{default:_((()=>[g((d(),f(Q,{border:"",data:k($),height:"69vh",style:{width:"100%"},size:"large"},{default:_((()=>[n(G,{prop:"title",label:"提示词名称",width:"180"}),n(G,{prop:"aspect",label:"图片比例",width:"180"}),n(G,{prop:"imageUrl",label:"图片",width:"180"},{default:_((e=>[n(J,{src:e.row.imageUrl,lazy:""},null,8,["src"])])),_:1}),n(G,{prop:"prompt",label:"提示词内容"},{default:_((e=>[y("div",F,q(e.row.prompt),1)])),_:1}),n(G,{prop:"status",align:"center",label:"提示词状态",width:"110"},{default:_((e=>[n(K,{type:e.row.status?"success":"danger"},{default:_((()=>[v(q(e.row.status?"开启中":"已关闭"),1)])),_:2},1032,["type"])])),_:1}),n(G,{prop:"isCarryParams",align:"center",label:"携带用户的参数",width:"150"},{default:_((e=>[n(K,{type:e.row.isCarryParams?"success":"warning"},{default:_((()=>[v(q(e.row.isCarryParams?"携带":"不携带"),1)])),_:2},1032,["type"])])),_:1}),n(G,{prop:"order",align:"center",label:"排序ID",width:"90"}),n(G,{fixed:"right",label:"操作",align:"center",width:"180"},{default:_((e=>[n(C,{link:"",type:"primary",size:"small",onClick:a=>function(e){z.value=e.id;const{status:a,title:r,prompt:t,order:l,imageUrl:s,isCarryParams:o,aspect:i}=e;b((()=>{Object.assign(R,{status:a,title:r,prompt:t,imageUrl:s,order:l,isCarryParams:o,aspect:i})})),D.value=!0}(e.row)},{default:_((()=>[v(" 变更 ")])),_:2},1032,["onClick"]),n(N,{title:"确认删除此提示词么?",width:"180","icon-color":"red",onConfirm:r=>async function(e){const{id:r}=e;await a.delPrompt({id:r}),i({type:"success",message:"操作完成！"}),B()}(e.row)},{reference:_((()=>[n(C,{link:"",type:"danger",size:"small"},{default:_((()=>[v(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[se,k(o)]])])),_:1}),n(le,{modelValue:k(D),"onUpdate:modelValue":s[10]||(s[10]=e=>P(D)?D.value=e:null),"close-on-click-modal":!1,title:k(S),width:"770",onClose:s[11]||(s[11]=e=>{return a=k(V),z.value=0,void(null==a||a.resetFields());var a})},{footer:_((()=>[y("span",I,[n(C,{onClick:s[8]||(s[8]=e=>D.value=!1)},{default:_((()=>[v("取消")])),_:1}),n(C,{type:"primary",onClick:s[9]||(s[9]=e=>async function(e){null==e||e.validate((async e=>{if(e){const e=l(R);delete e.id,z.value&&(e.id=z.value),await a.setPrompt(e),i({type:"success",message:"操作成功！"}),z.value=0,D.value=!1,B()}}))}(k(V)))},{default:_((()=>[v(q(k(Y)),1)])),_:1})])])),default:_((()=>[g((d(),f(te,{ref_key:"formPackageRef",ref:V,"label-position":"right","label-width":"120px",model:R,rules:O},{default:_((()=>[n(W,{label:"启用状态",prop:"status"},{default:_((()=>[n(T,{modelValue:R.status,"onUpdate:modelValue":s[1]||(s[1]=e=>R.status=e)},null,8,["modelValue"]),n(Z,{class:"box-item",effect:"dark",placement:"right"},{content:_((()=>[L])),default:_((()=>[n(x,{class:"ml-3 cursor-pointer"},{default:_((()=>[n(X)])),_:1})])),_:1})])),_:1}),n(W,{label:"携带左侧参数",prop:"isCarryParams"},{default:_((()=>[n(T,{modelValue:R.isCarryParams,"onUpdate:modelValue":s[2]||(s[2]=e=>R.isCarryParams=e)},null,8,["modelValue"]),n(Z,{class:"box-item",effect:"dark",placement:"right"},{content:_((()=>[A])),default:_((()=>[n(x,{class:"ml-3 cursor-pointer"},{default:_((()=>[n(X)])),_:1})])),_:1})])),_:1}),n(W,{label:"排序Order",prop:"order"},{default:_((()=>[n(ee,{modelValue:R.order,"onUpdate:modelValue":s[3]||(s[3]=e=>R.order=e),placeholder:"排序id越大越靠前"},null,8,["modelValue"])])),_:1}),n(W,{label:"提示词名称",prop:"title"},{default:_((()=>[n(ee,{modelValue:R.title,"onUpdate:modelValue":s[4]||(s[4]=e=>R.title=e),placeholder:"请填写提示词名称（用户看到的名称）"},null,8,["modelValue"])])),_:1}),n(W,{label:"图片URL",prop:"imageUrl"},{default:_((()=>[n(ee,{modelValue:R.imageUrl,"onUpdate:modelValue":s[5]||(s[5]=e=>R.imageUrl=e),placeholder:"请填写在线图片URL或上传本地图片"},{append:_((()=>[n(C,{icon:k(r),onClick:H},{default:_((()=>[v("上传图片")])),_:1},8,["icon"])])),_:1},8,["modelValue"])])),_:1}),n(W,{label:"图片比例",prop:"aspect"},{default:_((()=>[n(re,{modelValue:R.aspect,"onUpdate:modelValue":s[6]||(s[6]=e=>R.aspect=e),placeholder:"请选择图片比例",style:{width:"100%"}},{default:_((()=>[(d(!0),c(h,null,j(k(M),(e=>(d(),f(ae,{key:e.aspect,label:e.aspect,value:e.aspect},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(W,{label:"提示词内容",prop:"proxyUrl"},{default:_((()=>[n(ee,{type:"textarea",rows:4,modelValue:R.prompt,"onUpdate:modelValue":s[7]||(s[7]=e=>R.prompt=e),placeholder:"请填写提示词详细内容！"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])),[[se,k(u)]])])),_:1},8,["modelValue","title"])])}}});"function"==typeof o&&o(M);const O=s(M,[["__scopeId","data-v-679db4e8"]]);export{O as default};
