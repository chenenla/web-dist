System.register(["./index-legacy.87e1c49a.js","./index-legacy.ddbd61c4.js"],(function(e){"use strict";var r,n,t,o,l,a,u,c,g,h,d,i,s,p,f,b,C,m,w,y,$,k,v,x,O,_,F,I,S,z,H,M,P,R,E,j,B,K;return{setters:[e=>{r=e.aK,n=e.a,t=e.h,o=e.I,l=e.S,a=e.C,u=e.ae,c=e.M,g=e.y,h=e.bd,d=e.z,i=e.A,s=e.B,p=e.D,f=e.m,b=e.a7,C=e.bI,m=e.bJ,w=e.aW,y=e.bK,$=e._,k=e.bL,v=e.x,x=e.r,O=e.bM,_=e.al,F=e.ax,I=e.b5,S=e.L,z=e.az,H=e.p,M=e.a4,P=e.G,R=e.d,E=e.bN,j=e.ba},e=>{B=e.e,K=e.f}],execute:function(){const L=E(),T=e("F",(e=>{const[r,n]=f("/");return e.handle?.({setPath:n}),t(b,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return t(L.Provider,{get value(){return{value:r,onChange:r=>{n(r),e.onChange(r)},autoOpen:e.autoOpen??!1,forceRoot:e.forceRoot??!1,showEmptyIcon:e.showEmptyIcon??!1,showHiddenFolder:e.showHiddenFolder??!0}},get children(){return t(A,{path:"/"})}})}})})),A=e=>{const{isHidePath:n}=C(),[o,a]=f(),{value:c,onChange:g,forceRoot:h,autoOpen:d,showEmptyIcon:i,showHiddenFolder:s}=m(L),[p,E]=w((()=>y(e.path,$(),h)));let T=!1;const D=async()=>{if(o()?.length)return;const e=await E();j(e,(e=>{T=!0,a(e)}),(()=>{G()&&J()}))},{isOpen:G,onToggle:J}=r(),N=()=>c()===e.path,V=k(e.path);return v(x(c,(async e=>{d&&V(e)&&(G()||J(),T||D())}))),t(l,{get when(){return s||!(n(e.path)&&!V(c()))},get children(){return t(b,{get children(){return[t(u,{spacing:"$2",get children(){return[t(l,{get when(){return!p()},get fallback(){return t(O,{size:"sm",get color(){return _()}})},get children(){return t(l,{get when(){return!Boolean(i&&void 0!==o()&&!o()?.length)},get fallback(){return t(F,{get color(){return _()},as:B})},get children(){return t(F,{get color(){return _()},as:K,get transform(){return G()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{J(),G()&&D()}})}})}}),t(I,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return N()?"$info8":"transparent"},get _hover(){return{bgColor:N()?"$info8":S()}},onClick:()=>{g(e.path)},get children(){return z((()=>"/"===e.path))()?"root":H(e.path)}})]}}),t(l,{get when(){return G()},get children(){return t(M,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return t(P,{get each(){return o()},children:r=>t(A,{get path(){return R(e.path,r.name)}})})}})}})]}})}})};e("M",(e=>{const r=n(),[o,l]=f(e.defaultValue??"/"),[u,h]=f();return v((()=>{e.opened&&u()?.setPath(o())})),t(p,{size:"xl",blockScrollOnMount:!1,get opened(){return e.opened},get onClose(){return e.onClose},get children(){return[t(c,{}),t(g,{get children(){return[t(d,{get children(){return r("home.toolbar.choose_dst_folder")}}),t(i,{get children(){return t(T,{onChange:l,handle:e=>h(e),autoOpen:!0})}}),t(s,{display:"flex",gap:"$2",get children(){return[t(a,{get onClick(){return e.onClose},colorScheme:"neutral",get children(){return r("global.cancel")}}),t(a,{get loading(){return e.loading},onClick:()=>e.onSubmit?.(o()),get children(){return r("global.ok")}})]}})]}})]}})})),e("a",(e=>{const{isOpen:f,onOpen:b,onClose:C}=r(),m=n();return[t(u,{w:"$full",spacing:"$2",get children(){return[t(o,{get id(){return e.id},get value(){return e.value},onInput:r=>e.onChange(r.currentTarget.value),get readOnly(){return e.onlyFolder},get onClick(){return e.onlyFolder?b:()=>{}},get placeholder(){return m("global."+(e.onlyFolder?"choose_folder":"choose_or_input_path"))}}),t(l,{get when(){return!e.onlyFolder},get children(){return t(a,{onClick:b,get children(){return m("global.choose")}})}})]}}),t(p,{size:"xl",get opened(){return f()},onClose:C,get children(){return[t(c,{}),t(g,{get children(){return[t(h,{}),t(d,{get children(){return m("global.choose_folder")}}),t(i,{get children(){return t(T,{forceRoot:!0,get onChange(){return e.onChange}})}}),t(s,{get children(){return t(a,{onClick:C,get children(){return m("global.confirm")}})}})]}})]}})]}))}}}));