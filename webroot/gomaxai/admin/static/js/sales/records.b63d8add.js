
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.35ca4747.js";import{A as a}from"./sales.d45c9dbd.js";import{d as l,r,Q as t,x as o,h as i,R as n,o as s,c as d,e as u,f as p,l as c,b as m,w as f,I as g,a as v,t as b,q as h}from"../main-78588ec5.js";const _=["src"],w=l({__name:"records",setup(l){const h=r(),w=r(0),y=r(!1),x=t({orderPrice:null,orderId:null,page:1,size:10}),z=r([]);async function P(){try{y.value=!0;const e=await a.queryRecords(x);y.value=!1;const{rows:l,count:r}=e.data;w.value=r,z.value=l}catch(e){y.value=!1}}return o((()=>{P()})),(a,l)=>{const r=i("el-input"),t=i("el-form-item"),o=i("el-button"),I=i("el-form"),A=e,U=i("el-alert"),V=i("el-table-column"),j=i("el-tag"),C=i("el-table"),k=i("el-pagination"),D=i("el-row"),R=n("loading");return s(),d("div",null,[u(A,null,{default:p((()=>[u(I,{ref_key:"formRef",ref:h,inline:!0,model:x},{default:p((()=>[u(t,{label:"工单状态",prop:"orderPrice"},{default:p((()=>[u(r,{modelValue:x.orderPrice,"onUpdate:modelValue":l[0]||(l[0]=e=>x.orderPrice=e),placeholder:"订单金额"},null,8,["modelValue"])])),_:1}),u(t,{label:"订单ID",prop:"orderId"},{default:p((()=>[u(r,{modelValue:x.orderId,"onUpdate:modelValue":l[1]||(l[1]=e=>x.orderId=e),placeholder:"订单ID、模糊搜索"},null,8,["modelValue"])])),_:1}),u(t,null,{default:p((()=>[u(o,{type:"primary",onClick:P},{default:p((()=>[c(" 查询 ")])),_:1}),u(o,{onClick:l[2]||(l[2]=e=>{return null==(a=m(h))||a.resetFields(),void P();var a})},{default:p((()=>[c(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),u(A,{bottomPadding:"20px"},{default:p((()=>[u(U,{"show-icon":"",title:"分销佣金记录流水",description:"每单的佣金会和此用户当前的返佣比例确定、用户返佣比例是可以手动变更的、所以佣金非固定！",type:"success"})])),_:1}),u(A,{bottomPadding:"20px",bottomMargin:"0px"},{default:p((()=>[f((s(),g(C,{border:"",data:m(z),height:"54vh",style:{width:"100%"},size:"large"},{default:p((()=>[u(V,{prop:"id",label:"ID",width:"50"}),u(V,{prop:"inviterAvatar",label:"邀请人头像",width:"120"},{default:p((e=>{var a;return[v("img",{src:null==(a=e.row)?void 0:a.inviterAvatar,style:{height:"50px"}},null,8,_)]})),_:1}),u(V,{prop:"inviterEmail",label:"邀请人邮箱",width:"200"}),u(V,{prop:"inviterUsername",label:"邀请人昵称",width:"200"}),u(V,{prop:"inviteeEmail",label:"被邀人邮箱",width:"200"}),u(V,{prop:"inviteeUsername",label:"邀请人昵称",width:"200"}),u(V,{prop:"orderPrice",align:"center",label:"订单金额"}),u(V,{prop:"commissionAmount",align:"center",label:"佣金金额"},{default:p((e=>[u(j,{type:"success"},{default:p((()=>{var a;return[c(" ￥"+b(null==(a=e.row)?void 0:a.commissionAmount),1)]})),_:2},1024)])),_:1}),u(V,{prop:"commissionPercentage",align:"center",label:"佣金比例"},{default:p((e=>[c(b(`${e.row.commissionPercentage}%`),1)])),_:1})])),_:1},8,["data"])),[[R,m(y)]]),u(D,{class:"flex justify-end mt-5"},{default:p((()=>[u(k,{"current-page":x.page,"onUpdate:currentPage":l[3]||(l[3]=e=>x.page=e),"page-size":x.size,"onUpdate:pageSize":l[4]||(l[4]=e=>x.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:m(w),onSizeChange:P,onCurrentChange:P},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof h&&h(w);export{w as default};
