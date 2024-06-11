import{cS as e,d as i,cs as n,ch as o,O as t,c as s,cj as a,cd as l,cB as r,c6 as c,N as v,cz as p,c7 as d,cT as u,cU as g,c2 as f,c4 as h,c5 as m,c9 as P,cV as x,y as C,cf as T,cW as k,cX as b,p as z,cY as y,cm as O}from"../main-14a658dc.js";const j=e("n-popconfirm"),N={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},S=g(N),w=i({name:"NPopconfirmPanel",props:N,setup(e){const{localeRef:i}=n("Popconfirm"),{inlineThemeDisabled:r}=o(),{mergedClsPrefixRef:c,mergedThemeRef:v,props:p}=t(j),d=s((()=>{const{common:{cubicBezierEaseInOut:e},self:{fontSize:i,iconSize:n,iconColor:o}}=v.value;return{"--n-bezier":e,"--n-font-size":i,"--n-icon-size":n,"--n-icon-color":o}})),u=r?a("popconfirm-panel",void 0,d,p):void 0;return Object.assign(Object.assign({},n("Popconfirm")),{mergedClsPrefix:c,cssVars:r?void 0:d,localizedPositiveText:s((()=>e.positiveText||i.value.positiveText)),localizedNegativeText:s((()=>e.negativeText||i.value.negativeText)),positiveButtonProps:l(p,"positiveButtonProps"),negativeButtonProps:l(p,"negativeButtonProps"),handlePositiveClick(i){e.onPositiveClick(i)},handleNegativeClick(i){e.onNegativeClick(i)},themeClass:null==u?void 0:u.themeClass,onRender:null==u?void 0:u.onRender})},render(){var e;const{mergedClsPrefix:i,showIcon:n,$slots:o}=this,t=r(o.action,(()=>null===this.negativeText&&null===this.positiveText?[]:[null!==this.negativeText&&c(v,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),null!==this.positiveText&&c(v,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]));return null===(e=this.onRender)||void 0===e||e.call(this),c("div",{class:[`${i}-popconfirm__panel`,this.themeClass],style:this.cssVars},p(o.default,(e=>n||e?c("div",{class:`${i}-popconfirm__body`},n?c("div",{class:`${i}-popconfirm__icon`},r(o.icon,(()=>[c(d,{clsPrefix:i},{default:()=>c(u,null)})]))):null,e):null)),t?c("div",{class:[`${i}-popconfirm__action`]},t):null)}}),B=f("popconfirm",[h("body","\n font-size: var(--n-font-size);\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n position: relative;\n ",[h("icon","\n display: flex;\n font-size: var(--n-icon-size);\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n margin: 0 8px 0 0;\n ")]),h("action","\n display: flex;\n justify-content: flex-end;\n ",[m("&:not(:first-child)","margin-top: 8px"),f("button",[m("&:not(:last-child)","margin-right: 8px;")])])]),_=i({name:"Popconfirm",props:Object.assign(Object.assign(Object.assign({},P.props),y),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),__popover__:!0,setup(e){const{mergedClsPrefixRef:i}=o(),n=P("Popconfirm","-popconfirm",B,x,e,i),t=C(null);T(j,{mergedThemeRef:n,mergedClsPrefixRef:i,props:e});return{setShow(e){var i;null===(i=t.value)||void 0===i||i.setShow(e)},syncPosition(){var e;null===(e=t.value)||void 0===e||e.syncPosition()},mergedTheme:n,popoverInstRef:t,handlePositiveClick:function(i){var n;if(!(null===(n=t.value)||void 0===n?void 0:n.getMergedShow()))return;const{onPositiveClick:o,"onUpdate:show":s}=e;Promise.resolve(!o||o(i)).then((e=>{var i;!1!==e&&(null===(i=t.value)||void 0===i||i.setShow(!1),s&&O(s,!1))}))},handleNegativeClick:function(i){var n;if(!(null===(n=t.value)||void 0===n?void 0:n.getMergedShow()))return;const{onNegativeClick:o,"onUpdate:show":s}=e;Promise.resolve(!o||o(i)).then((e=>{var i;!1!==e&&(null===(i=t.value)||void 0===i||i.setShow(!1),s&&O(s,!1))}))}}},render(){const{$slots:e,$props:i,mergedTheme:n}=this;return c(z,b(i,S,{theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const n=k(i,S);return c(w,Object.assign(Object.assign({},n),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{_ as N};
