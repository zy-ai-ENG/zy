
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.a8b9b973.js";import{d as a,u as l,r as o,o as r,c as s,a as n,b as t,w as u,v as d,e as i,f as p,g as m,h as c,p as g,i as f,j as _,t as w,k as v,l as h,m as b,_ as x,E as V,n as y,q as k}from"../main-dd192319.js";import"../config/config.bd9b8a25.js";const q=e=>(g("data-v-8288eea0"),e=e(),f(),e),U=q((()=>n("div",{class:"bg-banner"},null,-1))),P={id:"login-box"},S={class:"login-banner"},C=q((()=>n("div",{class:"logo"},null,-1))),j=["src"],z={class:"title-container"},I={class:"title"},R={class:"flex-bar"},E=q((()=>n("div",{class:"sub-link"},null,-1))),F=q((()=>n("div",{class:"title-container"},[n("h3",{class:"title"}," 探索从这里开始! 🚀 ")],-1))),L={class:"sub-link"},A=q((()=>n("span",{class:"text"},"已经有帐号?",-1))),D=q((()=>n("div",{class:"title-container"},[n("h3",{class:"title"}," 忘记密码了? 🔒 ")],-1))),G={class:"sub-link"},K=a({name:"Login"}),M=a({...K,setup(a){var g;const f=m(),y=_(),k=l(),q=new URL("/gomaxai/admin/static/png/login-banner-2c1ede93.png",self.location).href,K=o("login"),M=o(!1);o((null==(g=f.query.redirect)?void 0:g.toString())??"/");const B=o(),H=o({username:localStorage.login_username||"",password:"",remember:!!localStorage.login_username}),J=o({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]});function N(){B.value&&B.value.validate((e=>{e&&(M.value=!0,k.login(H.value).then((()=>{M.value=!1,H.value.remember?localStorage.setItem("login_username",H.value.username):localStorage.removeItem("login_username"),y.push("/")})).catch((()=>{M.value=!1})))}))}const O=o(),Q=o({username:"",captcha:"",password:"",checkPassword:""}),T=o({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkPassword:[{required:!0,trigger:"blur",message:"请再次输入密码"},{validator:(e,a,l)=>{a!==Q.value.password?l(new Error("两次输入的密码不一致")):l()}}]});function W(){V({message:"注册模块仅提供界面演示，无实际功能，需开发者自行扩展",type:"warning"}),O.value&&O.value.validate((e=>{}))}const X=o(),Y=o({username:localStorage.login_username||"",captcha:"",newPassword:""}),Z=o({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]});function $(){V({message:"重置密码模块仅提供界面演示，无实际功能，需开发者自行扩展",type:"warning"}),X.value&&X.value.validate((e=>{}))}return(a,l)=>{const o=x,m=c("el-icon"),g=c("el-input"),f=c("el-form-item"),_=c("el-checkbox"),V=c("el-button"),y=c("el-form"),k=c("el-link"),ee=e;return r(),s("div",null,[U,n("div",P,[n("div",S,[C,n("img",{src:t(q),class:"banner"},null,8,j)]),u(i(y,{ref_key:"loginFormRef",ref:B,model:t(H),rules:t(J),class:"login-form",autocomplete:"on"},{default:p((()=>[n("div",z,[n("h3",I," 欢迎使用 "+w(t("GoMaxAI"))+" ! 👋🏻 ",1)]),n("div",null,[i(f,{prop:"username"},{default:p((()=>[i(g,{modelValue:t(H).username,"onUpdate:modelValue":l[0]||(l[0]=e=>t(H).username=e),placeholder:"用户名",text:"",tabindex:"1",autocomplete:"on"},{prefix:p((()=>[i(m,null,{default:p((()=>[i(o,{name:"ep:user"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(f,{prop:"password"},{default:p((()=>[i(g,{modelValue:t(H).password,"onUpdate:modelValue":l[1]||(l[1]=e=>t(H).password=e),type:"password",placeholder:"密码",tabindex:"2",autocomplete:"on","show-password":"",onKeyup:v(N,["enter"])},{prefix:p((()=>[i(m,null,{default:p((()=>[i(o,{name:"ep:lock"})])),_:1})])),_:1},8,["modelValue"])])),_:1})]),n("div",R,[i(_,{modelValue:t(H).remember,"onUpdate:modelValue":l[2]||(l[2]=e=>t(H).remember=e),style:{color:"#fafafa"}},{default:p((()=>[h(" 记住我 ")])),_:1},8,["modelValue"])]),i(V,{loading:t(M),type:"primary",size:"large",style:{width:"100%","font-size":"18px",background:"#70c1ff",height:"42px"},onClick:b(N,["prevent"])},{default:p((()=>[h(" 登录 ")])),_:1},8,["loading"]),E])),_:1},8,["model","rules"]),[[d,"login"===t(K)]]),u(i(y,{ref_key:"registerFormRef",ref:O,model:t(Q),rules:t(T),class:"login-form","auto-complete":"on"},{default:p((()=>[F,n("div",null,[i(f,{prop:"username"},{default:p((()=>[i(g,{modelValue:t(Q).username,"onUpdate:modelValue":l[3]||(l[3]=e=>t(Q).username=e),placeholder:"用户名",tabindex:"1",autocomplete:"on"},{prefix:p((()=>[i(m,null,{default:p((()=>[i(o,{name:"ep:user"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(f,{prop:"captcha"},{default:p((()=>[i(g,{modelValue:t(Q).captcha,"onUpdate:modelValue":l[4]||(l[4]=e=>t(Q).captcha=e),placeholder:"验证码",tabindex:"2",autocomplete:"on"},{prefix:p((()=>[i(m,null,{default:p((()=>[i(o,{name:"ep:key"})])),_:1})])),append:p((()=>[i(V,null,{default:p((()=>[h("发送验证码")])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(f,{prop:"password"},{default:p((()=>[i(g,{modelValue:t(Q).password,"onUpdate:modelValue":l[5]||(l[5]=e=>t(Q).password=e),type:"password",placeholder:"密码",tabindex:"3",autocomplete:"on","show-password":""},{prefix:p((()=>[i(m,null,{default:p((()=>[i(o,{name:"ep:lock"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(f,{prop:"checkPassword"},{default:p((()=>[i(g,{modelValue:t(Q).checkPassword,"onUpdate:modelValue":l[6]||(l[6]=e=>t(Q).checkPassword=e),type:"password",placeholder:"确认密码",tabindex:"4",autocomplete:"on","show-password":""},{prefix:p((()=>[i(m,null,{default:p((()=>[i(o,{name:"ep:lock"})])),_:1})])),_:1},8,["modelValue"])])),_:1})]),i(V,{loading:t(M),type:"primary",size:"large",style:{width:"100%","margin-top":"20px"},onClick:b(W,["prevent"])},{default:p((()=>[h(" 注册 ")])),_:1},8,["loading"]),n("div",L,[A,i(k,{type:"primary",underline:!1,onClick:l[7]||(l[7]=e=>K.value="login")},{default:p((()=>[h(" 去登录 ")])),_:1})])])),_:1},8,["model","rules"]),[[d,"register"===t(K)]]),u(i(y,{ref_key:"resetFormRef",ref:X,model:t(Y),rules:t(Z),class:"login-form","auto-complete":"on"},{default:p((()=>[D,n("div",null,[i(f,{prop:"username"},{default:p((()=>[i(g,{modelValue:t(Y).username,"onUpdate:modelValue":l[8]||(l[8]=e=>t(Y).username=e),placeholder:"用户名",tabindex:"1",autocomplete:"on"},{prefix:p((()=>[i(m,null,{default:p((()=>[i(o,{name:"ep:user"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(f,{prop:"captcha"},{default:p((()=>[i(g,{modelValue:t(Y).captcha,"onUpdate:modelValue":l[9]||(l[9]=e=>t(Y).captcha=e),placeholder:"验证码",tabindex:"2",autocomplete:"on"},{prefix:p((()=>[i(m,null,{default:p((()=>[i(o,{name:"ep:key"})])),_:1})])),append:p((()=>[i(V,null,{default:p((()=>[h("发送验证码")])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(f,{prop:"newPassword"},{default:p((()=>[i(g,{modelValue:t(Y).newPassword,"onUpdate:modelValue":l[10]||(l[10]=e=>t(Y).newPassword=e),type:"password",placeholder:"新密码",tabindex:"3",autocomplete:"on","show-password":""},{prefix:p((()=>[i(m,null,{default:p((()=>[i(o,{name:"ep:lock"})])),_:1})])),_:1},8,["modelValue"])])),_:1})]),i(V,{loading:t(M),type:"primary",size:"large",style:{width:"100%","margin-top":"20px"},onClick:b($,["prevent"])},{default:p((()=>[h(" 确认 ")])),_:1},8,["loading"]),n("div",G,[i(k,{type:"primary",underline:!1,onClick:l[11]||(l[11]=e=>K.value="login")},{default:p((()=>[h(" 返回登录 ")])),_:1})])])),_:1},8,["model","rules"]),[[d,"reset"===t(K)]])]),i(ee)])}}});"function"==typeof k&&k(M);const B=y(M,[["__scopeId","data-v-8288eea0"]]);export{B as default};
