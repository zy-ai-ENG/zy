
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c9f6880f.js";import{Y as l,d as a,r as t,G as d,C as o,y as u,j as r,U as s,o as p,c as n,f as i,g as c,V as m,W as y,e as f,h as k,b,w as _,J as g,t as h,K as w,O as v,P as x,$ as V,ae as T,s as U}from"../main-646ffc07.js";import{u as M}from"../utcformatTime/utcformatTime.f6db2c52.js";import{l as q,m as N,n as R,o as C,g as S,f as A,p as z,q as j,r as D}from"../index/index.5ad1a92e.js";const W=e=>l.get("models/query",{params:e}),P=e=>l.post("models/setModel",e),I=e=>l.post("models/delModel",e),K={style:{float:"right"}},Y={class:"overflow-y-scroll w-full whitespace-nowrap"},E=b("div",{style:{width:"250px"}}," 模型类型说明 ",-1),O=b("div",{style:{width:"250px"}}," 给定了部分可选的模型列表、你可以可以手动填写您需要调用的模型、请确保填写的模型是当前key支持的类型、否则可能会在调用中出现不可预知错误！ ",-1),F=b("div",{style:{width:"250px"}}," 不同模型的设置不同、例如openai仅设置key即可、如果是百度大模型、则填写clientId以及同时需要填写secret。对于OPENAI模型、我们支持批量导入、如果您需要批量导入key、则一行一个key即可、多个key使用换行隔离、其余配置将共享、多个key可以重复选用默认模型。 ",-1),G=b("div",{style:{width:"250px"}}," 不同账号填写的内容不同、但是都代表的是Secret秘钥 ",-1),J=b("div",{style:{width:"250px"}}," 不同账号填写的内容不同、但是都代表的是appid ",-1),L=b("div",{style:{width:"250px"}}," 设置当前key的扣费类型、扣除普通余额或是高级余额。 ",-1),$=b("div",{style:{width:"250px"}}," 设置当前key的单词调用扣除余额、建议同模型或名称key设置相同的金额、避免扣费发生异常！ ",-1),Q=b("div",{style:{width:"250px"}}," 当前轮询是根据模型下的列表按顺序调用、如果权重为2则表示轮到此key的时候会调用两次之后再轮询下一个key 保证每个key的调用顺序以及限制每次调用的准确次数 ",-1),B=b("div",{style:{width:"250px"}}," 显示排序，数值越大，显示在越靠前 ",-1),H=b("div",{style:{width:"250px"}}," 启用上传,前端将具备上传文件的操作，请注意模型模型支持的情况启用才有效 ",-1),X=b("div",{style:{width:"250px"}}," 启用语音,前端将具备上传音频文件的的操作，请注意模型模型支持的情况启用才有效 ",-1),Z=b("div",{style:{width:"250px"}}," 前台显示,前端可直接使用该模型 ",-1),ee=b("div",{style:{width:"250px"}}," 账号启用状态、一旦锁定当前key将停止工作！ ",-1),le={style:{display:"none"}},ae=b("div",{style:{width:"250px"}}," 基础绘画来自于OPENAI的DALL-E2模型、所以需要为官方的apiKey、请确定至少设置一张key为基础绘画key即可使用绘画功能！同时当前版本的mind思维导图和mj联想绘图等功能都会走当前设置的key，会后后续版本解除此限制！ ",-1),te=b("div",{style:{width:"250px"}}," 填写此配置可以限制用户在选择模型时候的高级配置中的最大上下文轮次、可以通过限制此数量减少token的损耗、减低上下文的损耗量、 如果设置了模型的最大token和返回量、那么两个限制会同时生效！ ",-1),de={class:"flex justify-end mr-5"},oe=a({__name:"index",setup(l){t();const a=t(),U=t(0),oe=t(!1),ue=t(!1),re=t(!1);t(!1);const se=d({keyType:"",model:"",status:1,page:1,size:10,modelType:""}),pe=t(),ne=t(0),ie=d({keyType:1,modelName:"",key:"",appid:null,secret:null,status:!0,model:"",isDraw:!1,canAudio:!1,canUpload:!1,keyWeight:1,maxModelTokens:8096,maxResponseTokens:4e3,proxyUrl:"",front:!0,timeout:300,deduct:1,deductType:1,maxRounds:12,displaySort:0,description:"",modelType:"chat"}),ce=d({keyType:[{required:!0,message:"请填写您的调用模型类型",trigger:"blur"}],modelName:[{required:!0,message:"请填写您的模型名称",trigger:"blur"}],key:[{required:!0,message:"请填写您的调用模型key",trigger:"blur"}],secret:[{required:!0,message:"请填写您的调用模型的secret",trigger:"blur"}],appid:[{required:!0,message:"请填写您的调用模型的appid",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],isDraw:[{required:!0,message:"请选择当前key是否作为基础绘画key",trigger:"change"}],model:[{required:!0,message:"请选择当前key需要绑定的模型",trigger:"change"}],keyWeight:[{required:!0,message:"请填写key的权重值",trigger:"blur"}],maxModelTokens:[{required:!0,message:"请填写模型最大token数",trigger:"blur"}],maxResponseTokens:[{required:!0,message:"请填写允许用户使用的最大回复token数",trigger:"blur"}],proxyUrl:[{required:!1,message:"请填写指定代理地址",trigger:"blur"}],timeout:[{required:!0,message:"请填写超时时间 默认 60 单位（秒）",trigger:"blur"}],deductType:[{required:!0,message:"请选择当前模型扣费类型",trigger:"change"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],maxRounds:[{required:!0,message:"请填写允许用户选择的最大上下文轮次",trigger:"blur"}]});const me=o((()=>q[ie.keyType])),ye=o((()=>ne.value?"更新秘钥":"新增秘钥")),fe=o((()=>N[ie.keyType])),ke=o((()=>ne.value?"确认更新":"确认新增")),be=t([]);async function _e(){try{ue.value=!0;const e=await W(se);ue.value=!1;const{rows:l,count:a}=e.data;U.value=a,be.value=l}catch(e){ue.value=!1}}return u((()=>{_e()})),(l,t)=>{const d=r("el-option"),o=r("el-select"),u=r("el-form-item"),q=r("el-button"),N=r("Plus"),W=r("el-icon"),ge=r("el-form"),he=e,we=r("el-alert"),ve=r("el-tag"),xe=r("el-table-column"),Ve=r("el-popconfirm"),Te=r("el-table"),Ue=r("el-pagination"),Me=r("el-row"),qe=r("el-col"),Ne=r("QuestionFilled"),Re=r("el-tooltip"),Ce=r("el-input"),Se=r("el-switch"),Ae=r("el-dialog"),ze=s("loading");return p(),n("div",null,[i(he,null,{default:c((()=>[i(ge,{ref_key:"formRef",ref:a,inline:!0,model:se},{default:c((()=>[i(u,{label:"模型分类",prop:"model"},{default:c((()=>[i(o,{modelValue:se.keyType,"onUpdate:modelValue":t[0]||(t[0]=e=>se.keyType=e),filterable:"","allow-create":"",placeholder:"请选择或填写绑定的模型",clearable:"",style:{width:"192px"}},{default:c((()=>[(p(!0),n(m,null,y(f(R),(e=>(p(),g(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(u,{label:"模型类型",prop:"modelType"},{default:c((()=>[i(o,{modelValue:se.modelType,"onUpdate:modelValue":t[1]||(t[1]=e=>se.modelType=e),filterable:"","allow-create":"",placeholder:"请选择模型类型",clearable:"",style:{width:"192px"}},{default:c((()=>[(p(!0),n(m,null,y(f(C),(e=>(p(),g(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(u,{label:"使用模型",prop:"model"},{default:c((()=>[i(o,{modelValue:se.model,"onUpdate:modelValue":t[2]||(t[2]=e=>se.model=e),filterable:"","allow-create":"",placeholder:"请选择或填写绑定的模型",clearable:"",style:{width:"192px"}},{default:c((()=>[(p(!0),n(m,null,y(f(S),(e=>(p(),g(d,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(u,{label:"启用状态",prop:"status"},{default:c((()=>[i(o,{modelValue:se.status,"onUpdate:modelValue":t[3]||(t[3]=e=>se.status=e),placeholder:"请选择key启用状态",clearable:"",style:{width:"192px"}},{default:c((()=>[(p(!0),n(m,null,y(f(A),(e=>(p(),g(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(u,null,{default:c((()=>[i(q,{type:"primary",onClick:_e},{default:c((()=>[k(" 查询 ")])),_:1}),i(q,{onClick:t[4]||(t[4]=e=>{return null==(l=f(a))||l.resetFields(),void _e();var l})},{default:c((()=>[k(" 重置 ")])),_:1})])),_:1}),b("span",K,[i(q,{type:"success",onClick:t[5]||(t[5]=e=>oe.value=!0)},{default:c((()=>[k(" 添加模型Key "),i(W,{class:"ml-3"},{default:c((()=>[i(N)])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1}),i(he,{bottomPadding:"20px"},{default:c((()=>[i(we,{"show-icon":"",closable:!1,title:"KEY池说明",description:"所有key会根据你所选的模型自动分类、会以第一个加入的key为标准、建议所有同模型的key参数配置相同、否则可能特殊场景会有迷惑性。不同模型可以设置不同的扣费类型以及单次调用扣除的额度、额度不再以次为单位、改为(积分)概念！",type:"success"})])),_:1}),i(he,{bottomPadding:"20px",bottomMargin:"0px"},{default:c((()=>[_((p(),g(Te,{height:"52vh",border:"",data:f(be),style:{width:"100%"},size:"large"},{default:c((()=>[i(xe,{prop:"keyType",label:"模型分类",width:"120"},{default:c((e=>[i(ve,{type:"success"},{default:c((()=>[k(h(f(z)[e.row.keyType]),1)])),_:2},1024)])),_:1}),i(xe,{prop:"keyType",label:"模型类型",width:"120"},{default:c((e=>[i(ve,{type:"success"},{default:c((()=>[k(h(f(j)[e.row.modelType]),1)])),_:2},1024)])),_:1}),i(xe,{prop:"modelName",label:"模型名称",width:"180"}),i(xe,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:c((e=>[i(ve,{type:e.row.status?"success":"danger"},{default:c((()=>[k(h(e.row.status?"使用中":"已暂停"),1)])),_:2},1032,["type"])])),_:1}),i(xe,{prop:"key",label:"模型KEY",width:"460"},{default:c((e=>[b("div",Y,h(e.row.key),1)])),_:1}),i(xe,{prop:"keyWeight",label:"模型权重",width:"90",align:"center"}),i(xe,{prop:"model",align:"center",label:"绑定模型",width:"180"},{default:c((e=>[i(ve,{type:e.row.model.includes("gpt-4")?"success":void 0},{default:c((()=>[k(h(e.row.model),1)])),_:2},1032,["type"])])),_:1}),i(xe,{prop:"deductType",align:"center",label:"扣费类型",width:"90"},{default:c((e=>[i(ve,{type:1===e.row.deductType?"success":"warning"},{default:c((()=>[k(h(1===e.row.deductType?"普通余额":"高级余额"),1)])),_:2},1032,["type"])])),_:1}),i(xe,{prop:"deduct",align:"center",label:"单次扣除",width:"90"},{default:c((e=>[i(ve,{type:1===e.row.deductType?"success":"warning"},{default:c((()=>[k(h(`${e.row.deduct} 余额`),1)])),_:2},1032,["type"])])),_:1}),i(xe,{prop:"useCount",align:"center",label:"调用次数",width:"90"}),i(xe,{prop:"useToken",align:"center",label:"已使用Token",width:"120"}),i(xe,{prop:"keyStatus",align:"center",label:"key状态",width:"110"},{default:c((e=>[i(ve,{type:1===e.row.keyStatus?"success":"danger"},{default:c((()=>[k(h(1===e.row.keyStatus?"正常工作":-1===e.row.keyStatus?"已被封禁":"余额耗尽 "),1)])),_:2},1032,["type"])])),_:1}),i(xe,{prop:"proxyUrl",align:"center",label:"绑定的代理地址",width:"140"},{default:c((e=>[i(q,{type:"info",text:""},{default:c((()=>[k(h(e.row.proxyUrl||"-"),1)])),_:2},1024)])),_:1}),i(xe,{prop:"proxyUrl",align:"center",label:"变更提示信息",width:"180"},{default:c((e=>[k(h(e.row.remark||"-"),1)])),_:1}),i(xe,{prop:"createdAt",align:"center",label:"添加时间",width:"120"},{default:c((e=>[k(h(f(M)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),i(xe,{fixed:"right",label:"操作",width:"200"},{default:c((e=>[i(q,{link:"",type:"primary",size:"small",onClick:l=>function(e){ne.value=e.id;const{keyType:l,modelName:a,key:t,appid:d,secret:o,status:u,model:r,keyWeight:s,canUpload:p,canAudio:n,maxModelTokens:i,maxResponseTokens:c,proxyUrl:m,timeout:y,deductType:f,deduct:k,maxRounds:b,isDraw:_,front:g,displaySort:h,description:w}=e;V((()=>{Object.assign(ie,{keyType:l,appid:d,modelName:a,key:t,secret:o,canUpload:p,canAudio:n,status:u,model:r,keyWeight:s,maxModelTokens:i,maxResponseTokens:c,proxyUrl:m,timeout:y,deductType:f,deduct:k,maxRounds:b,isDraw:_,front:g,displaySort:h,description:w})})),oe.value=!0}(e.row)},{default:c((()=>[k(" 变更 ")])),_:2},1032,["onClick"]),i(Ve,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:l=>async function(e){const{id:l}=e;await I({id:l}),x({type:"success",message:"操作完成！"}),_e()}(e.row)},{reference:c((()=>[i(q,{link:"",type:"danger",size:"small"},{default:c((()=>[k(" 删除秘钥 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[ze,f(ue)]]),i(Me,{class:"flex justify-end mt-5"},{default:c((()=>[i(Ue,{"current-page":se.page,"onUpdate:currentPage":t[6]||(t[6]=e=>se.page=e),"page-size":se.size,"onUpdate:pageSize":t[7]||(t[7]=e=>se.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:f(U),onSizeChange:_e,onCurrentChange:_e},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),i(Ae,{modelValue:f(oe),"onUpdate:modelValue":t[32]||(t[32]=e=>v(oe)?oe.value=e:null),"close-on-click-modal":!1,title:ye.value,width:"1000",onClose:t[33]||(t[33]=e=>{return l=f(pe),ne.value=0,void(null==l||l.resetFields());var l})},{footer:c((()=>[b("span",de,[i(q,{onClick:t[30]||(t[30]=e=>oe.value=!1)},{default:c((()=>[k("取消")])),_:1}),i(q,{type:"primary",onClick:t[31]||(t[31]=e=>async function(e){null==e||e.validate((async e=>{if(e){const e=T(ie);if(delete e.id,ne.value&&(e.id=ne.value),1===Number(ie.keyType)){const l=T(ie.key);e.key=l.split("\n")}await P(e),x({type:"success",message:"操作成功！"}),ne.value=0,oe.value=!1,_e()}}))}(f(pe)))},{default:c((()=>[k(h(ke.value),1)])),_:1})])])),default:c((()=>[_((p(),g(ge,{ref_key:"formPackageRef",ref:pe,"label-position":"right","label-width":"120px",model:ie,rules:ce},{default:c((()=>[i(Me,null,{default:c((()=>[i(qe,{span:12},{default:c((()=>[i(u,{label:"模型分类选择",prop:"keyType"},{default:c((()=>[i(o,{modelValue:ie.keyType,"onUpdate:modelValue":t[8]||(t[8]=e=>ie.keyType=e),placeholder:"请选择模型类型",style:{width:"100%"}},{default:c((()=>[(p(!0),n(m,null,y(f(R),(e=>(p(),g(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:c((()=>[i(u,{label:"模型类型",prop:"modelType"},{default:c((()=>[i(o,{modelValue:ie.modelType,"onUpdate:modelValue":t[9]||(t[9]=e=>ie.modelType=e),placeholder:"请选择模型类型",style:{width:"90%"}},{default:c((()=>[(p(!0),n(m,null,y(f(C),(e=>(p(),g(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[E])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:12},{default:c((()=>[i(u,{label:"模型中文名称",prop:"modelName"},{default:c((()=>[i(Ce,{modelValue:ie.modelName,"onUpdate:modelValue":t[10]||(t[10]=e=>ie.modelName=e),placeholder:"请填写模型中文名称（用户选择的）"},null,8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:c((()=>[i(u,{label:"账号关联模型",prop:"model"},{default:c((()=>[i(o,{modelValue:ie.model,"onUpdate:modelValue":t[11]||(t[11]=e=>ie.model=e),filterable:"",clearable:"",placeholder:"请选用或填写绑定的模型","allow-create":1===Number(ie.keyType),style:{width:"90%"}},{default:c((()=>[(p(!0),n(m,null,y(me.value,(e=>(p(),g(d,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","allow-create"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[O])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:24},{default:c((()=>[i(u,{label:fe.value,prop:"key"},{default:c((()=>[i(Ce,{modelValue:ie.key,"onUpdate:modelValue":t[12]||(t[12]=e=>ie.key=e),type:"text",placeholder:"请填写模型Key|clientId|AppId",style:{width:"95.7%"}},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[F])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1},8,["label"])])),_:1}),i(qe,{span:24},{default:c((()=>[[2,4].includes(Number(ie.keyType))?(p(),g(u,{key:0,label:"SecretKey",prop:"secret"},{default:c((()=>[i(Ce,{modelValue:ie.secret,"onUpdate:modelValue":t[13]||(t[13]=e=>ie.secret=e),placeholder:"请填写模型调用所需的Secret[部分类型模型需要]",style:{width:"95.7%"}},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[G])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})):w("",!0)])),_:1}),i(qe,{span:24},{default:c((()=>[[4].includes(Number(ie.keyType))?(p(),g(u,{key:0,label:"AppId",prop:"appid"},{default:c((()=>[i(Ce,{modelValue:ie.appid,"onUpdate:modelValue":t[14]||(t[14]=e=>ie.appid=e),placeholder:"请填写模型调用所需的appid",style:{width:"95.7%"}},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[J])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})):w("",!0)])),_:1}),i(qe,{span:24},{default:c((()=>[i(u,{label:"模型描述",prop:"description"},{default:c((()=>[i(Ce,{type:"textarea",modelValue:ie.description,"onUpdate:modelValue":t[15]||(t[15]=e=>ie.description=e),modelModifiers:{number:!0},placeholder:"请填写模型描述",style:{width:"95.7%"}},null,8,["modelValue"])])),_:1})])),_:1}),i(qe,{span:12},{default:c((()=>[i(u,{label:"模型扣费类型",prop:"deductType"},{default:c((()=>[i(o,{modelValue:ie.deductType,"onUpdate:modelValue":t[16]||(t[16]=e=>ie.deductType=e),filterable:"","allow-create":"",clearable:"",placeholder:"请选用模型扣费类型",style:{width:"90%"}},{default:c((()=>[(p(!0),n(m,null,y(f(D),(e=>(p(),g(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[L])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:12},{default:c((()=>[i(u,{label:"单词扣除金额",prop:"deduct"},{default:c((()=>[i(Ce,{modelValue:ie.deduct,"onUpdate:modelValue":t[17]||(t[17]=e=>ie.deduct=e),modelModifiers:{number:!0},placeholder:"请填写单词调用此key的扣费金额！",style:{width:"90%"}},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[$])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:12},{default:c((()=>[i(u,{label:"调用轮询权重",prop:"keyWeight"},{default:c((()=>[i(Ce,{modelValue:ie.keyWeight,"onUpdate:modelValue":t[18]||(t[18]=e=>ie.keyWeight=e),modelModifiers:{number:!0},placeholder:"请填写key的权重、数字越大使用评率越高！",style:{width:"90%"}},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[Q])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:12},{default:c((()=>[i(u,{label:"显示排序",prop:"displaySort"},{default:c((()=>[i(Ce,{modelValue:ie.displaySort,"onUpdate:modelValue":t[19]||(t[19]=e=>ie.displaySort=e),modelModifiers:{number:!0},placeholder:"显示排序",style:{width:"90%"}},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[B])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:12},{default:c((()=>[[1].includes(Number(ie.keyType))?(p(),g(u,{key:0,label:"指定代理地址",prop:"proxyUrl"},{default:c((()=>[i(Ce,{modelValue:ie.proxyUrl,"onUpdate:modelValue":t[20]||(t[20]=e=>ie.proxyUrl=e),modelModifiers:{number:!0},placeholder:"如需使用代理请填写、不填写默认使用全局配置！"},null,8,["modelValue"])])),_:1})):w("",!0)])),_:1}),i(Me,{style:{width:"100%"}},{default:c((()=>[i(qe,{span:6},{default:c((()=>[i(u,{label:"启用上传",prop:"canUpload"},{default:c((()=>[i(Se,{modelValue:ie.canUpload,"onUpdate:modelValue":t[21]||(t[21]=e=>ie.canUpload=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[H])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:6},{default:c((()=>[i(u,{label:"启用语音",prop:"canAudio"},{default:c((()=>[i(Se,{modelValue:ie.canAudio,"onUpdate:modelValue":t[22]||(t[22]=e=>ie.canAudio=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[X])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:6},{default:c((()=>[i(u,{label:"前台显示",prop:"front"},{default:c((()=>[i(Se,{modelValue:ie.front,"onUpdate:modelValue":t[23]||(t[23]=e=>ie.front=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[Z])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1}),i(qe,{span:6},{default:c((()=>[i(u,{label:"模型启用状态",prop:"status"},{default:c((()=>[i(Se,{modelValue:ie.status,"onUpdate:modelValue":t[24]||(t[24]=e=>ie.status=e)},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[ee])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),b("div",le,[[1].includes(Number(ie.keyType))?(p(),g(u,{key:0,label:"设为特殊key",prop:"isDraw"},{default:c((()=>[i(Se,{modelValue:ie.isDraw,"onUpdate:modelValue":t[25]||(t[25]=e=>ie.isDraw=e)},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[ae])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1})):w("",!0),i(u,{label:"上下文限制",prop:"maxRounds"},{default:c((()=>[i(Ce,{modelValue:ie.maxRounds,"onUpdate:modelValue":t[26]||(t[26]=e=>ie.maxRounds=e),modelModifiers:{number:!0},placeholder:"请填写允许用户选择的最高上下文轮次！",style:{width:"90%"}},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:c((()=>[te])),default:c((()=>[i(W,{class:"ml-3 cursor-pointer"},{default:c((()=>[i(Ne)])),_:1})])),_:1})])),_:1}),i(u,{label:"模型最大Token",prop:"maxModelTokens"},{default:c((()=>[i(Ce,{modelValue:ie.maxModelTokens,"onUpdate:modelValue":t[27]||(t[27]=e=>ie.maxModelTokens=e),modelModifiers:{number:!0},placeholder:"请填写模型最大Token、不填写默认使用默认！"},null,8,["modelValue"])])),_:1}),i(u,{label:"最大回复Token",prop:"maxResponseTokens"},{default:c((()=>[i(Ce,{modelValue:ie.maxResponseTokens,"onUpdate:modelValue":t[28]||(t[28]=e=>ie.maxResponseTokens=e),modelModifiers:{number:!0},placeholder:"请填写最大回复Token、不填写使用默认！"},null,8,["modelValue"])])),_:1}),[1].includes(Number(ie.keyType))?(p(),g(u,{key:1,label:"调用超时时间",prop:"timeout"},{default:c((()=>[i(Ce,{modelValue:ie.timeout,"onUpdate:modelValue":t[29]||(t[29]=e=>ie.timeout=e),modelModifiers:{number:!0},placeholder:"请填写key的超时时间单位（秒）！"},null,8,["modelValue"])])),_:1})):w("",!0)])])),_:1},8,["model","rules"])),[[ze,f(re)]])])),_:1},8,["modelValue","title"])])}}});"function"==typeof U&&U(oe);export{oe as default};
