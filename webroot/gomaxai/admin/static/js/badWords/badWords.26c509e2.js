
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{Z as d}from"../main-32165e1b.js";const a={queryBadWords:(a={})=>d.get("badwords/query",{params:a}),queryViolation:(a={})=>d.get("badwords/violation",{params:a}),delBadWords:a=>d.post("badwords/del",a),addBadWords:a=>d.post("badwords/add",a),updateBadWords:a=>d.post("badwords/update",a)};export{a as A};
