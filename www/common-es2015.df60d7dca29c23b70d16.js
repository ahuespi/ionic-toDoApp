(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7MJf":function(n,e,t){"use strict";t.d(e,"a",(function(){return v})),t.d(e,"b",(function(){return k})),t.d(e,"c",(function(){return g})),t.d(e,"d",(function(){return w})),t.d(e,"e",(function(){return o}));var l=t("imtE"),i=t("kBU6");const o=n=>new Promise((e,t)=>{Object(l.l)(()=>{r(n),a(n).then(t=>{t.animation&&t.animation.destroy(),s(n),e(t)},e=>{s(n),t(e)})})}),r=n=>{const e=n.enteringEl,t=n.leavingEl;E(e,t,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),t&&w(t,!1)},a=async n=>{const e=await c(n);return e?u(e,n):d(n)},s=n=>{const e=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},c=async n=>{if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await t.e(95).then(t.bind(null,"pe/X"))).iosTransitionAnimation:(await t.e(96).then(t.bind(null,"KYEN"))).mdTransitionAnimation},u=async(n,e)=>{await m(e,!0);const t=n(e.baseEl,e);b(e.enteringEl,e.leavingEl);const l=await p(t,e);return e.progressCallback&&e.progressCallback(void 0),l&&h(e.enteringEl,e.leavingEl),{hasCompleted:l,animation:t}},d=async n=>{const e=n.enteringEl,t=n.leavingEl;return await m(n,!1),b(e,t),h(e,t),{hasCompleted:!0}},m=async(n,e)=>{const t=(void 0!==n.deepWait?n.deepWait:e)?[v(n.enteringEl),v(n.leavingEl)]:[y(n.enteringEl),y(n.leavingEl)];await Promise.all(t),await f(n.viewIsReady,n.enteringEl)},f=async(n,e)=>{n&&await n(e)},p=(n,e)=>{const t=e.progressCallback,l=new Promise(e=>{n.onFinish(n=>e(1===n))});return t?(n.progressStart(!0),t(n)):n.play(),l},b=(n,e)=>{g(e,i.c),g(n,i.a)},h=(n,e)=>{g(n,i.b),g(e,i.d)},g=(n,e)=>{if(n){const t=new CustomEvent(e,{bubbles:!1,cancelable:!1});n.dispatchEvent(t)}},y=n=>n&&n.componentOnReady?n.componentOnReady():Promise.resolve(),v=async n=>{const e=n;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(v))}},w=(n,e)=>{e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},E=(n,e,t)=>{void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==e&&(e.style.zIndex="100")},k=n=>n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n},Dl6n:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return l})),t.d(e,"d",(function(){return a}));const l=(n,e)=>null!==e.closest(n),i=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,[`ion-color-${n}`]:!0}:void 0,o=n=>{const e={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>e[n]=!0),e},r=/^[a-z][a-z0-9+\-.]*:/,a=async(n,e,t)=>{if(null!=n&&"#"!==n[0]&&!r.test(n)){const l=document.querySelector("ion-router");if(l)return null!=e&&e.preventDefault(),l.push(n,t)}return!1}},TMBv:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));const l={bubbles:{dur:1e3,circles:9,fn:(n,e,t)=>{const l=`${n*e/t-n}ms`,i=2*Math.PI*e/t;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":l}}}},circles:{dur:1e3,circles:8,fn:(n,e,t)=>{const l=e/t,i=`${n*l-n}ms`,o=2*Math.PI*l;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(n,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(n,e,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${n*e/t-n}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(n,e,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${n*e/t-n}ms`}})}}},VnTo:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var l=t("mrSG");t("Z16M");class i{constructor(n,e,t){this.deseosService=n,this.router=e,this.alertController=t,this.terminada=!0}ngOnInit(){}irLista(n){this.router.navigateByUrl(this.terminada?`/tabs/tab2/agregar/${n.id}`:`/tabs/tab1/agregar/${n.id}`)}borrarLista(n){console.log("borrado"),this.deseosService.borrarLista(n)}editarNombre(n){return l.a(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"Editar Nombre",inputs:[{name:"titulo",type:"text",placeholder:n.title}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"Editar",handler:e=>{0!==e.titulo.length&&(n.title=e.titulo,this.deseosService.guardarStorage(),this.lista.closeSlidingItems())}}]})).present()}))}}},YtD4:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));const l=n=>{try{if("string"!=typeof n||""===n)return n;const e=document.createDocumentFragment(),t=document.createElement("div");e.appendChild(t),t.innerHTML=n,a.forEach(n=>{const t=e.querySelectorAll(n);for(let l=t.length-1;l>=0;l--){const n=t[l];n.parentNode?n.parentNode.removeChild(n):e.removeChild(n);const r=o(n);for(let e=0;e<r.length;e++)i(r[e])}});const l=o(e);for(let n=0;n<l.length;n++)i(l[n]);const r=document.createElement("div");r.appendChild(e);const s=r.querySelector("div");return null!==s?s.innerHTML:r.innerHTML}catch(e){return console.error(e),""}},i=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let t=n.attributes.length-1;t>=0;t--){const e=n.attributes.item(t),l=e.name;if(!r.includes(l.toLowerCase())){n.removeAttribute(l);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&n.removeAttribute(l)}const e=o(n);for(let t=0;t<e.length;t++)i(e[t])},o=n=>null!=n.children?n.children:n.childNodes,r=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},iTUp:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));class l{}},j1ZV:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));class l{}},m9yc:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return i}));const l=async(n,e,t,l,i)=>{if(n)return n.attachViewToDom(e,t,i,l);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t;return l&&l.forEach(n=>o.classList.add(n)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},opz7:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return r})),t.d(e,"d",(function(){return l}));const l=()=>{const n=window.TapticEngine;n&&n.selection()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},r=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}},z8hd:function(n,e,t){"use strict";var l=t("8Y7J"),i=t("MKJQ"),o=t("sZkV"),r=t("SVse");class a{transform(n,e=!0){return n.filter(n=>n.terminada===e)}}t("VnTo"),t("Z16M"),t("iInd"),t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return u}));var s=l.mb({encapsulation:0,styles:[[""]],data:{}});function c(n){return l.Gb(0,[(n()(),l.ob(0,0,null,null,21,"ion-item-sliding",[["class","animated fadeInDown"],["color","dark"]],null,null,null,i.J,i.n)),l.nb(1,49152,null,0,o.M,[l.h,l.k,l.x],null,null),(n()(),l.ob(2,0,null,0,7,"ion-item",[["color","dark"],["detail",""]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.irLista(n.context.$implicit)&&l),l}),i.K,i.k)),l.nb(3,49152,null,0,o.H,[l.h,l.k,l.x],{color:[0,"color"],detail:[1,"detail"]},null),(n()(),l.ob(4,0,null,0,2,"ion-label",[],null,null,null,i.L,i.o)),l.nb(5,49152,null,0,o.N,[l.h,l.k,l.x],null,null),(n()(),l.Eb(6,0,["",""])),(n()(),l.ob(7,0,null,0,2,"ion-note",[["slot","end"]],null,null,null,i.O,i.r)),l.nb(8,49152,null,0,o.V,[l.h,l.k,l.x],null,null),(n()(),l.Eb(9,0,[" "," items "])),(n()(),l.ob(10,0,null,0,5,"ion-item-options",[["side","start"]],null,null,null,i.I,i.m)),l.nb(11,49152,null,0,o.L,[l.h,l.k,l.x],{side:[0,"side"]},null),(n()(),l.ob(12,0,null,0,3,"ion-item-option",[["color","success"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.editarNombre(n.context.$implicit)&&l),l}),i.H,i.l)),l.nb(13,49152,null,0,o.K,[l.h,l.k,l.x],{color:[0,"color"]},null),(n()(),l.ob(14,0,null,0,1,"ion-icon",[["name","create-outline"]],null,null,null,i.F,i.i)),l.nb(15,49152,null,0,o.C,[l.h,l.k,l.x],{name:[0,"name"]},null),(n()(),l.ob(16,0,null,0,5,"ion-item-options",[["side","end"]],null,null,null,i.I,i.m)),l.nb(17,49152,null,0,o.L,[l.h,l.k,l.x],{side:[0,"side"]},null),(n()(),l.ob(18,0,null,0,3,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.borrarLista(n.context.$implicit)&&l),l}),i.H,i.l)),l.nb(19,49152,null,0,o.K,[l.h,l.k,l.x],{color:[0,"color"]},null),(n()(),l.ob(20,0,null,0,1,"ion-icon",[["name","trash-outline"],["slot","icon-only"]],null,null,null,i.F,i.i)),l.nb(21,49152,null,0,o.C,[l.h,l.k,l.x],{name:[0,"name"]},null)],(function(n,e){n(e,3,0,"dark",""),n(e,11,0,"start"),n(e,13,0,"success"),n(e,15,0,"create-outline"),n(e,17,0,"end"),n(e,19,0,"danger"),n(e,21,0,"trash-outline")}),(function(n,e){n(e,6,0,e.context.$implicit.title),n(e,9,0,e.context.$implicit.items.length)}))}function u(n){return l.Gb(0,[l.Cb(671088640,1,{lista:0}),(n()(),l.ob(1,0,null,null,4,"ion-list",[["color","dark"]],null,null,null,i.N,i.p)),l.nb(2,49152,[[1,4],["test",4],["lista",4]],0,o.O,[l.h,l.k,l.x],null,null),(n()(),l.db(16777216,null,0,2,null,c)),l.nb(4,278528,null,0,r.h,[l.L,l.I,l.q],{ngForOf:[0,"ngForOf"]},null),l.Ab(0,a,[])],(function(n,e){var t=e.component;n(e,4,0,l.Fb(e,4,0,l.zb(e,5).transform(t.deseosService.listas,t.terminada)))}),null)}}}]);