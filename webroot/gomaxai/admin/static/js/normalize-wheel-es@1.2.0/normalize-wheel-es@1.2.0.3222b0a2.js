
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var e,n,t,i,r,o,a,d,u,c,l,s,f,p,w,m=!1;function x(){if(!m){m=!0;var x=navigator.userAgent,v=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(x),h=/(Mac OS X)|(Windows)|(Linux)/.exec(x);if(s=/\b(iPhone|iP[ao]d)/.exec(x),f=/\b(iP[ao]d)/.exec(x),c=/Android/i.exec(x),p=/FBAN\/\w+;/i.exec(x),w=/Mobile/i.exec(x),l=!!/Win64/.exec(x),v){(e=v[1]?parseFloat(v[1]):v[5]?parseFloat(v[5]):NaN)&&document&&document.documentMode&&(e=document.documentMode);var N=/(?:Trident\/(\d+.\d+))/.exec(x);o=N?parseFloat(N[1])+4:e,n=v[2]?parseFloat(v[2]):NaN,t=v[3]?parseFloat(v[3]):NaN,(i=v[4]?parseFloat(v[4]):NaN)?(v=/(?:Chrome\/(\d+\.\d+))/.exec(x),r=v&&v[1]?parseFloat(v[1]):NaN):r=NaN}else e=n=t=r=i=NaN;if(h){if(h[1]){var M=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(x);a=!M||parseFloat(M[1].replace("_","."))}else a=!1;d=!!h[2],u=!!h[3]}else a=d=u=!1}}var v,h={ie:function(){return x()||e},ieCompatibilityMode:function(){return x()||o>e},ie64:function(){return h.ie()&&l},firefox:function(){return x()||n},opera:function(){return x()||t},webkit:function(){return x()||i},safari:function(){return h.webkit()},chrome:function(){return x()||r},windows:function(){return x()||d},osx:function(){return x()||a},linux:function(){return x()||u},iphone:function(){return x()||s},mobile:function(){return x()||s||f||c||w},nativeApp:function(){return x()||p},android:function(){return x()||c},ipad:function(){return x()||f}},N=h,M=!!(typeof window<"u"&&window.document&&window.document.createElement),F={canUseDOM:M,canUseWorkers:typeof Worker<"u",canUseEventListeners:M&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:M&&!!window.screen,isInWorker:!M};F.canUseDOM&&(v=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var D=function(e,n){if(!F.canUseDOM||n&&!("addEventListener"in document))return!1;var t="on"+e,i=t in document;if(!i){var r=document.createElement("div");r.setAttribute(t,"return;"),i="function"==typeof r[t]}return!i&&v&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i};function b(e){var n=0,t=0,i=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(n=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(n=t,t=0),i=10*n,r=10*t,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||r)&&e.deltaMode&&(1==e.deltaMode?(i*=40,r*=40):(i*=800,r*=800)),i&&!n&&(n=i<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:n,spinY:t,pixelX:i,pixelY:r}}b.getEventType=function(){return N.firefox()?"DOMMouseScroll":D("wheel")?"wheel":"mousewheel"};var E=b;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/export{E as Y};
