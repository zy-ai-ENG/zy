import{cd as e,ce as t,cf as a,d as n,bY as l,bU as r,bW as i,c7 as s,b$ as o,cg as u,c as d,ch as c,c9 as f,ci as p,y as v,z as m,cj as g,bX as b,ck as h,cl as x,c3 as w,c2 as y,cm as k,W as C,cn as I,co as z,ad as S,cp as B,cq as _,cr as A,bZ as F,cs as R,ct as P,cc as M,q as N,o as j,i as U,j as V,aj as O,b5 as $,u as T,k as D,w as q,h as L,n as E,bg as G,R as H,bi as K,a9 as W,N as J,$ as X,bh as Y,aa as Z,b as Q,v as ee,G as te,g as ae,M as ne,m as le,l as re,cu as ie,cv as se,H as oe,cw as ue,p as de,_ as ce,ap as fe,cx as pe,aq as ve,cy as me}from"../main-444444e7.js";import{_ as ge}from"../titleBar.vue_vue_type_script_setup_true_lang/titleBar.vue_vue_type_script_setup_true_lang.496411d0.js";import{c as be}from"../index/index.a4f65e28.js";import{N as he}from"../InputGroup/InputGroup.ccd44f34.js";import"../punycode@2.3.0/punycode@2.3.0.8a62a219.js";var xe=1/0,we=17976931348623157e292;function ye(t){var a=function(t){return t?(t=e(t))===xe||t===-xe?(t<0?-1:1)*we:t==t?t:0:0===t?t:0}(t),n=a%1;return a==a?n?a-n:a:0}var ke,Ce=t.isFinite,Ie=Math.min;const ze=(ke=Math["round"],function(t,n){if(t=e(t),(n=null==n?0:Ie(ye(n),292))&&Ce(t)){var l=(a(t)+"e").split("e"),r=ke(l[0]+"e"+(+l[1]+n));return+((l=(a(r)+"e").split("e"))[0]+"e"+(+l[1]-n))}return ke(t)}),Se=n({name:"Remove",render:()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:"\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "}))}),Be=r("input-group-label","\n position: relative;\n user-select: none;\n -webkit-user-select: none;\n box-sizing: border-box;\n padding: 0 12px;\n display: inline-block;\n border-radius: var(--n-border-radius);\n background-color: var(--n-group-label-color);\n color: var(--n-group-label-text-color);\n font-size: var(--n-font-size);\n line-height: var(--n-height);\n height: var(--n-height);\n flex-shrink: 0;\n white-space: nowrap;\n transition: \n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n",[i("border","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-group-label-border);\n transition: border-color .3s var(--n-bezier);\n ")]),_e=n({name:"InputGroupLabel",props:Object.assign(Object.assign({},o.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:a,inlineThemeDisabled:n}=s(e),l=o("Input","-input-group-label",Be,u,e,a),r=d((()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:a},self:{groupLabelColor:n,borderRadius:r,groupLabelTextColor:i,lineHeight:s,groupLabelBorder:o,[c("fontSize",t)]:u,[c("height",t)]:d}}=l.value;return{"--n-bezier":a,"--n-group-label-color":n,"--n-group-label-border":o,"--n-border-radius":r,"--n-group-label-text-color":i,"--n-font-size":u,"--n-line-height":s,"--n-height":d}})),i=n?f("input-group-label",d((()=>e.size[0])),r,e):void 0;return{mergedClsPrefix:a,mergedBordered:t,cssVars:n?void 0:r,themeClass:null==i?void 0:i.themeClass,onRender:null==i?void 0:i.onRender}},render(){var e,t,a;const{mergedClsPrefix:n}=this;return null===(e=this.onRender)||void 0===e||e.call(this),l("div",{class:[`${n}-input-group-label`,this.themeClass],style:this.cssVars},null===(a=(t=this.$slots).default)||void 0===a?void 0:a.call(t),this.mergedBordered?l("div",{class:`${n}-input-group-label__border`}):null)}});function Ae(e){const{from:t,to:a,duration:n,onUpdate:l,onFinish:r}=e,i=()=>{const e=performance.now(),o=Math.min(e-s,n),u=t+(a-t)*(d=o/n,1-Math.pow(1-d,5));var d;o!==n?(l(u),requestAnimationFrame(i)):r()},s=performance.now();i()}const Fe=n({name:"NumberAnimation",props:{to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},setup(e){const{localeRef:t}=p("name"),{duration:a}=e,n=v(e.from),l=d((()=>{const{locale:a}=e;return void 0!==a?a:t.value}));let r=!1;const i=e=>{n.value=e},s=()=>{var t;n.value=e.to,r=!1,null===(t=e.onFinish)||void 0===t||t.call(e)},o=(t=e.from,l=e.to)=>{r=!0,n.value=e.from,t!==l&&Ae({from:t,to:l,duration:a,onUpdate:i,onFinish:s})},u=d((()=>{var t;const a=ze(n.value,e.precision).toFixed(e.precision).split("."),r=new Intl.NumberFormat(l.value),i=null===(t=r.formatToParts(.5).find((e=>"decimal"===e.type)))||void 0===t?void 0:t.value;return{integer:e.showSeparator?r.format(Number(a[0])):a[0],decimal:a[1],decimalSeparator:i}}));m((()=>{g((()=>{e.active&&o()}))}));const c={play:function(){r||o()}};return Object.assign({formattedValue:u},c)},render(){const{formattedValue:{integer:e,decimal:t,decimalSeparator:a}}=this;return[e,t?a:null,t]}});function Re(e){return null==e||"string"==typeof e&&""===e.trim()?null:Number(e)}function Pe(e){return null==e||!Number.isNaN(e)}function Me(e,t){return null==e?"":void 0===t?String(e):e.toFixed(t)}function Ne(e){if(null===e)return null;if("number"==typeof e)return e;{const t=Number(e);return Number.isNaN(t)?null:t}}const je=b([r("input-number-suffix","\n display: inline-block;\n margin-right: 10px;\n "),r("input-number-prefix","\n display: inline-block;\n margin-left: 10px;\n ")]),Ue=n({name:"InputNumber",props:Object.assign(Object.assign({},o.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:a,mergedRtlRef:n}=s(e),l=o("InputNumber","-input-number",je,h,e,a),{localeRef:r}=p("InputNumber"),i=x(e),{mergedSizeRef:u,mergedDisabledRef:c,mergedStatusRef:f}=i,m=v(null),g=v(null),b=v(null),S=v(e.defaultValue),B=w(e,"value"),A=y(B,S),F=v(""),R=e=>{const t=String(e).split(".")[1];return t?t.length:0},P=k((()=>{const{placeholder:t}=e;return void 0!==t?t:r.value.placeholder})),j=k((()=>{const t=Ne(e.step);return null!==t?0===t?1:Math.abs(t):1})),U=k((()=>{const t=Ne(e.min);return null!==t?t:null})),V=k((()=>{const t=Ne(e.max);return null!==t?t:null})),O=t=>{const{value:a}=A;if(t===a)return void T();const{"onUpdate:value":n,onUpdateValue:l,onChange:r}=e,{nTriggerFormInput:s,nTriggerFormChange:o}=i;r&&M(r,t),l&&M(l,t),n&&M(n,t),S.value=t,s(),o()},$=({offset:t,doUpdateIfValid:a,fixPrecision:n,isInputing:l})=>{const{value:r}=F;if(l&&((i=r).includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(i)||/^\.\d+$/.test(i))))return!1;var i;const s=(e.parse||Re)(r);if(null===s)return a&&O(null),null;if(Pe(s)){const r=R(s),{precision:i}=e;if(void 0!==i&&i<r&&!n)return!1;let o=parseFloat((s+t).toFixed(null!=i?i:(t=>{const a=[e.min,e.max,e.step,t].map((e=>void 0===e?0:R(e)));return Math.max(...a)})(s)));if(Pe(o)){const{value:t}=V,{value:n}=U;if(null!==t&&o>t){if(!a||l)return!1;o=t}if(null!==n&&o<n){if(!a||l)return!1;o=n}return!(e.validator&&!e.validator(o))&&(a&&O(o),o)}}return!1},T=()=>{const{value:t}=A;if(Pe(t)){const{format:a,precision:n}=e;a?F.value=a(t):null===t||void 0===n||R(t)>n?F.value=Me(t,void 0):F.value=Me(t,n)}else F.value=String(t)};T();const D=k((()=>!1===$({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1}))),q=k((()=>{const{value:t}=A;if(e.validator&&null===t)return!1;const{value:a}=j;return!1!==$({offset:-a,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})})),L=k((()=>{const{value:t}=A;if(e.validator&&null===t)return!1;const{value:a}=j;return!1!==$({offset:+a,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})}));function E(){const{value:t}=L;if(!t)return void Q();const{value:a}=A;if(null===a)e.validator||O(W());else{const{value:e}=j;$({offset:e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function G(){const{value:t}=q;if(!t)return void Z();const{value:a}=A;if(null===a)e.validator||O(W());else{const{value:e}=j;$({offset:-e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const H=function(t){const{onFocus:a}=e,{nTriggerFormFocus:n}=i;a&&M(a,t),n()},K=function(t){var a,n;if(t.target===(null===(a=m.value)||void 0===a?void 0:a.wrapperElRef))return;const l=$({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(!1!==l){const e=null===(n=m.value)||void 0===n?void 0:n.inputElRef;e&&(e.value=String(l||"")),A.value===l&&T()}else T();const{onBlur:r}=e,{nTriggerFormBlur:s}=i;r&&M(r,t),s(),N((()=>{T()}))};function W(){if(e.validator)return null;const{value:t}=U,{value:a}=V;return null!==t?Math.max(0,t):null!==a?Math.min(0,a):0}let J=null,X=null,Y=null;function Z(){Y&&(window.clearTimeout(Y),Y=null),J&&(window.clearInterval(J),J=null)}function Q(){ee&&(window.clearTimeout(ee),ee=null),X&&(window.clearInterval(X),X=null)}let ee=null;C(A,(()=>{T()}));const te={focus:()=>{var e;return null===(e=m.value)||void 0===e?void 0:e.focus()},blur:()=>{var e;return null===(e=m.value)||void 0===e?void 0:e.blur()},select:()=>{var e;return null===(e=m.value)||void 0===e?void 0:e.select()}},ae=I("InputNumber",n,a);return Object.assign(Object.assign({},te),{rtlEnabled:ae,inputInstRef:m,minusButtonInstRef:g,addButtonInstRef:b,mergedClsPrefix:a,mergedBordered:t,uncontrolledValue:S,mergedValue:A,mergedPlaceholder:P,displayedValueInvalid:D,mergedSize:u,mergedDisabled:c,displayedValue:F,addable:L,minusable:q,mergedStatus:f,handleFocus:H,handleBlur:K,handleClear:function(t){!function(t){const{onClear:a}=e;a&&M(a,t)}(t),O(null)},handleMouseDown:function(e){var t,a,n;(null===(t=b.value)||void 0===t?void 0:t.$el.contains(e.target))&&e.preventDefault(),(null===(a=g.value)||void 0===a?void 0:a.$el.contains(e.target))&&e.preventDefault(),null===(n=m.value)||void 0===n||n.activate()},handleAddClick:()=>{X||E()},handleMinusClick:()=>{J||G()},handleAddMousedown:function(){Q(),ee=window.setTimeout((()=>{X=window.setInterval((()=>{E()}),100)}),800),_("mouseup",document,Q,{once:!0})},handleMinusMousedown:function(){Z(),Y=window.setTimeout((()=>{J=window.setInterval((()=>{G()}),100)}),800),_("mouseup",document,Z,{once:!0})},handleKeyDown:function(t){var a,n;if("Enter"===t.key){if(t.target===(null===(a=m.value)||void 0===a?void 0:a.wrapperElRef))return;!1!==$({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&(null===(n=m.value)||void 0===n||n.deactivate())}else if("ArrowUp"===t.key){if(!L.value)return;if(!1===e.keyboard.ArrowUp)return;t.preventDefault();!1!==$({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&E()}else if("ArrowDown"===t.key){if(!q.value)return;if(!1===e.keyboard.ArrowDown)return;t.preventDefault();!1!==$({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&G()}},handleUpdateDisplayedValue:function(t){F.value=t,!e.updateValueOnInput||e.format||e.parse||void 0!==e.precision||$({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})},mergedTheme:l,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:d((()=>{const{self:{iconColorDisabled:e}}=l.value,[t,a,n,r]=z(e);return{textColorTextDisabled:`rgb(${t}, ${a}, ${n})`,opacityDisabled:`${r}`}}))})},render(){const{mergedClsPrefix:e,$slots:t}=this,a=()=>l(R,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>A(t["minus-icon"],(()=>[l(F,{clsPrefix:e},{default:()=>l(Se,null)})]))}),n=()=>l(R,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>A(t["add-icon"],(()=>[l(F,{clsPrefix:e},{default:()=>l(P,null)})]))});return l("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},l(S,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var n;return this.showButton&&"both"===this.buttonPlacement?[a(),B(t.prefix,(t=>t?l("span",{class:`${e}-input-number-prefix`},t):null))]:null===(n=t.prefix)||void 0===n?void 0:n.call(t)},suffix:()=>{var r;return this.showButton?[B(t.suffix,(t=>t?l("span",{class:`${e}-input-number-suffix`},t):null)),"right"===this.buttonPlacement?a():null,n()]:null===(r=t.suffix)||void 0===r?void 0:r.call(t)}}))}}),Ve={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Oe=[V("path",{d:"M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),V("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M336 128l-80-80l-80 80"},null,-1),V("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 321V48"},null,-1)],$e=n({name:"ShareOutline",render:function(e,t){return j(),U("svg",Ve,Oe)}});const Te={class:"p-5 bg-white rounded dark:bg-slate-800"},De=V("span",{class:"text-lg"}," 提款申请表 ",-1),qe={class:"pt-5"},Le=n({__name:"drawMoneyDialog",props:{visible:{type:Boolean}},emits:["close","submit"],setup(e,{emit:t}){const a=t,n=v(null),l=T(),r=[{label:"支付宝",value:1},{label:"微信",value:2}],i=v({withdrawalAmount:null,withdrawalChannels:null,contactInformation:"",remark:""}),s=v(!1),o={withdrawalAmount:[{required:!0,message:"请填写你的提款金额！"}],withdrawalChannels:[{required:!0,message:"请选择你的提款渠道！"}],contactInformation:[{required:!0,message:"请填写您的联系方式并备注！",trigger:"blur"}],remark:[{required:!1,message:"如有特殊情况、请备注说明！",trigger:"blur"}]};function u(){var e;null==(e=n.value)||e.validate((async e=>{if(!e)try{s.value=!0;const{withdrawalAmount:e,withdrawalChannels:n,contactInformation:r,remark:o}=i.value;(await(t={withdrawalAmount:e,withdrawalChannels:n,contactInformation:r,remark:o},$({url:"/sales/appForMoney",data:t}))).success&&(l.success("申请提现成功、请耐心等待审核！"),i.value={withdrawalAmount:null,withdrawalChannels:null,contactInformation:"",remark:""},a("submit"),a("close")),s.value=!1}catch(n){s.value=!1}var t}))}function d(){}function c(){}function f(){a("close")}return(e,t)=>(j(),D(L(Z),{show:e.visible,style:{width:"90%","max-width":"500px"},"on-after-enter":d,"on-after-leave":c},{default:q((()=>[V("div",Te,[De,V("div",{class:"absolute top-3 right-3 cursor-pointer z-30",onClick:f},[E(L(H),{size:"20",color:"#0e7a0d"},{default:q((()=>[E(L(G))])),_:1})]),V("div",qe,[E(L(Y),{ref_key:"formRef",ref:n,model:i.value,rules:o,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",style:{maxWidth:"640px"}},{default:q((()=>[E(L(K),{path:"withdrawalAmount",label:"提款金额"},{default:q((()=>[E(L(Ue),{value:i.value.withdrawalAmount,"onUpdate:value":t[0]||(t[0]=e=>i.value.withdrawalAmount=e),class:"w-full",clearable:"",precision:2,placeholder:"请填写提款金额"},null,8,["value"])])),_:1}),E(L(K),{path:"withdrawalChannels",label:"提款渠道"},{default:q((()=>[E(L(W),{value:i.value.withdrawalChannels,"onUpdate:value":t[1]||(t[1]=e=>i.value.withdrawalChannels=e),placeholder:"请选择您的提款渠道！",options:r},null,8,["value"])])),_:1}),E(L(K),{path:"contactInformation",label:"联系方式"},{default:q((()=>[E(L(S),{value:i.value.contactInformation,"onUpdate:value":t[2]||(t[2]=e=>i.value.contactInformation=e),type:"textarea",rows:3,placeholder:"请填写你的联系方式"},null,8,["value"])])),_:1}),E(L(K),{path:"remark",label:"提款备注"},{default:q((()=>[E(L(S),{value:i.value.remark,"onUpdate:value":t[3]||(t[3]=e=>i.value.remark=e),type:"textarea",rows:3,placeholder:"请填写你的提款备注！"},null,8,["value"])])),_:1}),E(L(K),{class:"mt-3"},{default:q((()=>[E(L(J),{block:"",type:"primary",disabled:s.value,loading:s.value,onClick:u},{default:q((()=>[X(" 申 请 提 现 ")])),_:1},8,["disabled","loading"])])),_:1})])),_:1},8,["model"])])])])),_:1},8,["show"]))}}),Ee={class:"main bg-[#f8f8fb] min-h-screen bg-center dark:bg-[#1F1F38]"},Ge={class:"w-full bg-[#f78400] p-6 flex flex-col justify-between rounded shadow-xl relative"},He={class:"absolute right-4 top-6 font-bold text-base opacity-60 text-[#eee] flex"},Ke=["src"],We=V("h2",{class:"text-[#fff] font-bold text-xl"}," 我的推介 ",-1),Je={class:"leading-loose flex justify-between items-center py-5"},Xe={class:"text-[#fff]"},Ye={class:"font-bold text-4xl"},Ze=V("span",{class:"ml-3"},"元",-1),Qe=["src"],et={class:"flex justify-between text-[#fff] items-center"},tt={class:"flex flex-col"},at={class:"flex items-end"},nt={class:"font-bold text-xl"},lt=V("span",{class:"ml-2"},"元",-1),rt=V("div",null,"剩余可提金额",-1),it={class:"flex flex-col"},st={class:"flex items-end"},ot={class:"font-bold text-xl"},ut=V("span",{class:"ml-2"},"元",-1),dt=V("div",null,"提现中金额",-1),ct={class:"flex flex-col bg-[#fff] mt-5 rounded dark:bg-[#313155] px-2"},ft={class:"flex p-4 justify-between border-b dark:border-[#3a3a40]"},pt={class:"flex item-center"},vt=V("span",{class:"ml-2"},"购买订单数量",-1),mt={class:"text-base"},gt={class:"flex p-4 justify-between border-b dark:border-[#3a3a40]"},bt={class:"flex item-center"},ht=V("span",{class:"ml-2"},"推广链接访问次数",-1),xt={class:"text-base"},wt={class:"flex p-4 justify-between"},yt={class:"flex item-center"},kt=V("span",{class:"ml-2"},"注册用户",-1),Ct={class:"text-base"},It={class:"flex flex-col bg-[#fff] mt-5 rounded dark:bg-[#313155] px-2"},zt={class:"py-6 px-4 flex justify-between items-center"},St=V("div",{class:"flex flex-col"},[V("h3",{class:"text-base"}," 推介收益 "),V("div",{class:"text-[#999] text-xs mt-2"}," 推介的用户注册购买产品后返佣金额 ")],-1),Bt={class:"py-6 px-4 flex justify-between items-center"},_t=V("div",{class:"flex flex-col"},[V("h3",{class:"text-base"}," 申请成为高级代理 "),V("div",{class:"text-[#999] text-xs mt-2"}," 联系站长申请高级代理可享超高返佣 ")],-1),At={class:"py-6 px-4 flex justify-between items-center"},Ft=V("div",{class:"flex flex-col"},[V("h3",{class:"text-base"}," 加入我们成为合伙人 "),V("div",{class:"text-[#999] text-xs mt-2"}," 加入我们成为合伙人共同运营社区、合作双赢！ ")],-1),Rt={class:"bg-[#fff] dark:bg-[#313155] p-5 rounded flex"},Pt={class:"w-full flex"},Mt={class:"mt-5 bg-[#fff] p-5 dark:bg-[#313155]"},Nt={class:"pt-5"},jt={class:"pt-5"},Ut={class:"pt-5"},Vt={class:"p-4 bg-white rounded dark:bg-slate-800"},Ot={class:"flex text-base mb-[20px] bg-currentflex items-center"},$t=V("span",{class:"ml-[8px] mt-2"},"邀好友、赠套餐卡密、享充值返佣！",-1),Tt={class:"w-full flex mb-5 px-6"},Dt=V("div",null,"复制",-1),qt={class:"flex justify-center items-center"},Lt={class:"flex flex-col p-5 justify-center"},Et=V("span",{class:"text-center"}," 1. 邀请好友双方都可享受一定额度的永久次卡奖励 ",-1),Gt={class:"text-center"},Ht=n({__name:"index",setup(e){const t=v({distributionBalance:0,drawMoneyIn:0,id:0,inviteCount:0,inviteLinkCount:0,orderCount:0,performanceRatio:0,salesOutletName:"",totalAmount:0,withdrawalAmount:0}),a=v(!1),n=v(!1),r=v([]),i=v([]),s=Q(),o=d((()=>s.globalConfig)),u=d((()=>{var e,t;return(null==(e=o.value)?void 0:e.salesBaseRatio)?Number(null==(t=o.value)?void 0:t.salesBaseRatio):10})),c=d((()=>{var e,t;return(null==(e=o.value)?void 0:e.salesSeniorRatio)?Number(null==(t=o.value)?void 0:t.salesSeniorRatio):10})),f=v(null),p=v("rec"),g=d((()=>s.userInfo.inviteCode)),b=d((()=>{let e=`${window.location.protocol}//${window.location.hostname}`;return window.location.port&&(e+=`:${window.location.port}`),e})),h=d((()=>g.value?`${b.value}?inVitecode=${g.value}`:"**************")),x=T(),w=v(null);ee(),v([]);const y=v(null);v({pageSize:23});const k=v([]),C=v(!1),I=v(!1),z=v(!1),B=te({page:1,pageSize:10,itemCount:0,showSizePicker:!0,pageSizes:[10,20,50],onChange:e=>{B.page=e,D()},onUpdatePageSize:e=>{B.pageSize=e,B.page=1,D()}}),_=te({page:1,pageSize:10,itemCount:0,showSizePicker:!0,pageSizes:[10,20,50],onChange:e=>{_.page=e,D()},onUpdatePageSize:e=>{_.pageSize=e,_.page=1,D()}}),A=te({page:1,pageSize:10,itemCount:0,showSizePicker:!0,pageSizes:[10,20,50],onChange:e=>{A.page=e,xe()},onUpdatePageSize:e=>{A.pageSize=e,A.page=1,xe()}}),F=v([{title:"订单金额",align:"center",orderPrice:"address",render:e=>`￥${e.orderPrice}元`},{align:"center",title:"商品类型",key:"tags",render:e=>"购买套餐"},{align:"center",title:"状态",key:"status",render:e=>l(ie,{type:"success",size:"small",round:!0},(()=>"已入账"))},{align:"center",title:"佣金比例",key:"commissionAmount",render:e=>`${e.commissionPercentage}%`},{align:"center",title:"佣金",key:"commissionAmount",render:e=>`￥${e.commissionAmount}元`},{align:"center",title:"订购时间",key:"createdAt"}]);function R(){p.value="drawMoney",N(),K()}async function P(){const e=await se();if(!e.data)return x.error(e.message);x.success("生成邀请码成功"),s.getUserInfo()}function M(){n.value=!0}async function N(){const e=await O({url:"/sales/mineAccount"});t.value=e.data}function $(e){"drawMoney"===e&&K(),"rec"===e&&D(),"register"===e&&xe()}async function D(){try{C.value=!0;const t=await(e={page:B.page,size:B.pageSize},O({url:"/sales/mineRecords",data:e}));r.value=t.data.rows,B.itemCount=t.data.count,C.value=!1}catch(t){C.value=!1}var e}async function K(){try{I.value=!0;const t=await(e={page:_.page,size:_.pageSize},O({url:"/sales/drawMoneyOrder",data:e}));_.itemCount=t.data.count,i.value=t.data.rows,I.value=!1}catch(t){I.value=!1}var e}const W=v([{title:"提现时间",key:"createdAt",align:"center"},{title:"提现金额",key:"withdrawalAmount",align:"center"},{title:"提现渠道",key:"withdrawalChannels",align:"center",render:e=>l(ie,{type:1===e.withdrawalChannels?"info":"success",size:"small",round:!0},(()=>1===e.withdrawalChannels?"支付宝":"微信"))},{title:"提现状态",key:"paymentStatus",render:e=>l(ie,{type:1===e.paymentStatus?"success":-1===e.paymentStatus?"error":"info",size:"small",round:!0},(()=>1===e.paymentStatus?"已打款":-1===e.paymentStatus?"被拒绝":"审核中"))},{title:"提现备注",key:"contactInformation",align:"center",render:e=>` ${(null==e?void 0:e.contactInformation)||"---"} `},{title:"审核人",key:"auditUserId",align:"center",render:e=>` ${(null==e?void 0:e.auditUserName)||"---"} `}]),J=v([{title:"头像",align:"center",key:"avatar",render:e=>l(oe,{src:e.avatar,round:!0,size:38,border:!0})},{align:"center",title:"用户名",key:"username"},{align:"center",title:"邮箱",key:"email"},{title:"受邀人状态",align:"center",key:"status",render:e=>l(ie,{type:1===e.status?"success":"error",size:"small",round:!0},(()=>1===e.status?"已注册":"待激活"))},{title:"注册时间",align:"center",key:"createdAt"},{title:"最后登录",align:"center",key:"updatedAt"}]),{isMobile:Y}=ae();async function xe(){try{z.value=!0;const e=await ue({page:A.page,size:A.pageSize});k.value=e.data.rows,A.itemCount=e.data.count,z.value=!1}catch(e){z.value=!1}}function we(){if(!g.value)return x.error("请先申请你的邀请码");be({text:h.value}),x.success("复制推荐链接成功");const e=w.value,t=document.createRange(),a=window.getSelection();t.selectNodeContents(e),a.removeAllRanges(),a.addRange(t)}return m((()=>{var e;null==(e=y.value)||e.play(),N(),D()})),(e,l)=>{var s,d,v,m,b,x,N,O;return j(),U("div",Ee,[E(L(ge),{class:ne([L(Y)?"px-3":"px-14"]),title:"推介计划",des:"加入我们，共享成功！欢迎来到我们的分销页面，成为我们的合作伙伴，一同开创美好未来！"},null,8,["class"]),V("div",{class:ne(["flex-1 flex-wrap py-5 flex justify-between",[L(Y)?"px-3":"px-20"]])},[V("div",{class:ne(["px-[12px] min-w-[350px]",[L(Y)?"w-full":"w-1/3"]])},[V("div",Ge,[V("div",He,[X(le((null==(s=t.value)?void 0:s.salesOutletName)||"新秀推荐官")+" ",1),V("img",{src:L("/static/png/badge-4a5770f0.png"),class:"ml-2 w-6 h-6 opacity-50"},null,8,Ke)]),We,V("div",Je,[V("div",Xe,[V("span",Ye,[E(L(Fe),{ref_key:"numberAnimationInstRef",ref:y,from:0,to:Number(null==(d=t.value)?void 0:d.totalAmount),active:!0,precision:2},null,8,["to"])]),Ze]),V("img",{src:L("/static/png/qianbao-77758046.png"),class:"w-20 opacity-10",alt:""},null,8,Qe)]),V("div",et,[V("div",tt,[V("div",at,[V("span",nt,le((null==(v=t.value)?void 0:v.distributionBalance)||0),1),lt]),rt]),V("div",it,[V("div",st,[V("span",ot,le((null==(m=t.value)?void 0:m.drawMoneyIn)||0),1),ut]),dt]),V("div",null,[E(L(de),{placement:"top",trigger:"hover",delay:(null==(b=t.value)?void 0:b.distributionBalance)>10?800:200},{trigger:q((()=>{var e;return[V("div",{class:ne(["btn",[(null==(e=t.value)?void 0:e.distributionBalance)<Number(u.value)?"disabled":""]]),onClick:l[0]||(l[0]=e=>a.value=!0)}," 立即提现 ",2)]})),default:q((()=>{var e;return[V("span",null,"最低"+le(Number(null==(e=o.value)?void 0:e.salesAllowDrawMoney)||10)+"元可提现!",1)]})),_:1},8,["delay"])])])]),V("div",ct,[V("div",ft,[V("div",pt,[E(L(ce),{class:"text-lg",icon:"icon-park-outline:order"}),vt]),V("b",mt,le((null==(x=t.value)?void 0:x.orderCount)||0),1)]),V("div",gt,[V("div",bt,[E(L(ce),{class:"text-lg",icon:"ep:link"}),ht]),V("b",xt,le((null==(N=t.value)?void 0:N.inviteLinkCount)||0),1)]),V("div",wt,[V("div",yt,[E(L(ce),{class:"text-lg",icon:"ph:user"}),kt]),V("b",Ct,le((null==(O=t.value)?void 0:O.inviteCount)||0),1)])]),V("div",It,[V("div",zt,[St,E(L(ie),{round:"",bordered:!1,type:"success",size:"small"},{default:q((()=>[X(" 百分比"+le(u.value)+"% ",1)])),_:1})]),V("div",Bt,[_t,E(L(ie),{round:"",bordered:!1,type:"success",size:"small"},{default:q((()=>[X(" 百分比"+le(c.value)+"% ",1)])),_:1})]),V("div",At,[Ft,E(L(ie),{round:"",bordered:!1,type:"error",size:"small"},{default:q((()=>[X(" 合作共赢，携手共进 ")])),_:1})])])],2),V("div",{class:ne(["px-[12px]",[L(Y)?"w-full":"w-2/3"]])},[V("div",Rt,[V("div",Pt,[V("div",{class:ne(["border border-[ced4da] dark:border-[#3a3a40] text-sm py-1 rounded-l-md flex items-center",[L(Y)?"px-1":"px-3"]])}," 推荐链接： ",2),V("div",{ref_key:"selectable",ref:w,class:"bg-[#fafafa] dark:bg-[#2D2D4F] flex-1 flex items-center dark:border-[#ffffff17] border-b border-t pl-4 max-w-[500px] select-text overflow-x-hidden whitespace-nowrap"},le(h.value),513),g.value?re("",!0):(j(),U("div",{key:0,class:ne([[L(Y)?"px-2":"px-5"],"cursor-pointer hover:text-[#5A91FC] transition-all border dark:border-[#ffffff17] flex items-center mr-[-1px] select-none"]),onClick:P}," 申请 ",2)),g.value?(j(),U("div",{key:1,class:ne([[L(Y)?"px-2":"px-5"],"cursor-pointer hover:text-[#5A91FC] transition-all border dark:border-[#ffffff17] flex items-center mr-[-1px]"])},[E(L(ce),{class:"text-lg",icon:"fluent:document-copy-48-regular",onClick:we})],2)):re("",!0),!L(Y)&&g.value?(j(),U("div",{key:2,class:"cursor-pointer hover:text-[#5A91FC] transition-all border dark:border-[#ffffff17] flex items-center px-5 bg-currentrounded-r-md",onClick:M},[E(L(ce),{class:"text-lg",icon:"la:qrcode"})])):re("",!0)])]),V("div",Mt,[E(L(ve),{ref_key:"tabRef",ref:f,value:p.value,"onUpdate:value":[l[1]||(l[1]=e=>p.value=e),$],"bar-width":338,animated:"","justify-content":"space-evenly",type:"line"},{default:q((()=>[E(L(fe),{name:"rec",tab:"推介记录"},{default:q((()=>[V("div",Nt,[E(L(pe),{"min-width":200,loading:C.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:F.value,data:r.value,pagination:B,"scroll-x":700},null,8,["loading","columns","data","pagination"])])])),_:1}),E(L(fe),{name:"drawMoney",tab:"提现记录"},{default:q((()=>[V("div",jt,[E(L(pe),{loading:I.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:W.value,data:i.value,pagination:_,"scroll-x":500},null,8,["loading","columns","data","pagination"])])])),_:1}),E(L(fe),{name:"register",tab:"注册用户"},{default:q((()=>[V("div",Ut,[E(L(pe),{loading:z.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:J.value,data:k.value,pagination:A,"scroll-x":500},null,8,["loading","columns","data","pagination"])])])),_:1})])),_:1},8,["value"])]),E(Le,{visible:a.value,onClose:l[2]||(l[2]=e=>a.value=!1),onSubmit:R},null,8,["visible"])],2)],2),E(L(Z),{show:n.value,style:{width:"90%","max-width":"420px"}},{default:q((()=>[V("div",Vt,[V("div",{class:"flex justify-between",onClick:l[3]||(l[3]=e=>n.value=!1)},[V("div",Ot,[E(L(H),{size:"22",color:"#0e7a0d"},{default:q((()=>[E(L($e))])),_:1}),$t]),E(L(H),{size:"20",color:"#0e7a0d",class:"cursor-pointer"},{default:q((()=>[E(L(G))])),_:1})]),V("div",Tt,[E(L(he),null,{default:q((()=>[E(L(_e),{size:"small"},{default:q((()=>[X(" 邀请链接 ")])),_:1}),E(L(S),{size:"small",style:{flex:1},value:h.value},null,8,["value"]),E(L(_e),{size:"small",onClick:we},{default:q((()=>[Dt])),_:1})])),_:1})]),V("div",qt,[E(me,{value:h.value,size:240},null,8,["value"])]),V("div",Lt,[Et,V("span",Gt," 2. 邀请好友充值，您可获得充值金额的"+le(u.value||10)+"%返佣 ",1)])])])),_:1},8,["show"])])}}});export{Ht as default};
