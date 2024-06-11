import{R as e}from"../index/index.4104c8d0.js";import{d as a,v as l,o as t,i as s,j as i,h as o,n,_ as u,s as r,y as d,c,g as p,u as m,z as f,ac as v,w as g,N as b,Z as x,aH as h,F as w,r as y,m as k,k as _,B as I,l as C,Q as j,bm as z,bn as q,bo as D,a8 as R,aM as A,b5 as M,$ as P,a9 as U,Y as L,aC as N,bp as F,bq as V,br as S,bs as T,e as $,M as B,bt as H,a7 as O}from"../main-1e3344b4.js";import{N as Q}from"../Popconfirm/Popconfirm.d917fc0a.js";import"../LayoutSider/LayoutSider.2f270562.js";const W={class:"m-auto flex h-14 max-w-screen-2xl items-center justify-between px-4"},Y={class:"flex min-w-0 flex-1 items-center space-x-2 overflow-hidden pr-2"},Z=i("h2",{class:"text-base font-bold"}," 我的自定义工作台 ",-1),E=i("div",{class:"flex items-center space-x-2"},null,-1),G=a({__name:"header",setup(e){const a=l();return(e,l)=>(t(),s("div",W,[i("div",Y,[i("button",{onClick:l[0]||(l[0]=e=>o(a).go(-1))},[n(o(u),{class:"text-xl",icon:"ri:arrow-left-s-line"})]),Z]),E]))}}),J={class:"w-full flex justify-center"},K={class:"p-6 max-w-screen-2xl px-4 w-full"},X={class:"flex flex-col space-y-3 justify-between sm:flex-row sm:space-y-0"},ee={class:"sm:w-full md:w-[300px] sm:mb-3 2xl:w-[380px]"},ae={class:"mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5"},le=["onClick"],te={class:"w-full h-16 flex items-center mb-3"},se={class:"w-14 h-14 flex justify-center items-center rounded-md shadow-md mr-5 border border-[#00000014]"},ie=["src"],oe={class:"text-base font-bold mb-1 text-base text-[#333] dark:text-[#ffffff85]"},ne={class:"w-full text-[#999999] text-xs min-h-[40px]"},ue={class:"w-full flex justify-between mt-3"},re={class:"p-5 bg-white rounded dark:bg-slate-800"},de={class:"font-bold text-base"},ce={class:"pt-5 mt-6"},pe=i("p",null,"Tips: 请知悉 ",-1),me=i("p",null,"选择共享提交之后审核状态将无法编辑应用",-1),fe=i("p",null,"审核通过的应用将会在应用广场公开展示",-1),ve=i("p",null,"管理审核通过后将会赠送一定的站内额度奖励用户",-1),ge=i("p",null,"一旦提交处于审核中、您将不能再编辑此应用",-1),be=a({__name:"main",setup(e){const a=r(),$=d(""),B=d(!1),H=d(!1),O=d([]),W=d(null),Y=d(0),Z=d(!1),E=c((()=>0===Y.value?"创建我的个人应用":"更新我的个人应用")),G=c((()=>0===Y.value?"创建专属应用":"更新个人应用")),be=c((()=>$.value?a.mineApps.filter((e=>e.appName.includes($.value))):a.mineApps)),xe=d("/api/upload/file"),he=d({catId:null,name:null,preset:null,des:null,demoData:"",coverImg:"",public:!1}),we={catId:[{required:!0,message:"请选择分类"}],name:[{required:!0,message:"请输入应用名称",trigger:"blur"},{min:2,max:30,message:"长度应为2到10个字符之间",trigger:"blur"}],preset:[{required:!0,message:"请输入预设prompt",trigger:"blur"},{min:6,max:1200,message:"长度应为6到1200个字符之间",trigger:"blur"}],des:[{required:!0,message:"请输入简短的应用描述",trigger:"blur"},{max:50,message:"长度应为0到50个字符之间",trigger:"blur"}],demoData:[{required:!0,message:"请输入示例数据、按回车换行表示新增一条",trigger:"blur"},{max:100,message:"长度应为0到100个字符之间",trigger:"blur"}],coverImg:[{required:!0,message:"请上传应用Logo",trigger:"change"}],public:[{required:!0,message:"请选择是否公开"}]};p();const ye=m(),ke=l(),_e=d([]),Ie=d(null);function Ce(e){$.value=e}async function je(){const e=await S();_e.value=e.data.rows}async function ze(e){if(e.length){const a=e[0].file;Ie.value=a;const l=new FormData;l.append("file",a);const t=await N.post(xe.value,l,{headers:{"Content-Type":"multipart/form-data"}});t.data.data?he.value.coverImg=t.data.data:ye.error("上传图片失败、请检查后再试试吧！")}else Ie.value=null}function qe({file:e,fileList:a}){return new Promise(((a,l)=>{const{size:t,type:s}=e.file;return"image/png"!==s&&"image/jpg"!==s&&"image/jpeg"!==s?(ye.error("只能上传png/jpg/jpeg格式的图片"),a(!1)):t>307200?(ye.error("图片大小不能超过300k"),a(!1)):void a(!0)}))}function De(){H.value=!0,je()}function Re(){}function Ae(){Me()}function Me(){Y.value=0,Z.value=!1,he.value={catId:null,name:null,preset:null,des:null,demoData:"",coverImg:"",public:!1}}function Pe(){var e;null==(e=W.value)||e.validate((async e=>{if(!e){const e=he.value;Y.value&&(e.appId=Y.value);const l=await F(e),t=Y.value?"个人应用修改完成！":"个人应用创建完成！";l.success&&ye.success(t),a.queryMineApps(),Me(),H.value=!1}}))}return f((()=>{!be.value.length&&a.queryMineApps()})),(e,l)=>(t(),s(w,null,[i("div",J,[i("div",K,[i("div",X,[i("div",ee,[n(o(v),{modelValue:$.value,"onUpdate:modelValue":l[0]||(l[0]=e=>$.value=e),type:"text",placeholder:`您一共收录了${be.value.length}个应用(关键词过滤)`,onInput:Ce},null,8,["modelValue","placeholder"])]),n(o(h),null,{default:g((()=>[n(o(b),{onClick:De},{icon:g((()=>[n(o(u),{icon:"gridicons:create"})])),default:g((()=>[x(" 创建自定义应用 ")])),_:1}),n(o(b),{type:"primary",onClick:l[1]||(l[1]=e=>o(ke).push("/app-store"))},{icon:g((()=>[n(o(u),{icon:"ri:add-line"})])),default:g((()=>[x(" 前往广场添加应用 ")])),_:1})])),_:1})]),i("div",ae,[(t(!0),s(w,null,y(be.value,(e=>(t(),s("div",{key:e.id,class:"card relative custom-card cursor-pointer border border-[#e0e0e0] dark:border-neutral-800 p-4 pt-2 border rounded-md flex flex-col justify-center items-center hover:bg-neutral-100 dark:hover:bg-[#24272e] select-none",onClick:a=>async function(e){const a=await L(),{modelMaps:l}=a.data;if(!l[1])return ye.warning("管理员未配置特定应用模型、请联系管理员配置~");ke.push({path:"/chat",query:{appId:e.appId}})}(e)},[i("div",te,[i("span",se,[i("img",{src:e.coverImg,class:"w-8 h-8 mb-1",alt:""},null,8,ie)]),i("span",oe,k(e.appName),1)]),i("p",ne,k(e.appDes),1),i("div",ue,["system"===e.appRole||e.public?(t(),_(o(Q),{key:0,placement:"bottom",onPositiveClick:I((l=>async function(e){e.loading=!0;try{const l=await V({appId:e.appId});ye.success(l.data),await a.queryMineApps(),e.loading=!1}catch(l){e.loading=!1}}(e)),["stop"])},{trigger:g((()=>[n(o(b),{size:"tiny",ghost:"",loading:e.loading,onClick:l[2]||(l[2]=I((()=>{}),["stop"]))},{icon:g((()=>[n(o(u),{icon:"clarity:favorite-line",class:"text-base"})])),default:g((()=>[x(" 取消收藏 ")])),_:2},1032,["loading"])])),default:g((()=>[x(" 确认取消收藏该应用吗？ ")])),_:2},1032,["onPositiveClick"])):C("",!0),n(o(h),null,{default:g((()=>["user"!==e.appRole||e.public?C("",!0):(t(),_(o(Q),{key:0,placement:"bottom",onPositiveClick:I((l=>async function(e){const l=await T({id:e.appId});ye.success(l.data),a.queryMineApps()}(e)),["stop"])},{trigger:g((()=>[n(o(b),{size:"tiny",ghost:"",loading:e.loading,onClick:l[3]||(l[3]=I((()=>{}),["stop"]))},{icon:g((()=>[n(o(u),{icon:"mdi-light:delete",class:"text-base"})])),default:g((()=>[x(" 删除应用 ")])),_:2},1032,["loading"])])),default:g((()=>[x(" 确认移除创建的应用吗？ ")])),_:2},1032,["onPositiveClick"])),"user"!==e.appRole||e.public?C("",!0):(t(),_(o(b),{key:1,size:"tiny",ghost:"",loading:e.loading,onClick:I((a=>async function(e){await je();const{catId:a,appName:l,preset:t,appDes:s,demoData:i,coverImg:o,public:n}=e;Object.assign(he.value,{catId:a,name:l,preset:t,des:s,demoData:i,coverImg:o,public:n}),Y.value=e.appId,H.value=!0,Z.value=e.public}(e)),["stop"])},{icon:g((()=>[n(o(u),{icon:"mdi-light:delete",class:"text-base"})])),default:g((()=>[x(" 编辑应用 ")])),_:2},1032,["loading","onClick"]))])),_:2},1024)]),n(o(u),{icon:"codicon:run-all",class:"run-icon text-xl text-[#5A91FC] absolute right-3 bottom-3"}),3===e.status?(t(),_(o(u),{key:0,icon:"icon-park-twotone:mark",class:"text-xl text-[#5A91FC] absolute right-3 top-3"})):C("",!0)],8,le)))),128))])])]),n(o(U),{show:H.value,title:"创建",style:{width:"90%","max-width":"640px"},"mask-closable":!1,"on-after-enter":Re,"on-after-leave":Ae},{default:g((()=>[i("div",re,[i("div",{class:"absolute top-4 left-5 cursor-pointer z-30",onClick:l[4]||(l[4]=e=>H.value=!1)},[i("span",de,k(G.value),1)]),i("div",{class:"absolute top-3 right-3 cursor-pointer z-30",onClick:l[5]||(l[5]=e=>H.value=!1)},[n(o(j),{size:"20",color:"#0e7a0d"},{default:g((()=>[n(o(z))])),_:1})]),i("div",ce,[n(o(q),{ref_key:"formRef",ref:W,model:he.value,rules:we,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",style:{maxWidth:"640px"}},{default:g((()=>[n(o(D),{label:"应用分类",path:"catId"},{default:g((()=>[n(o(R),{value:he.value.catId,"onUpdate:value":l[6]||(l[6]=e=>he.value.catId=e),clearable:"",size:"small","label-field":"name",placeholder:"请输入您的应用分类","value-field":"id",options:_e.value},null,8,["value","options"])])),_:1}),n(o(D),{label:"应用名称",path:"name"},{default:g((()=>[n(o(v),{value:he.value.name,"onUpdate:value":l[7]||(l[7]=e=>he.value.name=e),placeholder:"请输入您的应用名称",type:"name",maxlength:30,"show-name-on":"click",tabindex:"0"},null,8,["value"])])),_:1}),n(o(D),{label:"预设指令",path:"preset"},{default:g((()=>[n(o(v),{value:he.value.preset,"onUpdate:value":l[8]||(l[8]=e=>he.value.preset=e),max:255,autosize:{minRows:3,maxRows:10},type:"textarea",placeholder:"请填写prompt预设指令（核心）"},null,8,["value"])])),_:1}),n(o(D),{label:"应用描述",path:"des"},{default:g((()=>[n(o(v),{value:he.value.des,"onUpdate:value":l[9]||(l[9]=e=>he.value.des=e),autosize:{minRows:3,maxRows:10},type:"textarea",placeholder:"请对你的应用做以简要的描述以便于大家认识它！"},null,8,["value"])])),_:1}),n(o(D),{label:"示例内容",path:"demoData"},{default:g((()=>[n(o(v),{value:he.value.demoData,"onUpdate:value":l[10]||(l[10]=e=>he.value.demoData=e),autosize:{minRows:3,maxRows:10},type:"textarea",placeholder:"请填写一个示例、方便快速告诉别人如何使用、每点击回车换行一次则是新增一条示例！"},null,8,["value"])])),_:1}),n(o(D),{label:"应用Logo",path:"coverImg"},{default:g((()=>[n(o(A),{"on-update:file-list":ze,"on-before-upload":qe,max:1,"default-upload":!1,action:xe.value,"default-file-list":O.value,"list-type":"image-card"},{default:g((()=>[x(" 点击上传 ")])),_:1},8,["action","default-file-list"])])),_:1}),n(o(D),{label:"是否共享",path:"public"},{default:g((()=>[n(o(M),{value:he.value.public,"onUpdate:value":l[11]||(l[11]=e=>he.value.public=e),disabled:Z.value},null,8,["value","disabled"]),n(o(P),{placement:"top-start",trigger:"hover"},{trigger:g((()=>[n(o(u),{icon:"ri:error-warning-line",class:"text-base ml-3 cursor-pointer"})])),default:g((()=>[pe,me,fe,ve,ge])),_:1})])),_:1}),n(o(D),{class:"mt-3"},{default:g((()=>[n(o(b),{block:"",type:"primary",disabled:B.value,loading:B.value,onClick:Pe},{default:g((()=>[x(k(E.value),1)])),_:1},8,["disabled","loading"])])),_:1})])),_:1},8,["model"])])])])),_:1},8,["show"])],64))}}),xe={class:"flex h-full w-full flex-col bg-white dark:bg-[#111114]"},he={class:"sticky left-0 right-0 top-0 z-40 border-b bg-white dark:border-b-neutral-800 dark:bg-[#111114]"},we=a({__name:"index",setup:e=>(e,a)=>(t(),s("div",xe,[i("header",he,[n(G)]),n(be)]))}),ye={class:"h-full dark:bg-[#131323] transition-all"},ke=a({__name:"role",setup(a){const l=$(),{isMobile:u}=p();c((()=>l.siderCollapsed));const r=c((()=>u.value?["rounded-none","shadow-none"]:["rounded-md","shadow-md","dark:border-neutral-800"])),d=c((()=>["h-full"]));return(a,l)=>(t(),s("div",ye,[i("div",{class:B(["h-full overflow-hidden",r.value])},[n(o(O),{class:B(["z-40 transition",d.value]),"has-sider":""},{default:g((()=>[n(o(H),{class:"h-full"},{default:g((()=>[n(we)])),_:1}),n(e)])),_:1},8,["class"])],2)]))}});export{ke as default};
