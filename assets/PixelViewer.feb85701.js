import{Q as Z}from"./Ripple.6269316b.js";import{u as J,a as ee,b as te,c as ne,d as ae,e as le,f as M,Q as ie}from"./use-form.7fa882b3.js";import{r as x,c,g as R,t as re,x as W,k as oe,h,Z as ue,s as se,_ as ce,D as de,w as fe,E as K,N as me,M as j,H as O,G as Q,F as ve,I as ge,Q as pe,K as be}from"./index.2cab90c4.js";import{c as X,h as T}from"./QSpinner.529b75c0.js";import{h as he}from"./format.2a3572e1.js";import{Q as ye}from"./QImg.2c219188.js";import{u as Fe,a as xe}from"./use-dark.070595d5.js";function V(e,i,v,s){const a=[];return e.forEach(o=>{s(o)===!0?a.push(o):i.push({failedPropValidation:v,file:o})}),a}function A(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),W(e)}const _e={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ce=["rejected"];function Se({editable:e,dnd:i,getFileInput:v,addFilesToQueue:s}){const{props:a,emit:o,proxy:m}=R(),d=x(null),_=c(()=>a.accept!==void 0?a.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),C=c(()=>parseInt(a.maxFiles,10)),S=c(()=>parseInt(a.maxTotalSize,10));function D(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&re(t);else{const b=v();b&&b!==t.target&&b.click(t)}}function w(t){e.value&&t&&s(null,t)}function I(t,b,q,k){let l=Array.from(b||t.target.files);const p=[],F=()=>{p.length>0&&o("rejected",p)};if(a.accept!==void 0&&_.value.indexOf("*/")===-1&&(l=V(l,p,"accept",r=>_.value.some(f=>r.type.toUpperCase().startsWith(f)||r.name.toUpperCase().endsWith(f))),l.length===0))return F();if(a.maxFileSize!==void 0){const r=parseInt(a.maxFileSize,10);if(l=V(l,p,"max-file-size",f=>f.size<=r),l.length===0)return F()}if(a.multiple!==!0&&l.length>0&&(l=[l[0]]),l.forEach(r=>{r.__key=r.webkitRelativePath+r.lastModified+r.name+r.size}),k===!0){const r=q.map(f=>f.__key);l=V(l,p,"duplicate",f=>r.includes(f.__key)===!1)}if(l.length===0)return F();if(a.maxTotalSize!==void 0){let r=k===!0?q.reduce((f,$)=>f+$.size,0):0;if(l=V(l,p,"max-total-size",f=>(r+=f.size,r<=S.value)),l.length===0)return F()}if(typeof a.filter=="function"){const r=a.filter(l);l=V(l,p,"filter",f=>r.includes(f))}if(a.maxFiles!==void 0){let r=k===!0?q.length:0;if(l=V(l,p,"max-files",()=>(r++,r<=C.value)),l.length===0)return F()}if(F(),l.length>0)return l}function P(t){A(t),i.value!==!0&&(i.value=!0)}function u(t){W(t),(t.relatedTarget!==null||oe.is.safari!==!0?t.relatedTarget!==d.value:document.elementsFromPoint(t.clientX,t.clientY).includes(d.value)===!1)===!0&&(i.value=!1)}function z(t){A(t);const b=t.dataTransfer.files;b.length>0&&s(null,b),i.value=!1}function B(t){if(i.value===!0)return h("div",{ref:d,class:`q-${t}__dnd absolute-full`,onDragenter:A,onDragover:A,onDragleave:u,onDrop:z})}return Object.assign(m,{pickFiles:D,addFiles:w}),{pickFiles:D,addFiles:w,onDragover:P,onDragleave:u,processFiles:I,getDndNode:B,maxFilesNumber:C,maxTotalSizeNumber:S}}function Ve(e,i){function v(){const s=e.modelValue;try{const a="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(s)===s&&("length"in s?Array.from(s):[s]).forEach(o=>{a.items.add(o)}),{files:a.files}}catch{return{files:void 0}}}return i===!0?c(()=>{if(e.type==="file")return v()}):c(v)}var qe=X({name:"QFile",inheritAttrs:!1,props:{...J,...ee,..._e,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...te,...Ce],setup(e,{slots:i,emit:v,attrs:s}){const{proxy:a}=R(),o=ne(),m=x(null),d=x(!1),_=ae(e),{pickFiles:C,onDragover:S,onDragleave:D,processFiles:w,getDndNode:I}=Se({editable:o.editable,dnd:d,getFileInput:U,addFilesToQueue:L}),P=Ve(e),u=c(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),z=c(()=>M(u.value)),B=c(()=>u.value.map(n=>n.name).join(", ")),t=c(()=>he(u.value.reduce((n,g)=>n+g.size,0))),b=c(()=>({totalSize:t.value,filesNumber:u.value.length,maxFiles:e.maxFiles})),q=c(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:_.value,...s,id:o.targetUid.value,disabled:o.editable.value!==!0})),k=c(()=>"q-file q-field--auto-height"+(d.value===!0?" q-file--dnd":"")),l=c(()=>e.multiple===!0&&e.append===!0);function p(n){const g=u.value.slice();g.splice(n,1),r(g)}function F(n){const g=u.value.findIndex(n);g>-1&&p(g)}function r(n){v("update:modelValue",e.multiple===!0?n:n[0])}function f(n){n.keyCode===13&&se(n)}function $(n){(n.keyCode===13||n.keyCode===32)&&C(n)}function U(){return m.value}function L(n,g){const y=w(n,g,u.value,l.value),E=U();E!=null&&(E.value=""),y!==void 0&&((e.multiple===!0?e.modelValue&&y.every(H=>u.value.includes(H)):e.modelValue===y[0])||r(l.value===!0?u.value.concat(y):y))}function N(){return[h("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function Y(){if(i.file!==void 0)return u.value.length===0?N():u.value.map((g,y)=>i.file({index:y,file:g,ref:this}));if(i.selected!==void 0)return u.value.length===0?N():i.selected({files:u.value,ref:this});if(e.useChips===!0)return u.value.length===0?N():u.value.map((g,y)=>h(ie,{key:"file-"+y,removable:o.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{p(y)}},()=>h("span",{class:"ellipsis",textContent:g.name})));const n=e.displayValue!==void 0?e.displayValue:B.value;return n.length>0?[h("div",{class:e.inputClass,style:e.inputStyle,textContent:n})]:N()}function G(){const n={ref:m,...q.value,...P.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:L};return e.multiple===!0&&(n.multiple=!0),h("input",n)}return Object.assign(o,{fieldClass:k,emitValue:r,hasValue:z,inputRef:m,innerValue:u,floatingLabel:c(()=>z.value===!0||M(e.displayValue)),computedCounter:c(()=>{if(e.counterLabel!==void 0)return e.counterLabel(b.value);const n=e.maxFiles;return`${u.value.length}${n!==void 0?" / "+n:""} (${t.value})`}),getControlChild:()=>I("file"),getControl:()=>{const n={ref:o.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return o.editable.value===!0&&Object.assign(n,{onDragover:S,onDragleave:D,onKeydown:f,onKeyup:$}),h("div",n,[G()].concat(Y()))}}),Object.assign(a,{removeAtIndex:p,removeFile:F,getNativeElement:()=>m.value}),ue(a,"nativeEl",()=>m.value),le(o)}}),ke=X({name:"QBanner",props:{...Fe,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:i}){const{proxy:{$q:v}}=R(),s=xe(e,v),a=c(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(s.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),o=c(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const m=[h("div",{class:"q-banner__avatar col-auto row items-center self-start"},T(i.avatar)),h("div",{class:"q-banner__content col text-body2"},T(i.default))],d=T(i.action);return d!==void 0&&m.push(h("div",{class:o.value},d)),h("div",{class:a.value+(e.inlineActions===!1&&d!==void 0?" q-banner--top-padding":""),role:"alert"},m)}}});const De=de({name:"PixelViewer",components:{},props:{},setup(){const e=x(null),i=x(null),v=x(null),s=x(null),a=x("return you cursor location");fe(e,d=>{s.value=URL.createObjectURL(d)});function o(d){var _=i.value.$el.getBoundingClientRect(),C=parseInt(d.clientX-_.left),S=parseInt(d.clientY-_.top);a.value=`x : ${C}, y: ${S}`}function m(d){}return{model:e,qimage:i,cvs:v,urlmodel:s,message:a,event_file:m,event_cursor:o}}}),we={class:"q-pa-md"},ze={class:"q-gutter-y-md column",style:{"max-width":"300px"}},Ne={class:"q-pa-md q-gutter-sm"};function je(e,i,v,s,a,o){return K(),me(pe,null,[j("div",we,[j("div",ze,[O(qe,{color:"grey-3",outlined:"","label-color":"orange",modelValue:e.model,"onUpdate:modelValue":[i[0]||(i[0]=m=>e.model=m),e.event_file],label:"Label"},{append:Q(()=>[O(Z,{name:"attachment",color:"orange"})]),_:1},8,["modelValue","onUpdate:modelValue"])])]),e.model?(K(),ve(ye,{key:0,src:e.urlmodel,ref:"qimage","native-context-menu":"",alt:"Logo",basic:"",onMousemove:e.event_cursor},null,8,["src","onMousemove"])):ge("",!0),j("div",Ne,[O(ke,{dense:"",class:"bg-primary text-white"},{action:Q(()=>[]),default:Q(()=>[j("h4",null,be(e.message),1)]),_:1})])],64)}var Qe=ce(De,[["render",je]]);export{Qe as default};
