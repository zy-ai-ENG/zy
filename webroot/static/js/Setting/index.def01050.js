import{d as e,e as a,b as s,g as l,u as t,c as n,y as i,o as c,i as o,j as r,m as p,n as u,h as d,ad as m,w as f,$ as v,N as x,M as g,_ as y,F as h,r as k,a9 as w,bx as b,t as _,z as $,k as C,ak as I,aq as S,ap as U,aa as z}from"../main-e1cb34e4.js";import{N}from"../Popconfirm/Popconfirm.0877b53f.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const j={class:"p-4 space-y-5 min-h-[200px]"},L={class:"space-y-6"},T={class:"flex items-center space-x-4"},F={class:"flex-shrink-0 w-[100px]"},J={class:"flex-1"},O={class:"flex items-center space-x-4"},B={class:"flex-shrink-0 w-[100px]"},M={class:"w-[200px]"},P={class:"flex-shrink-0 w-[100px]"},D={class:"flex flex-wrap items-center gap-4"},G={class:"flex items-center space-x-4"},R={class:"flex-shrink-0 w-[100px]"},A={class:"flex flex-wrap items-center gap-4"},E={class:"flex items-center space-x-4"},H={class:"flex-shrink-0 w-[100px]"},q={class:"flex flex-wrap items-center gap-4"},V=e({__name:"General",setup(e){const $=a(),C=s(),{isMobile:I}=l(),S=t(),U=n((()=>$.theme)),z=n((()=>C.userInfo)),V=i(z.value.avatar??""),Y=i(z.value.username??""),K=i(!1),Q=n({get:()=>$.language,set(e){$.setLanguage(e)}}),W=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],X=[{label:"简体中文",key:"zh-CN",value:"zh-CN"}];async function Z(e){try{K.value=!0;const a=await b(e);if(K.value=!1,!a.success)return S.error(a.message);S.success(_("common.updateUserSuccess")),C.getUserInfo()}catch(a){K.value=!1}}function ee(){const e=function(){const e=new Date,a=e.getDate(),s=e.getMonth()+1;return`${e.getFullYear()}-${s}-${a}`}(),a=localStorage.getItem("chatStorage")||"{}",s=JSON.stringify(JSON.parse(a),null,2),l=new Blob([s],{type:"application/json"}),t=URL.createObjectURL(l),n=document.createElement("a");n.href=t,n.download=`chat-store_${e}.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}function ae(e){const a=e.target;if(!a||!a.files)return;const s=a.files[0];if(!s)return;const l=new FileReader;l.onload=()=>{try{const e=JSON.parse(l.result);localStorage.setItem("chatStorage",JSON.stringify(e)),S.success(_("common.success")),location.reload()}catch(e){S.error(_("common.invalidFileFormat"))}},l.readAsText(s)}function se(){localStorage.removeItem("chatStorage"),location.reload()}function le(){const e=document.getElementById("fileInput");e&&e.click()}return(e,a)=>(c(),o("div",j,[r("div",L,[r("div",T,[r("span",F,p(e.$t("setting.avatarLink")),1),r("div",J,[u(d(m),{value:V.value,"onUpdate:value":a[0]||(a[0]=e=>V.value=e),placeholder:"请填写头像地址"},null,8,["value"])]),u(d(x),{size:"tiny",disabled:K.value,text:"",type:"primary",onClick:a[1]||(a[1]=e=>Z({avatar:V.value}))},{default:f((()=>[v(p(e.$t("common.update")),1)])),_:1},8,["disabled"])]),r("div",O,[r("span",B,p(e.$t("setting.name")),1),r("div",M,[u(d(m),{value:Y.value,"onUpdate:value":a[2]||(a[2]=e=>Y.value=e),placeholder:"请填写用户名"},null,8,["value"])]),u(d(x),{size:"tiny",disabled:K.value,text:"",type:"primary",onClick:a[3]||(a[3]=e=>Z({username:Y.value}))},{default:f((()=>[v(p(e.$t("common.update")),1)])),_:1},8,["disabled"])]),r("div",{class:g(["flex items-center space-x-4",d(I)&&"items-start"])},[r("span",P,p(e.$t("setting.chatHistory")),1),r("div",D,[u(d(x),{size:"small",onClick:ee},{icon:f((()=>[u(d(y),{icon:"ri:download-2-fill"})])),default:f((()=>[v(" "+p(e.$t("common.export")),1)])),_:1}),r("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:ae},null,32),u(d(x),{size:"small",onClick:le},{icon:f((()=>[u(d(y),{icon:"ri:upload-2-fill"})])),default:f((()=>[v(" "+p(e.$t("common.import")),1)])),_:1}),u(d(N),{placement:"bottom",onPositiveClick:se},{trigger:f((()=>[u(d(x),{size:"small"},{icon:f((()=>[u(d(y),{icon:"ri:close-circle-line"})])),default:f((()=>[v(" "+p(e.$t("common.clear")),1)])),_:1})])),default:f((()=>[v(" "+p(e.$t("chat.clearHistoryConfirm")),1)])),_:1})])],2),r("div",G,[r("span",R,p(e.$t("setting.theme")),1),r("div",A,[(c(),o(h,null,k(W,(e=>u(d(x),{key:e.key,size:"small",type:e.key===U.value?"primary":void 0,onClick:a=>d($).setTheme(e.key)},{icon:f((()=>[u(d(y),{icon:e.icon},null,8,["icon"])])),_:2},1032,["type","onClick"]))),64))])]),r("div",E,[r("span",H,p(e.$t("setting.language")),1),r("div",q,[u(d(w),{style:{width:"140px"},value:Q.value,options:X,onUpdateValue:a[4]||(a[4]=e=>d($).setLanguage(e))},null,8,["value"])])])])]))}}),Y={class:"p-4 space-y-5 min-h-[200px]"},K={class:"flex items-center space-x-4"},Q=r("span",{class:"flex-shrink-0 w-[100px]"},"用户邮箱",-1),W={class:"w-[200px]"},X={class:"flex items-center space-x-4"},Z=r("span",{class:"flex-shrink-0 w-[100px]"},"用户姓名",-1),ee={class:"w-[200px]"},ae={class:"flex items-center space-x-4"},se=r("span",{class:"flex-shrink-0 w-[100px]"},"问答余额",-1),le={class:"w-[200px]"},te={class:"flex items-center space-x-4"},ne=r("span",{class:"flex-shrink-0 w-[100px]"},"绘画余额",-1),ie={class:"w-[200px]"},ce={class:"flex items-center space-x-4"},oe=r("span",{class:"flex-shrink-0 w-[100px]"},"MJToken",-1),re={class:"w-[200px]"},pe={class:"flex items-center space-x-4"},ue=r("span",{class:"flex-shrink-0 w-[100px]"},"使用金额",-1),de={class:"w-[200px]"},me=e({__name:"Personal",setup(e){const a=s(),{userInfo:l,userBalance:t}=a,n=i(!1);return $((async()=>{!async function(){try{n.value=!0,await a.getUserInfo(),n.value=!1}catch(e){n.value=!1}}()})),(e,a)=>(c(),C(d(I),{show:n.value},{default:f((()=>[r("div",Y,[r("div",K,[Q,r("div",W,p(d(l).email||"--"),1)]),r("div",X,[Z,r("div",ee,p(d(l).username||"--"),1)]),r("div",ae,[se,r("div",le,p(d(t).usesLeft||"0")+" 积分 ",1)]),r("div",te,[ne,r("div",ie,p(d(t).paintCount||"0")+" 积分 ",1)]),r("div",ce,[oe,r("div",re,p(d(t).balance||"0")+" Token ",1)]),r("div",pe,[ue,r("div",de,p(d(t).useTokens||"0")+" Token ",1)])])])),_:1},8,["show"]))}}),fe={class:"ml-2"},ve={class:"ml-2"},xe={class:"min-h-[100px]"},ge=e({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:a}){const s=e,l=a,t=i("personalInfo"),o=n({get:()=>s.visible,set(e){l("update:visible",e)}});return(e,a)=>(c(),C(d(z),{show:o.value,"onUpdate:show":a[1]||(a[1]=e=>o.value=e),title:"个人中心","auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:f((()=>[r("div",null,[u(d(S),{value:t.value,"onUpdate:value":a[0]||(a[0]=e=>t.value=e),type:"line",animated:""},{default:f((()=>[u(d(U),{name:"personalInfo",tab:"personalInfo"},{tab:f((()=>[u(d(y),{class:"text-lg",icon:"ri:file-user-line"}),r("span",fe,p(e.$t("setting.personalInfo")),1)])),default:f((()=>[u(me)])),_:1}),u(d(U),{name:"General",tab:"General"},{tab:f((()=>[u(d(y),{class:"text-lg",icon:"ri:list-settings-line"}),r("span",ve,p(e.$t("setting.general")),1)])),default:f((()=>[r("div",xe,[u(V)])])),_:1})])),_:1},8,["value"])])])),_:1},8,["show"]))}});export{ge as default};
