
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{$ as e}from"../main-0579ff80.js";const a={uploadFile:a=>e.post("upload/file",a),queryFeedback:a=>e.get("feedback/query",{params:a}),removeFeedback:a=>e.post("feedback/delete",a),setFeedbackStatus:a=>e.post("feedback/status",a)};export{a};
