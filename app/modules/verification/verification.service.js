'use strict';const _0x245894=_0x4138;(function(_0x2d6e8d,_0x24187d){const _0x2c1074=_0x4138,_0x39bb9a=_0x2d6e8d();while(!![]){try{const _0x279471=parseInt(_0x2c1074(0xf5))/0x1*(parseInt(_0x2c1074(0xda))/0x2)+-parseInt(_0x2c1074(0xd5))/0x3*(-parseInt(_0x2c1074(0x100))/0x4)+-parseInt(_0x2c1074(0xc8))/0x5*(parseInt(_0x2c1074(0xe1))/0x6)+parseInt(_0x2c1074(0xc0))/0x7+parseInt(_0x2c1074(0xeb))/0x8+-parseInt(_0x2c1074(0xe3))/0x9+-parseInt(_0x2c1074(0xde))/0xa*(parseInt(_0x2c1074(0xcb))/0xb);if(_0x279471===_0x24187d)break;else _0x39bb9a['push'](_0x39bb9a['shift']());}catch(_0x47c05f){_0x39bb9a['push'](_0x39bb9a['shift']());}}}(_0x3ef9,0x97b11));var __decorate=this&&this['__decorate']||function(_0x30e2bf,_0xf42590,_0x369802,_0x18ef39){const _0x980803=_0x4138;var _0x2c46dc=arguments[_0x980803(0xe0)],_0x468e5b=_0x2c46dc<0x3?_0xf42590:_0x18ef39===null?_0x18ef39=Object[_0x980803(0xd6)](_0xf42590,_0x369802):_0x18ef39,_0x3d2db5;if(typeof Reflect===_0x980803(0xd9)&&typeof Reflect[_0x980803(0xfc)]===_0x980803(0xdc))_0x468e5b=Reflect['decorate'](_0x30e2bf,_0xf42590,_0x369802,_0x18ef39);else{for(var _0x214962=_0x30e2bf[_0x980803(0xe0)]-0x1;_0x214962>=0x0;_0x214962--)if(_0x3d2db5=_0x30e2bf[_0x214962])_0x468e5b=(_0x2c46dc<0x3?_0x3d2db5(_0x468e5b):_0x2c46dc>0x3?_0x3d2db5(_0xf42590,_0x369802,_0x468e5b):_0x3d2db5(_0xf42590,_0x369802))||_0x468e5b;}return _0x2c46dc>0x3&&_0x468e5b&&Object[_0x980803(0xf6)](_0xf42590,_0x369802,_0x468e5b),_0x468e5b;},__metadata=this&&this[_0x245894(0xc9)]||function(_0x42fcd0,_0x567a1c){const _0x42303c=_0x245894;if(typeof Reflect===_0x42303c(0xd9)&&typeof Reflect[_0x42303c(0xbd)]===_0x42303c(0xdc))return Reflect[_0x42303c(0xbd)](_0x42fcd0,_0x567a1c);},__param=this&&this[_0x245894(0xf2)]||function(_0x32b844,_0xdcf135){return function(_0x2b0edb,_0xc36a0d){_0xdcf135(_0x2b0edb,_0xc36a0d,_0x32b844);};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x245894(0xce)]=void 0x0;const globalConfig_service_1=require('../globalConfig/globalConfig.service'),status_constant_1=require(_0x245894(0xbe)),typeorm_1=require(_0x245894(0xf7)),typeorm_2=require(_0x245894(0xd7)),verifycation_entity_1=require(_0x245894(0xf3)),common_1=require(_0x245894(0xe2)),utils_1=require(_0x245894(0xc2)),redisCache_service_1=require('../redisCache/redisCache.service'),Core=require(_0x245894(0xbb));function _0x3ef9(){const _0x4bc0d2=['function','used','10AMroBC','del','length','37458vrIoLV','@nestjs/common','5273019SEnDwL','HttpStatus','redisCacheService','当前验证码已被使用！','request','POST','getPhoneVerifyConfig','DESC','8249408qnngxf','sendPhoneCode','code','Repository','InjectRepository','RedisCacheService','verifycationEntity','__param','./verifycation.entity','data','20149vAmZBo','defineProperty','@nestjs/typeorm','BAD_REQUEST',':CAPTCHA:','design:paramtypes','createVerification','decorate','USED','VerificationUseStatusEnum','getNamespace','148fRGUFo','GlobalConfigService','getTime','@alicloud/pop-core','save','metadata','../../common/constants/status.constant','验证码发送失败！','5317662mQAmBT','VerifycationEntity','../../common/utils','update','SendSms','2017-05-25','Injectable','验证码已过期','5iWvPqt','__metadata','确实必要参数错误！','25281443OeLwUn','globalConfigService','Code','VerificationService','图形验证码错误、请检查填写!','createdAt','验证码不存在','HttpException','expiresAt','ceil','85623AqUNZh','getOwnPropertyDescriptor','typeorm','Message','object','66wqfGCX','https://dysmsapi.aliyuncs.com'];_0x3ef9=function(){return _0x4bc0d2;};return _0x3ef9();}let VerificationService=class VerificationService{constructor(_0x58612d,_0x136c78,_0x2f6772){const _0x4e5f38=_0x245894;this['verifycationEntity']=_0x58612d,this[_0x4e5f38(0xcc)]=_0x136c78,this[_0x4e5f38(0xe5)]=_0x2f6772;}async[_0x245894(0xfb)](_0x4cdccf,_0x3505ce,_0x39d2ff=0x1e*0x3c){const _0x339926=_0x245894,_0x3b0248=await this[_0x339926(0xf1)]['findOne']({'where':{'userId':_0x4cdccf['id'],'type':_0x3505ce},'order':{'createdAt':_0x339926(0xea)}});if(_0x3b0248&&_0x3b0248[_0x339926(0xd0)]['getTime']()+0x1*0x3c*0x3e8>Date['now']()){const _0xde2d51=Math[_0x339926(0xd4)]((_0x3b0248['createdAt'][_0x339926(0xba)]()+0x1*0x3c*0x3e8-Date['now']())/0x3e8);throw new common_1[(_0x339926(0xd2))](_0xde2d51+'S内不得重新发送',common_1[_0x339926(0xe4)][_0x339926(0xf8)]);}const _0x4af975=(0x0,utils_1['createRandomCode'])(),_0x2692dd=new Date(Date['now']()+_0x39d2ff*0x3e8),{id:_0x46ea29,email:_0x291824}=_0x4cdccf,_0x28a8c5={'userId':_0x46ea29,'type':_0x3505ce,'code':_0x4af975,'expiresAt':_0x2692dd,'email':_0x291824};return await this[_0x339926(0xf1)][_0x339926(0xbc)](_0x28a8c5);}async['verifyCode']({code:_0x40101a,id:_0x4f6640},_0x480b20){const _0x49942d=_0x245894,_0x12cbcb=await this[_0x49942d(0xf1)]['findOne']({'where':{'id':_0x4f6640,'type':_0x480b20},'order':{'createdAt':_0x49942d(0xea)}});if(!_0x12cbcb)throw new common_1[(_0x49942d(0xd2))](_0x49942d(0xd1),common_1['HttpStatus'][_0x49942d(0xf8)]);if(_0x12cbcb['used']===status_constant_1[_0x49942d(0xfe)][_0x49942d(0xfd)])throw new common_1[(_0x49942d(0xd2))](_0x49942d(0xe6),common_1['HttpStatus'][_0x49942d(0xf8)]);else _0x12cbcb[_0x49942d(0xdd)]=status_constant_1['VerificationUseStatusEnum'][_0x49942d(0xfd)],await this[_0x49942d(0xf1)][_0x49942d(0xc3)]({'id':_0x4f6640},_0x12cbcb);if(Number(_0x12cbcb[_0x49942d(0xed)])!==Number(_0x40101a))throw new common_1[(_0x49942d(0xd2))]('验证码错误',common_1[_0x49942d(0xe4)]['BAD_REQUEST']);if(_0x12cbcb[_0x49942d(0xd3)]<new Date())throw new common_1[(_0x49942d(0xd2))](_0x49942d(0xc7),common_1[_0x49942d(0xe4)]['BAD_REQUEST']);return _0x12cbcb;}async['verifyCaptcha'](_0x4a07f3){const _0x1f8341=_0x245894,{captchaId:_0x5846bb,captchaCode:_0x518b35}=_0x4a07f3,_0x32afe2=await this[_0x1f8341(0xcc)][_0x1f8341(0xff)](),_0x470530=_0x32afe2+_0x1f8341(0xf9)+_0x5846bb,_0xc047a4=await this[_0x1f8341(0xe5)]['get']({'key':_0x470530});await this[_0x1f8341(0xe5)][_0x1f8341(0xdf)]({'key':_0x470530});if(!_0xc047a4)throw new common_1[(_0x1f8341(0xd2))]('图形验证码已过期、请重新输入!',common_1[_0x1f8341(0xe4)][_0x1f8341(0xf8)]);if(!_0xc047a4||_0xc047a4!==_0x518b35)throw new common_1[(_0x1f8341(0xd2))](_0x1f8341(0xcf),common_1[_0x1f8341(0xe4)]['BAD_REQUEST']);}async[_0x245894(0xec)](_0x1cf744){const _0xa8b5dd=_0x245894,{accessKeyId:_0x5517af,accessKeySecret:_0x4631d3,SignName:_0x3cda51,TemplateCode:_0x201ff1}=await this[_0xa8b5dd(0xcc)][_0xa8b5dd(0xe9)](),{phone:_0x500b40,code:_0x3756ca}=_0x1cf744;if(!_0x500b40||!_0x3756ca)throw new common_1[(_0xa8b5dd(0xd2))](_0xa8b5dd(0xca),common_1[_0xa8b5dd(0xe4)][_0xa8b5dd(0xf8)]);const _0x92ee50=new Core({'accessKeyId':_0x5517af,'accessKeySecret':_0x4631d3,'endpoint':_0xa8b5dd(0xdb),'apiVersion':_0xa8b5dd(0xc5)}),_0x5c2aa9={'PhoneNumbers':_0x500b40,'SignName':_0x3cda51,'TemplateCode':_0x201ff1,'TemplateParam':JSON['stringify']({'code':_0x3756ca})},_0x46ddf8={'method':_0xa8b5dd(0xe8),'formatParams':![]};try{const _0x28205a=await _0x92ee50[_0xa8b5dd(0xe7)](_0xa8b5dd(0xc4),_0x5c2aa9,_0x46ddf8);if(_0x28205a[_0xa8b5dd(0xcd)]==='OK')return!![];else throw new common_1[(_0xa8b5dd(0xd2))](_0x28205a[_0xa8b5dd(0xd8)]||_0xa8b5dd(0xbf),common_1[_0xa8b5dd(0xe4)][_0xa8b5dd(0xf8)]);}catch(_0x3b3d49){throw new common_1[(_0xa8b5dd(0xd2))](_0x3b3d49?.[_0xa8b5dd(0xf4)]?.[_0xa8b5dd(0xd8)]||_0xa8b5dd(0xbf),common_1[_0xa8b5dd(0xe4)][_0xa8b5dd(0xf8)]);}}};function _0x4138(_0x4ede29,_0x33bc0e){const _0x3ef936=_0x3ef9();return _0x4138=function(_0x41382b,_0x36a401){_0x41382b=_0x41382b-0xb9;let _0x1af781=_0x3ef936[_0x41382b];return _0x1af781;},_0x4138(_0x4ede29,_0x33bc0e);}VerificationService=__decorate([(0x0,common_1[_0x245894(0xc6)])(),__param(0x0,(0x0,typeorm_1[_0x245894(0xef)])(verifycation_entity_1[_0x245894(0xc1)])),__metadata(_0x245894(0xfa),[typeorm_2[_0x245894(0xee)],globalConfig_service_1[_0x245894(0xb9)],redisCache_service_1[_0x245894(0xf0)]])],VerificationService),exports[_0x245894(0xce)]=VerificationService;