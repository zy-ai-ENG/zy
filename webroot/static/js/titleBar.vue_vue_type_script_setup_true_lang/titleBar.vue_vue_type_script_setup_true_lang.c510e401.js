import{d as t,o as a,i as e,j as s,e as l,c as r,v as n,n as d,w as f,h as i,P as o,K as u,m as p}from"../main-6bab9545.js";const x={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},c=[s("path",{d:"M30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53z",fill:"currentColor"},null,-1)],v=t({name:"PlayBack",render:function(t,s){return a(),e("svg",x,c)}}),m={class:"pt-1 mr-2 cursor-pointer"},w=t({__name:"titleBar",props:{title:{default:""},des:{default:""},padding:{default:4}},setup(t){const x=t,c=l(),w=r((()=>"dark"===c.theme)),b=n();return(t,l)=>(a(),e("div",{class:u(["flex border-b border-[#ebebeb] dark:border-[#ffffff17] py-4 w-full",[`px-${x.padding}`]])},[s("div",m,[d(i(o),{size:"16",class:"text-primary",onClick:l[0]||(l[0]=t=>i(b).push("/"))},{default:f((()=>[d(i(v))])),_:1})]),s("div",null,[s("b",{class:u([[w.value?"text-[#fff]":"text-[#555]"],"text-lg"])},p(x.title),3),s("div",{class:u([[w.value?"text-[#fff]":"text-[#626569]"],"text-truncate text-[#626569] mt-1"])},p(x.des),3)])],2))}});export{w as _};
