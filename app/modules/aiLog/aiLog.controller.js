'use strict';var _0xcbcb02=_0x4d54;(function(_0x7ca416,_0x1cd398){var _0x598048=_0x4d54,_0x1df299=_0x7ca416();while(!![]){try{var _0x1ae053=-parseInt(_0x598048(0xf2))/0x1+-parseInt(_0x598048(0xf6))/0x2+parseInt(_0x598048(0xf9))/0x3*(parseInt(_0x598048(0xff))/0x4)+parseInt(_0x598048(0x10c))/0x5+parseInt(_0x598048(0x10e))/0x6*(parseInt(_0x598048(0xf0))/0x7)+-parseInt(_0x598048(0x10a))/0x8*(-parseInt(_0x598048(0x110))/0x9)+parseInt(_0x598048(0xfb))/0xa*(-parseInt(_0x598048(0x119))/0xb);if(_0x1ae053===_0x1cd398)break;else _0x1df299['push'](_0x1df299['shift']());}catch(_0x1d9cd8){_0x1df299['push'](_0x1df299['shift']());}}}(_0x503a,0x23431));function _0x4d54(_0x3d9cfd,_0x52d0ad){var _0x503a6b=_0x503a();return _0x4d54=function(_0x4d540d,_0xef2f5c){_0x4d540d=_0x4d540d-0xec;var _0x477d58=_0x503a6b[_0x4d540d];return _0x477d58;},_0x4d54(_0x3d9cfd,_0x52d0ad);}var __decorate=this&&this['__decorate']||function(_0x584300,_0x533250,_0x586281,_0x3cb99d){var _0x3eef7b=_0x4d54,_0xbf60d4=arguments[_0x3eef7b(0x114)],_0x4ef55d=_0xbf60d4<0x3?_0x533250:_0x3cb99d===null?_0x3cb99d=Object[_0x3eef7b(0xf8)](_0x533250,_0x586281):_0x3cb99d,_0x232ab8;if(typeof Reflect===_0x3eef7b(0xfe)&&typeof Reflect[_0x3eef7b(0x10b)]===_0x3eef7b(0x116))_0x4ef55d=Reflect[_0x3eef7b(0x10b)](_0x584300,_0x533250,_0x586281,_0x3cb99d);else{for(var _0x201443=_0x584300['length']-0x1;_0x201443>=0x0;_0x201443--)if(_0x232ab8=_0x584300[_0x201443])_0x4ef55d=(_0xbf60d4<0x3?_0x232ab8(_0x4ef55d):_0xbf60d4>0x3?_0x232ab8(_0x533250,_0x586281,_0x4ef55d):_0x232ab8(_0x533250,_0x586281))||_0x4ef55d;}return _0xbf60d4>0x3&&_0x4ef55d&&Object[_0x3eef7b(0x105)](_0x533250,_0x586281,_0x4ef55d),_0x4ef55d;},__metadata=this&&this[_0xcbcb02(0xf7)]||function(_0x4daf7d,_0x42b489){var _0x20e39c=_0xcbcb02;if(typeof Reflect===_0x20e39c(0xfe)&&typeof Reflect[_0x20e39c(0x103)]===_0x20e39c(0x116))return Reflect['metadata'](_0x4daf7d,_0x42b489);},__param=this&&this[_0xcbcb02(0xfa)]||function(_0x4bbf7f,_0x1de2f5){return function(_0x4c1de8,_0x19f54d){_0x1de2f5(_0x4c1de8,_0x19f54d,_0x4bbf7f);};};Object[_0xcbcb02(0x105)](exports,_0xcbcb02(0x109),{'value':!![]}),exports[_0xcbcb02(0x11b)]=void 0x0;const swagger_1=require(_0xcbcb02(0x108)),common_1=require(_0xcbcb02(0x101)),aiLog_service_1=require('./aiLog.service'),jwtAuth_guard_1=require(_0xcbcb02(0x102)),agree_dto_1=require(_0xcbcb02(0xef));let AiLogController=class AiLogController{constructor(_0xde7bd1){this['aiLogService']=_0xde7bd1;}async[_0xcbcb02(0x10d)](_0xcce6a5,_0x446a71){var _0x1e977b=_0xcbcb02;return this['aiLogService'][_0x1e977b(0x100)](_0xcce6a5,_0x446a71);}async['musicPlay'](_0x27f617){var _0x55486c=_0xcbcb02;return this[_0x55486c(0x118)][_0x55486c(0x111)](_0x27f617);}};__decorate([(0x0,common_1[_0xcbcb02(0xed)])(_0xcbcb02(0x100)),(0x0,swagger_1[_0xcbcb02(0xec)])({'summary':_0xcbcb02(0xee)}),(0x0,common_1[_0xcbcb02(0xf1)])(jwtAuth_guard_1[_0xcbcb02(0xf4)]),(0x0,swagger_1[_0xcbcb02(0x107)])(),__param(0x0,(0x0,common_1[_0xcbcb02(0x112)])()),__param(0x1,(0x0,common_1[_0xcbcb02(0xfc)])()),__metadata(_0xcbcb02(0x115),Function),__metadata('design:paramtypes',[Object,agree_dto_1[_0xcbcb02(0x11a)]]),__metadata('design:returntype',Promise)],AiLogController[_0xcbcb02(0x11c)],'chatAgree',null),__decorate([(0x0,common_1[_0xcbcb02(0x117)])('music-play'),(0x0,swagger_1[_0xcbcb02(0xec)])({'summary':'SUNO音乐播放计数'}),(0x0,swagger_1['ApiProperty'])({'description':_0xcbcb02(0x106)}),__param(0x0,(0x0,common_1[_0xcbcb02(0x113)])(_0xcbcb02(0xf5))),__metadata(_0xcbcb02(0x115),Function),__metadata('design:paramtypes',[Number]),__metadata(_0xcbcb02(0xf3),Promise)],AiLogController[_0xcbcb02(0x11c)],'musicPlay',null),AiLogController=__decorate([(0x0,swagger_1['ApiTags'])(_0xcbcb02(0xfd)),(0x0,common_1[_0xcbcb02(0x104)])(_0xcbcb02(0xfd)),__metadata(_0xcbcb02(0x10f),[aiLog_service_1['AiLogService']])],AiLogController),exports[_0xcbcb02(0x11b)]=AiLogController;function _0x503a(){var _0x4da013=['@nestjs/common','../../common/auth/jwtAuth.guard','metadata','Controller','defineProperty','对话记录id','ApiBearerAuth','@nestjs/swagger','__esModule','728Dxxnzp','decorate','214965mkJJDt','chatAgree','6xVGzKu','design:paramtypes','27270jqyZIA','musicPlay','Req','Query','length','design:type','function','Get','aiLogService','5797eODCYg','AgreeDTO','AiLogController','prototype','ApiOperation','Post','点赞/取消点赞/踩,重复调用为取消点赞，所以前台一定要进行防抖处理','./dto/agree.dto','343378GShVLR','UseGuards','174062PHxsGl','design:returntype','JwtAuthGuard','recoredId','132182zjloLm','__metadata','getOwnPropertyDescriptor','3153OFqnEC','__param','3550sZbZcj','Body','aiLog','object','776ZcxvkX','agree'];_0x503a=function(){return _0x4da013;};return _0x503a();}