(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subpage-pages-mine-userinfo"],{"01cb":function(t,e,n){"use strict";n.r(e);var i=n("6a35"),a=n("f276");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b433");var s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6f5c5219",null,!1,i["a"],void 0);e["default"]=c.exports},"4e67":function(t,e,n){var i=n("5b68");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("73564ba8",i,!0,{sourceMap:!1,shadowMode:!1})},"5b68":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.body[data-v-6f5c5219]{height:calc(100vh - %?88?%);padding:0 %?22?% 0 %?24?%;background-color:#0c0c16}.userInfoBox[data-v-6f5c5219]{color:#fff;font-size:%?30?%;padding-top:%?38?%}.userInfoBox .userItem[data-v-6f5c5219]{display:flex;justify-content:space-between;height:%?120?%;line-height:%?120?%;border-bottom:1px solid #17161b;align-items:center}.userInfoBox .userItem .date[data-v-6f5c5219]{color:#999;font-size:%?24?%;margin-right:%?10?%}.userInfoBox .userItem .headSculpture[data-v-6f5c5219]{width:%?100?%;height:%?100?%;border-radius:50%}.userInfoBox .userItem .userInfoText[data-v-6f5c5219]{color:#fff;font-size:%?24?%;margin-right:%?20?%}.popBox[data-v-6f5c5219]{width:100%;height:%?490?%;background-color:#17161b;padding:0 %?30?%;color:#fff;font-size:%?30?%;border-radius:%?20?% %?20?% 0 0}.popBox .topTitle[data-v-6f5c5219]{display:flex;justify-content:space-between;align-items:center}.popBox .topTitle .title[data-v-6f5c5219]{font-size:%?36?%;color:#fff}.popBox .changeHeadeItem[data-v-6f5c5219]{display:flex;justify-content:space-between;height:%?120?%;line-height:%?120?%;border-bottom:1px solid #262643;align-items:center}.popBox1[data-v-6f5c5219]{width:%?600?%;height:%?394?%;background-color:#17161b;border-radius:%?20?%}.popBox1 .topTitle[data-v-6f5c5219]{display:flex;justify-content:space-between;align-items:center;color:#fff;font-size:%?32?%}.popBox1 .topTitle .icon[data-v-6f5c5219]{margin-right:%?24?%}.btnBox[data-v-6f5c5219]{width:%?600?%;height:%?100?%;display:flex;align-items:center;position:absolute;bottom:0;border-top:%?2?% solid #262643;text-align:center;line-height:%?100?%}.btnBox .cancel[data-v-6f5c5219]{width:%?300?%;height:100%;color:#999;font-size:%?28?%}.btnBox .confirm[data-v-6f5c5219]{width:%?300?%;height:100%;color:#1e90ff;font-size:%?28?%}.content[data-v-6f5c5219]{margin-top:%?30?%;display:flex;justify-content:center;position:relative}.content .count[data-v-6f5c5219]{position:absolute;top:%?34?%;right:%?70?%;color:#999}.inp[data-v-6f5c5219]{width:%?540?%;height:%?100?%;background-color:#28272f;border-radius:%?50?%;color:#fff;padding-left:%?40?%}',""]),t.exports=e},"6a35":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("cf17").default,uPopup:n("ff7e").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"userInfoBox"},[n("v-uni-view",{staticClass:"userItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeHead.apply(void 0,arguments)}}},[n("v-uni-text",[t._v("头像")]),n("v-uni-image",{staticClass:"headSculpture",attrs:{src:t.avatar,mode:""}})],1),n("v-uni-view",{staticClass:"userItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popShow1=!0}}},[n("v-uni-text",[t._v("昵称")]),n("v-uni-view",{staticStyle:{display:"flex"}},[n("v-uni-text",{staticClass:"userInfoText"},[t._v(t._s(t.name))]),n("u-icon",{attrs:{name:"arrow-right"}})],1)],1),n("v-uni-view",{staticClass:"userItem"},[n("v-uni-text",[t._v("手机号")]),n("v-uni-view",{staticStyle:{display:"flex"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlePop()}}},[null==t.phone?n("v-uni-text",{staticClass:"userInfoText"},[t._v("未绑定手机号")]):n("v-uni-text",{staticClass:"userInfoText"},[t._v(t._s(t.phone))]),n("u-icon",{attrs:{name:"arrow-right"}})],1)],1),n("v-uni-view",{staticClass:"userItem"},[n("v-uni-text",[t._v("注册日期")]),n("v-uni-text",{staticClass:"date"},[t._v(t._s(t.$global.dateConverted(t.createdAt)))])],1)],1),n("u-popup",{attrs:{safeAreaInsetBottom:!1,show:t.popShow,round:"15",mode:"bottom"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.popShow=!1}}},[n("v-uni-view",{staticClass:"popBox"},[n("v-uni-view",{staticClass:"topTitle"},[n("v-uni-view",{staticStyle:{height:"128rpx",width:"30rpx"}}),n("v-uni-view",{staticClass:"title"},[t._v("修改头像")]),n("u-icon",{attrs:{size:"20",name:"close"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popShow=!1}}})],1),t._l(t.changeHeadList,(function(e){return n("v-uni-view",{key:e.id,staticClass:"changeHeadeItem",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeHead(e.id)}}},[n("v-uni-text",[t._v(t._s(e.title))]),n("u-icon",{attrs:{name:"arrow-right"}})],1)}))],2)],1),n("u-popup",{attrs:{safeAreaInsetBottom:!1,show:t.popShow1,round:15,mode:"center"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.popShow1=!1}}},[n("v-uni-view",{staticClass:"popBox1"},[n("v-uni-view",{staticClass:"topTitle"},[n("v-uni-view",{staticStyle:{width:"36rpx",height:"104rpx"}}),n("v-uni-view",{staticClass:"title"},[t._v("修改昵称")]),n("v-uni-view",{staticClass:"icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popShow1=!1}}},[n("u-icon",{attrs:{name:"close",size:"18"}})],1)],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-input",{staticClass:"inp",attrs:{type:"text",maxlength:"20"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.usernameInp.apply(void 0,arguments)}},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}}),n("v-uni-text",{staticClass:"count"},[t._v(t._s(t.nickname.length)+"/20")])],1),n("v-uni-view",{staticClass:"btnBox"},[n("v-uni-view",{staticClass:"cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popShow1=!1}}},[t._v("取消")]),n("v-uni-view",{staticStyle:{width:"2rpx",height:"30rpx","background-color":"#262643"}}),n("v-uni-view",{staticClass:"confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},o=[]},"70c8":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("fb6a"),n("99af");n("b55c");var i={data:function(){return{avatar:"",name:"",userinfoList:[{id:0,title:"昵称",info:""},{id:1,title:"手机号",info:""}],changeHeadList:[{id:0,title:"从手机相册选择"},{id:1,title:"拍照"}],nickname:"",createdAt:"",phone:"",popShow:!1,popShow1:!1,phoneType:1}},onLoad:function(){this.getUserInfoInit()},methods:{getUserInfoInit:function(){var t=uni.getStorageSync("userinfo").userInfo;this.avatar=t.avatar,this.name=t.nickname,this.phone=t.phone,this.createdAt=t.createdAt},confirm:function(){var t=this,e={nickname:this.nickname};this.$Request.post("/api/user/update",e).then((function(e){400==e.code?(t.name=t.nickname,uni.showToast({title:e.message,icon:"error"})):200==e.code&&(uni.showToast({title:e.data,icon:"success"}),t.name=t.nickname,t.popShow1=!1,t.$Request.get("/api/auth/getInfo").then((function(t){uni.setStorageSync("userinfo",t.data)})))}))},usernameInp:function(){this.nickname.length>20&&(this.nickname=this.nickname.slice(0,20))},handlePop:function(){null==this.phone?uni.navigateTo({url:"/subpage/pages/mine/bindPhone?type=0"}):uni.navigateTo({url:"/subpage/pages/mine/bindPhone?type=".concat(this.phoneType,"&phone=").concat(this.phone)})},changeHead:function(){var t=this,e=this.$queue.publicYuMing();uni.chooseImage({success:function(n){var i=n.tempFilePaths[0],a=n.tempFiles[0].name;uni.uploadFile({url:e+"/api/upload/file",filePath:i,formData:{filename:a,dir:"user-upload"},success:function(e){var n=JSON.parse(e.data),i={avatar:n.data};t.avatar=n.data,t.$Request.post("/api/user/update",i).then((function(e){t.$Request.get("/api/auth/getInfo").then((function(t){uni.setStorageSync("userinfo",t.data)}))}))}})}})}}};e.default=i},b433:function(t,e,n){"use strict";var i=n("4e67"),a=n.n(i);a.a},b55c:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=void 0,n("d3b7");e.toBase64=function(t){return new Promise((function(e,n){uni.request({url:t,responseType:"arraybuffer",success:function(t){e(uni.arrayBufferToBase64(t.data))}})}))}},f276:function(t,e,n){"use strict";n.r(e);var i=n("70c8"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);