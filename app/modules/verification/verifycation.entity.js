'use strict';function _0x467e(_0x5a3372,_0x2145f7){var _0x8ba05a=_0x8ba0();return _0x467e=function(_0x467edc,_0x2497a8){_0x467edc=_0x467edc-0x1e8;var _0x5d402f=_0x8ba05a[_0x467edc];return _0x5d402f;},_0x467e(_0x5a3372,_0x2145f7);}var _0x147097=_0x467e;(function(_0x39b327,_0x420aeb){var _0xbe922a=_0x467e,_0x3c1c82=_0x39b327();while(!![]){try{var _0x3715ad=parseInt(_0xbe922a(0x204))/0x1*(-parseInt(_0xbe922a(0x1ff))/0x2)+parseInt(_0xbe922a(0x1ea))/0x3+-parseInt(_0xbe922a(0x1eb))/0x4+parseInt(_0xbe922a(0x1ee))/0x5+-parseInt(_0xbe922a(0x1f5))/0x6*(parseInt(_0xbe922a(0x1fb))/0x7)+parseInt(_0xbe922a(0x20a))/0x8+-parseInt(_0xbe922a(0x1f3))/0x9*(-parseInt(_0xbe922a(0x1f0))/0xa);if(_0x3715ad===_0x420aeb)break;else _0x3c1c82['push'](_0x3c1c82['shift']());}catch(_0x2b13bf){_0x3c1c82['push'](_0x3c1c82['shift']());}}}(_0x8ba0,0xb7085));function _0x8ba0(){var _0x5abd25=['Column','code','用户id','126cdiCaX','function','metadata','发送的邮箱','214DaULzp','prototype','Entity','验证码','verifycation','1051TTwCer','used','object','getOwnPropertyDescriptor','decorate','BaseEntity','3679512HxbjZT','design:type','验证类型','2165109TlAsQT','731392Dfzwpk','VerifycationEntity','__metadata','3802495zHQggC','过期时间','10Ymxcmb','是否已经使用了','length','3964167XTblzc','defineProperty','445866QJykJI','email','__decorate'];_0x8ba0=function(){return _0x5abd25;};return _0x8ba0();}var __decorate=this&&this[_0x147097(0x1f7)]||function(_0x4bf47f,_0x52f0b0,_0x374065,_0x18c1b9){var _0x7c7db6=_0x147097,_0x3defc5=arguments[_0x7c7db6(0x1f2)],_0x3fbb1f=_0x3defc5<0x3?_0x52f0b0:_0x18c1b9===null?_0x18c1b9=Object[_0x7c7db6(0x207)](_0x52f0b0,_0x374065):_0x18c1b9,_0x510291;if(typeof Reflect===_0x7c7db6(0x206)&&typeof Reflect[_0x7c7db6(0x208)]===_0x7c7db6(0x1fc))_0x3fbb1f=Reflect[_0x7c7db6(0x208)](_0x4bf47f,_0x52f0b0,_0x374065,_0x18c1b9);else{for(var _0x30e0ab=_0x4bf47f[_0x7c7db6(0x1f2)]-0x1;_0x30e0ab>=0x0;_0x30e0ab--)if(_0x510291=_0x4bf47f[_0x30e0ab])_0x3fbb1f=(_0x3defc5<0x3?_0x510291(_0x3fbb1f):_0x3defc5>0x3?_0x510291(_0x52f0b0,_0x374065,_0x3fbb1f):_0x510291(_0x52f0b0,_0x374065))||_0x3fbb1f;}return _0x3defc5>0x3&&_0x3fbb1f&&Object[_0x7c7db6(0x1f4)](_0x52f0b0,_0x374065,_0x3fbb1f),_0x3fbb1f;},__metadata=this&&this[_0x147097(0x1ed)]||function(_0x2eea5a,_0x23cda3){var _0x55f419=_0x147097;if(typeof Reflect==='object'&&typeof Reflect[_0x55f419(0x1fd)]===_0x55f419(0x1fc))return Reflect['metadata'](_0x2eea5a,_0x23cda3);};Object[_0x147097(0x1f4)](exports,'__esModule',{'value':!![]}),exports[_0x147097(0x1ec)]=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require('../../common/entity/baseEntity');let VerifycationEntity=class VerifycationEntity extends baseEntity_1[_0x147097(0x209)]{};__decorate([(0x0,typeorm_1[_0x147097(0x1f8)])({'comment':_0x147097(0x1fa)}),__metadata(_0x147097(0x1e8),Number)],VerifycationEntity[_0x147097(0x200)],'userId',void 0x0),__decorate([(0x0,typeorm_1[_0x147097(0x1f8)])({'nullable':![],'comment':_0x147097(0x1e9)}),__metadata(_0x147097(0x1e8),Number)],VerifycationEntity[_0x147097(0x200)],'type',void 0x0),__decorate([(0x0,typeorm_1[_0x147097(0x1f8)])({'nullable':![],'comment':_0x147097(0x202)}),__metadata(_0x147097(0x1e8),Number)],VerifycationEntity[_0x147097(0x200)],_0x147097(0x1f9),void 0x0),__decorate([(0x0,typeorm_1[_0x147097(0x1f8)])({'comment':_0x147097(0x1ef)}),__metadata(_0x147097(0x1e8),Date)],VerifycationEntity[_0x147097(0x200)],'expiresAt',void 0x0),__decorate([(0x0,typeorm_1[_0x147097(0x1f8)])({'length':0x40,'nullable':![],'comment':_0x147097(0x1fe)}),__metadata(_0x147097(0x1e8),String)],VerifycationEntity[_0x147097(0x200)],_0x147097(0x1f6),void 0x0),__decorate([(0x0,typeorm_1[_0x147097(0x1f8)])({'default':0x0,'nullable':![],'comment':_0x147097(0x1f1)}),__metadata('design:type',Number)],VerifycationEntity[_0x147097(0x200)],_0x147097(0x205),void 0x0),VerifycationEntity=__decorate([(0x0,typeorm_1[_0x147097(0x201)])({'name':_0x147097(0x203)})],VerifycationEntity),exports[_0x147097(0x1ec)]=VerifycationEntity;