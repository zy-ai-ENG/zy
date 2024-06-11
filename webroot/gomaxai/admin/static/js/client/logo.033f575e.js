
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.3ad5ed39.js";import{a as l}from"../config/config.4e576922.js";import{d as a,Q as t,r as o,x as n,h as i,o as s,c,e as r,f as u,a as d,l as m,S as f,U as g,E as p,t as h,q as b}from"../main-01383ffb.js";const P={class:"flex justify-between"},_=d("b",null,"客户端动态菜单设置参数设置",-1),v=a({__name:"logo",setup(a){const b=[{label:"ChatGpt聊天",path:"/chat"},{label:"Dall-E2绘画",path:"/draw"},{label:"Midjourney绘画",path:"/midjourney"},{label:"mj公共预览页",path:"/market"},{label:"mind思维导图",path:"/mind"},{label:"应用中心",path:"/gpts"},{label:"不指定首页",path:""}],v=t({clientMenuList:[],clientHomePath:"",clientLogoPath:"",clientFavoIconPath:""}),x=o({clientHomePath:[{required:!1,trigger:"change",message:"请选择项目默认主页地址"}],clientMenuList:[{required:!1,trigger:"change",message:"请选择客户端开放的菜单"}],clientLogoPath:[{required:!1,trigger:"blur",message:"请填写您的网站LOGO图片链接"}],clientFavoIconPath:[{required:!1,trigger:"blur",message:"请填写您的网站favorit.ico网站logo地址"}]}),y=o();async function L(){const e=await l.queryConfig({keys:["clientHomePath","clientMenuList","clientLogoPath","clientFavoIconPath"]}),a=e.data;a.clientMenuList=a.clientMenuList?JSON.parse(a.clientMenuList):[],Object.assign(v,e.data)}function O(){var e;null==(e=y.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(a=v,Object.keys(a).map((e=>({configKey:e,configVal:V(e,a[e])}))))}),p.success("变更配置信息成功")}catch(t){}L()}else p.error("请填写完整信息");var a}))}function V(e,l){return["clientMenuList"].includes(e)?l?l?JSON.stringify(l):void 0:[]:l}return n((()=>{L()})),(l,a)=>{const t=i("el-alert"),o=e,n=i("el-button"),p=i("el-radio"),L=i("el-radio-group"),V=i("el-form-item"),j=i("el-col"),M=i("el-row"),w=i("el-input"),F=i("el-form"),H=i("el-card");return s(),c("div",null,[r(o,{bottomPadding:"20px"},{default:u((()=>[r(t,{closable:!1,"show-icon":"",title:"动态菜单配置说明",description:"动态菜单继承到下方、用户端logo配置在客户端左上角、ico为网站图标请使用svg格式、可以在线转格式！",type:"success"})])),_:1}),r(H,{style:{margin:"20px 20px 0 20px"}},{header:u((()=>[d("div",P,[_,r(n,{class:"button",onClick:O},{default:u((()=>[m(" 保存设置 ")])),_:1})])])),default:u((()=>[r(F,{ref_key:"formRef",ref:y,rules:x.value,model:v,"label-width":"130px"},{default:u((()=>[r(M,null,{default:u((()=>[r(j,{xs:24,md:24,lg:24,xl:24},{default:u((()=>[r(V,{label:"设置指定首页",prop:"clientHomePath"},{default:u((()=>[r(L,{modelValue:v.clientHomePath,"onUpdate:modelValue":a[0]||(a[0]=e=>v.clientHomePath=e)},{default:u((()=>[(s(),c(f,null,g(b,(e=>r(p,{key:e.path,size:"small",border:"",label:e.path},{default:u((()=>[m(h(e.label),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),r(M,null,{default:u((()=>[r(j,{xs:24,md:24,lg:24,xl:24},{default:u((()=>[r(V,{label:"用户端LOGO",prop:"clientLogoPath"},{default:u((()=>[r(w,{modelValue:v.clientLogoPath,"onUpdate:modelValue":a[1]||(a[1]=e=>v.clientLogoPath=e),placeholder:"请填写您要设置的网站LOGO图片链接",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),r(M,null,{default:u((()=>[r(j,{xs:24,md:24,lg:24,xl:24},{default:u((()=>[r(V,{label:"用户端ico",prop:"clientFavoIconPath"},{default:u((()=>[r(w,{modelValue:v.clientFavoIconPath,"onUpdate:modelValue":a[2]||(a[2]=e=>v.clientFavoIconPath=e),placeholder:"请填写您要设置的网站ico地址、格式为svg",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof b&&b(v);export{v as default};
