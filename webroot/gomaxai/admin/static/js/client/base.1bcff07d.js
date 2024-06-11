
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.227bd596.js";import{a as l}from"../config/config.b97768d9.js";import{d as a,Q as t,r as o,x as u,h as d,o as r,c as s,e as m,f as n,a as i,l as p,E as f,q as c}from"../main-32165e1b.js";const b={class:"flex justify-between"},_=i("b",null,"系统基础设置",-1),x=i("h5",null,"网站基础信息配置",-1),V=a({__name:"base",setup(a){const c=t({siteName:"",qqNumber:"",vxNumber:"",robotAvatar:"",userDefautlAvatar:"",buyCramiAddress:"",siteRobotName:"",isShowAppCatIcon:""}),V=o({siteName:[{required:!0,trigger:"blur",message:"请填写网站名称"}]}),v=o();async function A(){const e=await l.queryConfig({keys:["siteName","qqNumber","vxNumber","robotAvatar","userDefautlAvatar","buyCramiAddress","siteRobotName","isShowAppCatIcon"]});Object.assign(c,e.data)}function g(){var e;null==(e=v.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(a=c,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),f.success("变更配置信息成功")}catch(t){}A()}else f.error("请填写完整信息");var a}))}return u((()=>{A()})),(l,a)=>{const t=d("el-alert"),o=e,u=d("el-button"),f=d("el-input"),A=d("el-form-item"),N=d("el-col"),h=d("el-row"),y=d("el-switch"),q=d("el-tooltip"),w=d("el-form"),C=d("el-card");return r(),s("div",null,[m(o,{bottomPadding:"20px"},{default:n((()=>[m(t,{closable:!1,"show-icon":"",title:"用户端基础配置说明",description:"网站类型设置是实时生效的、这里可以配置网站的logo名称等、购卡地址对应卡密购买、思维导图默认展示属于、机器人名称为对话页的默认AI Robot位置！",type:"success"})])),_:1}),m(C,{style:{margin:"20px 20px 0 20px"}},{header:n((()=>[i("div",b,[_,m(u,{class:"button",onClick:g},{default:n((()=>[p(" 保存设置 ")])),_:1})])])),default:n((()=>[m(w,{ref_key:"formRef",ref:v,rules:V.value,model:c,"label-width":"150px"},{default:n((()=>[x,m(h,null,{default:n((()=>[m(N,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[m(A,{label:"网站名称",prop:"siteName"},{default:n((()=>[m(f,{modelValue:c.siteName,"onUpdate:modelValue":a[0]||(a[0]=e=>c.siteName=e),placeholder:"网站名称【GoMaxAi】",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(h,null,{default:n((()=>[m(N,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[m(A,{label:"网站QQ客服",prop:"qqNumber"},{default:n((()=>[m(f,{modelValue:c.qqNumber,"onUpdate:modelValue":a[1]||(a[1]=e=>c.qqNumber=e),placeholder:"网站客服QQ号",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(h,null,{default:n((()=>[m(N,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[m(A,{label:"网站VX客服",prop:"vxNumber"},{default:n((()=>[m(f,{modelValue:c.vxNumber,"onUpdate:modelValue":a[2]||(a[2]=e=>c.vxNumber=e),placeholder:"网站客服VX号",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(h,null,{default:n((()=>[m(N,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[m(A,{label:"机器人头像",prop:"robotAvatar"},{default:n((()=>[m(f,{modelValue:c.robotAvatar,"onUpdate:modelValue":a[3]||(a[3]=e=>c.robotAvatar=e),placeholder:"填写机器人默认头像地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(h,null,{default:n((()=>[m(N,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[m(A,{label:"用户默认头像",prop:"userDefautlAvatar"},{default:n((()=>[m(f,{modelValue:c.userDefautlAvatar,"onUpdate:modelValue":a[4]||(a[4]=e=>c.userDefautlAvatar=e),placeholder:"填写用户注册时默认头像头像地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(h,null,{default:n((()=>[m(N,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[m(A,{label:"网站购卡地址",prop:"buyCramiAddress"},{default:n((()=>[m(f,{modelValue:c.buyCramiAddress,"onUpdate:modelValue":a[5]||(a[5]=e=>c.buyCramiAddress=e),placeholder:"您的网站发卡地址、用于配合卡密使用，用户点击购买卡密的跳转地址、不填写不展示购卡按钮！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(h,null,{default:n((()=>[m(N,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[m(A,{label:"机器人名称",prop:"siteRobotName"},{default:n((()=>[m(f,{modelValue:c.siteRobotName,"onUpdate:modelValue":a[6]||(a[6]=e=>c.siteRobotName=e),placeholder:"默认[Ai Robot]、首页默认展示状态下的名称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),m(h,null,{default:n((()=>[m(N,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[m(A,{label:"应用分类侧边栏图标",prop:"isShowAppCatIcon"},{default:n((()=>[m(q,{content:"是否展示应用中心的分类侧边栏图标、配置仅在pc端有效！",placement:"top","show-after":500},{default:n((()=>[m(y,{modelValue:c.isShowAppCatIcon,"onUpdate:modelValue":a[7]||(a[7]=e=>c.isShowAppCatIcon=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof c&&c(V);export{V as default};
