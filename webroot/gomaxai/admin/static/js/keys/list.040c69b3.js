
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.129bbe0b.js";import{A as l}from"../chatgpt/chatgpt.99e93d97.js";import{u as a}from"../utcformatTime/utcformatTime.f6db2c52.js";import{g as t,f as o,h as u,Q as s}from"../index/index.5ad1a92e.js";import{d as n,r as d,Q as r,B as i,x as p,h as m,R as c,o as y,c as f,e as k,f as g,S as b,U as _,b as h,l as w,a as x,w as v,I as V,t as T,W as U,E as M,Z as C,q as D}from"../main-dd192319.js";const P={style:{float:"right"}},R={class:"flex justify-end mr-5"},z={class:"flex justify-end mr-5"},j=n({__name:"list",setup(n){const D=d(),j=d(),q=d(0),L=d(!1),A=d(!1),K=d(!1),G=d(!1),S=d(["gpt-4-all","gpt-4-dalle","gpt-4-v","gpt-4-1106-preview","gpt-4-vision-preview","gpt-4","gpt-4-0613","gpt-4-32k","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-0613","gpt-3.5-turbo-16k-0613","gpt-3.5-turbo-16k","code-davinci-002","ada","davinci"]),Y=r({keyList:""}),B=r({key:"",model:"",status:"",page:1,size:10}),F=d(),I=d(0),Q=r({key:"",model:"",maxModelTokens:null,maxResponseTokens:null,openaiProxyUrl:"",openaiTimeoutMs:null,weight:1,status:1}),E=r({key:[{required:!0,message:"请填写您的chatgpt key",trigger:"blur"}],model:[{required:!0,message:"请选择当前key需要绑定的模型",trigger:"change"}],weight:[{required:!1,message:"请填写key的权重值",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],maxModelTokens:[{required:!1,message:"请填写模型最大token数",trigger:"blur"}],maxResponseTokens:[{required:!1,message:"请填写最大回复token数",trigger:"blur"}],openaiProxyUrl:[{required:!1,message:"请填写指定代理地址",trigger:"blur"}]});function J(e){I.value=0,null==e||e.resetFields()}const O=i((()=>I.value?"更新秘钥":"新增秘钥")),W=i((()=>I.value?"确认更新":"确认新增")),Z=d([]);async function H(){}async function N(){try{A.value=!0;const e=await l.queryKeyList(B);A.value=!1;const{rows:a,count:t}=e.data;q.value=t,Z.value=a}catch(e){A.value=!1}}return p((()=>{N()})),(n,d)=>{const r=m("el-input"),i=m("el-form-item"),p=m("el-option"),X=m("el-select"),$=m("el-button"),ee=m("Plus"),le=m("el-icon"),ae=m("el-form"),te=e,oe=m("el-alert"),ue=m("el-table-column"),se=m("el-tag"),ne=m("el-popconfirm"),de=m("el-table"),re=m("el-pagination"),ie=m("el-row"),pe=m("el-switch"),me=m("el-dialog"),ce=c("loading");return y(),f("div",null,[k(te,null,{default:g((()=>[k(ae,{ref_key:"formRef",ref:j,inline:!0,model:B},{default:g((()=>[k(i,{label:"key",prop:"key"},{default:g((()=>[k(r,{modelValue:B.key,"onUpdate:modelValue":d[0]||(d[0]=e=>B.key=e),placeholder:"sk-*** [模糊搜索]"},null,8,["modelValue"])])),_:1}),k(i,{label:"使用模型",prop:"model"},{default:g((()=>[k(X,{modelValue:B.model,"onUpdate:modelValue":d[1]||(d[1]=e=>B.model=e),placeholder:"请选择绑定的模型",clearable:""},{default:g((()=>[(y(!0),f(b,null,_(h(t),(e=>(y(),V(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),k(i,{label:"启用状态",prop:"status"},{default:g((()=>[k(X,{modelValue:B.status,"onUpdate:modelValue":d[2]||(d[2]=e=>B.status=e),placeholder:"请选择key启用状态",clearable:""},{default:g((()=>[(y(!0),f(b,null,_(h(o),(e=>(y(),V(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),k(i,null,{default:g((()=>[k($,{type:"primary",onClick:N},{default:g((()=>[w(" 查询 ")])),_:1}),k($,{onClick:d[3]||(d[3]=e=>{return null==(l=h(j))||l.resetFields(),void N();var l})},{default:g((()=>[w(" 重置 ")])),_:1})])),_:1}),x("span",P,[k($,{type:"success",onClick:d[4]||(d[4]=e=>G.value=!0)},{default:g((()=>[w(" 批量添加Key "),k(le,{class:"ml-3"},{default:g((()=>[k(ee)])),_:1})])),_:1}),k($,{type:"success",onClick:d[5]||(d[5]=e=>L.value=!0)},{default:g((()=>[w(" 添加Key "),k(le,{class:"ml-3"},{default:g((()=>[k(ee)])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1}),k(te,{bottomPadding:"20px"},{default:g((()=>[k(oe,{"show-icon":"",title:"模块已废弃",description:"当前版本会在2.0之后废弃、本次保留是为了让你查询历史key、后续此模块会直接移除、新的key池在下方『模型池设置』中、详细配置可以查看提示或参考官方文档！",type:"error"})])),_:1}),k(te,{bottomPadding:"20px",bottomMargin:"0px"},{default:g((()=>[v((y(),V(de,{border:"",height:"54vh",data:h(Z),style:{width:"100%"},size:"large"},{default:g((()=>[k(ue,{prop:"key",label:"key秘钥",width:"470"}),k(ue,{prop:"model",align:"center",label:"绑定模型",width:"160"},{default:g((e=>[k(se,{type:e.row.model.includes("gpt-4")?"success":""},{default:g((()=>[w(T(e.row.model),1)])),_:2},1032,["type"])])),_:1}),k(ue,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:g((e=>[k(se,{type:h(u)[e.row.status]},{default:g((()=>[w(T(h(s)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),k(ue,{prop:"keyDetail.totalAmount",align:"center",label:"账户总额",width:"90"},{default:g((e=>[k($,{type:"info",text:""},{default:g((()=>[w(T(e.row.keyDetail.totalAmount||"-"),1)])),_:2},1024)])),_:1}),k(ue,{prop:"keyDetail.useAmount",align:"center",label:"已用额度",width:"90"},{default:g((e=>[k($,{type:"danger",text:""},{default:g((()=>[w(T(e.row.keyDetail.useAmount||"-"),1)])),_:2},1024)])),_:1}),k(ue,{prop:"keyDetail.balance",align:"center",label:"剩余额度",width:"90"},{default:g((e=>[k($,{type:"success",text:""},{default:g((()=>[w(T(e.row.keyDetail.balance||"-"),1)])),_:2},1024)])),_:1}),k(ue,{prop:"keyDetail.expirDate",align:"center",label:"过期时间",width:"130"},{default:g((e=>[k($,{type:"danger",text:""},{default:g((()=>[w(T(e.row.keyDetail.expirDate||"-"),1)])),_:2},1024)])),_:1}),k(ue,{prop:"weight",align:"center",label:"秘钥权重",width:"90"}),k(ue,{prop:"useCount",align:"center",label:"调用次数",width:"90"}),k(ue,{prop:"keyStatus",align:"center",label:"key状态",width:"90"},{default:g((e=>[k(se,{type:1===e.row.keyDetail.status?"success":"danger"},{default:g((()=>[w(T(1===e.row.keyDetail.status?"正常工作":-1===e.row.keyDetail.status?"查询失败":"已被封禁"),1)])),_:2},1032,["type"])])),_:1}),k(ue,{prop:"maxModelTokens",align:"center",label:"模型最大上下文",width:"140"},{default:g((e=>[k($,{type:"info",text:""},{default:g((()=>[w(T(e.row.maxModelTokens||"-"),1)])),_:2},1024)])),_:1}),k(ue,{prop:"maxResponseTokens",align:"center",label:"最大回复支持Token",width:"160"},{default:g((e=>[k($,{type:"info",text:""},{default:g((()=>[w(T(e.row.maxResponseTokens||"-"),1)])),_:2},1024)])),_:1}),k(ue,{prop:"openaiProxyUrl",align:"center",label:"绑定的代理地址",width:"230"},{default:g((e=>[k($,{type:"info",text:""},{default:g((()=>[w(T(e.row.openaiProxyUrl||"-"),1)])),_:2},1024)])),_:1}),k(ue,{prop:"createdAt",align:"center",label:"添加时间",width:"120"},{default:g((e=>[w(T(h(a)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),k(ue,{fixed:"right",label:"操作",width:"200"},{default:g((e=>[k($,{link:"",type:"primary",size:"small",onClick:l=>function(e){I.value=e.id;const{key:l,model:a,weight:t,status:o,type:u,maxModelTokens:s,maxResponseTokens:n,openaiProxyUrl:d,openaiTimeoutMs:r}=e;C((()=>{Object.assign(Q,{key:l,model:a,weight:t,status:o,type:u,maxModelTokens:s,maxResponseTokens:n,openaiProxyUrl:d,openaiTimeoutMs:r})})),L.value=!0}(e.row)},{default:g((()=>[w(" 变更 ")])),_:2},1032,["onClick"]),k(ne,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:a=>async function(e){const{id:a}=e;await l.deleteGptKey({id:a}),M({type:"success",message:"删除秘钥成功！"}),N()}(e.row)},{reference:g((()=>[k($,{link:"",type:"danger",size:"small"},{default:g((()=>[w(" 删除秘钥 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[ce,h(A)]]),k(ie,{class:"flex justify-end mt-5"},{default:g((()=>[k(re,{"current-page":B.page,"onUpdate:currentPage":d[6]||(d[6]=e=>B.page=e),"page-size":B.size,"onUpdate:pageSize":d[7]||(d[7]=e=>B.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:h(q),onSizeChange:N,onCurrentChange:N},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),k(me,{modelValue:h(L),"onUpdate:modelValue":d[18]||(d[18]=e=>U(L)?L.value=e:null),"close-on-click-modal":!1,title:"批量添加秘钥",width:"670",onClose:d[19]||(d[19]=e=>J(h(F)))},{footer:g((()=>[x("span",R,[k($,{onClick:d[16]||(d[16]=e=>L.value=!1)},{default:g((()=>[w("取消")])),_:1}),k($,{type:"primary",onClick:d[17]||(d[17]=e=>async function(e){null==e||e.validate((async e=>{e&&(I.value?(await l.updateGptKey({id:I.value,...Q}),M({type:"success",message:"更新秘钥成功！"})):(await l.addGptKey(Q),M({type:"success",message:"添加秘钥成功！"})),L.value=!1,N())}))}(h(F)))},{default:g((()=>[w(T(W.value),1)])),_:1})])])),default:g((()=>[v((y(),V(ae,{ref_key:"formPackageRef",ref:F,"label-position":"right","label-width":"120px",model:Q,rules:E},{default:g((()=>[k(i,{label:"key卡账号",prop:"key"},{default:g((()=>[k(r,{modelValue:Q.key,"onUpdate:modelValue":d[8]||(d[8]=e=>Q.key=e),placeholder:"请填写chatgpt key",onBlur:H},null,8,["modelValue"])])),_:1}),k(i,{label:"启用状态",prop:"status"},{default:g((()=>[k(pe,{modelValue:Q.status,"onUpdate:modelValue":d[9]||(d[9]=e=>Q.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1}),k(i,{label:"绑定模型",prop:"model"},{default:g((()=>[k(X,{modelValue:Q.model,"onUpdate:modelValue":d[10]||(d[10]=e=>Q.model=e),filterable:"",clearable:"",placeholder:"请选用当前key绑定的模型"},{default:g((()=>[(y(!0),f(b,null,_(h(S),(e=>(y(),V(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),k($,{type:"primary",class:"ml-5",onClick:H},{default:g((()=>[w(" 请指定当前key调用的模型 ")])),_:1})])),_:1}),k(i,{label:"轮询权重",prop:"weight"},{default:g((()=>[k(r,{modelValue:Q.weight,"onUpdate:modelValue":d[11]||(d[11]=e=>Q.weight=e),modelModifiers:{number:!0},placeholder:"请填写key的权重、数字越大使用评率越高！"},null,8,["modelValue"])])),_:1}),k(i,{label:"模型最大Token",prop:"maxModelTokens"},{default:g((()=>[k(r,{modelValue:Q.maxModelTokens,"onUpdate:modelValue":d[12]||(d[12]=e=>Q.maxModelTokens=e),modelModifiers:{number:!0},placeholder:"请填写模型最大Token、不填写默认使用默认！"},null,8,["modelValue"])])),_:1}),k(i,{label:"最大回复Token",prop:"maxResponseTokens"},{default:g((()=>[k(r,{modelValue:Q.maxResponseTokens,"onUpdate:modelValue":d[13]||(d[13]=e=>Q.maxResponseTokens=e),modelModifiers:{number:!0},placeholder:"请填写最大回复Token、不填写使用默认！"},null,8,["modelValue"])])),_:1}),k(i,{label:"指定代理",prop:"openaiProxyUrl"},{default:g((()=>[k(r,{modelValue:Q.openaiProxyUrl,"onUpdate:modelValue":d[14]||(d[14]=e=>Q.openaiProxyUrl=e),modelModifiers:{number:!0},placeholder:"请填写key的指定代理、不填写默认使用全局配置！"},null,8,["modelValue"])])),_:1}),k(i,{label:"超时时间",prop:"openaiTimeoutMs"},{default:g((()=>[k(r,{modelValue:Q.openaiTimeoutMs,"onUpdate:modelValue":d[15]||(d[15]=e=>Q.openaiTimeoutMs=e),modelModifiers:{number:!0},placeholder:"请填写key的超时时间单位（ms）、不填写默认使用全局配置！"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])),[[ce,h(K)]])])),_:1},8,["modelValue"]),k(me,{modelValue:h(G),"onUpdate:modelValue":d[23]||(d[23]=e=>U(G)?G.value=e:null),"close-on-click-modal":!1,title:O.value,width:"670",onClose:d[24]||(d[24]=e=>J(h(F)))},{footer:g((()=>[x("span",z,[k($,{onClick:d[21]||(d[21]=e=>G.value=!1)},{default:g((()=>[w("取消")])),_:1}),k($,{type:"primary",onClick:d[22]||(d[22]=e=>{var a;null==(a=h(D))||a.validate((async e=>{if(e){const{keyList:e}=Y,a=e.split("\n");if(a.length>100)return M.error("批量添加key不能超过100个");if(!a.length)return M.error("请按要求填写您的key秘钥");const t=await l.builCreateGptKey({keyList:a});Y.keyList="",M({type:"success",message:t.data}),G.value=!1,N()}}))})},{default:g((()=>[w(T(W.value),1)])),_:1})])])),default:g((()=>[v((y(),V(ae,{ref_key:"formBlukRef",ref:D,"label-position":"right","label-width":"120px",model:Q},{default:g((()=>[k(i,{label:"key卡账号列表",prop:"keyList"},{default:g((()=>[k(r,{modelValue:Y.keyList,"onUpdate:modelValue":d[20]||(d[20]=e=>Y.keyList=e),type:"textarea",rows:8,placeholder:"请粘贴您的key秘钥列表、一行一个、批量添加的情况下我们将默认为您使用gpt-3.5-turbo模型、并且不会检测秘钥的有效期、请您自行校验！"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])),[[ce,h(K)]])])),_:1},8,["modelValue","title"])])}}});"function"==typeof D&&D(j);export{j as default};
