
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.3ad5ed39.js";import{a}from"../config/config.4e576922.js";import{d as l,Q as t,r as s,x as o,h as i,o as n,c as r,e as u,f as d,a as c,l as f,E as m,q as p}from"../main-01383ffb.js";const g={class:"flex justify-between"},x=c("b",null,"对话小尾巴设置",-1),y=l({__name:"tail",setup(l){const p=t({dialogueTail:""}),y=s({tailContent:[{required:!1,trigger:"blur",message:"请填写对话小尾巴"}]}),b=s();async function _(){const e=await a.queryConfig({keys:["dialogueTail"]});Object.assign(p,e.data)}function v(){var e;null==(e=b.value)||e.validate((async e=>{if(e){try{await a.setConfig({settings:(l=p,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),m.success("变更配置信息成功")}catch(t){}await _()}else m.error("请填写完整信息");var l}))}return o((()=>{_()})),(a,l)=>{const t=i("el-alert"),s=e,o=i("el-button"),m=i("el-input"),_=i("el-form-item"),w=i("el-col"),h=i("el-row"),j=i("el-form"),T=i("el-card");return n(),r("div",null,[u(s,{bottomPadding:"20px"},{default:d((()=>[u(t,{closable:!1,"show-icon":"",title:"对话小尾巴设置",description:"设置对话小尾巴，前台每条对话完成后都会显示该小尾巴",type:"success"})])),_:1}),u(T,{style:{margin:"20px 20px 0 20px"}},{header:d((()=>[c("div",g,[x,u(o,{class:"button",onClick:v},{default:d((()=>[f(" 保存设置 ")])),_:1})])])),default:d((()=>[u(j,{ref_key:"formRef",ref:b,rules:y.value,model:p,"label-width":"130px"},{default:d((()=>[u(h,null,{default:d((()=>[u(w,{xs:24,md:20,lg:15,xl:12},{default:d((()=>[u(_,{label:"对话小尾巴",prop:"dialogueTail"},{default:d((()=>[u(m,{modelValue:p.dialogueTail,"onUpdate:modelValue":l[0]||(l[0]=e=>p.dialogueTail=e),type:"text",placeholder:"请填写对话小尾巴",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof p&&p(y);export{y as default};
