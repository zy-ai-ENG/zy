
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.35ca4747.js";import{a}from"../config/config.d9afe89b.js";import{d as t,Q as l,r as u,x as i,h as d,o as s,c as o,e as r,f as n,a as c,l as f,E as p,q as b}from"../main-78588ec5.js";const x={class:"flex justify-between"},m=c("b",null,"百度文本审核参数设置",-1),y=t({__name:"baiduSensitive",setup(t){const b=l({baiduTextStatus:"",baiduTextApiKey:"",baiduTextSecretKey:""}),y=u({baiduTextStatus:[{required:!0,trigger:"blur",message:"请选择是否启用百度文本审核"}],baiduTextSecretKey:[{required:!0,trigger:"blur",message:"请填写百度文本审核SecretKey"}],baiduTextApiKey:[{required:!0,trigger:"blur",message:"请填写百度文本审核APIKey"}]}),g=u();async function K(){const e=await a.queryConfig({keys:["baiduTextStatus","baiduTextSecretKey","baiduTextApiKey"]});Object.assign(b,e.data)}function T(){var e;null==(e=g.value)||e.validate((async e=>{if(e){try{await a.setConfig({settings:(t=b,Object.keys(t).map((e=>({configKey:e,configVal:t[e]}))))}),p.success("变更配置信息成功")}catch(l){}K()}else p.error("请填写完整信息");var t}))}return i((()=>{K()})),(a,t)=>{const l=d("el-alert"),u=e,i=d("el-button"),p=d("el-switch"),K=d("el-tooltip"),_=d("el-form-item"),S=d("el-col"),v=d("el-row"),h=d("el-input"),V=d("el-form"),w=d("el-card");return s(),o("div",null,[r(u,{bottomPadding:"20px"},{default:n((()=>[r(l,{closable:!1,"show-icon":"",title:"百度文本审核参数说明",description:"接入原因、当前百度云免费5万条，申请文档地址：https://console.bce.baidu.com/ai/#/ai/antiporn/overview/index 、如果百度云敏感词与自定义敏感词都配置的情况、会先检测百度云后检测自定义的敏感词！",type:"success"})])),_:1}),r(w,{style:{margin:"20px 20px 0 20px"}},{header:n((()=>[c("div",x,[m,r(i,{class:"button",onClick:T},{default:n((()=>[f(" 保存设置 ")])),_:1})])])),default:n((()=>[r(V,{ref_key:"formRef",ref:g,rules:y.value,model:b,"label-width":"150px"},{default:n((()=>[r(v,null,{default:n((()=>[r(S,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[r(_,{label:"开启此敏感词设置",prop:"baiduTextStatus"},{default:n((()=>[r(K,{content:"开启将打开敏感词检测、如果同时开启其他敏感词将会通过菜单顺序仅同时开启一个！",placement:"top","show-after":500},{default:n((()=>[r(p,{modelValue:b.baiduTextStatus,"onUpdate:modelValue":t[0]||(t[0]=e=>b.baiduTextStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),r(v,null,{default:n((()=>[r(S,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[r(_,{label:"文本审核ApiKey",prop:"baiduTextApiKey"},{default:n((()=>[r(h,{modelValue:b.baiduTextApiKey,"onUpdate:modelValue":t[1]||(t[1]=e=>b.baiduTextApiKey=e),placeholder:"请填写百度文本审核ApiKey",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),r(v,null,{default:n((()=>[r(S,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[r(_,{label:"文本审核SecretKey",prop:"baiduTextSecretKey"},{default:n((()=>[r(h,{modelValue:b.baiduTextSecretKey,"onUpdate:modelValue":t[2]||(t[2]=e=>b.baiduTextSecretKey=e),placeholder:"请填写百度文本审核SecretKey",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof b&&b(y);export{y as default};
