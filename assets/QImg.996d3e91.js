import{c as l,j as H,r as s,k as M,o as E,h as a,W as F,w as O,g as P}from"./index.a3207bb2.js";import{Q as W,b as h}from"./vm.5a7cb556.js";import{h as A}from"./render.a5d7dbf2.js";import{u as T}from"./use-timeout.631ea4ef.js";const x={ratio:[String,Number]};function G(e,o){return l(()=>{const u=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const J=1.7778;var Y=H({name:"QImg",props:{...x,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:J},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:u}){const y=s(e.initialRatio),b=G(e,y),m=P(),{registerTimeout:C,removeTimeout:v}=T(),{registerTimeout:k,removeTimeout:_}=T(),f=l(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),z=l(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),t=[s(null),s(f.value)],n=s(0),c=s(!1),g=s(!1),L=l(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),N=l(()=>({width:e.width,height:e.height})),I=l(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),R=l(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function j(){if(_(),e.loadingShowDelay===0){c.value=!0;return}k(()=>{c.value=!0},e.loadingShowDelay)}function S(){_(),c.value=!1}function B({target:i}){h(m)===!1&&(v(),y.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,w(i,1))}function w(i,r){r===1e3||h(m)===!0||(i.complete===!0?Q(i):C(()=>{w(i,r+1)},50))}function Q(i){h(m)!==!0&&(n.value=n.value^1,t[n.value].value=null,S(),i.getAttribute("__qerror")!=="true"&&(g.value=!1),u("load",i.currentSrc||i.src))}function D(i){v(),S(),g.value=!0,t[n.value].value=z.value,t[n.value^1].value=f.value,u("error",i)}function q(i){const r=t[i].value,d={key:"img_"+i,class:I.value,style:R.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...r};return n.value===i?Object.assign(d,{class:d.class+"current",onLoad:B,onError:D}):d.class+="loaded",a("div",{class:"q-img__container absolute-full",key:"img"+i},a("img",d))}function $(){return c.value===!1?a("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},A(o[g.value===!0?"error":"default"])):a("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[a(W,{color:e.spinnerColor,size:e.spinnerSize})])}{let i=function(){O(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,r=>{v(),g.value=!1,r===null?(S(),t[n.value^1].value=f.value):j(),t[n.value].value=r},{immediate:!0})};M.value===!0?E(i):i()}return()=>{const i=[];return b.value!==null&&i.push(a("div",{key:"filler",style:b.value})),t[0].value!==null&&i.push(q(0)),t[1].value!==null&&i.push(q(1)),i.push(a(F,{name:"q-transition--fade"},$)),a("div",{key:"main",class:L.value,style:N.value,role:"img","aria-label":e.alt},i)}}});export{Y as Q};
