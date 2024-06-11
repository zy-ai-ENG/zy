
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.129bbe0b.js";import{a}from"../userBalance/userBalance.94b9cd25.js";import{B as l,G as t,U as r,y as o}from"../index/index.5ad1a92e.js";import{u}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as s,r as d,Q as n,x as i,h as p,R as c,o as m,c as g,e as f,f as h,S as w,U as b,b as v,l as y,w as _,I as x,t as C,P as z,q as j}from"../main-dd192319.js";const I=s({__name:"accountLog",setup(s){const j=d(),I=d(0),M=d(!1),k=n({userId:"",rechargeType:"",packageId:"",page:1,size:15});n({model3Count:[{required:!0,message:"请填写赠送基础模型额度",trigger:"blur"}],model4Count:[{required:!0,message:"请填写赠送高级模型额度",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写赠送MJ绘画额度",trigger:"blur"}]});const T=d([]),U=d([]);async function D(){try{M.value=!0;const e=await a.queryUserAccountLog(k),{rows:l,count:t}=e.data;M.value=!1,I.value=t,U.value=l}catch(e){M.value=!1}}async function q(e){const a=await z.queryAllUser({size:30,keyword:e});T.value=a.data.rows}return i((()=>D())),(a,s)=>{const d=p("el-option"),n=p("el-select"),i=p("el-form-item"),z=p("el-button"),V=p("el-form"),A=e,J=p("el-avatar"),Y=p("el-table-column"),B=p("el-tag"),P=p("el-table"),S=p("el-pagination"),G=p("el-row"),L=c("loading");return m(),g("div",null,[f(A,null,{default:h((()=>[f(V,{ref_key:"formRef",ref:j,inline:!0,model:k},{default:h((()=>[f(i,{label:"用户名称",prop:"userId"},{default:h((()=>[f(n,{modelValue:k.userId,"onUpdate:modelValue":s[0]||(s[0]=e=>k.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"昵称|手机号|邮箱[模糊搜索]","remote-show-suffix":"","remote-method":q,style:{width:"192px"}},{default:h((()=>[(m(!0),g(w,null,b(T.value,(e=>(m(),x(d,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(i,{label:"充值类型",prop:"rechargeType"},{default:h((()=>[f(n,{modelValue:k.rechargeType,"onUpdate:modelValue":s[1]||(s[1]=e=>k.rechargeType=e),placeholder:"请选择充值类型",clearable:"",style:{width:"192px"}},{default:h((()=>[(m(!0),g(w,null,b(v(l),(e=>(m(),x(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(i,null,{default:h((()=>[f(z,{type:"primary",onClick:D},{default:h((()=>[y(" 查询 ")])),_:1}),f(z,{onClick:s[2]||(s[2]=e=>{return null==(a=j.value)||a.resetFields(),void D();var a})},{default:h((()=>[y(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),f(A,{bottomPadding:"20px",bottomMargin:"0px"},{default:h((()=>[_((m(),x(P,{border:"",height:"66vh",data:U.value,style:{width:"100%"},size:"large"},{default:h((()=>[f(Y,{prop:"avatar",label:"用户头像",width:"120",fixed:""},{default:h((e=>[f(J,{src:e.row.avatar},null,8,["src"])])),_:1}),f(Y,{prop:"username",label:"用户名称",width:"150",fixed:""}),f(Y,{prop:"id",label:"用户ID",width:"80"}),f(Y,{prop:"uid",label:"订单ID",width:"130"}),f(Y,{prop:"email",label:"用户邮箱",width:"250",align:"left"}),f(Y,{prop:"balanceInfo.useModel4Count",label:"充值类型",width:"160",align:"center"},{default:h((e=>[f(B,{type:"success"},{default:h((()=>{var a,l;return[y(C((null==(a=e.row)?void 0:a.rechargeType)?v(t)[null==(l=e.row)?void 0:l.rechargeType]:"---"),1)]})),_:2},1024)])),_:1}),f(Y,{prop:"model3Count",label:"基础模型额度",width:"120",align:"center"}),f(Y,{prop:"model4Count",label:"高级模型额度",width:"120",align:"center"}),f(Y,{prop:"drawMjCount",label:"MJ余额额度",width:"120",align:"center"}),f(Y,{prop:"model3Dis",label:"本次基础模型变更",width:"120",align:"center"}),f(Y,{prop:"model4Dis",label:"本次高级模型变更",width:"120",align:"center"}),f(Y,{prop:"drawMjDis",label:"本次MJ余额变更",width:"120",align:"center"}),f(Y,{label:"额度有效期",width:"170",align:"center"},{default:h((e=>[f(B,{type:"success"},{default:h((()=>{var a,l;return[y(C((null==(a=e.row)?void 0:a.days)<=0?"永久时效":`${null==(l=e.row)?void 0:l.days}天`),1)]})),_:2},1024)])),_:1}),f(Y,{prop:"status",label:"用户状态",width:"120",align:"center"},{default:h((({row:e})=>[f(B,{type:v(r)[e.status]},{default:h((()=>[y(C(v(o)[e.status]),1)])),_:2},1032,["type"])])),_:1}),f(Y,{prop:"createdAt",label:"充值时间",width:"200",align:"center"},{default:h((e=>[y(C(v(u)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])),[[L,M.value]]),f(G,{class:"flex justify-end mt-5"},{default:h((()=>[f(S,{"current-page":k.page,"onUpdate:currentPage":s[3]||(s[3]=e=>k.page=e),"page-size":k.size,"onUpdate:pageSize":s[4]||(s[4]=e=>k.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:I.value,onSizeChange:D,onCurrentChange:D},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof j&&j(I);export{I as default};
