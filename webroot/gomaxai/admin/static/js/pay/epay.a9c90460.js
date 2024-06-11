
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as a}from"../index/index.0db9df33.js";import{a as e}from"../config/config.b5d22985.js";import{d as l,Q as p,r as t,x as y,h as u,o as r,c as d,e as o,f as n,a as i,l as s,S as c,U as f,E as m,t as E,q as g}from"../main-0579ff80.js";const b={class:"flex justify-between"},_=i("b",null,"易支付参数设置",-1),x=l({__name:"epay",setup(l){const g=p({payEpayStatus:"",payEpayPid:"",payEpaySecret:"",payEpayNotifyUrl:"",payEpayReturnUrl:"",payEpayApiPayUrl:"",payEpayApiQueryUrl:"",payEpayRedirect:"",payEpayChannel:[]}),x=t({payEpayStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payEpaySecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payEpayPid:[{required:!0,trigger:"blur",message:"请填写商户PID"}],payEpayNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}],payEpayApiPayUrl:[{required:!0,trigger:"blur",message:"请填写平台支付API请求地址"}],payEpayApiQueryUrl:[{required:!0,trigger:"blur",message:"请填写平台API商户查询地址"}]}),U=t(),V=[{label:"微信支付",value:"wxpay"},{label:"支付宝支付",value:"alipay"}];async function h(){const a=await e.queryConfig({keys:["payEpaySecret","payEpayNotifyUrl","payEpayReturnUrl","payEpayPid","payEpayStatus","payEpayApiPayUrl","payEpayApiQueryUrl","payEpayRedirect","payEpayChannel"]}),l=a.data.payEpayChannel?JSON.parse(a.data.payEpayChannel):[];Object.assign(g,a.data,{payEpayChannel:l})}function v(){var a;null==(a=U.value)||a.validate((async a=>{if(a){try{await e.setConfig({settings:(l=g,Object.keys(l).map((a=>({configKey:a,configVal:P(a,l[a])}))))}),m.success("变更配置信息成功")}catch(p){}h()}else m.error("请填写完整信息");var l}))}function P(a,e){return["payEpayChannel"].includes(a)?e?e?JSON.stringify(e):void 0:[]:e}return y((()=>{h()})),(e,l)=>{const p=u("el-alert"),t=a,y=u("el-button"),m=u("el-switch"),h=u("el-form-item"),P=u("el-col"),S=u("el-row"),A=u("el-input"),C=u("el-divider"),R=u("el-tooltip"),w=u("el-checkbox"),k=u("el-checkbox-group"),q=u("el-form"),N=u("el-card");return r(),d("div",null,[o(t,{bottomPadding:"20px"},{default:n((()=>[o(p,{closable:!1,"show-icon":"",title:"易支付参数说明",description:"通用易支付渠道、请按文档配置即可、同时开启多种支付、我们会以菜单顺序为优先级使用、仅mpay支持非跳转支付、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"success"})])),_:1}),o(N,{style:{margin:"20px 20px 0 20px"}},{header:n((()=>[i("div",b,[_,o(y,{class:"button",onClick:v},{default:n((()=>[s(" 保存设置 ")])),_:1})])])),default:n((()=>[o(q,{ref_key:"formRef",ref:U,rules:x.value,model:g,"label-width":"120px"},{default:n((()=>[o(S,null,{default:n((()=>[o(P,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[o(h,{label:"启用当前支付",prop:"payEpayPid"},{default:n((()=>[o(m,{modelValue:g.payEpayStatus,"onUpdate:modelValue":l[0]||(l[0]=a=>g.payEpayStatus=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(S,null,{default:n((()=>[o(P,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[o(h,{label:"商户PID",prop:"payEpayPid"},{default:n((()=>[o(A,{modelValue:g.payEpayPid,"onUpdate:modelValue":l[1]||(l[1]=a=>g.payEpayPid=a),placeholder:"请填写商户PID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(S,null,{default:n((()=>[o(P,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[o(h,{label:"商户秘钥",prop:"payEpaySecret"},{default:n((()=>[o(A,{modelValue:g.payEpaySecret,"onUpdate:modelValue":l[2]||(l[2]=a=>g.payEpaySecret=a),placeholder:"请填写商户秘钥",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(S,null,{default:n((()=>[o(P,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[o(h,{label:"支付通知地址",prop:"payEpaySecret"},{default:n((()=>[o(A,{modelValue:g.payEpayNotifyUrl,"onUpdate:modelValue":l[3]||(l[3]=a=>g.payEpayNotifyUrl=a),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(S,null,{default:n((()=>[o(P,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[o(h,{label:"支付回调地址",prop:"payEpaySecret"},{default:n((()=>[o(A,{modelValue:g.payEpayReturnUrl,"onUpdate:modelValue":l[4]||(l[4]=a=>g.payEpayReturnUrl=a),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(C),o(S,null,{default:n((()=>[o(P,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[o(h,{label:"支付请求地址",prop:"payEpayApiPayUrl"},{default:n((()=>[o(A,{modelValue:g.payEpayApiPayUrl,"onUpdate:modelValue":l[5]||(l[5]=a=>g.payEpayApiPayUrl=a),placeholder:"请填写平台支付请求地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(S,null,{default:n((()=>[o(P,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[o(h,{label:"商户查询地址",prop:"payEpayApiQueryUrl"},{default:n((()=>[o(A,{modelValue:g.payEpayApiQueryUrl,"onUpdate:modelValue":l[6]||(l[6]=a=>g.payEpayApiQueryUrl=a),placeholder:"请填写平台查询商户地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(C),o(S,null,{default:n((()=>[o(P,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[o(h,{label:"是否开启跳转支付",prop:"payEpayRedirect","label-width":"130px"},{default:n((()=>[o(R,{class:"box-item",effect:"dark",content:"请注意、仅mapi支持不跳转支付、其他都需要为跳转支付、不开启跳转支付表示购买页面显示二维码直接扫码购买、跳转支付表示前往新页面！",placement:"right"},{default:n((()=>[o(m,{modelValue:g.payEpayRedirect,"onUpdate:modelValue":l[7]||(l[7]=a=>g.payEpayRedirect=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),o(S,null,{default:n((()=>[o(P,{xs:24,md:24,lg:24,xl:24},{default:n((()=>[o(h,{label:"开启支付渠道",prop:"payEpayChannel"},{default:n((()=>[o(k,{modelValue:g.payEpayChannel,"onUpdate:modelValue":l[8]||(l[8]=a=>g.payEpayChannel=a),size:"small"},{default:n((()=>[(r(),d(c,null,f(V,(a=>o(w,{key:a.value,border:"",label:a.value},{default:n((()=>[s(E(a.label),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof g&&g(x);export{x as default};
