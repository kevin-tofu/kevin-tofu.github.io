import{_ as r,D as o,r as s,c as l,E as u,N as p,A as d,a8 as x,M as n,K as i}from"./index.382d2c7a.js";const c=o({name:"TextCounter",setup(){const e=s(""),t=l(()=>e.value.length);return{text:e,textLength:t}}});function _(e,t,f,g,m,v){return u(),p("div",null,[d(n("textarea",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.text=a),placeholder:"Input Text Here..."},null,512),[[x,e.text]]),n("p",null,"Text Length: "+i(e.textLength),1)])}var T=r(c,[["render",_]]);export{T as default};
