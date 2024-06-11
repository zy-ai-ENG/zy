
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.227bd596.js";import{m as a}from"../marked.esm/marked.esm.b7e5160c.js";import{A as l}from"../badWords/badWords.26c509e2.js";import{d as t,r,Q as o,x as n,h as s,R as u,o as i,c as d,e as p,f,S as m,U as c,b as v,l as w,w as g,I as y,a as b,t as _,W as h,P as x,E as C,q as k}from"../main-32165e1b.js";import{u as z}from"../utcformatTime/utcformatTime.f6db2c52.js";import{T as I,U as V,w as j,x as U}from"../index/index.4485e23d.js";const O=["src"],M={class:"answer"},S=["innerHTML"],T=t({__name:"violation",setup(t){const k=new a.Renderer;a.setOptions({renderer:k,gfm:!0,pedantic:!1,sanitize:!1});const T=r(!1),A=r([]),Y=r(),q=r(0),D=o({userId:"",typeOriginCn:"",page:1,size:10}),H=r([]),J=r(!1),L=o({status:0,id:0});async function P(){(await x.updateUserStatus(L)).success&&C({type:"success",message:"变更用户状态成功！"}),J.value=!1}async function R(){T.value=!0;try{const e=await l.queryViolation(D);T.value=!1;const{rows:a,count:t}=e.data;q.value=t,H.value=a}catch(e){T.value=!1}}async function W(e){const a=await x.queryAllUser({size:30,username:e});A.value=a.data.rows}return n((()=>{R()})),(l,t)=>{const r=s("el-option"),o=s("el-select"),n=s("el-form-item"),x=s("el-button"),C=s("el-form"),k=e,N=s("el-table-column"),E=s("el-tag"),F=s("el-popover"),Q=s("el-table"),B=s("el-pagination"),G=s("el-row"),K=s("el-dialog"),X=u("loading");return i(),d("div",null,[p(k,null,{default:f((()=>[p(C,{ref_key:"formRef",ref:Y,inline:!0,model:D},{default:f((()=>[p(n,{label:"用户名称",prop:"userId"},{default:f((()=>[p(o,{modelValue:D.userId,"onUpdate:modelValue":t[0]||(t[0]=e=>D.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":W,style:{width:"192px"}},{default:f((()=>[(i(!0),d(m,null,c(v(A),(e=>(i(),y(r,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(n,{label:"检测平台",prop:"typeOriginCn"},{default:f((()=>[p(o,{modelValue:D.typeOriginCn,"onUpdate:modelValue":t[1]||(t[1]=e=>D.typeOriginCn=e),placeholder:"请选择检测平台",clearable:"",style:{width:"192px"}},{default:f((()=>[(i(!0),d(m,null,c(v(I),(e=>(i(),y(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(n,null,{default:f((()=>[p(x,{type:"primary",onClick:R},{default:f((()=>[w(" 查询 ")])),_:1}),p(x,{onClick:t[2]||(t[2]=e=>{return null==(a=v(Y))||a.resetFields(),void R();var a})},{default:f((()=>[w(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),p(k,{bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[g((i(),y(Q,{border:"",data:v(H),height:"67vh",style:{width:"100%"},size:"large","tooltip-options":{}},{default:f((()=>[p(N,{fixed:"",prop:"userInfo.username",label:"用户名称",width:"150"}),p(N,{prop:"userInfo.avatar",label:"头像",width:"120"},{default:f((e=>{var a,l;return[b("img",{src:null==(l=null==(a=e.row)?void 0:a.userInfo)?void 0:l.avatar,style:{height:"50px"}},null,8,O)]})),_:1}),p(N,{prop:"userInfo.email",label:"邮箱",width:"200"}),p(N,{prop:"status",label:"用户状态",width:"120",align:"center"},{default:f((({row:e})=>[p(E,{type:v(V)[e.userInfo.status]},{default:f((()=>[w(_(v(j)[e.userInfo.status]),1)])),_:2},1032,["type"])])),_:1}),p(N,{prop:"userInfo.violationCount",label:"累计次数",width:"90",align:"center"}),p(N,{label:"违规类型"},{default:f((e=>[p(E,{type:"danger"},{default:f((()=>{var a,l;return[w(_((null==(a=e.row)?void 0:a.typeCn)?JSON.parse(null==(l=e.row)?void 0:l.typeCn).join("  |  "):""),1)]})),_:2},1024)])),_:1}),p(N,{label:"违规关键词"},{default:f((e=>{var a,l;return[w(_((null==(a=e.row)?void 0:a.words)?JSON.parse(null==(l=e.row)?void 0:l.words).join("  |  "):""),1)]})),_:1}),p(N,{prop:"typeOriginCn",label:"违规检测来源",width:"120"},{default:f((e=>[p(E,{type:"success"},{default:f((()=>[w(_(e.row.typeOriginCn),1)])),_:2},1024)])),_:1}),p(N,{prop:"answer",label:"违规内容",width:"200"},{default:f((e=>[p(F,{placement:"top",width:400,trigger:"click"},{reference:f((()=>[b("div",M,_(e.row.content),1)])),default:f((()=>[b("div",{class:"answer_container",innerHTML:v(a)(e.row.content||"")},null,8,S)])),_:2},1024)])),_:1}),p(N,{prop:"createdAt",label:"违规时间",width:"200"},{default:f((e=>[w(_(v(z)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),p(N,{fixed:"right",label:"操作",width:"120",align:"center"},{default:f((e=>[p(x,{link:"",type:"primary",size:"small",onClick:a=>{return l=e.row,J.value=!0,L.status=l.status,void(L.id=l.userId);var l}},{default:f((()=>[w(" 变更用户状态 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[X,v(T)]]),p(G,{class:"flex justify-end mt-5"},{default:f((()=>[p(B,{"current-page":D.page,"onUpdate:currentPage":t[3]||(t[3]=e=>D.page=e),"page-size":D.size,"onUpdate:pageSize":t[4]||(t[4]=e=>D.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:v(q),onSizeChange:R,onCurrentChange:R},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),p(K,{modelValue:v(J),"onUpdate:modelValue":t[6]||(t[6]=e=>h(J)?J.value=e:null),title:"变更用户状态",width:"500px"},{default:f((()=>[p(C,{model:L,inline:!0},{default:f((()=>[p(n,{label:"用户状态","label-width":"90px"},{default:f((()=>[p(o,{modelValue:L.status,"onUpdate:modelValue":t[5]||(t[5]=e=>L.status=e),placeholder:"请选择用户状态",clearable:""},{default:f((()=>[(i(!0),d(m,null,c(v(U),(e=>(i(),y(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(n,null,{default:f((()=>[p(x,{type:"primary",onClick:P},{default:f((()=>[w(" 确认变更 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}});"function"==typeof k&&k(T);export{T as default};
