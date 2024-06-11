
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.0db9df33.js";import a from"../components/mjSuggestWord.8af7ead0.js";import{A as t}from"../mj/mj.34922543.js";import{u as s}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as l,r as o,Q as r,x as n,h as i,R as u,o as p,c as d,e as c,f as g,l as m,w as f,I as b,a as _,t as h,b as w,E as j,n as v,q as x}from"../main-0579ff80.js";import"../use/useUploader.58a67e7c.js";const y=["src"],z=l({__name:"suggest-words",setup(l){const v=o(),x=o(!1),z=o([]),C=o(0),A=r({page:1,size:20});o();const S=async()=>{try{x.value=!0;const e=await t.queryMjSuggestWord(A),{rows:a,count:s}=e.data;x.value=!1,C.value=s,z.value=a}catch(e){x.value=!1}},M=async()=>{v.value.open()};return n((()=>{S()})),(l,o)=>{const r=i("el-alert"),n=i("Plus"),P=i("el-icon"),k=i("el-button"),E=e,U=i("el-table-column"),W=i("el-popconfirm"),q=i("el-table"),I=i("el-pagination"),R=i("el-row"),T=u("loading");return p(),d("div",null,[c(a,{ref_key:"mjManagerRef",ref:v,onFresh:S},null,512),c(E,{bottomPadding:"20px",class:"header"},{default:g((()=>[c(r,{"show-icon":"",title:"推荐关键词说明",closable:!1,description:"此处的推荐关键词是给用户可以选择的默认绘画关键词！",type:"success"}),c(k,{type:"success",class:"ml-3",size:"large",onClick:M},{default:g((()=>[m(" 添加关键词 "),c(P,{class:"ml-3"},{default:g((()=>[c(n)])),_:1})])),_:1})])),_:1}),c(E,{bottomPadding:"20px",bottomMargin:"0px"},{default:g((()=>[f((p(),b(q,{border:"",data:z.value,height:"64vh",width:"100%",size:"large"},{default:g((()=>[c(U,{prop:"image",label:"图标"},{default:g((e=>[_("img",{src:e.row.image,style:{width:"64px",height:"64px"},alt:""},null,8,y)])),_:1}),c(U,{prop:"suggestCn",label:"关键词中文"}),c(U,{prop:"suggestEn",label:"关键词英文"}),c(U,{prop:"order",label:"排序权重"}),c(U,{prop:"createdAt",label:"创建时间"},{default:g((e=>[_("p",null,h(w(s)(e.row.createdAt)),1)])),_:1}),c(U,{prop:"updatedAt",label:"更新时间"},{default:g((e=>[_("p",null,h(w(s)(e.row.updatedAt)),1)])),_:1}),c(U,{fixed:"right",label:"操作",width:"280",align:"center"},{default:g((e=>[c(W,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:a=>(async e=>{await t.removeMjSuggestWord({id:e.id}),j.success("删除推荐关键词成功！"),await S()})(e.row)},{reference:g((()=>[c(k,{link:"",type:"danger",size:"small"},{default:g((()=>[m(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[T,x.value]]),c(R,{class:"flex justify-end mt-5 pb-5"},{default:g((()=>[c(I,{"current-page":A.page,"onUpdate:currentPage":o[0]||(o[0]=e=>A.page=e),"page-size":A.size,"onUpdate:pageSize":o[1]||(o[1]=e=>A.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:C.value,onSizeChange:S,onCurrentChange:S},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof x&&x(z);const C=v(z,[["__scopeId","data-v-7f8e0511"]]);export{C as default};
