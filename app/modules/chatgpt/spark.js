'use strict';function _0xdedd(_0x964e53,_0x1b329c){const _0x581e9a=_0x581e();return _0xdedd=function(_0xdeddc2,_0x1f2734){_0xdeddc2=_0xdeddc2-0x13e;let _0x661a4c=_0x581e9a[_0xdeddc2];return _0x661a4c;},_0xdedd(_0x964e53,_0x1b329c);}const _0x1baec0=_0xdedd;(function(_0x16d560,_0x48198d){const _0x493fdc=_0xdedd,_0x379166=_0x16d560();while(!![]){try{const _0x4d4918=-parseInt(_0x493fdc(0x13e))/0x1+parseInt(_0x493fdc(0x150))/0x2*(-parseInt(_0x493fdc(0x158))/0x3)+-parseInt(_0x493fdc(0x14a))/0x4+parseInt(_0x493fdc(0x154))/0x5*(parseInt(_0x493fdc(0x14c))/0x6)+parseInt(_0x493fdc(0x13f))/0x7*(-parseInt(_0x493fdc(0x14e))/0x8)+-parseInt(_0x493fdc(0x159))/0x9*(-parseInt(_0x493fdc(0x14d))/0xa)+parseInt(_0x493fdc(0x155))/0xb;if(_0x4d4918===_0x48198d)break;else _0x379166['push'](_0x379166['shift']());}catch(_0xc56256){_0x379166['push'](_0x379166['shift']());}}}(_0x581e,0xce241));function _0x581e(){const _0x2639a4=['21DhcYAD','text','spark-node-sdk','ChatMessage','defineProperty','getModel','V1_5','map','spark','includes','usage','238516pIXpFG','message','1194JsCtCS','3303190IFXuYN','1805736ACGQeF','log','2PgTjSm','chatAsync','SparkClient','uasge','755mnOkrw','13191156ZGsoJX','content','string','2626113hhRbOz','45jBIqlo','fromUser','ModelVersion','424336QUsDFG'];_0x581e=function(){return _0x2639a4;};return _0x581e();}Object[_0x1baec0(0x143)](exports,'__esModule',{'value':!![]}),exports['XunFeiSpark']=void 0x0;const spark_node_sdk_1=require(_0x1baec0(0x141));class XunFeiSpark{constructor(_0x126584){const _0x32df8b=_0x1baec0;this[_0x32df8b(0x14b)]={},this[_0x32df8b(0x144)]=_0x47b79a=>{const _0x2763fc=_0x32df8b;return _0x47b79a[_0x2763fc(0x148)]('V1.5')?spark_node_sdk_1[_0x2763fc(0x15b)][_0x2763fc(0x145)]:_0x47b79a['includes']('V2.0')?spark_node_sdk_1[_0x2763fc(0x15b)]['V2']:spark_node_sdk_1[_0x2763fc(0x15b)]['V3'];};const {appid:_0x4a75f1,secret:_0x66faf6,key:_0x2f9054}=_0x126584;this[_0x32df8b(0x147)]=new spark_node_sdk_1[(_0x32df8b(0x152))](_0x4a75f1,_0x2f9054,_0x66faf6);}async['sendMessageFromXunFei'](_0x28d644,_0x3e0f67){const _0x131f6c=_0x1baec0;let _0x16fd2d={'usage':{'completion_tokens':0x0,'prompt_tokens':0x0,'question_tokens':0x0,'total_tokens':0x0},'text':''},_0x223202='';const {temperature:_0x4b4fef,chatId:_0x51af14,model:_0x56366e,onProgress:_0x4cd7f5,abortController:_0x3341d0}=_0x3e0f67,_0x5bdef8=this[_0x131f6c(0x144)](_0x56366e);let _0x2dd59a=typeof _0x28d644===_0x131f6c(0x157)?[spark_node_sdk_1[_0x131f6c(0x142)][_0x131f6c(0x15a)](_0x28d644)]:_0x28d644[_0x131f6c(0x146)](_0x11f2cc=>spark_node_sdk_1[_0x131f6c(0x142)][_0x131f6c(0x15a)](_0x11f2cc[_0x131f6c(0x156)]));return await this[_0x131f6c(0x147)][_0x131f6c(0x151)](_0x5bdef8,_0x2dd59a,_0x3d108b=>{const _0x5589c0=_0x131f6c;try{_0x3d108b&&(_0x223202+=_0x3d108b[_0x5589c0(0x140)]),_0x16fd2d[_0x5589c0(0x149)]=_0x3d108b[_0x5589c0(0x153)],_0x16fd2d[_0x5589c0(0x140)]=_0x223202,_0x4cd7f5(_0x16fd2d);}catch(_0x14f9a8){console[_0x5589c0(0x14f)](_0x14f9a8),_0x4cd7f5(_0x16fd2d);}},{'temperature':_0x4b4fef||0.5,'max_tokens':0x800,'top_k':0x4,'chat_id':null},_0x51af14,_0x3341d0),{'text':_0x223202,'usage':_0x16fd2d[_0x131f6c(0x149)]};}}exports['XunFeiSpark']=XunFeiSpark;