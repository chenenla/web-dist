!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,a,i=[],c=!0,o=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(u){o=!0,a=u}finally{try{c||null==t.return||t.return()}finally{if(o)throw a}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.25bc7eaa.js","./useT-legacy.8e787902.js","./File-legacy.ef2f5a52.js","./useUtil-legacy.ab29cc3b.js","./api-legacy.8aaa8476.js","./icon-legacy.b111ba44.js","./index-legacy.9e6f01d7.js","./Layout-legacy.f569a108.js","./useTitle-legacy.df269f7e.js","./Markdown-legacy.511d898e.js","./index-legacy.931d9425.js","./FolderTree-legacy.4c79921e.js","./obj-legacy.97e43e8b.js"],(function(e){"use strict";var t,r,a,i,c,o;return{setters:[function(n){t=n.d,r=n.e,a=n.B,i=n.o},function(n){c=n.u},function(n){o=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=c(),u=n(t(!1),2),l=u[0],f=u[1];return r(o,{get children(){return r(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+i.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();