
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
function e(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var a=1,i="";if("?"===e[f=r+1])throw new TypeError('Pattern cannot start with "?" at '.concat(f));for(;f<e.length;)if("\\"!==e[f]){if(")"===e[f]){if(0==--a){f++;break}}else if("("===e[f]&&(a++,"?"!==e[f+1]))throw new TypeError("Capturing groups are not allowed at ".concat(f));i+=e[f++]}else i+=e[f++]+e[f++];if(a)throw new TypeError("Unbalanced pattern at ".concat(r));if(!i)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:i}),r=f}else{for(var o="",f=r+1;f<e.length;){var c=e.charCodeAt(f);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;o+=e[f++]}if(!o)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:o}),r=f}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,a=void 0===n?"./":n,i="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),o=[],f=0,c=0,p="",u=function(e){if(c<r.length&&r[c].type===e)return r[c++].value},s=function(e){var t=u(e);if(void 0!==t)return t;var n=r[c],a=n.type,i=n.index;throw new TypeError("Unexpected ".concat(a," at ").concat(i,", expected ").concat(e))},l=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};c<r.length;){var v=u("CHAR"),E=u("NAME"),d=u("PATTERN");if(E||d){var h=v||"";-1===a.indexOf(h)&&(p+=h,h=""),p&&(o.push(p),p=""),o.push({name:E||f++,prefix:h,suffix:"",pattern:d||i,modifier:u("MODIFIER")||""})}else{var y=v||u("ESCAPED_CHAR");if(y)p+=y;else if(p&&(o.push(p),p=""),u("OPEN")){h=l();var x=u("NAME")||"",w=u("PATTERN")||"",m=l();s("CLOSE"),o.push({name:x||(w?f++:""),pattern:x&&!w?i:w,prefix:h,suffix:m,modifier:u("MODIFIER")||""})}else s("END")}}return o}function t(t,r){return function(e,t){void 0===t&&(t={});var r=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,a=void 0===n?function(e){return e}:n,i=t.validate,o=void 0===i||i,f=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),r)}));return function(t){for(var r="",n=0;n<e.length;n++){var i=e[n];if("string"!=typeof i){var c=t?t[i.name]:void 0,p="?"===i.modifier||"*"===i.modifier,u="*"===i.modifier||"+"===i.modifier;if(Array.isArray(c)){if(!u)throw new TypeError('Expected "'.concat(i.name,'" to not repeat, but got an array'));if(0===c.length){if(p)continue;throw new TypeError('Expected "'.concat(i.name,'" to not be empty'))}for(var s=0;s<c.length;s++){var l=a(c[s],i);if(o&&!f[n].test(l))throw new TypeError('Expected all "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(l,'"'));r+=i.prefix+l+i.suffix}}else if("string"!=typeof c&&"number"!=typeof c){if(!p){var v=u?"an array":"a string";throw new TypeError('Expected "'.concat(i.name,'" to be ').concat(v))}}else{l=a(String(c),i);if(o&&!f[n].test(l))throw new TypeError('Expected "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(l,'"'));r+=i.prefix+l+i.suffix}}else r+=i}return r}}(e(t,r),r)}export{t as c};
