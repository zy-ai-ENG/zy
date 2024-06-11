import{d as e,a as t,o as a,i as l,j as s,$ as i,m as n,h as o,F as u,r,n as c,_ as d,k as p,ad as v,l as f,w as y,M as m,g,v as x,T as b,e as k,b as h,y as C,c as w,W as S,z as D,bc as A,J as I,u as _,U as G,N as T,a3 as E,a1 as P,bo as M,C as j,D as z,E as L}from"../main-647e77a2.js";import{N as $}from"../Popconfirm/Popconfirm.db36d391.js";import{N as q}from"../LayoutSider/LayoutSider.362540b1.js";const B=s("div",{style:{"background-color":"#3076ED"}},null,-1),U={class:"mb-2 text-xs text-neutral-400 font-bold"},F={class:"ml-1"},K=["onClick"],N={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"},V={key:1},W={key:0,class:"absolute z-10 flex visible right-1"},H=["onClick"],R={key:0,class:"p-1"},J={key:1,class:"p-1"},O={class:"p-1"},Q=e({__name:"ListItem",props:{dataSources:{},title:{},hideSticky:{type:Boolean}},emits:["update","delete","sticky","select"],setup(e,{emit:g}){const x=e,b=g,k=x.dataSources,h=t();const C=function(e,t){let a;return(...l)=>{clearTimeout(a),a=setTimeout((()=>{clearTimeout(a),e(...l)}),t)}}((async function(e,t){null==t||t.stopPropagation(),b("delete",e)}),600);async function w(e){const{uuid:t,title:a}=e;e.isEdit=!1,await h.updateGroupInfo({groupId:t,title:a}),await h.queryMyGroup()}function S(e){return h.active===e}return(e,t)=>{var g;return a(),l(u,null,[B,s("p",U,[i(n(x.title)+" ",1),s("span",F,"("+n(null==(g=o(k))?void 0:g.length)+")",1)]),(a(!0),l(u,null,r(o(k),(t=>(a(),l("div",{key:`${t.uuid}`},[s("a",{class:m(["bg-[#fff] dark:bg-[#171726] relative flex items-center dark:border-transparent border-gray-200 gap-3 px-3 py-2.5 break-all border rounded-md cursor-pointer hover:bg-gradient-to-l dark:to-[#54A2F5] hover:dark:text-[#2D6DD9] group",[S(t.uuid)?" dark:text-[#2D6DD9] text-[#3378ED] bg-gradient-to-l border-transparent bg-[#ebe9e9] dark:bg-[#15171A] pr-20":"dark:bg-[#1A1D21]"]]),onClick:e=>async function(e){b("select",e)}(t)},[s("span",null,[c(o(d),{icon:t.isSticky?"ri:pushpin-2-line":t.appId?"icon-park-outline:application-one":"ri:message-3-line"},null,8,["icon"])]),s("div",N,[t.isEdit?(a(),p(o(v),{key:0,value:t.title,"onUpdate:value":e=>t.title=e,size:"tiny",onKeypress:e=>async function(e,t){null==t||t.stopPropagation(),"Enter"===t.key&&w(e)}(t,e)},null,8,["value","onUpdate:value","onKeypress"])):(a(),l("span",V,n(t.title),1))]),S(t.uuid)?(a(),l("div",W,[t.isEdit?(a(),l("button",{key:0,class:"p-1",onClick:e=>{return a=t,null==(l=e)||l.stopPropagation(),void w(a);var a,l}},[c(o(d),{icon:"ri:save-line"})],8,H)):(a(),l(u,{key:1},[e.hideSticky?f("",!0):(a(),l("button",R,[c(o(d),{icon:t.isSticky?"ri:unpin-line":"ri:pushpin-line",onClick:e=>async function(e,t){null==t||t.stopPropagation(),await h.updateGroupInfo({isSticky:!e.isSticky,groupId:e.uuid}),await h.queryMyGroup()}(t,e)},null,8,["icon","onClick"])])),t.appId?f("",!0):(a(),l("button",J,[c(o(d),{icon:"ri:edit-line",onClick:e=>{return a=t,l=!0,null==(s=e)||s.stopPropagation(),void(a.isEdit=l);var a,l,s}},null,8,["onClick"])])),c(o($),{placement:"bottom",onPositiveClick:e=>o(C)(t,e)},{trigger:y((()=>[s("button",O,[c(o(d),{icon:"ri:delete-bin-line"})])])),default:y((()=>[i(" "+n(e.$t("chat.deleteHistoryConfirm")),1)])),_:2},1032,["onPositiveClick"])],64))])):f("",!0)],10,K)])))),128))],64)}}}),X={class:"flex flex-col gap-3 text-sm"},Y={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},Z={key:2,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},ee={key:5,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},te=e({__name:"List",emits:["autoCreate"],setup(e,{emit:i}){const{isMobile:r}=g(),v=x(),m=b(),I=k(),_=t(),G=h(),T=C(100),E=w((()=>_.groupList)),P=w((()=>_.groupKeyWord)),M=w((()=>_.activeChatTab));function j(e){const t=new Date(e).getTime()+288e5;return new Date(t).getTime()}S(E,(()=>T.value=T.value+1)),S(P,(()=>T.value=T.value+1)),w((()=>G.isLogin));const z=(new Date).setHours(0,0,0,0),L=w((()=>E.value.filter((e=>P.value?e.title.includes(P.value)&&e.isSticky:e.isSticky)))),$=w((()=>E.value.filter((e=>P.value?e.title.includes(P.value)&&!e.isSticky&&e.appId:!e.isSticky&&e.appId)))),q=w((()=>E.value.filter((e=>P.value?e.title.includes(P.value)&&!e.isSticky&&!e.appId&&j(e.createdAt)>=z:!e.isSticky&&!e.appId&&j(e.createdAt)>=z)))),B=w((()=>E.value.filter((e=>P.value?e.title.includes(P.value)&&!e.isSticky&&!e.appId&&j(e.createdAt)<z:!e.isSticky&&!e.appId&&j(e.createdAt)<z))));async function U(e){const{uuid:t}=e;(function(e){return _.active===e})(t)||(await _.setActiveGroup(t),"Chat"!==m.name&&v.push("/chat"),r.value&&I.setSiderCollapsed(!0))}async function F(e){null==event||event.stopPropagation(),await _.deleteGroup(e),await _.queryMyGroup(),r.value&&I.setSiderCollapsed(!0)}w((()=>0===E.value.length||E.value.length>0&&0===$.value.length||E.value.length>0&&0===q.value.length));const K=i;return D((()=>{_.queryMyGroup().then((()=>{E.value.length||K("autoCreate")}))})),(e,t)=>(a(),p(o(A),{class:"px-4"},{default:y((()=>[s("div",X,[E.value.length?(a(),l(u,{key:1},[L.value.length&&"app"!==M.value?(a(),p(Q,{key:1e3+T.value,title:"置顶","data-sources":L.value,onSelect:U,onDelete:F},null,8,["data-sources"])):f("",!0),$.value.length&&"app"===M.value?(a(),p(Q,{key:2e3+T.value,hideSticky:"",title:"应用","data-sources":$.value,onSelect:U,onDelete:F},null,8,["data-sources"])):f("",!0),$.value.length||"app"!==M.value?f("",!0):(a(),l("div",Z,[c(o(d),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),s("span",null,n(e.$t("common.noData")),1)])),q.value.length&&"app"!==M.value?(a(),p(Q,{key:3e3+T.value,title:"今天","data-sources":q.value,onSelect:U,onDelete:F},null,8,["data-sources"])):f("",!0),B.value.length&&"app"!==M.value?(a(),p(Q,{key:4e3+T.value,title:"其他","data-sources":B.value,onSelect:U,onDelete:F},null,8,["data-sources"])):f("",!0),q.value.length||B.value.length||L.value.length||"app"===M.value?f("",!0):(a(),l("div",ee,[c(o(d),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),s("span",null,n(e.$t("common.noData")),1)]))],64)):(a(),l("div",Y,[c(o(d),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),s("span",null,n(e.$t("common.noData")),1)]))])])),_:1}))}}),ae=e=>(j("data-v-24b0bd6f"),e=e(),z(),e),le={class:"flex flex-col flex-1 min-h-0"},se={style:{"margin-top":"10px","border-radius":"10px 10px 0 0"},class:"flex h-14 items-center space-x-4 justify-between px-4 bg-[#fff] dark:bg-[#1A1D21]"},ie={class:"flex-1"},ne=["loading"],oe=ae((()=>s("span",{class:"mr-0",style:{"margin-left":"2px"}},"新建对话",-1))),ue={class:"bg-[#fff] dark:bg-[#1A1D21]"},re={class:"my-2 mx-4",style:{border:"1px solid #3177ED","border-radius":"3px"}},ce={id:"sessionGroup",class:"min-h-0 pb-10 overflow-hidden bg-[#fff] dark:bg-[#1A1D21]",style:{"border-radius":"0 0 10px 10px"}},de={class:"flex justify-center border-t dark:border-gray-700 py-2 dark:bg-[#1A1D21] bg-[#fff]",style:{position:"absolute",bottom:"10px",left:"7px",width:"95%","border-radius":"10px"}},pe=ae((()=>s("span",{class:"mr-3"},"清空全部非置顶会话",-1))),ve=L(e({__name:"index",setup(e){I();const i=k(),n=t(),u=h();_();const r=C(null),p=C(null),m=G();w((()=>n.activeChatTab));const x=C(0),b=C(0),D=C(0),A=C(0),j=C(!1),z=C(null);S((()=>u.userBalance.useModel3Token),((e,t)=>{var a;x.value=t||0,b.value=e||0,null==(a=r.value)||a.play()}),{immediate:!0,flush:"post"}),S((()=>u.userBalance.useModel4Token),((e,t)=>{var a;D.value=t||0,A.value=e||0,null==(a=p.value)||a.play()}),{immediate:!0,flush:"post"});const{isMobile:L}=g(),$=C(!1),B=w((()=>i.siderCollapsed)),U=C("");function F(e){U.value=e,n.setGroupKeyWord(e)}function K(){j.value=!1}async function N(){try{0,$.value=!0,await n.updateChatTab("history"),await n.addNewChatGroup(),await n.queryMyGroup(),$.value=!1,L.value&&i.setSiderCollapsed(!0)}catch(e){$.value=!1}}async function V(){m.create({title:"清空分组",content:"是否删除所有非置顶的对话组？",positiveText:"确认删除",negativeText:"再想想",onPositiveClick:async()=>{await n.delAllGroup()}})}function W(){i.setSiderCollapsed(!B.value)}const H=w((()=>i.theme)),R=w((()=>L.value?{position:"fixed",zIndex:50,top:"56px",height:"calc(100% - 56px)"}:{background:"dark"===H.value?"#131323":"",height:"calc(100% - 60px)"})),J=w((()=>L.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{})),O=()=>{N()};return S((()=>L.value),(e=>{i.setSiderCollapsed(e)}),{immediate:!0,flush:"post"}),(e,t)=>(a(),l("div",null,[c(o(q),{collapsed:B.value,"collapsed-width":0,width:300,"show-trigger":!1,"collapse-mode":"transform",bordered:!1,style:E(R.value),onUpdateCollapsed:W},{default:y((()=>[s("div",{class:"flex h-full flex-col bg-[#f4f4f4] dark:bg-[#15171A] p-2",style:E(J.value)},[s("main",le,[s("div",se,[s("div",ie,[s("button",{class:"rounded w-full px-2.5 py-1.5 flex justify-center items-center bg-gradient-to-r from-[#3076ED] to-[#54A2F5] hover:bg-gradient-to-r text-white",loading:$.value,onClick:N},[c(o(d),{icon:"simple-line-icons:plus",class:"text-sm mr-0.5"}),oe],8,ne)])]),s("div",ue,[s("div",re,[c(o(v),{class:"search bg-[#E3E7F5] dark:bg-[#171726]",modelValue:U.value,"onUpdate:modelValue":t[0]||(t[0]=e=>U.value=e),ref_key:"searchRef",ref:z,type:"text",placeholder:"会话标题",onBlur:K,clearable:"",onInput:F},{prefix:y((()=>[c(o(d),{icon:"ion:search",class:"text-xl"})])),_:1},8,["modelValue"])])]),s("div",ce,[c(te,{onAutoCreate:O})]),s("div",de,[c(o(T),{bordered:!1,size:"small",style:{width:"100%"},onClick:V},{default:y((()=>[c(o(d),{icon:"ant-design:delete-outlined",class:"ml-2 mr-2 text-sm"}),pe])),_:1})])])],4)])),_:1},8,["collapsed","style"]),o(L)?P((a(),l("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:W},null,512)),[[M,!B.value]]):f("",!0)]))}}),[["__scopeId","data-v-24b0bd6f"]]);export{ve as R};
