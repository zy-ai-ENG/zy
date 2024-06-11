
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.55992ed4.js";import{a}from"../config/config.0065ad3e.js";import{d as t,Q as l,r as o,x as s,h as n,o as m,c as r,e as u,f as i,a as d,l as p,E as c,q as f}from"../main-1d1da8fb.js";const x={class:"flex justify-between"},y=d("b",null,"MJ参数设置",-1),g=t({__name:"prompt",setup(t){const f=l({mjCustomFanyiPrompt:"",mjCustomLianxiangPrompt:""}),g=o({}),j=o();async function b(){const e=await a.queryConfig({keys:["mjCustomFanyiPrompt","mjCustomLianxiangPrompt"]});Object.assign(f,e.data)}function C(){var e;null==(e=j.value)||e.validate((async e=>{if(e){try{await a.setConfig({settings:(t=f,Object.keys(t).map((e=>({configKey:e,configVal:t[e]}))))}),c.success("变更配置信息成功")}catch(l){}b()}else c.error("请填写完整信息");var t}))}return s((()=>{b()})),(a,t)=>{const l=n("el-alert"),o=e,s=n("el-button"),c=n("el-input"),b=n("el-form-item"),_=n("el-col"),P=n("el-row"),w=n("el-form"),h=n("el-card");return m(),r("div",null,[u(o,{bottomPadding:"20px"},{default:i((()=>[u(l,{closable:!1,"show-icon":"",title:"MJ参数说明",description:"如果您是海外服务器则不强制开启代理、反之则需要开启代理、代理为系统配套项目、非常规代理、如果您想自己搭建代理请查看教程、如果您想使用系统提供的默认代理、那么选择开启代理并且不填写代理地址即可使用默认地址、如果想获取默认地址请在售后群获取地址！",type:"success"})])),_:1}),u(h,{style:{margin:"20px"}},{header:i((()=>[d("div",x,[y,u(s,{class:"button",onClick:C},{default:i((()=>[p(" 保存设置 ")])),_:1})])])),default:i((()=>[u(w,{ref_key:"formRef",ref:j,rules:g.value,model:f,"label-width":"130px"},{default:i((()=>[u(P,null,{default:i((()=>[u(_,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[u(b,{label:"自定义翻译提示词",prop:"mindCustomPrompt"},{default:i((()=>[u(c,{modelValue:f.mjCustomFanyiPrompt,"onUpdate:modelValue":t[0]||(t[0]=e=>f.mjCustomFanyiPrompt=e),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(_,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[u(b,{label:"自定义联想提示词",prop:"mindCustomPrompt"},{default:i((()=>[u(c,{modelValue:f.mjCustomLianxiangPrompt,"onUpdate:modelValue":t[1]||(t[1]=e=>f.mjCustomLianxiangPrompt=e),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof f&&f(g);export{g as default};
