
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.227bd596.js";import{d as a,r as l,Q as t,B as s,x as u,h as o,R as r,o as n,c as i,e as d,f as c,l as p,w as m,I as f,b as v,t as g,a as y,S as b,U as h,J as w,k as _,m as k,P as z,X as V,E as x,q as U}from"../main-32165e1b.js";import{A as j}from"../chatgpt/chatgpt.c0df3afd.js";import{m as C,j as I}from"../index/index.4485e23d.js";import{u as q}from"../utcformatTime/utcformatTime.f6db2c52.js";const Y={class:"flex justify-end mr-5"},A=a({__name:"whiteList",setup(a){const U=l(),A=l(0),P=l(!1),L=l(!1),M=l([]),S=l(0),T=t({page:1,size:10}),W=s((()=>A.value?"更新用户":"新增用户")),D=s((()=>A.value?"确认更新":"确认新增")),E=l([]),J=t({userId:"",status:1,count:10}),K=t({userId:[{required:!0,message:"请选择白名单用户",trigger:"change"}],status:[{required:!0,message:"请选择当前用户状态",trigger:"change"}],count:[{required:!0,message:"请填写限制使用次数",trigger:"blur"}]});async function R(e){const a=await z.queryAllUser({size:30,username:e});E.value=a.data.rows}async function B(){try{P.value=!0;const e=await j.queryWhiteUserList(T);P.value=!1;const{rows:a,count:l}=e.data;M.value=a,S.value=l}catch(e){P.value=!1}}function F(e){null==e||e.validate((async e=>{e&&(A.value?(await j.updateWhiteUser({id:A.value,...J}),x.success("修改白名单用户成功")):(await j.addWhiteUser(J),x.success("添加白名单用户成功")),L.value=!1,B())}))}return u((()=>{B()})),(a,l)=>{const t=o("el-alert"),s=o("el-button"),u=e,z=o("el-table-column"),x=o("el-tag"),j=o("el-table"),G=o("el-pagination"),H=o("el-row"),O=o("el-option"),Q=o("el-select"),X=o("el-form-item"),N=o("el-input"),Z=o("el-switch"),$=o("el-form"),ee=o("el-dialog"),ae=r("loading");return n(),i("div",null,[d(u,null,{default:c((()=>[d(t,{closable:!1,"show-icon":"",title:"KEY池说明",description:"所有key会按key绑定的模型自动划分为卡池3模型与卡池4模型、key余额耗尽将会自动锁定、每张key支持单独绑定模型与代理、已经上下文长度设置、如果不设置默认以全局配置为准！",type:"success"}),d(s,{class:"mt-5",type:"primary",onClick:l[0]||(l[0]=e=>L.value=!0)},{default:c((()=>[p(" 添加白名单用户[添加用户可以使用GPT4模型] ")])),_:1})])),_:1}),d(u,null,{default:c((()=>[m((n(),f(j,{border:"",data:M.value,style:{width:"100%"},size:"large"},{default:c((()=>[d(z,{prop:"username",label:"用户昵称"}),d(z,{prop:"email",label:"用户邮箱"}),d(z,{prop:"useCount",label:"调用次数"}),d(z,{prop:"count",label:"剩余额度"}),d(z,{prop:"status",align:"center",label:"启用状态"},{default:c((e=>[d(x,{type:v(C)[e.row.status]},{default:c((()=>[p(g(v(I)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),d(z,{prop:"createdAt",align:"center",label:"添加时间"},{default:c((e=>[p(g(v(q)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),d(z,{label:"操作"},{default:c((e=>[d(s,{link:"",type:"primary",size:"small",onClick:a=>function(e){A.value=e.id;const{userId:a,count:l,status:t}=e;V((()=>{Object.assign(J,{userId:a,count:l,status:t})})),L.value=!0}(e.row)},{default:c((()=>[p(" 变更 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ae,P.value]]),d(H,{class:"flex justify-end mt-5"},{default:c((()=>[d(G,{"current-page":v(T).page,"onUpdate:currentPage":l[1]||(l[1]=e=>v(T).page=e),"page-size":v(T).size,"onUpdate:pageSize":l[2]||(l[2]=e=>v(T).size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:S.value,onSizeChange:B,onCurrentChange:B},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),d(ee,{modelValue:L.value,"onUpdate:modelValue":l[9]||(l[9]=e=>L.value=e),"close-on-click-modal":!1,title:v(W),width:"400",onClose:l[10]||(l[10]=e=>{return a=U.value,A.value=0,void(null==a||a.resetFields());var a})},{footer:c((()=>[y("span",Y,[d(s,{onClick:l[7]||(l[7]=e=>L.value=!1)},{default:c((()=>[p("取消")])),_:1}),d(s,{type:"primary",onClick:l[8]||(l[8]=e=>F(U.value))},{default:c((()=>[p(g(v(D)),1)])),_:1})])])),default:c((()=>[d($,{ref_key:"formPackageRef",ref:U,"label-position":"right","label-width":"100px",model:v(J),rules:v(K)},{default:c((()=>[A.value?w("",!0):(n(),f(X,{key:0,label:"用户昵称",prop:"userId"},{default:c((()=>[d(Q,{modelValue:v(J).userId,"onUpdate:modelValue":l[3]||(l[3]=e=>v(J).userId=e),filterable:"",clearable:"",style:{width:"100%"},remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":R},{default:c((()=>[(n(!0),i(b,null,h(E.value,(e=>(n(),f(O,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})),d(X,{label:"限制次数",prop:"count"},{default:c((()=>[d(N,{modelValue:v(J).count,"onUpdate:modelValue":l[4]||(l[4]=e=>v(J).count=e),modelModifiers:{number:!0},placeholder:"请填写限制用户的访问次数！",onKeydown:l[5]||(l[5]=_(k((e=>F(U.value)),["prevent"]),["enter"]))},null,8,["modelValue"])])),_:1}),d(X,{label:"启用状态",prop:"status"},{default:c((()=>[d(Z,{modelValue:v(J).status,"onUpdate:modelValue":l[6]||(l[6]=e=>v(J).status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});"function"==typeof U&&U(A);export{A as default};
