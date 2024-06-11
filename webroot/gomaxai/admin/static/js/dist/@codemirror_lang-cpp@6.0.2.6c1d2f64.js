
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{p as e}from"../@lezer_cpp@1.1.0/@lezer_cpp@1.1.0.56af230f.js";import{L as t,d as r,e as o,f as a,h as m,j as n,k as s,c as i}from"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";import"../@lezer_lr@1.3.4/@lezer_lr@1.3.4.69ac56de.js";import"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";import"../w3c-keyname@2.2.6/w3c-keyname@2.2.6.89c2fad7.js";const c=t.define({name:"cpp",parser:e.configure({props:[r.add({IfStatement:o({except:/^\s*({|else\b)/}),TryStatement:o({except:/^\s*({|catch)\b/}),LabeledStatement:a,CaseStatement:e=>e.baseIndent+e.unit,BlockComment:()=>null,CompoundStatement:m({closing:"}"}),Statement:o({except:/^{/})}),n.add({"DeclarationList CompoundStatement EnumeratorList FieldDeclarationList InitializerList":s,BlockComment:e=>({from:e.from+2,to:e.to-2})})]}),languageData:{commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case |default:|\{|\})$/,closeBrackets:{stringPrefixes:["L","u","U","u8","LR","UR","uR","u8R","R"]}}});function l(){return new i(c)}export{l as cpp,c as cppLanguage};
