import{_ as I,r as l,E as r,N as d,M as t,I as g,A as m,a8 as c}from"./index.382d2c7a.js";const z={setup(){const n=l(null),a=l(null),s=l(300),e=l(300);return{originalImage:n,resizedImage:a,resizeWidth:s,resizeHeight:e,handleFileUpload:i=>{const o=i.target.files[0];o&&(n.value=URL.createObjectURL(o))},resizeImage:()=>{if(!n.value)return;const i=new Image;i.src=n.value,i.onload=()=>{const o=document.createElement("canvas"),u=o.getContext("2d");o.width=s.value,o.height=e.value,u.drawImage(i,0,0,s.value,e.value),a.value=o.toDataURL("image/jpeg")}}}}},v={id:"app"},f=t("h1",null,"Image Resizer",-1),p={key:0,class:"image-preview"},w=t("h3",null,"Original Image:",-1),R=["src"],U={key:1,class:"image-preview"},y=t("h3",null,"Resized Image:",-1),b=["src"],x=["href"],k=t("button",null,"Download Resized Image",-1),C=[k],F={key:2,class:"resize-controls"},H=t("label",{for:"width"},"Width:",-1),V=t("label",{for:"height"},"Height:",-1);function W(n,a,s,e,_,h){return r(),d("div",v,[f,t("input",{type:"file",accept:"image/*",onChange:a[0]||(a[0]=(...i)=>e.handleFileUpload&&e.handleFileUpload(...i))},null,32),e.originalImage?(r(),d("div",p,[w,t("img",{src:e.originalImage,alt:"Original Image"},null,8,R)])):g("",!0),e.resizedImage?(r(),d("div",U,[y,t("img",{src:e.resizedImage,alt:"Resized Image"},null,8,b),t("a",{href:e.resizedImage,download:"resized-image.jpg"},C,8,x)])):g("",!0),e.originalImage?(r(),d("div",F,[H,m(t("input",{type:"number",id:"width","onUpdate:modelValue":a[1]||(a[1]=i=>e.resizeWidth=i)},null,512),[[c,e.resizeWidth]]),V,m(t("input",{type:"number",id:"height","onUpdate:modelValue":a[2]||(a[2]=i=>e.resizeHeight=i)},null,512),[[c,e.resizeHeight]]),t("button",{onClick:a[3]||(a[3]=(...i)=>e.resizeImage&&e.resizeImage(...i))},"Resize Image")])):g("",!0)])}var B=I(z,[["render",W]]);export{B as default};
