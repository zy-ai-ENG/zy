
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{p as e}from"../@lezer_sass@1.0.1/@lezer_sass@1.0.1.f94e6dd6.js";import{L as o,j as r,k as s,d as t,e as m,c as i}from"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";import{cssCompletionSource as a}from"./@codemirror_lang-css@6.2.0_@codemirror_view@6.10.1.a40e4ad4.js";import"../@lezer_lr@1.3.4/@lezer_lr@1.3.4.69ac56de.js";import"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";import"../w3c-keyname@2.2.6/w3c-keyname@2.2.6.89c2fad7.js";import"../@lezer_css@1.1.1/@lezer_css@1.1.1.57763336.js";const n=o.define({name:"sass",parser:e.configure({props:[r.add({Block:s,Comment:(e,o)=>({from:e.from+2,to:"*/"==o.sliceDoc(e.to-2,e.to)?e.to-2:e.to})}),t.add({Declaration:m()})]}),languageData:{commentTokens:{block:{open:"/*",close:"*/"},line:"//"},indentOnInput:/^\s*\}$/,wordChars:"$-"}}),l=n.configure({dialect:"indented",props:[t.add({"Block RuleSet":e=>e.baseIndent+e.unit}),r.add({Block:e=>({from:e.from,to:e.to})})]});function c(e){return new i((null==e?void 0:e.indented)?l:n,n.data.of({autocomplete:a}))}export{c as sass,n as sassLanguage};
