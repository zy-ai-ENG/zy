
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.129bbe0b.js";import{a as l}from"../config/config.bd9b8a25.js";import{d as t,Q as a,r as o,B as c,x as s,h as n,o as u,c as d,e as r,f as i,a as m,l as f,b as p,E as g,q as _}from"../main-dd192319.js";const b={class:"flex justify-between"},x=m("b",null,"腾讯云COS参数设置",-1),S=t({__name:"tencent",setup(t){const _=a({tencentCosStatus:"",cosSecretId:"",cosSecretKey:"",cosBucket:"",cosRegion:"",tencentCosAcceleratedDomain:""}),S=o();async function y(){const e=await l.queryConfig({keys:["cosSecretKey","cosBucket","cosRegion","cosSecretId","tencentCosStatus","tencentCosAcceleratedDomain"]});Object.assign(_,e.data)}function V(){var e;null==(e=S.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(t=_,Object.keys(t).map((e=>({configKey:e,configVal:t[e]}))))}),g.success("变更配置信息成功")}catch(a){}y()}else g.error("请填写完整信息");var t}))}const C=c((()=>[{required:1===Number(_.tencentCosStatus),message:"开启配置后请填写此项",trigger:"change"}]));return s((()=>{y()})),(l,t)=>{const a=n("el-alert"),o=e,c=n("el-button"),s=n("el-switch"),g=n("el-form-item"),y=n("el-col"),h=n("el-row"),v=n("el-input"),k=n("el-form"),K=n("el-card");return u(),d("div",null,[r(o,{bottomPadding:"20px"},{default:i((()=>[r(a,{closable:!1,"show-icon":"",title:"腾讯云COS参数设置",description:"前往腾讯云申请对象存储服务、更多配置详见文档、申请服务前往 https://console.cloud.tencent.com/cos ！！",type:"success"})])),_:1}),r(K,{style:{margin:"20px 20px 0 20px"}},{header:i((()=>[m("div",b,[x,r(c,{class:"button",onClick:V},{default:i((()=>[f(" 保存设置 ")])),_:1})])])),default:i((()=>[r(k,{ref_key:"formRef",ref:S,model:_,"label-width":"120px"},{default:i((()=>[r(h,null,{default:i((()=>[r(y,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[r(g,{label:"启用状态",prop:"tencentCosStatus"},{default:i((()=>[r(s,{modelValue:_.tencentCosStatus,"onUpdate:modelValue":t[0]||(t[0]=e=>_.tencentCosStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),r(h,null,{default:i((()=>[r(y,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[r(g,{label:"SecretId",prop:"cosSecretId",rules:p(C)},{default:i((()=>[r(v,{modelValue:_.cosSecretId,"onUpdate:modelValue":t[1]||(t[1]=e=>_.cosSecretId=e),placeholder:"请填写SecretId",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),r(h,null,{default:i((()=>[r(y,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[r(g,{label:"SecretKey",prop:"cosSecretKey",rules:p(C)},{default:i((()=>[r(v,{modelValue:_.cosSecretKey,"onUpdate:modelValue":t[2]||(t[2]=e=>_.cosSecretKey=e),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),r(h,null,{default:i((()=>[r(y,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[r(g,{label:"存储桶名称",prop:"cosBucket",rules:p(C)},{default:i((()=>[r(v,{modelValue:_.cosBucket,"onUpdate:modelValue":t[3]||(t[3]=e=>_.cosBucket=e),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),r(h,null,{default:i((()=>[r(y,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[r(g,{label:"所属地域",prop:"cosRegion",rules:p(C)},{default:i((()=>[r(v,{modelValue:_.cosRegion,"onUpdate:modelValue":t[4]||(t[4]=e=>_.cosRegion=e),placeholder:"请填写所属地域(ap-guangzhou)",clearable:""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1})])),_:1}),r(h,null,{default:i((()=>[r(y,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[r(g,{label:"全球加速域名",prop:"tencentCosAcceleratedDomain"},{default:i((()=>[r(v,{modelValue:_.tencentCosAcceleratedDomain,"onUpdate:modelValue":t[5]||(t[5]=e=>_.tencentCosAcceleratedDomain=e),placeholder:"如您是国外服务器可开启全球加速域名得到更快响应速度、同理也会更高计费！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}}});"function"==typeof _&&_(S);export{S as default};
