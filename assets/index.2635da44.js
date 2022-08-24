import{c as W,o as M,n as P,K as q,S as A,r as _,i as z,a as L}from"./use-translate.4764287f.js";import{c as y,w as U}from"./with-install.bb994bce.js";import{z as g,C as D,H as $,x as j,j as H,v as K,e as t,r as O,o as X,a as G,w as r,B as e,h as E,t as b,F as J}from"./vue-libs.7ad34eae.js";import{u as Q}from"./use-expose.6911a823.js";import{o as Y}from"./on-popup-reopen.c53e1654.js";import{I as v}from"./index.de1d0b70.js";import{V as Z,b as x}from"./index.2e2282c8.js";import"./use-touch.79e2b006.js";const[ee,m]=W("notice-bar"),te={text:String,mode:String,color:String,delay:y(1),speed:y(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}},ue=g({name:ee,props:te,emits:["close","replay"],setup(o,{emit:u,slots:c}){let i=0,l=0,B;const F=D(),h=D(),a=$({show:!0,offset:0,duration:0}),S=()=>{if(c["left-icon"])return c["left-icon"]();if(o.leftIcon)return t(v,{class:m("left-icon"),name:o.leftIcon},null)},k=()=>{if(o.mode==="closeable")return"cross";if(o.mode==="link")return"arrow"},I=n=>{o.mode==="closeable"&&(a.show=!1,u("close",n))},R=()=>{if(c["right-icon"])return c["right-icon"]();const n=k();if(n)return t(v,{name:n,class:m("right-icon"),onClick:I},null)},N=()=>{a.offset=i,a.duration=0,q(()=>{A(()=>{a.offset=-l,a.duration=(l+i)/+o.speed,u("replay")})})},T=()=>{const n=o.scrollable===!1&&!o.wrapable,d={transform:a.offset?`translateX(${a.offset}px)`:"",transitionDuration:`${a.duration}s`};return t("div",{ref:F,role:"marquee",class:m("wrap")},[t("div",{ref:h,style:d,class:[m("content"),{"van-ellipsis":n}],onTransitionend:N},[c.default?c.default():o.text])])},f=()=>{const{delay:n,speed:d,scrollable:p}=o,V=z(n)?+n*1e3:0;i=0,l=0,a.offset=0,a.duration=0,clearTimeout(B),B=setTimeout(()=>{if(!F.value||!h.value||p===!1)return;const C=_(F).width,w=_(h).width;(p||w>C)&&A(()=>{i=C,l=w,a.offset=-l,a.duration=l/+d})},V)};return Y(f),M(f),P("pageshow",f),Q({reset:f}),j(()=>[o.text,o.scrollable],f),()=>{const{color:n,wrapable:d,background:p}=o;return H(t("div",{role:"alert",class:m({wrapable:d}),style:{color:n,background:p}},[S(),T(),R()]),[[K,a.show]])}}}),oe=U(ue),s=oe,de=g({__name:"index",setup(o){const u=L({"zh-CN":{mode:"\u901A\u77E5\u680F\u6A21\u5F0F",text1:"\u65E0\u8BBA\u6211\u4EEC\u80FD\u6D3B\u591A\u4E45\uFF0C\u6211\u4EEC\u80FD\u591F\u4EAB\u53D7\u7684\u53EA\u6709\u65E0\u6CD5\u5206\u5272\u7684\u6B64\u523B\uFF0C\u6B64\u5916\u522B\u65E0\u5176\u4ED6\u3002",text2:"\u4E0D\u4F1A\u56DE\u5934\u7684\u4E1C\u897F\u6709\u56DB\u4EF6\uFF1A\u8BF4\u51FA\u53E3\u7684\u8BDD\u3001\u79BB\u5F26\u7684\u7BAD\u3001\u901D\u53BB\u7684\u751F\u6D3B\u548C\u5931\u53BB\u7684\u673A\u4F1A\u3002",haiku:"\u7C73\u888B\u867D\u7A7A\u2014\u2014\u6A31\u82B1\u5F00\u54C9\uFF01",poetry1:"\u660E\u6708\u76F4\u5165\uFF0C\u65E0\u5FC3\u53EF\u731C\u3002",poetry2:"\u4ED9\u4EBA\u629A\u6211\u9876\uFF0C\u7ED3\u53D1\u53D7\u957F\u751F\u3002",poetry3:"\u4ECA\u4EBA\u4E0D\u89C1\u53E4\u65F6\u6708\uFF0C\u4ECA\u6708\u66FE\u7ECF\u7167\u53E4\u4EBA\u3002",wrapable:"\u591A\u884C\u5C55\u793A",scrollable:"\u6EDA\u52A8\u64AD\u653E",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",verticalScroll:"\u5782\u76F4\u6EDA\u52A8"},"en-US":{mode:"Mode",text1:"Technology is the common soul of the people who developed it.",text2:"Technology is the common soul of the people who developed it.",haiku:"Short Content",poetry1:"Content 1",poetry2:"Content 2",poetry3:"Content 3",wrapable:"Wrapable",customStyle:"Custom Style",scrollable:"Scrollable",verticalScroll:"Vertical Scroll"}});return(c,i)=>{const l=O("demo-block");return X(),G(J,null,[t(l,{title:e(u)("basicUsage")},{default:r(()=>[t(e(s),{text:e(u)("text1"),scrollable:"","left-icon":"volume-o"},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("scrollable")},{default:r(()=>[t(e(s),{scrollable:"",text:e(u)("haiku")},null,8,["text"]),t(e(s),{scrollable:!1,text:e(u)("text2")},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("wrapable")},{default:r(()=>[t(e(s),{wrapable:"",scrollable:!1,text:e(u)("text2")},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("mode")},{default:r(()=>[t(e(s),{mode:"closeable",text:e(u)("haiku")},null,8,["text"]),t(e(s),{mode:"link",text:e(u)("haiku")},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("customStyle")},{default:r(()=>[t(e(s),{text:e(u)("haiku"),color:"#1989fa",background:"#ecf9ff","left-icon":"info-o"},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("verticalScroll")},{default:r(()=>[t(e(s),{"left-icon":"volume-o",scrollable:!1},{default:r(()=>[t(e(Z),{vertical:"",class:"notice-swipe",autoplay:3e3,touchable:!1,"show-indicators":!1},{default:r(()=>[t(e(x),null,{default:r(()=>[E(b(e(u)("poetry1")),1)]),_:1}),t(e(x),null,{default:r(()=>[E(b(e(u)("poetry2")),1)]),_:1}),t(e(x),null,{default:r(()=>[E(b(e(u)("poetry3")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])],64)}}});export{de as default};
