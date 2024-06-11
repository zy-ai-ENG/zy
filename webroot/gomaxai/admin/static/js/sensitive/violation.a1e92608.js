
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c9f6880f.js";import{m as a}from"../marked.esm/marked.esm.b7e5160c.js";import{A as l}from"../badWords/badWords.f4ff1e8c.js";import{d as t,r,G as o,y as s,j as n,U as u,o as i,c as d,f as p,g as f,V as m,W as c,e as v,h as w,w as g,J as y,b,t as _,O as h,S as x,P as C,s as k}from"../main-646ffc07.js";import{u as z}from"../utcformatTime/utcformatTime.f6db2c52.js";import{T as V,U as I,y as j,z as O}from"../index/index.5ad1a92e.js";const U=["src"],S={class:"answer"},M=["innerHTML"],T=t({__name:"violation",setup(t){const k=new a.Renderer;a.setOptions({renderer:k,gfm:!0,pedantic:!1,sanitize:!1});const T=r(!1),A=r([]),J=r(),Y=r(0),P=o({userId:"",typeOriginCn:"",page:1,size:10}),W=r([]),q=r(!1),D=o({status:0,id:0});async function G(){(await x.updateUserStatus(D)).success&&C({type:"success",message:"变更用户状态成功！"}),q.value=!1}async function H(){T.value=!0;try{const e=await l.queryViolation(P);T.value=!1;const{rows:a,count:t}=e.data;Y.value=t,W.value=a}catch(e){T.value=!1}}async function L(e){const a=await x.queryAllUser({size:30,username:e});A.value=a.data.rows}return s((()=>{H()})),(l,t)=>{const r=n("el-option"),o=n("el-select"),s=n("el-form-item"),x=n("el-button"),C=n("el-form"),k=e,N=n("el-table-column"),R=n("el-tag"),B=n("el-popover"),F=n("el-table"),K=n("el-pagination"),E=n("el-row"),Q=n("el-dialog"),X=u("loading");return i(),d("div",null,[p(k,null,{default:f((()=>[p(C,{ref_key:"formRef",ref:J,inline:!0,model:P},{default:f((()=>[p(s,{label:"用户名称",prop:"userId"},{default:f((()=>[p(o,{modelValue:P.userId,"onUpdate:modelValue":t[0]||(t[0]=e=>P.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":L,style:{width:"192px"}},{default:f((()=>[(i(!0),d(m,null,c(v(A),(e=>(i(),y(r,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(s,{label:"检测平台",prop:"typeOriginCn"},{default:f((()=>[p(o,{modelValue:P.typeOriginCn,"onUpdate:modelValue":t[1]||(t[1]=e=>P.typeOriginCn=e),placeholder:"请选择检测平台",clearable:"",style:{width:"192px"}},{default:f((()=>[(i(!0),d(m,null,c(v(V),(e=>(i(),y(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(s,null,{default:f((()=>[p(x,{type:"primary",onClick:H},{default:f((()=>[w(" 查询 ")])),_:1}),p(x,{onClick:t[2]||(t[2]=e=>{return null==(a=v(J))||a.resetFields(),void H();var a})},{default:f((()=>[w(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),p(k,{bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[g((i(),y(F,{border:"",data:v(W),height:"67vh",style:{width:"100%"},size:"large","tooltip-options":{}},{default:f((()=>[p(N,{fixed:"",prop:"userInfo.username",label:"用户名称",width:"150"}),p(N,{prop:"userInfo.avatar",label:"头像",width:"120"},{default:f((e=>{var a,l;return[b("img",{src:null==(l=null==(a=e.row)?void 0:a.userInfo)?void 0:l.avatar,style:{height:"50px"}},null,8,U)]})),_:1}),p(N,{prop:"userInfo.email",label:"邮箱",width:"200"}),p(N,{prop:"status",label:"用户状态",width:"120",align:"center"},{default:f((({row:e})=>[p(R,{type:v(I)[e.userInfo.status]},{default:f((()=>[w(_(v(j)[e.userInfo.status]),1)])),_:2},1032,["type"])])),_:1}),p(N,{prop:"userInfo.violationCount",label:"累计次数",width:"90",align:"center"}),p(N,{label:"违规类型"},{default:f((e=>[p(R,{type:"danger"},{default:f((()=>{var a,l;return[w(_((null==(a=e.row)?void 0:a.typeCn)?JSON.parse(null==(l=e.row)?void 0:l.typeCn).join("  |  "):""),1)]})),_:2},1024)])),_:1}),p(N,{label:"违规关键词"},{default:f((e=>{var a,l;return[w(_((null==(a=e.row)?void 0:a.words)?JSON.parse(null==(l=e.row)?void 0:l.words).join("  |  "):""),1)]})),_:1}),p(N,{prop:"typeOriginCn",label:"违规检测来源",width:"120"},{default:f((e=>[p(R,{type:"success"},{default:f((()=>[w(_(e.row.typeOriginCn),1)])),_:2},1024)])),_:1}),p(N,{prop:"answer",label:"违规内容",width:"200"},{default:f((e=>[p(B,{placement:"top",width:400,trigger:"click"},{reference:f((()=>[b("div",S,_(e.row.content),1)])),default:f((()=>[b("div",{class:"answer_container",innerHTML:v(a)(e.row.content||"")},null,8,M)])),_:2},1024)])),_:1}),p(N,{prop:"createdAt",label:"违规时间",width:"200"},{default:f((e=>[w(_(v(z)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),p(N,{fixed:"right",label:"操作",width:"120",align:"center"},{default:f((e=>[p(x,{link:"",type:"primary",size:"small",onClick:a=>{return l=e.row,q.value=!0,D.status=l.status,void(D.id=l.userId);var l}},{default:f((()=>[w(" 变更用户状态 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[X,v(T)]]),p(E,{class:"flex justify-end mt-5"},{default:f((()=>[p(K,{"current-page":P.page,"onUpdate:currentPage":t[3]||(t[3]=e=>P.page=e),"page-size":P.size,"onUpdate:pageSize":t[4]||(t[4]=e=>P.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:v(Y),onSizeChange:H,onCurrentChange:H},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),p(Q,{modelValue:v(q),"onUpdate:modelValue":t[6]||(t[6]=e=>h(q)?q.value=e:null),title:"变更用户状态",width:"500px"},{default:f((()=>[p(C,{model:D,inline:!0},{default:f((()=>[p(s,{label:"用户状态","label-width":"90px"},{default:f((()=>[p(o,{modelValue:D.status,"onUpdate:modelValue":t[5]||(t[5]=e=>D.status=e),placeholder:"请选择用户状态",clearable:""},{default:f((()=>[(i(!0),d(m,null,c(v(O),(e=>(i(),y(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(s,null,{default:f((()=>[p(x,{type:"primary",onClick:G},{default:f((()=>[w(" 确认变更 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}});"function"==typeof k&&k(T);export{T as default};