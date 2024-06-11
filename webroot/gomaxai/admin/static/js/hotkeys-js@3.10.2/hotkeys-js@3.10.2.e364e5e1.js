
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var e="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function t(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function n(e,t){for(var n=t.slice(0,t.length-1),o=0;o<n.length;o++)n[o]=e[n[o].toLowerCase()];return n}function o(e){"string"!=typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var r={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":e?173:189,"=":e?61:187,";":e?59:186,"'":222,"[":219,"]":221,"\\":220},i={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},a={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},c={16:!1,18:!1,17:!1,91:!1},f={},l=1;l<20;l++)r["f".concat(l)]=111+l;var u=[],s=!1,p="all",d=[],y=function(e){return r[e.toLowerCase()]||i[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function h(e){p=e||"all"}function m(){return p||"all"}var v=function(e){var t=e.key,r=e.scope,a=e.method,c=e.splitKey,l=void 0===c?"+":c;o(t).forEach((function(e){var t=e.split(l),o=t.length,c=t[o-1],u="*"===c?"*":y(c);if(f[u]){r||(r=m());var s=o>1?n(i,t):[];f[u]=f[u].filter((function(e){return!((!a||e.method===a)&&e.scope===r&&function(e,t){for(var n=e.length>=t.length?e:t,o=e.length>=t.length?t:e,r=!0,i=0;i<n.length;i++)-1===o.indexOf(n[i])&&(r=!1);return r}(e.mods,s))}))}}))};function g(e,t,n,o){var r;if(t.element===o&&(t.scope===n||"all"===t.scope)){for(var i in r=t.mods.length>0,c)Object.prototype.hasOwnProperty.call(c,i)&&(!c[i]&&t.mods.indexOf(+i)>-1||c[i]&&-1===t.mods.indexOf(+i))&&(r=!1);(0!==t.mods.length||c[16]||c[18]||c[17]||c[91])&&!r&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function k(e,t){var n=f["*"],o=e.keyCode||e.which||e.charCode;if(w.filter.call(this,e)){if(93!==o&&224!==o||(o=91),-1===u.indexOf(o)&&229!==o&&u.push(o),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=a[t];e[t]&&-1===u.indexOf(n)?u.push(n):!e[t]&&u.indexOf(n)>-1?u.splice(u.indexOf(n),1):"metaKey"===t&&e[t]&&3===u.length&&(e.ctrlKey||e.shiftKey||e.altKey||(u=u.slice(u.indexOf(n))))})),o in c){for(var r in c[o]=!0,i)i[r]===o&&(w[r]=!0);if(!n)return}for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(c[l]=e[a[l]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===u.indexOf(17)&&u.push(17),-1===u.indexOf(18)&&u.push(18),c[17]=!0,c[18]=!0);var s=m();if(n)for(var p=0;p<n.length;p++)n[p].scope===s&&("keydown"===e.type&&n[p].keydown||"keyup"===e.type&&n[p].keyup)&&g(e,n[p],s,t);if(o in f)for(var d=0;d<f[o].length;d++)if(("keydown"===e.type&&f[o][d].keydown||"keyup"===e.type&&f[o][d].keyup)&&f[o][d].key){for(var h=f[o][d],v=h.splitKey,k=h.key.split(v),O=[],K=0;K<k.length;K++)O.push(y(k[K]));O.sort().join("")===u.sort().join("")&&g(e,h,s,t)}}}function w(e,r,a){u=[];var l=o(e),p=[],h="all",m=document,v=0,g=!1,O=!0,K="+",b=!1;for(void 0===a&&"function"==typeof r&&(a=r),"[object Object]"===Object.prototype.toString.call(r)&&(r.scope&&(h=r.scope),r.element&&(m=r.element),r.keyup&&(g=r.keyup),void 0!==r.keydown&&(O=r.keydown),void 0!==r.capture&&(b=r.capture),"string"==typeof r.splitKey&&(K=r.splitKey)),"string"==typeof r&&(h=r);v<l.length;v++)p=[],(e=l[v].split(K)).length>1&&(p=n(i,e)),(e="*"===(e=e[e.length-1])?"*":y(e))in f||(f[e]=[]),f[e].push({keyup:g,keydown:O,scope:h,mods:p,shortcut:l[v],method:a,key:l[v],splitKey:K,element:m});void 0!==m&&!function(e){return d.indexOf(e)>-1}(m)&&window&&(d.push(m),t(m,"keydown",(function(e){k(e,m)}),b),s||(s=!0,t(window,"focus",(function(){u=[]}),b)),t(m,"keyup",(function(e){k(e,m),function(e){var t=e.keyCode||e.which||e.charCode,n=u.indexOf(t);if(n>=0&&u.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&u.splice(0,u.length),93!==t&&224!==t||(t=91),t in c)for(var o in c[t]=!1,i)i[o]===t&&(w[o]=!1)}(e)}),b))}var O={getPressedKeyString:function(){return u.map((function(e){return t=e,Object.keys(r).find((function(e){return r[e]===t}))||function(e){return Object.keys(i).find((function(t){return i[t]===e}))}(e)||String.fromCharCode(e);var t}))},setScope:h,getScope:m,deleteScope:function(e,t){var n,o;for(var r in e||(e=m()),f)if(Object.prototype.hasOwnProperty.call(f,r))for(n=f[r],o=0;o<n.length;)n[o].scope===e?n.splice(o,1):o++;m()===e&&h(t||"all")},getPressedKeyCodes:function(){return u.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=y(e)),-1!==u.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,o=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||t.readOnly)||(o=!1),o},trigger:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(f).forEach((function(n){f[n].filter((function(n){return n.scope===t&&n.shortcut===e})).forEach((function(e){e&&e.method&&e.method()}))}))},unbind:function(e){if(void 0===e)Object.keys(f).forEach((function(e){return delete f[e]}));else if(Array.isArray(e))e.forEach((function(e){e.key&&v(e)}));else if("object"==typeof e)e.key&&v(e);else if("string"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=n[0],i=n[1];"function"==typeof r&&(i=r,r=""),v({key:e,scope:r,method:i,splitKey:"+"})}},keyMap:r,modifier:i,modifierMap:a};for(var K in O)Object.prototype.hasOwnProperty.call(O,K)&&(w[K]=O[K]);if("undefined"!=typeof window){var b=window.hotkeys;w.noConflict=function(e){return e&&window.hotkeys===w&&(window.hotkeys=b),w},window.hotkeys=w}export{w as h};
