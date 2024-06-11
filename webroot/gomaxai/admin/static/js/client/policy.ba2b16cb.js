
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.3ad5ed39.js";import{J as l}from"../style/style.5aff47f1.js";import{d as a,y as t,Q as o,B as n,r as s,x as i,h as r,o as c,c as u,e as p,f as d,a as m,l as f,b as y,E as g,a0 as v,q as b}from"../main-01383ffb.js";import{a as h}from"../config/config.4e576922.js";const _={class:"flex justify-between"},C=m("b",null,"隐私政策设置",-1),x=a({__name:"policy",setup(a){const b=t(),x=o({policyContent:"",policyTitle:""}),w=n((()=>b.settings.app.colorScheme)),T=s({policyTitle:[{required:!0,trigger:"blur",message:"请填写隐私政策标题"}],policyContent:[{required:!0,trigger:"blur",message:"请填写隐私政策内容"}]}),j=s();async function V(){const e=await h.queryConfig({keys:["policyTitle","policyContent"]}),{policyTitle:l,policyContent:a}=e.data;Object.assign(x,{policyTitle:l,policyContent:a})}function O(){var e;null==(e=j.value)||e.validate((async e=>{if(e){try{await h.setConfig({settings:(l=x,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),g.success("变更配置信息成功")}catch(a){}V()}else g.error("请填写完整信息");var l}))}const k=s("/api/upload/file");function q(e){}async function P(e,l){l((await Promise.all(Array.from(e).map((e=>new Promise((async(l,a)=>{var t,o,n;const s=new FormData;s.append("file",e);try{const e=await v.post(k.value,s,{headers:{"Content-Type":"multipart/form-data"}});(null==(t=null==e?void 0:e.data)?void 0:t.data)||g.error("图片上传失败、请检查您的配置信息！"),l(e.data.data)}catch(i){g.error((null==(n=null==(o=null==i?void 0:i.response)?void 0:o.data)?void 0:n.message)||"图片上传失败、请检查您的配置信息！"),a(i)}})))))).map((e=>e))),g({message:"图片上传成功！",type:"success"})}return i((()=>{V()})),(a,t)=>{const o=r("el-alert"),n=e,s=r("el-button"),i=r("el-input"),g=r("el-form-item"),v=r("el-col"),b=r("el-row"),h=r("el-form"),V=r("el-card");return c(),u("div",null,[p(n,{bottomPadding:"20px"},{default:d((()=>[p(o,{closable:!1,"show-icon":"",title:"隐私政策设置说明",description:"这里的隐私政策设置是对应用户端底部隐私政策链接的设置、你可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"success"})])),_:1}),p(V,{style:{margin:"20px 20px 0 20px"}},{header:d((()=>[m("div",_,[C,p(s,{class:"button",onClick:O},{default:d((()=>[f(" 保存设置 ")])),_:1})])])),default:d((()=>[p(h,{ref_key:"formRef",ref:j,rules:T.value,model:x,"label-width":"120px"},{default:d((()=>[p(b,null,{default:d((()=>[p(v,{xs:24,md:20,lg:15,xl:10},{default:d((()=>[p(g,{label:"隐私政策标题",prop:"policyTitle"},{default:d((()=>[p(i,{modelValue:x.policyTitle,"onUpdate:modelValue":t[0]||(t[0]=e=>x.policyTitle=e),rows:1,placeholder:"隐私政策标题",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),p(b,null,{default:d((()=>[p(v,{span:24},{default:d((()=>[p(g,{label:"隐私政策内容",prop:"policyContent"},{default:d((()=>[p(y(l),{modelValue:x.policyContent,"onUpdate:modelValue":t[1]||(t[1]=e=>x.policyContent=e),style:{"min-height":"80vh"},theme:w.value,onOnChange:q,onOnUploadImg:P},null,8,["modelValue","theme"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof b&&b(x);export{x as default};
