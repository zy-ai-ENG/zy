
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.3ad5ed39.js";import{a as s}from"../config/config.4e576922.js";import{d as a,Q as l,r as t,x as r,h as o,o as n,c as i,e as u,f as c,a as f,l as d,E as m,q as g}from"../main-01383ffb.js";const y={class:"flex justify-between"},p=f("b",null,"模型系统消息预设",-1),b=a({__name:"globalPre",setup(a){const g=l({systemPreMessage:""}),b=t({systemPreMessage:[{required:!0,trigger:"blur",message:"请填写全局预设信息、用于模型预设词"}]}),x=t();async function _(){const e=await s.queryConfig({keys:["systemPreMessage"]});Object.assign(g,e.data)}function P(){var e;null==(e=x.value)||e.validate((async e=>{if(e){try{await s.setConfig({settings:(a=g,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),m.success("变更配置信息成功")}catch(l){}_()}else m.error("请填写完整信息");var a}))}return r((()=>{_()})),(s,a)=>{const l=o("el-alert"),t=e,r=o("el-button"),m=o("el-input"),_=o("el-form-item"),v=o("el-col"),w=o("el-row"),h=o("el-form"),j=o("el-card");return n(),i("div",null,[u(t,{bottomPadding:"20px"},{default:c((()=>[u(l,{closable:!1,"show-icon":"",title:"模型全局头部预设说明",description:"当前消息将会被追加到对话模型的全局预设当中、对应用APP无效、对其他所有绘画生效！",type:"success"})])),_:1}),u(j,{style:{margin:"20px"}},{header:c((()=>[f("div",y,[p,u(r,{class:"button",onClick:P},{default:c((()=>[d(" 保存设置 ")])),_:1})])])),default:c((()=>[u(h,{ref_key:"formRef",ref:x,rules:b.value,model:g,"label-width":"140px"},{default:c((()=>[u(w,null,{default:c((()=>[u(v,{xs:24,md:20,lg:15,xl:12},{default:c((()=>[u(_,{label:"模型全局头部预设",prop:"systemPreMessage"},{default:c((()=>[u(m,{modelValue:g.systemPreMessage,"onUpdate:modelValue":a[0]||(a[0]=e=>g.systemPreMessage=e),type:"textarea",rows:5,placeholder:"请填写模型全局头部预设信息！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof g&&g(b);export{b as default};
