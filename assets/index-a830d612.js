import{u as z,r as I}from"./use-route-dfd2aa0a.js";import{I as R}from"./index-b2bd89b1.js";import{L as v}from"./index-50f1a2e4.js";import{B as C}from"./constant-ee6e27d7.js";import{c as w,e as D,l as L}from"./use-translate-00443182.js";import{A as N,e as i}from"./vue-libs-dcfba01b.js";import{m as r,n as V,w as q}from"./with-install-dbef9c21.js";const[O,a]=w("button"),U=D({},I,{tag:r("button"),text:String,icon:String,type:r("default"),size:r("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:r("button"),loadingSize:V,loadingText:String,loadingType:String,iconPosition:r("left")}),_=N({name:O,props:U,emits:["click"],setup(e,{emit:f,slots:o}){const g=z(),m=()=>o.loading?o.loading():i(v,{size:e.loadingSize,type:e.loadingType,class:a("loading")},null),c=()=>{if(e.loading)return m();if(o.icon)return i("div",{class:a("icon")},[o.icon()]);if(e.icon)return i(R,{name:e.icon,class:a("icon"),classPrefix:e.iconPrefix},null)},b=()=>{let n;if(e.loading?n=e.loadingText:n=o.default?o.default():e.text,n)return i("span",{class:a("text")},[n])},B=()=>{const{color:n,plain:l}=e;if(n){const t={color:l?n:"white"};return l||(t.background=n),n.includes("gradient")?t.border=0:t.borderColor=n,t}},x=n=>{e.loading?L(n):e.disabled||(f("click",n),g())};return()=>{const{tag:n,type:l,size:t,block:y,round:S,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:p,iconPosition:u}=e,h=[a([l,t,{plain:P,block:y,round:S,square:k,loading:T,disabled:s,hairline:d}]),{[C]:d}];return i(n,{type:p,class:h,style:B(),disabled:s,onClick:x},{default:()=>[i("div",{class:a("content")},[u==="left"&&c(),b(),u==="right"&&c()])]})}}}),A=q(_),M=A;export{A as B,M as V};
