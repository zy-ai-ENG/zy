
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{r as e,X as l,d as a,Q as t,B as o,x as d,h as u,R as s,o as r,c as n,e as i,f as p,S as c,U as m,b as f,l as g,a as v,w as h,I as _,t as y,W as b,at as k,J as w,E as V,Y as x,a0 as C,_ as I,p as U,i as T,n as z,q as N}from"../main-01383ffb.js";import{_ as P}from"../index/index.3ad5ed39.js";import{A}from"./gpts.cb2936ec.js";import{u as G}from"../utcformatTime/utcformatTime.f6db2c52.js";import{Q as D}from"../index/index.4485e23d.js";import{a as j}from"../system/system.4d400a60.js";const S=e=>(U("data-v-0dfb996d"),e=e(),T(),e),q={style:{float:"right"}},M={key:0,style:{height:"70vh",width:"100%"}},B={key:1,style:{height:"68vh","overflow-y":"auto","overflow-x":"hidden"}},E=["onClick"],R={class:"flex-1"},Y={class:"left-text"},F={class:"model-name"},H={class:"flex items-center"},L={class:"line-clamp-2"},Q={class:"gpt-image"},J={class:"download-svg"},O={key:0,class:"checked"},K={class:"rotate"},W=["src"],X=S((()=>v("div",{style:{width:"250px"}}," 是否支持绘画功能 ",-1))),$=S((()=>v("div",{style:{width:"250px"}}," 启用上传,前端将具备上传文件的操作，请注意模型模型支持的情况启用才有效 ",-1))),Z=S((()=>v("div",{style:{width:"250px"}}," 启用语音,前端将具备上传音频文件的的操作，请注意模型模型支持的情况启用才有效 ",-1))),ee=S((()=>v("div",{style:{width:"250px"}}," 应用启用状态、一旦锁定当前key将停止工作！ ",-1))),le={class:"flex justify-end mr-5"},ae=a({__name:"model",setup(a){const{scrollToBottomIfAtBottom:U}=function(){const a=e(null);return{scrollRef:a,scrollToBottom:async()=>{await l(),a.value&&(a.value.scrollTop=a.value.scrollHeight)},scrollToTop:async()=>{await l(),a.value&&(a.value.scrollTop=0)},scrollToBottomIfAtBottom:async()=>{if(await l(),a.value){const e=150;a.value.scrollHeight-a.value.scrollTop-a.value.clientHeight<=e&&(a.value.scrollTop=a.value.scrollHeight)}}}}(),T=e(),z=e(),N=e(0),S=e(!1),ae=e(!1),te=e(!1),oe=e(!1),de=t({modelName:"",status:null,back:1,page:1,size:20}),ue=t({title:"发现GPT"}),se=e(),re=e(0),ne=e([]),ie=t({sortId:1,groupId:"",modelId:"",modelName:"",desc:"",logo:"",demoData:"",status:!0,model:"",isDraw:!1,canAudio:!1,canUpload:!1,gptsApp:!1,recommend:!1,useCount:0,collectCount:0,remark:""}),pe=e([]),ce=t({groupId:[{required:!0,message:"请选择应用类别",trigger:"blur"}],gptsApp:[{required:!0,message:"请选择是否GPTS应用",trigger:"blur"},{validator(e,l,a){if(l){const e=pe.value.find((e=>e.id===ie.groupId));e?e.key||a("当前应用类别未配置GPTS key，请先配置应用类别GPTS key 或者使用其他类别"):a("请先选择应用类别")}return a()}}],modelName:[{required:!0,message:"请填写您的应用名称",trigger:"blur"}],desc:[{required:!0,message:"请填写您的调用应用描述",trigger:"blur"}],logo:[{required:!0,message:"请选择logo",trigger:"blur"}],modelId:[{required:!0,message:"请填写您的调用模型的Id(官网产生的id)",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],isDraw:[{required:!1,message:"请选择当前key是否作为基础绘画key",trigger:"change"}]});const me=o((()=>re.value?"更新应用":"新增应用")),fe=o((()=>re.value?"确认更新":"确认新增")),ge=e([]);async function ve(){try{ae.value=!0;const e=await A.queryModels(de);ae.value=!1;const{rows:l,count:a}=e.data;N.value=a,ge.value=l}catch(e){ae.value=!1}}const he=e=>"image/jpeg"!==e.type&&"image/png"!==e.type?(V.error("只支持jpg和png格式"),!1):!(e.size/1024/1024>2)||(V.error("图片不能大于2M!"),!1);!async function(){try{const e=await A.queryGptsGroup({page:1,size:20}).then((e=>e.data)),{rows:l}=e;return pe.value=l,!0}catch(e){ae.value=!1}}(),d((async()=>{await ve()}));const _e=async()=>{te.value=!0;const e=`https://gpts.ddaiai.com/open/gptsapi/list/${ne.value.length}`,l=await C.get(e).then((e=>e.data)).then((e=>e.data.list)).then((e=>e.map((e=>({modelName:e.name,logo:e.logo,useCount:+e.use_cnt,modelId:e.gid,desc:e.info,checked:!1})))));ne.value=ne.value.concat(l),U(),te.value=!1},ye=()=>{ne.value.every((e=>e.checked))?ne.value.forEach((e=>e.checked=!1)):ne.value.forEach((e=>e.checked=!0))},be=()=>{ne.value.some((e=>e.checked))?ne.value.forEach((e=>e.checked=!1)):ne.value.forEach((e=>e.checked=!0))},ke=async()=>{var e;const l=ne.value.filter((e=>e.checked));0!==l.length?null==(e=z.value)||e.validate((async e=>{if(e){const{groupId:e}=ie,a=l.map((l=>({groupId:e,...l})));await A.insertModelsBatch(a).then((e=>e.data))&&V.success("批量添加成功"),re.value=0,ve()}})):V.warning("未勾选GDP模型")},we=()=>{_e()};return(e,a)=>{const t=u("el-input"),o=u("el-form-item"),d=u("el-option"),C=u("el-select"),U=u("el-button"),Ve=u("Plus"),xe=u("el-icon"),Ce=u("el-form"),Ie=P,Ue=u("el-alert"),Te=u("el-table-column"),ze=u("el-tag"),Ne=u("el-image"),Pe=u("el-popconfirm"),Ae=u("el-table"),Ge=u("el-pagination"),De=u("el-row"),je=I,Se=I,qe=u("el-col"),Me=u("el-dialog"),Be=u("el-switch"),Ee=u("QuestionFilled"),Re=u("el-tooltip"),Ye=s("loading");return r(),n("div",null,[i(Ie,null,{default:p((()=>[i(Ce,{ref_key:"formRef",ref:T,inline:!0,model:de},{default:p((()=>[i(o,{label:"应用名称",prop:"modelName"},{default:p((()=>[i(t,{modelValue:de.modelName,"onUpdate:modelValue":a[0]||(a[0]=e=>de.modelName=e),placeholder:"应用名称",clearable:""},null,8,["modelValue"])])),_:1}),i(o,{label:"应用分类",prop:"groupId"},{default:p((()=>[i(C,{modelValue:de.groupId,"onUpdate:modelValue":a[1]||(a[1]=e=>de.groupId=e),placeholder:"应用分类",clearable:"",style:{width:"192px"}},{default:p((()=>[(r(!0),n(c,null,m(f(pe),(e=>(r(),_(d,{key:e.id,label:e.groupName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(o,{label:"启用状态",prop:"status"},{default:p((()=>[i(C,{modelValue:de.status,"onUpdate:modelValue":a[2]||(a[2]=e=>de.status=e),placeholder:"请选择启用状态",clearable:"",style:{width:"192px"}},{default:p((()=>[(r(!0),n(c,null,m(f(D),(e=>(r(),_(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(o,null,{default:p((()=>[i(U,{type:"primary",onClick:ve},{default:p((()=>[g(" 查询 ")])),_:1}),i(U,{onClick:a[3]||(a[3]=e=>{return null==(l=f(T))||l.resetFields(),void ve();var l})},{default:p((()=>[g(" 重置 ")])),_:1}),i(U,{onClick:a[4]||(a[4]=e=>oe.value=!0),type:"success"},{default:p((()=>[g(" 发现GPTS应用 ")])),_:1})])),_:1}),v("span",q,[i(U,{type:"success",onClick:a[5]||(a[5]=e=>S.value=!0)},{default:p((()=>[g(" 手动添加应用 "),i(xe,{class:"ml-3"},{default:p((()=>[i(Ve)])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1}),i(Ie,{bottomPadding:"20px"},{default:p((()=>[i(Ue,{"show-icon":"",closable:!1,title:"KEY池说明",description:"所有key会根据你所选的应用自动分类、会以第一个加入的key为标准、建议所有同模型的key参数配置相同、否则可能特殊场景会有迷惑性。不同模型可以设置不同的扣费类型以及单次调用扣除的额度、额度不再以次为单位、改为(积分)概念！你可以设置模型最大上限和回复上限、以及最大轮次用以限制用户的最大上下文、当限制token后、用户端可选范围受其影响、轮次同理、到达轮次之后会移除掉更靠前的上下文！",type:"success"})])),_:1}),i(Ie,{bottomPadding:"20px",bottomMargin:"0px"},{default:p((()=>[h((r(),_(Ae,{height:"52vh",border:"",data:f(ge),style:{width:"100%"},size:"large"},{default:p((()=>[i(Te,{prop:"modelName",label:"应用名称"}),i(Te,{prop:"groupName",label:"应用分类"}),i(Te,{prop:"modelId",label:"GPTSId"}),i(Te,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:p((e=>[i(ze,{type:e.row.status?"success":"danger"},{default:p((()=>[g(y(e.row.status?"使用中":"已暂停"),1)])),_:2},1032,["type"])])),_:1}),i(Te,{prop:"desc",label:"描述",align:"center"}),i(Te,{prop:"logo",label:"Logo",align:"center"},{default:p((e=>[i(Ne,{lazy:"",src:e.row.logo,style:{width:"80px",height:"80px","border-radius":"50%"}},null,8,["src"])])),_:1}),i(Te,{prop:"remark",align:"center",label:"备注"},{default:p((e=>[g(y(e.row.remark||"-"),1)])),_:1}),i(Te,{prop:"createdAt",align:"center",label:"添加时间"},{default:p((e=>[g(y(f(G)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),i(Te,{fixed:"right",label:"操作",width:"200"},{default:p((e=>[i(U,{link:"",type:"primary",size:"small",onClick:a=>{return t=e.row,re.value=t.id,l((()=>{Object.assign(ie,t)})),void(S.value=!0);var t}},{default:p((()=>[g(" 变更 ")])),_:2},1032,["onClick"]),i(Pe,{title:"确认删除此应用么?",width:"180","icon-color":"red",onConfirm:l=>async function(e){const{id:l}=e;await A.delModels({id:l}),V({type:"success",message:"操作完成！"}),ve()}(e.row)},{reference:p((()=>[i(U,{link:"",type:"danger",size:"small"},{default:p((()=>[g(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Ye,f(ae)]]),i(De,{class:"flex justify-end mt-5"},{default:p((()=>[i(Ge,{"current-page":de.page,"onUpdate:currentPage":a[6]||(a[6]=e=>de.page=e),"page-size":de.size,"onUpdate:pageSize":a[7]||(a[7]=e=>de.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:f(N),onSizeChange:ve,onCurrentChange:ve},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),i(Me,{modelValue:f(oe),"onUpdate:modelValue":a[9]||(a[9]=e=>b(oe)?oe.value=e:null),"lock-scroll":"",top:"30px",style:{height:"90vh"},"close-on-click-modal":!1,title:ue.title,width:"1500",onOpen:_e,onClose:a[10]||(a[10]=e=>oe.value=!1)},{default:p((()=>[i(Ce,{ref_key:"formGptsModelRef",ref:z,"label-position":"right","label-width":"70px",inline:"",model:ie,rules:ce},{default:p((()=>[i(o,null,{default:p((()=>[i(U,{type:"primary",onClick:ye},{default:p((()=>[g("全选")])),_:1}),i(U,{type:"primary",onClick:be},{default:p((()=>[g("反选")])),_:1})])),_:1}),i(o,{label:"添加到",prop:"groupId"},{default:p((()=>[i(C,{modelValue:ie.groupId,"onUpdate:modelValue":a[8]||(a[8]=e=>ie.groupId=e),placeholder:"请选择GPTS应用所属分类",clearable:"","fit-input-width":"",style:{width:"100%"}},{default:p((()=>[(r(!0),n(c,null,m(f(pe),(e=>(r(),_(d,{key:e.id,label:e.groupName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(o,null,{default:p((()=>[i(U,{type:"primary",onClick:ke},{default:p((()=>[g("确认添加到分类")])),_:1})])),_:1})])),_:1},8,["model","rules"]),f(te)?h((r(),n("div",M,null,512)),[[Ye,f(te)]]):(r(),n("div",B,[i(De,{gutter:10},{default:p((()=>[(r(!0),n(c,null,m(f(ne),(e=>(r(),_(qe,{xs:8,sm:6,md:4,lg:4,xl:6,ref_for:!0,ref:"scrollRef"},{default:p((()=>[v("div",{class:"group cursor-pointer",onClick:l=>{var a;(a=e).checked=!a.checked}},[v("div",R,[v("div",Y,[v("h3",F,y(e.modelName),1),e.useCount&&+e.useCount>0?(r(),_(ze,{key:0,type:"success",size:"small",round:""},{default:p((()=>[v("div",H,[i(je,{name:"hot",class:"hot-icon"}),g(" "+y(e.useCount),1)])])),_:2},1024)):w("",!0)]),v("div",L,y(e.desc),1)]),v("div",Q,[i(Ne,{src:e.logo,"preview-disabled":!0,lazy:"",class:"image-icon"},{placeholder:p((()=>[v("div",J,[i(je,{name:"downloading-loop",class:"download"})])])),_:2},1032,["src"])]),e.checked?(r(),n("div",O,[v("div",K,[i(Se,{class:"correct-icon",name:"correct"})])])):w("",!0)],8,E)])),_:2},1536)))),256))])),_:1}),v("div",{class:"center cursor-pointer",onClick:we},[i(Se,{name:"down-round",style:{width:"40px",height:"40px"}})])]))])),_:1},8,["modelValue","title"]),i(Me,{modelValue:f(S),"onUpdate:modelValue":a[30]||(a[30]=e=>b(S)?S.value=e:null),"close-on-click-modal":!1,title:me.value,width:"1000",onClose:a[31]||(a[31]=e=>{return l=f(se),re.value=0,void(null==l||l.resetFields());var l})},{footer:p((()=>[v("span",le,[i(U,{onClick:a[28]||(a[28]=e=>S.value=!1)},{default:p((()=>[g("取消")])),_:1}),i(U,{type:"primary",onClick:a[29]||(a[29]=e=>async function(e){null==e||e.validate((async e=>{if(e){const e=x(ie);delete e.id,re.value&&(e.id=re.value),await A.setModels(e),V({type:"success",message:"操作成功！"}),re.value=0,S.value=!1,ve()}}))}(f(se)))},{default:p((()=>[g(y(fe.value),1)])),_:1})])])),default:p((()=>[h((r(),_(Ce,{ref_key:"formPackageRef",ref:se,"label-position":"right","label-width":"120px",model:ie,rules:ce},{default:p((()=>[i(De,null,{default:p((()=>[i(qe,{span:12},{default:p((()=>[i(o,{label:"所属分类",prop:"groupId"},{default:p((()=>[i(C,{modelValue:ie.groupId,"onUpdate:modelValue":a[11]||(a[11]=e=>ie.groupId=e),placeholder:"请选择应用所属分类",clearable:"","fit-input-width":"",style:{width:"100%"}},{default:p((()=>[(r(!0),n(c,null,m(f(pe),(e=>(r(),_(d,{key:e.id,label:e.groupName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:p((()=>[i(o,{label:"应用中文名称",prop:"modelName"},{default:p((()=>[i(t,{modelValue:ie.modelName,"onUpdate:modelValue":a[12]||(a[12]=e=>ie.modelName=e),placeholder:"请填写应用中文名称（用户选择的）"},null,8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:p((()=>[i(o,{label:"应用描述",prop:"desc"},{default:p((()=>[i(t,{modelValue:ie.desc,"onUpdate:modelValue":a[13]||(a[13]=e=>ie.desc=e),placeholder:"请填写应用描述"},null,8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:p((()=>[i(o,{label:"排序权重",prop:"sortId"},{default:p((()=>[i(t,{modelValue:ie.sortId,"onUpdate:modelValue":a[14]||(a[14]=e=>ie.sortId=e),placeholder:"请填写排序权重（越大越靠前，默认1）"},null,8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:p((()=>[i(o,{label:"应用Logo",prop:"logo"},{default:p((()=>[i(f(k),{class:"logo-uploader",action:"","auto-upload":!1,"show-file-list":!1,onChange:a[15]||(a[15]=e=>(e=>{const l=e.name.split(".")[1],a=new FormData;a.append("filename",e.raw.uid+"."+l),a.append("file",e.raw),a.append("dir","gpts-logo"),j.uploadFile(a).then((e=>{ie.logo=e.data}))})(e)),"before-upload":he},{default:p((()=>[ie.logo?(r(),n("img",{key:0,src:ie.logo,class:"avatar"},null,8,W)):(r(),_(xe,{key:1,class:"logo-uploader-icon"},{default:p((()=>[i(Ve)])),_:1}))])),_:1}),i(t,{style:{"margin-top":"10px"},modelValue:ie.logo,"onUpdate:modelValue":a[16]||(a[16]=e=>ie.logo=e),placeholder:"应用Logo网络地址"},null,8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:p((()=>[i(o,{label:"示例内容",prop:"demoData"},{default:p((()=>[i(t,{modelValue:ie.demoData,"onUpdate:modelValue":a[17]||(a[17]=e=>ie.demoData=e),type:"textarea",placeholder:"请填写应用的demo示例数据、每换行一次表示一个新的示例...",rows:4},null,8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:p((()=>[i(o,{label:"是否GPTS应用",prop:"gptsApp"},{default:p((()=>[i(C,{modelValue:ie.gptsApp,"onUpdate:modelValue":a[18]||(a[18]=e=>ie.gptsApp=e),placeholder:"请选择应用类型","fit-input-width":"",style:{width:"100%"},disabled:Boolean(f(re))},{default:p((()=>[(r(),_(d,{key:1,label:"是",value:!0})),(r(),_(d,{key:2,label:"否",value:!1}))])),_:1},8,["modelValue","disabled"])])),_:1})])),_:1}),i(qe,{span:12},{default:p((()=>[i(o,{label:"是否推荐应用",prop:"recommend"},{default:p((()=>[i(C,{modelValue:ie.recommend,"onUpdate:modelValue":a[19]||(a[19]=e=>ie.recommend=e),placeholder:"请选择是否推荐","fit-input-width":"",style:{width:"100%"}},{default:p((()=>[(r(),_(d,{key:1,label:"是",value:!0})),(r(),_(d,{key:2,label:"否",value:!1}))])),_:1},8,["modelValue"])])),_:1})])),_:1}),ie.gptsApp?(r(),_(qe,{key:0,span:12},{default:p((()=>[i(o,{label:"GPTS模型Id",prop:"modelId"},{default:p((()=>[i(t,{modelValue:ie.modelId,"onUpdate:modelValue":a[20]||(a[20]=e=>ie.modelId=e),placeholder:"请填写GPTS模型Id号（官网创建后产生的Id）"},null,8,["modelValue"])])),_:1})])),_:1})):w("",!0),i(qe,{span:24}),i(qe,{span:6},{default:p((()=>[i(o,{label:"是否绘画应用",prop:"isDraw"},{default:p((()=>[i(Be,{modelValue:ie.isDraw,"onUpdate:modelValue":a[21]||(a[21]=e=>ie.isDraw=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:p((()=>[X])),default:p((()=>[i(xe,{class:"ml-3 cursor-pointer"},{default:p((()=>[i(Ee)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:6},{default:p((()=>[i(o,{label:"启用上传",prop:"canUpload"},{default:p((()=>[i(Be,{modelValue:ie.canUpload,"onUpdate:modelValue":a[22]||(a[22]=e=>ie.canUpload=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:p((()=>[$])),default:p((()=>[i(xe,{class:"ml-3 cursor-pointer"},{default:p((()=>[i(Ee)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:6},{default:p((()=>[i(o,{label:"启用语音",prop:"canAudio"},{default:p((()=>[i(Be,{modelValue:ie.canAudio,"onUpdate:modelValue":a[23]||(a[23]=e=>ie.canAudio=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:p((()=>[Z])),default:p((()=>[i(xe,{class:"ml-3 cursor-pointer"},{default:p((()=>[i(Ee)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:6},{default:p((()=>[i(o,{label:"启用状态",prop:"status"},{default:p((()=>[i(Be,{"active-value":1,"inactive-value":0,modelValue:ie.status,"onUpdate:modelValue":a[24]||(a[24]=e=>ie.status=e)},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:p((()=>[ee])),default:p((()=>[i(xe,{class:"ml-3 cursor-pointer"},{default:p((()=>[i(Ee)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:12},{default:p((()=>[i(o,{label:"预设热度",prop:"useCount"},{default:p((()=>[i(t,{modelValue:ie.useCount,"onUpdate:modelValue":a[25]||(a[25]=e=>ie.useCount=e),placeholder:"请填写预设热度"},null,8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:p((()=>[i(o,{label:"预设收藏",prop:"collectCount"},{default:p((()=>[i(t,{modelValue:ie.collectCount,"onUpdate:modelValue":a[26]||(a[26]=e=>ie.collectCount=e),placeholder:"请填写预设收藏"},null,8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:24},{default:p((()=>[i(o,{label:"备注",prop:"remark"},{default:p((()=>[i(t,{modelValue:ie.remark,"onUpdate:modelValue":a[27]||(a[27]=e=>ie.remark=e),placeholder:"请填写应用备注"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[Ye,f(te)]])])),_:1},8,["modelValue","title"])])}}});"function"==typeof N&&N(ae);const te=z(ae,[["__scopeId","data-v-0dfb996d"]]);export{te as default};
