
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,y as t,B as a,h as i,o as l,c as n,b as s,I as m,f as r,a as u,e as d,J as o,t as c,ak as v,G as h,S as p,U as b,_ as f,n as k}from"../main-32165e1b.js";const y={class:"sidebar-item"},_=["href","target","onClick"],x={class:"title"},g={class:"title"},P=e({name:"SidebarItem"}),S=k(e({...P,props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},setup(e){const k=e,P=t(),S=a((()=>{let e=!0;return k.item.children?k.item.children.every((e=>{var t;return!1===(null==(t=e.meta)?void 0:t.sidebar)}))&&(e=!1):e=!1,e}));return(t,a)=>{var k;const I=f,O=i("el-icon"),j=i("el-menu-item"),A=i("router-link"),B=i("SidebarItem"),C=i("el-sub-menu");return l(),n("div",y,[s(S)?(l(),m(C,{key:1,title:(null==(k=e.item.meta)?void 0:k.title)??"[ 无标题 ]",index:"filesystem"!==s(P).settings.app.routeBaseOn?s(v)(e.basePath,e.item.path):JSON.stringify(e.item)},{title:r((()=>{var t,a;return[(null==(t=e.item.meta)?void 0:t.icon)?(l(),m(O,{key:0,class:"title-icon"},{default:r((()=>[d(I,{name:e.item.meta.icon},null,8,["name"])])),_:1})):o("",!0),u("span",g,c((null==(a=e.item.meta)?void 0:a.title)??"[ 无标题 ]"),1)]})),default:r((()=>[(l(!0),n(p,null,b(e.item.children,(t=>{var a;return l(),n(p,null,[!1!==(null==(a=t.meta)?void 0:a.sidebar)?(l(),m(B,{key:t.path,item:t,"base-path":s(v)(e.basePath,e.item.path)},null,8,["item","base-path"])):o("",!0)],64)})),256))])),_:1},8,["title","index"])):(l(),m(A,{key:0,custom:"",to:s(v)(e.basePath,e.item.path)},{default:r((({href:t,navigate:a,isActive:i,isExactActive:n})=>{var p,b,f;return[u("a",{href:(null==(p=e.item.meta)?void 0:p.link)?e.item.meta.link:t,class:h([i&&"router-link-active",n&&"router-link-exact-active"]),target:(null==(b=e.item.meta)?void 0:b.link)?"_blank":"_self",onClick:a},[d(j,{title:(null==(f=e.item.meta)?void 0:f.title)??"[ 无标题 ]",index:s(v)(e.basePath,e.item.path||"")},{default:r((()=>{var t,a;return[(null==(t=e.item.meta)?void 0:t.icon)?(l(),m(O,{key:0,class:"title-icon"},{default:r((()=>[d(I,{name:e.item.meta.icon},null,8,["name"])])),_:1})):o("",!0),u("span",x,c((null==(a=e.item.meta)?void 0:a.title)??"[ 无标题 ]"),1)]})),_:1},8,["title","index"])],10,_)]})),_:1},8,["to"]))])}}}),[["__scopeId","data-v-a9cfdc56"]]);export{S as default};