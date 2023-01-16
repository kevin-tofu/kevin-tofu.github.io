import{Q as G}from"./Ripple.3ee48bb4.js";import{u as Z,a as ee,b as te,c as ne,d as ae,e as le,f as ie,g as M,Q as re}from"./use-file-dom-props.76e256d4.js";import{r as x,c as d,g as L,y as oe,B as W,s as ue,h,a3 as se,x as ce,_ as de,H as me,w as fe,I as K,Q as ve,P,d as O,K as T,J as ge,L as pe,F as he,N as be}from"./index.cec2d84b.js";import{c as X,h as E}from"./render.0391c000.js";import{h as ye}from"./format.2a3572e1.js";import{Q as Fe}from"./QImg.95d9c7ec.js";import{u as xe,a as _e}from"./use-dark.25570d8f.js";import"./QSpinner.9609b89f.js";function V(e,r,b,v){const l=[];return e.forEach(u=>{v(u)===!0?l.push(u):r.push({failedPropValidation:b,file:u})}),l}function j(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),W(e)}const Se={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ce=["rejected"];function Ve({editable:e,dnd:r,getFileInput:b,addFilesToQueue:v}){const{props:l,emit:u,proxy:m}=L(),s=x(null),_=d(()=>l.accept!==void 0?l.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),S=d(()=>parseInt(l.maxFiles,10)),C=d(()=>parseInt(l.maxTotalSize,10));function z(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&oe(t);else{const p=b();p&&p!==t.target&&p.click(t)}}function N(t){e.value&&t&&v(null,t)}function A(t,p,q,k){let a=Array.from(p||t.target.files);const g=[],F=()=>{g.length>0&&u("rejected",g)};if(l.accept!==void 0&&_.value.indexOf("*/")===-1&&(a=V(a,g,"accept",i=>_.value.some(c=>i.type.toUpperCase().startsWith(c)||i.name.toUpperCase().endsWith(c))),a.length===0))return F();if(l.maxFileSize!==void 0){const i=parseInt(l.maxFileSize,10);if(a=V(a,g,"max-file-size",c=>c.size<=i),a.length===0)return F()}if(l.multiple!==!0&&a.length>0&&(a=[a[0]]),a.forEach(i=>{i.__key=i.webkitRelativePath+i.lastModified+i.name+i.size}),k===!0){const i=q.map(c=>c.__key);a=V(a,g,"duplicate",c=>i.includes(c.__key)===!1)}if(a.length===0)return F();if(l.maxTotalSize!==void 0){let i=k===!0?q.reduce((c,$)=>c+$.size,0):0;if(a=V(a,g,"max-total-size",c=>(i+=c.size,i<=C.value)),a.length===0)return F()}if(typeof l.filter=="function"){const i=l.filter(a);a=V(a,g,"filter",c=>i.includes(c))}if(l.maxFiles!==void 0){let i=k===!0?q.length:0;if(a=V(a,g,"max-files",()=>(i++,i<=S.value)),a.length===0)return F()}if(F(),a.length>0)return a}function B(t){j(t),r.value!==!0&&(r.value=!0)}function o(t){W(t),(t.relatedTarget!==null||ue.is.safari!==!0?t.relatedTarget!==s.value:document.elementsFromPoint(t.clientX,t.clientY).includes(s.value)===!1)===!0&&(r.value=!1)}function D(t){j(t);const p=t.dataTransfer.files;p.length>0&&v(null,p),r.value=!1}function w(t){if(r.value===!0)return h("div",{ref:s,class:`q-${t}__dnd absolute-full`,onDragenter:j,onDragover:j,onDragleave:o,onDrop:D})}return Object.assign(m,{pickFiles:z,addFiles:N}),{pickFiles:z,addFiles:N,onDragover:B,onDragleave:o,processFiles:A,getDndNode:w,maxFilesNumber:S,maxTotalSizeNumber:C}}var qe=X({name:"QFile",inheritAttrs:!1,props:{...Z,...ee,...Se,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...te,...Ce],setup(e,{slots:r,emit:b,attrs:v}){const{proxy:l}=L(),u=ne(),m=x(null),s=x(!1),_=ae(e),{pickFiles:S,onDragover:C,onDragleave:z,processFiles:N,getDndNode:A}=Ve({editable:u.editable,dnd:s,getFileInput:R,addFilesToQueue:U}),B=le(e),o=d(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),D=d(()=>M(o.value)),w=d(()=>o.value.map(n=>n.name).join(", ")),t=d(()=>ye(o.value.reduce((n,f)=>n+f.size,0))),p=d(()=>({totalSize:t.value,filesNumber:o.value.length,maxFiles:e.maxFiles})),q=d(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:_.value,...v,id:u.targetUid.value,disabled:u.editable.value!==!0})),k=d(()=>"q-file q-field--auto-height"+(s.value===!0?" q-file--dnd":"")),a=d(()=>e.multiple===!0&&e.append===!0);function g(n){const f=o.value.slice();f.splice(n,1),i(f)}function F(n){const f=o.value.findIndex(n);f>-1&&g(f)}function i(n){b("update:modelValue",e.multiple===!0?n:n[0])}function c(n){n.keyCode===13&&ce(n)}function $(n){(n.keyCode===13||n.keyCode===32)&&S(n)}function R(){return m.value}function U(n,f){const y=N(n,f,o.value,a.value),Q=R();Q!=null&&(Q.value=""),y!==void 0&&((e.multiple===!0?e.modelValue&&y.every(J=>o.value.includes(J)):e.modelValue===y[0])||i(a.value===!0?o.value.concat(y):y))}function I(){return[h("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function Y(){if(r.file!==void 0)return o.value.length===0?I():o.value.map((f,y)=>r.file({index:y,file:f,ref:this}));if(r.selected!==void 0)return o.value.length===0?I():r.selected({files:o.value,ref:this});if(e.useChips===!0)return o.value.length===0?I():o.value.map((f,y)=>h(re,{key:"file-"+y,removable:u.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{g(y)}},()=>h("span",{class:"ellipsis",textContent:f.name})));const n=e.displayValue!==void 0?e.displayValue:w.value;return n.length>0?[h("div",{class:e.inputClass,style:e.inputStyle,textContent:n})]:I()}function H(){const n={ref:m,...q.value,...B.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:U};return e.multiple===!0&&(n.multiple=!0),h("input",n)}return Object.assign(u,{fieldClass:k,emitValue:i,hasValue:D,inputRef:m,innerValue:o,floatingLabel:d(()=>D.value===!0||M(e.displayValue)),computedCounter:d(()=>{if(e.counterLabel!==void 0)return e.counterLabel(p.value);const n=e.maxFiles;return`${o.value.length}${n!==void 0?" / "+n:""} (${t.value})`}),getControlChild:()=>A("file"),getControl:()=>{const n={ref:u.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return u.editable.value===!0&&Object.assign(n,{onDragover:C,onDragleave:z,onKeydown:c,onKeyup:$}),h("div",n,[H()].concat(Y()))}}),Object.assign(l,{removeAtIndex:g,removeFile:F,getNativeElement:()=>m.value}),se(l,"nativeEl",()=>m.value),ie(u)}}),ke=X({name:"QBanner",props:{...xe,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:r}){const{proxy:{$q:b}}=L(),v=_e(e,b),l=d(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(v.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),u=d(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const m=[h("div",{class:"q-banner__avatar col-auto row items-center self-start"},E(r.avatar)),h("div",{class:"q-banner__content col text-body2"},E(r.default))],s=E(r.action);return s!==void 0&&m.push(h("div",{class:u.value},s)),h("div",{class:l.value+(e.inlineActions===!1&&s!==void 0?" q-banner--top-padding":""),role:"alert"},m)}}});const ze=me({name:"PixelViewer",components:{},props:{},setup(){const e=x(null),r=x(null),b=x(null),v=x(null),l=x("return you cursor postion on an image");fe(e,s=>{v.value=URL.createObjectURL(s)});function u(s){var _=r.value.$el.getBoundingClientRect(),S=parseInt(s.clientX-_.left),C=parseInt(s.clientY-_.top);l.value=`x : ${S}, y: ${C}`}function m(s){}return{model:e,qimage:r,cvs:b,urlmodel:v,message:l,event_file:m,event_cursor:u}}}),Ne={class:"q-pa-md"},De={class:"q-gutter-y-md column",style:{"max-width":"300px"}},Ie={class:"q-pa-md q-gutter-sm"};function Pe(e,r,b,v,l,u){return K(),ve(he,null,[P("div",Ne,[P("div",De,[O(qe,{color:"grey-3",outlined:"","label-color":"orange",modelValue:e.model,"onUpdate:modelValue":[r[0]||(r[0]=m=>e.model=m),e.event_file],label:"Label"},{append:T(()=>[O(G,{name:"attachment",color:"orange"})]),_:1},8,["modelValue","onUpdate:modelValue"])])]),e.model?(K(),ge(Fe,{key:0,src:e.urlmodel,ref:"qimage","native-context-menu":"",alt:"Logo",basic:"",onMousemove:e.event_cursor},null,8,["src","onMousemove"])):pe("",!0),P("div",Ie,[O(ke,{dense:"",class:"bg-primary text-white"},{action:T(()=>[]),default:T(()=>[P("h6",null,be(e.message),1)]),_:1})])],64)}var Ee=de(ze,[["render",Pe]]);export{Ee as default};