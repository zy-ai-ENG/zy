
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.3ad5ed39.js";import{a as l}from"../config/config.4e576922.js";import{d as a,Q as p,r as u,x as t,h as r,o as i,c as d,e as o,f as s,a as n,l as y,E as c,q as f}from"../main-01383ffb.js";const m={class:"flex justify-between"},H=n("b",null,"虎皮椒支付参数设置",-1),g=a({__name:"hupijiao",setup(a){const f=p({payHupiStatus:"",payHupiAppId:"",payHupiSecret:"",payHupiGatewayUrl:"",payHupiNotifyUrl:"",payHupiReturnUrl:""}),g=u({payHupiStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payHupiSecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payHupiGatewayUrl:[{required:!0,trigger:"blur",message:"请填写网关"}],payHupiAppId:[{required:!0,trigger:"blur",message:"请填写Appid"}],payHupiNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}]}),_=u();async function b(){const e=await l.queryConfig({keys:["payHupiSecret","payHupiNotifyUrl","payHupiGatewayUrl","payHupiReturnUrl","payHupiAppId","payHupiStatus"]});Object.assign(f,e.data)}function x(){var e;null==(e=_.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(a=f,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),c.success("变更配置信息成功")}catch(p){}b()}else c.error("请填写完整信息");var a}))}return t((()=>{b()})),(l,a)=>{const p=r("el-alert"),u=e,t=r("el-button"),c=r("el-switch"),b=r("el-form-item"),U=r("el-col"),V=r("el-row"),h=r("el-input"),w=r("el-form"),S=r("el-card");return i(),d("div",null,[o(u,{bottomPadding:"20px"},{default:s((()=>[o(p,{closable:!1,"show-icon":"",title:"虎皮椒支付参数说明",description:"虎皮椒支付为三方支付、接入请购买微信渠道、详细参数参照 https://www.xunhupay.com/ 目前优先开通微信支付渠道、同时开启开启多种支付、我们将优先按照菜单顺序调用、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"success"})])),_:1}),o(S,{style:{margin:"20px"}},{header:s((()=>[n("div",m,[H,o(t,{class:"button",onClick:x},{default:s((()=>[y(" 保存设置 ")])),_:1})])])),default:s((()=>[o(w,{ref_key:"formRef",ref:_,rules:g.value,model:f,"label-width":"120px"},{default:s((()=>[o(V,null,{default:s((()=>[o(U,{xs:24,md:20,lg:15,xl:12},{default:s((()=>[o(b,{label:"启用当前支付",prop:"payHupiAppId"},{default:s((()=>[o(c,{modelValue:f.payHupiStatus,"onUpdate:modelValue":a[0]||(a[0]=e=>f.payHupiStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(V,null,{default:s((()=>[o(U,{xs:24,md:20,lg:15,xl:12},{default:s((()=>[o(b,{label:"支付AppId",prop:"payHupiAppId"},{default:s((()=>[o(h,{modelValue:f.payHupiAppId,"onUpdate:modelValue":a[1]||(a[1]=e=>f.payHupiAppId=e),placeholder:"请填写AppId",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(V,null,{default:s((()=>[o(U,{xs:24,md:20,lg:15,xl:12},{default:s((()=>[o(b,{label:"支付网关地址",prop:"payHupiGatewayUrl"},{default:s((()=>[o(h,{modelValue:f.payHupiGatewayUrl,"onUpdate:modelValue":a[2]||(a[2]=e=>f.payHupiGatewayUrl=e),placeholder:"请填写支付网关地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(V,null,{default:s((()=>[o(U,{xs:24,md:20,lg:15,xl:12},{default:s((()=>[o(b,{label:"Secret秘钥",prop:"payHupiSecret"},{default:s((()=>[o(h,{modelValue:f.payHupiSecret,"onUpdate:modelValue":a[3]||(a[3]=e=>f.payHupiSecret=e),placeholder:"请填写支付秘钥",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(V,null,{default:s((()=>[o(U,{xs:24,md:20,lg:15,xl:12},{default:s((()=>[o(b,{label:"支付通知地址",prop:"payHupiSecret"},{default:s((()=>[o(h,{modelValue:f.payHupiNotifyUrl,"onUpdate:modelValue":a[4]||(a[4]=e=>f.payHupiNotifyUrl=e),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(V,null,{default:s((()=>[o(U,{xs:24,md:20,lg:15,xl:12},{default:s((()=>[o(b,{label:"支付回调地址",prop:"payHupiSecret"},{default:s((()=>[o(h,{modelValue:f.payHupiReturnUrl,"onUpdate:modelValue":a[5]||(a[5]=e=>f.payHupiReturnUrl=e),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof f&&f(g);export{g as default};
