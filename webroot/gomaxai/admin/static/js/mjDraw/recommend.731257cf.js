
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c9f6880f.js";import a from"../components/mjRecommendManager.ee5f20d6.js";import t from"../components/mjDetail.ee67cc67.js";import{k as s,A as l}from"../index/index.5ad1a92e.js";import{d as n,r as o,ay as r,G as i,y as c,j as p,U as m,o as d,c as u,f,g,h as b,w as y,J as j,P as h,q as w,s as _}from"../main-646ffc07.js";import{A as v}from"../mj/mj.482967bc.js";const x=n({__name:"recommend",setup(n){const w=o(),_=o(),x=o(!1),z=o([]),k=o(0);r(s),r(l);const C=i({account:"",channelId:"",enable:0,page:1,size:20});o();const P=async()=>{try{x.value=!0;const e=await v.queryMjParamByPage(C),{rows:a,count:t}=e.data;x.value=!1,k.value=t,z.value=a}catch(e){x.value=!1}},M=async()=>{_.value.open()};return c((()=>{P()})),(s,l)=>{const n=p("el-alert"),o=p("Plus"),r=p("el-icon"),i=p("el-button"),c=e,I=p("el-table-column"),R=p("el-popconfirm"),U=p("el-table"),q=p("el-pagination"),A=p("el-row"),B=m("loading");return d(),u("div",null,[f(a,{ref_key:"mjManagerRef",ref:_,onFresh:P},null,512),f(t,{ref_key:"mjDetailRef",ref:w},null,512),f(c,{bottomPadding:"20px",class:"header"},{default:g((()=>[f(n,{"show-icon":"",title:"关键词说明",closable:!1,description:"此处的提示词将会在用户端的输入框中聚焦的时候自动展示出来、用户点击你给与的预设将直接将提示词写入输入框中！",type:"success"}),f(i,{type:"success",class:"ml-3",size:"large",onClick:M},{default:g((()=>[b(" 添加关键词 "),f(r,{class:"ml-3"},{default:g((()=>[f(o)])),_:1})])),_:1})])),_:1}),f(c,{bottomPadding:"20px",bottomMargin:"0px"},{default:g((()=>[y((d(),j(U,{border:"",data:z.value,height:"53vh",width:"100%",size:"large"},{default:g((()=>[f(I,{prop:"icon",label:"图标"}),f(I,{prop:"keywordChinese",label:"名称"}),f(I,{prop:"keywordEnglish",label:"英文翻译"}),f(I,{prop:"createTime",label:"创建时间"}),f(I,{prop:"updateTime",label:"更新时间"}),f(I,{fixed:"right",label:"操作",width:"280",align:"center"},{default:g((e=>[f(i,{link:"",type:"primary",size:"small",onClick:a=>(async e=>{const a={id:e.id,enable:1===e.enable?2:1};(await v.setMjParamEnable(a)).success&&h({type:"success",message:`账户${1===e.enable?"停用":"启用"}成功！`}),await P()})(e.row)},{default:g((()=>[b(" 翻译 ")])),_:2},1032,["onClick"]),f(R,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:a=>(async e=>{await v.removeMjParam({id:e.id}),h.success("删除MJ账号成功！"),await P()})(e.row)},{reference:g((()=>[f(i,{link:"",type:"danger",size:"small"},{default:g((()=>[b(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[B,x.value]]),f(A,{class:"flex justify-end mt-5 pb-5"},{default:g((()=>[f(q,{"current-page":C.page,"onUpdate:currentPage":l[0]||(l[0]=e=>C.page=e),"page-size":C.size,"onUpdate:pageSize":l[1]||(l[1]=e=>C.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:k.value,onSizeChange:P,onCurrentChange:P},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof _&&_(x);const z=w(x,[["__scopeId","data-v-2b69bd38"]]);export{z as default};