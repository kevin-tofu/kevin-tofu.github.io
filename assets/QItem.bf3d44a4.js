import{c as H,h as D,a as O}from"./render.0391c000.js";import{c as v,h as _,k as K,W as M,w as A,o as j,g as P,l as R,s as b,m,B as N,X as z,Y as F,Z,r as I,V as G}from"./index.cec2d84b.js";import{v as J,a as ee,u as te,b as oe}from"./QBtn.58b57093.js";import{g as le,c as X}from"./Ripple.3ee48bb4.js";import{u as ie,a as ne}from"./use-dark.25570d8f.js";var he=H({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=v(()=>parseInt(e.lines,10)),l=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),r=v(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>_("div",{style:r.value,class:l.value},D(t.default))}});function ye(e,t,o){let l;function r(){l!==void 0&&(M.remove(l),l=void 0)}return K(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>o.value===!0,handler:t},M.add(l)}}}const ge={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},qe=["beforeShow","show","beforeHide","hide"];function Le({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:r,processOnMount:d}){const s=P(),{props:a,emit:c,proxy:L}=s;let u;function p(i){e.value===!0?y(i):h(i)}function h(i){if(a.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const n=a["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!0),u=i,R(()=>{u===i&&(u=void 0)})),(a.modelValue===null||n===!1)&&f(i)}function f(i){e.value!==!0&&(e.value=!0,c("beforeShow",i),l!==void 0?l(i):c("show",i))}function y(i){if(a.disable===!0)return;const n=a["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!1),u=i,R(()=>{u===i&&(u=void 0)})),(a.modelValue===null||n===!1)&&T(i)}function T(i){e.value!==!1&&(e.value=!1,c("beforeHide",i),r!==void 0?r(i):c("hide",i))}function E(i){a.disable===!0&&i===!0?a["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):i===!0!==e.value&&(i===!0?f:T)(u)}A(()=>a.modelValue,E),o!==void 0&&J(s)===!0&&A(()=>L.$route.fullPath,()=>{o.value===!0&&e.value===!0&&y()}),d===!0&&j(()=>{E(a.modelValue)});const k={show:h,hide:y,toggle:p};return Object.assign(L,k),k}const re=[null,document,document.body,document.scrollingElement,document.documentElement];function Te(e,t){let o=le(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return re.includes(o)?window:o}function se(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ae(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let S;function Ee(){if(S!==void 0)return S;const e=document.createElement("p"),t=document.createElement("div");X(e,{width:"100%",height:"200px"}),X(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=t.clientWidth),t.remove(),S=o-l,S}function ue(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let g=0,C,V,q,B=!1,Y,$,w;function ce(e){de(e)&&N(e)}function de(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=z(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=o||l?e.deltaY:e.deltaX;for(let d=0;d<t.length;d++){const s=t[d];if(ue(s,l))return l?r<0&&s.scrollTop===0?!0:r>0&&s.scrollTop+s.clientHeight===s.scrollHeight:r<0&&s.scrollLeft===0?!0:r>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Q(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function x(e){B!==!0&&(B=!0,requestAnimationFrame(()=>{B=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=l),l>q&&(document.scrollingElement.scrollTop-=Math.ceil((l-q)/8))}))}function U(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(t);C=ae(window),V=se(window),Y=t.style.left,$=t.style.top,t.style.left=`-${C}px`,t.style.top=`-${V}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,b.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",x,m.passiveCapture),window.visualViewport.addEventListener("scroll",x,m.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Q,m.passiveCapture))}b.is.desktop===!0&&b.is.mac===!0&&window[`${e}EventListener`]("wheel",ce,m.notPassive),e==="remove"&&(b.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",x,m.passiveCapture),window.visualViewport.removeEventListener("scroll",x,m.passiveCapture)):window.removeEventListener("scroll",Q,m.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Y,t.style.top=$,window.scrollTo(C,V),q=void 0)}function fe(e){let t="add";if(e===!0){if(g++,w!==void 0){clearTimeout(w),w=void 0;return}if(g>1)return}else{if(g===0||(g--,g>0))return;if(t="remove",b.is.ios===!0&&b.is.nativeMobile===!0){clearTimeout(w),w=setTimeout(()=>{U(t),w=void 0},100);return}}U(t)}function ke(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,fe(t))}}}function Se(){let e;const t=P();function o(){clearTimeout(e)}return F(o),K(o),{removeTimeout:o,registerTimeout(l,r){clearTimeout(e),ee(t)===!1&&(e=setTimeout(l,r))}}}function xe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Z.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var _e=H({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>_("div",{class:o.value},D(t.default))}}),Ce=H({name:"QItem",props:{...ie,...te,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=P(),r=ne(e,l),{hasLink:d,linkAttrs:s,linkClass:a,linkTag:c,navigateOnClick:L}=oe(),u=I(null),p=I(null),h=v(()=>e.clickable===!0||d.value===!0||e.tag==="label"),f=v(()=>e.disable!==!0&&h.value===!0),y=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?a.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=v(()=>{if(e.insetLevel===void 0)return null;const n=l.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function E(n){f.value===!0&&(p.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===u.value?p.value.focus():document.activeElement===p.value&&u.value.focus()),L(n))}function k(n){if(f.value===!0&&G(n,13)===!0){N(n),n.qKeyEvent=!0;const W=new MouseEvent("click",n);W.qKeyEvent=!0,u.value.dispatchEvent(W)}o("keyup",n)}function i(){const n=O(t.default,[]);return f.value===!0&&n.unshift(_("div",{class:"q-focus-helper",tabindex:-1,ref:p})),n}return()=>{const n={ref:u,class:y.value,style:T.value,role:"listitem",onClick:E,onKeyup:k};return f.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,s.value)):h.value===!0&&(n["aria-disabled"]="true"),_(c.value,n,i())}}});export{_e as Q,qe as a,Se as b,xe as c,Le as d,ye as e,ke as f,Te as g,se as h,ae as i,Ee as j,he as k,Ce as l,ge as u};
