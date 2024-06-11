
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{p as e}from"../@lezer_json@1.0.0/@lezer_json@1.0.0.c44afa11.js";import{L as r,d as t,e as o,j as s,k as a,c as n}from"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";import"../@lezer_lr@1.3.4/@lezer_lr@1.3.4.69ac56de.js";import"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";import"../w3c-keyname@2.2.6/w3c-keyname@2.2.6.89c2fad7.js";const m=()=>e=>{try{JSON.parse(e.state.doc.toString())}catch(r){if(!(r instanceof SyntaxError))throw r;const t=function(e,r){let t;return(t=e.message.match(/at position (\d+)/))?Math.min(+t[1],r.length):(t=e.message.match(/at line (\d+) column (\d+)/))?Math.min(r.line(+t[1]).from+ +t[2]-1,r.length):0}(r,e.state.doc);return[{from:t,message:r.message,severity:"error",to:t}]}return[]};const i=r.define({name:"json",parser:e.configure({props:[t.add({Object:o({except:/^\s*\}/}),Array:o({except:/^\s*\]/})}),s.add({"Object Array":a})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function c(){return new n(i)}export{c as json,i as jsonLanguage,m as jsonParseLinter};
