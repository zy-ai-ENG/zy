
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.55992ed4.js";import{a as l}from"../config/config.0065ad3e.js";import{d as a,Q as t,r as s,x as r,h as n,o as u,c as d,e as o,f as i,a as p,l as c,E as f,q as m}from"../main-1d1da8fb.js";const g={class:"flex justify-between"},x=p("b",null,"客户端显示设置",-1),b=p("div",{style:{width:"250px"}}," 用于应用菜单顶部的自定义语句、修改后将生效、不设置则使用默认的！ ",-1),_=p("div",{style:{width:"250px"}}," 用于应用菜单顶部的自定义背景图片地址、修改后将生效、不设置则使用默认的！ ",-1),y=a({__name:"visible",setup(a){const m=t({appMenuHeaderTips:null,appMenuHeaderBgUrl:null}),y=s({appMenuHeaderTips:[{required:!0,trigger:"blur",message:"填写应用市场的提示语"}],appMenuHeaderBgUrl:[{required:!0,trigger:"blur",message:"请填写应用市场头部背景图地址"}]}),h=s();async function H(){const e=await l.queryConfig({keys:["appMenuHeaderTips","appMenuHeaderBgUrl"]});Object.assign(m,e.data)}function v(){var e;null==(e=h.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(a=m,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),f.success("变更配置信息成功")}catch(t){}H()}else f.error("请填写完整信息");var a}))}return r((()=>{H()})),(l,a)=>{const t=n("el-alert"),s=e,r=n("el-button"),f=n("el-input"),H=n("QuestionFilled"),w=n("el-icon"),M=n("el-tooltip"),U=n("el-form-item"),V=n("el-col"),j=n("el-row"),k=n("el-form"),B=n("el-card");return u(),d("div",null,[o(s,{bottomPadding:"20px"},{default:i((()=>[o(t,{closable:!1,"show-icon":"",title:"客户端UI设置",description:"对于用户端各个模块的显隐控制、具体显示部分参考提示！app",type:"success"})])),_:1}),o(B,{style:{margin:"20px 20px 0 20px"}},{header:i((()=>[p("div",g,[x,o(r,{class:"button",onClick:v},{default:i((()=>[c(" 保存设置 ")])),_:1})])])),default:i((()=>[o(k,{ref_key:"formRef",ref:h,rules:y.value,model:m,"label-width":"150px"},{default:i((()=>[o(j,null,{default:i((()=>[o(V,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[o(U,{label:"应用菜单顶部提示语",prop:"maxRounds"},{default:i((()=>[o(f,{modelValue:m.appMenuHeaderTips,"onUpdate:modelValue":a[0]||(a[0]=e=>m.appMenuHeaderTips=e),placeholder:"请填写应用菜单顶部提示语",clearable:"",style:{width:"80%"}},null,8,["modelValue"]),o(M,{class:"box-item",effect:"dark",placement:"right"},{content:i((()=>[b])),default:i((()=>[o(w,{class:"ml-3 cursor-pointer"},{default:i((()=>[o(H)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o(j,null,{default:i((()=>[o(V,{xs:24,md:20,lg:15,xl:12},{default:i((()=>[o(U,{label:"应用菜单顶部背景图",prop:"maxRounds"},{default:i((()=>[o(f,{modelValue:m.appMenuHeaderBgUrl,"onUpdate:modelValue":a[1]||(a[1]=e=>m.appMenuHeaderBgUrl=e),placeholder:"请填写应用菜单顶部背景图地址",clearable:"",style:{width:"80%"}},null,8,["modelValue"]),o(M,{class:"box-item",effect:"dark",placement:"right"},{content:i((()=>[_])),default:i((()=>[o(w,{class:"ml-3 cursor-pointer"},{default:i((()=>[o(H)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof m&&m(y);export{y as default};
