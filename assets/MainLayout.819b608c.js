import{v as Bt,a as zt,u as Pt,b as Vt,Q as Ot}from"./QBtn.c35ebb9c.js";import{c as P,h as j,a as ut,b as Ne,g as Ht,d as Mt,e as Xe,f as Dt,Q as st}from"./Ripple.2ecc9b57.js";import{c as v,h as C,r as E,i as ct,o as G,a as X,n as Pe,d as J,g as H,l as O,e as Q,w as k,f as Ve,j as ve,H as je,k as V,s as Oe,m as Qt,p as Rt,P as Wt,q as At,t as re,u as qe,v as Ue,x as ke,y as Be,z as Ce,A as Ft,B as dt,C as It,D as ue,E as Nt,F as Xt,G as He,_ as Me,I as D,J as I,K as T,L as _,M as ft,N,O as ie,Q as jt,R as Ye,S as Ke,T as Ge,U as Le,V as Je}from"./index.a6db8d79.js";import{u as De,a as Qe,b as se}from"./format.01b651dd.js";var Ut=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},j(o.default))}}),Yt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},j(o.default))}});function Kt(){const e=E(!ct.value);return e.value===!1&&G(()=>{e.value=!0}),e}const vt=typeof ResizeObserver!="undefined",Ze=vt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ze=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,l,t={width:-1,height:-1};function i(d){d===!0||e.debounce===0||e.debounce==="0"?c():n===null&&(n=setTimeout(c,e.debounce))}function c(){if(clearTimeout(n),n=null,l){const{offsetWidth:d,offsetHeight:u}=l;(d!==t.width||u!==t.height)&&(t={width:d,height:u},o("resize",t))}}const{proxy:f}=H();if(vt===!0){let d;const u=a=>{l=f.$el.parentNode,l?(d=new ResizeObserver(i),d.observe(l),c()):a!==!0&&J(()=>{u(!0)})};return G(()=>{u()}),X(()=>{clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():l&&d.unobserve(l))}),Pe}else{let a=function(){clearTimeout(n),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",i,O.passive),u=void 0)},w=function(){a(),l&&l.contentDocument&&(u=l.contentDocument.defaultView,u.addEventListener("resize",i,O.passive),c())};const d=Kt();let u;return G(()=>{J(()=>{l=f.$el,l&&w()})}),X(a),f.trigger=i,()=>{if(d.value===!0)return C("object",{style:Ze.style,tabindex:-1,type:"text/html",data:Ze.url,"aria-hidden":"true",onLoad:w})}}}}),Gt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=Ve(ve,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const i=E(parseInt(e.heightHint,10)),c=E(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return c.value===!0?i.value:0;const s=i.value-t.scroll.value.position;return s>0?s:0}),u=v(()=>e.modelValue!==!0||f.value===!0&&c.value!==!0),a=v(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const s=t.rows.value.top,p={};return s[0]==="l"&&t.left.space===!0&&(p[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(p[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(s,p){t.update("header",s,p)}function h(s,p){s.value!==p&&(s.value=p)}function x({height:s}){h(i,s),m("size",s)}function L(s){a.value===!0&&h(c,!0),n("focusin",s)}k(()=>e.modelValue,s=>{m("space",s),h(c,!0),t.animate()}),k(d,s=>{m("offset",s)}),k(()=>e.reveal,s=>{s===!1&&h(c,e.modelValue)}),k(c,s=>{t.animate(),n("reveal",s)}),k(t.scroll,s=>{e.reveal===!0&&h(c,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",i.value),m("space",e.modelValue),m("offset",d.value),X(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const s=ut(o.default,[]);return e.elevated===!0&&s.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(C(ze,{debounce:0,onResize:x})),C("header",{class:w.value,style:q.value,onFocusin:L},s)}}}),Z=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=v(()=>parseInt(e.lines,10)),l=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>C("div",{style:t.value,class:l.value},j(o.default))}}),Jt=P({name:"QList",props:{...De,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=H(),l=Qe(e,n.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},j(o.default))}});function Zt(e,o,n){let l;function t(){l!==void 0&&(je.remove(l),l=void 0)}return X(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>n.value===!0,handler:o},je.add(l)}}}const eo={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},to=["beforeShow","show","beforeHide","hide"];function oo({showing:e,canShow:o,hideOnRouteChange:n,handleShow:l,handleHide:t,processOnMount:i}){const c=H(),{props:f,emit:d,proxy:u}=c;let a;function w(s){e.value===!0?h(s):q(s)}function q(s){if(f.disable===!0||s!==void 0&&s.qAnchorHandled===!0||o!==void 0&&o(s)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),a=s,J(()=>{a===s&&(a=void 0)})),(f.modelValue===null||p===!1)&&m(s)}function m(s){e.value!==!0&&(e.value=!0,d("beforeShow",s),l!==void 0?l(s):d("show",s))}function h(s){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),a=s,J(()=>{a===s&&(a=void 0)})),(f.modelValue===null||p===!1)&&x(s)}function x(s){e.value!==!1&&(e.value=!1,d("beforeHide",s),t!==void 0?t(s):d("hide",s))}function L(s){f.disable===!0&&s===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):s===!0!==e.value&&(s===!0?m:x)(a)}k(()=>f.modelValue,L),n!==void 0&&Bt(c)===!0&&k(()=>u.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),i===!0&&G(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(u,g),g}const no=[null,document,document.body,document.scrollingElement,document.documentElement];function io(e,o){let n=Ht(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return no.includes(n)?window:n}function mt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ht(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ce;function Se(){if(ce!==void 0)return ce;const e=document.createElement("p"),o=document.createElement("div");Ne(e,{width:"100%",height:"200px"}),Ne(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return n===l&&(l=o.clientWidth),o.remove(),ce=n-l,ce}function lo(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let oe=0,Te,_e,ne,Ee=!1,et,tt,K;function ao(e){ro(e)&&Oe(e)}function ro(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Qt(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||l?e.deltaY:e.deltaX;for(let i=0;i<o.length;i++){const c=o[i];if(lo(c,l))return l?t<0&&c.scrollTop===0?!0:t>0&&c.scrollTop+c.clientHeight===c.scrollHeight:t<0&&c.scrollLeft===0?!0:t>0&&c.scrollLeft+c.clientWidth===c.scrollWidth}return!0}function ot(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function de(e){Ee!==!0&&(Ee=!0,requestAnimationFrame(()=>{Ee=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(ne===void 0||o!==window.innerHeight)&&(ne=n-o,document.scrollingElement.scrollTop=l),l>ne&&(document.scrollingElement.scrollTop-=Math.ceil((l-ne)/8))}))}function nt(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);Te=ht(window),_e=mt(window),et=o.style.left,tt=o.style.top,o.style.left=`-${Te}px`,o.style.top=`-${_e}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",de,O.passiveCapture),window.visualViewport.addEventListener("scroll",de,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ot,O.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",ao,O.notPassive),e==="remove"&&(V.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",de,O.passiveCapture),window.visualViewport.removeEventListener("scroll",de,O.passiveCapture)):window.removeEventListener("scroll",ot,O.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=et,o.style.top=tt,window.scrollTo(Te,_e),ne=void 0)}function uo(e){let o="add";if(e===!0){if(oe++,K!==void 0){clearTimeout(K),K=void 0;return}if(oe>1)return}else{if(oe===0||(oe--,oe>0))return;if(o="remove",V.is.ios===!0&&V.is.nativeMobile===!0){clearTimeout(K),K=setTimeout(()=>{nt(o),K=void 0},100);return}}nt(o)}function so(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,uo(o))}}}function co(){let e;const o=H();function n(){clearTimeout(e)}return Rt(n),X(n),{removeTimeout:n,registerTimeout(l,t){clearTimeout(e),zt(o)===!1&&(e=setTimeout(l,t))}}}const Re={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},fo=Object.keys(Re);Re.all=!0;function it(e){const o={};for(const n of fo)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Re:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function lt(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function vo(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Wt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function xe(e,o,n){const l=Be(e);let t,i=l.left-o.event.x,c=l.top-o.event.y,f=Math.abs(i),d=Math.abs(c);const u=o.direction;u.horizontal===!0&&u.vertical!==!0?t=i<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=c<0?"up":"down":u.up===!0&&c<0?(t="up",f>d&&(u.left===!0&&i<0?t="left":u.right===!0&&i>0&&(t="right"))):u.down===!0&&c>0?(t="down",f>d&&(u.left===!0&&i<0?t="left":u.right===!0&&i>0&&(t="right"))):u.left===!0&&i<0?(t="left",f<d&&(u.up===!0&&c<0?t="up":u.down===!0&&c>0&&(t="down"))):u.right===!0&&i>0&&(t="right",f<d&&(u.up===!0&&c<0?t="up":u.down===!0&&c>0&&(t="down")));let a=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(l.left-=i,f=0,i=0):(l.top-=c,d=0,c=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:i,y:c},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let mo=0;var $e=Mt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&V.has.touch!==!0)return;function l(i,c){n.mouse===!0&&c===!0?Oe(i):(n.stop===!0&&ke(i),n.prevent===!0&&Ue(i))}const t={uid:"qvtp_"+mo++,handler:o,modifiers:n,direction:it(n),noop:Pe,mouseStart(i){lt(i,t)&&At(i)&&(re(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(lt(i,t)){const c=i.target;re(t,"temp",[[c,"touchmove","move","notPassiveCapture"],[c,"touchcancel","end","passiveCapture"],[c,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,c){if(V.is.firefox===!0&&qe(e,!0),t.lastEvt=i,c===!0||n.stop===!0){if(t.direction.all!==!0&&(c!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Ue(u),i.cancelBubble===!0&&ke(u),Object.assign(u,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:u}}ke(i)}const{left:f,top:d}=Be(i);t.event={x:f,y:d,time:Date.now(),mouse:c===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(i){if(t.event===void 0)return;const c=Be(i),f=c.left-t.event.x,d=c.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=i;const u=t.event.mouse===!0,a=()=>{l(i,u);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),vo(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),u===!0){const x=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{x(),h()},50):x()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(i,t.event.mouse);const{payload:m,synthetic:h}=xe(i,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(i);return}const w=Math.abs(f),q=Math.abs(d);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&d<0||t.direction.down===!0&&w<q&&d>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,c){if(t.event!==void 0){if(Ce(t,"temp"),V.is.firefox===!0&&qe(e,!1),c===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(xe(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=xe(i===void 0?t.lastEvt:i,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";re(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}V.has.touch===!0&&re(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=it(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),Ce(o,"main"),Ce(o,"temp"),V.is.firefox===!0&&qe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const at=150;var ho=P({name:"QDrawer",inheritAttrs:!1,props:{...eo,...De,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...to,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:l}){const t=H(),{proxy:{$q:i}}=t,c=Qe(e,i),{preventBodyScroll:f}=so(),{registerTimeout:d,removeTimeout:u}=co(),a=Ve(ve,Q);if(a===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let w,q,m;const h=E(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),x=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>x.value===!0?e.miniWidth:e.width),g=E(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),s=v(()=>e.persistent!==!0&&(h.value===!0||bt.value===!0));function p(r,y){if(A(),r!==!1&&a.animate(),z(0),h.value===!0){const $=a.instances[le.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),R(1),a.isContainer.value!==!0&&f(!0)}else R(0),r!==!1&&ye(!1);d(()=>{r!==!1&&ye(!0),y!==!0&&n("show",r)},at)}function b(r,y){ee(),r!==!1&&a.animate(),R(0),z(U.value*L.value),ge(),y!==!0?d(()=>{n("hide",r)},at):u()}const{show:S,hide:B}=oo({showing:g,hideOnRouteChange:s,handleShow:p,handleHide:b}),{addToHistory:A,removeFromHistory:ee}=Zt(g,B,s),F={belowBreakpoint:h,hide:B},M=v(()=>e.side==="right"),U=v(()=>(i.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),We=E(0),Y=E(!1),me=E(!1),Ae=E(L.value*U.value),le=v(()=>M.value===!0?"left":"right"),he=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),pe=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(M.value?"R":"L")>-1||i.platform.is.ios===!0&&a.isContainer.value===!0),te=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),bt=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),yt=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&Y.value===!1?" hidden":"")),gt=v(()=>({backgroundColor:`rgba(0,0,0,${We.value*.4})`})),Fe=v(()=>M.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),wt=v(()=>M.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),qt=v(()=>{const r={};return a.header.space===!0&&Fe.value===!1&&(pe.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&wt.value===!1&&(pe.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),kt=v(()=>{const r={width:`${L.value}px`,transform:`translateX(${Ae.value}px)`};return h.value===!0?r:Object.assign(r,qt.value)}),Ct=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Lt=v(()=>`q-drawer q-drawer--${e.side}`+(me.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(c.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(pe.value===!0||te.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Fe.value===!0?" q-drawer--top-padding":""))),St=v(()=>{const r=i.lang.rtl===!0?e.side:le.value;return[[$e,xt,void 0,{[r]:!0,mouse:!0}]]}),Tt=v(()=>{const r=i.lang.rtl===!0?le.value:e.side;return[[$e,Ie,void 0,{[r]:!0,mouse:!0}]]}),_t=v(()=>{const r=i.lang.rtl===!0?le.value:e.side;return[[$e,Ie,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function be(){$t(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}k(h,r=>{r===!0?(w=g.value,g.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(z(0),R(0),ge()):S(!1))}),k(()=>e.side,(r,y)=>{a.instances[y]===F&&(a.instances[y]=void 0,a[y].space=!1,a[y].offset=0),a.instances[r]=F,a[r].size=L.value,a[r].space=te.value,a[r].offset=he.value}),k(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&be()}),k(()=>e.behavior+e.breakpoint,be),k(a.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&be()}),k(a.scrollbarWidth,()=>{z(g.value===!0?0:void 0)}),k(he,r=>{W("offset",r)}),k(te,r=>{n("onLayout",r),W("space",r)}),k(M,()=>{z()}),k(L,r=>{z(),we(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{we(r,L.value)}),k(()=>i.lang.rtl,()=>{z()}),k(()=>e.mini,()=>{e.modelValue===!0&&(Et(),a.animate())}),k(x,r=>{n("miniState",r)});function z(r){r===void 0?J(()=>{r=g.value===!0?0:L.value,z(U.value*r)}):(a.isContainer.value===!0&&M.value===!0&&(h.value===!0||Math.abs(r)===L.value)&&(r+=U.value*a.scrollbarWidth.value),Ae.value=r)}function R(r){We.value=r}function ye(r){const y=r===!0?"remove":a.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function Et(){clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),me.value=!0,q=setTimeout(()=>{me.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function xt(r){if(g.value!==!1)return;const y=L.value,$=se(r.distance.x,0,y);if(r.isFinal===!0){$>=Math.min(75,y)===!0?S():(a.animate(),R(0),z(U.value*y)),Y.value=!1;return}z((i.lang.rtl===!0?M.value!==!0:M.value)?Math.max(y-$,0):Math.min(0,$-y)),R(se($/y,0,1)),r.isFirst===!0&&(Y.value=!0)}function Ie(r){if(g.value!==!0)return;const y=L.value,$=r.direction===e.side,ae=(i.lang.rtl===!0?$!==!0:$)?se(r.distance.x,0,y):0;if(r.isFinal===!0){Math.abs(ae)<Math.min(75,y)===!0?(a.animate(),R(1),z(0)):B(),Y.value=!1;return}z(U.value*ae),R(se(1-ae/y,0,1)),r.isFirst===!0&&(Y.value=!0)}function ge(){f(!1),ye(!0)}function W(r,y){a.update(e.side,r,y)}function $t(r,y){r.value!==y&&(r.value=y)}function we(r,y){W("size",r===!0?e.miniWidth:y)}return a.instances[e.side]=F,we(e.miniToOverlay,L.value),W("space",te.value),W("offset",he.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),G(()=>{n("onLayout",te.value),n("miniState",x.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?p:b)(!1,!0)};if(a.totalWidth.value!==0){J(r);return}m=k(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?S(!1):r()})}),X(()=>{m!==void 0&&m(),clearTimeout(q),g.value===!0&&ge(),a.instances[e.side]===F&&(a.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Ft(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),St.value)),r.push(Xe("div",{ref:"backdrop",class:yt.value,style:gt.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>_t.value)));const y=x.value===!0&&o.mini!==void 0,$=[C("div",{...l,key:""+y,class:[Ct.value,l.class]},y===!0?o.mini():j(o.default))];return e.elevated===!0&&g.value===!0&&$.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Xe("aside",{ref:"content",class:Lt.value,style:kt.value},$,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Tt.value)),C("div",{class:"q-drawer-container"},r)}}}),po=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=H(),l=Ve(ve,Q);if(l===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;dt(It,!0);const t=v(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>C("div",{class:"q-page-container",style:t.value},j(o.default))}});const{passive:rt}=O,bo=["both","horizontal","vertical"];var yo=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>bo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;k(()=>e.scrollTarget,()=>{d(),f()});function c(){l!==null&&l();const w=Math.max(0,mt(t)),q=ht(t),m={top:w-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:w,left:q},n.directionChanged=n.direction!==h,n.delta=m,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=io(i,e.scrollTarget),t.addEventListener("scroll",u,rt),u(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",u,rt),t=void 0)}function u(w){if(w===!0||e.debounce===0||e.debounce==="0")c();else if(l===null){const[q,m]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];l=()=>{m(q),l=null}}}const{proxy:a}=H();return k(()=>a.$q.lang.rtl,c),G(()=>{i=a.$el.parentNode,f()}),X(()=>{l!==null&&l(),d()}),Object.assign(a,{trigger:u,getPosition:()=>n}),Pe}}),go=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=E(null),i=E(l.screen.height),c=E(e.container===!0?0:l.screen.width),f=E({position:0,direction:"down",inflectionPoint:0}),d=E(0),u=E(ct.value===!0?0:Se()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),q=v(()=>u.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),m=v(()=>u.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function h(b){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};f.value=S,e.onScroll!==void 0&&n("scroll",S)}}function x(b){const{height:S,width:B}=b;let A=!1;i.value!==S&&(A=!0,i.value=S,e.onScrollHeight!==void 0&&n("scrollHeight",S),g()),c.value!==B&&(A=!0,c.value=B),A===!0&&e.onResize!==void 0&&n("resize",b)}function L({height:b}){d.value!==b&&(d.value=b,g())}function g(){if(e.container===!0){const b=i.value>d.value?Se():0;u.value!==b&&(u.value=b)}}let s;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:i,containerHeight:d,scrollbarWidth:u,totalWidth:v(()=>c.value+u.value),rows:v(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ue({size:0,offset:0,space:!1}),right:ue({size:300,offset:0,space:!1}),footer:ue({size:0,offset:0,space:!1}),left:ue({size:300,offset:0,space:!1}),scroll:f,animate(){s!==void 0?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),s=void 0},155)},update(b,S,B){p[b][S]=B}};if(dt(ve,p),Se()>0){let B=function(){b=null,S.classList.remove("hide-scrollbar")},A=function(){if(b===null){if(S.scrollHeight>l.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(B,300)},ee=function(F){b!==null&&F==="remove"&&(clearTimeout(b),B()),window[`${F}EventListener`]("resize",A)},b=null;const S=document.body;k(()=>e.container!==!0?"add":"remove",ee),e.container!==!0&&ee("add"),Nt(()=>{ee("remove")})}return()=>{const b=Dt(o.default,[C(yo,{onScroll:h}),C(ze,{onResize:x})]),S=C("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(ze,{onResize:L}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:m.value},[S])])]):S}}}),fe=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},j(o.default))}}),pt=P({name:"QItem",props:{...De,...Pt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=Qe(e,l),{hasLink:i,linkAttrs:c,linkClass:f,linkTag:d,navigateOnClick:u}=Vt(),a=E(null),w=E(null),q=v(()=>e.clickable===!0||i.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=v(()=>{if(e.insetLevel===void 0)return null;const p=l.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function L(p){m.value===!0&&(w.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),u(p))}function g(p){if(m.value===!0&&Xt(p,13)===!0){Oe(p),p.qKeyEvent=!0;const b=new MouseEvent("click",p);b.qKeyEvent=!0,a.value.dispatchEvent(b)}n("keyup",p)}function s(){const p=ut(o.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:w})),p}return()=>{const p={ref:a,class:h.value,style:x.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,c.value)):q.value===!0&&(p["aria-disabled"]="true"),C(d.value,p,s())}}});const wo=He({name:"EssentialItem",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({name:"About"})},icon:{type:String,default:""}}});function qo(e,o,n,l,t,i){return D(),I(pt,{clickable:"",to:e.to},{default:T(()=>[e.icon?(D(),I(fe,{key:0,avatar:""},{default:T(()=>[_(st,{name:e.icon},null,8,["name"])]),_:1})):ft("",!0),_(fe,null,{default:T(()=>[_(Z,null,{default:T(()=>[N(ie(e.title),1)]),_:1}),_(Z,{caption:""},{default:T(()=>[N(ie(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var ko=Me(wo,[["render",qo]]);const Co=He({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Lo(e,o,n,l,t,i){return D(),I(pt,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:T(()=>[e.icon?(D(),I(fe,{key:0,avatar:""},{default:T(()=>[_(st,{name:e.icon},null,8,["name"])]),_:1})):ft("",!0),_(fe,null,{default:T(()=>[_(Z,null,{default:T(()=>[N(ie(e.title),1)]),_:1}),_(Z,{caption:""},{default:T(()=>[N(ie(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var So=Me(Co,[["render",Lo]]);const To=[{title:"Github",caption:"my github repository",icon:"code",link:"https://github.com/"}],_o=[{title:"About",caption:"about",icon:"description",to:{name:""}},{title:"PixelViewer",caption:"Pixel Viewer",icon:"image",to:{name:"PixelViewer"}}],Eo=He({name:"MainLayout",components:{EssentialLink:So,EssentialItem:ko},setup(){const e=E(!1);return{essentialItems:_o,essentialLinks:To,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function xo(e,o,n,l,t,i){const c=Le("EssentialItem"),f=Le("EssentialLink"),d=Le("router-view");return D(),I(go,{view:"lHh Lpr lFf"},{default:T(()=>[_(Gt,{elevated:""},{default:T(()=>[_(Yt,null,{default:T(()=>[_(Ot,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),_(Ut,null,{default:T(()=>[N(" Thank you for Visiting my Website ")]),_:1}),jt("div",null,"Quasar v"+ie(e.$q.version),1)]),_:1})]),_:1}),_(ho,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=u=>e.leftDrawerOpen=u),"show-if-above":"",bordered:""},{default:T(()=>[_(Jt,null,{default:T(()=>[_(Z,{header:""},{default:T(()=>[N(" Items ")]),_:1}),(D(!0),Ye(Ge,null,Ke(e.essentialItems,u=>(D(),I(c,Je({key:u.title},u),null,16))),128)),_(Z,{header:""},{default:T(()=>[N(" Links ")]),_:1}),(D(!0),Ye(Ge,null,Ke(e.essentialLinks,u=>(D(),I(f,Je({key:u.title},u),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),_(po,null,{default:T(()=>[_(d)]),_:1})]),_:1})}var Oo=Me(Eo,[["render",xo]]);export{Oo as default};
