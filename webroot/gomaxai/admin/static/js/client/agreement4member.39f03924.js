
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.129bbe0b.js";import{J as a}from"../style/style.40ff9cc1.js";import{d as t,y as l,Q as r,B as m,r as n,x as s,h as o,o as i,c as u,e as d,f as c,a as f,l as g,b as p,E as b,$ as y,q as A}from"../main-dd192319.js";import{a as v}from"../config/config.bd9b8a25.js";const h={class:"flex justify-between"},_=f("b",null,"会员协议",-1),x=t({__name:"agreement4member",setup(t){const A=l(),x=r({memberAgreement:"",memberAgreementTitle:""}),w=m((()=>A.settings.app.colorScheme)),T=n({memberAgreementTitle:[{required:!0,trigger:"blur",message:"请填写会员协议标题"}],memberAgreement:[{required:!0,trigger:"blur",message:"请填写会员协议内容"}]}),j=n();async function V(){const e=await v.queryConfig({keys:["memberAgreement","memberAgreementTitle"]}),{memberAgreement:a,memberAgreementTitle:t}=e.data;Object.assign(x,{memberAgreement:a,memberAgreementTitle:t})}function C(){var e;null==(e=j.value)||e.validate((async e=>{if(e){try{await v.setConfig({settings:(a=x,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),b.success("变更配置信息成功")}catch(t){}V()}else b.error("请填写完整信息");var a}))}const k=n("/api/upload/file");function q(e){}async function O(e,a){a((await Promise.all(Array.from(e).map((e=>new Promise((async(a,t)=>{var l,r,m;const n=new FormData;n.append("file",e);try{const e=await y.post(k.value,n,{headers:{"Content-Type":"multipart/form-data"}});(null==(l=null==e?void 0:e.data)?void 0:l.data)||b.error("图片上传失败、请检查您的配置信息！"),a(e.data.data)}catch(s){b.error((null==(m=null==(r=null==s?void 0:s.response)?void 0:r.data)?void 0:m.message)||"图片上传失败、请检查您的配置信息！"),t(s)}})))))).map((e=>e))),b({message:"图片上传成功！",type:"success"})}return s((()=>{V()})),(t,l)=>{const r=o("el-alert"),m=e,n=o("el-button"),s=o("el-input"),b=o("el-form-item"),y=o("el-col"),A=o("el-row"),v=o("el-form"),V=o("el-card");return i(),u("div",null,[d(m,{bottomPadding:"20px"},{default:c((()=>[d(r,{closable:!1,"show-icon":"",title:"会员协议设置说明",description:"这里的会员协议设置是对应用户端的会员协议链接、可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"success"})])),_:1}),d(V,{style:{margin:"20px 20px 0 20px"}},{header:c((()=>[f("div",h,[_,d(n,{class:"button",onClick:C},{default:c((()=>[g(" 保存设置 ")])),_:1})])])),default:c((()=>[d(v,{ref_key:"formRef",ref:j,rules:T.value,model:x,"label-width":"120px"},{default:c((()=>[d(A,null,{default:c((()=>[d(y,{xs:24,md:20,lg:15,xl:10},{default:c((()=>[d(b,{label:"协议标题",prop:"memberAgreementTitle"},{default:c((()=>[d(s,{modelValue:x.memberAgreementTitle,"onUpdate:modelValue":l[0]||(l[0]=e=>x.memberAgreementTitle=e),rows:1,placeholder:"会员协议标题",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(A,null,{default:c((()=>[d(y,{span:24},{default:c((()=>[d(b,{label:"协议内容",prop:"memberAgreement"},{default:c((()=>[d(p(a),{modelValue:x.memberAgreement,"onUpdate:modelValue":l[1]||(l[1]=e=>x.memberAgreement=e),style:{"min-height":"80vh"},theme:w.value,onOnChange:q,onOnUploadImg:O},null,8,["modelValue","theme"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof A&&A(x);export{x as default};
