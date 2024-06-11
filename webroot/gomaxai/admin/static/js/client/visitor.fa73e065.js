
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.35ca4747.js";import{a as l}from"../config/config.d9afe89b.js";import{d as a,Q as o,r as t,x as s,h as u,o as i,c as r,e as d,f as m,a as n,l as f,E as c,q as p}from"../main-78588ec5.js";const v={class:"flex justify-between"},g=n("b",null,"访客模式设置",-1),b=a({__name:"visitor",setup(a){const p=o({visitorModel3Num:null,visitorModel4Num:null,visitorMJNum:null}),b=t({visitorModel3Num:[{required:!0,trigger:"blur",message:"请填写每日限制的基础模型积分"}],visitorModel4Num:[{required:!0,trigger:"blur",message:"请填写每日限制的高级模型积分"}],visitorMJNum:[{required:!0,trigger:"blur",message:"请填写每日限制的绘画额度积分"}]}),M=t();async function N(){const e=await l.queryConfig({keys:["visitorModel4Num","visitorModel3Num","visitorMJNum"]});Object.assign(p,e.data)}function _(){var e;null==(e=M.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(a=p,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),c.success("变更配置信息成功")}catch(o){}N()}else c.error("请填写完整信息");var a}))}return s((()=>{N()})),(l,a)=>{const o=u("el-alert"),t=e,s=u("el-button"),c=u("el-input"),N=u("el-form-item"),x=u("el-col"),y=u("el-row"),V=u("el-form"),h=u("el-card");return i(),r("div",null,[d(t,{bottomPadding:"20px"},{default:m((()=>[d(o,{closable:!1,"show-icon":"",title:"访客模式设置",description:"设置为每日访客限制的访问积分额度、每日凌晨0点刷新新的额度！",type:"success"})])),_:1}),d(h,{style:{margin:"20px 20px 0 20px"}},{header:m((()=>[n("div",v,[g,d(s,{class:"button",onClick:_},{default:m((()=>[f(" 保存设置 ")])),_:1})])])),default:m((()=>[d(V,{ref_key:"formRef",ref:M,rules:b.value,model:p,"label-width":"130px"},{default:m((()=>[d(y,null,{default:m((()=>[d(x,{xs:24,md:20,lg:15,xl:12},{default:m((()=>[d(N,{label:"基础模型额度",prop:"visitorModel3Num"},{default:m((()=>[d(c,{modelValue:p.visitorModel3Num,"onUpdate:modelValue":a[0]||(a[0]=e=>p.visitorModel3Num=e),type:"number",placeholder:"请填写每日限制基础模型积分",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(y,null,{default:m((()=>[d(x,{xs:24,md:20,lg:15,xl:12},{default:m((()=>[d(N,{label:"高级模型额度",prop:"visitorModel4Num"},{default:m((()=>[d(c,{modelValue:p.visitorModel4Num,"onUpdate:modelValue":a[1]||(a[1]=e=>p.visitorModel4Num=e),type:"number",placeholder:"请填写每日限制的高级模型积分",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(y,null,{default:m((()=>[d(x,{xs:24,md:20,lg:15,xl:12},{default:m((()=>[d(N,{label:"MJ绘画额度",prop:"visitorMJNum"},{default:m((()=>[d(c,{modelValue:p.visitorMJNum,"onUpdate:modelValue":a[2]||(a[2]=e=>p.visitorMJNum=e),type:"number",placeholder:"请填写每日限制的绘画额度积分",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof p&&p(b);export{b as default};