
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,y as s,A as a,B as n,r as o,h as t,b as l,o as u,c as i,e as d,G as p,f as c,ae as m,S as r,U as g,J as b,I as h,n as f}from"../main-1d1da8fb.js";import M from"../Logo/index.93a09586.js";import v from"../SidebarItem/index.fe5bf1f1.js";const S=e({name:"SubSidebar"}),q=f(e({...S,setup(e){const f=s(),S=a();n((()=>"dark"===f.settings.app.colorScheme?"https://public-1300678944.cos.ap-shanghai.myqcloud.com/ai/f6d0d3596.png":"https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1681895253740image.png"));const q=o(0);function y(e){q.value=e.target.scrollTop}return(e,s)=>{const a=t("el-menu");return["side","head","single"].includes(l(f).settings.menu.menuMode)||"mobile"===l(f).mode?(u(),i("div",{key:0,class:p(["sub-sidebar-container",{"is-collapse":"pc"===l(f).mode&&l(f).settings.menu.subMenuCollapse}]),onScroll:y},[d(M,{"show-logo":"single"===l(f).settings.menu.menuMode,class:p(["sidebar-logo",{"sidebar-logo-bg":"single"===l(f).settings.menu.menuMode,shadow:l(q)}])},null,8,["show-logo","class"]),d(a,{"unique-opened":l(f).settings.menu.subMenuUniqueOpened,"default-openeds":l(S).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===l(f).mode&&l(f).settings.menu.subMenuCollapse,"collapse-transition":!1,class:p({"is-collapse-without-logo":"single"!==l(f).settings.menu.menuMode&&l(f).settings.menu.subMenuCollapse})},{default:c((()=>[d(m,{name:"sub-sidebar"},{default:c((()=>[(u(!0),i(r,null,g(l(S).sidebarMenus,((e,s)=>{var a;return u(),i(r,null,[!1!==(null==(a=e.meta)?void 0:a.sidebar)?(u(),h(v,{key:e.path||s,item:e,"base-path":e.path},null,8,["item","base-path"])):b("",!0)],64)})),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):b("",!0)}}}),[["__scopeId","data-v-859c71ea"]]);export{q as default};
