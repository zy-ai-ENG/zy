
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var t,e=new RegExp("^("+["abs","acos","aj","aj0","all","and","any","asc","asin","asof","atan","attr","avg","avgs","bin","by","ceiling","cols","cor","cos","count","cov","cross","csv","cut","delete","deltas","desc","dev","differ","distinct","div","do","each","ej","enlist","eval","except","exec","exit","exp","fby","fills","first","fkeys","flip","floor","from","get","getenv","group","gtime","hclose","hcount","hdel","hopen","hsym","iasc","idesc","if","ij","in","insert","inter","inv","key","keys","last","like","list","lj","load","log","lower","lsq","ltime","ltrim","mavg","max","maxs","mcount","md5","mdev","med","meta","min","mins","mmax","mmin","mmu","mod","msum","neg","next","not","null","or","over","parse","peach","pj","plist","prd","prds","prev","prior","rand","rank","ratios","raze","read0","read1","reciprocal","reverse","rload","rotate","rsave","rtrim","save","scan","select","set","setenv","show","signum","sin","sqrt","ss","ssr","string","sublist","sum","sums","sv","system","tables","tan","til","trim","txf","type","uj","ungroup","union","update","upper","upsert","value","var","view","views","vs","wavg","where","where","while","within","wj","wj1","wsum","xasc","xbar","xcol","xcols","xdesc","xexp","xgroup","xkey","xlog","xprev","xrank"].join("|")+")$"),n=/[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;function r(i,c){var l=i.sol(),u=i.next();if(t=null,l){if("/"==u)return(c.tokenize=o)(i,c);if("\\"==u)return i.eol()||/\s/.test(i.peek())?(i.skipToEnd(),/^\\\s*$/.test(i.current())?(c.tokenize=s)(i):c.tokenize=r,"comment"):(c.tokenize=r,"builtin")}if(/\s/.test(u))return"/"==i.peek()?(i.skipToEnd(),"comment"):"null";if('"'==u)return(c.tokenize=a)(i,c);if("`"==u)return i.eatWhile(/[A-Za-z\d_:\/.]/),"macroName";if("."==u&&/\d/.test(i.peek())||/\d/.test(u)){var d=null;return i.backUp(1),i.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/)||i.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/)||i.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/)||i.match(/^\d+[ptuv]{1}/)?d="temporal":(i.match(/^0[NwW]{1}/)||i.match(/^0x[\da-fA-F]*/)||i.match(/^[01]+[b]{1}/)||i.match(/^\d+[chijn]{1}/)||i.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/))&&(d="number"),!d||(u=i.peek())&&!n.test(u)?(i.next(),"error"):d}return/[A-Za-z]|\./.test(u)?(i.eatWhile(/[A-Za-z._\d]/),e.test(i.current())?"keyword":"variable"):/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(u)||/[{}\(\[\]\)]/.test(u)?null:"error"}function o(t,e){return t.skipToEnd(),/\/\s*$/.test(t.current())?(e.tokenize=i)(t,e):e.tokenize=r,"comment"}function i(t,e){var n=t.sol()&&"\\"==t.peek();return t.skipToEnd(),n&&/^\\\s*$/.test(t.current())&&(e.tokenize=r),"comment"}function s(t){return t.skipToEnd(),"comment"}function a(t,e){for(var n,o=!1,i=!1;n=t.next();){if('"'==n&&!o){i=!0;break}o=!o&&"\\"==n}return i&&(e.tokenize=r),"string"}function c(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function l(t){t.indent=t.context.indent,t.context=t.context.prev}const u={name:"q",startState:function(){return{tokenize:r,context:null,indent:0,col:0}},token:function(e,n){e.sol()&&(n.context&&null==n.context.align&&(n.context.align=!1),n.indent=e.indentation());var r=n.tokenize(e,n);if("comment"!=r&&n.context&&null==n.context.align&&"pattern"!=n.context.type&&(n.context.align=!0),"("==t)c(n,")",e.column());else if("["==t)c(n,"]",e.column());else if("{"==t)c(n,"}",e.column());else if(/[\]\}\)]/.test(t)){for(;n.context&&"pattern"==n.context.type;)l(n);n.context&&t==n.context.type&&l(n)}else"."==t&&n.context&&"pattern"==n.context.type?l(n):/atom|string|variable/.test(r)&&n.context&&(/[\}\]]/.test(n.context.type)?c(n,"pattern",e.column()):"pattern"!=n.context.type||n.context.align||(n.context.align=!0,n.context.col=e.column()));return r},indent:function(t,e,n){var r=e&&e.charAt(0),o=t.context;if(/[\]\}]/.test(r))for(;o&&"pattern"==o.type;)o=o.prev;var i=o&&r==o.type;return o?"pattern"==o.type?o.col:o.align?o.col+(i?0:1):o.indent+(i?0:n.unit):0}};export{u as q};
