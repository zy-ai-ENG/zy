
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,a as s,B as a,C as n,r as t,j as o,e as l,o as i,c as u,f as d,H as c,g as m,ag as p,V as r,W as g,K as b,J as h,q as f}from"../main-646ffc07.js";import M from"../Logo/index.a3182dc4.js";import v from"../SidebarItem/index.508a1cf6.js";const q=e({name:"SubSidebar"}),S=f(e({...q,setup(e){const f=s(),q=a();n((()=>"dark"===f.settings.app.colorScheme?"https://public-1300678944.cos.ap-shanghai.myqcloud.com/ai/f6d0d3596.png":"https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1681895253740image.png"));const S=t(0);function j(e){S.value=e.target.scrollTop}const w=[{path:"/",meta:{icon:"sidebar-client",title:"首页"},name:"IndexMenu",children:[]},{path:"/user",meta:{icon:"sidebar-client",title:"用户管理"},name:"UserMenu",redirect:"/user/list"}];return(e,s)=>{const a=o("el-menu");return["side","head","single"].includes(l(f).settings.menu.menuMode)||"mobile"===l(f).mode?(i(),u("div",{key:0,class:c(["sub-sidebar-container",{"is-collapse":"pc"===l(f).mode&&l(f).settings.menu.subMenuCollapse}]),onScroll:j},[d(M,{"show-logo":"single"===l(f).settings.menu.menuMode,class:c(["sidebar-logo",{"sidebar-logo-bg":"single"===l(f).settings.menu.menuMode,shadow:l(S)}])},null,8,["show-logo","class"]),d(a,{"unique-opened":l(f).settings.menu.subMenuUniqueOpened,"default-openeds":l(q).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===l(f).mode&&l(f).settings.menu.subMenuCollapse,"collapse-transition":!1,class:c({"is-collapse-without-logo":"single"!==l(f).settings.menu.menuMode&&l(f).settings.menu.subMenuCollapse})},{default:m((()=>[d(p,{name:"sub-sidebar"},{default:m((()=>[(i(),u(r,null,g(w,((e,s)=>{var a;return i(),u(r,null,[!1!==(null==(a=e.meta)?void 0:a.sidebar)?(i(),h(v,{key:e.path||s,item:e,"base-path":e.path},null,8,["item","base-path"])):b("",!0)],64)})),64))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):b("",!0)}}}),[["__scopeId","data-v-19a6d047"]]);export{S as default};
