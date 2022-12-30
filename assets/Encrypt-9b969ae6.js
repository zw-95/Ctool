import{u as V,i as k}from"./action-20425d74.js";import{c as b,a as w,T as i}from"./index-e2379d3d.js";import{r as v}from"./cryptoJS-6fb0b150.js";import{a4 as E,b0 as I,Q as A,U as B,b1 as a,aG as r,ay as C,a2 as u,x as o}from"./history-d3ff5000.js";import"./_commonjsHelpers-87174ba5.js";import"./index-cc134824.js";import"./index-dde10004.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-d2112d3c.js";const S=E({__name:"Encrypt",async setup(H){let p,s;const l={key:""},t=V(([p,s]=I(()=>k({input:b("text"),option:l,output:w("base64")})),p=await p,s(),p)),m=A(()=>{if(t.current.input.text.isEmpty()||t.current.option.key==="")return i.empty();if(t.current.input.text.isError())return t.current.input.text;try{if(!t.current.input.text.isText())throw new Error("input content must text / text file");return i.fromBase64(v.encrypt(t.current.input.text.toBase64(),t.current.option))}catch(c){return i.fromError($error(c))}});return(c,e)=>{const d=r("TextInput"),x=r("HelpTip"),f=r("Input"),_=r("TextOutput"),y=r("Align"),g=r("HeightResize");return C(),B(g,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:a(({small:T,large:h})=>[u(y,{direction:"vertical"},{default:a(()=>[u(d,{modelValue:o(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=n=>o(t).current.input=n),height:T,upload:"file",encoding:""},null,8,["modelValue","height"]),u(f,{class:"ctool-page-option",modelValue:o(t).current.option.key,"onUpdate:modelValue":e[1]||(e[1]=n=>o(t).current.option.key=n),label:"key"},{suffix:a(()=>[u(x,{link:"https://github.com/brix/crypto-js"})]),_:1},8,["modelValue"]),u(_,{modelValue:o(t).current.output,"onUpdate:modelValue":e[2]||(e[2]=n=>o(t).current.output=n),allow:["base64","hex"],content:m.value,height:h,onSuccess:e[3]||(e[3]=n=>o(t).save())},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{S as default};
