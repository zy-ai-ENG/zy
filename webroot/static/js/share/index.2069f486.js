import{cn as e,co as a,cp as t,d as n,c6 as l,c2 as r,c4 as i,ch as s,c9 as o,cq as u,c as d,cr as c,cj as f,cs as p,y as v,z as m,ct as g,c5 as b,cu as h,cv as x,cd as w,cc as y,cw as k,U as C,cx as I,cy as z,ac as S,cz as B,cA as _,cB as A,c7 as F,cC as P,cD as R,cm as N,q as M,o as U,i as j,j as V,ak as O,bb as D,u as T,k as $,w as q,h as L,n as E,bm as G,P as H,bo as K,a8 as W,N as Y,Y as J,bn as Q,a9 as X,C as Z,D as ee,E as ae,b as te,v as ne,G as le,g as re,K as ie,m as se,l as oe,cE as ue,cF as de,H as ce,cG as fe,p as pe,_ as ve,ap as me,cH as ge,aq as be,cI as he}from"../main-292673a3.js";import{_ as xe}from"../titleBar.vue_vue_type_script_setup_true_lang/titleBar.vue_vue_type_script_setup_true_lang.17c81a7c.js";import{c as we}from"../index/index.a4f65e28.js";import{N as ye}from"../InputGroup/InputGroup.f073d763.js";var ke=1/0,Ce=17976931348623157e292;function Ie(a){var t=function(a){return a?(a=e(a))===ke||a===-ke?(a<0?-1:1)*Ce:a==a?a:0:0===a?a:0}(a),n=t%1;return t==t?n?t-n:t:0}var ze,Se=a.isFinite,Be=Math.min;const _e=(ze=Math["round"],function(a,n){if(a=e(a),(n=null==n?0:Be(Ie(n),292))&&Se(a)){var l=(t(a)+"e").split("e"),r=ze(l[0]+"e"+(+l[1]+n));return+((l=(t(r)+"e").split("e"))[0]+"e"+(+l[1]-n))}return ze(a)}),Ae=n({name:"Remove",render:()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:"\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "}))}),Fe=r("input-group-label","\n position: relative;\n user-select: none;\n -webkit-user-select: none;\n box-sizing: border-box;\n padding: 0 12px;\n display: inline-block;\n border-radius: var(--n-border-radius);\n background-color: var(--n-group-label-color);\n color: var(--n-group-label-text-color);\n font-size: var(--n-font-size);\n line-height: var(--n-height);\n height: var(--n-height);\n flex-shrink: 0;\n white-space: nowrap;\n transition: \n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n",[i("border","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-group-label-border);\n transition: border-color .3s var(--n-bezier);\n ")]),Pe=n({name:"InputGroupLabel",props:Object.assign(Object.assign({},o.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),setup(e){const{mergedBorderedRef:a,mergedClsPrefixRef:t,inlineThemeDisabled:n}=s(e),l=o("Input","-input-group-label",Fe,u,e,t),r=d((()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:t},self:{groupLabelColor:n,borderRadius:r,groupLabelTextColor:i,lineHeight:s,groupLabelBorder:o,[c("fontSize",a)]:u,[c("height",a)]:d}}=l.value;return{"--n-bezier":t,"--n-group-label-color":n,"--n-group-label-border":o,"--n-border-radius":r,"--n-group-label-text-color":i,"--n-font-size":u,"--n-line-height":s,"--n-height":d}})),i=n?f("input-group-label",d((()=>e.size[0])),r,e):void 0;return{mergedClsPrefix:t,mergedBordered:a,cssVars:n?void 0:r,themeClass:null==i?void 0:i.themeClass,onRender:null==i?void 0:i.onRender}},render(){var e,a,t;const{mergedClsPrefix:n}=this;return null===(e=this.onRender)||void 0===e||e.call(this),l("div",{class:[`${n}-input-group-label`,this.themeClass],style:this.cssVars},null===(t=(a=this.$slots).default)||void 0===t?void 0:t.call(a),this.mergedBordered?l("div",{class:`${n}-input-group-label__border`}):null)}});function Re(e){const{from:a,to:t,duration:n,onUpdate:l,onFinish:r}=e,i=()=>{const e=performance.now(),o=Math.min(e-s,n),u=a+(t-a)*(d=o/n,1-Math.pow(1-d,5));var d;o!==n?(l(u),requestAnimationFrame(i)):r()},s=performance.now();i()}const Ne=n({name:"NumberAnimation",props:{to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},setup(e){const{localeRef:a}=p("name"),{duration:t}=e,n=v(e.from),l=d((()=>{const{locale:t}=e;return void 0!==t?t:a.value}));let r=!1;const i=e=>{n.value=e},s=()=>{var a;n.value=e.to,r=!1,null===(a=e.onFinish)||void 0===a||a.call(e)},o=(a=e.from,l=e.to)=>{r=!0,n.value=e.from,a!==l&&Re({from:a,to:l,duration:t,onUpdate:i,onFinish:s})},u=d((()=>{var a;const t=_e(n.value,e.precision).toFixed(e.precision).split("."),r=new Intl.NumberFormat(l.value),i=null===(a=r.formatToParts(.5).find((e=>"decimal"===e.type)))||void 0===a?void 0:a.value;return{integer:e.showSeparator?r.format(Number(t[0])):t[0],decimal:t[1],decimalSeparator:i}}));m((()=>{g((()=>{e.active&&o()}))}));const c={play:function(){r||o()}};return Object.assign({formattedValue:u},c)},render(){const{formattedValue:{integer:e,decimal:a,decimalSeparator:t}}=this;return[e,a?t:null,a]}});function Me(e){return null==e||"string"==typeof e&&""===e.trim()?null:Number(e)}function Ue(e){return null==e||!Number.isNaN(e)}function je(e,a){return null==e?"":void 0===a?String(e):e.toFixed(a)}function Ve(e){if(null===e)return null;if("number"==typeof e)return e;{const a=Number(e);return Number.isNaN(a)?null:a}}const Oe=b([r("input-number-suffix","\n display: inline-block;\n margin-right: 10px;\n "),r("input-number-prefix","\n display: inline-block;\n margin-left: 10px;\n ")]),De=n({name:"InputNumber",props:Object.assign(Object.assign({},o.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),setup(e){const{mergedBorderedRef:a,mergedClsPrefixRef:t,mergedRtlRef:n}=s(e),l=o("InputNumber","-input-number",Oe,h,e,t),{localeRef:r}=p("InputNumber"),i=x(e),{mergedSizeRef:u,mergedDisabledRef:c,mergedStatusRef:f}=i,m=v(null),g=v(null),b=v(null),S=v(e.defaultValue),B=w(e,"value"),A=y(B,S),F=v(""),P=e=>{const a=String(e).split(".")[1];return a?a.length:0},R=k((()=>{const{placeholder:a}=e;return void 0!==a?a:r.value.placeholder})),U=k((()=>{const a=Ve(e.step);return null!==a?0===a?1:Math.abs(a):1})),j=k((()=>{const a=Ve(e.min);return null!==a?a:null})),V=k((()=>{const a=Ve(e.max);return null!==a?a:null})),O=a=>{const{value:t}=A;if(a===t)return void T();const{"onUpdate:value":n,onUpdateValue:l,onChange:r}=e,{nTriggerFormInput:s,nTriggerFormChange:o}=i;r&&N(r,a),l&&N(l,a),n&&N(n,a),S.value=a,s(),o()},D=({offset:a,doUpdateIfValid:t,fixPrecision:n,isInputing:l})=>{const{value:r}=F;if(l&&((i=r).includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(i)||/^\.\d+$/.test(i))))return!1;var i;const s=(e.parse||Me)(r);if(null===s)return t&&O(null),null;if(Ue(s)){const r=P(s),{precision:i}=e;if(void 0!==i&&i<r&&!n)return!1;let o=parseFloat((s+a).toFixed(null!=i?i:(a=>{const t=[e.min,e.max,e.step,a].map((e=>void 0===e?0:P(e)));return Math.max(...t)})(s)));if(Ue(o)){const{value:a}=V,{value:n}=j;if(null!==a&&o>a){if(!t||l)return!1;o=a}if(null!==n&&o<n){if(!t||l)return!1;o=n}return!(e.validator&&!e.validator(o))&&(t&&O(o),o)}}return!1},T=()=>{const{value:a}=A;if(Ue(a)){const{format:t,precision:n}=e;t?F.value=t(a):null===a||void 0===n||P(a)>n?F.value=je(a,void 0):F.value=je(a,n)}else F.value=String(a)};T();const $=k((()=>!1===D({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1}))),q=k((()=>{const{value:a}=A;if(e.validator&&null===a)return!1;const{value:t}=U;return!1!==D({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})})),L=k((()=>{const{value:a}=A;if(e.validator&&null===a)return!1;const{value:t}=U;return!1!==D({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})}));function E(){const{value:a}=L;if(!a)return void Z();const{value:t}=A;if(null===t)e.validator||O(W());else{const{value:e}=U;D({offset:e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function G(){const{value:a}=q;if(!a)return void X();const{value:t}=A;if(null===t)e.validator||O(W());else{const{value:e}=U;D({offset:-e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const H=function(a){const{onFocus:t}=e,{nTriggerFormFocus:n}=i;t&&N(t,a),n()},K=function(a){var t,n;if(a.target===(null===(t=m.value)||void 0===t?void 0:t.wrapperElRef))return;const l=D({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(!1!==l){const e=null===(n=m.value)||void 0===n?void 0:n.inputElRef;e&&(e.value=String(l||"")),A.value===l&&T()}else T();const{onBlur:r}=e,{nTriggerFormBlur:s}=i;r&&N(r,a),s(),M((()=>{T()}))};function W(){if(e.validator)return null;const{value:a}=j,{value:t}=V;return null!==a?Math.max(0,a):null!==t?Math.min(0,t):0}let Y=null,J=null,Q=null;function X(){Q&&(window.clearTimeout(Q),Q=null),Y&&(window.clearInterval(Y),Y=null)}function Z(){ee&&(window.clearTimeout(ee),ee=null),J&&(window.clearInterval(J),J=null)}let ee=null;C(A,(()=>{T()}));const ae={focus:()=>{var e;return null===(e=m.value)||void 0===e?void 0:e.focus()},blur:()=>{var e;return null===(e=m.value)||void 0===e?void 0:e.blur()},select:()=>{var e;return null===(e=m.value)||void 0===e?void 0:e.select()}},te=I("InputNumber",n,t);return Object.assign(Object.assign({},ae),{rtlEnabled:te,inputInstRef:m,minusButtonInstRef:g,addButtonInstRef:b,mergedClsPrefix:t,mergedBordered:a,uncontrolledValue:S,mergedValue:A,mergedPlaceholder:R,displayedValueInvalid:$,mergedSize:u,mergedDisabled:c,displayedValue:F,addable:L,minusable:q,mergedStatus:f,handleFocus:H,handleBlur:K,handleClear:function(a){!function(a){const{onClear:t}=e;t&&N(t,a)}(a),O(null)},handleMouseDown:function(e){var a,t,n;(null===(a=b.value)||void 0===a?void 0:a.$el.contains(e.target))&&e.preventDefault(),(null===(t=g.value)||void 0===t?void 0:t.$el.contains(e.target))&&e.preventDefault(),null===(n=m.value)||void 0===n||n.activate()},handleAddClick:()=>{J||E()},handleMinusClick:()=>{Y||G()},handleAddMousedown:function(){Z(),ee=window.setTimeout((()=>{J=window.setInterval((()=>{E()}),100)}),800),_("mouseup",document,Z,{once:!0})},handleMinusMousedown:function(){X(),Q=window.setTimeout((()=>{Y=window.setInterval((()=>{G()}),100)}),800),_("mouseup",document,X,{once:!0})},handleKeyDown:function(a){var t,n;if("Enter"===a.key){if(a.target===(null===(t=m.value)||void 0===t?void 0:t.wrapperElRef))return;!1!==D({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&(null===(n=m.value)||void 0===n||n.deactivate())}else if("ArrowUp"===a.key){if(!L.value)return;if(!1===e.keyboard.ArrowUp)return;a.preventDefault();!1!==D({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&E()}else if("ArrowDown"===a.key){if(!q.value)return;if(!1===e.keyboard.ArrowDown)return;a.preventDefault();!1!==D({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&G()}},handleUpdateDisplayedValue:function(a){F.value=a,!e.updateValueOnInput||e.format||e.parse||void 0!==e.precision||D({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})},mergedTheme:l,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:d((()=>{const{self:{iconColorDisabled:e}}=l.value,[a,t,n,r]=z(e);return{textColorTextDisabled:`rgb(${a}, ${t}, ${n})`,opacityDisabled:`${r}`}}))})},render(){const{mergedClsPrefix:e,$slots:a}=this,t=()=>l(P,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>A(a["minus-icon"],(()=>[l(F,{clsPrefix:e},{default:()=>l(Ae,null)})]))}),n=()=>l(P,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>A(a["add-icon"],(()=>[l(F,{clsPrefix:e},{default:()=>l(R,null)})]))});return l("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},l(S,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var n;return this.showButton&&"both"===this.buttonPlacement?[t(),B(a.prefix,(a=>a?l("span",{class:`${e}-input-number-prefix`},a):null))]:null===(n=a.prefix)||void 0===n?void 0:n.call(a)},suffix:()=>{var r;return this.showButton?[B(a.suffix,(a=>a?l("span",{class:`${e}-input-number-suffix`},a):null)),"right"===this.buttonPlacement?t():null,n()]:null===(r=a.suffix)||void 0===r?void 0:r.call(a)}}))}}),Te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$e=[V("path",{d:"M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),V("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M336 128l-80-80l-80 80"},null,-1),V("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 321V48"},null,-1)],qe=n({name:"ShareOutline",render:function(e,a){return U(),j("svg",Te,$e)}});const Le={class:"p-5 bg-white rounded"},Ee=(e=>(Z("data-v-3c73927f"),e=e(),ee(),e))((()=>V("span",{class:"text-lg"}," 提款申请表 ",-1))),Ge={class:"pt-5"},He={class:"dark:bg-[#010102] bg-[#f4f4f4] w-full"},Ke={class:"dark:bg-[#010102] bg-[#f4f4f4] w-full"},We={class:"dark:bg-[#010102] bg-[#f4f4f4] w-full"},Ye={class:"dark:bg-[#010102] bg-[#f4f4f4] w-full"},Je=ae(n({__name:"drawMoneyDialog",props:{visible:{type:Boolean}},emits:["close","submit"],setup(e,{emit:a}){const t=a,n=v(null),l=T(),r=[{label:"支付宝",value:1},{label:"微信",value:2}],i=v({withdrawalAmount:null,withdrawalChannels:null,contactInformation:"",remark:""}),s=v(!1),o={withdrawalAmount:[{required:!0,message:"请填写你的提款金额！"}],withdrawalChannels:[{required:!0,message:"请选择你的提款渠道！"}],contactInformation:[{required:!0,message:"请填写您的联系方式并备注！",trigger:"blur"}],remark:[{required:!1,message:"如有特殊情况、请备注说明！",trigger:"blur"}]};function u(){var e;null==(e=n.value)||e.validate((async e=>{if(!e)try{s.value=!0;const{withdrawalAmount:e,withdrawalChannels:n,contactInformation:r,remark:o}=i.value;(await(a={withdrawalAmount:e,withdrawalChannels:n,contactInformation:r,remark:o},D({url:"/sales/appForMoney",data:a}))).success&&(l.success("申请提现成功、请耐心等待审核！"),i.value={withdrawalAmount:null,withdrawalChannels:null,contactInformation:"",remark:""},t("submit"),t("close")),s.value=!1}catch(n){s.value=!1}var a}))}function d(){}function c(){}function f(){t("close")}return(e,a)=>(U(),$(L(X),{class:"dark:bg-[#15171A] bg-[#FFFFFF]",show:e.visible,style:{width:"90%","max-width":"500px"},"on-after-enter":d,"on-after-leave":c},{default:q((()=>[V("div",Le,[Ee,V("div",{class:"absolute top-3 right-3 cursor-pointer z-30",onClick:f},[E(L(H),{size:"20",color:"#0e7a0d"},{default:q((()=>[E(L(G))])),_:1})]),V("div",Ge,[E(L(Q),{ref_key:"formRef",ref:n,model:i.value,rules:o,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",style:{maxWidth:"640px"}},{default:q((()=>[E(L(K),{path:"withdrawalAmount",label:"提款金额"},{default:q((()=>[V("div",He,[E(L(De),{value:i.value.withdrawalAmount,"onUpdate:value":a[0]||(a[0]=e=>i.value.withdrawalAmount=e),class:"w-full",clearable:"",precision:2,placeholder:"请填写提款金额"},null,8,["value"])])])),_:1}),E(L(K),{path:"withdrawalChannels",label:"提款渠道"},{default:q((()=>[V("div",Ke,[E(L(W),{value:i.value.withdrawalChannels,"onUpdate:value":a[1]||(a[1]=e=>i.value.withdrawalChannels=e),placeholder:"请选择您的提款渠道！",options:r},null,8,["value"])])])),_:1}),E(L(K),{path:"contactInformation",label:"联系方式"},{default:q((()=>[V("div",We,[E(L(S),{value:i.value.contactInformation,"onUpdate:value":a[2]||(a[2]=e=>i.value.contactInformation=e),type:"textarea",rows:3,placeholder:"请填写你的联系方式"},null,8,["value"])])])),_:1}),E(L(K),{path:"remark",label:"提款备注"},{default:q((()=>[V("div",Ye,[E(L(S),{value:i.value.remark,"onUpdate:value":a[3]||(a[3]=e=>i.value.remark=e),type:"textarea",rows:3,placeholder:"请填写你的提款备注！"},null,8,["value"])])])),_:1}),E(L(K),{class:"mt-3"},{default:q((()=>[E(L(Y),{block:"",type:"primary",disabled:s.value,loading:s.value,onClick:u},{default:q((()=>[J(" 申 请 提 现 ")])),_:1},8,["disabled","loading"])])),_:1})])),_:1},8,["model"])])])])),_:1},8,["show"]))}}),[["__scopeId","data-v-3c73927f"]]),Qe={style:{"margin-top":"20px"},class:"main bg-[#F4F4F4] bg-center dark:bg-[#010102]"},Xe={class:"w-full bg-[#f78400] p-6 flex flex-col justify-between rounded shadow-xl relative"},Ze={class:"absolute right-4 top-6 font-bold text-base opacity-60 text-[#eee] flex"},ea=["src"],aa=V("h2",{class:"text-[#fff] font-bold text-xl"}," 我的推介 ",-1),ta={class:"leading-loose flex justify-between items-center py-5"},na={class:"text-[#fff]"},la={class:"font-bold text-4xl"},ra=V("span",{class:"ml-3"},"元",-1),ia=["src"],sa={class:"flex justify-between text-[#fff] items-center"},oa={class:"flex flex-col"},ua={class:"flex items-end"},da={class:"font-bold text-xl"},ca=V("span",{class:"ml-2"},"元",-1),fa=V("div",null,"剩余可提金额",-1),pa={class:"flex flex-col"},va={class:"flex items-end"},ma={class:"font-bold text-xl"},ga=V("span",{class:"ml-2"},"元",-1),ba=V("div",null,"提现中金额",-1),ha={class:"flex flex-col bg-[#fff] mt-5 rounded dark:bg-[#15171A] px-2"},xa={class:"flex p-4 justify-between border-b dark:border-[#3a3a40]"},wa={class:"flex item-center"},ya=V("span",{class:"ml-2"},"购买订单数量",-1),ka={class:"text-base"},Ca={class:"flex p-4 justify-between border-b dark:border-[#3a3a40]"},Ia={class:"flex item-center"},za=V("span",{class:"ml-2"},"推广链接访问次数",-1),Sa={class:"text-base"},Ba={class:"flex p-4 justify-between"},_a={class:"flex item-center"},Aa=V("span",{class:"ml-2"},"注册用户",-1),Fa={class:"text-base"},Pa={class:"flex flex-col bg-[#fff] mt-5 rounded dark:bg-[#15171A] px-2"},Ra={class:"py-6 px-4 flex justify-between items-center"},Na=V("div",{class:"flex flex-col"},[V("h3",{class:"text-base"}," 推介收益 "),V("div",{class:"text-[#999] text-xs mt-2"}," 推介的用户注册购买产品后返佣金额 ")],-1),Ma={class:"py-6 px-4 flex justify-between items-center"},Ua=V("div",{class:"flex flex-col"},[V("h3",{class:"text-base"}," 申请成为高级代理 "),V("div",{class:"text-[#999] text-xs mt-2"}," 联系站长申请高级代理可享超高返佣 ")],-1),ja={class:"py-6 px-4 flex justify-between items-center"},Va=V("div",{class:"flex flex-col"},[V("h3",{class:"text-base"}," 加入我们成为合伙人 "),V("div",{class:"text-[#999] text-xs mt-2"}," 加入我们成为合伙人共同运营社区、合作双赢！ ")],-1),Oa={class:"bg-[#fff] dark:bg-[#15171A] p-5 rounded flex"},Da={class:"w-full flex"},Ta={class:"mt-5 bg-[#fff] p-5 dark:bg-[#15171A]"},$a={class:"pt-5"},qa={class:"pt-5"},La={class:"pt-5"},Ea={class:"p-4 bg-white rounded dark:bg-slate-800"},Ga={class:"flex text-base mb-[20px] bg-currentflex items-center"},Ha=V("span",{class:"ml-[8px] mt-2"},"邀好友、赠套餐卡密、享充值返佣！",-1),Ka={class:"w-full flex mb-5 px-6"},Wa=V("div",null,"复制",-1),Ya={class:"flex justify-center items-center"},Ja={class:"flex flex-col p-5 justify-center"},Qa=V("span",{class:"text-center"}," 1. 邀请好友双方都可享受一定额度的永久次卡奖励 ",-1),Xa={class:"text-center"},Za=n({__name:"index",setup(e){const a=v({distributionBalance:0,drawMoneyIn:0,id:0,inviteCount:0,inviteLinkCount:0,orderCount:0,performanceRatio:0,salesOutletName:"",totalAmount:0,withdrawalAmount:0}),t=v(!1),n=v(!1),r=v([]),i=v([]),s=te(),o=d((()=>s.globalConfig)),u=d((()=>{var e,a;return(null==(e=o.value)?void 0:e.salesBaseRatio)?Number(null==(a=o.value)?void 0:a.salesBaseRatio):10})),c=d((()=>{var e,a;return(null==(e=o.value)?void 0:e.salesSeniorRatio)?Number(null==(a=o.value)?void 0:a.salesSeniorRatio):10})),f=v(null),p=v("rec"),g=d((()=>s.isLogin)),b=d((()=>s.userInfo.inviteCode)),h=d((()=>{let e=`${window.location.protocol}//${window.location.hostname}`;return window.location.port&&(e+=`:${window.location.port}`),e})),x=d((()=>b.value?`${h.value}?inVitecode=${b.value}`:"**************")),w=T(),y=v(null);ne(),v([]);const k=v(null);v({pageSize:23});const C=v([]),I=v(!1),z=v(!1),B=v(!1),_=le({page:1,pageSize:10,itemCount:0,showSizePicker:!0,pageSizes:[10,20,50],onChange:e=>{_.page=e,K()},onUpdatePageSize:e=>{_.pageSize=e,_.page=1,K()}}),A=le({page:1,pageSize:10,itemCount:0,showSizePicker:!0,pageSizes:[10,20,50],onChange:e=>{A.page=e,K()},onUpdatePageSize:e=>{A.pageSize=e,A.page=1,K()}}),F=le({page:1,pageSize:10,itemCount:0,showSizePicker:!0,pageSizes:[10,20,50],onChange:e=>{F.page=e,ee()},onUpdatePageSize:e=>{F.pageSize=e,F.page=1,ee()}}),P=v([{title:"订单金额",align:"center",orderPrice:"address",render:e=>`￥${e.orderPrice}元`},{align:"center",title:"商品类型",key:"tags",render:e=>"购买套餐"},{align:"center",title:"状态",key:"status",render:e=>l(ue,{type:"success",size:"small",round:!0},(()=>"已入账"))},{align:"center",title:"佣金比例",key:"commissionAmount",render:e=>`${e.commissionPercentage}%`},{align:"center",title:"佣金",key:"commissionAmount",render:e=>`￥${e.commissionAmount}元`},{align:"center",title:"订购时间",key:"createdAt"}]);function R(){p.value="drawMoney",D(),W()}async function N(){if(!g.value)return void s.setLoginDialog(!0);const e=await de();if(!e.data)return w.error(e.message);w.success("生成邀请码成功"),s.getUserInfo()}function M(){n.value=!0}async function D(){const e=await O({url:"/sales/mineAccount"});a.value=e.data}function $(e){"drawMoney"===e&&W(),"rec"===e&&K(),"register"===e&&ee()}async function K(){try{I.value=!0;const a=await(e={page:_.page,size:_.pageSize},O({url:"/sales/mineRecords",data:e}));r.value=a.data.rows,_.itemCount=a.data.count,I.value=!1}catch(a){I.value=!1}var e}async function W(){try{z.value=!0;const a=await(e={page:A.page,size:A.pageSize},O({url:"/sales/drawMoneyOrder",data:e}));A.itemCount=a.data.count,i.value=a.data.rows,z.value=!1}catch(a){z.value=!1}var e}const Y=v([{title:"提现时间",key:"createdAt",align:"center"},{title:"提现金额",key:"withdrawalAmount",align:"center"},{title:"提现渠道",key:"withdrawalChannels",align:"center",render:e=>l(ue,{type:1===e.withdrawalChannels?"info":"success",size:"small",round:!0},(()=>1===e.withdrawalChannels?"支付宝":"微信"))},{title:"提现状态",key:"paymentStatus",render:e=>l(ue,{type:1===e.paymentStatus?"success":-1===e.paymentStatus?"error":"info",size:"small",round:!0},(()=>1===e.paymentStatus?"已打款":-1===e.paymentStatus?"被拒绝":"审核中"))},{title:"提现备注",key:"contactInformation",align:"center",render:e=>` ${(null==e?void 0:e.contactInformation)||"---"} `},{title:"审核人",key:"auditUserId",align:"center",render:e=>` ${(null==e?void 0:e.auditUserName)||"---"} `}]),Q=v([{title:"头像",align:"center",key:"avatar",render:e=>l(ce,{src:e.avatar,round:!0,size:38,border:!0})},{align:"center",title:"用户名",key:"username"},{align:"center",title:"邮箱",key:"email"},{title:"受邀人状态",align:"center",key:"status",render:e=>l(ue,{type:1===e.status?"success":"error",size:"small",round:!0},(()=>1===e.status?"已注册":"待激活"))},{title:"注册时间",align:"center",key:"createdAt"},{title:"最后登录",align:"center",key:"updatedAt"}]),{isMobile:Z}=re();async function ee(){try{B.value=!0;const e=await fe({page:F.page,size:F.pageSize});C.value=e.data.rows,F.itemCount=e.data.count,B.value=!1}catch(e){B.value=!1}}function ae(){if(!b.value)return w.error("请先申请你的邀请码");we({text:x.value}),w.success("复制推荐链接成功");const e=y.value,a=document.createRange(),t=window.getSelection();a.selectNodeContents(e),t.removeAllRanges(),t.addRange(a)}function ke(){g.value?t=!0:s.setLoginDialog(!0)}return m((()=>{var e;null==(e=k.value)||e.play(),D(),K()})),(e,l)=>{var s,d,v,m,g,h,w,O;return U(),j("div",Qe,[E(L(xe),{class:ie([L(Z)?"px-3":"px-14"]),title:"推介计划",des:"加入我们，共享成功！欢迎来到我们的分销页面，成为我们的合作伙伴，一同开创美好未来！"},null,8,["class"]),V("div",{class:ie(["flex-1 flex-wrap py-5 flex justify-between",[L(Z)?"px-3":"px-20"]])},[V("div",{class:ie(["px-[12px] min-w-[350px]",[L(Z)?"w-full":"w-1/3"]])},[V("div",Xe,[V("div",Ze,[J(se((null==(s=a.value)?void 0:s.salesOutletName)||"新秀推荐官")+" ",1),V("img",{src:L("/static/png/badge-4a5770f0.png"),class:"ml-2 w-6 h-6 opacity-50"},null,8,ea)]),aa,V("div",ta,[V("div",na,[V("span",la,[E(L(Ne),{ref_key:"numberAnimationInstRef",ref:k,from:0,to:Number(null==(d=a.value)?void 0:d.totalAmount),active:!0,precision:2},null,8,["to"])]),ra]),V("img",{src:L("/static/png/qianbao-77758046.png"),class:"w-20 opacity-10",alt:""},null,8,ia)]),V("div",sa,[V("div",oa,[V("div",ua,[V("span",da,se((null==(v=a.value)?void 0:v.distributionBalance)||0),1),ca]),fa]),V("div",pa,[V("div",va,[V("span",ma,se((null==(m=a.value)?void 0:m.drawMoneyIn)||0),1),ga]),ba]),V("div",null,[E(L(pe),{placement:"top",trigger:"hover",delay:(null==(g=a.value)?void 0:g.distributionBalance)>10?800:200},{trigger:q((()=>{var e;return[V("div",{class:ie(["btn",[(null==(e=a.value)?void 0:e.distributionBalance)<Number(u.value)?"disabled":""]]),onClick:l[0]||(l[0]=(...e)=>ke&&ke(...e))}," 立即提现 ",2)]})),default:q((()=>{var e;return[V("span",null,"最低"+se(Number(null==(e=o.value)?void 0:e.salesAllowDrawMoney)||10)+"元可提现!",1)]})),_:1},8,["delay"])])])]),V("div",ha,[V("div",xa,[V("div",wa,[E(L(ve),{class:"text-lg",icon:"icon-park-outline:order"}),ya]),V("b",ka,se((null==(h=a.value)?void 0:h.orderCount)||0),1)]),V("div",Ca,[V("div",Ia,[E(L(ve),{class:"text-lg",icon:"ep:link"}),za]),V("b",Sa,se((null==(w=a.value)?void 0:w.inviteLinkCount)||0),1)]),V("div",Ba,[V("div",_a,[E(L(ve),{class:"text-lg",icon:"ph:user"}),Aa]),V("b",Fa,se((null==(O=a.value)?void 0:O.inviteCount)||0),1)])]),V("div",Pa,[V("div",Ra,[Na,E(L(ue),{round:"",bordered:!1,type:"success",size:"small"},{default:q((()=>[J(" 百分比"+se(u.value)+"% ",1)])),_:1})]),V("div",Ma,[Ua,E(L(ue),{round:"",bordered:!1,type:"success",size:"small"},{default:q((()=>[J(" 百分比"+se(c.value)+"% ",1)])),_:1})]),V("div",ja,[Va,E(L(ue),{round:"",bordered:!1,type:"error",size:"small"},{default:q((()=>[J(" 合作共赢，携手共进 ")])),_:1})])])],2),V("div",{class:ie(["px-[12px]",[L(Z)?"w-full":"w-2/3"]])},[V("div",Oa,[V("div",Da,[V("div",{class:ie(["border border-[ced4da] dark:border-[#3a3a40] text-sm py-1 rounded-l-md flex items-center",[L(Z)?"px-1":"px-3"]])}," 推荐链接： ",2),V("div",{ref_key:"selectable",ref:y,class:"bg-[#F4F4F4] dark:bg-[#010102] flex-1 flex items-center dark:border-[#ffffff17] border-b border-t pl-4 max-w-[500px] select-text overflow-x-hidden whitespace-nowrap"},se(x.value),513),b.value?oe("",!0):(U(),j("div",{key:0,class:ie([[L(Z)?"px-2":"px-5"],"cursor-pointer hover:text-[#5A91FC] transition-all border dark:border-[#ffffff17] flex items-center mr-[-1px] select-none"]),onClick:N}," 申请 ",2)),b.value?(U(),j("div",{key:1,class:ie([[L(Z)?"px-2":"px-5"],"cursor-pointer hover:text-[#5A91FC] transition-all border dark:border-[#ffffff17] flex items-center mr-[-1px]"])},[E(L(ve),{class:"text-lg",icon:"fluent:document-copy-48-regular",onClick:ae})],2)):oe("",!0),!L(Z)&&b.value?(U(),j("div",{key:2,class:"cursor-pointer hover:text-[#5A91FC] transition-all border dark:border-[#ffffff17] flex items-center px-5 bg-currentrounded-r-md",onClick:M},[E(L(ve),{class:"text-lg",icon:"la:qrcode"})])):oe("",!0)])]),V("div",Ta,[E(L(be),{ref_key:"tabRef",ref:f,value:p.value,"onUpdate:value":[l[1]||(l[1]=e=>p.value=e),$],"bar-width":338,animated:"","justify-content":"space-evenly",type:"line"},{default:q((()=>[E(L(me),{name:"rec",tab:"推介记录"},{default:q((()=>[V("div",$a,[E(L(ge),{"min-width":200,loading:I.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:P.value,data:r.value,pagination:_,"scroll-x":700},null,8,["loading","columns","data","pagination"])])])),_:1}),E(L(me),{name:"drawMoney",tab:"提现记录"},{default:q((()=>[V("div",qa,[E(L(ge),{loading:z.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:Y.value,data:i.value,pagination:A,"scroll-x":500},null,8,["loading","columns","data","pagination"])])])),_:1}),E(L(me),{name:"register",tab:"注册用户"},{default:q((()=>[V("div",La,[E(L(ge),{loading:B.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:Q.value,data:C.value,pagination:F,"scroll-x":500},null,8,["loading","columns","data","pagination"])])])),_:1})])),_:1},8,["value"])]),E(Je,{visible:t.value,onClose:l[2]||(l[2]=e=>t.value=!1),onSubmit:R},null,8,["visible"])],2)],2),E(L(X),{show:n.value,style:{width:"90%","max-width":"420px"}},{default:q((()=>[V("div",Ea,[V("div",{class:"flex justify-between",onClick:l[3]||(l[3]=e=>n.value=!1)},[V("div",Ga,[E(L(H),{size:"22",color:"#0e7a0d"},{default:q((()=>[E(L(qe))])),_:1}),Ha]),E(L(H),{size:"20",color:"#0e7a0d",class:"cursor-pointer"},{default:q((()=>[E(L(G))])),_:1})]),V("div",Ka,[E(L(ye),{class:"dark:bg-[#010102] bg-[#f4f4f4]"},{default:q((()=>[E(L(Pe),{size:"small"},{default:q((()=>[J(" 邀请链接 ")])),_:1}),E(L(S),{size:"small",style:{flex:1},value:x.value},null,8,["value"]),E(L(Pe),{size:"small",onClick:ae},{default:q((()=>[Wa])),_:1})])),_:1})]),V("div",Ya,[E(he,{value:x.value,size:240},null,8,["value"])]),V("div",Ja,[Qa,V("span",Xa," 2. 邀请好友充值，您可获得充值金额的"+se(u.value||10)+"%返佣 ",1)])])])),_:1},8,["show"])])}}});export{Za as default};
