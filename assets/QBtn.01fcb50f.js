import{c as l,g as W,r as Q,k as X,h as m,U as G,C as J,B as $,V as z,x as Y,y as Z,m as ee}from"./index.eccd25a1.js";import{Q as V,R as te}from"./Ripple.3b19d197.js";import{u as ne,a as ae,Q as ue}from"./QSpinner.5cb4b71f.js";import{c as le,e as re}from"./render.561e12ad.js";const F={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ie=Object.keys(F),oe={align:{type:String,validator:e=>ie.includes(e)}};function se(e){return l(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${F[n]}`})}function Se(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:n}=e.$;for(;Object(n)===n;){if(Object(n.proxy)===n.proxy)return n.proxy;n=n.parent}}function ce(e){return e.appContext.config.globalProperties.$router!==void 0}function $e(e){return e.isUnmounted===!0||e.isDeactivated===!0}function p(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function H(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function de(e,n){for(const s in n){const u=n[s],c=e[s];if(typeof u=="string"){if(u!==c)return!1}else if(Array.isArray(c)===!1||c.length!==u.length||u.some((x,E)=>x!==c[E]))return!1}return!0}function N(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((s,u)=>s===n[u]):e.length===1&&e[0]===n}function ve(e,n){return Array.isArray(e)===!0?N(e,n):Array.isArray(n)===!0?N(n,e):e===n}function fe(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(ve(e[s],n[s])===!1)return!1;return!0}const ge={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function be({fallbackTag:e,useDisableForRouterLinkProps:n=!0}={}){const s=W(),{props:u,proxy:c,emit:x}=s,E=ce(s),q=l(()=>u.disable!==!0&&u.href!==void 0),O=n===!0?l(()=>E===!0&&u.disable!==!0&&q.value!==!0&&u.to!==void 0&&u.to!==null&&u.to!==""):l(()=>E===!0&&q.value!==!0&&u.to!==void 0&&u.to!==null&&u.to!==""),h=l(()=>O.value===!0?M(u.to):null),d=l(()=>h.value!==null),B=l(()=>q.value===!0||d.value===!0),a=l(()=>u.type==="a"||B.value===!0?"a":u.tag||e||"div"),S=l(()=>q.value===!0?{href:u.href,target:u.target}:d.value===!0?{href:h.value.href,target:u.target}:{}),v=l(()=>{if(d.value===!1)return-1;const{matched:i}=h.value,{length:f}=i,y=i[f-1];if(y===void 0)return-1;const C=c.$route.matched;if(C.length===0)return-1;const P=C.findIndex(H.bind(null,y));if(P>-1)return P;const K=p(i[f-2]);return f>1&&p(y)===K&&C[C.length-1].path!==K?C.findIndex(H.bind(null,i[f-2])):P}),L=l(()=>d.value===!0&&v.value!==-1&&de(c.$route.params,h.value.params)),r=l(()=>L.value===!0&&v.value===c.$route.matched.length-1&&fe(c.$route.params,h.value.params)),b=l(()=>d.value===!0?r.value===!0?` ${u.exactActiveClass} ${u.activeClass}`:u.exact===!0?"":L.value===!0?` ${u.activeClass}`:"":"");function M(i){try{return c.$router.resolve(i)}catch{}return null}function _(i,{returnRouterError:f,to:y=u.to,replace:C=u.replace}={}){if(u.disable===!0)return i.preventDefault(),Promise.resolve(!1);if(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.button!==void 0&&i.button!==0||u.target==="_blank")return Promise.resolve(!1);i.preventDefault();const P=c.$router[C===!0?"replace":"push"](y);return f===!0?P:P.then(()=>{}).catch(()=>{})}function D(i){if(d.value===!0){const f=y=>_(i,y);x("click",i,f),i.defaultPrevented!==!0&&f()}else x("click",i)}return{hasRouterLink:d,hasHrefLink:q,hasLink:B,linkTag:a,resolvedLink:h,linkIsActive:L,linkIsExactActive:r,linkClass:b,linkAttrs:S,getLink:M,navigateToRouterLink:_,navigateOnClick:D}}const U={none:0,xs:4,sm:8,md:16,lg:24,xl:32},me={xs:8,sm:10,md:14,lg:20,xl:24},he=["button","submit","reset"],ye=/[^\s]\/[^\s]/,ke=["flat","outline","push","unelevated"],xe=(e,n)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":n,qe={...ne,...ge,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ke.reduce((e,n)=>(e[n]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...oe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Le(e){const n=ae(e,me),s=se(e),{hasRouterLink:u,hasLink:c,linkTag:x,linkAttrs:E,navigateOnClick:q}=be({fallbackTag:"button"}),O=l(()=>{const r=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},r,{padding:e.padding.split(/\s+/).map(b=>b in U?U[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):r}),h=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=l(()=>e.disable!==!0&&e.loading!==!0),B=l(()=>d.value===!0?e.tabindex||0:-1),a=l(()=>xe(e,"standard")),S=l(()=>{const r={tabindex:B.value};return c.value===!0?Object.assign(r,E.value):he.includes(e.type)===!0&&(r.type=e.type),x.value==="a"?(e.disable===!0?r["aria-disabled"]="true":r.href===void 0&&(r.role="button"),u.value!==!0&&ye.test(e.type)===!0&&(r.type=e.type)):e.disable===!0&&(r.disabled="",r["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(r,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),r}),v=l(()=>{let r;e.color!==void 0?e.flat===!0||e.outline===!0?r=`text-${e.textColor||e.color}`:r=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(r=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${a.value} q-btn--${b}`+(r!==void 0?" "+r:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),L=l(()=>s.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:v,style:O,innerClasses:L,attributes:S,hasLink:c,linkTag:x,navigateOnClick:q,isActionable:d}}const{passiveCapture:g}=ee;let R=null,A=null,T=null;var Re=le({name:"QBtn",props:{...qe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:n,emit:s}){const{proxy:u}=W(),{classes:c,style:x,innerClasses:E,attributes:q,hasLink:O,linkTag:h,navigateOnClick:d,isActionable:B}=Le(e),a=Q(null),S=Q(null);let v=null,L,r;const b=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),M=l(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:O.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),_=l(()=>({center:e.round})),D=l(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),i=l(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(B.value===!0){const t={onClick:y,onKeydown:C,onMousedown:K};if(u.$q.platform.has.touch===!0){const o=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${o}`]=P}return t}return{onClick:$}}),f=l(()=>({ref:a,class:"q-btn q-btn-item non-selectable no-outline "+c.value,style:x.value,...q.value,...i.value}));function y(t){if(a.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const o=document.activeElement;if(e.type==="submit"&&o!==document.body&&a.value.contains(o)===!1&&o.contains(a.value)===!1){a.value.focus();const I=()=>{document.removeEventListener("keydown",$,!0),document.removeEventListener("keyup",I,g),a.value!==null&&a.value.removeEventListener("blur",I,g)};document.addEventListener("keydown",$,!0),document.addEventListener("keyup",I,g),a.value.addEventListener("blur",I,g)}}d(t)}}function C(t){a.value!==null&&(s("keydown",t),z(t,[13,32])===!0&&A!==a.value&&(A!==null&&w(),t.defaultPrevented!==!0&&(a.value.focus(),A=a.value,a.value.classList.add("q-btn--active"),document.addEventListener("keyup",k,!0),a.value.addEventListener("blur",k,g)),$(t)))}function P(t){a.value!==null&&(s("touchstart",t),t.defaultPrevented!==!0&&(R!==a.value&&(R!==null&&w(),R=a.value,v=t.target,v.addEventListener("touchcancel",k,g),v.addEventListener("touchend",k,g)),L=!0,clearTimeout(r),r=setTimeout(()=>{L=!1},200)))}function K(t){a.value!==null&&(t.qSkipRipple=L===!0,s("mousedown",t),t.defaultPrevented!==!0&&T!==a.value&&(T!==null&&w(),T=a.value,a.value.classList.add("q-btn--active"),document.addEventListener("mouseup",k,g)))}function k(t){if(a.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===a.value)){if(t!==void 0&&t.type==="keyup"){if(A===a.value&&z(t,[13,32])===!0){const o=new MouseEvent("click",t);o.qKeyEvent=!0,t.defaultPrevented===!0&&Y(o),t.cancelBubble===!0&&Z(o),a.value.dispatchEvent(o),$(t),t.qKeyEvent=!0}s("keyup",t)}w()}}function w(t){const o=S.value;t!==!0&&(R===a.value||T===a.value)&&o!==null&&o!==document.activeElement&&(o.setAttribute("tabindex",-1),o.focus()),R===a.value&&(v!==null&&(v.removeEventListener("touchcancel",k,g),v.removeEventListener("touchend",k,g)),R=v=null),T===a.value&&(document.removeEventListener("mouseup",k,g),T=null),A===a.value&&(document.removeEventListener("keyup",k,!0),a.value!==null&&a.value.removeEventListener("blur",k,g),A=null),a.value!==null&&a.value.classList.remove("q-btn--active")}function j(t){$(t),t.qSkipRipple=!0}return X(()=>{w(!0)}),Object.assign(u,{click:y}),()=>{let t=[];e.icon!==void 0&&t.push(m(V,{name:e.icon,left:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&t.push(m("span",{class:"block"},[e.label])),t=re(n.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(m(V,{name:e.iconRight,right:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"}));const o=[m("span",{class:"q-focus-helper",ref:S})];return e.loading===!0&&e.percentage!==void 0&&o.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:D.value})])),o.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+E.value},t)),e.loading!==null&&o.push(m(G,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[m(ue)])]:null)),J(m(h.value,f.value,o),[[te,M.value,void 0,_.value]])}}});export{Re as Q,$e as a,be as b,oe as c,se as d,Se as g,ge as u,ce as v};
