System.register(["./index-legacy.87e1c49a.js","./useTitle-legacy.1462b19e.js","./DeletePopover-legacy.4c59c1f7.js","./Wether-legacy.592af53c.js"],(function(e){"use strict";var r,n,t,c,a,l,s,i,u,d,g,o,h,m,b,f,$,p,y,_,k,w,C,v,S,j,x;return{setters:[e=>{r=e.a,n=e.b,t=e.aW,c=e.b9,a=e.m,l=e.d9,s=e.h,i=e.ae,u=e.C,d=e.a7,g=e.da,o=e.db,h=e.dc,m=e.G,b=e.dd,f=e.de,$=e.df,p=e.ba,y=e.n,_=e.a4,k=e.ck,w=e.aG,C=e.aH,v=e.ag},e=>{S=e.b},e=>{j=e.D},e=>{x=e.W}],execute:function(){const W=e=>{const r=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return s(k,{get colorScheme(){return r[e.role].color},get children(){return r[e.role].name}})},D=e=>{const n=r();return s(i,{spacing:"$0_5",get children(){return s(m,{each:w,children:(r,t)=>s(C,{get label(){return n(`users.permissions.${r}`)},get children(){return s(d,{boxSize:"$2",rounded:"$full",get bg(){return`$${v.can(e.user,t())?"success":"danger"}9`}})}})})}})};e("default",(()=>{const e=r();S("manage.sidemenu.users");const{to:k}=n(),[w,C]=t((()=>c.get("/admin/user/list"))),[v,G]=a([]),H=async()=>{const e=await C();p(e,(e=>G(e.content)))};H();const[z,I]=l((e=>c.post(`/admin/user/delete?id=${e}`))),[O,P]=l((e=>c.post(`/admin/user/cancel_2fa?id=${e}`)));return s(_,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[s(i,{spacing:"$2",get children(){return[s(u,{colorScheme:"accent",get loading(){return w()},onClick:H,get children(){return e("global.refresh")}}),s(u,{onClick:()=>{k("/@manage/users/add")},get children(){return e("global.add")}})]}}),s(d,{w:"$full",overflowX:"auto",get children(){return s(g,{highlightOnHover:!0,dense:!0,get children(){return[s(o,{get children(){return s(h,{get children(){return[s(m,{each:["username","base_path","role","permission","available"],children:r=>s(b,{get children(){return e(`users.${r}`)}})}),s(b,{get children(){return e("global.operations")}})]}})}}),s(f,{get children(){return s(m,{get each(){return v()},children:r=>s(h,{get children(){return[s($,{get children(){return r.username}}),s($,{get children(){return r.base_path}}),s($,{get children(){return s(W,{get role(){return r.role}})}}),s($,{get children(){return s(D,{user:r})}}),s($,{get children(){return s(x,{get yes(){return!r.disabled}})}}),s($,{get children(){return s(i,{spacing:"$2",get children(){return[s(u,{onClick:()=>{k(`/@manage/users/edit/${r.id}`)},get children(){return e("global.edit")}}),s(j,{get name(){return r.username},get loading(){return z()===r.id},onClick:async()=>{const n=await I(r.id);p(n,(()=>{y.success(e("global.delete_success")),H()}))}}),s(u,{colorScheme:"accent",get loading(){return O()===r.id},onClick:async()=>{const n=await P(r.id);p(n,(()=>{y.success(e("users.cancel_2fa_success")),H()}))},get children(){return e("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})}))}}}));