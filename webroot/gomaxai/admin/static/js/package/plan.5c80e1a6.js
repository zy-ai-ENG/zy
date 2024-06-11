
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c9f6880f.js";import{A as a}from"./package.672b4104.js";import{I as l,w as t}from"../index/index.5ad1a92e.js";import{u as s}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as o,r as u,G as r,C as d,y as n,j as i,U as p,o as c,c as m,f,g,b as v,h as y,w as _,J as b,e as h,t as w,P as V,$ as k,q as x,s as z}from"../main-646ffc07.js";const C={class:"header"},j={class:"flex justify-end mr-5"},P=o({__name:"plan",setup(o){u();const x=u(0),z=u(!1),P=u(!1),U=r({name:"",page:1,size:10}),q=u(),T=u(0),I=r({name:null,title:null,desc:null,order:null,status:null}),M=r({name:[{required:!0,message:"请填写套餐类型名称",trigger:"blur"}],title:[{required:!0,message:"请填写细描述标题",trigger:"blur"}],desc:[{required:!0,message:"请填写详细描述（回车换行）",trigger:"blur"}],status:[{required:!0,message:"请选择开启状态",trigger:"change"}]}),Y=u([]);async function A(){try{P.value=!0;const e=await a.queryPackageType();P.value=!1;const{rows:l,count:t}=e.data;x.value=t,Y.value=l}catch(e){P.value=!1}}const D=d((()=>T.value?"更新类型":"新增类型")),F=d((()=>T.value?"确认更新":"确认新增"));function G(){var e;if(Y.value.length>=2)return V({type:"warn",message:"目前只能支持两类套餐！"});T.value=0,z.value=!0,null==(e=q.value)||e.resetFields()}return n((()=>{A()})),(o,u)=>{const r=i("el-alert"),d=i("Plus"),n=i("el-icon"),J=i("el-button"),S=e,O=i("el-table-column"),R=i("el-tag"),$=i("el-popconfirm"),B=i("el-table"),E=i("el-pagination"),H=i("el-row"),K=i("el-input"),L=i("el-form-item"),N=i("el-switch"),Q=i("el-col"),W=i("el-form"),X=i("el-dialog"),Z=p("loading");return c(),m("div",null,[f(S,{bottomPadding:"20px"},{default:g((()=>[v("div",C,[f(r,{closable:!1,"show-icon":"",title:"新版套餐类型说明",description:"新版本套餐分为不限时套餐和限时套餐！",type:"success"}),f(J,{type:"success",style:{float:"right"},onClick:G},{default:g((()=>[y(" 添加类型 "),f(n,{class:"ml-3"},{default:g((()=>[f(d)])),_:1})])),_:1})])])),_:1}),f(S,{bottomPadding:"20px",bottomMargin:"0px"},{default:g((()=>[_((c(),b(B,{border:"",data:Y.value,height:"62vh",style:{width:"100%"},size:"large"},{default:g((()=>[f(O,{fixed:"",prop:"name",label:"名称"}),f(O,{prop:"order",label:"排序ID",align:"center"}),f(O,{prop:"status",label:"状态"},{default:g((e=>[f(R,{type:h(l)[e.row.status]},{default:g((()=>[y(w(h(t)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),f(O,{prop:"title",label:"描述标题"}),f(O,{prop:"description",label:"描述内容"}),f(O,{prop:"createdAt",label:"创建时间",width:"200"},{default:g((e=>[y(w(h(s)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),f(O,{fixed:"right",label:"操作",width:"200"},{default:g((e=>[f(J,{link:"",type:"primary",size:"small",onClick:a=>{return l=e.row,T.value=l.id,k((()=>{const{title:e,desc:a,order:t,name:s,status:o}=l;Object.assign(I,{title:e,desc:a,order:t,name:s,status:o})})),void(z.value=!0);var l}},{default:g((()=>[y(" 修改类型 ")])),_:2},1032,["onClick"]),f($,{title:"确认删除此套餐类型么?",width:"200","icon-color":"red",onConfirm:l=>async function({id:e}){await a.delPackageType({id:e}),V({type:"success",message:"删除套餐类型成功！"}),A()}(e.row)},{reference:g((()=>[f(J,{link:"",type:"danger",size:"small"},{default:g((()=>[y(" 删除类型 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Z,P.value]]),f(H,{class:"flex justify-end mt-5"},{default:g((()=>[f(E,{"current-page":U.page,"onUpdate:currentPage":u[0]||(u[0]=e=>U.page=e),"page-size":U.size,"onUpdate:pageSize":u[1]||(u[1]=e=>U.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:x.value,onSizeChange:A,onCurrentChange:A},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),f(X,{modelValue:z.value,"onUpdate:modelValue":u[9]||(u[9]=e=>z.value=e),"close-on-click-modal":!1,title:D.value,width:"600",onClose:u[10]||(u[10]=e=>{return a=q.value,T.value=0,void(null==a||a.resetFields());var a})},{footer:g((()=>[v("span",j,[f(J,{onClick:u[7]||(u[7]=e=>z.value=!1)},{default:g((()=>[y("取消")])),_:1}),f(J,{type:"primary",onClick:u[8]||(u[8]=e=>async function(e){null==e||e.validate((async e=>{e&&(T.value?(await a.updatePackageType({id:T.value,...I}),V({type:"success",message:"更新类型成功！"})):(await a.createPackageType(I),V({type:"success",message:"创建新的类型成功！"})),z.value=!1,A())}))}(q.value))},{default:g((()=>[y(w(F.value),1)])),_:1})])])),default:g((()=>[f(W,{ref_key:"formPackageRef",ref:q,"label-position":"right","label-width":"120px",model:I,rules:M},{default:g((()=>[f(H,{gutter:20},{default:g((()=>[f(Q,{span:24},{default:g((()=>[f(L,{label:"类型名称",prop:"name"},{default:g((()=>[f(K,{modelValue:I.name,"onUpdate:modelValue":u[2]||(u[2]=e=>I.name=e),placeholder:"请填写套餐类型名称"},null,8,["modelValue"])])),_:1}),f(L,{label:"状态",prop:"status"},{default:g((()=>[f(N,{modelValue:I.status,"onUpdate:modelValue":u[3]||(u[3]=e=>I.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1}),f(L,{label:"设置排序",prop:"order"},{default:g((()=>[f(K,{modelValue:I.order,"onUpdate:modelValue":u[4]||(u[4]=e=>I.order=e),modelModifiers:{number:!0},type:"number",placeholder:"排序数字越大越靠前|套餐权重等级则反之"},null,8,["modelValue"])])),_:1}),f(L,{label:"描述标题",prop:"title"},{default:g((()=>[f(K,{modelValue:I.title,"onUpdate:modelValue":u[5]||(u[5]=e=>I.title=e),placeholder:"请填写详细描述的标题..."},null,8,["modelValue"])])),_:1}),f(L,{label:"描述详情",prop:"desc"},{default:g((()=>[f(K,{modelValue:I.desc,"onUpdate:modelValue":u[6]||(u[6]=e=>I.desc=e),type:"textarea",placeholder:"请填写类型详细介绍信息、用于对外展示、建议控制套餐价格字数以便于用户端对齐格式...",rows:6},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});"function"==typeof z&&z(P);const U=x(P,[["__scopeId","data-v-9f57292d"]]);export{U as default};
