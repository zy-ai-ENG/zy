
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.0db9df33.js";import{a as l}from"../config/config.b5d22985.js";import{d as a,Q as t,r as o,B as s,x as r,h as c,o as u,c as d,e as n,f as i,a as f,l as h,b as p,E as v,q as m}from"../main-0579ff80.js";const y={class:"flex justify-between"},g=f("b",null,"chevereto图床参数设置",-1),_=a({__name:"chevereto",setup(a){const m=t({cheveretoStatus:"",cheveretoUploadPath:"",cheveretoKey:""}),_=o();async function b(){const e=await l.queryConfig({keys:["cheveretoKey","cheveretoUploadPath","cheveretoStatus"]});Object.assign(m,e.data)}function x(){var e;null==(e=_.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(a=m,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),v.success("变更配置信息成功")}catch(t){}b()}else v.error("请填写完整信息");var a}))}const V=s((()=>[{required:1===Number(m.cheveretoStatus),message:"开启配置后请填写此项",trigger:"change"}]));return r((()=>{b()})),(l,a)=>{const t=c("el-alert"),o=e,s=c("el-button"),r=c("el-switch"),v=c("el-form-item"),b=c("el-col"),K=c("el-row"),U=c("el-input"),w=c("el-form"),j=c("el-card");return u(),d("div",null,[n(o,{bottomPadding:"20px"},{default:i((()=>[n(t,{closable:!1,"show-icon":"",title:"chevereto图床配置说明",description:"chevereto图床官方文档 https://v4-docs.chevereto.com/developer/api/api-v1.html 同时开启多个存储会以菜单排序优先级开启使用",type:"success"})])),_:1}),n(j,{style:{margin:"20px 20px 0 20px"}},{header:i((()=>[f("div",y,[g,n(s,{class:"button",onClick:x},{default:i((()=>[h(" 保存设置 ")])),_:1})])])),default:i((()=>[n(w,{ref_key:"formRef",ref:_,model:m,"label-width":"100px"},{default:i((()=>[n(K,null,{default:i((()=>[n(b,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[n(v,{label:"服务启用状态",prop:"cheveretoStatus"},{default:i((()=>[n(r,{modelValue:m.cheveretoStatus,"onUpdate:modelValue":a[0]||(a[0]=e=>m.cheveretoStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(K,null,{default:i((()=>[n(b,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[n(v,{label:"上传地址",prop:"cheveretoUploadPath",rules:p(V)},{default:i((()=>[n(U,{modelValue:m.cheveretoUploadPath,"onUpdate:modelValue":a[1]||(a[1]=e=>m.cheveretoUploadPath=e),placeholder:"请填写您的图床上传地址",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),n(K,null,{default:i((()=>[n(b,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[n(v,{label:"ApiKey",prop:"cheveretoKey",rules:p(V)},{default:i((()=>[n(U,{modelValue:m.cheveretoKey,"onUpdate:modelValue":a[2]||(a[2]=e=>m.cheveretoKey=e),placeholder:"请填写ApiKey",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}}});"function"==typeof m&&m(_);export{_ as default};
