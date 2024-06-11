
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{c as e}from"../index/index.5ad1a92e.js";import{d as a,r as l,Q as s,h as n,o as d,I as t,f as o,e as c,l as u,b as r,a as i,W as m,c as h,U as p,S as g,V as f,E as b,t as v,n as V}from"../main-78588ec5.js";const _={style:{height:"80vh","overflow-y":"auto","overflow-x":"hidden"}},k={class:"access-list"},w=V(a({__name:"manager",emits:["fresh"],setup(a,{expose:V,emit:w}){const y=l(!1),x=l(""),A=l(""),U=l(),C=l(e),I=l(!1),O=s({username:"",password:"",role:"manager",access:""}),j=w,S=s({username:[{required:!0,message:"请填写登录账号",trigger:"blur"},{min:4,message:"最小长度4"},{max:30,message:"最大长度30"}],password:[{required:!0,message:"请填写登录密码",trigger:"blur"},{min:6,message:"最小长度6"}]});const J=async e=>{const a=C.value;await(null==e?void 0:e.validate((async e=>{e&&(A.value?await E({id:A.value,...O,access:JSON.stringify(a)}):await N({...O,access:JSON.stringify(a)}),j("fresh",!0),y.value=!1,Object.assign(O,{}))})))},N=async e=>(await f.addAccess(e),b.success("添加管理员成功！"),!0),q=async e=>await f.getAccess(e).then((e=>e.data)),E=async e=>{await f.updateAccess(e),b.success("编辑管理员成功！")},z=()=>{I.value=C.value.every((e=>e.checkAll))},Q=e=>{R(e)},R=e=>{C.value.forEach((a=>{a.checkAll=e,a.checked=e?a.children.map((e=>e.value)):[],a.isIndeterminate=a.checked.length>0&&a.checked.length<a.children.length}))};return V({open:function(a){y.value=!0,A.value=a||"",x.value=a?"编辑管理员":"添加管理员",a?q({id:a}).then((e=>{Object.assign(O,e),C.value=e.access&&JSON.parse(e.access)})):(Object.assign(O,{username:"",password:"",role:"manager",access:""}),C.value=e)}}),(e,a)=>{const l=n("el-input"),s=n("el-form-item"),f=n("el-col"),b=n("el-checkbox"),V=n("el-checkbox-group"),w=n("el-row"),j=n("el-form"),N=n("el-button"),q=n("el-dialog");return d(),t(q,{modelValue:r(y),"onUpdate:modelValue":a[5]||(a[5]=e=>m(y)?y.value=e:null),"append-to-body":!0,"close-on-click-modal":!1,title:r(x),fullscreen:"","z-index":2e3},{footer:o((()=>[c(N,{onClick:a[3]||(a[3]=e=>y.value=!1)},{default:o((()=>[u(" 取消 ")])),_:1}),c(N,{type:"primary",onClick:a[4]||(a[4]=e=>J(r(U)))},{default:o((()=>[u(" 确认 ")])),_:1})])),default:o((()=>[i("div",_,[c(j,{model:O,"label-position":"right",ref_key:"formRef",ref:U,rules:S,inline:!1,"label-width":"80px"},{default:o((()=>[c(w,{gutter:16},{default:o((()=>[c(f,{span:6},{default:o((()=>[c(s,{label:"登录账号",prop:"username"},{default:o((()=>[c(l,{modelValue:O.username,"onUpdate:modelValue":a[0]||(a[0]=e=>O.username=e),disabled:""!==r(A),placeholder:"输入管理员登录账号",clearable:"",maxlength:"50"},null,8,["modelValue","disabled"])])),_:1})])),_:1}),c(f,{span:6},{default:o((()=>[c(s,{label:"登录密码",prop:"password"},{default:o((()=>[c(l,{modelValue:O.password,"onUpdate:modelValue":a[1]||(a[1]=e=>O.password=e),disabled:""!==r(A),placeholder:"输入管理员登录密码",clearable:"",maxlength:"50"},null,8,["modelValue","disabled"])])),_:1})])),_:1}),c(f,{span:24},{default:o((()=>[c(s,{label:"权限设置",style:{"margin-bottom":"0"}},{default:o((()=>[c(b,{modelValue:r(I),"onUpdate:modelValue":a[2]||(a[2]=e=>m(I)?I.value=e:null),onChange:Q},{default:o((()=>[u("全部选择")])),_:1},8,["modelValue"])])),_:1}),c(s,{"label-width":"30px"},{default:o((()=>[i("ul",k,[(d(!0),h(g,null,p(r(C),(e=>(d(),h("li",null,[c(b,{modelValue:e.checkAll,"onUpdate:modelValue":a=>e.checkAll=a,indeterminate:e.isIndeterminate,onChange:a=>((e,a)=>{e.checked=a?e.children.map((e=>e.value)):[],e.isIndeterminate=!1,z()})(e,e.checkAll)},{default:o((()=>[u(v(e.name),1)])),_:2},1032,["modelValue","onUpdate:modelValue","indeterminate","onChange"]),c(V,{modelValue:e.checked,"onUpdate:modelValue":a=>e.checked=a,onChange:a=>((e,a)=>{const l=e.length;a.checkAll=l===a.children.length,a.isIndeterminate=l>0&&l<a.children.length,z()})(a,e)},{default:o((()=>[(d(!0),h(g,null,p(e.children,(e=>(d(),t(b,{style:{"margin-left":"30px"},label:e.value},{default:o((()=>[u(v(e.label),1)])),_:2},1032,["label"])))),256))])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])))),256))])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-cdecc946"]]);export{w as default};
