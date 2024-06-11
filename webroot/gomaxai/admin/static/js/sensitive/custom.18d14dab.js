
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.227bd596.js";import{d as a,y as l,r as s,Q as t,B as o,x as u,h as d,R as n,o as r,c as i,e as c,f,b as m,az as p,k as y,m as w,S as v,U as b,l as _,w as x,I as h,W as k,X as V,E as g,t as W,q as B}from"../main-32165e1b.js";import{A as C}from"../badWords/badWords.26c509e2.js";import{E as j}from"../index/index.4485e23d.js";const z=a({__name:"custom",setup(a){const B=l(),z=s(),U=s(0),K=s(!1),R=t({word:"",status:"",page:1,size:500}),q=o((()=>B.settings.app.colorScheme)),E=s([]);async function I(){try{K.value=!0;const e=await C.queryBadWords(R),{rows:a,count:l}=e.data;K.value=!1,U.value=l,E.value=a}catch(e){K.value=!1}}u((()=>{I()}));const P=s(""),S=s(!1),A=s();function D(){S.value=!0,V((()=>{A.value.input.focus()}))}async function F(){P.value&&(await C.addBadWords({word:P.value}),g.success("添加敏感词成功"),R.status="",await I()),S.value=!1,P.value=""}return(a,l)=>{const s=d("el-alert"),t=e,o=d("el-form-item"),u=d("el-option"),V=d("el-select"),B=d("el-button"),U=d("el-form"),H=d("el-tag"),J=n("loading");return r(),i("div",null,[c(t,{bottomPadding:"20px"},{default:f((()=>[c(s,{closable:!1,"show-icon":"",title:"敏感词说明",description:"当前为自定义敏感词、触发敏感词将自动拦截、如配置过三方平台、自定义检测将在三方平台通过后最后进行检测！",type:"success"})])),_:1}),c(t,null,{default:f((()=>[c(U,{ref_key:"formRef",ref:z,inline:!0,model:R},{default:f((()=>[c(o,{label:"敏感词",prop:"word"},{default:f((()=>[c(m(p),{modelValue:R.word,"onUpdate:modelValue":l[0]||(l[0]=e=>R.word=e),placeholder:"敏感词[模糊搜索]",onKeydown:y(w(I,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])),_:1}),c(o,{label:"敏感词状态",prop:"status"},{default:f((()=>[c(V,{modelValue:R.status,"onUpdate:modelValue":l[1]||(l[1]=e=>R.status=e),placeholder:"请选择敏感词状态",clearable:"",style:{width:"192px"}},{default:f((()=>[(r(!0),i(v,null,b(m(j),(e=>(r(),h(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(o,null,{default:f((()=>[c(B,{type:"primary",onClick:I},{default:f((()=>[_(" 查询 ")])),_:1}),c(B,{onClick:l[2]||(l[2]=e=>{return null==(a=m(z))||a.resetFields(),void I();var a})},{default:f((()=>[_(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),x((r(),h(t,{style:{width:"100%"},bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[(r(!0),i(v,null,b(m(E),(e=>(r(),h(H,{key:e.id,type:"warning",class:"mr-3 mb-3",closable:"",hit:"",effect:m(q),"disable-transitions":!0,onClose:a=>async function(e){await C.delBadWords({id:e}),g.success("删除敏感词成功"),await I()}(e.id)},{default:f((()=>[_(W(e.word),1)])),_:2},1032,["effect","onClose"])))),128)),m(S)?(r(),h(m(p),{key:0,ref_key:"InputRef",ref:A,modelValue:m(P),"onUpdate:modelValue":l[3]||(l[3]=e=>k(P)?P.value=e:null),class:"ml-1",style:{width:"80px"},size:"small",onKeyup:y(F,["enter"]),onBlur:F},null,8,["modelValue"])):(r(),h(B,{key:1,class:"ml-1",size:"small",onClick:D},{default:f((()=>[_(" + New Word ")])),_:1}))])),_:1})),[[J,m(K)]])])}}});"function"==typeof B&&B(z);export{z as default};