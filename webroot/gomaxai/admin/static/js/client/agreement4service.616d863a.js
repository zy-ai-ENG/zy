
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c9f6880f.js";import{J as a}from"../style/style.f1c42e26.js";import{d as t,a as l,G as s,C as r,r as n,y as i,j as o,o as c,c as m,f as u,g as d,b as f,h as g,e as p,P as v,a0 as y,s as A}from"../main-646ffc07.js";import{a as b}from"../config/config.f8de71c3.js";const h={class:"flex justify-between"},_=f("b",null,"服务协议",-1),w=t({__name:"agreement4service",setup(t){const A=l(),w=s({serviceAgreement:"",serviceAgreementTitle:""}),x=r((()=>A.settings.app.colorScheme)),T=n({serviceAgreementTitle:[{required:!0,trigger:"blur",message:"请填写服务协议标题"}],serviceAgreement:[{required:!0,trigger:"blur",message:"请填写服务协议内容"}]}),j=n();async function V(){const e=await b.queryConfig({keys:["serviceAgreement","serviceAgreementTitle"]}),{serviceAgreement:a,serviceAgreementTitle:t}=e.data;Object.assign(w,{serviceAgreement:a,serviceAgreementTitle:t})}function C(){var e;null==(e=j.value)||e.validate((async e=>{if(e){try{await b.setConfig({settings:(a=w,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),v.success("变更配置信息成功")}catch(t){}V()}else v.error("请填写完整信息");var a}))}const k=n("/api/upload/file");function O(e){}async function P(e,a){a((await Promise.all(Array.from(e).map((e=>new Promise((async(a,t)=>{var l,s,r;const n=new FormData;n.append("file",e);try{const e=await y.post(k.value,n,{headers:{"Content-Type":"multipart/form-data"}});(null==(l=null==e?void 0:e.data)?void 0:l.data)||v.error("图片上传失败、请检查您的配置信息！"),a(e.data.data)}catch(i){v.error((null==(r=null==(s=null==i?void 0:i.response)?void 0:s.data)?void 0:r.message)||"图片上传失败、请检查您的配置信息！"),t(i)}})))))).map((e=>e))),v({message:"图片上传成功！",type:"success"})}return i((()=>{V()})),(t,l)=>{const s=o("el-alert"),r=e,n=o("el-button"),i=o("el-input"),v=o("el-form-item"),y=o("el-col"),A=o("el-row"),b=o("el-form"),V=o("el-card");return c(),m("div",null,[u(r,{bottomPadding:"20px"},{default:d((()=>[u(s,{closable:!1,"show-icon":"",title:"服务协议设置说明",description:"这里的服务协议设置是对应用户端的服务协议链接、可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"success"})])),_:1}),u(V,{style:{margin:"20px 20px 0 20px"}},{header:d((()=>[f("div",h,[_,u(n,{class:"button",onClick:C},{default:d((()=>[g(" 保存设置 ")])),_:1})])])),default:d((()=>[u(b,{ref_key:"formRef",ref:j,rules:T.value,model:w,"label-width":"120px"},{default:d((()=>[u(A,null,{default:d((()=>[u(y,{xs:24,md:20,lg:15,xl:10},{default:d((()=>[u(v,{label:"协议标题",prop:"serviceAgreementTitle"},{default:d((()=>[u(i,{modelValue:w.serviceAgreementTitle,"onUpdate:modelValue":l[0]||(l[0]=e=>w.serviceAgreementTitle=e),rows:1,placeholder:"服务协议标题",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(A,null,{default:d((()=>[u(y,{span:24},{default:d((()=>[u(v,{label:"协议内容",prop:"serviceAgreement"},{default:d((()=>[u(p(a),{modelValue:w.serviceAgreement,"onUpdate:modelValue":l[1]||(l[1]=e=>w.serviceAgreement=e),style:{"min-height":"80vh"},theme:x.value,onOnChange:O,onOnUploadImg:P},null,8,["modelValue","theme"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof A&&A(w);export{w as default};
