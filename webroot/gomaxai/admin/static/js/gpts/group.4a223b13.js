
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.0db9df33.js";import{A as l}from"./gpts.550c7299.js";import{u as a}from"../utcformatTime/utcformatTime.f6db2c52.js";import{f as t,g as o}from"../index/index.f6e2b57f.js";import{a as r}from"../system/system.c6c4a7a7.js";import{d as u,r as d,Q as s,B as n,x as p,h as i,R as m,o as c,c as g,e as f,f as y,S as k,U as w,b as h,l as b,a as _,w as x,I as v,t as V,W as T,E as U,Y as M,ad as R,p as q,i as C,n as j,q as z}from"../main-0579ff80.js";const L=e=>(q("data-v-25f24045"),e=e(),C(),e),N={style:{float:"right"}},G=["src"],P={class:"overflow-y-scroll w-full whitespace-nowrap"},Y=["src"],F=L((()=>_("div",{style:{width:"250px"}}," 账号启用状态、一旦锁定当前key将停止工作！ ",-1))),A=L((()=>_("div",{style:{width:"250px"}}," openai的gpts仅设置key即可、 支持批量导入、如果您需要批量导入key、则一行一个key即可、多个key使用换行隔离、其余配置将共享、多个key可以重复选用默认模型。 ",-1))),D=L((()=>_("div",{style:{width:"250px"}}," 设置当前分类的扣费类型、扣除普通余额或是高级余额。 ",-1))),S=L((()=>_("div",{style:{width:"250px"}}," 设置当前key的单次调用扣除余额、建议同模型或名称key设置相同的金额、避免扣费发生异常！ ",-1))),E=L((()=>_("div",{style:{width:"250px"}}," 填写此配置可以限制用户在选择模型时候的高级配置中的最大上下文轮次、可以通过限制此数量减少token的损耗、减低上下文的损耗量、 如果设置了模型的最大token和返回量、那么两个限制会同时生效！ ",-1))),I=L((()=>_("div",{style:{width:"250px"}}," 当前轮询是根据模型下的列表按顺序调用、如果权重为2则表示轮到此key的时候会调用两次之后再轮询下一个key 保证每个key的调用顺序以及限制每次调用的准确次数 ",-1))),K={class:"flex justify-end mr-5"},Q=u({__name:"group",setup(u){const q=d(),C=d(0),j=d(!1),z=d(!1),L=d(!1),Q=s({groupName:"",status:null,page:1,size:10}),B=d(),H=d(0),O=s({groupName:"",key:"",status:1,weight:1,maxModelTokens:8096,maxResponseTokens:4e3,proxyUrl:"",timeout:300,deduct:1,deductType:1,maxRounds:12,groupLogo:""}),W=s({groupName:[{required:!0,message:"请填写分类名称",trigger:"blur"}],key:[{required:!0,message:"请填写您的调用模型key",trigger:"blur"}],secret:[{required:!0,message:"请填写您的调用模型的secret",trigger:"blur"}],appid:[{required:!0,message:"请填写您的调用模型的appid",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],isDraw:[{required:!0,message:"请选择当前key是否作为基础绘画key",trigger:"change"}],model:[{required:!0,message:"请选择当前key需要绑定的模型",trigger:"change"}],weight:[{required:!0,message:"请填写key的权重值",trigger:"blur"}],maxModelTokens:[{required:!0,message:"请填写模型最大token数",trigger:"blur"}],maxResponseTokens:[{required:!0,message:"请填写允许用户使用的最大回复token数",trigger:"blur"}],proxyUrl:[{required:!1,message:"请填写指定代理地址",trigger:"blur"}],timeout:[{required:!0,message:"请填写超时时间 默认 60 单位（秒）",trigger:"blur"}],deductType:[{required:!0,message:"请选择当前模型扣费类型",trigger:"change"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],maxRounds:[{required:!0,message:"请填写允许用户选择的最大上下文轮次",trigger:"blur"}]});const $=n((()=>H.value?"更新秘钥":"新增秘钥")),J=n((()=>H.value?"确认更新":"确认新增")),X=d([]);async function Z(){try{z.value=!0;const e=await l.queryGptsGroup(Q);z.value=!1;const{rows:a,count:t}=e.data;C.value=t,X.value=a}catch(e){z.value=!1}}const ee=e=>"image/jpeg"!==e.type&&"image/png"!==e.type?(U.error("只支持jpg和png格式"),!1):!(e.size/1024/1024>2)||(U.error("图片不能大于2M!"),!1);return p((()=>{Z()})),(u,d)=>{const s=i("el-input"),n=i("el-form-item"),p=i("el-option"),le=i("el-select"),ae=i("el-button"),te=i("Plus"),oe=i("el-icon"),re=i("el-form"),ue=e,de=i("el-alert"),se=i("el-table-column"),ne=i("el-tag"),pe=i("el-popconfirm"),ie=i("el-table"),me=i("el-pagination"),ce=i("el-row"),ge=i("el-upload"),fe=i("el-switch"),ye=i("QuestionFilled"),ke=i("el-tooltip"),we=i("el-col"),he=i("el-dialog"),be=m("loading");return c(),g("div",null,[f(ue,null,{default:y((()=>[f(re,{ref_key:"formRef",ref:q,inline:!0,model:Q},{default:y((()=>[f(n,{label:"分类名称",prop:"groupName"},{default:y((()=>[f(s,{modelValue:Q.groupName,"onUpdate:modelValue":d[0]||(d[0]=e=>Q.groupName=e),placeholder:"分类名称",clearable:""},null,8,["modelValue"])])),_:1}),f(n,{label:"启用状态",prop:"status"},{default:y((()=>[f(le,{modelValue:Q.status,"onUpdate:modelValue":d[1]||(d[1]=e=>Q.status=e),placeholder:"请选择启用状态",clearable:"",style:{width:"192px"}},{default:y((()=>[(c(!0),g(k,null,w(h(t),(e=>(c(),v(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(n,null,{default:y((()=>[f(ae,{type:"primary",onClick:Z},{default:y((()=>[b(" 查询 ")])),_:1}),f(ae,{onClick:d[2]||(d[2]=e=>{return null==(l=h(q))||l.resetFields(),void Z();var l})},{default:y((()=>[b(" 重置 ")])),_:1})])),_:1}),_("span",N,[f(ae,{type:"success",onClick:d[3]||(d[3]=e=>j.value=!0)},{default:y((()=>[b(" 添加分类 "),f(oe,{class:"ml-3"},{default:y((()=>[f(te)])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1}),f(ue,{bottomPadding:"20px"},{default:y((()=>[f(de,{"show-icon":"",closable:!1,title:"分类说明",description:"用于对应用归类，分为普通应用和GPTS应用。同一分类下面gpts应用都使用gpts组配置的key和上下文参数！组权重用于排序，权重大排序越靠前",type:"success"})])),_:1}),f(ue,{bottomPadding:"20px",bottomMargin:"0px"},{default:y((()=>[x((c(),v(ie,{height:"52vh",border:"",data:h(X),style:{width:"100%"},size:"large"},{default:y((()=>[f(se,{prop:"groupName",label:"分类名称",width:"180"}),f(se,{prop:"groupLogo",align:"center",label:"启用状态",width:"80"},{default:y((e=>[_("img",{src:e.row.groupLogo,alt:"",srcset:"",style:{width:"24px"}},null,8,G)])),_:1}),f(se,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:y((e=>[f(ne,{type:e.row.status?"success":"danger"},{default:y((()=>[b(V(e.row.status?"使用中":"已暂停"),1)])),_:2},1032,["type"])])),_:1}),f(se,{prop:"key",label:"分类绑定KEY",width:"460"},{default:y((e=>[_("div",P,V(e.row.key),1)])),_:1}),f(se,{prop:"weight",label:"权重",width:"90",align:"center"}),f(se,{prop:"deductType",align:"center",label:"扣费类型",width:"90"},{default:y((e=>[f(ne,{type:1===e.row.deductType?"success":"warning"},{default:y((()=>[b(V(1===e.row.deductType?"普通余额":"高级余额"),1)])),_:2},1032,["type"])])),_:1}),f(se,{prop:"deduct",align:"center",label:"单次扣除",width:"90"},{default:y((e=>[f(ne,{type:1===e.row.deductType?"success":"warning"},{default:y((()=>[b(V(`${e.row.deduct} 余额`),1)])),_:2},1032,["type"])])),_:1}),f(se,{prop:"useCount",align:"center",label:"调用次数",width:"90"}),f(se,{prop:"useToken",align:"center",label:"已使用Token",width:"120"}),f(se,{prop:"status",align:"center",label:"组状态",width:"110"},{default:y((e=>[f(ne,{type:1===e.row.status?"success":"danger"},{default:y((()=>[b(V(1===e.row.status?"正常工作":-1===e.row.status?"已被封禁":"余额耗尽 "),1)])),_:2},1032,["type"])])),_:1}),f(se,{prop:"maxModelTokens",align:"center",label:"模型最大上下文",width:"140"},{default:y((e=>[f(ae,{type:"info",text:""},{default:y((()=>[b(V(e.row.maxModelTokens||"-"),1)])),_:2},1024)])),_:1}),f(se,{prop:"maxResponseTokens",align:"center",label:"最大回复Token",width:"160"},{default:y((e=>[f(ae,{type:"info",text:""},{default:y((()=>[b(V(e.row.maxResponseTokens||"-"),1)])),_:2},1024)])),_:1}),f(se,{prop:"proxyUrl",align:"center",label:"绑定的代理地址",width:"140"},{default:y((e=>[f(ae,{type:"info",text:""},{default:y((()=>[b(V(e.row.proxyUrl||"-"),1)])),_:2},1024)])),_:1}),f(se,{prop:"proxyUrl",align:"center",label:"变更提示信息",width:"180"},{default:y((e=>[b(V(e.row.remark||"-"),1)])),_:1}),f(se,{prop:"createdAt",align:"center",label:"添加时间",width:"120"},{default:y((e=>[b(V(h(a)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),f(se,{fixed:"right",label:"操作",width:"200"},{default:y((e=>[f(ae,{link:"",type:"primary",size:"small",onClick:l=>function(e){H.value=e.id;const{groupName:l,key:a,secret:t,status:o,weight:r,maxModelTokens:u,maxResponseTokens:d,proxyUrl:s,timeout:n,deductType:p,deduct:i,maxRounds:m,groupLogo:c}=e;M((()=>{Object.assign(O,{groupName:l,key:a,secret:t,status:o,weight:r,maxModelTokens:u,maxResponseTokens:d,proxyUrl:s,timeout:n,deductType:p,deduct:i,maxRounds:m,groupLogo:c})})),j.value=!0}(e.row)},{default:y((()=>[b(" 变更 ")])),_:2},1032,["onClick"]),f(pe,{title:"确认删除此分类么?",width:"180","icon-color":"red",onConfirm:a=>async function(e){const{id:a}=e;await l.removeGptsGroup({id:a}),U({type:"success",message:"操作完成！"}),Z()}(e.row)},{reference:y((()=>[f(ae,{link:"",type:"danger",size:"small"},{default:y((()=>[b(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[be,h(z)]]),f(ce,{class:"flex justify-end mt-5"},{default:y((()=>[f(me,{"current-page":Q.page,"onUpdate:currentPage":d[4]||(d[4]=e=>Q.page=e),"page-size":Q.size,"onUpdate:pageSize":d[5]||(d[5]=e=>Q.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:h(C),onSizeChange:Z,onCurrentChange:Z},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),f(he,{modelValue:h(j),"onUpdate:modelValue":d[21]||(d[21]=e=>T(j)?j.value=e:null),"close-on-click-modal":!1,title:$.value,width:"1000",onClose:d[22]||(d[22]=e=>{return l=h(B),H.value=0,void(null==l||l.resetFields());var l})},{footer:y((()=>[_("span",K,[f(ae,{onClick:d[19]||(d[19]=e=>j.value=!1)},{default:y((()=>[b("取消")])),_:1}),f(ae,{type:"primary",onClick:d[20]||(d[20]=e=>async function(e){null==e||e.validate((async e=>{if(e){const e=R(O);delete e.id;const a=R(O.key);e.key=a.split("\n").filter((e=>""!==e)).join("|"),H.value?await l.modifyGptsGroup({id:H.value,...e}):await l.addGptsGroup(e),U({type:"success",message:"操作成功！"}),H.value=0,j.value=!1,Z()}}))}(h(B)))},{default:y((()=>[b(V(J.value),1)])),_:1})])])),default:y((()=>[x((c(),v(re,{ref_key:"formPackageRef",ref:B,"label-position":"right","label-width":"120px",model:O,rules:W},{default:y((()=>[f(ce,null,{default:y((()=>[f(we,{span:12},{default:y((()=>[f(n,{label:"分类名称",prop:"groupName"},{default:y((()=>[f(s,{modelValue:O.groupName,"onUpdate:modelValue":d[6]||(d[6]=e=>O.groupName=e),placeholder:"请填写分类中文名称"},null,8,["modelValue"])])),_:1}),f(n,{label:"应用Logo",prop:"groupLogo"},{default:y((()=>[f(ge,{class:"logo-uploader",action:"","auto-upload":!1,"show-file-list":!1,onChange:d[7]||(d[7]=e=>(e=>{const l=e.name.split(".")[1],a=new FormData;a.append("filename",e.raw.uid+"."+l),a.append("file",e.raw),a.append("dir","gpts-logo"),r.uploadFile(a).then((e=>{O.groupLogo=e.data}))})(e)),"before-upload":ee},{default:y((()=>[O.groupLogo?(c(),g("img",{key:0,src:O.groupLogo,class:"avatar"},null,8,Y)):(c(),v(oe,{key:1,class:"logo-uploader-icon"},{default:y((()=>[f(te)])),_:1}))])),_:1}),f(s,{style:{"margin-top":"10px"},modelValue:O.groupLogo,"onUpdate:modelValue":d[8]||(d[8]=e=>O.groupLogo=e),placeholder:"分类网络地址"},null,8,["modelValue"])])),_:1}),f(n,{label:"启用状态",prop:"status"},{default:y((()=>[f(fe,{"active-value":1,"inactive-value":0,modelValue:O.status,"onUpdate:modelValue":d[9]||(d[9]=e=>O.status=e)},null,8,["modelValue"]),f(ke,{class:"box-item",effect:"dark",placement:"right"},{content:y((()=>[F])),default:y((()=>[f(oe,{class:"ml-3 cursor-pointer"},{default:y((()=>[f(ye)])),_:1})])),_:1})])),_:1}),f(n,{label:"APIKey",prop:"key"},{default:y((()=>[f(s,{modelValue:O.key,"onUpdate:modelValue":d[10]||(d[10]=e=>O.key=e),type:"textarea",rows:7,placeholder:"请填写模型Key",style:{width:"90%"}},null,8,["modelValue"]),f(ke,{class:"box-item",effect:"dark",placement:"right"},{content:y((()=>[A])),default:y((()=>[f(oe,{class:"ml-3 cursor-pointer"},{default:y((()=>[f(ye)])),_:1})])),_:1})])),_:1}),f(n,{label:"指定代理地址",prop:"proxyUrl"},{default:y((()=>[f(s,{modelValue:O.proxyUrl,"onUpdate:modelValue":d[11]||(d[11]=e=>O.proxyUrl=e),modelModifiers:{number:!0},placeholder:"如需使用代理请填写、不填写默认使用全局配置！"},null,8,["modelValue"])])),_:1})])),_:1}),f(we,{span:12},{default:y((()=>[f(n,{label:"扣费类型",prop:"deductType"},{default:y((()=>[f(le,{modelValue:O.deductType,"onUpdate:modelValue":d[12]||(d[12]=e=>O.deductType=e),filterable:"","allow-create":"",clearable:"",placeholder:"请选用扣费类型",style:{width:"90%"}},{default:y((()=>[(c(!0),g(k,null,w(h(o),(e=>(c(),v(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),f(ke,{class:"box-item",effect:"dark",placement:"right"},{content:y((()=>[D])),default:y((()=>[f(oe,{class:"ml-3 cursor-pointer"},{default:y((()=>[f(ye)])),_:1})])),_:1})])),_:1}),f(n,{label:"单次扣除金额",prop:"deduct"},{default:y((()=>[f(s,{modelValue:O.deduct,"onUpdate:modelValue":d[13]||(d[13]=e=>O.deduct=e),modelModifiers:{number:!0},placeholder:"请填写单次调用此分类的扣费金额！",style:{width:"90%"}},null,8,["modelValue"]),f(ke,{class:"box-item",effect:"dark",placement:"right"},{content:y((()=>[S])),default:y((()=>[f(oe,{class:"ml-3 cursor-pointer"},{default:y((()=>[f(ye)])),_:1})])),_:1})])),_:1}),f(n,{label:"上下文限制",prop:"maxRounds"},{default:y((()=>[f(s,{modelValue:O.maxRounds,"onUpdate:modelValue":d[14]||(d[14]=e=>O.maxRounds=e),modelModifiers:{number:!0},placeholder:"请填写允许用户选择的最高上下文轮次！",style:{width:"90%"}},null,8,["modelValue"]),f(ke,{class:"box-item",effect:"dark",placement:"right"},{content:y((()=>[E])),default:y((()=>[f(oe,{class:"ml-3 cursor-pointer"},{default:y((()=>[f(ye)])),_:1})])),_:1})])),_:1}),f(n,{label:"调用轮询权重",prop:"weight"},{default:y((()=>[f(s,{modelValue:O.weight,"onUpdate:modelValue":d[15]||(d[15]=e=>O.weight=e),modelModifiers:{number:!0},placeholder:"请填写key的权重、数字越大使用评率越高！",style:{width:"90%"}},null,8,["modelValue"]),f(ke,{class:"box-item",effect:"dark",placement:"right"},{content:y((()=>[I])),default:y((()=>[f(oe,{class:"ml-3 cursor-pointer"},{default:y((()=>[f(ye)])),_:1})])),_:1})])),_:1}),f(n,{label:"模型最大Token",prop:"maxModelTokens"},{default:y((()=>[f(s,{modelValue:O.maxModelTokens,"onUpdate:modelValue":d[16]||(d[16]=e=>O.maxModelTokens=e),modelModifiers:{number:!0},placeholder:"请填写模型最大Token、不填写默认使用默认！"},null,8,["modelValue"])])),_:1}),f(n,{label:"最大回复Token",prop:"maxResponseTokens"},{default:y((()=>[f(s,{modelValue:O.maxResponseTokens,"onUpdate:modelValue":d[17]||(d[17]=e=>O.maxResponseTokens=e),modelModifiers:{number:!0},placeholder:"请填写最大回复Token、不填写使用默认！"},null,8,["modelValue"])])),_:1}),f(n,{label:"调用超时时间",prop:"timeout"},{default:y((()=>[f(s,{modelValue:O.timeout,"onUpdate:modelValue":d[18]||(d[18]=e=>O.timeout=e),modelModifiers:{number:!0},placeholder:"请填写key的超时时间单位（秒）！"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[be,h(L)]])])),_:1},8,["modelValue","title"])])}}});"function"==typeof z&&z(Q);const B=j(Q,[["__scopeId","data-v-25f24045"]]);export{B as default};