
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{aj as e,d as a,j as s,y as l,u as t,h as o,o as n,c as r,a as d,b as i,M as u,e as m,f as c,J as p,w as g,v as f,I as h,l as b,t as _,_ as k,n as y}from"../main-01383ffb.js";import{a as v}from"./index.35a7e2ce.js";function S(){return{reload:function(){e.push({name:"reload"})}}}const w={class:"tools"},C={class:"buttons"},j={class:"user-wrapper"},x=a({name:"Tools"}),z=y(a({...x,setup(e){const a=s(),y=l(),x=t(),z=S(),{isFullscreen:I,toggle:M}=v();function T(e){switch(e){case"home":a.push({name:"home"});break;case"setting":a.push({name:"personalSetting"});break;case"hotkeys":u.emit("global-hotkeys-intro-toggle");break;case"logout":x.logout().then((()=>{a.push({name:"login"})}))}}return(e,a)=>{const s=k,l=o("el-icon"),t=o("el-avatar"),v=o("el-dropdown-item"),S=o("el-dropdown-menu"),F=o("el-dropdown");return n(),r("div",w,[d("div",C,[i(y).settings.navSearch.enable?(n(),r("span",{key:0,class:"item",onClick:a[0]||(a[0]=e=>i(u).emit("global-search-toggle"))},[m(l,null,{default:c((()=>[m(s,{name:"ep:search"})])),_:1})])):p("",!0),"pc"===i(y).mode&&i(y).settings.toolbar.enableFullscreen?(n(),r("span",{key:1,class:"item",onClick:a[1]||(a[1]=(...e)=>i(M)&&i(M)(...e))},[m(l,null,{default:c((()=>[m(s,{name:i(I)?"fullscreen-exit":"fullscreen"},null,8,["name"])])),_:1})])):p("",!0),i(y).settings.toolbar.enablePageReload?(n(),r("span",{key:2,class:"item",onClick:a[2]||(a[2]=e=>i(z).reload())},[m(l,null,{default:c((()=>[m(s,{name:"ep:refresh-right"})])),_:1})])):p("",!0),i(y).settings.toolbar.enableColorScheme?(n(),r("span",{key:3,class:"item",onClick:a[3]||(a[3]=e=>i(y).setColorScheme("dark"===i(y).settings.app.colorScheme?"light":"dark"))},[m(l,null,{default:c((()=>[g(m(s,{name:"ep:sunny"},null,512),[[f,"light"===i(y).settings.app.colorScheme]]),g(m(s,{name:"ep:moon"},null,512),[[f,"dark"===i(y).settings.app.colorScheme]])])),_:1})])):p("",!0)]),m(F,{class:"user-container",size:"default",onCommand:T},{dropdown:c((()=>[m(S,{class:"user-dropdown"},{default:c((()=>[i(y).settings.home.enable?(n(),h(v,{key:0,command:"home"},{default:c((()=>[b(_(i(y).settings.home.title),1)])),_:1})):p("",!0),m(v,{command:"setting"},{default:c((()=>[b(" 个人设置 ")])),_:1}),"pc"===i(y).mode?(n(),h(v,{key:1,divided:"",command:"hotkeys"},{default:c((()=>[b(" 快捷键介绍 ")])),_:1})):p("",!0),m(v,{divided:"",command:"logout"},{default:c((()=>[b(" 退出登录 ")])),_:1})])),_:1})])),default:c((()=>[d("div",j,[m(t,{size:"small"},{default:c((()=>[m(l,null,{default:c((()=>[m(s,{name:"ep:user-filled"})])),_:1})])),_:1}),b(" "+_(`${i(x).username||"GoMaxAi"} `)+" ",1),m(l,null,{default:c((()=>[m(s,{name:"ep:caret-bottom"})])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-4ed968b5"]]),I=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as T,I as i,S as u};
