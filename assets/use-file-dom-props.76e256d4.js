import{Q as E,R as ce}from"./Ripple.3ee48bb4.js";import{u as te,a as re}from"./use-dark.25570d8f.js";import{u as fe,a as ve,Q as me}from"./QSpinner.9609b89f.js";import{c as pe,d as be,f as ge,h as P}from"./render.0391c000.js";import{c as u,h as i,g as D,B as ne,w as A,o as ie,k as H,i as he,a4 as ye,r as q,a5 as qe,a3 as Ce,a6 as xe,l as _e,Y as Se,a7 as we,j as Be,x as $,U as Re}from"./index.cec2d84b.js";const Fe={xs:8,sm:10,md:14,lg:20,xl:24};var Qe=pe({name:"QChip",props:{...te,...fe,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:o,emit:r}){const{proxy:{$q:t}}=D(),c=re(e,t),d=ve(e,Fe),a=u(()=>e.selected===!0||e.icon!==void 0),g=u(()=>e.selected===!0?e.iconSelected||t.iconSet.chip.selected:e.icon),y=u(()=>e.iconRemove||t.iconSet.chip.remove),S=u(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),h=u(()=>{const n=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(n?` text-${n} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(S.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(c.value===!0?" q-chip--dark q-dark":"")}),x=u(()=>{const n=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},m={...n,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||t.lang.label.remove};return{chip:n,remove:m}});function V(n){n.keyCode===13&&_(n)}function _(n){e.disable||(r("update:selected",!e.selected),r("click",n))}function C(n){(n.keyCode===void 0||n.keyCode===13)&&(ne(n),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function R(){const n=[];S.value===!0&&n.push(i("div",{class:"q-focus-helper"})),a.value===!0&&n.push(i(E,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const m=e.label!==void 0?[i("div",{class:"ellipsis"},[e.label])]:void 0;return n.push(i("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ge(o.default,m))),e.iconRight&&n.push(i(E,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&n.push(i(E,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...x.value.remove,onClick:C,onKeyup:C})),n}return()=>{if(e.modelValue===!1)return;const n={class:h.value,style:d.value};return S.value===!0&&Object.assign(n,x.value.chip,{onClick:_,onKeyup:V}),be("div",n,R(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ce,e.ripple]])}}});function ke({validate:e,resetValidation:o,requiresQForm:r}){const t=he(ye,!1);if(t!==!1){const{props:c,proxy:d}=D();Object.assign(d,{validate:e,resetValidation:o}),A(()=>c.disable,a=>{a===!0?(typeof o=="function"&&o(),t.unbindComponent(d)):t.bindComponent(d)}),ie(()=>{c.disable!==!0&&t.bindComponent(d)}),H(()=>{c.disable!==!0&&t.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const J=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,X=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ee=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,M=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,U=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,j={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>J.test(e),hexaColor:e=>X.test(e),hexOrHexaColor:e=>ee.test(e),rgbColor:e=>M.test(e),rgbaColor:e=>U.test(e),rgbOrRgbaColor:e=>M.test(e)||U.test(e),hexOrRgbColor:e=>J.test(e)||M.test(e),hexaOrRgbaColor:e=>X.test(e)||U.test(e),anyColor:e=>ee.test(e)||M.test(e)||U.test(e)},Ae=[!0,!1,"ondemand"],Ve={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ae.includes(e)}};function $e(e,o){const{props:r,proxy:t}=D(),c=q(!1),d=q(null),a=q(null);ke({validate:C,resetValidation:_});let g=0,y;const S=u(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length>0),h=u(()=>r.disable!==!0&&S.value===!0),x=u(()=>r.error===!0||c.value===!0),V=u(()=>typeof r.errorMessage=="string"&&r.errorMessage.length>0?r.errorMessage:d.value);A(()=>r.modelValue,()=>{R()}),A(()=>r.reactiveRules,m=>{m===!0?y===void 0&&(y=A(()=>r.rules,()=>{R(!0)})):y!==void 0&&(y(),y=void 0)},{immediate:!0}),A(e,m=>{m===!0?a.value===null&&(a.value=!1):a.value===!1&&(a.value=!0,h.value===!0&&r.lazyRules!=="ondemand"&&o.value===!1&&n())});function _(){g++,o.value=!1,a.value=null,c.value=!1,d.value=null,n.cancel()}function C(m=r.modelValue){if(h.value!==!0)return!0;const F=++g,T=o.value!==!0?()=>{a.value=!0}:()=>{},w=(v,p)=>{v===!0&&T(),c.value=v,d.value=p||null,o.value=!1},k=[];for(let v=0;v<r.rules.length;v++){const p=r.rules[v];let b;if(typeof p=="function"?b=p(m,j):typeof p=="string"&&j[p]!==void 0&&(b=j[p](m)),b===!1||typeof b=="string")return w(!0,b),!1;b!==!0&&b!==void 0&&k.push(b)}return k.length===0?(w(!1),!0):(o.value=!0,Promise.all(k).then(v=>{if(v===void 0||Array.isArray(v)===!1||v.length===0)return F===g&&w(!1),!0;const p=v.find(b=>b===!1||typeof b=="string");return F===g&&w(p!==void 0,p),p===void 0},v=>(F===g&&(console.error(v),w(!0)),!1)))}function R(m){h.value===!0&&r.lazyRules!=="ondemand"&&(a.value===!0||r.lazyRules!==!0&&m!==!0)&&n()}const n=qe(C,0);return H(()=>{y!==void 0&&y(),n.cancel()}),Object.assign(t,{resetValidation:_,validate:C}),Ce(t,"hasError",()=>x.value),{isDirtyModel:a,hasRules:S,hasError:x,errorMessage:V,validate:C,resetValidation:_}}const oe=/^on[A-Z]/;function Ee(e,o){const r={listeners:q({}),attributes:q({})};function t(){const c={},d={};for(const a in e)a!=="class"&&a!=="style"&&oe.test(a)===!1&&(c[a]=e[a]);for(const a in o.props)oe.test(a)===!0&&(d[a]=o.props[a]);r.attributes.value=c,r.listeners.value=d}return xe(t),t(),r}let L,z=0;const f=new Array(256);for(let e=0;e<256;e++)f[e]=(e+256).toString(16).substring(1);const Ie=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const r=new Uint8Array(o);return e.getRandomValues(r),r}}return o=>{const r=[];for(let t=o;t>0;t--)r.push(Math.floor(Math.random()*256));return r}})(),le=4096;function De(){(L===void 0||z+16>le)&&(z=0,L=Ie(le));const e=Array.prototype.slice.call(L,z,z+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,f[e[0]]+f[e[1]]+f[e[2]]+f[e[3]]+"-"+f[e[4]]+f[e[5]]+"-"+f[e[6]]+f[e[7]]+"-"+f[e[8]]+f[e[9]]+"-"+f[e[10]]+f[e[11]]+f[e[12]]+f[e[13]]+f[e[14]]+f[e[15]]}let B=[],I=[];function ae(e){I=I.filter(o=>o!==e)}function He(e){ae(e),I.push(e)}function Ne(e){ae(e),I.length===0&&B.length>0&&(B[B.length-1](),B=[])}function Oe(e){I.length===0?e():B.push(e)}function Pe(e){B=B.filter(o=>o!==e)}function Q(e){return e===void 0?`f_${De()}`:e}function Me(e){return e!=null&&(""+e).length>0}const Ze={...te,...Ve,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ke=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function We(){const{props:e,attrs:o,proxy:r,vnode:t}=D();return{isDark:re(e,r.$q),editable:u(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:q(!1),focused:q(!1),hasPopupOpen:!1,splitAttrs:Ee(o,t),targetUid:q(Q(e.for)),rootRef:q(null),targetRef:q(null),controlRef:q(null)}}function Ye(e){const{props:o,emit:r,slots:t,attrs:c,proxy:d}=D(),{$q:a}=d;let g;e.hasValue===void 0&&(e.hasValue=u(()=>Me(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{r("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:N,onFocusout:Z}),Object.assign(e,{clearValue:K,onControlFocusin:N,onControlFocusout:Z,focus:p}),e.computedCounter===void 0&&(e.computedCounter=u(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,s=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(s!==void 0?" / "+s:"")}}));const{isDirtyModel:y,hasRules:S,hasError:h,errorMessage:x,resetValidation:V}=$e(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?u(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):u(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=u(()=>o.bottomSlots===!0||o.hint!==void 0||S.value===!0||o.counter===!0||o.error!==null),R=u(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),n=u(()=>`q-field row no-wrap items-start q-field--${R.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(h.value===!0?" q-field--error":"")+(h.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),m=u(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(h.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length>0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),F=u(()=>o.labelSlot===!0||o.label!==void 0),T=u(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&h.value!==!0?` text-${o.labelColor}`:"")),w=u(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:o.modelValue,emitValue:e.emitValue})),k=u(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});A(()=>o.for,l=>{e.targetUid.value=Q(l)});function v(){const l=document.activeElement;let s=e.targetRef!==void 0&&e.targetRef.value;s&&(l===null||l.id!==e.targetUid.value)&&(s.hasAttribute("tabindex")===!0||(s=s.querySelector("[tabindex]")),s&&s!==l&&s.focus({preventScroll:!0}))}function p(){Oe(v)}function b(){Pe(v);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function N(l){clearTimeout(g),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",l))}function Z(l,s){clearTimeout(g),g=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,r("blur",l)),s!==void 0&&s())})}function K(l){ne(l),a.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),r("clear",o.modelValue),_e(()=>{V(),a.platform.is.mobile!==!0&&(y.value=!1)})}function ue(){const l=[];return t.prepend!==void 0&&l.push(i("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:$},t.prepend())),l.push(i("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},se())),h.value===!0&&o.noErrorIcon===!1&&l.push(O("error",[i(E,{name:a.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(O("inner-loading-append",t.loading!==void 0?t.loading():[i(me,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(O("inner-clearable-append",[i(E,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||a.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:K})])),t.append!==void 0&&l.push(i("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:$},t.append())),e.getInnerAppend!==void 0&&l.push(O("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function se(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(i("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):t.rawControl!==void 0?l.push(t.rawControl()):t.control!==void 0&&l.push(i("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},t.control(w.value))),F.value===!0&&l.push(i("div",{class:T.value},P(t.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(i("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(P(t.default))}function de(){let l,s;h.value===!0?x.value!==null?(l=[i("div",{role:"alert"},x.value)],s=`q--slot-error-${x.value}`):(l=P(t.error),s="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[i("div",o.hint)],s=`q--slot-hint-${o.hint}`):(l=P(t.hint),s="q--slot-hint"));const Y=o.counter===!0||t.counter!==void 0;if(o.hideBottomSpace===!0&&Y===!1&&l===void 0)return;const G=i("div",{key:s,class:"q-field__messages col"},l);return i("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:$},[o.hideBottomSpace===!0?G:i(Re,{name:"q-transition--field-message"},()=>G),Y===!0?i("div",{class:"q-field__counter"},t.counter!==void 0?t.counter():e.computedCounter.value):null])}function O(l,s){return s===null?null:i("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},s)}let W=!1;return Se(()=>{W=!0}),we(()=>{W===!0&&o.autofocus===!0&&d.focus()}),ie(()=>{Be.value===!0&&o.for===void 0&&(e.targetUid.value=Q()),o.autofocus===!0&&d.focus()}),H(()=>{clearTimeout(g)}),Object.assign(d,{focus:p,blur:b}),function(){const s=e.getControl===void 0&&t.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...k.value}:k.value;return i("label",{ref:e.rootRef,class:[n.value,c.class],style:c.style,...s},[t.before!==void 0?i("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:$},t.before()):null,i("div",{class:"q-field__inner relative-position col self-stretch"},[i("div",{ref:e.controlRef,class:m.value,tabindex:-1,...e.controlEvents},ue()),C.value===!0?de():null]),t.after!==void 0?i("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:$},t.after()):null])}}const Ge={name:String};function Je(e){return u(()=>e.name||e.for)}function Xe(e,o){function r(){const t=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach(d=>{c.items.add(d)}),{files:c.files}}catch{return{files:void 0}}}return o===!0?u(()=>{if(e.type==="file")return r()}):u(r)}export{Qe as Q,Ge as a,Ke as b,We as c,Je as d,Xe as e,Ye as f,Me as g,He as h,Oe as i,Ne as r,Ze as u};
