(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7MJf":function(n,t,e){"use strict";e.d(t,"a",(function(){return v})),e.d(t,"b",(function(){return k})),e.d(t,"c",(function(){return g})),e.d(t,"d",(function(){return w})),e.d(t,"e",(function(){return o}));var l=e("imtE"),i=e("kBU6");const o=n=>new Promise((t,e)=>{Object(l.l)(()=>{r(n),a(n).then(e=>{e.animation&&e.animation.destroy(),c(n),t(e)},t=>{c(n),e(t)})})}),r=n=>{const t=n.enteringEl,e=n.leavingEl;E(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),w(t,!1),e&&w(e,!1)},a=async n=>{const t=await s(n);return t?u(t,n):d(n)},c=n=>{const t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},s=async n=>{if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await e.e(95).then(e.bind(null,"pe/X"))).iosTransitionAnimation:(await e.e(96).then(e.bind(null,"KYEN"))).mdTransitionAnimation},u=async(n,t)=>{await m(t,!0);const e=n(t.baseEl,t);b(t.enteringEl,t.leavingEl);const l=await p(e,t);return t.progressCallback&&t.progressCallback(void 0),l&&h(t.enteringEl,t.leavingEl),{hasCompleted:l,animation:e}},d=async n=>{const t=n.enteringEl,e=n.leavingEl;return await m(n,!1),b(t,e),h(t,e),{hasCompleted:!0}},m=async(n,t)=>{const e=(void 0!==n.deepWait?n.deepWait:t)?[v(n.enteringEl),v(n.leavingEl)]:[y(n.enteringEl),y(n.leavingEl)];await Promise.all(e),await f(n.viewIsReady,n.enteringEl)},f=async(n,t)=>{n&&await n(t)},p=(n,t)=>{const e=t.progressCallback,l=new Promise(t=>{n.onFinish(n=>t(1===n))});return e?(n.progressStart(!0),e(n)):n.play(),l},b=(n,t)=>{g(t,i.c),g(n,i.a)},h=(n,t)=>{g(n,i.b),g(t,i.d)},g=(n,t)=>{if(n){const e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},y=n=>n&&n.componentOnReady?n.componentOnReady():Promise.resolve(),v=async n=>{const t=n;if(t){if(null!=t.componentOnReady&&null!=await t.componentOnReady())return;await Promise.all(Array.from(t.children).map(v))}},w=(n,t)=>{t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},E=(n,t,e)=>{void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")},k=n=>n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n},Dl6n:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return l})),e.d(t,"d",(function(){return a}));const l=(n,t)=>null!==t.closest(n),i=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,["ion-color-".concat(n)]:!0}:void 0,o=n=>{const t={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>t[n]=!0),t},r=/^[a-z][a-z0-9+\-.]*:/,a=async(n,t,e)=>{if(null!=n&&"#"!==n[0]&&!r.test(n)){const l=document.querySelector("ion-router");if(l)return null!=t&&t.preventDefault(),l.push(n,e)}return!1}},TMBv:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));const l={bubbles:{dur:1e3,circles:9,fn:(n,t,e)=>{const l="".concat(n*t/e-n,"ms"),i=2*Math.PI*t/e;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":l}}}},circles:{dur:1e3,circles:8,fn:(n,t,e)=>{const l=t/e,i="".concat(n*l-n,"ms"),o=2*Math.PI*l;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(n,t)=>({r:6,style:{left:"".concat(9-9*t,"px"),"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(n,t,e)=>({y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(n*t/e-n,"ms")}})},"lines-small":{dur:1e3,lines:12,fn:(n,t,e)=>({y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(n*t/e-n,"ms")}})}}},VnTo:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var l=e("mrSG");e("Z16M");class i{constructor(n,t,e){this.deseosService=n,this.router=t,this.alertController=e,this.terminada=!0}ngOnInit(){}irLista(n){this.router.navigateByUrl(this.terminada?"/tabs/tab2/agregar/".concat(n.id):"/tabs/tab1/agregar/".concat(n.id))}borrarLista(n){console.log("borrado"),this.deseosService.borrarLista(n)}editarNombre(n){return l.a(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"Editar Nombre",inputs:[{name:"titulo",type:"text",placeholder:n.title}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"Editar",handler:t=>{0!==t.titulo.length&&(n.title=t.titulo,this.deseosService.guardarStorage(),this.lista.closeSlidingItems())}}]})).present()}))}}},YtD4:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));const l=n=>{try{if("string"!=typeof n||""===n)return n;const t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,a.forEach(n=>{const e=t.querySelectorAll(n);for(let l=e.length-1;l>=0;l--){const n=e[l];n.parentNode?n.parentNode.removeChild(n):t.removeChild(n);const r=o(n);for(let t=0;t<r.length;t++)i(r[t])}});const l=o(t);for(let n=0;n<l.length;n++)i(l[n]);const r=document.createElement("div");r.appendChild(t);const c=r.querySelector("div");return null!==c?c.innerHTML:r.innerHTML}catch(t){return console.error(t),""}},i=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let e=n.attributes.length-1;e>=0;e--){const t=n.attributes.item(e),l=t.name;if(!r.includes(l.toLowerCase())){n.removeAttribute(l);continue}const i=t.value;null!=i&&i.toLowerCase().includes("javascript:")&&n.removeAttribute(l)}const t=o(n);for(let e=0;e<t.length;e++)i(t[e])},o=n=>null!=n.children?n.children:n.childNodes,r=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},iTUp:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{}},j1ZV:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{}},m9yc:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return i}));const l=async(n,t,e,l,i)=>{if(n)return n.attachViewToDom(t,e,i,l);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e;return l&&l.forEach(n=>o.classList.add(n)),i&&Object.assign(o,i),t.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},opz7:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return l}));const l=()=>{const n=window.TapticEngine;n&&n.selection()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},r=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}},z8hd:function(n,t,e){"use strict";var l=e("8Y7J"),i=e("MKJQ"),o=e("sZkV"),r=e("SVse");class a{transform(n,t=!0){return n.filter(n=>n.terminada===t)}}e("VnTo"),e("Z16M"),e("iInd"),e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return u}));var c=l.mb({encapsulation:0,styles:[[""]],data:{}});function s(n){return l.Gb(0,[(n()(),l.ob(0,0,null,null,21,"ion-item-sliding",[["class","animated fadeInDown"],["color","dark"]],null,null,null,i.J,i.n)),l.nb(1,49152,null,0,o.M,[l.h,l.k,l.x],null,null),(n()(),l.ob(2,0,null,0,7,"ion-item",[["color","dark"],["detail",""]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.irLista(n.context.$implicit)&&l),l}),i.K,i.k)),l.nb(3,49152,null,0,o.H,[l.h,l.k,l.x],{color:[0,"color"],detail:[1,"detail"]},null),(n()(),l.ob(4,0,null,0,2,"ion-label",[],null,null,null,i.L,i.o)),l.nb(5,49152,null,0,o.N,[l.h,l.k,l.x],null,null),(n()(),l.Eb(6,0,["",""])),(n()(),l.ob(7,0,null,0,2,"ion-note",[["slot","end"]],null,null,null,i.O,i.r)),l.nb(8,49152,null,0,o.V,[l.h,l.k,l.x],null,null),(n()(),l.Eb(9,0,[" "," items "])),(n()(),l.ob(10,0,null,0,5,"ion-item-options",[["side","start"]],null,null,null,i.I,i.m)),l.nb(11,49152,null,0,o.L,[l.h,l.k,l.x],{side:[0,"side"]},null),(n()(),l.ob(12,0,null,0,3,"ion-item-option",[["color","success"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.editarNombre(n.context.$implicit)&&l),l}),i.H,i.l)),l.nb(13,49152,null,0,o.K,[l.h,l.k,l.x],{color:[0,"color"]},null),(n()(),l.ob(14,0,null,0,1,"ion-icon",[["name","create-outline"]],null,null,null,i.F,i.i)),l.nb(15,49152,null,0,o.C,[l.h,l.k,l.x],{name:[0,"name"]},null),(n()(),l.ob(16,0,null,0,5,"ion-item-options",[["side","end"]],null,null,null,i.I,i.m)),l.nb(17,49152,null,0,o.L,[l.h,l.k,l.x],{side:[0,"side"]},null),(n()(),l.ob(18,0,null,0,3,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.borrarLista(n.context.$implicit)&&l),l}),i.H,i.l)),l.nb(19,49152,null,0,o.K,[l.h,l.k,l.x],{color:[0,"color"]},null),(n()(),l.ob(20,0,null,0,1,"ion-icon",[["name","trash-outline"],["slot","icon-only"]],null,null,null,i.F,i.i)),l.nb(21,49152,null,0,o.C,[l.h,l.k,l.x],{name:[0,"name"]},null)],(function(n,t){n(t,3,0,"dark",""),n(t,11,0,"start"),n(t,13,0,"success"),n(t,15,0,"create-outline"),n(t,17,0,"end"),n(t,19,0,"danger"),n(t,21,0,"trash-outline")}),(function(n,t){n(t,6,0,t.context.$implicit.title),n(t,9,0,t.context.$implicit.items.length)}))}function u(n){return l.Gb(0,[l.Cb(671088640,1,{lista:0}),(n()(),l.ob(1,0,null,null,4,"ion-list",[["color","dark"]],null,null,null,i.N,i.p)),l.nb(2,49152,[[1,4],["test",4],["lista",4]],0,o.O,[l.h,l.k,l.x],null,null),(n()(),l.db(16777216,null,0,2,null,s)),l.nb(4,278528,null,0,r.h,[l.L,l.I,l.q],{ngForOf:[0,"ngForOf"]},null),l.Ab(0,a,[])],(function(n,t){var e=t.component;n(t,4,0,l.Fb(t,4,0,l.zb(t,5).transform(e.deseosService.listas,e.terminada)))}),null)}}}]);