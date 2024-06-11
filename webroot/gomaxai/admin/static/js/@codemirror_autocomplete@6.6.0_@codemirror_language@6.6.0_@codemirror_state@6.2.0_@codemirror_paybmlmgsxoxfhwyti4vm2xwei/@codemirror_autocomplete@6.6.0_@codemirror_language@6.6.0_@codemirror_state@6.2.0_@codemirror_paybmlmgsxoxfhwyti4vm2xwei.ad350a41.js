
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{T as e,S as t,P as o,R as n,A as i,a as l,E as c,F as r,M as s}from"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import{k as a,E as m,D as f,W as p}from"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import{s as d,i as u}from"../@codemirror_language@6.6.0/@codemirror_language@6.6.0.b1412095.js";function g(e){let t=Object.keys(e).join(""),o=/\w/.test(t);return o&&(t=t.replace(/\w/g,"")),`[${o?"\\w":""}${t.replace(/[^\w\s]/g,"\\$&")}]`}function h(e){let t=e.map((e=>"string"==typeof e?{label:e}:e)),[o,n]=t.every((e=>/^\w+$/.test(e.label)))?[/\w*$/,/\w+$/]:function(e){let t=Object.create(null),o=Object.create(null);for(let{label:i}of e){t[i[0]]=!0;for(let e=1;e<i.length;e++)o[i[e]]=!0}let n=g(t)+g(o)+"*$";return[new RegExp("^"+n),new RegExp(n)]}(t);return e=>{let i=e.matchBefore(n);return i||e.explicit?{from:i?i.from:e.pos,options:t,validFor:o}:null}}function x(e,t){return o=>{for(let t=d(o.state).resolveInner(o.pos,-1);t;t=t.parent){if(e.indexOf(t.name)>-1)return null;if(t.type.isTop)break}return t(o)}}const w=i.define(),b=m.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}});class I{constructor(e,t,o,n){this.field=e,this.line=t,this.from=o,this.to=n}}class v{constructor(e,t,o){this.field=e,this.from=t,this.to=o}map(e){let t=e.mapPos(this.from,-1,s.TrackDel),o=e.mapPos(this.to,1,s.TrackDel);return null==t||null==o?null:new v(this.field,t,o)}}class k{constructor(e,t){this.lines=e,this.fieldPositions=t}instantiate(e,t){let o=[],n=[t],i=e.doc.lineAt(t),l=/^\s*/.exec(i.text)[0];for(let c of this.lines){if(o.length){let o=l,i=/^\t*/.exec(c)[0].length;for(let t=0;t<i;t++)o+=e.facet(u);n.push(t+o.length-i),c=o+c.slice(i)}o.push(c),t+=c.length+1}return{text:o,ranges:this.fieldPositions.map((e=>new v(e.field,n[e.line]+e.from,n[e.line]+e.to)))}}static parse(e){let t,o=[],n=[],i=[];for(let l of e.split(/\r\n?|\n/)){for(;t=/[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(l);){let e=t[1]?+t[1]:null,c=t[2]||t[3]||"",r=-1;for(let t=0;t<o.length;t++)(null!=e?o[t].seq==e:c&&o[t].name==c)&&(r=t);if(r<0){let t=0;for(;t<o.length&&(null==e||null!=o[t].seq&&o[t].seq<e);)t++;o.splice(t,0,{seq:e,name:c}),r=t;for(let e of i)e.field>=r&&e.field++}i.push(new I(r,n.length,t.index,t.index+c.length)),l=l.slice(0,t.index)+c+l.slice(t.index+t[0].length)}for(let e;e=/\\([{}])/.exec(l);){l=l.slice(0,e.index)+e[1]+l.slice(e.index+e[0].length);for(let t of i)t.line==n.length&&t.from>e.index&&(t.from--,t.to--)}n.push(l)}return new k(n,i)}}let y=f.widget({widget:new class extends p{toDOM(){let e=document.createElement("span");return e.className="cm-snippetFieldPosition",e}ignoreEvent(){return!1}}}),F=f.mark({class:"cm-snippetField"});class S{constructor(e,t){this.ranges=e,this.active=t,this.deco=f.set(e.map((e=>(e.from==e.to?y:F).range(e.from,e.to))))}map(e){let t=[];for(let o of this.ranges){let n=o.map(e);if(!n)return null;t.push(n)}return new S(t,this.active)}selectionInsideField(e){return e.ranges.every((e=>this.ranges.some((t=>t.field==this.active&&t.from<=e.from&&t.to>=e.to))))}}const j=t.define({map:(e,t)=>e&&e.map(t)}),E=t.define(),O=l.define({create:()=>null,update(e,t){for(let o of t.effects){if(o.is(j))return o.value;if(o.is(E)&&e)return new S(e.ranges,o.value)}return e&&t.docChanged&&(e=e.map(t.changes)),e&&t.selection&&!e.selectionInsideField(t.selection)&&(e=null),e},provide:e=>m.decorations.from(e,(e=>e?e.deco:f.none))});function T(e,t){return c.create(e.filter((e=>e.field==t)).map((e=>c.range(e.from,e.to))))}function $(o){let n=k.parse(o);return(o,i,l,c)=>{let{text:r,ranges:s}=n.instantiate(o.state,l),a={changes:{from:l,to:c,insert:e.of(r)},scrollIntoView:!0,annotations:i?w.of(i):void 0};if(s.length&&(a.selection=T(s,0)),s.length>1){let e=new S(s,0),n=a.effects=[j.of(e)];void 0===o.state.field(O,!1)&&n.push(t.appendConfig.of([O,D,L,b]))}o.dispatch(o.state.update(a))}}function A(e){return({state:t,dispatch:o})=>{let n=t.field(O,!1);if(!n||e<0&&0==n.active)return!1;let i=n.active+e,l=e>0&&!n.ranges.some((t=>t.field==i+e));return o(t.update({selection:T(n.ranges,i),effects:j.of(l?null:new S(n.ranges,i))})),!0}}const P=[{key:"Tab",run:A(1),shift:A(-1)},{key:"Escape",run:({state:e,dispatch:t})=>!!e.field(O,!1)&&(t(e.update({effects:j.of(null)})),!0)}],_=r.define({combine:e=>e.length?e[0]:P}),D=o.highest(a.compute([_],(e=>e.facet(_))));function C(e,t){return Object.assign(Object.assign({},t),{apply:$(e)})}const L=m.domEventHandlers({mousedown(e,t){let o,n=t.state.field(O,!1);if(!n||null==(o=t.posAtCoords({x:e.clientX,y:e.clientY})))return!1;let i=n.ranges.find((e=>e.from<=o&&e.to>=o));return!(!i||i.field==n.active)&&(t.dispatch({selection:T(n.ranges,i.field),effects:j.of(n.ranges.some((e=>e.field>i.field))?new S(n.ranges,i.field):null)}),!0)}}),W=new class extends n{};W.startSide=1,W.endSide=-1;export{h as c,x as i,C as s};
