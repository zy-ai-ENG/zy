
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c9f6880f.js";import{Y as l,d as a,a1 as u,C as o,o as t,J as s,a2 as n,e as r,a3 as d,r as m,D as i,y as p,j as c,c as f,f as v,g as y,b as h,h as g,t as w,K as _,P as V,s as b}from"../main-646ffc07.js";const I=e=>l.get("menu/query",{params:e}),x=e=>l.post("menu/visible",e),N=e=>l.post("menu/setMenu",e),U=e=>l.post("menu/delete",e),C=e=>l.post("menu/updateIcon",e),T=a({__name:"index",props:{icon:{}},setup(e){const l=u(),a=o((()=>({class:l.class||"",style:l.style||"width: 2em, height: 2em"})));return(e,l)=>(t(),s(r(d),n({icon:e.icon},a.value),null,16,["icon"]))}}),S={class:"flex justify-between"},k=h("b",null,"客户端动态菜单设置",-1),P={class:"flex items-center"},q={class:"flex items-center"},J={class:"dialog-footer"},A={style:{display:"flex","align-items":"center"}},O=h("span",{style:{width:"130px"}},"修改ICON编码:",-1),j={style:{display:"flex","align-items":"center","margin-top":"12px"}},z=h("span",{style:{width:"130px"}},"修改菜单名称:",-1),D={style:{display:"flex","align-items":"center","margin-top":"12px"}},F=h("span",{style:{width:"130px"}},"修改菜单排序:",-1),G={class:"dialog-footer"},K=a({__name:"menu",setup(l){const a=m(1),u=m(),n=m(!1),d=m(0),b=m(""),K=m(""),M=m(0),R=m(!1),Y=m({menuName:"",menuTipText:"",menuIframeUrl:"",isJump:!1,isShow:!0,menuIcon:"",menuPath:"",order:1e3,isNeedAuth:!1,isSystem:!0}),B={menuName:[{required:!0,trigger:"blur",message:"请填写菜单名称"}],menuTipText:[{required:!0,trigger:"blur",message:"请填写菜单名称提示"}],menuIframeUrl:[{required:!0,trigger:"blur",message:"请填写三方网页地址"}],isJump:[{required:!0,trigger:"blur",message:"请确认是否跳转"}],isShow:[{required:!0,trigger:"blur",message:"请确认是否打开菜单"}],menuIcon:[{required:!0,trigger:"blur",message:"请填写ICON图标"}],order:[{required:!0,trigger:"blur",message:"请填写排序ID"}],menuPath:[{required:!0,trigger:"blur",message:"请填写菜单路径"}],isSystem:[{required:!0,trigger:"blur",message:"请确认是否是系统内地址"}],isNeedAuth:[{required:!0,trigger:"blur",message:"请确认是否需要权限"}]};i(a,(e=>{Q()}));const E=o((()=>d.value>0?"编辑菜单":"添加菜单")),H=o((()=>d.value>0?"确认修改":"确认添加")),L=m([]);async function Q(){const e=await I({menuPlatform:a.value});L.value=e.data}function W(e){null==e||e.resetFields(),d.value=0}async function X(){var e;null==(e=u.value)||e.resetFields(),d.value=0,n.value=!0}async function Z(){if(!b.value||!K.value||!M.value)return V.error("请填写ICON编码");const e={id:d.value,menuIcon:b.value,menuName:K.value,order:M.value};await C(e),V.success("操作成功！"),Q(),R.value=!1}return p((()=>{Q()})),(l,o)=>{const m=c("el-alert"),i=e,p=c("el-radio-button"),I=c("el-radio-group"),C=c("Plus"),$=c("el-icon"),ee=c("el-button"),le=c("el-table-column"),ae=c("el-tag"),ue=c("el-popconfirm"),oe=c("el-table"),te=c("el-card"),se=c("el-switch"),ne=c("el-form-item"),re=c("el-input"),de=c("el-form"),me=c("el-dialog");return t(),f("div",null,[v(i,{bottomPadding:"20px"},{default:y((()=>[v(m,{closable:!1,"show-icon":"",title:"动态菜单配置说明",description:"请至少配置一个、如果不配置默认设置对话页面、排序ID越小越靠前、PC和移动端是两套独立的设置、图标选择请在此处： https://icon-sets.iconify.design/ 找到或搜索到喜欢的图标之后可以复制下方的图标编号 例如material-symbols:chat-outline、更加详细文档参考官方演示站公告文档地址！",type:"success"})])),_:1}),v(te,{style:{margin:"20px 20px 0 20px"}},{header:y((()=>[h("div",S,[k,h("div",P,[v(I,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e)},{default:y((()=>[v(p,{label:1},{default:y((()=>[g("PC端")])),_:1}),v(p,{label:0},{default:y((()=>[g("移动端")])),_:1})])),_:1},8,["modelValue"]),v(ee,{class:"ml-5",onClick:X},{default:y((()=>[g(" 添加菜单 "),v($,{class:"ml-3"},{default:y((()=>[v(C)])),_:1})])),_:1})])])])),default:y((()=>[v(oe,{data:L.value,style:{width:"100%"}},{default:y((()=>[v(le,{prop:"menuTipText",label:"菜单文本"}),v(le,{prop:"menuType",label:"菜单类型"},{default:y((e=>[v(ae,{type:e.row.menuType?"success":"danger"},{default:y((()=>[g(w(0===e.row.menuType?"系统预设":"自定义菜单"),1)])),_:2},1032,["type"])])),_:1}),v(le,{prop:"isJump",label:"是否打开新窗口"},{default:y((e=>[v(ae,{type:e.row.isJump?"success":"danger"},{default:y((()=>[g(w(e.row.isJump?"是":"否"),1)])),_:2},1032,["type"])])),_:1}),v(le,{prop:"isShow",label:"是否显示菜单"},{default:y((e=>[v(ae,{type:e.row.isShow?"success":"danger"},{default:y((()=>[g(w(e.row.isShow?"是":"否"),1)])),_:2},1032,["type"])])),_:1}),v(le,{prop:"isNeedAuth",label:"是否需要登录访问"},{default:y((e=>[v(ae,{type:e.row.isNeedAuth?"success":"danger"},{default:y((()=>[g(w(e.row.isNeedAuth?"是":"否"),1)])),_:2},1032,["type"])])),_:1}),v(le,{prop:"menuName",label:"菜单名称"},{default:y((e=>[h("p",null,w(e.row.menuName),1)])),_:1}),v(le,{prop:"menuIcon",label:"菜单图标"},{default:y((e=>[v(T,{style:{"font-size":"24px"},icon:e.row.menuIcon},null,8,["icon"])])),_:1}),v(le,{prop:"order",label:"排序"}),v(le,{prop:"menuPath",label:"菜单路径"},{default:y((e=>[g(w(e.row.menuPath||"---"),1)])),_:1}),v(le,{prop:"menuIframeUrl",label:"三方网页链接"},{default:y((e=>[g(w(e.row.menuIframeUrl||"---"),1)])),_:1}),v(le,{label:"操作"},{default:y((e=>[h("div",q,[e.row.menuType?(t(),s(ee,{key:0,onClick:l=>function(e){const{id:l,menuTipText:a,menuName:u,menuIframeUrl:o,isJump:t,isShow:s,menuIcon:r,menuPath:m,order:i,isNeedAuth:p}=e;d.value=l,Y.value={menuName:u,menuTipText:a,menuIframeUrl:o,isJump:t,isShow:s,menuIcon:r,menuPath:m,order:i,isNeedAuth:p,isSystem:!m},n.value=!0}(e.row),size:"small"},{default:y((()=>[g("编辑菜单")])),_:2},1032,["onClick"])):_("",!0),e.row.menuType?_("",!0):(t(),s(ee,{key:1,onClick:l=>async function(e){const{id:l,menuIcon:a,menuName:u,order:o}=e;b.value=a,K.value=u,M.value=o,d.value=l,R.value=!0}(e.row),size:"small"},{default:y((()=>[g("修改默认")])),_:2},1032,["onClick"])),e.row.menuType?_("",!0):(t(),s(ee,{key:2,onClick:l=>async function(e){const{id:l}=e;await x({id:l}),V.success("操作成功！"),Q()}(e.row),type:e.row.isShow?"danger":"success",size:"small"},{default:y((()=>[g(w(e.row.isShow?"隐藏菜单":"打开菜单"),1)])),_:2},1032,["onClick","type"])),e.row.menuType?(t(),s(ue,{key:3,title:"是否删除当前菜单？",onConfirm:l=>async function(e){await U({id:e.id}),V.success("操作成功！"),Q()}(e.row)},{reference:y((()=>[v(ee,{type:"danger",size:"small"},{default:y((()=>[g("删除菜单")])),_:1})])),_:2},1032,["onConfirm"])):_("",!0)])])),_:1})])),_:1},8,["data"])])),_:1}),v(me,{modelValue:n.value,"onUpdate:modelValue":o[13]||(o[13]=e=>n.value=e),"close-on-click-modal":!1,title:r(E),width:"570",onClose:o[14]||(o[14]=e=>W(u.value))},{footer:y((()=>[h("span",J,[v(ee,{onClick:o[11]||(o[11]=e=>n.value=!1)},{default:y((()=>[g("我再想想")])),_:1}),v(ee,{type:"primary",onClick:o[12]||(o[12]=e=>async function(e){null==e||e.validate((async l=>{if(!l)return;const u=Object.assign(Y.value,{id:d},{menuPlatform:a.value});await N(u),V.success("操作成功！"),e.resetFields(),n.value=!1,Q()}))}(u.value))},{default:y((()=>[g(w(r(H)),1)])),_:1})])])),default:y((()=>[v(de,{ref_key:"formRef",ref:u,"label-width":"140",rules:B,model:Y.value},{default:y((()=>[v(ne,{label:"是否打开菜单",prop:"isShow"},{default:y((()=>[v(se,{modelValue:Y.value.isShow,"onUpdate:modelValue":o[1]||(o[1]=e=>Y.value.isShow=e)},null,8,["modelValue"])])),_:1}),v(ne,{label:"是否属于三方网页",prop:"isSystem"},{default:y((()=>[v(se,{modelValue:Y.value.isSystem,"onUpdate:modelValue":o[2]||(o[2]=e=>Y.value.isSystem=e)},null,8,["modelValue"])])),_:1}),v(ne,{label:"菜单名称",prop:"menuName"},{default:y((()=>[v(re,{modelValue:Y.value.menuName,"onUpdate:modelValue":o[3]||(o[3]=e=>Y.value.menuName=e),placeholder:"请填写菜单名称"},null,8,["modelValue"])])),_:1}),v(ne,{label:"菜单文本提示信息",prop:"menuTipText"},{default:y((()=>[v(re,{modelValue:Y.value.menuTipText,"onUpdate:modelValue":o[4]||(o[4]=e=>Y.value.menuTipText=e),placeholder:"请填写菜单提示文字"},null,8,["modelValue"])])),_:1}),v(ne,{label:"菜单图标编号",prop:"menuIcon"},{default:y((()=>[v(re,{modelValue:Y.value.menuIcon,"onUpdate:modelValue":o[5]||(o[5]=e=>Y.value.menuIcon=e),placeholder:"请填写菜单ICON图标"},null,8,["modelValue"])])),_:1}),Y.value.isSystem?(t(),s(ne,{key:0,label:"加载三方网页地址",prop:"menuIframeUrl"},{default:y((()=>[v(re,{modelValue:Y.value.menuIframeUrl,"onUpdate:modelValue":o[6]||(o[6]=e=>Y.value.menuIframeUrl=e),placeholder:"请填写加载的三方网页地址"},null,8,["modelValue"])])),_:1})):_("",!0),v(ne,{label:"数字编号排序",prop:"order"},{default:y((()=>[v(re,{modelValue:Y.value.order,"onUpdate:modelValue":o[7]||(o[7]=e=>Y.value.order=e),type:"number",placeholder:"请填写排序Id、越小越靠前"},null,8,["modelValue"])])),_:1}),Y.value.isSystem?_("",!0):(t(),s(ne,{key:1,label:"系统内菜单路径",prop:"menuPath"},{default:y((()=>[v(re,{modelValue:Y.value.menuPath,"onUpdate:modelValue":o[8]||(o[8]=e=>Y.value.menuPath=e),placeholder:"请填写系统内置菜单地址"},null,8,["modelValue"])])),_:1})),v(ne,{label:"是否打开新窗口",prop:"isJump"},{default:y((()=>[v(se,{modelValue:Y.value.isJump,"onUpdate:modelValue":o[9]||(o[9]=e=>Y.value.isJump=e)},null,8,["modelValue"])])),_:1}),v(ne,{label:"是否需要登录访问",prop:"isNeedAuth"},{default:y((()=>[v(se,{modelValue:Y.value.isNeedAuth,"onUpdate:modelValue":o[10]||(o[10]=e=>Y.value.isNeedAuth=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"]),v(me,{modelValue:R.value,"onUpdate:modelValue":o[19]||(o[19]=e=>R.value=e),title:"修改默认信息",width:"570",onClose:o[20]||(o[20]=e=>W(u.value))},{footer:y((()=>[h("span",G,[v(ee,{onClick:o[18]||(o[18]=e=>R.value=!1)},{default:y((()=>[g("我再想想")])),_:1}),v(ee,{type:"primary",onClick:Z},{default:y((()=>[g(" 确认修改 ")])),_:1})])])),default:y((()=>[h("div",A,[O,v(re,{modelValue:b.value,"onUpdate:modelValue":o[15]||(o[15]=e=>b.value=e),placeholder:"请填写要修改的ICON编码"},null,8,["modelValue"])]),h("div",j,[z,v(re,{modelValue:K.value,"onUpdate:modelValue":o[16]||(o[16]=e=>K.value=e),placeholder:"请填写要修改的菜单名称"},null,8,["modelValue"])]),h("div",D,[F,v(re,{modelValue:M.value,"onUpdate:modelValue":o[17]||(o[17]=e=>M.value=e),placeholder:"请修改菜单排序 越大越靠前"},null,8,["modelValue"])])])),_:1},8,["modelValue"])])}}});"function"==typeof b&&b(K);export{K as default};
