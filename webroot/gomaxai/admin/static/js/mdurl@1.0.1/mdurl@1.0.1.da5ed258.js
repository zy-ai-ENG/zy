
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var t={},e={};function s(t,r,a){var n,h,i,o,l,c="";for("string"!=typeof r&&(a=r,r=s.defaultChars),void 0===a&&(a=!0),l=function(t){var s,r,a=e[t];if(a)return a;for(a=e[t]=[],s=0;s<128;s++)r=String.fromCharCode(s),/^[0-9a-z]$/i.test(r)?a.push(r):a.push("%"+("0"+s.toString(16).toUpperCase()).slice(-2));for(s=0;s<t.length;s++)a[t.charCodeAt(s)]=t[s];return a}(r),n=0,h=t.length;n<h;n++)if(i=t.charCodeAt(n),a&&37===i&&n+2<h&&/^[0-9a-f]{2}$/i.test(t.slice(n+1,n+3)))c+=t.slice(n,n+3),n+=2;else if(i<128)c+=l[i];else if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&n+1<h&&(o=t.charCodeAt(n+1))>=56320&&o<=57343){c+=encodeURIComponent(t[n]+t[n+1]),n++;continue}c+="%EF%BF%BD"}else c+=encodeURIComponent(t[n]);return c}s.defaultChars=";/?:@&=+$,-_.!~*'()#",s.componentChars="-_.!~*'()";var r=s,a={};function n(t,e){var s;return"string"!=typeof e&&(e=n.defaultChars),s=function(t){var e,s,r=a[t];if(r)return r;for(r=a[t]=[],e=0;e<128;e++)s=String.fromCharCode(e),r.push(s);for(e=0;e<t.length;e++)r[s=t.charCodeAt(e)]="%"+("0"+s.toString(16).toUpperCase()).slice(-2);return r}(e),t.replace(/(%[a-f0-9]{2})+/gi,(function(t){var e,r,a,n,h,i,o,l="";for(e=0,r=t.length;e<r;e+=3)(a=parseInt(t.slice(e+1,e+3),16))<128?l+=s[a]:192==(224&a)&&e+3<r&&128==(192&(n=parseInt(t.slice(e+4,e+6),16)))?(l+=(o=a<<6&1984|63&n)<128?"��":String.fromCharCode(o),e+=3):224==(240&a)&&e+6<r&&(n=parseInt(t.slice(e+4,e+6),16),h=parseInt(t.slice(e+7,e+9),16),128==(192&n)&&128==(192&h))?(l+=(o=a<<12&61440|n<<6&4032|63&h)<2048||o>=55296&&o<=57343?"���":String.fromCharCode(o),e+=6):240==(248&a)&&e+9<r&&(n=parseInt(t.slice(e+4,e+6),16),h=parseInt(t.slice(e+7,e+9),16),i=parseInt(t.slice(e+10,e+12),16),128==(192&n)&&128==(192&h)&&128==(192&i))?((o=a<<18&1835008|n<<12&258048|h<<6&4032|63&i)<65536||o>1114111?l+="����":(o-=65536,l+=String.fromCharCode(55296+(o>>10),56320+(1023&o))),e+=9):l+="�";return l}))}n.defaultChars=";/?:@&=+$,#",n.componentChars="";var h=n;function i(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var o=/^([a-z0-9.+-]+:)/i,l=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,f=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),p=["'"].concat(f),u=["%","/","?",";","#"].concat(p),m=["/","?","#"],g=/^[+a-z0-9A-Z_-]{0,63}$/,v=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},C={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};i.prototype.parse=function(t,e){var s,r,a,n,h,i=t;if(i=i.trim(),!e&&1===t.split("#").length){var l=c.exec(i);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}var f=o.exec(i);if(f&&(a=(f=f[0]).toLowerCase(),this.protocol=f,i=i.substr(f.length)),(e||f||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(h="//"===i.substr(0,2))||f&&d[f]||(i=i.substr(2),this.slashes=!0)),!d[f]&&(h||f&&!C[f])){var p,x,I=-1;for(s=0;s<m.length;s++)-1!==(n=i.indexOf(m[s]))&&(-1===I||n<I)&&(I=n);for(-1!==(x=-1===I?i.lastIndexOf("@"):i.lastIndexOf("@",I))&&(p=i.slice(0,x),i=i.slice(x+1),this.auth=p),I=-1,s=0;s<u.length;s++)-1!==(n=i.indexOf(u[s]))&&(-1===I||n<I)&&(I=n);-1===I&&(I=i.length),":"===i[I-1]&&I--;var b=i.slice(0,I);i=i.slice(I),this.parseHost(b),this.hostname=this.hostname||"";var $="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!$){var A=this.hostname.split(/\./);for(s=0,r=A.length;s<r;s++){var O=A[s];if(O&&!O.match(g)){for(var S="",j=0,y=O.length;j<y;j++)O.charCodeAt(j)>127?S+="x":S+=O[j];if(!S.match(g)){var z=A.slice(0,s),U=A.slice(s+1),_=O.match(v);_&&(z.push(_[1]),U.unshift(_[2])),U.length&&(i=U.join(".")+i),this.hostname=z.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),$&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var w=i.indexOf("#");-1!==w&&(this.hash=i.substr(w),i=i.slice(0,w));var B=i.indexOf("?");return-1!==B&&(this.search=i.substr(B),i=i.slice(0,B)),i&&(this.pathname=i),C[a]&&this.hostname&&!this.pathname&&(this.pathname=""),this},i.prototype.parseHost=function(t){var e=l.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};var x=function(t,e){if(t&&t instanceof i)return t;var s=new i;return s.parse(t,e),s};t.encode=r,t.decode=h,t.format=function(t){var e="";return e+=t.protocol||"",e+=t.slashes?"//":"",e+=t.auth?t.auth+"@":"",t.hostname&&-1!==t.hostname.indexOf(":")?e+="["+t.hostname+"]":e+=t.hostname||"",e+=t.port?":"+t.port:"",e+=t.pathname||"",e+=t.search||"",e+=t.hash||""},t.parse=x;export{t as m};