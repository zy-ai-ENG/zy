
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{c as e,k as t,e as a,f as o,_ as l,a as i}from"../main-a44a7162.js";import{w as s,b as r}from"../@vue_runtime-dom@3.2.47/@vue_runtime-dom@3.2.47.439158bd.js";import{h as u}from"../hotkeys-js@3.10.2/hotkeys-js@3.10.2.e364e5e1.js";import{u as n}from"../vue-router@4.1.6_vue@3.2.47/vue-router@4.1.6_vue@3.2.47.0dcda182.js";import{j as c}from"../lodash-es@4.17.21/lodash-es@4.17.21.4b0f838c.js";import{d as v,V as m,l as p,w as d,m as _,o as h,c as f,a as g,j,H as y,L as b,K as z,F as k,R as w,U as x,G as S}from"../@vue_runtime-core@3.2.47/@vue_runtime-core@3.2.47.f65ce9b3.js";import{k as T,u as C,a as E}from"../@vue_reactivity@3.2.47/@vue_reactivity@3.2.47.e3514ec5.js";import{M as R,n as H}from"../@vue_shared@3.2.47/@vue_shared@3.2.47.0f451126.js";import"../@element-plus_icons-vue@2.1.0_vue@3.2.47/@element-plus_icons-vue@2.1.0_vue@3.2.47.ac084a9d.js";import"../mitt@3.0.0/mitt@3.0.0.f0e54764.js";import"../@iconify_vue@4.1.1_vue@3.2.47/@iconify_vue@4.1.1_vue@3.2.47.f5d0ccbf.js";import"../eruda@3.0.0/eruda@3.0.0.b4351698.js";import"../copy-to-clipboard@3.3.3/copy-to-clipboard@3.3.3.e0d05bd3.js";import"../toggle-selection@1.0.6/toggle-selection@1.0.6.c563a038.js";import"../vconsole@3.15.0/vconsole@3.15.0.c5df0a73.js";import"../element-plus@2.3.4_vue@3.2.47/element-plus@2.3.4_vue@3.2.47.34526108.js";import"../@vueuse_core@9.13.0_vue@3.2.47/@vueuse_core@9.13.0_vue@3.2.47.c260552e.js";import"../@vueuse_shared@9.13.0_vue@3.2.47/@vueuse_shared@9.13.0_vue@3.2.47.5682e459.js";import"../@sxzz_popperjs-es@2.11.7/@sxzz_popperjs-es@2.11.7.b78c3215.js";import"../@ctrl_tinycolor@3.6.0/@ctrl_tinycolor@3.6.0.91de2ec7.js";import"../dayjs@1.11.7/dayjs@1.11.7.d5551305.js";import"../@vue_reactivity@3.3.0-beta.3/@vue_reactivity@3.3.0-beta.3.d2bad40d.js";import"../@vue_shared@3.3.0-beta.3/@vue_shared@3.3.0-beta.3.6870dbff.js";import"../async-validator@4.2.5/async-validator@4.2.5.cf877c1f.js";import"../memoize-one@6.0.0/memoize-one@6.0.0.63ab667a.js";import"../escape-html@1.0.3/escape-html@1.0.3.0dbb34ec.js";import"../normalize-wheel-es@1.2.0/normalize-wheel-es@1.2.0.3222b0a2.js";import"../@floating-ui_dom@1.2.7/@floating-ui_dom@1.2.7.88b7d3a9.js";import"../@floating-ui_core@1.2.6/@floating-ui_core@1.2.6.88778327.js";import"../pinia@2.0.35_typescript@5.0.4_vue@3.2.47/pinia@2.0.35_typescript@5.0.4_vue@3.2.47.44d93223.js";import"../vue-demi@0.14.0_vue@3.2.47/vue-demi@0.14.0_vue@3.2.47.71ba0ef2.js";import"../@codemirror_language-data@6.3.1_@codemirror_state@6.2.0_@codemirror_view@6.10.1_@lezer_common@1.0.2/@codemirror_language-data@6.3.1_@codemirror_state@6.2.0_@codemirror_view@6.10.1_@lezer_common@1.0.2.c8753240.js";import"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";import"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";import"../w3c-keyname@2.2.6/w3c-keyname@2.2.6.89c2fad7.js";import"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import"../path-browserify@1.0.1/path-browserify@1.0.1.2c28aad1.js";import"../echarts@5.4.2/echarts@5.4.2.80043e35.js";import"../tslib@2.3.0/tslib@2.3.0.a4e99503.js";import"../zrender@5.4.3/zrender@5.4.3.e2452002.js";import"../resize-observer-polyfill@1.5.1/resize-observer-polyfill@1.5.1.ad543aa3.js";import"../axios@1.4.0/axios@1.4.0.a8ee11a1.js";import"../@vueuse_integrations@10.1.2_axios@1.4.0_nprogress@0.2.0_vue@3.2.47/@vueuse_integrations@10.1.2_axios@1.4.0_nprogress@0.2.0_vue@3.2.47.f14b7780.js";import"../nprogress@0.2.0/nprogress@0.2.0.8c969ce6.js";import"../@vueuse_shared@10.1.2_vue@3.2.47/@vueuse_shared@10.1.2_vue@3.2.47.a4edebfd.js";const L={class:"container"},V={key:0,class:"tips"},K={class:"tip"},M={class:"tip"},U={class:"tip"},A={class:"tip"},B=["onClick","onMouseover"],D={class:"info"},F={class:"title"},I={class:"breadcrumb"},O={class:"path"},G=v({name:"Search"}),J=i(v({...G,setup(i){const v=n(),G=e(),J=t(),N=a(),P=T(!1),X=T(""),Y=T([]),Z=T(-1),$=T(),q=T(),Q=T([]);function W(e){return Q.value.push(e)}m((()=>{Q.value=[]}));const ee=p((()=>{let e=[];return e=Y.value.filter((e=>{let t=!1;return e.title&&("function"==typeof e.title?e.title().includes(X.value)&&(t=!0):e.title.includes(X.value)&&(t=!0)),e.path.includes(X.value)&&(t=!0),e.breadcrumb.some((e=>{let t=!1;return e&&("function"==typeof e?e().includes(X.value)&&(t=!0):e.includes(X.value)&&(t=!0)),t}))&&(t=!0),t})),e}));function te(e,t,a,o){e.forEach((e=>{var l,i,s,r,u,n,v;if(!1!==(null==(l=e.meta)?void 0:l.sidebar)){const l=c(o)||[];e.children&&function(e){var t;let a=!0;return(null==(t=e.children)?void 0:t.every((e=>{var t;return!1===(null==(t=e.meta)?void 0:t.sidebar)})))&&(a=!1),a}(e)?(l.push(null==(i=e.meta)?void 0:i.title),te(e.children,t?[t,e.path].join("/"):e.path,(null==(s=e.meta)?void 0:s.icon)??a,l)):(l.push(null==(r=e.meta)?void 0:r.title),Y.value.push({path:t?[t,e.path].join("/"):e.path,icon:(null==(u=e.meta)?void 0:u.icon)??a,title:null==(n=e.meta)?void 0:n.title,link:null==(v=e.meta)?void 0:v.link,breadcrumb:l}))}}))}function ae(e,t,a){e.forEach((e=>{var o,l,i,s,r;const u=c(a)||[];e.children&&e.children.length>0?(u.push(null==(o=e.meta)?void 0:o.title),ae(e.children,(null==(l=e.meta)?void 0:l.icon)??t,u)):(u.push(null==(i=e.meta)?void 0:i.title),Y.value.push({icon:(null==(s=e.meta)?void 0:s.icon)??t,title:null==(r=e.meta)?void 0:r.title,path:e.path,breadcrumb:u}))}))}function oe(){ee.value.length&&(Z.value-=1,Z.value<0&&(Z.value=ee.value.length-1),se())}function le(){ee.value.length&&(Z.value+=1,Z.value>ee.value.length-1&&(Z.value=0),se())}function ie(){-1!==Z.value&&Q.value[Z.value].click()}function se(){let e=0;if(-1!==Z.value){e=q.value.scrollTop;const t=Q.value[Z.value].offsetTop,a=Q.value[Z.value].clientHeight,o=q.value.scrollTop,l=q.value.clientHeight;t+a>o+l?e=t+a-l:t<=o&&(e=t)}q.value.scrollTo({top:e})}return d((()=>P.value),(e=>{e?(document.body.classList.add("hidden"),q.value.scrollTop=0,u("up",oe),u("down",le),u("enter",ie),setTimeout((()=>{$.value.focus()}),500)):(document.body.classList.remove("hidden"),u.unbind("up",oe),u.unbind("down",le),u.unbind("enter",ie),setTimeout((()=>{X.value="",Z.value=-1}),500))})),d((()=>ee.value),(()=>{Z.value=-1,Q.value=[],se()})),_((()=>{o.on("global-search-toggle",(()=>{P.value=!P.value})),u("alt+s",(e=>{G.settings.navSearch.enable&&G.settings.navSearch.enableHotkeys&&(e.preventDefault(),P.value=!0)})),u("esc",(e=>{G.settings.navSearch.enable&&G.settings.navSearch.enableHotkeys&&(e.preventDefault(),P.value=!1)})),"filesystem"!==G.settings.app.routeBaseOn?J.routes.forEach((e=>{e.children&&te(e.children)})):N.menus.forEach((e=>{ae(e.children)}))})),(e,t)=>{const a=l,i=x("el-icon"),u=x("el-input"),n=x("el-tag");return h(),f("div",{id:"search",class:H({searching:C(P)}),onClick:t[3]||(t[3]=e=>C(P)&&C(o).emit("global-search-toggle"))},[g("div",L,[g("div",{class:"search-box",onClick:t[2]||(t[2]=s((()=>{}),["stop"]))},[j(u,{ref_key:"searchInputRef",ref:$,modelValue:C(X),"onUpdate:modelValue":t[0]||(t[0]=e=>E(X)?X.value=e:null),placeholder:"搜索页面，支持标题、URL模糊查询",clearable:"",onKeydown:[t[1]||(t[1]=r((e=>C(o).emit("global-search-toggle")),["esc"])),r(s(oe,["prevent"]),["up"]),r(s(le,["prevent"]),["down"]),r(s(ie,["prevent"]),["enter"])]},{prefix:y((()=>[j(i,null,{default:y((()=>[j(a,{name:"ep:search"})])),_:1})])),_:1},8,["modelValue","onKeydown"]),"pc"===C(G).mode?(h(),f("div",V,[g("div",K,[j(n,{type:"info",size:"large"},{default:y((()=>[b(R("mac"===C(G).os?"⌥":"Alt")+" + S ",1)])),_:1}),j(n,{type:"info",size:"large"},{default:y((()=>[b(" 唤醒搜索面板 ")])),_:1})]),g("div",M,[j(n,{type:"info",size:"large"},{default:y((()=>[j(i,null,{default:y((()=>[j(a,{name:"search-up"})])),_:1})])),_:1}),j(n,{type:"info",size:"large"},{default:y((()=>[j(i,null,{default:y((()=>[j(a,{name:"search-down"})])),_:1})])),_:1}),j(n,{type:"info",size:"large"},{default:y((()=>[b(" 切换搜索结果 ")])),_:1})]),g("div",U,[j(n,{type:"info",size:"large"},{default:y((()=>[j(i,null,{default:y((()=>[j(a,{name:"search-enter"})])),_:1})])),_:1}),j(n,{type:"info",size:"large"},{default:y((()=>[b(" 访问页面 ")])),_:1})]),g("div",A,[j(n,{type:"info",size:"large"},{default:y((()=>[b(" ESC ")])),_:1}),j(n,{type:"info",size:"large"},{default:y((()=>[b(" 退出 ")])),_:1})])])):z("",!0)]),g("div",{ref_key:"searchResultRef",ref:q,class:"result"},[(h(!0),f(k,null,w(C(ee),((e,t)=>(h(),f("a",{key:e.path,ref_for:!0,ref:W,class:H(["item",{actived:t===C(Z)}]),onClick:t=>{return a=e.path,void((o=e.link)?window.open(o,"_blank"):v.push(a));var a,o},onMouseover:e=>Z.value=t},[j(i,{class:"icon"},{default:y((()=>[e.icon?(h(),S(a,{key:0,name:e.icon},null,8,["name"])):z("",!0)])),_:2},1024),g("div",D,[g("div",F,R(e.title??"[ 无标题 ]"),1),g("div",I,[(h(!0),f(k,null,w(e.breadcrumb,((e,t)=>(h(),f("span",{key:t},[b(R(e??"[ 无标题 ]")+" ",1),j(i,null,{default:y((()=>[j(a,{name:"ep:arrow-right"})])),_:1})])))),128))]),g("div",O,R(e.path),1)])],42,B)))),128))],512)])],2)}}}),[["__scopeId","data-v-7119310d"]]);export{J as default};