(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-detection-index"],{"0914":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return d})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"body"},[e("v-uni-scroll-view",[e("v-uni-view",{staticClass:"dataBox"},t._l(t.dataList,(function(a){return e("v-uni-view",{key:a.id,staticClass:"dataItem"},[e("v-uni-view",{staticClass:"itemBox",class:"itemBox"+a.id},[e("v-uni-view",{staticClass:"itemName"},[t._v(t._s(a.name))]),e("v-uni-view",{staticClass:"itemIntro"},[t._v(t._s(a.intro))]),e("v-uni-view",{staticClass:"itemBtn",style:{background:a.btnBg},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.itemClick(a.name,a.id)}}},[t._v("立即使用")])],1),e("v-uni-image",{staticClass:"dataImg",attrs:{src:a.src,mode:"aspectFill"}})],1)})),1),e("v-uni-view",{staticClass:"bottom"},[t._v("已经到底啦~")])],1)],1)},d=[]},"29ce":function(t,a,e){"use strict";var n=e("40ed"),d=e.n(n);d.a},"40ed":function(t,a,e){var n=e("8098");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var d=e("4f06").default;d("6c0b4464",n,!0,{sourceMap:!1,shadowMode:!1})},"76b1":function(t,a,e){"use strict";e.r(a);var n=e("0914"),d=e("866b");for(var i in d)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return d[t]}))}(i);e("29ce");var r=e("f0c5"),o=Object(r["a"])(d["default"],n["b"],n["c"],!1,null,"0d9dfd2d",null,!1,n["a"],void 0);a["default"]=o.exports},8098:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.body[data-v-0d9dfd2d]{background:linear-gradient(180deg,#09090b,#15171a,#15171a)}.body .title[data-v-0d9dfd2d]{color:#fff;font-size:%?48?%;padding:%?24?% 0 0 %?24?%}.body .dataBox[data-v-0d9dfd2d]{padding:%?24?%}.body .dataBox .dataItem[data-v-0d9dfd2d]{margin-top:%?24?%;position:relative;border-radius:%?20?%;overflow:hidden}.body .dataBox .dataItem .itemBox[data-v-0d9dfd2d]{width:100%;height:100%;position:absolute;z-index:99}.body .dataBox .dataItem .itemBox .itemName[data-v-0d9dfd2d]{color:#fff;font-size:%?34?%;position:absolute;z-index:99;top:%?24?%;left:%?24?%}.body .dataBox .dataItem .itemBox .itemIntro[data-v-0d9dfd2d]{color:#fff;font-size:%?26?%;position:absolute;z-index:99;top:%?80?%;left:%?24?%}.body .dataBox .dataItem .itemBox .itemBtn[data-v-0d9dfd2d]{width:%?152?%;height:%?60?%;text-align:center;line-height:%?60?%;position:absolute;top:%?156?%;left:%?24?%;border-radius:%?40?%;color:#fff}.body .dataBox .dataItem .dataImg[data-v-0d9dfd2d]{width:100%;height:%?240?%}.body .bottom[data-v-0d9dfd2d]{margin-top:%?48?%;padding-bottom:%?48?%;color:#484a4d;font-size:%?26?%;text-align:center}.itemBox0[data-v-0d9dfd2d]{background:linear-gradient(90deg,#323265 15.5%,rgba(50,50,101,.9) 31.5%,rgba(50,50,101,0) 63.5%)}.itemBox1[data-v-0d9dfd2d]{background:linear-gradient(90deg,#68a2c7 15.5%,rgba(104,162,199,.9) 31.5%,rgba(104,162,199,0) 63.5%)}.itemBox2[data-v-0d9dfd2d]{background:linear-gradient(90deg,#9d8672 15.5%,rgba(157,134,114,.9) 31.5%,rgba(157,134,114,0) 63.5%)}.itemBox3[data-v-0d9dfd2d]{background:linear-gradient(90deg,#323f6b 15.5%,rgba(50,63,107,.9) 31.5%,rgba(50,63,107,0) 63.5%)}.itemBox4[data-v-0d9dfd2d]{background:linear-gradient(90deg,#4c617e 15.5%,rgba(76,97,126,.9) 31.5%,rgba(76,97,126,0) 63.5%)}.itemBox5[data-v-0d9dfd2d]{background:linear-gradient(90deg,#62676a 15.5%,rgba(98,103,106,.9) 31.5%,rgba(98,103,106,0) 63.5%)}.itemBox6[data-v-0d9dfd2d]{background:linear-gradient(90deg,#91abd7 21.37%,rgba(145,171,215,.9) 31.5%,rgba(145,171,215,0) 63.5%)}.itemBox7[data-v-0d9dfd2d]{background:linear-gradient(90deg,#09090b 15.5%,rgba(9,9,11,.9) 31.5%,rgba(9,9,11,0) 63.5%)}.itemBox8[data-v-0d9dfd2d]{background:linear-gradient(90deg,#0d1f6a 15.5%,rgba(13,31,106,.9) 31.5%,rgba(13,31,106,0) 63.5%)}.itemBox9[data-v-0d9dfd2d]{background:linear-gradient(90deg,#a7301d 15.5%,rgba(167,48,29,.9) 31.5%,rgba(167,48,29,0) 63.5%)}.itemBox10[data-v-0d9dfd2d]{background:linear-gradient(90deg,#a75c01 15.5%,rgba(167,92,1,.9) 31.5%,rgba(167,92,1,0) 63.5%)}',""]),t.exports=a},"866b":function(t,a,e){"use strict";e.r(a);var n=e("cb85"),d=e.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=d.a},cb85:function(t,a,e){"use strict";e("7a82");var n=e("ee27").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("d3b7"),e("159b"),e("e9c4");var d=n(e("f07e")),i=n(e("c964")),r={data:function(){return{dataList:[{name:"灵感广场",intro:"上传文字就能生成图片啦",id:0,src:"../../../static/images/square.png",btnBg:"#5252A9",bg:"90deg, #323265 15.5%, rgba(50, 50, 101, 0.90) 31.5%, rgba(50, 50, 101, 0.00) 63.5%"},{name:"文生图",intro:"上传文字就能生成图片啦",id:1,src:"../../../static/images/textToImage.png",btnBg:"#73C6FB",bg:"90deg, #68A2C7 15.5%, rgba(104, 162, 199, 0.90) 31.5%, rgba(104, 162, 199, 0.00) 63.5%"},{name:"图生图",intro:"上传文字就能生成图片啦",id:2,src:"../../../static/images/imgToImg.png",btnBg:"#DCB796",bg:"90deg, #9D8672 15.5%, rgba(157, 134, 114, 0.90) 31.5%, rgba(157, 134, 114, 0.00) 63.5%"},{name:"图生文",intro:"上传文字就能生成图片啦",id:3,src:"../../../static/images/imgToText.png",btnBg:"#475EAD",bg:"90deg, #323F6B 15.5%, rgba(50, 63, 107, 0.90) 31.5%, rgba(50, 63, 107, 0.00) 63.5%"},{name:"问答对话",intro:"上传文字就能生成图片啦",id:5,src:"../../../static/images/chat.png",btnBg:"#909CA4",bg:"90deg, #62676A 15.5%, rgba(98, 103, 106, 0.90) 31.5%, rgba(98, 103, 106, 0.00) 63.5%"},{name:"文档分析",intro:"上传文字就能生成图片啦",id:6,src:"../../../static/images/text.png",btnBg:"#B6D0FD",bg:"90deg, #91ABD7 21.37%, rgba(145, 171, 215, 0.90) 31.5%, rgba(145, 171, 215, 0.00) 63.5%"},{name:"音乐生成",intro:"上传文字就能生成图片啦",id:8,src:"../../../static/images/music.png",btnBg:"#3D54B4",bg:"90deg, #0D1F6A 15.5%, rgba(13, 31, 106, 0.90) 31.5%, rgba(13, 31, 106, 0.00) 63.5%"}],modelTypeList:{}}},methods:{itemClick:function(t,a){var e=this;return(0,i.default)((0,d.default)().mark((function t(){return(0,d.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:0==a?(uni.$emit("topTab",1),uni.switchTab({url:"/pages/main/home/index"})):1==a?(uni.$emit("topTab",0),uni.switchTab({url:"/pages/main/home/index"})):2==a?(uni.$emit("topTab",2),uni.switchTab({url:"/pages/main/home/index"})):3==a?(uni.$emit("topTab",1),uni.switchTab({url:"/pages/main/home/index"})):5==a?uni.switchTab({url:"/pages/main/assistant/index"}):6==a?e.isSession("gpt-4-all"):8==a&&e.isSession("suno-v3");case 1:case"end":return t.stop()}}),t)})))()},getModel:function(){var t=this;return(0,i.default)((0,d.default)().mark((function a(){var e,n;return(0,d.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$Request.get("/api/models/list");case 2:return e=a.sent,n=e.data,console.log(n),t.modelTypeList=n.modelTypeList[0],a.abrupt("return",n.modelMaps[1]);case 7:case"end":return a.stop()}}),a)})))()},isSession:function(t){var a=this;return(0,i.default)((0,d.default)().mark((function e(){var n,i;return(0,d.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.isModel(t);case 2:if(n=e.sent,""!=n&&null!=n){e.next=6;break}return uni.showToast({title:"当前模型不存在",icon:"none"}),e.abrupt("return");case 6:i=uni.getStorageSync("sessionId"),null==i||""==i?a.createSession(n):a.modifyModel(n,i);case 8:case"end":return e.stop()}}),e)})))()},isModel:function(t){var a=this;return(0,i.default)((0,d.default)().mark((function e(){var n,i;return(0,d.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.getModel();case 2:return n=e.sent,i="",n.forEach((function(a){a.model===t&&(i=a)})),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))()},modifyModel:function(t,a){var e={modelInfo:t,modelTypeInfo:this.modelTypeList};this.$Request.post("/api/group/update",{config:JSON.stringify(e),groupId:a}).then((function(t){200==t.code?uni.switchTab({url:"/pages/main/assistant/index"}):uni.showToast({title:t.data,icon:"none"})}))},createSession:function(t){var a=this;this.$Request.post("/api/group/create",{appId:0}).then((function(e){200==e.code?(uni.setStorageSync("sessionId",e.data.id),a.modifyModel(t,e.data.id)):uni.showToast({title:e.data,icon:"none"})}))}}};a.default=r}}]);