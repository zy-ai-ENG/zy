
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{g as e}from"../copy-to-clipboard@3.3.3/copy-to-clipboard@3.3.3.e0d05bd3.js";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var r=/["'&<>]/;const a=e((function(e){var a,t=""+e,c=r.exec(t);if(!c)return t;var o="",s=0,n=0;for(s=c.index;s<t.length;s++){switch(t.charCodeAt(s)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 39:a="&#39;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==s&&(o+=t.substring(n,s)),n=s+1,o+=a}return n!==s?o+t.substring(n,s):o}));export{a as e};
