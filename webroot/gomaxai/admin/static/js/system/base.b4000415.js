
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.129bbe0b.js";import{a}from"../config/config.bd9b8a25.js";import{d as l,Q as d,r as o,x as t,h as u,o as s,c as i,e as n,f as r,a as c,l as f,E as b,q as m}from"../main-dd192319.js";const p={class:"flex justify-between"},_=c("b",null,"系统基础设置",-1),x=l({__name:"base",setup(l){const m=d({baiduCode:"",baiduSiteId:"",baiduToken:""}),x=o({}),y=o();async function g(){const e=await a.queryConfig({keys:["baiduCode","baiduSiteId","baiduToken"]});Object.assign(m,e.data)}function k(){var e;null==(e=y.value)||e.validate((async e=>{if(e){try{await a.setConfig({settings:(l=m,Object.keys(l).map((e=>({configKey:e,configVal:l[e]}))))}),b.success("变更配置信息成功")}catch(d){}g()}else b.error("请填写完整信息");var l}))}return t((()=>{g()})),(a,l)=>{const d=u("el-alert"),o=e,t=u("el-button"),b=u("el-input"),g=u("el-form-item"),V=u("el-col"),h=u("el-row"),C=u("el-form"),v=u("el-card");return s(),i("div",null,[n(o,{bottomPadding:"20px"},{default:r((()=>[n(d,{closable:!1,"show-icon":"",title:"基础设置说明",description:"百度统计默认使用的是demo数据、用于demo展示、最终数据在首页程呈现、请查看部署文档或前往百度统计申请自己的专属key与token、这是免费的服务、如果您不想使用将下面设置留空就行。",type:"success"})])),_:1}),n(v,{style:{margin:"20px"}},{header:r((()=>[c("div",p,[_,n(t,{class:"button",onClick:k},{default:r((()=>[f(" 保存设置 ")])),_:1})])])),default:r((()=>[n(C,{ref_key:"formRef",ref:y,rules:x.value,model:m,"label-width":"120px"},{default:r((()=>[n(h,null,{default:r((()=>[n(V,{xs:24,md:20,lg:15,xl:12},{default:r((()=>[n(g,{label:"百度统计siteId",prop:"baiduSiteId"},{default:r((()=>[n(b,{modelValue:m.baiduSiteId,"onUpdate:modelValue":l[0]||(l[0]=e=>m.baiduSiteId=e),placeholder:"请填写百度site_id、不会请查看部署文档！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(h,null,{default:r((()=>[n(V,{xs:24,md:20,lg:15,xl:12},{default:r((()=>[n(g,{label:"百度统计token",prop:"baiduToken"},{default:r((()=>[n(b,{modelValue:m.baiduToken,"onUpdate:modelValue":l[1]||(l[1]=e=>m.baiduToken=e),placeholder:"请填写百度access_token、不会请查看部署文档！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(h,null,{default:r((()=>[n(V,{xs:24,md:20,lg:15,xl:12},{default:r((()=>[n(g,{label:"百度统计代码",prop:"baiduCode"},{default:r((()=>[n(b,{modelValue:m.baiduCode,"onUpdate:modelValue":l[2]||(l[2]=e=>m.baiduCode=e),placeholder:"填写百度统计代码可统计每日访问量详情，如果没有使用用请查看详细文档！",type:"textarea",rows:12,clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof m&&m(x);export{x as default};
