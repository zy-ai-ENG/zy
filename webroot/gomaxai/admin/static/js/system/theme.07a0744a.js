
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.3ad5ed39.js";import{a}from"../config/config.4e576922.js";import{d as l,Q as t,r as s,x as o,h as r,o as n,c as i,e as u,f as d,a as f,l as c,E as m,q as g}from"../main-01383ffb.js";const p={class:"flex justify-between"},h=f("b",null,"系统默认主题设置",-1),_=l({__name:"theme",setup(l){const g=t({theme:""}),_=s({theme:[{required:!0,trigger:"blur",message:"必选"}]}),b=s();async function y(){const e=await a.queryConfig({keys:["theme"]});Object.assign(g,e.data)}function x(){var e;null==(e=b.value)||e.validate((async e=>{if(e){try{await a.setConfig({settings:(l=g,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),m.success("变更配置信息成功")}catch(t){}y()}else m.error("请填写完整信息");var l}))}return o((()=>{y()})),(a,l)=>{const t=r("el-alert"),s=e,o=r("el-button"),m=r("el-radio"),y=r("el-radio-group"),v=r("el-form-item"),j=r("el-col"),w=r("el-row"),k=r("el-form"),V=r("el-card");return n(),i("div",null,[u(s,{bottomPadding:"20px"},{default:d((()=>[u(t,{closable:!1,"show-icon":"",title:"系统默认主题设置说明",description:"设置系统主题色之后chat前端自动生效",type:"success"})])),_:1}),u(V,{style:{margin:"20px"}},{header:d((()=>[f("div",p,[h,u(o,{class:"button",onClick:x},{default:d((()=>[c(" 保存设置 ")])),_:1})])])),default:d((()=>[u(k,{ref_key:"formRef",ref:b,rules:_.value,model:g,"label-width":"130px"},{default:d((()=>[u(w,null,{default:d((()=>[u(j,{xs:24,md:20,lg:15,xl:12},{default:d((()=>[u(v,{label:"设置主题",prop:"theme"},{default:d((()=>[u(y,{modelValue:g.theme,"onUpdate:modelValue":l[0]||(l[0]=e=>g.theme=e)},{default:d((()=>[u(m,{label:"dark"},{default:d((()=>[c("深色")])),_:1}),u(m,{label:"light"},{default:d((()=>[c("浅色")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof g&&g(_);export{_ as default};
