
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,r as n,s,x as t,o as e,c as o,e as l,a as c,f as u,j as r,_ as d,h as i,p as v,i as f,l as p,t as m,b as _,n as b,q as w}from"../main-0579ff80.js";const I=a=>(v("data-v-599b59df"),a=a(),f(),a),h={class:"notfound"},y={class:"content"},j=I((()=>c("h1",null,"404",-1))),x=I((()=>c("div",{class:"desc"}," 抱歉，你访问的页面不存在 ",-1))),N=a({__name:"[...all]",setup(a){const v=r(),f=n({inter:NaN,countdown:5});function b(){v.push("/")}return s((()=>{f.value.inter&&clearInterval(f.value.inter)})),t((()=>{f.value.inter=setInterval((()=>{f.value.countdown--,0===f.value.countdown&&(f.value.inter&&clearInterval(f.value.inter),b())}),1e3)})),(a,n)=>{const s=d,t=i("el-button");return e(),o("div",h,[l(s,{name:"404",class:"icon"}),c("div",y,[j,x,l(t,{type:"primary",onClick:b},{default:u((()=>[p(m(_(f).countdown)+" 秒后，返回首页 ",1)])),_:1})])])}}});"function"==typeof w&&w(N);const k=b(N,[["__scopeId","data-v-599b59df"]]);export{k as default};
