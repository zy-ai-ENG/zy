'use strict';const _0x15a127=_0x3642;(function(_0x5aa16e,_0x2d499b){const _0x5c4a20=_0x3642,_0x1e736d=_0x5aa16e();while(!![]){try{const _0x103eb7=parseInt(_0x5c4a20(0x135))/0x1+-parseInt(_0x5c4a20(0x1ac))/0x2+-parseInt(_0x5c4a20(0x138))/0x3+parseInt(_0x5c4a20(0x159))/0x4+-parseInt(_0x5c4a20(0x1b2))/0x5+parseInt(_0x5c4a20(0x143))/0x6+parseInt(_0x5c4a20(0x13e))/0x7*(parseInt(_0x5c4a20(0x170))/0x8);if(_0x103eb7===_0x2d499b)break;else _0x1e736d['push'](_0x1e736d['shift']());}catch(_0x1d1b85){_0x1e736d['push'](_0x1e736d['shift']());}}}(_0x13d8,0xb3873));var __decorate=this&&this[_0x15a127(0x18b)]||function(_0xc00ae9,_0x8309b1,_0x4912b8,_0x5bff61){const _0x16d90f=_0x15a127;var _0x1592e6=arguments['length'],_0x4fc4f6=_0x1592e6<0x3?_0x8309b1:_0x5bff61===null?_0x5bff61=Object[_0x16d90f(0x18e)](_0x8309b1,_0x4912b8):_0x5bff61,_0x449aa7;if(typeof Reflect===_0x16d90f(0x1b4)&&typeof Reflect[_0x16d90f(0x15a)]==='function')_0x4fc4f6=Reflect[_0x16d90f(0x15a)](_0xc00ae9,_0x8309b1,_0x4912b8,_0x5bff61);else{for(var _0xae4c9=_0xc00ae9['length']-0x1;_0xae4c9>=0x0;_0xae4c9--)if(_0x449aa7=_0xc00ae9[_0xae4c9])_0x4fc4f6=(_0x1592e6<0x3?_0x449aa7(_0x4fc4f6):_0x1592e6>0x3?_0x449aa7(_0x8309b1,_0x4912b8,_0x4fc4f6):_0x449aa7(_0x8309b1,_0x4912b8))||_0x4fc4f6;}return _0x1592e6>0x3&&_0x4fc4f6&&Object[_0x16d90f(0x153)](_0x8309b1,_0x4912b8,_0x4fc4f6),_0x4fc4f6;},__metadata=this&&this[_0x15a127(0x1a5)]||function(_0x2d7d54,_0x361646){const _0x20ba58=_0x15a127;if(typeof Reflect===_0x20ba58(0x1b4)&&typeof Reflect[_0x20ba58(0x13d)]===_0x20ba58(0x165))return Reflect[_0x20ba58(0x13d)](_0x2d7d54,_0x361646);},__param=this&&this['__param']||function(_0xb50fd9,_0xfedeb4){return function(_0xbf50e8,_0x161735){_0xfedeb4(_0xbf50e8,_0x161735,_0xb50fd9);};};Object['defineProperty'](exports,_0x15a127(0x188),{'value':!![]}),exports[_0x15a127(0x155)]=void 0x0;const swagger_1=require(_0x15a127(0x142)),chatgpt_service_1=require(_0x15a127(0x1a2)),common_1=require('@nestjs/common'),chatProcess_dto_1=require(_0x15a127(0x15c)),chatDraw_dto_1=require(_0x15a127(0x181)),addKey_dto_1=require(_0x15a127(0x137)),getKeyList_dto_1=require('./dto/getKeyList.dto'),updateKey_dto_1=require(_0x15a127(0x191)),addWhiteUser_dto_1=require(_0x15a127(0x1a3)),getWhiteUserList_dto_1=require(_0x15a127(0x151)),updateWhiteUser_dto_1=require(_0x15a127(0x16e)),adminAuth_guard_1=require(_0x15a127(0x1b0)),superAuth_guard_1=require('../../common/auth/superAuth.guard'),jwtAuth_guard_1=require(_0x15a127(0x1ad)),deleteKey_dto_1=require('./dto/deleteKey.dto'),path_1=require('path'),globalConfig_service_1=require(_0x15a127(0x13f)),platform_express_1=require(_0x15a127(0x169)),multer_1=require(_0x15a127(0x16c)),uploadFile_dto_1=require(_0x15a127(0x185)),chatRealtime_dto_1=require(_0x15a127(0x13b)),musicChat_dto_1=require(_0x15a127(0x184)),MusicSquarePage_dto_1=require(_0x15a127(0x147));let ChatgptController=class ChatgptController{constructor(_0x16ca67,_0x25815e){const _0x5ea340=_0x15a127;this[_0x5ea340(0x15e)]=_0x16ca67,this['globalConfigService']=_0x25815e;}['chatProcess'](_0x4424a5,_0x4c79a3,_0x277e34){const _0x3ecca0=_0x15a127;return this[_0x3ecca0(0x15e)][_0x3ecca0(0x161)](_0x4424a5,_0x4c79a3,_0x277e34);}[_0x15a127(0x16b)](_0x302a31,_0x1d7892,_0x4536e4){const _0x572153=_0x15a127;let {mv:_0x11b7ff,tags:_0x56cc5a,title:_0x4cbdd6,prompt:_0xe7a708,continue_at:_0x5de3b5,continue_clip_id:_0x1e9ad8,make_instrumental:_0x1b4f44}=_0x302a31,_0x1536f4='prompt\x20'+_0xe7a708;return _0x11b7ff&&(_0x1536f4=_0x1536f4+',\x20mv\x20'+_0x11b7ff),_0x56cc5a&&(_0x1536f4=_0x1536f4+_0x572153(0x156)+_0x56cc5a),_0x4cbdd6&&(_0x1536f4=_0x1536f4+',\x20title\x20'+_0x4cbdd6),_0x5de3b5&&(_0x1536f4=_0x1536f4+_0x572153(0x17f)+_0x5de3b5),_0x1e9ad8&&(_0x1536f4=_0x1536f4+_0x572153(0x1a7)+_0x1e9ad8),_0x1536f4=_0x1536f4+',\x20make_instrumental\x20'+_0x1b4f44,_0x302a31[_0x572153(0x195)]=_0x1536f4,this[_0x572153(0x15e)][_0x572153(0x161)](_0x302a31,_0x1d7892,_0x4536e4);}[_0x15a127(0x18f)](_0xbf0d58,_0x4fb7fc){const _0x5a1031=_0x15a127;return this[_0x5a1031(0x15e)][_0x5a1031(0x161)]({..._0xbf0d58},_0x4fb7fc);}['chatConversation'](_0x42f594,_0x56c4a8,_0x54fe5c,_0x28f3ed){const _0x945ac9=_0x15a127;throw new Error('the\x20method\x20is\x20not\x20implement！');return this['chatgptService'][_0x945ac9(0x134)]({..._0x42f594,'audio':_0x56c4a8},_0x54fe5c,_0x28f3ed);}async[_0x15a127(0x190)](_0x9c3dc5,_0x19eb98){const _0x48f634=_0x15a127,_0x2c1cc8=await this[_0x48f634(0x133)][_0x48f634(0x193)](['mjCustomLianxiangPrompt']);return _0x9c3dc5[_0x48f634(0x19f)]=_0x2c1cc8||_0x48f634(0x18a),this[_0x48f634(0x15e)]['chatProcess']({..._0x9c3dc5,'cusromPrompt':!![]},_0x19eb98);}async[_0x15a127(0x14b)](_0x1b7128,_0x39ac09){const _0x3d25c5=_0x15a127,_0x332a39=await this[_0x3d25c5(0x133)][_0x3d25c5(0x193)]([_0x3d25c5(0x139)]);return _0x1b7128[_0x3d25c5(0x19f)]=_0x332a39||'接下来我会给你一些内容、我希望你帮我翻译成英文、不管我给你任何语言、你都回复我英文、如果给你了英文、依然回复我更加优化的英文、并且期望你不需要做任何多余的解释、给我英文即可、不要加任何东西、我只需要英文！',this[_0x3d25c5(0x15e)][_0x3d25c5(0x161)]({..._0x1b7128,'cusromPrompt':!![]},_0x39ac09);}async[_0x15a127(0x187)](_0x10285e,_0x48c8de,_0x4f0281){const _0x15c1eb=_0x15a127,_0x319b8e=await this[_0x15c1eb(0x133)][_0x15c1eb(0x193)]([_0x15c1eb(0x14a)]);return _0x10285e['systemMessage']=_0x319b8e||_0x15c1eb(0x1af),this[_0x15c1eb(0x15e)][_0x15c1eb(0x161)]({..._0x10285e,'cusromPrompt':!![]},_0x48c8de,_0x4f0281);}async[_0x15a127(0x178)](_0x57034c,_0x1f4dc4){const _0x5c1644=_0x15a127;return await this[_0x5c1644(0x15e)][_0x5c1644(0x178)](_0x57034c,_0x1f4dc4);}async[_0x15a127(0x16a)](_0x105a8d){const _0x445fd4=_0x15a127;return await this[_0x445fd4(0x15e)]['getKeyDetail'](_0x105a8d);}async[_0x15a127(0x136)](_0x40b48d,_0x2d347a){const _0x3c4718=_0x15a127;return await this[_0x3c4718(0x15e)]['getKeyList'](_0x40b48d,_0x2d347a);}async[_0x15a127(0x182)](_0x17224b){const _0x2eaa5d=_0x15a127;return await this['chatgptService'][_0x2eaa5d(0x182)](_0x17224b);}async['addKey'](_0x45f786){const _0x323ae4=_0x15a127;return await this['chatgptService'][_0x323ae4(0x192)](_0x45f786);}async[_0x15a127(0x167)](_0x39262d){const _0x1333f6=_0x15a127;return await this['chatgptService'][_0x1333f6(0x167)](_0x39262d);}async['deleteKey'](_0x234608){const _0x1e4568=_0x15a127;return await this['chatgptService'][_0x1e4568(0x17e)](_0x234608);}async['addWhiteUser'](_0x3a8519){const _0x52dd40=_0x15a127;return this[_0x52dd40(0x15e)]['addWhiteUser'](_0x3a8519);}async['updateWhiteUser'](_0x29d455){const _0x2d9164=_0x15a127;return this[_0x2d9164(0x15e)][_0x2d9164(0x179)](_0x29d455);}async[_0x15a127(0x17b)](_0x995dc0,_0x4a90da){return this['chatgptService']['getWhiteListUser'](_0x995dc0,_0x4a90da);}async['uploadFileToGpt'](_0x5a3bce,_0x24a66e){const _0x1c4b95=_0x15a127;return this[_0x1c4b95(0x15e)][_0x1c4b95(0x163)](_0x5a3bce,_0x24a66e);}async[_0x15a127(0x197)](_0x517f4b,_0x5d99ca){const _0x117586=_0x15a127;return this['chatgptService'][_0x117586(0x197)](_0x517f4b,_0x5d99ca);}};function _0x3642(_0x1bf317,_0x631d3b){const _0x13d89e=_0x13d8();return _0x3642=function(_0x3642fa,_0xb7ca14){_0x3642fa=_0x3642fa-0x133;let _0x19cd09=_0x13d89e[_0x3642fa];return _0x19cd09;},_0x3642(_0x1bf317,_0x631d3b);}function _0x13d8(){const _0x521f62=['defineProperty','DeleteKeyDto','ChatgptController',',\x20tags\x20','添加key','ApiTags','2225504Unbbym','decorate','gpt聊天对话','./dto/chatProcess.dto','Controller','chatgptService','music-chat','default','chatProcess','上传文件','uploadFile','Post','function','random','updateKey','ChatProcessDto','@nestjs/platform-express','getKeyDetail','musicChat','multer','JwtAuthGuard','./dto/updateWhiteUser.dto','userWhiteList','200YVziJw','addWhiteUser','Get','UseGuards','uploaded','chatgpt','音乐广场，默认为最新','design:returntype','draw','updateWhiteUser','suno音乐对话','getWhiteListUser','ChatDrawDto','GetKeyListDto','deleteKey',',\x20continue_at\x20','diskStorage','./dto/chatDraw.dto','getGptModelList','ApiOperation','./dto/musicChat.dto','./dto/uploadFile.dto','chat-mind','chatmind','__esModule','chat-sync','midjourney是一款AI绘画工具，只要你输入你想到的文字，就能通过人工智能产出相对应的图片、我希望你作为MidJourney程序的提示词(prompt)生成器。你的工作是根据我给你的一段提示内容扩展为更详细和更有创意的描述，以激发人工智能的独特和有趣的图像。请记住，人工智能能够理解广泛的语言，并能解释抽象的概念，所以请自由发挥想象力和描述力，尽可能地发挥。例如，你可以描述一个未来城市的场景，或一个充满奇怪生物的超现实景观。你的描述越详细、越有想象力，产生的图像就越有趣、Midjourney\x20prompt的标准公式为:(image\x20we\x27re\x20prompting).(5\x20descriptivekeywords).\x20(camera\x20type).\x20(camera\x20lens\x20type).\x20(time\x20of\x20day)(style\x20of\x20photograph).(type\x20offilm)、请记住这个公式，后续统一使用该公式进行prompt生成、最终把我给你的提示变成一整段连续不分开的完整内容，并且只需要用英文回复您的联想、一定不要回复别内容、包括解释、我只需要纯粹的内容。','__decorate','AddWhiteUserDto','file','getOwnPropertyDescriptor','chatProcessSync','mjAssociate','./dto/updateKey.dto','addKey','getConfigs','Res','prompt','ApiConsumes','musicSquare','gpt描述词绘画联想','GlobalConfigService','multipart/form-data','originalname','mind思维导图提示','SuperAuthGuard','design:type','systemMessage','mj-associate','mj-fy','./chatgpt.service','./dto/addWhiteUser.dto','extname','__metadata','fieldname',',\x20continue_clip_id\x20','uploadFileToGpt','chat-process','Body','获取key支持的model列表','1704398zJFqSv','../../common/auth/jwtAuth.guard','修改白名单用户','我希望你使用markdown格式回答我得问题、我的需求是得到一份markdown格式的大纲、尽量做的精细、层级多一点、不管我问你什么、都需要您回复我一个大纲出来、我想使用大纲做思维导图、除了大纲之外、不要无关内容和总结。','../../common/auth/adminAuth.guard','AddKeyDto','4719135VeFlFI','round','object','globalConfigService','chatRealTime','840717isYTzX','getKeyList','./dto/addKey.dto','1711392Txlvcb','mjCustomFanyiPrompt','design:paramtypes','./dto/chatRealtime.dto','查询key的列表','metadata','411222egYgOm','../globalConfig/globalConfig.service','UploadedFile','Req','@nestjs/swagger','1416564HiWdGR','keyList','删除key','Query','./dto/MusicSquarePage.dto','prototype','ApiBearerAuth','mindCustomPrompt','mjFanyi','AdminAuthGuard','key','gpt语音实时聊天','UseInterceptors','修改key','./dto/getWhiteUserList.dto','FileInterceptor'];_0x13d8=function(){return _0x521f62;};return _0x13d8();}__decorate([(0x0,common_1[_0x15a127(0x164)])(_0x15a127(0x1a9)),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x15b)}),(0x0,common_1['UseGuards'])(jwtAuth_guard_1[_0x15a127(0x16d)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1['Body'])()),__param(0x1,(0x0,common_1[_0x15a127(0x141)])()),__param(0x2,(0x0,common_1[_0x15a127(0x194)])()),__metadata('design:type',Function),__metadata('design:paramtypes',[chatProcess_dto_1[_0x15a127(0x168)],Object,Object]),__metadata(_0x15a127(0x177),void 0x0)],ChatgptController[_0x15a127(0x148)],_0x15a127(0x161),null),__decorate([(0x0,common_1[_0x15a127(0x164)])(_0x15a127(0x15f)),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x17a)}),(0x0,common_1['UseGuards'])(jwtAuth_guard_1[_0x15a127(0x16d)]),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__param(0x1,(0x0,common_1['Req'])()),__param(0x2,(0x0,common_1['Res'])()),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[musicChat_dto_1[_0x15a127(0x160)],Object,Object]),__metadata(_0x15a127(0x177),void 0x0)],ChatgptController[_0x15a127(0x148)],_0x15a127(0x16b),null),__decorate([(0x0,common_1[_0x15a127(0x164)])(_0x15a127(0x189)),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x15b)}),(0x0,common_1[_0x15a127(0x173)])(jwtAuth_guard_1['JwtAuthGuard']),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__param(0x1,(0x0,common_1['Req'])()),__metadata(_0x15a127(0x19e),Function),__metadata('design:paramtypes',[chatProcess_dto_1[_0x15a127(0x168)],Object]),__metadata(_0x15a127(0x177),void 0x0)],ChatgptController['prototype'],_0x15a127(0x18f),null),__decorate([(0x0,common_1[_0x15a127(0x164)])('chat-conversation'),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x14e)}),(0x0,swagger_1[_0x15a127(0x196)])(_0x15a127(0x19a)),(0x0,swagger_1['ApiBearerAuth'])(),(0x0,common_1[_0x15a127(0x173)])(jwtAuth_guard_1[_0x15a127(0x16d)]),(0x0,common_1[_0x15a127(0x14f)])((0x0,platform_express_1[_0x15a127(0x152)])(_0x15a127(0x18d),{'preservePath':!![],'limits':{'fileSize':0x19*0x400*0x400},'storage':(0x0,multer_1['diskStorage'])({'destination':_0x15a127(0x174),'filename':(_0x2ba5f7,_0x5d5201,_0x109cf8)=>{const _0x461587=_0x15a127,_0xba02c1=Date['now']()+'-'+Math[_0x461587(0x1b3)](Math[_0x461587(0x166)]()*0x3b9aca00),_0x724ab9=(0x0,path_1['extname'])(_0x5d5201[_0x461587(0x19b)]);_0x109cf8(null,_0x5d5201['fieldname']+'-'+_0xba02c1+_0x724ab9);}})})),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__param(0x1,(0x0,common_1[_0x15a127(0x140)])()),__param(0x2,(0x0,common_1['Req'])()),__param(0x3,(0x0,common_1[_0x15a127(0x194)])()),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[chatRealtime_dto_1['ChatRealtime'],Object,Object,Object]),__metadata(_0x15a127(0x177),void 0x0)],ChatgptController[_0x15a127(0x148)],'chatConversation',null),__decorate([(0x0,common_1[_0x15a127(0x164)])(_0x15a127(0x1a0)),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x198)}),(0x0,common_1[_0x15a127(0x173)])(jwtAuth_guard_1[_0x15a127(0x16d)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__param(0x1,(0x0,common_1[_0x15a127(0x141)])()),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[chatProcess_dto_1[_0x15a127(0x168)],Object]),__metadata(_0x15a127(0x177),Promise)],ChatgptController[_0x15a127(0x148)],_0x15a127(0x190),null),__decorate([(0x0,common_1[_0x15a127(0x164)])(_0x15a127(0x1a1)),(0x0,swagger_1[_0x15a127(0x183)])({'summary':'gpt描述词绘画翻译'}),(0x0,common_1['UseGuards'])(jwtAuth_guard_1[_0x15a127(0x16d)]),(0x0,swagger_1['ApiBearerAuth'])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__param(0x1,(0x0,common_1[_0x15a127(0x141)])()),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[chatProcess_dto_1[_0x15a127(0x168)],Object]),__metadata(_0x15a127(0x177),Promise)],ChatgptController[_0x15a127(0x148)],'mjFanyi',null),__decorate([(0x0,common_1[_0x15a127(0x164)])(_0x15a127(0x186)),(0x0,swagger_1['ApiOperation'])({'summary':_0x15a127(0x19c)}),(0x0,common_1[_0x15a127(0x173)])(jwtAuth_guard_1[_0x15a127(0x16d)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__param(0x1,(0x0,common_1[_0x15a127(0x141)])()),__param(0x2,(0x0,common_1['Res'])()),__metadata(_0x15a127(0x19e),Function),__metadata('design:paramtypes',[chatProcess_dto_1['ChatProcessDto'],Object,Object]),__metadata(_0x15a127(0x177),Promise)],ChatgptController['prototype'],_0x15a127(0x187),null),__decorate([(0x0,common_1[_0x15a127(0x164)])('chat-draw'),(0x0,swagger_1[_0x15a127(0x183)])({'summary':'gpt绘画'}),(0x0,common_1['UseGuards'])(jwtAuth_guard_1[_0x15a127(0x16d)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__param(0x1,(0x0,common_1[_0x15a127(0x141)])()),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[chatDraw_dto_1[_0x15a127(0x17c)],Object]),__metadata(_0x15a127(0x177),Promise)],ChatgptController[_0x15a127(0x148)],_0x15a127(0x178),null),__decorate([(0x0,common_1[_0x15a127(0x172)])('keyDetail'),(0x0,swagger_1[_0x15a127(0x183)])({'summary':'gpt\x20key详情'}),__param(0x0,(0x0,common_1[_0x15a127(0x146)])(_0x15a127(0x14d))),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[String]),__metadata(_0x15a127(0x177),Promise)],ChatgptController[_0x15a127(0x148)],'getKeyDetail',null),__decorate([(0x0,common_1[_0x15a127(0x172)])(_0x15a127(0x144)),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x13c)}),(0x0,common_1[_0x15a127(0x173)])(adminAuth_guard_1[_0x15a127(0x14c)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1['Query'])()),__param(0x1,(0x0,common_1[_0x15a127(0x141)])()),__metadata('design:type',Function),__metadata(_0x15a127(0x13a),[getKeyList_dto_1[_0x15a127(0x17d)],Object]),__metadata(_0x15a127(0x177),Promise)],ChatgptController[_0x15a127(0x148)],'getKeyList',null),__decorate([(0x0,common_1['Get'])('keyModelList'),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x1ab)}),(0x0,common_1[_0x15a127(0x173)])(adminAuth_guard_1[_0x15a127(0x14c)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x146)])(_0x15a127(0x14d))),__metadata('design:type',Function),__metadata('design:paramtypes',[String]),__metadata('design:returntype',Promise)],ChatgptController[_0x15a127(0x148)],'getGptModelList',null),__decorate([(0x0,common_1[_0x15a127(0x164)])(_0x15a127(0x192)),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x157)}),(0x0,common_1['UseGuards'])(superAuth_guard_1[_0x15a127(0x19d)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[addKey_dto_1[_0x15a127(0x1b1)]]),__metadata('design:returntype',Promise)],ChatgptController[_0x15a127(0x148)],_0x15a127(0x192),null),__decorate([(0x0,common_1[_0x15a127(0x164)])(_0x15a127(0x167)),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x150)}),(0x0,common_1[_0x15a127(0x173)])(superAuth_guard_1[_0x15a127(0x19d)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__metadata('design:type',Function),__metadata('design:paramtypes',[updateKey_dto_1['UpdateKeyDto']]),__metadata(_0x15a127(0x177),Promise)],ChatgptController['prototype'],_0x15a127(0x167),null),__decorate([(0x0,common_1['Post'])('deleteKey'),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x145)}),(0x0,common_1[_0x15a127(0x173)])(superAuth_guard_1[_0x15a127(0x19d)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1['Body'])()),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[deleteKey_dto_1[_0x15a127(0x154)]]),__metadata(_0x15a127(0x177),Promise)],ChatgptController['prototype'],_0x15a127(0x17e),null),__decorate([(0x0,common_1['Post'])(_0x15a127(0x171)),(0x0,swagger_1['ApiOperation'])({'summary':'添加白名单用户'}),(0x0,common_1[_0x15a127(0x173)])(superAuth_guard_1[_0x15a127(0x19d)]),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[addWhiteUser_dto_1[_0x15a127(0x18c)]]),__metadata(_0x15a127(0x177),Promise)],ChatgptController[_0x15a127(0x148)],'addWhiteUser',null),__decorate([(0x0,common_1[_0x15a127(0x164)])(_0x15a127(0x179)),(0x0,swagger_1['ApiOperation'])({'summary':_0x15a127(0x1ae)}),(0x0,common_1['UseGuards'])(superAuth_guard_1['SuperAuthGuard']),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__metadata('design:type',Function),__metadata(_0x15a127(0x13a),[updateWhiteUser_dto_1['UpdateWhiteUserDto']]),__metadata('design:returntype',Promise)],ChatgptController[_0x15a127(0x148)],_0x15a127(0x179),null),__decorate([(0x0,common_1[_0x15a127(0x172)])(_0x15a127(0x16f)),(0x0,swagger_1[_0x15a127(0x183)])({'summary':'查询白名单用户'}),(0x0,common_1[_0x15a127(0x173)])(adminAuth_guard_1['AdminAuthGuard']),(0x0,swagger_1[_0x15a127(0x149)])(),__param(0x0,(0x0,common_1[_0x15a127(0x146)])()),__param(0x1,(0x0,common_1[_0x15a127(0x141)])()),__metadata(_0x15a127(0x19e),Function),__metadata('design:paramtypes',[getWhiteUserList_dto_1['GetWhiteUserListDto'],Object]),__metadata(_0x15a127(0x177),Promise)],ChatgptController[_0x15a127(0x148)],_0x15a127(0x17b),null),__decorate([(0x0,common_1['Post'])('upload'),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x162)}),(0x0,swagger_1['ApiConsumes'])('multipart/form-data'),(0x0,swagger_1[_0x15a127(0x149)])(),(0x0,common_1[_0x15a127(0x173)])(jwtAuth_guard_1[_0x15a127(0x16d)]),(0x0,common_1[_0x15a127(0x14f)])((0x0,platform_express_1['FileInterceptor'])(_0x15a127(0x18d),{'preservePath':!![],'limits':{'fileSize':0x200*0x400*0x400},'storage':(0x0,multer_1[_0x15a127(0x180)])({'destination':_0x15a127(0x174),'filename':(_0x3fa2a9,_0x3c7507,_0x2bc845)=>{const _0x3b8757=_0x15a127,_0x174493=Date['now']()+'-'+Math[_0x3b8757(0x1b3)](Math[_0x3b8757(0x166)]()*0x3b9aca00),_0xf45380=(0x0,path_1[_0x3b8757(0x1a4)])(_0x3c7507[_0x3b8757(0x19b)]);_0x2bc845(null,_0x3c7507[_0x3b8757(0x1a6)]+'-'+_0x174493+_0xf45380);}})})),__param(0x0,(0x0,common_1[_0x15a127(0x1aa)])()),__param(0x1,(0x0,common_1['UploadedFile'])()),__metadata('design:type',Function),__metadata(_0x15a127(0x13a),[uploadFile_dto_1['UploadFileDto'],Object]),__metadata(_0x15a127(0x177),Promise)],ChatgptController[_0x15a127(0x148)],_0x15a127(0x1a8),null),__decorate([(0x0,common_1[_0x15a127(0x172)])('music-square'),(0x0,swagger_1[_0x15a127(0x183)])({'summary':_0x15a127(0x176)}),__param(0x0,(0x0,common_1['Req'])()),__param(0x1,(0x0,common_1[_0x15a127(0x146)])()),__metadata(_0x15a127(0x19e),Function),__metadata(_0x15a127(0x13a),[Object,MusicSquarePage_dto_1['MusicSquarePageDTO']]),__metadata(_0x15a127(0x177),Promise)],ChatgptController[_0x15a127(0x148)],_0x15a127(0x197),null),ChatgptController=__decorate([(0x0,swagger_1[_0x15a127(0x158)])(_0x15a127(0x175)),(0x0,common_1[_0x15a127(0x15d)])(_0x15a127(0x175)),__metadata(_0x15a127(0x13a),[chatgpt_service_1['ChatgptService'],globalConfig_service_1[_0x15a127(0x199)]])],ChatgptController),exports[_0x15a127(0x155)]=ChatgptController;