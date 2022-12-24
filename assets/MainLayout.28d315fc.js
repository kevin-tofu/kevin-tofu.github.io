import{Q as vt}from"./QBtn.bed473eb.js";import{c as D,h as Z,a as mt,b as ht,d as Oe,e as pt}from"./QSpinner.9f08ec23.js";import{c as f,h as S,r as z,i as Ne,o as G,a as K,n as Le,d as oe,g as R,l as qe,e as $e,f as Q,w,j as le,k as Y,m as gt,p as ae,q as he,s as Qe,t as pe,u as Ce,v as ge,x as yt,y as bt,z as je,A as wt,B as ne,C as kt,D as ze,_ as _e,E as O,F as A,G as C,H as L,I as Ue,J as F,K as J,L as ye,M as qt,N as De,O as Me,P as Ve,Q as He}from"./index.bb93afda.js";import{c as Ct,u as St,a as Lt,b as $t,d as zt,e as _t,f as Tt,g as xt,h as Bt,i as Pt,j as be,Q as re,k as j,l as Xe}from"./QItem.4ce91415.js";import{u as Ye,a as Ge}from"./use-dark.f08b5f84.js";import{b as ie}from"./format.2a3572e1.js";import{Q as Ke}from"./Ripple.3d052447.js";var Et=D({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:o.value},Z(i.default))}}),Ot=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:o.value,role:"toolbar"},Z(i.default))}});function Qt(){const e=z(!Ne.value);return e.value===!1&&G(()=>{e.value=!0}),e}const Je=typeof ResizeObserver!="undefined",Ie=Je===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Se=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let o=null,u,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(clearTimeout(o),o=null,u){const{offsetWidth:c,offsetHeight:r}=u;(c!==t.width||r!==t.height)&&(t={width:c,height:r},i("resize",t))}}const{proxy:m}=R();if(Je===!0){let c;const r=l=>{u=m.$el.parentNode,u?(c=new ResizeObserver(a),c.observe(u),s()):l!==!0&&oe(()=>{r(!0)})};return G(()=>{r()}),K(()=>{clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():u&&c.unobserve(u))}),Le}else{let l=function(){clearTimeout(o),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",a,qe.passive),r=void 0)},b=function(){l(),u&&u.contentDocument&&(r=u.contentDocument.defaultView,r.addEventListener("resize",a,qe.passive),s())};const c=Qt();let r;return G(()=>{oe(()=>{u=m.$el,u&&b()})}),K(l),m.trigger=a,()=>{if(c.value===!0)return S("object",{style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:b})}}}}),Dt=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:o}){const{proxy:{$q:u}}=R(),t=$e(le,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const a=z(parseInt(e.heightHint,10)),s=z(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||u.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return s.value===!0?a.value:0;const d=a.value-t.scroll.value.position;return d>0?d:0}),r=f(()=>e.modelValue!==!0||m.value===!0&&s.value!==!0),l=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),b=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=f(()=>{const d=t.rows.value.top,_={};return d[0]==="l"&&t.left.space===!0&&(_[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(_[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),_});function v(d,_){t.update("header",d,_)}function h(d,_){d.value!==_&&(d.value=_)}function B({height:d}){h(a,d),v("size",d)}function $(d){l.value===!0&&h(s,!0),o("focusin",d)}w(()=>e.modelValue,d=>{v("space",d),h(s,!0),t.animate()}),w(c,d=>{v("offset",d)}),w(()=>e.reveal,d=>{d===!1&&h(s,e.modelValue)}),w(s,d=>{t.animate(),o("reveal",d)}),w(t.scroll,d=>{e.reveal===!0&&h(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&v("size",a.value),v("space",e.modelValue),v("offset",c.value),K(()=>{t.instances.header===y&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const d=mt(i.default,[]);return e.elevated===!0&&d.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(S(Se,{debounce:0,onResize:B})),S("header",{class:b.value,style:k.value,onFocusin:$},d)}}}),Mt=D({name:"QList",props:{...Ye,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:i}){const o=R(),u=Ge(e,o.proxy.$q),t=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:t.value},Z(i.default))}});const Te={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Vt=Object.keys(Te);Te.all=!0;function Ae(e){const i={};for(const o of Vt)e[o]===!0&&(i[o]=!0);return Object.keys(i).length===0?Te:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}function Fe(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function we(e,i,o){const u=Ce(e);let t,a=u.left-i.event.x,s=u.top-i.event.y,m=Math.abs(a),c=Math.abs(s);const r=i.direction;r.horizontal===!0&&r.vertical!==!0?t=a<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?t=s<0?"up":"down":r.up===!0&&s<0?(t="up",m>c&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.down===!0&&s>0?(t="down",m>c&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.left===!0&&a<0?(t="left",m<c&&(r.up===!0&&s<0?t="up":r.down===!0&&s>0&&(t="down"))):r.right===!0&&a>0&&(t="right",m<c&&(r.up===!0&&s<0?t="up":r.down===!0&&s>0&&(t="down")));let l=!1;if(t===void 0&&o===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,l=!0,t==="left"||t==="right"?(u.left-=a,m=0,a=0):(u.top-=s,c=0,s=0)}return{synthetic:l,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:u,direction:t,isFirst:i.event.isFirst,isFinal:o===!0,duration:Date.now()-i.event.time,distance:{x:m,y:c},offset:{x:a,y:s},delta:{x:u.left-i.event.lastX,y:u.top-i.event.lastY}}}}let Ht=0;var ke=ht({name:"touch-pan",beforeMount(e,{value:i,modifiers:o}){if(o.mouse!==!0&&Y.has.touch!==!0)return;function u(a,s){o.mouse===!0&&s===!0?yt(a):(o.stop===!0&&pe(a),o.prevent===!0&&Qe(a))}const t={uid:"qvtp_"+Ht++,handler:i,modifiers:o,direction:Ae(o),noop:Le,mouseStart(a){Fe(a,t)&&gt(a)&&(ae(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Fe(a,t)){const s=a.target;ae(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(Y.is.firefox===!0&&he(e,!0),t.lastEvt=a,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const r=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Qe(r),a.cancelBubble===!0&&pe(r),Object.assign(r,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:r}}pe(a)}const{left:m,top:c}=Ce(a);t.event={x:m,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(a){if(t.event===void 0)return;const s=Ce(a),m=s.left-t.event.x,c=s.top-t.event.y;if(m===0&&c===0)return;t.lastEvt=a;const r=t.event.mouse===!0,l=()=>{u(a,r);let v;o.preserveCursor!==!0&&o.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ct(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),r===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{B(),h()},50):B()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:v,synthetic:h}=we(a,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=h===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||r===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(a);return}const b=Math.abs(m),k=Math.abs(c);b!==k&&(t.direction.horizontal===!0&&b>k||t.direction.vertical===!0&&b<k||t.direction.up===!0&&b<k&&c<0||t.direction.down===!0&&b<k&&c>0||t.direction.left===!0&&b>k&&m<0||t.direction.right===!0&&b>k&&m>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ge(t,"temp"),Y.is.firefox===!0&&he(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(we(a===void 0?t.lastEvt:a,t).payload);const{payload:m}=we(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";ae(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}Y.has.touch===!0&&ae(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const o=e.__qtouchpan;o!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&o.end(),o.handler=i.value),o.direction=Ae(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),ge(i,"main"),ge(i,"temp"),Y.is.firefox===!0&&he(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Re=150;var It=D({name:"QDrawer",inheritAttrs:!1,props:{...St,...Ye,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Lt,"onLayout","miniState"],setup(e,{slots:i,emit:o,attrs:u}){const t=R(),{proxy:{$q:a}}=t,s=Ge(e,a),{preventBodyScroll:m}=Tt(),{registerTimeout:c,removeTimeout:r}=$t(),l=$e(le,Q);if(l===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let b,k,v;const h=z(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),B=f(()=>e.mini===!0&&h.value!==!0),$=f(()=>B.value===!0?e.miniWidth:e.width),y=z(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),d=f(()=>e.persistent!==!0&&(h.value===!0||Ze.value===!0));function _(n,p){if(H(),n!==!1&&l.animate(),P(0),h.value===!0){const T=l.instances[ee.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),M(1),l.isContainer.value!==!0&&m(!0)}else M(0),n!==!1&&fe(!1);c(()=>{n!==!1&&fe(!0),p!==!0&&o("show",n)},Re)}function g(n,p){U(),n!==!1&&l.animate(),M(0),P(W.value*$.value),ve(),p!==!0?c(()=>{o("hide",n)},Re):r()}const{show:q,hide:x}=zt({showing:y,hideOnRouteChange:d,handleShow:_,handleHide:g}),{addToHistory:H,removeFromHistory:U}=_t(y,x,d),I={belowBreakpoint:h,hide:x},E=f(()=>e.side==="right"),W=f(()=>(a.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),xe=z(0),N=z(!1),ue=z(!1),Be=z($.value*W.value),ee=f(()=>E.value===!0?"left":"right"),se=f(()=>y.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:$.value:0),ce=f(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(E.value?"R":"L")>-1||a.platform.is.ios===!0&&l.isContainer.value===!0),X=f(()=>e.overlay===!1&&y.value===!0&&h.value===!1),Ze=f(()=>e.overlay===!0&&y.value===!0&&h.value===!1),et=f(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&N.value===!1?" hidden":"")),tt=f(()=>({backgroundColor:`rgba(0,0,0,${xe.value*.4})`})),Pe=f(()=>E.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),at=f(()=>E.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),nt=f(()=>{const n={};return l.header.space===!0&&Pe.value===!1&&(ce.value===!0?n.top=`${l.header.offset}px`:l.header.space===!0&&(n.top=`${l.header.size}px`)),l.footer.space===!0&&at.value===!1&&(ce.value===!0?n.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(n.bottom=`${l.footer.size}px`)),n}),it=f(()=>{const n={width:`${$.value}px`,transform:`translateX(${Be.value}px)`};return h.value===!0?n:Object.assign(n,nt.value)}),ot=f(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),rt=f(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(ce.value===!0||X.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Pe.value===!0?" q-drawer--top-padding":""))),lt=f(()=>{const n=a.lang.rtl===!0?e.side:ee.value;return[[ke,dt,void 0,{[n]:!0,mouse:!0}]]}),ut=f(()=>{const n=a.lang.rtl===!0?ee.value:e.side;return[[ke,Ee,void 0,{[n]:!0,mouse:!0}]]}),st=f(()=>{const n=a.lang.rtl===!0?ee.value:e.side;return[[ke,Ee,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){ft(h,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}w(h,n=>{n===!0?(b=y.value,y.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&b!==!1&&(y.value===!0?(P(0),M(0),ve()):q(!1))}),w(()=>e.side,(n,p)=>{l.instances[p]===I&&(l.instances[p]=void 0,l[p].space=!1,l[p].offset=0),l.instances[n]=I,l[n].size=$.value,l[n].space=X.value,l[n].offset=se.value}),w(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),w(()=>e.behavior+e.breakpoint,de),w(l.isContainer,n=>{y.value===!0&&m(n!==!0),n===!0&&de()}),w(l.scrollbarWidth,()=>{P(y.value===!0?0:void 0)}),w(se,n=>{V("offset",n)}),w(X,n=>{o("onLayout",n),V("space",n)}),w(E,()=>{P()}),w($,n=>{P(),me(e.miniToOverlay,n)}),w(()=>e.miniToOverlay,n=>{me(n,$.value)}),w(()=>a.lang.rtl,()=>{P()}),w(()=>e.mini,()=>{e.modelValue===!0&&(ct(),l.animate())}),w(B,n=>{o("miniState",n)});function P(n){n===void 0?oe(()=>{n=y.value===!0?0:$.value,P(W.value*n)}):(l.isContainer.value===!0&&E.value===!0&&(h.value===!0||Math.abs(n)===$.value)&&(n+=W.value*l.scrollbarWidth.value),Be.value=n)}function M(n){xe.value=n}function fe(n){const p=n===!0?"remove":l.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function ct(){clearTimeout(k),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,k=setTimeout(()=>{ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function dt(n){if(y.value!==!1)return;const p=$.value,T=ie(n.distance.x,0,p);if(n.isFinal===!0){T>=Math.min(75,p)===!0?q():(l.animate(),M(0),P(W.value*p)),N.value=!1;return}P((a.lang.rtl===!0?E.value!==!0:E.value)?Math.max(p-T,0):Math.min(0,T-p)),M(ie(T/p,0,1)),n.isFirst===!0&&(N.value=!0)}function Ee(n){if(y.value!==!0)return;const p=$.value,T=n.direction===e.side,te=(a.lang.rtl===!0?T!==!0:T)?ie(n.distance.x,0,p):0;if(n.isFinal===!0){Math.abs(te)<Math.min(75,p)===!0?(l.animate(),M(1),P(0)):x(),N.value=!1;return}P(W.value*te),M(ie(1-te/p,0,1)),n.isFirst===!0&&(N.value=!0)}function ve(){m(!1),fe(!0)}function V(n,p){l.update(e.side,n,p)}function ft(n,p){n.value!==p&&(n.value=p)}function me(n,p){V("size",n===!0?e.miniWidth:p)}return l.instances[e.side]=I,me(e.miniToOverlay,$.value),V("space",X.value),V("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),G(()=>{o("onLayout",X.value),o("miniState",B.value),b=e.showIfAbove===!0;const n=()=>{(y.value===!0?_:g)(!1,!0)};if(l.totalWidth.value!==0){oe(n);return}v=w(l.totalWidth,()=>{v(),v=void 0,y.value===!1&&e.showIfAbove===!0&&h.value===!1?q(!1):n()})}),K(()=>{v!==void 0&&v(),clearTimeout(k),y.value===!0&&ve(),l.instances[e.side]===I&&(l.instances[e.side]=void 0,V("size",0),V("offset",0),V("space",!1))}),()=>{const n=[];h.value===!0&&(e.noSwipeOpen===!1&&n.push(bt(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),lt.value)),n.push(Oe("div",{ref:"backdrop",class:et.value,style:tt.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>st.value)));const p=B.value===!0&&i.mini!==void 0,T=[S("div",{...u,key:""+p,class:[ot.value,u.class]},p===!0?i.mini():Z(i.default))];return e.elevated===!0&&y.value===!0&&T.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(Oe("aside",{ref:"content",class:rt.value,style:it.value},T,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>ut.value)),S("div",{class:"q-drawer-container"},n)}}}),At=D({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:o}}=R(),u=$e(le,Q);if(u===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;je(wt,!0);const t=f(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:t.value},Z(i.default))}});const{passive:We}=qe,Ft=["both","horizontal","vertical"];var Rt=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ft.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;w(()=>e.scrollTarget,()=>{c(),m()});function s(){u!==null&&u();const b=Math.max(0,Bt(t)),k=Pt(t),v={top:b-o.position.top,left:k-o.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const h=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";o.position={top:b,left:k},o.directionChanged=o.direction!==h,o.delta=v,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),i("scroll",{...o})}function m(){t=xt(a,e.scrollTarget),t.addEventListener("scroll",r,We),r(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",r,We),t=void 0)}function r(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[k,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{v(k),u=null}}}const{proxy:l}=R();return w(()=>l.$q.lang.rtl,s),G(()=>{a=l.$el.parentNode,m()}),K(()=>{u!==null&&u(),c()}),Object.assign(l,{trigger:r,getPosition:()=>o}),Le}}),Wt=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:o}){const{proxy:{$q:u}}=R(),t=z(null),a=z(u.screen.height),s=z(e.container===!0?0:u.screen.width),m=z({position:0,direction:"down",inflectionPoint:0}),c=z(0),r=z(Ne.value===!0?0:be()),l=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),k=f(()=>r.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),v=f(()=>r.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function h(g){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};m.value=q,e.onScroll!==void 0&&o("scroll",q)}}function B(g){const{height:q,width:x}=g;let H=!1;a.value!==q&&(H=!0,a.value=q,e.onScrollHeight!==void 0&&o("scrollHeight",q),y()),s.value!==x&&(H=!0,s.value=x),H===!0&&e.onResize!==void 0&&o("resize",g)}function $({height:g}){c.value!==g&&(c.value=g,y())}function y(){if(e.container===!0){const g=a.value>c.value?be():0;r.value!==g&&(r.value=g)}}let d;const _={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:r,totalWidth:f(()=>s.value+r.value),rows:f(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:m,animate(){d!==void 0?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),d=void 0},155)},update(g,q,x){_[g][q]=x}};if(je(le,_),be()>0){let x=function(){g=null,q.classList.remove("hide-scrollbar")},H=function(){if(g===null){if(q.scrollHeight>u.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(x,300)},U=function(I){g!==null&&I==="remove"&&(clearTimeout(g),x()),window[`${I}EventListener`]("resize",H)},g=null;const q=document.body;w(()=>e.container!==!0?"add":"remove",U),e.container!==!0&&U("add"),kt(()=>{U("remove")})}return()=>{const g=pt(i.default,[S(Rt,{onScroll:h}),S(Se,{onResize:B})]),q=S("div",{class:l.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(Se,{onResize:$}),S("div",{class:"absolute-full",style:k.value},[S("div",{class:"scroll",style:v.value},[q])])]):q}}});const Nt=ze({name:"EssentialItem",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({name:"About"})},icon:{type:String,default:""}}});function jt(e,i,o,u,t,a){return O(),A(Xe,{clickable:"",to:e.to},{default:C(()=>[e.icon?(O(),A(re,{key:0,avatar:""},{default:C(()=>[L(Ke,{name:e.icon},null,8,["name"])]),_:1})):Ue("",!0),L(re,null,{default:C(()=>[L(j,null,{default:C(()=>[F(J(e.title),1)]),_:1}),L(j,{caption:""},{default:C(()=>[F(J(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Ut=_e(Nt,[["render",jt]]);const Xt=ze({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Yt(e,i,o,u,t,a){return O(),A(Xe,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:C(()=>[e.icon?(O(),A(re,{key:0,avatar:""},{default:C(()=>[L(Ke,{name:e.icon},null,8,["name"])]),_:1})):Ue("",!0),L(re,null,{default:C(()=>[L(j,null,{default:C(()=>[F(J(e.title),1)]),_:1}),L(j,{caption:""},{default:C(()=>[F(J(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Gt=_e(Xt,[["render",Yt]]);const Kt=[{title:"Github",caption:"my github repository",icon:"code",link:"https://github.com/"},{title:"LinkedIn",caption:"My LinkedIn profiole",icon:"face",link:"https://linkedin.com/in/kohei-watanabe-694373172/"}],Jt=[{title:"Home",caption:"home",icon:"home",to:{name:"IndexPage"}},{title:"PixelViewer",caption:"check pixel coordinate",icon:"image",to:{name:"PixelViewer"}},{title:"ArticlePage",caption:"",icon:"newspaper",to:{name:"ArticlePage"}},{title:"GarallyPage",caption:"",icon:"collections",to:{name:"GarallyPage"}},{title:"About",caption:"about",icon:"email",to:{name:"AboutPage"}}],Zt=ze({name:"MainLayout",components:{EssentialLink:Gt,EssentialItem:Ut},setup(){const e=z(!1);return{essentialItems:Jt,essentialLinks:Kt,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function ea(e,i,o,u,t,a){const s=ye("EssentialItem"),m=ye("EssentialLink"),c=ye("router-view");return O(),A(Wt,{view:"lHh Lpr lFf"},{default:C(()=>[L(Dt,{elevated:""},{default:C(()=>[L(Ot,null,{default:C(()=>[L(vt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),L(Et,null,{default:C(()=>[F(" Welcome to My Github Website ")]),_:1}),qt("div",null,"Quasar v"+J(e.$q.version),1)]),_:1})]),_:1}),L(It,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=r=>e.leftDrawerOpen=r),"show-if-above":"",bordered:""},{default:C(()=>[L(Mt,null,{default:C(()=>[L(j,{header:""},{default:C(()=>[F(" Items ")]),_:1}),(O(!0),De(He,null,Me(e.essentialItems,r=>(O(),A(s,Ve({key:r.title},r),null,16))),128)),L(j,{header:""},{default:C(()=>[F(" Links ")]),_:1}),(O(!0),De(He,null,Me(e.essentialLinks,r=>(O(),A(m,Ve({key:r.title},r),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),L(At,null,{default:C(()=>[L(c)]),_:1})]),_:1})}var sa=_e(Zt,[["render",ea]]);export{sa as default};
