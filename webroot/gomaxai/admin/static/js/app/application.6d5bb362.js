
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.129bbe0b.js";import{d as a,r as l,Q as t,B as o,x as r,h as s,R as d,o as u,c as p,e as i,f as n,S as c,U as m,b as f,k as g,m as y,l as b,w as v,I as w,t as _,a as h,J as A,W as V,Y as k,Z as x,E as I,n as C,q as z}from"../main-dd192319.js";import{u as U}from"../utcformatTime/utcformatTime.f6db2c52.js";import{E as D,d as q,Q as j}from"../index/index.5ad1a92e.js";const P={style:{maxWidth:"350px"}},Y={style:{maxHeight:"50px",cursor:"pointer"}},F={style:{maxWidth:"350px"}},G={style:{maxHeight:"50px",cursor:"pointer"}},M=["src"],W={class:"flex justify-end mr-5"},E=a({__name:"application",setup(a){const C=l(),z=l(0),E=l(!1),J=l(!1),K=t({catId:"",name:"",status:"",role:"",page:1,size:10}),O=l("/api/upload/file"),R=l(),S=l(0),B=l(!1),H=l(0),N=t({catId:"",name:"",preset:"",des:"",coverImg:"",demoData:"",order:100,status:0}),Q=t({catId:[{required:!0,message:"请选择App分类",trigger:"change"}],name:[{required:!0,message:"请填写App名称",trigger:"blur"}],preset:[{required:!0,message:"请填写App预设信息",trigger:"blur"}],des:[{required:!0,message:"请填写App描述",trigger:"blur"}],coverImg:[{required:!1,message:"请填写App封面图片地址",trigger:"blur"}],demoData:[{required:!1,message:"请填写App演示数据",trigger:"blur"}],order:[{required:!1,message:"请填写排序ID",trigger:"blur"}],status:[{required:!0,message:"请选择App状态",trigger:"change"}]}),T=l([]),L=l([]),Z=o((()=>S.value?"更新App":"新增App")),X=o((()=>S.value?"确认更新":"确认新增"));async function $(){try{J.value=!0;const e=await k.queryApp(K),{rows:a,count:l}=e.data;J.value=!1,z.value=l,T.value=a.sort(((e,a)=>a.order-e.order))}catch(e){J.value=!1}}const ee=(e,a)=>{N.coverImg=e.data},ae=e=>["image/png","image/jpeg","image/gif","image/webp"].includes(e.type)?e.size/1024>300?(I.error("当前限制文件最大不超过 300KB!"),!1):void 0:(I.error("当前系统仅支持 PNG、JPEG、GIF、和 WebP 格式的图片!"),!1);return r((()=>{$(),async function(){const e=await k.queryCats({size:100}),{rows:a}=e.data;L.value=a}()})),(a,l)=>{const t=s("el-alert"),o=e,r=s("el-option"),le=s("el-select"),te=s("el-form-item"),oe=s("el-input"),re=s("el-button"),se=s("Plus"),de=s("el-icon"),ue=s("el-form"),pe=s("el-image"),ie=s("el-table-column"),ne=s("el-tag"),ce=s("el-tooltip"),me=s("el-popconfirm"),fe=s("el-table"),ge=s("el-pagination"),ye=s("el-row"),be=s("el-col"),ve=s("el-switch"),we=s("el-upload"),_e=s("el-dialog"),he=d("loading");return u(),p("div",null,[i(o,{bottomPadding:"20px"},{default:n((()=>[i(t,{closable:!1,"show-icon":"",title:"应用说明",description:"[由于各模型的使用不同、暂时关闭其他模型的应用使用、仅仅支持使用OpenAi的key使用、请配置了openAi的key之后再进行使用、如果没有配置将不能使用此功能、但用户可以自定义选择模型]  ====     应用一旦创建、可能会被多处使用后续将限制删除、请保持良好习惯、规范命名分类、后续尽量变更而不是删除。用户创建的应用我们不允许删除、但是可以做一定的变更和修改、审核通过的应用也将限制用户更改、一旦通过或者拒绝、将不允许再次对其状态进行变更、请知悉！",type:"success"})])),_:1}),i(o,null,{default:n((()=>[i(ue,{ref_key:"formRef",ref:C,inline:!0,model:K},{default:n((()=>[i(te,{label:"App分类",prop:"catId"},{default:n((()=>[i(le,{modelValue:K.catId,"onUpdate:modelValue":l[0]||(l[0]=e=>K.catId=e),placeholder:"请选择App分类",clearable:"",style:{width:"192px"}},{default:n((()=>[(u(!0),p(c,null,m(f(L),(e=>(u(),w(r,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(te,{label:"App状态",prop:"status"},{default:n((()=>[i(le,{modelValue:K.status,"onUpdate:modelValue":l[1]||(l[1]=e=>K.status=e),placeholder:"请选择App状态",clearable:"",style:{width:"192px"}},{default:n((()=>[(u(!0),p(c,null,m(f(D),(e=>(u(),w(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(te,{label:"App名称",prop:"name"},{default:n((()=>[i(oe,{modelValue:K.name,"onUpdate:modelValue":l[2]||(l[2]=e=>K.name=e),placeholder:"App名称[模糊搜索]",clearable:"",onKeydown:g(y($,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])),_:1}),i(te,{label:"App角色",prop:"status"},{default:n((()=>[i(le,{modelValue:K.role,"onUpdate:modelValue":l[3]||(l[3]=e=>K.role=e),placeholder:"请选择App角色",clearable:"",style:{width:"192px"}},{default:n((()=>[(u(!0),p(c,null,m(f(q),(e=>(u(),w(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(te,null,{default:n((()=>[i(re,{type:"primary",onClick:$},{default:n((()=>[b(" 查询 ")])),_:1}),i(re,{onClick:l[4]||(l[4]=e=>{return null==(a=f(C))||a.resetFields(),void $();var a})},{default:n((()=>[b(" 重置 ")])),_:1})])),_:1}),i(re,{type:"success",style:{float:"right"},onClick:l[5]||(l[5]=e=>E.value=!0)},{default:n((()=>[b(" 创建应用 "),i(de,{class:"ml-3"},{default:n((()=>[i(se)])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),i(o,{bottomPadding:"20px",bottomMargin:"0px"},{default:n((()=>[v((u(),w(fe,{border:"",data:f(T),height:"52vh",style:{width:"100%"},size:"large"},{default:n((()=>[i(ie,{prop:"coverImg",label:"应用封面",width:"100"},{default:n((e=>[i(pe,{style:{height:"50px"},src:e.row.coverImg,fit:"fill"},null,8,["src"])])),_:1}),i(ie,{prop:"catName",label:"应用分类",width:"100"}),i(ie,{prop:"name",label:"应用名称",width:"120"}),i(ie,{prop:"status",label:"应用状态",width:"100"},{default:n((e=>[i(ne,{type:1===e.row.status?"success":"danger"},{default:n((()=>[b(_(f(j)[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),i(ie,{prop:"public",label:"是否共享",width:"100"},{default:n((e=>[i(ne,{type:e.row.public?"success":""},{default:n((()=>[b(_(e.row.public?"共享":"私有"),1)])),_:2},1032,["type"])])),_:1}),i(ie,{prop:"public",label:"应用创建角色",width:"120"},{default:n((e=>[i(ne,{type:"system"===e.row.role?"success":""},{default:n((()=>[b(_("system"===e.row.role?"系统":"用户"),1)])),_:2},1032,["type"])])),_:1}),i(ie,{prop:"order",label:"排序ID"}),b(" /> "),i(ie,{prop:"preset",label:"预设信息",width:"400"},{default:n((e=>[i(ce,{class:"box-item",effect:"dark",placement:"top-start"},{content:n((()=>[h("div",P,_(e.row.preset),1)])),default:n((()=>[h("div",Y,_(e.row.preset),1)])),_:2},1024)])),_:1}),i(ie,{prop:"des",label:"描述信息",width:"300"},{default:n((e=>[i(ce,{class:"box-item",effect:"dark",placement:"top-start"},{content:n((()=>[h("div",F,_(e.row.des),1)])),default:n((()=>[h("div",G,_(e.row.des),1)])),_:2},1024)])),_:1}),i(ie,{prop:"createdAt",label:"创建时间",width:"120"},{default:n((e=>[b(_(f(U)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),i(ie,{label:"操作",width:"200"},{default:n((e=>["system"===e.row.role||e.row.public?(u(),w(re,{key:0,link:"",type:"primary",size:"small",onClick:a=>function(e){S.value=e.id,B.value="user"===e.role,H.value=e.status;const{name:a,status:l,des:t,order:o,coverImg:r,catId:s,preset:d,demoData:u}=e;x((()=>{Object.assign(N,{name:a,status:l,des:t,order:o,coverImg:r,catId:s,preset:d,demoData:u})})),E.value=!0}(e.row)},{default:n((()=>[b(" 编辑 ")])),_:2},1032,["onClick"])):A("",!0),"system"===e.row.role?(u(),w(me,{key:1,title:"确认删除此应用么?",width:"200","icon-color":"red",onConfirm:a=>async function(e){await k.deleteApp({id:e.id}),I.success("删除分类成功"),$()}(e.row)},{reference:n((()=>[i(re,{link:"",type:"danger",size:"small"},{default:n((()=>[b(" 删除应用 ")])),_:1})])),_:2},1032,["onConfirm"])):A("",!0),"user"===e.row.role&&3===e.row.status?(u(),w(me,{key:2,title:"确认通过审核此应用么?",width:"200","icon-color":"red",onConfirm:a=>async function(e){const a=await k.auditPassApp({id:e.id});I({type:"success",message:a.data}),$()}(e.row)},{reference:n((()=>[i(re,{link:"",type:"success",size:"small"},{default:n((()=>[b(" 通过审核 ")])),_:1})])),_:2},1032,["onConfirm"])):A("",!0),"user"===e.row.role&&3===e.row.status?(u(),w(me,{key:3,title:"确认拒绝通过此应用共享请求么?",width:"200","icon-color":"red",onConfirm:a=>async function(e){const a=await k.auditFailApp({id:e.id});I({type:"success",message:a.data}),$()}(e.row)},{reference:n((()=>[i(re,{link:"",type:"danger",size:"small"},{default:n((()=>[b(" 拒绝审核 ")])),_:1})])),_:2},1032,["onConfirm"])):A("",!0)])),_:1})])),_:1},8,["data"])),[[he,f(J)]]),i(ye,{class:"flex justify-end mt-5"},{default:n((()=>[i(ge,{"current-page":K.page,"onUpdate:currentPage":l[6]||(l[6]=e=>K.page=e),"page-size":K.size,"onUpdate:pageSize":l[7]||(l[7]=e=>K.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:f(z),onSizeChange:$,onCurrentChange:$},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),i(_e,{modelValue:f(E),"onUpdate:modelValue":l[17]||(l[17]=e=>V(E)?E.value=e:null),"close-on-click-modal":!1,title:f(Z),width:"900",onClose:l[18]||(l[18]=e=>{return a=f(R),S.value=0,void(null==a||a.resetFields());var a})},{footer:n((()=>[h("span",W,[i(re,{onClick:l[15]||(l[15]=e=>E.value=!1)},{default:n((()=>[b("取消")])),_:1}),i(re,{type:"primary",onClick:l[16]||(l[16]=e=>{var a;null==(a=f(R))||a.validate((async e=>{if(e){if(S.value){const e={id:S.value,...N};B.value&&Object.assign(e,{status:H.value}),await k.updateApp(e),I({type:"success",message:"更新应用成功！"})}else await k.createApp(N),I({type:"success",message:"创建应用成功！"});E.value=!1,$()}}))})},{default:n((()=>[b(_(f(X)),1)])),_:1})])])),default:n((()=>[i(ue,{ref_key:"formPackageRef",ref:R,"label-position":"right","label-width":"100px",model:N,rules:Q},{default:n((()=>[i(ye,{gutter:10},{default:n((()=>[i(be,{span:12},{default:n((()=>[i(te,{label:"App分类",prop:"catId"},{default:n((()=>[i(le,{modelValue:N.catId,"onUpdate:modelValue":l[8]||(l[8]=e=>N.catId=e),placeholder:"请选择App分类",clearable:"",style:{width:"100%"}},{default:n((()=>[(u(!0),p(c,null,m(f(L),(e=>(u(),w(r,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(te,{label:"App名称",prop:"name"},{default:n((()=>[i(oe,{modelValue:N.name,"onUpdate:modelValue":l[9]||(l[9]=e=>N.name=e),placeholder:"请填写App名称"},null,8,["modelValue"])])),_:1}),i(te,{label:"App预设",prop:"preset"},{default:n((()=>[i(oe,{modelValue:N.preset,"onUpdate:modelValue":l[10]||(l[10]=e=>N.preset=e),type:"textarea",placeholder:"请填写App介绍信息、用于对外展示...",rows:4},null,8,["modelValue"])])),_:1}),i(te,{label:"App描述",prop:"des"},{default:n((()=>[i(oe,{modelValue:N.des,"onUpdate:modelValue":l[11]||(l[11]=e=>N.des=e),type:"textarea",placeholder:"请填写App介绍信息、用于场景内置信息...",rows:4},null,8,["modelValue"])])),_:1})])),_:1}),i(be,{span:12},{default:n((()=>[f(B)?A("",!0):(u(),w(te,{key:0,label:"App启停",prop:"status"},{default:n((()=>[i(ve,{modelValue:N.status,"onUpdate:modelValue":l[12]||(l[12]=e=>N.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})),i(te,{label:"排序ID",prop:"order"},{default:n((()=>[i(oe,{modelValue:N.order,"onUpdate:modelValue":l[13]||(l[13]=e=>N.order=e),modelModifiers:{number:!0},placeholder:"请填写排序ID[数字越大越靠前]"},null,8,["modelValue"])])),_:1}),i(te,{label:"应用Logo",prop:"coverImg"},{default:n((()=>[i(we,{class:"avatar-uploader",action:f(O),"show-file-list":!1,"on-success":ee,"before-upload":ae},{default:n((()=>[N.coverImg?(u(),p("img",{key:0,src:N.coverImg,style:{width:"100px"},class:"avatar"},null,8,M)):(u(),w(de,{key:1,class:"avatar-uploader-icon"},{default:n((()=>[i(se)])),_:1}))])),_:1},8,["action"])])),_:1}),i(te,{label:"示例内容",prop:"demoData"},{default:n((()=>[i(oe,{modelValue:N.demoData,"onUpdate:modelValue":l[14]||(l[14]=e=>N.demoData=e),type:"textarea",placeholder:"请填写App的demo示例数据、每换行一次表示一个新的示例...",rows:4},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});"function"==typeof z&&z(E);const J=C(E,[["__scopeId","data-v-08cb342a"]]);export{J as default};
