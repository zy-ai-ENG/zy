
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.0db9df33.js";import{a as l}from"../config/config.b5d22985.js";import{d as s,Q as a,r as t,B as u,x as c,h as o,o as i,c as d,e as n,f as r,a as f,l as m,b as p,E as O,q as y}from"../main-0579ff80.js";const g={class:"flex justify-between"},_=f("b",null,"阿里云OSS参数设置",-1),b=s({__name:"ali",setup(s){const y=a({aliOssStatus:"",aliOssAccessKeyId:"",aliOssAccessKeySecret:"",aliOssRegion:"",aliOssBucket:""}),b=t();async function x(){const e=await l.queryConfig({keys:["aliOssAccessKeySecret","aliOssRegion","aliOssBucket","aliOssAccessKeyId","aliOssStatus"]});Object.assign(y,e.data)}function S(){var e;null==(e=b.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(s=y,Object.keys(s).map((e=>({configKey:e,configVal:s[e]}))))}),O.success("变更配置信息成功")}catch(a){}x()}else O.error("请填写完整信息");var s}))}const V=u((()=>[{required:1===Number(y.aliOssStatus),message:"开启配置后请填写此项",trigger:"change"}]));return c((()=>{x()})),(l,s)=>{const a=o("el-alert"),t=e,u=o("el-button"),c=o("el-switch"),O=o("el-form-item"),x=o("el-col"),h=o("el-row"),K=o("el-input"),k=o("el-form"),v=o("el-card");return i(),d("div",null,[n(t,{bottomPadding:"20px"},{default:r((()=>[n(a,{closable:!1,"show-icon":"",title:"阿里云COS参数说明",description:"阿里云的对象存储oss服务、前往阿里云申请oss服务 https://oss.console.aliyun.com/ 、如果同时开启多个存储服务、腾讯云高于阿里云优先级！",type:"success"})])),_:1}),n(v,{style:{margin:"20px 20px 0 20px"}},{header:r((()=>[f("div",g,[_,n(u,{class:"button",onClick:S},{default:r((()=>[m(" 保存设置 ")])),_:1})])])),default:r((()=>[n(k,{ref_key:"formRef",ref:b,model:y,"label-width":"120px"},{default:r((()=>[n(h,null,{default:r((()=>[n(x,{xs:24,md:20,lg:15,xl:12},{default:r((()=>[n(O,{label:"服务启用状态",prop:"aliOssStatus"},{default:r((()=>[n(c,{modelValue:y.aliOssStatus,"onUpdate:modelValue":s[0]||(s[0]=e=>y.aliOssStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(h,null,{default:r((()=>[n(x,{xs:24,md:20,lg:15,xl:12},{default:r((()=>[n(O,{label:"accessKeyId",prop:"aliOssAccessKeyId",rules:p(V)},{default:r((()=>[n(K,{modelValue:y.aliOssAccessKeyId,"onUpdate:modelValue":s[1]||(s[1]=e=>y.aliOssAccessKeyId=e),placeholder:"请填写SecretId",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),n(h,null,{default:r((()=>[n(x,{xs:24,md:20,lg:15,xl:12},{default:r((()=>[n(O,{label:"keySecret",prop:"aliOssAccessKeySecret",rules:p(V)},{default:r((()=>[n(K,{modelValue:y.aliOssAccessKeySecret,"onUpdate:modelValue":s[2]||(s[2]=e=>y.aliOssAccessKeySecret=e),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),n(h,null,{default:r((()=>[n(x,{xs:24,md:20,lg:15,xl:12},{default:r((()=>[n(O,{label:"存储桶名称",prop:"aliOssBucket",rules:p(V)},{default:r((()=>[n(K,{modelValue:y.aliOssBucket,"onUpdate:modelValue":s[3]||(s[3]=e=>y.aliOssBucket=e),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),n(h,null,{default:r((()=>[n(x,{xs:24,md:20,lg:15,xl:12},{default:r((()=>[n(O,{label:"所属地域",prop:"aliOssRegion",rules:p(V)},{default:r((()=>[n(K,{modelValue:y.aliOssRegion,"onUpdate:modelValue":s[4]||(s[4]=e=>y.aliOssRegion=e),placeholder:"请填写所属地域(oss-cn-shanghai)",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}}});"function"==typeof y&&y(b);export{b as default};
