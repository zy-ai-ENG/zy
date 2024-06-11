
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{$ as r}from"../main-0579ff80.js";const a={queryChatAll:a=>r.get("chatLog/chatAll",{params:a}),queryDrawAll:a=>r.get("chatLog/drawAll",{params:a}),recDrawImg:a=>r.post("chatLog/recDrawImg",a),queryMjDrawAll:a=>r.get("midjourney/getList",{params:a}),recMjDrawImg:a=>r.post("midjourney/rec",a),delChatLog:a=>r.post("midjourney/del",a)};export{a as A};
