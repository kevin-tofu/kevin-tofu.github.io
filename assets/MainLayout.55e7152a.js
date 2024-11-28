import{Q as vt}from"./QBtn.cf7cce3a.js";import{j as Q,c as f,h as L,r as $,k as Ne,o as K,l as G,n as _e,m as oe,g as W,p as Te,i as xe,q as M,w as k,s as le,t as mt,u as Y,v as ht,x as ne,y as he,z as Ae,A as pe,B as $e,C as ge,D as pt,E as gt,G as je,H as yt,I as ae,a as bt,J as Be,_ as Ee,K as O,L as V,M as C,d as S,N as Ue,O as H,P as J,Q as ye,R as wt,S as be,U as we,F as ke,V as Ce}from"./index.3e1e399b.js";import{h as Z,a as kt,b as Ve,c as Ct}from"./render.ba6b69bf.js";import{c as qt,u as St,a as Lt,b as Tt,d as $t,e as zt,s as _t,g as xt,f as Bt,h as Et,i as qe,Q as re,j as R,k as Xe}from"./QItem.2a65aa06.js";import{u as Ye,a as Ke}from"./use-dark.f845e496.js";import{u as Ot}from"./use-timeout.5c31cc71.js";import{b as ie}from"./format.b9446fb2.js";import{Q as Ge}from"./Ripple.ad108bb4.js";import"./QSpinner.a3d92988.js";import"./vm.c54416d9.js";var Pt=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:o.value},Z(i.default))}}),Mt=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:o.value,role:"toolbar"},Z(i.default))}});function Qt(){const e=$(!Ne.value);return e.value===!1&&K(()=>{e.value=!0}),{isHydrated:e}}const Je=typeof ResizeObserver!="undefined",He=Je===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ze=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let o=null,u,t={width:-1,height:-1};function n(c){c===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),u){const{offsetWidth:c,offsetHeight:r}=u;(c!==t.width||r!==t.height)&&(t={width:c,height:r},i("resize",t))}}const{proxy:m}=W();if(m.trigger=n,Je===!0){let c;const r=l=>{u=m.$el.parentNode,u?(c=new ResizeObserver(n),c.observe(u),s()):l!==!0&&oe(()=>{r(!0)})};return K(()=>{r()}),G(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():u&&c.unobserve(u))}),_e}else{let l=function(){o!==null&&(clearTimeout(o),o=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",n,Te.passive),r=void 0)},w=function(){l(),u&&u.contentDocument&&(r=u.contentDocument.defaultView,r.addEventListener("resize",n,Te.passive),s())};const{isHydrated:c}=Qt();let r;return K(()=>{oe(()=>{u=m.$el,u&&w()})}),G(l),()=>{if(c.value===!0)return L("object",{class:"q--avoid-card-border",style:He.style,tabindex:-1,type:"text/html",data:He.url,"aria-hidden":"true",onLoad:w})}}}}),Dt=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:o}){const{proxy:{$q:u}}=W(),t=xe(le,M);if(t===M)return console.error("QHeader needs to be child of QLayout"),M;const n=$(parseInt(e.heightHint,10)),s=$(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||u.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return s.value===!0?n.value:0;const d=n.value-t.scroll.value.position;return d>0?d:0}),r=f(()=>e.modelValue!==!0||m.value===!0&&s.value!==!0),l=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),w=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=f(()=>{const d=t.rows.value.top,z={};return d[0]==="l"&&t.left.space===!0&&(z[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(z[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),z});function v(d,z){t.update("header",d,z)}function h(d,z){d.value!==z&&(d.value=z)}function B({height:d}){h(n,d),v("size",d)}function T(d){l.value===!0&&h(s,!0),o("focusin",d)}k(()=>e.modelValue,d=>{v("space",d),h(s,!0),t.animate()}),k(c,d=>{v("offset",d)}),k(()=>e.reveal,d=>{d===!1&&h(s,e.modelValue)}),k(s,d=>{t.animate(),o("reveal",d)}),k(t.scroll,d=>{e.reveal===!0&&h(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&v("size",n.value),v("space",e.modelValue),v("offset",c.value),G(()=>{t.instances.header===y&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const d=kt(i.default,[]);return e.elevated===!0&&d.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(L(ze,{debounce:0,onResize:B})),L("header",{class:w.value,style:b.value,onFocusin:T},d)}}});const At=["ul","ol"];var Vt=Q({name:"QList",props:{...Ye,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:i}){const o=W(),u=Ke(e,o.proxy.$q),t=f(()=>At.includes(e.tag)?null:"list"),n=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:n.value,role:t.value},Z(i.default))}});const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ht=Object.keys(Oe);Oe.all=!0;function Ie(e){const i={};for(const o of Ht)e[o]===!0&&(i[o]=!0);return Object.keys(i).length===0?Oe:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const It=["INPUT","TEXTAREA"];function Fe(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&It.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function Se(e,i,o){const u=$e(e);let t,n=u.left-i.event.x,s=u.top-i.event.y,m=Math.abs(n),c=Math.abs(s);const r=i.direction;r.horizontal===!0&&r.vertical!==!0?t=n<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?t=s<0?"up":"down":r.up===!0&&s<0?(t="up",m>c&&(r.left===!0&&n<0?t="left":r.right===!0&&n>0&&(t="right"))):r.down===!0&&s>0?(t="down",m>c&&(r.left===!0&&n<0?t="left":r.right===!0&&n>0&&(t="right"))):r.left===!0&&n<0?(t="left",m<c&&(r.up===!0&&s<0?t="up":r.down===!0&&s>0&&(t="down"))):r.right===!0&&n>0&&(t="right",m<c&&(r.up===!0&&s<0?t="up":r.down===!0&&s>0&&(t="down")));let l=!1;if(t===void 0&&o===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,l=!0,t==="left"||t==="right"?(u.left-=n,m=0,n=0):(u.top-=s,c=0,s=0)}return{synthetic:l,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:u,direction:t,isFirst:i.event.isFirst,isFinal:o===!0,duration:Date.now()-i.event.time,distance:{x:m,y:c},offset:{x:n,y:s},delta:{x:u.left-i.event.lastX,y:u.top-i.event.lastY}}}}let Ft=0;var Le=mt({name:"touch-pan",beforeMount(e,{value:i,modifiers:o}){if(o.mouse!==!0&&Y.has.touch!==!0)return;function u(n,s){o.mouse===!0&&s===!0?pt(n):(o.stop===!0&&pe(n),o.prevent===!0&&Ae(n))}const t={uid:"qvtp_"+Ft++,handler:i,modifiers:o,direction:Ie(o),noop:_e,mouseStart(n){Fe(n,t)&&ht(n)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Fe(n,t)){const s=n.target;ne(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(Y.is.firefox===!0&&he(e,!0),t.lastEvt=n,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const r=n.type.indexOf("mouse")!==-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&Ae(r),n.cancelBubble===!0&&pe(r),Object.assign(r,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:r}}pe(n)}const{left:m,top:c}=$e(n);t.event={x:m,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(n){if(t.event===void 0)return;const s=$e(n),m=s.left-t.event.x,c=s.top-t.event.y;if(m===0&&c===0)return;t.lastEvt=n;const r=t.event.mouse===!0,l=()=>{u(n,r);let v;o.preserveCursor!==!0&&o.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),qt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),r===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{B(),h()},50):B()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(n,t.event.mouse);const{payload:v,synthetic:h}=Se(n,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=h===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||r===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(n);return}const w=Math.abs(m),b=Math.abs(c);w!==b&&(t.direction.horizontal===!0&&w>b||t.direction.vertical===!0&&w<b||t.direction.up===!0&&w<b&&c<0||t.direction.down===!0&&w<b&&c>0||t.direction.left===!0&&w>b&&m<0||t.direction.right===!0&&w>b&&m>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(ge(t,"temp"),Y.is.firefox===!0&&he(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Se(n===void 0?t.lastEvt:n,t).payload);const{payload:m}=Se(n===void 0?t.lastEvt:n,t,!0),c=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const n=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";ne(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}Y.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const o=e.__qtouchpan;o!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&o.end(),o.handler=i.value),o.direction=Ie(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),ge(i,"main"),ge(i,"temp"),Y.is.firefox===!0&&he(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Re=150;var Rt=Q({name:"QDrawer",inheritAttrs:!1,props:{...St,...Ye,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Lt,"onLayout","miniState"],setup(e,{slots:i,emit:o,attrs:u}){const t=W(),{proxy:{$q:n}}=t,s=Ke(e,n),{preventBodyScroll:m}=zt(),{registerTimeout:c,removeTimeout:r}=Ot(),l=xe(le,M);if(l===M)return console.error("QDrawer needs to be child of QLayout"),M;let w,b=null,v;const h=$(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),B=f(()=>e.mini===!0&&h.value!==!0),T=f(()=>B.value===!0?e.miniWidth:e.width),y=$(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),d=f(()=>e.persistent!==!0&&(h.value===!0||Ze.value===!0));function z(a,p){if(I(),a!==!1&&l.animate(),E(0),h.value===!0){const _=l.instances[ee.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),D(1),l.isContainer.value!==!0&&m(!0)}else D(0),a!==!1&&fe(!1);c(()=>{a!==!1&&fe(!0),p!==!0&&o("show",a)},Re)}function g(a,p){U(),a!==!1&&l.animate(),D(0),E(N.value*T.value),ve(),p!==!0?c(()=>{o("hide",a)},Re):r()}const{show:q,hide:x}=Tt({showing:y,hideOnRouteChange:d,handleShow:z,handleHide:g}),{addToHistory:I,removeFromHistory:U}=$t(y,x,d),F={belowBreakpoint:h,hide:x},P=f(()=>e.side==="right"),N=f(()=>(n.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),Pe=$(0),j=$(!1),ue=$(!1),Me=$(T.value*N.value),ee=f(()=>P.value===!0?"left":"right"),se=f(()=>y.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),ce=f(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(P.value?"R":"L")!==-1||n.platform.is.ios===!0&&l.isContainer.value===!0),X=f(()=>e.overlay===!1&&y.value===!0&&h.value===!1),Ze=f(()=>e.overlay===!0&&y.value===!0&&h.value===!1),et=f(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&j.value===!1?" hidden":"")),tt=f(()=>({backgroundColor:`rgba(0,0,0,${Pe.value*.4})`})),Qe=f(()=>P.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),nt=f(()=>P.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),at=f(()=>{const a={};return l.header.space===!0&&Qe.value===!1&&(ce.value===!0?a.top=`${l.header.offset}px`:l.header.space===!0&&(a.top=`${l.header.size}px`)),l.footer.space===!0&&nt.value===!1&&(ce.value===!0?a.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(a.bottom=`${l.footer.size}px`)),a}),it=f(()=>{const a={width:`${T.value}px`,transform:`translateX(${Me.value}px)`};return h.value===!0?a:Object.assign(a,at.value)}),ot=f(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),rt=f(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(ce.value===!0||X.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),lt=f(()=>{const a=n.lang.rtl===!0?e.side:ee.value;return[[Le,dt,void 0,{[a]:!0,mouse:!0}]]}),ut=f(()=>{const a=n.lang.rtl===!0?ee.value:e.side;return[[Le,De,void 0,{[a]:!0,mouse:!0}]]}),st=f(()=>{const a=n.lang.rtl===!0?ee.value:e.side;return[[Le,De,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){ft(h,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}k(h,a=>{a===!0?(w=y.value,y.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?(E(0),D(0),ve()):q(!1))}),k(()=>e.side,(a,p)=>{l.instances[p]===F&&(l.instances[p]=void 0,l[p].space=!1,l[p].offset=0),l.instances[a]=F,l[a].size=T.value,l[a].space=X.value,l[a].offset=se.value}),k(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),k(()=>e.behavior+e.breakpoint,de),k(l.isContainer,a=>{y.value===!0&&m(a!==!0),a===!0&&de()}),k(l.scrollbarWidth,()=>{E(y.value===!0?0:void 0)}),k(se,a=>{A("offset",a)}),k(X,a=>{o("onLayout",a),A("space",a)}),k(P,()=>{E()}),k(T,a=>{E(),me(e.miniToOverlay,a)}),k(()=>e.miniToOverlay,a=>{me(a,T.value)}),k(()=>n.lang.rtl,()=>{E()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ct(),l.animate())}),k(B,a=>{o("miniState",a)});function E(a){a===void 0?oe(()=>{a=y.value===!0?0:T.value,E(N.value*a)}):(l.isContainer.value===!0&&P.value===!0&&(h.value===!0||Math.abs(a)===T.value)&&(a+=N.value*l.scrollbarWidth.value),Me.value=a)}function D(a){Pe.value=a}function fe(a){const p=a===!0?"remove":l.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function ct(){b!==null&&clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,b=setTimeout(()=>{b=null,ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function dt(a){if(y.value!==!1)return;const p=T.value,_=ie(a.distance.x,0,p);if(a.isFinal===!0){_>=Math.min(75,p)===!0?q():(l.animate(),D(0),E(N.value*p)),j.value=!1;return}E((n.lang.rtl===!0?P.value!==!0:P.value)?Math.max(p-_,0):Math.min(0,_-p)),D(ie(_/p,0,1)),a.isFirst===!0&&(j.value=!0)}function De(a){if(y.value!==!0)return;const p=T.value,_=a.direction===e.side,te=(n.lang.rtl===!0?_!==!0:_)?ie(a.distance.x,0,p):0;if(a.isFinal===!0){Math.abs(te)<Math.min(75,p)===!0?(l.animate(),D(1),E(0)):x(),j.value=!1;return}E(N.value*te),D(ie(1-te/p,0,1)),a.isFirst===!0&&(j.value=!0)}function ve(){m(!1),fe(!0)}function A(a,p){l.update(e.side,a,p)}function ft(a,p){a.value!==p&&(a.value=p)}function me(a,p){A("size",a===!0?e.miniWidth:p)}return l.instances[e.side]=F,me(e.miniToOverlay,T.value),A("space",X.value),A("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),K(()=>{o("onLayout",X.value),o("miniState",B.value),w=e.showIfAbove===!0;const a=()=>{(y.value===!0?z:g)(!1,!0)};if(l.totalWidth.value!==0){oe(a);return}v=k(l.totalWidth,()=>{v(),v=void 0,y.value===!1&&e.showIfAbove===!0&&h.value===!1?q(!1):a()})}),G(()=>{v!==void 0&&v(),b!==null&&(clearTimeout(b),b=null),y.value===!0&&ve(),l.instances[e.side]===F&&(l.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(gt(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),lt.value)),a.push(Ve("div",{ref:"backdrop",class:et.value,style:tt.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>st.value)));const p=B.value===!0&&i.mini!==void 0,_=[L("div",{...u,key:""+p,class:[ot.value,u.class]},p===!0?i.mini():Z(i.default))];return e.elevated===!0&&y.value===!0&&_.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Ve("aside",{ref:"content",class:rt.value,style:it.value},_,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>ut.value)),L("div",{class:"q-drawer-container"},a)}}}),Wt=Q({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:o}}=W(),u=xe(le,M);if(u===M)return console.error("QPageContainer needs to be child of QLayout"),M;je(yt,!0);const t=f(()=>{const n={};return u.header.space===!0&&(n.paddingTop=`${u.header.size}px`),u.right.space===!0&&(n[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(n.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(n[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),n});return()=>L("div",{class:"q-page-container",style:t.value},Z(i.default))}});const{passive:We}=Te,Nt=["both","horizontal","vertical"];var jt=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Nt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:_t},emits:["scroll"],setup(e,{emit:i}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,n;k(()=>e.scrollTarget,()=>{c(),m()});function s(){u!==null&&u();const w=Math.max(0,Bt(t)),b=Et(t),v={top:w-o.position.top,left:b-o.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const h=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";o.position={top:w,left:b},o.directionChanged=o.direction!==h,o.delta=v,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),i("scroll",{...o})}function m(){t=xt(n,e.scrollTarget),t.addEventListener("scroll",r,We),r(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",r,We),t=void 0)}function r(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[b,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{v(b),u=null}}}const{proxy:l}=W();return k(()=>l.$q.lang.rtl,s),K(()=>{n=l.$el.parentNode,m()}),G(()=>{u!==null&&u(),c()}),Object.assign(l,{trigger:r,getPosition:()=>o}),_e}}),Ut=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:o}){const{proxy:{$q:u}}=W(),t=$(null),n=$(u.screen.height),s=$(e.container===!0?0:u.screen.width),m=$({position:0,direction:"down",inflectionPoint:0}),c=$(0),r=$(Ne.value===!0?0:qe()),l=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=f(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),b=f(()=>r.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),v=f(()=>r.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function h(g){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};m.value=q,e.onScroll!==void 0&&o("scroll",q)}}function B(g){const{height:q,width:x}=g;let I=!1;n.value!==q&&(I=!0,n.value=q,e.onScrollHeight!==void 0&&o("scrollHeight",q),y()),s.value!==x&&(I=!0,s.value=x),I===!0&&e.onResize!==void 0&&o("resize",g)}function T({height:g}){c.value!==g&&(c.value=g,y())}function y(){if(e.container===!0){const g=n.value>c.value?qe():0;r.value!==g&&(r.value=g)}}let d=null;const z={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:n,containerHeight:c,scrollbarWidth:r,totalWidth:f(()=>s.value+r.value),rows:f(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:ae({size:0,offset:0,space:!1}),right:ae({size:300,offset:0,space:!1}),footer:ae({size:0,offset:0,space:!1}),left:ae({size:300,offset:0,space:!1}),scroll:m,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,q,x){z[g][q]=x}};if(je(le,z),qe()>0){let x=function(){g=null,q.classList.remove("hide-scrollbar")},I=function(){if(g===null){if(q.scrollHeight>u.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(x,300)},U=function(F){g!==null&&F==="remove"&&(clearTimeout(g),x()),window[`${F}EventListener`]("resize",I)},g=null;const q=document.body;k(()=>e.container!==!0?"add":"remove",U),e.container!==!0&&U("add"),bt(()=>{U("remove")})}return()=>{const g=Ct(i.default,[L(jt,{onScroll:h}),L(ze,{onResize:B})]),q=L("div",{class:l.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(ze,{onResize:T}),L("div",{class:"absolute-full",style:b.value},[L("div",{class:"scroll",style:v.value},[q])])]):q}}});const Xt=Be({name:"EssentialItem",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({name:"About"})},icon:{type:String,default:""}}});function Yt(e,i,o,u,t,n){return O(),V(Xe,{clickable:"",to:e.to},{default:C(()=>[e.icon?(O(),V(re,{key:0,avatar:""},{default:C(()=>[S(Ge,{name:e.icon},null,8,["name"])]),_:1})):Ue("",!0),S(re,null,{default:C(()=>[S(R,null,{default:C(()=>[H(J(e.title),1)]),_:1}),S(R,{caption:""},{default:C(()=>[H(J(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Kt=Ee(Xt,[["render",Yt]]);const Gt=Be({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Jt(e,i,o,u,t,n){return O(),V(Xe,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:C(()=>[e.icon?(O(),V(re,{key:0,avatar:""},{default:C(()=>[S(Ge,{name:e.icon},null,8,["name"])]),_:1})):Ue("",!0),S(re,null,{default:C(()=>[S(R,null,{default:C(()=>[H(J(e.title),1)]),_:1}),S(R,{caption:""},{default:C(()=>[H(J(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Zt=Ee(Gt,[["render",Jt]]);const en=[{title:"Github",caption:"my github repository",icon:"code",link:"https://github.com/kevin-tofu"},{title:"LinkedIn",caption:"My LinkedIn profiole",icon:"face",link:"https://linkedin.com/in/kohei-watanabe-694373172/"}],tn=[{title:"Home",caption:"home",icon:"home",to:{name:"IndexPage"}},{title:"Machine Learning",caption:"machine learning",icon:"psychology",to:{name:"ArticleProcessing"}},{title:"Tech-Tips",caption:"tips",icon:"computer",to:{name:"ArticleTech"}},{title:"Quantum",caption:"quantum",icon:"memory",to:{name:"ArticleQuantum"}},{title:"Culture",caption:"culture",icon:"collections",to:{name:"ArticleCulture"}},{title:"Japan",caption:"japan",icon:"translate",to:{name:"ArticleJapan"}},{title:"About",caption:"about",icon:"email",to:{name:"AboutPage"}}],nn=[{title:"Pixel Viewer",caption:"check pixel coordinate",icon:"image",to:{name:"PixelViewer"}},{title:"Image Resizer",caption:"check pixel coordinate",icon:"image",to:{name:"ImageResizer"}},{title:"TextLength Counter",caption:"",icon:"description",to:{name:"TextlengthCounter"}}],an=Be({name:"MainLayout",components:{EssentialLink:Zt,EssentialItem:Kt},setup(){const e=$(!1);return{essentialItems0:tn,essentialItems1:nn,essentialLinks:en,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function on(e,i,o,u,t,n){const s=ye("EssentialItem"),m=ye("EssentialLink"),c=ye("router-view");return O(),V(Ut,{view:"lHh Lpr lFf"},{default:C(()=>[S(Dt,{elevated:""},{default:C(()=>[S(Mt,null,{default:C(()=>[S(vt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),S(Pt,null,{default:C(()=>[H(" Welcome to My Github Website ")]),_:1}),wt("div",null,"v"+J(e.$q.version),1)]),_:1})]),_:1}),S(Rt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=r=>e.leftDrawerOpen=r),"show-if-above":"",bordered:""},{default:C(()=>[S(Vt,null,{default:C(()=>[S(R,{header:""},{default:C(()=>[H("Items")]),_:1}),(O(!0),be(ke,null,we(e.essentialItems0,r=>(O(),V(s,Ce({key:r.title},r),null,16))),128)),S(R,{header:""},{default:C(()=>[H("Tools")]),_:1}),(O(!0),be(ke,null,we(e.essentialItems1,r=>(O(),V(s,Ce({key:r.title},r),null,16))),128)),S(R,{header:""},{default:C(()=>[H("Links")]),_:1}),(O(!0),be(ke,null,we(e.essentialLinks,r=>(O(),V(m,Ce({key:r.title},r),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),S(Wt,null,{default:C(()=>[S(c)]),_:1})]),_:1})}var gn=Ee(an,[["render",on]]);export{gn as default};
