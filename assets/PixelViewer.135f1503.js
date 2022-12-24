import{Q as L,R as ye}from"./Ripple.f32bd31d.js";import{u as ae,a as ie}from"./use-dark.335df473.js";import{c as ue,u as qe,f as xe,d as Ce,g as _e,Q as Se,h as D}from"./QSpinner.fb7efa18.js";import{c,h as f,s as G,g as I,w as E,o as pe,a as se,f as Fe,Z as Ve,r as C,$ as we,a0 as be,a1 as Be,d as ke,p as Re,a2 as Ae,i as $e,v as U,W as ze,x as Ie,k as De,_ as Ee,G as Oe,I as ce,R as Pe,Q as K,L as J,K as ee,J as je,M as Ne,T as Te,O as Ue}from"./index.95404017.js";import{h as Le}from"./format.8f2d0f18.js";import{Q as Me}from"./QImg.6ca8aea3.js";const Qe={xs:8,sm:10,md:14,lg:20,xl:24};var He=ue({name:"QChip",props:{...ae,...qe,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:o}){const{proxy:{$q:n}}=I(),a=ie(e,n),s=xe(e,Qe),u=c(()=>e.selected===!0||e.icon!==void 0),m=c(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),y=c(()=>e.iconRemove||n.iconSet.chip.remove),F=c(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),q=c(()=>{const v=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(v?` text-${v} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(F.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(a.value===!0?" q-chip--dark q-dark":"")}),w=c(()=>{const v=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},_={...v,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:v,remove:_}});function z(v){v.keyCode===13&&k(v)}function k(v){e.disable||(o("update:selected",!e.selected),o("click",v))}function B(v){(v.keyCode===void 0||v.keyCode===13)&&(G(v),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function g(){const v=[];F.value===!0&&v.push(f("div",{class:"q-focus-helper"})),u.value===!0&&v.push(f(L,{class:"q-chip__icon q-chip__icon--left",name:m.value}));const _=e.label!==void 0?[f("div",{class:"ellipsis"},[e.label])]:void 0;return v.push(f("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},_e(t.default,_))),e.iconRight&&v.push(f(L,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&v.push(f(L,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...w.value.remove,onClick:B,onKeyup:B})),v}return()=>{if(e.modelValue===!1)return;const v={class:q.value,style:s.value};return F.value===!0&&Object.assign(v,w.value.chip,{onClick:k,onKeyup:z}),Ce("div",v,g(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ye,e.ripple]])}}});function Ke({validate:e,resetValidation:t,requiresQForm:o}){const n=Fe(Ve,!1);if(n!==!1){const{props:a,proxy:s}=I();Object.assign(s,{validate:e,resetValidation:t}),E(()=>a.disable,u=>{u===!0?(typeof t=="function"&&t(),n.unbindComponent(s)):n.bindComponent(s)}),pe(()=>{a.disable!==!0&&n.bindComponent(s)}),se(()=>{a.disable!==!0&&n.unbindComponent(s)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const de=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,fe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ve=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Z=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,W=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,te={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>de.test(e),hexaColor:e=>fe.test(e),hexOrHexaColor:e=>ve.test(e),rgbColor:e=>Z.test(e),rgbaColor:e=>W.test(e),rgbOrRgbaColor:e=>Z.test(e)||W.test(e),hexOrRgbColor:e=>de.test(e)||Z.test(e),hexaOrRgbaColor:e=>fe.test(e)||W.test(e),anyColor:e=>ve.test(e)||Z.test(e)||W.test(e)},Ze=[!0,!1,"ondemand"],We={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ze.includes(e)}};function Xe(e,t){const{props:o,proxy:n}=I(),a=C(!1),s=C(null),u=C(null);Ke({validate:B,resetValidation:k});let m=0,y;const F=c(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length>0),q=c(()=>o.disable!==!0&&F.value===!0),w=c(()=>o.error===!0||a.value===!0),z=c(()=>typeof o.errorMessage=="string"&&o.errorMessage.length>0?o.errorMessage:s.value);E(()=>o.modelValue,()=>{g()}),E(()=>o.reactiveRules,_=>{_===!0?y===void 0&&(y=E(()=>o.rules,()=>{g(!0)})):y!==void 0&&(y(),y=void 0)},{immediate:!0}),E(e,_=>{_===!0?u.value===null&&(u.value=!1):u.value===!1&&(u.value=!0,q.value===!0&&o.lazyRules!=="ondemand"&&t.value===!1&&v())});function k(){m++,t.value=!1,u.value=null,a.value=!1,s.value=null,v.cancel()}function B(_=o.modelValue){if(q.value!==!0)return!0;const r=++m,V=t.value!==!0?()=>{u.value=!0}:()=>{},R=(i,p)=>{i===!0&&V(),a.value=i,s.value=p||null,t.value=!1},$=[];for(let i=0;i<o.rules.length;i++){const p=o.rules[i];let h;if(typeof p=="function"?h=p(_,te):typeof p=="string"&&te[p]!==void 0&&(h=te[p](_)),h===!1||typeof h=="string")return R(!0,h),!1;h!==!0&&h!==void 0&&$.push(h)}return $.length===0?(R(!1),!0):(t.value=!0,Promise.all($).then(i=>{if(i===void 0||Array.isArray(i)===!1||i.length===0)return r===m&&R(!1),!0;const p=i.find(h=>h===!1||typeof h=="string");return r===m&&R(p!==void 0,p),p===void 0},i=>(r===m&&(console.error(i),R(!0)),!1)))}function g(_){q.value===!0&&o.lazyRules!=="ondemand"&&(u.value===!0||o.lazyRules!==!0&&_!==!0)&&v()}const v=we(B,0);return se(()=>{y!==void 0&&y(),v.cancel()}),Object.assign(n,{resetValidation:k,validate:B}),be(n,"hasError",()=>w.value),{isDirtyModel:u,hasRules:F,hasError:w,errorMessage:z,validate:B,resetValidation:k}}const me=/^on[A-Z]/;function Ye(e,t){const o={listeners:C({}),attributes:C({})};function n(){const a={},s={};for(const u in e)u!=="class"&&u!=="style"&&me.test(u)===!1&&(a[u]=e[u]);for(const u in t.props)me.test(u)===!0&&(s[u]=t.props[u]);o.attributes.value=a,o.listeners.value=s}return Be(n),n(),o}let le,X=0;const S=new Array(256);for(let e=0;e<256;e++)S[e]=(e+256).toString(16).substring(1);const Ge=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let n=t;n>0;n--)o.push(Math.floor(Math.random()*256));return o}})(),ge=4096;function Je(){(le===void 0||X+16>ge)&&(X=0,le=Ge(ge));const e=Array.prototype.slice.call(le,X,X+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,S[e[0]]+S[e[1]]+S[e[2]]+S[e[3]]+"-"+S[e[4]]+S[e[5]]+"-"+S[e[6]]+S[e[7]]+"-"+S[e[8]]+S[e[9]]+"-"+S[e[10]]+S[e[11]]+S[e[12]]+S[e[13]]+S[e[14]]+S[e[15]]}let ne=[],et=[];function tt(e){et.length===0?e():ne.push(e)}function lt(e){ne=ne.filter(t=>t!==e)}function oe(e){return e===void 0?`f_${Je()}`:e}function re(e){return e!=null&&(""+e).length>0}const nt={...ae,...We,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ot=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function rt(){const{props:e,attrs:t,proxy:o,vnode:n}=I();return{isDark:ie(e,o.$q),editable:c(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:C(!1),focused:C(!1),hasPopupOpen:!1,splitAttrs:Ye(t,n),targetUid:C(oe(e.for)),rootRef:C(null),targetRef:C(null),controlRef:C(null)}}function at(e){const{props:t,emit:o,slots:n,attrs:a,proxy:s}=I(),{$q:u}=s;let m;e.hasValue===void 0&&(e.hasValue=c(()=>re(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{o("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:b,onFocusout:x}),Object.assign(e,{clearValue:O,onControlFocusin:b,onControlFocusout:x,focus:p}),e.computedCounter===void 0&&(e.computedCounter=c(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,d=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(d!==void 0?" / "+d:"")}}));const{isDirtyModel:y,hasRules:F,hasError:q,errorMessage:w,resetValidation:z}=Xe(e.focused,e.innerLoading),k=e.floatingLabel!==void 0?c(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):c(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=c(()=>t.bottomSlots===!0||t.hint!==void 0||F.value===!0||t.counter===!0||t.error!==null),g=c(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),v=c(()=>`q-field row no-wrap items-start q-field--${g.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(k.value===!0?" q-field--float":"")+(r.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(q.value===!0?" q-field--error":"")+(q.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),_=c(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(q.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),r=c(()=>t.labelSlot===!0||t.label!==void 0),V=c(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&q.value!==!0?` text-${t.labelColor}`:"")),R=c(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:k.value,modelValue:t.modelValue,emitValue:e.emitValue})),$=c(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});E(()=>t.for,l=>{e.targetUid.value=oe(l)});function i(){const l=document.activeElement;let d=e.targetRef!==void 0&&e.targetRef.value;d&&(l===null||l.id!==e.targetUid.value)&&(d.hasAttribute("tabindex")===!0||(d=d.querySelector("[tabindex]")),d&&d!==l&&d.focus({preventScroll:!0}))}function p(){tt(i)}function h(){lt(i);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function b(l){clearTimeout(m),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",l))}function x(l,d){clearTimeout(m),m=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,o("blur",l)),d!==void 0&&d())})}function O(l){G(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),o("clear",t.modelValue),ke(()=>{z(),u.platform.is.mobile!==!0&&(y.value=!1)})}function M(){const l=[];return n.prepend!==void 0&&l.push(f("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:U},n.prepend())),l.push(f("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},Q())),q.value===!0&&t.noErrorIcon===!1&&l.push(j("error",[f(L,{name:u.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(j("inner-loading-append",n.loading!==void 0?n.loading():[f(Se,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(j("inner-clearable-append",[f(L,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||u.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:O})])),n.append!==void 0&&l.push(f("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:U},n.append())),e.getInnerAppend!==void 0&&l.push(j("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function Q(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(f("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):n.rawControl!==void 0?l.push(n.rawControl()):n.control!==void 0&&l.push(f("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(R.value))),r.value===!0&&l.push(f("div",{class:V.value},D(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(f("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(D(n.default))}function P(){let l,d;q.value===!0?w.value!==null?(l=[f("div",{role:"alert"},w.value)],d=`q--slot-error-${w.value}`):(l=D(n.error),d="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[f("div",t.hint)],d=`q--slot-hint-${t.hint}`):(l=D(n.hint),d="q--slot-hint"));const A=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&A===!1&&l===void 0)return;const N=f("div",{key:d,class:"q-field__messages col"},l);return f("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:U},[t.hideBottomSpace===!0?N:f(ze,{name:"q-transition--field-message"},()=>N),A===!0?f("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function j(l,d){return d===null?null:f("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},d)}let H=!1;return Re(()=>{H=!0}),Ae(()=>{H===!0&&t.autofocus===!0&&s.focus()}),pe(()=>{$e.value===!0&&t.for===void 0&&(e.targetUid.value=oe()),t.autofocus===!0&&s.focus()}),se(()=>{clearTimeout(m)}),Object.assign(s,{focus:p,blur:h}),function(){const d=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...$.value}:$.value;return f("label",{ref:e.rootRef,class:[v.value,a.class],style:a.style,...d},[n.before!==void 0?f("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:U},n.before()):null,f("div",{class:"q-field__inner relative-position col self-stretch"},[f("div",{ref:e.controlRef,class:_.value,tabindex:-1,...e.controlEvents},M()),B.value===!0?P():null]),n.after!==void 0?f("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:U},n.after()):null])}}const it={name:String};function ut(e){return c(()=>e.name||e.for)}function T(e,t,o,n){const a=[];return e.forEach(s=>{n(s)===!0?a.push(s):t.push({failedPropValidation:o,file:s})}),a}function Y(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),G(e)}const st={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},ct=["rejected"];function dt({editable:e,dnd:t,getFileInput:o,addFilesToQueue:n}){const{props:a,emit:s,proxy:u}=I(),m=C(null),y=c(()=>a.accept!==void 0?a.accept.split(",").map(r=>(r=r.trim(),r==="*"?"*/":(r.endsWith("/*")&&(r=r.slice(0,r.length-1)),r.toUpperCase()))):null),F=c(()=>parseInt(a.maxFiles,10)),q=c(()=>parseInt(a.maxTotalSize,10));function w(r){if(e.value)if(r!==Object(r)&&(r={target:null}),r.target!==null&&r.target.matches('input[type="file"]')===!0)r.clientX===0&&r.clientY===0&&Ie(r);else{const V=o();V&&V!==r.target&&V.click(r)}}function z(r){e.value&&r&&n(null,r)}function k(r,V,R,$){let i=Array.from(V||r.target.files);const p=[],h=()=>{p.length>0&&s("rejected",p)};if(a.accept!==void 0&&y.value.indexOf("*/")===-1&&(i=T(i,p,"accept",b=>y.value.some(x=>b.type.toUpperCase().startsWith(x)||b.name.toUpperCase().endsWith(x))),i.length===0))return h();if(a.maxFileSize!==void 0){const b=parseInt(a.maxFileSize,10);if(i=T(i,p,"max-file-size",x=>x.size<=b),i.length===0)return h()}if(a.multiple!==!0&&i.length>0&&(i=[i[0]]),i.forEach(b=>{b.__key=b.webkitRelativePath+b.lastModified+b.name+b.size}),$===!0){const b=R.map(x=>x.__key);i=T(i,p,"duplicate",x=>b.includes(x.__key)===!1)}if(i.length===0)return h();if(a.maxTotalSize!==void 0){let b=$===!0?R.reduce((x,O)=>x+O.size,0):0;if(i=T(i,p,"max-total-size",x=>(b+=x.size,b<=q.value)),i.length===0)return h()}if(typeof a.filter=="function"){const b=a.filter(i);i=T(i,p,"filter",x=>b.includes(x))}if(a.maxFiles!==void 0){let b=$===!0?R.length:0;if(i=T(i,p,"max-files",()=>(b++,b<=F.value)),i.length===0)return h()}if(h(),i.length>0)return i}function B(r){Y(r),t.value!==!0&&(t.value=!0)}function g(r){G(r),(r.relatedTarget!==null||De.is.safari!==!0?r.relatedTarget!==m.value:document.elementsFromPoint(r.clientX,r.clientY).includes(m.value)===!1)===!0&&(t.value=!1)}function v(r){Y(r);const V=r.dataTransfer.files;V.length>0&&n(null,V),t.value=!1}function _(r){if(t.value===!0)return f("div",{ref:m,class:`q-${r}__dnd absolute-full`,onDragenter:Y,onDragover:Y,onDragleave:g,onDrop:v})}return Object.assign(u,{pickFiles:w,addFiles:z}),{pickFiles:w,addFiles:z,onDragover:B,onDragleave:g,processFiles:k,getDndNode:_,maxFilesNumber:F,maxTotalSizeNumber:q}}function ft(e,t){function o(){const n=e.modelValue;try{const a="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(n)===n&&("length"in n?Array.from(n):[n]).forEach(s=>{a.items.add(s)}),{files:a.files}}catch{return{files:void 0}}}return t===!0?c(()=>{if(e.type==="file")return o()}):c(o)}var vt=ue({name:"QFile",inheritAttrs:!1,props:{...nt,...it,...st,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ot,...ct],setup(e,{slots:t,emit:o,attrs:n}){const{proxy:a}=I(),s=rt(),u=C(null),m=C(!1),y=ut(e),{pickFiles:F,onDragover:q,onDragleave:w,processFiles:z,getDndNode:k}=dt({editable:s.editable,dnd:m,getFileInput:M,addFilesToQueue:Q}),B=ft(e),g=c(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),v=c(()=>re(g.value)),_=c(()=>g.value.map(l=>l.name).join(", ")),r=c(()=>Le(g.value.reduce((l,d)=>l+d.size,0))),V=c(()=>({totalSize:r.value,filesNumber:g.value.length,maxFiles:e.maxFiles})),R=c(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:y.value,...n,id:s.targetUid.value,disabled:s.editable.value!==!0})),$=c(()=>"q-file q-field--auto-height"+(m.value===!0?" q-file--dnd":"")),i=c(()=>e.multiple===!0&&e.append===!0);function p(l){const d=g.value.slice();d.splice(l,1),b(d)}function h(l){const d=g.value.findIndex(l);d>-1&&p(d)}function b(l){o("update:modelValue",e.multiple===!0?l:l[0])}function x(l){l.keyCode===13&&U(l)}function O(l){(l.keyCode===13||l.keyCode===32)&&F(l)}function M(){return u.value}function Q(l,d){const A=z(l,d,g.value,i.value),N=M();N!=null&&(N.value=""),A!==void 0&&((e.multiple===!0?e.modelValue&&A.every(he=>g.value.includes(he)):e.modelValue===A[0])||b(i.value===!0?g.value.concat(A):A))}function P(){return[f("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function j(){if(t.file!==void 0)return g.value.length===0?P():g.value.map((d,A)=>t.file({index:A,file:d,ref:this}));if(t.selected!==void 0)return g.value.length===0?P():t.selected({files:g.value,ref:this});if(e.useChips===!0)return g.value.length===0?P():g.value.map((d,A)=>f(He,{key:"file-"+A,removable:s.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{p(A)}},()=>f("span",{class:"ellipsis",textContent:d.name})));const l=e.displayValue!==void 0?e.displayValue:_.value;return l.length>0?[f("div",{class:e.inputClass,style:e.inputStyle,textContent:l})]:P()}function H(){const l={ref:u,...R.value,...B.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:Q};return e.multiple===!0&&(l.multiple=!0),f("input",l)}return Object.assign(s,{fieldClass:$,emitValue:b,hasValue:v,inputRef:u,innerValue:g,floatingLabel:c(()=>v.value===!0||re(e.displayValue)),computedCounter:c(()=>{if(e.counterLabel!==void 0)return e.counterLabel(V.value);const l=e.maxFiles;return`${g.value.length}${l!==void 0?" / "+l:""} (${r.value})`}),getControlChild:()=>k("file"),getControl:()=>{const l={ref:s.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return s.editable.value===!0&&Object.assign(l,{onDragover:q,onDragleave:w,onKeydown:x,onKeyup:O}),f("div",l,[H()].concat(j()))}}),Object.assign(a,{removeAtIndex:p,removeFile:h,getNativeElement:()=>u.value}),be(a,"nativeEl",()=>u.value),at(s)}}),mt=ue({name:"QBanner",props:{...ae,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=I(),n=ie(e,o),a=c(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(n.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),s=c(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const u=[f("div",{class:"q-banner__avatar col-auto row items-center self-start"},D(t.avatar)),f("div",{class:"q-banner__content col text-body2"},D(t.default))],m=D(t.action);return m!==void 0&&u.push(f("div",{class:s.value},m)),f("div",{class:a.value+(e.inlineActions===!1&&m!==void 0?" q-banner--top-padding":""),role:"alert"},u)}}});const gt=Oe({name:"PixelViewer",components:{},props:{},setup(){const e=C(null),t=C(null),o=C(null),n=C(null),a=C("return you cursor location");E(e,m=>{n.value=URL.createObjectURL(m)});function s(m){var y=t.value.$el.getBoundingClientRect(),F=parseInt(m.clientX-y.left),q=parseInt(m.clientY-y.top);a.value=`x : ${F}, y: ${q}`}function u(m){}return{model:e,qimage:t,cvs:o,urlmodel:n,message:a,event_file:u,event_cursor:s}}}),pt={class:"q-pa-md"},bt={class:"q-gutter-y-md column",style:{"max-width":"300px"}},ht={class:"q-pa-md q-gutter-sm"};function yt(e,t,o,n,a,s){return ce(),Pe(Te,null,[K("div",pt,[K("div",bt,[J(vt,{color:"grey-3",outlined:"","label-color":"orange",modelValue:e.model,"onUpdate:modelValue":[t[0]||(t[0]=u=>e.model=u),e.event_file],label:"Label"},{append:ee(()=>[J(L,{name:"attachment",color:"orange"})]),_:1},8,["modelValue","onUpdate:modelValue"])])]),e.model?(ce(),je(Me,{key:0,src:e.urlmodel,ref:"qimage","native-context-menu":"",alt:"Logo",basic:"",onMousemove:e.event_cursor},null,8,["src","onMousemove"])):Ne("",!0),K("div",ht,[J(mt,{dense:"",class:"bg-primary text-white"},{action:ee(()=>[]),default:ee(()=>[K("h3",null,Ue(e.message),1)]),_:1})])],64)}var Vt=Ee(gt,[["render",yt]]);export{Vt as default};
