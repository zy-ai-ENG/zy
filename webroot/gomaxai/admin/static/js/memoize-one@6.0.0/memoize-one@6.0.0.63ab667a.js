
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var t=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function r(r,n){if(r.length!==n.length)return!1;for(var e=0;e<r.length;e++)if(l=r[e],u=n[e],!(l===u||t(l)&&t(u)))return!1;var l,u;return!0}function n(t,n){void 0===n&&(n=r);var e=null;function l(){for(var r=[],l=0;l<arguments.length;l++)r[l]=arguments[l];if(e&&e.lastThis===this&&n(r,e.lastArgs))return e.lastResult;var u=t.apply(this,r);return e={lastResult:u,lastArgs:r,lastThis:this},u}return l.clear=function(){e=null},l}export{n as m};
