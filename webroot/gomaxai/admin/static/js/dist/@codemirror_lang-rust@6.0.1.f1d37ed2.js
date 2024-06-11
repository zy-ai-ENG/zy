
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{p as e}from"../@lezer_rust@1.0.0/@lezer_rust@1.0.0.455f89fd.js";import{L as r,d as o,e as t,j as s,k as m,c as n}from"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";import"../@lezer_lr@1.3.4/@lezer_lr@1.3.4.69ac56de.js";import"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";import"../w3c-keyname@2.2.6/w3c-keyname@2.2.6.89c2fad7.js";const i=r.define({name:"rust",parser:e.configure({props:[o.add({IfExpression:t({except:/^\s*({|else\b)/}),"String BlockComment":()=>null,AttributeItem:e=>e.continue(),"Statement MatchArm":t()}),s.add((e=>/(Block|edTokens|List)$/.test(e.name)?m:"BlockComment"==e.name?e=>({from:e.from+2,to:e.to-2}):void 0))]}),languageData:{commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:\{|\})$/,closeBrackets:{stringPrefixes:["b","r","br"]}}});function a(){return new n(i)}export{a as rust,i as rustLanguage};
