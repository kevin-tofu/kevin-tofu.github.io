import{u as O,a as F}from"./QSpinner.e0d9d3b2.js";import{c as T,h as z,e as y,b as I}from"./render.d5134fea.js";import{c as _,h as u,g as L,$ as N,V as Q,u as V,A,y as K,z as P}from"./index.088025c1.js";const E="0 0 24 24",k=e=>e,b=e=>`ionicons ${e}`,S={"mdi-":e=>`mdi ${e}`,"icon-":k,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":b,"ion-ios":b,"ion-logo":b,"iconfont ":k,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},B={o_:"-outlined",r_:"-round",s_:"-sharp"},C={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},U=new RegExp("^("+Object.keys(S).join("|")+")"),D=new RegExp("^("+Object.keys(B).join("|")+")"),w=new RegExp("^("+Object.keys(C).join("|")+")"),H=/^[Mm]\s?[-+]?\.?\d/,X=/^img:/,Y=/^svguse:/,G=/^ion-/,J=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var re=T({name:"QIcon",props:{...O,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=L(),s=F(e),i=_(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),l=_(()=>{let o,n=e.name;if(n==="none"||!n)return{none:!0};if(r.iconMapFn!==null){const a=r.iconMapFn(n);if(a!==void 0)if(a.icon!==void 0){if(n=a.icon,n==="none"||!n)return{none:!0}}else return{cls:a.cls,content:a.content!==void 0?a.content:" "}}if(H.test(n)===!0){const[a,c=E]=n.split("|");return{svg:!0,viewBox:c,nodes:a.split("&&").map(d=>{const[p,v,g]=d.split("@@");return u("path",{style:v,d:p,transform:g})})}}if(X.test(n)===!0)return{img:!0,src:n.substring(4)};if(Y.test(n)===!0){const[a,c=E]=n.split("|");return{svguse:!0,src:a.substring(7),viewBox:c}}let f=" ";const m=n.match(U);if(m!==null)o=S[m[1]](n);else if(J.test(n)===!0)o=n;else if(G.test(n)===!0)o=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${n.substring(3)}`;else if(w.test(n)===!0){o="notranslate material-symbols";const a=n.match(w);a!==null&&(n=n.substring(6),o+=C[a[1]]),f=n}else{o="notranslate material-icons";const a=n.match(D);a!==null&&(n=n.substring(2),o+=B[a[1]]),f=n}return{cls:o,content:f}});return()=>{const o={class:i.value,style:s.value,"aria-hidden":"true",role:"presentation"};return l.value.none===!0?u(e.tag,o,z(t.default)):l.value.img===!0?u("span",o,y(t.default,[u("img",{src:l.value.src})])):l.value.svg===!0?u("span",o,y(t.default,[u("svg",{viewBox:l.value.viewBox||"0 0 24 24"},l.value.nodes)])):l.value.svguse===!0?u("span",o,y(t.default,[u("svg",{viewBox:l.value.viewBox},[u("use",{"xlink:href":l.value.src})])])):(l.value.cls!==void 0&&(o.class+=" "+l.value.cls),u(e.tag,o,y(t.default,[l.value.content])))}}});function W(e,t){const r=e.style;for(const s in t)r[s]=t[s]}function se(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=N(e);if(t)return t.$el||t}function oe(e,t){if(e==null||e.contains(t)===!0)return!0;for(let r=e.nextElementSibling;r!==null;r=r.nextElementSibling)if(r.contains(t))return!0;return!1}function Z(e,t=250){let r=!1,s;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),s=e.apply(this,arguments)),s}}function q(e,t,r,s){r.modifiers.stop===!0&&K(e);const i=r.modifiers.color;let l=r.modifiers.center;l=l===!0||s===!0;const o=document.createElement("span"),n=document.createElement("span"),f=P(e),{left:m,top:a,width:c,height:d}=t.getBoundingClientRect(),p=Math.sqrt(c*c+d*d),v=p/2,g=`${(c-p)/2}px`,M=l?g:`${f.left-m-v}px`,$=`${(d-p)/2}px`,j=l?$:`${f.top-a-v}px`;n.className="q-ripple__inner",W(n,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${M},${j},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(n),t.appendChild(o);const x=()=>{o.remove(),clearTimeout(h)};r.abort.push(x);let h=setTimeout(()=>{n.classList.add("q-ripple__inner--enter"),n.style.transform=`translate3d(${g},${$},0) scale3d(1,1,1)`,n.style.opacity=.2,h=setTimeout(()=>{n.classList.remove("q-ripple__inner--enter"),n.classList.add("q-ripple__inner--leave"),n.style.opacity=0,h=setTimeout(()=>{o.remove(),r.abort.splice(r.abort.indexOf(x),1)},275)},250)},50)}function R(e,{modifiers:t,value:r,arg:s}){const i=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||s,keyCodes:[].concat(i.keyCodes||13)}}var ie=I({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const s={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(i){s.enabled===!0&&i.qSkipRipple!==!0&&i.type===(s.modifiers.early===!0?"pointerdown":"click")&&q(i,e,s,i.qKeyEvent===!0)},keystart:Z(i=>{s.enabled===!0&&i.qSkipRipple!==!0&&Q(i,s.modifiers.keyCodes)===!0&&i.type===`key${s.modifiers.early===!0?"down":"up"}`&&q(i,e,s,!0)},300)};R(s,t),e.__qripple=s,V(s,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&R(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),A(t,"main"),delete e._qripple)}});export{re as Q,ie as R,oe as a,W as c,se as g};
