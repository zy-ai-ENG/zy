
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as e}from"../mj/mj.7fbe74d8.js";import{d as a,r as l,Q as t,h as o,o as n,I as d,f as u,e as r,l as i,b as s,a as m,W as c,E as p,p as h,i as g,n as f}from"../main-78588ec5.js";const I={style:{height:"auto","overflow-y":"auto","overflow-x":"hidden"}},V=(e=>(h("data-v-465a1711"),e=e(),g(),e))((()=>m("p",{style:{margin:"0"}},"分钟",-1))),_=f(a({__name:"mjManger",emits:["fresh"],setup(a,{expose:h,emit:g}){const f=l(!1),_=l(""),b=l(0),j=l();l(!1);const y=t({account:"",channelId:"",guildId:"",authorization:"",mjBotChannelId:"",nijiBotChannelId:"",concurrency:3,timeout:5,awaitQueue:10,weight:10,proxyUrl:"",remark:""}),v=g,w=t({account:[{required:!0,message:"请输入账户名",trigger:"change"},{max:50,message:"最大长度50"}],channelId:[{required:!0,message:"请输入频道ID",trigger:"change"},{max:50,message:"最大长度50"}],guildId:[{required:!0,message:"请输入服务器ID",trigger:"change"},{max:50,message:"最大长度50"}],authorization:[{required:!0,message:"请输入授权令牌",trigger:"change"},{max:500,message:"最大长度500"}],timeout:[{required:!0,message:"超时时间介于1-20分钟之间",trigger:"change"}],concurrency:[{required:!0,message:"并发数介于1-20之间",trigger:"change"}]});const x=async e=>{await(null==e?void 0:e.validate((async e=>{e&&(b.value?await B({id:b.value,...y}):await C(y),v("fresh",!0),f.value=!1,Object.assign(y,{}))})))},C=async a=>(await e.addMjParam(a),p.success("添加MJ账户信息成功！"),!0),U=async a=>await e.getMjParamById(a).then((e=>e.data)),B=async a=>{await e.modifyMjParam(a),p.success("更新MJ账户信息成功！")};return h({open:function(e){f.value=!0,b.value=e||0,_.value=e?"编辑MJ账户信息":"添加MJ账户信息",e&&e>0?U({id:e}).then((e=>{Object.assign(y,e)})):Object.assign(y,{mjId:"",account:"",channelId:"",guildId:"",authorization:"",mjBotChannelId:"",nijiBotChannelId:"",applicationId:"",version:"",sessionId:"",mode:1,concurrency:3,timeout:5,awaitQueue:10,weight:10,proxyUrl:"",remark:""})}}),(e,a)=>{const l=o("el-input"),t=o("el-form-item"),p=o("el-col"),h=o("el-input-number"),g=o("el-row"),b=o("el-form"),v=o("el-button"),C=o("el-dialog");return n(),d(C,{modelValue:s(f),"onUpdate:modelValue":a[11]||(a[11]=e=>c(f)?f.value=e:null),"append-to-body":!0,"close-on-click-modal":!1,title:s(_),top:"80px",fullscreen:!1,width:"1200px","z-index":2e3},{footer:u((()=>[r(v,{onClick:a[9]||(a[9]=e=>f.value=!1)},{default:u((()=>[i(" 取消 ")])),_:1}),r(v,{type:"primary",onClick:a[10]||(a[10]=e=>x(s(j)))},{default:u((()=>[i(" 确认 ")])),_:1})])),default:u((()=>[m("div",I,[r(b,{model:y,"label-position":"right",ref_key:"formRef",ref:j,rules:w,inline:!1,"label-width":"180px"},{default:u((()=>[r(g,{gutter:16},{default:u((()=>[r(p,{span:12},{default:u((()=>[r(t,{label:"账户",prop:"account"},{default:u((()=>[r(l,{modelValue:y.account,"onUpdate:modelValue":a[0]||(a[0]=e=>y.account=e),placeholder:"输入账户",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),r(p,{span:12},{default:u((()=>[r(t,{label:"服务器ID(guildId)",prop:"guildId"},{default:u((()=>[r(l,{modelValue:y.guildId,"onUpdate:modelValue":a[1]||(a[1]=e=>y.guildId=e),placeholder:"输入服务器ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),r(p,{span:12},{default:u((()=>[r(t,{label:"通道ID(channelId)",prop:"channelId"},{default:u((()=>[r(l,{modelValue:y.channelId,"onUpdate:modelValue":a[2]||(a[2]=e=>y.channelId=e),placeholder:"输入频道ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),r(p,{span:12},{default:u((()=>[r(t,{label:"授权令牌(authorization)",prop:"authorization"},{default:u((()=>[r(l,{modelValue:y.authorization,"onUpdate:modelValue":a[3]||(a[3]=e=>y.authorization=e),placeholder:"输入授权令牌",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),r(p,{span:12},{default:u((()=>[r(t,{label:"MJ私信ID",prop:"mjBotChannelId"},{default:u((()=>[r(l,{modelValue:y.mjBotChannelId,"onUpdate:modelValue":a[4]||(a[4]=e=>y.mjBotChannelId=e),placeholder:"输入MJ私信ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),r(p,{span:12},{default:u((()=>[r(t,{label:"niji私信ID",prop:"nijiBotChannelId"},{default:u((()=>[r(l,{modelValue:y.nijiBotChannelId,"onUpdate:modelValue":a[5]||(a[5]=e=>y.nijiBotChannelId=e),placeholder:"输入niji私信ID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),r(p,{span:12},{default:u((()=>[r(t,{label:"任务超时时间",prop:"timeout"},{default:u((()=>[r(h,{modelValue:y.timeout,"onUpdate:modelValue":a[6]||(a[6]=e=>y.timeout=e),min:1,max:20,step:1,"step-strictly":"",placeholder:"任务超时时间","value-on-clear":1,"controls-position":"right"},null,8,["modelValue"]),V])),_:1})])),_:1}),r(p,{span:12},{default:u((()=>[r(t,{label:"权重",prop:"weight"},{default:u((()=>[r(h,{modelValue:y.weight,"onUpdate:modelValue":a[7]||(a[7]=e=>y.weight=e),min:1,max:10,step:1,"step-strictly":"",placeholder:"权重","value-on-clear":1,"controls-position":"right"},null,8,["modelValue"])])),_:1})])),_:1}),r(p,{span:24},{default:u((()=>[r(t,{label:"备注",prop:"remark"},{default:u((()=>[r(l,{modelValue:y.remark,"onUpdate:modelValue":a[8]||(a[8]=e=>y.remark=e),placeholder:"输入备注",clearable:"",maxlength:"200"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-465a1711"]]);export{_ as default};
