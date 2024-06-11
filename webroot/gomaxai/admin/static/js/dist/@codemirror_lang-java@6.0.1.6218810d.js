
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{p as e}from"../@lezer_java@1.0.3/@lezer_java@1.0.3.585070c8.js";import{L as t,d as r,e as o,f as a,h as l,j as n,k as s,c as m}from"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";import"../@lezer_lr@1.3.4/@lezer_lr@1.3.4.69ac56de.js";import"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";import"../w3c-keyname@2.2.6/w3c-keyname@2.2.6.89c2fad7.js";const i=t.define({name:"java",parser:e.configure({props:[r.add({IfStatement:o({except:/^\s*({|else\b)/}),TryStatement:o({except:/^\s*({|catch|finally)\b/}),LabeledStatement:a,SwitchBlock:e=>{let t=e.textAfter,r=/^\s*\}/.test(t),o=/^\s*(case|default)\b/.test(t);return e.baseIndent+(r?0:o?1:2)*e.unit},Block:l({closing:"}"}),BlockComment:()=>null,Statement:o({except:/^{/})}),n.add({"Block SwitchBlock ClassBody ElementValueArrayInitializer ModuleBody EnumBody ConstructorBody InterfaceBody ArrayInitializer":s,BlockComment:e=>({from:e.from+2,to:e.to-2})})]}),languageData:{commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case |default:|\{|\})$/}});function c(){return new m(i)}export{c as java,i as javaLanguage};
