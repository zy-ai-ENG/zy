
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var r=/^-+$/,e=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /,t=/^[\w+.-]+@[\w.-]+/;const a={name:"rpmchanges",token:function(a){if(a.sol()){if(a.match(r))return"tag";if(a.match(e))return"tag"}return a.match(t)?"string":(a.next(),null)}};var n=/^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/,c=/^[a-zA-Z0-9()]+:/,o=/^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/,i=/^%(ifnarch|ifarch|if)/,p=/^%(else|endif)/,u=/^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;const l={name:"rpmspec",startState:function(){return{controlFlow:!1,macroParameters:!1,section:!1}},token:function(r,e){if("#"==r.peek())return r.skipToEnd(),"comment";if(r.sol()){if(r.match(c))return"header";if(r.match(o))return"atom"}if(r.match(/^\$\w+/))return"def";if(r.match(/^\$\{\w+\}/))return"def";if(r.match(p))return"keyword";if(r.match(i))return e.controlFlow=!0,"keyword";if(e.controlFlow){if(r.match(u))return"operator";if(r.match(/^(\d+)/))return"number";r.eol()&&(e.controlFlow=!1)}if(r.match(n))return r.eol()&&(e.controlFlow=!1),"number";if(r.match(/^%[\w]+/))return r.match("(")&&(e.macroParameters=!0),"keyword";if(e.macroParameters){if(r.match(/^\d+/))return"number";if(r.match(")"))return e.macroParameters=!1,"keyword"}return r.match(/^%\{\??[\w \-\:\!]+\}/)?(r.eol()&&(e.controlFlow=!1),"def"):(r.next(),null)}};export{a as rpmChanges,l as rpmSpec};