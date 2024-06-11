
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.227bd596.js";import{a}from"../config/config.b97768d9.js";import{d as l,Q as t,r as o,x as s,h as n,o as u,c as d,e as r,f as m,a as i,l as f,E as c,q as p}from"../main-32165e1b.js";const x={class:"flex justify-between"},y=i("b",null,"思维导图设置",-1),_=l({__name:"mind",setup(l){const p=t({mindDefaultData:"",mindCustomPrompt:""}),_=o({}),b=o();async function g(){const e=await a.queryConfig({keys:["mindDefaultData","mindCustomPrompt"]});Object.assign(p,e.data)}function D(){var e;null==(e=b.value)||e.validate((async e=>{if(e){try{await a.setConfig({settings:(l=p,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),c.success("变更配置信息成功")}catch(t){}g()}else c.error("请填写完整信息");var l}))}return s((()=>{g()})),(a,l)=>{const t=n("el-alert"),o=e,s=n("el-button"),c=n("el-input"),g=n("el-form-item"),w=n("el-col"),C=n("el-row"),h=n("el-form"),v=n("el-card");return u(),d("div",null,[r(o,{bottomPadding:"20px"},{default:m((()=>[r(t,{closable:!1,"show-icon":"",title:"系统基础设置配置说明",description:"默认配置数据会在页面加载后初次展示给用户、预设信息系统有内置提示词、如果您想覆盖掉他、则在此处设置您的专属提示词！",type:"success"})])),_:1}),r(v,{style:{margin:"20px 20px 0 20px"}},{header:m((()=>[i("div",x,[y,r(s,{class:"button",onClick:D},{default:m((()=>[f(" 保存设置 ")])),_:1})])])),default:m((()=>[r(h,{ref_key:"formRef",ref:b,rules:_.value,model:p,"label-width":"150px"},{default:m((()=>[r(C,null,{default:m((()=>[r(w,{xs:24,md:20,lg:15,xl:12},{default:m((()=>[r(g,{label:"思维导图默认数据",prop:"mindDefaultData"},{default:m((()=>[r(c,{modelValue:p.mindDefaultData,"onUpdate:modelValue":l[0]||(l[0]=e=>p.mindDefaultData=e),type:"textarea",rows:10,placeholder:"思维导图的默认展示数据Markdown格式",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),r(C,null,{default:m((()=>[r(w,{xs:24,md:20,lg:15,xl:12},{default:m((()=>[r(g,{label:"导图自定义提示词",prop:"mindCustomPrompt"},{default:m((()=>[r(c,{modelValue:p.mindCustomPrompt,"onUpdate:modelValue":l[1]||(l[1]=e=>p.mindCustomPrompt=e),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof p&&p(_);export{_ as default};
