'use strict';const _0x330bd4=_0x33e9;function _0x33e9(_0x134127,_0x5912f3){const _0x3a8a7a=_0x3a8a();return _0x33e9=function(_0x33e92f,_0xa30265){_0x33e92f=_0x33e92f-0x137;let _0x498c19=_0x3a8a7a[_0x33e92f];return _0x498c19;},_0x33e9(_0x134127,_0x5912f3);}(function(_0x3473a4,_0x16ae63){const _0xdd909f=_0x33e9,_0x3aeac2=_0x3473a4();while(!![]){try{const _0x51a6ac=-parseInt(_0xdd909f(0x143))/0x1*(parseInt(_0xdd909f(0x147))/0x2)+-parseInt(_0xdd909f(0x14f))/0x3*(-parseInt(_0xdd909f(0x13a))/0x4)+-parseInt(_0xdd909f(0x153))/0x5*(parseInt(_0xdd909f(0x13b))/0x6)+-parseInt(_0xdd909f(0x140))/0x7+-parseInt(_0xdd909f(0x141))/0x8*(parseInt(_0xdd909f(0x154))/0x9)+parseInt(_0xdd909f(0x14d))/0xa*(-parseInt(_0xdd909f(0x14a))/0xb)+parseInt(_0xdd909f(0x138))/0xc;if(_0x51a6ac===_0x16ae63)break;else _0x3aeac2['push'](_0x3aeac2['shift']());}catch(_0x208a65){_0x3aeac2['push'](_0x3aeac2['shift']());}}}(_0x3a8a,0xb890e));var __decorate=this&&this[_0x330bd4(0x149)]||function(_0x4fc06c,_0x1abd65,_0x4ba36f,_0x155bcc){const _0x4afa52=_0x330bd4;var _0x356fca=arguments['length'],_0x152635=_0x356fca<0x3?_0x1abd65:_0x155bcc===null?_0x155bcc=Object[_0x4afa52(0x137)](_0x1abd65,_0x4ba36f):_0x155bcc,_0x56d3c9;if(typeof Reflect===_0x4afa52(0x150)&&typeof Reflect[_0x4afa52(0x145)]===_0x4afa52(0x148))_0x152635=Reflect['decorate'](_0x4fc06c,_0x1abd65,_0x4ba36f,_0x155bcc);else{for(var _0x2285d0=_0x4fc06c[_0x4afa52(0x139)]-0x1;_0x2285d0>=0x0;_0x2285d0--)if(_0x56d3c9=_0x4fc06c[_0x2285d0])_0x152635=(_0x356fca<0x3?_0x56d3c9(_0x152635):_0x356fca>0x3?_0x56d3c9(_0x1abd65,_0x4ba36f,_0x152635):_0x56d3c9(_0x1abd65,_0x4ba36f))||_0x152635;}return _0x356fca>0x3&&_0x152635&&Object['defineProperty'](_0x1abd65,_0x4ba36f,_0x152635),_0x152635;};Object[_0x330bd4(0x14e)](exports,_0x330bd4(0x14c),{'value':!![]}),exports[_0x330bd4(0x142)]=void 0x0;const common_1=require(_0x330bd4(0x14b)),jwtAuth_guard_1=require(_0x330bd4(0x13e));let SuperAuthGuard=class SuperAuthGuard extends jwtAuth_guard_1['JwtAuthGuard']{async[_0x330bd4(0x13f)](_0x490e8a){const _0x48f9e=_0x330bd4,_0x41af29=await super[_0x48f9e(0x13f)](_0x490e8a);if(!_0x41af29)return![];const _0x24a0ab=_0x490e8a['switchToHttp']()[_0x48f9e(0x13d)](),_0x21fd8d=_0x24a0ab['user'];if(_0x21fd8d&&_0x21fd8d[_0x48f9e(0x144)]===_0x48f9e(0x151))return!![];else throw new common_1[(_0x48f9e(0x146))](_0x48f9e(0x152));}};function _0x3a8a(){const _0x177c0d=['非法操作、非超级管理员无权操作！','85970eCqAIv','10306449YdOphk','getOwnPropertyDescriptor','42308700eIMbGQ','length','257076PLgVYj','222jcijSK','Injectable','getRequest','./jwtAuth.guard','canActivate','3435313XUXfza','8DpRwPj','SuperAuthGuard','9kmDcoR','role','decorate','UnauthorizedException','326474yBPrtH','function','__decorate','22LnrDrx','@nestjs/common','__esModule','1569460EIPIEW','defineProperty','60vdDcyT','object','super'];_0x3a8a=function(){return _0x177c0d;};return _0x3a8a();}SuperAuthGuard=__decorate([(0x0,common_1[_0x330bd4(0x13c)])()],SuperAuthGuard),exports[_0x330bd4(0x142)]=SuperAuthGuard;