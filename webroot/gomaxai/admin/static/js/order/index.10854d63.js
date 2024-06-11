
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.227bd596.js";import{Z as a,d as l,r as t,Q as o,x as r,h as s,R as u,o as n,c as d,e as i,f as p,S as f,U as c,b as m,l as w,w as b,I as h,t as g,P as y,E as v,q as _}from"../main-32165e1b.js";import{P as x,q as z,r as I,s as V}from"../index/index.4485e23d.js";import{u as k}from"../utcformatTime/utcformatTime.f6db2c52.js";const C=e=>a.get("order/queryAll",{params:e}),j=e=>a.post("order/delete",e),U=()=>a.post("order/deleteNotPay"),P=l({__name:"index",setup(a){const l=t(!1),_=t(!1),P=t([]),q=t(),A=t(0),Y=t(0),D=o({userId:"",platform:"",status:"",page:1,size:15}),M=t([]);async function S(){l.value=!0;try{const e=await C(D);l.value=!1;const{rows:a,count:t,total_price:o}=e.data;A.value=t,M.value=a,Y.value=o}catch(e){l.value=!1}}async function R(e){const a=await y.queryAllUser({size:30,username:e});P.value=a.data.rows}async function T(){_.value=!0;try{await U(),v.success("删除未支付订单完成!"),await S(),_.value=!1}catch(e){v.error("删除未支付订单失败!"),_.value=!1}}return r((()=>{S()})),(a,t)=>{const o=s("el-option"),r=s("el-select"),y=s("el-form-item"),C=s("el-button"),U=s("el-popconfirm"),E=s("el-form"),F=s("el-statistic"),H=e,J=s("el-table-column"),L=s("el-tag"),N=s("el-table"),Q=s("el-pagination"),Z=s("el-row"),B=u("loading");return n(),d("div",null,[i(H,{class:"flex justify-between items-center"},{default:p((()=>[i(E,{ref_key:"formRef",ref:q,inline:!0,model:D},{default:p((()=>[i(y,{label:"用户名称",prop:"userId"},{default:p((()=>[i(r,{modelValue:D.userId,"onUpdate:modelValue":t[0]||(t[0]=e=>D.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":R,style:{width:"192px"}},{default:p((()=>[(n(!0),d(f,null,c(m(P),(e=>(n(),h(o,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(y,{label:"支付平台",prop:"platform"},{default:p((()=>[i(r,{modelValue:D.platform,"onUpdate:modelValue":t[1]||(t[1]=e=>D.platform=e),clearable:"",placeholder:"请选择支付平台","remote-show-suffix":"",style:{width:"192px"}},{default:p((()=>[(n(!0),d(f,null,c(m(x),(e=>(n(),h(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(y,{label:"支付状态",prop:"status"},{default:p((()=>[i(r,{modelValue:D.status,"onUpdate:modelValue":t[2]||(t[2]=e=>D.status=e),clearable:"",placeholder:"请选择支付状态","remote-show-suffix":"",style:{width:"192px"}},{default:p((()=>[(n(!0),d(f,null,c(m(z),(e=>(n(),h(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(y,null,{default:p((()=>[i(C,{type:"primary",onClick:S},{default:p((()=>[w(" 查询 ")])),_:1}),i(C,{onClick:t[3]||(t[3]=e=>{return null==(a=m(q))||a.resetFields(),void S();var a})},{default:p((()=>[w(" 重置 ")])),_:1}),i(U,{title:"确认删除所有未支付订单么?",onConfirm:T},{reference:p((()=>[i(C,{type:"danger"},{default:p((()=>[w("删除所有未支付订单")])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),i(F,{title:"累计已支付订单金额",value:m(Y)},null,8,["value"])])),_:1}),i(H,{bottomPadding:"20px",bottomMargin:"0px"},{default:p((()=>[b((n(),h(N,{border:"",data:m(M),height:"67vh",style:{width:"100%"},size:"large","tooltip-options":{}},{default:p((()=>[i(J,{fixed:"",prop:"orderId",label:"订单ID",width:"315"}),i(J,{prop:"userInfo.username",label:"用户名称",width:"180"}),i(J,{prop:"userInfo.email",label:"用户邮箱",width:"200"}),i(J,{prop:"goodsInfo.name",label:"套餐名称",width:"140"}),i(J,{prop:"price",label:"商品单价",width:"110"}),i(J,{prop:"count",label:"购买数量",width:"90",align:"center"}),i(J,{prop:"total",label:"订单总价",width:"90",align:"center"}),i(J,{prop:"total",label:"支付平台",width:"90",align:"center"},{default:p((e=>[w(g(m(I)[e.row.payPlatform]),1)])),_:1}),i(J,{prop:"status",label:"支付状态",width:"90",align:"center"},{default:p((e=>[i(L,{type:1===e.row.status?"success":"warning"},{default:p((()=>[w(g(m(V)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),i(J,{prop:"createdAt",label:"订单时间",width:"200",fixed:"right"},{default:p((e=>[w(g(m(k)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),i(J,{fixed:"right",label:"操作"},{default:p((e=>[i(U,{title:"确认删除此订单么、删除订单不可恢复?",width:"400","icon-color":"red",onConfirm:a=>async function(e){const{orderId:a}=e;await j({orderId:a}),v.success("删除订单完成!"),S()}(e.row)},{reference:p((()=>[i(C,{link:"",type:"danger",size:"small",loading:m(_)},{default:p((()=>[w(" 删除订单 ")])),_:1},8,["loading"])])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[B,m(l)]]),i(Z,{class:"flex justify-end mt-5"},{default:p((()=>[i(Q,{"current-page":D.page,"onUpdate:currentPage":t[4]||(t[4]=e=>D.page=e),"page-size":D.size,"onUpdate:pageSize":t[5]||(t[5]=e=>D.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:m(A),onSizeChange:S,onCurrentChange:S},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof _&&_(P);export{P as default};
