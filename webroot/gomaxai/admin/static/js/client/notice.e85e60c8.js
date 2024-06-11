
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.0db9df33.js";import{J as t}from"../style/style.63b913f7.js";import{d as l,y as a,Q as o,B as n,r as i,x as s,h as c,o as u,c as r,e as d,f,a as p,l as m,b as g,E as y,Z as v,q as h}from"../main-0579ff80.js";import{a as _}from"../config/config.b5d22985.js";const b={class:"flex justify-between"},x=p("b",null,"公共公告设置",-1),w=l({__name:"notice",setup(l){const h=a(),w=o({isAutoOpenNotice:"",noticeInfo:"",noticeTitle:""}),O=n((()=>h.settings.app.colorScheme)),V=i({noticeTitle:[{required:!0,trigger:"blur",message:"请填写公告标题"}],noticeInfo:[{required:!0,trigger:"blur",message:"请填写公告具体信息"}]}),I=i();async function T(){const e=await _.queryConfig({keys:["noticeInfo","noticeTitle","isAutoOpenNotice"]}),{noticeInfo:t,noticeTitle:l,isAutoOpenNotice:a}=e.data;t&&Object.assign(w,{noticeInfo:t,noticeTitle:l,isAutoOpenNotice:a})}function A(){var e;null==(e=I.value)||e.validate((async e=>{if(e){try{await _.setConfig({settings:(t=w,Object.keys(t).map((e=>({configKey:e,configVal:t[e]}))))}),y.success("变更配置信息成功")}catch(l){}T()}else y.error("请填写完整信息");var t}))}const j=i("/api/upload/file");function N(e){}async function C(e,t){t((await Promise.all(Array.from(e).map((e=>new Promise((async(t,l)=>{var a,o,n;const i=new FormData;i.append("file",e);try{const e=await v.post(j.value,i,{headers:{"Content-Type":"multipart/form-data"}});(null==(a=null==e?void 0:e.data)?void 0:a.data)||y.error("图片上传失败、请检查您的配置信息！"),t(e.data.data)}catch(s){y.error((null==(n=null==(o=null==s?void 0:s.response)?void 0:o.data)?void 0:n.message)||"图片上传失败、请检查您的配置信息！"),l(s)}})))))).map((e=>e))),y({message:"图片上传成功！",type:"success"})}return s((()=>{T()})),(l,a)=>{const o=c("el-alert"),n=e,i=c("el-button"),s=c("el-input"),y=c("el-form-item"),v=c("el-col"),h=c("el-switch"),_=c("el-tooltip"),T=c("el-row"),j=c("el-form"),k=c("el-card");return u(),r("div",null,[d(n,{bottomPadding:"20px"},{default:f((()=>[d(o,{closable:!1,"show-icon":"",title:"公告设置说明",description:"这里的公告设置是对应用户端的公告页面的、你可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"success"})])),_:1}),d(k,{style:{margin:"20px 20px 0 20px"}},{header:f((()=>[p("div",b,[x,d(i,{class:"button",onClick:A},{default:f((()=>[m(" 保存设置 ")])),_:1})])])),default:f((()=>[d(j,{ref_key:"formRef",ref:I,rules:V.value,model:w,"label-width":"120px"},{default:f((()=>[d(T,null,{default:f((()=>[d(v,{xs:24,md:20,lg:15,xl:10},{default:f((()=>[d(y,{label:"公告标题",prop:"noticeTitle"},{default:f((()=>[d(s,{modelValue:w.noticeTitle,"onUpdate:modelValue":a[0]||(a[0]=e=>w.noticeTitle=e),rows:1,placeholder:"公告标题",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),d(v,{offset:2,xs:24,md:20,lg:15,xl:10},{default:f((()=>[d(y,{label:"自动打开公告",prop:"isAutoOpenNotice"},{default:f((()=>[d(_,{content:"设为自动打开则网站初始化会打开、用户仍可以选择24小时不再查看、选择关闭则不会主动打开！",placement:"top","show-after":500},{default:f((()=>[d(h,{modelValue:w.isAutoOpenNotice,"onUpdate:modelValue":a[1]||(a[1]=e=>w.isAutoOpenNotice=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1}),d(v,{xs:24,md:20,lg:15,xl:12})])),_:1})])),_:1}),d(T,null,{default:f((()=>[d(v,{span:24},{default:f((()=>[d(y,{label:"公告信息",prop:"noticeInfo"},{default:f((()=>[d(g(t),{modelValue:w.noticeInfo,"onUpdate:modelValue":a[2]||(a[2]=e=>w.noticeInfo=e),style:{"min-height":"80vh"},theme:O.value,onOnChange:N,onOnUploadImg:C},null,8,["modelValue","theme"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof h&&h(w);export{w as default};
