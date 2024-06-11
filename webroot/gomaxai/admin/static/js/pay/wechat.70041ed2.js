
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c9f6880f.js";import{a as l}from"../config/config.f8de71c3.js";import{d as a,G as p,r as t,y as d,j as u,o,c as r,f as n,g as y,b as i,h as c,P as f,s as A}from"../main-646ffc07.js";const h={class:"flex justify-between"},s=i("b",null,"官方微信支付参数设置",-1),m=i("h4",null,"微信支付",-1),_=i("h4",null,"支付宝支付",-1),W=a({__name:"wechat",setup(a){const A=p({payWechatStatus:"",payWeChatMchId:"",payWeChatSecret:"",payWeChatNotifyUrl:"",payWeChatH5Url:"",payWeChatPublicKey:"",payWeChatPrivateKey:"",payWeChatAppId:"",payWeMiniAppId:"",WE_APP_APPID:"",payAliPublicSecret:"",payAliWebAppId:"",payAliWebSecret:"",payAliAppAppId:"",payAliAppSecret:""}),W=t({payWechatStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}]}),b=t();async function V(){const e=await l.queryConfig({keys:["payWeChatSecret","payWeChatNotifyUrl","payWeChatH5Url","payWeChatAppId","payWeMiniAppId","payWechatStatus","payWeChatMchId","payWeChatPublicKey","payWeChatPrivateKey","WE_APP_APPID","payAliPublicSecret","payAliWebAppId","payAliWebSecret","payAliAppAppId","payAliAppSecret"]});Object.assign(A,e.data)}function C(){var e;null==(e=b.value)||e.validate((async e=>{if(!A.payWeChatAppId&&!A.payWeMiniAppId)return f.error("微信公众号AppId 和 微信小程序AppId 必填一个");if(e){try{await l.setConfig({settings:(a=A,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),f.success("变更配置信息成功")}catch(p){}V()}else f.error("请填写完整信息");var a}))}return d((()=>{V()})),(l,a)=>{const p=u("el-alert"),t=e,d=u("el-button"),f=u("el-switch"),V=u("el-form-item"),I=u("el-col"),P=u("el-row"),S=u("el-input"),U=u("el-form"),g=u("el-card");return o(),r("div",null,[n(t,{bottomPadding:"20px"},{default:y((()=>[n(p,{closable:!1,"show-icon":"",title:"官方微信支付参数说明",description:"官方微信支付设置、同时开启多个支付、我们以微信支付优先级为最高、在pc端我们会调用native支付、在微信环境内、我们将调用Jsapi支付、请确认您的微信支付已经申请了支付权限、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"warning"})])),_:1}),n(g,{style:{margin:"20px 20px 0 20px"}},{header:y((()=>[i("div",h,[s,n(d,{class:"button",onClick:C},{default:y((()=>[c(" 保存设置 ")])),_:1})])])),default:y((()=>[n(U,{ref_key:"formRef",ref:b,rules:W.value,model:A,"label-width":"140px"},{default:y((()=>[n(P,null,{default:y((()=>[n(I,{xs:24,md:20,lg:15,xl:12},{default:y((()=>[n(V,{label:"启用当前支付",prop:"payWechatStatus"},{default:y((()=>[n(f,{modelValue:A.payWechatStatus,"onUpdate:modelValue":a[0]||(a[0]=e=>A.payWechatStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,{xs:24,md:20,lg:15,xl:12},{default:y((()=>[n(V,{label:"支付通知地址",prop:"payWeChatNotifyUrl"},{default:y((()=>[n(S,{modelValue:A.payWeChatNotifyUrl,"onUpdate:modelValue":a[1]||(a[1]=e=>A.payWeChatNotifyUrl=e),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,{gutter:24},{default:y((()=>[n(I,{span:12},{default:y((()=>[m,n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"微信支付商户ID",prop:"payWeChatMchId"},{default:y((()=>[n(S,{modelValue:A.payWeChatMchId,"onUpdate:modelValue":a[2]||(a[2]=e=>A.payWeChatMchId=e),placeholder:"请填写微信支付商户ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"微信支付商户秘钥",prop:"payWeChatSecret"},{default:y((()=>[n(S,{modelValue:A.payWeChatSecret,"onUpdate:modelValue":a[3]||(a[3]=e=>A.payWeChatSecret=e),placeholder:"请填写Secret秘钥",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"公钥地址",prop:"payWeChatPublicKey"},{default:y((()=>[n(S,{modelValue:A.payWeChatPublicKey,"onUpdate:modelValue":a[4]||(a[4]=e=>A.payWeChatPublicKey=e),type:"textarea",rows:6,placeholder:"请填写支付公钥信息（cert.pem文件）",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"私钥地址",prop:"payWeChatPrivateKey"},{default:y((()=>[n(S,{modelValue:A.payWeChatPrivateKey,"onUpdate:modelValue":a[5]||(a[5]=e=>A.payWeChatPrivateKey=e),type:"textarea",rows:6,placeholder:"请填写支付私钥地址（key.pem文件）",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"H5支付通知地址",prop:"payWeChatH5Url"},{default:y((()=>[n(S,{modelValue:A.payWeChatH5Url,"onUpdate:modelValue":a[6]||(a[6]=e=>A.payWeChatH5Url=e),placeholder:"请填写H5支付通知地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"微信公众号AppId",prop:"payWeChatAppId"},{default:y((()=>[n(S,{modelValue:A.payWeChatAppId,"onUpdate:modelValue":a[7]||(a[7]=e=>A.payWeChatAppId=e),placeholder:"请填写微信公众号AppId",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"微信小程序AppId",prop:"payWeMiniAppId"},{default:y((()=>[n(S,{modelValue:A.payWeMiniAppId,"onUpdate:modelValue":a[8]||(a[8]=e=>A.payWeMiniAppId=e),placeholder:"请填写微信小程序AppId",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"微信App AppId",prop:"WE_APP_APPID"},{default:y((()=>[n(S,{modelValue:A.WE_APP_APPID,"onUpdate:modelValue":a[9]||(a[9]=e=>A.WE_APP_APPID=e),placeholder:"请填写微信App AppId",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),n(I,{span:12},{default:y((()=>[_,n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"支付宝支付公钥",prop:"payAliPublicSecret"},{default:y((()=>[n(S,{modelValue:A.payAliPublicSecret,"onUpdate:modelValue":a[10]||(a[10]=e=>A.payAliPublicSecret=e),type:"textarea",rows:6,placeholder:"请填写支付宝支付公钥",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"支付宝网页支付应用id",prop:"payAliWebAppId"},{default:y((()=>[n(S,{modelValue:A.payAliWebAppId,"onUpdate:modelValue":a[11]||(a[11]=e=>A.payAliWebAppId=e),placeholder:"请填写支付宝网页支付应用id",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"支付宝网页支付私钥（PKCS1格式）",prop:"payAliWebSecret"},{default:y((()=>[n(S,{modelValue:A.payAliWebSecret,"onUpdate:modelValue":a[12]||(a[12]=e=>A.payAliWebSecret=e),type:"textarea",rows:6,placeholder:"请填写支付宝网页支付私钥（PKCS1格式）",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"支付宝App支付应用id",prop:"payAliAppAppId"},{default:y((()=>[n(S,{modelValue:A.payAliAppAppId,"onUpdate:modelValue":a[13]||(a[13]=e=>A.payAliAppAppId=e),placeholder:"请填写支付宝App支付应用id",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),n(P,null,{default:y((()=>[n(I,null,{default:y((()=>[n(V,{label:"支付宝App支付私钥（PKCS1格式）",prop:"payAliAppSecret"},{default:y((()=>[n(S,{modelValue:A.payAliAppSecret,"onUpdate:modelValue":a[14]||(a[14]=e=>A.payAliAppSecret=e),type:"textarea",rows:6,placeholder:"请填写支付宝App支付私钥（PKCS1格式）",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof A&&A(W);export{W as default};
