
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.129bbe0b.js";import{a as l}from"../config/config.bd9b8a25.js";import{d as a,Q as t,r as i,x as o,h as c,o as f,c as u,e as d,f as n,a as r,l as p,E as s,q as m}from"../main-dd192319.js";const _={class:"flex justify-between"},x=r("b",null,"微信开发者配置设置",-1),h={style:{height:"58vh","overflow-y":"auto","overflow-x":"hidden"}},g=a({__name:"wechat",setup(a){const m=t({wechatRegisterStatus:"",wechatSilentLoginStatus:"",wechatOfficialName:"",wechatOfficialAppId:"",wechatOfficialToken:"",wechatOfficialAppSecret:"",officialSubscribeText:"",officialBindAccountText:"",officialScanLoginText:"",officialAutoReplyText:"",WE_MiNI_APPID:"",WE_MINI_APPSECRET:""}),g=i({wechatOfficialName:[{required:!1,trigger:"blur",message:"请填写微信公众号名称"}],wechatOfficialAppId:[{required:!1,trigger:"blur",message:"请填写微信公众号开发配置 AppId"}],wechatOfficialToken:[{required:!1,trigger:"blur",message:"请填写微信公众号开发配置 Token"}],wechatOfficialAppSecret:[{required:!1,trigger:"blur",message:"请填写微信公众号开发配置 AppSecret"}]}),w=i();async function b(){const e=await l.queryConfig({keys:["wechatOfficialName","wechatOfficialAppId","wechatOfficialToken","wechatOfficialAppSecret","officialSubscribeText","officialBindAccountText","officialScanLoginText","officialAutoReplyText","wechatRegisterStatus","wechatSilentLoginStatus","WE_MiNI_APPID","WE_MINI_APPSECRET"]});Object.assign(m,e.data)}function A(){var e;null==(e=w.value)||e.validate((async e=>{if(e){try{await l.setConfig({settings:(a=m,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),s.success("变更配置信息成功")}catch(t){}b()}else s.error("请填写完整信息");var a}))}return o((()=>{b()})),(l,a)=>{const t=c("el-alert"),i=e,o=c("el-button"),s=c("el-switch"),b=c("el-tooltip"),S=c("el-form-item"),T=c("el-col"),V=c("el-row"),I=c("el-input"),P=c("el-divider"),E=c("el-form"),O=c("el-card");return f(),u("div",null,[d(i,{bottomPadding:"20px"},{default:n((()=>[d(t,{closable:!1,"show-icon":"",title:"微信设置说明[仔细阅读]",description:"系统微信登录通过关联公众号实现[请务必注册为服务号、个人公众号没有二维码等此类权限]、以便于后期联动小程序、开发文档前往微信公众平台 https://mp.weixin.qq.com/ 、拿到开发者配置信息即可、如果用户对公众号发送消息、我们将会从自定义回复管理当中的内容进行匹配自动回复、如果没有匹配到结果则回复下面设置的自定义回复默认信息、同时别忘记在微信公众号平台将自己的ip加为ip白名单、配置位置为公众号后台->基本配置：服务复制参考 https://域名/api/official/notify 将域名修改为您的域名 下方Token对应自己后台设置的Token、加密秘钥随机即可、当设置不指定首页并且配置了微信登录即可默认打开静默登录！",type:"warning"})])),_:1}),d(O,{style:{margin:"20px 20px 0 20px"}},{header:n((()=>[r("div",_,[x,d(o,{class:"button",onClick:A},{default:n((()=>[p(" 保存设置 ")])),_:1})])])),default:n((()=>[r("div",h,[d(E,{ref_key:"formRef",ref:w,rules:g.value,model:m,"label-width":"170px"},{default:n((()=>[d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"是否开启微信扫码注册",prop:"wechatRegisterStatus"},{default:n((()=>[d(b,{class:"box-item",effect:"dark",content:"如您启用微信注册、则用户端则可以通过微信扫码方式注册或登录！",placement:"right"},{default:n((()=>[d(s,{modelValue:m.wechatRegisterStatus,"onUpdate:modelValue":a[0]||(a[0]=e=>m.wechatRegisterStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"是否开启微信静默",prop:"wechatSilentLoginStatus"},{default:n((()=>[d(b,{class:"box-item",effect:"dark",content:"如您启用静默登录、则用户在微信环境打开则直接自动登录！",placement:"right"},{default:n((()=>[d(s,{modelValue:m.wechatSilentLoginStatus,"onUpdate:modelValue":a[1]||(a[1]=e=>m.wechatSilentLoginStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"公众号名称",prop:"wechatOfficialName"},{default:n((()=>[d(I,{modelValue:m.wechatOfficialName,"onUpdate:modelValue":a[2]||(a[2]=e=>m.wechatOfficialName=e),placeholder:"公众号名称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"AppId",prop:"wechatOfficialAppId"},{default:n((()=>[d(I,{modelValue:m.wechatOfficialAppId,"onUpdate:modelValue":a[3]||(a[3]=e=>m.wechatOfficialAppId=e),placeholder:"公众号开发信息 AppId",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"Token",prop:"wechatOfficialToken"},{default:n((()=>[d(I,{modelValue:m.wechatOfficialToken,"onUpdate:modelValue":a[4]||(a[4]=e=>m.wechatOfficialToken=e),placeholder:"公众号Token配置",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"AppSecret",prop:"wechatOfficialAppSecret"},{default:n((()=>[d(I,{modelValue:m.wechatOfficialAppSecret,"onUpdate:modelValue":a[5]||(a[5]=e=>m.wechatOfficialAppSecret=e),placeholder:"公众号开发信息 AppSecret",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(P),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"订阅公众号欢迎消息",prop:"officialSubscribeText"},{default:n((()=>[d(I,{modelValue:m.officialSubscribeText,"onUpdate:modelValue":a[6]||(a[6]=e=>m.officialSubscribeText=e),type:"textarea",rows:3,placeholder:"订阅你的公众号后对他的欢迎语！",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"绑定账号回复消息",prop:"officialBindAccountText"},{default:n((()=>[d(I,{modelValue:m.officialBindAccountText,"onUpdate:modelValue":a[7]||(a[7]=e=>m.officialBindAccountText=e),type:"textarea",rows:3,placeholder:"非微信登录用户首次绑定微信的欢迎语",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"扫码登录回复消息",prop:"officialScanLoginText"},{default:n((()=>[d(I,{modelValue:m.officialScanLoginText,"onUpdate:modelValue":a[8]||(a[8]=e=>m.officialScanLoginText=e),type:"textarea",rows:3,placeholder:"用户扫码登录成功时自动回复的内容",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"自定义回复的默认信息",prop:"officialAutoReplyText"},{default:n((()=>[d(I,{modelValue:m.officialAutoReplyText,"onUpdate:modelValue":a[9]||(a[9]=e=>m.officialAutoReplyText=e),type:"textarea",rows:3,placeholder:"当用户对公众号发了消息不在自动回复列表时回复的兜底内容",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(P),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"小程序APPID",prop:"WE_MiNI_APPID"},{default:n((()=>[d(I,{modelValue:m.WE_MiNI_APPID,"onUpdate:modelValue":a[10]||(a[10]=e=>m.WE_MiNI_APPID=e),placeholder:"请输入小程序APPID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(V,null,{default:n((()=>[d(T,{xs:24,md:20,lg:15,xl:12},{default:n((()=>[d(S,{label:"小程序APPSECRET",prop:"WE_MINI_APPSECRET"},{default:n((()=>[d(I,{modelValue:m.WE_MINI_APPSECRET,"onUpdate:modelValue":a[11]||(a[11]=e=>m.WE_MINI_APPSECRET=e),"show-password":"",placeholder:"请输入小程序APPSECRET",vis:"",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])])),_:1})])}}});"function"==typeof m&&m(g);export{g as default};
