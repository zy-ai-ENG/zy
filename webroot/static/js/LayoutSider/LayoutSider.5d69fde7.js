import{b$ as o,c0 as e,c1 as t,c2 as r,d as n,c3 as l,c4 as a,c5 as s,c6 as i,Q as c,c7 as d,y as g,c as b,c8 as u,c9 as p,ca as h,cb as v,cc as f,cd as m,ce as y,cf as x,cg as C,ch as S,ci as T,cj as z}from"../main-c6e244ef.js";const w=o("layout-sider","\n flex-shrink: 0;\n box-sizing: border-box;\n position: relative;\n z-index: 1;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n min-width .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n transform .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n display: flex;\n justify-content: flex-end;\n",[e("bordered",[t("border",'\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 1px;\n background-color: var(--n-border-color);\n transition: background-color .3s var(--n-bezier);\n ')]),t("left-placement",[e("bordered",[t("border","\n right: 0;\n ")])]),e("right-placement","\n justify-content: flex-start;\n ",[e("bordered",[t("border","\n left: 0;\n ")]),e("collapsed",[o("layout-toggle-button",[o("base-icon","\n transform: rotate(180deg);\n ")]),o("layout-toggle-bar",[r("&:hover",[t("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),o("layout-toggle-button","\n left: 0;\n transform: translateX(-50%) translateY(-50%);\n ",[o("base-icon","\n transform: rotate(0);\n ")]),o("layout-toggle-bar","\n left: -28px;\n transform: rotate(180deg);\n ",[r("&:hover",[t("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),e("collapsed",[o("layout-toggle-bar",[r("&:hover",[t("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),o("layout-toggle-button",[o("base-icon","\n transform: rotate(0);\n ")])]),o("layout-toggle-button","\n transition:\n color .3s var(--n-bezier),\n right .3s var(--n-bezier),\n left .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n cursor: pointer;\n width: 24px;\n height: 24px;\n position: absolute;\n top: 50%;\n right: 0;\n border-radius: 50%;\n display: flex;\n align-items: center;\n justify-content: center;\n font-size: 18px;\n color: var(--n-toggle-button-icon-color);\n border: var(--n-toggle-button-border);\n background-color: var(--n-toggle-button-color);\n box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);\n transform: translateX(50%) translateY(-50%);\n z-index: 1;\n ",[o("base-icon","\n transition: transform .3s var(--n-bezier);\n transform: rotate(180deg);\n ")]),o("layout-toggle-bar","\n cursor: pointer;\n height: 72px;\n width: 32px;\n position: absolute;\n top: calc(50% - 36px);\n right: -28px;\n ",[t("top, bottom","\n position: absolute;\n width: 4px;\n border-radius: 2px;\n height: 38px;\n left: 14px;\n transition: \n background-color .3s var(--n-bezier),\n transform .3s var(--n-bezier);\n "),t("bottom","\n position: absolute;\n top: 34px;\n "),r("&:hover",[t("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),t("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),r("&:hover",[t("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),t("border","\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n width: 1px;\n transition: background-color .3s var(--n-bezier);\n "),o("layout-sider-scroll-container","\n flex-grow: 1;\n flex-shrink: 0;\n box-sizing: border-box;\n height: 100%;\n opacity: 0;\n transition: opacity .3s var(--n-bezier);\n max-width: 100%;\n "),e("show-content",[o("layout-sider-scroll-container",{opacity:1})]),e("absolute-positioned","\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n ")]),k=n({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:o}=this;return l("div",{class:`${o}-layout-toggle-button`,onClick:this.onClick},l(a,{clsPrefix:o},{default:()=>l(s,null)}))}}),B=n({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:o}=this;return l("div",{onClick:this.onClick,class:`${o}-layout-toggle-bar`},l("div",{class:`${o}-layout-toggle-bar__top`}),l("div",{class:`${o}-layout-toggle-bar__bottom`}))}}),$={position:T,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},P=n({name:"LayoutSider",props:Object.assign(Object.assign({},i.props),$),setup(o){const e=c(d),t=g(null),r=g(null),n=b((()=>u(S.value?o.collapsedWidth:o.width))),l=b((()=>"transform"!==o.collapseMode?{}:{minWidth:u(o.width)})),a=b((()=>e?e.siderPlacement:"left")),s=g(o.defaultCollapsed),S=p(h(o,"collapsed"),s);let T=0,k=0;v((()=>{if(o.nativeScrollbar){const o=t.value;o&&(o.scrollTop=k,o.scrollLeft=T)}})),f(m,{collapsedRef:S,collapseModeRef:h(o,"collapseMode")});const{mergedClsPrefixRef:B,inlineThemeDisabled:$}=y(o),P=i("Layout","-layout-sider",w,x,o,B);const j={scrollTo:function(e,n){if(o.nativeScrollbar){const{value:o}=t;o&&(void 0===n?o.scrollTo(e):o.scrollTo(e,n))}else{const{value:o}=r;o&&o.scrollTo(e,n)}}},O=b((()=>{const{common:{cubicBezierEaseInOut:e},self:t}=P.value,{siderToggleButtonColor:r,siderToggleButtonBorder:n,siderToggleBarColor:l,siderToggleBarColorHover:a}=t,s={"--n-bezier":e,"--n-toggle-button-color":r,"--n-toggle-button-border":n,"--n-toggle-bar-color":l,"--n-toggle-bar-color-hover":a};return o.inverted?(s["--n-color"]=t.siderColorInverted,s["--n-text-color"]=t.textColorInverted,s["--n-border-color"]=t.siderBorderColorInverted,s["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,s.__invertScrollbar=t.__invertScrollbar):(s["--n-color"]=t.siderColor,s["--n-text-color"]=t.textColor,s["--n-border-color"]=t.siderBorderColor,s["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),s})),_=$?C("layout-sider",b((()=>o.inverted?"a":"b")),O,o):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:B,mergedTheme:P,styleMaxWidth:n,mergedCollapsed:S,scrollContainerStyle:l,siderPlacement:a,handleNativeElScroll:e=>{var t;const r=e.target;T=r.scrollLeft,k=r.scrollTop,null===(t=o.onScroll)||void 0===t||t.call(o,e)},handleTransitionend:function(e){var t,r;"max-width"===e.propertyName&&(S.value?null===(t=o.onAfterLeave)||void 0===t||t.call(o):null===(r=o.onAfterEnter)||void 0===r||r.call(o))},handleTriggerClick:function(){const{"onUpdate:collapsed":e,onUpdateCollapsed:t,onExpand:r,onCollapse:n}=o,{value:l}=S;t&&z(t,!l),e&&z(e,!l),s.value=!l,l?r&&z(r):n&&z(n)},inlineThemeDisabled:$,cssVars:O,themeClass:null==_?void 0:_.themeClass,onRender:null==_?void 0:_.onRender},j)},render(){var o;const{mergedClsPrefix:e,mergedCollapsed:t,showTrigger:r}=this;return null===(o=this.onRender)||void 0===o||o.call(this),l("aside",{class:[`${e}-layout-sider`,this.themeClass,`${e}-layout-sider--${this.position}-positioned`,`${e}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${e}-layout-sider--bordered`,t&&`${e}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${e}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:u(this.width)}]},this.nativeScrollbar?l("div",{class:[`${e}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):l(S,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&"true"===this.cssVars.__invertScrollbar?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?l("bar"===r?B:k,{clsPrefix:e,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?l("div",{class:`${e}-layout-sider__border`}):null)}});export{P as N};
