
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.55992ed4.js";import{A as l}from"./package.eb224e1d.js";import{d as a,r as t,Q as o,B as u,x as d,h as r,R as n,o as s,c as i,e as m,f as p,S as c,U as f,b as g,l as y,a as b,I as v,J as h,w,t as _,W as C,P as k,E as V,q as x}from"../main-1d1da8fb.js";import{u as M}from"../utcformatTime/utcformatTime.f6db2c52.js";import{C as U}from"../index/index.4485e23d.js";const j={style:{float:"right"}},z={key:1},I={class:"dialog-footer"},q={style:{"max-height":"200px",overflow:"scroll"}},R={class:"dialog-footer"},A=a({__name:"crami",setup(a){const x=t(),A=t(0),J=t(!1),$=t(!1),L=t(),N=t(0),P=t([]),D=t([]),S=t(!1),Y=t([]),B=t([]),T=o({packageId:null,count:1,drawMjCount:0,model3Count:0,model4Count:0}),E=o({useId:"",status:"",page:1,size:15}),F=o({packageId:[{required:!0,message:"请选择套餐类型",trigger:"change"}],days:[{required:!0,message:"请填写有效期天数",trigger:"blur"}],count:[{required:!0,message:"请填写想要生成的数量",trigger:"blur"}],drawMjCount:[{required:!0,message:"卡密携带MJ绘画数量",trigger:"blur"}],model3Count:[{required:!0,message:"卡密携带基础模型对话数量",trigger:"blur"}],model4Count:[{required:!0,message:"卡密携带高级模型金额",trigger:"blur"}]}),O=t([]);async function H(){try{S.value=!0;const e=await l.queryAllCrami(E),{rows:a,count:t}=e.data;S.value=!1,A.value=t,O.value=a}catch(e){S.value=!1}}async function Q(e){const l=await k.queryAllUser({size:30,username:e});D.value=l.data.rows}function W(){!async function(){const e=await l.queryAllPackage({size:100});P.value=e.data.rows}(),J.value=!0}async function G(e){Y.value=e}async function K(){try{S.value=!0,await l.batchDelCrami({ids:Y.value.map((e=>e.id))}),S.value=!1,V({type:"success",message:"删除卡密成功！"}),H()}catch(e){S.value=!1}}function X(){$.value=!0;const e=Y.value.map((e=>`${e.code}<----\x3e${e.packageName||"自定义套餐"}`));B.value=e}function Z(){!function(e,l){const a=function(e){return e.join("\n")}(e),t=new Blob([a],{type:"text/plain"}),o=URL.createObjectURL(t),u=document.createElement("a");u.href=o,u.download=`${l}.txt`,document.body.appendChild(u),u.click(),document.body.removeChild(u),setTimeout((()=>URL.revokeObjectURL(o)),0)}(Y.value.map((e=>`${e.code}<----\x3e${e.packageName||"自定义套餐"}`)),"卡密信息")}const ee=u((()=>O.value.some((e=>e.email))));return d((()=>{H()})),(a,t)=>{const o=r("el-option"),u=r("el-select"),d=r("el-form-item"),k=r("el-button"),le=r("Plus"),ae=r("el-icon"),te=r("el-form"),oe=e,ue=r("el-table-column"),de=r("el-tag"),re=r("el-popconfirm"),ne=r("el-table"),se=r("el-pagination"),ie=r("el-row"),me=r("el-switch"),pe=r("el-input"),ce=r("el-dialog"),fe=n("loading");return s(),i("div",null,[m(oe,null,{default:p((()=>[m(te,{ref_key:"formRef",ref:x,inline:!0,model:E},{default:p((()=>[m(d,{label:"用户名称",prop:"useId"},{default:p((()=>[m(u,{modelValue:E.useId,"onUpdate:modelValue":t[0]||(t[0]=e=>E.useId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":Q,style:{width:"192px"}},{default:p((()=>[(s(!0),i(c,null,f(g(D),(e=>(s(),v(o,{key:e.id,label:e.username,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(d,{label:"卡密状态",prop:"status"},{default:p((()=>[m(u,{modelValue:E.status,"onUpdate:modelValue":t[1]||(t[1]=e=>E.status=e),placeholder:"请选择卡密状态",clearable:"",style:{width:"192px"}},{default:p((()=>[(s(!0),i(c,null,f(g(U),(e=>(s(),v(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(d,null,{default:p((()=>[m(k,{type:"primary",onClick:H},{default:p((()=>[y(" 查询 ")])),_:1}),m(k,{onClick:t[2]||(t[2]=e=>{return null==(l=g(x))||l.resetFields(),void H();var l})},{default:p((()=>[y(" 重置 ")])),_:1})])),_:1}),b("div",j,[g(Y).length?(s(),v(k,{key:0,type:"danger",onClick:X},{default:p((()=>[y(" 显示选中卡密 ")])),_:1})):h("",!0),g(Y).length?(s(),v(k,{key:1,type:"danger",onClick:K},{default:p((()=>[y(" 批量删除卡密 ")])),_:1})):h("",!0),g(Y).length?(s(),v(k,{key:2,type:"primary",onClick:Z},{default:p((()=>[y(" 批量导出卡密 ")])),_:1})):h("",!0),m(k,{type:"success",onClick:W},{default:p((()=>[y(" 批量生成卡密 "),m(ae,{class:"ml-3"},{default:p((()=>[m(le)])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1}),m(oe,{bottomPadding:"20px",bottomMargin:"0px"},{default:p((()=>[w((s(),v(ne,{border:"",data:g(O),height:"calc(100vh - 310px)",style:{width:"100%"},size:"large",onSelectionChange:G},{default:p((()=>[m(ue,{type:"selection",width:"55"}),m(ue,{prop:"code",label:"卡密账号",width:"180"}),m(ue,{prop:"packageName",label:"套餐类型",width:"180"},{default:p((e=>[m(de,{type:e.row.packageName?"success":"danger"},{default:p((()=>[y(_(e.row.packageName||"自定义卡密"),1)])),_:2},1032,["type"])])),_:1}),m(ue,{prop:"code",label:"卡密状态",width:"180"},{default:p((e=>[m(de,{type:e.row.status?"danger":"success"},{default:p((()=>[y(_(e.row.status?"已使用":"未使用"),1)])),_:2},1032,["type"])])),_:1}),m(ue,{prop:"useId",label:"使用人ID",width:"100"}),g(ee)?(s(),v(ue,{key:0,prop:"email",label:"使用人邮箱",width:"180"})):h("",!0),m(ue,{prop:"model3Count",label:"基础模型额度"}),m(ue,{prop:"model4Count",label:"高级模型额度"}),m(ue,{prop:"drawMjCount",label:"MJ额度"}),m(ue,{prop:"days",label:"有效天数"},{default:p((e=>[y(_(e.row.days>0?`${e.row.days}天`:"永久"),1)])),_:1}),m(ue,{prop:"createdAt",label:"注册时间",width:"200"},{default:p((e=>[y(_(g(M)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),m(ue,{label:"操作"},{default:p((e=>[m(re,{title:"确认删除此卡密么?",width:"200","icon-color":"red",onConfirm:a=>async function(e){await l.delCrami({id:e.id}),V({type:"success",message:"删除卡密成功！"}),H()}(e.row)},{reference:p((()=>[m(k,{link:"",type:"danger",size:"small"},{default:p((()=>[y(" 删除卡密 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[fe,g(S)]]),m(ie,{class:"flex justify-end mt-5"},{default:p((()=>[m(se,{"current-page":E.page,"onUpdate:currentPage":t[3]||(t[3]=e=>E.page=e),"page-size":E.size,"onUpdate:pageSize":t[4]||(t[4]=e=>E.size=e),class:"mr-5","page-sizes":[15,50,100,200],layout:"total, sizes, prev, pager, next, jumper",total:g(A),onSizeChange:H,onCurrentChange:H},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),m(ce,{modelValue:g(J),"onUpdate:modelValue":t[13]||(t[13]=e=>C(J)?J.value=e:null),title:"生成卡密",width:"450",onClose:t[14]||(t[14]=e=>{var l;null==(l=g(L))||l.resetFields()})},{footer:p((()=>[b("span",I,[m(k,{onClick:t[11]||(t[11]=e=>J.value=!1)},{default:p((()=>[y("放弃生成")])),_:1}),m(k,{type:"primary",onClick:t[12]||(t[12]=e=>async function(e){null==e||e.validate((async e=>{e&&(await l.createCrami(T),V({type:"success",message:"生成卡密成功！"}),J.value=!1,H())}))}(g(L)))},{default:p((()=>[y(" 确定生成 ")])),_:1})])])),default:p((()=>[m(te,{ref_key:"formCramiRef",ref:L,"label-position":"right","label-width":"100px",model:T,rules:F},{default:p((()=>[m(ie,null,{default:p((()=>[m(d,{label:"是否生成自定义卡密","label-width":"170px"},{default:p((()=>[m(me,{modelValue:g(N),"onUpdate:modelValue":t[5]||(t[5]=e=>C(N)?N.value=e:null),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1}),g(N)?h("",!0):(s(),v(d,{key:0,label:"套餐类型",prop:"packageId"},{default:p((()=>[m(u,{modelValue:T.packageId,"onUpdate:modelValue":t[6]||(t[6]=e=>T.packageId=e),modelModifiers:{number:!0},placeholder:"请选择套餐类型",clearable:"",style:{width:"100%"}},{default:p((()=>[(s(!0),i(c,null,f(g(P),(e=>(s(),v(o,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})),g(N)?(s(),i("div",z,[m(d,{label:"基础模型额度",prop:"model3Count"},{default:p((()=>[m(pe,{modelValue:T.model3Count,"onUpdate:modelValue":t[7]||(t[7]=e=>T.model3Count=e),modelModifiers:{number:!0},type:"number",placeholder:"卡密携带基础模型额度"},null,8,["modelValue"])])),_:1}),m(d,{label:"高级模型额度",prop:"model4Count"},{default:p((()=>[m(pe,{modelValue:T.model4Count,"onUpdate:modelValue":t[8]||(t[8]=e=>T.model4Count=e),modelModifiers:{number:!0},type:"number",placeholder:"卡密携带高级模型额度"},null,8,["modelValue"])])),_:1}),m(d,{label:"MJ绘画额度",prop:"drawMjCount"},{default:p((()=>[m(pe,{modelValue:T.drawMjCount,"onUpdate:modelValue":t[9]||(t[9]=e=>T.drawMjCount=e),modelModifiers:{number:!0},type:"number",placeholder:"卡密携带MJ绘画额度"},null,8,["modelValue"])])),_:1})])):h("",!0),m(d,{label:"生成数量",prop:"count"},{default:p((()=>[m(pe,{modelValue:T.count,"onUpdate:modelValue":t[10]||(t[10]=e=>T.count=e),modelModifiers:{number:!0},type:"number",placeholder:"本次生成的张数"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"]),m(ce,{modelValue:g($),"onUpdate:modelValue":t[16]||(t[16]=e=>C($)?$.value=e:null),title:"卡密列表"},{footer:p((()=>[b("span",R,[m(k,{onClick:t[15]||(t[15]=e=>$.value=!1)},{default:p((()=>[y("关闭弹窗")])),_:1})])])),default:p((()=>[b("div",q,[(s(!0),i(c,null,f(g(B),((e,l)=>(s(),i("div",{key:l},_(e),1)))),128))])])),_:1},8,["modelValue"])])}}});"function"==typeof x&&x(A);export{A as default};
