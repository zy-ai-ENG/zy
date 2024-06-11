
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.55992ed4.js";import{J as a}from"../style/style.e452e858.js";import{d as t,y as l,Q as n,B as s,r,x as o,h as i,o as m,c as u,e as d,f as c,a as f,l as g,b as p,E as y,a0 as v,q as b}from"../main-1d1da8fb.js";import{a as h}from"../config/config.0065ad3e.js";const _={class:"flex justify-between"},x=f("b",null,"用户协议",-1),w=t({__name:"agreement",setup(t){const b=l(),w=n({agreement:"",agreementTitle:""}),T=s((()=>b.settings.app.colorScheme)),j=r({agreementTitle:[{required:!0,trigger:"blur",message:"请填写用户协议标题"}],agreement:[{required:!0,trigger:"blur",message:"请填写用户协议内容"}]}),V=r();async function C(){const e=await h.queryConfig({keys:["agreement","agreementTitle"]}),{agreement:a,agreementTitle:t}=e.data;Object.assign(w,{agreement:a,agreementTitle:t})}function O(){var e;null==(e=V.value)||e.validate((async e=>{if(e){try{await h.setConfig({settings:(a=w,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),y.success("变更配置信息成功")}catch(t){}C()}else y.error("请填写完整信息");var a}))}const k=r("/api/upload/file");function q(e){}async function P(e,a){a((await Promise.all(Array.from(e).map((e=>new Promise((async(a,t)=>{var l,n,s;const r=new FormData;r.append("file",e);try{const e=await v.post(k.value,r,{headers:{"Content-Type":"multipart/form-data"}});(null==(l=null==e?void 0:e.data)?void 0:l.data)||y.error("图片上传失败、请检查您的配置信息！"),a(e.data.data)}catch(o){y.error((null==(s=null==(n=null==o?void 0:o.response)?void 0:n.data)?void 0:s.message)||"图片上传失败、请检查您的配置信息！"),t(o)}})))))).map((e=>e))),y({message:"图片上传成功！",type:"success"})}return o((()=>{C()})),(t,l)=>{const n=i("el-alert"),s=e,r=i("el-button"),o=i("el-input"),y=i("el-form-item"),v=i("el-col"),b=i("el-row"),h=i("el-form"),C=i("el-card");return m(),u("div",null,[d(s,{bottomPadding:"20px"},{default:c((()=>[d(n,{closable:!1,"show-icon":"",title:"用户协议设置说明",description:"这里的用户协议设置是对应用户端的底部用户协议链接、可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"success"})])),_:1}),d(C,{style:{margin:"20px 20px 0 20px"}},{header:c((()=>[f("div",_,[x,d(r,{class:"button",onClick:O},{default:c((()=>[g(" 保存设置 ")])),_:1})])])),default:c((()=>[d(h,{ref_key:"formRef",ref:V,rules:j.value,model:w,"label-width":"120px"},{default:c((()=>[d(b,null,{default:c((()=>[d(v,{xs:24,md:20,lg:15,xl:10},{default:c((()=>[d(y,{label:"协议标题",prop:"agreementTitle"},{default:c((()=>[d(o,{modelValue:w.agreementTitle,"onUpdate:modelValue":l[0]||(l[0]=e=>w.agreementTitle=e),rows:1,placeholder:"用户协议标题",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(b,null,{default:c((()=>[d(v,{span:24},{default:c((()=>[d(y,{label:"协议内容",prop:"agreement"},{default:c((()=>[d(p(a),{modelValue:w.agreement,"onUpdate:modelValue":l[1]||(l[1]=e=>w.agreement=e),style:{"min-height":"80vh"},theme:T.value,onOnChange:q,onOnUploadImg:P},null,8,["modelValue","theme"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof b&&b(w);export{w as default};
