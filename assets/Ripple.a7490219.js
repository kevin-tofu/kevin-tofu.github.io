import{c as O,u as F,f as T,h as z,e as g,b as I}from"./QSpinner.b608e6ab.js";import{c as x,h as c,g as L,X as N,F as Q,t as K,z as P,x as U,y as V}from"./index.5ae76e7e.js";const k="0 0 24 24",w=e=>e,b=e=>`ionicons ${e}`,S={"mdi-":e=>`mdi ${e}`,"icon-":w,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":b,"ion-ios":b,"ion-logo":b,"iconfont ":w,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},B={o_:"-outlined",r_:"-round",s_:"-sharp"},C={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},X=new RegExp("^("+Object.keys(S).join("|")+")"),A=new RegExp("^("+Object.keys(B).join("|")+")"),E=new RegExp("^("+Object.keys(C).join("|")+")"),D=/^[Mm]\s?[-+]?\.?\d/,Y=/^img:/,G=/^svguse:/,H=/^ion-/,J=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var se=O({name:"QIcon",props:{...F,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:s}){const{proxy:{$q:n}}=L(),r=T(e),i=x(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),l=x(()=>{let o,t=e.name;if(t==="none"||!t)return{none:!0};if(n.iconMapFn!==null){const a=n.iconMapFn(t);if(a!==void 0)if(a.icon!==void 0){if(t=a.icon,t==="none"||!t)return{none:!0}}else return{cls:a.cls,content:a.content!==void 0?a.content:" "}}if(D.test(t)===!0){const[a,u=k]=t.split("|");return{svg:!0,viewBox:u,nodes:a.split("&&").map(d=>{const[p,v,y]=d.split("@@");return c("path",{style:v,d:p,transform:y})})}}if(Y.test(t)===!0)return{img:!0,src:t.substring(4)};if(G.test(t)===!0){const[a,u=k]=t.split("|");return{svguse:!0,src:a.substring(7),viewBox:u}}let f=" ";const m=t.match(X);if(m!==null)o=S[m[1]](t);else if(J.test(t)===!0)o=t;else if(H.test(t)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(E.test(t)===!0){o="notranslate material-symbols";const a=t.match(E);a!==null&&(t=t.substring(6),o+=C[a[1]]),f=t}else{o="notranslate material-icons";const a=t.match(A);a!==null&&(t=t.substring(2),o+=B[a[1]]),f=t}return{cls:o,content:f}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return l.value.none===!0?c(e.tag,o,z(s.default)):l.value.img===!0?c("span",o,g(s.default,[c("img",{src:l.value.src})])):l.value.svg===!0?c("span",o,g(s.default,[c("svg",{viewBox:l.value.viewBox||"0 0 24 24"},l.value.nodes)])):l.value.svguse===!0?c("span",o,g(s.default,[c("svg",{viewBox:l.value.viewBox},[c("use",{"xlink:href":l.value.src})])])):(l.value.cls!==void 0&&(o.class+=" "+l.value.cls),c(e.tag,o,g(s.default,[l.value.content])))}}});function W(e,s){const n=e.style;for(const r in s)n[r]=s[r]}function ne(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const s=N(e);if(s)return s.$el||s}function Z(e,s=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},s),r=e.apply(this,arguments)),r}}function q(e,s,n,r){n.modifiers.stop===!0&&U(e);const i=n.modifiers.color;let l=n.modifiers.center;l=l===!0||r===!0;const o=document.createElement("span"),t=document.createElement("span"),f=V(e),{left:m,top:a,width:u,height:d}=s.getBoundingClientRect(),p=Math.sqrt(u*u+d*d),v=p/2,y=`${(u-p)/2}px`,M=l?y:`${f.left-m-v}px`,$=`${(d-p)/2}px`,j=l?$:`${f.top-a-v}px`;t.className="q-ripple__inner",W(t,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${M},${j},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(t),s.appendChild(o);const _=()=>{o.remove(),clearTimeout(h)};n.abort.push(_);let h=setTimeout(()=>{t.classList.add("q-ripple__inner--enter"),t.style.transform=`translate3d(${y},${$},0) scale3d(1,1,1)`,t.style.opacity=.2,h=setTimeout(()=>{t.classList.remove("q-ripple__inner--enter"),t.classList.add("q-ripple__inner--leave"),t.style.opacity=0,h=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(_),1)},275)},250)},50)}function R(e,{modifiers:s,value:n,arg:r}){const i=Object.assign({},e.cfg.ripple,s,n);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var re=I({name:"ripple",beforeMount(e,s){const n=s.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:s.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&q(i,e,r,i.qKeyEvent===!0)},keystart:Z(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&Q(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&q(i,e,r,!0)},300)};R(r,s),e.__qripple=r,K(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,s){if(s.oldValue!==s.value){const n=e.__qripple;n!==void 0&&(n.enabled=s.value!==!1,n.enabled===!0&&Object(s.value)===s.value&&R(n,s))}},beforeUnmount(e){const s=e.__qripple;s!==void 0&&(s.abort.forEach(n=>{n()}),P(s,"main"),delete e._qripple)}});export{se as Q,re as R,W as c,ne as g};
