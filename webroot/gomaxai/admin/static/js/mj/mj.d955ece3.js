
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{Z as e}from"../main-1d1da8fb.js";const s={queryAdminDrawList:s=>e.get("midjourney/adminDrawList",{params:s}),salesAuditOrder:s=>e.post("sales/auditOrder",s),updateSalesUser:s=>e.post("sales/updateUserSales",s),queryRecords:s=>e.get("sales/inviteRecords",{params:s}),querySalesUserList:s=>e.get("sales/salesUserList",{params:s}),queryPrompts:()=>e.get("midjourney/queryPrompts"),setPrompt:s=>e.post("midjourney/setPrompt",s),delPrompt:s=>e.post("midjourney/delPrompt",s),queryMjParamByPage:s=>e.post("midjourney/queryList",s),getMjParamById:s=>e.get("midjourney/get",{params:s}),modifyMjParam:s=>e.post("midjourney/modify",s),removeMjParam:s=>e.post("midjourney/delete",s),addMjParam:s=>e.post("midjourney/add",s),setMjParamEnable:s=>e.post("midjourney/enable",s),updateMjSync:s=>e.post("midjourney/syncMjpAccountManual",s),uploadPromptImage:s=>e.post("upload/file",s),freshPromptImage:s=>e.get("midjourney/fresh",{data:s}),queryPromptImage:s=>e.get("midjourney/query",{data:s}),addMjIncantClassify:s=>e.post("midjourney/incantationClassifyAdd",s),removeMjIncantClassify:s=>e.post("midjourney/incantationClassifyDelete",s),modifyMjIncantClassify:s=>e.post("midjourney/incantationClassifyModify",s),queryMjIncantClassify:s=>e.post("midjourney/incantationClassifyQuery",s),getMjIncantClassify:s=>e.get("midjourney/incantationClassifyGet",{params:s}),queryTopMjIncantationClassify:()=>e.post("midjourney/queryTopMjIncantationClassify"),queryAllMjIncantClassify:s=>e.post("midjourney/incantationClassifyQueryAll",s),addMjInspireClassify:s=>e.post("midjourney/inspireClassifyAdd",s),removeMjInspireClassify:s=>e.post("midjourney/inspireClassifyDelete",s),modifyMjInspireClassify:s=>e.post("midjourney/inspireClassifyModify",s),queryMjInspireClassify:s=>e.post("midjourney/inspireClassifyQuery",s),getMjInspireClassify:s=>e.get("midjourney/inspireClassifyGet",{params:s}),addMjIncantation:s=>e.post("midjourney/incantationAdd",s),removeMjIncantation:s=>e.post("midjourney/incantationDelete",s),modifyMjIncantation:s=>e.post("midjourney/incantationModify",s),queryMjIncantation:s=>e.post("midjourney/incantationQuery",s),getMjIncantation:s=>e.get("midjourney/incantationGet",{params:s}),getCnTranslateEn:s=>e.get("/fanyi/translate",{params:s}),addMjSuggestWord:s=>e.post("midjourney/suggestAdd",s),removeMjSuggestWord:s=>e.post("midjourney/suggestDelete",s),queryMjSuggestWord:s=>e.post("midjourney/suggestQuery",s),updateMjSetting:s=>e.post("midjourney/updateSetting",s)};export{s as A};
