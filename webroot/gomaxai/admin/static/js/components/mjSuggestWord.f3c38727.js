
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as e}from"../mj/mj.26e3b368.js";import{useUploader as a}from"../use/useUploader.5e06772c.js";import{d as l,r as s,Q as t,h as o,o as u,I as d,f as r,e as n,l as i,b as g,a as m,au as c,W as p,E as f,n as h}from"../main-dd192319.js";const b={style:{height:"auto","overflow-y":"auto","overflow-x":"hidden"}},V=h(l({__name:"mjSuggestWord",emits:["fresh"],setup(l,{expose:h,emit:V}){const _=s(!1),v=s(""),y=s(0),j=s();s(!1);const{selectFile:w,upload:C}=a(),x=t({image:"",suggestCn:"",suggestEn:"",order:100}),E=V,U=t({image:[{required:!0,message:"推荐关键词图片",trigger:"change"}],suggestCn:[{required:!0,message:"推荐关键词中文不能为空",trigger:"change"}],suggestEn:[{required:!0,message:"推荐关键词英文不能为空",trigger:"change"}],order:[{required:!0,message:"排序越大越靠前",trigger:"change"}]});const k=async e=>{await(null==e?void 0:e.validate((async e=>{e&&(y.value?await q({id:y.value,...x}):await q(x),E("fresh",!0),_.value=!1,Object.assign(x,{image:"",suggestCn:"",suggestEn:"",order:100}))})))},q=async a=>(await e.addMjSuggestWord(a),f.success("保存推荐关键词成功！"),!0),O=async()=>{const e=await w(),a=await C({file:e}).then((e=>e.data));x.image=a,f({type:"success",message:"上传图片成功！"})};return h({open:function(e){_.value=!0,y.value=e.id||0,v.value=e.id?"编辑咒语分类":"添加咒语分类",e.id&&e.id>0?Object.assign(x,e):Object.assign(x,{image:"",suggestCn:"",suggestEn:"",order:100})}}),(e,a)=>{const l=o("el-input"),s=o("el-form-item"),t=o("el-button"),f=o("el-form"),h=o("el-dialog");return u(),d(h,{modelValue:g(_),"onUpdate:modelValue":a[6]||(a[6]=e=>p(_)?_.value=e:null),"append-to-body":!0,"close-on-click-modal":!1,title:g(v),top:"80px",fullscreen:!1,width:"700px","z-index":2e3},{footer:r((()=>[n(t,{onClick:a[4]||(a[4]=e=>_.value=!1)},{default:r((()=>[i(" 取消 ")])),_:1}),n(t,{type:"primary",onClick:a[5]||(a[5]=e=>k(g(j)))},{default:r((()=>[i(" 确认 ")])),_:1})])),default:r((()=>[m("div",b,[n(f,{model:x,"label-position":"right",ref_key:"formRef",ref:j,rules:U,inline:!1,"label-width":"120px"},{default:r((()=>[n(s,{label:"关键词中文",prop:"suggestCn"},{default:r((()=>[n(l,{modelValue:x.suggestCn,"onUpdate:modelValue":a[0]||(a[0]=e=>x.suggestCn=e),placeholder:"输入推荐关键词中文",clearable:""},null,8,["modelValue"])])),_:1}),n(s,{label:"关键词英文",prop:"suggestEn"},{default:r((()=>[n(l,{modelValue:x.suggestEn,"onUpdate:modelValue":a[1]||(a[1]=e=>x.suggestEn=e),placeholder:"输入推荐关键词英文",clearable:""},null,8,["modelValue"])])),_:1}),n(s,{label:"图标",prop:"image"},{default:r((()=>[n(l,{modelValue:x.image,"onUpdate:modelValue":a[2]||(a[2]=e=>x.image=e),placeholder:"请填写在线图片URL或上传本地图片"},{append:r((()=>[n(t,{icon:g(c),onClick:O},{default:r((()=>[i("上传图片")])),_:1},8,["icon"])])),_:1},8,["modelValue"])])),_:1}),n(s,{label:"排序",prop:"classifyName"},{default:r((()=>[n(l,{modelValue:x.order,"onUpdate:modelValue":a[3]||(a[3]=e=>x.order=e),type:"number",placeholder:"输入排序(越大越靠前)",clearable:"",maxlength:"6"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-8f4a3483"]]);export{V as default};
