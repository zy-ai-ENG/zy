
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as e}from"../mj/mj.322c6af7.js";import{d as a,r as l,Q as s,h as t,o,I as n,f as i,e as d,l as u,b as r,a as m,W as c,E as p,n as f}from"../main-01383ffb.js";const v={style:{height:"auto","overflow-y":"auto","overflow-x":"hidden"}},y=f(a({__name:"mjInspireClassify",emits:["fresh"],setup(a,{expose:f,emit:y}){const g=l(!1),h=l(""),b=l(0),j=l();l(!1);const _=s({name:"",value:""}),w=y;const V=s({name:[{required:!0,message:"灵感分类名称不能为空",trigger:"change"},{max:10,message:"最大长度10"}],value:[{required:!0,message:"灵感分类值不能为空",trigger:"change"},{validator:(e,a,l,s,t)=>{/^[A-Za-z]+$/.test(a)?l():l("灵感分类的Key是英文字符串")}}]});const x=async e=>{await(null==e?void 0:e.validate((async e=>{e&&(b.value?await k({id:b.value,..._}):await C(_),w("fresh",!0),g.value=!1,Object.assign(_,{}))})))},C=async a=>(await e.addMjInspireClassify(a),p.success("添加灵感分类成功！"),!0),I=async a=>await e.getMjInspireClassify(a).then((e=>e.data)),k=async a=>{await e.modifyMjInspireClassify(a),p.success("更新灵感分类成功！")};return f({open:function(e){g.value=!0,b.value=e||0,h.value=e?"编辑灵感分类":"添加灵感分类",e&&e>0?I({id:e}).then((e=>{Object.assign(_,e)})):Object.assign(_,{name:"",value:""})}}),(e,a)=>{const l=t("el-input"),s=t("el-form-item"),p=t("el-form"),f=t("el-button"),y=t("el-dialog");return o(),n(y,{modelValue:r(g),"onUpdate:modelValue":a[4]||(a[4]=e=>c(g)?g.value=e:null),"append-to-body":!0,"close-on-click-modal":!1,title:r(h),top:"80px",fullscreen:!1,width:"500px","z-index":2e3},{footer:i((()=>[d(f,{onClick:a[2]||(a[2]=e=>g.value=!1)},{default:i((()=>[u(" 取消 ")])),_:1}),d(f,{type:"primary",onClick:a[3]||(a[3]=e=>x(r(j)))},{default:i((()=>[u(" 确认 ")])),_:1})])),default:i((()=>[m("div",v,[d(p,{model:_,"label-position":"right",ref_key:"formRef",ref:j,rules:V,inline:!1,"label-width":"80px"},{default:i((()=>[d(s,{label:"分类名称",prop:"name"},{default:i((()=>[d(l,{modelValue:_.name,"onUpdate:modelValue":a[0]||(a[0]=e=>_.name=e),placeholder:"输入分类名称",clearable:""},null,8,["modelValue"])])),_:1}),d(s,{label:"分类值",prop:"value"},{default:i((()=>[d(l,{modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=e=>_.value=e),placeholder:"输入分类value值",clearable:""},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-1fbdd1d3"]]);export{y as default};
