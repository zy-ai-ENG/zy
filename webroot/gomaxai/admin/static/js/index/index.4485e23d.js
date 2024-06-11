
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
const e=[{value:0,label:"待激活"},{value:1,label:"正常"},{value:2,label:"已封禁"},{value:3,label:"黑名单"}],l=[{value:"super",label:"超级管理员"},{value:"admin",label:"内置管理员"},{value:"manager",label:"普通管理员"}].reduce(((e,l,a)=>(e[l.value]=l.label,e)),{}),a={0:"待激活",1:"正常",2:"已封禁",3:"黑名单"},u={0:"info",1:"success",2:"danger",3:"danger"},n={1:"注册赠送",2:"受邀请赠送",3:"邀请人赠送",4:"购买套餐赠送",5:"管理员赠送",6:"扫码支付",7:"绘画失败退款",8:"签到奖励"},t=[{value:1,label:"注册赠送"},{value:2,label:"受邀请赠送"},{value:3,label:"邀请人赠送"},{value:4,label:"购买套餐赠送"},{value:5,label:"管理员赠送"},{value:6,label:"扫码支付"},{value:7,label:"绘画失败退款"},{value:8,label:"签到奖励"}],v={0:"关闭",1:"开启"},i={0:"danger",1:"success"},b=[{value:0,label:"禁用"},{value:1,label:"启动"}],s=[{value:0,label:"未使用"},{value:1,label:"已使用"}],c=[{value:0,label:"未推荐"},{value:1,label:"已推荐"}],r=[{value:0,label:"禁用"},{value:1,label:"启用"},{value:3,label:"待审核"},{value:4,label:"拒绝共享"},{value:5,label:"通过共享"}],d=[{value:0,label:"未启用"},{value:1,label:"已启用"}],o=[{value:0,label:"待审核"},{value:1,label:"已通过"},{value:-1,label:"已拒绝"}],h=[{value:0,label:"未推荐"},{value:1,label:"已推荐"}],g=[{value:1,label:"支付宝"},{value:2,label:"微信"}],m=[{value:1,label:"正在排队"},{value:2,label:"正在绘制"},{value:3,label:"绘制完成"},{value:4,label:"绘制失败"},{value:5,label:"绘制超时"}],M={0:"danger",1:"success",2:"info"},p={"-1":"欠费锁定",0:"未启用",1:"已启用",3:"待审核",4:"拒绝共享",5:"通过共享"},k=[{value:0,label:"全部"},{value:1,label:"启用"},{value:2,label:"停用"}],A=[{value:1,label:"Fast(快速)"},{value:2,label:"Relax(休闲)"},{value:3,label:"Turbo"}],y=[{label:"Bug反馈",value:"bug"},{label:"意见反馈",value:"advice"},{label:"建议反馈",value:"suggestion"}],C=k.reduce(((e,l,a)=>(e[l.value]=l.label,e)),{}),I=["gpt-4-all","gpt-4-dalle","gpt-4-v","gpt-4-1106-preview","gpt-4-vision-preview","gpt-4","gpt-4-0613","gpt-4-32k","gpt-4-32k-0314","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-1106","gpt-3.5-turbo-instruct","gpt-3.5-turbo-0613","gpt-3.5-turbo-0301","gpt-3.5-turbo-16k-0613","gpt-3.5-turbo-16k","text-davinci-003","text-davinci-002","code-davinci-002","tts-1","tts-1-1106","tts-1-hd","tts-1-hd-1106","dall-e-3","dall-e-2","babbage-002","davinci-002","babbage","curie","ada","davinci","text-embedding-ada-002","text-curie-001","text-babbage-001","text-ada-001","text-moderation-latest","text-moderation-stable","whisper-1","mj-chat","suno-v3","gemini-pro","gemini-pro-vision","claude-3-opus-20240229","claude-3-sonnet-20240229","claude-3-haiku-20240307","stable-diffusion","moonshot-v1-8k","moonshot-v1-32k","moonshot-v1-128k","search-gpts","Balanced"],S=[{value:"mj",label:"MidjourneyAi"},{value:"DALL-E2",label:"DALL-E2"}],L=[{value:0,label:"未支付"},{value:1,label:"已支付"},{value:2,label:"支付失败"},{value:3,label:"支付超时"}],f={0:"未支付",1:"已支付",2:"支付失败",3:"支付超时"},x=[{value:"epay",label:"易支付"},{value:"hupi",label:"虎皮椒"},{value:"mpay",label:"码支付"},{value:"wechat",label:"微信支付"},{value:"alipay",label:"支付宝支付"}],B={epay:"易支付",hupi:"虎皮椒",mpay:"码支付",wechat:"微信支付",alipay:"支付宝支付"},E=[{value:1,label:"等待中"},{value:2,label:"绘制中"},{value:3,label:"绘制完成"},{value:4,label:"绘制失败"},{value:5,label:"绘制超时"}],P=[{value:"system",label:"系统"},{value:"user",label:"用户"}],G={1:"排队中",2:"绘制中",3:"绘制完成",4:"绘制失败",5:"绘制超时"},O=[{value:"百度云检测",label:"百度云检测"},{value:"自定义检测",label:"自定义检测"},{value:"GoMaxAI检测",label:"GoMaxAI检测"}],j=[{value:1,label:"通用模型"},{value:2,label:"百度 - [千帆大模型]"},{value:3,label:"清华 - [智谱大模型]"},{value:4,label:"讯飞 - [星火大模型]"}],R={1:"OPENAI",2:"百度文心",3:"清华智谱",4:"讯飞星火"},w={1:I,2:["ERNIE-Bot","ERNIE-Bot-turbo","ERNIE-Bot-4.0","BLOOMZ-7B","Llama-2-7b-chat","Llama-2-13b-chat","Qianfan-BLOOMZ-7B-compressed","Qianfan-Chinese-Llama-2-7B","AquilaChat-7B"],3:["chatglm_pro","chatglm_std","chatglm_lite","chatglm_lite_32k"],4:["星火大模型V1.5","星火大模型V2.0","星火大模型V3.0"]},T=[{value:1,label:"普通余额"},{value:2,label:"高级余额"}],D={1:"APIKey",2:"ClientId",3:"AppKey",4:"APIKey"},U=[{name:"用户管理",value:"UserMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"用户数据列表",value:"UserMenuList"},{label:"用户账户明细",value:"AccountLogMenu"},{label:"用户注册设置",value:"SystemMenuRegister"}]},{name:"注册管理",value:"RegisterMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"用户数据列表",value:"SystemMenuEmail"},{label:"用户账户明细",value:"SystemMenuWechat"},{label:"用户注册设置",value:"AliPhoneMenu"}]},{name:"对话系统",value:"AiMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"对话模型配置",value:"AiMenuInterface"},{label:"模型池设置",value:"AiMenuModels"},{label:"头部预设",value:"AiMenuModelPre"}]},{name:"GPTS",value:"GptsMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"Gpts模型管理",value:"GptsModelList"},{label:"Gpts模型组管理",value:"GptsGrouplList"}]},{name:"数据管理",value:"ChatMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"GPT对话管理",value:"ChatMenuList"},{label:"Dall-E2绘画管理",value:"DrawMenuList"},{label:"MJ绘画管理",value:"MjMenuList"}]},{name:"订单管理",value:"OrderMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"订单列表",value:"OrderMenuList"}]},{name:"套餐管理",value:"PackageMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"套餐设置",value:"PackageMenuList"},{label:"卡密管理",value:"CramiMenuList"}]},{name:"应用管理",value:"AppMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"分类列表",value:"AppMenuClassify"},{label:"应用列表",value:"Application"}]},{name:"分销系统",value:"SalesMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"基础分销配置",value:"SalesBaseManage"},{label:"佣金账户列表",value:"SalesUserManage"},{label:"佣金分销明细",value:"SalesRecordManage"},{label:"提现工单管理",value:"SalesOrderManage"}]},{name:"支付管理",value:"SalesMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"官方支付",value:"WechatConfig"},{label:"易支付",value:"EpayConfig"},{label:"码支付",value:"MpayConfig"},{label:"虎皮椒支付",value:"HupioConfig"}]},{name:"MJ绘画管理",value:"MjMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"绘图历史",value:"MjDrawManage"},{label:"参数配置",value:"MjManage"},{label:"更多设置",value:"MjProxyManage"},{label:"提示词预设",value:"MjPromptsManage"}]},{name:"存储配置",value:"StorageMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"腾讯云COS",value:"StorageTencent"},{label:"阿里云OSS",value:"StorageAli"},{label:"chevereto图床",value:"StorageChevereto"}]},{name:"用户端设置",value:"ClientMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"基础配置",value:"ClientBaseConfig"},{label:"用户协议",value:"ClientAgreement"},{label:"隐私政策",value:"ClientPolicy"},{label:"用户端logo",value:"ClientCopyRightConfig"},{label:"动态菜单",value:"ClientMenuConfig"},{label:"公告设置",value:"SystemMenuNotice"},{label:"思维导图",value:"SystemMenuMind"},{label:"访客设置",value:"SystemMenuVisitor"},{label:"签到奖励赠送",value:"SignInMenu"},{label:"UI显示设置",value:"VisibleMenu"},{label:"对话小尾巴",value:"TailSet"}]},{name:"风控管理",value:"SecureMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"违规检测记录",value:"SensitiveViolationLog"},{label:"百度云敏感词",value:"SensitiveBaiduyun"},{label:"GoMaxAi敏感词",value:"SensitiveGoMaxAi"},{label:"自定义敏感词",value:"SensitiveCustom"},{label:"自定义回复预设",value:"ReplyMenuList"}]},{name:"权限管理",value:"AccessMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"权限分配",value:"AccessList"}]},{name:"系统设置",value:"SystemMenu",checkAll:!1,isIndeterminate:!1,checked:[],children:[{label:"百度统计设置",value:"SystemMenuBase"},{label:"底部版权信息",value:"CopyrightConfig"},{label:"系统主题设置",value:"ThemeConfig"},{label:"迁移助手",value:"UpgradeConfig"}]}],V={map:()=>{const e=new Map;return U.forEach((l=>{l.children.length&&l.children.forEach((l=>{e.set(l.value,l.label)}))})),e}};export{k as A,s as C,T as D,r as E,y as F,i as I,l as M,o as O,x as P,d as Q,c as R,O as T,u as U,m as W,C as a,V as b,U as c,w as d,D as e,I as f,R as g,j as h,P as i,p as j,S as k,E as l,M as m,h as n,G as o,A as p,L as q,B as r,f as s,b as t,v as u,g as v,a as w,e as x,t as y,n as z};
