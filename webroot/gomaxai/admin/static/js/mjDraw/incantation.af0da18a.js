
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as a}from"../index/index.227bd596.js";import e from"../components/mjIncantation.102b36e2.js";import t from"../components/mjDetail.caed8157.js";import{A as l}from"../mj/mj.5e91af9b.js";import{u as n}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as s,r as o,Q as i,x as r,h as p,R as c,o as u,c as d,e as m,f,l as g,w as y,I as _,a as v,t as b,b as h,E as j,n as w,q as x}from"../main-32165e1b.js";const z=s({__name:"incantation",setup(s){const w=o(),x=o(),z=o(!1),C=o([]),k=o(0),A=i({page:1,size:20});o();const M=async()=>{try{z.value=!0;const a=await l.queryMjIncantation(A),{rows:e,count:t}=a.data;z.value=!1,k.value=t,C.value=e}catch(a){z.value=!1}},I=async()=>{x.value.open()},P=o([]),q=new Map;(async()=>{const a=await l.queryAllMjIncantClassify({level:2}).then((a=>a.data));P.value=a,a.length&&a.forEach((a=>{q.set(a.id,a.classifyName)}))})();return r((()=>{M()})),(s,o)=>{const i=p("el-alert"),r=p("Plus"),E=p("el-icon"),R=p("el-button"),D=a,S=p("el-table-column"),T=p("el-popconfirm"),U=p("el-table"),F=p("el-pagination"),H=p("el-row"),J=c("loading");return u(),d("div",null,[m(e,{ref_key:"mjManagerRef",ref:x,list:P.value,onFresh:M},null,8,["list"]),m(t,{ref_key:"mjDetailRef",ref:w},null,512),m(D,{bottomPadding:"20px",class:"header"},{default:f((()=>[m(i,{"show-icon":"",title:"咒语说明",closable:!1,description:"此处的咒语用于前端灵活搭配不同词语组合！",type:"success"}),m(R,{type:"success",class:"ml-3",size:"large",onClick:I},{default:f((()=>[g(" 添加咒语 "),m(E,{class:"ml-3"},{default:f((()=>[m(r)])),_:1})])),_:1})])),_:1}),m(D,{bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[y((u(),_(U,{border:"",data:C.value,height:"64vh",width:"100%",size:"large"},{default:f((()=>[m(S,{prop:"incantationCn",label:"名称"}),m(S,{prop:"incantationEn",label:"英文翻译"}),m(S,{prop:"pid",label:"分类"},{default:f((a=>{return[v("p",null,b((e=a.row.pid,q.get(e)||"")),1)];var e})),_:1}),m(S,{prop:"createdAt",label:"创建时间"},{default:f((a=>[v("p",null,b(h(n)(a.row.createdAt)),1)])),_:1}),m(S,{prop:"updatedAt",label:"更新时间"},{default:f((a=>[v("p",null,b(h(n)(a.row.updatedAt)),1)])),_:1}),m(S,{fixed:"right",label:"操作",width:"280",align:"center"},{default:f((a=>[m(R,{link:"",type:"primary",size:"small",onClick:e=>(async a=>{x.value.open(a.id)})(a.row)},{default:f((()=>[g(" 编辑 ")])),_:2},1032,["onClick"]),m(T,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:e=>(async a=>{await l.removeMjIncantation({id:a.id}),j.success("删除MJ账号成功！"),await M()})(a.row)},{reference:f((()=>[m(R,{link:"",type:"danger",size:"small"},{default:f((()=>[g(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[J,z.value]]),m(H,{class:"flex justify-end mt-5 pb-5"},{default:f((()=>[m(F,{"current-page":A.page,"onUpdate:currentPage":o[0]||(o[0]=a=>A.page=a),"page-size":A.size,"onUpdate:pageSize":o[1]||(o[1]=a=>A.size=a),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:k.value,onSizeChange:M,onCurrentChange:M},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof x&&x(z);const C=w(z,[["__scopeId","data-v-5af83356"]]);export{C as default};