
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as e}from"../mj/mj.482967bc.js";import{d as l,r as a,G as t,j as s,o as i,J as d,g as o,f as u,h as n,b as p,c,W as r,V as m,K as f,P as y,q as v}from"../main-646ffc07.js";const h={style:{height:"auto","overflow-y":"auto","overflow-x":"hidden"}},g=v(l({__name:"mjIncantationClassify",props:{list:{type:Array,required:!0,default:()=>[]}},emits:["fresh"],setup(l,{expose:v,emit:g}){const b=a(!1),w=a(""),V=a(0),_=a(),j=a([]);a(!1);const x=t({classifyName:"",level:2,type:"text",pid:void 0}),C=g,N=t({name:[{required:!0,message:"咒语分类名称不能为空",trigger:"change"},{max:10,message:"最大长度10"}],level:[{required:!0,message:"咒语分类级别",trigger:"change"}],pid:[{required:!0,message:"父级必选",trigger:"change"}]});const q=e=>{const l=j.value.find((l=>l.id===e));x.type=l?l.type:null},I=async e=>{await(null==e?void 0:e.validate((async e=>{e&&(V.value?await M({id:V.value,...x}):await k(x),setTimeout((()=>C("fresh",!0)),50),b.value=!1,Object.assign(x,{}))})))},k=async l=>(await e.addMjIncantClassify(l),y.success("添加咒语分类成功！"),!0),U=async l=>await e.getMjIncantClassify(l).then((e=>e.data)),M=async l=>{await e.modifyMjIncantClassify(l),y.success("更新咒语分类成功！")};return v({open:function(l){b.value=!0,V.value=l||0,w.value=l?"编辑咒语分类":"添加咒语分类",(async()=>{const l=await e.queryTopMjIncantationClassify();j.value=l.data})(),l&&l>0?U({id:l}).then((e=>{const{classifyName:l,level:a,pid:t}=e;Object.assign(x,{classifyName:l,level:a,pid:t})})):Object.assign(x,{classifyName:"",level:2,pid:void 0})}}),(e,l)=>{const a=s("el-option"),t=s("el-select"),y=s("el-form-item"),v=s("el-input"),g=s("el-form"),V=s("el-button"),C=s("el-dialog");return i(),d(C,{modelValue:b.value,"onUpdate:modelValue":l[6]||(l[6]=e=>b.value=e),"append-to-body":!0,"close-on-click-modal":!1,title:w.value,top:"80px",fullscreen:!1,width:"500px","z-index":2e3},{footer:o((()=>[u(V,{onClick:l[4]||(l[4]=e=>b.value=!1)},{default:o((()=>[n(" 取消 ")])),_:1}),u(V,{type:"primary",onClick:l[5]||(l[5]=e=>I(_.value))},{default:o((()=>[n(" 确认 ")])),_:1})])),default:o((()=>[p("div",h,[u(g,{model:x,"label-position":"right",ref_key:"formRef",ref:_,rules:N,inline:!1,"label-width":"80px"},{default:o((()=>[u(y,{label:"分类级别",prop:"level"},{default:o((()=>[u(t,{modelValue:x.level,"onUpdate:modelValue":l[0]||(l[0]=e=>x.level=e),placeholder:"选择分类级别","fit-input-width":"",style:{width:"100%"}},{default:o((()=>[u(a,{value:1,label:"一级"}),u(a,{value:2,label:"二级"})])),_:1},8,["modelValue"])])),_:1}),2===x.level?(i(),d(y,{key:0,label:"父级",prop:"pid"},{default:o((()=>[u(t,{modelValue:x.pid,"onUpdate:modelValue":l[1]||(l[1]=e=>x.pid=e),placeholder:"选择分类级别","fit-input-width":"",style:{width:"100%"},onChange:q},{default:o((()=>[(i(!0),c(m,null,r(j.value,(e=>(i(),d(a,{value:e.id,label:e.classifyName},null,8,["value","label"])))),256))])),_:1},8,["modelValue"])])),_:1})):f("",!0),u(y,{label:"分类类型",prop:"type"},{default:o((()=>[u(t,{modelValue:x.type,"onUpdate:modelValue":l[2]||(l[2]=e=>x.type=e),disabled:2===x.level,placeholder:"选择分类类型","fit-input-width":"",style:{width:"100%"}},{default:o((()=>[u(a,{value:"text",label:"普通"}),u(a,{value:"style",label:"风格"})])),_:1},8,["modelValue","disabled"])])),_:1}),u(y,{label:"分类名称",prop:"classifyName"},{default:o((()=>[u(v,{modelValue:x.classifyName,"onUpdate:modelValue":l[3]||(l[3]=e=>x.classifyName=e),placeholder:"输入分类名称",clearable:"",maxlength:"50"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-76695c76"]]);export{g as default};
