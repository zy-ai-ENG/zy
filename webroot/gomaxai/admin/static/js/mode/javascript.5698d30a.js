
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
function e(e){var t,r,n=e.statementIndent,a=e.jsonld,i=e.json||a,o=e.typescript,u=e.wordCharacters||/[\w$\xa1-\uffff]/,c=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("keyword d"),i=e("operator"),o={type:"atom",style:"atom"};return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:a,break:a,continue:a,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),s=/[+\-*&%=<>!?|~^@]/,l=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function f(e,n,a){return t=e,r=a,n}function d(e,t){var r,n=e.next();if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,i=!1;if(a&&"@"==e.peek()&&e.match(l))return t.tokenize=d,f("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=r||i);)i=!i&&"\\"==n;return i||(t.tokenize=d),f("string","string")}),t.tokenize(e,t);if("."==n&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return f("number","number");if("."==n&&e.match(".."))return f("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return f(n);if("="==n&&e.eat(">"))return f("=>","operator");if("0"==n&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return f("number","number");if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),f("number","number");if("/"==n)return e.eat("*")?(t.tokenize=m,m(e,t)):e.eat("/")?(e.skipToEnd(),f("comment","comment")):function(e,t,r){return t.tokenize==d&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}(e,t,1)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),f("regexp","string.special")):(e.eat("="),f("operator","operator",e.current()));if("`"==n)return t.tokenize=p,p(e,t);if("#"==n&&"!"==e.peek())return e.skipToEnd(),f("meta","meta");if("#"==n&&e.eatWhile(u))return f("variable","property");if("<"==n&&e.match("!--")||"-"==n&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),f("comment","comment");if(s.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-|&?]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),"?"==n&&e.eat(".")?f("."):f("operator","operator",e.current());if(u.test(n)){e.eatWhile(u);var i=e.current();if("."!=t.lastType){if(c.propertyIsEnumerable(i)){var o=c[i];return f(o.type,o.style,i)}if("async"==i&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return f("async","keyword",i)}return f("variable","variable",i)}}function m(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=d;break}n="*"==r}return f("comment","comment")}function p(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=d;break}n=!n&&"\\"==r}return f("quasi","string.special",e.current())}var k="([{}])";function v(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(o){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var a=0,i=!1,c=r-1;c>=0;--c){var s=e.string.charAt(c),l=k.indexOf(s);if(l>=0&&l<3){if(!a){++c;break}if(0==--a){"("==s&&(i=!0);break}}else if(l>=3&&l<6)++a;else if(u.test(s))i=!0;else if(/["'\/`]/.test(s))for(;;--c){if(0==c)return;if(e.string.charAt(c-1)==s&&"\\"!=e.string.charAt(c-2)){c--;break}}else if(i&&!a){++c;break}}i&&!a&&(t.fatArrowAt=c)}}var y={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function w(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function b(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}var h={state:null,column:null,marked:null,cc:null};function x(){for(var e=arguments.length-1;e>=0;e--)h.cc.push(arguments[e])}function g(){return x.apply(null,arguments),!0}function V(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}function A(t){var r=h.state;if(h.marked="def",r.context)if("var"==r.lexical.info&&r.context&&r.context.block){var n=z(t,r.context);if(null!=n)return void(r.context=n)}else if(!V(t,r.localVars))return void(r.localVars=new $(t,r.localVars));e.globalVars&&!V(t,r.globalVars)&&(r.globalVars=new $(t,r.globalVars))}function z(e,t){if(t){if(t.block){var r=z(e,t.prev);return r?r==t.prev?t:new j(r,t.vars,!0):null}return V(e,t.vars)?t:new j(t.prev,new $(e,t.vars),!1)}return null}function T(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function j(e,t,r){this.prev=e,this.vars=t,this.block=r}function $(e,t){this.name=e,this.next=t}var O=new $("this",new $("arguments",null));function _(){h.state.context=new j(h.state.context,h.state.localVars,!1),h.state.localVars=O}function q(){h.state.context=new j(h.state.context,h.state.localVars,!0),h.state.localVars=null}function E(){h.state.localVars=h.state.context.vars,h.state.context=h.state.context.prev}function I(e,t){var r=function(){var r=h.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new w(n,h.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function S(){var e=h.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function N(e){return function t(r){return r==e?g():";"==e||"}"==r||")"==r||"]"==r?x():g(t)}}function P(e,t){return"var"==e?g(I("vardef",t),he,N(";"),S):"keyword a"==e?g(I("form"),D,P,S):"keyword b"==e?g(I("form"),P,S):"keyword d"==e?h.stream.match(/^\s*$/,!1)?g():g(I("stat"),U,N(";"),S):"debugger"==e?g(N(";")):"{"==e?g(I("}"),q,ae,S,E):";"==e?g():"if"==e?("else"==h.state.lexical.info&&h.state.cc[h.state.cc.length-1]==S&&h.state.cc.pop()(),g(I("form"),D,P,S,Te)):"function"==e?g(_e):"for"==e?g(I("form"),q,je,P,E,S):"class"==e||o&&"interface"==t?(h.marked="keyword",g(I("form","class"==e?e:t),Ne,S)):"variable"==e?o&&"declare"==t?(h.marked="keyword",g(P)):o&&("module"==t||"enum"==t||"type"==t)&&h.stream.match(/^\s*\w/,!1)?(h.marked="keyword","enum"==t?g(Le):"type"==t?g(Ee,N("operator"),se,N(";")):g(I("form"),xe,N("{"),I("}"),ae,S,S)):o&&"namespace"==t?(h.marked="keyword",g(I("form"),W,P,S)):o&&"abstract"==t?(h.marked="keyword",g(P)):g(I("stat"),X):"switch"==e?g(I("form"),D,N("{"),I("}","switch"),q,ae,S,S,E):"case"==e?g(W,N(":")):"default"==e?g(N(":")):"catch"==e?g(I("form"),_,C,P,S,E):"export"==e?g(I("stat"),Be,S):"import"==e?g(I("stat"),Fe,S):"async"==e?g(P):"@"==t?g(W,P):x(I("stat"),W,N(";"),S)}function C(e){if("("==e)return g(Ie,N(")"))}function W(e,t){return F(e,t,!1)}function B(e,t){return F(e,t,!0)}function D(e){return"("!=e?x():g(I(")"),U,N(")"),S)}function F(e,t,r){if(h.state.fatArrowAt==h.stream.start){var n=r?M:L;if("("==e)return g(_,I(")"),re(Ie,")"),S,N("=>"),n,E);if("variable"==e)return x(_,xe,N("=>"),n,E)}var a=r?H:G;return y.hasOwnProperty(e)?g(a):"function"==e?g(_e,a):"class"==e||o&&"interface"==t?(h.marked="keyword",g(I("form"),Se,S)):"keyword c"==e||"async"==e?g(r?B:W):"("==e?g(I(")"),U,N(")"),S,a):"operator"==e||"spread"==e?g(r?B:W):"["==e?g(I("]"),Ke,S,a):"{"==e?ne(Z,"}",null,a):"quasi"==e?x(J,a):"new"==e?g(function(e){return function(t){return"."==t?g(e?R:Q):"variable"==t&&o?g(ye,e?H:G):x(e?B:W)}}(r)):g()}function U(e){return e.match(/[;\}\)\],]/)?x():x(W)}function G(e,t){return","==e?g(U):H(e,t,!1)}function H(e,t,r){var n=0==r?G:H,a=0==r?W:B;return"=>"==e?g(_,r?M:L,E):"operator"==e?/\+\+|--/.test(t)||o&&"!"==t?g(n):o&&"<"==t&&h.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?g(I(">"),re(se,">"),S,n):"?"==t?g(W,N(":"),a):g(a):"quasi"==e?x(J,n):";"!=e?"("==e?ne(B,")","call",n):"."==e?g(Y,n):"["==e?g(I("]"),U,N("]"),S,n):o&&"as"==t?(h.marked="keyword",g(se,n)):"regexp"==e?(h.state.lastType=h.marked="operator",h.stream.backUp(h.stream.pos-h.stream.start-1),g(a)):void 0:void 0}function J(e,t){return"quasi"!=e?x():"${"!=t.slice(t.length-2)?g(J):g(U,K)}function K(e){if("}"==e)return h.marked="string.special",h.state.tokenize=p,g(J)}function L(e){return v(h.stream,h.state),x("{"==e?P:W)}function M(e){return v(h.stream,h.state),x("{"==e?P:B)}function Q(e,t){if("target"==t)return h.marked="keyword",g(G)}function R(e,t){if("target"==t)return h.marked="keyword",g(H)}function X(e){return":"==e?g(S,P):x(G,N(";"),S)}function Y(e){if("variable"==e)return h.marked="property",g()}function Z(e,t){return"async"==e?(h.marked="property",g(Z)):"variable"==e||"keyword"==h.style?(h.marked="property","get"==t||"set"==t?g(ee):(o&&h.state.fatArrowAt==h.stream.start&&(r=h.stream.match(/^\s*:\s*/,!1))&&(h.state.fatArrowAt=h.stream.pos+r[0].length),g(te))):"number"==e||"string"==e?(h.marked=a?"property":h.style+" property",g(te)):"jsonld-keyword"==e?g(te):o&&T(t)?(h.marked="keyword",g(Z)):"["==e?g(W,ie,N("]"),te):"spread"==e?g(B,te):"*"==t?(h.marked="keyword",g(Z)):":"==e?x(te):void 0;var r}function ee(e){return"variable"!=e?x(te):(h.marked="property",g(_e))}function te(e){return":"==e?g(B):"("==e?x(_e):void 0}function re(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=h.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),g((function(r,n){return r==t||n==t?x():x(e)}),n)}return a==t||i==t?g():r&&r.indexOf(";")>-1?x(e):g(N(t))}return function(r,a){return r==t||a==t?g():x(e,n)}}function ne(e,t,r){for(var n=3;n<arguments.length;n++)h.cc.push(arguments[n]);return g(I(t,r),re(e,t),S)}function ae(e){return"}"==e?g():x(P,ae)}function ie(e,t){if(o){if(":"==e)return g(se);if("?"==t)return g(ie)}}function oe(e,t){if(o&&(":"==e||"in"==t))return g(se)}function ue(e){if(o&&":"==e)return h.stream.match(/^\s*\w+\s+is\b/,!1)?g(W,ce,se):g(se)}function ce(e,t){if("is"==t)return h.marked="keyword",g()}function se(e,t){return"keyof"==t||"typeof"==t||"infer"==t||"readonly"==t?(h.marked="keyword",g("typeof"==t?B:se)):"variable"==e||"void"==t?(h.marked="type",g(ve)):"|"==t||"&"==t?g(se):"string"==e||"number"==e||"atom"==e?g(ve):"["==e?g(I("]"),re(se,"]",","),S,ve):"{"==e?g(I("}"),fe,S,ve):"("==e?g(re(ke,")"),le,ve):"<"==e?g(re(se,">"),se):"quasi"==e?x(me,ve):void 0}function le(e){if("=>"==e)return g(se)}function fe(e){return e.match(/[\}\)\]]/)?g():","==e||";"==e?g(fe):x(de,fe)}function de(e,t){return"variable"==e||"keyword"==h.style?(h.marked="property",g(de)):"?"==t||"number"==e||"string"==e?g(de):":"==e?g(se):"["==e?g(N("variable"),oe,N("]"),de):"("==e?x(qe,de):e.match(/[;\}\)\],]/)?void 0:g()}function me(e,t){return"quasi"!=e?x():"${"!=t.slice(t.length-2)?g(me):g(se,pe)}function pe(e){if("}"==e)return h.marked="string.special",h.state.tokenize=p,g(me)}function ke(e,t){return"variable"==e&&h.stream.match(/^\s*[?:]/,!1)||"?"==t?g(ke):":"==e?g(se):"spread"==e?g(ke):x(se)}function ve(e,t){return"<"==t?g(I(">"),re(se,">"),S,ve):"|"==t||"."==e||"&"==t?g(se):"["==e?g(se,N("]"),ve):"extends"==t||"implements"==t?(h.marked="keyword",g(se)):"?"==t?g(se,N(":"),se):void 0}function ye(e,t){if("<"==t)return g(I(">"),re(se,">"),S,ve)}function we(){return x(se,be)}function be(e,t){if("="==t)return g(se)}function he(e,t){return"enum"==t?(h.marked="keyword",g(Le)):x(xe,ie,Ae,ze)}function xe(e,t){return o&&T(t)?(h.marked="keyword",g(xe)):"variable"==e?(A(t),g()):"spread"==e?g(xe):"["==e?ne(Ve,"]"):"{"==e?ne(ge,"}"):void 0}function ge(e,t){return"variable"!=e||h.stream.match(/^\s*:/,!1)?("variable"==e&&(h.marked="property"),"spread"==e?g(xe):"}"==e?x():"["==e?g(W,N("]"),N(":"),ge):g(N(":"),xe,Ae)):(A(t),g(Ae))}function Ve(){return x(xe,Ae)}function Ae(e,t){if("="==t)return g(B)}function ze(e){if(","==e)return g(he)}function Te(e,t){if("keyword b"==e&&"else"==t)return g(I("form","else"),P,S)}function je(e,t){return"await"==t?g(je):"("==e?g(I(")"),$e,S):void 0}function $e(e){return"var"==e?g(he,Oe):"variable"==e?g(Oe):x(Oe)}function Oe(e,t){return")"==e?g():";"==e?g(Oe):"in"==t||"of"==t?(h.marked="keyword",g(W,Oe)):x(W,Oe)}function _e(e,t){return"*"==t?(h.marked="keyword",g(_e)):"variable"==e?(A(t),g(_e)):"("==e?g(_,I(")"),re(Ie,")"),S,ue,P,E):o&&"<"==t?g(I(">"),re(we,">"),S,_e):void 0}function qe(e,t){return"*"==t?(h.marked="keyword",g(qe)):"variable"==e?(A(t),g(qe)):"("==e?g(_,I(")"),re(Ie,")"),S,ue,E):o&&"<"==t?g(I(">"),re(we,">"),S,qe):void 0}function Ee(e,t){return"keyword"==e||"variable"==e?(h.marked="type",g(Ee)):"<"==t?g(I(">"),re(we,">"),S):void 0}function Ie(e,t){return"@"==t&&g(W,Ie),"spread"==e?g(Ie):o&&T(t)?(h.marked="keyword",g(Ie)):o&&"this"==e?g(ie,Ae):x(xe,ie,Ae)}function Se(e,t){return"variable"==e?Ne(e,t):Pe(e,t)}function Ne(e,t){if("variable"==e)return A(t),g(Pe)}function Pe(e,t){return"<"==t?g(I(">"),re(we,">"),S,Pe):"extends"==t||"implements"==t||o&&","==e?("implements"==t&&(h.marked="keyword"),g(o?se:W,Pe)):"{"==e?g(I("}"),Ce,S):void 0}function Ce(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||o&&T(t))&&h.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1)?(h.marked="keyword",g(Ce)):"variable"==e||"keyword"==h.style?(h.marked="property",g(We,Ce)):"number"==e||"string"==e?g(We,Ce):"["==e?g(W,ie,N("]"),We,Ce):"*"==t?(h.marked="keyword",g(Ce)):o&&"("==e?x(qe,Ce):";"==e||","==e?g(Ce):"}"==e?g():"@"==t?g(W,Ce):void 0}function We(e,t){if("!"==t||"?"==t)return g(We);if(":"==e)return g(se,Ae);if("="==t)return g(B);var r=h.state.lexical.prev;return x(r&&"interface"==r.info?qe:_e)}function Be(e,t){return"*"==t?(h.marked="keyword",g(Je,N(";"))):"default"==t?(h.marked="keyword",g(W,N(";"))):"{"==e?g(re(De,"}"),Je,N(";")):x(P)}function De(e,t){return"as"==t?(h.marked="keyword",g(N("variable"))):"variable"==e?x(B,De):void 0}function Fe(e){return"string"==e?g():"("==e?x(W):"."==e?x(G):x(Ue,Ge,Je)}function Ue(e,t){return"{"==e?ne(Ue,"}"):("variable"==e&&A(t),"*"==t&&(h.marked="keyword"),g(He))}function Ge(e){if(","==e)return g(Ue,Ge)}function He(e,t){if("as"==t)return h.marked="keyword",g(Ue)}function Je(e,t){if("from"==t)return h.marked="keyword",g(W)}function Ke(e){return"]"==e?g():x(re(B,"]"))}function Le(){return x(I("form"),xe,N("{"),I("}"),re(Me,"}"),S,S)}function Me(){return x(xe,Ae)}return _.lex=q.lex=!0,E.lex=!0,S.lex=!0,{name:e.name,startState:function(t){var r={tokenize:d,lastType:"sof",cc:[],lexical:new w(-t,0,"block",!1),localVars:e.localVars,context:e.localVars&&new j(null,null,!1),indented:0};return e.globalVars&&"object"==typeof e.globalVars&&(r.globalVars=e.globalVars),r},token:function(e,n){if(e.sol()&&(n.lexical.hasOwnProperty("align")||(n.lexical.align=!1),n.indented=e.indentation(),v(e,n)),n.tokenize!=m&&e.eatSpace())return null;var a=n.tokenize(e,n);return"comment"==t?a:(n.lastType="operator"!=t||"++"!=r&&"--"!=r?t:"incdec",function(e,t,r,n,a){var o=e.cc;for(h.state=e,h.stream=a,h.marked=null,h.cc=o,h.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((o.length?o.pop():i?W:P)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()();return h.marked?h.marked:"variable"==r&&b(e,n)?"variableName.local":t}}(n,a,t,r,e))},indent:function(t,r,a){if(t.tokenize==m||t.tokenize==p)return null;if(t.tokenize!=d)return 0;var i,o=r&&r.charAt(0),u=t.lexical;if(!/^\s*else\b/.test(r))for(var c=t.cc.length-1;c>=0;--c){var l=t.cc[c];if(l==S)u=u.prev;else if(l!=Te&&l!=E)break}for(;("stat"==u.type||"form"==u.type)&&("}"==o||(i=t.cc[t.cc.length-1])&&(i==G||i==H)&&!/^[,\.=+\-*:?[\(]/.test(r));)u=u.prev;n&&")"==u.type&&"stat"==u.prev.type&&(u=u.prev);var f=u.type,k=o==f;return"vardef"==f?u.indented+("operator"==t.lastType||","==t.lastType?u.info.length+1:0):"form"==f&&"{"==o?u.indented:"form"==f?u.indented+a.unit:"stat"==f?u.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||s.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,r)?n||a.unit:0):"switch"!=u.info||k||0==e.doubleIndentSwitch?u.align?u.column+(k?0:1):u.indented+(k?0:a.unit):u.indented+(/^(?:case|default)\b/.test(r)?a.unit:2*a.unit)},languageData:{indentOnInput:/^\s*(?:case .*?:|default:|\{|\})$/,commentTokens:i?void 0:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]},wordChars:"$"}}}const t=e({name:"javascript"}),r=e({name:"json",json:!0}),n=e({name:"json",jsonld:!0}),a=e({name:"typescript",typescript:!0});export{t as javascript,r as json,n as jsonld,a as typescript};
