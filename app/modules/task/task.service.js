'use strict';const _0x3b6fb0=_0x1cac;(function(_0x2832ad,_0x19057d){const _0x50c683=_0x1cac,_0x37e52f=_0x2832ad();while(!![]){try{const _0x30fba4=-parseInt(_0x50c683(0x146))/0x1*(-parseInt(_0x50c683(0x13e))/0x2)+-parseInt(_0x50c683(0x105))/0x3+-parseInt(_0x50c683(0x133))/0x4+parseInt(_0x50c683(0x12e))/0x5+parseInt(_0x50c683(0x123))/0x6*(parseInt(_0x50c683(0x11f))/0x7)+parseInt(_0x50c683(0x147))/0x8*(-parseInt(_0x50c683(0x12c))/0x9)+parseInt(_0x50c683(0x10b))/0xa;if(_0x30fba4===_0x19057d)break;else _0x37e52f['push'](_0x37e52f['shift']());}catch(_0x2b7c3b){_0x37e52f['push'](_0x37e52f['shift']());}}}(_0x496b,0x31e02));var __decorate=this&&this['__decorate']||function(_0x33d962,_0x2259a8,_0x40d2d2,_0x9d4427){const _0x204098=_0x1cac;var _0x49484d=arguments[_0x204098(0x10e)],_0x36af42=_0x49484d<0x3?_0x2259a8:_0x9d4427===null?_0x9d4427=Object['getOwnPropertyDescriptor'](_0x2259a8,_0x40d2d2):_0x9d4427,_0x5746d2;if(typeof Reflect===_0x204098(0x113)&&typeof Reflect['decorate']===_0x204098(0xfb))_0x36af42=Reflect[_0x204098(0x117)](_0x33d962,_0x2259a8,_0x40d2d2,_0x9d4427);else{for(var _0x2ac188=_0x33d962[_0x204098(0x10e)]-0x1;_0x2ac188>=0x0;_0x2ac188--)if(_0x5746d2=_0x33d962[_0x2ac188])_0x36af42=(_0x49484d<0x3?_0x5746d2(_0x36af42):_0x49484d>0x3?_0x5746d2(_0x2259a8,_0x40d2d2,_0x36af42):_0x5746d2(_0x2259a8,_0x40d2d2))||_0x36af42;}return _0x49484d>0x3&&_0x36af42&&Object[_0x204098(0x102)](_0x2259a8,_0x40d2d2,_0x36af42),_0x36af42;},__metadata=this&&this['__metadata']||function(_0x4e072d,_0x38e29b){const _0x195572=_0x1cac;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x195572(0xfb))return Reflect[_0x195572(0x121)](_0x4e072d,_0x38e29b);},__param=this&&this[_0x3b6fb0(0x134)]||function(_0x5b25c4,_0x4aa6fd){return function(_0x2e93a2,_0x4033c3){_0x4aa6fd(_0x2e93a2,_0x4033c3,_0x5b25c4);};};Object[_0x3b6fb0(0x102)](exports,_0x3b6fb0(0x111),{'value':!![]}),exports[_0x3b6fb0(0xfc)]=void 0x0;function _0x1cac(_0x36712b,_0x2266ad){const _0x496be1=_0x496b();return _0x1cac=function(_0x1cacb6,_0x805f5f){_0x1cacb6=_0x1cacb6-0xfb;let _0xeb8875=_0x496be1[_0x1cacb6];return _0xeb8875;},_0x1cac(_0x36712b,_0x2266ad);}const globalConfig_service_1=require(_0x3b6fb0(0x132)),common_1=require('@nestjs/common'),schedule_1=require(_0x3b6fb0(0x126)),userBalance_entity_1=require(_0x3b6fb0(0x11a)),typeorm_1=require(_0x3b6fb0(0x137)),typeorm_2=require(_0x3b6fb0(0x108)),models_service_1=require(_0x3b6fb0(0x12a)),cron_constant_1=require('../../common/constants/cron.constant'),auth_service_1=require(_0x3b6fb0(0x138)),midjourney_service_1=require(_0x3b6fb0(0x118)),chatLog_service_1=require(_0x3b6fb0(0x12d));let TaskService=class TaskService{constructor(_0x3f59e9,_0x2bf29e,_0x531071,_0x46b0f9,_0x102376,_0x33dfd9){const _0x5336aa=_0x3b6fb0;this[_0x5336aa(0x124)]=_0x3f59e9,this['globalConfigService']=_0x2bf29e,this[_0x5336aa(0x10a)]=_0x531071,this['chatLogService']=_0x46b0f9,this[_0x5336aa(0x13a)]=_0x102376,this[_0x5336aa(0x122)]=_0x33dfd9;}[_0x3b6fb0(0x109)](){const _0x52c650=_0x3b6fb0;this[_0x52c650(0x122)]['renewMiniAccessToken'](),this[_0x52c650(0x10a)]['syncMjpAccountAutomatic'](),this[_0x52c650(0x10a)][_0x52c650(0x114)](),this['midjourneyService'][_0x52c650(0x107)](),this[_0x52c650(0x13f)]['syncMusic']();}['handleCron'](){const _0x585bed=_0x3b6fb0;common_1[_0x585bed(0xff)]['debug']('Automatically\x20refresh\x20WeChat\x20access\x20every\x20hour\x20Token',_0x585bed(0xfc)),this[_0x585bed(0x131)][_0x585bed(0x104)]();}async['WeMiniAKUpdateJob'](){const _0x204ea4=_0x3b6fb0;try{await this[_0x204ea4(0x122)][_0x204ea4(0x11e)]();}catch(_0x284161){common_1[_0x204ea4(0xff)][_0x204ea4(0x10c)](_0x204ea4(0x10d),_0x284161);}}async[_0x3b6fb0(0x101)](){const _0x1ae72f=_0x3b6fb0;await this[_0x1ae72f(0x131)][_0x1ae72f(0x116)]();}async[_0x3b6fb0(0x145)](){const _0x196011=_0x3b6fb0;await this[_0x196011(0x131)][_0x196011(0x128)]();}async[_0x3b6fb0(0x11b)](){const _0x1804fe=_0x3b6fb0,_0x53b765=await this[_0x1804fe(0x124)][_0x1804fe(0x119)]({'where':{'expirationTime':(0x0,typeorm_2[_0x1804fe(0x140)])(new Date())}});if(!_0x53b765||!_0x53b765[_0x1804fe(0x10e)])return;_0x53b765[_0x1804fe(0x11c)](_0x26c8a8=>{const _0x1e035d=_0x1804fe;this[_0x1e035d(0x124)][_0x1e035d(0x130)]({'id':_0x26c8a8['id']},{'expirationTime':null,'packageId':0x0,'memberModel3Count':0x0,'memberModel4Count':0x0,'memberDrawMjCount':0x0})[_0x1e035d(0x125)](_0x22586b=>{const _0x5cd551=_0x1e035d;common_1[_0x5cd551(0xff)][_0x5cd551(0x112)](_0x26c8a8['id']+_0x5cd551(0x135),'TaskService');});});}['refreshBaiduAccessToken'](){const _0x485ee8=_0x3b6fb0;this['modelsService'][_0x485ee8(0x144)]();}async[_0x3b6fb0(0x141)](){const _0x3cc41c=_0x3b6fb0;this[_0x3cc41c(0x10a)][_0x3cc41c(0x141)]();}async[_0x3b6fb0(0x114)](){const _0xc19a3e=_0x3b6fb0;this['midjourneyService'][_0xc19a3e(0x114)]();}async[_0x3b6fb0(0x107)](){const _0x2f8948=_0x3b6fb0;this[_0x2f8948(0x10a)][_0x2f8948(0x107)]();}async[_0x3b6fb0(0x148)](){const _0x19c867=_0x3b6fb0;this[_0x19c867(0x13f)]['syncMusic']();}};function _0x496b(){const _0x5c77d3=['CronExpression','syncMjImg','typeorm','onModuleInit','midjourneyService','4494270lmyQaK','error','WeMiniAKUpdateJob：','length','WeMiniAKUpdateJob','AuthService','__esModule','debug','object','syncMjpTask','EVERY_2_HOURS','goMaxAiAuth','decorate','../midjourney/midjourney.service','find','../userBalance/userBalance.entity','checkUserMemerExpire','forEach','design:paramtypes','renewMiniAccessToken','764834gvESlH','refreshBaiduAccessToken','metadata','authService','6eJYbmK','userBalanceEntity','then','@nestjs/schedule','MidjourneyService','pushLog','InjectRepository','../models/models.service','GlobalConfigService','1072566OadEFp','../chatLog/chatLog.service','1979290zRncKB','EVERY_5_MINUTES','update','globalConfigService','./../globalConfig/globalConfig.service','1109320cbLDNu','__param','会员已到期、清空所有余额并移除会员身份！','prototype','@nestjs/typeorm','../auth/auth.service','Cron','modelsService','ModelsService','design:returntype','Repository','168114JLkHyx','chatLogService','LessThanOrEqual','syncMjpAccountAutomatic','EVERY_DAY_AT_MIDNIGHT','ChatLogService','refreshBaiduAccesstoken','pushAuthLogs','1SRZXgP','16Cxktqd','syncMusic','EVERY_HOUR','function','TaskService','Injectable','handleCron','Logger','EVERY_25_MINUTES','checkAuth','defineProperty','design:type','getWechatAccessToken','955908PuNprb'];_0x496b=function(){return _0x5c77d3;};return _0x496b();}__decorate([(0x0,schedule_1[_0x3b6fb0(0x139)])(schedule_1[_0x3b6fb0(0x106)][_0x3b6fb0(0x149)]),__metadata(_0x3b6fb0(0x103),Function),__metadata(_0x3b6fb0(0x11d),[]),__metadata('design:returntype',void 0x0)],TaskService['prototype'],_0x3b6fb0(0xfe),null),__decorate([(0x0,schedule_1[_0x3b6fb0(0x139)])(schedule_1['CronExpression'][_0x3b6fb0(0x12f)]),__metadata(_0x3b6fb0(0x103),Function),__metadata('design:paramtypes',[]),__metadata(_0x3b6fb0(0x13c),Promise)],TaskService[_0x3b6fb0(0x136)],_0x3b6fb0(0x10f),null),__decorate([(0x0,schedule_1['Cron'])(cron_constant_1['CronConstant'][_0x3b6fb0(0x100)]),__metadata('design:type',Function),__metadata(_0x3b6fb0(0x11d),[]),__metadata(_0x3b6fb0(0x13c),Promise)],TaskService[_0x3b6fb0(0x136)],_0x3b6fb0(0x101),null),__decorate([(0x0,schedule_1[_0x3b6fb0(0x139)])(schedule_1[_0x3b6fb0(0x106)][_0x3b6fb0(0x115)]),__metadata('design:type',Function),__metadata(_0x3b6fb0(0x11d),[]),__metadata(_0x3b6fb0(0x13c),Promise)],TaskService[_0x3b6fb0(0x136)],_0x3b6fb0(0x145),null),__decorate([(0x0,schedule_1[_0x3b6fb0(0x139)])(schedule_1[_0x3b6fb0(0x106)]['EVERY_10_MINUTES']),__metadata('design:type',Function),__metadata(_0x3b6fb0(0x11d),[]),__metadata(_0x3b6fb0(0x13c),Promise)],TaskService[_0x3b6fb0(0x136)],_0x3b6fb0(0x11b),null),__decorate([(0x0,schedule_1['Cron'])(schedule_1[_0x3b6fb0(0x106)][_0x3b6fb0(0x149)]),__metadata('design:type',Function),__metadata(_0x3b6fb0(0x11d),[]),__metadata(_0x3b6fb0(0x13c),void 0x0)],TaskService['prototype'],_0x3b6fb0(0x120),null),__decorate([(0x0,schedule_1[_0x3b6fb0(0x139)])(schedule_1[_0x3b6fb0(0x106)][_0x3b6fb0(0x142)]),__metadata(_0x3b6fb0(0x103),Function),__metadata(_0x3b6fb0(0x11d),[]),__metadata('design:returntype',Promise)],TaskService[_0x3b6fb0(0x136)],'syncMjpAccountAutomatic',null),__decorate([(0x0,schedule_1['Cron'])(schedule_1[_0x3b6fb0(0x106)][_0x3b6fb0(0x149)]),__metadata(_0x3b6fb0(0x103),Function),__metadata(_0x3b6fb0(0x11d),[]),__metadata(_0x3b6fb0(0x13c),Promise)],TaskService[_0x3b6fb0(0x136)],_0x3b6fb0(0x114),null),__decorate([(0x0,schedule_1[_0x3b6fb0(0x139)])(schedule_1[_0x3b6fb0(0x106)][_0x3b6fb0(0x149)]),__metadata(_0x3b6fb0(0x103),Function),__metadata(_0x3b6fb0(0x11d),[]),__metadata(_0x3b6fb0(0x13c),Promise)],TaskService[_0x3b6fb0(0x136)],'syncMjImg',null),__decorate([(0x0,schedule_1['Cron'])(schedule_1[_0x3b6fb0(0x106)]['EVERY_HOUR']),__metadata(_0x3b6fb0(0x103),Function),__metadata(_0x3b6fb0(0x11d),[]),__metadata(_0x3b6fb0(0x13c),Promise)],TaskService[_0x3b6fb0(0x136)],_0x3b6fb0(0x148),null),TaskService=__decorate([(0x0,common_1[_0x3b6fb0(0xfd)])(),__param(0x0,(0x0,typeorm_1[_0x3b6fb0(0x129)])(userBalance_entity_1['UserBalanceEntity'])),__metadata(_0x3b6fb0(0x11d),[typeorm_2[_0x3b6fb0(0x13d)],globalConfig_service_1[_0x3b6fb0(0x12b)],midjourney_service_1[_0x3b6fb0(0x127)],chatLog_service_1[_0x3b6fb0(0x143)],models_service_1[_0x3b6fb0(0x13b)],auth_service_1[_0x3b6fb0(0x110)]])],TaskService),exports[_0x3b6fb0(0xfc)]=TaskService;