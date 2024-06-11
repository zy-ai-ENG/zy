import{_ as e}from"../titleBar.vue_vue_type_script_setup_true_lang/titleBar.vue_vue_type_script_setup_true_lang.496411d0.js";import{d as a,b as t,g as s,u as l,f as i,c as n,y as r,z as d,i as o,n as c,M as u,h as f,j as p,w as g,a3 as v,F as x,r as y,l as m,bz as h,o as b,ap as w,aq as _,m as k,$ as S,_ as j,K as C,L as M,bA as I}from"../main-444444e7.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";const B={class:"main bg-center h-[92vh] flex flex-col overflow-hidden"},J={key:0,class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 px-4"},W=["onClick"],E={class:"w-full rounded-t-xl overflow-hidden border dark:border-[#ffffff17] relative",style:{height:"40%"}},N=["src"],L={class:"absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 text-lg text-[#fff] ]"},R={class:"p-5 text-lg h-[160px] border-b dark:border-[#ffffff17] overflow-hidden relative"},T={class:"absolute bottom-1 right-2 font-semibold text-red-500 italic"},q={class:"flex p-4 border-b dark:border-[#ffffff17] flex-col space-y-4"},z={class:"flex justify-between"},D=p("span",null,"基础模型额度",-1),O={class:"flex justify-between"},A=p("span",null,"高级模型额度",-1),G={class:"flex justify-between"},P=p("span",null,"MJ绘画额度",-1),U={class:"px-4 flex-1 flex items-center justify-between"},$={class:"flex items-end"},F=p("span",null,"套餐有效期 ",-1),H={class:"ml-2 text-[#3076fd] text-lg"},K=p("div",{class:"line"},null,-1),Q={key:1,class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 px-4"},V={class:"w-full rounded-t-xl overflow-hidden",style:{height:"40%"}},X={class:"p-5 text-lg h-[160px] border-b dark:border-[#ffffff17] overflow-ellipsis"},Y={class:"flex p-4 border-b dark:border-[#ffffff17] flex-col space-y-4"},Z={class:"px-4 flex-1 flex items-center justify-between"},ee=a({__name:"index",setup(a){const ee=t(),{isMobile:ae}=s(),te=l(),se=i(),le=n((()=>{var e;const a=window.navigator.userAgent.toLowerCase();return a.match(/MicroMessenger/i)&&"micromessenger"===(null==(e=null==a?void 0:a.match(/MicroMessenger/i))?void 0:e[0])})),ie=n((()=>{const{payHupiStatus:e,payEpayStatus:a,payMpayStatus:t,payWechatStatus:s}=ee.globalConfig;return 1===Number(s)?"wechat":1===Number(t)?"mpay":1===Number(e)?"hupi":1===Number(a)?"epay":null})),ne=n((()=>{const{payEpayChannel:e,payMpayChannel:a}=ee.globalConfig;return"wechat"===ie.value?["wxpay"]:"epay"===ie.value?e?JSON.parse(e):[]:"mpay"===ie.value?a?JSON.parse(a):[]:"hupi"===ie.value?["wxpay"]:[]})),re=r([]),de=r(1),oe=r(!1);async function ce(){try{oe.value=!0;const e=await h({status:1,type:de.value,size:30});re.value=e.data.rows,oe.value=!1}catch(e){oe.value=!1}}const ue=n((()=>ae.value?"尽情探索，欢迎光临我们的在线商店！":"尽情探索，欢迎光临我们的在线商店、感谢您选择我们、让我们一同开启愉悦的购物之旅！"));function fe(e){de.value=e,ce()}async function pe(e){ne.value.length||te.warning("管理员还未开启支付！"),await async function(e){if(le.value&&"wechat"===ie.value&&1===Number(ee.globalConfig.payWechatStatus)){if("undefined"==typeof WeixinJSBridge)document.addEventListener?document.addEventListener("WeixinJSBridgeReady",ge,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",ge),document.attachEvent("onWeixinJSBridgeReady",ge));else{const a=await I({goodsId:e.id,payType:"jsapi"}),{success:t,data:s}=a;t&&ge(s)}return}se.updateOrderInfo({pkgInfo:e}),se.updateGoodsDialog(!1),se.updatePayDialog(!0)}(e)}function ge(e){const{appId:a,timeStamp:t,nonceStr:s,package:l,signType:i,paySign:n}=e;a?WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a,timeStamp:t,nonceStr:s,package:l,signType:i,paySign:n},(e=>{"get_brand_wcpay_request:ok"===e.err_msg?(te.success("购买成功、祝您使用愉快!"),setTimeout((()=>{ee.getUserInfo(),se.updateGoodsDialog(!1)}),500)):te.warning("您还没有支付成功哟！")})):te.warning("appId不能为空")}return d((()=>{ce()})),(a,t)=>(b(),o("div",B,[c(f(e),{title:"会员商场",des:ue.value,class:u([f(ae)?"px-3":"px-24"])},null,8,["des","class"]),p("div",{class:"flex justify-center items-center",style:v({height:f(ae)?"60px":"100px"})},[c(f(_),{type:"segment",style:v({width:f(ae)?"90%":"400px"}),"onUpdate:value":fe},{default:g((()=>[c(f(w),{name:1,tab:"会员限时套餐"}),c(f(w),{name:-1,tab:"叠加永久次卡"})])),_:1},8,["style"])],4),p("div",{class:u(["flex-1 pb-10 overflow-y-auto h-4/5",[f(ae)?"px-3":"px-28"]])},[oe.value?m("",!0):(b(),o("div",J,[(b(!0),o(x,null,y(re.value,(e=>(b(),o("div",{key:e.id,class:"border dark:border-[#ffffff17] h-[580px] rounded-xl card-item flex flex-col",onClick:a=>pe(e)},[p("div",E,[p("img",{src:e.coverImg,class:"object-cover w-full h-full cover",alt:""},null,8,N),p("div",L,k(e.name),1)]),p("div",R,[S(k(e.des)+" ",1),p("span",T,"￥"+k(e.price),1)]),p("div",q,[p("div",z,[D,p("span",null,k(e.model3Count||0)+" 积分",1)]),p("div",O,[A,p("span",null,k(e.model4Count||0)+" 积分",1)]),p("div",G,[P,p("span",null,k(e.drawMjCount||0)+" 积分",1)])]),p("div",U,[p("div",$,[F,p("span",H,k(e.days>0?`${e.days} 天`:"永久"),1)]),K,p("div",null,[c(f(j),{class:"text-lg right-icon",icon:"bi:arrow-right"})])])],8,W)))),128))])),oe.value?(b(),o("div",Q,[(b(),o(x,null,y(4,(e=>p("div",{key:e,class:"border dark:border-[#ffffff17] h-[580px] rounded-xl card-item flex flex-col"},[p("div",V,[c(f(C),{height:"100%",width:"100%"})]),p("div",X,[c(f(M),{vertical:""},{default:g((()=>[c(f(C),{text:"",repeat:4,width:"100%",sharp:!1})])),_:1})]),p("div",Y,[c(f(M),{vertical:""},{default:g((()=>[c(f(C),{text:"",repeat:4,width:"100%",sharp:!1})])),_:1})]),p("div",Z,[c(f(C),{text:"",repeat:1,width:"100%",sharp:!1})])]))),64))])):m("",!0)],2)]))}});export{ee as default};
