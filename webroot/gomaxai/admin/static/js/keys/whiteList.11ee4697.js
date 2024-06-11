
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.129bbe0b.js";import{d as a,r as l,Q as t,B as s,x as u,h as o,R as r,o as n,c as i,e as d,f as c,l as p,w as m,I as f,b as v,t as g,a as y,S as b,U as h,J as w,k as _,m as k,P as x,Z as z,E as V,q as U}from"../main-dd192319.js";import{A as C}from"../chatgpt/chatgpt.99e93d97.js";import{h as j,Q as I}from"../index/index.5ad1a92e.js";import{u as q}from"../utcformatTime/utcformatTime.f6db2c52.js";const Y={class:"flex justify-end mr-5"},A=a({__name:"whiteList",setup(a){const U=l(),A=l(0),P=l(!1),M=l(!1),S=l([]),T=l(0),W=t({page:1,size:10}),D=s((()=>A.value?"更新用户":"新增用户")),E=s((()=>A.value?"确认更新":"确认新增")),G=l([]),J=t({userId:"",status:1,count:10}),K=t({userId:[{required:!0,message:"请选择白名单用户",trigger:"change"}],status:[{required:!0,message:"请选择当前用户状态",trigger:"change"}],count:[{required:!0,message:"请填写限制使用次数",trigger:"blur"}]});async function L(e){const a=await x.queryAllUser({size:30,username:e});G.value=a.data.rows}async function Q(){try{P.value=!0;const e=await C.queryWhiteUserList(W);P.value=!1;const{rows:a,count:l}=e.data;S.value=a,T.value=l}catch(e){P.value=!1}}function R(e){null==e||e.validate((async e=>{e&&(A.value?(await C.updateWhiteUser({id:A.value,...J}),V.success("修改白名单用户成功")):(await C.addWhiteUser(J),V.success("添加白名单用户成功")),M.value=!1,Q())}))}return u((()=>{Q()})),(a,l)=>{const t=o("el-alert"),s=o("el-button"),u=e,x=o("el-table-column"),V=o("el-tag"),C=o("el-table"),B=o("el-pagination"),F=o("el-row"),O=o("el-option"),Z=o("el-select"),H=o("el-form-item"),N=o("el-input"),X=o("el-switch"),$=o("el-form"),ee=o("el-dialog"),ae=r("loading");return n(),i("div",null,[d(u,null,{default:c((()=>[d(t,{closable:!1,"show-icon":"",title:"KEY池说明",description:"所有key会按key绑定的模型自动划分为卡池3模型与卡池4模型、key余额耗尽将会自动锁定、每张key支持单独绑定模型与代理、已经上下文长度设置、如果不设置默认以全局配置为准！",type:"success"}),d(s,{class:"mt-5",type:"primary",onClick:l[0]||(l[0]=e=>M.value=!0)},{default:c((()=>[p(" 添加白名单用户[添加用户可以使用GPT4模型] ")])),_:1})])),_:1}),d(u,null,{default:c((()=>[m((n(),f(C,{border:"",data:S.value,style:{width:"100%"},size:"large"},{default:c((()=>[d(x,{prop:"username",label:"用户昵称"}),d(x,{prop:"email",label:"用户邮箱"}),d(x,{prop:"useCount",label:"调用次数"}),d(x,{prop:"count",label:"剩余额度"}),d(x,{prop:"status",align:"center",label:"启用状态"},{default:c((e=>[d(V,{type:v(j)[e.row.status]},{default:c((()=>[p(g(v(I)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),d(x,{prop:"createdAt",align:"center",label:"添加时间"},{default:c((e=>[p(g(v(q)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),d(x,{label:"操作"},{default:c((e=>[d(s,{link:"",type:"primary",size:"small",onClick:a=>function(e){A.value=e.id;const{userId:a,count:l,status:t}=e;z((()=>{Object.assign(J,{userId:a,count:l,status:t})})),M.value=!0}(e.row)},{default:c((()=>[p(" 变更 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ae,P.value]]),d(F,{class:"flex justify-end mt-5"},{default:c((()=>[d(B,{"current-page":v(W).page,"onUpdate:currentPage":l[1]||(l[1]=e=>v(W).page=e),"page-size":v(W).size,"onUpdate:pageSize":l[2]||(l[2]=e=>v(W).size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:T.value,onSizeChange:Q,onCurrentChange:Q},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),d(ee,{modelValue:M.value,"onUpdate:modelValue":l[9]||(l[9]=e=>M.value=e),"close-on-click-modal":!1,title:v(D),width:"400",onClose:l[10]||(l[10]=e=>{return a=U.value,A.value=0,void(null==a||a.resetFields());var a})},{footer:c((()=>[y("span",Y,[d(s,{onClick:l[7]||(l[7]=e=>M.value=!1)},{default:c((()=>[p("取消")])),_:1}),d(s,{type:"primary",onClick:l[8]||(l[8]=e=>R(U.value))},{default:c((()=>[p(g(v(E)),1)])),_:1})])])),default:c((()=>[d($,{ref_key:"formPackageRef",ref:U,"label-position":"right","label-width":"100px",model:v(J),rules:v(K)},{default:c((()=>[A.value?w("",!0):(n(),f(H,{key:0,label:"用户昵称",prop:"userId"},{default:c((()=>[d(Z,{modelValue:v(J).userId,"onUpdate:modelValue":l[3]||(l[3]=e=>v(J).userId=e),filterable:"",clearable:"",style:{width:"100%"},remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":L},{default:c((()=>[(n(!0),i(b,null,h(G.value,(e=>(n(),f(O,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})),d(H,{label:"限制次数",prop:"count"},{default:c((()=>[d(N,{modelValue:v(J).count,"onUpdate:modelValue":l[4]||(l[4]=e=>v(J).count=e),modelModifiers:{number:!0},placeholder:"请填写限制用户的访问次数！",onKeydown:l[5]||(l[5]=_(k((e=>R(U.value)),["prevent"]),["enter"]))},null,8,["modelValue"])])),_:1}),d(H,{label:"启用状态",prop:"status"},{default:c((()=>[d(X,{modelValue:v(J).status,"onUpdate:modelValue":l[6]||(l[6]=e=>v(J).status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});"function"==typeof U&&U(A);export{A as default};
