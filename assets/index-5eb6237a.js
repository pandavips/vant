import{A as c,e as r,F as s,B as m}from"./vue-libs-dcfba01b.js";import{c as u}from"./use-translate-00443182.js";import{t as d,w as p}from"./with-install-dbef9c21.js";import{b as f}from"./constant-ee6e27d7.js";const[G,a]=u("cell-group"),b={title:String,inset:Boolean,border:d},g=c({name:G,inheritAttrs:!1,props:b,setup(e,{slots:t,attrs:o}){const n=()=>{var i;return r("div",m({class:[a({inset:e.inset}),{[f]:e.border&&!e.inset}]},o),[(i=t.default)==null?void 0:i.call(t)])},l=()=>r("div",{class:a("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(s,null,[l(),n()]):n()}}),B=p(g),h=B;export{h as V};
