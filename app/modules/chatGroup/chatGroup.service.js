'use strict';const _0x34f026=_0x35ce;function _0x35ce(_0x485f2f,_0x1fa942){const _0x55b290=_0x55b2();return _0x35ce=function(_0x35cea2,_0x12ca32){_0x35cea2=_0x35cea2-0xeb;let _0x5a19f3=_0x55b290[_0x35cea2];return _0x5a19f3;},_0x35ce(_0x485f2f,_0x1fa942);}(function(_0x21567d,_0x5828ec){const _0x4451d5=_0x35ce,_0xa45f11=_0x21567d();while(!![]){try{const _0x4870d2=-parseInt(_0x4451d5(0x11e))/0x1*(-parseInt(_0x4451d5(0x102))/0x2)+parseInt(_0x4451d5(0x111))/0x3+-parseInt(_0x4451d5(0x100))/0x4+-parseInt(_0x4451d5(0x124))/0x5*(parseInt(_0x4451d5(0x11b))/0x6)+parseInt(_0x4451d5(0x10a))/0x7*(parseInt(_0x4451d5(0xee))/0x8)+-parseInt(_0x4451d5(0x105))/0x9*(-parseInt(_0x4451d5(0x10b))/0xa)+parseInt(_0x4451d5(0xf6))/0xb*(parseInt(_0x4451d5(0xfe))/0xc);if(_0x4870d2===_0x5828ec)break;else _0xa45f11['push'](_0xa45f11['shift']());}catch(_0x19a20a){_0xa45f11['push'](_0xa45f11['shift']());}}}(_0x55b2,0xd53f1));var __decorate=this&&this[_0x34f026(0xf3)]||function(_0xe15d16,_0x1c0e36,_0x1e1a70,_0x3ccf46){const _0x5a838f=_0x34f026;var _0x11dca2=arguments['length'],_0x1f2d1d=_0x11dca2<0x3?_0x1c0e36:_0x3ccf46===null?_0x3ccf46=Object['getOwnPropertyDescriptor'](_0x1c0e36,_0x1e1a70):_0x3ccf46,_0x5b1527;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x5a838f(0x108))_0x1f2d1d=Reflect['decorate'](_0xe15d16,_0x1c0e36,_0x1e1a70,_0x3ccf46);else{for(var _0x43e567=_0xe15d16[_0x5a838f(0x11f)]-0x1;_0x43e567>=0x0;_0x43e567--)if(_0x5b1527=_0xe15d16[_0x43e567])_0x1f2d1d=(_0x11dca2<0x3?_0x5b1527(_0x1f2d1d):_0x11dca2>0x3?_0x5b1527(_0x1c0e36,_0x1e1a70,_0x1f2d1d):_0x5b1527(_0x1c0e36,_0x1e1a70))||_0x1f2d1d;}return _0x11dca2>0x3&&_0x1f2d1d&&Object[_0x5a838f(0x117)](_0x1c0e36,_0x1e1a70,_0x1f2d1d),_0x1f2d1d;},__metadata=this&&this[_0x34f026(0xeb)]||function(_0x374441,_0x301b45){const _0x51c4d4=_0x34f026;if(typeof Reflect==='object'&&typeof Reflect[_0x51c4d4(0xf2)]==='function')return Reflect['metadata'](_0x374441,_0x301b45);},__param=this&&this[_0x34f026(0x115)]||function(_0x2a7cbb,_0x25feae){return function(_0x24eea3,_0x259e0e){_0x25feae(_0x24eea3,_0x259e0e,_0x2a7cbb);};};Object[_0x34f026(0x117)](exports,'__esModule',{'value':!![]}),exports[_0x34f026(0x11a)]=void 0x0;const common_1=require('@nestjs/common'),chatGroup_entity_1=require('./chatGroup.entity'),typeorm_1=require('@nestjs/typeorm'),typeorm_2=require(_0x34f026(0x10d)),app_entity_1=require('../app/app.entity'),models_service_1=require(_0x34f026(0x113)),model_constant_1=require(_0x34f026(0x122));let ChatGroupService=class ChatGroupService{constructor(_0x4df6a9,_0x2706bf,_0xd456e8){const _0x5301c4=_0x34f026;this[_0x5301c4(0x107)]=_0x4df6a9,this[_0x5301c4(0x10f)]=_0x2706bf,this[_0x5301c4(0x101)]=_0xd456e8;}async[_0x34f026(0xfa)](_0xe91074,_0x3db20a){const _0x55eeb3=_0x34f026;let _0x4434ca;const {id:_0xf44783}=_0x3db20a[_0x55eeb3(0xf4)],{modelType:_0x2c26d2}=_0xe91074,_0x50008b={'title':'新对话','userId':_0xf44783,'modelType':_0x2c26d2,'config':''};if(_0x2c26d2==='music'){const _0x37daa5=await this[_0x55eeb3(0x101)][_0x55eeb3(0x10c)](model_constant_1[_0x55eeb3(0x110)]['MUSIC']);_0x50008b['config']=JSON[_0x55eeb3(0xfb)](_0x37daa5);}else{const _0x20d5ee=await this['modelsService'][_0x55eeb3(0x10c)](model_constant_1[_0x55eeb3(0x110)][_0x55eeb3(0xec)]);_0x50008b[_0x55eeb3(0xf9)]=JSON[_0x55eeb3(0xfb)](_0x20d5ee);}const _0x55282b=await this[_0x55eeb3(0x107)][_0x55eeb3(0xf0)](_0x50008b);return _0x4434ca&&(_0x4434ca[_0x55eeb3(0x103)]=_0x4434ca[_0x55eeb3(0x103)]+Math['ceil'](Math[_0x55eeb3(0x112)]()*0xa),await this[_0x55eeb3(0x10f)][_0x55eeb3(0xf0)](_0x4434ca)),_0x55282b;}async[_0x34f026(0x10e)](_0x2c4e1a,_0x41de24){const _0x3c3381=_0x34f026;try{const {id:_0x5cacdf}=_0x41de24[_0x3c3381(0xf4)],_0x1a3886={'userId':_0x5cacdf,'isDelete':![]};return _0x2c4e1a?_0x1a3886[_0x3c3381(0x104)]=_0x2c4e1a:_0x1a3886[_0x3c3381(0x104)]=(0x0,typeorm_2['IsNull'])(),await this[_0x3c3381(0x107)][_0x3c3381(0xfd)]({'where':_0x1a3886,'order':{'isSticky':_0x3c3381(0x114),'id':_0x3c3381(0x114)}});}catch(_0x220670){console[_0x3c3381(0x11c)]('error:\x20',_0x220670);}}async[_0x34f026(0x11d)](_0x2b4554,_0x26aab0){const _0x33c5fa=_0x34f026,{title:_0x38845f,isSticky:_0x48a342,groupId:_0x150dd1,config:_0x5c2314,appType:_0x567e97}=_0x2b4554,{id:_0x3fc9ed}=_0x26aab0[_0x33c5fa(0xf4)],_0x3b6662=await this['chatGroupEntity'][_0x33c5fa(0xf7)]({'where':{'id':_0x150dd1,'userId':_0x3fc9ed}});if(!_0x3b6662)throw new common_1[(_0x33c5fa(0xfc))](_0x33c5fa(0x121),common_1[_0x33c5fa(0x106)][_0x33c5fa(0xf8)]);const _0xfefa38={};_0x38845f&&(_0xfefa38['title']=_0x38845f),typeof _0x48a342!==_0x33c5fa(0x123)&&(_0xfefa38['isSticky']=_0x48a342),_0x5c2314&&(_0xfefa38['config']=_0x5c2314);const _0x426a29=await this['chatGroupEntity'][_0x33c5fa(0x11d)]({'id':_0x150dd1},_0xfefa38);if(_0x426a29[_0x33c5fa(0xff)])return!![];else throw new common_1[(_0x33c5fa(0xfc))]('更新对话失败！',common_1[_0x33c5fa(0x106)]['BAD_REQUEST']);}async[_0x34f026(0x118)](_0x5516d6,_0x1d9bcb){const _0x4442d7=_0x34f026,{groupId:_0x19e8dc}=_0x5516d6,{id:_0x1217af}=_0x1d9bcb[_0x4442d7(0xf4)],_0x7e44f8=await this[_0x4442d7(0x107)]['findOne']({'where':{'id':_0x19e8dc,'userId':_0x1217af}});if(!_0x7e44f8)throw new common_1[(_0x4442d7(0xfc))]('非法操作、您在删除一个非法资源！',common_1[_0x4442d7(0x106)][_0x4442d7(0xf8)]);const _0x20220c=await this[_0x4442d7(0x107)][_0x4442d7(0x11d)]({'id':_0x19e8dc},{'isDelete':!![]});if(_0x20220c[_0x4442d7(0xff)])return _0x4442d7(0x120);else throw new common_1[(_0x4442d7(0xfc))](_0x4442d7(0xf5),common_1[_0x4442d7(0x106)][_0x4442d7(0xf8)]);}async[_0x34f026(0xef)](_0x5c3d23){const _0x1ef778=_0x34f026,{id:_0x142f4f}=_0x5c3d23[_0x1ef778(0xf4)],_0x4c28e8=await this[_0x1ef778(0x107)][_0x1ef778(0x11d)]({'userId':_0x142f4f,'isSticky':![],'isDelete':![]},{'isDelete':!![]});if(_0x4c28e8['affected'])return'删除成功';else throw new common_1[(_0x1ef778(0xfc))](_0x1ef778(0xf5),common_1[_0x1ef778(0x106)][_0x1ef778(0xf8)]);}async['getGroupInfoFromId'](_0x1e42fc){const _0xb2e8b7=_0x34f026;if(!_0x1e42fc||_0x1e42fc===0x0)return null;return await this[_0xb2e8b7(0x107)][_0xb2e8b7(0xf7)]({'where':{'id':_0x1e42fc}});}};function _0x55b2(){const _0x27fca5=['删除失败！','1867217nZoGyH','findOne','BAD_REQUEST','config','create','stringify','HttpException','find','36ThFbcs','affected','798136aRtbDL','modelsService','2mIAIzi','heat','modelType','9asynPd','HttpStatus','chatGroupEntity','function','Repository','217neoLUn','1886510FiHRyU','getModelByType','typeorm','query','appEntity','EModelType','225120TiMGSQ','random','../models/models.service','DESC','__param','AppEntity','defineProperty','del','InjectRepository','ChatGroupService','2900460sZwyuA','log','update','632065bNRhlu','length','删除成功','对话组编号和用户编号不匹配，请登录之后创建新的对话！','../../common/constants/model.constant','undefined','5WugDwT','__metadata','CHAT','ModelsService','39072WfUDqd','delAll','save','ChatGroupEntity','metadata','__decorate','user'];_0x55b2=function(){return _0x27fca5;};return _0x55b2();}ChatGroupService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1[_0x34f026(0x119)])(chatGroup_entity_1[_0x34f026(0xf1)])),__param(0x1,(0x0,typeorm_1[_0x34f026(0x119)])(app_entity_1[_0x34f026(0x116)])),__metadata('design:paramtypes',[typeorm_2[_0x34f026(0x109)],typeorm_2[_0x34f026(0x109)],models_service_1[_0x34f026(0xed)]])],ChatGroupService),exports[_0x34f026(0x11a)]=ChatGroupService;