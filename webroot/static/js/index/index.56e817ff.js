import{b8 as o,b9 as e}from"../main-292673a3.js";const n=e("midjourney-store",{state:()=>({openRegionDialog:!1,varyRegionInfo:{varyRegionImgBase64:"",varyRegionCustomId:"",varyRegionPrompt:"",taskId:""},...o.get("mijournetyStorage")}),getters:{activeConfig:o=>{}},actions:{async openRegionModal(o,e){this.openRegionDialog=o,this.varyRegionInfo={varyRegionCustomId:e.customId,varyRegionPrompt:"",taskId:e.taskId,mode:e.mode}},async updateRegionPrompt(o){this.varyRegionInfo.varyRegionPrompt=o},async closeRegionModal(o){this.openRegionDialog=o}}});export{n as u};
