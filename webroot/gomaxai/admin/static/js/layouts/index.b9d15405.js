
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,g as s,y as a,z as t,A as i,B as n,C as o,x as d,D as l,F as m,h as r,o as p,c as u,a as b,e as c,G as g,b as f,H as v,I as x,J as j,f as h,T as k,w as y,v as M,K as C,L as w,M as S,_,n as H}from"../main-dd192319.js";import{_ as L}from"../index/index.a8b9b973.js";import D from"../views/link.25eb99b0.js";import I from"../Header/index.f0dc6499.js";import A from"../MainSidebar/index.1f108903.js";import B from"../SubSidebar/index.abb353bb.js";import T from"../Topbar/index.76daade5.js";import F from"../Search/index.1d303608.js";import G from"../HotkeysIntro/index.a9c87c95.js";import P from"../AppSetting/index.44242f92.js";import{u as $}from"../index/index.e32aa07b.js";import{u as z}from"../useMenu/useMenu.829587c7.js";import"../config/config.bd9b8a25.js";import"../index/index.129bbe0b.js";import"../Logo/index.21a1a030.js";import"../SidebarItem/index.167f6bdf.js";import"../index/index.5e266f4d.js";const E={class:"layout"},J={id:"app-main"},K={class:"wrapper"},R={class:"main"},q={key:0},N=e({name:"Layout"}),O=H(e({...N,setup(e){const H=s(),N=a(),O=t(),Q=i(),U=n((()=>!!H.meta.link));return o((()=>N.settings.menu.subMenuCollapse),(e=>{"mobile"===N.mode&&(e?document.body.classList.remove("overflow-hidden"):document.body.classList.add("overflow-hidden"))})),o((()=>H.path),(()=>{"mobile"===N.mode&&N.$patch((e=>{e.settings.menu.subMenuCollapse=!0}))})),d((()=>{l("f5",(e=>{N.settings.toolbar.enablePageReload&&(e.preventDefault(),$().reload())})),l("alt+`",(e=>{N.settings.menu.enableHotkeys&&(e.preventDefault(),z().switchTo(Q.actived+1<Q.allMenus.length?Q.actived+1:0))}))})),m((()=>{l.unbind("f5"),l.unbind("alt+`")})),(e,s)=>{const a=r("router-view"),t=L,i=r("el-backtop"),n=_,o=r("el-icon");return p(),u("div",E,[b("div",J,[c(I),b("div",K,[b("div",{class:g(["sidebar-container",{show:"mobile"===f(N).mode&&!f(N).settings.menu.subMenuCollapse}])},[c(A),c(B)],2),b("div",{class:g(["sidebar-mask",{show:"mobile"===f(N).mode&&!f(N).settings.menu.subMenuCollapse}]),onClick:s[0]||(s[0]=e=>f(N).toggleSidebarCollapse())},null,2),b("div",{class:"main-container",style:v({"padding-bottom":e.$route.meta.paddingBottom})},["head"!==f(N).settings.menu.menuMode||f(N).settings.menu.enableSubMenuCollapseButton||f(N).settings.breadcrumb.enable?(p(),x(T,{key:0})):j("",!0),b("div",R,[c(a,null,{default:h((({Component:e,route:s})=>[c(k,{name:"main",mode:"out-in",appear:""},{default:h((()=>[(p(),x(w,{include:f(O).list},[y((p(),x(C(e),{key:s.fullPath})),[[M,!f(U)]])],1032,["include"]))])),_:2},1024)])),_:1}),f(U)?(p(),x(D,{key:0})):j("",!0)]),c(t)],4)]),c(i,{right:20,bottom:20,title:"回到顶部"})]),c(F),c(G),f(N).settings.app.enableAppSetting?(p(),u("div",q,[c(o,{class:"app-setting",onClick:s[1]||(s[1]=e=>f(S).emit("global-app-setting-toggle"))},{default:h((()=>[c(n,{name:"ep:setting"})])),_:1}),c(P)])):j("",!0)])}}}),[["__scopeId","data-v-096f3f7e"]]);export{O as default};
