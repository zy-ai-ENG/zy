
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{b as t,N as e,I as s,T as r,c as n,P as i,d as o}from"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";import{P as a,g as l,S as h,a as u,F as c,h as f,e as p}from"../@codemirror_state@6.2.0/@codemirror_state@6.2.0.50a19798.js";import{E as d,V as m,D as g,l as k}from"../@codemirror_view@6.10.1/@codemirror_view@6.10.1.3e2a74d9.js";import{a as w,t as v,s as b,h as x}from"../@lezer_highlight@1.1.4/@lezer_highlight@1.1.4.ab75f228.js";import{S as y}from"../style-mod@4.0.3/style-mod@4.0.3.2c0c074d.js";var P;const S=new e;function A(t){return c.define({combine:t?e=>e.concat(t):void 0})}const C=new e;class T{constructor(t,e,s=[],r=""){this.data=t,this.name=r,l.prototype.hasOwnProperty("tree")||Object.defineProperty(l.prototype,"tree",{get(){return D(this)}}),this.parser=e,this.extension=[z.of(this),l.languageData.of(((t,e,s)=>{let r=I(t,e,s),n=r.type.prop(S);if(!n)return[];let i=t.facet(n),o=r.type.prop(C);if(o){let n=r.resolve(e-r.from,s);for(let e of o)if(e.test(n,t)){let s=t.facet(e.facet);return"replace"==e.type?s:s.concat(i)}}return i}))].concat(s)}isActiveAt(t,e,s=-1){return I(t,e,s).type.prop(S)==this.data}findRegions(t){let s=t.facet(z);if((null==s?void 0:s.data)==this.data)return[{from:0,to:t.doc.length}];if(!s||!s.allowsNesting)return[];let n=[],i=(t,s)=>{if(t.prop(S)==this.data)return void n.push({from:s,to:s+t.length});let o=t.prop(e.mounted);if(o){if(o.tree.prop(S)==this.data){if(o.overlay)for(let t of o.overlay)n.push({from:t.from+s,to:t.to+s});else n.push({from:s,to:s+t.length});return}if(o.overlay){let t=n.length;if(i(o.tree,o.overlay[0].from+s),n.length>t)return}}for(let e=0;e<t.children.length;e++){let n=t.children[e];n instanceof r&&i(n,t.positions[e]+s)}};return i(D(t),0),n}get allowsNesting(){return!0}}function I(t,e,r){let n=t.facet(z),i=D(t).topNode;if(!n||n.allowsNesting)for(let o=i;o;o=o.enter(e,r,s.ExcludeBuffers))o.type.isTop&&(i=o);return i}T.setState=h.define();class N extends T{constructor(t,e,s){super(t,e,[],s),this.parser=e}static define(t){let e=A(t.languageData);return new N(e,t.parser.configure({props:[S.add((t=>t.isTop?e:void 0))]}),t.name)}configure(t,e){return new N(this.data,this.parser.configure(t),e||this.name)}get allowsNesting(){return this.parser.hasWrappers()}}function D(t){let e=t.field(T.state,!1);return e?e.tree:r.empty}class B{constructor(t){this.doc=t,this.cursorPos=0,this.string="",this.cursor=t.iter()}get length(){return this.doc.length}syncTo(t){return this.string=this.cursor.next(t-this.cursorPos).value,this.cursorPos=t+this.string.length,this.cursorPos-this.string.length}chunk(t){return this.syncTo(t),this.string}get lineChunks(){return!0}read(t,e){let s=this.cursorPos-this.string.length;return t<s||e>=this.cursorPos?this.doc.sliceString(t,e):this.string.slice(t-s,e-s)}}let O=null;class L{constructor(t,e,s=[],r,n,i,o,a){this.parser=t,this.state=e,this.fragments=s,this.tree=r,this.treeLen=n,this.viewport=i,this.skipped=o,this.scheduleOn=a,this.parse=null,this.tempSkipped=[]}static create(t,e,s){return new L(t,e,[],r.empty,0,s,[],null)}startParse(){return this.parser.startParse(new B(this.state.doc),this.fragments)}work(t,e){return null!=e&&e>=this.state.doc.length&&(e=void 0),this.tree!=r.empty&&this.isDone(null!=e?e:this.state.doc.length)?(this.takeTree(),!0):this.withContext((()=>{var s;if("number"==typeof t){let e=Date.now()+t;t=()=>Date.now()>e}for(this.parse||(this.parse=this.startParse()),null!=e&&(null==this.parse.stoppedAt||this.parse.stoppedAt>e)&&e<this.state.doc.length&&this.parse.stopAt(e);;){let r=this.parse.advance();if(r){if(this.fragments=this.withoutTempSkipped(n.addTree(r,this.fragments,null!=this.parse.stoppedAt)),this.treeLen=null!==(s=this.parse.stoppedAt)&&void 0!==s?s:this.state.doc.length,this.tree=r,this.parse=null,!(this.treeLen<(null!=e?e:this.state.doc.length)))return!0;this.parse=this.startParse()}if(t())return!1}}))}takeTree(){let t,e;this.parse&&(t=this.parse.parsedPos)>=this.treeLen&&((null==this.parse.stoppedAt||this.parse.stoppedAt>t)&&this.parse.stopAt(t),this.withContext((()=>{for(;!(e=this.parse.advance()););})),this.treeLen=t,this.tree=e,this.fragments=this.withoutTempSkipped(n.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(t){let e=O;O=this;try{return t()}finally{O=e}}withoutTempSkipped(t){for(let e;e=this.tempSkipped.pop();)t=j(t,e.from,e.to);return t}changes(t,e){let{fragments:s,tree:i,treeLen:o,viewport:a,skipped:l}=this;if(this.takeTree(),!t.empty){let e=[];if(t.iterChangedRanges(((t,s,r,n)=>e.push({fromA:t,toA:s,fromB:r,toB:n}))),s=n.applyChanges(s,e),i=r.empty,o=0,a={from:t.mapPos(a.from,-1),to:t.mapPos(a.to,1)},this.skipped.length){l=[];for(let e of this.skipped){let s=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);s<r&&l.push({from:s,to:r})}}}return new L(this.parser,e,s,i,o,a,l,this.scheduleOn)}updateViewport(t){if(this.viewport.from==t.from&&this.viewport.to==t.to)return!1;this.viewport=t;let e=this.skipped.length;for(let s=0;s<this.skipped.length;s++){let{from:e,to:r}=this.skipped[s];e<t.to&&r>t.from&&(this.fragments=j(this.fragments,e,r),this.skipped.splice(s--,1))}return!(this.skipped.length>=e)&&(this.reset(),!0)}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(t,e){this.skipped.push({from:t,to:e})}static getSkippingParser(e){return new class extends i{createParse(s,n,i){let o=i[0].from,a=i[i.length-1].to;return{parsedPos:o,advance(){let s=O;if(s){for(let t of i)s.tempSkipped.push(t);e&&(s.scheduleOn=s.scheduleOn?Promise.all([s.scheduleOn,e]):e)}return this.parsedPos=a,new r(t.none,[],[],a-o)},stoppedAt:null,stopAt(){}}}}}isDone(t){t=Math.min(t,this.state.doc.length);let e=this.fragments;return this.treeLen>=t&&e.length&&0==e[0].from&&e[0].to>=t}static get(){return O}}function j(t,e,s){return n.applyChanges(t,[{fromA:e,toA:s,fromB:e,toB:s}])}class M{constructor(t){this.context=t,this.tree=t.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this;let e=this.context.changes(t.changes,t.state),s=this.context.treeLen==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.treeLen),e.viewport.to);return e.work(20,s)||e.takeTree(),new M(e)}static init(t){let e=Math.min(3e3,t.doc.length),s=L.create(t.facet(z).parser,t,{from:0,to:e});return s.work(20,e)||s.takeTree(),new M(s)}}T.state=u.define({create:M.init,update(t,e){for(let s of e.effects)if(s.is(T.setState))return s.value;return e.startState.facet(z)!=e.state.facet(z)?M.init(e.state):t.apply(e)}});let E=t=>{let e=setTimeout((()=>t()),500);return()=>clearTimeout(e)};"undefined"!=typeof requestIdleCallback&&(E=t=>{let e=-1,s=setTimeout((()=>{e=requestIdleCallback(t,{timeout:400})}),100);return()=>e<0?clearTimeout(s):cancelIdleCallback(e)});const R="undefined"!=typeof navigator&&(null===(P=navigator.scheduling)||void 0===P?void 0:P.isInputPending)?()=>navigator.scheduling.isInputPending():null,W=m.fromClass(class{constructor(t){this.view=t,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(t){let e=this.view.state.field(T.state).context;(e.updateViewport(t.view.viewport)||this.view.viewport.to>e.treeLen)&&this.scheduleWork(),t.docChanged&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(e)}scheduleWork(){if(this.working)return;let{state:t}=this.view,e=t.field(T.state);e.tree==e.context.tree&&e.context.isDone(t.doc.length)||(this.working=E(this.work))}work(t){this.working=null;let e=Date.now();if(this.chunkEnd<e&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=e+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:s,viewport:{to:r}}=this.view,n=s.field(T.state);if(n.tree==n.context.tree&&n.context.isDone(r+1e5))return;let i=Date.now()+Math.min(this.chunkBudget,100,t&&!R?Math.max(25,t.timeRemaining()-5):1e9),o=n.context.treeLen<r&&s.doc.length>r+1e3,a=n.context.work((()=>R&&R()||Date.now()>i),r+(o?0:1e5));this.chunkBudget-=Date.now()-e,(a||this.chunkBudget<=0)&&(n.context.takeTree(),this.view.dispatch({effects:T.setState.of(new M(n.context))})),this.chunkBudget>0&&(!a||o)&&this.scheduleWork(),this.checkAsyncSchedule(n.context)}checkAsyncSchedule(t){t.scheduleOn&&(this.workScheduled++,t.scheduleOn.then((()=>this.scheduleWork())).catch((t=>k(this.view.state,t))).then((()=>this.workScheduled--)),t.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),z=c.define({combine:t=>t.length?t[0]:null,enables:t=>[T.state,W,d.contentAttributes.compute([t],(e=>{let s=e.facet(t);return s&&s.name?{"data-language":s.name}:{}}))]});class V{constructor(t,e=[]){this.language=t,this.support=e,this.extension=[t,e]}}class _{constructor(t,e,s,r,n,i=void 0){this.name=t,this.alias=e,this.extensions=s,this.filename=r,this.loadFunc=n,this.support=i,this.loading=null}load(){return this.loading||(this.loading=this.loadFunc().then((t=>this.support=t),(t=>{throw this.loading=null,t})))}static of(t){let{load:e,support:s}=t;if(!e){if(!s)throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");e=()=>Promise.resolve(s)}return new _(t.name,(t.alias||[]).concat(t.name).map((t=>t.toLowerCase())),t.extensions||[],t.filename,e,s)}static matchFilename(t,e){for(let r of t)if(r.filename&&r.filename.test(e))return r;let s=/\.([^.]+)$/.exec(e);if(s)for(let r of t)if(r.extensions.indexOf(s[1])>-1)return r;return null}static matchLanguageName(t,e,s=!0){e=e.toLowerCase();for(let r of t)if(r.alias.some((t=>t==e)))return r;if(s)for(let r of t)for(let t of r.alias){let s=e.indexOf(t);if(s>-1&&(t.length>2||!/\w/.test(e[s-1])&&!/\w/.test(e[s+t.length])))return r}return null}}const U=c.define(),F=c.define({combine:t=>{if(!t.length)return"  ";let e=t[0];if(!e||/\S/.test(e)||Array.from(e).some((t=>t!=e[0])))throw new Error("Invalid indent unit: "+JSON.stringify(t[0]));return e}});function q(t){let e=t.facet(F);return 9==e.charCodeAt(0)?t.tabSize*e.length:e.length}function G(t,e){let s="",r=t.tabSize,n=t.facet(F)[0];if("\t"==n){for(;e>=r;)s+="\t",e-=r;n=" "}for(let i=0;i<e;i++)s+=n;return s}function $(t,e){t instanceof l&&(t=new H(t));for(let r of t.state.facet(U)){let s=r(t,e);if(void 0!==s)return s}let s=D(t.state);return s?function(t,e,s){return Q(e.resolveInner(s).enterUnfinishedNodesBefore(s),s,t)}(t,s,e):null}class H{constructor(t,e={}){this.state=t,this.options=e,this.unit=q(t)}lineAt(t,e=1){let s=this.state.doc.lineAt(t),{simulateBreak:r,simulateDoubleBreak:n}=this.options;return null!=r&&r>=s.from&&r<=s.to?n&&r==t?{text:"",from:t}:(e<0?r<t:r<=t)?{text:s.text.slice(r-s.from),from:r}:{text:s.text.slice(0,r-s.from),from:s.from}:s}textAfterPos(t,e=1){if(this.options.simulateDoubleBreak&&t==this.options.simulateBreak)return"";let{text:s,from:r}=this.lineAt(t,e);return s.slice(t-r,Math.min(s.length,t+100-r))}column(t,e=1){let{text:s,from:r}=this.lineAt(t,e),n=this.countColumn(s,t-r),i=this.options.overrideIndentation?this.options.overrideIndentation(r):-1;return i>-1&&(n+=i-this.countColumn(s,s.search(/\S|$/))),n}countColumn(t,e=t.length){return p(t,this.state.tabSize,e)}lineIndent(t,e=1){let{text:s,from:r}=this.lineAt(t,e),n=this.options.overrideIndentation;if(n){let t=n(r);if(t>-1)return t}return this.countColumn(s,s.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const J=new e;function K(t){let s=t.type.prop(J);if(s)return s;let r,n=t.firstChild;if(n&&(r=n.type.prop(e.closedBy))){let e=t.lastChild,s=e&&r.indexOf(e.name)>-1;return t=>et(t,!0,1,void 0,s&&!function(t){return t.pos==t.options.simulateBreak&&t.options.simulateDoubleBreak}(t)?e.from:void 0)}return null==t.parent?X:null}function Q(t,e,s){for(;t;t=t.parent){let r=K(t);if(r)return r(Y.create(s,e,t))}return null}function X(){return 0}class Y extends H{constructor(t,e,s){super(t.state,t.options),this.base=t,this.pos=e,this.node=s}static create(t,e,s){return new Y(t,e,s)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){let t=this.state.doc.lineAt(this.node.from);for(;;){let e=this.node.resolve(t.from);for(;e.parent&&e.parent.from==e.from;)e=e.parent;if(Z(e,this.node))break;t=this.state.doc.lineAt(e.from)}return this.lineIndent(t.from)}continue(){let t=this.node.parent;return t?Q(t,this.pos,this.base):0}}function Z(t,e){for(let s=e;s;s=s.parent)if(t==s)return!0;return!1}function tt({closing:t,align:e=!0,units:s=1}){return r=>et(r,e,s,t)}function et(t,e,s,r,n){let i=t.textAfter,o=i.match(/^\s*/)[0].length,a=r&&i.slice(o,o+r.length)==r||n==t.pos+o,l=e?function(t){let e=t.node,s=e.childAfter(e.from),r=e.lastChild;if(!s)return null;let n=t.options.simulateBreak,i=t.state.doc.lineAt(s.from),o=null==n||n<=i.from?i.to:Math.min(i.to,n);for(let a=s.to;;){let t=e.childAfter(a);if(!t||t==r)return null;if(!t.type.isSkipped)return t.from<o?s:null;a=t.to}}(t):null;return l?a?t.column(l.from):t.column(l.to):t.baseIndent+(a?0:t.unit*s)}const st=t=>t.baseIndent;function rt({except:t,units:e=1}={}){return s=>{let r=t&&t.test(s.textAfter);return s.baseIndent+(r?0:e*s.unit)}}const nt=c.define(),it=new e;function ot(t){let e=t.firstChild,s=t.lastChild;return e&&e.to<s.from?{from:e.to,to:s.type.isError?t.to:s.from}:null}class at{constructor(t,e){let s;function r(t){let e=y.newName();return(s||(s=Object.create(null)))["."+e]=t,e}this.specs=t;const n="string"==typeof e.all?e.all:e.all?r(e.all):void 0,i=e.scope;this.scope=i instanceof T?t=>t.prop(S)==i.data:i?t=>t==i:void 0,this.style=w(t.map((t=>({tag:t.tag,class:t.class||r(Object.assign({},t,{tag:null}))}))),{all:n}).style,this.module=s?new y(s):null,this.themeType=e.themeType}static define(t,e){return new at(t,e||{})}}const lt=c.define(),ht=c.define({combine:t=>t.length?[t[0]]:null});function ut(t){let e=t.facet(lt);return e.length?e:t.facet(ht)}function ct(t,e){let s,r=[pt];return t instanceof at&&(t.module&&r.push(d.styleModule.of(t.module)),s=t.themeType),(null==e?void 0:e.fallback)?r.push(ht.of(t)):s?r.push(lt.computeN([d.darkTheme],(e=>e.facet(d.darkTheme)==("dark"==s)?[t]:[]))):r.push(lt.of(t)),r}class ft{constructor(t){this.markCache=Object.create(null),this.tree=D(t.state),this.decorations=this.buildDeco(t,ut(t.state))}update(t){let e=D(t.state),s=ut(t.state),r=s!=ut(t.startState);e.length<t.view.viewport.to&&!r&&e.type==this.tree.type?this.decorations=this.decorations.map(t.changes):(e!=this.tree||t.viewportChanged||r)&&(this.tree=e,this.decorations=this.buildDeco(t.view,s))}buildDeco(t,e){if(!e||!this.tree.length)return g.none;let s=new f;for(let{from:r,to:n}of t.visibleRanges)x(this.tree,e,((t,e,r)=>{s.add(t,e,this.markCache[r]||(this.markCache[r]=g.mark({class:r})))}),r,n);return s.finish()}}const pt=a.high(m.fromClass(ft,{decorations:t=>t.decorations})),dt=at.define([{tag:v.meta,color:"#404740"},{tag:v.link,textDecoration:"underline"},{tag:v.heading,textDecoration:"underline",fontWeight:"bold"},{tag:v.emphasis,fontStyle:"italic"},{tag:v.strong,fontWeight:"bold"},{tag:v.strikethrough,textDecoration:"line-through"},{tag:v.keyword,color:"#708"},{tag:[v.atom,v.bool,v.url,v.contentSeparator,v.labelName],color:"#219"},{tag:[v.literal,v.inserted],color:"#164"},{tag:[v.string,v.deleted],color:"#a11"},{tag:[v.regexp,v.escape,v.special(v.string)],color:"#e40"},{tag:v.definition(v.variableName),color:"#00f"},{tag:v.local(v.variableName),color:"#30a"},{tag:[v.typeName,v.namespace],color:"#085"},{tag:v.className,color:"#167"},{tag:[v.special(v.variableName),v.macroName],color:"#256"},{tag:v.definition(v.propertyName),color:"#00c"},{tag:v.comment,color:"#940"},{tag:v.invalid,color:"#f00"}]),mt=new e;function gt(t,s,r){let n=t.prop(s<0?e.openedBy:e.closedBy);if(n)return n;if(1==t.name.length){let e=r.indexOf(t.name);if(e>-1&&e%2==(s<0?1:0))return[r[e+s]]}return null}function kt(t){let e=t.type.prop(mt);return e?e(t.node):t}function wt(t,e,s,r={}){let n=r.maxScanDistance||1e4,i=r.brackets||"()[]{}",o=D(t),a=o.resolveInner(e,s);for(let l=a;l;l=l.parent){let r=gt(l.type,s,i);if(r&&l.from<l.to){let n=kt(l);if(n&&(s>0?e>=n.from&&e<n.to:e>n.from&&e<=n.to))return vt(t,e,s,l,n,r,i)}}return function(t,e,s,r,n,i,o){let a=s<0?t.sliceDoc(e-1,e):t.sliceDoc(e,e+1),l=o.indexOf(a);if(l<0||l%2==0!=s>0)return null;let h={from:s<0?e-1:e,to:s>0?e+1:e},u=t.doc.iterRange(e,s>0?t.doc.length:0),c=0;for(let f=0;!u.next().done&&f<=i;){let t=u.value;s<0&&(f+=t.length);let i=e+f*s;for(let e=s>0?0:t.length-1,a=s>0?t.length:-1;e!=a;e+=s){let a=o.indexOf(t[e]);if(!(a<0||r.resolveInner(i+e,1).type!=n))if(a%2==0==s>0)c++;else{if(1==c)return{start:h,end:{from:i+e,to:i+e+1},matched:a>>1==l>>1};c--}}s>0&&(f+=t.length)}return u.done?{start:h,matched:!1}:null}(t,e,s,o,a.type,n,i)}function vt(t,e,s,r,n,i,o){let a=r.parent,l={from:n.from,to:n.to},h=0,u=null==a?void 0:a.cursor();if(u&&(s<0?u.childBefore(r.from):u.childAfter(r.to)))do{if(s<0?u.to<=r.from:u.from>=r.to){if(0==h&&i.indexOf(u.type.name)>-1&&u.from<u.to){let t=kt(u);return{start:l,end:t?{from:t.from,to:t.to}:void 0,matched:!0}}if(gt(u.type,s,o))h++;else if(gt(u.type,-s,o)){if(0==h){let t=kt(u);return{start:l,end:t&&t.from<t.to?{from:t.from,to:t.to}:void 0,matched:!1}}h--}}}while(s<0?u.prevSibling():u.nextSibling());return{start:l,matched:!1}}function bt(t,e,s,r=0,n=0){null==e&&-1==(e=t.search(/[^\s\u00a0]/))&&(e=t.length);let i=n;for(let o=r;o<e;o++)9==t.charCodeAt(o)?i+=s-i%s:i++;return i}class xt{constructor(t,e,s,r){this.string=t,this.tabSize=e,this.indentUnit=s,this.overrideIndent=r,this.pos=0,this.start=0,this.lastColumnPos=0,this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return 0==this.pos}peek(){return this.string.charAt(this.pos)||void 0}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(t){let e,s=this.string.charAt(this.pos);if(e="string"==typeof t?s==t:s&&(t instanceof RegExp?t.test(s):t(s)),e)return++this.pos,s}eatWhile(t){let e=this.pos;for(;this.eat(t););return this.pos>e}eatSpace(){let t=this.pos;for(;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>t}skipToEnd(){this.pos=this.string.length}skipTo(t){let e=this.string.indexOf(t,this.pos);if(e>-1)return this.pos=e,!0}backUp(t){this.pos-=t}column(){return this.lastColumnPos<this.start&&(this.lastColumnValue=bt(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue}indentation(){var t;return null!==(t=this.overrideIndent)&&void 0!==t?t:bt(this.string,null,this.tabSize)}match(t,e,s){if("string"==typeof t){let r=t=>s?t.toLowerCase():t;return r(this.string.substr(this.pos,t.length))==r(t)?(!1!==e&&(this.pos+=t.length),!0):null}{let s=this.string.slice(this.pos).match(t);return s&&s.index>0?null:(s&&!1!==e&&(this.pos+=s[0].length),s)}}current(){return this.string.slice(this.start,this.pos)}}function yt(t){if("object"!=typeof t)return t;let e={};for(let s in t){let r=t[s];e[s]=r instanceof Array?r.slice():r}return e}const Pt=new WeakMap;class St extends T{constructor(s){let r,n=A(s.languageData),o={name:(a=s).name||"",token:a.token,blankLine:a.blankLine||(()=>{}),startState:a.startState||(()=>!0),copyState:a.copyState||yt,indent:a.indent||(()=>null),languageData:a.languageData||{},tokenTable:a.tokenTable||Nt};var a;super(n,new class extends i{createParse(t,e,s){return new Tt(r,t,e,s)}},[U.of(((t,e)=>this.getIndent(t,e)))],s.name),this.topNode=function(e){let s=t.define({id:Dt.length,name:"Document",props:[S.add((()=>e))]});return Dt.push(s),s}(n),r=this,this.streamParser=o,this.stateAfter=new e({perNode:!0}),this.tokenTable=s.tokenTable?new jt(o.tokenTable):Mt}static define(t){return new St(t)}getIndent(t,e){let s,r=D(t.state),n=r.resolve(e);for(;n&&n.type!=this.topNode;)n=n.parent;if(!n)return null;let{overrideIndentation:i}=t.options;i&&(s=Pt.get(t.state),null!=s&&s<e-1e4&&(s=void 0));let o,a,l=At(this,r,0,n.from,null!=s?s:e);if(l?(a=l.state,o=l.pos+1):(a=this.streamParser.startState(t.unit),o=0),e-o>1e4)return null;for(;o<e;){let s=t.state.doc.lineAt(o),r=Math.min(e,s.to);if(s.length){let e=i?i(s.from):-1,n=new xt(s.text,t.state.tabSize,t.unit,e<0?void 0:e);for(;n.pos<r-s.from;)It(this.streamParser.token,n,a)}else this.streamParser.blankLine(a,t.unit);if(r==e)break;o=s.to+1}let h=t.lineAt(e);return i&&null==s&&Pt.set(t.state,h.from),this.streamParser.indent(a,/^\s*(.*)/.exec(h.text)[1],t)}get allowsNesting(){return!1}}function At(t,e,s,n,i){let o=s>=n&&s+e.length<=i&&e.prop(t.stateAfter);if(o)return{state:t.streamParser.copyState(o),pos:s+e.length};for(let a=e.children.length-1;a>=0;a--){let o=e.children[a],l=s+e.positions[a],h=o instanceof r&&l<i&&At(t,o,l,n,i);if(h)return h}return null}function Ct(t,e,s,n,i){if(i&&s<=0&&n>=e.length)return e;i||e.type!=t.topNode||(i=!0);for(let o=e.children.length-1;o>=0;o--){let a,l=e.positions[o],h=e.children[o];if(l<n&&h instanceof r){if(!(a=Ct(t,h,s-l,n-l,i)))break;return i?new r(e.type,e.children.slice(0,o).concat(a),e.positions.slice(0,o+1),l+a.length):a}}return null}class Tt{constructor(t,e,s,n){this.lang=t,this.input=e,this.fragments=s,this.ranges=n,this.stoppedAt=null,this.chunks=[],this.chunkPos=[],this.chunk=[],this.chunkReused=void 0,this.rangeIndex=0,this.to=n[n.length-1].to;let i=L.get(),o=n[0].from,{state:a,tree:l}=function(t,e,s,n){for(let r of e){let e,n=r.from+(r.openStart?25:0),i=r.to-(r.openEnd?25:0),o=n<=s&&i>s&&At(t,r.tree,0-r.offset,s,i);if(o&&(e=Ct(t,r.tree,s+r.offset,o.pos+r.offset,!1)))return{state:o.state,tree:e}}return{state:t.streamParser.startState(n?q(n):4),tree:r.empty}}(t,s,o,null==i?void 0:i.state);this.state=a,this.parsedPos=this.chunkStart=o+l.length;for(let r=0;r<l.children.length;r++)this.chunks.push(l.children[r]),this.chunkPos.push(l.positions[r]);i&&this.parsedPos<i.viewport.from-1e5&&(this.state=this.lang.streamParser.startState(q(i.state)),i.skipUntilInView(this.parsedPos,i.viewport.from),this.parsedPos=i.viewport.from),this.moveRangeIndex()}advance(){let t=L.get(),e=null==this.stoppedAt?this.to:Math.min(this.to,this.stoppedAt),s=Math.min(e,this.chunkStart+2048);for(t&&(s=Math.min(s,t.viewport.to));this.parsedPos<s;)this.parseLine(t);return this.chunkStart<this.parsedPos&&this.finishChunk(),this.parsedPos>=e?this.finish():t&&this.parsedPos>=t.viewport.to?(t.skipUntilInView(this.parsedPos,e),this.finish()):null}stopAt(t){this.stoppedAt=t}lineAfter(t){let e=this.input.chunk(t);if(this.input.lineChunks)"\n"==e&&(e="");else{let t=e.indexOf("\n");t>-1&&(e=e.slice(0,t))}return t+e.length<=this.to?e:e.slice(0,this.to-t)}nextLine(){let t=this.parsedPos,e=this.lineAfter(t),s=t+e.length;for(let r=this.rangeIndex;;){let t=this.ranges[r].to;if(t>=s)break;if(e=e.slice(0,t-(s-e.length)),r++,r==this.ranges.length)break;let n=this.ranges[r].from,i=this.lineAfter(n);e+=i,s=n+i.length}return{line:e,end:s}}skipGapsTo(t,e,s){for(;;){let r=this.ranges[this.rangeIndex].to,n=t+e;if(s>0?r>n:r>=n)break;e+=this.ranges[++this.rangeIndex].from-r}return e}moveRangeIndex(){for(;this.ranges[this.rangeIndex].to<this.parsedPos;)this.rangeIndex++}emitToken(t,e,s,r,n){if(this.ranges.length>1){e+=n=this.skipGapsTo(e,n,1);let t=this.chunk.length;s+=n=this.skipGapsTo(s,n,-1),r+=this.chunk.length-t}return this.chunk.push(t,e,s,r),n}parseLine(t){let{line:e,end:s}=this.nextLine(),r=0,{streamParser:n}=this.lang,i=new xt(e,t?t.state.tabSize:4,t?q(t.state):2);if(i.eol())n.blankLine(this.state,i.indentUnit);else for(;!i.eol();){let t=It(n.token,i,this.state);if(t&&(r=this.emitToken(this.lang.tokenTable.resolve(t),this.parsedPos+i.start,this.parsedPos+i.pos,4,r)),i.start>1e4)break}this.parsedPos=s,this.moveRangeIndex(),this.parsedPos<this.to&&this.parsedPos++}finishChunk(){let t=r.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:Bt,topID:0,maxBufferLength:2048,reused:this.chunkReused});t=new r(t.type,t.children,t.positions,t.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]),this.chunks.push(t),this.chunkPos.push(this.chunkStart-this.ranges[0].from),this.chunk=[],this.chunkReused=void 0,this.chunkStart=this.parsedPos}finish(){return new r(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}}function It(t,e,s){e.start=e.pos;for(let r=0;r<10;r++){let r=t(e,s);if(e.pos>e.start)return r}throw new Error("Stream parser failed to advance stream.")}const Nt=Object.create(null),Dt=[t.none],Bt=new o(Dt),Ot=[],Lt=Object.create(null);for(let[Wt,zt]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])Lt[Wt]=Rt(Nt,zt);class jt{constructor(t){this.extra=t,this.table=Object.assign(Object.create(null),Lt)}resolve(t){return t?this.table[t]||(this.table[t]=Rt(this.extra,t)):0}}const Mt=new jt(Nt);function Et(t,e){Ot.indexOf(t)>-1||Ot.push(t)}function Rt(e,s){let r=null;for(let t of s.split(".")){let s=e[t]||v[t];s?"function"==typeof s?r?r=s(r):Et(t):r?Et(t):r=s:Et(t)}if(!r)return 0;let n=s.replace(/ /g,"_"),i=t.define({id:Dt.length,name:n,props:[b({[n]:r})]});return Dt.push(i),i.id}export{at as H,H as I,N as L,L as P,St as S,G as a,q as b,V as c,J as d,rt as e,st as f,$ as g,tt as h,F as i,it as j,ot as k,mt as l,wt as m,C as n,A as o,T as p,S as q,nt as r,D as s,_ as t,ct as u,dt as v};
