import{c,e as u,q as d,h as m}from"./use-translate.4764287f.js";import{n as r,m as p,w as g}from"./with-install.bb994bce.js";import{e as n,z as S,D as f}from"./vue-libs.7ad34eae.js";const[x,a]=c("loading"),y=Array(12).fill(null).map((e,o)=>n("i",{class:a("line",String(o+1))},null)),v=n("svg",{class:a("circular"),viewBox:"25 25 50 50"},[n("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),z={size:r,type:p("circular"),color:String,vertical:Boolean,textSize:r,textColor:String},C=S({name:x,props:z,setup(e,{slots:o}){const i=f(()=>u({color:e.color},d(e.size))),l=()=>{var t;if(o.default)return n("span",{class:a("text"),style:{fontSize:m(e.textSize),color:(t=e.textColor)!=null?t:e.color}},[o.default()])};return()=>{const{type:t,vertical:s}=e;return n("div",{class:a([t,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[n("span",{class:a("spinner",t),style:i.value},[t==="spinner"?y:v]),l()])}}}),L=g(C),V=L;export{L,V};
