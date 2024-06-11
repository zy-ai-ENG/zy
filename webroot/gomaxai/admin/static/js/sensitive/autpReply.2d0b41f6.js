
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.35ca4747.js";import{X as a,d as l,Q as t,r as o,B as s,x as r,h as u,R as n,o as d,c as p,e as i,f as m,k as c,m as f,S as g,U as w,b as y,l as _,w as v,I as b,t as h,a as x,W as V,E as k,Z as C,q as z}from"../main-78588ec5.js";import{u as U}from"../utcformatTime/utcformatTime.f6db2c52.js";import{f as Y,Q as j}from"../index/index.5ad1a92e.js";const q=e=>a.get("autoreply/query",{params:e}),A=e=>a.post("autoreply/del",e),M=e=>a.post("autoreply/add",e),R=e=>a.post("autoreply/update",e),D={class:"dialog-footer"},P=l({__name:"autpReply",setup(a){const l=t({prompt:"",status:void 0,page:1,size:10}),z=o(!1),P=o(!1),S=o(0),F=o(0),I=o(),K=o(),Q=t({status:0,prompt:"",answer:""}),T=t({status:[{required:!0,message:"请选择套餐类型",trigger:"change"}],prompt:[{required:!0,message:"请填写预设问题",trigger:"blur"}],answer:[{required:!0,message:"请填写回复答案",trigger:"blur"}]}),B=o([]);async function E(){try{P.value=!0;const e=await q(l),{rows:a,count:t}=e.data;P.value=!1,F.value=t,B.value=a}catch(e){P.value=!1}}const G=s((()=>0!==S.value));return r((()=>{E()})),(a,t)=>{const o=u("el-alert"),s=e,r=u("el-input"),q=u("el-form-item"),J=u("el-option"),O=u("el-select"),W=u("el-button"),X=u("Plus"),Z=u("el-icon"),H=u("el-form"),L=u("el-table-column"),N=u("el-tag"),$=u("el-popconfirm"),ee=u("el-table"),ae=u("el-pagination"),le=u("el-row"),te=u("el-switch"),oe=u("el-dialog"),se=n("loading");return d(),p("div",null,[i(s,{bottomPadding:"20px"},{default:m((()=>[i(o,{closable:!1,"show-icon":"",title:"自定义回复说明",description:"当前可设置自定义回复、且可以多种关键词触发回复相同内容、可以开启精准匹配或模糊匹配用户设置自定义回复程度。",type:"success"})])),_:1}),i(s,null,{default:m((()=>[i(H,{ref_key:"formRef",ref:I,inline:!0,model:l},{default:m((()=>[i(q,{label:"自定义问题",prop:"prompt"},{default:m((()=>[i(r,{modelValue:l.prompt,"onUpdate:modelValue":t[0]||(t[0]=e=>l.prompt=e),placeholder:"自定义问题[模糊搜索]",onKeydown:c(f(E,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])),_:1}),i(q,{label:"问题启用状态",prop:"status"},{default:m((()=>[i(O,{modelValue:l.status,"onUpdate:modelValue":t[1]||(t[1]=e=>l.status=e),placeholder:"请选择问题启用状态",clearable:"",style:{width:"192px"}},{default:m((()=>[(d(!0),p(g,null,w(y(Y),(e=>(d(),b(J,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(q,null,{default:m((()=>[i(W,{type:"primary",onClick:E},{default:m((()=>[_(" 查询 ")])),_:1}),i(W,{onClick:t[2]||(t[2]=e=>{return null==(a=y(I))||a.resetFields(),void E();var a})},{default:m((()=>[_(" 重置 ")])),_:1})])),_:1}),i(W,{type:"success",style:{float:"right"},onClick:t[3]||(t[3]=e=>z.value=!0)},{default:m((()=>[_(" 添加新的自动回复 "),i(Z,{class:"ml-3"},{default:m((()=>[i(X)])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),i(s,{bottomPadding:"20px",bottomMargin:"0px"},{default:m((()=>[v((d(),b(ee,{border:"",data:y(B),height:"54vh",style:{width:"100%"},size:"large"},{default:m((()=>[i(L,{prop:"prompt",label:"提问关键词"}),i(L,{prop:"answer",label:"回复答案"}),i(L,{prop:"status",label:"问题状态",width:"120"},{default:m((e=>[i(N,{type:1===e.row.status?"success":"daner"},{default:m((()=>[_(h(y(j)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),i(L,{prop:"createdAt",label:"创建时间",width:"200"},{default:m((e=>[_(h(y(U)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),i(L,{prop:"updatedAt",label:"最后修改时间",width:"200"},{default:m((e=>[_(h(y(U)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),i(L,{fixed:"right",label:"操作",width:"200"},{default:m((e=>[i(W,{link:"",type:"primary",size:"small",onClick:a=>function(e){S.value=e.id;const{status:a,prompt:l,answer:t}=e;z.value=!0,C((()=>{Object.assign(Q,{status:a,prompt:l,answer:t})}))}(e.row)},{default:m((()=>[_(" 编辑 ")])),_:2},1032,["onClick"]),i($,{"confirm-button-text":"确认删除","cancel-button-text":"放弃",type:"danger",width:"230px","icon-color":"red",title:"确定删除本条自动回复问题么？",onConfirm:a=>async function(e){await A({id:e}),k.success("删除自定义问题成功"),await E()}(e.row.id)},{reference:m((()=>[i(W,{link:"",type:"danger",size:"small"},{default:m((()=>[_(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[se,y(P)]]),i(le,{class:"flex justify-end mt-5"},{default:m((()=>[i(ae,{"current-page":l.page,"onUpdate:currentPage":t[4]||(t[4]=e=>l.page=e),"page-size":l.size,"onUpdate:pageSize":t[5]||(t[5]=e=>l.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:y(F),onSizeChange:E,onCurrentChange:E},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),i(oe,{modelValue:y(z),"onUpdate:modelValue":t[11]||(t[11]=e=>V(z)?z.value=e:null),title:(y(G)?"编辑":"添加")+"自动回复问题",width:"480",onClose:t[12]||(t[12]=e=>{return null==(a=y(K))||a.resetFields(),void(S.value=0);var a})},{footer:m((()=>[x("span",D,[i(W,{onClick:t[9]||(t[9]=e=>z.value=!1)},{default:m((()=>[_("放弃生成")])),_:1}),i(W,{type:"primary",onClick:t[10]||(t[10]=e=>async function(e){null==e||e.validate((async e=>{if(!e)return k.warning("请按规则填写所有信息！");0===S.value?(await M(Q),k.success("添加自定义问题成功")):(await R({id:S.value,...Q}),k.success("更新自定义问题成功")),z.value=!1,E()}))}(y(K)))},{default:m((()=>[_(h((y(G)?"更新":"新增")+"回复 "),1)])),_:1})])])),default:m((()=>[i(H,{ref_key:"formAutoReplyRef",ref:K,"label-position":"right","label-width":"80px",model:Q,rules:T},{default:m((()=>[i(q,{label:"开启状态",prop:"status"},{default:m((()=>[i(te,{modelValue:Q.status,"onUpdate:modelValue":t[6]||(t[6]=e=>Q.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1}),i(q,{label:"提问问题",prop:"prompt"},{default:m((()=>[i(r,{modelValue:Q.prompt,"onUpdate:modelValue":t[7]||(t[7]=e=>Q.prompt=e),type:"textarea",rows:5,placeholder:"请填写预设提问问题"},null,8,["modelValue"])])),_:1}),i(q,{label:"回复问题",prop:"answer"},{default:m((()=>[i(r,{modelValue:Q.answer,"onUpdate:modelValue":t[8]||(t[8]=e=>Q.answer=e),type:"textarea",rows:5,placeholder:"请填写预设回复答案"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});"function"==typeof z&&z(P);export{P as default};
