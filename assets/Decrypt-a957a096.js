import{u as h,i as k}from"./action-20425d74.js";import{c as b,a as v,T as i}from"./index-e2379d3d.js";import{r as w}from"./cryptoJS-6fb0b150.js";import{a4 as I,b0 as A,Q as B,U as C,b1 as a,aG as r,ay as H,a2 as p,x as o}from"./history-d3ff5000.js";import"./_commonjsHelpers-87174ba5.js";import"./index-cc134824.js";import"./index-dde10004.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-d2112d3c.js";const Q=I({__name:"Decrypt",async setup(U){let u,s;const l={key:""},t=h(([u,s]=A(()=>k({input:b("base64"),option:l,output:v("text")})),u=await u,s(),u)),m=B(()=>{if(t.current.input.text.isEmpty()||t.current.option.key==="")return i.empty();try{return t.current.input.text.isError()?t.current.input.text:i.fromBase64(w.decrypt(t.current.input.text.toBase64(),t.current.option))}catch(c){return i.fromError($error(c))}});return(c,e)=>{const d=r("TextInput"),x=r("HelpTip"),_=r("Input"),f=r("TextOutput"),y=r("Align"),g=r("HeightResize");return H(),C(g,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:a(({small:T,large:V})=>[p(y,{direction:"vertical"},{default:a(()=>[p(d,{modelValue:o(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=n=>o(t).current.input=n),allow:["base64","hex"],height:T},null,8,["modelValue","height"]),p(_,{class:"ctool-page-option",modelValue:o(t).current.option.key,"onUpdate:modelValue":e[1]||(e[1]=n=>o(t).current.option.key=n),label:"key"},{suffix:a(()=>[p(x,{link:"https://github.com/brix/crypto-js"})]),_:1},8,["modelValue"]),p(f,{modelValue:o(t).current.output,"onUpdate:modelValue":e[2]||(e[2]=n=>o(t).current.output=n),allow:["text"],content:m.value,height:V,onSuccess:e[3]||(e[3]=n=>o(t).save()),encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{Q as default};
