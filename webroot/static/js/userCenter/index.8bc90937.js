import{d as e,b as a,v as s,f as t,c as l,y as i,P as n,z as u,o as c,i as r,j as p,k as x,w as d,$ as o,h as f,N as m,l as v,n as y,H as k,m as w,u as g,g as _,br as b,ap as h,bs as C,bt as I,K as z,L,bu as j,bv as M,ad as T,bw as B,bx as D,aq as $,M as U,a3 as S,a8 as P,by as W,bz as A,t as N}from"../main-e96a6f7d.js";import{_ as O}from"../titleBar.vue_vue_type_script_setup_true_lang/titleBar.vue_vue_type_script_setup_true_lang.947c81fa.js";import{N as q}from"../LayoutSider/LayoutSider.40791923.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const H={class:"flex flex-col justify-center items-center"},K={class:"text-2xl text-primary self-start mb-3 flex justify-between w-full"},E=p("span",null,"Profile",-1),F={class:"mt-3 text-lg text-[#555]"},G={class:"text-[#95aac9] mt-2"},J={class:"text-[#555] mt-3 px-4"},Q={class:"self-start"},R=p("div",{class:"flex pl-3 pt-3 text-base font-bold text-primary"},[p("span",null,"我的账户余额")],-1),V={key:0,class:"flex pl-3 pt-3 text-base font-bold text-primary"},X=p("span",null,"会员过期时间：",-1),Y={class:"flex items-center space-x-4 pl-3 mt-3"},Z=p("span",{class:"flex-shrink-0 w-24 text-primary"},"基础模型余额:",-1),ee={class:"w-[200px]"},ae={class:"flex items-center space-x-4 pl-3 mt-3"},se=p("span",{class:"flex-shrink-0 w-24 text-primary"},"高级模型余额:",-1),te={class:"w-[200px]"},le={class:"flex items-center space-x-4 pl-3 mt-3"},ie=p("span",{class:"flex-shrink-0 w-24 text-primary"},"绘画余额:",-1),ne={class:"w-[200px]"},ue={class:"flex items-center space-x-4 pl-3 mt-3"},ce=p("span",{class:"flex-shrink-0 w-24 text-primary"},"绑定微信:",-1),re={class:"w-[200px]"},pe={key:1},xe=e({__name:"detail",setup(e){const g=a(),_=s(),{userBalance:b}=g,h=t(),C=l((()=>g.userInfo.email||"")),I=l((()=>g.userInfo.isBindWx)),z=i(g.userInfo.avatar??n),L=i(g.userInfo.username??"未登录"),j=i(g.userInfo.sign??"我是一台基于深度学习和自然语言处理技术的 AI 机器人，旨在为用户提供高效、精准、个性化的智能服务。");function M(){g.logOut(),_.push("/")}const T=l((()=>g.isLogin));return u((()=>{T.value||g.setLoginDialog(!0)})),(e,a)=>(c(),r("div",H,[p("div",K,[E,T.value?(c(),x(f(m),{key:0,tertiary:"",type:"error",onClick:M},{default:d((()=>[o(" 退出登录 ")])),_:1})):v("",!0),T.value?v("",!0):(c(),x(f(m),{key:1,tertiary:"",type:"success",onClick:a[0]||(a[0]=e=>f(g).setLoginDialog(!0))},{default:d((()=>[o(" 点击登入 ")])),_:1}))]),y(f(k),{size:148,src:z.value,"fallback-src":f(n)},null,8,["src","fallback-src"]),p("b",F,w(L.value),1),p("span",G,w(C.value),1),p("div",J,w(j.value),1),p("div",Q,[R,f(b).expirationTime?(c(),r("div",V,[X,p("span",null,w(f(b).expirationTime),1)])):v("",!0),p("div",Y,[Z,p("div",ee,w(f(b).sumModel3Count||"0")+" 积分 ",1)]),p("div",ae,[se,p("div",te,w(f(b).sumModel4Count||"0")+" 积分 ",1)]),p("div",le,[ie,p("div",ne,w(f(b).sumDrawMjCount||"0")+" 积分 ",1)]),p("div",ue,[ce,p("div",re,[I.value?(c(),r("span",pe,"已绑定微信")):(c(),x(f(m),{key:0,text:"",onClick:a[1]||(a[1]=e=>f(h).updateBindwxDialog(!0))},{default:d((()=>[o(" 点击绑定微信 ")])),_:1}))])])])]))}}),de={class:"flex flex-col justify-center items-center"},oe={class:"text-2xl text-primary self-start mb-14 flex justify-between w-full"},fe=p("span",null,"Profile",-1),me={class:"mt-3 text-lg text-[#555]"},ve={class:"text-[#95aac9] mt-2"},ye={class:"text-[#555] mt-3 px-4"},ke={class:"self-start mt-16"},we=p("div",{class:"text-xl text-primary"}," 我在本站的使用记录 ",-1),ge={class:"flex items-center space-x-4 pl-3 mt-3"},_e=p("span",{class:"flex-shrink-0 w-[90px] text-keft text-primary"},"基础模型积分:",-1),be={class:"w-[230px]"},he={class:"flex items-center space-x-4 pl-3 mt-3"},Ce=p("span",{class:"flex-shrink-0 w-[90px] text-keft text-primary"},"高级模型积分:",-1),Ie={class:"w-[230px]"},ze={class:"flex items-center space-x-4 pl-3 mt-3"},Le=p("span",{class:"flex-shrink-0 w-[90px] text-keft text-primary"},"基础模型使用:",-1),je={class:"w-[230px]"},Me={class:"flex items-center space-x-4 pl-3 mt-3"},Te=p("span",{class:"flex-shrink-0 w-[90px] text-keft text-primary"},"高级模型使用:",-1),Be={class:"w-[230px]"},De={class:"flex items-center space-x-4 pl-3 mt-3"},$e=p("span",{class:"flex-shrink-0 w-[90px] text-keft text-primary"},"绘画使用积分:",-1),Ue={class:"w-[230px]"},Se={key:0,class:"flex items-center space-x-4 pl-3 mt-3"},Pe=p("span",{class:"flex-shrink-0 w-[90px] text-keft text-primary"},"绑定微信:",-1),We={class:"w-[230px]"},Ae={key:1},Ne={key:1,class:"flex items-center space-x-4 pl-3 mt-3"},Oe=p("span",{class:"flex-shrink-0 w-[90px] text-keft text-primary"},"绑定微信:",-1),qe={class:"w-[230px]"},He={key:0,class:"flex text-[red] pt-8 text-base font-bold"},Ke=p("span",null,"会员过期时间：",-1),Ee={key:1},Fe={class:"flex items-center space-x-4"},Ge={class:"flex-shrink-0 w-[60px]"},Je={class:"flex-1"},Qe={class:"flex items-center space-x-4 mt-5"},Re={class:"flex-shrink-0 w-[60px]"},Ve={class:"flex-1"},Xe={class:"flex space-x-4 mt-5"},Ye={class:"flex-shrink-0 w-[60px]"},Ze={class:"flex-1"},ea=e({__name:"index",setup(e){const H=t(),K=a(),E=s(),F=i(0),G=l((()=>K.userBalance)),J=l((()=>{var e;return null==(e=K.globalConfig)?void 0:e.isUseWxLogin})),Q=i(!0),R=l((()=>K.isLogin)),V=g(),X=l((()=>K.userInfo.email||"")),Y=l((()=>K.userInfo.isBindWx)),Z=i(K.userInfo.avatar??n),ee=i(K.userInfo.username??"未登录"),ae=i(K.userInfo.sign??"我是一台基于深度学习和自然语言处理技术的 AI 机器人，旨在为用户提供高效、精准、个性化的智能服务。"),se=i(!1),{isSmallLg:te,isMobile:le}=_();async function ie(){const e=await b();F.value=e.data||0}async function ne(){(await W()).success&&V.success("已同步数据完成"),ie()}async function ue(e){try{se.value=!0;const a=await A(e);if(se.value=!1,!a.success)return V.error(a.message);V.success(N("common.updateUserSuccess")),K.getUserInfo()}catch(a){se.value=!1}}function ce(){K.logOut(),E.push("/")}return u((()=>{R.value||K.setLoginDialog(!0),ie()})),setTimeout((()=>{Q.value=!1}),500),(e,a)=>(c(),x(f(P),{"has-sider":"",class:"flex h-full"},{default:d((()=>[f(te)?v("",!0):(c(),x(f(q),{key:0,"content-style":"padding: 24px;",bordered:"",width:"380"},{default:d((()=>[p("div",de,[p("div",oe,[fe,y(f(m),{tertiary:"",type:"error",onClick:ce},{default:d((()=>[o(" 退出登录 ")])),_:1})]),y(f(k),{size:148,src:Z.value,"fallback-src":f(n)},null,8,["src","fallback-src"]),p("b",me,w(ee.value),1),p("span",ve,w(X.value),1),p("div",ye,w(ae.value),1),p("div",ke,[we,p("div",ge,[_e,p("div",be,w(G.value.useModel3Count||"0")+" 积分 ",1)]),p("div",he,[Ce,p("div",Ie,w(G.value.useModel4Count||"0")+" 积分 ",1)]),p("div",ze,[Le,p("div",je,w(G.value.useModel3Token||"0")+" Token ",1)]),p("div",Me,[Te,p("div",Be,w(G.value.useModel4Token||"0")+" Token ",1)]),p("div",De,[$e,p("div",Ue,w(G.value.useDrawMjToken||"0")+" 积分 ",1)]),J.value?(c(),r("div",Se,[Pe,p("div",We,[Y.value?(c(),r("span",Ae,"已绑定微信")):(c(),x(f(m),{key:0,text:"",onClick:a[0]||(a[0]=e=>f(H).updateBindwxDialog(!0))},{default:d((()=>[o(" 点击绑定微信 ")])),_:1}))])])):v("",!0),F.value>0?(c(),r("div",Ne,[Oe,p("div",qe,[y(f(m),{text:"",onClick:ne},{default:d((()=>[o(" 点击同步访客数据 ")])),_:1})])])):v("",!0)])]),G.value.expirationTime?(c(),r("div",He,[Ke,p("span",null,w(G.value.expirationTime),1)])):v("",!0)])),_:1})),p("div",{class:U(["flex flex-col",[f(le)?"w-full":"flex-1"]]),style:S({padding:f(le)?"10px":"0 28px 0 28px"})},[y(f(O),{title:"个人中心",des:"编辑个人信息、查看更多详情",padding:(f(le),1)},null,8,["padding"]),y(f($),{type:"line",animated:"",class:"mt-5 flex-1"},{default:d((()=>[f(te)?(c(),x(f(h),{key:0,name:"detail",tab:"我的详情"},{default:d((()=>[y(xe)])),_:1})):v("",!0),y(f(h),{name:"account",tab:"我的钱包"},{default:d((()=>[y(C)])),_:1}),y(f(h),{name:"baseInfo",tab:"基础信息"},{default:d((()=>[y(f(I),null,{header:d((()=>[Q.value||!R.value?(c(),x(f(z),{key:0,size:"medium",width:"20%"})):(c(),r("div",Ee,"用户基础设置"))])),default:d((()=>[Q.value||!R.value?(c(),x(f(L),{key:0,vertical:""},{default:d((()=>[y(f(z),{height:"40px",size:"medium"}),y(f(z),{height:"40px",size:"medium"}),y(f(z),{height:"80px",size:"medium"})])),_:1})):(c(),x(f(j),{key:1,"x-gap":"12",cols:1},{default:d((()=>[y(f(M),null,{default:d((()=>[p("div",Fe,[p("span",Ge,w(e.$t("setting.avatarLink")),1),p("div",Je,[y(f(T),{value:Z.value,"onUpdate:value":a[1]||(a[1]=e=>Z.value=e),placeholder:"请填写头像地址"},null,8,["value"])]),y(f(m),{size:"tiny",text:"",type:"primary",onClick:a[2]||(a[2]=e=>ue({avatar:Z.value}))},{default:d((()=>[o(w(e.$t("common.update")),1)])),_:1})]),p("div",Qe,[p("span",Re,w(e.$t("setting.name")),1),p("div",Ve,[y(f(T),{value:ee.value,"onUpdate:value":a[3]||(a[3]=e=>ee.value=e),placeholder:"请编辑您的用户名",maxlength:"12","show-count":"",clearable:""},null,8,["value"])]),y(f(m),{size:"tiny",text:"",type:"primary",onClick:a[4]||(a[4]=e=>ue({username:ee.value}))},{default:d((()=>[o(w(e.$t("common.update")),1)])),_:1})]),p("div",Xe,[p("span",Ye,w(e.$t("setting.sign")),1),p("div",Ze,[y(f(T),{value:ae.value,"onUpdate:value":a[5]||(a[5]=e=>ae.value=e),placeholder:"请编辑您的签名",maxlength:"128","show-count":"",clearable:"",type:"textarea"},null,8,["value"])]),y(f(m),{size:"tiny",text:"",type:"primary",onClick:a[6]||(a[6]=e=>ue({sign:ae.value}))},{default:d((()=>[o(w(e.$t("common.update")),1)])),_:1})])])),_:1})])),_:1}))])),_:1})])),_:1}),y(f(h),{name:"password",tab:"密码管理"},{default:d((()=>[y(B)])),_:1}),y(f(h),{name:"invite",tab:"邀请得福利"},{default:d((()=>[y(D)])),_:1})])),_:1})],6)])),_:1}))}});export{ea as default};