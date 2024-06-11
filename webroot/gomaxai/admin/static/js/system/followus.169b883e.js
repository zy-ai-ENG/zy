
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as a}from"../index/index.c9f6880f.js";import{a as e}from"../config/config.f8de71c3.js";import{a as l}from"./system.a11a12d4.js";import{d as t,G as s,r,y as o,j as n,o as i,c,f as u,g as m,b as d,h as g,e as f,af as p,J as w,P as h,p as b,k as y,q as _,s as v}from"../main-646ffc07.js";const I={class:"flex justify-between"},P=(a=>(b("data-v-ceaa01bc"),a=a(),y(),a))((()=>d("b",null,"微信公众号和微信小程序二维码设置",-1))),j=["src"],k=["src"],x=t({__name:"followus",setup(t){const b=s({wechatImage:"",weMiniProgramImage:"",chatOnline:""}),y=r({wechatImage:[{required:!0,trigger:"blur",message:"微信公众号二维码"}],weMiniProgramImage:[{required:!0,trigger:"blur",message:"微信小程序二维码"}],chatOnline:[{required:!0,trigger:"blur",message:"在线客服地址"}]}),_=r();async function v(){const a=await e.queryConfig({keys:["wechatImage","weMiniProgramImage","chatOnline"]});Object.assign(b,a.data)}function x(){var a;null==(a=_.value)||a.validate((async a=>{if(a){try{await e.setConfig({settings:(l=b,Object.keys(l).map((a=>({configKey:a,configVal:l[a]}))))}),h.success("变更二维码成功")}catch(t){}v()}else h.error("请填写完整信息");var l}))}const M=(a,e)=>{const t=a.name.split(".")[1],s=new FormData;s.append("filename",a.raw.uid+"."+t),s.append("file",a.raw),s.append("dir","follow-upload"),l.uploadFile(s).then((a=>{const l=a.data;"wechat"===e&&(b.wechatImage=l),"miniProgram"===e&&(b.weMiniProgramImage=l)}))},O=a=>"image/jpeg"!==a.type&&"image/png"!==a.type?(h.error("只支持jpg和png格式"),!1):!(a.size/1024/1024>2)||(h.error("图片不能大于2M!"),!1);return o((()=>{v()})),(e,l)=>{const t=n("el-alert"),s=a,r=n("el-button"),o=n("Plus"),h=n("el-icon"),v=n("el-form-item"),q=n("el-input"),C=n("el-col"),V=n("el-row"),F=n("el-form"),G=n("el-card");return i(),c("div",null,[u(s,{bottomPadding:"20px"},{default:m((()=>[u(t,{closable:!1,"show-icon":"",title:"关注我们说明",description:"关注我们上传微信公众号和小程序二维码，前端自动显示！",type:"success"})])),_:1}),u(G,{style:{margin:"20px"}},{header:m((()=>[d("div",I,[P,u(r,{class:"button",onClick:x},{default:m((()=>[g(" 保存设置 ")])),_:1})])])),default:m((()=>[u(F,{ref_key:"formRef",ref:_,rules:y.value,model:b,"label-width":"130px"},{default:m((()=>[u(V,null,{default:m((()=>[u(C,{xs:24,md:20,lg:15,xl:12},{default:m((()=>[u(v,{label:"公众号二维码",prop:"wechatImage"},{default:m((()=>[u(f(p),{class:"avatar-uploader",action:"","auto-upload":!1,"show-file-list":!1,onChange:l[0]||(l[0]=a=>M(a,"wechat")),"before-upload":O},{default:m((()=>[b.wechatImage?(i(),c("img",{key:0,src:b.wechatImage,class:"avatar"},null,8,j)):(i(),w(h,{key:1,class:"avatar-uploader-icon"},{default:m((()=>[u(o)])),_:1}))])),_:1})])),_:1}),u(v,{label:"小程序二维码",prop:"weMiniProgramImage"},{default:m((()=>[u(f(p),{class:"avatar-uploader",action:"","auto-upload":!1,"show-file-list":!1,onChange:l[1]||(l[1]=a=>M(a,"miniProgram")),"before-upload":O},{default:m((()=>[b.weMiniProgramImage?(i(),c("img",{key:0,src:b.weMiniProgramImage,class:"avatar"},null,8,k)):(i(),w(h,{key:1,class:"avatar-uploader-icon"},{default:m((()=>[u(o)])),_:1}))])),_:1})])),_:1}),u(v,{label:"在线客服地址",prop:"chatOnline"},{default:m((()=>[u(q,{modelValue:b.chatOnline,"onUpdate:modelValue":l[2]||(l[2]=a=>b.chatOnline=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1})])}}});"function"==typeof v&&v(x);const M=_(x,[["__scopeId","data-v-ceaa01bc"]]);export{M as default};