
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.3ad5ed39.js";import{d as a,r as l,Q as t,x as o,h as r,R as s,o as n,c as d,e as p,f as i,S as u,U as m,b as c,k as f,m as w,l as h,w as g,I as _,t as b,a as v,P as y,n as k,q as z}from"../main-01383ffb.js";import{m as x}from"../marked.esm/marked.esm.b7e5160c.js";import{A as T}from"../chat/chat.c4141871.js";import{u as j}from"../utcformatTime/utcformatTime.f6db2c52.js";const A={class:"answer"},I=["innerHTML"],C=a({__name:"useLog",setup(a){const k=new x.Renderer;x.setOptions({renderer:k,gfm:!0,pedantic:!1,sanitize:!1});const z=l(!1),C=l([]),M=l(),U=l(0),V=t({userId:"",prompt:"",page:1,size:10,modelType:"music"}),L=l([]);async function Y(){z.value=!0;try{const e=await T.queryChatAll(V);z.value=!1;const{rows:a,count:l}=e.data;U.value=l,L.value=a}catch(e){z.value=!1}}async function q(e){const a=await y.queryAllUser({size:30,username:e});C.value=a.data.rows}return o((()=>{Y()})),(a,l)=>{const t=r("el-option"),o=r("el-select"),y=r("el-form-item"),k=r("el-input"),T=r("el-button"),H=r("el-form"),P=e,R=r("el-table-column"),S=r("el-popover"),D=r("el-table"),K=r("el-pagination"),F=r("el-row"),N=s("loading");return n(),d("div",null,[p(P,null,{default:i((()=>[p(H,{ref_key:"formRef",ref:M,inline:!0,model:V},{default:i((()=>[p(y,{label:"用户名称",prop:"userId"},{default:i((()=>[p(o,{modelValue:V.userId,"onUpdate:modelValue":l[0]||(l[0]=e=>V.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":q,style:{width:"192px"}},{default:i((()=>[(n(!0),d(u,null,m(c(C),(e=>(n(),_(t,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(y,{label:"用户询问的问题",prop:"prompt"},{default:i((()=>[p(k,{modelValue:V.prompt,"onUpdate:modelValue":l[1]||(l[1]=e=>V.prompt=e),placeholder:"提问问题[模糊搜索]",onKeydown:f(w(Y,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])),_:1}),p(y,null,{default:i((()=>[p(T,{type:"primary",onClick:Y},{default:i((()=>[h(" 查询 ")])),_:1}),p(T,{onClick:l[2]||(l[2]=e=>{return null==(a=c(M))||a.resetFields(),void Y();var a})},{default:i((()=>[h(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),p(P,{bottomPadding:"20px",bottomMargin:"0px"},{default:i((()=>[g((n(),_(D,{height:"66vh",border:"",data:c(L),style:{width:"100%"},size:"large","tooltip-options":{}},{default:i((()=>[p(R,{fixed:"",prop:"username",label:"用户名称",width:"150"}),p(R,{prop:"createdAt",label:"角色",width:"80"},{default:i((e=>[h(b("user"===e.row.role?"用户":"电脑"),1)])),_:1}),p(R,{prop:"email",label:"用户邮箱",width:"200"}),p(R,{prop:"answer",label:"用户询问/AI回复"},{default:i((e=>[p(S,{placement:"top",width:400,trigger:"click"},{reference:i((()=>[v("div",A,b("user"===e.row.role?e.row.prompt:e.row.answer),1)])),default:i((()=>[v("div",{class:"answer_container",innerHTML:c(x)("user"===e.row.role?e.row.prompt:e.row.answer||"")},null,8,I)])),_:2},1024)])),_:1}),p(R,{prop:"completionTokens",label:"提问/回答Token",width:"140",align:"center"},{default:i((e=>[h(b("user"===e.row.role?e.row.promptTokens:e.row.completionTokens),1)])),_:1}),p(R,{prop:"totalTokens",label:"总计Toekn",width:"110",align:"center"}),p(R,{prop:"model",label:"模型",width:"200"}),p(R,{prop:"createdAt",label:"提问时间",width:"200"},{default:i((e=>[h(b(c(j)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])),[[N,c(z)]]),p(F,{class:"flex justify-end mt-5"},{default:i((()=>[p(K,{"current-page":V.page,"onUpdate:currentPage":l[3]||(l[3]=e=>V.page=e),"page-size":V.size,"onUpdate:pageSize":l[4]||(l[4]=e=>V.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:c(U),onSizeChange:Y,onCurrentChange:Y},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof z&&z(C);const M=k(C,[["__scopeId","data-v-b23d8731"]]);export{M as default};