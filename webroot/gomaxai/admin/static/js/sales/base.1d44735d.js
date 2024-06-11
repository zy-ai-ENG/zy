
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.129bbe0b.js";import{a as l}from"../config/config.bd9b8a25.js";import{d as a,Q as s,r as t,x as o,h as i,o as r,c as n,e as u,f as d,a as f,l as m,E as c,q as p}from"../main-dd192319.js";const g={class:"flex justify-between"},y=f("b",null,"分销系统基础设置",-1),b={style:{height:"61vh","overflow-y":"auto","overflow-x":"hidden"}},_=a({__name:"base",setup(a){const p=s({salesBaseRatio:10,salesSeniorRatio:30,salesAllowDrawMoney:10,salesBaseTitle:"新秀分销商"}),_=t({salesBaseRatio:[{required:!0,trigger:"blur",message:"请填写默认佣金比例"}],salesSeniorRatio:[{required:!0,trigger:"blur",message:"请填写高级代理默认比例"}],salesBaseTitle:[{required:!0,trigger:"blur",message:"请填写默认用户推介等级名称"}]}),x=t();async function w(){const e=await l.queryConfig({keys:["salesBaseRatio","salesSeniorRatio","salesAllowDrawMoney","salesBaseTitle"]});Object.assign(p,e.data)}function R(){var e;null==(e=x.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(a=p,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),c.success("变更配置信息成功")}catch(s){}w()}else c.error("请填写完整信息");var a}))}return o((()=>{w()})),(l,a)=>{const s=i("el-alert"),t=e,o=i("el-button"),c=i("el-input-number"),w=i("el-form-item"),V=i("el-col"),B=i("el-row"),v=i("el-input"),h=i("el-form"),S=i("el-card");return r(),n("div",null,[u(t,{bottomPadding:"20px"},{default:d((()=>[u(s,{closable:!1,"show-icon":"",title:"分销系统基础配置",description:"填写默认佣金比例和高级分销佣金比例会对应显示到客户端的分销页面、同时新用户将使用默认分销比例、允许提现额度限制用户最低提现金额、分销名称同样对应分销页面、高级代理可自定义名称！",type:"success"})])),_:1}),u(S,{style:{margin:"20px"}},{header:d((()=>[f("div",g,[y,u(o,{class:"button",onClick:R},{default:d((()=>[m(" 保存设置 ")])),_:1})])])),default:d((()=>[f("div",b,[u(h,{ref_key:"formRef",ref:x,model:p,"label-width":"140px",rules:_.value},{default:d((()=>[u(B,null,{default:d((()=>[u(V,{xs:24,md:20,lg:15,xl:12},{default:d((()=>[u(w,{label:"默认分销佣金比例",prop:"salesBaseRatio"},{default:d((()=>[u(c,{modelValue:p.salesBaseRatio,"onUpdate:modelValue":a[0]||(a[0]=e=>p.salesBaseRatio=e),max:100,min:0,step:5,"step-strictly":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(B,null,{default:d((()=>[u(V,{xs:24,md:20,lg:15,xl:12},{default:d((()=>[u(w,{label:"高级分销佣金比例",prop:"salesSeniorRatio"},{default:d((()=>[u(c,{modelValue:p.salesSeniorRatio,"onUpdate:modelValue":a[1]||(a[1]=e=>p.salesSeniorRatio=e),max:100,min:0,step:5,"step-strictly":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(B,null,{default:d((()=>[u(V,{xs:24,md:20,lg:15,xl:12},{default:d((()=>[u(w,{label:"允许最低提现金额",prop:"salesAllowDrawMoney"},{default:d((()=>[u(v,{modelValue:p.salesAllowDrawMoney,"onUpdate:modelValue":a[2]||(a[2]=e=>p.salesAllowDrawMoney=e),type:"number","step-strictly":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(B,null,{default:d((()=>[u(V,{xs:24,md:20,lg:15,xl:12},{default:d((()=>[u(w,{label:"默认等级分销名称",prop:"salesBaseTitle"},{default:d((()=>[u(v,{modelValue:p.salesBaseTitle,"onUpdate:modelValue":a[3]||(a[3]=e=>p.salesBaseTitle=e),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])])),_:1})])}}});"function"==typeof p&&p(_);export{_ as default};
