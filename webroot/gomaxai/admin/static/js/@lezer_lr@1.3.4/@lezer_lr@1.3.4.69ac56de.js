
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{P as t,d as e,b as s,D as i,N as r,T as h,I as n}from"../@lezer_common@1.0.2/@lezer_common@1.0.2.f1b3fc52.js";class o{constructor(t,e,s,i,r,h,n,o,a,l=0,c){this.p=t,this.stack=e,this.state=s,this.reducePos=i,this.pos=r,this.score=h,this.buffer=n,this.bufferBase=o,this.curContext=a,this.lookAhead=l,this.parent=c}toString(){return`[${this.stack.filter(((t,e)=>e%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(t,e,s=0){let i=t.parser.context;return new o(t,[],e,s,s,0,[],0,i?new a(i,i.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(t,e){this.stack.push(this.state,e,this.bufferBase+this.buffer.length),this.state=t}reduce(t){var e;let s=t>>19,i=65535&t,{parser:r}=this.p,h=r.dynamicPrecedence(i);if(h&&(this.score+=h),0==s)return this.pushState(r.getGoto(this.state,i,!0),this.reducePos),i<r.minRepeatTerm&&this.storeNode(i,this.reducePos,this.reducePos,4,!0),void this.reduceContext(i,this.reducePos);let n=this.stack.length-3*(s-1)-(262144&t?6:0),o=n?this.stack[n-2]:this.p.ranges[0].from,a=this.reducePos-o;a>=2e3&&!(null===(e=this.p.parser.nodeSet.types[i])||void 0===e?void 0:e.isAnonymous)&&(o==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=a):this.p.lastBigReductionSize<a&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=o,this.p.lastBigReductionSize=a));let l=n?this.stack[n-1]:0,c=this.bufferBase+this.buffer.length-l;if(i<r.minRepeatTerm||131072&t){let t=r.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(i,o,t,c+4,!0)}if(262144&t)this.state=this.stack[n];else{let t=this.stack[n-3];this.state=r.getGoto(t,i,!0)}for(;this.stack.length>n;)this.stack.pop();this.reduceContext(i,o)}storeNode(t,e,s,i=4,r=!1){if(0==t&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let t=this,i=this.buffer.length;if(0==i&&t.parent&&(i=t.bufferBase-t.parent.bufferBase,t=t.parent),i>0&&0==t.buffer[i-4]&&t.buffer[i-1]>-1){if(e==s)return;if(t.buffer[i-2]>=e)return void(t.buffer[i-2]=s)}}if(r&&this.pos!=s){let r=this.buffer.length;if(r>0&&0!=this.buffer[r-4])for(;r>0&&this.buffer[r-2]>s;)this.buffer[r]=this.buffer[r-4],this.buffer[r+1]=this.buffer[r-3],this.buffer[r+2]=this.buffer[r-2],this.buffer[r+3]=this.buffer[r-1],r-=4,i>4&&(i-=4);this.buffer[r]=t,this.buffer[r+1]=e,this.buffer[r+2]=s,this.buffer[r+3]=i}else this.buffer.push(t,e,s,i)}shift(t,e,s){let i=this.pos;if(131072&t)this.pushState(65535&t,this.pos);else if(0==(262144&t)){let r=t,{parser:h}=this.p;(s>this.pos||e<=h.maxNode)&&(this.pos=s,h.stateFlag(r,1)||(this.reducePos=s)),this.pushState(r,i),this.shiftContext(e,i),e<=h.maxNode&&this.buffer.push(e,i,s,4)}else this.pos=s,this.shiftContext(e,i),e<=this.p.parser.maxNode&&this.buffer.push(e,i,s,4)}apply(t,e,s){65536&t?this.reduce(t):this.shift(t,e,s)}useNode(t,e){let s=this.p.reused.length-1;(s<0||this.p.reused[s]!=t)&&(this.p.reused.push(t),s++);let i=this.pos;this.reducePos=this.pos=i+t.length,this.pushState(e,i),this.buffer.push(s,i,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,t,this,this.p.stream.reset(this.pos-t.length)))}split(){let t=this,e=t.buffer.length;for(;e>0&&t.buffer[e-2]>t.reducePos;)e-=4;let s=t.buffer.slice(e),i=t.bufferBase+e;for(;t&&i==t.bufferBase;)t=t.parent;return new o(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,s,i,this.curContext,this.lookAhead,t)}recoverByDelete(t,e){let s=t<=this.p.parser.maxNode;s&&this.storeNode(t,this.pos,e,4),this.storeNode(0,this.pos,e,s?8:4),this.pos=this.reducePos=e,this.score-=190}canShift(t){for(let e=new u(this);;){let s=this.p.parser.stateSlot(e.state,4)||this.p.parser.hasAction(e.state,t);if(0==s)return!1;if(0==(65536&s))return!0;e.reduce(s)}}recoverByInsert(t){if(this.stack.length>=300)return[];let e=this.p.parser.nextStates(this.state);if(e.length>8||this.stack.length>=120){let s=[];for(let i,r=0;r<e.length;r+=2)(i=e[r+1])!=this.state&&this.p.parser.hasAction(i,t)&&s.push(e[r],i);if(this.stack.length<120)for(let t=0;s.length<8&&t<e.length;t+=2){let i=e[t+1];s.some(((t,e)=>1&e&&t==i))||s.push(e[t],i)}e=s}let s=[];for(let i=0;i<e.length&&s.length<4;i+=2){let t=e[i+1];if(t==this.state)continue;let r=this.split();r.pushState(t,this.pos),r.storeNode(0,r.pos,r.pos,4,!0),r.shiftContext(e[i],this.pos),r.score-=200,s.push(r)}return s}forceReduce(){let t=this.p.parser.stateSlot(this.state,5);if(0==(65536&t))return!1;let{parser:e}=this.p;if(!e.validAction(this.state,t)){let s=t>>19,i=65535&t,r=this.stack.length-3*s;if(r<0||e.getGoto(this.stack[r],i,!1)<0)return!1;this.storeNode(0,this.reducePos,this.reducePos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(3!=this.stack.length)return!1;let{parser:t}=this.p;return 65535==t.data[t.stateSlot(this.state,1)]&&!t.stateSlot(this.state,4)}restart(){this.state=this.stack[0],this.stack.length=0}sameState(t){if(this.state!=t.state||this.stack.length!=t.stack.length)return!1;for(let e=0;e<this.stack.length;e+=3)if(this.stack[e]!=t.stack[e])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(t){return this.p.parser.dialect.flags[t]}shiftContext(t,e){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,t,this,this.p.stream.reset(e)))}reduceContext(t,e){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,t,this,this.p.stream.reset(e)))}emitContext(){let t=this.buffer.length-1;(t<0||-3!=this.buffer[t])&&this.buffer.push(this.curContext.hash,this.reducePos,this.reducePos,-3)}emitLookAhead(){let t=this.buffer.length-1;(t<0||-4!=this.buffer[t])&&this.buffer.push(this.lookAhead,this.reducePos,this.reducePos,-4)}updateContext(t){if(t!=this.curContext.context){let e=new a(this.curContext.tracker,t);e.hash!=this.curContext.hash&&this.emitContext(),this.curContext=e}}setLookAhead(t){t>this.lookAhead&&(this.emitLookAhead(),this.lookAhead=t)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}class a{constructor(t,e){this.tracker=t,this.context=e,this.hash=t.strict?t.hash(e):0}}var l,c;(c=l||(l={}))[c.Insert=200]="Insert",c[c.Delete=190]="Delete",c[c.Reduce=100]="Reduce",c[c.MaxNext=4]="MaxNext",c[c.MaxInsertStackDepth=300]="MaxInsertStackDepth",c[c.DampenInsertStackDepth=120]="DampenInsertStackDepth",c[c.MinBigReduction=2e3]="MinBigReduction";class u{constructor(t){this.start=t,this.state=t.state,this.stack=t.stack,this.base=this.stack.length}reduce(t){let e=65535&t,s=t>>19;0==s?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=3*(s-1);let i=this.start.p.parser.getGoto(this.stack[this.base-3],e,!0);this.state=i}}class f{constructor(t,e,s){this.stack=t,this.pos=e,this.index=s,this.buffer=t.buffer,0==this.index&&this.maybeNext()}static create(t,e=t.bufferBase+t.buffer.length){return new f(t,e,e-t.bufferBase)}maybeNext(){let t=this.stack.parent;null!=t&&(this.index=this.stack.bufferBase-t.bufferBase,this.stack=t,this.buffer=t.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,0==this.index&&this.maybeNext()}fork(){return new f(this.stack,this.pos,this.index)}}function p(t,e=Uint16Array){if("string"!=typeof t)return t;let s=null;for(let i=0,r=0;i<t.length;){let h=0;for(;;){let e=t.charCodeAt(i++),s=!1;if(126==e){h=65535;break}e>=92&&e--,e>=34&&e--;let r=e-32;if(r>=46&&(r-=46,s=!0),h+=r,s)break;h*=46}s?s[r++]=h:s=new e(h)}return s}class d{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}}const k=new d;class g{constructor(t,e){this.input=t,this.ranges=e,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=k,this.rangeIndex=0,this.pos=this.chunkPos=e[0].from,this.range=e[0],this.end=e[e.length-1].to,this.readNext()}resolveOffset(t,e){let s=this.range,i=this.rangeIndex,r=this.pos+t;for(;r<s.from;){if(!i)return null;let t=this.ranges[--i];r-=s.from-t.to,s=t}for(;e<0?r>s.to:r>=s.to;){if(i==this.ranges.length-1)return null;let t=this.ranges[++i];r+=t.from-s.to,s=t}return r}clipPos(t){if(t>=this.range.from&&t<this.range.to)return t;for(let e of this.ranges)if(e.to>t)return Math.max(t,e.from);return this.end}peek(t){let e,s,i=this.chunkOff+t;if(i>=0&&i<this.chunk.length)e=this.pos+t,s=this.chunk.charCodeAt(i);else{let i=this.resolveOffset(t,1);if(null==i)return-1;if(e=i,e>=this.chunk2Pos&&e<this.chunk2Pos+this.chunk2.length)s=this.chunk2.charCodeAt(e-this.chunk2Pos);else{let t=this.rangeIndex,i=this.range;for(;i.to<=e;)i=this.ranges[++t];this.chunk2=this.input.chunk(this.chunk2Pos=e),e+this.chunk2.length>i.to&&(this.chunk2=this.chunk2.slice(0,i.to-e)),s=this.chunk2.charCodeAt(0)}}return e>=this.token.lookAhead&&(this.token.lookAhead=e+1),s}acceptToken(t,e=0){let s=e?this.resolveOffset(e,-1):this.pos;if(null==s||s<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=t,this.token.end=s}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:t,chunkPos:e}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=t,this.chunk2Pos=e,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let t=this.input.chunk(this.pos),e=this.pos+t.length;this.chunk=e>this.range.to?t.slice(0,this.range.to-this.pos):t,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(t=1){for(this.chunkOff+=t;this.pos+t>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();t-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=t,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}reset(t,e){if(e?(this.token=e,e.start=t,e.lookAhead=t+1,e.value=e.extended=-1):this.token=k,this.pos!=t){if(this.pos=t,t==this.end)return this.setDone(),this;for(;t<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;t>=this.range.to;)this.range=this.ranges[++this.rangeIndex];t>=this.chunkPos&&t<this.chunkPos+this.chunk.length?this.chunkOff=t-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}read(t,e){if(t>=this.chunkPos&&e<=this.chunkPos+this.chunk.length)return this.chunk.slice(t-this.chunkPos,e-this.chunkPos);if(t>=this.chunk2Pos&&e<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(t-this.chunk2Pos,e-this.chunk2Pos);if(t>=this.range.from&&e<=this.range.to)return this.input.read(t,e);let s="";for(let i of this.ranges){if(i.from>=e)break;i.to>t&&(s+=this.input.read(Math.max(i.from,t),Math.min(i.to,e)))}return s}}class m{constructor(t,e){this.data=t,this.id=e}token(t,e){let{parser:s}=e.p;S(this.data,t,e,this.id,s.data,s.tokenPrecTable)}}m.prototype.contextual=m.prototype.fallback=m.prototype.extend=!1;class x{constructor(t,e,s){this.precTable=e,this.elseToken=s,this.data="string"==typeof t?p(t):t}token(t,e){let s=t.pos,i=0;for(;S(this.data,t,e,0,this.data,this.precTable),!(t.token.value>-1);){if(null==this.elseToken)return;if(t.next<0)break;t.advance(),t.reset(t.pos,t.token),i++}i&&(t.reset(s,t.token),t.acceptToken(this.elseToken,i))}}x.prototype.contextual=m.prototype.fallback=m.prototype.extend=!1;class b{constructor(t,e={}){this.token=t,this.contextual=!!e.contextual,this.fallback=!!e.fallback,this.extend=!!e.extend}}function S(t,e,s,i,r,h){let n=0,o=1<<i,{dialect:a}=s.p.parser;t:for(;0!=(o&t[n]);){let s=t[n+1];for(let u=n+3;u<s;u+=2)if((t[u+1]&o)>0){let s=t[u];if(a.allows(s)&&(-1==e.token.value||e.token.value==s||v(s,e.token.value,r,h))){e.acceptToken(s);break}}let i=e.next,l=0,c=t[n+2];if(!(e.next<0&&c>l&&65535==t[s+3*c-3]&&65535==t[s+3*c-3])){for(;l<c;){let r=l+c>>1,h=s+r+(r<<1),o=t[h],a=t[h+1]||65536;if(i<o)c=r;else{if(!(i>=a)){n=t[h+2],e.advance();continue t}l=r+1}}break}n=t[s+3*c-1]}}function P(t,e,s){for(let i,r=e;65535!=(i=t[r]);r++)if(i==s)return r-e;return-1}function v(t,e,s,i){let r=P(s,i,e);return r<0||P(s,i,t)<r}const C="undefined"!=typeof process&&process.env&&/\bparse\b/.test({}.LOG);let A=null;var y,T,R,w;function N(t,e,s){let i=t.cursor(n.IncludeAnonymous);for(i.moveTo(e);;)if(!(s<0?i.childBefore(e):i.childAfter(e)))for(;;){if((s<0?i.to<e:i.from>e)&&!i.type.isError)return s<0?Math.max(0,Math.min(i.to-1,e-25)):Math.min(t.length,Math.max(i.from+1,e+25));if(s<0?i.prevSibling():i.nextSibling())break;if(!i.parent())return s<0?0:t.length}}(T=y||(y={}))[T.Margin=25]="Margin";class z{constructor(t,e){this.fragments=t,this.nodeSet=e,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let t=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(t){for(this.safeFrom=t.openStart?N(t.tree,t.from+t.offset,1)-t.offset:t.from,this.safeTo=t.openEnd?N(t.tree,t.to+t.offset,-1)-t.offset:t.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(t.tree),this.start.push(-t.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(t){if(t<this.nextStart)return null;for(;this.fragment&&this.safeTo<=t;)this.nextFragment();if(!this.fragment)return null;for(;;){let e=this.trees.length-1;if(e<0)return this.nextFragment(),null;let s=this.trees[e],i=this.index[e];if(i==s.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let n=s.children[i],o=this.start[e]+s.positions[i];if(o>t)return this.nextStart=o,null;if(n instanceof h){if(o==t){if(o<this.safeFrom)return null;let t=o+n.length;if(t<=this.safeTo){let e=n.prop(r.lookAhead);if(!e||t+e<this.fragment.to)return n}}this.index[e]++,o+n.length>=Math.max(this.safeFrom,t)&&(this.trees.push(n),this.start.push(o),this.index.push(0))}else this.index[e]++,this.nextStart=o+n.length}}}class B{constructor(t,e){this.stream=e,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=t.tokenizers.map((t=>new d))}getActions(t){let e=0,s=null,{parser:i}=t.p,{tokenizers:r}=i,h=i.stateSlot(t.state,3),n=t.curContext?t.curContext.hash:0,o=0;for(let a=0;a<r.length;a++){if(0==(1<<a&h))continue;let i=r[a],l=this.tokens[a];if((!s||i.fallback)&&((i.contextual||l.start!=t.pos||l.mask!=h||l.context!=n)&&(this.updateCachedToken(l,i,t),l.mask=h,l.context=n),l.lookAhead>l.end+25&&(o=Math.max(l.lookAhead,o)),0!=l.value)){let r=e;if(l.extended>-1&&(e=this.addActions(t,l.extended,l.end,e)),e=this.addActions(t,l.value,l.end,e),!i.extend&&(s=l,e>r))break}}for(;this.actions.length>e;)this.actions.pop();return o&&t.setLookAhead(o),s||t.pos!=this.stream.end||(s=new d,s.value=t.p.parser.eofTerm,s.start=s.end=t.pos,e=this.addActions(t,s.value,s.end,e)),this.mainToken=s,this.actions}getMainToken(t){if(this.mainToken)return this.mainToken;let e=new d,{pos:s,p:i}=t;return e.start=s,e.end=Math.min(s+1,i.stream.end),e.value=s==i.stream.end?i.parser.eofTerm:0,e}updateCachedToken(t,e,s){let i=this.stream.clipPos(s.pos);if(e.token(this.stream.reset(i,t),s),t.value>-1){let{parser:e}=s.p;for(let i=0;i<e.specialized.length;i++)if(e.specialized[i]==t.value){let r=e.specializers[i](this.stream.read(t.start,t.end),s);if(r>=0&&s.p.parser.dialect.allows(r>>1)){0==(1&r)?t.value=r>>1:t.extended=r>>1;break}}}else t.value=0,t.end=this.stream.clipPos(i+1)}putAction(t,e,s,i){for(let r=0;r<i;r+=3)if(this.actions[r]==t)return i;return this.actions[i++]=t,this.actions[i++]=e,this.actions[i++]=s,i}addActions(t,e,s,i){let{state:r}=t,{parser:h}=t.p,{data:n}=h;for(let o=0;o<2;o++)for(let t=h.stateSlot(r,o?2:1);;t+=3){if(65535==n[t]){if(1!=n[t+1]){0==i&&2==n[t+1]&&(i=this.putAction(E(n,t+2),e,s,i));break}t=E(n,t+2)}n[t]==e&&(i=this.putAction(E(n,t+1),e,s,i))}return i}}(w=R||(R={}))[w.Distance=5]="Distance",w[w.MaxRemainingPerStep=3]="MaxRemainingPerStep",w[w.MinBufferLengthPrune=500]="MinBufferLengthPrune",w[w.ForceReduceLimit=10]="ForceReduceLimit",w[w.CutDepth=15e3]="CutDepth",w[w.CutTo=9e3]="CutTo",w[w.MaxLeftAssociativeReductionCount=300]="MaxLeftAssociativeReductionCount",w[w.MaxStackCount=12]="MaxStackCount";class D{constructor(t,e,s,i){this.parser=t,this.input=e,this.ranges=i,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new g(e,i),this.tokens=new B(t,this.stream),this.topTerm=t.top[1];let{from:r}=i[0];this.stacks=[o.start(this,t.top[0],r)],this.fragments=s.length&&this.stream.end-r>4*t.bufferLength?new z(s,t.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let t,e,s=this.stacks,i=this.minStackPos,r=this.stacks=[];if(this.bigReductionCount>300&&1==s.length){let[t]=s;for(;t.forceReduce()&&t.stack.length&&t.stack[t.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let h=0;h<s.length;h++){let n=s[h];for(;;){if(this.tokens.mainToken=null,n.pos>i)r.push(n);else{if(this.advanceStack(n,r,s))continue;{t||(t=[],e=[]),t.push(n);let s=this.tokens.getMainToken(n);e.push(s.value,s.end)}}break}}if(!r.length){let e=t&&function(t){let e=null;for(let s of t){let t=s.p.stoppedAt;(s.pos==s.p.stream.end||null!=t&&s.pos>t)&&s.p.parser.stateFlag(s.state,2)&&(!e||e.score<s.score)&&(e=s)}return e}(t);if(e)return this.stackToTree(e);if(this.parser.strict)throw new SyntaxError("No parse at "+i);this.recovering||(this.recovering=5)}if(this.recovering&&t){let s=null!=this.stoppedAt&&t[0].pos>this.stoppedAt?t[0]:this.runRecovery(t,e,r);if(s)return this.stackToTree(s.forceAll())}if(this.recovering){let t=1==this.recovering?1:3*this.recovering;if(r.length>t)for(r.sort(((t,e)=>e.score-t.score));r.length>t;)r.pop();r.some((t=>t.reducePos>i))&&this.recovering--}else if(r.length>1){t:for(let t=0;t<r.length-1;t++){let e=r[t];for(let s=t+1;s<r.length;s++){let i=r[s];if(e.sameState(i)||e.buffer.length>500&&i.buffer.length>500){if(!((e.score-i.score||e.buffer.length-i.buffer.length)>0)){r.splice(t--,1);continue t}r.splice(s--,1)}}}r.length>12&&r.splice(12,r.length-12)}this.minStackPos=r[0].pos;for(let h=1;h<r.length;h++)r[h].pos<this.minStackPos&&(this.minStackPos=r[h].pos);return null}stopAt(t){if(null!=this.stoppedAt&&this.stoppedAt<t)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=t}advanceStack(t,e,s){let i=t.pos,{parser:n}=this;C&&this.stackID(t);if(null!=this.stoppedAt&&i>this.stoppedAt)return t.forceReduce()?t:null;if(this.fragments){let e=t.curContext&&t.curContext.tracker.strict,s=e?t.curContext.hash:0;for(let o=this.fragments.nodeAt(i);o;){let i=this.parser.nodeSet.types[o.type.id]==o.type?n.getGoto(t.state,o.type.id):-1;if(i>-1&&o.length&&(!e||(o.prop(r.contextHash)||0)==s))return t.useNode(o,i),!0;if(!(o instanceof h)||0==o.children.length||o.positions[0]>0)break;let a=o.children[0];if(!(a instanceof h&&0==o.positions[0]))break;o=a}}let o=n.stateSlot(t.state,4);if(o>0)return t.reduce(o),!0;if(t.stack.length>=15e3)for(;t.stack.length>9e3&&t.forceReduce(););let a=this.tokens.getActions(t);for(let r=0;r<a.length;){let h=a[r++],n=a[r++],o=a[r++],l=r==a.length||!s,c=l?t:t.split();if(c.apply(h,n,o),l)return!0;c.pos>i?e.push(c):s.push(c)}return!1}advanceFully(t,e){let s=t.pos;for(;;){if(!this.advanceStack(t,null,null))return!1;if(t.pos>s)return M(t,e),!0}}runRecovery(t,e,s){let i=null,r=!1;for(let h=0;h<t.length;h++){let n=t[h],o=e[h<<1],a=e[1+(h<<1)],l=C?this.stackID(n)+" -> ":"";if(n.deadEnd){if(r)continue;if(r=!0,n.restart(),this.advanceFully(n,s))continue}let c=n.split(),u=l;for(let t=0;c.forceReduce()&&t<10;t++){if(this.advanceFully(c,s))break;C&&(u=this.stackID(c)+" -> ")}for(let t of n.recoverByInsert(o))this.advanceFully(t,s);this.stream.end>n.pos?(a==n.pos&&(a++,o=0),n.recoverByDelete(o,a),M(n,s)):(!i||i.score<n.score)&&(i=n)}return i}stackToTree(t){return t.close(),h.build({buffer:f.create(t),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:t.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(t){let e=(A||(A=new WeakMap)).get(t);return e||A.set(t,e=String.fromCodePoint(this.nextStackID++)),e+t}}function M(t,e){for(let s=0;s<e.length;s++){let i=e[s];if(i.pos==t.pos&&i.sameState(t))return void(e[s].score<t.score&&(e[s]=t))}e.push(t)}class I{constructor(t,e,s){this.source=t,this.flags=e,this.disabled=s}allows(t){return!this.disabled||0==this.disabled[t]}}const O=t=>t;class F{constructor(t){this.start=t.start,this.shift=t.shift||O,this.reduce=t.reduce||O,this.reuse=t.reuse||O,this.hash=t.hash||(()=>0),this.strict=!1!==t.strict}}class L extends t{constructor(t){if(super(),this.wrappers=[],14!=t.version)throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (14)`);let h=t.nodeNames.split(" ");this.minRepeatTerm=h.length;for(let e=0;e<t.repeatNodeCount;e++)h.push("");let n=Object.keys(t.topRules).map((e=>t.topRules[e][1])),o=[];for(let e=0;e<h.length;e++)o.push([]);function a(t,e,s){o[t].push([e,e.deserialize(String(s))])}if(t.nodeProps)for(let e of t.nodeProps){let t=e[0];"string"==typeof t&&(t=r[t]);for(let s=1;s<e.length;){let i=e[s++];if(i>=0)a(i,t,e[s++]);else{let r=e[s+-i];for(let h=-i;h>0;h--)a(e[s++],t,r);s++}}}this.nodeSet=new e(h.map(((e,i)=>s.define({name:i>=this.minRepeatTerm?void 0:e,id:i,props:o[i],top:n.indexOf(i)>-1,error:0==i,skipped:t.skippedNodes&&t.skippedNodes.indexOf(i)>-1})))),t.propSources&&(this.nodeSet=this.nodeSet.extend(...t.propSources)),this.strict=!1,this.bufferLength=i;let l=p(t.tokenData);this.context=t.context,this.specializerSpecs=t.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let e=0;e<this.specializerSpecs.length;e++)this.specialized[e]=this.specializerSpecs[e].term;this.specializers=this.specializerSpecs.map(j),this.states=p(t.states,Uint32Array),this.data=p(t.stateData),this.goto=p(t.goto),this.maxTerm=t.maxTerm,this.tokenizers=t.tokenizers.map((t=>"number"==typeof t?new m(l,t):t)),this.topRules=t.topRules,this.dialects=t.dialects||{},this.dynamicPrecedences=t.dynamicPrecedences||null,this.tokenPrecTable=t.tokenPrec,this.termNames=t.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(t,e,s){let i=new D(this,t,e,s);for(let r of this.wrappers)i=r(i,t,e,s);return i}getGoto(t,e,s=!1){let i=this.goto;if(e>=i[0])return-1;for(let r=i[e+1];;){let e=i[r++],h=1&e,n=i[r++];if(h&&s)return n;for(let s=r+(e>>1);r<s;r++)if(i[r]==t)return n;if(h)return-1}}hasAction(t,e){let s=this.data;for(let i=0;i<2;i++)for(let r,h=this.stateSlot(t,i?2:1);;h+=3){if(65535==(r=s[h])){if(1!=s[h+1]){if(2==s[h+1])return E(s,h+2);break}r=s[h=E(s,h+2)]}if(r==e||0==r)return E(s,h+1)}return 0}stateSlot(t,e){return this.states[6*t+e]}stateFlag(t,e){return(this.stateSlot(t,0)&e)>0}validAction(t,e){if(e==this.stateSlot(t,4))return!0;for(let s=this.stateSlot(t,1);;s+=3){if(65535==this.data[s]){if(1!=this.data[s+1])return!1;s=E(this.data,s+2)}if(e==E(this.data,s+1))return!0}}nextStates(t){let e=[];for(let s=this.stateSlot(t,1);;s+=3){if(65535==this.data[s]){if(1!=this.data[s+1])break;s=E(this.data,s+2)}if(0==(1&this.data[s+2])){let t=this.data[s+1];e.some(((e,s)=>1&s&&e==t))||e.push(this.data[s],t)}}return e}configure(t){let e=Object.assign(Object.create(L.prototype),this);if(t.props&&(e.nodeSet=this.nodeSet.extend(...t.props)),t.top){let s=this.topRules[t.top];if(!s)throw new RangeError(`Invalid top rule name ${t.top}`);e.top=s}return t.tokenizers&&(e.tokenizers=this.tokenizers.map((e=>{let s=t.tokenizers.find((t=>t.from==e));return s?s.to:e}))),t.specializers&&(e.specializers=this.specializers.slice(),e.specializerSpecs=this.specializerSpecs.map(((s,i)=>{let r=t.specializers.find((t=>t.from==s.external));if(!r)return s;let h=Object.assign(Object.assign({},s),{external:r.to});return e.specializers[i]=j(h),h}))),t.contextTracker&&(e.context=t.contextTracker),t.dialect&&(e.dialect=this.parseDialect(t.dialect)),null!=t.strict&&(e.strict=t.strict),t.wrap&&(e.wrappers=e.wrappers.concat(t.wrap)),null!=t.bufferLength&&(e.bufferLength=t.bufferLength),e}hasWrappers(){return this.wrappers.length>0}getName(t){return this.termNames?this.termNames[t]:String(t<=this.maxNode&&this.nodeSet.types[t].name||t)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(t){let e=this.dynamicPrecedences;return null==e?0:e[t]||0}parseDialect(t){let e=Object.keys(this.dialects),s=e.map((()=>!1));if(t)for(let r of t.split(" ")){let t=e.indexOf(r);t>=0&&(s[t]=!0)}let i=null;for(let r=0;r<e.length;r++)if(!s[r])for(let t,s=this.dialects[e[r]];65535!=(t=this.data[s++]);)(i||(i=new Uint8Array(this.maxTerm+1)))[t]=1;return new I(t,s,i)}static deserialize(t){return new L(t)}}function E(t,e){return t[e]|t[e+1]<<16}function j(t){if(t.external){let e=t.extend?1:0;return(s,i)=>t.external(s,i)<<1|e}return t.get}export{F as C,b as E,L,x as a};