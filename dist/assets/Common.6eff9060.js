import{a as v,b as $,aW as l,b9 as r,cj as C,c_ as w,m as I,h as t,c$ as R,E as _,ba as o,n as p,ae as L,C as u,a4 as T}from"./index.fae3cea4.js";import{b as x}from"./useTitle.630c0b7f.js";import{I as j}from"./SettingItem.d9757149.js";import{R as B}from"./ResponsiveGrid.04e247e9.js";import"./index.72e3f724.js";import"./index.0adfc44b.js";import"./index.afa471fc.js";import"./item_type.be442da4.js";const q=m=>{const s=v(),{pathname:d}=$();x(`manage.sidemenu.${d().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${m.group}`)),[c,i]=C([]),a=async()=>{const e=await f();o(e,i)};a();const[S,b]=l(()=>r.post("/admin/setting/save",w(c))),[k,g]=I(!1);return t(T,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(B,{get children(){return t(R,{each:c,children:(e,D)=>t(j,_(e,{onChange:n=>{i(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(L,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return s("global.refresh")}}),t(u,{get loading(){return S()},onClick:async()=>{const e=await b();o(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{q as default};