System.register(["./index-legacy.87e1c49a.js","./useTitle-legacy.1462b19e.js","./DeletePopover-legacy.4c59c1f7.js"],(function(e){"use strict";var r,t,n,a,l,g,s,i,c,d,o,u,h,b,m,$,f,p,w,v,k,_,y,C,x,S,j,B,T,X,z,D,H,W,q,G,I,L,M,O,P,Y,A,E;return{setters:[e=>{r=e.a,t=e.h,n=e.X,a=e.al,l=e.ae,g=e.b5,s=e.ck,i=e.az,c=e.a7,d=e.a4,o=e.df,u=e.dc,h=e.b,b=e.aW,m=e.b9,$=e.C,f=e.aY,p=e.ba,w=e.n,v=e.m,k=e.k,_=e.cg,y=e.S,C=e.bp,x=e.bq,S=e.br,j=e.bs,B=e.bt,T=e.bu,X=e.bv,z=e.G,D=e.bw,H=e.bx,W=e.by,q=e.bz,G=e.$,I=e.a0,L=e.d0,M=e.da,O=e.db,P=e.dd,Y=e.de},e=>{A=e.b},e=>{E=e.D}],execute:function(){function F(e){const n=r(),{to:a}=h(),[l,g]=b((()=>m.post(`/admin/storage/delete?id=${e.storage.id}`))),[s,i]=b((()=>m.post(`/admin/storage/${e.storage.disabled?"enable":"disable"}?id=${e.storage.id}`)));return[t($,{onClick:()=>{a(`/@manage/storages/edit/${e.storage.id}`)},get children(){return n("global.edit")}}),t($,{get loading(){return s()},get colorScheme(){return e.storage.disabled?"success":"warning"},onClick:async()=>{const r=await i();f(r,(()=>{e.refresh()}))},get children(){return n("global."+(e.storage.disabled?"enable":"disable"))}}),t(E,{get name(){return e.storage.mount_path},get loading(){return l()},onClick:async()=>{const r=await g();p(r,(()=>{w.success(n("global.delete_success")),e.refresh()}))}})]}function J(e){const o=r();return t(d,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return n("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${a()}`}},get children(){return[t(l,{spacing:"$2",get children(){return[t(g,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return e.storage.mount_path}}),t(s,{colorScheme:"info",get children(){return o(`drivers.drivers.${e.storage.driver}`)}})]}}),t(l,{get children(){return[t(g,{get children(){return[i((()=>o("storages.common.status"))),": "]}}),t(c,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return e.storage.status}})]}}),t(g,{css:{wordBreak:"break-all"},get children(){return e.storage.remark}}),t(l,{spacing:"$2",get children(){return t(F,e)}})]}})}function K(e){const n=r();return t(u,{get children(){return[t(o,{get children(){return e.storage.mount_path}}),t(o,{get children(){return n(`drivers.drivers.${e.storage.driver}`)}}),t(o,{get children(){return e.storage.order}}),t(o,{get children(){return e.storage.status}}),t(o,{get children(){return e.storage.remark}}),t(o,{get children(){return t(l,{spacing:"$2",get children(){return t(F,e)}})}})]}})}e("default",(()=>{const e=r();A("manage.sidemenu.storages");const{to:n}=h(),[a,g]=b((()=>m.get("/admin/storage/list"))),[s,i]=v([]),o=async()=>{const e=await g();p(e,(e=>i(e.content)))},[f,E]=v([]),[F,N]=v([]);(async()=>{const e=await m.get("/admin/driver/names");p(e,(e=>E(e)))})(),o();const Q=async()=>{const r=await m.post("/admin/storage/load_all");p(r,(()=>{w.success(e("storages.other.start_load_success"))}))},R=k((()=>s().filter((e=>0===F().length||F().includes(e.driver))))),[U,V]=_("storages-layout","grid");return t(d,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[t(l,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[t($,{colorScheme:"accent",get loading(){return a()},onClick:o,get children(){return e("global.refresh")}}),t($,{onClick:()=>{n("/@manage/storages/add")},get children(){return e("global.add")}}),t($,{colorScheme:"warning",get loading(){return a()},onClick:Q,get children(){return e("storages.other.load_all")}}),t(y,{get when(){return f().length>0},get children(){return t(C,{multiple:!0,get value(){return F()},onChange:N,get children(){return[t(x,{get children(){return[t(S,{get children(){return e("storages.other.filter_by_driver")}}),t(j,{}),t(B,{})]}}),t(T,{get children(){return t(X,{get children(){return t(z,{get each(){return f()},children:r=>t(D,{value:r,get children(){return[t(H,{get children(){return e(`drivers.drivers.${r}`)}}),t(W,{})]}})})}})}})]}})}}),t(q,{get checked(){return"table"===U()},onChange:e=>{V(e.currentTarget.checked?"table":"grid")},get children(){return e("storages.other.table_layout")}})]}}),t(G,{get children(){return[t(I,{get when(){return"grid"===U()},get children(){return t(L,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return t(z,{get each(){return R()},children:e=>t(J,{storage:e,refresh:o})})}})}}),t(I,{get when(){return"table"===U()},get children(){return t(c,{w:"$full",overflowX:"auto",get children(){return t(M,{highlightOnHover:!0,dense:!0,get children(){return[t(O,{get children(){return t(u,{get children(){return[t(z,{each:["mount_path","driver","order","status","remark"],children:r=>t(P,{get children(){return e(`storages.common.${r}`)}})}),t(P,{get children(){return e("global.operations")}})]}})}}),t(Y,{get children(){return t(z,{get each(){return R()},children:e=>t(K,{storage:e,refresh:o})})}})]}})}})}})]}})]}})}))}}}));