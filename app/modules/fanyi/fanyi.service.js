'use strict';const _0x26209a=_0x48f2;(function(_0x5280b2,_0x304130){const _0x326bfc=_0x48f2,_0x5cf5ce=_0x5280b2();while(!![]){try{const _0x2f4aa7=parseInt(_0x326bfc(0xd3))/0x1*(-parseInt(_0x326bfc(0xc3))/0x2)+parseInt(_0x326bfc(0xe7))/0x3*(parseInt(_0x326bfc(0xa8))/0x4)+parseInt(_0x326bfc(0xce))/0x5+-parseInt(_0x326bfc(0xa7))/0x6+parseInt(_0x326bfc(0xb2))/0x7*(parseInt(_0x326bfc(0xc2))/0x8)+-parseInt(_0x326bfc(0xda))/0x9+parseInt(_0x326bfc(0xbe))/0xa;if(_0x2f4aa7===_0x304130)break;else _0x5cf5ce['push'](_0x5cf5ce['shift']());}catch(_0x41931c){_0x5cf5ce['push'](_0x5cf5ce['shift']());}}}(_0x5af3,0x204e7));var __decorate=this&&this[_0x26209a(0xb9)]||function(_0x2e81e8,_0x52b757,_0x2a7bc,_0x1387e0){const _0x4e041f=_0x26209a;var _0x2c017f=arguments[_0x4e041f(0xae)],_0x3a1582=_0x2c017f<0x3?_0x52b757:_0x1387e0===null?_0x1387e0=Object['getOwnPropertyDescriptor'](_0x52b757,_0x2a7bc):_0x1387e0,_0x1404fb;if(typeof Reflect===_0x4e041f(0xa4)&&typeof Reflect[_0x4e041f(0xde)]===_0x4e041f(0xac))_0x3a1582=Reflect[_0x4e041f(0xde)](_0x2e81e8,_0x52b757,_0x2a7bc,_0x1387e0);else{for(var _0x5acd44=_0x2e81e8[_0x4e041f(0xae)]-0x1;_0x5acd44>=0x0;_0x5acd44--)if(_0x1404fb=_0x2e81e8[_0x5acd44])_0x3a1582=(_0x2c017f<0x3?_0x1404fb(_0x3a1582):_0x2c017f>0x3?_0x1404fb(_0x52b757,_0x2a7bc,_0x3a1582):_0x1404fb(_0x52b757,_0x2a7bc))||_0x3a1582;}return _0x2c017f>0x3&&_0x3a1582&&Object[_0x4e041f(0xc9)](_0x52b757,_0x2a7bc,_0x3a1582),_0x3a1582;},__metadata=this&&this[_0x26209a(0xa3)]||function(_0x1dbaec,_0x3f6c46){const _0x2de4ff=_0x26209a;if(typeof Reflect===_0x2de4ff(0xa4)&&typeof Reflect[_0x2de4ff(0xd0)]===_0x2de4ff(0xac))return Reflect[_0x2de4ff(0xd0)](_0x1dbaec,_0x3f6c46);};Object['defineProperty'](exports,_0x26209a(0xbc),{'value':!![]}),exports['FanyiService']=void 0x0;function _0x48f2(_0x382a2f,_0x833772){const _0x5af3f4=_0x5af3();return _0x48f2=function(_0x48f212,_0x57f155){_0x48f212=_0x48f212-0x99;let _0x442f80=_0x5af3f4[_0x48f212];return _0x442f80;},_0x48f2(_0x382a2f,_0x833772);}const globalConfig_service_1=require(_0x26209a(0xc6)),common_1=require(_0x26209a(0xb1)),axios_1=require(_0x26209a(0xe2)),crypto=require(_0x26209a(0xba)),openai_1=require(_0x26209a(0xad)),utils_1=require(_0x26209a(0xa1)),models_service_1=require(_0x26209a(0xaf)),model_constant_1=require(_0x26209a(0xb3));let FanyiService=class FanyiService{constructor(_0x16ff47,_0x3575e3){const _0x5bf75b=_0x26209a;this[_0x5bf75b(0xb7)]=_0x16ff47,this[_0x5bf75b(0xc8)]=_0x3575e3,this[_0x5bf75b(0xd1)]=_0x5bf75b(0xa5);}['onModuleInit'](){const _0x5983dd=_0x26209a;this['api']=new openai_1['default']({'apiKey':_0x5983dd(0xb0),'baseURL':this[_0x5983dd(0xd1)]+_0x5983dd(0xab)});}async['convertToEnglish'](_0x44030a){const _0x166549=_0x26209a;if(!_0x44030a)throw new common_1[(_0x166549(0xb6))](_0x166549(0xdb),common_1[_0x166549(0xe6)][_0x166549(0xcb)]);const {baiduFanyiAppId:_0x8dacb4,baiduFanyiSecret:_0x34d180}=await this[_0x166549(0xb7)][_0x166549(0xa0)](['baiduFanyiAppId',_0x166549(0xca)]);if(!_0x8dacb4||!_0x34d180)throw new common_1[(_0x166549(0xb6))](_0x166549(0xdf),common_1['HttpStatus'][_0x166549(0xcb)]);const _0x5ba9b8=Date[_0x166549(0xc1)]()[_0x166549(0xd2)](),_0x141552=crypto[_0x166549(0xa6)](_0x166549(0xd6))[_0x166549(0xe3)](_0x8dacb4+_0x44030a+_0x5ba9b8+_0x34d180)['digest']('hex'),_0x45b16a='https://fanyi-api.baidu.com/api/trans/vip/translate',_0x3cde2a={'q':_0x44030a[_0x166549(0xd2)](),'from':_0x166549(0xc7),'to':'en','appid':_0x8dacb4,'salt':_0x5ba9b8,'sign':_0x141552},_0x36abd9=await axios_1[_0x166549(0xaa)][_0x166549(0xbd)](_0x45b16a,_0x3cde2a,{'headers':{'Content-Type':_0x166549(0xd7)}}),{from:_0x46bf50,to:_0x2f6a8b,trans_result:_0x30d29c,error_code:_0x2767fe,error_msg:_0x1a3e10}=_0x36abd9[_0x166549(0xc5)];if(_0x2767fe)throw new common_1[(_0x166549(0xb6))](_0x166549(0x9b)+_0x2767fe+']['+_0x1a3e10+']!',common_1['HttpStatus'][_0x166549(0xcb)]);if(!_0x30d29c||!_0x30d29c[_0x166549(0xae)])throw new common_1[(_0x166549(0xb6))](_0x166549(0x9b)+_0x2767fe+']['+_0x1a3e10+']!',common_1['HttpStatus'][_0x166549(0xcb)]);else return _0x30d29c[0x0][_0x166549(0xe0)];}async[_0x26209a(0xa9)](_0x11d68f){const _0xc11358=_0x26209a,_0x2e81ba=_0xc11358(0xcf);let _0x31f9e0=await this[_0xc11358(0xc8)][_0xc11358(0xb8)](model_constant_1['EModelType'][_0xc11358(0xc0)]);if(!_0x31f9e0)throw new common_1[(_0xc11358(0xb6))](_0xc11358(0x9a),common_1[_0xc11358(0xe6)]['BAD_REQUEST']);const {timeout:_0x1dbb21,model:_0x59b6ed,key:_0x4430d9,maxModelTokens:maxModelTokens=0x1f40,proxyUrl:_0x1a3d0c}=_0x31f9e0;let _0x3cd7b9=_0x1a3d0c;!_0x1a3d0c&&(_0x3cd7b9=await this['globalConfigService']['getConfigs']([_0xc11358(0xcd)]));this['api']['apiKey']=(0x0,utils_1[_0xc11358(0xdd)])(_0x4430d9),this[_0xc11358(0x9c)][_0xc11358(0xe5)]=(_0x3cd7b9||this[_0xc11358(0xd1)])+'/v1',this[_0xc11358(0x9c)][_0xc11358(0xe4)]=0x493e0;try{common_1['Logger'][_0xc11358(0xc4)](_0x4430d9,_0xc11358(0xa2)),common_1[_0xc11358(0x99)]['log'](_0x3cd7b9,_0xc11358(0xd8));const _0xc9070a=Date[_0xc11358(0xc1)](),_0x3eddd8=await this['api'][_0xc11358(0x9f)][_0xc11358(0xbb)][_0xc11358(0xcc)]({'messages':[{'role':'system','content':_0x2e81ba},{'role':_0xc11358(0xd9),'content':_0x11d68f}],'model':_0xc11358(0xd5),'stream':![],'n':0x1,'max_tokens':maxModelTokens,'response_format':{'type':'text'}})['then'](_0xfc2c25=>{const _0x3d8017=_0xc11358;return _0xfc2c25?.[_0x3d8017(0xbf)][0x0]?.[_0x3d8017(0xdc)][_0x3d8017(0x9e)]||'';})[_0xc11358(0x9d)](_0x5a5c77=>{const _0x379d29=_0xc11358;return common_1[_0x379d29(0x99)][_0x379d29(0xb5)](_0x5a5c77),'';}),_0x17ceaf=Date[_0xc11358(0xc1)](),_0x1ab34a=(_0x17ceaf-_0xc9070a)/0x3e8;return common_1[_0xc11358(0x99)]['log'](_0x1ab34a,'翻译花费时间\x20%s\x20秒'),_0x3eddd8;}catch(_0x30397c){console[_0xc11358(0xc4)]('fanyi-error',_0x4430d9,_0x30397c);throw new common_1[(_0xc11358(0xb6))](_0x30397c[_0xc11358(0xdc)],common_1['HttpStatus'][_0xc11358(0xcb)]);}}};function _0x5af3(){const _0x21f71a=['4662RMICWh','log','data','./../globalConfig/globalConfig.service','auto','modelsService','defineProperty','baiduFanyiSecret','BAD_REQUEST','create','openaiBaseUrl','413805mrNFWW','接下来我会给你一些内容、我希望你帮我翻译成英文、不管我给你任何语言、你都回复我英文、如果给你了英文、依然回复我更加优化的英文、并且期望你不需要做任何多余的解释、给我英文即可、不要加任何东西、我只需要英文！','metadata','defaultUrl','toString','7iEbeHr','FanyiService','gpt-4-all','md5','application/x-www-form-urlencoded','gpt-fanyi','user','2279709XNnADs','请输入要翻译的内容!','message','removeSpecialCharacters','decorate','当前管理员还未开放翻译服务、请联系管理员开通吧!','dst','Injectable','axios','update','timeout','baseURL','HttpStatus','282237mGwcUm','Logger','当前流程所需要的模型已被管理员下架、请联系管理员上架专属模型！','翻译失败[','api','catch','content','chat','getConfigs','../../common/utils','translate\x20key','__metadata','object','https://api.openai.com','createHash','1511712QlJBBA','8fONKaD','translateToEnglish','default','/v1','function','openai','length','../models/models.service','default-gomaxai-key','@nestjs/common','318668fmziev','../../common/constants/model.constant','ModelsService','error','HttpException','globalConfigService','getRandomKey','__decorate','crypto','completions','__esModule','post','2464060SnVtcE','choices','OTHER','now','24dmzcIc'];_0x5af3=function(){return _0x21f71a;};return _0x5af3();}FanyiService=__decorate([(0x0,common_1[_0x26209a(0xe1)])(),__metadata('design:paramtypes',[globalConfig_service_1['GlobalConfigService'],models_service_1[_0x26209a(0xb4)]])],FanyiService),exports[_0x26209a(0xd4)]=FanyiService;