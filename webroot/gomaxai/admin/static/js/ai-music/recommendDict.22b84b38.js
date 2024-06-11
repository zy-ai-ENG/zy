
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var e=Object.defineProperty,l=(l,a,t)=>(((l,a,t)=>{a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t})(l,"symbol"!=typeof a?a+"":a,t),t);import{_ as a}from"../index/index.227bd596.js";import{u as t}from"../utcformatTime/utcformatTime.f6db2c52.js";import{Z as i,d,r as u,Q as s,x as o,h as r,R as c,o as n,c as p,e as m,f,l as y,a as g,b,w as h,I as _,t as w,E as V,q as v}from"../main-32165e1b.js";class x{constructor(){l(this,"id"),l(this,"dictType"),l(this,"dictName"),l(this,"dictValue"),l(this,"deleteFlag"),l(this,"createdAt"),l(this,"updatedAt")}}const k=e=>i.get("/dict/page",{params:e}),T=e=>i.post("/dict/save",e),N=e=>i.post("/dict/delete",e),z={style:{float:"right"}},C={key:0},U={key:1},j={key:2},q=d({__name:"recommendDict",setup(e){const l=u(),i=u(0),d=u(!1),v=u(!1),q=s({}),A=s({dictType:"",dictName:"",page:1,size:15}),D=u([]);async function P(){try{v.value=!0;const e=await k(A),{rows:l,count:a}=e.data;i.value=a,v.value=!1,D.value=l}catch(e){v.value=!1}}const Y=s({dictType:[{required:!0,message:"类型不能为空",trigger:"blur"}],dictName:[{required:!0,message:"名称不能为空",trigger:"blur"}],dictValue:[{required:!0,message:"内容不能为空",trigger:"blur"}]});function M(e){d.value=!0,q.id=e.id,q.dictType=e.dictType,q.dictName=e.dictName,q.dictValue=e.dictValue}async function F(){(await T(q)).data&&V({type:"success",message:"操作成功！"}),d.value=!1,P()}return o((()=>P())),(e,u)=>{const s=r("el-option"),o=r("el-select"),k=r("el-form-item"),T=r("el-input"),I=r("el-button"),R=r("Plus"),S=r("el-icon"),E=r("el-form"),H=a,L=r("el-table-column"),O=r("el-popconfirm"),Q=r("el-table"),Z=r("el-pagination"),B=r("el-row"),G=a,J=r("el-dialog"),K=c("loading");return n(),p("div",null,[m(H,null,{default:f((()=>[m(E,{ref_key:"formRef",ref:l,inline:!0,model:A},{default:f((()=>[m(k,{label:"类型",prop:"dictType"},{default:f((()=>[m(o,{modelValue:A.dictType,"onUpdate:modelValue":u[0]||(u[0]=e=>A.dictType=e),placeholder:"请选择类型",clearable:"",style:{width:"192px"}},{default:f((()=>[m(s,{key:"music-style",label:"音乐风格",value:"music-style"}),m(s,{key:"music-lyrics",label:"音乐歌词",value:"music-lyrics"})])),_:1},8,["modelValue"])])),_:1}),m(k,{label:"名称关键字",prop:"dictName"},{default:f((()=>[m(T,{modelValue:A.dictName,"onUpdate:modelValue":u[1]||(u[1]=e=>A.dictName=e),placeholder:"请输入字典关键字",clearable:"",style:{width:"192px"}},null,8,["modelValue"])])),_:1}),m(k,null,{default:f((()=>[m(I,{type:"primary",onClick:P},{default:f((()=>[y(" 查询 ")])),_:1}),m(I,{onClick:u[2]||(u[2]=e=>{return null==(a=l.value)||a.resetFields(),void P();var a})},{default:f((()=>[y(" 重置 ")])),_:1})])),_:1}),g("span",z,[m(I,{type:"success",onClick:u[3]||(u[3]=e=>M(new(b(x))))},{default:f((()=>[y(" 添加内容 "),m(S,{class:"ml-3"},{default:f((()=>[m(R)])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1}),m(G,{bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[h((n(),_(Q,{border:"",height:"66vh",data:D.value,style:{width:"100%"},size:"large"},{default:f((()=>[m(L,{fixed:"",prop:"id",label:"ID",width:"80"}),m(L,{prop:"dictType",label:"类型",width:"150"},{default:f((e=>["music-style"===e.row.dictType?(n(),p("span",C,"音乐风格")):"music-lyrics"===e.row.dictType?(n(),p("span",U,"音乐歌词")):(n(),p("span",j,"--"))])),_:1}),m(L,{prop:"dictName",label:"名称",width:"150"}),m(L,{prop:"dictValue",label:"内容",align:"center"}),m(L,{prop:"createdAt",label:"创建时间",width:"200",align:"center"},{default:f((e=>[y(w(b(t)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),m(L,{fixed:"right",label:"操作",width:"250",align:"center"},{default:f((e=>[m(I,{link:"",type:"primary",size:"small",onClick:l=>M(e.row)},{default:f((()=>[y(" 编辑 ")])),_:2},1032,["onClick"]),m(O,{title:"确认删除?","confirm-button-text":"确认删除",onConfirm:l=>async function(e){(await N({ids:[e.id]})).data&&V({type:"success",message:"操作成功！"}),P()}(e.row)},{reference:f((()=>[m(I,{link:"",type:"danger"},{default:f((()=>[y(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[K,v.value]]),m(B,{class:"flex justify-end mt-5"},{default:f((()=>[m(Z,{class:"mr-5",total:i.value,onSizeChange:P,"page-sizes":[15,30,50,100],onCurrentChange:P,"page-size":A.size,"onUpdate:pageSize":u[4]||(u[4]=e=>A.size=e),"current-page":A.page,"onUpdate:currentPage":u[5]||(u[5]=e=>A.page=e),layout:"total, sizes, prev, pager, next, jumper"},null,8,["total","page-size","current-page"])])),_:1})])),_:1}),m(J,{modelValue:d.value,"onUpdate:modelValue":u[9]||(u[9]=e=>d.value=e),title:q.id?"编辑":"新增",width:"500px"},{default:f((()=>[m(E,{model:q},{default:f((()=>[m(k,{label:"类型","label-width":"90px",rules:Y.dictType},{default:f((()=>[m(o,{modelValue:q.dictType,"onUpdate:modelValue":u[6]||(u[6]=e=>q.dictType=e),placeholder:"请选择类型"},{default:f((()=>[m(s,{key:"music-style",label:"音乐风格",value:"music-style"}),m(s,{key:"music-lyrics",label:"音乐歌词",value:"music-lyrics"})])),_:1},8,["modelValue"])])),_:1},8,["rules"]),m(k,{label:"名称","label-width":"90px",rules:Y.dictName},{default:f((()=>[m(T,{modelValue:q.dictName,"onUpdate:modelValue":u[7]||(u[7]=e=>q.dictName=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1},8,["rules"]),m(k,{label:"内容","label-width":"90px",rules:Y.dictValue},{default:f((()=>[m(T,{modelValue:q.dictValue,"onUpdate:modelValue":u[8]||(u[8]=e=>q.dictValue=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1},8,["rules"]),m(k,null,{default:f((()=>[m(I,{style:{width:"100%"},type:"primary",onClick:F},{default:f((()=>[y(" 确定 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])])}}});"function"==typeof v&&v(q);export{q as default};