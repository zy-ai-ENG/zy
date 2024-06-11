
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.35ca4747.js";import{A as l}from"./package.b07af6a4.js";import{v as a,I as t,w as u}from"../index/index.5ad1a92e.js";import{u as d}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as r,r as o,Q as n,B as i,x as s,h as p,R as m,o as c,c as g,e as f,f as b,S as y,U as h,b as v,l as w,w as _,I as V,t as C,a as k,E as M,Z as x,q as U}from"../main-78588ec5.js";const P={class:"flex justify-end mr-5"},j=r({__name:"package",setup(r){o("/api/upload/file");const U=o(),j=o(0),q=o(!1),z=o(!1),I=n({name:"",page:1,size:10}),A=o(),J=o(0),T=n({typeId:null,name:null,des:null,originPrice:null,price:null,order:null,status:null,weight:null,days:null,model3Count:null,model4Count:null,drawMjCount:null}),Y=n({typeId:[{required:!0,message:"请选择套餐类型",trigger:"blur"}],name:[{required:!0,message:"请填写套餐名称",trigger:"blur"}],des:[{required:!0,message:"请填写套餐的详细描述",trigger:"blur"}],deductionType:[{required:!0,message:"请选择扣费形式",trigger:"change"}],originPrice:[{required:!0,message:"请填写套餐原价格",trigger:"blur"}],price:[{required:!0,message:"请填写套餐优惠后价格",trigger:"blur"}],order:[{required:!0,message:"请填写套餐排序",trigger:"blur"}],status:[{required:!0,message:"请选择套餐开启状态",trigger:"change"}],days:[{required:!0,message:"请填写套餐有效期天数",trigger:"blur"}],model3Count:[{required:!0,message:"请填写套餐中基础模型可使用次数",trigger:"blur"}],model4Count:[{required:!0,message:"请填写套餐中高级模型可使用次数",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写套餐中抽奖次数",trigger:"blur"}]}),D=o([]),F=o([]);async function R(){try{z.value=!0;const e=await l.queryAllPackage(I);z.value=!1;const{rows:a,count:t}=e.data;j.value=t,D.value=a}catch(e){z.value=!1}}const S=i((()=>J.value?"更新套餐":"新增套餐")),B=i((()=>J.value?"确认更新":"确认新增"));function E(){var e;J.value=0,q.value=!0,null==(e=A.value)||e.resetFields()}return s((()=>{!async function(){try{F.value=await l.queryPackageType().then((e=>e.data.rows))}catch(e){z.value=!1}}(),R()})),(r,o)=>{const n=p("el-option"),i=p("el-select"),s=p("el-form-item"),G=p("el-button"),N=p("Plus"),O=p("el-icon"),Q=p("el-form"),Z=e,$=p("el-alert"),H=p("el-table-column"),K=p("el-tag"),L=p("el-popconfirm"),W=p("el-table"),X=p("el-pagination"),ee=p("el-row"),le=p("el-input"),ae=p("el-switch"),te=p("el-col"),ue=p("el-dialog"),de=m("loading");return c(),g("div",null,[f(Z,null,{default:b((()=>[f(Q,{ref_key:"formRef",ref:U,inline:!0,model:I},{default:b((()=>[f(s,{label:"套餐状态",prop:"status"},{default:b((()=>[f(i,{modelValue:I.status,"onUpdate:modelValue":o[0]||(o[0]=e=>I.status=e),placeholder:"请选择套餐状态",clearable:"",style:{width:"192px"}},{default:b((()=>[(c(!0),g(y,null,h(v(a),(e=>(c(),V(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(s,null,{default:b((()=>[f(G,{type:"primary",onClick:R},{default:b((()=>[w(" 查询 ")])),_:1}),f(G,{onClick:o[1]||(o[1]=e=>{return null==(l=U.value)||l.resetFields(),void R();var l})},{default:b((()=>[w(" 重置 ")])),_:1})])),_:1}),f(G,{type:"success",style:{float:"right"},onClick:E},{default:b((()=>[w(" 创建套餐 "),f(O,{class:"ml-3"},{default:b((()=>[f(N)])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),f(Z,{bottomPadding:"20px"},{default:b((()=>[f($,{closable:!1,"show-icon":"",title:"新版套餐说明",description:"新版本套餐分为不限时套餐和限时套餐、不限时充值次数永不过期、限时套餐在规定时间未使用完毕将清空、套餐等级为套餐优先级、等级越高价值越高、充值非永久套餐的限时套餐将成为会员、当已经是会员资格的情况下、充值低于自身等级的套餐仅添加自身余额不更新日期、充值大于等于自生等级的套餐的时候、将叠加余额与时间（请仔细阅读）,套餐有效时间设为-1即为永久不过期！",type:"success"})])),_:1}),f(Z,{bottomPadding:"20px",bottomMargin:"0px"},{default:b((()=>[_((c(),V(W,{border:"",data:D.value,height:"52vh",style:{width:"100%"},size:"large"},{default:b((()=>[f(H,{fixed:"",prop:"name",label:"套餐名称",width:"150"}),f(H,{fixed:"",prop:"typeName",label:"套餐类型",width:"100"}),f(H,{prop:"order",label:"排序ID",align:"center"}),f(H,{prop:"originPrice",label:"套餐原价",width:"100",align:"center"}),f(H,{prop:"price",label:"套餐优惠后价格",width:"100",align:"center"}),f(H,{prop:"weight",label:"套餐等级",width:"100",align:"center"}),f(H,{prop:"status",label:"套餐状态",width:"100"},{default:b((e=>[f(K,{type:v(t)[e.row.status]},{default:b((()=>[w(C(v(u)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),f(H,{prop:"days",label:"套餐有效期",width:"120"},{default:b((e=>[w(C(e.row.days>0?`${e.row.days}天`:"永久"),1)])),_:1}),f(H,{prop:"model3Count",label:"基础模型额度",width:"100"}),f(H,{prop:"model4Count",label:"高级模型额度",width:"100"}),f(H,{prop:"drawMjCount",label:"MJ额度",width:"100"}),f(H,{prop:"des",label:"套餐描述",width:"300"}),f(H,{prop:"createdAt",label:"创建时间",width:"200"},{default:b((e=>[w(C(v(d)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),f(H,{fixed:"right",label:"操作",width:"200"},{default:b((e=>[f(G,{link:"",type:"primary",size:"small",onClick:l=>{return a=e.row,J.value=a.id,x((()=>{Object.assign(T,a),null==T||delete T.createdAt,null==T||delete T.updatedAt,null==T||delete T.deletedAt,null==T||delete T.id})),void(q.value=!0);var a}},{default:b((()=>[w(" 修改套餐 ")])),_:2},1032,["onClick"]),f(L,{title:"确认删除此套餐么?",width:"200","icon-color":"red",onConfirm:a=>async function({id:e}){await l.delPackage({id:e}),M({type:"success",message:"删除套餐成功！"}),R()}(e.row)},{reference:b((()=>[f(G,{link:"",type:"danger",size:"small"},{default:b((()=>[w(" 删除套餐 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[de,z.value]]),f(ee,{class:"flex justify-end mt-5"},{default:b((()=>[f(X,{"current-page":I.page,"onUpdate:currentPage":o[2]||(o[2]=e=>I.page=e),"page-size":I.size,"onUpdate:pageSize":o[3]||(o[3]=e=>I.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:j.value,onSizeChange:R,onCurrentChange:R},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),f(ue,{modelValue:q.value,"onUpdate:modelValue":o[18]||(o[18]=e=>q.value=e),"close-on-click-modal":!1,title:S.value,width:"970",onClose:o[19]||(o[19]=e=>{return l=A.value,J.value=0,void(null==l||l.resetFields());var l})},{footer:b((()=>[k("span",P,[f(G,{onClick:o[16]||(o[16]=e=>q.value=!1)},{default:b((()=>[w("取消")])),_:1}),f(G,{type:"primary",onClick:o[17]||(o[17]=e=>async function(e){null==e||e.validate((async e=>{e&&(J.value?(await l.updatePackage({id:J.value,...T}),M({type:"success",message:"更新套餐成功！"})):(await l.createPackage(T),M({type:"success",message:"创建新的套餐成功！"})),q.value=!1,R())}))}(A.value))},{default:b((()=>[w(C(B.value),1)])),_:1})])])),default:b((()=>[f(Q,{ref_key:"formPackageRef",ref:A,"label-position":"right","label-width":"120px",model:T,rules:Y},{default:b((()=>[f(ee,{gutter:20},{default:b((()=>[f(te,{span:12},{default:b((()=>[f(s,{label:"套餐详细名称",prop:"name"},{default:b((()=>[f(le,{modelValue:T.name,"onUpdate:modelValue":o[4]||(o[4]=e=>T.name=e),placeholder:"请填写套餐名称"},null,8,["modelValue"])])),_:1}),f(s,{label:"套餐类型",prop:"typeId"},{default:b((()=>[f(i,{modelValue:T.typeId,"onUpdate:modelValue":o[5]||(o[5]=e=>T.typeId=e),style:{width:"100%"}},{default:b((()=>[(c(!0),g(y,null,h(F.value,(e=>(c(),V(n,{value:e.id,label:e.name},null,8,["value","label"])))),256))])),_:1},8,["modelValue"])])),_:1}),f(s,{label:"套餐开启状态",prop:"status"},{default:b((()=>[f(ae,{modelValue:T.status,"onUpdate:modelValue":o[6]||(o[6]=e=>T.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1}),f(s,{label:"套餐等级",prop:"status"},{default:b((()=>[f(le,{modelValue:T.weight,"onUpdate:modelValue":o[7]||(o[7]=e=>T.weight=e),modelModifiers:{number:!0},type:"number",placeholder:"设置套餐等级"},null,8,["modelValue"])])),_:1}),f(s,{label:"套餐价格原价格",prop:"originPrice"},{default:b((()=>[f(le,{modelValue:T.originPrice,"onUpdate:modelValue":o[8]||(o[8]=e=>T.originPrice=e),modelModifiers:{number:!0},placeholder:"请填写套餐价格(￥)最多两位小数",type:"number"},null,8,["modelValue"])])),_:1}),f(s,{label:"套餐优惠后价格",prop:"price"},{default:b((()=>[f(le,{modelValue:T.price,"onUpdate:modelValue":o[9]||(o[9]=e=>T.price=e),modelModifiers:{number:!0},placeholder:"请填写套餐价格(￥)最多两位小数",type:"number"},null,8,["modelValue"])])),_:1}),f(s,{label:"套餐有效时间",prop:"days"},{default:b((()=>[f(le,{modelValue:T.days,"onUpdate:modelValue":o[10]||(o[10]=e=>T.days=e),modelModifiers:{number:!0},type:"number",placeholder:"自卡密生成之日有效天数、-1为永久"},null,8,["modelValue"])])),_:1})])),_:1}),f(te,{span:12},{default:b((()=>[f(s,{label:"设置套餐排序",prop:"order"},{default:b((()=>[f(le,{modelValue:T.order,"onUpdate:modelValue":o[11]||(o[11]=e=>T.order=e),modelModifiers:{number:!0},type:"number",placeholder:"排序数字越大越靠前|套餐权重等级则反之"},null,8,["modelValue"])])),_:1}),f(s,{label:"基础模型积分",prop:"model3Count"},{default:b((()=>[f(le,{modelValue:T.model3Count,"onUpdate:modelValue":o[12]||(o[12]=e=>T.model3Count=e),modelModifiers:{number:!0},type:"number",placeholder:"基础模型积分"},null,8,["modelValue"])])),_:1}),f(s,{label:"高级模型积分",prop:"model4Count"},{default:b((()=>[f(le,{modelValue:T.model4Count,"onUpdate:modelValue":o[13]||(o[13]=e=>T.model4Count=e),modelModifiers:{number:!0},type:"number",placeholder:"高级模型积分"},null,8,["modelValue"])])),_:1}),f(s,{label:"MJ绘画积分",prop:"drawMjCount"},{default:b((()=>[f(le,{modelValue:T.drawMjCount,"onUpdate:modelValue":o[14]||(o[14]=e=>T.drawMjCount=e),modelModifiers:{number:!0},type:"number",placeholder:"MJ绘画积分"},null,8,["modelValue"])])),_:1}),f(s,{label:"设置套餐描述",prop:"des"},{default:b((()=>[f(le,{modelValue:T.des,"onUpdate:modelValue":o[15]||(o[15]=e=>T.des=e),type:"textarea",placeholder:"请填写套餐详细介绍信息、用于对外展示、建议控制套餐价格字数以便于用户端对齐格式...",rows:6},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});"function"==typeof U&&U(j);export{j as default};