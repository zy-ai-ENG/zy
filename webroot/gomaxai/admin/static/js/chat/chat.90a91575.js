
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c9f6880f.js";import{d as a,r as t,G as l,y as r,j as o,U as s,o as n,c as d,f as p,g as i,V as u,W as m,m as c,n as f,h as w,e as h,w as g,J as _,t as b,b as v,S as y,q as k,s as z}from"../main-646ffc07.js";import{m as x}from"../marked.esm/marked.esm.b7e5160c.js";import{A as T}from"./chat.97153b6c.js";import{u as j}from"../utcformatTime/utcformatTime.f6db2c52.js";const A={class:"answer"},V=["innerHTML"],C=a({__name:"chat",setup(a){const k=new x.Renderer;x.setOptions({renderer:k,gfm:!0,pedantic:!1,sanitize:!1});const z=t(!1),C=t(),I=t(0),U=l({userId:"",prompt:"",page:1,size:10}),M=t([]);async function L(){z.value=!0;try{const e=await T.queryChatAll(U);z.value=!1;const{rows:a,count:t}=e.data;I.value=t,M.value=a}catch(e){z.value=!1}}async function Y(e){await y.queryAllUser({size:30,username:e})}return r((()=>{L()})),(a,t)=>{const l=o("el-option"),r=o("el-select"),y=o("el-form-item"),k=o("el-input"),T=o("el-button"),q=o("el-form"),K=e,S=o("el-table-column"),D=o("el-popover"),G=o("el-table"),H=o("el-pagination"),J=o("el-row"),P=s("loading");return n(),d("div",null,[p(K,null,{default:i((()=>[p(q,{ref_key:"formRef",ref:C,inline:!0,model:U},{default:i((()=>[p(y,{label:"用户名称",prop:"userId"},{default:i((()=>[p(r,{modelValue:U.userId,"onUpdate:modelValue":t[0]||(t[0]=e=>U.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":Y,style:{width:"192px"}},{default:i((()=>[(n(!0),d(u,null,m(a.userList,(e=>(n(),_(l,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(y,{label:"用户询问的问题",prop:"prompt"},{default:i((()=>[p(k,{modelValue:U.prompt,"onUpdate:modelValue":t[1]||(t[1]=e=>U.prompt=e),placeholder:"提问问题[模糊搜索]",onKeydown:c(f(L,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])),_:1}),p(y,null,{default:i((()=>[p(T,{type:"primary",onClick:L},{default:i((()=>[w(" 查询 ")])),_:1}),p(T,{onClick:t[2]||(t[2]=e=>{return null==(a=h(C))||a.resetFields(),void L();var a})},{default:i((()=>[w(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),p(K,{bottomPadding:"20px",bottomMargin:"0px"},{default:i((()=>[g((n(),_(G,{height:"66vh",border:"",data:h(M),style:{width:"100%"},size:"large","tooltip-options":{}},{default:i((()=>[p(S,{fixed:"",prop:"username",label:"用户名称",width:"150"}),p(S,{prop:"createdAt",label:"角色",width:"80"},{default:i((e=>[w(b("user"===e.row.role?"用户":"电脑"),1)])),_:1}),p(S,{prop:"email",label:"用户邮箱",width:"200"}),p(S,{prop:"answer",label:"用户询问/AI回复"},{default:i((e=>[p(D,{placement:"top",width:400,trigger:"click"},{reference:i((()=>[v("div",A,b("user"===e.row.role?e.row.prompt:e.row.answer),1)])),default:i((()=>[v("div",{class:"answer_container",innerHTML:h(x)("user"===e.row.role?e.row.prompt:e.row.answer||"")},null,8,V)])),_:2},1024)])),_:1}),p(S,{prop:"completionTokens",label:"提问/回答Token",width:"140",align:"center"},{default:i((e=>[w(b("user"===e.row.role?e.row.promptTokens:e.row.completionTokens),1)])),_:1}),p(S,{prop:"totalTokens",label:"总计Toekn",width:"110",align:"center"}),p(S,{prop:"model",label:"模型",width:"200"}),p(S,{prop:"createdAt",label:"提问时间",width:"200"},{default:i((e=>[w(b(h(j)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1})])),_:1},8,["data"])),[[P,h(z)]]),p(J,{class:"flex justify-end mt-5"},{default:i((()=>[p(H,{"current-page":U.page,"onUpdate:currentPage":t[3]||(t[3]=e=>U.page=e),"page-size":U.size,"onUpdate:pageSize":t[4]||(t[4]=e=>U.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:h(I),onSizeChange:L,onCurrentChange:L},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof z&&z(C);const I=k(C,[["__scopeId","data-v-2d29503a"]]);export{I as default};