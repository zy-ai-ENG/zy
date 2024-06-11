import{d as e,a as t,o as a,i as l,j as i,Y as s,m as n,h as o,F as u,r,n as c,_ as d,k as p,ac as v,l as f,w as y,K as g,g as m,v as x,R as k,e as b,b as h,y as C,c as D,U as S,z as w,bi as I,J as A,u as _,S as G,N as E,a1 as T,$ as P,bu as L,C as M,D as j,E as z}from"../main-4cae9f5a.js";import{N as $}from"../Popconfirm/Popconfirm.a5fb214c.js";import{N as q}from"../LayoutSider/LayoutSider.13ef259e.js";const B=i("div",{style:{"background-color":"#3076ED"}},null,-1),K={class:"mb-2 text-xs text-neutral-400 font-bold"},U={class:"ml-1"},F=["onClick"],N={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"},R={key:1},V={key:0,class:"absolute z-10 flex visible right-1"},H=["onClick"],W={key:0,class:"p-1"},J={key:1,class:"p-1"},Y={class:"p-1"},O=e({__name:"ListItem",props:{dataSources:{},title:{},hideSticky:{type:Boolean}},emits:["update","delete","sticky","select"],setup(e,{emit:m}){const x=e,k=m,b=x.dataSources,h=t();const C=function(e,t){let a;return(...l)=>{clearTimeout(a),a=setTimeout((()=>{clearTimeout(a),e(...l)}),t)}}((async function(e,t){null==t||t.stopPropagation(),k("delete",e)}),600);async function D(e){const{uuid:t,title:a}=e;e.isEdit=!1,await h.updateGroupInfo({groupId:t,title:a}),await h.queryMyGroup()}function S(e){return h.active===e}return(e,t)=>{var m;return a(),l(u,null,[B,i("p",K,[s(n(x.title)+" ",1),i("span",U,"("+n(null==(m=o(b))?void 0:m.length)+")",1)]),(a(!0),l(u,null,r(o(b),(t=>(a(),l("div",{key:`${t.uuid}`},[i("a",{class:g(["bg-[#fff] dark:bg-[#171726] relative flex items-center dark:border-transparent border-gray-200 gap-3 px-3 py-2.5 break-all border rounded-md cursor-pointer hover:bg-gradient-to-l dark:to-[#54A2F5] hover:dark:text-[#2D6DD9] group",[S(t.uuid)?" dark:text-[#2D6DD9] text-[#3378ED] bg-gradient-to-l border-transparent bg-[#ebe9e9] dark:bg-[#15171A] pr-20":"dark:bg-[#1A1D21]"]]),onClick:e=>async function(e){k("select",e)}(t)},[i("span",null,[c(o(d),{icon:t.isSticky?"ri:pushpin-2-line":t.appId?"icon-park-outline:application-one":"ri:message-3-line"},null,8,["icon"])]),i("div",N,[t.isEdit?(a(),p(o(v),{key:0,value:t.title,"onUpdate:value":e=>t.title=e,size:"tiny",onKeypress:e=>async function(e,t){null==t||t.stopPropagation(),"Enter"===t.key&&D(e)}(t,e)},null,8,["value","onUpdate:value","onKeypress"])):(a(),l("span",R,n(t.title),1))]),S(t.uuid)?(a(),l("div",V,[t.isEdit?(a(),l("button",{key:0,class:"p-1",onClick:e=>{return a=t,null==(l=e)||l.stopPropagation(),void D(a);var a,l}},[c(o(d),{icon:"ri:save-line"})],8,H)):(a(),l(u,{key:1},[e.hideSticky?f("",!0):(a(),l("button",W,[c(o(d),{icon:t.isSticky?"ri:unpin-line":"ri:pushpin-line",onClick:e=>async function(e,t){null==t||t.stopPropagation(),await h.updateGroupInfo({isSticky:!e.isSticky,groupId:e.uuid}),await h.queryMyGroup()}(t,e)},null,8,["icon","onClick"])])),t.appId?f("",!0):(a(),l("button",J,[c(o(d),{icon:"ri:edit-line",onClick:e=>{return a=t,l=!0,null==(i=e)||i.stopPropagation(),void(a.isEdit=l);var a,l,i}},null,8,["onClick"])])),c(o($),{placement:"bottom",onPositiveClick:e=>o(C)(t,e)},{trigger:y((()=>[i("button",Y,[c(o(d),{icon:"ri:delete-bin-line"})])])),default:y((()=>[s(" "+n(e.$t("chat.deleteHistoryConfirm")),1)])),_:2},1032,["onPositiveClick"])],64))])):f("",!0)],10,F)])))),128))],64)}}}),Q={class:"flex flex-col gap-3 text-sm"},X={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},Z={key:2,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},ee={key:5,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},te=e({__name:"List",emits:["autoCreate"],setup(e,{emit:s}){const{isMobile:r}=m(),v=x(),g=k(),A=b(),_=t(),G=h(),E=C(100),T=D((()=>_.groupList)),P=D((()=>_.groupKeyWord)),L=D((()=>_.activeChatTab));function M(e){const t=new Date(e).getTime()+288e5;return new Date(t).getTime()}S(T,(()=>E.value=E.value+1)),S(P,(()=>E.value=E.value+1)),D((()=>G.isLogin));const j=(new Date).setHours(0,0,0,0),z=D((()=>T.value.filter((e=>P.value?e.title.includes(P.value)&&e.isSticky:e.isSticky)))),$=D((()=>T.value.filter((e=>P.value?e.title.includes(P.value)&&!e.isSticky&&e.appId:!e.isSticky&&e.appId)))),q=D((()=>T.value.filter((e=>P.value?e.title.includes(P.value)&&!e.isSticky&&!e.appId&&M(e.createdAt)>=j:!e.isSticky&&!e.appId&&M(e.createdAt)>=j)))),B=D((()=>T.value.filter((e=>P.value?e.title.includes(P.value)&&!e.isSticky&&!e.appId&&M(e.createdAt)<j:!e.isSticky&&!e.appId&&M(e.createdAt)<j))));async function K(e){const{uuid:t}=e;(function(e){return _.active===e})(t)||(await _.setActiveGroup(t),"Chat"!==g.name&&v.push("/chat"),r.value&&A.setSiderCollapsed(!0))}async function U(e){null==event||event.stopPropagation(),await _.deleteGroup(e),await _.queryMyGroup(),r.value&&A.setSiderCollapsed(!0)}D((()=>0===T.value.length||T.value.length>0&&0===$.value.length||T.value.length>0&&0===q.value.length));const F=s;return w((()=>{_.queryMyGroup().then((()=>{T.value.length||F("autoCreate")}))})),(e,t)=>(a(),p(o(I),{class:"px-4"},{default:y((()=>[i("div",Q,[T.value.length?(a(),l(u,{key:1},[z.value.length&&"app"!==L.value?(a(),p(O,{key:1e3+E.value,title:"置顶","data-sources":z.value,onSelect:K,onDelete:U},null,8,["data-sources"])):f("",!0),$.value.length&&"app"===L.value?(a(),p(O,{key:2e3+E.value,hideSticky:"",title:"应用","data-sources":$.value,onSelect:K,onDelete:U},null,8,["data-sources"])):f("",!0),$.value.length||"app"!==L.value?f("",!0):(a(),l("div",Z,[c(o(d),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),i("span",null,n(e.$t("common.noData")),1)])),q.value.length&&"app"!==L.value?(a(),p(O,{key:3e3+E.value,title:"今天","data-sources":q.value,onSelect:K,onDelete:U},null,8,["data-sources"])):f("",!0),B.value.length&&"app"!==L.value?(a(),p(O,{key:4e3+E.value,title:"其他","data-sources":B.value,onSelect:K,onDelete:U},null,8,["data-sources"])):f("",!0),q.value.length||B.value.length||z.value.length||"app"===L.value?f("",!0):(a(),l("div",ee,[c(o(d),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),i("span",null,n(e.$t("common.noData")),1)]))],64)):(a(),l("div",X,[c(o(d),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),i("span",null,n(e.$t("common.noData")),1)]))])])),_:1}))}}),ae=e=>(M("data-v-90881f19"),e=e(),j(),e),le={class:"flex flex-col flex-1 min-h-0"},ie={style:{"border-radius":"10px 10px 0 0"},class:"flex h-14 items-center space-x-4 justify-between px-4 bg-[#fff] dark:bg-[#1A1D21]"},se={class:"flex-1"},ne=["loading"],oe=ae((()=>i("span",{class:"mr-0",style:{"margin-left":"2px"}},"新建对话",-1))),ue={class:"bg-[#fff] dark:bg-[#1A1D21]"},re={class:"my-2 mx-4",style:{border:"1px solid #3177ED","border-radius":"3px"}},ce={id:"sessionGroup",class:"min-h-0 pb-12 overflow-hidden bg-[#fff] dark:bg-[#1A1D21]",style:{"border-radius":"0 0 10px 10px"}},de={class:"flex justify-center border-t dark:border-gray-700 py-2 dark:bg-[#1A1D21] bg-[#fff]",style:{position:"absolute",bottom:"10px",left:"10px",width:"96%","border-radius":"10px"}},pe=ae((()=>i("span",{class:"mr-3"},"清空全部非置顶会话",-1))),ve=z(e({__name:"index",setup(e){A();const s=b(),n=t(),u=h();_();const r=C(null),p=C(null),g=D((()=>u.isLogin)),x=G();D((()=>n.activeChatTab));const k=C(0),w=C(0),I=C(0),M=C(0),j=C(!1),z=C(null);S((()=>u.userBalance.useModel3Token),((e,t)=>{var a;k.value=t||0,w.value=e||0,null==(a=r.value)||a.play()}),{immediate:!0,flush:"post"}),S((()=>u.userBalance.useModel4Token),((e,t)=>{var a;I.value=t||0,M.value=e||0,null==(a=p.value)||a.play()}),{immediate:!0,flush:"post"});const{isMobile:$}=m(),B=C(!1),K=D((()=>s.siderCollapsed)),U=C("");function F(e){g.value?(U.value=e,n.setGroupKeyWord(e)):u.setLoginDialog(!0)}function N(){j.value=!1}async function R(){try{if(!g.value)return void u.setLoginDialog(!0);B.value=!0,await n.updateChatTab("history"),await n.addNewChatGroup(),await n.queryMyGroup(),B.value=!1,$.value&&s.setSiderCollapsed(!0)}catch(e){B.value=!1}}async function V(){g.value?x.create({title:"清空分组",content:"是否删除所有非置顶的对话组？",positiveText:"确认删除",negativeText:"再想想",onPositiveClick:async()=>{await n.delAllGroup()}}):u.setLoginDialog(!0)}function H(){s.setSiderCollapsed(!K.value)}const W=D((()=>s.theme)),J=D((()=>$.value?{position:"fixed",zIndex:50,top:"56px",height:"calc(100% - 56px)"}:{background:"dark"===W.value?"#131323":"",height:"calc(100% - 60px)"})),Y=D((()=>$.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{})),O=()=>{R()};return S((()=>$.value),(e=>{s.setSiderCollapsed(e)}),{immediate:!0,flush:"post"}),(e,t)=>(a(),l("div",null,[c(o(q),{collapsed:K.value,"collapsed-width":0,width:300,"show-trigger":!1,"collapse-mode":"transform",bordered:!1,style:T(J.value),onUpdateCollapsed:H},{default:y((()=>[i("div",{style:T([{padding:"10px 0 10px 10px",position:"relative"},Y.value]),class:"flex h-full flex-col bg-[#f4f4f4] dark:bg-[#010102]"},[i("main",le,[i("div",ie,[i("div",se,[i("button",{class:"rounded w-full px-2.5 py-1.5 flex justify-center items-center bg-gradient-to-r from-[#3076ED] to-[#54A2F5] hover:bg-gradient-to-r text-white",loading:B.value,onClick:R},[c(o(d),{icon:"simple-line-icons:plus",class:"text-sm mr-0.5"}),oe],8,ne)])]),i("div",ue,[i("div",re,[c(o(v),{class:"search bg-[#E3E7F5] dark:bg-[#171726]",modelValue:U.value,"onUpdate:modelValue":t[0]||(t[0]=e=>U.value=e),ref_key:"searchRef",ref:z,type:"text",placeholder:"会话标题",onBlur:N,clearable:"",onInput:F},{prefix:y((()=>[c(o(d),{icon:"ion:search",class:"text-xl"})])),_:1},8,["modelValue"])])]),i("div",ce,[c(te,{onAutoCreate:O})]),i("div",de,[c(o(E),{bordered:!1,size:"small",style:{width:"100%"},onClick:V},{default:y((()=>[c(o(d),{icon:"ant-design:delete-outlined",class:"ml-2 mr-2 text-sm"}),pe])),_:1})])])],4)])),_:1},8,["collapsed","style"]),o($)?P((a(),l("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:H},null,512)),[[L,!K.value]]):f("",!0)]))}}),[["__scopeId","data-v-90881f19"]]);export{ve as R};