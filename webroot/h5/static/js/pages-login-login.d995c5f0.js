(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"06f6":function(t,e,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("44a6a")),o={name:"u-link",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],computed:{linkStyle:function(){var t={color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(uni.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return t}},methods:{openLink:function(){window.open(this.href),this.$emit("click")}}};e.default=o},1071:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-code-input"},[t._l(t.codeLength,(function(e,a){return n("v-uni-view",{key:a,staticClass:"u-code-input__item",style:[t.itemStyle(a)]},[t.dot&&t.codeArray.length>a?n("v-uni-view",{staticClass:"u-code-input__item__dot"}):n("v-uni-text",{style:{fontSize:t.$u.addUnit(t.fontSize),fontWeight:t.bold?"bold":"normal",color:t.color}},[t._v(t._s(t.codeArray[a]))]),"line"===t.mode?n("v-uni-view",{staticClass:"u-code-input__item__line",style:[t.lineStyle]}):t._e(),t.isFocus&&t.codeArray.length===a?n("v-uni-view",{staticClass:"u-code-input__item__cursor",style:{backgroundColor:t.color}}):t._e()],1)})),n("v-uni-input",{staticClass:"u-code-input__input",style:{height:t.$u.addUnit(t.size)},attrs:{disabled:t.disabledKeyboard,type:"number",focus:t.focus,value:t.inputValue,maxlength:t.maxlength},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputHandler.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.isFocus=!0},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.isFocus=!1}}})],2)},i=[]},"11e2":function(t,e,n){"use strict";n.r(e);var a=n("4e06"),i=n("5329");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("f7be");var u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"26d108a2",null,!1,a["a"],void 0);e["default"]=r.exports},"11ea":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".login_box[data-v-26d108a2]{width:100vw;height:100vh;background-color:#0b0c17}.login_title[data-v-26d108a2]{width:%?100?%;height:%?88?%}.login_logo[data-v-26d108a2]{width:100vw;margin-top:%?100?%;text-align:center;color:#fff;padding:%?20?%}.login_logo uni-image[data-v-26d108a2]{width:%?150?%;height:%?150?%;border-radius:50%}.login_logo .text[data-v-26d108a2]{padding-top:%?30?%;color:#66686e}.login_logo .title[data-v-26d108a2]{padding-top:%?100?%;font-size:%?45?%;letter-spacing:3px}.login_logo .login_btn[data-v-26d108a2]{margin-top:%?70?%;width:100%;height:%?100?%;background-color:#2d60fc;border-radius:%?50?%;text-align:center;line-height:%?100?%;font-size:%?35?%;color:#fff}.login_protocol[data-v-26d108a2]{width:100%;color:#fff;position:absolute;padding:0 15%;bottom:%?100?%}.login_protocol .protocol_text[data-v-26d108a2]{word-wrap:break-word;display:flex;align-items:center}.login_protocol .u-link[data-v-26d108a2]{padding-top:%?5?%}.popup_main[data-v-26d108a2]{width:%?600?%;background-color:#17161b}.popup_main .title[data-v-26d108a2]{color:#fff;font-size:%?32?%;text-align:center;padding:%?40?% 0}.popup_main .content[data-v-26d108a2]{color:#fff;font-size:%?28?%;text-align:center;line-height:%?55?%;padding-bottom:%?40?%;border-bottom:%?2?% solid #262643}.popup_main .confirm[data-v-26d108a2]{color:#1e90ff;text-align:center;padding:%?30?%;font-size:%?28?%}.avatar_card[data-v-26d108a2]{width:100%;height:%?600?%;background-color:#fff;padding:%?40?%}.avatar_card .title[data-v-26d108a2]{display:flex;align-items:center;font-size:%?30?%;border-bottom:%?2?% solid #ece9e9;padding-bottom:%?20?%}.avatar_card .title uni-image[data-v-26d108a2]{width:%?50?%;height:%?50?%;margin-right:%?20?%}.avatar_card .avatar[data-v-26d108a2]{width:100%;text-align:center;margin-top:%?40?%}.avatar_card .avatar uni-button[data-v-26d108a2]{width:%?120?%;height:%?120?%;border-radius:50%;padding:0}.avatar_card .avatar uni-image[data-v-26d108a2]{width:100%;height:100%}.avatar_card .nickname[data-v-26d108a2]{width:100%;height:%?80?%;display:flex;align-items:center;justify-content:space-between;border-top:%?2?% solid #ece9e9;border-bottom:%?2?% solid #ece9e9;font-size:%?32?%;margin:%?80?% 0 %?40?% 0}.avatar_card .bottom_btn[data-v-26d108a2]{display:flex;align-items:center;justify-content:space-between}.avatar_card .bottom_btn .cancel[data-v-26d108a2]{background-color:#ece9e9;width:40%}.avatar_card .bottom_btn .confirm[data-v-26d108a2]{background-color:#1e90ff;color:#fff;width:40%}.code_card[data-v-26d108a2]{width:100%;height:%?1200?%;background-color:#fff;padding:%?40?%}.image_code_popup[data-v-26d108a2]{width:100%;height:%?400?%;background-color:#fff}[data-v-26d108a2] .u-code-input{display:flex;align-items:center;justify-content:space-between}",""]),t.exports=e},"13f7b":function(t,e,n){var a=n("6f9c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("8167b942",a,!0,{sourceMap:!1,shadowMode:!1})},"14a8":function(t,e,n){"use strict";var a=n("c991"),i=n.n(a);i.a},1893:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{staticClass:"u-link",style:[t.linkStyle,t.$u.addStyle(t.customStyle)],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.openLink.apply(void 0,arguments)}}},[t._v(t._s(t.text))])},i=[]},"1ff3":function(t,e,n){var a=n("11ea");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("13da27c2",a,!0,{sourceMap:!1,shadowMode:!1})},"215e":function(t,e,n){"use strict";n.r(e);var a=n("06f6"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"38a2":function(t,e,n){"use strict";n.r(e);var a=n("4dda"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"44a6a":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={props:{color:{type:String,default:uni.$u.props.link.color},fontSize:{type:[String,Number],default:uni.$u.props.link.fontSize},underLine:{type:Boolean,default:uni.$u.props.link.underLine},href:{type:String,default:uni.$u.props.link.href},mpTips:{type:String,default:uni.$u.props.link.mpTips},lineColor:{type:String,default:uni.$u.props.link.lineColor},text:{type:String,default:uni.$u.props.link.text}}};e.default=a},"4dda":function(t,e,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("99af"),n("ac1f"),n("5319");var i=a(n("b354")),o={name:"u-code-input",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{inputValue:"",isFocus:this.focus}},watch:{value:{immediate:!0,handler:function(t){this.inputValue=String(t).substring(0,this.maxlength)}}},computed:{codeLength:function(){return new Array(Number(this.maxlength))},itemStyle:function(){var t=this;return function(e){var n=uni.$u.addUnit,a={width:n(t.size),height:n(t.size)};return"box"===t.mode&&(a.border="".concat(t.hairline?.5:1,"px solid ").concat(t.borderColor),0===uni.$u.getPx(t.space)&&(0===e&&(a.borderTopLeftRadius="3px",a.borderBottomLeftRadius="3px"),e===t.codeLength.length-1&&(a.borderTopRightRadius="3px",a.borderBottomRightRadius="3px"),e!==t.codeLength.length-1&&(a.borderRight="none"))),e!==t.codeLength.length-1?a.marginRight=n(t.space):a.marginRight=0,a}},codeArray:function(){return String(this.inputValue).split("")},lineStyle:function(){var t={};return t.height=this.hairline?"2px":"4px",t.width=uni.$u.addUnit(this.size),t.backgroundColor=this.borderColor,t}},methods:{inputHandler:function(t){var e=this,n=t.detail.value;this.inputValue=n,this.disabledDot&&this.$nextTick((function(){e.inputValue=n.replace(".","")})),this.$emit("change",n),this.$emit("input",n),String(n).length>=Number(this.maxlength)&&this.$emit("finish",n)}}};e.default=o},"4e06":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uLink:n("7460").default,uPopup:n("ff7e").default,uCodeInput:n("8d38").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"login_box"},[a("v-uni-view",{staticClass:"login_title"}),a("v-uni-view",[a("v-uni-view",{staticClass:"login_logo"},[a("v-uni-image",{attrs:{src:n("cc81")}}),a("v-uni-view",{staticClass:"title"},[t._v("AI智能问答机器人")]),a("v-uni-view",{staticClass:"text"},[t._v("解放生产力，释法想象力")]),a("v-uni-button",{staticClass:"login_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginBtnClick.apply(void 0,arguments)}}},[t._v("手机号快捷登录")])],1),a("v-uni-view",{staticClass:"login_protocol"},[a("v-uni-view",{staticClass:"protocol_text"},[a("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:t.radioState,value:"radioState"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.radioStateChange.apply(void 0,arguments)}}}),t._v("选中代表您已阅读并同意"),a("u-link",{attrs:{href:"",fontSize:"25rpx",text:"《隐私政策》",color:"#FFFFFF","under-line":!0}})],1),a("v-uni-view",{staticStyle:{position:"absolute",right:"35%"}},[a("u-link",{attrs:{href:"",fontSize:"25rpx",text:"《用户服务协议》",color:"#FFFFFF","under-line":!0}})],1)],1)],1),a("u-popup",{attrs:{show:t.popStatus,safeAreaInsetBottom:!1,mode:"center",closeable:!0},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"popup_main"},[a("v-uni-view",{staticClass:"title"},[t._v("服务条款")]),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",[t._v("请仔细阅读并同意")]),a("v-uni-view",[t._v("《用户服务协议》、《隐私政策》")]),a("v-uni-view",[t._v("首次登录将会同步注册帐号")])],1),a("v-uni-view",{staticClass:"confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmClick.apply(void 0,arguments)}}},[t._v("我已仔细阅读并同意")])],1)],1),a("u-popup",{attrs:{show:t.avatarPopupStatus,closeable:!0},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.avatarPopupStatus=!1}}},[a("v-uni-view",{staticClass:"avatar_card"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-image",{attrs:{src:n("cc81")}}),a("v-uni-view",[t._v("GoMaxAi")])],1),a("v-uni-view",{staticClass:"avatar"},[a("v-uni-button",{attrs:{"open-type":"chooseAvatar"},on:{chooseavatar:function(e){arguments[0]=e=t.$handleEvent(e),t.onChooseAvatar.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:t.userInfoData.avatar}})],1)],1),a("v-uni-view",{staticClass:"nickname"},[a("v-uni-view",[t._v("昵称:")]),a("v-uni-input",{attrs:{type:"nickname",placeholder:"请输入昵称"},model:{value:t.userInfoData.nickname,callback:function(e){t.$set(t.userInfoData,"nickname",e)},expression:"userInfoData.nickname"}}),a("v-uni-view")],1),a("v-uni-view",{staticClass:"bottom_btn"},[a("v-uni-button",{staticClass:"cancel",attrs:{"open-type":"getPhoneNumber"},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelClick.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-button",{staticClass:"confirm",attrs:{"open-type":"getPhoneNumber"},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmButon.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1),a("u-popup",{attrs:{show:t.phoneCodePopupStatus,mode:"bottom"}},[a("v-uni-view",{staticClass:"code_card"},[a("v-uni-view",{staticStyle:{"text-align":"center","font-size":"35rpx","margin-bottom":"80rpx","font-weight":"bold"}},[t._v("请填写手机验证码")]),a("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",color:"#999999","margin-bottom":"20rpx"}},[a("v-uni-view",[t._v("已发送至"+t._s(t.$global.phoneDispose(t.userInfoData.phone)))]),1==t.codeText?a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v("发送验证码")]):a("v-uni-view",[t._v(t._s(t.codeTime)+"秒后可重发")])],1),a("v-uni-view",[a("u-code-input",{attrs:{maxlength:6,focus:!0,borderColor:"#227700",size:"45"},on:{finish:function(e){arguments[0]=e=t.$handleEvent(e),t.codeFinish.apply(void 0,arguments)}}})],1)],1)],1)],1)},o=[]},5329:function(t,e,n){"use strict";n.r(e);var a=n("ecca"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"62f4":function(t,e,n){"use strict";var a=n("13f7b"),i=n.n(a);i.a},"6f9c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-d7655832], uni-scroll-view[data-v-d7655832], uni-swiper-item[data-v-d7655832]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-link[data-v-d7655832]{line-height:1;display:flex;flex-direction:row;flex-wrap:wrap;flex:1}',""]),t.exports=e},7460:function(t,e,n){"use strict";n.r(e);var a=n("1893"),i=n("215e");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("62f4");var u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"d7655832",null,!1,a["a"],void 0);e["default"]=r.exports},"8d38":function(t,e,n){"use strict";n.r(e);var a=n("1071"),i=n("38a2");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("14a8");var u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"86244a6a",null,!1,a["a"],void 0);e["default"]=r.exports},b354:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={props:{maxlength:{type:[String,Number],default:uni.$u.props.codeInput.maxlength},dot:{type:Boolean,default:uni.$u.props.codeInput.dot},mode:{type:String,default:uni.$u.props.codeInput.mode},hairline:{type:Boolean,default:uni.$u.props.codeInput.hairline},space:{type:[String,Number],default:uni.$u.props.codeInput.space},value:{type:[String,Number],default:uni.$u.props.codeInput.value},focus:{type:Boolean,default:uni.$u.props.codeInput.focus},bold:{type:Boolean,default:uni.$u.props.codeInput.bold},color:{type:String,default:uni.$u.props.codeInput.color},fontSize:{type:[String,Number],default:uni.$u.props.codeInput.fontSize},size:{type:[String,Number],default:uni.$u.props.codeInput.size},disabledKeyboard:{type:Boolean,default:uni.$u.props.codeInput.disabledKeyboard},borderColor:{type:String,default:uni.$u.props.codeInput.borderColor},disabledDot:{type:Boolean,default:uni.$u.props.codeInput.disabledDot}}};e.default=a},c991:function(t,e,n){var a=n("fe11");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("b777179a",a,!0,{sourceMap:!1,shadowMode:!1})},cc81:function(t,e){t.exports="data:image/png;base64,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"},ecca:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{radioState:!1,popStatus:!1,avatarPopupStatus:!1,loginCode:"",userInfoData:{username:"",password:"123456",phone:"",phoneCode:"",invitedBy:"SNINE",avatar:"https://zl.qumao518.vip/static/png/avatar-e985e5ec.png",nickname:"",miniOpenId:uni.getStorageSync("openid"),authToken:""},phoneCodePopupStatus:!1,codeTime:60,codeText:!1}},methods:{radioStateChange:function(t){this.radioState=!0},loginBtnClick:function(t){var e=this;1==this.radioState?uni.login({success:function(t){"login:ok"==t.errMsg&&e.$Request.get("/api/auth/loginInMinigin?code="+t.code).then((function(t){200==t.code&&(e.userInfoData.miniOpenId=t.data.openid,void 0!=t.data.authToken||null!=t.data.authToken?(uni.setStorageSync("token",t.data.authToken),e.$Request.get("/api/auth/getInfo").then((function(t){200==t.code?(uni.setStorageSync("userinfo",t.data),uni.switchTab({url:"/pages/main/home/index"})):uni.showToast({title:t.message,icon:"error"})}))):e.avatarPopupStatus=!0)}))}}):this.popStatus=!0},close:function(){this.popStatus=!1},confirmClick:function(t){this.radioState=!0,this.popStatus=!1},onChooseAvatar:function(t){var e=this,n=this.$queue.publicYuMing();uni.uploadFile({url:n+"/api/upload/file",filePath:t.detail.avatarUrl,formData:{filename:"avatar_"+(new Date).valueOf(),dir:"mini"},name:"file",success:function(t){if(200==t.statusCode){var n=JSON.parse(t.data);e.userInfoData.avatar=n.data}},fail:function(t){console.log(t)}})},confirmButon:function(t){var e=this;this.avatarPopupStatus=!1,this.phoneCodePopupStatus=!0,this.$Request.get("/api/auth/getPhoneInMini?code="+t.detail.code).then((function(t){console.log(t),200==t.code&&(e.userInfoData.phone=t.data,e.userInfoData.username=t.data,e.getPhoneCode(t.data))}));var n=setInterval((function(){var t=--e.codeTime;e.codeTime=t<10?"0"+t:t}),1e3);setTimeout((function(){clearInterval(n),e.codeTime=60,e.codeText=!0}),6e4)},cancelClick:function(t){var e=this;this.phoneCodePopupStatus=!0,this.$Request.get("/api/auth/getPhoneInMini?code="+t.detail.code).then((function(t){200==t.code&&(e.userInfoData.phone=t.data,e.userInfoData.username=t.data,e.getPhoneCode(t.data))}));var n=setInterval((function(){var t=--e.codeTime;e.codeTime=t<10?"0"+t:t}),1e3);setTimeout((function(){clearInterval(n),e.codeTime=60,e.codeText=!0}),6e4)},sendCode:function(){var t=this;this.codeText=!1,this.getPhoneCode(this.userInfoData.phone);var e=setInterval((function(){var e=--t.codeTime;t.codeTime=e<10?"0"+e:e}),1e3);setTimeout((function(){clearInterval(e),t.codeTime=60,t.codeText=!0}),6e4)},codeFinish:function(t){var e=this;console.log(t),this.userInfoData.phoneCode=t,""==this.userInfoData.nickname&&(this.userInfoData.nickname="默认昵称"),this.$Request.post("/api/auth/registeInMini",this.userInfoData).then((function(t){200==t.code?(e.phoneCodePopupStatus=!1,uni.setStorageSync("token",t.data),e.$Request.get("/api/auth/getInfo").then((function(t){uni.setStorageSync("userinfo",t.data),uni.switchTab({url:"/pages/main/home/index"})}))):(e.phoneCodePopupStatus=!1,uni.showToast({title:t.message}))}))},getPhoneCode:function(t){this.$Request.post("/api/auth/sendPhoneCode",{phone:t,captchaCode:"1g4d"}).then((function(t){console.log(t)}))}}};e.default=a},f7be:function(t,e,n){"use strict";var a=n("1ff3"),i=n.n(a);i.a},fe11:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-86244a6a], uni-scroll-view[data-v-86244a6a], uni-swiper-item[data-v-86244a6a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-code-input[data-v-86244a6a]{display:flex;flex-direction:row;position:relative;overflow:hidden}.u-code-input__item[data-v-86244a6a]{display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative}.u-code-input__item__text[data-v-86244a6a]{font-size:15px;color:#606266}.u-code-input__item__dot[data-v-86244a6a]{width:7px;height:7px;border-radius:100px;background-color:#606266}.u-code-input__item__line[data-v-86244a6a]{position:absolute;bottom:0;height:4px;border-radius:100px;width:40px;background-color:#606266}.u-code-input__item__cursor[data-v-86244a6a]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:1px;height:40%;-webkit-animation:1s u-cursor-flicker-data-v-86244a6a infinite;animation:1s u-cursor-flicker-data-v-86244a6a infinite}.u-code-input__input[data-v-86244a6a]{position:absolute;left:%?-750?%;width:%?1500?%;top:0;background-color:initial;text-align:left}@-webkit-keyframes u-cursor-flicker-data-v-86244a6a{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes u-cursor-flicker-data-v-86244a6a{0%{opacity:0}50%{opacity:1}100%{opacity:0}}',""]),t.exports=e}}]);