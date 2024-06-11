
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.55992ed4.js";import{A as l}from"../models/models.980e9395.js";import{u as a}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as t,e as d,f as o,Q as r,g as s,h as u,D as i}from"../index/index.4485e23d.js";import{d as p,r as n,Q as c,B as m,x as y,h as f,R as g,o as k,c as b,e as w,f as _,S as h,U as x,b as v,l as T,a as V,w as U,I as q,t as M,J as C,W as N,E as R,X as S,Y as z,q as D}from"../main-1d1da8fb.js";const j={style:{float:"right"}},A={class:"overflow-y-scroll w-full whitespace-nowrap"},Y=V("div",{style:{width:"250px"}}," 不同模型的设置不同、例如openai仅设置key即可、如果是百度大模型、则填写clientId以及同时需要填写secret。对于OPENAI模型、我们支持批量导入、如果您需要批量导入key、则一行一个key即可、多个key使用换行隔离、其余配置将共享、多个key可以重复选用默认模型。 ",-1),W=V("div",{style:{width:"250px"}}," 不同账号填写的内容不同、但是都代表的是appid ",-1),I=V("div",{style:{width:"250px"}}," 账号启用状态、一旦锁定当前key将停止工作！ ",-1),K=V("div",{style:{width:"250px"}}," 设置当前key的扣费类型、扣除普通余额或是高级余额。 ",-1),P=V("div",{style:{width:"250px"}}," 设置当前key的单词调用扣除余额、建议同模型或名称key设置相同的金额、避免扣费发生异常！ ",-1),E=V("div",{style:{width:"250px"}}," 显示排序，数值越大，显示在越靠前 ",-1),F={class:"flex justify-end mr-5"},Q=p({__name:"modelManager",setup(p){n();const D=n(),Q=n(0),J=n(!1),O=n(!1),B=n(!1);n(!1);const H=c({page:1,size:10,model:"",status:null,modelType:"music"}),L=n(),X=n(0),$=c({keyType:1,modelName:"",key:"",appid:null,secret:null,status:!0,model:"suno-v3",isDraw:!1,canAudio:!1,canUpload:!1,keyWeight:1,maxModelTokens:8096,maxResponseTokens:4e3,proxyUrl:"",front:1,timeout:300,deduct:1,deductType:1,maxRounds:12,displaySort:0}),G=c({keyType:[{required:!0,message:"请填写您的调用模型类型",trigger:"blur"}],modelName:[{required:!0,message:"请填写您的模型名称",trigger:"blur"}],key:[{required:!0,message:"请填写您的调用模型key",trigger:"blur"}],secret:[{required:!0,message:"请填写您的调用模型的secret",trigger:"blur"}],appid:[{required:!0,message:"请填写您的调用模型的appid",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],isDraw:[{required:!0,message:"请选择当前key是否作为基础绘画key",trigger:"change"}],model:[{required:!0,message:"请选择当前key需要绑定的模型",trigger:"change"}],keyWeight:[{required:!0,message:"请填写key的权重值",trigger:"blur"}],maxModelTokens:[{required:!0,message:"请填写模型最大token数",trigger:"blur"}],maxResponseTokens:[{required:!0,message:"请填写允许用户使用的最大回复token数",trigger:"blur"}],proxyUrl:[{required:!1,message:"请填写指定代理地址",trigger:"blur"}],timeout:[{required:!0,message:"请填写超时时间 默认 60 单位（秒）",trigger:"blur"}],deductType:[{required:!0,message:"请选择当前模型扣费类型",trigger:"change"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],maxRounds:[{required:!0,message:"请填写允许用户选择的最大上下文轮次",trigger:"blur"}]});m((()=>t[$.keyType].filter((e=>e.startsWith("suno")))));const Z=m((()=>X.value?"更新秘钥":"新增秘钥")),ee=m((()=>d[$.keyType])),le=m((()=>X.value?"确认更新":"确认新增")),ae=n([]);async function te(){try{O.value=!0;const e=await l.queryModels(H);O.value=!1;const{rows:a,count:t}=e.data;Q.value=t,ae.value=a}catch(e){O.value=!1}}return y((()=>{te()})),(t,d)=>{const p=f("el-option"),n=f("el-select"),c=f("el-form-item"),m=f("el-button"),y=f("Plus"),de=f("el-icon"),oe=f("el-form"),re=e,se=f("el-alert"),ue=f("el-tag"),ie=f("el-table-column"),pe=f("el-popconfirm"),ne=f("el-table"),ce=f("el-pagination"),me=f("el-row"),ye=f("el-input"),fe=f("QuestionFilled"),ge=f("el-tooltip"),ke=f("el-switch"),be=f("el-col"),we=f("el-dialog"),_e=g("loading");return k(),b("div",null,[w(re,null,{default:_((()=>[w(oe,{ref_key:"formRef",ref:D,inline:!0,model:H},{default:_((()=>[w(c,{label:"使用模型",prop:"model"},{default:_((()=>[w(n,{modelValue:H.model,"onUpdate:modelValue":d[0]||(d[0]=e=>H.model=e),filterable:"","allow-create":"",placeholder:"请选择或填写绑定的模型",clearable:"",style:{width:"192px"}},{default:_((()=>[(k(!0),b(h,null,x(v(o),(e=>(k(),q(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(c,{label:"启用状态",prop:"status"},{default:_((()=>[w(n,{modelValue:H.status,"onUpdate:modelValue":d[1]||(d[1]=e=>H.status=e),placeholder:"请选择key启用状态",clearable:"",style:{width:"192px"}},{default:_((()=>[(k(!0),b(h,null,x(v(r),(e=>(k(),q(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(c,null,{default:_((()=>[w(m,{type:"primary",onClick:te},{default:_((()=>[T(" 查询 ")])),_:1}),w(m,{onClick:d[2]||(d[2]=e=>{return null==(l=v(D))||l.resetFields(),void te();var l})},{default:_((()=>[T(" 重置 ")])),_:1})])),_:1}),V("span",j,[w(m,{type:"success",onClick:d[3]||(d[3]=e=>J.value=!0)},{default:_((()=>[T(" 添加模型Key "),w(de,{class:"ml-3"},{default:_((()=>[w(y)])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1}),w(re,{bottomPadding:"20px"},{default:_((()=>[w(se,{"show-icon":"",closable:!1,title:"KEY池说明",description:"所有key会根据你所选的模型自动分类、会以第一个加入的key为标准、建议所有同模型的key参数配置相同、否则可能特殊场景会有迷惑性。不同模型可以设置不同的扣费类型以及单次调用扣除的额度、额度不再以次为单位、改为(积分)概念！你可以设置模型最大上限和回复上限、以及最大轮次用以限制用户的最大上下文、当限制token后、用户端可选范围受其影响、轮次同理、到达轮次之后会移除掉更靠前的上下文！",type:"success"})])),_:1}),w(re,{bottomPadding:"20px",bottomMargin:"0px"},{default:_((()=>[U((k(),q(ne,{height:"52vh",border:"",data:v(ae),style:{width:"100%"},size:"large"},{default:_((()=>[w(ie,{prop:"keyType",label:"模型类型",width:"120"},{default:_((e=>[w(ue,{type:"success"},{default:_((()=>[T(M(v(s)[e.row.keyType]),1)])),_:2},1024)])),_:1}),w(ie,{prop:"modelName",label:"模型名称",width:"180"}),w(ie,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:_((e=>[w(ue,{type:e.row.status?"success":"danger"},{default:_((()=>[T(M(e.row.status?"使用中":"已暂停"),1)])),_:2},1032,["type"])])),_:1}),w(ie,{prop:"key",label:"模型KEY",width:"460"},{default:_((e=>[V("div",A,M(e.row.key),1)])),_:1}),w(ie,{prop:"keyWeight",label:"模型权重",width:"90",align:"center"}),w(ie,{prop:"model",align:"center",label:"绑定模型",width:"180"},{default:_((e=>[w(ue,{type:e.row.model.includes("gpt-4")?"success":""},{default:_((()=>[T(M(e.row.model),1)])),_:2},1032,["type"])])),_:1}),w(ie,{prop:"isDraw",align:"center",label:"是否绘画KEY",width:"120"},{default:_((e=>[w(ue,{type:e.row.isDraw?"success":"danger"},{default:_((()=>[T(M(e.row.isDraw?"是":"否"),1)])),_:2},1032,["type"])])),_:1}),w(ie,{prop:"deductType",align:"center",label:"扣费类型",width:"90"},{default:_((e=>[w(ue,{type:1===e.row.deductType?"success":"warning"},{default:_((()=>[T(M(1===e.row.deductType?"普通余额":"高级余额"),1)])),_:2},1032,["type"])])),_:1}),w(ie,{prop:"deduct",align:"center",label:"单次扣除",width:"90"},{default:_((e=>[w(ue,{type:1===e.row.deductType?"success":"warning"},{default:_((()=>[T(M(`${e.row.deduct} 余额`),1)])),_:2},1032,["type"])])),_:1}),w(ie,{prop:"useCount",align:"center",label:"调用次数",width:"90"}),w(ie,{prop:"useToken",align:"center",label:"已使用Token",width:"120"}),w(ie,{prop:"keyStatus",align:"center",label:"key状态",width:"110"},{default:_((e=>[w(ue,{type:1===e.row.keyStatus?"success":"danger"},{default:_((()=>[T(M(1===e.row.keyStatus?"正常工作":-1===e.row.keyStatus?"已被封禁":"余额耗尽 "),1)])),_:2},1032,["type"])])),_:1}),w(ie,{prop:"maxModelTokens",align:"center",label:"模型最大上下文",width:"140"},{default:_((e=>[w(m,{type:"info",text:""},{default:_((()=>[T(M(e.row.maxModelTokens||"-"),1)])),_:2},1024)])),_:1}),w(ie,{prop:"maxResponseTokens",align:"center",label:"最大回复Token",width:"160"},{default:_((e=>[w(m,{type:"info",text:""},{default:_((()=>[T(M(e.row.maxResponseTokens||"-"),1)])),_:2},1024)])),_:1}),w(ie,{prop:"proxyUrl",align:"center",label:"绑定的代理地址",width:"140"},{default:_((e=>[w(m,{type:"info",text:""},{default:_((()=>[T(M(e.row.proxyUrl||"-"),1)])),_:2},1024)])),_:1}),w(ie,{prop:"proxyUrl",align:"center",label:"变更提示信息",width:"180"},{default:_((e=>[T(M(e.row.remark||"-"),1)])),_:1}),w(ie,{prop:"createdAt",align:"center",label:"添加时间",width:"120"},{default:_((e=>[T(M(v(a)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),w(ie,{fixed:"right",label:"操作",width:"200"},{default:_((e=>[w(m,{link:"",type:"primary",size:"small",onClick:l=>function(e){X.value=e.id;const{keyType:l,modelName:a,key:t,appid:d,secret:o,status:r,model:s,keyWeight:u,canUpload:i,canAudio:p,maxModelTokens:n,maxResponseTokens:c,proxyUrl:m,timeout:y,deductType:f,deduct:g,maxRounds:k,isDraw:b,front:w,displaySort:_}=e;S((()=>{Object.assign($,{keyType:l,appid:d,modelName:a,key:t,secret:o,canUpload:i,canAudio:p,status:r,model:s,keyWeight:u,maxModelTokens:n,maxResponseTokens:c,proxyUrl:m,timeout:y,deductType:f,deduct:g,maxRounds:k,isDraw:b,front:w,displaySort:_})})),J.value=!0}(e.row)},{default:_((()=>[T(" 变更 ")])),_:2},1032,["onClick"]),w(pe,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:a=>async function(e){const{id:a}=e;await l.delModels({id:a}),R({type:"success",message:"操作完成！"}),te()}(e.row)},{reference:_((()=>[w(m,{link:"",type:"danger",size:"small"},{default:_((()=>[T(" 删除秘钥 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[_e,v(O)]]),w(me,{class:"flex justify-end mt-5"},{default:_((()=>[w(ce,{"current-page":H.page,"onUpdate:currentPage":d[4]||(d[4]=e=>H.page=e),"page-size":H.size,"onUpdate:pageSize":d[5]||(d[5]=e=>H.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:v(Q),onSizeChange:te,onCurrentChange:te},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),w(we,{modelValue:v(J),"onUpdate:modelValue":d[18]||(d[18]=e=>N(J)?J.value=e:null),"close-on-click-modal":!1,title:Z.value,width:"1000",onClose:d[19]||(d[19]=e=>{return l=v(L),X.value=0,void(null==l||l.resetFields());var l})},{footer:_((()=>[V("span",F,[w(m,{onClick:d[16]||(d[16]=e=>J.value=!1)},{default:_((()=>[T("取消")])),_:1}),w(m,{type:"primary",onClick:d[17]||(d[17]=e=>async function(e){null==e||e.validate((async e=>{if(e){const e=z($);if(delete e.id,X.value&&(e.id=X.value),1===Number($.keyType)){const l=z($.key);e.key=l.split("\n")}e.modelType="music",await l.setModels(e),R({type:"success",message:"操作成功！"}),X.value=0,J.value=!1,te()}}))}(v(L)))},{default:_((()=>[T(M(le.value),1)])),_:1})])])),default:_((()=>[U((k(),q(oe,{ref_key:"formPackageRef",ref:L,"label-position":"right","label-width":"120px",model:$,rules:G},{default:_((()=>[w(me,null,{default:_((()=>[w(be,{span:12},{default:_((()=>[w(c,{label:"模型类型选择",prop:"keyType"},{default:_((()=>[w(n,{modelValue:$.keyType,"onUpdate:modelValue":d[6]||(d[6]=e=>$.keyType=e),placeholder:"请选择模型类型",style:{width:"100%"},disabled:""},{default:_((()=>[(k(!0),b(h,null,x(v(u),(e=>(k(),q(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(c,{label:"模型中文名称",prop:"modelName"},{default:_((()=>[w(ye,{modelValue:$.modelName,"onUpdate:modelValue":d[7]||(d[7]=e=>$.modelName=e),placeholder:"请填写模型中文名称（用户选择的）"},null,8,["modelValue"])])),_:1}),w(c,{label:ee.value,prop:"key"},{default:_((()=>[w(ye,{modelValue:$.key,"onUpdate:modelValue":d[8]||(d[8]=e=>$.key=e),type:1===Number($.keyType)?"textarea":"text",rows:5,placeholder:"请填写模型Key|clientId|AppId",style:{width:"90%"}},null,8,["modelValue","type"]),w(ge,{class:"box-item",effect:"dark",placement:"right"},{content:_((()=>[Y])),default:_((()=>[w(de,{class:"ml-3 cursor-pointer"},{default:_((()=>[w(fe)])),_:1})])),_:1})])),_:1},8,["label"]),[4].includes(Number($.keyType))?(k(),q(c,{key:0,label:"AppId",prop:"appid"},{default:_((()=>[w(ye,{modelValue:$.appid,"onUpdate:modelValue":d[9]||(d[9]=e=>$.appid=e),placeholder:"请填写模型调用所需的appid",style:{width:"90%"}},null,8,["modelValue"]),w(ge,{class:"box-item",effect:"dark",placement:"right"},{content:_((()=>[W])),default:_((()=>[w(de,{class:"ml-3 cursor-pointer"},{default:_((()=>[w(fe)])),_:1})])),_:1})])),_:1})):C("",!0),w(c,{label:"模型启用状态",prop:"status"},{default:_((()=>[w(ke,{modelValue:$.status,"onUpdate:modelValue":d[10]||(d[10]=e=>$.status=e)},null,8,["modelValue"]),w(ge,{class:"box-item",effect:"dark",placement:"right"},{content:_((()=>[I])),default:_((()=>[w(de,{class:"ml-3 cursor-pointer"},{default:_((()=>[w(fe)])),_:1})])),_:1})])),_:1})])),_:1}),w(be,{span:12},{default:_((()=>[w(c,{label:"模型扣费类型",prop:"deductType"},{default:_((()=>[w(n,{modelValue:$.deductType,"onUpdate:modelValue":d[11]||(d[11]=e=>$.deductType=e),filterable:"","allow-create":"",clearable:"",placeholder:"请选用模型扣费类型",style:{width:"90%"}},{default:_((()=>[(k(!0),b(h,null,x(v(i),(e=>(k(),q(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),w(ge,{class:"box-item",effect:"dark",placement:"right"},{content:_((()=>[K])),default:_((()=>[w(de,{class:"ml-3 cursor-pointer"},{default:_((()=>[w(fe)])),_:1})])),_:1})])),_:1}),w(c,{label:"单词扣除金额",prop:"deduct"},{default:_((()=>[w(ye,{modelValue:$.deduct,"onUpdate:modelValue":d[12]||(d[12]=e=>$.deduct=e),modelModifiers:{number:!0},placeholder:"请填写单词调用此key的扣费金额！",style:{width:"90%"}},null,8,["modelValue"]),w(ge,{class:"box-item",effect:"dark",placement:"right"},{content:_((()=>[P])),default:_((()=>[w(de,{class:"ml-3 cursor-pointer"},{default:_((()=>[w(fe)])),_:1})])),_:1})])),_:1}),[1].includes(Number($.keyType))?(k(),q(c,{key:0,label:"调用超时时间",prop:"timeout"},{default:_((()=>[w(ye,{modelValue:$.timeout,"onUpdate:modelValue":d[13]||(d[13]=e=>$.timeout=e),modelModifiers:{number:!0},placeholder:"请填写key的超时时间单位（秒）！"},null,8,["modelValue"])])),_:1})):C("",!0),[1].includes(Number($.keyType))?(k(),q(c,{key:1,label:"指定代理地址",prop:"proxyUrl"},{default:_((()=>[w(ye,{modelValue:$.proxyUrl,"onUpdate:modelValue":d[14]||(d[14]=e=>$.proxyUrl=e),modelModifiers:{number:!0},placeholder:"如需使用代理请填写、不填写默认使用全局配置！"},null,8,["modelValue"])])),_:1})):C("",!0),w(c,{label:"显示排序",prop:"displaySort"},{default:_((()=>[w(ye,{modelValue:$.displaySort,"onUpdate:modelValue":d[15]||(d[15]=e=>$.displaySort=e),modelModifiers:{number:!0},placeholder:"显示排序",style:{width:"90%"}},null,8,["modelValue"]),w(ge,{class:"box-item",effect:"dark",placement:"right"},{content:_((()=>[E])),default:_((()=>[w(de,{class:"ml-3 cursor-pointer"},{default:_((()=>[w(fe)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[_e,v(B)]])])),_:1},8,["modelValue","title"])])}}});"function"==typeof D&&D(Q);export{Q as default};
