import{cm as e,cn as a,co as t,d as l,c5 as n,c1 as r,c3 as i,cg as s,c8 as o,cp as u,c as d,cq as c,ci as f,cr as p,y as v,z as m,cs as g,c4 as b,ct as h,cu as x,cc as w,cb as y,cv as k,V as C,cw as I,cx as z,ac as S,cy as B,cz as _,cA as A,c6 as F,cB as P,cC as R,cl as M,q as N,o as V,i as U,j,ak as O,ba as D,u as T,k as $,w as q,h as L,n as E,bm as G,Q as H,bo as K,a8 as J,N as Q,Z as W,bn as Z,a9 as X,C as Y,D as ee,H as ae,b as te,v as le,I as ne,g as re,M as ie,m as se,l as oe,cD as ue,cE as de,J as ce,cF as fe,p as pe,_ as ve,ap as me,cG as ge,aq as be,cH as he}from"../main-1e3344b4.js";import{_ as xe}from"../titleBar.vue_vue_type_script_setup_true_lang/titleBar.vue_vue_type_script_setup_true_lang.f5576bde.js";import{c as we}from"../index/index.a4f65e28.js";import{N as ye}from"../InputGroup/InputGroup.57f813a2.js";var ke=1/0,Ce=17976931348623157e292;function Ie(a){var t=function(a){return a?(a=e(a))===ke||a===-ke?(a<0?-1:1)*Ce:a==a?a:0:0===a?a:0}(a),l=t%1;return t==t?l?t-l:t:0}var ze,Se=a.isFinite,Be=Math.min;const _e=(ze=Math["round"],function(a,l){if(a=e(a),(l=null==l?0:Be(Ie(l),292))&&Se(a)){var n=(t(a)+"e").split("e"),r=ze(n[0]+"e"+(+n[1]+l));return+((n=(t(r)+"e").split("e"))[0]+"e"+(+n[1]-l))}return ze(a)}),Ae=l({name:"Remove",render:()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:"\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "}))}),Fe=r("input-group-label","\n position: relative;\n user-select: none;\n -webkit-user-select: none;\n box-sizing: border-box;\n padding: 0 12px;\n display: inline-block;\n border-radius: var(--n-border-radius);\n background-color: var(--n-group-label-color);\n color: var(--n-group-label-text-color);\n font-size: var(--n-font-size);\n line-height: var(--n-height);\n height: var(--n-height);\n flex-shrink: 0;\n white-space: nowrap;\n transition: \n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n",[i("border","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n border: var(--n-group-label-border);\n transition: border-color .3s var(--n-bezier);\n ")]),Pe=l({name:"InputGroupLabel",props:Object.assign(Object.assign({},o.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),setup(e){const{mergedBorderedRef:a,mergedClsPrefixRef:t,inlineThemeDisabled:l}=s(e),n=o("Input","-input-group-label",Fe,u,e,t),r=d((()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:t},self:{groupLabelColor:l,borderRadius:r,groupLabelTextColor:i,lineHeight:s,groupLabelBorder:o,[c("fontSize",a)]:u,[c("height",a)]:d}}=n.value;return{"--n-bezier":t,"--n-group-label-color":l,"--n-group-label-border":o,"--n-border-radius":r,"--n-group-label-text-color":i,"--n-font-size":u,"--n-line-height":s,"--n-height":d}})),i=l?f("input-group-label",d((()=>e.size[0])),r,e):void 0;return{mergedClsPrefix:t,mergedBordered:a,cssVars:l?void 0:r,themeClass:null==i?void 0:i.themeClass,onRender:null==i?void 0:i.onRender}},render(){var e,a,t;const{mergedClsPrefix:l}=this;return null===(e=this.onRender)||void 0===e||e.call(this),n("div",{class:[`${l}-input-group-label`,this.themeClass],style:this.cssVars},null===(t=(a=this.$slots).default)||void 0===t?void 0:t.call(a),this.mergedBordered?n("div",{class:`${l}-input-group-label__border`}):null)}});function Re(e){const{from:a,to:t,duration:l,onUpdate:n,onFinish:r}=e,i=()=>{const e=performance.now(),o=Math.min(e-s,l),u=a+(t-a)*(d=o/l,1-Math.pow(1-d,5));var d;o!==l?(n(u),requestAnimationFrame(i)):r()},s=performance.now();i()}const Me=l({name:"NumberAnimation",props:{to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},setup(e){const{localeRef:a}=p("name"),{duration:t}=e,l=v(e.from),n=d((()=>{const{locale:t}=e;return void 0!==t?t:a.value}));let r=!1;const i=e=>{l.value=e},s=()=>{var a;l.value=e.to,r=!1,null===(a=e.onFinish)||void 0===a||a.call(e)},o=(a=e.from,n=e.to)=>{r=!0,l.value=e.from,a!==n&&Re({from:a,to:n,duration:t,onUpdate:i,onFinish:s})},u=d((()=>{var a;const t=_e(l.value,e.precision).toFixed(e.precision).split("."),r=new Intl.NumberFormat(n.value),i=null===(a=r.formatToParts(.5).find((e=>"decimal"===e.type)))||void 0===a?void 0:a.value;return{integer:e.showSeparator?r.format(Number(t[0])):t[0],decimal:t[1],decimalSeparator:i}}));m((()=>{g((()=>{e.active&&o()}))}));const c={play:function(){r||o()}};return Object.assign({formattedValue:u},c)},render(){const{formattedValue:{integer:e,decimal:a,decimalSeparator:t}}=this;return[e,a?t:null,a]}});function Ne(e){return null==e||"string"==typeof e&&""===e.trim()?null:Number(e)}function Ve(e){return null==e||!Number.isNaN(e)}function Ue(e,a){return null==e?"":void 0===a?String(e):e.toFixed(a)}function je(e){if(null===e)return null;if("number"==typeof e)return e;{const a=Number(e);return Number.isNaN(a)?null:a}}const Oe=b([r("input-number-suffix","\n display: inline-block;\n margin-right: 10px;\n "),r("input-number-prefix","\n display: inline-block;\n margin-left: 10px;\n ")]),De=l({name:"InputNumber",props:Object.assign(Object.assign({},o.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),setup(e){const{mergedBorderedRef:a,mergedClsPrefixRef:t,mergedRtlRef:l}=s(e),n=o("InputNumber","-input-number",Oe,h,e,t),{localeRef:r}=p("InputNumber"),i=x(e),{mergedSizeRef:u,mergedDisabledRef:c,mergedStatusRef:f}=i,m=v(null),g=v(null),b=v(null),S=v(e.defaultValue),B=w(e,"value"),A=y(B,S),F=v(""),P=e=>{const a=String(e).split(".")[1];return a?a.length:0},R=k((()=>{const{placeholder:a}=e;return void 0!==a?a:r.value.placeholder})),V=k((()=>{const a=je(e.step);return null!==a?0===a?1:Math.abs(a):1})),U=k((()=>{const a=je(e.min);return null!==a?a:null})),j=k((()=>{const a=je(e.max);return null!==a?a:null})),O=a=>{const{value:t}=A;if(a===t)return void T();const{"onUpdate:value":l,onUpdateValue:n,onChange:r}=e,{nTriggerFormInput:s,nTriggerFormChange:o}=i;r&&M(r,a),n&&M(n,a),l&&M(l,a),S.value=a,s(),o()},D=({offset:a,doUpdateIfValid:t,fixPrecision:l,isInputing:n})=>{const{value:r}=F;if(n&&((i=r).includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(i)||/^\.\d+$/.test(i))))return!1;var i;const s=(e.parse||Ne)(r);if(null===s)return t&&O(null),null;if(Ve(s)){const r=P(s),{precision:i}=e;if(void 0!==i&&i<r&&!l)return!1;let o=parseFloat((s+a).toFixed(null!=i?i:(a=>{const t=[e.min,e.max,e.step,a].map((e=>void 0===e?0:P(e)));return Math.max(...t)})(s)));if(Ve(o)){const{value:a}=j,{value:l}=U;if(null!==a&&o>a){if(!t||n)return!1;o=a}if(null!==l&&o<l){if(!t||n)return!1;o=l}return!(e.validator&&!e.validator(o))&&(t&&O(o),o)}}return!1},T=()=>{const{value:a}=A;if(Ve(a)){const{format:t,precision:l}=e;t?F.value=t(a):null===a||void 0===l||P(a)>l?F.value=Ue(a,void 0):F.value=Ue(a,l)}else F.value=String(a)};T();const $=k((()=>!1===D({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1}))),q=k((()=>{const{value:a}=A;if(e.validator&&null===a)return!1;const{value:t}=V;return!1!==D({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})})),L=k((()=>{const{value:a}=A;if(e.validator&&null===a)return!1;const{value:t}=V;return!1!==D({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})}));function E(){const{value:a}=L;if(!a)return void Y();const{value:t}=A;if(null===t)e.validator||O(J());else{const{value:e}=V;D({offset:e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function G(){const{value:a}=q;if(!a)return void X();const{value:t}=A;if(null===t)e.validator||O(J());else{const{value:e}=V;D({offset:-e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const H=function(a){const{onFocus:t}=e,{nTriggerFormFocus:l}=i;t&&M(t,a),l()},K=function(a){var t,l;if(a.target===(null===(t=m.value)||void 0===t?void 0:t.wrapperElRef))return;const n=D({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(!1!==n){const e=null===(l=m.value)||void 0===l?void 0:l.inputElRef;e&&(e.value=String(n||"")),A.value===n&&T()}else T();const{onBlur:r}=e,{nTriggerFormBlur:s}=i;r&&M(r,a),s(),N((()=>{T()}))};function J(){if(e.validator)return null;const{value:a}=U,{value:t}=j;return null!==a?Math.max(0,a):null!==t?Math.min(0,t):0}let Q=null,W=null,Z=null;function X(){Z&&(window.clearTimeout(Z),Z=null),Q&&(window.clearInterval(Q),Q=null)}function Y(){ee&&(window.clearTimeout(ee),ee=null),W&&(window.clearInterval(W),W=null)}let ee=null;C(A,(()=>{T()}));const ae={focus:()=>{var e;return null===(e=m.value)||void 0===e?void 0:e.focus()},blur:()=>{var e;return null===(e=m.value)||void 0===e?void 0:e.blur()},select:()=>{var e;return null===(e=m.value)||void 0===e?void 0:e.select()}},te=I("InputNumber",l,t);return Object.assign(Object.assign({},ae),{rtlEnabled:te,inputInstRef:m,minusButtonInstRef:g,addButtonInstRef:b,mergedClsPrefix:t,mergedBordered:a,uncontrolledValue:S,mergedValue:A,mergedPlaceholder:R,displayedValueInvalid:$,mergedSize:u,mergedDisabled:c,displayedValue:F,addable:L,minusable:q,mergedStatus:f,handleFocus:H,handleBlur:K,handleClear:function(a){!function(a){const{onClear:t}=e;t&&M(t,a)}(a),O(null)},handleMouseDown:function(e){var a,t,l;(null===(a=b.value)||void 0===a?void 0:a.$el.contains(e.target))&&e.preventDefault(),(null===(t=g.value)||void 0===t?void 0:t.$el.contains(e.target))&&e.preventDefault(),null===(l=m.value)||void 0===l||l.activate()},handleAddClick:()=>{W||E()},handleMinusClick:()=>{Q||G()},handleAddMousedown:function(){Y(),ee=window.setTimeout((()=>{W=window.setInterval((()=>{E()}),100)}),800),_("mouseup",document,Y,{once:!0})},handleMinusMousedown:function(){X(),Z=window.setTimeout((()=>{Q=window.setInterval((()=>{G()}),100)}),800),_("mouseup",document,X,{once:!0})},handleKeyDown:function(a){var t,l;if("Enter"===a.key){if(a.target===(null===(t=m.value)||void 0===t?void 0:t.wrapperElRef))return;!1!==D({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&(null===(l=m.value)||void 0===l||l.deactivate())}else if("ArrowUp"===a.key){if(!L.value)return;if(!1===e.keyboard.ArrowUp)return;a.preventDefault();!1!==D({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&E()}else if("ArrowDown"===a.key){if(!q.value)return;if(!1===e.keyboard.ArrowDown)return;a.preventDefault();!1!==D({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})&&G()}},handleUpdateDisplayedValue:function(a){F.value=a,!e.updateValueOnInput||e.format||e.parse||void 0!==e.precision||D({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})},mergedTheme:n,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:d((()=>{const{self:{iconColorDisabled:e}}=n.value,[a,t,l,r]=z(e);return{textColorTextDisabled:`rgb(${a}, ${t}, ${l})`,opacityDisabled:`${r}`}}))})},render(){const{mergedClsPrefix:e,$slots:a}=this,t=()=>n(P,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>A(a["minus-icon"],(()=>[n(F,{clsPrefix:e},{default:()=>n(Ae,null)})]))}),l=()=>n(P,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>A(a["add-icon"],(()=>[n(F,{clsPrefix:e},{default:()=>n(R,null)})]))});return n("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},n(S,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var l;return this.showButton&&"both"===this.buttonPlacement?[t(),B(a.prefix,(a=>a?n("span",{class:`${e}-input-number-prefix`},a):null))]:null===(l=a.prefix)||void 0===l?void 0:l.call(a)},suffix:()=>{var r;return this.showButton?[B(a.suffix,(a=>a?n("span",{class:`${e}-input-number-suffix`},a):null)),"right"===this.buttonPlacement?t():null,l()]:null===(r=a.suffix)||void 0===r?void 0:r.call(a)}}))}}),Te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$e=[j("path",{d:"M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M336 128l-80-80l-80 80"},null,-1),j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 321V48"},null,-1)],qe=l({name:"ShareOutline",render:function(e,a){return V(),U("svg",Te,$e)}});const Le={class:"p-5 bg-white rounded"},Ee=(e=>(Y("data-v-3c73927f"),e=e(),ee(),e))((()=>j("span",{class:"text-lg"}," 提款申请表 ",-1))),Ge={class:"pt-5"},He={class:"dark:bg-[#010102] bg-[#f4f4f4] w-full"},Ke={class:"dark:bg-[#010102] bg-[#f4f4f4] w-full"},Je={class:"dark:bg-[#010102] bg-[#f4f4f4] w-full"},Qe={class:"dark:bg-[#010102] bg-[#f4f4f4] w-full"},We=ae(l({__name:"drawMoneyDialog",props:{visible:{type:Boolean}},emits:["close","submit"],setup(e,{emit:a}){const t=a,l=v(null),n=T(),r=[{label:"支付宝",value:1},{label:"微信",value:2}],i=v({withdrawalAmount:null,withdrawalChannels:null,contactInformation:"",remark:""}),s=v(!1),o={withdrawalAmount:[{required:!0,message:"请填写你的提款金额！"}],withdrawalChannels:[{required:!0,message:"请选择你的提款渠道！"}],contactInformation:[{required:!0,message:"请填写您的联系方式并备注！",trigger:"blur"}],remark:[{required:!1,message:"如有特殊情况、请备注说明！",trigger:"blur"}]};function u(){var e;null==(e=l.value)||e.validate((async e=>{if(!e)try{s.value=!0;const{withdrawalAmount:e,withdrawalChannels:l,contactInformation:r,remark:o}=i.value;(await(a={withdrawalAmount:e,withdrawalChannels:l,contactInformation:r,remark:o},D({url:"/sales/appForMoney",data:a}))).success&&(n.success("申请提现成功、请耐心等待审核！"),i.value={withdrawalAmount:null,withdrawalChannels:null,contactInformation:"",remark:""},t("submit"),t("close")),s.value=!1}catch(l){s.value=!1}var a}))}function d(){}function c(){}function f(){t("close")}return(e,a)=>(V(),$(L(X),{class:"dark:bg-[#15171A] bg-[#FFFFFF]",show:e.visible,style:{width:"90%","max-width":"500px"},"on-after-enter":d,"on-after-leave":c},{default:q((()=>[j("div",Le,[Ee,j("div",{class:"absolute top-3 right-3 cursor-pointer z-30",onClick:f},[E(L(H),{size:"20",color:"#0e7a0d"},{default:q((()=>[E(L(G))])),_:1})]),j("div",Ge,[E(L(Z),{ref_key:"formRef",ref:l,model:i.value,rules:o,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",style:{maxWidth:"640px"}},{default:q((()=>[E(L(K),{path:"withdrawalAmount",label:"提款金额"},{default:q((()=>[j("div",He,[E(L(De),{value:i.value.withdrawalAmount,"onUpdate:value":a[0]||(a[0]=e=>i.value.withdrawalAmount=e),class:"w-full",clearable:"",precision:2,placeholder:"请填写提款金额"},null,8,["value"])])])),_:1}),E(L(K),{path:"withdrawalChannels",label:"提款渠道"},{default:q((()=>[j("div",Ke,[E(L(J),{value:i.value.withdrawalChannels,"onUpdate:value":a[1]||(a[1]=e=>i.value.withdrawalChannels=e),placeholder:"请选择您的提款渠道！",options:r},null,8,["value"])])])),_:1}),E(L(K),{path:"contactInformation",label:"联系方式"},{default:q((()=>[j("div",Je,[E(L(S),{value:i.value.contactInformation,"onUpdate:value":a[2]||(a[2]=e=>i.value.contactInformation=e),type:"textarea",rows:3,placeholder:"请填写你的联系方式"},null,8,["value"])])])),_:1}),E(L(K),{path:"remark",label:"提款备注"},{default:q((()=>[j("div",Qe,[E(L(S),{value:i.value.remark,"onUpdate:value":a[3]||(a[3]=e=>i.value.remark=e),type:"textarea",rows:3,placeholder:"请填写你的提款备注！"},null,8,["value"])])])),_:1}),E(L(K),{class:"mt-3"},{default:q((()=>[E(L(Q),{block:"",type:"primary",disabled:s.value,loading:s.value,onClick:u},{default:q((()=>[W(" 申 请 提 现 ")])),_:1},8,["disabled","loading"])])),_:1})])),_:1},8,["model"])])])])),_:1},8,["show"]))}}),[["__scopeId","data-v-3c73927f"]]),Ze={style:{"margin-top":"20px"},class:"main bg-[#F4F4F4] bg-center dark:bg-[#010102]"},Xe={class:"w-full bg-[#f78400] p-6 flex flex-col justify-between rounded shadow-xl relative"},Ye={class:"absolute right-4 top-6 font-bold text-base opacity-60 text-[#eee] flex"},ea=["src"],aa=j("h2",{class:"text-[#fff] font-bold text-xl"}," 我的推介 ",-1),ta={class:"leading-loose flex justify-between items-center py-5"},la={class:"text-[#fff]"},na={class:"font-bold text-4xl"},ra=j("span",{class:"ml-3"},"元",-1),ia=["src"],sa={class:"flex justify-between text-[#fff] items-center"},oa={class:"flex flex-col"},ua={class:"flex items-end"},da={class:"font-bold text-xl"},ca=j("span",{class:"ml-2"},"元",-1),fa=j("div",null,"剩余可提金额",-1),pa={class:"flex flex-col"},va={class:"flex items-end"},ma={class:"font-bold text-xl"},ga=j("span",{class:"ml-2"},"元",-1),ba=j("div",null,"提现中金额",-1),ha={class:"flex flex-col bg-[#fff] mt-5 rounded dark:bg-[#15171A] px-2"},xa={class:"flex p-4 justify-between border-b dark:border-[#3a3a40]"},wa={class:"flex item-center"},ya=j("span",{class:"ml-2"},"购买订单数量",-1),ka={class:"text-base"},Ca={class:"flex p-4 justify-between border-b dark:border-[#3a3a40]"},Ia={class:"flex item-center"},za=j("span",{class:"ml-2"},"推广链接访问次数",-1),Sa={class:"text-base"},Ba={class:"flex p-4 justify-between"},_a={class:"flex item-center"},Aa=j("span",{class:"ml-2"},"注册用户",-1),Fa={class:"text-base"},Pa={class:"flex flex-col bg-[#fff] mt-5 rounded dark:bg-[#15171A] px-2"},Ra={class:"py-6 px-4 flex justify-between items-center"},Ma=j("div",{class:"flex flex-col"},[j("h3",{class:"text-base"}," 推介收益 "),j("div",{class:"text-[#999] text-xs mt-2"}," 推介的用户注册购买产品后返佣金额 ")],-1),Na={class:"py-6 px-4 flex justify-between items-center"},Va=j("div",{class:"flex flex-col"},[j("h3",{class:"text-base"}," 申请成为高级代理 "),j("div",{class:"text-[#999] text-xs mt-2"}," 联系站长申请高级代理可享超高返佣 ")],-1),Ua={class:"py-6 px-4 flex justify-between items-center"},ja=j("div",{class:"flex flex-col"},[j("h3",{class:"text-base"}," 加入我们成为合伙人 "),j("div",{class:"text-[#999] text-xs mt-2"}," 加入我们成为合伙人共同运营社区、合作双赢！ ")],-1),Oa={class:"bg-[#fff] dark:bg-[#15171A] p-5 rounded flex"},Da={class:"w-full flex"},Ta={class:"mt-5 bg-[#fff] p-5 dark:bg-[#15171A]"},$a={class:"pt-5"},qa={class:"pt-5"},La={class:"pt-5"},Ea={class:"p-4 bg-white rounded dark:bg-slate-800"},Ga={class:"flex text-base mb-[20px] bg-currentflex items-center"},Ha=j("span",{class:"ml-[8px] mt-2"},"邀好友、赠套餐卡密、享充值返佣！",-1),Ka={class:"w-full flex mb-5 px-6"},Ja=j("div",null,"复制",-1),Qa={class:"flex justify-center items-center"},Wa={class:"flex flex-col p-5 justify-center"},Za=j("span",{class:"text-center"}," 1. 邀请好友双方都可享受一定额度的永久次卡奖励 ",-1),Xa={class:"text-center"},Ya=l({__name:"index",setup(e){const a=v({distributionBalance:0,drawMoneyIn:0,id:0,inviteCount:0,inviteLinkCount:0,orderCount:0,performanceRatio:0,salesOutletName:"",totalAmount:0,withdrawalAmount:0}),t=v(!1),l=v(!1),r=v([]),i=v([]),s=te(),o=d((()=>s.globalConfig)),u=d((()=>{var e,a;return(null==(e=o.value)?void 0:e.salesBaseRatio)?Number(null==(a=o.value)?void 0:a.salesBaseRatio):10})),c=d((()=>{var e,a;return(null==(e=o.value)?void 0:e.salesSeniorRatio)?Number(null==(a=o.value)?void 0:a.salesSeniorRatio):10})),f=v(null),p=v("rec"),g=d((()=>s.isLogin)),b=d((()=>s.userInfo.inviteCode)),h=d((()=>{let e=`${window.location.protocol}//${window.location.hostname}`;return window.location.port&&(e+=`:${window.location.port}`),e})),x=d((()=>b.value?`${h.value}?inVitecode=${b.value}`:"**************")),w=T(),y=v(null);le(),v([]);const k=v(null);v({pageSize:23});const C=v([]),I=v(!1),z=v(!1),B=v(!1),_=ne({page:1,pageSize:10,itemCount:0,showSizePicker:!0,pageSizes:[10,20,50],onChange:e=>{_.page=e,K()},onUpdatePageSize:e=>{_.pageSize=e,_.page=1,K()}}),A=ne({page:1,pageSize:10,itemCount:0,showSizePicker:!0,pageSizes:[10,20,50],onChange:e=>{A.page=e,K()},onUpdatePageSize:e=>{A.pageSize=e,A.page=1,K()}}),F=ne({page:1,pageSize:10,itemCount:0,showSizePicker:!0,pageSizes:[10,20,50],onChange:e=>{F.page=e,ee()},onUpdatePageSize:e=>{F.pageSize=e,F.page=1,ee()}}),P=v([{title:"订单金额",align:"center",orderPrice:"address",render:e=>`￥${e.orderPrice}元`},{align:"center",title:"商品类型",key:"tags",render:e=>"购买套餐"},{align:"center",title:"状态",key:"status",render:e=>n(ue,{type:"success",size:"small",round:!0},(()=>"已入账"))},{align:"center",title:"佣金比例",key:"commissionAmount",render:e=>`${e.commissionPercentage}%`},{align:"center",title:"佣金",key:"commissionAmount",render:e=>`￥${e.commissionAmount}元`},{align:"center",title:"订购时间",key:"createdAt"}]);function R(){p.value="drawMoney",D(),J()}async function M(){if(!g.value)return void s.setLoginDialog(!0);const e=await de();if(!e.data)return w.error(e.message);w.success("生成邀请码成功"),s.getUserInfo()}function N(){l.value=!0}async function D(){const e=await O({url:"/sales/mineAccount"});a.value=e.data}function $(e){"drawMoney"===e&&J(),"rec"===e&&K(),"register"===e&&ee()}async function K(){try{I.value=!0;const a=await(e={page:_.page,size:_.pageSize},O({url:"/sales/mineRecords",data:e}));r.value=a.data.rows,_.itemCount=a.data.count,I.value=!1}catch(a){I.value=!1}var e}async function J(){try{z.value=!0;const a=await(e={page:A.page,size:A.pageSize},O({url:"/sales/drawMoneyOrder",data:e}));A.itemCount=a.data.count,i.value=a.data.rows,z.value=!1}catch(a){z.value=!1}var e}const Q=v([{title:"提现时间",key:"createdAt",align:"center"},{title:"提现金额",key:"withdrawalAmount",align:"center"},{title:"提现渠道",key:"withdrawalChannels",align:"center",render:e=>n(ue,{type:1===e.withdrawalChannels?"info":"success",size:"small",round:!0},(()=>1===e.withdrawalChannels?"支付宝":"微信"))},{title:"提现状态",key:"paymentStatus",render:e=>n(ue,{type:1===e.paymentStatus?"success":-1===e.paymentStatus?"error":"info",size:"small",round:!0},(()=>1===e.paymentStatus?"已打款":-1===e.paymentStatus?"被拒绝":"审核中"))},{title:"提现备注",key:"contactInformation",align:"center",render:e=>` ${(null==e?void 0:e.contactInformation)||"---"} `},{title:"审核人",key:"auditUserId",align:"center",render:e=>` ${(null==e?void 0:e.auditUserName)||"---"} `}]),Z=v([{title:"头像",align:"center",key:"avatar",render:e=>n(ce,{src:e.avatar,round:!0,size:38,border:!0})},{align:"center",title:"用户名",key:"username"},{align:"center",title:"邮箱",key:"email"},{title:"受邀人状态",align:"center",key:"status",render:e=>n(ue,{type:1===e.status?"success":"error",size:"small",round:!0},(()=>1===e.status?"已注册":"待激活"))},{title:"注册时间",align:"center",key:"createdAt"},{title:"最后登录",align:"center",key:"updatedAt"}]),{isMobile:Y}=re();async function ee(){try{B.value=!0;const e=await fe({page:F.page,size:F.pageSize});C.value=e.data.rows,F.itemCount=e.data.count,B.value=!1}catch(e){B.value=!1}}function ae(){if(!b.value)return w.error("请先申请你的邀请码");we({text:x.value}),w.success("复制推荐链接成功");const e=y.value,a=document.createRange(),t=window.getSelection();a.selectNodeContents(e),t.removeAllRanges(),t.addRange(a)}function ke(){g.value?t=!0:s.setLoginDialog(!0)}return m((()=>{var e;null==(e=k.value)||e.play(),D(),K()})),(e,n)=>{var s,d,v,m,g,h,w,O;return V(),U("div",Ze,[E(L(xe),{class:ie([L(Y)?"px-3":"px-14"]),title:"推介计划",des:"加入我们，共享成功！欢迎来到我们的分销页面，成为我们的合作伙伴，一同开创美好未来！"},null,8,["class"]),j("div",{class:ie(["flex-1 flex-wrap py-5 flex justify-between",[L(Y)?"px-3":"px-20"]])},[j("div",{class:ie(["px-[12px] min-w-[350px]",[L(Y)?"w-full":"w-1/3"]])},[j("div",Xe,[j("div",Ye,[W(se((null==(s=a.value)?void 0:s.salesOutletName)||"新秀推荐官")+" ",1),j("img",{src:L("/static/png/badge-4a5770f0.png"),class:"ml-2 w-6 h-6 opacity-50"},null,8,ea)]),aa,j("div",ta,[j("div",la,[j("span",na,[E(L(Me),{ref_key:"numberAnimationInstRef",ref:k,from:0,to:Number(null==(d=a.value)?void 0:d.totalAmount),active:!0,precision:2},null,8,["to"])]),ra]),j("img",{src:L("/static/png/qianbao-77758046.png"),class:"w-20 opacity-10",alt:""},null,8,ia)]),j("div",sa,[j("div",oa,[j("div",ua,[j("span",da,se((null==(v=a.value)?void 0:v.distributionBalance)||0),1),ca]),fa]),j("div",pa,[j("div",va,[j("span",ma,se((null==(m=a.value)?void 0:m.drawMoneyIn)||0),1),ga]),ba]),j("div",null,[E(L(pe),{placement:"top",trigger:"hover",delay:(null==(g=a.value)?void 0:g.distributionBalance)>10?800:200},{trigger:q((()=>{var e;return[j("div",{class:ie(["btn",[(null==(e=a.value)?void 0:e.distributionBalance)<Number(u.value)?"disabled":""]]),onClick:n[0]||(n[0]=(...e)=>ke&&ke(...e))}," 立即提现 ",2)]})),default:q((()=>{var e;return[j("span",null,"最低"+se(Number(null==(e=o.value)?void 0:e.salesAllowDrawMoney)||10)+"元可提现!",1)]})),_:1},8,["delay"])])])]),j("div",ha,[j("div",xa,[j("div",wa,[E(L(ve),{class:"text-lg",icon:"icon-park-outline:order"}),ya]),j("b",ka,se((null==(h=a.value)?void 0:h.orderCount)||0),1)]),j("div",Ca,[j("div",Ia,[E(L(ve),{class:"text-lg",icon:"ep:link"}),za]),j("b",Sa,se((null==(w=a.value)?void 0:w.inviteLinkCount)||0),1)]),j("div",Ba,[j("div",_a,[E(L(ve),{class:"text-lg",icon:"ph:user"}),Aa]),j("b",Fa,se((null==(O=a.value)?void 0:O.inviteCount)||0),1)])]),j("div",Pa,[j("div",Ra,[Ma,E(L(ue),{round:"",bordered:!1,type:"success",size:"small"},{default:q((()=>[W(" 百分比"+se(u.value)+"% ",1)])),_:1})]),j("div",Na,[Va,E(L(ue),{round:"",bordered:!1,type:"success",size:"small"},{default:q((()=>[W(" 百分比"+se(c.value)+"% ",1)])),_:1})]),j("div",Ua,[ja,E(L(ue),{round:"",bordered:!1,type:"error",size:"small"},{default:q((()=>[W(" 合作共赢，携手共进 ")])),_:1})])])],2),j("div",{class:ie(["px-[12px]",[L(Y)?"w-full":"w-2/3"]])},[j("div",Oa,[j("div",Da,[j("div",{class:ie(["border border-[ced4da] dark:border-[#3a3a40] text-sm py-1 rounded-l-md flex items-center",[L(Y)?"px-1":"px-3"]])}," 推荐链接： ",2),j("div",{ref_key:"selectable",ref:y,class:"bg-[#F4F4F4] dark:bg-[#010102] flex-1 flex items-center dark:border-[#ffffff17] border-b border-t pl-4 max-w-[500px] select-text overflow-x-hidden whitespace-nowrap"},se(x.value),513),b.value?oe("",!0):(V(),U("div",{key:0,class:ie([[L(Y)?"px-2":"px-5"],"cursor-pointer hover:text-[#5A91FC] transition-all border dark:border-[#ffffff17] flex items-center mr-[-1px] select-none"]),onClick:M}," 申请 ",2)),b.value?(V(),U("div",{key:1,class:ie([[L(Y)?"px-2":"px-5"],"cursor-pointer hover:text-[#5A91FC] transition-all border dark:border-[#ffffff17] flex items-center mr-[-1px]"])},[E(L(ve),{class:"text-lg",icon:"fluent:document-copy-48-regular",onClick:ae})],2)):oe("",!0),!L(Y)&&b.value?(V(),U("div",{key:2,class:"cursor-pointer hover:text-[#5A91FC] transition-all border dark:border-[#ffffff17] flex items-center px-5 bg-currentrounded-r-md",onClick:N},[E(L(ve),{class:"text-lg",icon:"la:qrcode"})])):oe("",!0)])]),j("div",Ta,[E(L(be),{ref_key:"tabRef",ref:f,value:p.value,"onUpdate:value":[n[1]||(n[1]=e=>p.value=e),$],"bar-width":338,animated:"","justify-content":"space-evenly",type:"line"},{default:q((()=>[E(L(me),{name:"rec",tab:"推介记录"},{default:q((()=>[j("div",$a,[E(L(ge),{"min-width":200,loading:I.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:P.value,data:r.value,pagination:_,"scroll-x":700},null,8,["loading","columns","data","pagination"])])])),_:1}),E(L(me),{name:"drawMoney",tab:"提现记录"},{default:q((()=>[j("div",qa,[E(L(ge),{loading:z.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:Q.value,data:i.value,pagination:A,"scroll-x":500},null,8,["loading","columns","data","pagination"])])])),_:1}),E(L(me),{name:"register",tab:"注册用户"},{default:q((()=>[j("div",La,[E(L(ge),{loading:B.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:Z.value,data:C.value,pagination:F,"scroll-x":500},null,8,["loading","columns","data","pagination"])])])),_:1})])),_:1},8,["value"])]),E(We,{visible:t.value,onClose:n[2]||(n[2]=e=>t.value=!1),onSubmit:R},null,8,["visible"])],2)],2),E(L(X),{show:l.value,style:{width:"90%","max-width":"420px"}},{default:q((()=>[j("div",Ea,[j("div",{class:"flex justify-between",onClick:n[3]||(n[3]=e=>l.value=!1)},[j("div",Ga,[E(L(H),{size:"22",color:"#0e7a0d"},{default:q((()=>[E(L(qe))])),_:1}),Ha]),E(L(H),{size:"20",color:"#0e7a0d",class:"cursor-pointer"},{default:q((()=>[E(L(G))])),_:1})]),j("div",Ka,[E(L(ye),{class:"dark:bg-[#010102] bg-[#f4f4f4]"},{default:q((()=>[E(L(Pe),{size:"small"},{default:q((()=>[W(" 邀请链接 ")])),_:1}),E(L(S),{size:"small",style:{flex:1},value:x.value},null,8,["value"]),E(L(Pe),{size:"small",onClick:ae},{default:q((()=>[Ja])),_:1})])),_:1})]),j("div",Qa,[E(he,{value:x.value,size:240},null,8,["value"])]),j("div",Wa,[Za,j("span",Xa," 2. 邀请好友充值，您可获得充值金额的"+se(u.value||10)+"%返佣 ",1)])])])),_:1},8,["show"])])}}});export{Ya as default};