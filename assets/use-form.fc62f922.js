import{Q as E,R as ce}from"./Ripple.2581a660.js";import{u as te,a as ne}from"./use-dark.5a4e2c65.js";import{c as fe,u as ve,f as me,d as pe,g as ge,Q as be,h as P}from"./QSpinner.212c15e9.js";import{c as s,h as a,g as O,x as re,w as F,o as ae,a as H,e as he,a1 as ye,r as q,a2 as qe,a0 as Ce,a3 as xe,d as _e,V as Se,a4 as Be,i as Re,s as $,T as we}from"./index.ae29552a.js";const ke={xs:8,sm:10,md:14,lg:20,xl:24};var je=fe({name:"QChip",props:{...te,...ve,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:o,emit:n}){const{proxy:{$q:t}}=O(),f=ne(e,t),d=me(e,ke),i=s(()=>e.selected===!0||e.icon!==void 0),b=s(()=>e.selected===!0?e.iconSelected||t.iconSet.chip.selected:e.icon),y=s(()=>e.iconRemove||t.iconSet.chip.remove),S=s(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),h=s(()=>{const r=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(r?` text-${r} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(S.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(f.value===!0?" q-chip--dark q-dark":"")}),x=s(()=>{const r=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},m={...r,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||t.lang.label.remove};return{chip:r,remove:m}});function V(r){r.keyCode===13&&_(r)}function _(r){e.disable||(n("update:selected",!e.selected),n("click",r))}function C(r){(r.keyCode===void 0||r.keyCode===13)&&(re(r),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function w(){const r=[];S.value===!0&&r.push(a("div",{class:"q-focus-helper"})),i.value===!0&&r.push(a(E,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const m=e.label!==void 0?[a("div",{class:"ellipsis"},[e.label])]:void 0;return r.push(a("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ge(o.default,m))),e.iconRight&&r.push(a(E,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&r.push(a(E,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...x.value.remove,onClick:C,onKeyup:C})),r}return()=>{if(e.modelValue===!1)return;const r={class:h.value,style:d.value};return S.value===!0&&Object.assign(r,x.value.chip,{onClick:_,onKeyup:V}),pe("div",r,w(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ce,e.ripple]])}}});function Ae({validate:e,resetValidation:o,requiresQForm:n}){const t=he(ye,!1);if(t!==!1){const{props:f,proxy:d}=O();Object.assign(d,{validate:e,resetValidation:o}),F(()=>f.disable,i=>{i===!0?(typeof o=="function"&&o(),t.unbindComponent(d)):t.bindComponent(d)}),ae(()=>{f.disable!==!0&&t.bindComponent(d)}),H(()=>{f.disable!==!0&&t.unbindComponent(d)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const X=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Y=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ee=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,z=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,D=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,T={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>X.test(e),hexaColor:e=>Y.test(e),hexOrHexaColor:e=>ee.test(e),rgbColor:e=>z.test(e),rgbaColor:e=>D.test(e),rgbOrRgbaColor:e=>z.test(e)||D.test(e),hexOrRgbColor:e=>X.test(e)||z.test(e),hexaOrRgbaColor:e=>Y.test(e)||D.test(e),anyColor:e=>ee.test(e)||z.test(e)||D.test(e)},Fe=[!0,!1,"ondemand"],Ve={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Fe.includes(e)}};function $e(e,o){const{props:n,proxy:t}=O(),f=q(!1),d=q(null),i=q(null);Ae({validate:C,resetValidation:_});let b=0,y;const S=s(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),h=s(()=>n.disable!==!0&&S.value===!0),x=s(()=>n.error===!0||f.value===!0),V=s(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:d.value);F(()=>n.modelValue,()=>{w()}),F(()=>n.reactiveRules,m=>{m===!0?y===void 0&&(y=F(()=>n.rules,()=>{w(!0)})):y!==void 0&&(y(),y=void 0)},{immediate:!0}),F(e,m=>{m===!0?i.value===null&&(i.value=!1):i.value===!1&&(i.value=!0,h.value===!0&&n.lazyRules!=="ondemand"&&o.value===!1&&r())});function _(){b++,o.value=!1,i.value=null,f.value=!1,d.value=null,r.cancel()}function C(m=n.modelValue){if(h.value!==!0)return!0;const k=++b,L=o.value!==!0?()=>{i.value=!0}:()=>{},B=(v,p)=>{v===!0&&L(),f.value=v,d.value=p||null,o.value=!1},A=[];for(let v=0;v<n.rules.length;v++){const p=n.rules[v];let g;if(typeof p=="function"?g=p(m,T):typeof p=="string"&&T[p]!==void 0&&(g=T[p](m)),g===!1||typeof g=="string")return B(!0,g),!1;g!==!0&&g!==void 0&&A.push(g)}return A.length===0?(B(!1),!0):(o.value=!0,Promise.all(A).then(v=>{if(v===void 0||Array.isArray(v)===!1||v.length===0)return k===b&&B(!1),!0;const p=v.find(g=>g===!1||typeof g=="string");return k===b&&B(p!==void 0,p),p===void 0},v=>(k===b&&(console.error(v),B(!0)),!1)))}function w(m){h.value===!0&&n.lazyRules!=="ondemand"&&(i.value===!0||n.lazyRules!==!0&&m!==!0)&&r()}const r=qe(C,0);return H(()=>{y!==void 0&&y(),r.cancel()}),Object.assign(t,{resetValidation:_,validate:C}),Ce(t,"hasError",()=>x.value),{isDirtyModel:i,hasRules:S,hasError:x,errorMessage:V,validate:C,resetValidation:_}}const oe=/^on[A-Z]/;function Ee(e,o){const n={listeners:q({}),attributes:q({})};function t(){const f={},d={};for(const i in e)i!=="class"&&i!=="style"&&oe.test(i)===!1&&(f[i]=e[i]);for(const i in o.props)oe.test(i)===!0&&(d[i]=o.props[i]);n.attributes.value=f,n.listeners.value=d}return xe(t),t(),n}let j,U=0;const c=new Array(256);for(let e=0;e<256;e++)c[e]=(e+256).toString(16).substring(1);const Ie=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const n=new Uint8Array(o);return e.getRandomValues(n),n}}return o=>{const n=[];for(let t=o;t>0;t--)n.push(Math.floor(Math.random()*256));return n}})(),le=4096;function Oe(){(j===void 0||U+16>le)&&(U=0,j=Ie(le));const e=Array.prototype.slice.call(j,U,U+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,c[e[0]]+c[e[1]]+c[e[2]]+c[e[3]]+"-"+c[e[4]]+c[e[5]]+"-"+c[e[6]]+c[e[7]]+"-"+c[e[8]]+c[e[9]]+"-"+c[e[10]]+c[e[11]]+c[e[12]]+c[e[13]]+c[e[14]]+c[e[15]]}let R=[],I=[];function ie(e){I=I.filter(o=>o!==e)}function Qe(e){ie(e),I.push(e)}function He(e){ie(e),I.length===0&&R.length>0&&(R[R.length-1](),R=[])}function Me(e){I.length===0?e():R.push(e)}function Pe(e){R=R.filter(o=>o!==e)}function Q(e){return e===void 0?`f_${Oe()}`:e}function ze(e){return e!=null&&(""+e).length>0}const Ne={...te,...Ve,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ze=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ke(){const{props:e,attrs:o,proxy:n,vnode:t}=O();return{isDark:ne(e,n.$q),editable:s(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:q(!1),focused:q(!1),hasPopupOpen:!1,splitAttrs:Ee(o,t),targetUid:q(Q(e.for)),rootRef:q(null),targetRef:q(null),controlRef:q(null)}}function We(e){const{props:o,emit:n,slots:t,attrs:f,proxy:d}=O(),{$q:i}=d;let b;e.hasValue===void 0&&(e.hasValue=s(()=>ze(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{n("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:N,onFocusout:Z}),Object.assign(e,{clearValue:K,onControlFocusin:N,onControlFocusout:Z,focus:p}),e.computedCounter===void 0&&(e.computedCounter=s(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,u=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:y,hasRules:S,hasError:h,errorMessage:x,resetValidation:V}=$e(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?s(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):s(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=s(()=>o.bottomSlots===!0||o.hint!==void 0||S.value===!0||o.counter===!0||o.error!==null),w=s(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),r=s(()=>`q-field row no-wrap items-start q-field--${w.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(k.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(h.value===!0?" q-field--error":"")+(h.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),m=s(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(h.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length>0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),k=s(()=>o.labelSlot===!0||o.label!==void 0),L=s(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&h.value!==!0?` text-${o.labelColor}`:"")),B=s(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:o.modelValue,emitValue:e.emitValue})),A=s(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});F(()=>o.for,l=>{e.targetUid.value=Q(l)});function v(){const l=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(l===null||l.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==l&&u.focus({preventScroll:!0}))}function p(){Me(v)}function g(){Pe(v);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function N(l){clearTimeout(b),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",l))}function Z(l,u){clearTimeout(b),b=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,n("blur",l)),u!==void 0&&u())})}function K(l){re(l),i.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",o.modelValue),_e(()=>{V(),i.platform.is.mobile!==!0&&(y.value=!1)})}function ue(){const l=[];return t.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:$},t.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},se())),h.value===!0&&o.noErrorIcon===!1&&l.push(M("error",[a(E,{name:i.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(M("inner-loading-append",t.loading!==void 0?t.loading():[a(be,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(M("inner-clearable-append",[a(E,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||i.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:K})])),t.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:$},t.append())),e.getInnerAppend!==void 0&&l.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function se(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):t.rawControl!==void 0?l.push(t.rawControl()):t.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},t.control(B.value))),k.value===!0&&l.push(a("div",{class:L.value},P(t.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(P(t.default))}function de(){let l,u;h.value===!0?x.value!==null?(l=[a("div",{role:"alert"},x.value)],u=`q--slot-error-${x.value}`):(l=P(t.error),u="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],u=`q--slot-hint-${o.hint}`):(l=P(t.hint),u="q--slot-hint"));const G=o.counter===!0||t.counter!==void 0;if(o.hideBottomSpace===!0&&G===!1&&l===void 0)return;const J=a("div",{key:u,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:$},[o.hideBottomSpace===!0?J:a(we,{name:"q-transition--field-message"},()=>J),G===!0?a("div",{class:"q-field__counter"},t.counter!==void 0?t.counter():e.computedCounter.value):null])}function M(l,u){return u===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}let W=!1;return Se(()=>{W=!0}),Be(()=>{W===!0&&o.autofocus===!0&&d.focus()}),ae(()=>{Re.value===!0&&o.for===void 0&&(e.targetUid.value=Q()),o.autofocus===!0&&d.focus()}),H(()=>{clearTimeout(b)}),Object.assign(d,{focus:p,blur:g}),function(){const u=e.getControl===void 0&&t.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...A.value}:A.value;return a("label",{ref:e.rootRef,class:[r.value,f.class],style:f.style,...u},[t.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:$},t.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:m.value,tabindex:-1,...e.controlEvents},ue()),C.value===!0?de():null]),t.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:$},t.after()):null])}}const Ge={name:String};function Je(e){return s(()=>e.name||e.for)}export{je as Q,Ge as a,Ze as b,Ke as c,Je as d,We as e,ze as f,Qe as g,Me as h,He as r,Ne as u};