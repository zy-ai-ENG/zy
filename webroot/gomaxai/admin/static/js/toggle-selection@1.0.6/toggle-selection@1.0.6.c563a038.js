
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var e=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],a=0;a<e.rangeCount;a++)t.push(e.getRangeAt(a));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(n){e.addRange(n)})),n&&n.focus()}};export{e as t};
