import{V as U}from"./index-ad9a477b.js";import{V as S}from"./index-517d7c97.js";import{u as R}from"./use-refs-041b217f.js";import{T as Q,a as W}from"./index-1bd301b4.js";import{I as E}from"./index-b2bd89b1.js";import{A as J,y as P,u as j,e as s,q as z,Q as Z,H as T,D as q,r as G,o as L,a as Y,w as h,C as l,c as M,f as I,d as _,t as ee,F as te}from"./vue-libs-dcfba01b.js";import{e as le,c as oe,X as ae,a as ne}from"./use-translate-00443182.js";import{b as se,t as B,m as ue,n as ie,w as re}from"./with-install-dbef9c21.js";import{H as de}from"./constant-ee6e27d7.js";import{d as me}from"./deep-clone-fb5087ba.js";import{u as ce}from"./index.esm-00641b52.js";import{a as pe,c as ve}from"./function-call-78e38fb1.js";import"./index-b3d98cd2.js";import"./use-route-dfd2aa0a.js";import"./use-id-2757e8c9.js";import"./use-expose-0d8d1cf9.js";import"./use-lock-scroll-089554f3.js";import"./use-touch-d246739c.js";import"./use-lazy-render-ac91aad5.js";import"./on-popup-reopen-f7cdcc35.js";import"./index-466fc7b5.js";import"./interceptor-85295833.js";import"./index-de8b7548.js";import"./index-3387156f.js";import"./index-73d705a7.js";import"./mount-component-1e01ff48.js";import"./index-50f1a2e4.js";function fe(m){return typeof m=="function"||Object.prototype.toString.call(m)==="[object Object]"&&!Z(m)}const[he,g,xe]=oe("cascader"),we={title:String,options:se(),closeable:B,swipeable:B,closeIcon:ue("cross"),showHeader:B,modelValue:ie,fieldNames:Object,placeholder:String,activeColor:String},be=J({name:he,props:we,emits:["close","change","finish","clickTab","update:modelValue"],setup(m,{slots:x,emit:k}){const o=P([]),p=P(0),[b,C]=R(),{text:v,value:d,children:V}=le({text:"text",value:"value",children:"children"},m.fieldNames),w=(a,n)=>{for(const r of a){if(r[d]===n)return[r];if(r[V]){const u=w(r[V],n);if(u)return[r,...u]}}},O=()=>{const{options:a,modelValue:n}=m;if(n!==void 0){const r=w(a,n);if(r){let u=a;o.value=r.map(c=>{const F={options:u,selected:c},A=u.find(H=>H[d]===c[d]);return A&&(u=A[V]),F}),u&&o.value.push({options:u,selected:null}),z(()=>{p.value=o.value.length-1});return}}o.value=[{options:a,selected:null}]},D=(a,n)=>{if(a.disabled)return;if(o.value[n].selected=a,o.value.length>n+1&&(o.value=o.value.slice(0,n+1)),a[V]){const c={options:a[V],selected:null};o.value[n+1]?o.value[n+1]=c:o.value.push(c),z(()=>{p.value++})}const r=o.value.map(c=>c.selected).filter(Boolean);k("update:modelValue",a[d]);const u={value:a[d],tabIndex:n,selectedOptions:r};k("change",u),a[V]||k("finish",u)},y=()=>k("close"),f=({name:a,title:n})=>k("clickTab",a,n),e=()=>m.showHeader?s("div",{class:g("header")},[s("h2",{class:g("title")},[x.title?x.title():m.title]),m.closeable?s(E,{name:m.closeIcon,class:[g("close-icon"),de],onClick:y},null):null]):null,i=(a,n,r)=>{const{disabled:u}=a,c=!!(n&&a[d]===n[d]),F=a.color||(c?m.activeColor:void 0),A=x.option?x.option({option:a,selected:c}):s("span",null,[a[v]]);return s("li",{ref:c?C(r):void 0,role:"menuitemradio",class:[g("option",{selected:c,disabled:u}),a.className],style:{color:F},tabindex:u?void 0:c?0:-1,"aria-checked":c,"aria-disabled":u||void 0,onClick:()=>D(a,r)},[A,c?s(E,{name:"success",class:g("selected-icon")},null):null])},t=(a,n,r)=>s("ul",{role:"menu",class:g("options")},[a.map(u=>i(u,n,r))]),$=(a,n)=>{const{options:r,selected:u}=a,c=m.placeholder||xe("select"),F=u?u[v]:c;return s(W,{title:F,titleClass:g("tab",{unselected:!u})},{default:()=>{var A,H;return[(A=x["options-top"])==null?void 0:A.call(x,{tabIndex:n}),t(r,u,n),(H=x["options-bottom"])==null?void 0:H.call(x,{tabIndex:n})]}})},X=()=>{let a;return s(Q,{active:p.value,"onUpdate:active":n=>p.value=n,shrink:!0,animated:!0,class:g("tabs"),color:m.activeColor,swipeable:m.swipeable,onClickTab:f},fe(a=o.value.map($))?a:{default:()=>[a]})},K=a=>{const n=a.parentElement;n&&(n.scrollTop=a.offsetTop-(n.offsetHeight-a.offsetHeight)/2)};return O(),j(p,a=>{const n=b.value[a];n&&K(n)}),j(()=>m.options,O,{deep:!0}),j(()=>m.modelValue,a=>{a!==void 0&&o.value.map(r=>{var u;return(u=r.selected)==null?void 0:u[d]}).includes(a)||O()}),()=>s("div",{class:g()},[e(),X()])}}),Ce=re(be),N=Ce,Ve=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100",children:[{text:"上城区",value:"330102"},{text:"下城区",value:"330103"},{text:"江干区",value:"330104"}]},{text:"宁波市",value:"330200",children:[{text:"海曙区",value:"330203"},{text:"江北区",value:"330205"},{text:"北仑区",value:"330206"}]},{text:"温州市",value:"330300",children:[{text:"鹿城区",value:"330302"},{text:"龙湾区",value:"330303"},{text:"瓯海区",value:"330304"}]}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100",children:[{text:"玄武区",value:"320102"},{text:"秦淮区",value:"320104"},{text:"建邺区",value:"320105"}]},{text:"无锡市",value:"320200",children:[{text:"锡山区",value:"320205"},{text:"惠山区",value:"320206"},{text:"滨湖区",value:"320211"}]},{text:"徐州市",value:"320300",children:[{text:"鼓楼区",value:"320302"},{text:"云龙区",value:"320303"},{text:"贾汪区",value:"320305"}]}]}],ge=[{text:"Zhejiang",value:"330000",children:[{text:"Hangzhou",value:"330100",children:[{text:"Shangcheng",value:"330102"},{text:"Xiacheng",value:"330103"},{text:"Jianggan",value:"330104"}]},{text:"Ningbo",value:"330200",children:[{text:"Haishu",value:"330203"},{text:"Jiangbei",value:"330205"},{text:"Beilun",value:"330206"}]},{text:"Wenzhou",value:"330300",children:[{text:"Lucheng",value:"330302"},{text:"Longwan",value:"330303"},{text:"Ouhai",value:"330304"}]}]},{text:"Jiangsu",value:"320000",children:[{text:"Nanjing",value:"320100",children:[{text:"Xuanwu",value:"320102"},{text:"Qinghuai",value:"320104"},{text:"Jianye",value:"320105"}]},{text:"Wuxi",value:"320200",children:[{text:"Xishan",value:"320205"},{text:"Huishan",value:"320206"},{text:"Binhu",value:"320211"}]},{text:"Xuzhou",value:"320300",children:[{text:"Gulou",value:"320302"},{text:"Yunlong",value:"320303"},{text:"Jiawang",value:"320305"}]}]}],ye={class:"current-level"},Me=J({__name:"index",setup(m){const x=ae(),k=ce(),o=ne({"zh-CN":{area:"地区",options:Ve,selectArea:"请选择地区",customColor:"自定义颜色",asyncOptions:"异步加载选项",asyncOptions1:[{text:"浙江省",value:"330000",children:[]}],asyncOptions2:[{text:"杭州市",value:"330100"},{text:"宁波市",value:"330200"}],currentLevel:f=>`当前为第 ${f} 级`,chinaAreaData:"中国省市区数据",customContent:"自定义选项上方内容",customFieldNames:"自定义字段名"},"en-US":{area:"Area",options:ge,selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",asyncOptions1:[{text:"Zhejiang",value:"330000",children:[]}],asyncOptions2:[{text:"Hangzhou",value:"330100"},{text:"Ningbo",value:"330200"}],currentLevel:f=>`Current level is ${f}`,chinaAreaData:"China Area Data",customContent:"Custom Content",customFieldNames:"Custom Field Names"}}),p=T({show:!1,value:"",result:""}),b=T({show:!1,value:"",result:""}),C=T({show:!1,value:void 0,result:""}),v=T({show:!1,value:void 0,result:"",options:o("asyncOptions1")}),d=T({show:!1,value:void 0,result:""}),V={text:"name",value:"code",children:"items"},w=T({show:!1,value:void 0,result:""}),O=q(()=>{const f=me(o("options")),e=i=>{"text"in i&&(i.name=i.text,delete i.text),"value"in i&&(i.code=i.value,delete i.value),"children"in i&&(i.items=i.children,delete i.children,i.items.forEach(e))};return f.forEach(e),f}),D=({value:f})=>{var e;f==="330000"&&((e=v.options[0].children)==null?void 0:e.length)===0&&(pe(o("loading")),setTimeout(()=>{v.options[0].children=o("asyncOptions2"),ve()},1e3))},y=(f,{value:e,selectedOptions:i})=>{const t=i.map($=>$.text||$.name).join("/");f.show=!1,f.value=e,f.result=t};return(f,e)=>{const i=G("demo-block");return L(),Y(te,null,[s(i,{card:"",title:l(o)("basicUsage")},{default:h(()=>[s(l(U),{modelValue:p.result,"onUpdate:modelValue":e[0]||(e[0]=t=>p.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[1]||(e[1]=t=>p.show=!0)},null,8,["modelValue","label","placeholder"]),s(l(S),{show:p.show,"onUpdate:show":e[5]||(e[5]=t=>p.show=t),round:"",teleport:"body",position:"bottom"},{default:h(()=>[s(l(N),{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=t=>p.value=t),title:l(o)("selectArea"),options:l(o)("options"),onClose:e[3]||(e[3]=t=>p.show=!1),onFinish:e[4]||(e[4]=t=>y(p,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),l(x)==="zh-CN"?(L(),M(i,{key:0,card:"",title:l(o)("chinaAreaData")},{default:h(()=>[s(l(U),{modelValue:b.result,"onUpdate:modelValue":e[6]||(e[6]=t=>b.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[7]||(e[7]=t=>b.show=!0)},null,8,["modelValue","label","placeholder"]),s(l(S),{show:b.show,"onUpdate:show":e[11]||(e[11]=t=>b.show=t),round:"",teleport:"body",position:"bottom"},{default:h(()=>[s(l(N),{modelValue:b.value,"onUpdate:modelValue":e[8]||(e[8]=t=>b.value=t),title:l(o)("selectArea"),options:l(k),onClose:e[9]||(e[9]=t=>b.show=!1),onFinish:e[10]||(e[10]=t=>y(b,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])):I("",!0),s(i,{card:"",title:l(o)("customColor")},{default:h(()=>[s(l(U),{modelValue:C.result,"onUpdate:modelValue":e[12]||(e[12]=t=>C.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[13]||(e[13]=t=>C.show=!0)},null,8,["modelValue","label","placeholder"]),s(l(S),{show:C.show,"onUpdate:show":e[17]||(e[17]=t=>C.show=t),round:"",teleport:"body",position:"bottom"},{default:h(()=>[s(l(N),{modelValue:C.value,"onUpdate:modelValue":e[14]||(e[14]=t=>C.value=t),title:l(o)("selectArea"),options:l(o)("options"),"active-color":"#ee0a24",onClose:e[15]||(e[15]=t=>C.show=!1),onFinish:e[16]||(e[16]=t=>y(C,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(i,{card:"",title:l(o)("asyncOptions")},{default:h(()=>[s(l(U),{modelValue:v.result,"onUpdate:modelValue":e[18]||(e[18]=t=>v.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[19]||(e[19]=t=>v.show=!0)},null,8,["modelValue","label","placeholder"]),s(l(S),{show:v.show,"onUpdate:show":e[23]||(e[23]=t=>v.show=t),round:"",teleport:"body",position:"bottom"},{default:h(()=>[s(l(N),{modelValue:v.value,"onUpdate:modelValue":e[20]||(e[20]=t=>v.value=t),title:l(o)("selectArea"),options:v.options,onClose:e[21]||(e[21]=t=>v.show=!1),onChange:D,onFinish:e[22]||(e[22]=t=>y(v,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(i,{card:"",title:l(o)("customFieldNames")},{default:h(()=>[s(l(U),{modelValue:d.result,"onUpdate:modelValue":e[24]||(e[24]=t=>d.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[25]||(e[25]=t=>d.show=!0)},null,8,["modelValue","label","placeholder"]),s(l(S),{show:d.show,"onUpdate:show":e[29]||(e[29]=t=>d.show=t),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:h(()=>[s(l(N),{modelValue:d.value,"onUpdate:modelValue":e[26]||(e[26]=t=>d.value=t),title:l(o)("selectArea"),options:O.value,"field-names":V,onClose:e[27]||(e[27]=t=>d.show=!1),onFinish:e[28]||(e[28]=t=>y(d,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(i,{card:"",title:l(o)("customContent")},{default:h(()=>[s(l(U),{modelValue:w.result,"onUpdate:modelValue":e[30]||(e[30]=t=>w.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[31]||(e[31]=t=>w.show=!0)},null,8,["modelValue","label","placeholder"]),s(l(S),{show:w.show,"onUpdate:show":e[35]||(e[35]=t=>w.show=t),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:h(()=>[s(l(N),{modelValue:w.value,"onUpdate:modelValue":e[32]||(e[32]=t=>w.value=t),title:l(o)("selectArea"),options:O.value,"field-names":V,onClose:e[33]||(e[33]=t=>w.show=!1),onFinish:e[34]||(e[34]=t=>y(w,t))},{"options-top":h(({tabIndex:t})=>[_("div",ye,ee(l(o)("currentLevel",t+1)),1)]),_:1},8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{Me as default};
