
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.91049707.js";import a from"../components/mjManger.556cff2b.js";import o from"../components/mjDetail.a8bee8a9.js";import{A as r,U as t,p as l}from"../index/index.4485e23d.js";import{m as i,b as s}from"../main-f6406e21.js";import{A as n}from"../mj/mj.17b1a9c2.js";import{d as m}from"../dayjs@1.11.7/dayjs@1.11.7.d5551305.js";import{E as u}from"../element-plus@2.3.4_vue@3.2.47/element-plus@2.3.4_vue@3.2.47.34526108.js";import{d as p,m as d,o as c,c as _,j as v,H as f,F as j,R as g,L as y,a as b,I as h,G as w,U as z,Y as x}from"../@vue_runtime-core@3.2.47/@vue_runtime-core@3.2.47.f65ce9b3.js";import{k,h as C,u as M}from"../@vue_reactivity@3.2.47/@vue_reactivity@3.2.47.e3514ec5.js";import{M as I}from"../@vue_shared@3.2.47/@vue_shared@3.2.47.0f451126.js";import"../lodash-es@4.17.21/lodash-es@4.17.21.4b0f838c.js";import"../@vueuse_core@9.13.0_vue@3.2.47/@vueuse_core@9.13.0_vue@3.2.47.c260552e.js";import"../@vueuse_shared@9.13.0_vue@3.2.47/@vueuse_shared@9.13.0_vue@3.2.47.5682e459.js";import"../@vue_runtime-dom@3.2.47/@vue_runtime-dom@3.2.47.439158bd.js";import"../@element-plus_icons-vue@2.1.0_vue@3.2.47/@element-plus_icons-vue@2.1.0_vue@3.2.47.ac084a9d.js";import"../@sxzz_popperjs-es@2.11.7/@sxzz_popperjs-es@2.11.7.b78c3215.js";import"../@ctrl_tinycolor@3.6.0/@ctrl_tinycolor@3.6.0.91de2ec7.js";import"../copy-to-clipboard@3.3.3/copy-to-clipboard@3.3.3.e0d05bd3.js";import"../toggle-selection@1.0.6/toggle-selection@1.0.6.c563a038.js";import"../@vue_reactivity@3.3.0-beta.3/@vue_reactivity@3.3.0-beta.3.d2bad40d.js";import"../@vue_shared@3.3.0-beta.3/@vue_shared@3.3.0-beta.3.6870dbff.js";import"../async-validator@4.2.5/async-validator@4.2.5.cf877c1f.js";import"../memoize-one@6.0.0/memoize-one@6.0.0.63ab667a.js";import"../escape-html@1.0.3/escape-html@1.0.3.0dbb34ec.js";import"../normalize-wheel-es@1.2.0/normalize-wheel-es@1.2.0.3222b0a2.js";import"../@floating-ui_dom@1.2.7/@floating-ui_dom@1.2.7.88b7d3a9.js";import"../@floating-ui_core@1.2.6/@floating-ui_core@1.2.6.88778327.js";import"../mitt@3.0.0/mitt@3.0.0.f0e54764.js";import"../@iconify_vue@4.1.1_vue@3.2.47/@iconify_vue@4.1.1_vue@3.2.47.f5d0ccbf.js";import"../vue-router@4.1.6_vue@3.2.47/vue-router@4.1.6_vue@3.2.47.0dcda182.js";import"../eruda@3.0.0/eruda@3.0.0.b4351698.js";import"../vconsole@3.15.0/vconsole@3.15.0.c5df0a73.js";import"../hotkeys-js@3.10.2/hotkeys-js@3.10.2.e364e5e1.js";import"../pinia@2.0.35_typescript@5.0.4_vue@3.2.47/pinia@2.0.35_typescript@5.0.4_vue@3.2.47.2808d9ca.js";import"../vue-demi@0.14.7_vue@3.2.47/vue-demi@0.14.7_vue@3.2.47.71ba0ef2.js";import"../@codemirror_language-data@6.3.1_@codemirror_state@6.2.0_@codemirror_view@6.10.1_@lezer_common@1.0.2/@codemirror_language-data@6.3.1_@codemirror_state@6.2.0_@codemirror_view@6.10.1_@lezer_common@1.0.2.c8753240.js";import"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";import"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";import"../w3c-keyname@2.2.6/w3c-keyname@2.2.6.89c2fad7.js";import"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import"../path-browserify@1.0.1/path-browserify@1.0.1.2c28aad1.js";import"../echarts@5.4.2/echarts@5.4.2.80043e35.js";import"../tslib@2.3.0/tslib@2.3.0.a4e99503.js";import"../zrender@5.4.3/zrender@5.4.3.e2452002.js";import"../resize-observer-polyfill@1.5.1/resize-observer-polyfill@1.5.1.ad543aa3.js";import"../axios@1.4.0/axios@1.4.0.a8ee11a1.js";import"../@vueuse_integrations@10.1.2_axios@1.4.0_nprogress@0.2.0_vue@3.2.47/@vueuse_integrations@10.1.2_axios@1.4.0_nprogress@0.2.0_vue@3.2.47.f14b7780.js";import"../nprogress@0.2.0/nprogress@0.2.0.8c969ce6.js";import"../@vueuse_shared@10.1.2_vue@3.2.47/@vueuse_shared@10.1.2_vue@3.2.47.a4edebfd.js";m.locale("zh-cn");const P=e=>m(e).format("YYYY-MM-DD HH:mm:ss"),V={style:{float:"right"}},D=p({__name:"index",setup(s){const m=k(),p=k(),D=k(!1),U=k([]),J=k(0),L=i(l),R=i(r),Y=C({account:"",channelId:"",enable:0,page:1,size:20}),A=k(),S=async()=>{try{D.value=!0;const e=await n.queryMjParamByPage(Y),{rows:a,count:o}=e.data;D.value=!1,J.value=o,U.value=a.map((e=>({infoLoading:!1,...e})))}catch(e){D.value=!1}},F=async()=>{p.value.open()};return d((()=>{S()})),(l,i)=>{const s=z("el-input"),d=z("el-form-item"),k=z("el-option"),C=z("el-select"),H=z("el-button"),q=z("Plus"),B=z("el-icon"),E=z("el-form"),O=e,T=z("el-alert"),$=z("el-table-column"),G=z("el-tag"),K=z("el-popconfirm"),N=z("el-table"),X=z("el-pagination"),Z=z("el-row"),Q=x("loading");return c(),_("div",null,[v(a,{ref_key:"mjManagerRef",ref:p,onFresh:S},null,512),v(o,{ref_key:"mjDetailRef",ref:m},null,512),v(O,null,{default:f((()=>[v(E,{ref_key:"formRef",ref:A,inline:!0,model:Y},{default:f((()=>[v(d,{label:"账号名",prop:"account"},{default:f((()=>[v(s,{modelValue:Y.account,"onUpdate:modelValue":i[0]||(i[0]=e=>Y.account=e),width:"100%",placeholder:"账号名[模糊搜索]",clearable:""},null,8,["modelValue"])])),_:1}),v(d,{label:"通道ID(channelId)",prop:"channelId"},{default:f((()=>[v(s,{modelValue:Y.channelId,"onUpdate:modelValue":i[1]||(i[1]=e=>Y.channelId=e),placeholder:"频道ID[模糊搜索]",clearable:""},null,8,["modelValue"])])),_:1}),v(d,{label:"状态",prop:"enable",style:{width:"192px"}},{default:f((()=>[v(C,{modelValue:Y.enable,"onUpdate:modelValue":i[2]||(i[2]=e=>Y.enable=e)},{default:f((()=>[(c(!0),_(j,null,g(M(r),(e=>(c(),w(k,{label:e.label,value:e.value},null,8,["label","value"])))),256))])),_:1},8,["modelValue"])])),_:1}),v(d,null,{default:f((()=>[v(H,{type:"primary",onClick:S},{default:f((()=>[y(" 查询 ")])),_:1}),v(H,{onClick:i[3]||(i[3]=e=>(A.value,Object.assign(Y,{account:"",channelId:"",enable:0,page:1,size:20}),void S()))},{default:f((()=>[y(" 重置 ")])),_:1})])),_:1}),b("span",V,[v(H,{type:"success",onClick:F},{default:f((()=>[y(" 添加MJ账号 "),v(B,{class:"ml-3"},{default:f((()=>[v(q)])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1}),v(O,{bottomPadding:"20px"},{default:f((()=>[v(T,{closable:!1,"show-icon":"",title:"MJ账号管理",description:"详细配置请参考说明文档，添加MJ账号参数！",type:"success"})])),_:1}),v(O,{bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[h((c(),w(N,{border:"",data:U.value,height:"53vh",width:"100%",size:"large"},{default:f((()=>[v($,{prop:"guildId",label:"服务器ID"}),v($,{prop:"channelId",label:"频道ID"}),v($,{prop:"account",label:"账户"}),v($,{prop:"mode",label:"出图模式"},{default:f((({row:e})=>[v(G,{type:M(t)[e.mode]},{default:f((()=>[y(I(M(L)[e.mode]),1)])),_:2},1032,["type"])])),_:1}),v($,{prop:"fastRemainTime",label:"快速时间剩余"}),v($,{prop:"orderPlan",label:"订阅计划"},{default:f((e=>{return[y(I((a=e.row.orderPlan,1===a?"基本":2===a?"标准":3===a?"专业":"强大")),1)];var a})),_:1}),v($,{prop:"enable",label:"状态"},{default:f((({row:e})=>[v(G,{type:M(t)[e.enable]},{default:f((()=>[y(I(M(R)[e.enable]),1)])),_:2},1032,["type"])])),_:1}),v($,{prop:"createdAt",label:"创建时间"},{default:f((({row:e})=>[b("p",null,I(M(P)(e.createdAt)),1)])),_:1}),v($,{fixed:"right",label:"操作",width:"280",align:"center"},{default:f((e=>[v(H,{link:"",type:"primary",size:"small",onClick:a=>(e=>{const{id:a}=e;m.value.open(a)})(e.row)},{default:f((()=>[y(" 详情 ")])),_:2},1032,["onClick"]),v(H,{link:"",type:"primary",size:"small",onClick:a=>(async e=>{p.value.open(e.id)})(e.row)},{default:f((()=>[y(" 更新并重连 ")])),_:2},1032,["onClick"]),v(K,{width:"300px",title:"为了避免封号，程序每天同步一次，确认手动同步？","confirm-button-text":"确认",onConfirm:a=>(async e=>{e.infoLoading=!0,await n.updateMjSync({id:e.id}),u.success("同步MJ账号成功！"),e.infoLoading=!1,await S()})(e.row)},{reference:f((()=>[v(H,{link:"",type:"danger",loading:e.row.infoLoading,size:"small"},{default:f((()=>[y(" 同步 ")])),_:2},1032,["loading"])])),_:2},1032,["onConfirm"]),v(H,{link:"",type:"primary",size:"small",onClick:a=>(async e=>{const a={id:e.id,enable:1===e.enable?2:1};(await n.setMjParamEnable(a)).success&&u({type:"success",message:`账户${1===e.enable?"停用":"启用"}成功！`}),await S()})(e.row)},{default:f((()=>[y(I(1===e.row.enable?"停用":"启用"),1)])),_:2},1032,["onClick"]),v(K,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:a=>(async e=>{await n.removeMjParam({id:e.id}),u.success("删除MJ账号成功！"),await S()})(e.row)},{reference:f((()=>[v(H,{link:"",type:"danger",size:"small"},{default:f((()=>[y(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Q,D.value]]),v(Z,{class:"flex justify-end mt-5 pb-5"},{default:f((()=>[v(X,{"current-page":Y.page,"onUpdate:currentPage":i[4]||(i[4]=e=>Y.page=e),"page-size":Y.size,"onUpdate:pageSize":i[5]||(i[5]=e=>Y.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:J.value,onSizeChange:S,onCurrentChange:S},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof s&&s(D);export{D as default};
