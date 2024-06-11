
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as a}from"../mj/mj.5e91af9b.js";import{d as e,r as n,Q as t,B as l,h as i,o,I as d,f as s,e as c,l as u,b as r,a as p,c as m,U as f,S as g,W as h,E as v,n as y}from"../main-32165e1b.js";const b={style:{height:"auto","overflow-y":"auto","overflow-x":"hidden"}},_=y(e({__name:"mjIncantation",props:{list:{type:Array,required:!0,default:()=>[]}},emits:["fresh"],setup(e,{expose:y,emit:_}){const w=n(!1),C=n(""),x=n(0),V=n(),j=n(!1),E=t({incantationCn:"",incantationEn:"",pid:void 0}),I=e,k=l((()=>I.list.filter((a=>2===a.level)))),U=_,q=t({incantationCn:[{required:!0,message:"咒语名称不能为空",trigger:"change"},{max:50,message:"最大长度50"}],incantationEn:[{required:!0,message:"咒语英文翻译不能为空",trigger:"change"},{max:100,message:"最大长度100"}],pid:[{required:!0,message:"分类必选",trigger:"change"}]});const A=async a=>{await(null==a?void 0:a.validate((async a=>{a&&(x.value?await z({id:x.value,...E}):await M(E),U("fresh",!0),w.value=!1,Object.assign(E,{}))})))},M=async e=>(await a.addMjIncantation(e),v.success("添加咒语成功！"),!0),O=async e=>await a.getMjIncantation(e).then((a=>a.data)),z=async e=>{await a.modifyMjIncantation(e),v.success("更新咒语成功！")};return y({open:function(a){w.value=!0,x.value=a||0,C.value=a?"编辑咒语":"添加咒语",a&&a>0?O({id:a}).then((a=>{const{incantationCn:e,incantationEn:n,pid:t}=a;Object.assign(E,{incantationCn:e,incantationEn:n,pid:t})})):Object.assign(E,{incantationCn:"",incantationEn:"",pid:void 0})}}),(e,n)=>{const t=i("el-input"),l=i("el-col"),v=i("el-button"),y=i("el-row"),_=i("el-form-item"),x=i("el-option"),I=i("el-select"),U=i("el-form"),M=i("el-dialog");return o(),d(M,{modelValue:r(w),"onUpdate:modelValue":n[6]||(n[6]=a=>h(w)?w.value=a:null),"append-to-body":!0,"close-on-click-modal":!1,title:r(C),top:"80px",fullscreen:!1,width:"500px","z-index":2e3},{footer:s((()=>[c(v,{onClick:n[4]||(n[4]=a=>w.value=!1)},{default:s((()=>[u(" 取消 ")])),_:1}),c(v,{type:"primary",onClick:n[5]||(n[5]=a=>A(r(V)))},{default:s((()=>[u(" 确认 ")])),_:1})])),default:s((()=>[p("div",b,[c(U,{model:E,"label-position":"right",disabled:r(j),ref_key:"formRef",ref:V,rules:q,inline:!1,"label-width":"80px"},{default:s((()=>[c(_,{label:"咒语名称",prop:"incantationCn"},{default:s((()=>[c(y,{gutter:4},{default:s((()=>[c(l,{span:23},{default:s((()=>[c(t,{modelValue:E.incantationCn,"onUpdate:modelValue":n[0]||(n[0]=a=>E.incantationCn=a),style:{width:"100%"},placeholder:"输入中文咒语",clearable:"",maxlength:"50"},null,8,["modelValue"])])),_:1}),c(l,{span:1},{default:s((()=>[c(v,{onClick:n[1]||(n[1]=e=>(async e=>{j.value=!0;const n=await a.getCnTranslateEn({text:e}).then((a=>a.data)).catch((a=>{j.value=!1}));E.incantationEn=n,j.value=!1})(E.incantationCn)),loading:r(j)},{default:s((()=>[u("翻译")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1}),c(_,{label:"咒语英译",prop:"incantationEn"},{default:s((()=>[c(t,{modelValue:E.incantationEn,"onUpdate:modelValue":n[2]||(n[2]=a=>E.incantationEn=a),placeholder:"输入咒语英译",clearable:"",maxlength:"50"},null,8,["modelValue"])])),_:1}),c(_,{label:"分类",prop:"pid"},{default:s((()=>[c(I,{modelValue:E.pid,"onUpdate:modelValue":n[3]||(n[3]=a=>E.pid=a),placeholder:"选择分类","fit-input-width":"",style:{width:"100%"}},{default:s((()=>[(o(!0),m(g,null,f(r(k),(a=>(o(),d(x,{value:a.id,label:a.classifyName},null,8,["value","label"])))),256))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","disabled","rules"])])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-29e49c12"]]);export{_ as default};