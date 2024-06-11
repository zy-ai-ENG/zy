
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c9f6880f.js";import{a as l}from"../config/config.f8de71c3.js";import{d as a,G as o,r as n,y as d,j as s,o as p,c as i,f as t,g as u,b as M,h as k,P as r,s as x}from"../main-646ffc07.js";const m={class:"flex justify-between"},f=M("b",null,"接口请求设置",-1),T={style:{height:"59vh","overflow-y":"auto","overflow-x":"hidden"}},c=M("h4",null,"自动降级",-1),_=M("h4",null,"基础模型上下文配置",-1),b=M("h4",null,"高级模型上下文配置",-1),g=a({__name:"interface",setup(a){const x=o({openaiBaseUrl:"",openaiTimeoutMs:"",openaiaAtoDowngrade:0,openaiModel3MaxTokens:"",openaiModel3MaxTokensRes:"",openaiModel3MaxTokens16k:"",openaiModel3MaxTokens16kRes:"",openaiModel4MaxTokens:"",openaiModel4MaxTokensRes:"",openaiModel4MaxTokens32k:"",openaiModel4MaxTokens32kRes:""}),g=n({openaiBaseUrl:[{required:!1,trigger:"blur",message:"请填写openai的请求地址"}],openaiTimeoutMs:[{required:!1,trigger:"blur",message:"请填写openai的超时时间（单位ms）"}]}),V=n();async function h(){const e=await l.queryConfig({keys:["openaiBaseUrl","openaiTimeoutMs","openaiModel3MaxTokens","openaiaAtoDowngrade","openaiModel3MaxTokensRes","openaiModel3MaxTokens16k","openaiModel3MaxTokens16kRes","openaiModel4MaxTokens","openaiModel4MaxTokensRes","openaiModel4MaxTokens32k","openaiModel4MaxTokens32kRes"]}),{openaiBaseUrl:a="",openaiTimeoutMs:o="",openaiaAtoDowngrade:n,openaiModel3MaxTokens:d,openaiModel3MaxTokensRes:s,openaiModel3MaxTokens16k:p,openaiModel3MaxTokens16kRes:i,openaiModel4MaxTokens:t,openaiModel4MaxTokensRes:u,openaiModel4MaxTokens32k:M,openaiModel4MaxTokens32kRes:k}=e.data;Object.assign(x,{openaiBaseUrl:a,openaiTimeoutMs:o,openaiaAtoDowngrade:Number(n),openaiModel3MaxTokens:d,openaiModel3MaxTokensRes:s,openaiModel3MaxTokens16k:p,openaiModel3MaxTokens16kRes:i,openaiModel4MaxTokens:t,openaiModel4MaxTokensRes:u,openaiModel4MaxTokens32k:M,openaiModel4MaxTokens32kRes:k})}function R(){var e;null==(e=V.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(a=x,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),r.success("变更配置信息成功")}catch(o){}h()}else r.error("请填写完整信息");var a}))}return d((()=>{h()})),(l,a)=>{const o=s("el-alert"),n=e,d=s("el-button"),r=s("el-input"),h=s("el-form-item"),w=s("el-col"),y=s("el-row"),U=s("el-divider"),v=s("el-switch"),B=s("el-tooltip"),j=s("el-form"),A=s("el-card");return p(),i("div",null,[t(n,{bottomPadding:"20px"},{default:u((()=>[t(o,{closable:!1,"show-icon":"",title:"openai全局配置说明",description:"系统默认的地址是 https://api.openai.com 、如果你是国内的服务器可能无法访问、您可以使用自己的代理地址、或者免费的 https://open2.aiproxy.xyz 、此处的配置为全局配置、我们可以对单张key进行单独设置、当我们对key不进行设置的时候将会走此处的设置、如果此处也没有设置、系统将会走系统内置默认配置！",type:"success"})])),_:1}),t(A,{style:{margin:"20px 20px 0 20px"}},{header:u((()=>[M("div",m,[f,t(d,{class:"button",onClick:R},{default:u((()=>[k(" 保存设置 ")])),_:1})])])),default:u((()=>[M("div",T,[t(j,{ref_key:"formRef",ref:V,rules:g.value,model:x,"label-width":"230px"},{default:u((()=>[t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"请求地址",prop:"openaiBaseUrl","label-width":"120px"},{default:u((()=>[t(r,{modelValue:x.openaiBaseUrl,"onUpdate:modelValue":a[0]||(a[0]=e=>x.openaiBaseUrl=e),placeholder:"默认地址: https://api.openai.com",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"超时时间",prop:"openaiTimeoutMs","label-width":"120px"},{default:u((()=>[t(r,{modelValue:x.openaiTimeoutMs,"onUpdate:modelValue":a[1]||(a[1]=e=>x.openaiTimeoutMs=e),placeholder:"openai超时时间设置、默认100s 单位 ms",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(U),c,t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"是否自动降级",prop:"openaiaAtoDowngrade","label-width":"130"},{default:u((()=>[t(B,{class:"box-item",effect:"dark",content:"开启自动降级后、如果用户没有4的权限、将会自动降级为基础模型、并扣除3的余额！",placement:"right"},{default:u((()=>[t(v,{modelValue:x.openaiaAtoDowngrade,"onUpdate:modelValue":a[2]||(a[2]=e=>x.openaiaAtoDowngrade=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),_,t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"普通基础模型允许最大上下文",prop:"openaiModel3MaxTokens"},{default:u((()=>[t(r,{modelValue:x.openaiModel3MaxTokens,"onUpdate:modelValue":a[3]||(a[3]=e=>x.openaiModel3MaxTokens=e),placeholder:"普通基础模型最大支持4096、默认4096",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"普通基础模型允许最大回复上下文",prop:"openaiModel3MaxTokensRes"},{default:u((()=>[t(r,{modelValue:x.openaiModel3MaxTokensRes,"onUpdate:modelValue":a[4]||(a[4]=e=>x.openaiModel3MaxTokensRes=e),placeholder:"最大回复设置、默认1000、建议不能设置太高！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"16k基础模型允许最大上下文",prop:"openaiModel3MaxTokens16k"},{default:u((()=>[t(r,{modelValue:x.openaiModel3MaxTokens16k,"onUpdate:modelValue":a[5]||(a[5]=e=>x.openaiModel3MaxTokens16k=e),placeholder:"16k基础模型最大支持16384、默认16384",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"16k基础模型允许最大回复上下文",prop:"openaiModel3MaxTokens16kRes"},{default:u((()=>[t(r,{modelValue:x.openaiModel3MaxTokens16kRes,"onUpdate:modelValue":a[6]||(a[6]=e=>x.openaiModel3MaxTokens16kRes=e),placeholder:"16k模型最大回复设置、默认8192",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),b,t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"普通高级模型允许最大上下文",prop:"openaiModel4MaxTokens"},{default:u((()=>[t(r,{modelValue:x.openaiModel4MaxTokens,"onUpdate:modelValue":a[7]||(a[7]=e=>x.openaiModel4MaxTokens=e),placeholder:"高级模型上下文最大支持8192、默认8192",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"普通高级模型允许最大回复上下文",prop:"openaiModel4MaxTokensRes"},{default:u((()=>[t(r,{modelValue:x.openaiModel4MaxTokensRes,"onUpdate:modelValue":a[8]||(a[8]=e=>x.openaiModel4MaxTokensRes=e),placeholder:"高级模型回复设置、默认4000",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"32k高级模型允许最大上下文",prop:"openaiModel4MaxTokens32k"},{default:u((()=>[t(r,{modelValue:x.openaiModel4MaxTokens32k,"onUpdate:modelValue":a[9]||(a[9]=e=>x.openaiModel4MaxTokens32k=e),placeholder:"32k高级模型上下文最大支持32768、默认16384",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(y,null,{default:u((()=>[t(w,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[t(h,{label:"32k高级模型允许最大回复上下文",prop:"openaiModel4MaxTokens32kRes"},{default:u((()=>[t(r,{modelValue:x.openaiModel4MaxTokens32kRes,"onUpdate:modelValue":a[10]||(a[10]=e=>x.openaiModel4MaxTokens32kRes=e),placeholder:"32k高级模型上下文最大回复设置、默认16384",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])])),_:1})])}}});"function"==typeof x&&x(g);export{g as default};
