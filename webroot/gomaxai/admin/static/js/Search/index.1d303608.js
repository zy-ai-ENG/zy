
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,j as a,y as l,ag as t,A as n,r as s,ah as u,B as i,C as o,x as r,M as c,D as d,ai as v,h as p,o as f,c as h,a as m,m as g,e as b,f as y,b as _,W as k,k as w,l as z,t as S,J as T,S as C,U as E,G as j,_ as x,I as H,n as R}from"../main-dd192319.js";const D={class:"container"},I={key:0,class:"tips"},L={class:"tip"},M={class:"tip"},U={class:"tip"},V={class:"tip"},A=["onClick","onMouseover"],B={class:"info"},K={class:"title"},G={class:"breadcrumb"},J={class:"path"},O=e({name:"Search"}),W=R(e({...O,setup(e){const R=a(),O=l(),W=t(),q=n(),F=s(!1),N=s(""),P=s([]),Q=s(-1),X=s(),Y=s(),Z=s([]);function $(e){return Z.value.push(e)}u((()=>{Z.value=[]}));const ee=i((()=>{let e=[];return e=P.value.filter((e=>{let a=!1;return e.title&&("function"==typeof e.title?e.title().includes(N.value)&&(a=!0):e.title.includes(N.value)&&(a=!0)),e.path.includes(N.value)&&(a=!0),e.breadcrumb.some((e=>{let a=!1;return e&&("function"==typeof e?e().includes(N.value)&&(a=!0):e.includes(N.value)&&(a=!0)),a}))&&(a=!0),a})),e}));function ae(e,a,l,t){e.forEach((e=>{var n,s,u,i,o,r,c;if(!1!==(null==(n=e.meta)?void 0:n.sidebar)){const n=v(t)||[];e.children&&function(e){var a;let l=!0;return(null==(a=e.children)?void 0:a.every((e=>{var a;return!1===(null==(a=e.meta)?void 0:a.sidebar)})))&&(l=!1),l}(e)?(n.push(null==(s=e.meta)?void 0:s.title),ae(e.children,a?[a,e.path].join("/"):e.path,(null==(u=e.meta)?void 0:u.icon)??l,n)):(n.push(null==(i=e.meta)?void 0:i.title),P.value.push({path:a?[a,e.path].join("/"):e.path,icon:(null==(o=e.meta)?void 0:o.icon)??l,title:null==(r=e.meta)?void 0:r.title,link:null==(c=e.meta)?void 0:c.link,breadcrumb:n}))}}))}function le(e,a,l){e.forEach((e=>{var t,n,s,u,i;const o=v(l)||[];e.children&&e.children.length>0?(o.push(null==(t=e.meta)?void 0:t.title),le(e.children,(null==(n=e.meta)?void 0:n.icon)??a,o)):(o.push(null==(s=e.meta)?void 0:s.title),P.value.push({icon:(null==(u=e.meta)?void 0:u.icon)??a,title:null==(i=e.meta)?void 0:i.title,path:e.path,breadcrumb:o}))}))}function te(){ee.value.length&&(Q.value-=1,Q.value<0&&(Q.value=ee.value.length-1),ue())}function ne(){ee.value.length&&(Q.value+=1,Q.value>ee.value.length-1&&(Q.value=0),ue())}function se(){-1!==Q.value&&Z.value[Q.value].click()}function ue(){let e=0;if(-1!==Q.value){e=Y.value.scrollTop;const a=Z.value[Q.value].offsetTop,l=Z.value[Q.value].clientHeight,t=Y.value.scrollTop,n=Y.value.clientHeight;a+l>t+n?e=a+l-n:a<=t&&(e=a)}Y.value.scrollTo({top:e})}return o((()=>F.value),(e=>{e?(document.body.classList.add("hidden"),Y.value.scrollTop=0,d("up",te),d("down",ne),d("enter",se),setTimeout((()=>{X.value.focus()}),500)):(document.body.classList.remove("hidden"),d.unbind("up",te),d.unbind("down",ne),d.unbind("enter",se),setTimeout((()=>{N.value="",Q.value=-1}),500))})),o((()=>ee.value),(()=>{Q.value=-1,Z.value=[],ue()})),r((()=>{c.on("global-search-toggle",(()=>{F.value=!F.value})),d("alt+s",(e=>{O.settings.navSearch.enable&&O.settings.navSearch.enableHotkeys&&(e.preventDefault(),F.value=!0)})),d("esc",(e=>{O.settings.navSearch.enable&&O.settings.navSearch.enableHotkeys&&(e.preventDefault(),F.value=!1)})),"filesystem"!==O.settings.app.routeBaseOn?W.routes.forEach((e=>{e.children&&ae(e.children)})):q.menus.forEach((e=>{le(e.children)}))})),(e,a)=>{const l=x,t=p("el-icon"),n=p("el-input"),s=p("el-tag");return f(),h("div",{id:"search",class:j({searching:_(F)}),onClick:a[3]||(a[3]=e=>_(F)&&_(c).emit("global-search-toggle"))},[m("div",D,[m("div",{class:"search-box",onClick:a[2]||(a[2]=g((()=>{}),["stop"]))},[b(n,{ref_key:"searchInputRef",ref:X,modelValue:_(N),"onUpdate:modelValue":a[0]||(a[0]=e=>k(N)?N.value=e:null),placeholder:"搜索页面，支持标题、URL模糊查询",clearable:"",onKeydown:[a[1]||(a[1]=w((e=>_(c).emit("global-search-toggle")),["esc"])),w(g(te,["prevent"]),["up"]),w(g(ne,["prevent"]),["down"]),w(g(se,["prevent"]),["enter"])]},{prefix:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"ep:search"})])),_:1})])),_:1},8,["modelValue","onKeydown"]),"pc"===_(O).mode?(f(),h("div",I,[m("div",L,[b(s,{type:"info",size:"large"},{default:y((()=>[z(S("mac"===_(O).os?"⌥":"Alt")+" + S ",1)])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[z(" 唤醒搜索面板 ")])),_:1})]),m("div",M,[b(s,{type:"info",size:"large"},{default:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"search-up"})])),_:1})])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"search-down"})])),_:1})])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[z(" 切换搜索结果 ")])),_:1})]),m("div",U,[b(s,{type:"info",size:"large"},{default:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"search-enter"})])),_:1})])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[z(" 访问页面 ")])),_:1})]),m("div",V,[b(s,{type:"info",size:"large"},{default:y((()=>[z(" ESC ")])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[z(" 退出 ")])),_:1})])])):T("",!0)]),m("div",{ref_key:"searchResultRef",ref:Y,class:"result"},[(f(!0),h(C,null,E(_(ee),((e,a)=>(f(),h("a",{key:e.path,ref_for:!0,ref:$,class:j(["item",{actived:a===_(Q)}]),onClick:a=>{return l=e.path,void((t=e.link)?window.open(t,"_blank"):R.push(l));var l,t},onMouseover:e=>Q.value=a},[b(t,{class:"icon"},{default:y((()=>[e.icon?(f(),H(l,{key:0,name:e.icon},null,8,["name"])):T("",!0)])),_:2},1024),m("div",B,[m("div",K,S(e.title??"[ 无标题 ]"),1),m("div",G,[(f(!0),h(C,null,E(e.breadcrumb,((e,a)=>(f(),h("span",{key:a},[z(S(e??"[ 无标题 ]")+" ",1),b(t,null,{default:y((()=>[b(l,{name:"ep:arrow-right"})])),_:1})])))),128))]),m("div",J,S(e.path),1)])],42,A)))),128))],512)])],2)}}}),[["__scopeId","data-v-7119310d"]]);export{W as default};